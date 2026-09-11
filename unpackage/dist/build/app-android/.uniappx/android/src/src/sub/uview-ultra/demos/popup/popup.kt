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
open class GenSrcSubUviewUltraDemosPopupPopup : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosPopupPopup) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosPopupPopup
            val _cache = __ins.renderCache
            val basicTopShow = ref(false)
            fun gen_openTopBasic_fn() {
                basicTopShow.value = true
            }
            val openTopBasic = ::gen_openTopBasic_fn
            val basicBottomShow = ref(false)
            fun gen_openBottomBasic_fn() {
                basicBottomShow.value = true
            }
            val openBottomBasic = ::gen_openBottomBasic_fn
            val basicCenterShow = ref(false)
            fun gen_openCenterBasic_fn() {
                basicCenterShow.value = true
            }
            val openCenterBasic = ::gen_openCenterBasic_fn
            val basicLeftShow = ref(false)
            fun gen_openLeftBasic_fn() {
                basicLeftShow.value = true
            }
            val openLeftBasic = ::gen_openLeftBasic_fn
            val basicRightShow = ref(false)
            fun gen_openRightBasic_fn() {
                basicRightShow.value = true
            }
            val openRightBasic = ::gen_openRightBasic_fn
            val gestureTopShow = ref(false)
            fun gen_openTopGesture_fn() {
                gestureTopShow.value = true
            }
            val openTopGesture = ::gen_openTopGesture_fn
            val gestureBottomShow = ref(false)
            fun gen_openBottomGesture_fn() {
                gestureBottomShow.value = true
            }
            val openBottomGesture = ::gen_openBottomGesture_fn
            val gestureLeftShow = ref(false)
            fun gen_openLeftGesture_fn() {
                gestureLeftShow.value = true
            }
            val openLeftGesture = ::gen_openLeftGesture_fn
            val gestureRightShow = ref(false)
            fun gen_openRightGesture_fn() {
                gestureRightShow.value = true
            }
            val openRightGesture = ::gen_openRightGesture_fn
            val showBasicPopup = ref<Boolean>(false)
            val showHighThresholdPopup = ref<Boolean>(false)
            val showListPopup = ref<Boolean>(false)
            val tabList = _uA(
                "全部",
                "热点",
                "精选",
                "公告"
            ) as UTSArray<String>
            val currentTab = ref<Number>(0)
            val pagingRef = ref<ComponentPublicInstance?>(null)
            val pagingList = ref<UTSArray<PopupPagingItem>>(_uA<PopupPagingItem>())
            fun gen_onUpdatePagingList_fn(kVal: UTSArray<Any>) {
                pagingList.value = kVal as UTSArray<PopupPagingItem>
            }
            val onUpdatePagingList = ::gen_onUpdatePagingList_fn
            fun gen_onTabChange_fn(index: Number) {
                if (currentTab.value == index) {
                    return
                }
                currentTab.value = index
                if (pagingRef.value != null) {
                    pagingRef.value!!.`$callMethod`("reload")
                }
            }
            val onTabChange = ::gen_onTabChange_fn
            fun gen_reloadPaging_fn() {
                if (pagingRef.value != null) {
                    pagingRef.value!!.`$callMethod`("reload")
                }
            }
            val reloadPaging = ::gen_reloadPaging_fn
            fun gen_clearPaging_fn() {
                pagingList.value = _uA<PopupPagingItem>()
                if (pagingRef.value != null) {
                    pagingRef.value!!.`$callMethod`("clear")
                }
            }
            val clearPaging = ::gen_clearPaging_fn
            fun gen_onQueryPaging_fn(pageNo: Number, pageSize: Number) {
                val activeTab = tabList[currentTab.value]
                setTimeout(fun(){
                    if (activeTab == "热点") {
                        if (pagingRef.value != null) {
                            pagingRef.value!!.`$callMethod`("complete", _uA<PopupPagingItem>())
                        }
                        return
                    }
                    val list = _uA<PopupPagingItem>()
                    val start = (pageNo - 1) * pageSize
                    val maxItems = if (activeTab == "公告") {
                        8
                    } else {
                        20
                    }
                    run {
                        var i: Number = 0
                        while(i < pageSize){
                            val id = start + i + 1
                            if (id > maxItems) {
                                break
                            }
                            var tag = activeTab
                            if (activeTab == "全部") {
                                tag = if ((id % 3 == 0)) {
                                    "公告"
                                } else {
                                    if (id % 2 == 0) {
                                        "热点"
                                    } else {
                                        "精选"
                                    }
                                }
                            }
                            list.push(PopupPagingItem(id = id, title = "[" + tag + "] 资讯条目 #" + id, desc = "当前分类：" + tag + "，由 z-paging-x 驱动分页，支持平滑滚动与触底加载。", tag = tag, time = "" + id * 2 + "分钟前"))
                            i++
                        }
                    }
                    if (pagingRef.value != null) {
                        pagingRef.value!!.`$callMethod`("complete", list)
                    }
                }
                , 350)
            }
            val onQueryPaging = ::gen_onQueryPaging_fn
            return fun(): Any? {
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                val _component_z_paging_x = resolveEasyComponent("z-paging-x", GenUniModulesZPagingXComponentsZPagingXZPagingXClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-popup 弹出层", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-popup 弹出层", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "基础方向用法"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center mb-_b10px_B"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "顶部弹出", "size" to "mini", "onClick" to openTopBasic)),
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b8px_B")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "底部弹出", "size" to "mini", "onClick" to openBottomBasic)),
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b8px_B")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "居中弹出", "size" to "mini", "onClick" to openCenterBasic))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_button, _uM("type" to "success", "text" to "左侧弹出", "size" to "mini", "onClick" to openLeftBasic)),
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b8px_B")),
                                                _cV(_component_up_button, _uM("type" to "success", "text" to "右侧弹出", "size" to "mini", "onClick" to openRightBasic))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between mb-_b8px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-label _emb-0"), "各方向手势滑动关闭"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B bg-_b_heff6ff_B text-_b_h2563eb_B px-_b6px_B py-_b1px_B rounded-full font-medium"), "方向自适应")
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B leading-_b18px_B mb-_b12px_B"), " 顶部上滑关闭、底部下滑关闭、左侧左滑关闭、右侧右滑关闭；拖拽超过 40px 松手自动滑出关闭，居中不设手势。 "),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center mb-_b10px_B"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "顶部弹出 (上滑关闭)", "size" to "mini", "onClick" to openTopGesture)),
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b8px_B")),
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "底部弹出 (下滑关闭)", "size" to "mini", "onClick" to openBottomGesture))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_button, _uM("type" to "success", "text" to "左侧弹出 (左滑关闭)", "size" to "mini", "onClick" to openLeftGesture)),
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b8px_B")),
                                                _cV(_component_up_button, _uM("type" to "success", "text" to "右侧弹出 (右滑关闭)", "size" to "mini", "onClick" to openRightGesture))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between mb-_b8px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-label _emb-0"), "自定义阈值 (Threshold)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B bg-_b_hfef3c7_B text-_b_hd97706_B px-_b6px_B py-_b1px_B rounded-full font-medium"), "灵敏度控制")
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B leading-_b18px_B mb-_b10px_B"), " 通过 slide-down-threshold 调节灵敏度：默认 40px 快速响应；100px 防误触面板。 "),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "默认阈值 (40px)", "size" to "mini", "onClick" to fun(){
                                                    showBasicPopup.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b10px_B")),
                                                _cV(_component_up_button, _uM("type" to "warning", "text" to "高阈值防误触 (100px)", "size" to "mini", "onClick" to fun(){
                                                    showHighThresholdPopup.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between mb-_b8px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-label _emb-0"), "嵌套分页列表 (z-paging-x 协同)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B bg-_b_hf3e8ff_B text-_b_h7e22ce_B px-_b6px_B py-_b1px_B rounded-full font-medium"), "防冲突 + 分页")
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B leading-_b18px_B mb-_b10px_B"), " 配置 scroll-id=\"popup-paging-scroll\"。支持触底加载；仅当列表回顶时向下拉动触发弹窗下滑关闭。 "),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_button, _uM("type" to "info", "text" to "打开 z-paging-x 分页弹窗", "size" to "mini", "onClick" to fun(){
                                                    showListPopup.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        ))
                                    )),
                                    _cV(_component_up_popup, _uM("show" to basicTopShow.value, "mode" to "top", "closeable" to true, "round" to 12, "onClose" to fun(){
                                        basicTopShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b28px_B flex flex-col items-center"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B mb-_b8px_B"), "顶部弹出层"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b18px_B"), "常规弹出层展示，可通过点击遮罩或右上角关闭图标收起。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b28px_B rounded-_b8px_B active_copacity-80", "onClick" to fun(){
                                                    basicTopShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "我知道了")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to basicBottomShow.value, "mode" to "bottom", "closeable" to true, "round" to 12, "onClose" to fun(){
                                        basicBottomShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b28px_B flex flex-col items-center"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B mb-_b8px_B"), "底部弹出层"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b18px_B"), "常规弹出层展示，可通过点击遮罩或右上角关闭图标收起。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b28px_B rounded-_b8px_B active_copacity-80", "onClick" to fun(){
                                                    basicBottomShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "我知道了")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to basicCenterShow.value, "mode" to "center", "closeable" to true, "round" to 12, "onClose" to fun(){
                                        basicCenterShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b28px_B flex flex-col items-center"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B mb-_b8px_B"), "居中弹出层"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b18px_B"), "常规弹出层展示，可通过点击遮罩或右上角关闭图标收起。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b28px_B rounded-_b8px_B active_copacity-80", "onClick" to fun(){
                                                    basicCenterShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "我知道了")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to basicLeftShow.value, "mode" to "left", "closeable" to true, "round" to 12, "onClose" to fun(){
                                        basicLeftShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b28px_B flex flex-col items-center w-_b260px_B h-full justify-center"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B mb-_b8px_B"), "左侧弹出层"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b18px_B"), "常规弹出层展示，可通过点击遮罩或右上角关闭图标收起。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b28px_B rounded-_b8px_B active_copacity-80", "onClick" to fun(){
                                                    basicLeftShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "我知道了")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to basicRightShow.value, "mode" to "right", "closeable" to true, "round" to 12, "onClose" to fun(){
                                        basicRightShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b28px_B flex flex-col items-center w-_b260px_B h-full justify-center"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B mb-_b8px_B"), "右侧弹出层"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b18px_B"), "常规弹出层展示，可通过点击遮罩或右上角关闭图标收起。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b28px_B rounded-_b8px_B active_copacity-80", "onClick" to fun(){
                                                    basicRightShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "我知道了")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to gestureTopShow.value, "mode" to "top", "closeable" to true, "round" to 16, "close-on-slide-down" to true, "show-drag-bar" to true, "slide-down-threshold" to 40, "onClose" to fun(){
                                        gestureTopShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b26px_B flex flex-col items-center"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b44px_B h-_b44px_B rounded-full bg-_b_heff6ff_B flex items-center justify-center mb-_b10px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B text-_b_h2563eb_B"), "↑")
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b17px_B font-bold text-_b_h0f172a_B mb-_b6px_B"), "顶部弹出 (上滑关闭)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b14px_B leading-_b20px_B"), "手指向【上】推拉滑动超过 40px，松手即可上滑关闭。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_hf1f5f9_B rounded-_b10px_B p-_b12px_B w-full mb-_b16px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h475569_B leading-_b18px_B"), "当前方向已开启手势滑动关闭与指示条。拖拽位移达到 40px 松手即可触发关闭；未达阈值弹性复位。")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b32px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    gestureTopShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "完成并收起")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to gestureBottomShow.value, "mode" to "bottom", "closeable" to true, "round" to 16, "close-on-slide-down" to true, "show-drag-bar" to true, "slide-down-threshold" to 40, "onClose" to fun(){
                                        gestureBottomShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b26px_B flex flex-col items-center"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b44px_B h-_b44px_B rounded-full bg-_b_heff6ff_B flex items-center justify-center mb-_b10px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B text-_b_h2563eb_B"), "↓")
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b17px_B font-bold text-_b_h0f172a_B mb-_b6px_B"), "底部弹出 (下滑关闭)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b14px_B leading-_b20px_B"), "手指向【下】拖拉滑动超过 40px，松手即可下滑关闭。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_hf1f5f9_B rounded-_b10px_B p-_b12px_B w-full mb-_b16px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h475569_B leading-_b18px_B"), "当前方向已开启手势滑动关闭与指示条。拖拽位移达到 40px 松手即可触发关闭；未达阈值弹性复位。")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b32px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    gestureBottomShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "完成并收起")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to gestureLeftShow.value, "mode" to "left", "closeable" to true, "round" to 16, "close-on-slide-down" to true, "show-drag-bar" to true, "slide-down-threshold" to 40, "onClose" to fun(){
                                        gestureLeftShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b26px_B flex flex-col items-center w-_b260px_B h-full justify-center"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b44px_B h-_b44px_B rounded-full bg-_b_heff6ff_B flex items-center justify-center mb-_b10px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B text-_b_h2563eb_B"), "←")
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b17px_B font-bold text-_b_h0f172a_B mb-_b6px_B"), "左侧弹出 (左滑关闭)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b14px_B leading-_b20px_B"), "手指向【左】拉动滑动超过 40px，松手即可左滑关闭。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_hf1f5f9_B rounded-_b10px_B p-_b12px_B w-full mb-_b16px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h475569_B leading-_b18px_B"), "当前方向已开启手势滑动关闭与指示条。拖拽位移达到 40px 松手即可触发关闭；未达阈值弹性复位。")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b32px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    gestureLeftShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "完成并收起")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to gestureRightShow.value, "mode" to "right", "closeable" to true, "round" to 16, "close-on-slide-down" to true, "show-drag-bar" to true, "slide-down-threshold" to 40, "onClose" to fun(){
                                        gestureRightShow.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b24px_B py-_b26px_B flex flex-col items-center w-_b260px_B h-full justify-center"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b44px_B h-_b44px_B rounded-full bg-_b_heff6ff_B flex items-center justify-center mb-_b10px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B text-_b_h2563eb_B"), "→")
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b17px_B font-bold text-_b_h0f172a_B mb-_b6px_B"), "右侧弹出 (右滑关闭)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b14px_B leading-_b20px_B"), "手指向【右】拉动滑动超过 40px，松手即可右滑关闭。"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_hf1f5f9_B rounded-_b10px_B p-_b12px_B w-full mb-_b16px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h475569_B leading-_b18px_B"), "当前方向已开启手势滑动关闭与指示条。拖拽位移达到 40px 松手即可触发关闭；未达阈值弹性复位。")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b10px_B px-_b32px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    gestureRightShow.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b14px_B font-bold"), "完成并收起")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to showBasicPopup.value, "mode" to "bottom", "round" to 16, "close-on-slide-down" to true, "slide-down-threshold" to 40, "show-drag-bar" to true, "closeable" to true, "onClose" to fun(){
                                        showBasicPopup.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b20px_B pb-_b32px_B pt-_b8px_B flex flex-col"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b18px_B font-bold text-_b_h0f172a_B text-center mb-_b8px_B"), "基础下滑关闭面板 (40px)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B text-center mb-_b20px_B"), "拖动上方胶囊横条或面板空白区域向下滑动即可关闭"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_hf1f5f9_B rounded-_b12px_B p-_b16px_B mb-_b20px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center mb-_b8px_B"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-bold text-_b_h334155_B"), "功能特性：")
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b22px_B"), " • 实时跟手位移，手指下移弹窗实时下移 • 下拉超过 40px 松手自动滑出关闭 • 下拉未达 40px 或松手前上推自动弹性复位 ")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0957de_B py-_b12px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    showBasicPopup.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b15px_B font-bold"), "完成并收起")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to showHighThresholdPopup.value, "mode" to "bottom", "round" to 16, "close-on-slide-down" to true, "slide-down-threshold" to 100, "show-drag-bar" to true, "closeable" to true, "onClose" to fun(){
                                        showHighThresholdPopup.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b20px_B pb-_b32px_B pt-_b8px_B flex flex-col"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b18px_B font-bold text-_b_h0f172a_B text-center mb-_b8px_B"), "高阈值防误触面板 (100px)"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_hd97706_B text-center mb-_b18px_B"), "当前阈值设置为 100px（需要向下拖动较深距离才会关闭）"),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_hfefce8_B border-_b1px_B border-solid border-_b_hfde047_B rounded-_b12px_B p-_b16px_B mb-_b20px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h854d0e_B leading-_b22px_B"), "轻微下拉（未满 100px）松手会立即回弹至完全展开状态，避免用户浏览时不小心误触关闭。")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h0f766e_B py-_b12px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    showHighThresholdPopup.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b15px_B font-bold"), "我知道了")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
                                    )),
                                    _cV(_component_up_popup, _uM("show" to showListPopup.value, "mode" to "bottom", "round" to 16, "close-on-slide-down" to true, "slide-down-threshold" to 50, "show-drag-bar" to true, "closeable" to true, "scroll-id" to "popup-paging-scroll", "onClose" to fun(){
                                        showListPopup.value = false
                                    }
                                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border px-_b20px_B pb-_b24px_B pt-_b8px_B flex flex-col"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b18px_B font-bold text-_b_h0f172a_B text-center mb-_b6px_B"), "z-paging-x 嵌套分页演示"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B text-center mb-_b12px_B"), "支持触底加载更多数据；当列表回顶时向下拉动，触发弹窗下滑关闭手势"),
                                                _cE("view", _uM("class" to "weapp-tw-border flex flex-row bg-_b_hf1f5f9_B p-_b3px_B rounded-_b10px_B mb-_b12px_B"), _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList(tabList, fun(tab, index, __index, _cached): Any {
                                                        return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                                                            "weapp-tw-border flex-1 items-center justify-center py-_b6px_B rounded-_b8px_B active_copacity-80",
                                                            if (currentTab.value == index) {
                                                                "bg-white shadow-xs"
                                                            } else {
                                                                "bg-transparent"
                                                            }
                                                        )), "onClick" to fun(){
                                                            onTabChange(index)
                                                        }
                                                        ), _uA(
                                                            _cE("text", _uM("class" to _nC(_uA(
                                                                "weapp-tw-border text-_b13px_B font-bold",
                                                                if (currentTab.value == index) {
                                                                    "text-_b_h7c3aed_B"
                                                                } else {
                                                                    "text-_b_h64748b_B"
                                                                }
                                                            ))), _tD(tab), 3)
                                                        ), 10, _uA(
                                                            "onClick"
                                                        ))
                                                    }
                                                    ), 64)
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center justify-between mb-_b10px_B px-_b4px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h475569_B font-medium"), "当前分类："),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h7c3aed_B font-bold mr-_b4px_B"), _tD(tabList[currentTab.value]), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B"), "(" + _tD(pagingList.value.length) + "条)", 1)
                                                    )),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center"), _uA(
                                                        _cE("view", _uM("class" to "weapp-tw-border px-_b10px_B py-_b3px_B rounded-full bg-_b_hfee2e2_B mr-_b8px_B active_copacity-70", "onClick" to clearPaging), _uA(
                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_hef4444_B font-medium"), "置为0条")
                                                        )),
                                                        _cE("view", _uM("class" to "weapp-tw-border px-_b10px_B py-_b3px_B rounded-_b12px_B bg-_b_hf3e8ff_B active_copacity-70", "onClick" to reloadPaging), _uA(
                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h7c3aed_B font-medium"), "重新加载")
                                                        ))
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b360px_B mb-_b16px_B rounded-_b12px_B overflow-hidden border-_b1px_B border-solid border-_b_hedf2f7_B bg-_b_hf8fafc_B"), _uA(
                                                    _cV(_component_z_paging_x, _uM("ref_key" to "pagingRef", "ref" to pagingRef, "list-is" to "scroll-view", "list-id" to "popup-paging-scroll", "refresher-enabled" to false, "model-value" to pagingList.value, "default-page-size" to 6, "paging-style" to _uO("height" to "360px"), "onUpdate:modelValue" to onUpdatePagingList, "onQuery" to onQueryPaging), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            if (pagingList.value.length > 0) {
                                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border"), _uA(
                                                                    _cE(Fragment, null, RenderHelpers.renderList(pagingList.value, fun(item, __key, __index, _cached): Any {
                                                                        return _cE("view", _uM("key" to item.id, "class" to "weapp-tw-border bg-white p-_b12px_B mx-_b10px_B my-_b6px_B rounded-_b10px_B border-_b1px_B border-solid border-_b_hf1f5f9_B flex flex-row items-center justify-between shadow-xs"), _uA(
                                                                            _cE("view", _uM("class" to "weapp-tw-border flex flex-col flex-1 mr-_b10px_B"), _uA(
                                                                                _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center mb-_b4px_B"), _uA(
                                                                                    _cE("text", _uM("class" to _nC(_uA(
                                                                                        "weapp-tw-border text-_b10px_B font-bold px-_b6px_B py-_b1px_B rounded-_b4px_B mr-_b6px_B",
                                                                                        if (item.tag == "热点") {
                                                                                            "bg-_b_hfee2e2_B text-_b_hef4444_B"
                                                                                        } else {
                                                                                            if (item.tag == "公告") {
                                                                                                "bg-_b_hfef3c7_B text-_b_hd97706_B"
                                                                                            } else {
                                                                                                "bg-_b_heff6ff_B text-_b_h2563eb_B"
                                                                                            }
                                                                                        }
                                                                                    ))), _tD(item.tag), 3),
                                                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-bold text-_b_h1e293b_B"), _tD(item.title), 1)
                                                                                )),
                                                                                _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B leading-_b18px_B"), _tD(item.desc), 1)
                                                                            )),
                                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_h94a3b8_B"), _tD(item.time), 1)
                                                                        ))
                                                                    }), 128)
                                                                ))
                                                            } else {
                                                                _cC("v-if", true)
                                                            }
                                                        )
                                                    }
                                                    ), "_" to 1), 8, _uA(
                                                        "model-value"
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border bg-_b_h7c3aed_B py-_b12px_B rounded-_b10px_B flex items-center justify-center active_copacity-80", "onClick" to fun(){
                                                    showListPopup.value = false
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-white text-_b15px_B font-bold"), "关闭弹窗")
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "show",
                                        "onClose"
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "var(--theme-color, #0957de)")))
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
