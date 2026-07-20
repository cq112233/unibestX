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
open class GenUniModulesUviewUltraComponentsUpCardUpCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var full: Boolean by `$props`
    open var title: String by `$props`
    open var titleColor: String by `$props`
    open var titleSize: Any by `$props`
    open var subTitle: String by `$props`
    open var subTitleColor: String by `$props`
    open var subTitleSize: Any by `$props`
    open var border: Boolean by `$props`
    open var index: Any by `$props`
    open var margin: String by `$props`
    open var borderRadius: Any by `$props`
    open var headStyle: Any by `$props`
    open var bodyStyle: Any by `$props`
    open var footStyle: Any by `$props`
    open var headBorderBottom: Boolean by `$props`
    open var footBorderTop: Boolean by `$props`
    open var thumb: String by `$props`
    open var thumbWidth: Any by `$props`
    open var thumbCircle: Boolean by `$props`
    open var padding: Any by `$props`
    open var paddingHead: Any by `$props`
    open var paddingBody: Any by `$props`
    open var paddingFoot: Any by `$props`
    open var showHead: Boolean by `$props`
    open var showFoot: Boolean by `$props`
    open var boxShadow: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCardUpCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCardUpCard
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val click = fun(){
                emit("click", props.index)
            }
            val headClick = fun(){
                emit("head-click", props.index)
            }
            val bodyClick = fun(){
                emit("body-click", props.index)
            }
            val footClick = fun(){
                emit("foot-click", props.index)
            }
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-card",
                    _uM("up-border" to _ctx.border, "up-card-full" to _ctx.full, "up-card--border" to (parseInt(_ctx.`$upGetPx`(_ctx.borderRadius)) > 0))
                )), "onClick" to withModifiers(click, _uA(
                    "stop"
                )), "style" to _nS(_uM("borderRadius" to _ctx.`$up`.addUnit(_ctx.borderRadius), "margin" to _ctx.margin, "boxShadow" to _ctx.boxShadow))), _uA(
                    if (isTrue(_ctx.showHead)) {
                        _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                            "up-card__head",
                            _uM("up-border-bottom" to _ctx.headBorderBottom)
                        )), "style" to _nS(_uA(
                            _uM("padding" to _ctx.`$up`.addUnit(if (_ctx.paddingHead != "") {
                                _ctx.paddingHead
                            } else {
                                _ctx.padding
                            })),
                            _ctx.headStyle
                        )), "onClick" to headClick), _uA(
                            if (_ctx.`$slots`["head"] == null) {
                                _cE("view", _uM("key" to 0, "class" to "up-flex up-row-between up-flex-between up-flex-items-center"), _uA(
                                    if (_ctx.title != "") {
                                        _cE("view", _uM("key" to 0, "class" to "up-card__head--left up-flex up-flex-items-center up-line-11"), _uA(
                                            if (isTrue(_ctx.thumb)) {
                                                _cE("image", _uM("key" to 0, "src" to _ctx.thumb, "class" to "up-card__head--left__thumb", "mode" to "aspectFill", "style" to _nS(_uM("height" to _ctx.`$up`.addUnit(_ctx.thumbWidth), "width" to _ctx.`$up`.addUnit(_ctx.thumbWidth), "borderRadius" to if (_ctx.thumbCircle) {
                                                    "50px"
                                                } else {
                                                    "4px"
                                                }))), null, 12, _uA(
                                                    "src"
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            },
                                            _cE("text", _uM("class" to "up-card__head--left__title up-line-1", "style" to _nS(_uM("fontSize" to _ctx.`$up`.addUnit(_ctx.titleSize), "color" to _ctx.titleColor))), _tD(_ctx.title), 5)
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    },
                                    if (_ctx.subTitle != "") {
                                        _cE("view", _uM("key" to 1, "class" to "up-card__head--right up-line-1"), _uA(
                                            _cE("text", _uM("class" to "up-card__head__title__text", "style" to _nS(_uM("fontSize" to _ctx.`$up`.addUnit(_ctx.subTitleSize), "color" to _ctx.subTitleColor))), _tD(_ctx.subTitle), 5)
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ))
                            } else {
                                renderSlot(_ctx.`$slots`, "head", _uM("key" to 1))
                            }
                        ), 6)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("onClick" to bodyClick, "class" to "up-card__body", "style" to _nS(_uA(
                        _uM("padding" to _ctx.`$upAddUnit`(if (_ctx.paddingBody != "") {
                            _ctx.paddingBody
                        } else {
                            _ctx.padding
                        }
                        )),
                        _ctx.bodyStyle
                    ))), _uA(
                        renderSlot(_ctx.`$slots`, "body")
                    ), 4),
                    if (isTrue(_ctx.showFoot)) {
                        _cE("view", _uM("key" to 1, "class" to _nC(_uA(
                            "up-card__foot",
                            _uM("up-border-top" to _ctx.footBorderTop)
                        )), "onClick" to footClick, "style" to _nS(_uA(
                            _uM("padding" to if (_ctx.`$slots`["foot"] != null) {
                                _ctx.`$upAddUnit`(if (_ctx.paddingFoot != "") {
                                    _ctx.paddingFoot
                                } else {
                                    _ctx.padding
                                })
                            } else {
                                0
                            }),
                            _ctx.footStyle
                        ))), _uA(
                            renderSlot(_ctx.`$slots`, "foot")
                        ), 6)
                    } else {
                        _cC("v-if", true)
                    }
                ), 6)
            }
        }
        var name = "up-card"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-card" to _pS(_uM("position" to "relative", "overflow" to "hidden", "fontSize" to "28rpx", "backgroundColor" to "#ffffff", "boxSizing" to "border-box")), "up-card-full" to _pS(_uM("!marginLeft" to 0, "!marginRight" to 0, "width" to "100%")), "up-card--border" to _pS(_uM("borderTopLeftRadius:after" to "16rpx", "borderTopRightRadius:after" to "16rpx", "borderBottomRightRadius:after" to "16rpx", "borderBottomLeftRadius:after" to "16rpx")), "up-card__head--left" to _pS(_uM("color" to "#303133")), "up-card__head--left__thumb" to _pS(_uM("marginRight" to "16rpx")), "up-card__head--left__title" to _pS(_uM("maxWidth" to "400rpx")), "up-card__head--right" to _pS(_uM("color" to "#909193", "marginLeft" to "16rpx")), "up-card__body" to _pS(_uM("color" to "#606266")), "up-card__foot" to _pS(_uM("color" to "#909193")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "head-click" to null, "body-click" to null, "foot-click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "full" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.full")), "title" to _uM("type" to "String", "default" to default__99.getString("card.title")), "titleColor" to _uM("type" to "String", "default" to default__99.getString("card.titleColor")), "titleSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__99.getString("card.titleSize")), "subTitle" to _uM("type" to "String", "default" to default__99.getString("card.subTitle")), "subTitleColor" to _uM("type" to "String", "default" to default__99.getString("card.subTitleColor")), "subTitleSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__99.getBoolean("card.subTitleSize")), "border" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.border")), "index" to _uM("type" to _uA(
            "Number",
            "String",
            "Object"
        ), "default" to default__99.getString("card.index")), "margin" to _uM("type" to "String", "default" to default__99.getString("card.margin")), "borderRadius" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__99.getString("card.borderRadius")), "headStyle" to _uM("default" to default__99.getAny("card.headStyle") as UTSJSONObject), "bodyStyle" to _uM("default" to default__99.getAny("card.bodyStyle") as UTSJSONObject), "footStyle" to _uM("default" to default__99.getAny("card.footStyle") as UTSJSONObject), "headBorderBottom" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.headBorderBottom")), "footBorderTop" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.footBorderTop")), "thumb" to _uM("type" to "String", "default" to default__99.getString("card.thumb")), "thumbWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__99.getString("card.thumbWidth")), "thumbCircle" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.thumbCircle")), "padding" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__99.getString("card.padding")), "paddingHead" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__99.getString("card.paddingHead")), "paddingBody" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__99.getString("card.paddingBody")), "paddingFoot" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__99.getString("card.paddingFoot")), "showHead" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.showHead")), "showFoot" to _uM("type" to "Boolean", "default" to default__99.getBoolean("card.showFoot")), "boxShadow" to _uM("type" to "String", "default" to default__99.getString("card.boxShadow"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "full",
            "title",
            "titleColor",
            "titleSize",
            "subTitle",
            "subTitleColor",
            "subTitleSize",
            "border",
            "index",
            "margin",
            "borderRadius",
            "headStyle",
            "bodyStyle",
            "footStyle",
            "headBorderBottom",
            "footBorderTop",
            "thumb",
            "thumbWidth",
            "thumbCircle",
            "padding",
            "paddingHead",
            "paddingBody",
            "paddingFoot",
            "showHead",
            "showFoot",
            "boxShadow"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
