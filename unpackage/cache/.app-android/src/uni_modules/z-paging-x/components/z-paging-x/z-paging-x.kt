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
open class GenUniModulesZPagingXComponentsZPagingXZPagingX : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var defaultPageNo: Number by `$props`
    open var defaultPageSize: Number by `$props`
    open var pagingStyle: Any by `$props`
    open var refresherEnabled: Boolean by `$props`
    open var refresherThreshold: Number by `$props`
    open var refresherDefaultText: String by `$props`
    open var refresherPullingText: String by `$props`
    open var refresherRefreshingText: String by `$props`
    open var refresherCompleteText: String by `$props`
    open var refresherCompleteDelay: Number by `$props`
    open var refresherCompleteDuration: Number by `$props`
    open var refresherBackground: String by `$props`
    open var useCustomRefresher: Boolean by `$props`
    open var showRefresherWhenReload: Boolean by `$props`
    open var showRefresherUpdateTime: Boolean by `$props`
    open var refresherUpdateTimeKey: String by `$props`
    open var loadMoreEnabled: Boolean by `$props`
    open var loadMoreDefaultText: String by `$props`
    open var loadMoreLoadingText: String by `$props`
    open var loadMoreNoMoreText: String by `$props`
    open var loadMoreFailText: String by `$props`
    open var auto: Boolean by `$props`
    open var scrollToTopWhenReload: Boolean by `$props`
    open var cleanListWhenReload: Boolean by `$props`
    open var emptyText: String by `$props`
    open var emptyErrorText: String by `$props`
    open var emptyImg: String by `$props`
    open var emptyErrorImg: String by `$props`
    open var showBackToTop: Boolean by `$props`
    open var backToTopThreshold: Number by `$props`
    open var backToTopImg: String by `$props`
    open var backToTopStyle: Any by `$props`
    open var scrollWithAnimation: Boolean by `$props`
    open var listIs: String by `$props`
    open var listId: String by `$props`
    open var showScrollbar: Boolean by `$props`
    open var rebound: Boolean by `$props`
    open var customNestedScroll: Boolean by `$props`
    open var startNestedScroll: Boolean by `$props`
    open var nestedScrollChild: String by `$props`
    open var layoutOnly: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var reload: () -> Unit
        get() {
            return unref(this.`$exposed`["reload"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "reload", value)
        }
    open var refresh: () -> Unit
        get() {
            return unref(this.`$exposed`["refresh"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "refresh", value)
        }
    open var complete: (data: UTSArray<Any>?) -> Unit
        get() {
            return unref(this.`$exposed`["complete"]) as (data: UTSArray<Any>?) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "complete", value)
        }
    open var completeByTotal: (data: UTSArray<Any>?, total: Number) -> Unit
        get() {
            return unref(this.`$exposed`["completeByTotal"]) as (data: UTSArray<Any>?, total: Number) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "completeByTotal", value)
        }
    open var completeByNoMore: (data: UTSArray<Any>?, nomore: Boolean) -> Unit
        get() {
            return unref(this.`$exposed`["completeByNoMore"]) as (data: UTSArray<Any>?, nomore: Boolean) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "completeByNoMore", value)
        }
    open var completeByError: () -> Unit
        get() {
            return unref(this.`$exposed`["completeByError"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "completeByError", value)
        }
    open var endRefresh: () -> Unit
        get() {
            return unref(this.`$exposed`["endRefresh"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "endRefresh", value)
        }
    open var scrollToTop: (animate: Boolean) -> Unit
        get() {
            return unref(this.`$exposed`["scrollToTop"]) as (animate: Boolean) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "scrollToTop", value)
        }
    open var scrollToBottom: (animate: Boolean) -> Unit
        get() {
            return unref(this.`$exposed`["scrollToBottom"]) as (animate: Boolean) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "scrollToBottom", value)
        }
    open var scrollToY: (y: Number, animate: Boolean) -> Unit
        get() {
            return unref(this.`$exposed`["scrollToY"]) as (y: Number, animate: Boolean) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "scrollToY", value)
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
        var setup: (__props: GenUniModulesZPagingXComponentsZPagingXZPagingX, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesZPagingXComponentsZPagingXZPagingX
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val slots = useSlots()
            val zPagingX = ref<UniElement?>(null)
            val zpxList = ref<UniElement?>(null)
            val zpxListRefresher = ref<UniElement?>(null)
            val refresherStatus = ref(default__11.Refresher.Default)
            val refresherTriggered = ref(false)
            val refresherNodeHeight = ref(0)
            val refresherTimeTextTimestamp = ref(0)
            val refresherCompleteDelayTimer = ref<Number?>(null)
            val refresherEndAnimateTimer = ref<Number?>(null)
            val loadMoreStatus = ref(default__11.More.Default)
            val queryFrom = ref("")
            val isLoadFailed = ref(false)
            val customNoMore = ref(-1)
            val forceHideLoadMore = ref(false)
            val contentWidth = ref(0)
            val isLoading = ref(true)
            val scrollTop = ref(0)
            val oldScrollTop = ref(0)
            val pageNo = ref(1)
            val totalData = ref(_uA<Any>())
            val base64BackToTopImg = ref(base64BackToTop)
            val backToTopClass = ref("zpx-back-to-top zpx-back-to-top-hide")
            val lastBackToTopShowTime = ref(0)
            val showBackToTopClass = ref(false)
            val privateScrollWithAnimation = ref(-1)
            val isFirstPage = computed(fun(): Boolean {
                return pageNo.value === props.defaultPageNo
            }
            )
            val finalRefresherThreshold = computed(fun(): Number {
                if (props.layoutOnly) {
                    return 0
                }
                return if (props.refresherThreshold > 0) {
                    props.refresherThreshold
                } else {
                    if (refresherNodeHeight.value > 0) {
                        refresherNodeHeight.value
                    } else {
                        40
                    }
                }
            }
            )
            val showEmpty = computed(fun(): Boolean {
                if (props.layoutOnly) {
                    return false
                }
                return totalData.value.length == 0 && !isLoading.value
            }
            )
            val showLoading = computed(fun(): Boolean {
                if (props.layoutOnly) {
                    return false
                }
                return slots["loading"] != null && isLoading.value && totalData.value.length == 0
            }
            )
            val showLoadMore = computed(fun(): Boolean {
                if (props.layoutOnly) {
                    return false
                }
                return props.loadMoreEnabled && !forceHideLoadMore.value && (!isLoading.value || totalData.value.length > 0) && !showEmpty.value
            }
            )
            val finalScrollWithAnimation = computed(fun(): Boolean {
                if (privateScrollWithAnimation.value != -1) {
                    val scrollWithAnimation = privateScrollWithAnimation.value == 1
                    privateScrollWithAnimation.value = -1
                    return scrollWithAnimation
                }
                return props.scrollWithAnimation
            }
            )
            val listItemIs = computed(fun(): String {
                return if (props.listIs === "list-view") {
                    "list-item"
                } else {
                    "view"
                }
            }
            )
            val isOnly = computed(fun(): Boolean {
                return props.layoutOnly
            }
            )
            watch(totalData, fun(newVal: UTSArray<Any>){
                emit("update:modelValue", newVal)
            }
            )
            watch(refresherStatus, fun(newVal: String){
                emit("refresherStatusChange", newVal)
            }
            )
            watch(loadMoreStatus, fun(newVal: String){
                emit("loadMoreStatusChange", newVal)
            }
            )
            val _checkShouldShowBackToTop = fun(scrollTopValue: Number){
                if (!props.showBackToTop) {
                    showBackToTopClass.value = false
                    return
                }
                if (scrollTopValue > props.backToTopThreshold) {
                    if (!showBackToTopClass.value) {
                        showBackToTopClass.value = true
                        lastBackToTopShowTime.value = Date().getTime()
                        setTimeout(fun(){
                            backToTopClass.value = "zpx-back-to-top zpx-back-to-top-show"
                        }
                        , 300)
                    }
                } else {
                    if (showBackToTopClass.value) {
                        backToTopClass.value = "zpx-back-to-top zpx-back-to-top-hide"
                        setTimeout(fun(){
                            showBackToTopClass.value = false
                        }
                        , if (Date().getTime() - lastBackToTopShowTime.value < 500) {
                            0
                        } else {
                            300
                        }
                        )
                    }
                }
            }
            val scrollToY = fun(y: Number, animate: Boolean){
                privateScrollWithAnimation.value = if (animate) {
                    1
                } else {
                    0
                }
                scrollTop.value = oldScrollTop.value
                nextTick(fun(){
                    scrollTop.value = y
                }
                )
            }
            val scrollToTop = fun(animate: Boolean){
                scrollToY(0, animate)
                _checkShouldShowBackToTop(0)
            }
            val scrollToBottom = fun(animate: Boolean){
                scrollToY(99999999, animate)
            }
            val _emitQuery = fun(pageNoValue: Number, pageSizeValue: Number){
                isLoading.value = true
                emit("query", pageNoValue, pageSizeValue, queryFrom.value)
            }
            val _cleanRefresherCompleteDelayTimer = fun(){
                if (refresherCompleteDelayTimer.value != null) {
                    clearTimeout(refresherCompleteDelayTimer.value!!)
                    refresherCompleteDelayTimer.value = null
                }
            }
            val _cleanRefresherEndAnimateTimer = fun(){
                if (refresherEndAnimateTimer.value != null) {
                    clearTimeout(refresherEndAnimateTimer.value!!)
                    refresherEndAnimateTimer.value = null
                }
            }
            val reload = fun(){
                _cleanRefresherCompleteDelayTimer()
                _cleanRefresherEndAnimateTimer()
                pageNo.value = props.defaultPageNo
                forceHideLoadMore.value = true
                if (props.showRefresherWhenReload) {
                    nextTick(fun(){
                        refresherTriggered.value = true
                    }
                    )
                    return
                }
                if (props.cleanListWhenReload) {
                    totalData.value = _uA()
                }
                if (props.scrollToTopWhenReload) {
                    scrollToTop(false)
                }
                queryFrom.value = default__11.QueryFrom.Reload
                _emitQuery(pageNo.value, props.defaultPageSize)
            }
            val endRefresh = fun(){
                _cleanRefresherCompleteDelayTimer()
                _cleanRefresherEndAnimateTimer()
                refresherTriggered.value = false
                refresherStatus.value = default__11.Refresher.Default
                isLoading.value = false
            }
            val complete = fun(data: UTSArray<Any>?){
                val finalData: UTSArray<Any> = if (data == null) {
                    _uA()
                } else {
                    data
                }
                isLoadFailed.value = false
                val needCompleteDelay = props.refresherCompleteDelay > 0 && (queryFrom.value === default__11.QueryFrom.UserPullDown || props.showRefresherWhenReload)
                if (needCompleteDelay) {
                    refresherStatus.value = default__11.Refresher.Complete
                    _cleanRefresherCompleteDelayTimer()
                    _cleanRefresherEndAnimateTimer()
                    refresherCompleteDelayTimer.value = setTimeout(fun(){
                        refresherTriggered.value = false
                        refresherEndAnimateTimer.value = setTimeout(fun(){
                            refresherStatus.value = default__11.Refresher.Default
                            isLoading.value = false
                        }, props.refresherCompleteDuration)
                    }, props.refresherCompleteDelay)
                } else {
                    endRefresh()
                }
                val currentData: UTSArray<Any> = finalData.slice()
                if (customNoMore.value != -1) {
                    if (customNoMore.value == 1 || (customNoMore.value != 0 && finalData.length == 0)) {
                        loadMoreStatus.value = default__11.More.NoMore
                    }
                } else {
                    if (finalData.length == 0 || (finalData.length > 0 && finalData.length < props.defaultPageSize)) {
                        loadMoreStatus.value = default__11.More.NoMore
                    } else {
                        loadMoreStatus.value = default__11.More.Default
                    }
                }
                if (isFirstPage.value) {
                    totalData.value = currentData
                    if (props.showRefresherUpdateTime) {
                        updateRefesrherTime(props.refresherUpdateTimeKey)
                        refresherTimeTextTimestamp.value = getTime()
                    }
                } else {
                    totalData.value = totalData.value.concat(currentData)
                }
                nextTick(fun(){
                    setTimeout(fun(){
                        forceHideLoadMore.value = false
                    }
                    , 100)
                }
                )
            }
            val completeByNoMore = fun(data: UTSArray<Any>?, nomore: Boolean){
                customNoMore.value = if (nomore == true) {
                    1
                } else {
                    0
                }
                complete(data)
            }
            val completeByTotal = fun(reassignedData: UTSArray<Any>?, total: Number){
                var data = reassignedData
                val finalData: UTSArray<Any> = if (data == null) {
                    _uA()
                } else {
                    data
                }
                nextTick(fun(){
                    var nomore = false
                    val realTotalDataCount = if (isFirstPage.value) {
                        0
                    } else {
                        totalData.value.length
                    }
                    val dataLength = finalData.length
                    var exceedCount = realTotalDataCount + dataLength - total
                    if (exceedCount >= 0) {
                        nomore = true
                        exceedCount = props.defaultPageSize - exceedCount
                        if (exceedCount > 0 && exceedCount < finalData.length) {
                            data = finalData.splice(0, exceedCount)
                        }
                    }
                    completeByNoMore(data, nomore)
                }
                )
            }
            val completeByError = fun(){
                isLoadFailed.value = true
                endRefresh()
            }
            val refresh = fun(){
                if (totalData.value.length == 0) {
                    reload()
                    return
                }
                val targetTotal = pageNo.value * props.defaultPageSize
                isLoading.value = true
                pageNo.value = props.defaultPageNo
                queryFrom.value = default__11.QueryFrom.Refresh
                _emitQuery(props.defaultPageNo, targetTotal)
            }
            val _onStartNestedScroll = fun(_: StartNestedScrollEvent): Boolean {
                return props.startNestedScroll
            }
            val _onNestedPreScroll = fun(event: NestedPreScrollEvent){
                if (zpxList.value != null) {
                    emit("nestedprescroll", event, zpxList.value!!)
                }
            }
            val _onRefresherpulling = fun(e: RefresherEvent){
                emit("refresherpulling", e.detail.dy)
                if (!isLoading.value) {
                    refresherStatus.value = if (e.detail.dy < finalRefresherThreshold.value) {
                        default__11.Refresher.Default
                    } else {
                        default__11.Refresher.ReleaseToRefresh
                    }
                }
            }
            val _handleRefresh = fun(){
                _cleanRefresherCompleteDelayTimer()
                _cleanRefresherEndAnimateTimer()
                refresherStatus.value = default__11.Refresher.Loading
                refresherTriggered.value = true
                pageNo.value = props.defaultPageNo
                queryFrom.value = default__11.QueryFrom.UserPullDown
                _emitQuery(pageNo.value, props.defaultPageSize)
            }
            val _onRefresherrefresh = fun(e: RefresherEvent){
                emit("refresherrefresh", e)
                emit("onRefresh")
                emit("Refresh")
                _handleRefresh()
            }
            val _onRefresherrestore = fun(e: RefresherEvent){
                emit("refresherrestore", e)
                if (refresherStatus.value !== default__11.Refresher.Complete) {
                    refresherStatus.value = default__11.Refresher.Default
                }
            }
            val _onRefresherabort = fun(e: RefresherEvent){
                emit("refresherabort", e)
            }
            val _handleLoadMore = fun(){
                if (!props.loadMoreEnabled || isLoading.value || loadMoreStatus.value === default__11.More.NoMore) {
                    return
                }
                loadMoreStatus.value = default__11.More.Loading
                pageNo.value++
                queryFrom.value = default__11.QueryFrom.LoadMore
                _emitQuery(pageNo.value, props.defaultPageSize)
            }
            val _onScrolltolower = fun(e: ScrollToLowerEvent){
                _handleLoadMore()
                emit("scrolltolower", e)
            }
            val _onScrolltoupper = fun(e: ScrollToUpperEvent){
                emit("scrolltoupper", e)
            }
            val _onScroll = fun(e: ScrollEvent){
                emit("scroll", e)
                oldScrollTop.value = e.detail.scrollTop
                _checkShouldShowBackToTop(oldScrollTop.value)
            }
            val _handleToTop = fun(){
                scrollToTop(true)
            }
            val _onBackToTopClick = fun(){
                var callbacked: Boolean = false
                emit("backToTopClick", fun(toTop: Boolean){
                    if (toTop != false) {
                        _handleToTop()
                    }
                    callbacked = true
                }
                )
                nextTick(fun(){
                    if (!callbacked) {
                        _handleToTop()
                    }
                }
                )
            }
            onMounted(fun(){
                pageNo.value = props.defaultPageNo
                if (!props.layoutOnly && props.auto) {
                    reload()
                }
                if (props.layoutOnly) {
                    endRefresh()
                }
                nextTick(fun(){
                    if (props.refresherEnabled) {
                        val refresherEle = zpxListRefresher.value
                        if (refresherEle != null) {
                            refresherEle.getBoundingClientRectAsync()!!.then(fun(rect: DOMRect){
                                refresherNodeHeight.value = rect.height
                            }
                            )
                        }
                    }
                    val zPagingXEle = zPagingX.value
                    if (zPagingXEle != null) {
                        zPagingXEle.getBoundingClientRectAsync()!!.then(fun(rect: DOMRect){
                            contentWidth.value = rect.width
                        }
                        )
                    }
                }
                )
            }
            )
            __expose(_uM("reload" to reload, "refresh" to refresh, "complete" to complete, "completeByTotal" to completeByTotal, "completeByNoMore" to completeByNoMore, "completeByError" to completeByError, "endRefresh" to endRefresh, "scrollToTop" to scrollToTop, "scrollToBottom" to scrollToBottom, "scrollToY" to scrollToY))
            return fun(): Any? {
                val _component_z_paging_x_empty = resolveEasyComponent("z-paging-x-empty", GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptyClass)
                return _cE("view", _uM("ref_key" to "zPagingX", "ref" to zPagingX, "class" to _nC(_uM("zpx-content" to true)), "style" to _nS(_uA(
                    _ctx.pagingStyle
                ))), _uA(
                    renderSlot(_ctx.`$slots`, "top"),
                    if (_ctx.listIs === "list-view") {
                        _cE("list-view", _uM("key" to 0, "ref_key" to "zpxList", "ref" to zpxList, "class" to "zpx-list-view zpx-flex1", "id" to _ctx.listId, "refresher-enabled" to _ctx.refresherEnabled, "refresher-threshold" to finalRefresherThreshold.value, "refresher-triggered" to refresherTriggered.value, "refresher-default-style" to if (_ctx.useCustomRefresher) {
                            "none"
                        } else {
                            "black"
                        }, "custom-nested-scroll" to _ctx.customNestedScroll, "refresher-background" to _ctx.refresherBackground, "rebound" to _ctx.rebound, "scroll-top" to scrollTop.value, "show-scrollbar" to _ctx.showScrollbar, "scroll-with-animation" to finalScrollWithAnimation.value, "onRefresherpulling" to _onRefresherpulling, "onRefresherrefresh" to _onRefresherrefresh, "onRefresherrestore" to _onRefresherrestore, "onRefresherabort" to _onRefresherabort, "onScrolltolower" to _onScrolltolower, "onScrolltoupper" to _onScrolltoupper, "onScroll" to _onScroll, "onStartnestedscroll" to _onStartNestedScroll, "onNestedprescroll" to _onNestedPreScroll), _uA(
                            renderSlot(_ctx.`$slots`, "default"),
                            _cE("list-item", null, _uA(
                                if (isTrue(showLoadMore.value)) {
                                    _cE(Fragment, _uM("key" to 0), _uA(
                                        if (isTrue(_ctx.`$slots`["loadMore"])) {
                                            renderSlot(_ctx.`$slots`, "loadMore", _uM("key" to 0, "loadMoreStatus" to loadMoreStatus.value))
                                        } else {
                                            _cV(unref(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreClass), _uM("key" to 1, "status" to loadMoreStatus.value, "default-text" to _ctx.loadMoreDefaultText, "loading-text" to _ctx.loadMoreLoadingText, "no-more-text" to _ctx.loadMoreNoMoreText, "fail-text" to _ctx.loadMoreFailText, "onClickMore" to _handleLoadMore), null, 8, _uA(
                                                "status",
                                                "default-text",
                                                "loading-text",
                                                "no-more-text",
                                                "fail-text"
                                            ))
                                        }
                                    ), 64)
                                } else {
                                    _cC("v-if", true)
                                }
                            )),
                            _cE("list-item", _uM("slot" to "refresher"), _uA(
                                _cE("view", _uM("ref_key" to "zpxListRefresher", "ref" to zpxListRefresher, "class" to "zpx-list-refresher", "style" to _nS(_uM("width" to (contentWidth.value + "px")))), _uA(
                                    if (isTrue(_ctx.`$slots`["refresher"])) {
                                        renderSlot(_ctx.`$slots`, "refresher", _uM("key" to 0, "refresherStatus" to refresherStatus.value))
                                    } else {
                                        _cV(unref(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherClass), _uM("key" to 1, "ref" to "commonRefresher", "default-text" to _ctx.refresherDefaultText, "pulling-text" to _ctx.refresherPullingText, "refreshing-text" to _ctx.refresherRefreshingText, "complete-text" to _ctx.refresherCompleteText, "status" to refresherStatus.value, "show-update-time" to _ctx.showRefresherUpdateTime, "update-time-key" to _ctx.refresherUpdateTimeKey, "time-text-timestamp" to refresherTimeTextTimestamp.value), null, 8, _uA(
                                            "default-text",
                                            "pulling-text",
                                            "refreshing-text",
                                            "complete-text",
                                            "status",
                                            "show-update-time",
                                            "update-time-key",
                                            "time-text-timestamp"
                                        ))
                                    }
                                ), 4)
                            )),
                            _cE("list-item", _uM("class" to _nC(if (showEmpty.value) {
                                "zpx-flex1"
                            } else {
                                ""
                            })), _uA(
                                if (isTrue(showEmpty.value)) {
                                    _cE(Fragment, _uM("key" to 0), _uA(
                                        if (isTrue(_ctx.`$slots`["empty"])) {
                                            renderSlot(_ctx.`$slots`, "empty", _uM("key" to 0, "isLoadFailed" to isLoadFailed.value))
                                        } else {
                                            _cV(_component_z_paging_x_empty, _uM("key" to 1, "empty-text" to if (!isLoadFailed.value) {
                                                _ctx.emptyText
                                            } else {
                                                _ctx.emptyErrorText
                                            }, "empty-img" to if (!isLoadFailed.value) {
                                                _ctx.emptyImg
                                            } else {
                                                _ctx.emptyErrorImg
                                            }, "is-load-failed" to isLoadFailed.value, "show-empty-reload" to isLoadFailed.value, "onReload" to reload), null, 8, _uA(
                                                "empty-text",
                                                "empty-img",
                                                "is-load-failed",
                                                "show-empty-reload"
                                            ))
                                        }
                                    ), 64)
                                } else {
                                    _cC("v-if", true)
                                },
                                if (isTrue(showLoading.value)) {
                                    renderSlot(_ctx.`$slots`, "loading", _uM("key" to 1))
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 2)
                        ), 40, _uA(
                            "id",
                            "refresher-enabled",
                            "refresher-threshold",
                            "refresher-triggered",
                            "refresher-default-style",
                            "custom-nested-scroll",
                            "refresher-background",
                            "rebound",
                            "scroll-top",
                            "show-scrollbar",
                            "scroll-with-animation"
                        ))
                    } else {
                        _cE("scroll-view", _uM("key" to 1, "ref_key" to "zpxList", "ref" to zpxList, "class" to "zpx-list-view zpx-flex1", "id" to _ctx.listId, "refresher-enabled" to _ctx.refresherEnabled, "refresher-threshold" to finalRefresherThreshold.value, "refresher-triggered" to refresherTriggered.value, "refresher-default-style" to if (_ctx.useCustomRefresher) {
                            "none"
                        } else {
                            "black"
                        }
                        , "custom-nested-scroll" to _ctx.customNestedScroll, "refresher-background" to _ctx.refresherBackground, "rebound" to _ctx.rebound, "scroll-top" to scrollTop.value, "show-scrollbar" to _ctx.showScrollbar, "scroll-with-animation" to finalScrollWithAnimation.value, "onRefresherpulling" to _onRefresherpulling, "onRefresherrefresh" to _onRefresherrefresh, "onRefresherrestore" to _onRefresherrestore, "onRefresherabort" to _onRefresherabort, "onScrolltolower" to _onScrolltolower, "onScrolltoupper" to _onScrolltoupper, "onScroll" to _onScroll, "onStartnestedscroll" to _onStartNestedScroll, "onNestedprescroll" to _onNestedPreScroll), _uA(
                            renderSlot(_ctx.`$slots`, "default"),
                            _cE("view", null, _uA(
                                if (isTrue(showLoadMore.value)) {
                                    _cE(Fragment, _uM("key" to 0), _uA(
                                        if (isTrue(_ctx.`$slots`["loadMore"])) {
                                            renderSlot(_ctx.`$slots`, "loadMore", _uM("key" to 0, "loadMoreStatus" to loadMoreStatus.value))
                                        } else {
                                            _cV(unref(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreClass), _uM("key" to 1, "status" to loadMoreStatus.value, "default-text" to _ctx.loadMoreDefaultText, "loading-text" to _ctx.loadMoreLoadingText, "no-more-text" to _ctx.loadMoreNoMoreText, "fail-text" to _ctx.loadMoreFailText, "onClickMore" to _handleLoadMore), null, 8, _uA(
                                                "status",
                                                "default-text",
                                                "loading-text",
                                                "no-more-text",
                                                "fail-text"
                                            ))
                                        }
                                    ), 64)
                                } else {
                                    _cC("v-if", true)
                                }
                            )),
                            _cE("view", _uM("slot" to "refresher"), _uA(
                                _cE("view", _uM("ref_key" to "zpxListRefresher", "ref" to zpxListRefresher, "class" to "zpx-list-refresher", "style" to _nS(_uM("width" to (contentWidth.value + "px")))), _uA(
                                    if (isTrue(_ctx.`$slots`["refresher"])) {
                                        renderSlot(_ctx.`$slots`, "refresher", _uM("key" to 0, "refresherStatus" to refresherStatus.value))
                                    } else {
                                        _cV(unref(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherClass), _uM("key" to 1, "ref" to "commonRefresher", "default-text" to _ctx.refresherDefaultText, "pulling-text" to _ctx.refresherPullingText, "refreshing-text" to _ctx.refresherRefreshingText, "complete-text" to _ctx.refresherCompleteText, "status" to refresherStatus.value, "show-update-time" to _ctx.showRefresherUpdateTime, "update-time-key" to _ctx.refresherUpdateTimeKey, "time-text-timestamp" to refresherTimeTextTimestamp.value), null, 8, _uA(
                                            "default-text",
                                            "pulling-text",
                                            "refreshing-text",
                                            "complete-text",
                                            "status",
                                            "show-update-time",
                                            "update-time-key",
                                            "time-text-timestamp"
                                        ))
                                    }
                                ), 4)
                            )),
                            _cE("view", _uM("class" to _nC(if (showEmpty.value) {
                                "zpx-flex1"
                            } else {
                                ""
                            }
                            )), _uA(
                                if (isTrue(showEmpty.value)) {
                                    _cE(Fragment, _uM("key" to 0), _uA(
                                        if (isTrue(_ctx.`$slots`["empty"])) {
                                            renderSlot(_ctx.`$slots`, "empty", _uM("key" to 0, "isLoadFailed" to isLoadFailed.value))
                                        } else {
                                            _cV(_component_z_paging_x_empty, _uM("key" to 1, "empty-text" to if (!isLoadFailed.value) {
                                                _ctx.emptyText
                                            } else {
                                                _ctx.emptyErrorText
                                            }, "empty-img" to if (!isLoadFailed.value) {
                                                _ctx.emptyImg
                                            } else {
                                                _ctx.emptyErrorImg
                                            }, "is-load-failed" to isLoadFailed.value, "show-empty-reload" to isLoadFailed.value, "onReload" to reload), null, 8, _uA(
                                                "empty-text",
                                                "empty-img",
                                                "is-load-failed",
                                                "show-empty-reload"
                                            ))
                                        }
                                    ), 64)
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(showLoading.value)) {
                                    renderSlot(_ctx.`$slots`, "loading", _uM("key" to 1))
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 2)
                        ), 40, _uA(
                            "id",
                            "refresher-enabled",
                            "refresher-threshold",
                            "refresher-triggered",
                            "refresher-default-style",
                            "custom-nested-scroll",
                            "refresher-background",
                            "rebound",
                            "scroll-top",
                            "show-scrollbar",
                            "scroll-with-animation"
                        ))
                    }
                    ,
                    renderSlot(_ctx.`$slots`, "bottom"),
                    if (isTrue(showBackToTopClass.value)) {
                        _cE("view", _uM("key" to 2, "class" to _nC(backToTopClass.value), "style" to _nS(_uA(
                            _ctx.backToTopStyle
                        )), "onClick" to withModifiers(_onBackToTopClick, _uA(
                            "stop"
                        ))), _uA(
                            if (isTrue(_ctx.`$slots`["backToTop"])) {
                                renderSlot(_ctx.`$slots`, "backToTop", _uM("key" to 0))
                            } else {
                                _cE("image", _uM("key" to 1, "class" to "zpx-back-to-top-img", "src" to if (_ctx.backToTopImg.length > 0) {
                                    _ctx.backToTopImg
                                } else {
                                    base64BackToTopImg.value
                                }), null, 8, _uA(
                                    "src"
                                ))
                            }
                        ), 6)
                    } else {
                        _cC("v-if", true)
                    }
                ), 6)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("zpx-content" to _pS(_uM("height" to "100%")), "zpx-flex1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "zpx-back-to-top" to _pS(_uM("width" to "76rpx", "height" to "76rpx", "zIndex" to 999, "position" to "absolute", "bottom" to "260rpx", "right" to "25rpx", "transitionDuration" to ".3s", "transitionProperty" to "opacity")), "zpx-back-to-top-show" to _pS(_uM("opacity" to 1)), "zpx-back-to-top-hide" to _pS(_uM("opacity" to 0)), "zpx-back-to-top-img" to _pS(_uM("width" to "100%", "height" to "100%", "zIndex" to 999)), "@TRANSITION" to _uM("zpx-back-to-top" to _uM("duration" to ".3s", "property" to "opacity")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "refresherStatusChange" to null, "loadMoreStatusChange" to null, "query" to null, "nestedprescroll" to null, "refresherpulling" to null, "refresherrefresh" to null, "refresherrestore" to null, "refresherabort" to null, "onRefresh" to null, "Refresh" to null, "scrolltolower" to null, "scrolltoupper" to null, "scroll" to null, "backToTopClick" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "defaultPageNo" to _uM("type" to "Number", "default" to gc<Number>("default-page-no", 1)), "defaultPageSize" to _uM("type" to "Number", "default" to gc<Number>("default-page-size", 10)), "pagingStyle" to _uM("default" to gc<Any>("paging-style", _uO())), "refresherEnabled" to _uM("type" to "Boolean", "default" to gc<Boolean>("refresher-enabled", true)), "refresherThreshold" to _uM("type" to "Number", "default" to gc<Number>("refresher-threshold", 0)), "refresherDefaultText" to _uM("type" to "String", "default" to gc<String>("refresher-default-text", "继续下拉刷新")), "refresherPullingText" to _uM("type" to "String", "default" to gc<String>("refresher-pulling-text", "松开立即刷新")), "refresherRefreshingText" to _uM("type" to "String", "default" to gc<String>("refresher-refreshing-text", "正在刷新...")), "refresherCompleteText" to _uM("type" to "String", "default" to gc<String>("refresher-complete-text", "刷新完成")), "refresherCompleteDelay" to _uM("type" to "Number", "default" to gc<Number>("refresher-complete-delay", 0)), "refresherCompleteDuration" to _uM("type" to "Number", "default" to gc<Number>("refresher-complete-duration", 300)), "refresherBackground" to _uM("type" to "String", "default" to gc<String>("refresher-background", "#FFF")), "useCustomRefresher" to _uM("type" to "Boolean", "default" to gc<Boolean>("use-custom-refresher", true)), "showRefresherWhenReload" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-refresher-when-reload", false)), "showRefresherUpdateTime" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-refresher-update-time", false)), "refresherUpdateTimeKey" to _uM("type" to "String", "default" to gc<String>("refresher-update-time-key", "default")), "loadMoreEnabled" to _uM("type" to "Boolean", "default" to gc<Boolean>("load-more-enabled", true)), "loadMoreDefaultText" to _uM("type" to "String", "default" to gc<String>("load-more-default-text", "点击加载更多")), "loadMoreLoadingText" to _uM("type" to "String", "default" to gc<String>("load-more-loading-text", "正在加载...")), "loadMoreNoMoreText" to _uM("type" to "String", "default" to gc<String>("load-more-no-more-text", "没有更多了")), "loadMoreFailText" to _uM("type" to "String", "default" to gc<String>("load-more-fail-text", "加载失败，点击重新加载")), "auto" to _uM("type" to "Boolean", "default" to gc<Boolean>("auto", true)), "scrollToTopWhenReload" to _uM("type" to "Boolean", "default" to gc<Boolean>("scrollToTopWhenReload", true)), "cleanListWhenReload" to _uM("type" to "Boolean", "default" to gc<Boolean>("cleanListWhenReload", true)), "emptyText" to _uM("type" to "String", "default" to gc<String>("empty-text", "没有数据哦~")), "emptyErrorText" to _uM("type" to "String", "default" to gc<String>("empty-error-text", "很抱歉，加载失败")), "emptyImg" to _uM("type" to "String", "default" to gc<String>("empty-img", "")), "emptyErrorImg" to _uM("type" to "String", "default" to gc<String>("empty-error-img", "")), "showBackToTop" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-back-to-top", false)), "backToTopThreshold" to _uM("type" to "Number", "default" to gc<Number>("back-to-top-threshold", 300)), "backToTopImg" to _uM("type" to "String", "default" to gc<String>("back-to-top-img", "")), "backToTopStyle" to _uM("default" to gc<Any>("back-to-top-style", _uO())), "scrollWithAnimation" to _uM("type" to "Boolean", "default" to gc<Boolean>("scroll-with-animation", false)), "listIs" to _uM("type" to "String", "default" to gc<String>("list-is", "list-view")), "listId" to _uM("type" to "String", "default" to gc<String>("list-id", "")), "showScrollbar" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-scrollbar", true)), "rebound" to _uM("type" to "Boolean", "default" to gc<Boolean>("rebound", true)), "customNestedScroll" to _uM("type" to "Boolean", "default" to gc<Boolean>("custom-nested-scroll", false)), "startNestedScroll" to _uM("type" to "Boolean", "default" to gc<Boolean>("start-nested-scroll", false)), "nestedScrollChild" to _uM("type" to "String", "default" to gc<String>("nested-scroll-child", "")), "layoutOnly" to _uM("type" to "Boolean", "default" to gc<Boolean>("layout-only", false))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "defaultPageNo",
            "defaultPageSize",
            "pagingStyle",
            "refresherEnabled",
            "refresherThreshold",
            "refresherDefaultText",
            "refresherPullingText",
            "refresherRefreshingText",
            "refresherCompleteText",
            "refresherCompleteDelay",
            "refresherCompleteDuration",
            "refresherBackground",
            "useCustomRefresher",
            "showRefresherWhenReload",
            "showRefresherUpdateTime",
            "refresherUpdateTimeKey",
            "loadMoreEnabled",
            "loadMoreDefaultText",
            "loadMoreLoadingText",
            "loadMoreNoMoreText",
            "loadMoreFailText",
            "auto",
            "scrollToTopWhenReload",
            "cleanListWhenReload",
            "emptyText",
            "emptyErrorText",
            "emptyImg",
            "emptyErrorImg",
            "showBackToTop",
            "backToTopThreshold",
            "backToTopImg",
            "backToTopStyle",
            "scrollWithAnimation",
            "listIs",
            "listId",
            "showScrollbar",
            "rebound",
            "customNestedScroll",
            "startNestedScroll",
            "nestedScrollChild",
            "layoutOnly"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
