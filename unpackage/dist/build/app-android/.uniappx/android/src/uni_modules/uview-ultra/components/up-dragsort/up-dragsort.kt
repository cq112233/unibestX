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
import io.dcloud.uniapp.extapi.createSelectorQuery as uni_createSelectorQuery
import io.dcloud.uniapp.extapi.vibrateShort as uni_vibrateShort
open class GenUniModulesUviewUltraComponentsUpDragsortUpDragsort : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var initialList: UTSArray<UTSJSONObject> by `$props`
    open var draggable: Boolean by `$props`
    open var vibrate: Boolean by `$props`
    open var direction: String by `$props`
    open var columns: Number by `$props`
    open var handleDrag: Boolean by `$props`
    open var handlerPosition: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpDragsortUpDragsort) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpDragsortUpDragsort
            val _cache = __ins.renderCache
            fun gen_createDragList_fn(): UTSArray<UTSJSONObject> {
                return _uA<UTSJSONObject>()
            }
            val createDragList = ::gen_createDragList_fn
            fun gen_copyObject_fn(item: UTSJSONObject): UTSJSONObject {
                val copied: UTSJSONObject = _uO()
                val keys = UTSJSONObject.keys(item)
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        copied[keys[i]] = item[keys[i]]
                        i++
                    }
                }
                return copied
            }
            val copyObject = ::gen_copyObject_fn
            fun gen_copyList_fn(list: UTSArray<UTSJSONObject>): UTSArray<UTSJSONObject> {
                val copied = _uA<UTSJSONObject>()
                run {
                    var i: Number = 0
                    while(i < list.length){
                        copied.push(copyObject(list[i]))
                        i++
                    }
                }
                return copied
            }
            val copyList = ::gen_copyList_fn
            fun normalizeNumber(value: Any?, defaultValue: Number = 0): Number {
                if (UTSAndroid.`typeof`(value) == "number") {
                    return value as Number
                }
                if (value == null) {
                    return defaultValue
                }
                val parsed = parseFloat(value.toString())
                return if (isNaN(parsed)) {
                    defaultValue
                } else {
                    parsed
                }
            }
            fun gen_stringValue_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val stringValue = ::gen_stringValue_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            fun gen_getItemKey_fn(item: UTSJSONObject, index: Number): Any {
                if (item["id"] != null) {
                    return item["id"] as Any
                }
                return index
            }
            val getItemKey = ::gen_getItemKey_fn
            fun gen_getItemLabel_fn(item: UTSJSONObject): String {
                return stringValue(item["label"])
            }
            val getItemLabel = ::gen_getItemLabel_fn
            fun gen_getItemX_fn(item: UTSJSONObject): Number {
                return normalizeNumber(item["x"], 0)
            }
            val getItemX = ::gen_getItemX_fn
            fun gen_getItemY_fn(item: UTSJSONObject): Number {
                return normalizeNumber(item["y"], 0)
            }
            val getItemY = ::gen_getItemY_fn
            fun gen_isItemDisabled_fn(item: UTSJSONObject): Boolean {
                val draggableValue = item["draggable"]
                return draggableValue != null && draggableValue.toString() == "false"
            }
            val isItemDisabled = ::gen_isItemDisabled_fn
            val slots = useSlots()
            val hasHandlerSlot = computed<Boolean>(fun(): Boolean {
                return slots["handler"] != null
            }
            )
            val list = ref<UTSArray<UTSJSONObject>>(createDragList())
            val dragIndex = ref<Number>(-1)
            val sortChanged = ref<Boolean>(false)
            val itemHeight = ref<Number>(0)
            val itemWidth = ref<Number>(0)
            val areaWidth = ref<Number>(0)
            val areaHeight = ref<Number>(0)
            val dragStartX = ref<Number>(0)
            val dragStartY = ref<Number>(0)
            val dragOffsetX = ref<Number>(0)
            val dragOffsetY = ref<Number>(0)
            var timer: Number = 0
            var dragTouchId: Number = -1
            val typedList = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                return list.value
            }
            )
            val movableAreaStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val l = typedList.value
                if (props.direction == "vertical") {
                    style["height"] = if (itemHeight.value > 0) {
                        "" + l.length * itemHeight.value + "px"
                    } else {
                        "auto"
                    }
                    style["width"] = "100%"
                    return style
                }
                if (props.direction == "horizontal") {
                    style["height"] = if (itemHeight.value > 0) {
                        "" + itemHeight.value + "px"
                    } else {
                        "auto"
                    }
                    style["width"] = if (itemWidth.value > 0) {
                        "" + l.length * itemWidth.value + "px"
                    } else {
                        "auto"
                    }
                    return style
                }
                val rows = Math.ceil(l.length / props.columns)
                style["height"] = if (itemHeight.value > 0) {
                    "" + rows * itemHeight.value + "px"
                } else {
                    "auto"
                }
                style["width"] = "100%"
                return style
            }
            )
            fun gen_buildItemPosition_fn(item: UTSJSONObject, index: Number): UTSJSONObject {
                val nextItem = copyObject(item)
                var x: Number = 0
                var y: Number = 0
                if (props.direction == "horizontal" && itemWidth.value > 0) {
                    x = index * itemWidth.value
                } else if (props.direction == "vertical" && itemHeight.value > 0) {
                    y = index * itemHeight.value
                } else if (itemWidth.value > 0 && itemHeight.value > 0) {
                    val col = index % props.columns
                    val row = Math.floor(index / props.columns)
                    x = col * itemWidth.value
                    y = row * itemHeight.value
                }
                nextItem["x"] = x
                nextItem["y"] = y
                return nextItem
            }
            val buildItemPosition = ::gen_buildItemPosition_fn
            fun updatePositions(isDragging: Boolean = false): Unit {
                val nextList = _uA<UTSJSONObject>()
                val l = typedList.value
                run {
                    var i: Number = 0
                    while(i < l.length){
                        val currentItem = l[i]
                        if (isDragging && dragIndex.value == i) {
                            nextList.push(copyObject(currentItem))
                        } else {
                            nextList.push(buildItemPosition(currentItem, i))
                        }
                        i++
                    }
                }
                list.value = nextList
            }
            fun gen_initList_fn(): Unit {
                val nextList = _uA<UTSJSONObject>()
                val source = props.initialList
                run {
                    var i: Number = 0
                    while(i < source.length){
                        nextList.push(buildItemPosition(source[i], i))
                        i++
                    }
                }
                list.value = nextList
            }
            val initList = ::gen_initList_fn
            fun gen_calculateItemSize_fn(): UTSPromise<NodeInfo?> {
                return wrapUTSPromise(suspend w1@{
                        await(sleep(30))
                        return@w1 UTSPromise(fun(resolve, _reject){
                            uni_createSelectorQuery().`in`(instance?.proxy).select(".up-dragsort-item-content").boundingClientRect(fun(res: Any){
                                val rect = res as NodeInfo?
                                if (rect != null) {
                                    itemHeight.value = if (rect.height != null) {
                                        rect.height!!
                                    } else {
                                        40
                                    }
                                    itemWidth.value = if (rect.width != null) {
                                        rect.width!!
                                    } else {
                                        80
                                    }
                                    updatePositions()
                                }
                                resolve(rect)
                            }
                            ).exec()
                        }
                        )
                })
            }
            val calculateItemSize = ::gen_calculateItemSize_fn
            fun gen_calculateAreaSize_fn(): UTSPromise<NodeInfo?> {
                return wrapUTSPromise(suspend w1@{
                        await(sleep(30))
                        return@w1 UTSPromise(fun(resolve, _reject){
                            uni_createSelectorQuery().`in`(instance?.proxy).select(".up-dragsort-area").boundingClientRect(fun(res: Any){
                                val rect = res as NodeInfo?
                                if (rect != null) {
                                    areaWidth.value = if (rect.width != null) {
                                        rect.width!!
                                    } else {
                                        300
                                    }
                                    areaHeight.value = if (rect.height != null) {
                                        rect.height!!
                                    } else {
                                        300
                                    }
                                }
                                resolve(rect)
                            }
                            ).exec()
                        }
                        )
                })
            }
            val calculateAreaSize = ::gen_calculateAreaSize_fn
            fun gen_getItemStyle_fn(item: UTSJSONObject, index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                var x = getItemX(item)
                var y = getItemY(item)
                if (dragIndex.value == index) {
                    x = x + dragOffsetX.value
                    y = y + dragOffsetY.value
                }
                style["left"] = "" + x + "px"
                style["top"] = "" + y + "px"
                return style
            }
            val getItemStyle = ::gen_getItemStyle_fn
            fun gen_findTouchByIdentifier_fn(touches: UTSArray<UniTouch>, identifier: Number): UniTouch? {
                run {
                    var i: Number = 0
                    while(i < touches.length){
                        val touch = touches[i]
                        if (touch.identifier == identifier) {
                            return touch
                        }
                        i++
                    }
                }
                return null
            }
            val findTouchByIdentifier = ::gen_findTouchByIdentifier_fn
            fun gen_beginDrag_fn(index: Number, e: UniTouchEvent): Unit {
                val l = typedList.value
                if (!props.draggable || index < 0 || index >= l.length || isItemDisabled(l[index])) {
                    return
                }
                if (dragTouchId != -1) {
                    return
                }
                if (timer > 0) {
                    clearTimeout(timer)
                    timer = 0
                }
                var startTouch: UniTouch? = null
                if (e.changedTouches.length > 0) {
                    startTouch = e.changedTouches[0]
                } else if (e.touches.length > 0) {
                    startTouch = e.touches[0]
                }
                if (startTouch == null) {
                    return
                }
                sortChanged.value = false
                dragIndex.value = index
                dragTouchId = startTouch.identifier
                dragStartX.value = startTouch.pageX
                dragStartY.value = startTouch.pageY
                dragOffsetX.value = 0
                dragOffsetY.value = 0
            }
            val beginDrag = ::gen_beginDrag_fn
            fun gen_onItemTouchStart_fn(index: Number, e: UniTouchEvent): Unit {
                if (props.handleDrag || hasHandlerSlot.value) {
                    return
                }
                beginDrag(index, e)
            }
            val onItemTouchStart = ::gen_onItemTouchStart_fn
            fun gen_onHandlerTouchStart_fn(index: Number, e: UniTouchEvent): Unit {
                beginDrag(index, e)
            }
            val onHandlerTouchStart = ::gen_onHandlerTouchStart_fn
            fun gen_reorderItems_fn(fromIndex: Number, toIndex: Number): Unit {
                val l = typedList.value
                if (fromIndex < 0 || toIndex < 0 || fromIndex >= l.length || toIndex >= l.length) {
                    return
                }
                val movedItems = l.splice(fromIndex, 1) as UTSArray<UTSJSONObject>
                if (movedItems.length == 0) {
                    return
                }
                l.splice(toIndex, 0, movedItems[0])
                list.value = l
                dragIndex.value = toIndex
                sortChanged.value = true
                updatePositions(true)
                if (props.vibrate) {
                    uni_vibrateShort(VibrateShortOptions(type = "light"))
                }
            }
            val reorderItems = ::gen_reorderItems_fn
            fun gen_updateDragTarget_fn(index: Number): Unit {
                val l = typedList.value
                if (l.length <= 1) {
                    return
                }
                val currentX = getItemX(l[index]) + dragOffsetX.value
                val currentY = getItemY(l[index]) + dragOffsetY.value
                var targetIndex = index
                if (props.direction == "vertical") {
                    if (itemHeight.value > 0) {
                        targetIndex = Math.max(0, Math.min(Math.round(currentY / itemHeight.value), l.length - 1))
                    }
                } else if (props.direction == "horizontal") {
                    if (itemWidth.value > 0) {
                        targetIndex = Math.max(0, Math.min(Math.round(currentX / itemWidth.value), l.length - 1))
                    }
                } else {
                    if (itemWidth.value > 0 && itemHeight.value > 0) {
                        val col = Math.max(0, Math.min(Math.round(currentX / itemWidth.value), props.columns - 1))
                        val row = Math.max(0, Math.round(currentY / itemHeight.value))
                        targetIndex = row * props.columns + col
                        targetIndex = Math.max(0, Math.min(targetIndex, l.length - 1))
                    }
                }
                if (targetIndex != index) {
                    reorderItems(index, targetIndex)
                }
            }
            val updateDragTarget = ::gen_updateDragTarget_fn
            fun gen_onTouchMove_fn(e: UniTouchEvent): Unit {
                if (dragIndex.value == -1) {
                    return
                }
                var touch = findTouchByIdentifier(e.changedTouches, dragTouchId)
                if (touch == null) {
                    touch = findTouchByIdentifier(e.touches, dragTouchId)
                }
                if (touch == null) {
                    return
                }
                e.stopPropagation()
                e.preventDefault()
                var offsetX = touch.pageX - dragStartX.value
                var offsetY = touch.pageY - dragStartY.value
                if (props.direction == "vertical") {
                    offsetX = 0
                } else if (props.direction == "horizontal") {
                    offsetY = 0
                }
                dragOffsetX.value = offsetX
                dragOffsetY.value = offsetY
                updateDragTarget(dragIndex.value)
            }
            val onTouchMove = ::gen_onTouchMove_fn
            fun gen_onTouchEnd_fn(e: UniTouchEvent): Unit {
                if (dragIndex.value == -1) {
                    return
                }
                val endTouch = findTouchByIdentifier(e.changedTouches, dragTouchId)
                if (endTouch != null) {
                    var offsetX = endTouch.pageX - dragStartX.value
                    var offsetY = endTouch.pageY - dragStartY.value
                    if (props.direction == "vertical") {
                        offsetX = 0
                    } else if (props.direction == "horizontal") {
                        offsetY = 0
                    }
                    dragOffsetX.value = offsetX
                    dragOffsetY.value = offsetY
                    updateDragTarget(dragIndex.value)
                }
                dragTouchId = -1
                updatePositions()
                dragOffsetX.value = 0
                dragOffsetY.value = 0
                if (sortChanged.value) {
                    emit("drag-end", copyList(typedList.value))
                    sortChanged.value = false
                }
                timer = setTimeout(fun(){
                    dragIndex.value = -1
                    timer = 0
                }
                , 600)
            }
            val onTouchEnd = ::gen_onTouchEnd_fn
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.initialList
            }
            , fun(){
                nextTick(fun(){
                    initList()
                }
                )
            }
            , WatchOptions(deep = true))
            watch(fun(): String {
                return props.direction
            }
            , fun(){
                nextTick(fun(){
                    initList()
                    calculateItemSize()
                    calculateAreaSize()
                }
                )
            }
            )
            watch(fun(): Number {
                return props.columns
            }
            , fun(){
                if (props.direction == "all") {
                    nextTick(fun(){
                        initList()
                        updatePositions()
                    }
                    )
                }
            }
            )
            onMounted(fun(){
                nextTick(fun(){
                    initList()
                    calculateItemSize()
                    calculateAreaSize()
                }
                )
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-dragsort",
                    _uA(
                        if (_ctx.direction == "horizontal") {
                            "up-dragsort--horizontal"
                        } else {
                            ""
                        }
                        ,
                        if (_ctx.direction == "vertical") {
                            "up-dragsort--vertical"
                        } else {
                            ""
                        }
                        ,
                        if (_ctx.direction == "all") {
                            "up-dragsort--all"
                        } else {
                            ""
                        }
                    )
                )), "style" to _nS(movableAreaStyle.value)), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-dragsort-area"), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(typedList.value, fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("key" to getItemKey(item, index), "id" to ("up-dragsort-item-" + index), "class" to _nC(_uA(
                                "weapp-tw-border up-dragsort-item",
                                _uM("dragging" to (dragIndex.value == index), "disabled" to (!_ctx.draggable || isItemDisabled(item)), "up-dragsort-item--vertical" to (_ctx.direction == "vertical"), "up-dragsort-item--horizontal" to (_ctx.direction == "horizontal"), "up-dragsort-item--all" to (_ctx.direction == "all"))
                            )), "style" to _nS(getItemStyle(item, index)), "onTouchstart" to fun(`$event`: Any){
                                onItemTouchStart(index, `$event` as UniTouchEvent)
                            }
                            , "onTouchmove" to fun(`$event`: Any){
                                onTouchMove(`$event` as UniTouchEvent)
                            }
                            , "onTouchend" to fun(`$event`: Any){
                                onTouchEnd(`$event` as UniTouchEvent)
                            }
                            , "onTouchcancel" to fun(`$event`: Any){
                                onTouchEnd(`$event` as UniTouchEvent)
                            }
                            ), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-dragsort-item-content"), _uA(
                                    _cE("view", _uM("class" to _nC(_uA(
                                        "weapp-tw-border ui-dragSort-item-handler",
                                        _uA(
                                            if ((_ctx.handleDrag || hasHandlerSlot.value)) {
                                                "ui-dragSort-item-handler--enabled"
                                            } else {
                                                ""
                                            }
                                            ,
                                            if (_ctx.handlerPosition == "left") {
                                                "ui-dragSort-item-handler--left"
                                            } else {
                                                ""
                                            }
                                        )
                                    )), "data-action" to "handler", "onTouchstart" to withModifiers(fun(`$event`: Any){
                                        onHandlerTouchStart(index, `$event` as UniTouchEvent)
                                    }
                                    , _uA(
                                        "stop"
                                    ))), _uA(
                                        renderSlot(_ctx.`$slots`, "handler", _uM("item" to item, "index" to index))
                                    ), 42, _uA(
                                        "onTouchstart"
                                    )),
                                    renderSlot(_ctx.`$slots`, "default", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                                        return _uA(
                                            _tD(getItemLabel(item))
                                        )
                                    }
                                    )
                                ))
                            ), 46, _uA(
                                "id",
                                "onTouchstart",
                                "onTouchmove",
                                "onTouchend",
                                "onTouchcancel"
                            ))
                        }
                        ), 128)
                    ))
                ), 6)
            }
        }
        var name = "up-dragsort"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-dragsort" to _pS(_uM("width" to "100%", "height" to "auto")), "up-dragsort-area" to _pS(_uM("width" to "100%", "height" to "100%", "position" to "relative")), "up-dragsort-item" to _pS(_uM("position" to "absolute", "width" to "100%")), "dragging" to _pS(_uM("zIndex" to 1000, "boxShadow" to "0 6px 20px rgba(0, 0, 0, 0.15)")), "up-dragsort-item-content" to _pS(_uM("position" to "relative", "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0, "boxSizing" to "border-box")), "ui-dragSort-item-handler--enabled" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "bottom" to 0, "width" to 44, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "zIndex" to 1)), "ui-dragSort-item-handler--left" to _pS(_uM("right" to "auto", "left" to 0)), "up-dragsort-item--vertical" to _pS(_uM("height" to "auto")), "up-dragsort-item--horizontal" to _pS(_uM("width" to "auto", "height" to "auto")), "up-dragsort-item--all" to _pS(_uM("width" to "auto", "height" to "auto")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("drag-end" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "initialList" to _uM("type" to "Array", "required" to true, "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "draggable" to _uM("type" to "Boolean", "default" to true), "vibrate" to _uM("type" to "Boolean", "default" to true), "direction" to _uM("type" to "String", "default" to "vertical"), "columns" to _uM("type" to "Number", "default" to 3), "handleDrag" to _uM("type" to "Boolean", "default" to false), "handlerPosition" to _uM("type" to "String", "default" to "right")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "initialList",
            "draggable",
            "vibrate",
            "direction",
            "columns",
            "handleDrag",
            "handlerPosition"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
