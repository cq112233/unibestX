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
open class GenSrcPagesBasicComponentsIconDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsIconDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsIconDemoCard
            val _cache = __ins.renderCache
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                val _component_l_icon = resolveEasyComponent("l-icon", GenUniModulesLimeIconComponentsLIconLIconClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "字体图标示例"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "flex-row items-center justify-between py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_"), _uA(
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cE("view", _uM("class" to "w-6px h-6px rounded-3px bg-__3b82f6_ mr-8px")),
                                _cE("text", _uM("class" to "text-14px text-__475569_ font-medium"), "uni-icon")
                            )),
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cV(_component_uni_icons, _uM("type" to "contact", "size" to "26", "style" to _nS(_uM("color" to "#3b82f6", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "text-12px text-__94a3b8_"), "contact")
                            ))
                        )),
                        _cE("view", _uM("class" to "flex-row items-center justify-between py-12px"), _uA(
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cE("view", _uM("class" to "w-6px h-6px rounded-3px bg-__10b981_ mr-8px")),
                                _cE("view", _uM("class" to "flex-col"), _uA(
                                    _cE("text", _uM("class" to "text-14px text-__475569_ font-medium"), "lime-icon"),
                                    _cE("view", _uM("class" to "bg-__fff1f2_ rounded-4px py-2px px-6px mt-4px self-start border-width-1px border-style-solid border-color-__ffe4e6_"), _uA(
                                        _cE("text", _uM("class" to "text-10px text-__f43f5e_"), "SVG模式需授权收费")
                                    ))
                                ))
                            )),
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cV(_component_l_icon, _uM("name" to "circle", "size" to "24", "style" to _nS(_uM("color" to "#10b981", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "text-12px text-__94a3b8_"), "circle")
                            ))
                        )),
                        _cE("view", _uM("class" to "flex-row items-center justify-between py-12px border-top-width-1px border-top-style-solid border-top-color-__f1f5f9_"), _uA(
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cE("view", _uM("class" to "w-6px h-6px rounded-3px bg-__a855f7_ mr-8px")),
                                _cE("text", _uM("class" to "text-14px text-__475569_ font-medium"), "up-icon (uview-ultra)")
                            )),
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cV(_component_up_icon, _uM("name" to "setting", "size" to "24", "style" to _nS(_uM("color" to "#a855f7", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "text-12px text-__94a3b8_"), "setting")
                            ))
                        ))
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
                return _uM("bg-__10b981_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#10b981")), "bg-__3b82f6_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3b82f6")), "bg-__a855f7_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#a855f7")), "bg-__fff1f2_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fff1f2")), "border-bottom-color-__f1f5f9_" to _pS(_uM("borderBottomColor" to "#f1f5f9")), "border-bottom-style-solid" to _pS(_uM("borderBottomStyle" to "solid")), "border-bottom-width-1px" to _pS(_uM("borderBottomWidth" to 1)), "border-color-__ffe4e6_" to _pS(_uM("borderTopColor" to "#ffe4e6", "borderRightColor" to "#ffe4e6", "borderBottomColor" to "#ffe4e6", "borderLeftColor" to "#ffe4e6")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-top-color-__f1f5f9_" to _pS(_uM("borderTopColor" to "#f1f5f9")), "border-top-style-solid" to _pS(_uM("borderTopStyle" to "solid")), "border-top-width-1px" to _pS(_uM("borderTopWidth" to 1)), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-medium" to _pS(_uM("fontWeight" to 500)), "h-6px" to _pS(_uM("height" to 6)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "mr-8px" to _pS(_uM("marginRight" to 8)), "mt-4px" to _pS(_uM("marginTop" to 4)), "px-6px" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "py-12px" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "py-2px" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "rounded-3px" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "rounded-4px" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "self-start" to _pS(_uM("alignSelf" to "flex-start")), "text-__475569_" to _pS(_uM("color" to "#475569")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-__f43f5e_" to _pS(_uM("color" to "#f43f5e")), "text-10px" to _pS(_uM("fontSize" to 10)), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "w-6px" to _pS(_uM("width" to 6)))
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
