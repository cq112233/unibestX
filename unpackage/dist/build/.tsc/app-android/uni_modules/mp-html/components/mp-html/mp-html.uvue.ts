
type HtmlNode = {
  name?: string
  attrs?: UTSJSONObject
  children?: HtmlNode[]
  type?: string
  text?: string
}

const __sfc__ = defineComponent({
  name: 'mp-html',
  props: {
    containerStyle: { type: String, default: '' },
    content: { type: String, default: '' },
    copyLink: { type: [Boolean, String] as any, default: true },
    domain: { type: String, default: '' },
    previewImg: { type: [Boolean, String] as any, default: true },
    selectable: { type: [Boolean, String] as any, default: false },
    setTitle: { type: [Boolean, String] as any, default: true },
    showImgMenu: { type: [Boolean, String] as any, default: true },
    useAnchor: { type: [Boolean, Number] as any, default: false },
  },
  emits: ['load', 'ready', 'imgtap', 'linktap'],
  data() {
    return {
      localNodes: [] as HtmlNode[],
    }
  },
  created() {
    if (this.content.length > 0) this.doParse(this.content)
  },
  watch: {
    content: {
      handler(val: string) {
        if (val.length > 0) this.doParse(val)
      },
      immediate: true,
    },
  },
  methods: {
    doParse(html: string): void {
      const nodes = this.parseHtml(html)
      this.localNodes = nodes
      if (nodes.length > 0) {
        setTimeout(() => { this.$emit('load') }, 50)
      }
    },

    setContent(html: string): void { this.doParse(html) },
    getText(): string { return this.flatText({ children: this.localNodes } as HtmlNode) },

    // ========== 解析器 ==========
    parseHtml(html: string): HtmlNode[] {
      const result: HtmlNode[] = []
      let i = 0
      const len = html.length
      let txt = ''

      while (i < len) {
        const lt = html.indexOf('<', i)
        if (lt == -1) { txt += html.substring(i); break }

        if (lt > i) { txt += html.substring(i, lt) }

        const gt = html.indexOf('>', lt)
        if (gt == -1) { txt += html.substring(i); break }

        const tag = html.substring(lt + 1, gt)
        i = gt + 1

        // 注释
        if (tag.length >= 3 && tag.charAt(0) == '!' && tag.charAt(1) == '-') {
          const end = html.indexOf('-->', lt)
          if (end != -1) i = end + 3
          continue
        }

        // 结束标签 — 提炼文本缓冲
        if (tag.charAt(0) == '/') {
          if (txt.length > 0) {
            const t = this.cleanText(txt)
            if (t.length > 0) result.push({ type: 'text', text: t } as HtmlNode)
            txt = ''
          }
          continue
        }

        // 提取标签名
        let name = ''
        for (let j = 0; j < tag.length; j++) {
          const c2 = tag.charAt(j)
          if (c2 == ' ' || c2 == '\t' || c2 == '/') break
          name += c2
        }
        name = name.toLowerCase()
        if (name.length == 0) continue

        // 提取属性
        const attrs = this.parseAttrs(tag)

        // 提取文本缓冲
        if (txt.length > 0) {
          const t = this.cleanText(txt)
          if (t.length > 0) result.push({ type: 'text', text: t } as HtmlNode)
          txt = ''
        }

        // 空标签
        if (name == 'br') { result.push({ name: 'br' } as HtmlNode); continue }
        if (name == 'hr') { result.push({ name: 'hr' } as HtmlNode); continue }
        if (name == 'img') { result.push({ name: 'img', attrs } as HtmlNode); continue }

        // 找匹配的闭合标签
        const closeStr = '</' + name + '>'
        const closePos = this.findMatchingClose(html, i, name)

        if (closePos == -1) continue

        const inner = html.substring(i, closePos)
        const node: HtmlNode = { name, attrs } as HtmlNode

        if (name == 'table') {
          node.children = this.parseTable(inner)
        } else if (name == 'ul' || name == 'ol') {
          node.children = this.parseList(inner)
        } else if (name == 'a' || this.isInline(name) || this.isHeading(name) || name == 'pre' || name == 'code') {
          node.children = [{ type: 'text', text: this.stripAllTags(inner) } as HtmlNode]
        } else if (name == 'p' || name == 'div' || name == 'section' || name == 'blockquote' || name == 'li' || name == 'article' || name == 'aside' || name == 'header' || name == 'footer' || name == 'nav' || name == 'main') {
          node.children = this.parseHtml(inner)
          node.name = 'div'
        } else {
          node.children = this.parseHtml(inner)
          node.name = 'div'
        }

        result.push(node)
        i = closePos + closeStr.length
      }

      // 最终文本缓冲
      if (txt.length > 0) {
        const t = this.cleanText(txt)
        if (t.length > 0) result.push({ type: 'text', text: t } as HtmlNode)
      }

      return result
    },

    findMatchingClose(html: string, start: number, tagName: string): number {
      // 找到正确的匹配闭合标签（处理嵌套）
      let depth = 1
      let i = start
      const openStr = '<' + tagName
      const closeStr = '</' + tagName + '>'

      while (i < html.length) {
        const openPos = html.indexOf(openStr, i)
        const closePos = html.indexOf(closeStr, i)

        if (closePos == -1) return -1

        if (openPos != -1 && openPos < closePos) {
          // 遇到嵌套的开始标签（需要同名且非空标签）
          const afterOpen = html.indexOf('>', openPos)
          if (afterOpen != -1) {
            const afterOpenTag = html.substring(openPos + 1, afterOpen)
            const afterOpenName = afterOpenTag.split(' ')[0].split('\t')[0].toLowerCase()
            if (afterOpenName == tagName) {
              depth += 1
              i = afterOpen + 1
              continue
            }
          }
        }

        depth -= 1
        if (depth == 0) return closePos
        i = closePos + closeStr.length
      }
      return -1
    },

    parseAttrs(tag: string): UTSJSONObject {
      const attrs: UTSJSONObject = {} as UTSJSONObject
      // 跳过标签名
      let i = 0
      while (i < tag.length && tag.charAt(i) != ' ' && tag.charAt(i) != '\t') { i++ }

      while (i < tag.length) {
        while (i < tag.length && this.isSpace(tag.charAt(i))) { i++ }
        if (i >= tag.length || tag.charAt(i) == '/') break

        // 属性名
        let aname = ''
        while (i < tag.length && tag.charAt(i) != '=' && tag.charAt(i) != ' ' && tag.charAt(i) != '\t' && tag.charAt(i) != '/') {
          aname += tag.charAt(i)
          i++
        }
        if (aname.length == 0) break
        aname = aname.toLowerCase()

        while (i < tag.length && this.isSpace(tag.charAt(i))) { i++ }
        if (i < tag.length && tag.charAt(i) == '=') {
          i++
          while (i < tag.length && this.isSpace(tag.charAt(i))) { i++ }
          if (i < tag.length && (tag.charAt(i) == '"' || tag.charAt(i) == "'")) {
            const q = tag.charAt(i)
            i++
            let val = ''
            while (i < tag.length && tag.charAt(i) != q) { val += tag.charAt(i); i++ }
            if (i < tag.length) i++
            attrs[aname] = val
          } else {
            let val = ''
            while (i < tag.length && !this.isSpace(tag.charAt(i)) && tag.charAt(i) != '>') { val += tag.charAt(i); i++ }
            attrs[aname] = val
          }
        } else {
          attrs[aname] = 'T'
        }
      }
      return attrs
    },

    parseTable(html: string): HtmlNode[] {
      const rows: HtmlNode[] = []
      let i = 0
      while (i < html.length) {
        const trS = html.indexOf('<tr', i)
        if (trS == -1) break
        const trGt = html.indexOf('>', trS)
        if (trGt == -1) break
        const trE = html.indexOf('</tr>', trGt)
        if (trE == -1) break

        const trInner = html.substring(trGt + 1, trE)
        const cells: HtmlNode[] = []
        let ci = 0
        while (ci < trInner.length) {
          const tdS = trInner.indexOf('<t', ci)
          if (tdS == -1) break
          const ch = trInner.charAt(tdS + 2).toLowerCase()
          const cellTag = (ch == 'h') ? 'th' : ((ch == 'd') ? 'td' : '')
          if (cellTag.length == 0) {
            ci = tdS + 2
            continue
          }
          const tdGt = trInner.indexOf('>', tdS)
          if (tdGt == -1) break
          const tdE = trInner.indexOf('</' + cellTag + '>', tdGt)
          if (tdE == -1) break
          const text = this.stripAllTags(trInner.substring(tdGt + 1, tdE))
          cells.push({ name: cellTag, children: [{ type: 'text', text } as HtmlNode] } as HtmlNode)
          ci = tdE + cellTag.length + 3
        }
        rows.push({ name: 'tr', children: cells } as HtmlNode)
        i = trE + 5
      }
      return rows
    },

    parseList(html: string): HtmlNode[] {
      const items: HtmlNode[] = []
      let i = 0
      while (true) {
        const liS = html.indexOf('<li', i)
        if (liS == -1) break
        const liGt = html.indexOf('>', liS)
        if (liGt == -1) break
        const liE = html.indexOf('</li>', liGt)
        if (liE == -1) break
        const text = this.stripAllTags(html.substring(liGt + 1, liE))
        if (text.length > 0) {
          items.push({ name: 'li', children: [{ type: 'text', text } as HtmlNode] } as HtmlNode)
        }
        i = liE + 5
      }
      return items
    },

    // ========== 工具方法 ==========
    isSpace(ch: string): boolean { return ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r' },
    isInline(name: string): boolean {
      return name == 'span' || name == 'b' || name == 'strong' || name == 'i' || name == 'em' || name == 'u' || name == 'ins' || name == 'del' || name == 's' || name == 'strike' || name == 'sub' || name == 'sup' || name == 'code' || name == 'mark' || name == 'small' || name == 'big' || name == 'label' || name == 'q'
    },
    isHeading(name: string): boolean {
      return name.length == 2 && name.charAt(0) == 'h' && name.charAt(1) >= '1' && name.charAt(1) <= '6'
    },

    cleanText(s: string): string {
      let r = ''
      let lastSpace = false
      for (let i = 0; i < s.length; i++) {
        const c2 = s.charAt(i)
        if (c2 == ' ' || c2 == '\t' || c2 == '\n' || c2 == '\r') {
          if (!lastSpace && r.length > 0) { r += ' '; lastSpace = true }
        } else {
          r += c2; lastSpace = false
        }
      }
      if (r.length > 0 && r.charAt(r.length - 1) == ' ') r = r.substring(0, r.length - 1)
      return r
    },

    stripAllTags(s: string): string {
      let r = ''
      let inTag = false
      for (let i = 0; i < s.length; i++) {
        const c2 = s.charAt(i)
        if (c2 == '<') inTag = true
        else if (c2 == '>') inTag = false
        else if (!inTag) r += c2
      }
      return this.cleanText(r)
    },

    flatText(n: HtmlNode): string {
      if (n.type == 'text') return n.text ?? ''
      if (n.children == null) return n.text ?? ''
      let t = ''
      for (let i = 0; i < n.children!.length; i++) {
        const c = n.children![i]
        if (c.type == 'text') t += c.text ?? ''
        else if (c.name == 'br') t += '\n'
        else t += this.flatText(c)
      }
      return t
    },

    inlineStyle(name: string): string {
      if (name == 'b' || name == 'strong') return 'font-weight:bold'
      if (name == 'i' || name == 'em') return 'font-style:italic'
      if (name == 'u' || name == 'ins') return 'text-decoration:underline'
      if (name == 'del' || name == 's' || name == 'strike') return 'text-decoration:line-through'
      if (name == 'code') return 'font-family:monospace'
      if (name == 'sub') return 'font-size:smaller;vertical-align:sub'
      if (name == 'sup') return 'font-size:smaller;vertical-align:super'
      if (name == 'small') return 'font-size:0.8em'
      if (name == 'big') return 'font-size:1.2em'
      if (name == 'mark') return 'background-color:yellow'
      return ''
    },

    headingStyle(name: string): string {
      const sz: UTSJSONObject = { h1: '2em', h2: '1.5em', h3: '1.17em', h4: '1em', h5: '0.83em', h6: '0.67em' }
      return 'font-size:' + ((sz[name] as string) ?? '1em') + ';font-weight:bold'
    },

    // ========== 事件 ==========
    onLinkTap(n: HtmlNode): void {
      const href = n.attrs != null ? ((n.attrs!['href'] as string) ?? '') : ''
      this.$emit('linktap', n.attrs ?? ({} as UTSJSONObject))
      if (href.length > 0 && href.includes('://')) {
        uni.setClipboardData({ data: href, success: () => { uni.showToast({ title: '链接已复制', icon: 'none' }) } })
      }
    },
  },
})

export default __sfc__
function GenUniModulesMpHtmlComponentsMpHtmlMpHtmlRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({ class: "_mp_root" }), [
    _cE(Fragment, null, RenderHelpers.renderList(_ctx.localNodes, (n, i, __index, _cached): any => {
      return _cE(Fragment, _uM({ key: i }), [
        n.type == 'text'
          ? _cE("text", _uM({
              key: 0,
              decode: true
            }), _tD(n.text), 1 /* TEXT */)
          : n.name == 'br'
            ? _cE("text", _uM({ key: 1 }), "\n")
            : n.name == 'img'
              ? _cE("image", _uM({
                  key: 2,
                  src: (n.attrs != null ? (n.attrs!['src'] as string) ?? '' : ''),
                  style: _nS(_uM({"max-width":"750px"})),
                  mode: "widthFix"
                }), null, 12 /* STYLE, PROPS */, ["src"])
              : n.name == 'a'
                ? _cE("text", _uM({
                    key: 3,
                    class: "mp-a",
                    onClick: () => {_ctx.onLinkTap(n)}
                  }), _tD(_ctx.flatText(n)), 9 /* TEXT, PROPS */, ["onClick"])
                : isTrue(_ctx.isInline(n.name ?? ''))
                  ? _cE("text", _uM({
                      key: 4,
                      style: _nS(_ctx.inlineStyle(n.name ?? '')),
                      decode: true
                    }), _tD(_ctx.flatText(n)), 5 /* TEXT, STYLE */)
                  : isTrue(n.name == 'h1' || n.name == 'h2' || n.name == 'h3' || n.name == 'h4' || n.name == 'h5' || n.name == 'h6')
                    ? _cE("text", _uM({
                        key: 5,
                        style: _nS(_ctx.headingStyle(n.name ?? '')),
                        decode: true
                      }), _tD(_ctx.flatText(n)), 5 /* TEXT, STYLE */)
                    : isTrue(n.name == 'pre' || n.name == 'code')
                      ? _cE("text", _uM({
                          key: 6,
                          style: _nS(_uM({"font-family":"monospace","white-space":"pre-wrap"})),
                          decode: true
                        }), _tD(_ctx.flatText(n)), 5 /* TEXT, STYLE */)
                      : n.name == 'hr'
                        ? _cE("view", _uM({
                            key: 7,
                            style: _nS(_uM({"height":"1px","background-color":"#e0e0e0","margin":"10px 0"}))
                          }), null, 4 /* STYLE */)
                        : n.name == 'table'
                          ? _cE("view", _uM({
                              key: 8,
                              style: _nS(_uM({"display":"flex","flex-direction":"column"}))
                            }), [
                              _cE(Fragment, null, RenderHelpers.renderList((n.children ?? []), (row, ri, __index, _cached): any => {
                                return _cE("view", _uM({
                                  key: ri,
                                  style: _nS(_uM({"display":"flex","flex-direction":"row"}))
                                }), [
                                  _cE(Fragment, null, RenderHelpers.renderList((row.children ?? []), (cell, ci, __index, _cached): any => {
                                    return _cE("view", _uM({
                                      key: ci,
                                      style: _nS((cell.name == 'th' ? 'font-weight:bold;background-color:#f5f5f5;' : '') + 'flex:1;padding:4px 8px;border-width:1px;border-color:#d0d0d0;border-style:solid')
                                    }), [
                                      _cE("text", _uM({ decode: true }), _tD(_ctx.flatText(cell)), 1 /* TEXT */)
                                    ], 4 /* STYLE */)
                                  }), 128 /* KEYED_FRAGMENT */)
                                ], 4 /* STYLE */)
                              }), 128 /* KEYED_FRAGMENT */)
                            ], 4 /* STYLE */)
                          : isTrue(n.name == 'ul' || n.name == 'ol')
                            ? _cE("view", _uM({
                                key: 9,
                                style: _nS(_uM({"padding-left":"20px"}))
                              }), [
                                _cE(Fragment, null, RenderHelpers.renderList((n.children ?? []), (li, lii, __index, _cached): any => {
                                  return _cE("view", _uM({
                                    key: lii,
                                    style: _nS(_uM({"flex-direction":"row"}))
                                  }), [
                                    _cE("text", null, _tD(n.name == 'ol' ? (lii + 1).toString() + '. ' : '• '), 1 /* TEXT */),
                                    _cE("text", _uM({ decode: true }), _tD(_ctx.flatText(li)), 1 /* TEXT */)
                                  ], 4 /* STYLE */)
                                }), 128 /* KEYED_FRAGMENT */)
                              ], 4 /* STYLE */)
                            : _cE("view", _uM({ key: 10 }), [
                                _cE(Fragment, null, RenderHelpers.renderList((n.children ?? []), (cn, ci, __index, _cached): any => {
                                  return _cE(Fragment, _uM({ key: ci }), [
                                    cn.type == 'text'
                                      ? _cE("text", _uM({
                                          key: 0,
                                          decode: true
                                        }), _tD(cn.text), 1 /* TEXT */)
                                      : cn.name == 'br'
                                        ? _cE("text", _uM({ key: 1 }), "\n")
                                        : cn.name == 'img'
                                          ? _cE("image", _uM({
                                              key: 2,
                                              src: (cn.attrs != null ? (cn.attrs!['src'] as string) ?? '' : ''),
                                              style: _nS(_uM({"max-width":"750px"})),
                                              mode: "widthFix"
                                            }), null, 12 /* STYLE, PROPS */, ["src"])
                                          : cn.name == 'a'
                                            ? _cE("text", _uM({
                                                key: 3,
                                                class: "mp-a",
                                                onClick: () => {_ctx.onLinkTap(cn)}
                                              }), _tD(_ctx.flatText(cn)), 9 /* TEXT, PROPS */, ["onClick"])
                                            : isTrue(_ctx.isInline(cn.name ?? ''))
                                              ? _cE("text", _uM({
                                                  key: 4,
                                                  style: _nS(_ctx.inlineStyle(cn.name ?? '')),
                                                  decode: true
                                                }), _tD(_ctx.flatText(cn)), 5 /* TEXT, STYLE */)
                                              : _cE("text", _uM({
                                                  key: 5,
                                                  decode: true
                                                }), _tD(_ctx.flatText(cn)), 1 /* TEXT */)
                                  ], 64 /* STABLE_FRAGMENT */)
                                }), 128 /* KEYED_FRAGMENT */)
                              ])
      ], 64 /* STABLE_FRAGMENT */)
    }), 128 /* KEYED_FRAGMENT */)
  ])
}
export type MpHtmlComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesMpHtmlComponentsMpHtmlMpHtmlStyles = [_uM([["_mp_root", _pS(_uM([["paddingTop", 1], ["paddingRight", 0], ["paddingBottom", 1], ["paddingLeft", 0]]))], ["mp-a", _pS(_uM([["color", "#366092"]]))]])]
