"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upParse_props = require("./props.js");
const blockTags = ["address", "article", "aside", "blockquote", "body", "caption", "center", "dd", "div", "dl", "dt", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul"];
const voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
const ignoreTags = ["area", "base", "canvas", "frame", "head", "iframe", "input", "link", "map", "meta", "param", "script", "style", "textarea", "track", "wbr"];
function makeNode(name) {
  return new UTSJSONObject({
    type: "node",
    name,
    attrs: new UTSJSONObject({}),
    children: []
  });
}
function makeText(text) {
  return new UTSJSONObject({
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
function collectText(nodes) {
  let result = "";
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
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
function findNodeByAttr(nodes, name, attr, value) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
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
    return new UTSJSONObject({});
  const attrs = node["attrs"];
  if (attrs == null)
    return new UTSJSONObject({});
  const cloned = new UTSJSONObject({});
  const keys = UTSJSONObject.keys(attrs);
  for (let i = 0; i < keys.length; i++) {
    cloned[keys[i]] = attrs[keys[i]];
  }
  return cloned;
}
const _sfc_main = common_vendor.defineComponent({
  name: "up-parse",
  mixins: [uni_modules_uviewUltra_components_upParse_props.props],
  emits: ["load", "ready", "imgTap", "linkTap", "play", "error", "tap", "click"],
  data() {
    return {
      nodes: [],
      imgList: []
    };
  },
  computed: {
    rootClass() {
      return (this.selectableValue ? "_select " : "") + "_root";
    },
    selectableValue() {
      return boolValue(this.selectable);
    },
    previewImgValue() {
      return boolValue(this.previewImg);
    },
    copyLinkValue() {
      return boolValue(this.copyLink);
    },
    showImgMenuValue() {
      return boolValue(this.showImgMenu);
    }
  },
  watch: {
    content: {
      handler(value) {
        this.setContent(value, false);
      },
      immediate: true
    }
  },
  methods: {
    getText(nodes = null) {
      return collectText(nodes == null ? this.nodes : nodes);
    },
    getRect() {
      return new Promise((resolve, reject) => {
        common_vendor.index.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => {
          if (res.length > 0 && res[0] != null) {
            resolve(res[0]);
          } else {
            reject(new Error("Root label not found"));
          }
        });
      });
    },
    navigateTo(id, offset = 0) {
      return new Promise((resolve, reject) => {
        if (!boolValue(this.useAnchor)) {
          reject(new Error("Anchor is disabled"));
          return null;
        }
        const selector = id.length > 0 ? "#_root #" + id : "#_root";
        common_vendor.index.createSelectorQuery().in(this).select(selector).boundingClientRect().exec((res) => {
          if (res.length == 0 || res[0] == null) {
            reject(new Error("Label not found"));
            return null;
          }
          const rect = res[0];
          const top = parseFloat(textValue(rect["top"]));
          common_vendor.index.pageScrollTo(new UTSJSONObject({
            scrollTop: (isNaN(top) ? 0 : top) + offset,
            duration: 300
          }));
          resolve();
        });
      });
    },
    setContent(content, append = false) {
      const parsed = this.parseContent(content);
      this.nodes = append ? this.nodes.concat(parsed) : parsed;
      this.$nextTick(() => {
        this.$emit("load");
        this.getRect().then((rect = null) => {
          this.$emit("ready", rect);
        }).catch(() => {
          this.$emit("ready", new UTSJSONObject({}));
        });
      });
    },
    parseContent(content) {
      this.imgList = [];
      const roots = [];
      const stack = [];
      let index = 0;
      let skipTag = "";
      while (index < content.length) {
        const lt = content.indexOf("<", index);
        if (lt == -1) {
          this.appendText(content.substring(index), stack, roots);
          break;
        }
        if (lt > index) {
          this.appendText(content.substring(index, lt), stack, roots);
        }
        const gt = content.indexOf(">", lt + 1);
        if (gt == -1) {
          this.appendText(content.substring(lt), stack, roots);
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
            this.closeTag(closeName, stack);
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
        this.applyAttrs(node, trimmed);
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
    },
    appendText(text, stack, roots) {
      const keepSpace = stack.length > 0 && textValue(stack[stack.length - 1]["name"]) == "pre";
      const normalized = normalizeSpace(decodeHtml(text), keepSpace);
      if (normalized.length == 0 || !keepSpace && normalized == " ")
        return null;
      appendChild(stack, roots, makeText(normalized));
    },
    closeTag(name, stack) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (textValue(stack[i]["name"]) == name) {
          while (stack.length > i)
            common_vendor.UTS.arrayPop(stack);
          return null;
        }
      }
    },
    applyAttrs(node, raw) {
      const name = textValue(node["name"]);
      const attrs = new UTSJSONObject({});
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
      const tagStyle = this.getDefaultStyle(name);
      const mergedStyle = tagStyle + (style.length > 0 && tagStyle.length > 0 ? ";" : "") + style;
      if (mergedStyle.length > 0)
        attrs["style"] = mergedStyle;
      if (href.length > 0)
        attrs["href"] = this.resolveUrl(href);
      if (src.length > 0)
        attrs["src"] = this.resolveUrl(src);
      if (alt.length > 0)
        attrs["alt"] = alt;
      if (name == "img" && textValue(attrs["src"]).length > 0) {
        attrs["i"] = this.imgList.length;
        this.imgList.push(textValue(attrs["src"]));
      }
      if (name == "title" && boolValue(this.setTitle)) {
        node["__title"] = true;
      }
      node["attrs"] = attrs;
    },
    getDefaultStyle(name) {
      const custom = this.tagStyle;
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
    },
    resolveUrl(url) {
      if (url.startsWith("//")) {
        return "https:" + url;
      }
      if (url.startsWith("/") && textValue(this.domain).length > 0) {
        return textValue(this.domain) + url;
      }
      if (!url.includes("://") && !url.startsWith("#") && textValue(this.domain).length > 0) {
        return textValue(this.domain) + "/" + url;
      }
      return url;
    },
    handleImgTap(attrs) {
      this.$emit("imgTap", attrs);
      if (this.previewImgValue && this.imgList.length > 0) {
        const current = parseInt(textValue(attrs["i"]));
        common_vendor.index.previewImage({
          current: isNaN(current) ? 0 : current,
          urls: this.imgList
        });
      }
    },
    handleLinkTap(attrs) {
      this.$emit("linkTap", attrs);
      const href = textValue(attrs["href"]);
      if (href.length == 0)
        return null;
      if (href.startsWith("#")) {
        this.navigateTo(href.substring(1)).catch(() => {
        });
      } else if (href.includes("://")) {
        if (this.copyLinkValue) {
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
    },
    onRichTextItemClick(event) {
      const detail = event.detail;
      const src = textValue(detail["src"]);
      const href = textValue(detail["href"]);
      if (src.length > 0) {
        this.handleImgTap(cloneAttrs(findNodeByAttr(this.nodes, "img", "src", src)));
        return null;
      }
      if (href.length > 0) {
        const node = findNodeByAttr(this.nodes, "a", "href", href);
        const attrs = cloneAttrs(node);
        const children = node == null ? null : node["children"];
        attrs["innerText"] = children == null ? "" : collectText(children);
        this.handleLinkTap(attrs);
      }
    },
    handleMediaError(payload) {
      this.$emit("error", payload);
    },
    onRootClick() {
      this.$emit("tap");
      this.$emit("click");
    },
    pauseMedia() {
    },
    setPlaybackRate(rate) {
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.nodes.length == 0
  }, $data.nodes.length == 0 ? {} : {
    b: $data.nodes,
    c: $options.selectableValue,
    d: common_vendor.o((...args) => $options.onRichTextItemClick && $options.onRichTextItemClick(...args), "5b")
  }, {
    e: common_vendor.sei(common_vendor.gei(_ctx, "_root"), "view"),
    f: common_vendor.n($options.rootClass),
    g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    h: common_vendor.s(_ctx.containerStyle),
    i: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    j: common_vendor.o((...args) => $options.onRootClick && $options.onRootClick(...args), "5e")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-parse/up-parse.js.map
