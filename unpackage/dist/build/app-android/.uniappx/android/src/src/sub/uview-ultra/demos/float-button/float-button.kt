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
open class GenSrcSubUviewUltraDemosFloatButtonFloatButton : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosFloatButtonFloatButton) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosFloatButtonFloatButton
            val _cache = __ins.renderCache
            val basicClickCount = ref(0)
            val eventLog = ref<String>("点击任意悬浮按钮，事件会打印在这里")
            val menuList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("name" to "star-fill", "backgroundColor" to "#ff9900", "color" to "#ffffff"), _uO("name" to "chat-fill", "backgroundColor" to "#3c9cff", "color" to "#ffffff"), _uO("name" to "share-fill", "backgroundColor" to "#19be6b", "color" to "#ffffff")))
            fun gen_log_fn(message: String): Unit {
                eventLog.value = message
            }
            val log = ::gen_log_fn
            fun gen_onBasicClick_fn(): Unit {
                basicClickCount.value = basicClickCount.value + 1
                log("click => 基础按钮被点击，第 " + basicClickCount.value + " 次")
            }
            val onBasicClick = ::gen_onBasicClick_fn
            fun gen_onMenuClick_fn(): Unit {
                log("click => 菜单按钮展开 / 收起")
            }
            val onMenuClick = ::gen_onMenuClick_fn
            fun gen_onCustomClick_fn(): Unit {
                log("click => 自定义样式按钮被点击")
            }
            val onCustomClick = ::gen_onCustomClick_fn
            fun gen_onDragButtonClick_fn(): Unit {
                log("click => 可拖动按钮被点击（拖动不会触发这一条）")
            }
            val onDragButtonClick = ::gen_onDragButtonClick_fn
            fun gen_onItemClick_fn(item: UTSJSONObject): Unit {
                val index = item.getNumber("index") ?: 0
                val name = item.getString("name") ?: ""
                log("item-click => index=" + index + " name=" + name)
            }
            val onItemClick = ::gen_onItemClick_fn
            return fun(): Any? {
                val _component_up_float_button = resolveEasyComponent("up-float-button", GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButtonClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-float-button 悬浮按钮", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-float-button 悬浮按钮", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "组件说明"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), "up-float-button 通过 position: fixed 固定在屏幕上，常用于承载「回到顶部 / 客服 / 快速入口」这类全局操作。isMenu 为 true 时，点击主按钮会展开 list 里的子按钮。")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "1. 基础用法（top 定位）"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), "不传 isMenu 时点击只触发 click 事件。本例用 top 而不是 bottom 指定位置，按钮在右上角。"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text mt-_b6px_B"), "click 次数：" + _tD(basicClickCount.value), 1)
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "2. 菜单模式（isMenu + list）"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), "点击主按钮展开 / 收起，主按钮上的 plus 图标会旋转 45° 变成关闭样式。子项点击触发 item-click，载荷是原对象的浅拷贝并附加 index。")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "3. 自定义尺寸与配色"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), "width / height / backgroundColor / color 可整体改外观，默认插槽可以换成任意内容（这里放了一个 edit-pen 图标）。"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text mt-_b6px_B"), "注意：borderColor 只写入 border-color，组件未设置 border-width / border-style，所以单传 borderColor 不会出现边框。")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "4. 可拖动（draggable）"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), "打开 draggable 后，按住主按钮可以拖到屏幕任意位置，自动夹在窗口内。初始位置仍然由 top / right / bottom 换算而来，拖过一次之后就归用户了。"),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text mt-_b6px_B"), "橙色那个就是。拖动会抑制 click —— 位移超过 8px 就当成拖动，不再触发 click / 不展开菜单。")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "事件日志"),
                                            _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                            ))
                                        ))
                                    )),
                                    _cV(_component_up_float_button, _uM("top" to "150px", "right" to "30px", "onClick" to onBasicClick)),
                                    _cV(_component_up_float_button, _uM("bottom" to "190px", "right" to "30px", "is-menu" to true, "list" to menuList.value, "onClick" to onMenuClick, "onItemClick" to onItemClick), null, 8, _uA(
                                        "list"
                                    )),
                                    _cV(_component_up_float_button, _uM("bottom" to "40px", "right" to "30px", "background-color" to "#19be6b", "color" to "#ffffff", "width" to "60px", "height" to "60px", "onClick" to onCustomClick), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cV(_component_up_icon, _uM("name" to "edit-pen", "color" to "#ffffff", "size" to "26"))
                                        )
                                    }
                                    ), "_" to 1)),
                                    _cV(_component_up_float_button, _uM("top" to "300px", "right" to "30px", "background-color" to "#f59e0b", "color" to "#ffffff", "draggable" to true, "onClick" to onDragButtonClick), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cV(_component_up_icon, _uM("name" to "pushpin", "color" to "#ffffff", "size" to "24"))
                                        )
                                    }
                                    ), "_" to 1))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "var(--theme-color, #0957de)")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")))
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
