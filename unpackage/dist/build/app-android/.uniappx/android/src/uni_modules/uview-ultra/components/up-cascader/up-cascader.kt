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
open class GenUniModulesUviewUltraComponentsUpCascaderUpCascader : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var data: UTSArray<UTSJSONObject> by `$props`
    open var modelValue: UTSArray<Any> by `$props`
    open var valueKey: String by `$props`
    open var labelKey: String by `$props`
    open var childrenKey: String by `$props`
    open var maskCloseAble: Boolean by `$props`
    open var zIndex: Any by `$props`
    open var autoClose: Boolean by `$props`
    open var headerDirection: String by `$props`
    open var optionsCols: Number by `$props`
    open var closeable: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCascaderUpCascader) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCascaderUpCascader
            val _cache = __ins.renderCache
            fun gen_toText_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val toText = ::gen_toText_fn
            fun gen_sameValue_fn(left: Any?, right: Any?): Boolean {
                return toText(left) == toText(right)
            }
            val sameValue = ::gen_sameValue_fn
            fun gen_emptyObjectList_fn(): UTSArray<UTSJSONObject> {
                return _uA<UTSJSONObject>()
            }
            val emptyObjectList = ::gen_emptyObjectList_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val levelList = ref(_uA<UTSArray<UTSJSONObject>>())
            val selectedValueIndexs = ref(_uA<Number>())
            val tabsIndex = ref<Number>(0)
            val popupShow = ref<Boolean>(props.show)
            val confirmValues = ref(_uA<Any>())
            val isChange = computed<Boolean>(fun(): Boolean {
                return tabsIndex.value > 1
            }
            )
            val levelWrapStyle = computed<String>(fun(): String {
                if (props.optionsCols == 2 && isChange.value) {
                    return "transform: translateX(-33.3333333%)"
                }
                return ""
            }
            )
            val cancelText = computed<String>(fun(): String {
                return t("up.common.cancel", _uO())
            }
            )
            val confirmText = computed<String>(fun(): String {
                return t("up.common.confirm", _uO())
            }
            )
            val placeholderText = computed<String>(fun(): String {
                return t("up.common.pleaseChoose", _uO())
            }
            )
            val uZIndex = computed<Number>(fun(): Number {
                if (UTSAndroid.`typeof`(props.zIndex) == "number" && (props.zIndex as Number) > 0) {
                    return props.zIndex as Number
                }
                val parsed = parseInt(toText(props.zIndex))
                return if (isNaN(parsed) || parsed <= 0) {
                    1075
                } else {
                    parsed
                }
            }
            )
            fun gen_getAreaItemStyle_fn(): String {
                return if (props.optionsCols == 2) {
                    "width:33.33333%"
                } else {
                    "width:750rpx"
                }
            }
            val getAreaItemStyle = ::gen_getAreaItemStyle_fn
            fun gen_getDataList_fn(): UTSArray<UTSJSONObject> {
                return props.data
            }
            val getDataList = ::gen_getDataList_fn
            fun gen_getChildren_fn(item: UTSJSONObject): UTSArray<UTSJSONObject> {
                val children = item[props.childrenKey] as UTSArray<UTSJSONObject>?
                if (children != null && UTSArray.isArray(children)) {
                    return children as UTSArray<UTSJSONObject>
                }
                return emptyObjectList()
            }
            val getChildren = ::gen_getChildren_fn
            fun gen_getItemLabel_fn(item: UTSJSONObject): String {
                return toText(item[props.labelKey])
            }
            val getItemLabel = ::gen_getItemLabel_fn
            fun gen_getItemValue_fn(item: UTSJSONObject): Any? {
                return item[props.valueKey]
            }
            val getItemValue = ::gen_getItemValue_fn
            fun gen_getTabName_fn(item: UTSJSONObject): String {
                return toText(item["name"])
            }
            val getTabName = ::gen_getTabName_fn
            fun gen_isSelected_fn(levelIndex: Number, index: Number): Boolean {
                if (levelIndex < 0 || levelIndex >= selectedValueIndexs.value.length) {
                    return false
                }
                return selectedValueIndexs.value[levelIndex] == index
            }
            val isSelected = ::gen_isSelected_fn
            fun gen_canShowLevel_fn(levelIndex: Number): Boolean {
                return levelIndex == 0 || selectedValueIndexs.value.length >= levelIndex
            }
            val canShowLevel = ::gen_canShowLevel_fn
            fun gen_stepClick_fn(index: Number): Unit {
                tabsIndex.value = index
            }
            val stepClick = ::gen_stepClick_fn
            val genTabsList = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                val tabsList = _uA<UTSJSONObject>()
                val levelCount = Math.min(selectedValueIndexs.value.length, levelList.value.length)
                run {
                    var i: Number = 0
                    while(i < levelCount){
                        val selectedIndex = selectedValueIndexs.value[i]
                        val levelData = levelList.value[i]
                        if (selectedIndex < 0 || selectedIndex >= levelData.length) {
                            tabsList.push(_uO("name" to placeholderText.value))
                            i++
                            continue
                        }
                        val selectedItem = levelData[selectedIndex]
                        tabsList.push(_uO("name" to getItemLabel(selectedItem)))
                        if (i == selectedValueIndexs.value.length - 1) {
                            val children = getChildren(selectedItem)
                            if (children.length > 0) {
                                tabsList.push(_uO("name" to placeholderText.value))
                            }
                        }
                        i++
                    }
                }
                if (tabsList.length == 0) {
                    tabsList.push(_uO("name" to placeholderText.value))
                }
                return tabsList
            }
            )
            fun gen_getSelectedValues_fn(): UTSArray<Any> {
                val result = _uA<Any>()
                run {
                    var i: Number = 0
                    while(i < selectedValueIndexs.value.length){
                        if (i >= levelList.value.length) {
                            break
                        }
                        val selectedIndex = selectedValueIndexs.value[i]
                        val levelData = levelList.value[i]
                        if (selectedIndex < 0 || selectedIndex >= levelData.length) {
                            i++
                            continue
                        }
                        val kVal = getItemValue(levelData[selectedIndex])
                        if (kVal != null) {
                            result.push(kVal)
                        }
                        i++
                    }
                }
                return result
            }
            val getSelectedValues = ::gen_getSelectedValues_fn
            fun gen_findValueIndex_fn(list: UTSArray<UTSJSONObject>, kVal: Any?): Number {
                run {
                    var i: Number = 0
                    while(i < list.length){
                        if (sameValue(getItemValue(list[i]), kVal)) {
                            return i
                        }
                        i++
                    }
                }
                return -1
            }
            val findValueIndex = ::gen_findValueIndex_fn
            fun gen_initLevelList_fn(): Unit {
                val list = getDataList()
                levelList.value = if (list.length > 0) {
                    _uA<UTSArray<UTSJSONObject>>(list)
                } else {
                    _uA<UTSArray<UTSJSONObject>>()
                }
                selectedValueIndexs.value = _uA<Number>()
                tabsIndex.value = 0
                confirmValues.value = _uA<Any>()
            }
            val initLevelList = ::gen_initLevelList_fn
            fun gen_setDefaultValue_fn(): Unit {
                val values = props.modelValue
                val root = getDataList()
                selectedValueIndexs.value = _uA<Number>()
                levelList.value = if (root.length > 0) {
                    _uA<UTSArray<UTSJSONObject>>(root)
                } else {
                    _uA<UTSArray<UTSJSONObject>>()
                }
                if (values.length == 0 || root.length == 0) {
                    confirmValues.value = _uA<Any>()
                    tabsIndex.value = 0
                    return
                }
                val nextLevels = _uA<UTSArray<UTSJSONObject>>(root)
                val nextIndexs = _uA<Number>()
                var currentLevelData = root
                run {
                    var i: Number = 0
                    while(i < values.length){
                        val index = findValueIndex(currentLevelData, values[i])
                        if (index == -1) {
                            break
                        }
                        nextIndexs.push(index)
                        val children = getChildren(currentLevelData[index])
                        if (children.length == 0) {
                            break
                        }
                        currentLevelData = children
                        if (i < values.length - 1) {
                            nextLevels.push(children)
                        }
                        i++
                    }
                }
                levelList.value = nextLevels
                selectedValueIndexs.value = nextIndexs
                confirmValues.value = getSelectedValues()
                tabsIndex.value = if (selectedValueIndexs.value.length > 0) {
                    selectedValueIndexs.value.length - 1
                } else {
                    0
                }
            }
            val setDefaultValue = ::gen_setDefaultValue_fn
            fun gen_close_fn(): Unit {
                emit("cancel")
                emit("update:show", false)
                popupShow.value = false
            }
            val close = ::gen_close_fn
            fun gen_tabsChange_fn(item: UTSJSONObject): Unit {
                val index = parseInt(toText(item["index"]))
                if (!isNaN(index)) {
                    tabsIndex.value = index
                }
            }
            val tabsChange = ::gen_tabsChange_fn
            fun gen_handleConfirm_fn(): Unit {
                val values = if (confirmValues.value.length > 0) {
                    confirmValues.value
                } else {
                    getSelectedValues()
                }
                confirmValues.value = values
                emit("update:modelValue", values)
                emit("confirm", values)
                emit("update:show", false)
                popupShow.value = false
            }
            val handleConfirm = ::gen_handleConfirm_fn
            fun gen_levelChange_fn(levelIndex: Number, index: Number): Unit {
                if (levelIndex < 0 || levelIndex >= levelList.value.length) {
                    return
                }
                val levelData = levelList.value[levelIndex]
                if (index < 0 || index >= levelData.length) {
                    return
                }
                val nextIndexs = _uA<Number>()
                run {
                    var i: Number = 0
                    while(i < levelIndex){
                        nextIndexs.push(selectedValueIndexs.value[i])
                        i++
                    }
                }
                nextIndexs.push(index)
                selectedValueIndexs.value = nextIndexs
                val nextLevels = _uA<UTSArray<UTSJSONObject>>()
                run {
                    var i: Number = 0
                    while(i <= levelIndex){
                        nextLevels.push(levelList.value[i])
                        i++
                    }
                }
                val currentItem = levelData[index]
                val children = getChildren(currentItem)
                if (children.length > 0) {
                    nextLevels.push(children)
                    tabsIndex.value = levelIndex + 1
                } else {
                    tabsIndex.value = levelIndex
                }
                levelList.value = nextLevels
                confirmValues.value = getSelectedValues()
                emit("change", confirmValues.value)
                if (children.length == 0 && props.autoClose) {
                    handleConfirm()
                }
            }
            val levelChange = ::gen_levelChange_fn
            fun gen_handleCancel_fn(): Unit {
                close()
            }
            val handleCancel = ::gen_handleCancel_fn
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.data
            }
            , fun(): Unit {
                initLevelList()
                setDefaultValue()
            }
            , WatchOptions(deep = true, immediate = true))
            watch(fun(): Boolean {
                return props.show
            }
            , fun(newVal: Boolean): Unit {
                popupShow.value = newVal
            }
            )
            watch(fun(): UTSArray<Any> {
                return props.modelValue
            }
            , fun(): Unit {
                setDefaultValue()
            }
            , WatchOptions(deep = true, immediate = true))
            return fun(): Any? {
                val _component_up_steps_item = resolveEasyComponent("up-steps-item", GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItemClass)
                val _component_up_steps = resolveEasyComponent("up-steps", GenUniModulesUviewUltraComponentsUpStepsUpStepsClass)
                val _component_up_tabs = resolveEasyComponent("up-tabs", GenUniModulesUviewUltraComponentsUpTabsUpTabsClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_cell = resolveEasyComponent("up-cell", GenUniModulesUviewUltraComponentsUpCellUpCellClass)
                val _component_up_cell_group = resolveEasyComponent("up-cell-group", GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroupClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cV(_component_up_popup, _uM("show" to popupShow.value, "mode" to "bottom", "overlay" to true, "closeable" to _ctx.closeable, "safeAreaInsetBottom" to true, "zIndex" to uZIndex.value, "closeOnClickOverlay" to _ctx.maskCloseAble, "onClose" to close), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        if (_ctx.headerDirection == "column") {
                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-cascader__header up-cascader__header--column"), _uA(
                                if (isTrue(popupShow.value)) {
                                    _cV(_component_up_steps, _uM("key" to 0, "dot" to "", "direction" to "column", "current" to tabsIndex.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(genTabsList.value, fun(item, index, __index, _cached): Any {
                                                return _cV(_component_up_steps_item, _uM("key" to index, "index" to index, "title" to getTabName(item), "onClick" to fun(){
                                                    stepClick(index)
                                                }), null, 8, _uA(
                                                    "index",
                                                    "title",
                                                    "onClick"
                                                ))
                                            }), 128)
                                        )
                                    }), "_" to 1), 8, _uA(
                                        "current"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        } else {
                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-cascader__header up-cascader__header--row"), _uA(
                                if (isTrue(popupShow.value)) {
                                    _cV(_component_up_tabs, _uM("key" to 0, "list" to genTabsList.value, "scrollable" to true, "current" to tabsIndex.value, "onUpdate:current" to fun(`$event`: Number){
                                        tabsIndex.value = `$event`
                                    }, "onChange" to tabsChange), null, 8, _uA(
                                        "list",
                                        "current",
                                        "onUpdate:current"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        }
                        ,
                        _cE("view", _uM("class" to "weapp-tw-border area-box"), _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border area-box__levels",
                                _uM("change" to isChange.value)
                            )), "style" to _nS(levelWrapStyle.value)), _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(levelList.value, fun(levelData, levelIndex, __index, _cached): Any {
                                    return _cE(Fragment, _uM("key" to levelIndex), _uA(
                                        if (isTrue(_ctx.optionsCols == 2 || levelIndex == tabsIndex.value)) {
                                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border area-item", "style" to _nS(getAreaItemStyle())), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border area-item__panel"), _uA(
                                                    _cE("scroll-view", _uM("direction" to "vertical", "class" to "area-item__scroll"), _uA(
                                                        if (isTrue(canShowLevel(levelIndex))) {
                                                            _cV(_component_up_cell_group, _uM("key" to 0), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cE(Fragment, null, RenderHelpers.renderList(levelData, fun(item, index, __index, _cached): Any {
                                                                        return _cV(_component_up_cell, _uM("key" to index, "title" to getItemLabel(item), "onClick" to fun(){
                                                                            levelChange(levelIndex, index)
                                                                        }), _uM("right-icon" to withSlotCtx(fun(): UTSArray<Any> {
                                                                            return _uA(
                                                                                if (isTrue(isSelected(levelIndex, index))) {
                                                                                    _cV(_component_up_icon, _uM("key" to 0, "size" to "17", "name" to "checkbox-mark"))
                                                                                } else {
                                                                                    _cC("v-if", true)
                                                                                }
                                                                            )
                                                                        }), "_" to 2), 1032, _uA(
                                                                            "title",
                                                                            "onClick"
                                                                        ))
                                                                    }), 128)
                                                                )
                                                            }), "_" to 2), 1024)
                                                        } else {
                                                            _cC("v-if", true)
                                                        }
                                                    ))
                                                ))
                                            ), 4)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    ), 64)
                                }
                                ), 128)
                            ), 6)
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border up-cascader-action"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border up-cascader-action__btn"), _uA(
                                _cV(_component_up_button, _uM("onClick" to handleCancel, "type" to "default", "customStyle" to _uO("backgroundColor" to "#f5f6f7")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-cascader-action__cancel-text"), _tD(cancelText.value), 1)
                                    )
                                }
                                ), "_" to 1))
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border up-cascader-action__btn"), _uA(
                                _cV(_component_up_button, _uM("onClick" to handleConfirm, "type" to "primary", "text" to confirmText.value), null, 8, _uA(
                                    "text"
                                ))
                            ))
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "show",
                    "closeable",
                    "zIndex",
                    "closeOnClickOverlay"
                ))
            }
        }
        var name = "up-cascader"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-cascader__header--column" to _pS(_uM("paddingTop" to "30rpx", "paddingRight" to 0, "paddingBottom" to "10rpx", "paddingLeft" to "20rpx")), "up-cascader__header--row" to _pS(_uM("paddingTop" to "20rpx", "paddingRight" to 0, "paddingBottom" to "10rpx", "paddingLeft" to 0)), "area-box" to _pS(_uM("width" to "100%", "overflow" to "hidden", "height" to "800rpx")), "area-box__levels" to _pS(_uM("display" to "flex", "flexDirection" to "row", "width" to "150%", "transitionProperty" to "transform", "transitionDuration" to "0.3s", "transitionTimingFunction" to "ease-in-out", "transitionDelay" to "0s", "transform" to "translateX(0)")), "area-item" to _pS(_uM("height" to "800rpx")), "area-item__panel" to _pS(_uM("height" to "100%", "paddingTop" to "10rpx", "paddingRight" to "10rpx", "paddingBottom" to "10rpx", "paddingLeft" to "10rpx", "backgroundColor" to "#f6f7f9")), "area-item__scroll" to _pS(_uM("height" to "100%")), "up-cascader-action" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "borderTopWidth" to 1, "borderTopStyle" to "solid", "borderTopColor" to "#eeeeee")), "up-cascader-action__btn" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "paddingTop" to "20rpx", "paddingRight" to "20rpx", "paddingBottom" to "20rpx", "paddingLeft" to "20rpx")), "up-cascader-action__cancel-text" to _pS(_uM("fontSize" to 15, "color" to "#323233")), "@TRANSITION" to _uM("area-box__levels" to _uM("property" to "transform", "duration" to "0.3s", "timingFunction" to "ease-in-out", "delay" to "0s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "update:show" to null, "change" to null, "confirm" to null, "cancel" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to false), "data" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "modelValue" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "valueKey" to _uM("type" to "String", "default" to "value"), "labelKey" to _uM("type" to "String", "default" to "label"), "childrenKey" to _uM("type" to "String", "default" to "children"), "maskCloseAble" to _uM("type" to "Boolean", "default" to true), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "autoClose" to _uM("type" to "Boolean", "default" to false), "headerDirection" to _uM("type" to "String", "default" to "row"), "optionsCols" to _uM("type" to "Number", "default" to 2), "closeable" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "data",
            "modelValue",
            "valueKey",
            "labelKey",
            "childrenKey",
            "maskCloseAble",
            "zIndex",
            "autoClose",
            "headerDirection",
            "optionsCols",
            "closeable"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
