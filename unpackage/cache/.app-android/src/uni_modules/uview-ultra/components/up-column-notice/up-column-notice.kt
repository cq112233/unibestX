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
open class GenUniModulesUviewUltraComponentsUpColumnNoticeUpColumnNotice : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var text: UTSArray<String> by `$props`
    open var icon: String by `$props`
    open var mode: String by `$props`
    open var color: String by `$props`
    open var bgColor: String by `$props`
    open var fontSize: Any by `$props`
    open var speed: Any by `$props`
    open var step: Boolean by `$props`
    open var duration: Any by `$props`
    open var disableTouch: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpColumnNoticeUpColumnNotice) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpColumnNoticeUpColumnNotice
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val index = ref(0)
            val textStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-column-notice/up-column-notice.uvue", 120, 9))
                style["color"] = props.color
                style["fontSize"] = addUnit(props.fontSize)
                return style
            }
            )
            val vertical = computed(fun(): Boolean {
                if (props.mode == "horizontal") {
                    return false
                } else {
                    return true
                }
            }
            )
            val noticeChange = fun(e: UniSwiperChangeEvent){
                index.value = e.detail.current
            }
            val clickHandler = fun(){
                emit("click", index.value)
            }
            val close = fun(){
                emit("close")
            }
            watch(fun(): UTSArray<String> {
                return props.text
            }
            , fun(newValue: UTSArray<String>){
                if (!array(newValue)) {
                    error("noticebar组件direction为column时，要求text参数为数组形式")
                }
            }
            , WatchOptions(immediate = true))
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
                    _cE("swiper", _uM("disable-touch" to _ctx.disableTouch, "vertical" to if (_ctx.step) {
                        false
                    } else {
                        true
                    }
                    , "circular" to "", "interval" to _ctx.duration, "autoplay" to true, "class" to "up-notice__swiper", "onChange" to noticeChange), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(_ctx.text, fun(item, index, __index, _cached): Any {
                            return _cE("swiper-item", _uM("key" to index, "class" to "up-notice__swiper__item"), _uA(
                                _cE("text", _uM("class" to "up-notice__swiper__item__text up-line-1", "style" to _nS(_uA(
                                    textStyle.value
                                ))), _tD(item), 5)
                            ))
                        }
                        ), 128)
                    ), 40, _uA(
                        "disable-touch",
                        "vertical",
                        "interval"
                    )),
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
                                _cV(_component_up_icon, _uM("key" to 1, "name" to "close", "size" to 16, "color" to _ctx.color, "onClick" to close), null, 8, _uA(
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
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-notice" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between")), "up-notice__left-icon" to _pS(_uM("alignItems" to "center", "marginRight" to 5)), "up-notice__right-icon" to _pS(_uM("marginLeft" to 5, "alignItems" to "center")), "up-notice__swiper" to _pS(_uM("height" to 16, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-notice__swiper__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "overflow" to "hidden")), "up-notice__swiper__item__text" to _pS(_uM("fontSize" to 14, "color" to "#f9ae3d")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "text" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA()
        }
        ), "icon" to _uM("type" to "String", "default" to fun(): String? {
            return default__90.getString("columnNotice.icon")
        }
        ), "mode" to _uM("type" to "String", "default" to fun(): String? {
            return default__90.getString("columnNotice.mode")
        }
        ), "color" to _uM("type" to "String", "default" to fun(): String? {
            return default__90.getString("columnNotice.color")
        }
        ), "bgColor" to _uM("type" to "String", "default" to fun(): String? {
            return default__90.getString("columnNotice.bgColor")
        }
        ), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__90.getNumber("columnNotice.fontSize")
        }
        ), "speed" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__90.getNumber("columnNotice.speed")
        }
        ), "step" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__90.getBoolean("columnNotice.step")
        }
        ), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__90.getNumber("columnNotice.duration")
        }
        ), "disableTouch" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__90.getBoolean("columnNotice.disableTouch")
        }
        )))
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
            "speed",
            "step",
            "duration",
            "disableTouch"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
