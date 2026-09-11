@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNIB120614
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
    open var tagStyle: Any by `$props`
    open var useAnchor: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open fun getText(nList: UTSArray<UTSJSONObject>? = null): String {
        return callKotlinFunction(this.`$exposed`["getText"]!!, _uA(
            nList
        )) as String
    }
    open var getRect: () -> UTSPromise<Any>
        get() {
            return unref(this.`$exposed`["getRect"]) as () -> UTSPromise<Any>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getRect", value)
        }
    open fun navigateTo(id: String, offset: Number = 0): UTSPromise<Unit> {
        return callKotlinFunction(this.`$exposed`["navigateTo"]!!, _uA(
            id,
            offset
        )) as UTSPromise<Unit>
    }
    open fun setContent(content: String, append: Boolean = false): Unit {
        return callKotlinFunction(this.`$exposed`["setContent"]!!, _uA(
            content,
            append
        )) as Unit
    }
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>())
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
        return uni.UNIB120614.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
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
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesUviewUltraComponentsUpParseUpParse, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpParseUpParse
            val _cache = __ins.renderCache
            val blockTags = _uA<String>("address", "article", "aside", "blockquote", "body", "caption", "center", "dd", "div", "dl", "dt", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul")
            val voidTags = _uA<String>("area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr")
            val ignoreTags = _uA<String>("area", "base", "canvas", "frame", "head", "iframe", "input", "link", "map", "meta", "param", "script", "style", "textarea", "track", "wbr")
            fun gen_makeNode_fn(name: String): UTSJSONObject {
                return _uO("type" to "node", "name" to name, "attrs" to _uO(), "children" to _uA<UTSJSONObject>())
            }
            val makeNode = ::gen_makeNode_fn
            fun gen_makeText_fn(text: String): UTSJSONObject {
                return _uO("type" to "text", "text" to text)
            }
            val makeText = ::gen_makeText_fn
            fun gen_hasString_fn(list: UTSArray<String>, value: String): Boolean {
                run {
                    var i: Number = 0
                    while(i < list.length){
                        if (list[i] == value) {
                            return true
                        }
                        i++
                    }
                }
                return false
            }
            val hasString = ::gen_hasString_fn
            fun gen_decodeHtml_fn(value: String): String {
                return value.replace(UTSRegExp("&lt;", "g"), "<").replace(UTSRegExp("&gt;", "g"), ">").replace(UTSRegExp("&quot;", "g"), "\"").replace(UTSRegExp("&#39;", "g"), "'").replace(UTSRegExp("&apos;", "g"), "'").replace(UTSRegExp("&nbsp;", "g"), " ").replace(UTSRegExp("&amp;", "g"), "&")
            }
            val decodeHtml = ::gen_decodeHtml_fn
            fun gen_textValue_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val textValue = ::gen_textValue_fn
            fun gen_boolValue_fn(value: Any?): Boolean {
                return value == true || value == "true"
            }
            val boolValue = ::gen_boolValue_fn
            fun gen_normalizeSpace_fn(value: String, keepSpace: Boolean): String {
                if (keepSpace) {
                    return value
                }
                return value.replace(UTSRegExp("\\s+", "g"), " ")
            }
            val normalizeSpace = ::gen_normalizeSpace_fn
            fun gen_readAttr_fn(source: String, name: String): String {
                val doublePattern = UTSRegExp(name + "\\s*=\\s*\"([^\"]*)\"", "i")
                val doubleMatch = source.match(doublePattern)
                if (doubleMatch != null && doubleMatch.length > 1) {
                    val value = doubleMatch[1]
                    return decodeHtml(if (value == null) {
                        ""
                    } else {
                        value
                    }
                    )
                }
                val singlePattern = UTSRegExp(name + "\\s*=\\s*'([^']*)'", "i")
                val singleMatch = source.match(singlePattern)
                if (singleMatch != null && singleMatch.length > 1) {
                    val value = singleMatch[1]
                    return decodeHtml(if (value == null) {
                        ""
                    } else {
                        value
                    }
                    )
                }
                val barePattern = UTSRegExp(name + "\\s*=\\s*([^\\s\"'>/]+)", "i")
                val bareMatch = source.match(barePattern)
                if (bareMatch != null && bareMatch.length > 1) {
                    val value = bareMatch[1]
                    return decodeHtml(if (value == null) {
                        ""
                    } else {
                        value
                    }
                    )
                }
                return ""
            }
            val readAttr = ::gen_readAttr_fn
            fun gen_firstWord_fn(value: String): String {
                val trimmed = value.trim()
                val space = trimmed.search(UTSRegExp("\\s", ""))
                return (if (space == -1) {
                    trimmed
                } else {
                    trimmed.substring(0, space)
                }
                ).toLowerCase()
            }
            val firstWord = ::gen_firstWord_fn
            fun gen_appendChild_fn(stack: UTSArray<UTSJSONObject>, roots: UTSArray<UTSJSONObject>, node: UTSJSONObject): Unit {
                if (stack.length == 0) {
                    roots.push(node)
                    return
                }
                val parent = stack[stack.length - 1]
                val children = parent["children"] as UTSArray<UTSJSONObject>
                children.push(node)
            }
            val appendChild = ::gen_appendChild_fn
            fun gen_collectText_fn(nodes: UTSArray<UTSJSONObject>): String {
                var result = ""
                run {
                    var i: Number = 0
                    while(i < nodes.length){
                        val node = nodes[i]
                        val type = textValue(node["type"])
                        if (type == "text") {
                            result += textValue(node["text"])
                        } else {
                            val name = textValue(node["name"])
                            if (name == "br") {
                                result += "\n"
                            }
                            val children = node["children"] as UTSArray<UTSJSONObject>?
                            if (children != null) {
                                val isBlock = hasString(blockTags, name)
                                if (isBlock && result.length > 0 && !result.endsWith("\n")) {
                                    result += "\n"
                                }
                                result += gen_collectText_fn(children)
                                if (isBlock && result.length > 0 && !result.endsWith("\n")) {
                                    result += "\n"
                                }
                            }
                        }
                        i++
                    }
                }
                return result
            }
            val collectText = ::gen_collectText_fn
            fun gen_findNodeByAttr_fn(nodes: UTSArray<UTSJSONObject>, name: String, attr: String, value: String): UTSJSONObject? {
                run {
                    var i: Number = 0
                    while(i < nodes.length){
                        val node = nodes[i]
                        if (textValue(node["name"]) == name) {
                            val attrs = node["attrs"] as UTSJSONObject?
                            if (attrs != null && textValue(attrs[attr]) == value) {
                                return node
                            }
                        }
                        val children = node["children"] as UTSArray<UTSJSONObject>?
                        if (children != null) {
                            val result = gen_findNodeByAttr_fn(children, name, attr, value)
                            if (result != null) {
                                return result
                            }
                        }
                        i++
                    }
                }
                return null
            }
            val findNodeByAttr = ::gen_findNodeByAttr_fn
            fun gen_cloneAttrs_fn(node: UTSJSONObject?): UTSJSONObject {
                if (node == null) {
                    return _uO()
                }
                val attrs = node["attrs"] as UTSJSONObject?
                if (attrs == null) {
                    return _uO()
                }
                val cloned: UTSJSONObject = _uO()
                val keys = UTSJSONObject.keys(attrs)
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        cloned[keys[i]] = attrs[keys[i]]
                        i++
                    }
                }
                return cloned
            }
            val cloneAttrs = ::gen_cloneAttrs_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val nodes = ref(_uA<UTSJSONObject>())
            val imgList = ref(_uA<String>())
            val selectableValue = computed<Boolean>(fun(): Boolean {
                return boolValue(props.selectable)
            }
            )
            val previewImgValue = computed<Boolean>(fun(): Boolean {
                return boolValue(props.previewImg)
            }
            )
            val copyLinkValue = computed<Boolean>(fun(): Boolean {
                return boolValue(props.copyLink)
            }
            )
            val showImgMenuValue = computed<Boolean>(fun(): Boolean {
                return boolValue(props.showImgMenu)
            }
            )
            val rootClass = computed<String>(fun(): String {
                return (if (selectableValue.value) {
                    "_select "
                } else {
                    ""
                }
                ) + "_root"
            }
            )
            fun gen_getDefaultStyle_fn(name: String): String {
                val custom = props.tagStyle as UTSJSONObject?
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
            val getDefaultStyle = ::gen_getDefaultStyle_fn
            fun gen_resolveUrl_fn(url: String): String {
                if (url.startsWith("//")) {
                    return "https:" + url
                }
                if (url.startsWith("/") && textValue(props.domain).length > 0) {
                    return textValue(props.domain) + url
                }
                if (!url.includes("://") && !url.startsWith("#") && textValue(props.domain).length > 0) {
                    return textValue(props.domain) + "/" + url
                }
                return url
            }
            val resolveUrl = ::gen_resolveUrl_fn
            fun gen_applyAttrs_fn(node: UTSJSONObject, raw: String): Unit {
                val name = textValue(node["name"])
                val attrs: UTSJSONObject = _uO()
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
                val tagStyle = getDefaultStyle(name)
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
                    attrs["href"] = resolveUrl(href)
                }
                if (src.length > 0) {
                    attrs["src"] = resolveUrl(src)
                }
                if (alt.length > 0) {
                    attrs["alt"] = alt
                }
                if (name == "img" && textValue(attrs["src"]).length > 0) {
                    attrs["i"] = imgList.value.length
                    imgList.value.push(textValue(attrs["src"]))
                }
                if (name == "title" && boolValue(props.setTitle)) {
                    node["__title"] = true
                }
                node["attrs"] = attrs
            }
            val applyAttrs = ::gen_applyAttrs_fn
            fun gen_appendText_fn(text: String, stack: UTSArray<UTSJSONObject>, roots: UTSArray<UTSJSONObject>): Unit {
                val keepSpace = stack.length > 0 && textValue(stack[stack.length - 1]["name"]) == "pre"
                val normalized = normalizeSpace(decodeHtml(text), keepSpace)
                if (normalized.length == 0 || (!keepSpace && normalized == " ")) {
                    return
                }
                appendChild(stack, roots, makeText(normalized))
            }
            val appendText = ::gen_appendText_fn
            fun gen_closeTag_fn(name: String, stack: UTSArray<UTSJSONObject>): Unit {
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
            val closeTag = ::gen_closeTag_fn
            fun gen_parseContent_fn(content: String): UTSArray<UTSJSONObject> {
                imgList.value = _uA<String>()
                val roots = _uA<UTSJSONObject>()
                val stack = _uA<UTSJSONObject>()
                var index: Number = 0
                var skipTag = ""
                while(index < content.length){
                    val lt = content.indexOf("<", index)
                    if (lt == -1) {
                        appendText(content.substring(index), stack, roots)
                        break
                    }
                    if (lt > index) {
                        appendText(content.substring(index, lt), stack, roots)
                    }
                    val gt = content.indexOf(">", lt + 1)
                    if (gt == -1) {
                        appendText(content.substring(lt), stack, roots)
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
                            closeTag(closeName, stack)
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
                    applyAttrs(node, trimmed)
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
            val parseContent = ::gen_parseContent_fn
            fun gen_getRect_fn(): UTSPromise<Any> {
                return UTSPromise(fun(resolve, reject){
                    uni_createSelectorQuery().`in`(instance?.proxy).select("#_root").boundingClientRect().exec(fun(res: UTSArray<Any>){
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
            val getRect = ::gen_getRect_fn
            fun navigateTo(id: String, offset: Number = 0): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, reject){
                    if (!boolValue(props.useAnchor)) {
                        reject(UTSError("Anchor is disabled"))
                        return
                    }
                    val selector = if (id.length > 0) {
                        "#_root #" + id
                    } else {
                        "#_root"
                    }
                    uni_createSelectorQuery().`in`(instance?.proxy).select(selector).boundingClientRect().exec(fun(res: UTSArray<Any>){
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
            fun setContent(content: String, append: Boolean = false): Unit {
                val parsed = parseContent(content)
                nodes.value = if (append) {
                    nodes.value.concat(parsed)
                } else {
                    parsed
                }
                nextTick(fun(){
                    emit("load")
                    getRect().then(fun(rect: Any){
                        emit("ready", rect)
                    }
                    ).`catch`(fun(){
                        emit("ready", _uO())
                    }
                    )
                }
                )
            }
            fun getText(nList: UTSArray<UTSJSONObject>? = null): String {
                return collectText(if (nList == null) {
                    nodes.value
                } else {
                    nList
                }
                )
            }
            fun gen_handleImgTap_fn(attrs: UTSJSONObject): Unit {
                emit("imgTap", attrs)
                if (previewImgValue.value && imgList.value.length > 0) {
                    val current = parseInt(textValue(attrs["i"]))
                    uni_previewImage(PreviewImageOptions(current = if (isNaN(current)) {
                        0
                    } else {
                        current
                    }
                    , urls = imgList.value))
                }
            }
            val handleImgTap = ::gen_handleImgTap_fn
            fun gen_handleLinkTap_fn(attrs: UTSJSONObject): Unit {
                emit("linkTap", attrs)
                val href = textValue(attrs["href"])
                if (href.length == 0) {
                    return
                }
                if (href.startsWith("#")) {
                    navigateTo(href.substring(1)).`catch`(fun(){})
                } else if (href.includes("://")) {
                    if (copyLinkValue.value) {
                        uni_setClipboardData(SetClipboardDataOptions(data = href))
                    }
                } else {
                    uni_navigateTo(NavigateToOptions(url = href, fail = fun(_){
                        uni_switchTab(SwitchTabOptions(url = href))
                    }
                    ))
                }
            }
            val handleLinkTap = ::gen_handleLinkTap_fn
            fun gen_onRichTextItemClick_fn(event: UniRichTextItemClickEvent): Unit {
                val detail = event.detail as Any as UTSJSONObject
                val src = textValue(detail["src"])
                val href = textValue(detail["href"])
                if (src.length > 0) {
                    handleImgTap(cloneAttrs(findNodeByAttr(nodes.value, "img", "src", src)))
                    return
                }
                if (href.length > 0) {
                    val node = findNodeByAttr(nodes.value, "a", "href", href)
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
                    handleLinkTap(attrs)
                }
            }
            val onRichTextItemClick = ::gen_onRichTextItemClick_fn
            fun gen_onRootClick_fn(): Unit {
                emit("tap")
                emit("click")
            }
            val onRootClick = ::gen_onRootClick_fn
            watch(fun(): String {
                return props.content
            }
            , fun(value: String){
                setContent(value, false)
            }
            , WatchOptions(immediate = true))
            __expose(_uM("getText" to ::getText, "getRect" to getRect, "navigateTo" to ::navigateTo, "setContent" to ::setContent))
            return fun(): Any? {
                val _component_rich_text = resolveComponent("rich-text")
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border",
                    rootClass.value
                )), "id" to "_root", "style" to _nS(_ctx.containerStyle), "onClick" to onRootClick), _uA(
                    if (nodes.value.length == 0) {
                        renderSlot(_ctx.`$slots`, "default", _uM("key" to 0))
                    } else {
                        _cV(_component_rich_text, _uM("key" to 1, "nodes" to nodes.value, "selectable" to selectableValue.value, "onItemclick" to onRichTextItemClick), null, 8, _uA(
                            "nodes",
                            "selectable"
                        ))
                    }
                ), 6)
            }
        }
        var name = "up-parse"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "_root" to _pS(_uM("paddingTop" to 1, "paddingRight" to 0, "paddingBottom" to 1, "paddingLeft" to 0)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("load" to null, "ready" to null, "imgTap" to null, "linkTap" to null, "play" to null, "error" to null, "tap" to null, "click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "containerStyle" to _uM("type" to "String", "default" to ""), "content" to _uM("type" to "String", "default" to ""), "copyLink" to _uM("type" to "Boolean", "default" to false), "domain" to _uM("type" to "String", "default" to ""), "errorImg" to _uM("type" to "String", "default" to ""), "lazyLoad" to _uM("type" to "Boolean", "default" to false), "loadingImg" to _uM("type" to "String", "default" to ""), "pauseVideo" to _uM("type" to "Boolean", "default" to false), "previewImg" to _uM("type" to "Boolean", "default" to true), "scrollTable" to _uM("type" to "Boolean", "default" to false), "selectable" to _uM("type" to "Boolean", "default" to false), "setTitle" to _uM("type" to "Boolean", "default" to true), "showImgMenu" to _uM("type" to "Boolean", "default" to true), "tagStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "useAnchor" to _uM("type" to "Boolean", "default" to false)))
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
            "tagStyle",
            "useAnchor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
