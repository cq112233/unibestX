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
open class GenSrcSubUviewUltraDemosDragsortDragsort : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosDragsortDragsort) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosDragsortDragsort
            val _cache = __ins.renderCache
            val plainList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "普通列表项 1"), _uO("id" to 2, "label" to "普通列表项 2"), _uO("id" to 3, "label" to "普通列表项 3"), _uO("id" to 4, "label" to "普通列表项 4"), _uO("id" to 5, "label" to "普通列表项 5")))
            val leftHandleList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "左侧手柄项 1"), _uO("id" to 2, "label" to "左侧手柄项 2"), _uO("id" to 3, "label" to "左侧手柄项 3"), _uO("id" to 4, "label" to "左侧手柄项 4")))
            val verticalList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "列表项 1"), _uO("id" to 2, "label" to "列表项 2"), _uO("id" to 3, "label" to "列表项 3"), _uO("id" to 4, "label" to "列表项 4"), _uO("id" to 5, "label" to "列表项 5")))
            val horizontalList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "卡片 1"), _uO("id" to 2, "label" to "卡片 2"), _uO("id" to 3, "label" to "卡片 3"), _uO("id" to 4, "label" to "卡片 4")))
            val gridList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "应用 1"), _uO("id" to 2, "label" to "应用 2"), _uO("id" to 3, "label" to "应用 3"), _uO("id" to 4, "label" to "应用 4"), _uO("id" to 5, "label" to "应用 5"), _uO("id" to 6, "label" to "应用 6"), _uO("id" to 7, "label" to "应用 7"), _uO("id" to 8, "label" to "应用 8")))
            val disabledList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "普通项 1"), _uO("id" to 2, "label" to "锁定项（不可拖动）", "draggable" to false), _uO("id" to 3, "label" to "普通项 2"), _uO("id" to 4, "label" to "普通项 3"), _uO("id" to 5, "label" to "锁定项（不可拖动）", "draggable" to false), _uO("id" to 6, "label" to "普通项 4")))
            val eventLog = ref<String>("拖拽完成后，drag-end 会返回最新列表顺序")
            fun gen_getLabel_fn(item: UTSJSONObject): String {
                val label = item["label"]
                return if (label == null) {
                    ""
                } else {
                    label.toString()
                }
            }
            val getLabel = ::gen_getLabel_fn
            fun gen_getItemDisabled_fn(item: UTSJSONObject): Boolean {
                val draggableValue = item["draggable"]
                return draggableValue != null && draggableValue.toString() == "false"
            }
            val getItemDisabled = ::gen_getItemDisabled_fn
            fun gen_getOrder_fn(list: UTSArray<UTSJSONObject>): String {
                val labels = _uA<String>()
                run {
                    var i: Number = 0
                    while(i < list.length){
                        labels.push(getLabel(list[i]))
                        i++
                    }
                }
                return labels.join(" → ")
            }
            val getOrder = ::gen_getOrder_fn
            fun gen_onDragEnd_fn(list: UTSArray<UTSJSONObject>) {
                eventLog.value = "drag-end => " + getOrder(list)
            }
            val onDragEnd = ::gen_onDragEnd_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_dragsort = resolveEasyComponent("up-dragsort", GenUniModulesUviewUltraComponentsUpDragsortUpDragsortClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-dragsort 拖拽排序", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-dragsort 拖拽排序", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "无手柄（按住整项任意位置拖拽排序）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_dragsort, _uM("initial-list" to plainList.value, "direction" to "vertical", "onDragEnd" to onDragEnd), _uM("default" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                val index = slotProps["index"]
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-item"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-text"), _tD(getLabel(item as UTSJSONObject)), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-index"), _tD((index as Number) + 1), 1)
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "initial-list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "垂直拖拽（按住右侧手柄排序）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_dragsort, _uM("initial-list" to verticalList.value, "direction" to "vertical", "handle-drag" to "", "onDragEnd" to onDragEnd), _uM("handler" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-handler"), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to "#64748b", "size" to "20"))
                                                    ))
                                                )
                                            }
                                            ), "default" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                val index = slotProps["index"]
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-item"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-text"), _tD(getLabel(item as UTSJSONObject)), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-index"), _tD((index as Number) + 1), 1)
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "initial-list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "垂直拖拽（按住左侧手柄排序）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_dragsort, _uM("initial-list" to leftHandleList.value, "direction" to "vertical", "handle-drag" to "", "handler-position" to "left", "onDragEnd" to onDragEnd), _uM("handler" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-handler drag-handler--left"), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to "#64748b", "size" to "20"))
                                                    ))
                                                )
                                            }
                                            ), "default" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                val index = slotProps["index"]
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-item drag-item--left"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-text"), _tD(getLabel(item as UTSJSONObject)), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-index"), _tD((index as Number) + 1), 1)
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "initial-list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "水平拖拽（按住右侧手柄左右拖动）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_dragsort, _uM("initial-list" to horizontalList.value, "direction" to "horizontal", "handle-drag" to "", "onDragEnd" to onDragEnd), _uM("handler" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-handler-h"), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to "#2563eb", "size" to "20"))
                                                    ))
                                                )
                                            }
                                            ), "default" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-item-h"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-text"), _tD(getLabel(item as UTSJSONObject)), 1)
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "initial-list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "九宫格拖拽（direction=\"all\"、3 列，按住角标拖拽）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_dragsort, _uM("initial-list" to gridList.value, "direction" to "all", "columns" to 3, "handle-drag" to "", "onDragEnd" to onDragEnd), _uM("handler" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-handler-grid"), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to "#475569", "size" to "14"))
                                                    ))
                                                )
                                            }
                                            ), "default" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                val index = slotProps["index"]
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border drag-item-grid"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-grid-text"), _tD(getLabel(item as UTSJSONObject)), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-grid-index"), "#" + _tD((index as Number) + 1), 1)
                                                    ))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "initial-list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "部分项禁用拖拽（draggable: false）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_dragsort, _uM("initial-list" to disabledList.value, "direction" to "vertical", "handle-drag" to "", "onDragEnd" to onDragEnd), _uM("handler" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                return _uA(
                                                    _cE("view", _uM("class" to _nC(_uA(
                                                        "weapp-tw-border drag-handler",
                                                        if (getItemDisabled(item as UTSJSONObject)) {
                                                            "drag-handler--disabled"
                                                        } else {
                                                            ""
                                                        }
                                                    ))), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to if (getItemDisabled(item as UTSJSONObject)) {
                                                            "#94a3b8"
                                                        } else {
                                                            "#64748b"
                                                        }
                                                        , "size" to "20"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    ), 2)
                                                )
                                            }
                                            ), "default" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val item = slotProps["item"]
                                                return _uA(
                                                    _cE("view", _uM("class" to _nC(_uA(
                                                        "weapp-tw-border drag-item",
                                                        if (getItemDisabled(item as UTSJSONObject)) {
                                                            "drag-item--disabled"
                                                        } else {
                                                            ""
                                                        }
                                                    ))), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border drag-item-text"), _tD(getLabel(item as UTSJSONObject)), 1)
                                                    ), 2)
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "initial-list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), " up-dragsort 在 App 端（安卓/iOS/鸿蒙）使用原生 touch 手势实现，H5/小程序沿用 movable-view 原实现；不传 handler 插槽时按住整项任意位置即可拖拽排序，传入 handler 插槽并配合 handle-drag 属性则仅手柄可拖拽，handler-position 属性可控制手柄在左/右；支持 vertical / horizontal / all 三种方向，drag-end 事件返回排序后的列表。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                        ))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "drag-item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "height" to 56, "paddingLeft" to 12, "paddingRight" to 52, "backgroundColor" to "#ffffff", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#eef2f7")), "drag-item--disabled" to _pS(_uM("backgroundColor" to "#f8fafc")), "drag-item-text" to _pS(_uM("fontSize" to 14, "color" to "#1e293b")), "drag-item-index" to _pS(_uM("marginLeft" to "auto", "fontSize" to 12, "color" to "#94a3b8")), "drag-handler" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "width" to 44, "height" to 56, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#eef2f7", "borderLeftWidth" to 1, "borderLeftStyle" to "solid", "borderLeftColor" to "#e2e8f0")), "drag-handler--left" to _pS(_uM("left" to 0, "right" to "auto", "borderLeftWidth" to 0, "borderRightWidth" to 1, "borderRightStyle" to "solid", "borderRightColor" to "#e2e8f0")), "drag-item--left" to _pS(_uM("paddingLeft" to 52, "paddingRight" to 12)), "drag-handler--disabled" to _pS(_uM("backgroundColor" to "#e2e8f0")), "drag-handler-h" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "width" to 40, "height" to 56, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#dbeafe", "borderLeftWidth" to 1, "borderLeftStyle" to "solid", "borderLeftColor" to "#bfdbfe", "borderTopLeftRadius" to 0, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 0)), "drag-item-h" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "width" to 140, "height" to 56, "marginRight" to 8, "backgroundColor" to "#eff6ff", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#bfdbfe", "borderRightColor" to "#bfdbfe", "borderBottomColor" to "#bfdbfe", "borderLeftColor" to "#bfdbfe", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "boxSizing" to "border-box")), "drag-item-grid" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "width" to 96, "height" to 96, "backgroundColor" to "#f1f5f9", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "boxSizing" to "border-box")), "drag-item-grid-text" to _pS(_uM("fontSize" to 13, "color" to "#334155")), "drag-item-grid-index" to _pS(_uM("marginTop" to 6, "fontSize" to 11, "color" to "#94a3b8")), "drag-handler-grid" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "width" to 28, "height" to 28, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#e2e8f0", "borderTopLeftRadius" to 0, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 0, "borderBottomLeftRadius" to 8)))
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
