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
open class GenUniModulesUviewUltraComponentsUpSkeletonUpSkeleton : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.loading
        }
        , fun() {
            this.getComponentWidth()
        }
        , WatchOptions())
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "up-skeleton"), _uA(
            if (isTrue(_ctx.loading)) {
                _cE("view", _uM("key" to 0, "class" to "up-skeleton__wrapper", "ref" to "up-skeleton__wrapper", "style" to _nS(_uM("display" to "flex", "flex-direction" to "row"))), _uA(
                    if (isTrue(_ctx.avatar)) {
                        _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                            "up-skeleton__wrapper__avatar",
                            _uA(
                                "up-skeleton__wrapper__avatar--" + _ctx.avatarShape,
                                if (isTruthy(_ctx.animate)) {
                                    "animate"
                                } else {
                                    ""
                                }
                            )
                        )), "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.avatarSize), "width" to _ctx.addUnit(_ctx.avatarSize)))), null, 6)
                    } else {
                        _cC("v-if", true)
                    },
                    _cE("view", _uM("class" to "up-skeleton__wrapper__content", "ref" to "up-skeleton__wrapper__content", "style" to _nS(_uM("flex" to "1"))), _uA(
                        if (isTrue(_ctx.title)) {
                            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                "up-skeleton__wrapper__content__title",
                                _uA(
                                    if (isTruthy(_ctx.animate)) {
                                        "animate"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(_uM("width" to _ctx.uTitleWidth, "height" to _ctx.addUnit(_ctx.titleHeight)))), null, 6)
                        } else {
                            _cC("v-if", true)
                        },
                        _cE(Fragment, null, RenderHelpers.renderList(_ctx.rowsArray, fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("class" to _nC(_uA(
                                "up-skeleton__wrapper__content__rows",
                                _uA(
                                    if (isTruthy(_ctx.animate)) {
                                        "animate"
                                    } else {
                                        ""
                                    }
                                )
                            )), "key" to index, "style" to _nS(_uM("width" to item["width"], "height" to item["height"], "marginTop" to item["marginTop"]))), null, 6)
                        }), 128)
                    ), 4)
                ), 4)
            } else {
                renderSlot(_ctx.`$slots`, "default", _uM("key" to 1))
            }
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var loading: Boolean by `$props`
    open var animate: Boolean by `$props`
    open var rows: Any by `$props`
    open var rowsWidth: Any by `$props`
    open var rowsHeight: Any by `$props`
    open var title: Boolean by `$props`
    open var titleWidth: Any by `$props`
    open var titleHeight: Any by `$props`
    open var avatar: Boolean by `$props`
    open var avatarSize: Any by `$props`
    open var avatarShape: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var width: Number by `$data`
    open var rowsArray: UTSArray<UTSJSONObject> by `$data`
    open var uTitleWidth: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "width" to 0, "rowsArray" to computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
            val rows: UTSArray<UTSJSONObject> = _uA()
            run {
                var i: Number = 0
                while(i < parseInt(this.rows.toString())){
                    var item: UTSJSONObject = _uO()
                    var rowWidth: Any = ""
                    if (this.rowsWidth is UTSArray<*>) {
                        if (i === parseInt(this.rows.toString()) - 1) {
                            rowWidth = "70%"
                        } else {
                            rowWidth = if ((this.rowsWidth as UTSArray<*>)[i] != null) {
                                (this.rowsWidth as UTSArray<*>)[i] ?: "0px"
                            } else {
                                if (i === (this.rowsWidth as UTSArray<*>).length) {
                                    "70%"
                                } else {
                                    "100%"
                                }
                            }
                        }
                    } else {
                        if (i === parseInt(this.rows.toString()) - 1) {
                            rowWidth = "70%"
                        } else {
                            rowWidth = (this.rowsWidth as Any).toString()
                        }
                    }
                    var rowHeight: Any = ""
                    if (this.rowsHeight is UTSArray<*>) {
                        rowHeight = if ((this.rowsHeight as UTSArray<*>)[i] != null) {
                            (this.rowsHeight as UTSArray<*>)[i] ?: "0px"
                        } else {
                            "18px"
                        }
                    } else {
                        rowHeight = (this.rowsHeight as Any).toString()
                    }
                    if (!isTruthy(this.title) && i == 0) {
                        item["marginTop"] = "0px"
                    } else if (isTruthy(this.title) && i == 0) {
                        item["marginTop"] = "20px"
                    } else {
                        item["marginTop"] = "12px"
                    }
                    item["width"] = uni.UNI5198058.addUnit(rowWidth)
                    item["height"] = uni.UNI5198058.addUnit(rowHeight)
                    rows.push(item)
                    i++
                }
            }
            return rows
        }
        ), "uTitleWidth" to computed<String>(fun(): String {
            var tWidth = "0px"
            tWidth = uni.UNI5198058.addUnit(this.titleWidth)
            return uni.UNI5198058.addUnit(tWidth)
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
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.getComponentWidth()
    }
    open var getComponentWidth = ::gen_getComponentWidth_fn
    open fun gen_getComponentWidth_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend {
                await(sleep(20))
        })
    }
    companion object {
        var name = "up-skeleton"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-skeleton" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-skeleton__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-skeleton__wrapper__avatar" to _pS(_uM("backgroundColor" to "#F1F2F4", "marginRight" to 15)), "up-skeleton__wrapper__avatar--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-skeleton__wrapper__avatar--square" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-skeleton__wrapper__content" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-skeleton__wrapper__content__rows" to _pS(_uM("backgroundColor" to "#F1F2F4", "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-skeleton__wrapper__content__title" to _pS(_uM("backgroundColor" to "#F1F2F4", "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "loading" to _uM("type" to "Boolean", "default" to skProp["loading"]), "animate" to _uM("type" to "Boolean", "default" to skProp["animate"]), "rows" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to skProp["rows"]), "rowsWidth" to _uM("type" to _uA(
            "String",
            "Number",
            "Array"
        ), "default" to skProp["rowsWidth"]), "rowsHeight" to _uM("type" to _uA(
            "String",
            "Number",
            "Array"
        ), "default" to skProp["rowsHeight"]), "title" to _uM("type" to "Boolean", "default" to skProp["title"]), "titleWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to skProp["titleWidth"]), "titleHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to skProp["titleHeight"]), "avatar" to _uM("type" to "Boolean", "default" to skProp["avatar"]), "avatarSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to skProp["avatarSize"]), "avatarShape" to _uM("type" to "String", "default" to skProp["avatarShape"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "loading",
            "animate",
            "rows",
            "rowsWidth",
            "rowsHeight",
            "title",
            "titleWidth",
            "titleHeight",
            "avatar",
            "avatarSize",
            "avatarShape"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
