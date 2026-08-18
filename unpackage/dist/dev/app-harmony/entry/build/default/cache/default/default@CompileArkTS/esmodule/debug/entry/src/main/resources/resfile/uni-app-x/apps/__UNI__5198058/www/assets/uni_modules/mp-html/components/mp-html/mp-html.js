import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, createSharedDataFor: _createSharedDataFor, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesMpHtmlComponentsMpHtmlMpHtml";
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
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "mp-html"
  },
  __dynamicSharedData: true,
  __hash: "057b2037",
  __className,
  __filename: "uni_modules/mp-html/components/mp-html/mp-html.uvue",
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
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesMpHtmlComponentsMpHtmlMpHtmlSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return localNodes.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_item0.value.type == "text"));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_for_item0.value.text));
          });
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(_for_item0.value.name == "br"));
          }, () => {
          }, () => {
            return _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 4, _toSharedDataBoolean(_for_item0.value.name == "img"));
            }, () => {
              _renderSharedDataEffect(() => {
                const _n = _for_item0.value;
                const _n_attrs = _n.attrs;
                _setSharedDataAttr(__sharedData_VFor0, 5, _toSharedDataString(_n_attrs != null ? _n_attrs["src"] ?? "" : ""));
              });
            }, () => {
              return _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 6, _toSharedDataBoolean(_for_item0.value.name == "a"));
              }, () => {
                _setSharedDataEvent(__sharedData_VFor0, 7, () => {
                  return onLinkTap(_for_item0.value);
                });
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData_VFor0, 8, _toDisplayString(flatText(_for_item0.value)));
                });
              }, () => {
                return _createSharedDataIf(() => {
                  return _setSharedData(__sharedData_VFor0, 9, _toSharedDataBoolean(isInline(_for_item0.value.name ?? "")));
                }, () => {
                  _renderSharedDataEffect(() => {
                    const _n = _for_item0.value;
                    _setSharedDataStyle(__sharedData_VFor0, 10, inlineStyle(_n.name ?? ""));
                    _setSharedData(__sharedData_VFor0, 11, _toDisplayString(flatText(_n)));
                  });
                }, () => {
                  return _createSharedDataIf(() => {
                    return _setSharedData(__sharedData_VFor0, 12, _toSharedDataBoolean(_for_item0.value.name == "h1" || _for_item0.value.name == "h2" || _for_item0.value.name == "h3" || _for_item0.value.name == "h4" || _for_item0.value.name == "h5" || _for_item0.value.name == "h6"));
                  }, () => {
                    _renderSharedDataEffect(() => {
                      const _n = _for_item0.value;
                      _setSharedDataStyle(__sharedData_VFor0, 13, headingStyle(_n.name ?? ""));
                      _setSharedData(__sharedData_VFor0, 14, _toDisplayString(flatText(_n)));
                    });
                  }, () => {
                    return _createSharedDataIf(() => {
                      return _setSharedData(__sharedData_VFor0, 15, _toSharedDataBoolean(_for_item0.value.name == "pre" || _for_item0.value.name == "code"));
                    }, () => {
                      _renderSharedDataEffect(() => {
                        return _setSharedData(__sharedData_VFor0, 16, _toDisplayString(flatText(_for_item0.value)));
                      });
                    }, () => {
                      return _createSharedDataIf(() => {
                        return _setSharedData(__sharedData_VFor0, 17, _toSharedDataBoolean(_for_item0.value.name == "hr"));
                      }, () => {
                      }, () => {
                        return _createSharedDataIf(() => {
                          return _setSharedData(__sharedData_VFor0, 18, _toSharedDataBoolean(_for_item0.value.name == "table"));
                        }, () => {
                          _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 19, _createSharedDataVFor(__sharedDataScope, () => {
                            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                          })), () => {
                            return _for_item0.value.children ?? [];
                          }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                            _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor1, 1, _createSharedDataVFor(__sharedDataScope, () => {
                              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 3 });
                            })), () => {
                              return _for_item1.value.children ?? [];
                            }, (__sharedData_VFor2, _for_item2, _for_key2) => {
                              _renderSharedDataEffect(() => {
                                const _cell = _for_item2.value;
                                _setSharedDataStyle(__sharedData_VFor2, 1, (_cell.name == "th" ? "font-weight:bold;background-color:#f5f5f5;" : "") + "flex:1;padding:4px 8px;border-width:1px;border-color:#d0d0d0;border-style:solid");
                                _setSharedData(__sharedData_VFor2, 2, _toDisplayString(flatText(_cell)));
                              });
                              return null;
                            }, (__sharedData_VFor2, cell, ci) => {
                              return _setSharedData(__sharedData_VFor2, 0, _toDisplayString(ci));
                            }, 1);
                            return null;
                          }, (__sharedData_VFor1, row, ri) => {
                            return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(ri));
                          }, 1);
                        }, () => {
                          return _createSharedDataIf(() => {
                            return _setSharedData(__sharedData_VFor0, 20, _toSharedDataBoolean(_for_item0.value.name == "ul" || _for_item0.value.name == "ol"));
                          }, () => {
                            _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 21, _createSharedDataVFor(__sharedDataScope, () => {
                              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 4 });
                            })), () => {
                              return _for_item0.value.children ?? [];
                            }, (__sharedData_VFor3, _for_item3, _for_key3) => {
                              _renderSharedDataEffect(() => {
                                _setSharedData(__sharedData_VFor3, 1, _toDisplayString(_for_item0.value.name == "ol" ? (_for_key3.value + 1).toString() + ". " : "• "));
                                _setSharedData(__sharedData_VFor3, 2, _toDisplayString(flatText(_for_item3.value)));
                              });
                              return null;
                            }, (__sharedData_VFor3, li, lii) => {
                              return _setSharedData(__sharedData_VFor3, 0, _toDisplayString(lii));
                            }, 1);
                          }, () => {
                            _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 22, _createSharedDataVFor(__sharedDataScope, () => {
                              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 5 });
                            })), () => {
                              return _for_item0.value.children ?? [];
                            }, (__sharedData_VFor4, _for_item4, _for_key4) => {
                              _createSharedDataIf(() => {
                                return _setSharedData(__sharedData_VFor4, 1, _toSharedDataBoolean(_for_item4.value.type == "text"));
                              }, () => {
                                _renderSharedDataEffect(() => {
                                  return _setSharedData(__sharedData_VFor4, 2, _toDisplayString(_for_item4.value.text));
                                });
                              }, () => {
                                return _createSharedDataIf(() => {
                                  return _setSharedData(__sharedData_VFor4, 3, _toSharedDataBoolean(_for_item4.value.name == "br"));
                                }, () => {
                                }, () => {
                                  return _createSharedDataIf(() => {
                                    return _setSharedData(__sharedData_VFor4, 4, _toSharedDataBoolean(_for_item4.value.name == "img"));
                                  }, () => {
                                    _renderSharedDataEffect(() => {
                                      const _cn = _for_item4.value;
                                      const _cn_attrs = _cn.attrs;
                                      _setSharedDataAttr(__sharedData_VFor4, 5, _toSharedDataString(_cn_attrs != null ? _cn_attrs["src"] ?? "" : ""));
                                    });
                                  }, () => {
                                    return _createSharedDataIf(() => {
                                      return _setSharedData(__sharedData_VFor4, 6, _toSharedDataBoolean(_for_item4.value.name == "a"));
                                    }, () => {
                                      _setSharedDataEvent(__sharedData_VFor4, 7, () => {
                                        return onLinkTap(_for_item4.value);
                                      });
                                      _renderSharedDataEffect(() => {
                                        return _setSharedData(__sharedData_VFor4, 8, _toDisplayString(flatText(_for_item4.value)));
                                      });
                                    }, () => {
                                      return _createSharedDataIf(() => {
                                        return _setSharedData(__sharedData_VFor4, 9, _toSharedDataBoolean(isInline(_for_item4.value.name ?? "")));
                                      }, () => {
                                        _renderSharedDataEffect(() => {
                                          const _cn = _for_item4.value;
                                          _setSharedDataStyle(__sharedData_VFor4, 10, inlineStyle(_cn.name ?? ""));
                                          _setSharedData(__sharedData_VFor4, 11, _toDisplayString(flatText(_cn)));
                                        });
                                      }, () => {
                                        _renderSharedDataEffect(() => {
                                          return _setSharedData(__sharedData_VFor4, 12, _toDisplayString(flatText(_for_item4.value)));
                                        });
                                      }, 3850);
                                    }, 3594);
                                  }, 3338);
                                }, 3082);
                              }, 2826);
                              return null;
                            }, (__sharedData_VFor4, cn, ci) => {
                              return _setSharedData(__sharedData_VFor4, 0, _toDisplayString(ci));
                            }, 1);
                          }, 2570);
                        }, 2314);
                      }, 2058);
                    }, 1802);
                  }, 1546);
                }, 1290);
              }, 1034);
            }, 778);
          }, 522);
        }, 266);
        return null;
      }, (__sharedData_VFor0, n, i) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(i));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=mp-html.js.map
