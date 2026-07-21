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
open class GenUniModulesUviewUltraComponentsUpReadMoreUpReadMore : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_text = resolveEasyComponent("up-text", GenUniModulesUviewUltraComponentsUpTextUpTextClass)
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to "up-read-more"), _uA(
            _cE("view", _uM("class" to "up-read-more__content", "style" to _nS(_uM("height" to if (_ctx.isLongContent && _ctx.status === "close") {
                _ctx.addUnit(_ctx.showHeight)
            } else {
                "auto"
            }
            ))), _uA(
                _cE("view", _uM("class" to _nC(_uA(
                    "up-read-more__content__inner",
                    _uA(
                        _ctx.elId
                    )
                )), "ref" to "up-read-more__content__inner"), _uA(
                    renderSlot(_ctx.`$slots`, "default")
                ), 2)
            ), 4),
            if (isTrue(_ctx.isLongContent)) {
                _cE("view", _uM("key" to 0, "class" to "up-read-more__toggle", "style" to _nS(_uA(
                    _ctx.innerShadowStyle
                ))), _uA(
                    renderSlot(_ctx.`$slots`, "toggle", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to "up-read-more__toggle__text", "onClick" to _ctx.toggleReadMore), _uA(
                                _cV(_component_up_text, _uM("text" to if (_ctx.status === "close") {
                                    _ctx.closeText
                                } else {
                                    _ctx.openText
                                }, "color" to _ctx.color, "size" to _ctx.fontSize, "lineHeight" to _ctx.fontSize, "margin" to "0 5px 0 0"), null, 8, _uA(
                                    "text",
                                    "color",
                                    "size",
                                    "lineHeight"
                                )),
                                _cE("view", _uM("class" to "up-read-more__toggle__icon"), _uA(
                                    _cV(_component_up_icon, _uM("color" to _ctx.color, "size" to (parseInt(_ctx.getPx(_ctx.fontSize)) + 2), "name" to if (_ctx.status === "close") {
                                        "arrow-down"
                                    } else {
                                        "arrow-up"
                                    }), null, 8, _uA(
                                        "color",
                                        "size",
                                        "name"
                                    ))
                                ))
                            ), 8, _uA(
                                "onClick"
                            ))
                        )
                    })
                ), 4)
            } else {
                _cC("v-if", true)
            }
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var showHeight: Any by `$props`
    open var toggle: Boolean by `$props`
    open var closeText: String by `$props`
    open var openText: String by `$props`
    open var color: String by `$props`
    open var fontSize: Any by `$props`
    open var shadowStyle: UTSJSONObject by `$props`
    open var textIndent: String by `$props`
    open var name: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var isLongContent: Boolean by `$data`
    open var status: String by `$data`
    open var elId: Any? by `$data`
    open var contentHeight: Number by `$data`
    open var initRetryCount: Number by `$data`
    open var innerShadowStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "isLongContent" to true, "status" to "close", "elId" to guid(), "contentHeight" to 0, "initRetryCount" to 0, "innerShadowStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            if (this.status === "open") {
                return _uO()
            }
            val appStyle: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("appStyle", "uni_modules/uview-ultra/components/up-read-more/up-read-more.uvue", 87, 11))
            appStyle["backgroundColor"] = "rgba(255, 255, 255, 0.85)"
            appStyle["paddingTop"] = this.shadowStyle["paddingTop"] ?: "100px"
            appStyle["marginTop"] = this.shadowStyle["marginTop"] ?: "-100px"
            return appStyle
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return uni.UNI5198058.getPx(kVal, unit)
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
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var getPx = ::gen_getPx_fn
    open fun gen_getPx_fn(e: Any): String {
        return uni.UNI5198058.getPx(e)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend {
                await(sleep(150))
                this.getContentHeight().then(fun(size: NodeInfo){
                    this.contentHeight = size.height ?: 0
                    if (this.contentHeight <= 0) {
                        this.initRetryCount = this.initRetryCount + 1
                        if (this.initRetryCount <= 3) {
                            setTimeout(fun(){
                                this.init()
                            }
                            , 200)
                        }
                        return
                    }
                    if (this.contentHeight <= parseFloat(uni.UNI5198058.getPx(this.showHeight))) {
                        this.isLongContent = false
                        this.status = "close"
                    }
                }
                )
        })
    }
    open var getContentHeight = ::gen_getContentHeight_fn
    open fun gen_getContentHeight_fn(): UTSPromise<NodeInfo> {
        return wrapUTSPromise(suspend w@{
                return@w UTSPromise(fun(resolve, _reject){
                    this.upGetRect("." + this.elId).then(fun(res: NodeInfo){
                        resolve(res)
                    }
                    )
                }
                )
        })
    }
    open var toggleReadMore = ::gen_toggleReadMore_fn
    open fun gen_toggleReadMore_fn() {
        this.status = if (this.status === "close") {
            "open"
        } else {
            "close"
        }
        if (this.toggle == false) {
            this.isLongContent = false
        }
        this.`$emit`(this.status, this.name)
    }
    companion object {
        var name = "up-read-more"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-read-more__content" to _pS(_uM("overflow" to "hidden")), "up-read-more__toggle" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "position" to "relative")), "up-read-more__toggle__text" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "marginTop" to 5)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("open" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "showHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["showHeight"]), "toggle" to _uM("type" to "Boolean", "default" to crtProp__10["toggle"]), "closeText" to _uM("type" to "String", "default" to crtProp__10["closeText"]), "openText" to _uM("type" to "String", "default" to crtProp__10["openText"]), "color" to _uM("type" to "String", "default" to crtProp__10["color"]), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["fontSize"]), "shadowStyle" to _uM("type" to "UTSJSONObject", "default" to fun(): UTSJSONObject {
            return _uO("backgroundImage" to "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)", "paddingTop" to "100px", "marginTop" to "-100px")
        }
        ), "textIndent" to _uM("type" to "String", "default" to crtProp__10["textIndent"]), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["name"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "showHeight",
            "toggle",
            "closeText",
            "openText",
            "color",
            "fontSize",
            "shadowStyle",
            "textIndent",
            "name"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
