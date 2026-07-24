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
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
open class GenSrcSubUviewUltraDemosIndexListIndexList : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosIndexListIndexList) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosIndexListIndexList
            val _cache = __ins.renderCache
            val indexList = ref(_uA(
                "A",
                "B",
                "C",
                "D",
                "F",
                "G",
                "H",
                "J",
                "L",
                "M",
                "N",
                "Q",
                "R",
                "S",
                "T",
                "W",
                "X",
                "Y",
                "Z"
            ))
            val itemArr = ref(_uA(
                _uA(
                    "阿卡丽",
                    "阿木木",
                    "阿里"
                ),
                _uA(
                    "白起",
                    "百里守约",
                    "百里玄策",
                    "扁鹊"
                ),
                _uA(
                    "曹操",
                    "成吉思汗",
                    "程咬金"
                ),
                _uA(
                    "妲己",
                    "大乔",
                    "狄仁杰",
                    "貂蝉",
                    "达摩"
                ),
                _uA(
                    "范海辛",
                    "飞天"
                ),
                _uA(
                    "高渐离",
                    "公孙离",
                    "关羽",
                    "宫本武藏",
                    "干将莫邪"
                ),
                _uA(
                    "韩信",
                    "后羿",
                    "花木兰",
                    "黄忠"
                ),
                _uA(
                    "姜子牙",
                    "橘右京"
                ),
                _uA(
                    "兰陵王",
                    "老夫子",
                    "李白",
                    "李元芳",
                    "刘邦",
                    "刘备",
                    "刘禅",
                    "吕布",
                    "露娜",
                    "鲁班七号"
                ),
                _uA(
                    "马可波罗",
                    "梦奇",
                    "明世隐",
                    "墨子",
                    "芈月"
                ),
                _uA(
                    "哪吒",
                    "娜可露露",
                    "牛魔",
                    "女娲"
                ),
                _uA(
                    "奇迹暖暖",
                    "青雉"
                ),
                _uA(
                    "任逍遥",
                    "瑞文"
                ),
                _uA(
                    "孙膑",
                    "孙尚香",
                    "孙悟空",
                    "苏烈",
                    "沈梦溪"
                ),
                _uA(
                    "太乙真人",
                    "提莫"
                ),
                _uA(
                    "王昭君",
                    "武则天",
                    "项羽"
                ),
                _uA(
                    "夏侯惇",
                    "项羽",
                    "小乔"
                ),
                _uA(
                    "雅典娜",
                    "亚瑟",
                    "杨戬",
                    "杨玉环",
                    "瑶",
                    "虞姬",
                    "嬴政",
                    "元歌"
                ),
                _uA(
                    "张飞",
                    "张良",
                    "赵云",
                    "甄姬",
                    "钟馗",
                    "钟无艳",
                    "周瑜",
                    "庄周",
                    "诸葛亮",
                    "猪八戒"
                )
            ))
            val windowHeight = ref(uni_getWindowInfo().windowHeight)
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_index_anchor = resolveEasyComponent("up-index-anchor", GenUniModulesUviewUltraComponentsUpIndexAnchorUpIndexAnchorClass)
                val _component_up_index_item = resolveEasyComponent("up-index-item", GenUniModulesUviewUltraComponentsUpIndexItemUpIndexItemClass)
                val _component_up_index_list = resolveEasyComponent("up-index-list", GenUniModulesUviewUltraComponentsUpIndexListUpIndexListClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-index-list 索引列表"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_", "style" to _nS(_uM("height" to ("" + windowHeight.value + "px")))), _uA(
                                    _cV(_component_NavBar, _uM("title" to "IndexList 索引列表", "auto-back" to true)),
                                    _cE("view", _uM("class" to "flex-1 relative", "style" to _nS(_uM("flex" to "1"))), _uA(
                                        _cV(_component_up_index_list, _uM("style" to _nS(_uM("flex" to "1")), "index-list" to indexList.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cE(Fragment, null, RenderHelpers.renderList(itemArr.value, fun(item, index, __index, _cached): Any {
                                                    return _cV(_component_up_index_item, _uM("key" to index), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_index_anchor, _uM("text" to indexList.value[index]), null, 8, _uA(
                                                                "text"
                                                            )),
                                                            _cE(Fragment, null, RenderHelpers.renderList(item, fun(cell, cellIndex, __index, _cached): Any {
                                                                return _cE("view", _uM("key" to cellIndex, "class" to "list-cell"), _uA(
                                                                    _cE("text", _uM("class" to "list-item-text"), _tD(cell), 1)
                                                                ))
                                                            }
                                                            ), 128)
                                                        )
                                                    }
                                                    ), "_" to 2), 1024)
                                                }
                                                ), 128)
                                            )
                                        }
                                        ), "_" to 1), 8, _uA(
                                            "style",
                                            "index-list"
                                        ))
                                    ), 4)
                                ), 4)
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
                return _uM("bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "relative" to _pS(_uM("position" to "relative")), "page-container" to _pS(_uM("display" to "flex", "flexDirection" to "column")), "list-cell" to _pS(_uM("display" to "flex", "boxSizing" to "border-box", "width" to "100%", "paddingTop" to 10, "paddingRight" to 12, "paddingBottom" to 10, "paddingLeft" to 12, "overflow" to "hidden", "backgroundColor" to "#ffffff", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f3f4f6")), "list-item-text" to _pS(_uM("fontSize" to 14, "lineHeight" to "24px", "color" to "#323233")))
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
