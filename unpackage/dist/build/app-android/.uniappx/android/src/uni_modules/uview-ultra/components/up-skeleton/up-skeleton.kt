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
open class GenUniModulesUviewUltraComponentsUpSkeletonUpSkeleton : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSkeletonUpSkeleton) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSkeletonUpSkeleton
            val _cache = __ins.renderCache
            val props = __props
            val rowsArray = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                val rows: UTSArray<UTSJSONObject> = _uA()
                val rowCount = parseInt(props.rows.toString())
                val rWidth = props.rowsWidth
                val rHeight = props.rowsHeight
                run {
                    var i: Number = 0
                    while(i < rowCount){
                        var item: UTSJSONObject = _uO()
                        var rowWidth: Any = ""
                        if (rWidth is UTSArray<*>) {
                            val rWidthArr = rWidth as UTSArray<Any>
                            if (i == rowCount - 1) {
                                rowWidth = "70%"
                            } else {
                                rowWidth = if (rWidthArr[i] != null) {
                                    (rWidthArr[i] ?: "0px")
                                } else {
                                    if (i == rWidthArr.length) {
                                        "70%"
                                    } else {
                                        "100%"
                                    }
                                }
                            }
                        } else {
                            if (i == rowCount - 1) {
                                rowWidth = "70%"
                            } else {
                                rowWidth = if (rWidth as Any != null) {
                                    (rWidth as Any).toString()
                                } else {
                                    ""
                                }
                            }
                        }
                        var rowHeight: Any = ""
                        if (rHeight is UTSArray<*>) {
                            val rHeightArr = rHeight as UTSArray<Any>
                            rowHeight = if (rHeightArr[i] != null) {
                                (rHeightArr[i] ?: "0px")
                            } else {
                                "18px"
                            }
                        } else {
                            rowHeight = if (rHeight as Any != null) {
                                (rHeight as Any).toString()
                            } else {
                                ""
                            }
                        }
                        if (!props.title && i == 0) {
                            item["marginTop"] = "0px"
                        } else if (props.title && i == 0) {
                            item["marginTop"] = "20px"
                        } else {
                            item["marginTop"] = "12px"
                        }
                        item["width"] = addUnit(rowWidth)
                        item["height"] = addUnit(rowHeight)
                        rows.push(item)
                        i++
                    }
                }
                return rows
            }
            )
            val uTitleWidth = computed<String>(fun(): String {
                var tWidth = "0px"
                tWidth = addUnit(props.titleWidth)
                return addUnit(tWidth)
            }
            )
            val avatarStyle = computed(fun(): UTSJSONObject {
                return _uO("height" to addUnit(props.avatarSize), "width" to addUnit(props.avatarSize))
            }
            )
            val titleStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to uTitleWidth.value, "height" to addUnit(props.titleHeight))
            }
            )
            fun gen_getRowStyle_fn(item: UTSJSONObject): UTSJSONObject {
                return _uO("width" to item["width"], "height" to item["height"], "marginTop" to item["marginTop"])
            }
            val getRowStyle = ::gen_getRowStyle_fn
            fun gen_getComponentWidth_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        await(sleep(20))
                })
            }
            val getComponentWidth = ::gen_getComponentWidth_fn
            onMounted(fun(){
                getComponentWidth()
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-skeleton"), _uA(
                    if (isTrue(_ctx.loading)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-skeleton__wrapper", "ref" to "up-skeleton__wrapper", "style" to _nS(_uM("display" to "flex", "flex-direction" to "row"))), _uA(
                            if (isTrue(_ctx.avatar)) {
                                _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                    "weapp-tw-border up-skeleton__wrapper__avatar",
                                    _uA(
                                        "up-skeleton__wrapper__avatar--" + _ctx.avatarShape,
                                        if (_ctx.animate) {
                                            "animate"
                                        } else {
                                            ""
                                        }
                                    )
                                )), "style" to _nS(avatarStyle.value)), null, 6)
                            } else {
                                _cC("v-if", true)
                            },
                            _cE("view", _uM("class" to "weapp-tw-border up-skeleton__wrapper__content", "ref" to "up-skeleton__wrapper__content", "style" to _nS(_uM("flex" to "1"))), _uA(
                                if (isTrue(_ctx.title)) {
                                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                        "weapp-tw-border up-skeleton__wrapper__content__title",
                                        _uA(
                                            if (_ctx.animate) {
                                                "animate"
                                            } else {
                                                ""
                                            }
                                        )
                                    )), "style" to _nS(titleStyle.value)), null, 6)
                                } else {
                                    _cC("v-if", true)
                                },
                                _cE(Fragment, null, RenderHelpers.renderList(rowsArray.value, fun(item, index, __index, _cached): Any {
                                    return _cE("view", _uM("class" to _nC(_uA(
                                        "weapp-tw-border up-skeleton__wrapper__content__rows",
                                        _uA(
                                            if (_ctx.animate) {
                                                "animate"
                                            } else {
                                                ""
                                            }
                                        )
                                    )), "key" to index, "style" to _nS(getRowStyle(item))), null, 6)
                                }), 128)
                            ), 4)
                        ), 4)
                    } else {
                        renderSlot(_ctx.`$slots`, "default", _uM("key" to 1))
                    }
                ))
            }
        }
        var name = "up-skeleton"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-skeleton" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-skeleton__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-skeleton__wrapper__avatar" to _pS(_uM("backgroundColor" to "#F1F2F4", "marginRight" to 15)), "up-skeleton__wrapper__avatar--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-skeleton__wrapper__avatar--square" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-skeleton__wrapper__content" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-skeleton__wrapper__content__rows" to _pS(_uM("backgroundColor" to "#F1F2F4", "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-skeleton__wrapper__content__title" to _pS(_uM("backgroundColor" to "#F1F2F4", "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "loading" to _uM("type" to "Boolean", "default" to true), "animate" to _uM("type" to "Boolean", "default" to true), "rows" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "rowsWidth" to _uM("type" to _uA(
            "String",
            "Number",
            "Array"
        ), "default" to "100%"), "rowsHeight" to _uM("type" to _uA(
            "String",
            "Number",
            "Array"
        ), "default" to 18), "title" to _uM("type" to "Boolean", "default" to true), "titleWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "50%"), "titleHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 18), "avatar" to _uM("type" to "Boolean", "default" to false), "avatarSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 32), "avatarShape" to _uM("type" to "String", "default" to "circle")))
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
