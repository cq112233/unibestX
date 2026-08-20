// UTS → TS Vue language plugin (self-contained, works with Vue - Official >= 2.1)
// 依赖仅来自 Volar 注入的 ctx.modules：@vue/compiler-dom（所有版本都有）
'use strict';

function createSfcParser(CompilerDOM) {
  function parse(source) {
    const errors = [];
    const ast = CompilerDOM.parse(source, {
      isNativeTag: () => true,
      isPreTag: () => true,
      parseMode: 'sfc',
      onError: e => { errors.push(e); },
      comments: true,
    });
    const descriptor = {
      filename: 'anonymous.vue',
      source,
      comments: [],
      template: null,
      script: null,
      scriptSetup: null,
      styles: [],
      customBlocks: [],
      cssVars: [],
      slotted: false,
      shouldForceReload: () => false,
    };
    for (const node of ast.children) {
      if (node.type === CompilerDOM.NodeTypes.COMMENT) {
        descriptor.comments.push(node.content);
        continue;
      }
      if (node.type !== CompilerDOM.NodeTypes.ELEMENT) {
        continue;
      }
      switch (node.tag) {
        case 'template':
          descriptor.template = createBlock(node, source);
          break;
        case 'script': {
          const block = createBlock(node, source);
          if (block.setup && !descriptor.scriptSetup) {
            descriptor.scriptSetup = block;
            break;
          }
          if (!block.setup && !descriptor.script) {
            descriptor.script = block;
            break;
          }
          break;
        }
        case 'style':
          descriptor.styles.push(createBlock(node, source));
          break;
        default:
          descriptor.customBlocks.push(createBlock(node, source));
          break;
      }
    }
    return { descriptor, errors };
  }

  function createBlock(node, source) {
    const type = node.tag;
    let { start, end } = node.loc;
    let content = '';
    if (node.children.length) {
      start = node.children[0].loc.start;
      end = node.children[node.children.length - 1].loc.end;
      content = source.slice(start.offset, end.offset);
    }
    else {
      const offset = node.loc.source.indexOf('</');
      if (offset > -1) {
        start = {
          line: start.line,
          column: start.column + offset,
          offset: start.offset + offset,
        };
      }
      end = { ...start };
    }
    const attrs = {};
    const block = { type, content, loc: { source: content, start, end }, attrs };
    for (const p of node.props) {
      if (p.type === CompilerDOM.NodeTypes.ATTRIBUTE) {
        attrs[p.name] = p.value ? p.value.content || true : true;
        if (p.name === 'lang') {
          block.lang = p.value && p.value.content;
        }
        else if (p.name === 'src') {
          block.__src = parseAttr(p, node);
        }
        else if (block.type === 'script') {
          if (p.name === 'vapor') {
            block.setup = attrs[p.name];
            block.__generic = true;
          }
          else if (p.name === 'setup') {
            block.setup = attrs[p.name];
          }
          else if (p.name === 'generic') {
            block.__generic = parseAttr(p, node);
          }
        }
        else if (block.type === 'style') {
          if (p.name === 'scoped') {
            block.scoped = true;
          }
          else if (p.name === 'module') {
            block.__module = parseAttr(p, node);
          }
        }
      }
    }
    return block;
  }

  function parseAttr(p, node) {
    if (!p.value) {
      return true;
    }
    const v = p.value;
    const content = v.content;
    const offset = v.loc.start.offset - node.loc.start.offset;
    return { text: content, offset };
  }

  return parse;
}

module.exports = ({ modules }) => {
  return {
    name: 'uts-to-ts',
    version: 2.1,
    order: -1,

    getLanguageId(fileName) {
      if (fileName.endsWith('.uvue')) {
        return 'vue';
      }
    },

    isValidFile(_fileName, languageId) {
      return languageId === 'vue';
    },

    parseSFC2(_fileName, languageId, content) {
      if (languageId !== 'vue') {
        return;
      }
      const CompilerDOM = modules['@vue/compiler-dom'];
      const parse = createSfcParser(CompilerDOM);
      const sfc = parse(content);
      for (const error of sfc.errors) {
        // 对齐官方 file-vue 插件：<template> 缺少闭合标签时的容错
        if (
          'code' in error && error.code === 24 && sfc.descriptor.template
          && error.loc && error.loc.start.line === sfc.descriptor.template.loc.start.line
        ) {
          const template = sfc.descriptor.template;
          const templateText = template.content;
          const endTagOffset = templateText.lastIndexOf('<');
          const endTagText = templateText.slice(endTagOffset).trimEnd();
          if ('</template>'.startsWith(endTagText)) {
            template.loc.end.offset = template.loc.start.offset + endTagOffset;
            template.content = templateText.slice(0, endTagOffset);
          }
        }
      }
      for (const block of [sfc.descriptor.script, sfc.descriptor.scriptSetup]) {
        if (block && block.lang === 'uts') {
          block.lang = 'ts';
          block.attrs.lang = 'ts';
        }
      }
      return sfc;
    },
  };
};
