@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
import io.dcloud.uniapp.extapi.createSelectorQuery as uni_createSelectorQuery
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.pageScrollTo as uni_pageScrollTo
import io.dcloud.uniapp.extapi.previewImage as uni_previewImage
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenUniModulesUviewUltraComponentsUpParseUpParse : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.content
        }
        , fun(value: String): Unit {
            this.setContent(value, false)
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_rich_text = resolveComponent("rich-text")
        return _cE("view", _uM("id" to "_root", "class" to _nC(_ctx.rootClass), "style" to _nS(_ctx.containerStyle), "onClick" to _ctx.onRootClick), _uA(
            if (_ctx.nodes.length == 0) {
                renderSlot(_ctx.`$slots`, "default", _uM("key" to 0))
            } else {
                _cV(_component_rich_text, _uM("key" to 1, "nodes" to _ctx.nodes, "selectable" to _ctx.selectableValue, "onItemclick" to _ctx.onRichTextItemClick), null, 8, _uA(
                    "nodes",
                    "selectable",
                    "onItemclick"
                ))
            }
        ), 14, _uA(
            "onClick"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var containerStyle: String by `$props`
    open var content: String by `$props`
    open var copyLink: Boolean by `$props`
    open var domain: String by `$props`
    open var errorImg: String by `$props`
    open var lazyLoad: Boolean by `$props`
    open var loadingImg: String by `$props`
    open var pauseVideo: Boolean by `$props`
    open var previewImg: Boolean by `$props`
    open var scrollTable: Boolean by `$props`
    open var selectable: Boolean by `$props`
    open var setTitle: Boolean by `$props`
    open var showImgMenu: Boolean by `$props`
    open var tagStyle: Any? by `$props`
    open var useAnchor: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var nodes: UTSArray<UTSJSONObject> by `$data`
    open var imgList: UTSArray<String> by `$data`
    open var rootClass: String by `$data`
    open var selectableValue: Boolean by `$data`
    open var previewImgValue: Boolean by `$data`
    open var copyLinkValue: Boolean by `$data`
    open var showImgMenuValue: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "nodes" to _uA<UTSJSONObject>(), "imgList" to _uA<String>(), "rootClass" to computed<String>(fun(): String {
            return (if (this.selectableValue) {
                "_select "
            } else {
                ""
            }
            ) + "_root"
        }
        ), "selectableValue" to computed<Boolean>(fun(): Boolean {
            return boolValue(this.selectable)
        }
        ), "previewImgValue" to computed<Boolean>(fun(): Boolean {
            return boolValue(this.previewImg)
        }
        ), "copyLinkValue" to computed<Boolean>(fun(): Boolean {
            return boolValue(this.copyLink)
        }
        ), "showImgMenuValue" to computed<Boolean>(fun(): Boolean {
            return boolValue(this.showImgMenu)
        }
        ))
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
    open fun getText(nodes: UTSArray<UTSJSONObject>? = null): String {
        return collectText(if (nodes == null) {
            this.nodes as UTSArray<UTSJSONObject>
        } else {
            nodes
        }
        )
    }
    open var getRect = ::gen_getRect_fn
    open fun gen_getRect_fn(): UTSPromise<Any> {
        return UTSPromise(fun(resolve, reject){
            uni_createSelectorQuery().`in`(this).select("#_root").boundingClientRect().exec(fun(res: UTSArray<Any>){
                if (res.length > 0 && res[0] != null) {
                    resolve(res[0])
                } else {
                    reject(UTSError("Root label not found"))
                }
            }
            )
        }
        )
    }
    open fun navigateTo(id: String, offset: Number = 0): UTSPromise<Unit> {
        return UTSPromise(fun(resolve, reject){
            if (!boolValue(this.useAnchor)) {
                reject(UTSError("Anchor is disabled"))
                return
            }
            val selector = if (id.length > 0) {
                "#_root #" + id
            } else {
                "#_root"
            }
            uni_createSelectorQuery().`in`(this).select(selector).boundingClientRect().exec(fun(res: UTSArray<Any>){
                if (res.length == 0 || res[0] == null) {
                    reject(UTSError("Label not found"))
                    return
                }
                val rect = res[0] as UTSJSONObject
                val top = parseFloat(textValue(rect["top"]))
                uni_pageScrollTo(PageScrollToOptions(scrollTop = (if (isNaN(top)) {
                    0
                } else {
                    top
                }
                ) + offset, duration = 300))
                resolve(Unit)
            }
            )
        }
        )
    }
    open fun setContent(content: String, append: Boolean = false): Unit {
        val parsed = this.parseContent(content)
        this.nodes = if (append) {
            (this.nodes as UTSArray<UTSJSONObject>).concat(parsed)
        } else {
            parsed
        }
        this.`$nextTick`(fun(){
            this.`$emit`("load")
            this.getRect().then(fun(rect: Any){
                this.`$emit`("ready", rect)
            }
            ).`catch`(fun(){
                this.`$emit`("ready", _uO())
            }
            )
        }
        )
    }
    open var parseContent = ::gen_parseContent_fn
    open fun gen_parseContent_fn(content: String): UTSArray<UTSJSONObject> {
        this.imgList = _uA<String>()
        val roots = _uA<UTSJSONObject>()
        val stack = _uA<UTSJSONObject>()
        var index: Number = 0
        var skipTag = ""
        while(index < content.length){
            val lt = content.indexOf("<", index)
            if (lt == -1) {
                this.appendText(content.substring(index), stack, roots)
                break
            }
            if (lt > index) {
                this.appendText(content.substring(index, lt), stack, roots)
            }
            val gt = content.indexOf(">", lt + 1)
            if (gt == -1) {
                this.appendText(content.substring(lt), stack, roots)
                break
            }
            val raw = content.substring(lt + 1, gt)
            val trimmed = raw.trim()
            if (trimmed.startsWith("!--")) {
                index = gt + 1
                continue
            }
            if (trimmed.startsWith("/")) {
                val closeName = firstWord(trimmed.substring(1))
                if (skipTag == closeName) {
                    skipTag = ""
                } else {
                    this.closeTag(closeName, stack)
                }
                index = gt + 1
                continue
            }
            if (skipTag.length > 0) {
                index = gt + 1
                continue
            }
            val name = firstWord(trimmed)
            if (name.length == 0) {
                index = gt + 1
                continue
            }
            if (name == "script" || name == "style") {
                skipTag = name
                index = gt + 1
                continue
            }
            if (hasString(ignoreTags, name) && name != "img") {
                index = gt + 1
                continue
            }
            val node = makeNode(name)
            this.applyAttrs(node, trimmed)
            appendChild(stack, roots, node)
            if (!trimmed.endsWith("/") && !hasString(voidTags, name)) {
                stack.push(node)
            }
            index = gt + 1
        }
        while(stack.length > 0){
            stack.pop()
        }
        return roots
    }
    open var appendText = ::gen_appendText_fn
    open fun gen_appendText_fn(text: String, stack: UTSArray<UTSJSONObject>, roots: UTSArray<UTSJSONObject>): Unit {
        val keepSpace = stack.length > 0 && textValue(stack[stack.length - 1]["name"]) == "pre"
        val normalized = normalizeSpace(decodeHtml(text), keepSpace)
        if (normalized.length == 0 || (!keepSpace && normalized == " ")) {
            return
        }
        appendChild(stack, roots, makeText(normalized))
    }
    open var closeTag = ::gen_closeTag_fn
    open fun gen_closeTag_fn(name: String, stack: UTSArray<UTSJSONObject>): Unit {
        run {
            var i = stack.length - 1
            while(i >= 0){
                if (textValue(stack[i]["name"]) == name) {
                    while(stack.length > i)stack.pop()
                    return
                }
                i--
            }
        }
    }
    open var applyAttrs = ::gen_applyAttrs_fn
    open fun gen_applyAttrs_fn(node: UTSJSONObject, raw: String): Unit {
        val name = textValue(node["name"])
        val attrs: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("attrs", "uni_modules/uview-ultra/components/up-parse/up-parse.uvue", 334, 10))
        val id = readAttr(raw, "id")
        val klass = readAttr(raw, "class")
        val style = readAttr(raw, "style")
        val href = readAttr(raw, "href")
        val src = readAttr(raw, "src")
        val alt = readAttr(raw, "alt")
        if (id.length > 0) {
            attrs["id"] = id
        }
        if (klass.length > 0) {
            attrs["class"] = klass
        }
        val tagStyle = this.getDefaultStyle(name)
        val mergedStyle = tagStyle + (if (style.length > 0 && tagStyle.length > 0) {
            ";"
        } else {
            ""
        }
        ) + style
        if (mergedStyle.length > 0) {
            attrs["style"] = mergedStyle
        }
        if (href.length > 0) {
            attrs["href"] = this.resolveUrl(href)
        }
        if (src.length > 0) {
            attrs["src"] = this.resolveUrl(src)
        }
        if (alt.length > 0) {
            attrs["alt"] = alt
        }
        if (name == "img" && textValue(attrs["src"]).length > 0) {
            attrs["i"] = this.imgList.length
            this.imgList.push(textValue(attrs["src"]))
        }
        if (name == "title" && boolValue(this.setTitle)) {
            node["__title"] = true
        }
        node["attrs"] = attrs
    }
    open var getDefaultStyle = ::gen_getDefaultStyle_fn
    open fun gen_getDefaultStyle_fn(name: String): String {
        val custom = this.tagStyle as UTSJSONObject?
        if (custom != null && custom[name] != null) {
            return textValue(custom[name])
        }
        if (name == "h1") {
            return "font-size:2em;font-weight:bold;margin:0.67em 0"
        }
        if (name == "h2") {
            return "font-size:1.5em;font-weight:bold;margin:0.83em 0"
        }
        if (name == "h3") {
            return "font-size:1.17em;font-weight:bold;margin:1em 0"
        }
        if (name == "h4" || name == "h5" || name == "h6") {
            return "font-weight:bold;margin:1em 0"
        }
        if (name == "p") {
            return "margin:0.5em 0"
        }
        if (name == "blockquote") {
            return "border-left:4px solid #dcdfe6;padding-left:10px;color:#606266"
        }
        if (name == "code") {
            return "font-family:monospace;background-color:#f5f7fa;padding:2px 4px"
        }
        if (name == "pre") {
            return "font-family:monospace;white-space:pre-wrap;background-color:#f5f7fa;padding:8px;overflow:auto"
        }
        if (name == "table") {
            return "border-collapse:collapse;width:100%"
        }
        if (name == "th" || name == "td") {
            return "border:1px solid #ebeef5;padding:6px"
        }
        return ""
    }
    open var resolveUrl = ::gen_resolveUrl_fn
    open fun gen_resolveUrl_fn(url: String): String {
        if (url.startsWith("//")) {
            return "https:" + url
        }
        if (url.startsWith("/") && textValue(this.domain).length > 0) {
            return textValue(this.domain) + url
        }
        if (!url.includes("://") && !url.startsWith("#") && textValue(this.domain).length > 0) {
            return textValue(this.domain) + "/" + url
        }
        return url
    }
    open var handleImgTap = ::gen_handleImgTap_fn
    open fun gen_handleImgTap_fn(attrs: UTSJSONObject): Unit {
        this.`$emit`("imgTap", attrs)
        if (this.previewImgValue && this.imgList.length > 0) {
            val current = parseInt(textValue(attrs["i"]))
            uni_previewImage(PreviewImageOptions(current = if (isNaN(current)) {
                0
            } else {
                current
            }
            , urls = this.imgList))
        }
    }
    open var handleLinkTap = ::gen_handleLinkTap_fn
    open fun gen_handleLinkTap_fn(attrs: UTSJSONObject): Unit {
        this.`$emit`("linkTap", attrs)
        val href = textValue(attrs["href"])
        if (href.length == 0) {
            return
        }
        if (href.startsWith("#")) {
            this.navigateTo(href.substring(1)).`catch`(fun(){})
        } else if (href.includes("://")) {
            if (this.copyLinkValue) {
                uni_setClipboardData(SetClipboardDataOptions(data = href))
            }
        } else {
            uni_navigateTo(NavigateToOptions(url = href, fail = fun(_){
                uni_switchTab(SwitchTabOptions(url = href))
            }
            ))
        }
    }
    open var onRichTextItemClick = ::gen_onRichTextItemClick_fn
    open fun gen_onRichTextItemClick_fn(event: UniRichTextItemClickEvent): Unit {
        val detail = event.detail as UTSJSONObject
        val src = textValue(detail["src"])
        val href = textValue(detail["href"])
        if (src.length > 0) {
            this.handleImgTap(cloneAttrs(findNodeByAttr(this.nodes as UTSArray<UTSJSONObject>, "img", "src", src)))
            return
        }
        if (href.length > 0) {
            val node = findNodeByAttr(this.nodes as UTSArray<UTSJSONObject>, "a", "href", href)
            val attrs = cloneAttrs(node)
            val children = if (node == null) {
                null
            } else {
                node["children"] as UTSArray<UTSJSONObject>?
            }
            attrs["innerText"] = if (children == null) {
                ""
            } else {
                collectText(children)
            }
            this.handleLinkTap(attrs)
        }
    }
    open var handleMediaError = ::gen_handleMediaError_fn
    open fun gen_handleMediaError_fn(payload: UTSJSONObject): Unit {
        this.`$emit`("error", payload)
    }
    open var onRootClick = ::gen_onRootClick_fn
    open fun gen_onRootClick_fn(): Unit {
        this.`$emit`("tap")
        this.`$emit`("click")
    }
    open var pauseMedia = ::gen_pauseMedia_fn
    open fun gen_pauseMedia_fn(): Unit {}
    open var setPlaybackRate = ::gen_setPlaybackRate_fn
    open fun gen_setPlaybackRate_fn(rate: Number): Unit {}
    companion object {
        var name = "up-parse"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("_root" to _pS(_uM("paddingTop" to 1, "paddingRight" to 0, "paddingBottom" to 1, "paddingLeft" to 0)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("load" to null, "ready" to null, "imgTap" to null, "linkTap" to null, "play" to null, "error" to null, "tap" to null, "click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "containerStyle" to _uM("type" to "String", "default" to ""), "content" to _uM("type" to "String", "default" to ""), "copyLink" to _uM("type" to "Boolean", "default" to false), "domain" to _uM("type" to "String", "default" to ""), "errorImg" to _uM("type" to "String", "default" to ""), "lazyLoad" to _uM("type" to "Boolean", "default" to false), "loadingImg" to _uM("type" to "String", "default" to ""), "pauseVideo" to _uM("type" to "Boolean", "default" to false), "previewImg" to _uM("type" to "Boolean", "default" to true), "scrollTable" to _uM("type" to "Boolean", "default" to false), "selectable" to _uM("type" to "Boolean", "default" to false), "setTitle" to _uM("type" to "Boolean", "default" to true), "showImgMenu" to _uM("type" to "Boolean", "default" to true), "tagStyle" to _uM("default" to fun(): UTSJSONObject {
            return _uO()
        }
        ), "useAnchor" to _uM("type" to _uA(
            "Boolean",
            "Number"
        ), "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "containerStyle",
            "content",
            "copyLink",
            "domain",
            "errorImg",
            "lazyLoad",
            "loadingImg",
            "pauseVideo",
            "previewImg",
            "scrollTable",
            "selectable",
            "setTitle",
            "showImgMenu",
            "useAnchor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
