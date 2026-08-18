import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, watch, onMounted } = globalThis.Vue;
class HtmlNode extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          attrs: { type: "Unknown", optional: true },
          children: { type: UTS.UTSType.withGenerics(Array, [HtmlNode]), optional: true },
          type: { type: String, optional: true },
          text: { type: String, optional: true }
        };
      },
      name: "HtmlNode"
    };
  }
  constructor(options, metadata = HtmlNode.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.attrs = this.__props__.attrs;
    this.children = this.__props__.children;
    this.type = this.__props__.type;
    this.text = this.__props__.text;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "mp-html"
  },
  __name: "mp-html",
  props: {
    containerStyle: { type: String, default: "" },
    content: { type: String, default: "" },
    copyLink: { type: [Boolean, String], default: true },
    domain: { type: String, default: "" },
    previewImg: { type: [Boolean, String], default: true },
    selectable: { type: [Boolean, String], default: false },
    setTitle: { type: [Boolean, String], default: true },
    showImgMenu: { type: [Boolean, String], default: true },
    useAnchor: { type: [Boolean, Number], default: false }
  },
  emits: ["load", "ready", "imgtap", "linktap"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const localNodes = ref([]);
    function isSpace(ch) {
      return ch == " " || ch == "	" || ch == "\n" || ch == "\r";
    }
    function isInline(name) {
      return name == "span" || name == "b" || name == "strong" || name == "i" || name == "em" || name == "u" || name == "ins" || name == "del" || name == "s" || name == "strike" || name == "sub" || name == "sup" || name == "code" || name == "mark" || name == "small" || name == "big" || name == "label" || name == "q";
    }
    function isHeading(name) {
      return name.length == 2 && name.charAt(0) == "h" && name.charAt(1) >= "1" && name.charAt(1) <= "6";
    }
    function cleanText(s) {
      let r = "";
      let lastSpace = false;
      for (let i = 0; i < s.length; i++) {
        const c2 = s.charAt(i);
        if (c2 == " " || c2 == "	" || c2 == "\n" || c2 == "\r") {
          if (!lastSpace && r.length > 0) {
            r += " ";
            lastSpace = true;
          }
        } else {
          r += c2;
          lastSpace = false;
        }
      }
      if (r.length > 0 && r.charAt(r.length - 1) == " ")
        r = r.substring(0, r.length - 1);
      return r;
    }
    function stripAllTags(s) {
      let r = "";
      let inTag = false;
      for (let i = 0; i < s.length; i++) {
        const c2 = s.charAt(i);
        if (c2 == "<")
          inTag = true;
        else if (c2 == ">")
          inTag = false;
        else if (!inTag)
          r += c2;
      }
      return cleanText(r);
    }
    function flatText(n) {
      var _a2, _b, _c;
      if (n.type == "text")
        return (_a2 = n.text) !== null && _a2 !== void 0 ? _a2 : "";
      if (n.children == null)
        return (_b = n.text) !== null && _b !== void 0 ? _b : "";
      let t = "";
      for (let i = 0; i < n.children.length; i++) {
        const c = n.children[i];
        if (c.type == "text")
          t += (_c = c.text) !== null && _c !== void 0 ? _c : "";
        else if (c.name == "br")
          t += "\n";
        else
          t += flatText(c);
      }
      return t;
    }
    function inlineStyle(name) {
      if (name == "b" || name == "strong")
        return "font-weight:bold";
      if (name == "i" || name == "em")
        return "font-style:italic";
      if (name == "u" || name == "ins")
        return "text-decoration:underline";
      if (name == "del" || name == "s" || name == "strike")
        return "text-decoration:line-through";
      if (name == "code")
        return "font-family:monospace";
      if (name == "sub")
        return "font-size:smaller;vertical-align:sub";
      if (name == "sup")
        return "font-size:smaller;vertical-align:super";
      if (name == "small")
        return "font-size:0.8em";
      if (name == "big")
        return "font-size:1.2em";
      if (name == "mark")
        return "background-color:yellow";
      return "";
    }
    function headingStyle(name) {
      var _a2;
      const sz = new UTSJSONObject({ h1: "2em", h2: "1.5em", h3: "1.17em", h4: "1em", h5: "0.83em", h6: "0.67em" });
      return "font-size:" + ((_a2 = sz[name]) !== null && _a2 !== void 0 ? _a2 : "1em") + ";font-weight:bold";
    }
    function parseAttrs(tag) {
      const attrs = new UTSJSONObject({});
      let i = 0;
      while (i < tag.length && tag.charAt(i) != " " && tag.charAt(i) != "	") {
        i++;
      }
      while (i < tag.length) {
        while (i < tag.length && isSpace(tag.charAt(i))) {
          i++;
        }
        if (i >= tag.length || tag.charAt(i) == "/")
          break;
        let aname = "";
        while (i < tag.length && tag.charAt(i) != "=" && tag.charAt(i) != " " && tag.charAt(i) != "	" && tag.charAt(i) != "/") {
          aname += tag.charAt(i);
          i++;
        }
        if (aname.length == 0)
          break;
        aname = aname.toLowerCase();
        while (i < tag.length && isSpace(tag.charAt(i))) {
          i++;
        }
        if (i < tag.length && tag.charAt(i) == "=") {
          i++;
          while (i < tag.length && isSpace(tag.charAt(i))) {
            i++;
          }
          if (i < tag.length && (tag.charAt(i) == '"' || tag.charAt(i) == "'")) {
            const q = tag.charAt(i);
            i++;
            let val = "";
            while (i < tag.length && tag.charAt(i) != q) {
              val += tag.charAt(i);
              i++;
            }
            if (i < tag.length)
              i++;
            attrs[aname] = val;
          } else {
            let val = "";
            while (i < tag.length && !isSpace(tag.charAt(i)) && tag.charAt(i) != ">") {
              val += tag.charAt(i);
              i++;
            }
            attrs[aname] = val;
          }
        } else {
          attrs[aname] = "T";
        }
      }
      return attrs;
    }
    function findMatchingClose(html, start, tagName) {
      let depth = 1;
      let i = start;
      const openStr = "<" + tagName;
      const closeStr = "</" + tagName + ">";
      while (i < html.length) {
        const openPos = html.indexOf(openStr, i);
        const closePos = html.indexOf(closeStr, i);
        if (closePos == -1)
          return -1;
        if (openPos != -1 && openPos < closePos) {
          const afterOpen = html.indexOf(">", openPos);
          if (afterOpen != -1) {
            const afterOpenTag = html.substring(openPos + 1, afterOpen);
            const afterOpenName = afterOpenTag.split(" ")[0].split("	")[0].toLowerCase();
            if (afterOpenName == tagName) {
              depth += 1;
              i = afterOpen + 1;
              continue;
            }
          }
        }
        depth -= 1;
        if (depth == 0)
          return closePos;
        i = closePos + closeStr.length;
      }
      return -1;
    }
    function parseTable(html) {
      const rows = [];
      let i = 0;
      while (i < html.length) {
        const trS = html.indexOf("<tr", i);
        if (trS == -1)
          break;
        const trGt = html.indexOf(">", trS);
        if (trGt == -1)
          break;
        const trE = html.indexOf("</tr>", trGt);
        if (trE == -1)
          break;
        const trInner = html.substring(trGt + 1, trE);
        const cells = [];
        let ci = 0;
        while (ci < trInner.length) {
          const tdS = trInner.indexOf("<t", ci);
          if (tdS == -1)
            break;
          const ch = trInner.charAt(tdS + 2).toLowerCase();
          const cellTag = ch == "h" ? "th" : ch == "d" ? "td" : "";
          if (cellTag.length == 0) {
            ci = tdS + 2;
            continue;
          }
          const tdGt = trInner.indexOf(">", tdS);
          if (tdGt == -1)
            break;
          const tdE = trInner.indexOf("</" + cellTag + ">", tdGt);
          if (tdE == -1)
            break;
          const text = stripAllTags(trInner.substring(tdGt + 1, tdE));
          cells.push(new HtmlNode({
            attrs: null,
            type: null,
            text: null,
            name: cellTag,
            children: [new HtmlNode({
              name: null,
              attrs: null,
              children: null,
              type: "text",
              text
            })]
          }));
          ci = tdE + cellTag.length + 3;
        }
        rows.push(new HtmlNode({
          attrs: null,
          type: null,
          text: null,
          name: "tr",
          children: cells
        }));
        i = trE + 5;
      }
      return rows;
    }
    function parseList(html) {
      const items = [];
      let i = 0;
      while (true) {
        const liS = html.indexOf("<li", i);
        if (liS == -1)
          break;
        const liGt = html.indexOf(">", liS);
        if (liGt == -1)
          break;
        const liE = html.indexOf("</li>", liGt);
        if (liE == -1)
          break;
        const text = stripAllTags(html.substring(liGt + 1, liE));
        if (text.length > 0) {
          items.push(new HtmlNode({
            attrs: null,
            type: null,
            text: null,
            name: "li",
            children: [new HtmlNode({
              name: null,
              attrs: null,
              children: null,
              type: "text",
              text
            })]
          }));
        }
        i = liE + 5;
      }
      return items;
    }
    function parseHtml(html) {
      const result = [];
      let i = 0;
      const len = html.length;
      let txt = "";
      while (i < len) {
        const lt = html.indexOf("<", i);
        if (lt == -1) {
          txt += html.substring(i);
          break;
        }
        if (lt > i) {
          txt += html.substring(i, lt);
        }
        const gt = html.indexOf(">", lt);
        if (gt == -1) {
          txt += html.substring(i);
          break;
        }
        const tag = html.substring(lt + 1, gt);
        i = gt + 1;
        if (tag.length >= 3 && tag.charAt(0) == "!" && tag.charAt(1) == "-") {
          const end = html.indexOf("-->", lt);
          if (end != -1)
            i = end + 3;
          continue;
        }
        if (tag.charAt(0) == "/") {
          if (txt.length > 0) {
            const t = cleanText(txt);
            if (t.length > 0)
              result.push(new HtmlNode({
                name: null,
                attrs: null,
                children: null,
                type: "text",
                text: t
              }));
            txt = "";
          }
          continue;
        }
        let name = "";
        for (let j = 0; j < tag.length; j++) {
          const c2 = tag.charAt(j);
          if (c2 == " " || c2 == "	" || c2 == "/")
            break;
          name += c2;
        }
        name = name.toLowerCase();
        if (name.length == 0)
          continue;
        const attrs = parseAttrs(tag);
        if (txt.length > 0) {
          const t = cleanText(txt);
          if (t.length > 0)
            result.push(new HtmlNode({
              name: null,
              attrs: null,
              children: null,
              type: "text",
              text: t
            }));
          txt = "";
        }
        if (name == "br") {
          result.push(new HtmlNode({
            attrs: null,
            children: null,
            type: null,
            text: null,
            name: "br"
          }));
          continue;
        }
        if (name == "hr") {
          result.push(new HtmlNode({
            attrs: null,
            children: null,
            type: null,
            text: null,
            name: "hr"
          }));
          continue;
        }
        if (name == "img") {
          result.push(new HtmlNode({
            children: null,
            type: null,
            text: null,
            name: "img",
            attrs
          }));
          continue;
        }
        const closeStr = "</" + name + ">";
        const closePos = findMatchingClose(html, i, name);
        if (closePos == -1)
          continue;
        const inner = html.substring(i, closePos);
        const node = new HtmlNode({
          children: null,
          type: null,
          text: null,
          name,
          attrs
        });
        if (name == "table") {
          node.children = parseTable(inner);
        } else if (name == "ul" || name == "ol") {
          node.children = parseList(inner);
        } else if (name == "a" || isInline(name) || isHeading(name) || name == "pre" || name == "code") {
          node.children = [new HtmlNode({
            name: null,
            attrs: null,
            children: null,
            type: "text",
            text: stripAllTags(inner)
          })];
        } else if (name == "p" || name == "div" || name == "section" || name == "blockquote" || name == "li" || name == "article" || name == "aside" || name == "header" || name == "footer" || name == "nav" || name == "main") {
          node.children = parseHtml(inner);
          node.name = "div";
        } else {
          node.children = parseHtml(inner);
          node.name = "div";
        }
        result.push(node);
        i = closePos + closeStr.length;
      }
      if (txt.length > 0) {
        const t = cleanText(txt);
        if (t.length > 0)
          result.push(new HtmlNode({
            name: null,
            attrs: null,
            children: null,
            type: "text",
            text: t
          }));
      }
      return result;
    }
    function doParse(html) {
      const nodes = parseHtml(html);
      localNodes.value = nodes;
      if (nodes.length > 0) {
        setTimeout(() => {
          emit("load");
        }, 50);
      }
    }
    function setContent(html) {
      doParse(html);
    }
    function getText() {
      return flatText(new HtmlNode({
        name: null,
        attrs: null,
        type: null,
        text: null,
        children: localNodes.value
      }));
    }
    function onLinkTap(n) {
      var _a2, _b;
      const href = n.attrs != null ? (_a2 = n.attrs["href"]) !== null && _a2 !== void 0 ? _a2 : "" : "";
      emit("linktap", (_b = n.attrs) !== null && _b !== void 0 ? _b : new UTSJSONObject({}));
      if (href.length > 0 && href.includes("://")) {
        uni.setClipboardData({ data: href, success: () => {
          uni.showToast({ title: "链接已复制", icon: "none" });
        } });
      }
    }
    watch(() => {
      return props.content;
    }, (val) => {
      if (val.length > 0)
        doParse(val);
    }, { immediate: true });
    __expose({
      setContent,
      getText
    });
    const __returned__ = { props, emit, localNodes, isSpace, isInline, isHeading, cleanText, stripAllTags, flatText, inlineStyle, headingStyle, parseAttrs, findMatchingClose, parseTable, parseList, parseHtml, doParse, setContent, getText, onLinkTap };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"_mp_root":{"":{"paddingTop":1,"paddingRight":0,"paddingBottom":1,"paddingLeft":0}},"mp-a":{"":{"color":"#366092"}},"flex":{"":{"display":"flex"}}};
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "_mp_root" }, [
    (_openBlock(true), _createElementBlock(
      _Fragment,
      null,
      _renderList($setup.localNodes, (n, i) => {
        return _openBlock(), _createElementBlock(
          _Fragment,
          { key: i },
          [
            n.type == "text" ? (_openBlock(), _createElementBlock(
              "text",
              { key: 0 },
              _toDisplayString(n.text),
              1
              /* TEXT */
            )) : n.name == "br" ? (_openBlock(), _createElementBlock("text", { key: 1 }, "\n")) : n.name == "img" ? (_openBlock(), _createElementBlock("image", {
              key: 2,
              src: n.attrs != null ? n.attrs["src"] ?? "" : "",
              style: { "max-width": "750px" },
              mode: "widthFix"
            }, null, 8, ["src"])) : n.name == "a" ? (_openBlock(), _createElementBlock("text", {
              key: 3,
              class: "mp-a",
              onClick: ($event) => $setup.onLinkTap(n)
            }, _toDisplayString($setup.flatText(n)), 9, ["onClick"])) : $setup.isInline(n.name ?? "") ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 4,
                style: _normalizeStyle($setup.inlineStyle(n.name ?? ""))
              },
              _toDisplayString($setup.flatText(n)),
              5
              /* TEXT, STYLE */
            )) : n.name == "h1" || n.name == "h2" || n.name == "h3" || n.name == "h4" || n.name == "h5" || n.name == "h6" ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 5,
                style: _normalizeStyle($setup.headingStyle(n.name ?? ""))
              },
              _toDisplayString($setup.flatText(n)),
              5
              /* TEXT, STYLE */
            )) : n.name == "pre" || n.name == "code" ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 6,
                style: { "font-family": "monospace", "white-space": "pre-wrap" }
              },
              _toDisplayString($setup.flatText(n)),
              1
              /* TEXT */
            )) : n.name == "hr" ? (_openBlock(), _createElementBlock("view", {
              key: 7,
              style: { "height": "1px", "background-color": "#e0e0e0", "margin": "10px 0" }
            })) : n.name == "table" ? (_openBlock(), _createElementBlock("view", {
              key: 8,
              style: { "display": "flex", "flex-direction": "column" }
            }, [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(n.children ?? [], (row, ri) => {
                  return _openBlock(), _createElementBlock("view", {
                    key: ri,
                    style: { "display": "flex", "flex-direction": "row" }
                  }, [
                    (_openBlock(true), _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(row.children ?? [], (cell, ci) => {
                        return _openBlock(), _createElementBlock(
                          "view",
                          {
                            key: ci,
                            style: _normalizeStyle((cell.name == "th" ? "background-color:#f5f5f5;" : "") + "flex:1;padding:4px 8px;border-width:1px;border-color:#d0d0d0;border-style:solid")
                          },
                          [
                            _createElementVNode(
                              "text",
                              {
                                style: _normalizeStyle(cell.name == "th" ? "font-weight:bold;" : "")
                              },
                              _toDisplayString($setup.flatText(cell)),
                              5
                              /* TEXT, STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : n.name == "ul" || n.name == "ol" ? (_openBlock(), _createElementBlock("view", {
              key: 9,
              style: { "padding-left": "20px" }
            }, [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(n.children ?? [], (li, lii) => {
                  return _openBlock(), _createElementBlock("view", {
                    key: lii,
                    style: { "flex-direction": "row" }
                  }, [
                    _createElementVNode(
                      "text",
                      null,
                      _toDisplayString(n.name == "ol" ? (lii + 1).toString() + ". " : "• "),
                      1
                      /* TEXT */
                    ),
                    _createElementVNode(
                      "text",
                      null,
                      _toDisplayString($setup.flatText(li)),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (_openBlock(), _createElementBlock("view", { key: 10 }, [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(n.children ?? [], (cn, ci) => {
                  return _openBlock(), _createElementBlock(
                    _Fragment,
                    { key: ci },
                    [
                      cn.type == "text" ? (_openBlock(), _createElementBlock(
                        "text",
                        { key: 0 },
                        _toDisplayString(cn.text),
                        1
                        /* TEXT */
                      )) : cn.name == "br" ? (_openBlock(), _createElementBlock("text", { key: 1 }, "\n")) : cn.name == "img" ? (_openBlock(), _createElementBlock("image", {
                        key: 2,
                        src: cn.attrs != null ? cn.attrs["src"] ?? "" : "",
                        style: { "max-width": "750px" },
                        mode: "widthFix"
                      }, null, 8, ["src"])) : cn.name == "a" ? (_openBlock(), _createElementBlock("text", {
                        key: 3,
                        class: "mp-a",
                        onClick: ($event) => $setup.onLinkTap(cn)
                      }, _toDisplayString($setup.flatText(cn)), 9, ["onClick"])) : $setup.isInline(cn.name ?? "") ? (_openBlock(), _createElementBlock(
                        "text",
                        {
                          key: 4,
                          style: _normalizeStyle($setup.inlineStyle(cn.name ?? ""))
                        },
                        _toDisplayString($setup.flatText(cn)),
                        5
                        /* TEXT, STYLE */
                      )) : (_openBlock(), _createElementBlock(
                        "text",
                        { key: 5 },
                        _toDisplayString($setup.flatText(cn)),
                        1
                        /* TEXT */
                      ))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/mp-html/components/mp-html/mp-html.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=mp-html.js.map
