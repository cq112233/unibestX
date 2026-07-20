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
import io.dcloud.uniapp.extapi.hideTabBar as uni_hideTabBar
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenSrcTabbarIndex : VueComponent {
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
        var setup: (__props: GenSrcTabbarIndex) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcTabbarIndex
            val _cache = __ins.renderCache
            val TABBAR_HEIGHT: Number = 50
            val TABBAR_CONTAINER_HEIGHT: Number = 80
            val safeAreaBottom = computed<Number>(fun(): Number {
                val insets = safeAreaInsets.value
                if (insets != null) {
                    return insets.bottom
                }
                return 0
            }
            )
            fun gen_handleClickBulge_fn() {
                uni_navigateTo(NavigateToOptions(url = "/src/pages/ai/ai"))
            }
            val handleClickBulge = ::gen_handleClickBulge_fn
            fun gen_handleClick_fn(index: Number) {
                if (index == curIdx.value) {
                    return
                }
                val list = tabbarList
                if (list.length <= index) {
                    return
                }
                if (list[index].isBulge) {
                    handleClickBulge()
                    return
                }
                val url = list[index].pagePath
                setCurIdx(index)
                uni_switchTab(SwitchTabOptions(url = url))
            }
            val handleClick = ::gen_handleClick_fn
            onMounted(fun(){
                syncCurIdxByCurrentPage()
                uni_hideTabBar(HideTabBarOptions(fail = fun(err: Any){
                    console.log("hideTabBar fail: ", err, " at src/tabbar/index.uvue:54")
                }
                ))
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "tabbar-placeholder", "style" to _nS(_uM("height" to ("" + (TABBAR_HEIGHT + unref(safeAreaBottom)) + "px")))), _uA(
                    _cE("view", _uM("class" to "tabbar-container", "style" to _nS(_uM("height" to ("" + (TABBAR_CONTAINER_HEIGHT + unref(safeAreaBottom)) + "px")))), _uA(
                        _cE("view", _uM("class" to "tabbar-bg", "style" to _nS(_uM("height" to ("" + (TABBAR_HEIGHT + unref(safeAreaBottom)) + "px")))), null, 4),
                        _cE("view", _uM("class" to "tabbar-inner"), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(unref(tabbarList), fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                                    "tabbar-item",
                                    _uM("tabbar-item-bulge" to item.isBulge)
                                )), "onClick" to fun(){
                                    handleClick(index)
                                }
                                ), _uA(
                                    _cV(unref(GenSrcTabbarTabbarItemClass), _uM("item" to item, "index" to index, "is-bulge" to item.isBulge), null, 8, _uA(
                                        "item",
                                        "index",
                                        "is-bulge"
                                    ))
                                ), 10, _uA(
                                    "onClick"
                                ))
                            }
                            ), 128)
                        )),
                        _cE("view", _uM("class" to "safe-area-bg", "style" to _nS(_uM("height" to ("" + unref(safeAreaBottom) + "px")))), null, 4)
                    ), 4)
                ), 4)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("tabbar-container" to _pS(_uM("position" to "fixed", "bottom" to 0, "left" to 0, "right" to 0, "zIndex" to 1, "backgroundColor" to "rgba(0,0,0,0)", "flexDirection" to "column")), "tabbar-bg" to _pS(_uM("position" to "absolute", "bottom" to 0, "left" to 0, "right" to 0, "backgroundColor" to "#ffffff", "borderTopWidth" to "1rpx", "borderTopStyle" to "solid", "borderTopColor" to "#eeeeee", "zIndex" to 1)), "tabbar-inner" to _pS(_uM("flexDirection" to "row", "height" to 80, "alignItems" to "flex-end", "zIndex" to 2)), "tabbar-item" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "alignItems" to "center", "justifyContent" to "center", "height" to 50)), "tabbar-item-bulge" to _pS(_uM("height" to 80)), "safe-area-bg" to _pS(_uM("zIndex" to 1, "backgroundColor" to "#ffffff")))
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
