@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenUniModulesMpHtmlComponentsMpHtmlMpHtml : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {
            if (this.content.length > 0) {
                this.doParse(this.content)
            }
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.content
        }
        , fun(kVal: String) {
            if (kVal.length > 0) {
                this.doParse(kVal)
            }
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "_mp_root"), _uA(
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.localNodes, fun(n, i, __index, _cached): Any {
                return _cE(Fragment, _uM("key" to i), _uA(
                    if (n.type == "text") {
                        _cE("text", _uM("key" to 0, "decode" to true), _tD(n.text), 1)
                    } else {
                        if (n.name == "br") {
                            _cE("text", _uM("key" to 1), "\n")
                        } else {
                            if (n.name == "img") {
                                _cE("image", _uM("key" to 2, "src" to if (n.attrs != null) {
                                    (n.attrs!!["src"] as String) ?: ""
                                } else {
                                    ""
                                }, "style" to _nS(_uM("max-width" to "750px")), "mode" to "widthFix"), null, 12, _uA(
                                    "src"
                                ))
                            } else {
                                if (n.name == "a") {
                                    _cE("text", _uM("key" to 3, "class" to "mp-a", "onClick" to fun(){
                                        _ctx.onLinkTap(n)
                                    }), _tD(_ctx.flatText(n)), 9, _uA(
                                        "onClick"
                                    ))
                                } else {
                                    if (isTrue(_ctx.isInline(n.name ?: ""))) {
                                        _cE("text", _uM("key" to 4, "style" to _nS(_ctx.inlineStyle(n.name ?: "")), "decode" to true), _tD(_ctx.flatText(n)), 5)
                                    } else {
                                        if (isTrue(n.name == "h1" || n.name == "h2" || n.name == "h3" || n.name == "h4" || n.name == "h5" || n.name == "h6")) {
                                            _cE("text", _uM("key" to 5, "style" to _nS(_ctx.headingStyle(n.name ?: "")), "decode" to true), _tD(_ctx.flatText(n)), 5)
                                        } else {
                                            if (isTrue(n.name == "pre" || n.name == "code")) {
                                                _cE("text", _uM("key" to 6, "style" to _nS(_uM("font-family" to "monospace", "white-space" to "pre-wrap")), "decode" to true), _tD(_ctx.flatText(n)), 5)
                                            } else {
                                                if (n.name == "hr") {
                                                    _cE("view", _uM("key" to 7, "style" to _nS(_uM("height" to "1px", "background-color" to "#e0e0e0", "margin" to "10px 0"))), null, 4)
                                                } else {
                                                    if (n.name == "table") {
                                                        _cE("view", _uM("key" to 8, "style" to _nS(_uM("display" to "flex", "flex-direction" to "column"))), _uA(
                                                            _cE(Fragment, null, RenderHelpers.renderList((n.children ?: _uA()), fun(row, ri, __index, _cached): Any {
                                                                return _cE("view", _uM("key" to ri, "style" to _nS(_uM("display" to "flex", "flex-direction" to "row"))), _uA(
                                                                    _cE(Fragment, null, RenderHelpers.renderList((row.children ?: _uA()), fun(cell, ci, __index, _cached): Any {
                                                                        return _cE("view", _uM("key" to ci, "style" to _nS((if (cell.name == "th") {
                                                                            "font-weight:bold;background-color:#f5f5f5;"
                                                                        } else {
                                                                            ""
                                                                        }) + "flex:1;padding:4px 8px;border-width:1px;border-color:#d0d0d0;border-style:solid")), _uA(
                                                                            _cE("text", _uM("decode" to true), _tD(_ctx.flatText(cell)), 1)
                                                                        ), 4)
                                                                    }), 128)
                                                                ), 4)
                                                            }), 128)
                                                        ), 4)
                                                    } else {
                                                        if (isTrue(n.name == "ul" || n.name == "ol")) {
                                                            _cE("view", _uM("key" to 9, "style" to _nS(_uM("padding-left" to "20px"))), _uA(
                                                                _cE(Fragment, null, RenderHelpers.renderList((n.children ?: _uA()), fun(li, lii, __index, _cached): Any {
                                                                    return _cE("view", _uM("key" to lii, "style" to _nS(_uM("flex-direction" to "row"))), _uA(
                                                                        _cE("text", null, _tD(if (n.name == "ol") {
                                                                            (lii + 1).toString(10) + ". "
                                                                        } else {
                                                                            "• "
                                                                        }), 1),
                                                                        _cE("text", _uM("decode" to true), _tD(_ctx.flatText(li)), 1)
                                                                    ), 4)
                                                                }), 128)
                                                            ), 4)
                                                        } else {
                                                            _cE("view", _uM("key" to 10), _uA(
                                                                _cE(Fragment, null, RenderHelpers.renderList((n.children ?: _uA()), fun(cn, ci, __index, _cached): Any {
                                                                    return _cE(Fragment, _uM("key" to ci), _uA(
                                                                        if (cn.type == "text") {
                                                                            _cE("text", _uM("key" to 0, "decode" to true), _tD(cn.text), 1)
                                                                        } else {
                                                                            if (cn.name == "br") {
                                                                                _cE("text", _uM("key" to 1), "\n")
                                                                            } else {
                                                                                if (cn.name == "img") {
                                                                                    _cE("image", _uM("key" to 2, "src" to if (cn.attrs != null) {
                                                                                        (cn.attrs!!["src"] as String) ?: ""
                                                                                    } else {
                                                                                        ""
                                                                                    }, "style" to _nS(_uM("max-width" to "750px")), "mode" to "widthFix"), null, 12, _uA(
                                                                                        "src"
                                                                                    ))
                                                                                } else {
                                                                                    if (cn.name == "a") {
                                                                                        _cE("text", _uM("key" to 3, "class" to "mp-a", "onClick" to fun(){
                                                                                            _ctx.onLinkTap(cn)
                                                                                        }), _tD(_ctx.flatText(cn)), 9, _uA(
                                                                                            "onClick"
                                                                                        ))
                                                                                    } else {
                                                                                        if (isTrue(_ctx.isInline(cn.name ?: ""))) {
                                                                                            _cE("text", _uM("key" to 4, "style" to _nS(_ctx.inlineStyle(cn.name ?: "")), "decode" to true), _tD(_ctx.flatText(cn)), 5)
                                                                                        } else {
                                                                                            _cE("text", _uM("key" to 5, "decode" to true), _tD(_ctx.flatText(cn)), 1)
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    ), 64)
                                                                }
                                                                ), 128)
                                                            ))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ), 64)
            }
            ), 128)
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var containerStyle: String by `$props`
    open var content: String by `$props`
    open var copyLink: Any? by `$props`
    open var domain: String by `$props`
    open var previewImg: Any? by `$props`
    open var selectable: Any? by `$props`
    open var setTitle: Any? by `$props`
    open var showImgMenu: Any? by `$props`
    open var useAnchor: Any? by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var localNodes: UTSArray<HtmlNode> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "localNodes" to _uA<HtmlNode>())
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return getPx(kVal, unit)
    }
    open var bem = ::gen_bem_fn
    open fun gen_bem_fn(name: String, fixed: UTSArray<String>, change: UTSArray<UTSArray<Any>>): String {
        return uni.UNI5198058.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open var getChildIndex = ::gen_getChildIndex_fn
    open fun gen_getChildIndex_fn(ins: ComponentPublicInstance): Number {
        var index: Number = -1
        if (this.parent != null) {
            (this.parent!!!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).forEach(fun(child: ComponentPublicInstance, idx: Number){
                if (child == ins) {
                    index = idx
                }
            }
            )
        }
        return index
    }
    open var getParent = ::gen_getParent_fn
    open fun gen_getParent_fn(name: String): ComponentPublicInstance? {
        var parent = this.`$parent`
        while(parent != null){
            if (parent.`$options`["name"] != name) {
                parent = parent.`$parent`
            } else {
                break
            }
        }
        return parent
    }
    open var addChild = ::gen_addChild_fn
    open fun gen_addChild_fn(ins: ComponentPublicInstance): Unit {
        var exist = false
        var childs: UTSArray<ComponentPublicInstance> = this.children
        childs.map(fun(child: ComponentPublicInstance){
            if (ins == child) {
                exist = true
            }
        }
        )
        if (exist == false) {
            this.children.push(ins)
        }
    }
    open var addChildRef = ::gen_addChildRef_fn
    open fun gen_addChildRef_fn(str: String): Unit {
        var index = this.childrenRefs.indexOf("str")
        if (index <= -1) {
            this.childrenRefs.push(str)
        }
    }
    open fun getParentData(parentName: String, refMode: Boolean = false): Any {
        var parent = this.getParent(parentName)
        this.parent = parent
        if (parent != null) {
            if (parent?.`$data` != null && parent?.`$data`?.get("children") != null) {
                if (refMode) {
                    parent?.`$callMethod`("addChildRef", this.`$data`["refstr"])
                } else {
                    parent?.`$callMethod`("addChild", this)
                }
            }
            UTSJSONObject.keys(this.parentData).map(fun(key: String){
                if (parent?.`$props` != null && parent?.`$props`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$props`?.get(key)
                    }
                }
                if (parent?.`$data` != null && parent?.`$data`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$data`?.get(key)
                    }
                }
            }
            )
        }
        return _uO()
    }
    open var preventEvent = ::gen_preventEvent_fn
    open fun gen_preventEvent_fn(e: UniEvent) {
        e.stopPropagation()
    }
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn(e: UniEvent) {
        this.preventEvent(e)
    }
    open var doParse = ::gen_doParse_fn
    open fun gen_doParse_fn(html: String): Unit {
        val nodes = this.parseHtml(html)
        this.localNodes = nodes
        if (nodes.length > 0) {
            setTimeout(fun(){
                this.`$emit`("load")
            }
            , 50)
        }
    }
    open var setContent = ::gen_setContent_fn
    open fun gen_setContent_fn(html: String): Unit {
        this.doParse(html)
    }
    open var getText = ::gen_getText_fn
    open fun gen_getText_fn(): String {
        return this.flatText(HtmlNode(children = this.localNodes))
    }
    open var parseHtml = ::gen_parseHtml_fn
    open fun gen_parseHtml_fn(html: String): UTSArray<HtmlNode> {
        val result: UTSArray<HtmlNode> = _uA()
        var i: Number = 0
        val len = html.length
        var txt = ""
        while(i < len){
            val lt = html.indexOf("<", i)
            if (lt == -1) {
                txt += html.substring(i)
                break
            }
            if (lt > i) {
                txt += html.substring(i, lt)
            }
            val gt = html.indexOf(">", lt)
            if (gt == -1) {
                txt += html.substring(i)
                break
            }
            val tag = html.substring(lt + 1, gt)
            i = gt + 1
            if (tag.length >= 3 && tag.charAt(0) == "!" && tag.charAt(1) == "-") {
                val end = html.indexOf("-->", lt)
                if (end != -1) {
                    i = end + 3
                }
                continue
            }
            if (tag.charAt(0) == "/") {
                if (txt.length > 0) {
                    val t = this.cleanText(txt)
                    if (t.length > 0) {
                        result.push(HtmlNode(type = "text", text = t))
                    }
                    txt = ""
                }
                continue
            }
            var name = ""
            run {
                var j: Number = 0
                while(j < tag.length){
                    val c2 = tag.charAt(j)
                    if (c2 == " " || c2 == "\t" || c2 == "/") {
                        break
                    }
                    name += c2
                    j++
                }
            }
            name = name.toLowerCase()
            if (name.length == 0) {
                continue
            }
            val attrs = this.parseAttrs(tag)
            if (txt.length > 0) {
                val t = this.cleanText(txt)
                if (t.length > 0) {
                    result.push(HtmlNode(type = "text", text = t))
                }
                txt = ""
            }
            if (name == "br") {
                result.push(HtmlNode(name = "br"))
                continue
            }
            if (name == "hr") {
                result.push(HtmlNode(name = "hr"))
                continue
            }
            if (name == "img") {
                result.push(HtmlNode(name = "img", attrs = attrs))
                continue
            }
            val closeStr = "</" + name + ">"
            val closePos = this.findMatchingClose(html, i, name)
            if (closePos == -1) {
                continue
            }
            val inner = html.substring(i, closePos)
            val node: HtmlNode = HtmlNode(name = name, attrs = attrs)
            if (name == "table") {
                node.children = this.parseTable(inner)
            } else if (name == "ul" || name == "ol") {
                node.children = this.parseList(inner)
            } else if (name == "a" || this.isInline(name) || this.isHeading(name) || name == "pre" || name == "code") {
                node.children = _uA(
                    HtmlNode(type = "text", text = this.stripAllTags(inner))
                )
            } else if (name == "p" || name == "div" || name == "section" || name == "blockquote" || name == "li" || name == "article" || name == "aside" || name == "header" || name == "footer" || name == "nav" || name == "main") {
                node.children = this.parseHtml(inner)
                node.name = "div"
            } else {
                node.children = this.parseHtml(inner)
                node.name = "div"
            }
            result.push(node)
            i = closePos + closeStr.length
        }
        if (txt.length > 0) {
            val t = this.cleanText(txt)
            if (t.length > 0) {
                result.push(HtmlNode(type = "text", text = t))
            }
        }
        return result
    }
    open var findMatchingClose = ::gen_findMatchingClose_fn
    open fun gen_findMatchingClose_fn(html: String, start: Number, tagName: String): Number {
        var depth: Number = 1
        var i = start
        val openStr = "<" + tagName
        val closeStr = "</" + tagName + ">"
        while(i < html.length){
            val openPos = html.indexOf(openStr, i)
            val closePos = html.indexOf(closeStr, i)
            if (closePos == -1) {
                return -1
            }
            if (openPos != -1 && openPos < closePos) {
                val afterOpen = html.indexOf(">", openPos)
                if (afterOpen != -1) {
                    val afterOpenTag = html.substring(openPos + 1, afterOpen)
                    val afterOpenName = afterOpenTag.split(" ")[0].split("\t")[0].toLowerCase()
                    if (afterOpenName == tagName) {
                        depth += 1
                        i = afterOpen + 1
                        continue
                    }
                }
            }
            depth -= 1
            if (depth == 0) {
                return closePos
            }
            i = closePos + closeStr.length
        }
        return -1
    }
    open var parseAttrs = ::gen_parseAttrs_fn
    open fun gen_parseAttrs_fn(tag: String): UTSJSONObject {
        val attrs: UTSJSONObject = _uO()
        var i: Number = 0
        while(i < tag.length && tag.charAt(i) != " " && tag.charAt(i) != "\t"){
            i++
        }
        while(i < tag.length){
            while(i < tag.length && this.isSpace(tag.charAt(i))){
                i++
            }
            if (i >= tag.length || tag.charAt(i) == "/") {
                break
            }
            var aname = ""
            while(i < tag.length && tag.charAt(i) != "=" && tag.charAt(i) != " " && tag.charAt(i) != "\t" && tag.charAt(i) != "/"){
                aname += tag.charAt(i)
                i++
            }
            if (aname.length == 0) {
                break
            }
            aname = aname.toLowerCase()
            while(i < tag.length && this.isSpace(tag.charAt(i))){
                i++
            }
            if (i < tag.length && tag.charAt(i) == "=") {
                i++
                while(i < tag.length && this.isSpace(tag.charAt(i))){
                    i++
                }
                if (i < tag.length && (tag.charAt(i) == "\"" || tag.charAt(i) == "'")) {
                    val q = tag.charAt(i)
                    i++
                    var kVal = ""
                    while(i < tag.length && tag.charAt(i) != q){
                        kVal += tag.charAt(i)
                        i++
                    }
                    if (i < tag.length) {
                        i++
                    }
                    attrs[aname] = kVal
                } else {
                    var kVal = ""
                    while(i < tag.length && !this.isSpace(tag.charAt(i)) && tag.charAt(i) != ">"){
                        kVal += tag.charAt(i)
                        i++
                    }
                    attrs[aname] = kVal
                }
            } else {
                attrs[aname] = "T"
            }
        }
        return attrs
    }
    open var parseTable = ::gen_parseTable_fn
    open fun gen_parseTable_fn(html: String): UTSArray<HtmlNode> {
        val rows: UTSArray<HtmlNode> = _uA()
        var i: Number = 0
        while(i < html.length){
            val trS = html.indexOf("<tr", i)
            if (trS == -1) {
                break
            }
            val trGt = html.indexOf(">", trS)
            if (trGt == -1) {
                break
            }
            val trE = html.indexOf("</tr>", trGt)
            if (trE == -1) {
                break
            }
            val trInner = html.substring(trGt + 1, trE)
            val cells: UTSArray<HtmlNode> = _uA()
            var ci: Number = 0
            while(ci < trInner.length){
                val tdS = trInner.indexOf("<t", ci)
                if (tdS == -1) {
                    break
                }
                val ch = trInner.charAt(tdS + 2).toLowerCase()
                val cellTag = if ((ch == "h")) {
                    "th"
                } else {
                    if ((ch == "d")) {
                        "td"
                    } else {
                        ""
                    }
                }
                if (cellTag.length == 0) {
                    ci = tdS + 2
                    continue
                }
                val tdGt = trInner.indexOf(">", tdS)
                if (tdGt == -1) {
                    break
                }
                val tdE = trInner.indexOf("</" + cellTag + ">", tdGt)
                if (tdE == -1) {
                    break
                }
                val text = this.stripAllTags(trInner.substring(tdGt + 1, tdE))
                cells.push(HtmlNode(name = cellTag, children = _uA(
                    HtmlNode(type = "text", text = text)
                )))
                ci = tdE + cellTag.length + 3
            }
            rows.push(HtmlNode(name = "tr", children = cells))
            i = trE + 5
        }
        return rows
    }
    open var parseList = ::gen_parseList_fn
    open fun gen_parseList_fn(html: String): UTSArray<HtmlNode> {
        val items: UTSArray<HtmlNode> = _uA()
        var i: Number = 0
        while(true){
            val liS = html.indexOf("<li", i)
            if (liS == -1) {
                break
            }
            val liGt = html.indexOf(">", liS)
            if (liGt == -1) {
                break
            }
            val liE = html.indexOf("</li>", liGt)
            if (liE == -1) {
                break
            }
            val text = this.stripAllTags(html.substring(liGt + 1, liE))
            if (text.length > 0) {
                items.push(HtmlNode(name = "li", children = _uA(
                    HtmlNode(type = "text", text = text)
                )))
            }
            i = liE + 5
        }
        return items
    }
    open var isSpace = ::gen_isSpace_fn
    open fun gen_isSpace_fn(ch: String): Boolean {
        return ch == " " || ch == "\t" || ch == "\n" || ch == "\r"
    }
    open var isInline = ::gen_isInline_fn
    open fun gen_isInline_fn(name: String): Boolean {
        return name == "span" || name == "b" || name == "strong" || name == "i" || name == "em" || name == "u" || name == "ins" || name == "del" || name == "s" || name == "strike" || name == "sub" || name == "sup" || name == "code" || name == "mark" || name == "small" || name == "big" || name == "label" || name == "q"
    }
    open var isHeading = ::gen_isHeading_fn
    open fun gen_isHeading_fn(name: String): Boolean {
        return name.length == 2 && name.charAt(0) == "h" && name.charAt(1) >= "1" && name.charAt(1) <= "6"
    }
    open var cleanText = ::gen_cleanText_fn
    open fun gen_cleanText_fn(s: String): String {
        var r = ""
        var lastSpace = false
        run {
            var i: Number = 0
            while(i < s.length){
                val c2 = s.charAt(i)
                if (c2 == " " || c2 == "\t" || c2 == "\n" || c2 == "\r") {
                    if (!lastSpace && r.length > 0) {
                        r += " "
                        lastSpace = true
                    }
                } else {
                    r += c2
                    lastSpace = false
                }
                i++
            }
        }
        if (r.length > 0 && r.charAt(r.length - 1) == " ") {
            r = r.substring(0, r.length - 1)
        }
        return r
    }
    open var stripAllTags = ::gen_stripAllTags_fn
    open fun gen_stripAllTags_fn(s: String): String {
        var r = ""
        var inTag = false
        run {
            var i: Number = 0
            while(i < s.length){
                val c2 = s.charAt(i)
                if (c2 == "<") {
                    inTag = true
                } else if (c2 == ">") {
                    inTag = false
                } else if (!inTag) {
                    r += c2
                }
                i++
            }
        }
        return this.cleanText(r)
    }
    open var flatText = ::gen_flatText_fn
    open fun gen_flatText_fn(n: HtmlNode): String {
        if (n.type == "text") {
            return n.text ?: ""
        }
        if (n.children == null) {
            return n.text ?: ""
        }
        var t = ""
        run {
            var i: Number = 0
            while(i < n.children!!.length){
                val c = n.children!![i]
                if (c.type == "text") {
                    t += c.text ?: ""
                } else if (c.name == "br") {
                    t += "\n"
                } else {
                    t += this.flatText(c)
                }
                i++
            }
        }
        return t
    }
    open var inlineStyle = ::gen_inlineStyle_fn
    open fun gen_inlineStyle_fn(name: String): String {
        if (name == "b" || name == "strong") {
            return "font-weight:bold"
        }
        if (name == "i" || name == "em") {
            return "font-style:italic"
        }
        if (name == "u" || name == "ins") {
            return "text-decoration:underline"
        }
        if (name == "del" || name == "s" || name == "strike") {
            return "text-decoration:line-through"
        }
        if (name == "code") {
            return "font-family:monospace"
        }
        if (name == "sub") {
            return "font-size:smaller;vertical-align:sub"
        }
        if (name == "sup") {
            return "font-size:smaller;vertical-align:super"
        }
        if (name == "small") {
            return "font-size:0.8em"
        }
        if (name == "big") {
            return "font-size:1.2em"
        }
        if (name == "mark") {
            return "background-color:yellow"
        }
        return ""
    }
    open var headingStyle = ::gen_headingStyle_fn
    open fun gen_headingStyle_fn(name: String): String {
        val sz: UTSJSONObject = _uO("h1" to "2em", "h2" to "1.5em", "h3" to "1.17em", "h4" to "1em", "h5" to "0.83em", "h6" to "0.67em")
        return "font-size:" + ((sz[name] as String) ?: "1em") + ";font-weight:bold"
    }
    open var onLinkTap = ::gen_onLinkTap_fn
    open fun gen_onLinkTap_fn(n: HtmlNode): Unit {
        val href = if (n.attrs != null) {
            ((n.attrs!!["href"] as String) ?: "")
        } else {
            ""
        }
        this.`$emit`("linktap", n.attrs ?: (_uO()))
        if (href.length > 0 && href.includes("://")) {
            uni_setClipboardData(SetClipboardDataOptions(data = href, success = fun(_){
                uni_showToast(ShowToastOptions(title = "链接已复制", icon = "none"))
            }
            ))
        }
    }
    companion object {
        var name = "mp-html"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("_mp_root" to _pS(_uM("paddingTop" to 1, "paddingRight" to 0, "paddingBottom" to 1, "paddingLeft" to 0)), "mp-a" to _pS(_uM("color" to "#366092")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("load" to null, "ready" to null, "imgtap" to null, "linktap" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "containerStyle" to _uM("type" to "String", "default" to ""), "content" to _uM("type" to "String", "default" to ""), "copyLink" to _uM("default" to true), "domain" to _uM("type" to "String", "default" to ""), "previewImg" to _uM("default" to true), "selectable" to _uM("default" to false), "setTitle" to _uM("default" to true), "showImgMenu" to _uM("default" to true), "useAnchor" to _uM("default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "containerStyle",
            "content",
            "copyLink",
            "domain",
            "previewImg",
            "selectable",
            "setTitle",
            "showImgMenu",
            "useAnchor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
