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
open class GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {
            this.init()
        }
        , __ins)
        onMounted(fun() {
            if (this.parent != null) {
                this.parent?.`$callMethod`("updateFromChild")
            }
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.parentData
        }
        , fun() {})
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_text = resolveEasyComponent("up-text", GenUniModulesUviewUltraComponentsUpTextUpTextClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-steps-item",
            _uA(
                "up-steps-item--" + _ctx.parentData["direction"]
            )
        )), "ref" to "up-steps-item", "style" to _nS(_ctx.itemWidthStyle)), _uA(
            _cE("view", _uM("class" to _nC(_uA(
                "up-steps-item__line",
                _uA(
                    "up-steps-item__line--" + _ctx.parentData["direction"],
                    if ((_ctx.index < parseInt(_ctx.parentData["current"].toString()) && _ctx.parentData["activeColor"] == "#3c9cff")) {
                        "up-steps-item__line--active"
                    } else {
                        ""
                    }
                )
            )), "style" to _nS(_ctx.lineStyle)), null, 6),
            _cE("view", _uM("class" to _nC(_uA(
                "up-steps-item__line",
                _uA(
                    "up-steps-item__line--" + _ctx.parentData["direction"],
                    if (((_ctx.index - 1) < parseInt(_ctx.parentData["current"].toString()) && _ctx.parentData["activeColor"] == "#3c9cff")) {
                        "up-steps-item__line--active"
                    } else {
                        ""
                    }
                )
            )), "style" to _nS(_ctx.lineStyle2)), null, 6),
            _cE("view", _uM("class" to _nC(_uA(
                "up-steps-item__wrapper",
                _uA(
                    "up-steps-item__wrapper--" + _ctx.parentData["direction"],
                    if ((_ctx.parentData["dot"] != null && _ctx.parentData["dot"] as Boolean)) {
                        "up-steps-item__wrapper--" + _ctx.parentData["direction"] + "--dot"
                    } else {
                        ""
                    }
                )
            )), "style" to _nS(_ctx.itemStyleInner)), _uA(
                renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                    return _uA(
                        if (isTrue((_ctx.parentData["dot"] != null && _ctx.parentData["dot"] as Boolean))) {
                            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                "up-steps-item__wrapper__dot",
                                _uA(
                                    if ((_ctx.statusClass === "finish" || _ctx.statusClass === "process")) {
                                        "up-steps-item__wrapper__dot--active"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(_ctx.dotStyle)), null, 6)
                        } else {
                            if (isTrue(_ctx.parentData["activeIcon"] != "" || _ctx.parentData["inactiveIcon"] != "")) {
                                _cE("view", _uM("key" to 1, "class" to "up-steps-item__wrapper__icon"), _uA(
                                    _cV(_component_up_icon, _uM("name" to if (_ctx.index <= parseInt(_ctx.parentData["current"].toString())) {
                                        _ctx.parentData["activeIcon"]
                                    } else {
                                        _ctx.parentData["inactiveIcon"]
                                    }, "size" to _ctx.iconSize, "color" to if (_ctx.index <= parseInt(_ctx.parentData["current"].toString())) {
                                        if (_ctx.parentData["activeColor"] == "#3c9cff") {
                                            "primary"
                                        } else {
                                            _ctx.parentData["activeColor"]
                                        }
                                    } else {
                                        _ctx.parentData["inactiveColor"]
                                    }), null, 8, _uA(
                                        "name",
                                        "size",
                                        "color"
                                    ))
                                ))
                            } else {
                                _cE("view", _uM("key" to 2, "class" to _nC(_uA(
                                    _uA(
                                        if (_ctx.statusClass === "process") {
                                            "up-steps-item__wrapper__circle--active"
                                        } else {
                                            ""
                                        }
                                        ,
                                        if (_ctx.statusClass === "finish") {
                                            "up-steps-item__wrapper__circle--finish"
                                        } else {
                                            ""
                                        }
                                        ,
                                        if (_ctx.statusClass === "wait") {
                                            "up-steps-item__wrapper__circle--wait"
                                        } else {
                                            ""
                                        }
                                        ,
                                        if (_ctx.statusClass === "error") {
                                            "up-steps-item__wrapper__circle--error"
                                        } else {
                                            ""
                                        }
                                    ),
                                    "up-steps-item__wrapper__circle"
                                )), "style" to _nS(_ctx.circleStyle)), _uA(
                                    if (isTrue(_ctx.statusClass === "process" || _ctx.statusClass === "wait")) {
                                        _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                                            "up-steps-item__wrapper__circle__text",
                                            _uA(
                                                if (_ctx.statusClass === "process") {
                                                    "up-steps-item__wrapper__circle__text--active"
                                                } else {
                                                    ""
                                                }
                                            )
                                        )), "style" to _nS(_ctx.circleTextStyle)), _tD(_ctx.index + 1), 7)
                                    } else {
                                        _cV(_component_up_icon, _uM("key" to 1, "color" to if (_ctx.statusClass === "error") {
                                            "error"
                                        } else {
                                            if (_ctx.parentData["activeColor"] == "#3c9cff") {
                                                "primary"
                                            } else {
                                                _ctx.parentData["activeColor"]
                                            }
                                        }
                                        , "size" to "12", "name" to if (_ctx.statusClass === "error") {
                                            "close"
                                        } else {
                                            "checkmark"
                                        }
                                        ), null, 8, _uA(
                                            "color",
                                            "name"
                                        ))
                                    }
                                ), 6)
                            }
                        }
                    )
                }
                )
            ), 6),
            _cE("view", _uM("class" to _nC(_uA(
                "up-steps-item__content",
                _uA(
                    "up-steps-item__content--" + _ctx.parentData["direction"],
                    if (parseInt(_ctx.parentData["current"].toString()) == _ctx.index) {
                        "up-steps-item__content--current"
                    } else {
                        ""
                    }
                )
            )), "style" to _nS(_ctx.contentStyle)), _uA(
                renderSlot(_ctx.`$slots`, "content", _uM("index" to _ctx.index)),
                if (_ctx.`$slots`["content"] == null) {
                    _cE(Fragment, _uM("key" to 0), _uA(
                        _cE("view", _uM("class" to "up-steps-item__content__title"), _uA(
                            renderSlot(_ctx.`$slots`, "title"),
                            if (_ctx.`$slots`["title"] == null) {
                                _cV(_component_up_text, _uM("key" to 0, "text" to _ctx.title, "lineHeight" to "20px", "color" to if (parseInt(_ctx.parentData["current"].toString()) == _ctx.index) {
                                    if (_ctx.parentData["activeColor"] == "#3c9cff") {
                                        ""
                                    } else {
                                        (_ctx.parentData["activeColor"] as String)
                                    }
                                } else {
                                    (_ctx.parentData["inactiveColor"] as String)
                                }, "type" to if (parseInt(_ctx.parentData["current"].toString()) == _ctx.index && _ctx.parentData["activeColor"] == "#3c9cff") {
                                    "primary"
                                } else {
                                    "default"
                                }, "size" to if (parseInt(_ctx.parentData["current"].toString()) == _ctx.index) {
                                    14
                                } else {
                                    13
                                }), null, 8, _uA(
                                    "text",
                                    "color",
                                    "type",
                                    "size"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        )),
                        _cE("view", _uM("class" to "up-steps-item__content__desc"), _uA(
                            renderSlot(_ctx.`$slots`, "desc"),
                            if (_ctx.`$slots`["desc"] == null) {
                                _cV(_component_up_text, _uM("key" to 0, "text" to _ctx.desc, "type" to "tips", "size" to "12"), null, 8, _uA(
                                    "text"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ))
                    ), 64)
                } else {
                    _cC("v-if", true)
                }
            ), 6)
        ), 6)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: Any by `$props`
    open var desc: Any by `$props`
    open var iconSize: Any by `$props`
    open var error: Boolean by `$props`
    open var itemStyle: UTSJSONObject by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var index: Number by `$data`
    open var childLength: Number by `$data`
    open var showLine: Boolean by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var itemWidthStyle: Any by `$data`
    open var lineStyle2: UTSJSONObject by `$data`
    open var lineStyle: UTSJSONObject by `$data`
    open var dotStyle: Any by `$data`
    open var circleStyle: Any by `$data`
    open var circleTextStyle: Any by `$data`
    open var itemStyleInner: Any by `$data`
    open var statusClass: String by `$data`
    open var statusColor: String by `$data`
    open var contentStyle: Any by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "index" to 0, "childLength" to 0, "showLine" to false, "parentData" to _uO("direction" to "row", "current" to 0, "activeColor" to "", "inactiveColor" to "", "activeIcon" to "", "inactiveIcon" to "", "dot" to false), "itemWidthStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 121, 11))
            if (this.parentData["direction"].toString() === "row" && this.childLength > 0) {
                style["width"] = ((100.0 as Number) / this.childLength).toString(10) + "%"
            }
            return style
        }
        ), "lineStyle2" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 130, 11))
            if (this.parentData["direction"].toString() === "row") {
                if (this.index == 0) {
                    style["display"] = "none"
                } else {
                    style["left"] = "0px"
                    style["right"] = "50%"
                    style["width"] = "auto"
                }
            } else {
                if (this.index == 0) {
                    style["display"] = "none"
                } else {
                    style["top"] = "0px"
                    style["bottom"] = "50%"
                    style["left"] = "10px"
                    style["height"] = "auto"
                    style["width"] = "1px"
                }
            }
            if (this.error as Boolean) {
                style["backgroundColor"] = color["error"]
            } else if ((this.index - 1) < parseInt(this.parentData["current"].toString())) {
                if (this.parentData["activeColor"] != "#3c9cff") {
                    style["backgroundColor"] = this.parentData["activeColor"]
                }
            } else {
                style["backgroundColor"] = this.parentData["inactiveColor"]
            }
            return style
        }
        ), "lineStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 167, 11))
            if (this.parentData["direction"].toString() === "row") {
                if (this.index == this.childLength - 1) {
                    style["display"] = "none"
                } else {
                    style["left"] = "50%"
                    style["right"] = "0px"
                    style["width"] = "auto"
                }
            } else {
                if (this.index == this.childLength - 1) {
                    style["display"] = "none"
                } else {
                    style["top"] = "50%"
                    style["bottom"] = "0px"
                    style["left"] = "10px"
                    style["height"] = "auto"
                    style["width"] = "1px"
                }
            }
            if (this.parent != null && this.parent!!.`$data`["children"] != null && this.index + 1 < (this.parent!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).length) {
                val nextChild = (this.parent!!.`$data`["children"] as UTSArray<ComponentPublicInstance>)[this.index + 1]
                if (nextChild != null && nextChild.`$props`["error"] as Boolean) {
                    style["backgroundColor"] = color["error"]
                } else if (this.index < parseInt(this.parentData["current"].toString())) {
                    if (this.parentData["activeColor"] != "#3c9cff") {
                        style["backgroundColor"] = this.parentData["activeColor"]
                    }
                } else {
                    style["backgroundColor"] = this.parentData["inactiveColor"]
                }
            }
            return style
        }
        ), "dotStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 212, 11))
            val activeColor = this.parentData["activeColor"] as String
            if (this.statusClass === "finish" || this.statusClass === "process") {
                if (activeColor != "#3c9cff") {
                    style["backgroundColor"] = activeColor
                }
            } else {
                style["backgroundColor"] = this.parentData["inactiveColor"]
            }
            return style
        }
        ), "circleStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 224, 11))
            val activeColor = this.parentData["activeColor"] as String
            val inactiveColor = this.parentData["inactiveColor"] as String
            if (activeColor != "#3c9cff" || inactiveColor != "#969799") {
                if (this.statusClass === "process") {
                    style["backgroundColor"] = activeColor
                    style["borderColor"] = activeColor
                } else if (this.statusClass === "finish") {
                    style["backgroundColor"] = "rgba(0, 0, 0, 0)"
                    style["borderColor"] = activeColor
                } else if (this.statusClass === "wait") {
                    style["backgroundColor"] = "rgba(0, 0, 0, 0)"
                    style["borderColor"] = inactiveColor
                } else if (this.statusClass === "error") {
                    style["backgroundColor"] = "rgba(0, 0, 0, 0)"
                    style["borderColor"] = color["error"]
                }
            }
            return style
        }
        ), "circleTextStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 246, 11))
            val activeColor = this.parentData["activeColor"] as String
            val inactiveColor = this.parentData["inactiveColor"] as String
            if (activeColor != "#3c9cff" || inactiveColor != "#969799") {
                if (this.statusClass === "process") {
                    style["color"] = "#ffffff"
                } else {
                    style["color"] = inactiveColor
                }
            }
            return style
        }
        ), "itemStyleInner" to computed<Any>(fun(): Any {
            return UTSJSONObject.assign(_uO(), this.itemStyle)
        }
        ), "statusClass" to computed<String>(fun(): String {
            var index = this.index
            var error = this.error
            var current = parseInt(this.parentData["current"].toString())
            if (current == index) {
                return if (error == true) {
                    "error"
                } else {
                    "process"
                }
            } else if (error) {
                return "error"
            } else if (current > index) {
                return "finish"
            } else {
                return "wait"
            }
        }
        ), "statusColor" to computed<String>(fun(): String {
            var colorTmp = "#f1f1f1"
            when (this.statusClass) {
                "finish" -> 
                    colorTmp = this.parentData["activeColor"] as String
                "error" -> 
                    colorTmp = color["error"] as String
                "process" -> 
                    colorTmp = if (this.parentData["dot"] as Boolean) {
                        this.parentData["activeColor"] as String
                    } else {
                        "transparent"
                    }
                else -> 
                    colorTmp = this.parentData["inactiveColor"] as String
            }
            return colorTmp
        }
        ), "contentStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 299, 11))
            if (this.parentData["direction"].toString() === "column") {
                style["marginLeft"] = if (this.parentData["dot"].toString() == "true") {
                    "2px"
                } else {
                    "6px"
                }
                style["marginTop"] = if (this.parentData["dot"].toString() == "true") {
                    "0px"
                } else {
                    "6px"
                }
            } else {
                style["marginTop"] = if (this.parentData["dot"].toString() == "true") {
                    "2px"
                } else {
                    "6px"
                }
                style["marginLeft"] = if (this.parentData["dot"].toString() == "true") {
                    "2px"
                } else {
                    "6px"
                }
            }
            return style
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
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.updateParentData()
        if (this.parent == null) {
            return uni.UNI5198058.error("up-steps-item必须要搭配up-steps组件使用")
        }
        (this.parent!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).forEach(fun(child: ComponentPublicInstance, index: Number){
            if (child == this) {
                this.index = index
            }
        }
        )
        this.childLength = (this.parent!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).length
    }
    open var updateParentData = ::gen_updateParentData_fn
    open fun gen_updateParentData_fn() {
        this.getParentData("up-steps")
    }
    open var updateFromParent = ::gen_updateFromParent_fn
    open fun gen_updateFromParent_fn() {
        this.init()
    }
    companion object {
        var name = "up-steps-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-steps-item" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row")), "up-steps-item--row" to _pS(_uM("flexDirection" to "column", "alignItems" to "center", "position" to "relative")), "up-steps-item--column" to _pS(_uM("position" to "relative", "flexDirection" to "row", "justifyContent" to "flex-start", "paddingBottom" to 5)), "up-steps-item__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "position" to "relative", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 50, "borderTopRightRadius" to 50, "borderBottomRightRadius" to 50, "borderBottomLeftRadius" to 50)), "up-steps-item__wrapper--column" to _pS(_uM("width" to 20, "height" to 20)), "up-steps-item__wrapper--column--dot" to _pS(_uM("height" to 20, "width" to 20)), "up-steps-item__wrapper--row" to _pS(_uM("width" to 20, "height" to 20)), "up-steps-item__wrapper--row--dot" to _pS(_uM("width" to 20, "height" to 20)), "up-steps-item__wrapper__circle" to _pS(_uM("width" to 20, "height" to 20, "boxSizing" to "border-box", "flexShrink" to 0, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-steps-item__wrapper__circle--wait" to _pS(_uM("borderTopColor" to "#909193", "borderRightColor" to "#909193", "borderBottomColor" to "#909193", "borderLeftColor" to "#909193", "backgroundColor" to "rgba(0,0,0,0)")), "up-steps-item__wrapper__circle--active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)", "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)")), "up-steps-item__wrapper__circle--finish" to _pS(_uM("borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)", "backgroundColor" to "rgba(0,0,0,0)")), "up-steps-item__wrapper__circle--error" to _pS(_uM("borderTopColor" to "#f56c6c", "borderRightColor" to "#f56c6c", "borderBottomColor" to "#f56c6c", "borderLeftColor" to "#f56c6c", "backgroundColor" to "rgba(0,0,0,0)")), "up-steps-item__wrapper__circle__text" to _pS(_uM("color" to "#909193", "fontSize" to 11, "textAlign" to "center")), "up-steps-item__wrapper__circle__text--active" to _pS(_uM("color" to "#ffffff")), "up-steps-item__wrapper__dot" to _pS(_uM("width" to 10, "height" to 10, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#606266")), "up-steps-item__wrapper__dot--active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-steps-item__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-steps-item__content--row" to _pS(_uM("flexDirection" to "column", "alignItems" to "center")), "up-steps-item__content--column" to _pS(_uM("flexDirection" to "column", "marginLeft" to 6)), "up-steps-item__line" to _pS(_uM("position" to "absolute", "backgroundColor" to "#909193")), "up-steps-item__line--active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-steps-item__line--row" to _pS(_uM("top" to 10, "height" to 1)), "up-steps-item__line--column" to _pS(_uM("width" to 1, "left" to 10)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__3["title"]), "desc" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__3["desc"]), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__3["iconSize"]), "error" to _uM("type" to "Boolean", "default" to crtProp__3["error"]), "itemStyle" to _uM("type" to _uA(
            "UTSJSONObject"
        ), "default" to _uO())))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "desc",
            "iconSize",
            "error",
            "itemStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
