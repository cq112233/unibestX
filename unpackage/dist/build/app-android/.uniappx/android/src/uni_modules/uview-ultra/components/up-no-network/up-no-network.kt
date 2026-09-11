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
import io.dcloud.uniapp.extapi.getNetworkType as uni_getNetworkType
import io.dcloud.uniapp.extapi.onNetworkStatusChange as uni_onNetworkStatusChange
open class GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetwork : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
    open var retry: () -> Unit
        get() {
            return unref(this.`$exposed`["retry"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "retry", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetwork, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetwork
            val _cache = __ins.renderCache
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val isConnected = ref<Boolean>(true)
            val networkType = ref<String>("none")
            val isIOS = ref<Boolean>(false)
            fun gen_noop_fn() {}
            val noop = ::gen_noop_fn
            fun gen_t_fn(s: String): String {
                return t(s, _uO())
            }
            val t__1 = ::gen_t_fn
            fun gen_emitEvent_fn(netType: String) {
                emit(if (netType === "none") {
                    "disconnected"
                } else {
                    "connected"
                }
                )
            }
            val emitEvent = ::gen_emitEvent_fn
            fun gen_retry_fn() {
                uni_getNetworkType(GetNetworkTypeOptions(success = fun(res: GetNetworkTypeSuccess){
                    networkType.value = res.networkType
                    emitEvent(networkType.value)
                    if (res.networkType == "none") {
                        toast(t__1("up.noNetwork.disconnect"))
                        isConnected.value = false
                    } else {
                        toast(t__1("up.noNetwork.connect"))
                        isConnected.value = true
                    }
                }
                ))
                emit("retry")
            }
            val retry = ::gen_retry_fn
            fun gen_openSettings_fn() {
                if (networkType.value == "none") {}
            }
            val openSettings = ::gen_openSettings_fn
            onMounted(fun(){
                isIOS.value = (getDeviceInfo().platform === "ios")
                uni_onNetworkStatusChange(fun(res: OnNetworkStatusChangeCallbackResult){
                    isConnected.value = res.isConnected
                    networkType.value = res.networkType
                    emitEvent(networkType.value)
                }
                )
                uni_getNetworkType(GetNetworkTypeOptions(success = fun(res: GetNetworkTypeSuccess){
                    networkType.value = res.networkType
                    emitEvent(networkType.value)
                    if (res.networkType == "none") {
                        isConnected.value = false
                    } else {
                        isConnected.value = true
                    }
                }
                ))
            }
            )
            __expose(_uM("retry" to retry))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
                return _cV(_component_up_overlay, _uM("show" to !isConnected.value, "zIndex" to _ctx.zIndex, "onTouchmove" to withModifiers(noop, _uA(
                    "stop",
                    "prevent"
                )), "customStyle" to _uO("backgroundColor" to "#fff", "display" to "flex", "justifyContent" to "center")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-no-network"), _uA(
                            _cV(_component_up_icon, _uM("name" to _ctx.image, "size" to "150", "imgMode" to "widthFit", "class" to "up-no-network__error-icon"), null, 8, _uA(
                                "name"
                            )),
                            _cE("text", _uM("class" to "weapp-tw-border up-no-network__tips"), _tD(_ctx.tips), 1),
                            _cE("view", _uM("class" to "weapp-tw-border up-no-network__retry"), _uA(
                                _cV(_component_up_button, _uM("size" to "mini", "text" to t__1("up.common.retry"), "type" to "primary", "plain" to "", "onClick" to retry), null, 8, _uA(
                                    "text"
                                ))
                            ))
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "show",
                    "zIndex"
                ))
            }
        }
        var name = "up-no-network"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-no-network" to _pS(_uM("display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center", "marginTop" to -100)), "up-no-network__tips" to _pS(_uM("color" to "#909193", "fontSize" to 14, "marginTop" to 15)), "up-no-network__app" to _pS(_uM("display" to "flex", "flexDirection" to "row", "marginTop" to 6)), "up-no-network__app__setting" to _pS(_uM("color" to "#c0c4cc", "fontSize" to 13)), "up-no-network__app__to-setting" to _pS(_uM("fontSize" to 13, "color" to "var(--theme-color, #0957de)", "marginLeft" to 3)), "up-no-network__retry" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "marginTop" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("disconnected" to null, "connected" to null, "retry" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "tips" to _uM("type" to "String", "default" to "哎呀，网络信号丢失"), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 10080), "image" to _uM("type" to "String", "default" to "wifi-off")))
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
