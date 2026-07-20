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
open class GenUniModulesUviewUltraComponentsUpCarKeyboardUpCarKeyboard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var random: Boolean by `$props`
    open var autoChange: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCarKeyboardUpCarKeyboard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCarKeyboardUpCarKeyboard
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val abc = ref(false)
            val timer = ref<Number?>(null)
            val areaList = computed<UTSArray<UTSArray<Any>>>(fun(): UTSArray<UTSArray<Any>> {
                var data = _uA(
                    "京",
                    "沪",
                    "粤",
                    "津",
                    "冀",
                    "豫",
                    "云",
                    "辽",
                    "黑",
                    "湘",
                    "皖",
                    "鲁",
                    "苏",
                    "浙",
                    "赣",
                    "鄂",
                    "桂",
                    "甘",
                    "晋",
                    "陕",
                    "蒙",
                    "吉",
                    "闽",
                    "贵",
                    "渝",
                    "川",
                    "青",
                    "琼",
                    "宁",
                    "挂",
                    "藏",
                    "港",
                    "澳",
                    "新",
                    "使",
                    "学"
                ) as UTSArray<Any>
                var tmp: UTSArray<UTSArray<Any>> = _uA()
                if (props.random) {
                    data = randomArray(data)
                }
                tmp.push(data.slice(0, 10))
                tmp.push(data.slice(10, 20))
                tmp.push(data.slice(20, 30))
                tmp.push(data.slice(30, 36))
                return tmp
            }
            )
            val engKeyBoardList = computed<UTSArray<UTSArray<Any>>>(fun(): UTSArray<UTSArray<Any>> {
                var data = _uA(
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    0,
                    "Q",
                    "W",
                    "E",
                    "R",
                    "T",
                    "Y",
                    "U",
                    "I",
                    "O",
                    "P",
                    "A",
                    "S",
                    "D",
                    "F",
                    "G",
                    "H",
                    "J",
                    "K",
                    "L",
                    "Z",
                    "X",
                    "C",
                    "V",
                    "B",
                    "N",
                    "M"
                ) as UTSArray<Any>
                var tmp: UTSArray<UTSArray<Any>> = _uA()
                if (props.random) {
                    data = randomArray(data)
                }
                tmp.push(data.slice(0, 10))
                tmp.push(data.slice(10, 20))
                tmp.push(data.slice(20, 30))
                tmp.push(data.slice(30, 36))
                return tmp
            }
            )
            val carInputClick = fun(i: Number, j: Number): Unit {
                var value: Any = ""
                if (abc.value) {
                    value = engKeyBoardList.value[i][j]
                } else {
                    value = areaList.value[i][j]
                }
                if (!abc.value && props.autoChange) {
                    sleep(200).then(fun(){
                        abc.value = true
                    }
                    )
                }
                emit("change", value)
            }
            val changeCarInputMode = fun(): Unit {
                abc.value = !abc.value
            }
            val backspaceClick = fun(): Unit {
                emit("backspace")
                clearInterval(timer.value ?: 0)
                timer.value = null
                timer.value = setInterval(fun(){
                    emit("backspace")
                }
                , 250)
            }
            val clearTimer = fun(): Unit {
                clearInterval(timer.value ?: 0)
                timer.value = null
            }
            val noop = fun(): Unit {}
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "up-keyboard", "onTouchmove" to withModifiers(noop, _uA(
                    "stop",
                    "prevent"
                ))), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(if (abc.value) {
                        engKeyBoardList.value
                    } else {
                        areaList.value
                    }
                    , fun(group, i, __index, _cached): Any {
                        return _cE("view", _uM("key" to i, "class" to _nC(_uA(
                            "up-keyboard__button",
                            _uA(
                                if (((i + 1) == 4)) {
                                    "up-keyboard__button--center"
                                } else {
                                    ""
                                }
                            )
                        )), "index" to i), _uA(
                            if (i == 3) {
                                _cE("view", _uM("key" to 0, "class" to "up-keyboard__button__inner-wrapper"), _uA(
                                    _cE("view", _uM("class" to "up-keyboard__button__inner-wrapper__left", "hover-class" to "up-hover-class", "hover-stay-time" to 200, "onClick" to changeCarInputMode), _uA(
                                        _cE("text", _uM("class" to _nC(_uA(
                                            "up-keyboard__button__inner-wrapper__left__lang",
                                            _uA(
                                                if (!abc.value) {
                                                    "up-keyboard__button__inner-wrapper__left__lang--active"
                                                } else {
                                                    ""
                                                }
                                            )
                                        ))), "中", 2),
                                        _cE("text", _uM("class" to "up-keyboard__button__inner-wrapper__left__line"), "/"),
                                        _cE("text", _uM("class" to _nC(_uA(
                                            "up-keyboard__button__inner-wrapper__left__lang",
                                            _uA(
                                                if (abc.value) {
                                                    "up-keyboard__button__inner-wrapper__left__lang--active"
                                                } else {
                                                    ""
                                                }
                                            )
                                        ))), "英", 2)
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE(Fragment, null, RenderHelpers.renderList(group, fun(item, j, __index, _cached): Any {
                                return _cE("view", _uM("class" to "up-keyboard__button__inner-wrapper", "key" to j), _uA(
                                    _cE("view", _uM("class" to "up-keyboard__button__inner-wrapper__inner", "hover-stay-time" to 200, "onClick" to fun(){
                                        carInputClick(i, j)
                                    }
                                    , "hover-class" to "up-hover-class"), _uA(
                                        _cE("text", _uM("class" to "up-keyboard__button__inner-wrapper__inner__text"), _tD(item), 1)
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                ))
                            }
                            ), 128),
                            if (i == 3) {
                                _cE("view", _uM("key" to 1, "onTouchstart" to backspaceClick, "onTouchend" to clearTimer, "class" to "up-keyboard__button__inner-wrapper"), _uA(
                                    _cE("view", _uM("class" to "up-keyboard__button__inner-wrapper__right", "hover-class" to "up-hover-class", "hover-stay-time" to 200), _uA(
                                        _cV(_component_up_icon, _uM("size" to "28", "name" to "backspace", "color" to "#303133"))
                                    ))
                                ), 32)
                            } else {
                                _cC("v-if", true)
                            }
                        ), 10, _uA(
                            "index"
                        ))
                    }
                    ), 128)
                ), 32)
            }
        }
        var name = "up-car-keyboard"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-keyboard" to _pS(_uM("display" to "flex", "flexDirection" to "column", "justifyContent" to "space-around", "backgroundColor" to "#e0e4e6", "alignItems" to "stretch", "paddingTop" to 6, "paddingRight" to 0, "paddingBottom" to 6, "paddingLeft" to 0)), "up-keyboard__button" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-keyboard__button__inner-wrapper" to _pS(_uM("boxShadow" to "0 1px 0px #999992", "marginTop" to "8rpx", "marginRight" to "5rpx", "marginBottom" to "8rpx", "marginLeft" to "5rpx", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-keyboard__button__inner-wrapper__inner" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "width" to "64rpx", "backgroundColor" to "#FFFFFF", "height" to "80rpx", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-keyboard__button__inner-wrapper__inner__text" to _pS(_uM("fontSize" to 16, "color" to "#303133")), "up-keyboard__button__inner-wrapper__left" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "width" to "134rpx", "height" to "80rpx", "backgroundColor" to "#BBBCC6", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "boxShadow" to "0 1px 0px #999992")), "up-keyboard__button__inner-wrapper__right" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "width" to "134rpx", "height" to "80rpx", "backgroundColor" to "#BBBCC6", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "boxShadow" to "0 1px 0px #999992")), "up-keyboard__button__inner-wrapper__left__line" to _pS(_uM("fontSize" to 15, "color" to "#303133", "marginTop" to 0, "marginRight" to 1, "marginBottom" to 0, "marginLeft" to 1)), "up-keyboard__button__inner-wrapper__left__lang" to _pS(_uM("fontSize" to 16, "color" to "#303133")), "up-keyboard__button__inner-wrapper__left__lang--active" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-hover-class" to _pS(_uM("backgroundColor" to "#BBBCC6")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null, "backspace" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "random" to _uM("type" to "Boolean", "default" to default__85.getBoolean("carKeyboard.random")), "autoChange" to _uM("type" to "Boolean", "default" to default__85.getBoolean("carKeyboard.autoChange"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "random",
            "autoChange"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
