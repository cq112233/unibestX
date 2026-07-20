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
open class GenSrcSubUviewUltraComponentsDemoFeedback : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
        var setup: (__props: GenSrcSubUviewUltraComponentsDemoFeedback) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraComponentsDemoFeedback
            val _cache = __ins.renderCache
            val loadingPageShow = ref(false)
            fun gen_triggerLoadingPage_fn() {
                loadingPageShow.value = true
                setTimeout(fun(){
                    loadingPageShow.value = false
                }
                , 2000)
            }
            val triggerLoadingPage = ::gen_triggerLoadingPage_fn
            val collapseValue = ref("1")
            val modalShow = ref(false)
            val modalTitle = ref("")
            val modalContent = ref("")
            val modalShowCancel = ref(false)
            val popupShow = ref(false)
            val popupMode = ref("bottom")
            val overlayShow = ref(false)
            val overlayOpacity = ref(0.5)
            val tooltipButtons = ref(_uA<String>("编辑", "删除"))
            val uToast = ref(null as ComponentPublicInstance?)
            fun gen_showToast_fn(type: String) {
                val toast = uToast.value
                if (toast != null) {
                    val configs: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("configs", "src/sub/uview-ultra/components/DemoFeedback.uvue", 240, 11), "success" to _uO("message" to "操作成功！", "type" to "success"), "error" to _uO("message" to "操作失败！", "type" to "error"), "warning" to _uO("message" to "请注意风险！", "type" to "warning"), "default" to _uO("message" to "这是一条提示", "type" to "default"))
                    val config = configs[type] as UTSJSONObject
                    toast.`$callMethod`("show", _uO("message" to config["message"] as String, "type" to config["type"] as String))
                }
            }
            val showToast = ::gen_showToast_fn
            val uNotify = ref(null as ComponentPublicInstance?)
            fun gen_showNotify_fn(type: String) {
                val notify = uNotify.value
                if (notify != null) {
                    val msgs: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("msgs", "src/sub/uview-ultra/components/DemoFeedback.uvue", 259, 11), "primary" to "主要通知消息", "success" to "操作成功通知", "warning" to "请注意安全通知", "error" to "发生错误通知")
                    notify.`$callMethod`("show", _uO("message" to msgs[type] as String, "type" to type))
                }
            }
            val showNotify = ::gen_showNotify_fn
            fun gen_showModal_fn() {
                modalTitle.value = "提示"
                modalContent.value = "这是一个模态弹窗，用于提示重要信息。"
                modalShowCancel.value = false
                modalShow.value = true
            }
            val showModal = ::gen_showModal_fn
            fun gen_showConfirmModal_fn() {
                modalTitle.value = "确认操作"
                modalContent.value = "确定要执行此操作吗？此操作不可撤销。"
                modalShowCancel.value = true
                modalShow.value = true
            }
            val showConfirmModal = ::gen_showConfirmModal_fn
            fun gen_onModalConfirm_fn() {
                modalShow.value = false
                showToast("success")
            }
            val onModalConfirm = ::gen_onModalConfirm_fn
            fun gen_onModalClose_fn() {
                modalShow.value = false
            }
            val onModalClose = ::gen_onModalClose_fn
            fun gen_openPopup_fn(mode: String) {
                popupMode.value = mode
                popupShow.value = true
            }
            val openPopup = ::gen_openPopup_fn
            fun gen_onPopupClose_fn() {
                popupShow.value = false
            }
            val onPopupClose = ::gen_onPopupClose_fn
            return fun(): Any? {
                val _component_up_alert = resolveEasyComponent("up-alert", GenUniModulesUviewUltraComponentsUpAlertUpAlertClass)
                val _component_up_notice_bar = resolveEasyComponent("up-notice-bar", GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBarClass)
                val _component_up_collapse_item = resolveEasyComponent("up-collapse-item", GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItemClass)
                val _component_up_collapse = resolveEasyComponent("up-collapse", GenUniModulesUviewUltraComponentsUpCollapseUpCollapseClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_tooltip = resolveEasyComponent("up-tooltip", GenUniModulesUviewUltraComponentsUpTooltipUpTooltipClass)
                val _component_up_divider = resolveEasyComponent("up-divider", GenUniModulesUviewUltraComponentsUpDividerUpDividerClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
                val _component_up_toast = resolveEasyComponent("up-toast", GenUniModulesUviewUltraComponentsUpToastUpToastClass)
                val _component_up_notify = resolveEasyComponent("up-notify", GenUniModulesUviewUltraComponentsUpNotifyUpNotifyClass)
                val _component_up_modal = resolveEasyComponent("up-modal", GenUniModulesUviewUltraComponentsUpModalUpModalClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                val _component_up_loading_page = resolveEasyComponent("up-loading-page", GenUniModulesUviewUltraComponentsUpLoadingPageUpLoadingPageClass)
                return _cE("view", null, _uA(
                    _cE("text", _uM("class" to "section-title"), " 反馈组件 "),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-alert "),
                        _cV(_component_up_alert, _uM("title" to "成功提示", "type" to "success", "show-icon" to true)),
                        _cE("view", _uM("class" to "h-10px")),
                        _cV(_component_up_alert, _uM("title" to "警告提示", "type" to "warning", "show-icon" to true)),
                        _cE("view", _uM("class" to "h-10px")),
                        _cV(_component_up_alert, _uM("title" to "错误提示", "type" to "error", "show-icon" to true)),
                        _cE("view", _uM("class" to "h-10px")),
                        _cV(_component_up_alert, _uM("title" to "信息提示", "type" to "info", "show-icon" to true))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-notice-bar "),
                        _cV(_component_up_notice_bar, _uM("text" to "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库", "mode" to "link"))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-collapse "),
                        _cV(_component_up_collapse, _uM("value" to collapseValue.value, "accordion" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_collapse_item, _uM("title" to "第一项", "name" to "1"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "collapse-text"), "uview-ultra 是基于 uview-plus 修改的 uni-app-x 版本")
                                    )
                                }
                                ), "_" to 1)),
                                _cV(_component_up_collapse_item, _uM("title" to "第二项", "name" to "2"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "collapse-text"), "支持 iOS、Android、H5、小程序等多端")
                                    )
                                }
                                ), "_" to 1)),
                                _cV(_component_up_collapse_item, _uM("title" to "第三项", "name" to "3"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "collapse-text"), "高度适配 UTS 强类型系统与原生跨端开发")
                                    )
                                }
                                ), "_" to 1))
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "value"
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-toast "),
                        _cE("view", _uM("class" to "demo-row"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "成功提示", "size" to "mini", "onClick" to fun(){
                                showToast("success")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "error", "text" to "错误提示", "size" to "mini", "onClick" to fun(){
                                showToast("error")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "warning", "text" to "警告提示", "size" to "mini", "onClick" to fun(){
                                showToast("warning")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "info", "text" to "默认提示", "size" to "mini", "onClick" to fun(){
                                showToast("default")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-notify "),
                        _cE("view", _uM("class" to "demo-row"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "主要通知", "size" to "mini", "onClick" to fun(){
                                showNotify("primary")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "success", "text" to "成功通知", "size" to "mini", "onClick" to fun(){
                                showNotify("success")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "warning", "text" to "警告通知", "size" to "mini", "onClick" to fun(){
                                showNotify("warning")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "error", "text" to "错误通知", "size" to "mini", "onClick" to fun(){
                                showNotify("error")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-loading-page "),
                        _cE("view", _uM("class" to "demo-row-start"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "触发全屏加载", "size" to "mini", "onClick" to triggerLoadingPage))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-overlay "),
                        _cE("view", _uM("class" to "demo-row"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "显示遮罩", "size" to "mini", "onClick" to fun(){
                                overlayShow.value = true
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "warning", "text" to "半透明遮罩", "size" to "mini", "onClick" to fun(){
                                overlayOpacity.value = 0.3
                                overlayShow.value = true
                            }
                            ), null, 8, _uA(
                                "onClick"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-modal "),
                        _cE("view", _uM("class" to "demo-row"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "弹窗提示", "size" to "mini", "onClick" to showModal)),
                            _cV(_component_up_button, _uM("type" to "warning", "text" to "确认弹窗", "size" to "mini", "onClick" to showConfirmModal))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-popup "),
                        _cE("view", _uM("class" to "demo-row"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "顶部弹出", "size" to "mini", "onClick" to fun(){
                                openPopup("top")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "底部弹出", "size" to "mini", "onClick" to fun(){
                                openPopup("bottom")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "左侧弹出", "size" to "mini", "onClick" to fun(){
                                openPopup("left")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "右侧弹出", "size" to "mini", "onClick" to fun(){
                                openPopup("right")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "居中弹出", "size" to "mini", "onClick" to fun(){
                                openPopup("center")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-tooltip "),
                        _cE("view", _uM("class" to "demo-row-start"), _uA(
                            _cV(_component_up_tooltip, _uM("text" to "长按此处复制文本", "direction" to "top")),
                            _cE("view", _uM("class" to "w-30px")),
                            _cV(_component_up_tooltip, _uM("text" to "长按显示操作", "direction" to "top", "show-copy" to false, "buttons" to tooltipButtons.value), null, 8, _uA(
                                "buttons"
                            )),
                            _cE("view", _uM("class" to "w-30px")),
                            _cV(_component_up_tooltip, _uM("text" to "底部弹出", "direction" to "bottom", "color" to "#2979ff", "bg-color" to "#f0f5ff"))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-no-network "),
                        _cE("text", _uM("class" to "text-12px text-__909399_"), "引入即自动监听网络状态，断网时全屏展示遮罩提示。")
                    )),
                    _cV(_component_up_divider, _uM("text" to "反馈组件结束")),
                    _cV(_component_up_overlay, _uM("show" to overlayShow.value, "opacity" to overlayOpacity.value, "onClick" to fun(){
                        overlayShow.value = false
                    }
                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to "flex-1 items-center justify-center"), _uA(
                                _cE("view", _uM("class" to "bg-white rounded-8px p-20px items-center", "onClick" to withModifiers(fun(){}, _uA(
                                    "stop"
                                ))), _uA(
                                    _cV(_component_up_loading_icon, _uM("mode" to "circle")),
                                    _cE("text", _uM("class" to "text-14px text-__303133_ mt-10px"), "加载中，点击遮罩关闭")
                                ), 8, _uA(
                                    "onClick"
                                ))
                            ))
                        )
                    }
                    ), "_" to 1), 8, _uA(
                        "show",
                        "opacity",
                        "onClick"
                    )),
                    _cV(_component_up_toast, _uM("ref_key" to "uToast", "ref" to uToast), null, 512),
                    _cV(_component_up_notify, _uM("ref_key" to "uNotify", "ref" to uNotify), null, 512),
                    _cV(_component_up_modal, _uM("show" to modalShow.value, "title" to modalTitle.value, "content" to modalContent.value, "show-confirm-button" to true, "show-cancel-button" to modalShowCancel.value, "onConfirm" to onModalConfirm, "onClose" to onModalClose), null, 8, _uA(
                        "show",
                        "title",
                        "content",
                        "show-cancel-button"
                    )),
                    _cV(_component_up_popup, _uM("show" to popupShow.value, "mode" to popupMode.value, "closeable" to true, "round" to 10, "onClose" to onPopupClose), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to "p-30px items-center"), _uA(
                                _cE("text", _uM("class" to "text-16px text-__303133_"), _tD(popupMode.value) + " 弹出层内容", 1)
                            ))
                        )
                    }
                    ), "_" to 1), 8, _uA(
                        "show",
                        "mode"
                    )),
                    _cV(_component_up_loading_page, _uM("loading" to loadingPageShow.value, "loading-text" to "页面正在加载中...", "loading-mode" to "circle"), null, 8, _uA(
                        "loading"
                    ))
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
                return _uM("bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "h-10px" to _pS(_uM("height" to 10)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-center" to _pS(_uM("justifyContent" to "center")), "mt-10px" to _pS(_uM("marginTop" to 10)), "p-20px" to _pS(_uM("paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "p-30px" to _pS(_uM("paddingTop" to 30, "paddingRight" to 30, "paddingBottom" to 30, "paddingLeft" to 30)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__303133_" to _pS(_uM("color" to "#303133")), "text-__909399_" to _pS(_uM("color" to "#909399")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-16px" to _pS(_uM("fontSize" to 16)), "w-30px" to _pS(_uM("width" to 30)), "section-title" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 8, "paddingLeft" to 16, "fontSize" to 18, "fontWeight" to "bold", "color" to "#303133")), "demo-block" to _pS(_uM("marginTop" to 0, "marginRight" to 12, "marginBottom" to 12, "marginLeft" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")), "demo-row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center", "justifyContent" to "space-between", "marginBottom" to 8)), "demo-row-start" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center", "justifyContent" to "flex-start", "marginBottom" to 8)), "collapse-text" to _pS(_uM("fontSize" to 13, "color" to "#909399", "lineHeight" to "20px")))
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
