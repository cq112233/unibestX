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
open class GenSrcSubUviewUltraDemosKeyboardKeyboard : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
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
        var setup: (__props: GenSrcSubUviewUltraDemosKeyboardKeyboard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosKeyboardKeyboard
            val _cache = __ins.renderCache
            val showNumber = ref(false)
            val valNumber = ref("")
            val onNumberChange = fun(kVal: String){
                valNumber.value += kVal
            }
            val onNumberBackspace = fun(){
                if (valNumber.value.length > 0) {
                    valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1)
                }
            }
            val showCard = ref(false)
            val valCard = ref("")
            val onCardChange = fun(kVal: String){
                valCard.value += kVal
            }
            val onCardBackspace = fun(){
                if (valCard.value.length > 0) {
                    valCard.value = valCard.value.substring(0, valCard.value.length - 1)
                }
            }
            val showCar = ref(false)
            val valCar = ref("")
            val onCarChange = fun(kVal: String){
                valCar.value += kVal
            }
            val onCarBackspace = fun(){
                if (valCar.value.length > 0) {
                    valCar.value = valCar.value.substring(0, valCar.value.length - 1)
                }
            }
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_keyboard = resolveEasyComponent("up-keyboard", GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboardClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-keyboard 键盘"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ min-h-screen pb-30px"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "Keyboard 键盘", "auto-back" to true)),
                                    _cE("view", _uM("class" to "p-16px"), _uA(
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "数字键盘"),
                                            _cE("view", _uM("class" to "mock-input", "onClick" to fun(){
                                                showNumber.value = true
                                            }
                                            ), _uA(
                                                _cE("text", _uM("class" to _nC(if (valNumber.value != "") {
                                                    "mock-input-text"
                                                } else {
                                                    "mock-input-placeholder"
                                                }
                                                )), _tD(if (valNumber.value != "") {
                                                    valNumber.value
                                                } else {
                                                    "请点击输入数字"
                                                }
                                                ), 3)
                                            ), 8, _uA(
                                                "onClick"
                                            )),
                                            _cV(_component_up_keyboard, _uM("mode" to "number", "show" to showNumber.value, "onChange" to onNumberChange, "onBackspace" to onNumberBackspace, "onClose" to fun(){
                                                showNumber.value = false
                                            }
                                            , "onCancel" to fun(){
                                                showNumber.value = false
                                            }
                                            , "onConfirm" to fun(){
                                                showNumber.value = false
                                            }
                                            ), null, 8, _uA(
                                                "show",
                                                "onClose",
                                                "onCancel",
                                                "onConfirm"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "身份证键盘"),
                                            _cE("view", _uM("class" to "mock-input", "onClick" to fun(){
                                                showCard.value = true
                                            }
                                            ), _uA(
                                                _cE("text", _uM("class" to _nC(if (valCard.value != "") {
                                                    "mock-input-text"
                                                } else {
                                                    "mock-input-placeholder"
                                                }
                                                )), _tD(if (valCard.value != "") {
                                                    valCard.value
                                                } else {
                                                    "请点击输入身份证"
                                                }
                                                ), 3)
                                            ), 8, _uA(
                                                "onClick"
                                            )),
                                            _cV(_component_up_keyboard, _uM("mode" to "card", "show" to showCard.value, "onChange" to onCardChange, "onBackspace" to onCardBackspace, "onClose" to fun(){
                                                showCard.value = false
                                            }
                                            , "onCancel" to fun(){
                                                showCard.value = false
                                            }
                                            , "onConfirm" to fun(){
                                                showCard.value = false
                                            }
                                            ), null, 8, _uA(
                                                "show",
                                                "onClose",
                                                "onCancel",
                                                "onConfirm"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "车牌号键盘"),
                                            _cE("view", _uM("class" to "mock-input", "onClick" to fun(){
                                                showCar.value = true
                                            }
                                            ), _uA(
                                                _cE("text", _uM("class" to _nC(if (valCar.value != "") {
                                                    "mock-input-text"
                                                } else {
                                                    "mock-input-placeholder"
                                                }
                                                )), _tD(if (valCar.value != "") {
                                                    valCar.value
                                                } else {
                                                    "请点击输入车牌号"
                                                }
                                                ), 3)
                                            ), 8, _uA(
                                                "onClick"
                                            )),
                                            _cV(_component_up_keyboard, _uM("mode" to "car", "show" to showCar.value, "onChange" to onCarChange, "onBackspace" to onCarBackspace, "onClose" to fun(){
                                                showCar.value = false
                                            }
                                            , "onCancel" to fun(){
                                                showCar.value = false
                                            }
                                            , "onConfirm" to fun(){
                                                showCar.value = false
                                            }
                                            ), null, 8, _uA(
                                                "show",
                                                "onClose",
                                                "onCancel",
                                                "onConfirm"
                                            ))
                                        ))
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")), "mock-input" to _pS(_uM("height" to 40, "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "backgroundColor" to "#f3f4f6", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingTop" to 0, "paddingRight" to 12, "paddingBottom" to 0, "paddingLeft" to 12)), "mock-input-text" to _pS(_uM("fontSize" to 15, "color" to "#333333")), "mock-input-placeholder" to _pS(_uM("fontSize" to 15, "color" to "#9ca3af")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
