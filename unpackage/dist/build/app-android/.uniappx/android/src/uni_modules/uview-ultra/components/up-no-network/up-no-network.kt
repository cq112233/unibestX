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
import io.dcloud.uniapp.extapi.getNetworkType as uni_getNetworkType
import io.dcloud.uniapp.extapi.onNetworkStatusChange as uni_onNetworkStatusChange
open class GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetwork : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.isIOS = (getDeviceInfo().platform === "ios")
            uni_onNetworkStatusChange(fun(res: OnNetworkStatusChangeCallbackResult){
                this.isConnected = res.isConnected
                this.networkType = res.networkType
                this.emitEvent(this.networkType)
            }
            )
            uni_getNetworkType(GetNetworkTypeOptions(success = fun(res: GetNetworkTypeSuccess){
                this.networkType = res.networkType
                this.emitEvent(this.networkType)
                if (res.networkType == "none") {
                    this.isConnected = false
                } else {
                    this.isConnected = true
                }
            }
            ))
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
        val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
        return _cV(_component_up_overlay, _uM("show" to !_ctx.isConnected, "zIndex" to _ctx.zIndex, "onTouchmove" to withModifiers(_ctx.noop, _uA(
            "stop",
            "prevent"
        )), "customStyle" to _uO("backgroundColor" to "#fff", "display" to "flex", "justifyContent" to "center")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
            return _uA(
                _cE("view", _uM("class" to "up-no-network"), _uA(
                    _cV(_component_up_icon, _uM("name" to _ctx.image, "size" to "150", "imgMode" to "widthFit", "class" to "up-no-network__error-icon"), null, 8, _uA(
                        "name"
                    )),
                    _cE("text", _uM("class" to "up-no-network__tips"), _tD(_ctx.tips), 1),
                    _cE("view", _uM("class" to "up-no-network__retry"), _uA(
                        _cV(_component_up_button, _uM("size" to "mini", "text" to _ctx.t("up.common.retry"), "type" to "primary", "plain" to "", "onClick" to _ctx.retry), null, 8, _uA(
                            "text",
                            "onClick"
                        ))
                    ))
                ))
            )
        }
        ), "_" to 1), 8, _uA(
            "show",
            "zIndex",
            "onTouchmove"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var tips: String by `$props`
    open var zIndex: Any by `$props`
    open var image: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var isConnected: Boolean by `$data`
    open var networkType: String by `$data`
    open var isIOS: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "isConnected" to true, "networkType" to "none", "isIOS" to false)
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
    open var t = ::gen_t_fn
    open fun gen_t_fn(s: String): String {
        return uni.UNI5198058.t(s, _uO())
    }
    open var retry = ::gen_retry_fn
    open fun gen_retry_fn() {
        uni_getNetworkType(GetNetworkTypeOptions(success = fun(res: GetNetworkTypeSuccess){
            this.networkType = res.networkType
            this.emitEvent(this.networkType)
            if (res.networkType == "none") {
                toast(uni.UNI5198058.t("up.noNetwork.disconnect", _uO()))
                this.isConnected = false
            } else {
                toast(uni.UNI5198058.t("up.noNetwork.connect", _uO()))
                this.isConnected = true
            }
        }
        ))
        this.`$emit`("retry")
    }
    open var emitEvent = ::gen_emitEvent_fn
    open fun gen_emitEvent_fn(networkType: String) {
        this.`$emit`(if (networkType === "none") {
            "disconnected"
        } else {
            "connected"
        }
        )
    }
    open var openSettings = ::gen_openSettings_fn
    open fun gen_openSettings_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend w@{
                if (this.networkType == "none") {
                    this.openSystemSettings()
                    return@w
                }
        })
    }
    open var openAppSettings = ::gen_openAppSettings_fn
    open fun gen_openAppSettings_fn() {
        this.gotoAppSetting()
    }
    open var openSystemSettings = ::gen_openSystemSettings_fn
    open fun gen_openSystemSettings_fn() {
        if (this.isIOS) {
            this.gotoiOSSetting()
        } else {
            this.gotoAndroidSetting()
        }
    }
    open var network = ::gen_network_fn
    open fun gen_network_fn() {}
    open var gotoAppSetting = ::gen_gotoAppSetting_fn
    open fun gen_gotoAppSetting_fn() {}
    open var gotoiOSSetting = ::gen_gotoiOSSetting_fn
    open fun gen_gotoiOSSetting_fn() {}
    open var gotoAndroidSetting = ::gen_gotoAndroidSetting_fn
    open fun gen_gotoAndroidSetting_fn() {}
    companion object {
        var name = "up-no-network"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-no-network" to _pS(_uM("display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center", "marginTop" to -100)), "up-no-network__tips" to _pS(_uM("color" to "#909193", "fontSize" to 14, "marginTop" to 15)), "up-no-network__app" to _pS(_uM("display" to "flex", "flexDirection" to "row", "marginTop" to 6)), "up-no-network__app__setting" to _pS(_uM("color" to "#c0c4cc", "fontSize" to 13)), "up-no-network__app__to-setting" to _pS(_uM("fontSize" to 13, "color" to "var(--theme-color, #0957de)", "marginLeft" to 3)), "up-no-network__retry" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "marginTop" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("disconnected" to null, "connected" to null, "retry" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "tips" to _uM("type" to "String", "default" to noNetworkProp["tips"]), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to noNetworkProp["zIndex"]), "image" to _uM("type" to "String", "default" to noNetworkProp["image"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "tips",
            "zIndex",
            "image"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
