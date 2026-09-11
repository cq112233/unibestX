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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
open class GenSrcSubUviewUltraUviewUltra : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraUviewUltra) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraUviewUltra
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val themeColor = computed<String>(fun(): String {
                return appStore.state.theme
            }
            )
            val demoCount: Number = 85
            fun gen_goToDemo_fn(page: String): Unit {
                uni_navigateTo(NavigateToOptions(url = "/src/sub/uview-ultra/demos/" + page + "/" + page))
            }
            val goToDemo = ::gen_goToDemo_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_cell = resolveEasyComponent("up-cell", GenUniModulesUviewUltraComponentsUpCellUpCellClass)
                val _component_up_cell_group = resolveEasyComponent("up-cell-group", GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroupClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "uview-ultra 示例", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "uview-ultra 示例", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B pb-_b50px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B bg-white mb-_b12px_B shadow-xs flex-row items-center"), _uA(
                                        _cE("image", _uM("src" to "/static/logo.png", "style" to _nS(_uM("width" to "50px", "height" to "50px")), "class" to "mr-_b12px_B rounded-_b8px_B"), null, 4),
                                        _cE("view", _uM("class" to "weapp-tw-border flex-1"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B"), "uview-ultra 组件库"),
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B mt-_b4px_B"), "已收录 " + _tD(demoCount) + " 个组件 Demo"),
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B mt-_b4px_B"), "点击下方任意功能组件，进入独立页面进行演示")
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border demo-group-card"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border group-title"), "新增组件"),
                                        _cV(_component_up_cell_group, _uM("border" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cV(_component_up_cell, _uM("title" to "Coupon 优惠券", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("coupon")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "coupon", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "PdfReader PDF 阅读", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("pdf-reader")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "file-text-fill", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Tree 树形", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("tree")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list-dot", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Barcode 条形码", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("barcode")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "scan", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Poster 海报", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("poster")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "ShortVideo 短视频", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("short-video")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "play-right", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "ColorPicker 颜色选择", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("color-picker")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "edit-pen", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Cropper 裁剪", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("cropper")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Dragsort 拖拽排序", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("dragsort")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "order", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Signature 签名", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("signature")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "edit-pen", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Table2 表格", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("table2")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "grid", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Title 标题", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("title")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "edit-pen", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Cascader 级联选择器", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("cascader")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                ))
                                            )
                                        }
                                        ), "_" to 1))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border demo-group-card"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border group-title"), "基础与展示组件"),
                                        _cV(_component_up_cell_group, _uM("border" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cV(_component_up_cell, _uM("title" to "Button 按钮", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("button")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "plus-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Icon 图标", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("icon")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Text 文本", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("text")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "file-text", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Link 超链接", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("link")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "attach", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Empty 空白页", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("empty")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "info-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Divider 分割线", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("divider")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "minus", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "LoadingIcon 加载图标", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("loading-icon")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "reload", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Skeleton 骨架屏", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("skeleton")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list-dot", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Tag 标签", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("tag")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "tags", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Badge 徽标", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("badge")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "info-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Avatar 头像", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("avatar")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "account", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Card 卡片", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("card")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "map", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "List 列表", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("list")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list-dot", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Swiper 轮播图", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("swiper")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Image 图片组件", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("image")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Transition 动画过渡", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("transition")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "play-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Steps 步骤条", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("steps")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "order", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Grid 宫格", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("grid")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "grid", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Line 线条", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("line")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "minus", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Album 相册", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("album")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Gap 间隔槽", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("gap")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "minus", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Sticky 吸顶", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("sticky")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-up", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Table 表格", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("table")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "grid", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "LazyLoad 懒加载", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("lazy-load")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "photo", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Loadmore 加载更多", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("loadmore")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "more-dot-fill", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Parse 富文本解析", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("parse")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "file-text", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Qrcode 二维码", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("qrcode")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "scan", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Waterfall 瀑布流", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("waterfall")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "grid", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                ))
                                            )
                                        }
                                        ), "_" to 1))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border demo-group-card mt-_b12px_B"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border group-title"), "表单与交互组件"),
                                        _cV(_component_up_cell_group, _uM("border" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cV(_component_up_cell, _uM("title" to "Input 输入框", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("input")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "edit-pen", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Checkbox 复选框", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("checkbox")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "checkbox-mark", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Radio 单选框", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("radio")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "checkmark-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Switch 开关", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("switch")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "more-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Rate 评分", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("rate")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "star", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "NumberBox 步进器", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("number-box")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "plus", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Slider 滑块", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("slider")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "minus", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Textarea 多行文本", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("textarea")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "file-text", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Upload 上传", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("upload")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-up", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Search 搜索", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("search")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "search", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "完整 Form 表单示例", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("form")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "edit-pen", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Pagination 分页器", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("pagination")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "more-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Keyboard 键盘", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("keyboard")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "grid-fill", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Dropdown 下拉菜单", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("dropdown")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-down-fill", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "SwipeAction 滑动操作", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("swipe-action")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "CodeInput 验证码输入", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("code-input")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "lock", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Code 验证码倒计时", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("code")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "clock", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                ))
                                            )
                                        }
                                        ), "_" to 1))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border demo-group-card mt-_b12px_B"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border group-title"), "反馈与提示组件"),
                                        _cV(_component_up_cell_group, _uM("border" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cV(_component_up_cell, _uM("title" to "Alert 警告提示", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("alert")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "info-circle", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Calendar 日历", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("calendar")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "calendar", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Picker 选择器", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("picker")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "DatetimePicker 时间选择", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("datetime-picker")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "clock", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "ActionSheet 动作面板", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("action-sheet")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "server-man", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "NoticeBar 滚动通知", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("notice-bar")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "volume", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Collapse 折叠面板", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("collapse")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-down", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Toast 消息提示", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("toast")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "chat", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Notify 消息通知", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("notify")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "bell", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "LoadingPage 加载页", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("loading-page")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "more-dot-fill", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Overlay 遮罩层", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("overlay")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "scan", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Modal 模态框", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("modal")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "email", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Popup 弹出层", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("popup")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "server-man", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "NoNetwork 无网络提示", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("no-network")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "wifi-off", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "LineProgress 线型进度", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("line-progress")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "minus", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "CircleProgress 圆形进度条", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("circle-progress")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "reload", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "CountDown 倒计时", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("count-down")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "clock", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "CountTo 数字滚动", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("count-to")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "play-right-fill", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Copy 文本复制", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("copy")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "file-text", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                ))
                                            )
                                        }
                                        ), "_" to 1))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border demo-group-card mt-_b12px_B"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border group-title"), "导航组件"),
                                        _cV(_component_up_cell_group, _uM("border" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cV(_component_up_cell, _uM("title" to "Navbar 导航栏", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("navbar")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-left", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "NavbarMini 迷你导航", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("navbar-mini")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-left", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "BackTop 返回顶部", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("back-top")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "arrow-upward", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Tabbar 底部导航", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("tabbar")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Tabs 标签页", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("tabs")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "Subsection 分段器", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("subsection")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "IndexList 索引列表", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("index-list")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "list", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cV(_component_up_cell, _uM("title" to "MpHtml 富文本组件", "is-link" to "", "onClick" to fun(){
                                                    goToDemo("mp-html")
                                                }
                                                ), _uM("icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cV(_component_up_icon, _uM("name" to "file-text", "color" to themeColor.value, "size" to "20", "class" to "mr-_b8px_B"), null, 8, _uA(
                                                            "color"
                                                        ))
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "onClick"
                                                ))
                                            )
                                        }
                                        ), "_" to 1))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-group-card" to _pS(_uM("marginTop" to 0, "marginRight" to 12, "marginBottom" to 0, "marginLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12, "paddingTop" to 12, "paddingRight" to 0, "paddingBottom" to 12, "paddingLeft" to 0, "boxShadow" to "0 2px 8px rgba(0, 0, 0, 0.03)")), "group-title" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#1e293b", "paddingTop" to 0, "paddingRight" to 16, "paddingBottom" to 8, "paddingLeft" to 16, "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f1f5f9")))
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
