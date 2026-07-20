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
open class GenUniModulesUviewUltraComponentsUpAvatarGroupUpAvatarGroup : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var urls: UTSArray<String> by `$props`
    open var maxCount: Any by `$props`
    open var shape: String by `$props`
    open var mode: String by `$props`
    open var showMore: Boolean by `$props`
    open var size: Any by `$props`
    open var keyName: String by `$props`
    open var gap: Any by `$props`
    open var extraValue: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpAvatarGroupUpAvatarGroup) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpAvatarGroupUpAvatarGroup
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val showUrl = computed(fun(): UTSArray<String> {
                return props.urls.slice(0, parseInt(props.maxCount.toString()))
            }
            )
            val textStr = computed(fun(): String {
                var str = if (props.extraValue.toString() != "") {
                    props.extraValue.toString()
                } else {
                    (props.urls.length - showUrl.value.length).toString(10)
                }
                return "+" + str
            }
            )
            val src = fun(item: Any): String {
                if (UTSAndroid.`typeof`(item) == "object") {
                    var item1 = item as UTSJSONObject
                    return if ((props.keyName != "" && item1.getString(props.keyName.toString()) != null)) {
                        item1.getString(props.keyName.toString())!!
                    } else {
                        item1.getString("url")!!
                    }
                } else {
                    return item.toString()
                }
            }
            val clickHandler = fun(){
                emit("showMore")
            }
            return fun(): Any? {
                val _component_up_avatar = resolveEasyComponent("up-avatar", GenUniModulesUviewUltraComponentsUpAvatarUpAvatarClass)
                val _component_up_text = resolveEasyComponent("up-text", GenUniModulesUviewUltraComponentsUpTextUpTextClass)
                return _cE("view", _uM("class" to "up-avatar-group"), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(unref(showUrl), fun(item, index, __index, _cached): Any {
                        return _cE("view", _uM("class" to "up-avatar-group__item", "key" to index, "style" to _nS(_uM("marginLeft" to if (index == 0) {
                            0
                        } else {
                            _ctx.`$upAddUnit`(0 - parseFloat(_ctx.size.toString()) * parseFloat(_ctx.gap.toString()))
                        }
                        ))), _uA(
                            _cV(_component_up_avatar, _uM("size" to _ctx.size, "shape" to _ctx.shape, "mode" to _ctx.mode, "src" to src(item)), null, 8, _uA(
                                "size",
                                "shape",
                                "mode",
                                "src"
                            )),
                            if (isTrue(_ctx.showMore && index == unref(showUrl).length - 1 && (_ctx.urls.length > parseInt(_ctx.maxCount.toString()) || parseInt(_ctx.extraValue.toString()) > 0))) {
                                _cE("view", _uM("key" to 0, "class" to "up-avatar-group__item__show-more", "onClick" to clickHandler), _uA(
                                    _cV(_component_up_text, _uM("color" to "#ffffff", "size" to (parseInt(_ctx.size.toString()) * 0.4), "text" to unref(textStr), "align" to "center", "style" to _nS(_uM("justifyContent" to "center"))), null, 8, _uA(
                                        "size",
                                        "text",
                                        "style"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ), 4)
                    }
                    ), 128)
                ))
            }
        }
        var name = "up-avatar-group"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-avatar-group" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-avatar-group__item" to _pS(_uM("marginLeft" to -10, "position" to "relative")), "up-avatar-group__item--no-indent" to _pS(_uM("marginLeft" to 0)), "up-avatar-group__item__show-more" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "left" to 0, "right" to 0, "backgroundColor" to "rgba(0,0,0,0.3)", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("showMore" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "urls" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return default__40.getArray<String>("avatarGroup.urls") ?: _uA()
        }
        ), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__40.getNumber("avatarGroup.maxCount")
        }
        ), "shape" to _uM("type" to "String", "default" to fun(): String? {
            return default__40.getString("avatarGroup.shape")
        }
        ), "mode" to _uM("type" to "String", "default" to fun(): String? {
            return default__40.getString("avatarGroup.mode")
        }
        ), "showMore" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__40.getBoolean("avatarGroup.showMore")
        }
        ), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__40.getNumber("avatarGroup.size")
        }
        ), "keyName" to _uM("type" to "String", "default" to fun(): String? {
            return default__40.getString("avatarGroup.keyName")
        }
        ), "gap" to _uM("type" to _uA(
            "String",
            "Number"
        ), "validator" to fun(value: Any): Boolean {
            return parseFloat(value.toString()) >= 0 && parseFloat(value.toString()) <= 1
        }
        , "default" to fun(): Number? {
            return default__40.getNumber("avatarGroup.gap")
        }
        ), "extraValue" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to fun(): Number? {
            return default__40.getNumber("avatarGroup.extraValue")
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "urls",
            "maxCount",
            "shape",
            "mode",
            "showMore",
            "size",
            "keyName",
            "gap",
            "extraValue"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
