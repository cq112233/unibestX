"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-parse"
}, { __name: "up-parse", props: {
  containerStyle: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    default: ""
  },
  copyLink: {
    type: Boolean,
    default: false
  },
  domain: {
    type: String,
    default: ""
  },
  errorImg: {
    type: String,
    default: ""
  },
  lazyLoad: {
    type: Boolean,
    default: false
  },
  loadingImg: {
    type: String,
    default: ""
  },
  pauseVideo: {
    type: Boolean,
    default: false
  },
  previewImg: {
    type: Boolean,
    default: true
  },
  scrollTable: {
    type: Boolean,
    default: false
  },
  selectable: {
    type: Boolean,
    default: false
  },
  setTitle: {
    type: Boolean,
    default: true
  },
  showImgMenu: {
    type: Boolean,
    default: true
  },
  tagStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  useAnchor: {
    type: Boolean,
    default: false
  }
}, emits: ["load", "ready", "imgTap", "linkTap", "play", "error", "tap", "click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const blockTags = ["address", "article", "aside", "blockquote", "body", "caption", "center", "dd", "div", "dl", "dt", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul"];
  const voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
  const ignoreTags = ["area", "base", "canvas", "frame", "head", "iframe", "input", "link", "map", "meta", "param", "script", "style", "textarea", "track", "wbr"];
  function makeNode(name) {
    return new common_vendor.UTSJSONObject({
      type: "node",
      name,
      attrs: new common_vendor.UTSJSONObject({}),
      children: []
    });
  }
  function makeText(text) {
    return new common_vendor.UTSJSONObject({
      type: "text",
      text
    });
  }
  function hasString(list, value) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] == value)
        return true;
    }
    return false;
  }
  function decodeHtml(value) {
    return value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
  }
  function textValue(value = null) {
    return value == null ? "" : value.toString();
  }
  function boolValue(value = null) {
    return value == true || value == "true";
  }
  function normalizeSpace(value, keepSpace) {
    if (keepSpace)
      return value;
    return value.replace(/\s+/g, " ");
  }
  function readAttr(source, name) {
    const doublePattern = new RegExp(name + '\\s*=\\s*"([^"]*)"', "i");
    const doubleMatch = source.match(doublePattern);
    if (doubleMatch != null && doubleMatch.length > 1) {
      const value = doubleMatch[1];
      return decodeHtml(value == null ? "" : value);
    }
    const singlePattern = new RegExp(name + "\\s*=\\s*'([^']*)'", "i");
    const singleMatch = source.match(singlePattern);
    if (singleMatch != null && singleMatch.length > 1) {
      const value = singleMatch[1];
      return decodeHtml(value == null ? "" : value);
    }
    const barePattern = new RegExp(name + `\\s*=\\s*([^\\s"'>/]+)`, "i");
    const bareMatch = source.match(barePattern);
    if (bareMatch != null && bareMatch.length > 1) {
      const value = bareMatch[1];
      return decodeHtml(value == null ? "" : value);
    }
    return "";
  }
  function firstWord(value) {
    const trimmed = value.trim();
    const space = trimmed.search(/\s/);
    return (space == -1 ? trimmed : trimmed.substring(0, space)).toLowerCase();
  }
  function appendChild(stack, roots, node) {
    if (stack.length == 0) {
      roots.push(node);
      return null;
    }
    const parent = stack[stack.length - 1];
    const children = parent["children"];
    children.push(node);
  }
  function collectText(nodes2) {
    let result = "";
    for (let i = 0; i < nodes2.length; i++) {
      const node = nodes2[i];
      const type = textValue(node["type"]);
      if (type == "text") {
        result += textValue(node["text"]);
      } else {
        const name = textValue(node["name"]);
        if (name == "br") {
          result += "\n";
        }
        const children = node["children"];
        if (children != null) {
          const isBlock = hasString(blockTags, name);
          if (isBlock && result.length > 0 && !result.endsWith("\n"))
            result += "\n";
          result += collectText(children);
          if (isBlock && result.length > 0 && !result.endsWith("\n"))
            result += "\n";
        }
      }
    }
    return result;
  }
  function findNodeByAttr(nodes2, name, attr, value) {
    for (let i = 0; i < nodes2.length; i++) {
      const node = nodes2[i];
      if (textValue(node["name"]) == name) {
        const attrs = node["attrs"];
        if (attrs != null && textValue(attrs[attr]) == value) {
          return node;
        }
      }
      const children = node["children"];
      if (children != null) {
        const result = findNodeByAttr(children, name, attr, value);
        if (result != null)
          return result;
      }
    }
    return null;
  }
  function cloneAttrs(node = null) {
    if (node == null)
      return new common_vendor.UTSJSONObject({});
    const attrs = node["attrs"];
    if (attrs == null)
      return new common_vendor.UTSJSONObject({});
    const cloned = new common_vendor.UTSJSONObject({});
    const keys = common_vendor.UTSJSONObject.keys(attrs);
    for (let i = 0; i < keys.length; i++) {
      cloned[keys[i]] = attrs[keys[i]];
    }
    return cloned;
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const nodes = common_vendor.ref([]);
  const imgList = common_vendor.ref([]);
  const selectableValue = common_vendor.computed(() => {
    return boolValue(props.selectable);
  });
  const previewImgValue = common_vendor.computed(() => {
    return boolValue(props.previewImg);
  });
  const copyLinkValue = common_vendor.computed(() => {
    return boolValue(props.copyLink);
  });
  common_vendor.computed(() => {
    return boolValue(props.showImgMenu);
  });
  const rootClass = common_vendor.computed(() => {
    return (selectableValue.value ? "_select " : "") + "_root";
  });
  function getDefaultStyle(name) {
    const custom = props.tagStyle;
    if (custom != null && custom[name] != null) {
      return textValue(custom[name]);
    }
    if (name == "h1")
      return "font-size:2em;font-weight:bold;margin:0.67em 0";
    if (name == "h2")
      return "font-size:1.5em;font-weight:bold;margin:0.83em 0";
    if (name == "h3")
      return "font-size:1.17em;font-weight:bold;margin:1em 0";
    if (name == "h4" || name == "h5" || name == "h6")
      return "font-weight:bold;margin:1em 0";
    if (name == "p")
      return "margin:0.5em 0";
    if (name == "blockquote")
      return "border-left:4px solid #dcdfe6;padding-left:10px;color:#606266";
    if (name == "code")
      return "font-family:monospace;background-color:#f5f7fa;padding:2px 4px";
    if (name == "pre")
      return "font-family:monospace;white-space:pre-wrap;background-color:#f5f7fa;padding:8px;overflow:auto";
    if (name == "table")
      return "border-collapse:collapse;width:100%";
    if (name == "th" || name == "td")
      return "border:1px solid #ebeef5;padding:6px";
    return "";
  }
  function resolveUrl(url) {
    if (url.startsWith("//")) {
      return "https:" + url;
    }
    if (url.startsWith("/") && textValue(props.domain).length > 0) {
      return textValue(props.domain) + url;
    }
    if (!url.includes("://") && !url.startsWith("#") && textValue(props.domain).length > 0) {
      return textValue(props.domain) + "/" + url;
    }
    return url;
  }
  function applyAttrs(node, raw) {
    const name = textValue(node["name"]);
    const attrs = new common_vendor.UTSJSONObject({});
    const id = readAttr(raw, "id");
    const klass = readAttr(raw, "class");
    const style = readAttr(raw, "style");
    const href = readAttr(raw, "href");
    const src = readAttr(raw, "src");
    const alt = readAttr(raw, "alt");
    if (id.length > 0)
      attrs["id"] = id;
    if (klass.length > 0)
      attrs["class"] = klass;
    const tagStyle = getDefaultStyle(name);
    const mergedStyle = tagStyle + (style.length > 0 && tagStyle.length > 0 ? ";" : "") + style;
    if (mergedStyle.length > 0)
      attrs["style"] = mergedStyle;
    if (href.length > 0)
      attrs["href"] = resolveUrl(href);
    if (src.length > 0)
      attrs["src"] = resolveUrl(src);
    if (alt.length > 0)
      attrs["alt"] = alt;
    if (name == "img" && textValue(attrs["src"]).length > 0) {
      attrs["i"] = imgList.value.length;
      imgList.value.push(textValue(attrs["src"]));
    }
    if (name == "title" && boolValue(props.setTitle)) {
      node["__title"] = true;
    }
    node["attrs"] = attrs;
  }
  function appendText(text, stack, roots) {
    const keepSpace = stack.length > 0 && textValue(stack[stack.length - 1]["name"]) == "pre";
    const normalized = normalizeSpace(decodeHtml(text), keepSpace);
    if (normalized.length == 0 || !keepSpace && normalized == " ")
      return null;
    appendChild(stack, roots, makeText(normalized));
  }
  function closeTag(name, stack) {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (textValue(stack[i]["name"]) == name) {
        while (stack.length > i)
          common_vendor.UTS.arrayPop(stack);
        return null;
      }
    }
  }
  function parseContent(content) {
    imgList.value = [];
    const roots = [];
    const stack = [];
    let index = 0;
    let skipTag = "";
    while (index < content.length) {
      const lt = content.indexOf("<", index);
      if (lt == -1) {
        appendText(content.substring(index), stack, roots);
        break;
      }
      if (lt > index) {
        appendText(content.substring(index, lt), stack, roots);
      }
      const gt = content.indexOf(">", lt + 1);
      if (gt == -1) {
        appendText(content.substring(lt), stack, roots);
        break;
      }
      const raw = content.substring(lt + 1, gt);
      const trimmed = raw.trim();
      if (trimmed.startsWith("!--")) {
        index = gt + 1;
        continue;
      }
      if (trimmed.startsWith("/")) {
        const closeName = firstWord(trimmed.substring(1));
        if (skipTag == closeName) {
          skipTag = "";
        } else {
          closeTag(closeName, stack);
        }
        index = gt + 1;
        continue;
      }
      if (skipTag.length > 0) {
        index = gt + 1;
        continue;
      }
      const name = firstWord(trimmed);
      if (name.length == 0) {
        index = gt + 1;
        continue;
      }
      if (name == "script" || name == "style") {
        skipTag = name;
        index = gt + 1;
        continue;
      }
      if (hasString(ignoreTags, name) && name != "img") {
        index = gt + 1;
        continue;
      }
      const node = makeNode(name);
      applyAttrs(node, trimmed);
      appendChild(stack, roots, node);
      if (!trimmed.endsWith("/") && !hasString(voidTags, name)) {
        stack.push(node);
      }
      index = gt + 1;
    }
    while (stack.length > 0) {
      common_vendor.UTS.arrayPop(stack);
    }
    return roots;
  }
  function getRect() {
    return new Promise((resolve, reject) => {
      common_vendor.index.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select("#_root").boundingClientRect().exec((res) => {
        if (res.length > 0 && res[0] != null) {
          resolve(res[0]);
        } else {
          reject(new Error("Root label not found"));
        }
      });
    });
  }
  function navigateTo(id, offset = 0) {
    return new Promise((resolve, reject) => {
      if (!boolValue(props.useAnchor)) {
        reject(new Error("Anchor is disabled"));
        return null;
      }
      const selector = id.length > 0 ? "#_root #" + id : "#_root";
      common_vendor.index.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(selector).boundingClientRect().exec((res) => {
        if (res.length == 0 || res[0] == null) {
          reject(new Error("Label not found"));
          return null;
        }
        const rect = res[0];
        const top = parseFloat(textValue(rect["top"]));
        common_vendor.index.pageScrollTo(new common_vendor.UTSJSONObject({
          scrollTop: (isNaN(top) ? 0 : top) + offset,
          duration: 300
        }));
        resolve();
      });
    });
  }
  function setContent(content, append = false) {
    const parsed = parseContent(content);
    nodes.value = append ? nodes.value.concat(parsed) : parsed;
    common_vendor.nextTick$1(() => {
      emit("load");
      getRect().then((rect = null) => {
        emit("ready", rect);
      }).catch(() => {
        emit("ready", new common_vendor.UTSJSONObject({}));
      });
    });
  }
  function getText(nList = null) {
    return collectText(nList == null ? nodes.value : nList);
  }
  function handleImgTap(attrs) {
    emit("imgTap", attrs);
    if (previewImgValue.value && imgList.value.length > 0) {
      const current = parseInt(textValue(attrs["i"]));
      common_vendor.index.previewImage({
        current: isNaN(current) ? 0 : current,
        urls: imgList.value
      });
    }
  }
  function handleLinkTap(attrs) {
    emit("linkTap", attrs);
    const href = textValue(attrs["href"]);
    if (href.length == 0)
      return null;
    if (href.startsWith("#")) {
      navigateTo(href.substring(1)).catch(() => {
      });
    } else if (href.includes("://")) {
      if (copyLinkValue.value) {
        common_vendor.index.setClipboardData({ data: href });
      }
    } else {
      common_vendor.index.navigateTo({
        url: href,
        fail: () => {
          common_vendor.index.switchTab({ url: href });
        }
      });
    }
  }
  function onRichTextItemClick(event) {
    const detail = event.detail;
    const src = textValue(detail["src"]);
    const href = textValue(detail["href"]);
    if (src.length > 0) {
      handleImgTap(cloneAttrs(findNodeByAttr(nodes.value, "img", "src", src)));
      return null;
    }
    if (href.length > 0) {
      const node = findNodeByAttr(nodes.value, "a", "href", href);
      const attrs = cloneAttrs(node);
      const children = node == null ? null : node["children"];
      attrs["innerText"] = children == null ? "" : collectText(children);
      handleLinkTap(attrs);
    }
  }
  function onRootClick() {
    emit("tap");
    emit("click");
  }
  common_vendor.watch(() => {
    return props.content;
  }, (value) => {
    setContent(value, false);
  }, { immediate: true });
  __expose({
    getText,
    getRect,
    navigateTo,
    setContent
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: nodes.value.length == 0
    }, nodes.value.length == 0 ? {} : {
      b: nodes.value,
      c: selectableValue.value,
      d: common_vendor.o(onRichTextItemClick, "a7")
    }, {
      e: common_vendor.sei(common_vendor.gei(_ctx, "_root"), "view"),
      f: common_vendor.n(rootClass.value),
      g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      h: common_vendor.s(__props.containerStyle),
      i: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      j: common_vendor.o(onRootClick, "57")
    });
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-parse/up-parse.js.map
