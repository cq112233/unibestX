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
open class GenUniModulesUviewUltraComponentsUpPaginationUpPagination : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return if (isTrue(_ctx.shouldShow)) {
            _cE("view", _uM("key" to 0, "class" to "up-pagination"), _uA(
                _cE("view", _uM("class" to _nC(_uA(
                    "up-pagination-btn",
                    _uM("btn-disabled" to (_ctx.currentPage <= 1))
                )), "style" to _nS(_uM("backgroundColor" to _ctx.buttonBgColor, "borderColor" to _ctx.buttonBorderColor)), "onClick" to _ctx.prev), _uA(
                    if (_ctx.prevText != "") {
                        _cE("text", _uM("key" to 0, "class" to "up-pagination-text"), _tD(_ctx.prevText), 1)
                    } else {
                        _cV(_component_up_icon, _uM("key" to 1, "name" to "arrow-left", "size" to "14"))
                    }
                ), 14, _uA(
                    "onClick"
                )),
                if (isTrue(_ctx.showPager)) {
                    _cE(Fragment, _uM("key" to 0), RenderHelpers.renderList(_ctx.displayedPages, fun(page, index, __index, _cached): Any {
                        return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                            "up-pagination-item",
                            _uM("item-active" to (page == _ctx.currentPageStr))
                        )), "onClick" to fun(){
                            _ctx.goTo(page)
                        }), _uA(
                            _cE("text", _uM("class" to _nC(_uA(
                                "up-pagination-text",
                                _uM("text-active" to (page == _ctx.currentPageStr))
                            ))), _tD(page), 3)
                        ), 10, _uA(
                            "onClick"
                        ))
                    }), 128)
                } else {
                    _cC("v-if", true)
                },
                if (isTrue(_ctx.showTotal)) {
                    _cE("view", _uM("key" to 1, "class" to "up-pagination-total"), _uA(
                        _cE("text", _uM("class" to "up-pagination-text"), "共 " + _tD(_ctx.total) + " 条", 1)
                    ))
                } else {
                    _cC("v-if", true)
                },
                _cE("view", _uM("class" to _nC(_uA(
                    "up-pagination-btn",
                    _uM("btn-disabled" to (_ctx.currentPage >= _ctx.totalPages))
                )), "style" to _nS(_uM("backgroundColor" to _ctx.buttonBgColor, "borderColor" to _ctx.buttonBorderColor)), "onClick" to _ctx.next), _uA(
                    if (_ctx.nextText != "") {
                        _cE("text", _uM("key" to 0, "class" to "up-pagination-text"), _tD(_ctx.nextText), 1)
                    } else {
                        _cV(_component_up_icon, _uM("key" to 1, "name" to "arrow-right", "size" to "14"))
                    }
                ), 14, _uA(
                    "onClick"
                ))
            ))
        } else {
            _cC("v-if", true)
        }
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var currentPage: Number by `$props`
    open var pageSize: Number by `$props`
    open var total: Number by `$props`
    open var prevText: String by `$props`
    open var nextText: String by `$props`
    open var buttonBgColor: String by `$props`
    open var buttonBorderColor: String by `$props`
    open var layout: String by `$props`
    open var hideOnSinglePage: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var totalPages: Number by `$data`
    open var shouldShow: Boolean by `$data`
    open var showPager: Boolean by `$data`
    open var showTotal: Boolean by `$data`
    open var currentPageStr: String by `$data`
    open var displayedPages: UTSArray<String> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "totalPages" to computed<Number>(fun(): Number {
            val t = parseFloat(this.total.toString(10))
            val p = parseFloat(this.pageSize.toString(10))
            var pages = Math.ceil(t / p)
            if (pages < 1) {
                pages = 1
            }
            return pages
        }
        ), "shouldShow" to computed<Boolean>(fun(): Boolean {
            if (this.hideOnSinglePage && this.totalPages <= 1) {
                return false
            }
            return true
        }
        ), "showPager" to computed<Boolean>(fun(): Boolean {
            if (this.layout == null) {
                return false
            }
            return this.layout.indexOf("pager") > -1
        }
        ), "showTotal" to computed<Boolean>(fun(): Boolean {
            if (this.layout == null) {
                return false
            }
            return this.layout.indexOf("total") > -1
        }
        ), "currentPageStr" to computed<String>(fun(): String {
            return this.currentPage.toString(10)
        }
        ), "displayedPages" to computed<UTSArray<String>>(fun(): UTSArray<String> {
            val total = this.totalPages
            val current = this.currentPage
            val pages = _uA<String>()
            if (total <= 4) {
                run {
                    var i: Number = 1
                    while(i <= total){
                        pages.push(i.toString(10))
                        i++
                    }
                }
                return pages
            }
            if (current <= 2) {
                run {
                    var i: Number = 1
                    while(i <= 4){
                        pages.push(i.toString(10))
                        i++
                    }
                }
                pages.push("...")
                pages.push(total.toString(10))
                return pages
            }
            if (current >= total - 1) {
                pages.push("1")
                pages.push("...")
                run {
                    var i = total - 3
                    while(i <= total){
                        pages.push(i.toString(10))
                        i++
                    }
                }
                return pages
            }
            pages.push("1")
            pages.push("...")
            pages.push((current - 1).toString(10))
            pages.push(current.toString(10))
            pages.push((current + 1).toString(10))
            pages.push("...")
            pages.push(total.toString(10))
            return pages
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
    open var prev = ::gen_prev_fn
    open fun gen_prev_fn() {
        if (this.currentPage > 1) {
            this.emitChange(this.currentPage - 1)
        }
    }
    open var next = ::gen_next_fn
    open fun gen_next_fn() {
        if (this.currentPage < this.totalPages) {
            this.emitChange(this.currentPage + 1)
        }
    }
    open var goTo = ::gen_goTo_fn
    open fun gen_goTo_fn(page: String) {
        if (page == "..." || page == this.currentPage.toString(10)) {
            return
        }
        val num = parseInt(page)
        if (!isNaN(num)) {
            this.emitChange(num)
        }
    }
    open var emitChange = ::gen_emitChange_fn
    open fun gen_emitChange_fn(page: Number) {
        this.`$emit`("update:currentPage", page)
        this.`$emit`("current-change", page)
    }
    companion object {
        var name = "up-pagination"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-pagination" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexWrap" to "wrap", "width" to "100%", "minHeight" to 30)), "up-pagination-text" to _pS(_uM("fontSize" to 14, "color" to "#606266")), "text-active" to _pS(_uM("color" to "#ffffff")), "up-pagination-total" to _pS(_uM("marginTop" to 0, "marginRight" to 10, "marginBottom" to 0, "marginLeft" to 10, "display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-pagination-btn" to _pS(_uM("marginTop" to 0, "marginRight" to 3, "marginBottom" to 0, "marginLeft" to 3, "paddingTop" to 0, "paddingRight" to 8, "paddingBottom" to 0, "paddingLeft" to 8, "height" to 30, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#dcdfe6", "borderRightColor" to "#dcdfe6", "borderBottomColor" to "#dcdfe6", "borderLeftColor" to "#dcdfe6", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "backgroundColor" to "#f5f7fa", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "btn-disabled" to _pS(_uM("opacity" to 0.5)), "up-pagination-item" to _pS(_uM("marginTop" to 0, "marginRight" to 2, "marginBottom" to 0, "marginLeft" to 2, "paddingTop" to 0, "paddingRight" to 8, "paddingBottom" to 0, "paddingLeft" to 8, "height" to 30, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "item-active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:currentPage" to null, "update:pageSize" to null, "current-change" to null, "size-change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "currentPage" to _uM("type" to "Number", "default" to 1), "pageSize" to _uM("type" to "Number", "default" to 10), "total" to _uM("type" to "Number", "default" to 0), "prevText" to _uM("type" to "String", "default" to ""), "nextText" to _uM("type" to "String", "default" to ""), "buttonBgColor" to _uM("type" to "String", "default" to "#f5f7fa"), "buttonBorderColor" to _uM("type" to "String", "default" to "#dcdfe6"), "layout" to _uM("type" to "String", "default" to "prev, pager, next, total"), "hideOnSinglePage" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "currentPage",
            "pageSize",
            "total",
            "prevText",
            "nextText",
            "buttonBgColor",
            "buttonBorderColor",
            "layout",
            "hideOnSinglePage"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
