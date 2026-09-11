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
open class GenSrcSubUviewUltraDemosTreeTree : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosTreeTree) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosTreeTree
            val _cache = __ins.renderCache
            val treeData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "label" to "一级菜单 1", "children" to _uA(
                _uO("id" to 11, "label" to "二级菜单 1-1"),
                _uO("id" to 12, "label" to "二级菜单 1-2", "children" to _uA(
                    _uO("id" to 121, "label" to "三级菜单 1-2-1"),
                    _uO("id" to 122, "label" to "三级菜单 1-2-2")
                ))
            )), _uO("id" to 2, "label" to "一级菜单 2", "children" to _uA(
                _uO("id" to 21, "label" to "二级菜单 2-1")
            )), _uO("id" to 3, "label" to "一级菜单 3（叶子节点）")))
            val customTreeProps = ref<UTSJSONObject>(_uO("label" to "name", "children" to "list", "nodeKey" to "key", "disabled" to "forbidden"))
            val customData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("key" to "c1", "name" to "自定义字段 1", "forbidden" to false, "list" to _uA(
                _uO("key" to "c1-1", "name" to "自定义字段 1-1", "forbidden" to false),
                _uO("key" to "c1-2", "name" to "自定义字段 1-2（禁用）", "forbidden" to true)
            )), _uO("key" to "c2", "name" to "自定义字段 2", "forbidden" to false)))
            val eventLog = ref<String>("点击节点或勾选复选框试试")
            val apiLog = ref<String>("")
            fun gen_getNodeLabel_fn(node: UTSJSONObject): String {
                val label = node["label"]
                return if (label == null) {
                    ""
                } else {
                    label.toString()
                }
            }
            val getNodeLabel = ::gen_getNodeLabel_fn
            fun gen_onNodeClick_fn(node: UTSJSONObject) {
                eventLog.value = "node-click：" + getNodeLabel(node)
            }
            val onNodeClick = ::gen_onNodeClick_fn
            fun gen_onNodeExpand_fn(node: UTSJSONObject) {
                eventLog.value = "node-expand：" + getNodeLabel(node)
            }
            val onNodeExpand = ::gen_onNodeExpand_fn
            fun gen_onNodeCollapse_fn(node: UTSJSONObject) {
                eventLog.value = "node-collapse：" + getNodeLabel(node)
            }
            val onNodeCollapse = ::gen_onNodeCollapse_fn
            fun gen_onCheckChange_fn(node: UTSJSONObject, checked: Boolean) {
                eventLog.value = "check-change：" + getNodeLabel(node) + " => " + (if (checked) {
                    "勾选"
                } else {
                    "取消勾选"
                }
                )
            }
            val onCheckChange = ::gen_onCheckChange_fn
            val treeRef = ref(null as ComponentPublicInstance?)
            fun gen_onSetCheckedKeys_fn() {
                val tree = treeRef.value
                if (tree != null) {
                    tree.`$callMethod`("setCheckedKeys", _uA<Any>(1, 11), false)
                    apiLog.value = "已调用 setCheckedKeys([1, 11])"
                }
            }
            val onSetCheckedKeys = ::gen_onSetCheckedKeys_fn
            fun gen_onGetCheckedKeys_fn() {
                val tree = treeRef.value
                if (tree != null) {
                    val keys = tree.`$callMethod`("getCheckedKeys", false) as UTSArray<String>
                    apiLog.value = "getCheckedKeys() => " + keys.join(", ")
                }
            }
            val onGetCheckedKeys = ::gen_onGetCheckedKeys_fn
            fun gen_onSetCurrentKey_fn() {
                val tree = treeRef.value
                if (tree != null) {
                    tree.`$callMethod`("setCurrentKey", 21)
                    apiLog.value = "已调用 setCurrentKey(21)"
                }
            }
            val onSetCurrentKey = ::gen_onSetCurrentKey_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_tree = resolveEasyComponent("up-tree", GenUniModulesUviewUltraComponentsUpTreeUpTreeClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-tree 树形", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-tree 树形", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础用法（点击节点展开/收起）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value), null, 8, _uA(
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "默认展开全部")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value, "default-expand-all" to ""), null, 8, _uA(
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "默认展开指定节点 + 高亮当前节点")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value, "default-expanded-keys" to _uA(
                                                1,
                                                11
                                            ), "current-node-key" to 12, "highlight-current" to ""), null, 8, _uA(
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "复选框（父子级联勾选）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value, "show-checkbox" to ""), null, 8, _uA(
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "复选框（父子独立 checkStrictly）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value, "show-checkbox" to "", "check-strictly" to ""), null, 8, _uA(
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "手风琴模式（同时只展开一个）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value, "accordion" to ""), null, 8, _uA(
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "自定义字段（label/children/nodeKey/disabled）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to customData.value, "props" to customTreeProps.value), null, 8, _uA(
                                                "data",
                                                "props"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "事件监听")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("data" to treeData.value, "show-checkbox" to "", "onNodeClick" to onNodeClick, "onNodeExpand" to onNodeExpand, "onNodeCollapse" to onNodeCollapse, "onCheckChange" to onCheckChange), null, 8, _uA(
                                                "data"
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "ref 实例方法")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_tree, _uM("ref_key" to "treeRef", "ref" to treeRef, "data" to treeData.value, "show-checkbox" to "", "default-expand-all" to ""), null, 8, _uA(
                                                "data"
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border btn-row mt-_b10px_B"), _uA(
                                                _cV(_component_up_button, _uM("text" to "setCheckedKeys", "type" to "primary", "size" to "small", "class" to "demo-btn", "onClick" to onSetCheckedKeys)),
                                                _cV(_component_up_button, _uM("text" to "getCheckedKeys", "type" to "primary", "size" to "small", "class" to "demo-btn", "onClick" to onGetCheckedKeys)),
                                                _cV(_component_up_button, _uM("text" to "setCurrentKey", "type" to "primary", "size" to "small", "class" to "demo-btn", "onClick" to onSetCurrentKey))
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border log-text mt-_b10px_B"), _tD(apiLog.value), 1)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f8fafc", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "btn-row" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "demo-btn" to _pS(_uM("marginRight" to 10)))
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
