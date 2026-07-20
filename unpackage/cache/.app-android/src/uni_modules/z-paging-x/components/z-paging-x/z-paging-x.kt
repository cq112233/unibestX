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
        onMounted(fun() {
            this.`$zpxList` = this.`$refs`["zpxList"] as UniElement
            this.pageNo = this.defaultPageNo
            if (this.auto) {
                this.reload()
            }
            this.`$nextTick`(fun(){
                if (this.refresherEnabled) {
                    val refresherEle = this.`$refs`["zpxListRefresher"] as UniElement?
                    if (refresherEle != null) {
                        refresherEle.getBoundingClientRectAsync()!!.then(fun(rect: DOMRect){
                            this.refresherNodeHeight = rect.height
                        }
                        )
                    }
                }
                val zPagingXEle = this.`$refs`["zPagingX"] as UniElement?
                if (zPagingXEle != null) {
                    zPagingXEle.getBoundingClientRectAsync()!!.then(fun(rect: DOMRect){
                        this.contentWidth = rect.width
                    }
                    )
                }
            }
            )
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.totalData
        }
        , fun(newVal: UTSArray<Any>) {
            this.`$emit`("update:modelValue", newVal)
        }
        )
        this.`$watch`(fun(): Any? {
            return this.refresherStatus
        }
        , fun(newVal: String) {
            this.`$emit`("refresherStatusChange", newVal)
        }
        )
        this.`$watch`(fun(): Any? {
            return this.loadMoreStatus
        }
        , fun(newVal: String) {
            this.`$emit`("loadMoreStatusChange", newVal)
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_z_paging_load_more = resolveComponent("z-paging-load-more")
        val _component_z_paging_refresher = resolveComponent("z-paging-refresher")
        val _component_z_paging_x_empty = resolveEasyComponent("z-paging-x-empty", GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptyClass)
        return _cE("view", _uM("ref" to "zPagingX", "class" to _nC(_uM("zpx-content" to true)), "style" to _nS(_uA(
            _ctx.pagingStyle
        ))), _uA(
            renderSlot(_ctx.`$slots`, "top"),
            if (_ctx.listIs === "list-view") {
                _cE("list-view", _uM("key" to 0, "ref" to "zpxList", "class" to "zpx-list-view zpx-flex1", "id" to _ctx.listId, "refresher-enabled" to _ctx.refresherEnabled, "refresher-threshold" to _ctx.finalRefresherThreshold, "refresher-triggered" to _ctx.refresherTriggered, "refresher-default-style" to if (_ctx.useCustomRefresher) {
                    "none"
                } else {
                    "black"
                }, "custom-nested-scroll" to _ctx.customNestedScroll, "refresher-background" to _ctx.refresherBackground, "rebound" to _ctx.rebound, "scroll-top" to _ctx.scrollTop, "show-scrollbar" to _ctx.showScrollbar, "scroll-with-animation" to _ctx.finalScrollWithAnimation, "onRefresherpulling" to _ctx._onRefresherpulling, "onRefresherrefresh" to _ctx._onRefresherrefresh, "onRefresherrestore" to _ctx._onRefresherrestore, "onRefresherabort" to _ctx._onRefresherabort, "onScrolltolower" to _ctx._onScrolltolower, "onScrolltoupper" to _ctx._onScrolltoupper, "onScroll" to _ctx._onScroll, "onStartnestedscroll" to _ctx._onStartNestedScroll, "onNestedprescroll" to _ctx._onNestedPreScroll), _uA(
                    renderSlot(_ctx.`$slots`, "default"),
                    _cE("list-item", null, _uA(
                        if (isTrue(_ctx.showLoadMore)) {
                            _cE(Fragment, _uM("key" to 0), _uA(
                                if (isTrue(_ctx.`$slots`["loadMore"])) {
                                    renderSlot(_ctx.`$slots`, "loadMore", _uM("key" to 0, "loadMoreStatus" to _ctx.loadMoreStatus))
                                } else {
                                    _cV(_component_z_paging_load_more, _uM("key" to 1, "status" to _ctx.loadMoreStatus, "default-text" to _ctx.loadMoreDefaultText, "loading-text" to _ctx.loadMoreLoadingText, "no-more-text" to _ctx.loadMoreNoMoreText, "fail-text" to _ctx.loadMoreFailText, "onClickMore" to _ctx._handleLoadMore), null, 8, _uA(
                                        "status",
                                        "default-text",
                                        "loading-text",
                                        "no-more-text",
                                        "fail-text",
                                        "onClickMore"
                                    ))
                                }
                            ), 64)
                        } else {
                            _cC("v-if", true)
                        }
                    )),
                    _cE("list-item", _uM("slot" to "refresher"), _uA(
                        _cE("view", _uM("ref" to "zpxListRefresher", "class" to "zpx-list-refresher", "style" to _nS(_uM("width" to (_ctx.contentWidth + "px")))), _uA(
                            if (isTrue(_ctx.`$slots`["refresher"])) {
                                renderSlot(_ctx.`$slots`, "refresher", _uM("key" to 0, "refresherStatus" to _ctx.refresherStatus))
                            } else {
                                _cV(_component_z_paging_refresher, _uM("key" to 1, "ref" to "commonRefresher", "default-text" to _ctx.refresherDefaultText, "pulling-text" to _ctx.refresherPullingText, "refreshing-text" to _ctx.refresherRefreshingText, "status" to _ctx.refresherStatus, "show-update-time" to _ctx.showRefresherUpdateTime, "update-time-key" to _ctx.refresherUpdateTimeKey, "time-text-timestamp" to _ctx.refresherTimeTextTimestamp), null, 8, _uA(
                                    "default-text",
                                    "pulling-text",
                                    "refreshing-text",
                                    "status",
                                    "show-update-time",
                                    "update-time-key",
                                    "time-text-timestamp"
                                ))
                            }
                        ), 4)
                    )),
                    _cE("list-item", _uM("class" to _nC(if (_ctx.showEmpty) {
                        "zpx-flex1"
                    } else {
                        ""
                    })), _uA(
                        if (isTrue(_ctx.showEmpty)) {
                            _cE(Fragment, _uM("key" to 0), _uA(
                                if (isTrue(_ctx.`$slots`["empty"])) {
                                    renderSlot(_ctx.`$slots`, "empty", _uM("key" to 0, "isLoadFailed" to _ctx.isLoadFailed))
                                } else {
                                    _cV(_component_z_paging_x_empty, _uM("key" to 1, "empty-text" to if (!_ctx.isLoadFailed) {
                                        _ctx.emptyText
                                    } else {
                                        _ctx.emptyErrorText
                                    }, "empty-img" to if (!_ctx.isLoadFailed) {
                                        _ctx.emptyImg
                                    } else {
                                        _ctx.emptyErrorImg
                                    }, "is-load-failed" to _ctx.isLoadFailed, "show-empty-reload" to _ctx.isLoadFailed, "onReload" to _ctx.reload), null, 8, _uA(
                                        "empty-text",
                                        "empty-img",
                                        "is-load-failed",
                                        "show-empty-reload",
                                        "onReload"
                                    ))
                                }
                            ), 64)
                        } else {
                            _cC("v-if", true)
                        },
                        if (isTrue(_ctx.showLoading)) {
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
                    "scroll-with-animation",
                    "onRefresherpulling",
                    "onRefresherrefresh",
                    "onRefresherrestore",
                    "onRefresherabort",
                    "onScrolltolower",
                    "onScrolltoupper",
                    "onScroll",
                    "onStartnestedscroll",
                    "onNestedprescroll"
                ))
            } else {
                _cE("scroll-view", _uM("key" to 1, "ref" to "zpxList", "class" to "zpx-list-view zpx-flex1", "id" to _ctx.listId, "refresher-enabled" to _ctx.refresherEnabled, "refresher-threshold" to _ctx.finalRefresherThreshold, "refresher-triggered" to _ctx.refresherTriggered, "refresher-default-style" to if (_ctx.useCustomRefresher) {
                    "none"
                } else {
                    "black"
                }
                , "custom-nested-scroll" to _ctx.customNestedScroll, "refresher-background" to _ctx.refresherBackground, "rebound" to _ctx.rebound, "scroll-top" to _ctx.scrollTop, "show-scrollbar" to _ctx.showScrollbar, "scroll-with-animation" to _ctx.finalScrollWithAnimation, "onRefresherpulling" to _ctx._onRefresherpulling, "onRefresherrefresh" to _ctx._onRefresherrefresh, "onRefresherrestore" to _ctx._onRefresherrestore, "onRefresherabort" to _ctx._onRefresherabort, "onScrolltolower" to _ctx._onScrolltolower, "onScrolltoupper" to _ctx._onScrolltoupper, "onScroll" to _ctx._onScroll, "onStartnestedscroll" to _ctx._onStartNestedScroll, "onNestedprescroll" to _ctx._onNestedPreScroll), _uA(
                    renderSlot(_ctx.`$slots`, "default"),
                    _cE("view", null, _uA(
                        if (isTrue(_ctx.showLoadMore)) {
                            _cE(Fragment, _uM("key" to 0), _uA(
                                if (isTrue(_ctx.`$slots`["loadMore"])) {
                                    renderSlot(_ctx.`$slots`, "loadMore", _uM("key" to 0, "loadMoreStatus" to _ctx.loadMoreStatus))
                                } else {
                                    _cV(_component_z_paging_load_more, _uM("key" to 1, "status" to _ctx.loadMoreStatus, "default-text" to _ctx.loadMoreDefaultText, "loading-text" to _ctx.loadMoreLoadingText, "no-more-text" to _ctx.loadMoreNoMoreText, "fail-text" to _ctx.loadMoreFailText, "onClickMore" to _ctx._handleLoadMore), null, 8, _uA(
                                        "status",
                                        "default-text",
                                        "loading-text",
                                        "no-more-text",
                                        "fail-text",
                                        "onClickMore"
                                    ))
                                }
                            ), 64)
                        } else {
                            _cC("v-if", true)
                        }
                    )),
                    _cE("view", _uM("slot" to "refresher"), _uA(
                        _cE("view", _uM("ref" to "zpxListRefresher", "class" to "zpx-list-refresher", "style" to _nS(_uM("width" to (_ctx.contentWidth + "px")))), _uA(
                            if (isTrue(_ctx.`$slots`["refresher"])) {
                                renderSlot(_ctx.`$slots`, "refresher", _uM("key" to 0, "refresherStatus" to _ctx.refresherStatus))
                            } else {
                                _cV(_component_z_paging_refresher, _uM("key" to 1, "ref" to "commonRefresher", "default-text" to _ctx.refresherDefaultText, "pulling-text" to _ctx.refresherPullingText, "refreshing-text" to _ctx.refresherRefreshingText, "status" to _ctx.refresherStatus, "show-update-time" to _ctx.showRefresherUpdateTime, "update-time-key" to _ctx.refresherUpdateTimeKey, "time-text-timestamp" to _ctx.refresherTimeTextTimestamp), null, 8, _uA(
                                    "default-text",
                                    "pulling-text",
                                    "refreshing-text",
                                    "status",
                                    "show-update-time",
                                    "update-time-key",
                                    "time-text-timestamp"
                                ))
                            }
                        ), 4)
                    )),
                    _cE("view", _uM("class" to _nC(if (_ctx.showEmpty) {
                        "zpx-flex1"
                    } else {
                        ""
                    }
                    )), _uA(
                        if (isTrue(_ctx.showEmpty)) {
                            _cE(Fragment, _uM("key" to 0), _uA(
                                if (isTrue(_ctx.`$slots`["empty"])) {
                                    renderSlot(_ctx.`$slots`, "empty", _uM("key" to 0, "isLoadFailed" to _ctx.isLoadFailed))
                                } else {
                                    _cV(_component_z_paging_x_empty, _uM("key" to 1, "empty-text" to if (!_ctx.isLoadFailed) {
                                        _ctx.emptyText
                                    } else {
                                        _ctx.emptyErrorText
                                    }, "empty-img" to if (!_ctx.isLoadFailed) {
                                        _ctx.emptyImg
                                    } else {
                                        _ctx.emptyErrorImg
                                    }, "is-load-failed" to _ctx.isLoadFailed, "show-empty-reload" to _ctx.isLoadFailed, "onReload" to _ctx.reload), null, 8, _uA(
                                        "empty-text",
                                        "empty-img",
                                        "is-load-failed",
                                        "show-empty-reload",
                                        "onReload"
                                    ))
                                }
                            ), 64)
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (isTrue(_ctx.showLoading)) {
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
                    "scroll-with-animation",
                    "onRefresherpulling",
                    "onRefresherrefresh",
                    "onRefresherrestore",
                    "onRefresherabort",
                    "onScrolltolower",
                    "onScrolltoupper",
                    "onScroll",
                    "onStartnestedscroll",
                    "onNestedprescroll"
                ))
            }
            ,
            renderSlot(_ctx.`$slots`, "bottom"),
            if (isTrue(_ctx.showBackToTopClass)) {
                _cE("view", _uM("key" to 2, "class" to _nC(_ctx.backToTopClass), "style" to _nS(_uA(
                    _ctx.backToTopStyle
                )), "onClick" to withModifiers(_ctx._onBackToTopClick, _uA(
                    "stop"
                ))), _uA(
                    if (isTrue(_ctx.`$slots`["backToTop"])) {
                        renderSlot(_ctx.`$slots`, "backToTop", _uM("key" to 0))
                    } else {
                        _cE("image", _uM("key" to 1, "class" to "zpx-back-to-top-img", "src" to if (_ctx.backToTopImg.length > 0) {
                            _ctx.backToTopImg
                        } else {
                            _ctx.base64BackToTopImg
                        }), null, 8, _uA(
                            "src"
                        ))
                    }
                ), 14, _uA(
                    "onClick"
                ))
            } else {
                _cC("v-if", true)
            }
        ), 6)
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
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var `$zpxList`: UniElement? by `$data`
    open var refresherStatus: Any? by `$data`
    open var refresherTriggered: Boolean by `$data`
    open var refresherNodeHeight: Number by `$data`
    open var refresherTimeTextTimestamp: Number by `$data`
    open var loadMoreStatus: Any? by `$data`
    open var queryFrom: String by `$data`
    open var isLoadFailed: Boolean by `$data`
    open var customNoMore: Number by `$data`
    open var forceHideLoadMore: Boolean by `$data`
    open var contentWidth: Number by `$data`
    open var isLoading: Boolean by `$data`
    open var scrollTop: Number by `$data`
    open var oldScrollTop: Number by `$data`
    open var pageNo: Number by `$data`
    open var totalData: UTSArray<Any> by `$data`
    open var base64BackToTopImg: Any? by `$data`
    open var backToTopClass: String by `$data`
    open var lastBackToTopShowTime: Number by `$data`
    open var showBackToTopClass: Boolean by `$data`
    open var privateScrollWithAnimation: Number by `$data`
    open var isFirstPage: Boolean by `$data`
    open var finalRefresherThreshold: Number by `$data`
    open var showEmpty: Boolean by `$data`
    open var showLoading: Boolean by `$data`
    open var showLoadMore: Boolean by `$data`
    open var finalScrollWithAnimation: Boolean by `$data`
    open var listItemIs: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "\$zpxList" to null as UniElement?, "refresherStatus" to default__12.Refresher.Default, "refresherTriggered" to false, "refresherNodeHeight" to 0 as Number, "refresherTimeTextTimestamp" to 0, "loadMoreStatus" to default__12.More.Default, "queryFrom" to "", "isLoadFailed" to false, "customNoMore" to -1, "forceHideLoadMore" to false, "contentWidth" to 0, "isLoading" to true, "scrollTop" to 0, "oldScrollTop" to 0, "pageNo" to 1, "totalData" to _uA<Any>(), "base64BackToTopImg" to base64BackToTop, "backToTopClass" to "zpx-back-to-top zpx-back-to-top-hide", "lastBackToTopShowTime" to 0, "showBackToTopClass" to false, "privateScrollWithAnimation" to -1, "isFirstPage" to computed<Boolean>(fun(): Boolean {
            return this.pageNo === this.defaultPageNo
        }
        ), "finalRefresherThreshold" to computed<Number>(fun(): Number {
            return if (this.refresherThreshold > 0) {
                this.refresherThreshold
            } else {
                if (this.refresherNodeHeight > 0) {
                    this.refresherNodeHeight
                } else {
                    40
                }
            }
        }
        ), "showEmpty" to computed<Boolean>(fun(): Boolean {
            return this.totalData.length == 0 && !this.isLoading
        }
        ), "showLoading" to computed<Boolean>(fun(): Boolean {
            return this.`$slots`["loading"] != null && this.isLoading && this.totalData.length == 0
        }
        ), "showLoadMore" to computed<Boolean>(fun(): Boolean {
            return this.loadMoreEnabled && !this.forceHideLoadMore && (!this.isLoading || this.totalData.length > 0) && !this.showEmpty
        }
        ), "finalScrollWithAnimation" to computed<Boolean>(fun(): Boolean {
            if (this.privateScrollWithAnimation != -1) {
                val scrollWithAnimation = this.privateScrollWithAnimation == 1
                this.privateScrollWithAnimation = -1
                return scrollWithAnimation
            }
            return this.scrollWithAnimation
        }
        ), "listItemIs" to computed<String>(fun(): String {
            return if (this.listIs === "list-view") {
                "list-item"
            } else {
                "view"
            }
        }
        ))
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
    open var reload = ::gen_reload_fn
    open fun gen_reload_fn() {
        this.pageNo = this.defaultPageNo
        this.forceHideLoadMore = true
        if (this.showRefresherWhenReload) {
            this.`$nextTick`(fun(){
                this.refresherTriggered = true
            }
            )
            return
        }
        if (this.cleanListWhenReload) {
            this.totalData = _uA()
        }
        if (this.scrollToTopWhenReload) {
            this.scrollToTop(false)
        }
        this.queryFrom = default__12.QueryFrom.Reload
        this._emitQuery(this.pageNo, this.defaultPageSize)
    }
    open var complete = ::gen_complete_fn
    open fun gen_complete_fn(data: UTSArray<Any>?) {
        val finalData: UTSArray<Any> = if (data == null) {
            _uA()
        } else {
            data
        }
        this.isLoadFailed = false
        this.endRefresh()
        val currentData: UTSArray<Any> = finalData.slice()
        if (this.customNoMore != -1) {
            if (this.customNoMore == 1 || (this.customNoMore != 0 && finalData.length == 0)) {
                this.loadMoreStatus = default__12.More.NoMore
            }
        } else {
            if (finalData.length == 0 || (finalData.length > 0 && finalData.length < this.defaultPageSize)) {
                this.loadMoreStatus = default__12.More.NoMore
            } else {
                this.loadMoreStatus = default__12.More.Default
            }
        }
        if (this.isFirstPage) {
            this.totalData = currentData
            if (this.showRefresherUpdateTime) {
                updateRefesrherTime(this.refresherUpdateTimeKey)
                this.refresherTimeTextTimestamp = getTime()
            }
        } else {
            this.totalData = this.totalData.concat(currentData)
        }
        this.`$nextTick`(fun(){
            setTimeout(fun(){
                this.forceHideLoadMore = false
            }
            , 100)
        }
        )
    }
    open var completeByTotal = ::gen_completeByTotal_fn
    open fun gen_completeByTotal_fn(reassignedData: UTSArray<Any>?, total: Number) {
        var data = reassignedData
        val finalData: UTSArray<Any> = if (data == null) {
            _uA()
        } else {
            data
        }
        this.`$nextTick`(fun(){
            var nomore = false
            val realTotalDataCount = if (this.isFirstPage) {
                0
            } else {
                this.totalData.length
            }
            val dataLength = finalData.length
            var exceedCount = realTotalDataCount + dataLength - total
            if (exceedCount >= 0) {
                nomore = true
                exceedCount = this.defaultPageSize - exceedCount
                if (exceedCount > 0 && exceedCount < finalData.length) {
                    data = finalData.splice(0, exceedCount)
                }
            }
            this.completeByNoMore(data, nomore)
        }
        )
    }
    open var completeByNoMore = ::gen_completeByNoMore_fn
    open fun gen_completeByNoMore_fn(data: UTSArray<Any>?, nomore: Boolean) {
        this.customNoMore = if (nomore == true) {
            1
        } else {
            0
        }
        this.complete(data)
    }
    open var completeByError = ::gen_completeByError_fn
    open fun gen_completeByError_fn() {
        this.isLoadFailed = true
        this.endRefresh()
    }
    open var endRefresh = ::gen_endRefresh_fn
    open fun gen_endRefresh_fn() {
        this.refresherTriggered = false
        this.refresherStatus = default__12.Refresher.Default
        this.isLoading = false
    }
    open var scrollToTop = ::gen_scrollToTop_fn
    open fun gen_scrollToTop_fn(animate: Boolean) {
        this.scrollToY(0, animate)
        this._checkShouldShowBackToTop(0)
    }
    open var scrollToBottom = ::gen_scrollToBottom_fn
    open fun gen_scrollToBottom_fn(animate: Boolean) {
        this.scrollToY(99999999, animate)
    }
    open var scrollToY = ::gen_scrollToY_fn
    open fun gen_scrollToY_fn(y: Number, animate: Boolean) {
        this.privateScrollWithAnimation = if (animate) {
            1
        } else {
            0
        }
        this.scrollTop = this.oldScrollTop
        this.`$nextTick`(fun(){
            this.scrollTop = y
        }
        )
    }
    open var _onStartNestedScroll = ::gen__onStartNestedScroll_fn
    open fun gen__onStartNestedScroll_fn(_0: StartNestedScrollEvent): Boolean {
        return this.startNestedScroll
    }
    open var _onNestedPreScroll = ::gen__onNestedPreScroll_fn
    open fun gen__onNestedPreScroll_fn(event: NestedPreScrollEvent) {
        if (this.`$zpxList` != null) {
            this.`$emit`("nestedprescroll", event, this.`$zpxList`!!)
        }
    }
    open var _onRefresherpulling = ::gen__onRefresherpulling_fn
    open fun gen__onRefresherpulling_fn(e: RefresherEvent) {
        this.`$emit`("refresherpulling", e.detail.dy)
        if (!this.isLoading) {
            this.refresherStatus = if (e.detail.dy < this.finalRefresherThreshold) {
                default__12.Refresher.Default
            } else {
                default__12.Refresher.ReleaseToRefresh
            }
        }
    }
    open var _onRefresherrefresh = ::gen__onRefresherrefresh_fn
    open fun gen__onRefresherrefresh_fn(e: RefresherEvent) {
        this.`$emit`("refresherrefresh", e)
        this._handleRefresh()
    }
    open var _onRefresherrestore = ::gen__onRefresherrestore_fn
    open fun gen__onRefresherrestore_fn(e: RefresherEvent) {
        this.`$emit`("refresherrestore", e)
        this.refresherStatus = default__12.Refresher.Default
    }
    open var _onRefresherabort = ::gen__onRefresherabort_fn
    open fun gen__onRefresherabort_fn(e: RefresherEvent) {
        this.`$emit`("refresherabort", e)
    }
    open var _onScrolltolower = ::gen__onScrolltolower_fn
    open fun gen__onScrolltolower_fn(e: ScrollToLowerEvent) {
        this._handleLoadMore()
        this.`$emit`("scrolltolower", e)
    }
    open var _onScrolltoupper = ::gen__onScrolltoupper_fn
    open fun gen__onScrolltoupper_fn(e: ScrollToUpperEvent) {
        this.`$emit`("scrolltoupper", e)
    }
    open var _onScroll = ::gen__onScroll_fn
    open fun gen__onScroll_fn(e: ScrollEvent) {
        this.`$emit`("scroll", e)
        this.oldScrollTop = e.detail.scrollTop
        this._checkShouldShowBackToTop(this.oldScrollTop)
    }
    open var _handleRefresh = ::gen__handleRefresh_fn
    open fun gen__handleRefresh_fn() {
        this.refresherStatus = default__12.Refresher.Loading
        this.refresherTriggered = true
        this.pageNo = this.defaultPageNo
        this.queryFrom = default__12.QueryFrom.UserPullDown
        this._emitQuery(this.pageNo, this.defaultPageSize)
    }
    open var _handleLoadMore = ::gen__handleLoadMore_fn
    open fun gen__handleLoadMore_fn() {
        if (!this.loadMoreEnabled || this.isLoading || this.loadMoreStatus === default__12.More.NoMore) {
            return
        }
        this.loadMoreStatus = default__12.More.Loading
        this.pageNo++
        this.queryFrom = default__12.QueryFrom.LoadMore
        this._emitQuery(this.pageNo, this.defaultPageSize)
    }
    open var _emitQuery = ::gen__emitQuery_fn
    open fun gen__emitQuery_fn(pageNo: Number, pageSize: Number) {
        this.isLoading = true
        this.`$emit`("query", pageNo, pageSize, this.queryFrom)
    }
    open var _checkShouldShowBackToTop = ::gen__checkShouldShowBackToTop_fn
    open fun gen__checkShouldShowBackToTop_fn(scrollTop: Number) {
        if (!this.showBackToTop) {
            this.showBackToTopClass = false
            return
        }
        if (scrollTop > this.backToTopThreshold) {
            if (!this.showBackToTopClass) {
                this.showBackToTopClass = true
                this.lastBackToTopShowTime = Date().getTime()
                setTimeout(fun(){
                    this.backToTopClass = "zpx-back-to-top zpx-back-to-top-show"
                }
                , 300)
            }
        } else {
            if (this.showBackToTopClass) {
                this.backToTopClass = "zpx-back-to-top zpx-back-to-top-hide"
                setTimeout(fun(){
                    this.showBackToTopClass = false
                }
                , if (Date().getTime() - this.lastBackToTopShowTime < 500) {
                    0
                } else {
                    300
                }
                )
            }
        }
    }
    open var _onBackToTopClick = ::gen__onBackToTopClick_fn
    open fun gen__onBackToTopClick_fn() {
        var callbacked: Boolean = false
        this.`$emit`("backToTopClick", fun(toTop: Boolean){
            if (toTop != false) {
                this._handleToTop()
            }
            callbacked = true
        }
        )
        this.`$nextTick`(fun(){
            if (!callbacked) {
                this._handleToTop()
            }
        }
        )
    }
    open var _handleToTop = ::gen__handleToTop_fn
    open fun gen__handleToTop_fn() {
        this.scrollToTop(true)
    }
    companion object {
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
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "defaultPageNo" to _uM("type" to "Number", "default" to gc<Number>("default-page-no", 1)), "defaultPageSize" to _uM("type" to "Number", "default" to gc<Number>("default-page-size", 10)), "pagingStyle" to _uM("default" to gc<Any>("paging-style", _uO())), "refresherEnabled" to _uM("type" to "Boolean", "default" to gc<Boolean>("refresher-enabled", true)), "refresherThreshold" to _uM("type" to "Number", "default" to gc<Number>("refresher-threshold", 0)), "refresherDefaultText" to _uM("type" to "String", "default" to gc<String>("refresher-default-text", "继续下拉刷新")), "refresherPullingText" to _uM("type" to "String", "default" to gc<String>("refresher-pulling-text", "松开立即刷新")), "refresherRefreshingText" to _uM("type" to "String", "default" to gc<String>("refresher-refreshing-text", "正在刷新...")), "refresherBackground" to _uM("type" to "String", "default" to gc<String>("refresher-background", "#FFF")), "useCustomRefresher" to _uM("type" to "Boolean", "default" to gc<Boolean>("use-custom-refresher", true)), "showRefresherWhenReload" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-refresher-when-reload", false)), "showRefresherUpdateTime" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-refresher-update-time", false)), "refresherUpdateTimeKey" to _uM("type" to "String", "default" to gc<String>("refresher-update-time-key", "default")), "loadMoreEnabled" to _uM("type" to "Boolean", "default" to gc<Boolean>("load-more-enabled", true)), "loadMoreDefaultText" to _uM("type" to "String", "default" to gc<String>("load-more-default-text", "点击加载更多")), "loadMoreLoadingText" to _uM("type" to "String", "default" to gc<String>("load-more-loading-text", "正在加载...")), "loadMoreNoMoreText" to _uM("type" to "String", "default" to gc<String>("load-more-no-more-text", "没有更多了")), "loadMoreFailText" to _uM("type" to "String", "default" to gc<String>("load-more-fail-text", "加载失败，点击重新加载")), "auto" to _uM("type" to "Boolean", "default" to gc<Boolean>("auto", true)), "scrollToTopWhenReload" to _uM("type" to "Boolean", "default" to gc<Boolean>("scrollToTopWhenReload", true)), "cleanListWhenReload" to _uM("type" to "Boolean", "default" to gc<Boolean>("cleanListWhenReload", true)), "emptyText" to _uM("type" to "String", "default" to gc<String>("empty-text", "没有数据哦~")), "emptyErrorText" to _uM("type" to "String", "default" to gc<String>("empty-error-text", "很抱歉，加载失败")), "emptyImg" to _uM("type" to "String", "default" to gc<String>("empty-img", "")), "emptyErrorImg" to _uM("type" to "String", "default" to gc<String>("empty-error-img", "")), "showBackToTop" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-back-to-top", false)), "backToTopThreshold" to _uM("type" to "Number", "default" to gc<Number>("back-to-top-threshold", 300)), "backToTopImg" to _uM("type" to "String", "default" to gc<String>("back-to-top-img", "")), "backToTopStyle" to _uM("default" to gc<Any>("back-to-top-style", _uO())), "scrollWithAnimation" to _uM("type" to "Boolean", "default" to gc<Boolean>("scroll-with-animation", false)), "listIs" to _uM("type" to "String", "default" to gc<String>("list-is", "list-view")), "listId" to _uM("type" to "String", "default" to gc<String>("list-id", "")), "showScrollbar" to _uM("type" to "Boolean", "default" to gc<Boolean>("show-scrollbar", true)), "rebound" to _uM("type" to "Boolean", "default" to gc<Boolean>("rebound", true)), "customNestedScroll" to _uM("type" to "Boolean", "default" to gc<Boolean>("custom-nested-scroll", false)), "startNestedScroll" to _uM("type" to "Boolean", "default" to gc<Boolean>("start-nested-scroll", false)), "nestedScrollChild" to _uM("type" to "String", "default" to gc<String>("nested-scroll-child", ""))))
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
            "nestedScrollChild"
        )
        var components: Map<String, CreateVueComponent> = _uM("zPagingRefresher" to GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherClass, "zPagingLoadMore" to GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreClass, "zPagingXEmpty" to GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptyClass)
    }
}
