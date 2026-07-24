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
open class GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNotice : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var text: String by `$props`
    open var icon: String by `$props`
    open var mode: String by `$props`
    open var color: String by `$props`
    open var bgColor: String by `$props`
    open var fontSize: Any by `$props`
    open var speed: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
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
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNotice) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNotice
            val _cache = __ins.renderCache
            val props = __props
            val instance = getCurrentInstance()?.proxy!!
            val transform = ref("")
            val animationFrameId = ref(0)
            val startTime = ref(0)
            val currentPosition = ref(0)
            val scrollWidth = ref(0)
            val containerWidth = ref(0)
            val isAnimating = ref(false)
            val show = ref(true)
            val webviewHide = ref(false)
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val textStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                style["whiteSpace"] = "nowrap !important"
                style["color"] = props.color
                style["fontSize"] = addUnit(props.fontSize)
                return style
            }
            )
            val animationStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                style["transform"] = transform.value
                return style
            }
            )
            val innerText = computed(fun(): UTSArray<String> {
                var result: UTSArray<String> = _uA()
                var len: Number = 20
                val textArr = props.text.split("")
                run {
                    var i: Number = 0
                    while(i < textArr.length){
                        result.push(textArr.slice(i, i + len).join(""))
                        i += len
                    }
                }
                return result
            }
            )
            val clickHandler = fun(index: Number){
                emit("click")
            }
            val close = fun(){
                emit("close")
            }
            fun gen_animate_fn(timestamp: Number) {
                if (!isAnimating.value) {
                    return
                }
                if (startTime.value == 0) {
                    startTime.value = timestamp
                }
                val elapsed = timestamp - startTime.value
                val speedNum = parseInt(getPx(props.speed))
                val distance = (speedNum * elapsed) / 1000
                currentPosition.value = containerWidth.value - distance
                if (currentPosition.value <= -scrollWidth.value) {
                    startTime.value = timestamp
                    currentPosition.value = containerWidth.value
                }
                transform.value = "translateX(" + currentPosition.value + "px)"
                animationFrameId.value = setTimeout(fun(){
                    return gen_animate_fn(Date.now())
                }
                , 16)
            }
            val animate = ::gen_animate_fn
            val startScroll = fun(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        if (animationFrameId.value > 0) {
                            clearTimeout(animationFrameId.value)
                            animationFrameId.value = 0
                        }
                        await(sleep(10))
                        val textRect = await(uni.UNI5198058.upGetRect(".up-notice__content__text", false, instance)) as NodeInfo
                        val containerRect = await(uni.UNI5198058.upGetRect(".up-notice__content", false, instance)) as NodeInfo
                        scrollWidth.value = textRect.width ?: 0
                        containerWidth.value = containerRect.width ?: 0
                        currentPosition.value = containerWidth.value
                        startTime.value = 0
                        isAnimating.value = true
                        animate(0)
                })
            }
            val stopScroll = fun(){
                isAnimating.value = false
                if (animationFrameId.value > 0) {
                    clearTimeout(animationFrameId.value)
                    animationFrameId.value = 0
                }
            }
            watch(fun(): String {
                return props.text
            }
            , fun(newValue: String){
                startScroll()
                if (!string(newValue)) {
                    error("noticebar组件direction为row时，要求text参数为字符串形式")
                }
            }
            , WatchOptions(immediate = true))
            watch(fun(): Any {
                return props.fontSize
            }
            , fun(){
                startScroll()
            }
            )
            watch(fun(): Any {
                return props.speed
            }
            , fun(){
                startScroll()
            }
            )
            onMounted(fun(){
                startScroll()
                if (!string(props.text)) {
                    error("noticebar组件direction为row时，要求text参数为字符串形式")
                }
            }
            )
            onBeforeUnmount(fun(){
                stopScroll()
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "up-notice", "onClick" to clickHandler), _uA(
                    renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            if (isTrue(_ctx.icon)) {
                                _cE("view", _uM("key" to 0, "class" to "up-notice__left-icon"), _uA(
                                    _cV(_component_up_icon, _uM("name" to _ctx.icon, "color" to _ctx.color, "size" to "19"), null, 8, _uA(
                                        "name",
                                        "color"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        )
                    }
                    ),
                    _cE("view", _uM("class" to "up-notice__content", "ref" to "up-notice__content"), _uA(
                        _cE("view", _uM("ref" to "up-notice__content__text", "class" to "up-notice__content__text", "style" to _nS(_uA(
                            animationStyle.value
                        ))), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(innerText.value, fun(item, index, __index, _cached): Any {
                                return _cE("text", _uM("key" to index, "style" to _nS(_uA(
                                    textStyle.value
                                ))), _tD(item), 5)
                            }
                            ), 128)
                        ), 4)
                    ), 512),
                    if (isTrue(_uA(
                        "link",
                        "closable"
                    ).includes(_ctx.mode))) {
                        _cE("view", _uM("key" to 0, "class" to "up-notice__right-icon"), _uA(
                            if (_ctx.mode === "link") {
                                _cV(_component_up_icon, _uM("key" to 0, "name" to "arrow-right", "size" to 17, "color" to _ctx.color), null, 8, _uA(
                                    "color"
                                ))
                            } else {
                                _cC("v-if", true)
                            },
                            if (_ctx.mode === "closable") {
                                _cV(_component_up_icon, _uM("key" to 1, "onClick" to close, "name" to "close", "size" to 16, "color" to _ctx.color), null, 8, _uA(
                                    "color"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-notice" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between")), "up-notice__left-icon" to _pS(_uM("alignItems" to "center", "marginRight" to 5)), "up-notice__right-icon" to _pS(_uM("marginLeft" to 5, "alignItems" to "center")), "up-notice__content" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "flexWrap" to "nowrap", "overflow" to "hidden")), "up-notice__content__text" to _pS(_uM("display" to "flex", "flexDirection" to "row")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "text" to _uM("type" to "String", "default" to default__68.getString("rowNotice.text")), "icon" to _uM("type" to "String", "default" to default__68.getString("rowNotice.icon")), "mode" to _uM("type" to "String", "default" to default__68.getString("rowNotice.mode")), "color" to _uM("type" to "String", "default" to default__68.getString("rowNotice.color")), "bgColor" to _uM("type" to "String", "default" to default__68.getString("rowNotice.bgColor")), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("rowNotice.fontSize")), "speed" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("rowNotice.speed"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "text",
            "icon",
            "mode",
            "color",
            "bgColor",
            "fontSize",
            "speed"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
