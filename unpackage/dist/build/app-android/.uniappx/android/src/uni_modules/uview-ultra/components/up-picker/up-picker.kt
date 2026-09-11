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
open class GenUniModulesUviewUltraComponentsUpPickerUpPicker : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: UTSArray<Any> by `$props`
    open var hasInput: Boolean by `$props`
    open var placeholder: String by `$props`
    open var show: Boolean by `$props`
    open var popupMode: String by `$props`
    open var pageInline: Boolean by `$props`
    open var showToolbar: Boolean by `$props`
    open var toolbarRightSlot: Boolean by `$props`
    open var toolbarBottomSlot: Boolean by `$props`
    open var title: String by `$props`
    open var columns: UTSArray<UTSArray<Any>> by `$props`
    open var loading: Boolean by `$props`
    open var itemHeight: Any by `$props`
    open var cancelText: String by `$props`
    open var confirmText: String by `$props`
    open var cancelColor: String by `$props`
    open var confirmColor: String by `$props`
    open var visibleItemCount: Any by `$props`
    open var keyName: String by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var defaultIndex: UTSArray<Number> by `$props`
    open var immediateChange: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var setIndexs: (index: UTSArray<Number>?, shouldSetLast: Boolean) -> Unit
        get() {
            return unref(this.`$exposed`["setIndexs"]) as (index: UTSArray<Number>?, shouldSetLast: Boolean) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setIndexs", value)
        }
    open var setLastIndex: (index: UTSArray<Number>) -> Unit
        get() {
            return unref(this.`$exposed`["setLastIndex"]) as (index: UTSArray<Number>) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setLastIndex", value)
        }
    open var setColumnValues: (colIdx: Number, values: UTSArray<Any>) -> Unit
        get() {
            return unref(this.`$exposed`["setColumnValues"]) as (colIdx: Number, values: UTSArray<Any>) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setColumnValues", value)
        }
    open var getColumnValues: (colIdx: Number) -> UTSArray<Any>
        get() {
            return unref(this.`$exposed`["getColumnValues"]) as (colIdx: Number) -> UTSArray<Any>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getColumnValues", value)
        }
    open var setColumns: (cols: UTSArray<UTSArray<Any>>) -> Unit
        get() {
            return unref(this.`$exposed`["setColumns"]) as (cols: UTSArray<UTSArray<Any>>) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setColumns", value)
        }
    open var getIndexs: () -> UTSArray<Number>
        get() {
            return unref(this.`$exposed`["getIndexs"]) as () -> UTSArray<Number>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getIndexs", value)
        }
    open var getValues: () -> UTSArray<Any>
        get() {
            return unref(this.`$exposed`["getValues"]) as () -> UTSArray<Any>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getValues", value)
        }
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpPickerUpPicker, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpPickerUpPicker
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val lastIndex = ref(_uA<Number>())
            val innerIndex = ref(_uA<Number>())
            val innerColumns = ref(_uA<UTSArray<Any>>())
            val columnIndex = ref<Number>(0)
            val showByClickInput = ref<Boolean>(false)
            val columnScrollTops = ref(_uA<Number>())
            fun gen_toNumber_fn(value: Any?, fallback: Number): Number {
                if (value == null) {
                    return fallback
                }
                val n = parseInt(value.toString() ?: "")
                return if (isNaN(n)) {
                    fallback
                } else {
                    n
                }
            }
            val toNumber = ::gen_toNumber_fn
            fun gen_getKeyedText_fn(element: Any, key: String): String? {
                if (element == null || UTSAndroid.`typeof`(element) != "object") {
                    return null
                }
                val v = (element as UTSJSONObject)[key]
                if (v == null) {
                    return null
                }
                return v.toString()
            }
            val getKeyedText = ::gen_getKeyedText_fn
            val itemHeightNumber = computed<Number>(fun(): Number {
                val h = toNumber(props.itemHeight, 44)
                return if (h <= 0) {
                    44
                } else {
                    h
                }
            }
            )
            val visibleCountNumber = computed<Number>(fun(): Number {
                val c = toNumber(props.visibleItemCount, 5)
                return if (c <= 0) {
                    5
                } else {
                    c
                }
            }
            )
            val pickerViewHeight = computed<String>(fun(): String {
                return addUnit(visibleCountNumber.value * itemHeightNumber.value)
            }
            )
            val indicatorTop = computed<String>(fun(): String {
                val topCount = Math.floor(visibleCountNumber.value / 2)
                return addUnit(topCount * itemHeightNumber.value)
            }
            )
            val itemHeightUnit = computed(fun(): String {
                return addUnit(itemHeightNumber.value)
            }
            )
            val indicatorStyle = computed(fun(): UTSJSONObject {
                return _uO("top" to indicatorTop.value, "height" to itemHeightUnit.value)
            }
            )
            val itemStyle = computed(fun(): UTSJSONObject {
                return _uO("height" to itemHeightUnit.value)
            }
            )
            val inputLabel = computed<UTSArray<String>>(fun(): UTSArray<String> {
                var items: UTSArray<Any> = _uA()
                innerColumns.value.map(fun(item, index){
                    val idx = if (index < innerIndex.value.length) {
                        innerIndex.value[index]
                    } else {
                        0
                    }
                    if (idx < item.length) {
                        items.push(item[idx])
                    }
                }
                )
                var res: UTSArray<String> = _uA()
                items.forEach(fun(element: Any){
                    if (UTSAndroid.`typeof`(element) == "object" && element != null) {
                        val t = getKeyedText(element, props.keyName)
                        if (t != null) {
                            res.push(t!!)
                        }
                    } else if (element != null) {
                        res.push(element.toString() ?: "")
                    }
                }
                )
                return res
            }
            )
            val inputValue = computed<UTSArray<String>>(fun(): UTSArray<String> {
                var items: UTSArray<Any> = _uA()
                innerColumns.value.map(fun(item, index){
                    val idx = if (index < innerIndex.value.length) {
                        innerIndex.value[index]
                    } else {
                        0
                    }
                    if (idx < item.length) {
                        items.push(item[idx])
                    }
                }
                )
                var res: UTSArray<String> = _uA()
                items.forEach(fun(element: Any){
                    val t = getKeyedText(element, "id")
                    if (t != null) {
                        res.push(t!!)
                    }
                }
                )
                return res
            }
            )
            fun gen_getItemText_fn(item: Any): String {
                if (UTSAndroid.`typeof`(item) == "object" && item != null) {
                    val t = getKeyedText(item, props.keyName)
                    return if (t != null) {
                        t!!
                    } else {
                        ""
                    }
                }
                return if (item != null) {
                    (item.toString() ?: "")
                } else {
                    ""
                }
            }
            val getItemText = ::gen_getItemText_fn
            fun gen_isItemSelected_fn(colIdx: Number, itemIdx: Number): Boolean {
                if (innerIndex.value.length > colIdx) {
                    return innerIndex.value[colIdx] == itemIdx
                }
                return itemIdx == 0
            }
            val isItemSelected = ::gen_isItemSelected_fn
            fun gen_getItemTextStyle_fn(colIndex: Number, itemIndex: Number): UTSJSONObject {
                val isSel = isItemSelected(colIndex, itemIndex)
                return _uO("lineHeight" to itemHeightUnit.value, "color" to if (isSel) {
                    "#303133"
                } else {
                    "#909399"
                }
                , "fontWeight" to if (isSel) {
                    "bold"
                } else {
                    "normal"
                }
                , "fontSize" to "16px")
            }
            val getItemTextStyle = ::gen_getItemTextStyle_fn
            fun gen_setLastIndex_fn(index: UTSArray<Number>): Unit {
                lastIndex.value = index.slice()
            }
            val setLastIndex = ::gen_setLastIndex_fn
            fun gen_syncScrollPositions_fn(): Unit {
                var tops: UTSArray<Number> = _uA()
                run {
                    var i: Number = 0
                    while(i < innerColumns.value.length){
                        val idx = if (i < innerIndex.value.length) {
                            innerIndex.value[i]
                        } else {
                            0
                        }
                        tops.push(idx * itemHeightNumber.value)
                        i++
                    }
                }
                columnScrollTops.value = tops
            }
            val syncScrollPositions = ::gen_syncScrollPositions_fn
            fun gen_setIndexs_fn(index: UTSArray<Number>?, shouldSetLast: Boolean): Unit {
                if (index != null && index.length > 0) {
                    innerIndex.value = index.slice()
                } else {
                    var newIndexes: UTSArray<Number> = _uA()
                    run {
                        var i: Number = 0
                        while(i < innerColumns.value.length){
                            newIndexes.push(0)
                            i++
                        }
                    }
                    innerIndex.value = newIndexes
                }
                if (shouldSetLast) {
                    setLastIndex(innerIndex.value)
                }
                syncScrollPositions()
            }
            val setIndexs = ::gen_setIndexs_fn
            fun gen_notifyChange_fn(colIdx: Number, changedItemIdx: Number): Unit {
                val values = innerColumns.value
                setLastIndex(innerIndex.value)
                emit("update:modelValue", inputValue.value)
                var valueOrigin: UTSArray<Any> = _uA()
                run {
                    var index: Number = 0
                    while(index < innerColumns.value.length){
                        val item = innerColumns.value[index]
                        val idx = if (index < innerIndex.value.length) {
                            innerIndex.value[index]
                        } else {
                            0
                        }
                        if (idx < item.length) {
                            valueOrigin.push(item[idx])
                        }
                        index++
                    }
                }
                emit("change", PickerChangeEvent(value = valueOrigin, index = changedItemIdx, indexs = innerIndex.value, values = values as UTSArray<Any>, columnIndex = colIdx))
            }
            val notifyChange = ::gen_notifyChange_fn
            fun gen_onColumnScroll_fn(e: Any, colIndex: Number): Unit {
                val scrollEvent = e as UniScrollEvent
                val scrollTop = scrollEvent.detail.scrollTop
                val targetIndex = Math.max(0, Math.min(innerColumns.value[colIndex].length - 1, Math.round(scrollTop / itemHeightNumber.value)))
                if (innerIndex.value.length > colIndex && innerIndex.value[colIndex] != targetIndex) {
                    innerIndex.value[colIndex] = targetIndex
                    columnIndex.value = colIndex
                    notifyChange(colIndex, targetIndex)
                }
            }
            val onColumnScroll = ::gen_onColumnScroll_fn
            fun gen_onColumnTouchEnd_fn(colIndex: Number): Unit {
                setTimeout(fun(){
                    if (innerIndex.value.length > colIndex) {
                        val idx = innerIndex.value[colIndex]
                        columnScrollTops.value[colIndex] = idx * itemHeightNumber.value
                    }
                }
                , 80)
            }
            val onColumnTouchEnd = ::gen_onColumnTouchEnd_fn
            fun gen_onItemClick_fn(colIndex: Number, itemIndex: Number): Unit {
                if (innerIndex.value.length > colIndex) {
                    innerIndex.value[colIndex] = itemIndex
                    columnScrollTops.value[colIndex] = itemIndex * itemHeightNumber.value
                    columnIndex.value = colIndex
                    notifyChange(colIndex, itemIndex)
                }
            }
            val onItemClick = ::gen_onItemClick_fn
            fun gen_changeHandler_fn(e: Any): Unit {
                val kVal = (e as UniPickerViewChangeEvent).detail.value
                var index: Number = 0
                var colIdx: Number = 0
                run {
                    var i: Number = 0
                    while(i < kVal.length){
                        val item = kVal[i]
                        if (item != (if (i < lastIndex.value.length) {
                            lastIndex.value[i]
                        } else {
                            0
                        }
                        )) {
                            colIdx = i
                            index = item
                            break
                        }
                        i++
                    }
                }
                columnIndex.value = colIdx
                setLastIndex(kVal)
                setIndexs(kVal, false)
                emit("update:modelValue", inputValue.value)
                var valueOrigin: UTSArray<Any> = _uA()
                run {
                    var i: Number = 0
                    while(i < innerColumns.value.length){
                        val col = innerColumns.value[i]
                        val selectedIdx = if (i < kVal.length) {
                            kVal[i]
                        } else {
                            0
                        }
                        if (selectedIdx < col.length) {
                            valueOrigin.push(col[selectedIdx])
                        }
                        i++
                    }
                }
                emit("change", PickerChangeEvent(value = valueOrigin, index = index, indexs = kVal, values = innerColumns.value as UTSArray<Any>, columnIndex = colIdx))
            }
            val changeHandler = ::gen_changeHandler_fn
            fun gen_closeHandler_fn(): Unit {
                if (props.closeOnClickOverlay) {
                    if (props.hasInput) {
                        showByClickInput.value = false
                    }
                    emit("close")
                }
            }
            val closeHandler = ::gen_closeHandler_fn
            fun gen_cancel_fn(): Unit {
                if (props.hasInput) {
                    showByClickInput.value = false
                }
                emit("cancel")
            }
            val cancel = ::gen_cancel_fn
            fun gen_confirm_fn(): Unit {
                emit("update:modelValue", inputValue.value)
                if (props.hasInput) {
                    showByClickInput.value = false
                }
                var confirmValues: UTSArray<Any> = _uA()
                run {
                    var index: Number = 0
                    while(index < innerColumns.value.length){
                        val item = innerColumns.value[index]
                        val idx = if (index < innerIndex.value.length) {
                            innerIndex.value[index]
                        } else {
                            0
                        }
                        if (idx < item.length) {
                            confirmValues.push(item[idx])
                        }
                        index++
                    }
                }
                emit("confirm", PickerConfirmEvent(indexs = innerIndex.value, value = confirmValues, values = innerColumns.value as UTSArray<Any>))
            }
            val confirm = ::gen_confirm_fn
            fun gen_setColumnValues_fn(colIdx: Number, values: UTSArray<Any>): Unit {
                innerColumns.value.splice(colIdx, 1, values)
                setLastIndex(innerIndex.value.slice(0, colIdx))
                var tmpIndex = innerIndex.value.slice()
                run {
                    var i: Number = 0
                    while(i < innerColumns.value.length){
                        if (i > columnIndex.value) {
                            tmpIndex[i] = 0
                        }
                        i++
                    }
                }
                setIndexs(tmpIndex, false)
            }
            val setColumnValues = ::gen_setColumnValues_fn
            fun gen_getColumnValues_fn(colIdx: Number): UTSArray<Any> {
                return innerColumns.value[colIdx]
            }
            val getColumnValues = ::gen_getColumnValues_fn
            fun gen_setColumns_fn(cols: UTSArray<UTSArray<Any>>): Unit {
                innerColumns.value = cols
                var newIndexes: UTSArray<Number> = _uA()
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        if (props.defaultIndex.length > i) {
                            newIndexes.push(props.defaultIndex[i])
                        } else if (innerIndex.value.length > i) {
                            newIndexes.push(innerIndex.value[i])
                        } else {
                            newIndexes.push(0)
                        }
                        i++
                    }
                }
                innerIndex.value = newIndexes
                setLastIndex(newIndexes)
                syncScrollPositions()
            }
            val setColumns = ::gen_setColumns_fn
            fun gen_getIndexs_fn(): UTSArray<Number> {
                return innerIndex.value
            }
            val getIndexs = ::gen_getIndexs_fn
            fun gen_getValues_fn(): UTSArray<Any> {
                var res: UTSArray<Any> = _uA()
                run {
                    var index: Number = 0
                    while(index < innerColumns.value.length){
                        val item = innerColumns.value[index]
                        val idx = if (index < innerIndex.value.length) {
                            innerIndex.value[index]
                        } else {
                            0
                        }
                        if (idx < item.length) {
                            res.push(item[idx])
                        }
                        index++
                    }
                }
                return res
            }
            val getValues = ::gen_getValues_fn
            watch(fun(): UTSArray<Number> {
                return props.defaultIndex
            }
            , fun(n: UTSArray<Number>){
                setIndexs(n, true)
            }
            , WatchOptions(immediate = true, deep = true))
            watch(fun(): UTSArray<UTSArray<Any>> {
                return props.columns
            }
            , fun(n: UTSArray<UTSArray<Any>>){
                setColumns(n)
            }
            , WatchOptions(immediate = true, deep = true))
            watch(fun(): Boolean {
                return props.show
            }
            , fun(kVal: Boolean){
                if (kVal) {
                    setColumns(props.columns)
                    nextTick(fun(){
                        syncScrollPositions()
                    }
                    )
                }
            }
            )
            __expose(_uM("setIndexs" to setIndexs, "setLastIndex" to setLastIndex, "setColumnValues" to setColumnValues, "getColumnValues" to getColumnValues, "setColumns" to setColumns, "getIndexs" to getIndexs, "getValues" to getValues))
            return fun(): Any? {
                val _component_up_toolbar = resolveEasyComponent("up-toolbar", GenUniModulesUviewUltraComponentsUpToolbarUpToolbarClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-picker-wrapper"), _uA(
                    if (isTrue(_ctx.hasInput)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-picker-input wtu-1uhk8f1-0", "onClick" to fun(){
                            showByClickInput.value = !showByClickInput.value
                        }), _uA(
                            renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border"), _tD(if (inputLabel.value.length > 0) {
                                        inputLabel.value.join("/")
                                    } else {
                                        _ctx.placeholder
                                    }), 1)
                                )
                            })
                        ), 8, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cV(_component_up_popup, _uM("show" to ((if (isTruthy(_ctx.pageInline)) {
                        _ctx.pageInline
                    } else {
                        _ctx.show
                    }
                    ) || (if (isTruthy(_ctx.hasInput)) {
                        showByClickInput.value
                    } else {
                        _ctx.hasInput
                    }
                    )), "mode" to _ctx.popupMode, "pageInline" to _ctx.pageInline, "onClose" to closeHandler), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to "weapp-tw-border up-picker"), _uA(
                                if (isTrue(_ctx.showToolbar)) {
                                    _cV(_component_up_toolbar, _uM("key" to 0, "cancelColor" to _ctx.cancelColor, "confirmColor" to _ctx.confirmColor, "cancelText" to _ctx.cancelText, "confirmText" to _ctx.confirmText, "title" to _ctx.title, "rightSlot" to if (isTruthy(_ctx.toolbarRightSlot)) {
                                        true
                                    } else {
                                        false
                                    }, "onCancel" to cancel, "onConfirm" to confirm), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            renderSlot(_ctx.`$slots`, "toolbar-right")
                                        )
                                    }), "_" to 3), 8, _uA(
                                        "cancelColor",
                                        "confirmColor",
                                        "cancelText",
                                        "confirmText",
                                        "title",
                                        "rightSlot"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.toolbarBottomSlot)) {
                                    _cE("view", _uM("key" to 1, "class" to "weapp-tw-border"), _uA(
                                        renderSlot(_ctx.`$slots`, "toolbar-bottom")
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                _cE("view", _uM("class" to "weapp-tw-border up-picker__body", "style" to _nS(_uM("height" to pickerViewHeight.value))), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-picker__indicator", "style" to _nS(indicatorStyle.value)), null, 4),
                                    _cE("view", _uM("class" to "weapp-tw-border up-picker__mask up-picker__mask--top", "style" to _nS(_uM("height" to indicatorTop.value))), null, 4),
                                    _cE("view", _uM("class" to "weapp-tw-border up-picker__mask up-picker__mask--bottom", "style" to _nS(_uM("height" to indicatorTop.value))), null, 4),
                                    _cE("view", _uM("class" to "weapp-tw-border up-picker__columns"), _uA(
                                        _cE(Fragment, null, RenderHelpers.renderList(innerColumns.value, fun(column, colIndex, __index, _cached): Any {
                                            return _cE("scroll-view", _uM("key" to colIndex, "class" to "up-picker__column", "direction" to "vertical", "scroll-top" to columnScrollTops.value[colIndex], "show-scrollbar" to false, "onScroll" to fun(`$event`: Any){
                                                onColumnScroll(`$event`, colIndex)
                                            }
                                            , "onTouchend" to fun(){
                                                onColumnTouchEnd(colIndex)
                                            }
                                            ), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border", "style" to _nS(_uM("height" to indicatorTop.value))), null, 4),
                                                _cE(Fragment, null, RenderHelpers.renderList(column, fun(item, itemIndex, __index, _cached): Any {
                                                    return _cE("view", _uM("key" to itemIndex, "class" to "weapp-tw-border up-picker__item", "style" to _nS(itemStyle.value), "onClick" to fun(){
                                                        onItemClick(colIndex, itemIndex)
                                                    }
                                                    ), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border up-picker__item__text", "style" to _nS(getItemTextStyle(colIndex, itemIndex))), _tD(getItemText(item)), 5)
                                                    ), 12, _uA(
                                                        "onClick"
                                                    ))
                                                }
                                                ), 128),
                                                _cE("view", _uM("class" to "weapp-tw-border", "style" to _nS(_uM("height" to indicatorTop.value))), null, 4)
                                            ), 40, _uA(
                                                "scroll-top",
                                                "onScroll",
                                                "onTouchend"
                                            ))
                                        }
                                        ), 128)
                                    ))
                                ), 4),
                                if (isTrue(_ctx.loading)) {
                                    _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-picker--loading"), _uA(
                                        _cV(_component_up_loading_icon, _uM("mode" to "circle"))
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        )
                    }
                    ), "_" to 3), 8, _uA(
                        "show",
                        "mode",
                        "pageInline"
                    ))
                ))
            }
        }
        var name = "up-picker"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-picker" to _pS(_uM("position" to "relative", "backgroundColor" to "#ffffff")), "up-picker__body" to _pS(_uM("position" to "relative", "overflow" to "hidden", "backgroundColor" to "#ffffff")), "up-picker__indicator" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "borderTopWidth" to 1, "borderBottomWidth" to 1, "borderTopStyle" to "solid", "borderBottomStyle" to "solid", "borderTopColor" to "#e5e7eb", "borderBottomColor" to "#e5e7eb", "backgroundColor" to "rgba(0,0,0,0.02)", "pointerEvents" to "none", "zIndex" to 2)), "up-picker__mask" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "pointerEvents" to "none", "zIndex" to 3)), "up-picker__mask--top" to _pS(_uM("top" to 0, "backgroundImage" to "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3))")), "up-picker__mask--bottom" to _pS(_uM("bottom" to 0, "backgroundImage" to "linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3))")), "up-picker__columns" to _pS(_uM("display" to "flex", "flexDirection" to "row", "height" to "100%", "width" to "100%")), "up-picker__column" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to "100%")), "up-picker__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "textAlign" to "center", "width" to "100%")), "up-picker__item__text" to _pS(_uM("fontSize" to 16, "textAlign" to "center")), "up-picker__view" to _pS(_uM("width" to "100%")), "up-picker__view__column" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "justifyContent" to "center")), "up-picker__view__column__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "width" to "100%")), "up-picker__view__column__item__text" to _pS(_uM("fontSize" to 16, "textAlign" to "center", "color" to "#303133")), "up-picker--loading" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "left" to 0, "bottom" to 0, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "backgroundColor" to "rgba(255,255,255,0.87)", "zIndex" to 1000)), "wtu-1uhk8f1-0" to _pS(_uM("cursor" to "pointer")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("close" to null, "cancel" to null, "confirm" to null, "change" to null, "update:modelValue" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to "Array", "required" to false, "default" to fun(): UTSArray<Any> {
            return _uA()
        }
        ), "hasInput" to _uM("type" to "Boolean", "required" to false, "default" to false), "placeholder" to _uM("type" to "String", "required" to false, "default" to "请选择"), "show" to _uM("type" to "Boolean", "required" to false, "default" to false), "popupMode" to _uM("type" to "String", "required" to false, "default" to "bottom"), "pageInline" to _uM("type" to "Boolean", "required" to false, "default" to false), "showToolbar" to _uM("type" to "Boolean", "required" to false, "default" to true), "toolbarRightSlot" to _uM("type" to "Boolean", "required" to false, "default" to false), "toolbarBottomSlot" to _uM("type" to "Boolean", "required" to false, "default" to false), "title" to _uM("type" to "String", "required" to false, "default" to ""), "columns" to _uM("type" to "Array", "required" to false, "default" to fun(): UTSArray<UTSArray<Any>> {
            return _uA()
        }
        ), "loading" to _uM("type" to "Boolean", "required" to false, "default" to false), "itemHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 44), "cancelText" to _uM("type" to "String", "required" to false, "default" to "取消"), "confirmText" to _uM("type" to "String", "required" to false, "default" to "确定"), "cancelColor" to _uM("type" to "String", "required" to false, "default" to "#909193"), "confirmColor" to _uM("type" to "String", "required" to false, "default" to "#3c9cff"), "visibleItemCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 5), "keyName" to _uM("type" to "String", "required" to false, "default" to "text"), "closeOnClickOverlay" to _uM("type" to "Boolean", "required" to false, "default" to false), "defaultIndex" to _uM("type" to "Array", "required" to false, "default" to fun(): UTSArray<Number> {
            return _uA()
        }
        ), "immediateChange" to _uM("type" to "Boolean", "required" to false, "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "hasInput",
            "placeholder",
            "show",
            "popupMode",
            "pageInline",
            "showToolbar",
            "toolbarRightSlot",
            "toolbarBottomSlot",
            "title",
            "columns",
            "loading",
            "itemHeight",
            "cancelText",
            "confirmText",
            "cancelColor",
            "confirmColor",
            "visibleItemCount",
            "keyName",
            "closeOnClickOverlay",
            "defaultIndex",
            "immediateChange"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
