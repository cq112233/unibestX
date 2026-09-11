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
open class GenUniModulesUviewUltraComponentsUpColorPickerUpColorPicker : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: String by `$props`
    open var commonColors: UTSArray<String> by `$props`
    open var confirmColor: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var open: () -> Unit
        get() {
            return unref(this.`$exposed`["open"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "open", value)
        }
    open var close: () -> Unit
        get() {
            return unref(this.`$exposed`["close"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "close", value)
        }
    open var confirm: () -> Unit
        get() {
            return unref(this.`$exposed`["confirm"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "confirm", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpColorPickerUpColorPicker, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpColorPickerUpColorPicker
            val _cache = __ins.renderCache
            fun gen_defaultColors_fn(): UTSArray<String> {
                return _uA<String>("#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#9900ff", "#ffffff", "#000000")
            }
            val defaultColors = ::gen_defaultColors_fn
            fun gen_clamp_fn(value: Number, min: Number, max: Number): Number {
                return Math.max(min, Math.min(max, value))
            }
            val clamp = ::gen_clamp_fn
            fun gen_touchPoint_fn(e: UniTouchEvent): UniTouch? {
                if (e.touches.length > 0) {
                    return e.touches[0]
                }
                if (e.changedTouches.length > 0) {
                    return e.changedTouches[0]
                }
                return null
            }
            val touchPoint = ::gen_touchPoint_fn
            fun gen_round255_fn(value: Number): Number {
                return Math.round(value * 255)
            }
            val round255 = ::gen_round255_fn
            fun gen_parseHexPair_fn(value: String, index: Number): Number {
                return parseInt(value.substring(index, index + 2), 16)
            }
            val parseHexPair = ::gen_parseHexPair_fn
            fun gen_rgbToHsl_fn(r: Number, g: Number, b: Number): UTSJSONObject {
                val rn = r / 255
                val gn = g / 255
                val bn = b / 255
                val max = Math.max(rn, Math.max(gn, bn))
                val min = Math.min(rn, Math.min(gn, bn))
                var h: Number = 0
                var s: Number = 0
                val l = (max + min) / 2
                if (max != min) {
                    val d = max - min
                    s = if (l > 0.5) {
                        d / (2 - max - min)
                    } else {
                        d / (max + min)
                    }
                    if (max == rn) {
                        h = (gn - bn) / d + (if (gn < bn) {
                            6
                        } else {
                            0
                        })
                    } else if (max == gn) {
                        h = (bn - rn) / d + 2
                    } else {
                        h = (rn - gn) / d + 4
                    }
                    h = h / 6
                }
                return _uO("h" to Math.round(h * 360), "s" to (s * 100), "l" to (l * 100))
            }
            val rgbToHsl = ::gen_rgbToHsl_fn
            fun gen_hueToRgb_fn(p: Number, q: Number, t: Number): Number {
                var value = t
                if (value < 0) {
                    value += 1
                }
                if (value > 1) {
                    value -= 1
                }
                if (value < (1 as Number) / 6) {
                    return p + (q - p) * 6 * value
                }
                if (value < 0.5) {
                    return q
                }
                if (value < (2 as Number) / 3) {
                    return p + (q - p) * ((2 as Number) / 3 - value) * 6
                }
                return p
            }
            val hueToRgb = ::gen_hueToRgb_fn
            fun gen_hslToRgba_fn(hue: Number, saturation: Number, lightness: Number, alpha: Number): String {
                var h = hue / 360
                var s = saturation / 100
                var l = lightness / 100
                var r = l
                var g = l
                var b = l
                if (s != 0) {
                    val q = if (l < 0.5) {
                        l * (1 + s)
                    } else {
                        l + s - l * s
                    }
                    val p = 2 * l - q
                    r = hueToRgb(p, q, h + (1 as Number) / 3)
                    g = hueToRgb(p, q, h)
                    b = hueToRgb(p, q, h - (1 as Number) / 3)
                }
                return "rgba(" + round255(r).toString(10) + ", " + round255(g).toString(10) + ", " + round255(b).toString(10) + ", " + alpha.toFixed(2) + ")"
            }
            val hslToRgba = ::gen_hslToRgba_fn
            fun gen_parseSolidColorToState_fn(color: String): UTSJSONObject {
                if (color.startsWith("#") && (color.length == 7 || color.length == 4)) {
                    var r: Number = 0
                    var g: Number = 0
                    var b: Number = 0
                    if (color.length == 7) {
                        r = parseHexPair(color, 1)
                        g = parseHexPair(color, 3)
                        b = parseHexPair(color, 5)
                    } else {
                        r = parseInt(color.substring(1, 2) + color.substring(1, 2), 16)
                        g = parseInt(color.substring(2, 3) + color.substring(2, 3), 16)
                        b = parseInt(color.substring(3, 4) + color.substring(3, 4), 16)
                    }
                    return rgbToHsl(r, g, b)
                }
                return _uO("h" to 0, "s" to 100, "l" to 50)
            }
            val parseSolidColorToState = ::gen_parseSolidColorToState_fn
            fun gen_createGradientColor_fn(color: String, percent: Number): GradientColor {
                return GradientColor(color = color, percent = percent)
            }
            val createGradientColor = ::gen_createGradientColor_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val show = ref<Boolean>(false)
            val colorTypeIndex = ref<Number>(0)
            val hue = ref<Number>(0)
            val saturation = ref<Number>(100)
            val lightness = ref<Number>(50)
            val alpha = ref<Number>(1)
            val saturationPosition = ref<Point>(Point(x = 150, y = 0))
            val huePosition = ref<Number>(0)
            val alphaPosition = ref<Number>(300)
            val gradientColors = ref<UTSArray<GradientColor>>(_uA<GradientColor>(createGradientColor("#ff0000", 0), createGradientColor("#0000ff", 1)))
            val currentDirectionValue = ref<String>("to right")
            val currentColor = ref<String>("#ff0000")
            val draggingPointerIndex = ref<Number>(-1)
            val directionPointer = ref<Point>(Point(x = 40, y = 20))
            val editingGradientIndex = ref<Number>(-1)
            val previewType = ref<String>("solid")
            val gradientTrackRect = ref<PickerRect>(PickerRect(left = 0, top = 0, width = 0, height = 0))
            val saturationRect = ref<PickerRect>(PickerRect(left = 0, top = 0, width = 0, height = 0))
            val hueRect = ref<PickerRect>(PickerRect(left = 0, top = 0, width = 0, height = 0))
            val alphaRect = ref<PickerRect>(PickerRect(left = 0, top = 0, width = 0, height = 0))
            val directionCircleRect = ref<PickerRect>(PickerRect(left = 0, top = 0, width = 0, height = 0))
            val normalizedCommonColors = computed<UTSArray<String>>(fun(): UTSArray<String> {
                val colors = props.commonColors
                if (colors.length > 0) {
                    return colors
                }
                return defaultColors()
            }
            )
            val appStore = useAppStore()
            val confirmColorComputed = computed<String>(fun(): String {
                if (props.confirmColor.length > 0) {
                    return props.confirmColor
                }
                val theme = appStore.state.theme
                if (theme.length > 0) {
                    return theme
                }
                return "#2979ff"
            }
            )
            fun gen_getSwitchItemStyle_fn(index: Number): UTSJSONObject {
                if (colorTypeIndex.value == index) {
                    return _uO("backgroundColor" to confirmColorComputed.value)
                }
                return _uO("backgroundColor" to "#ffffff")
            }
            val getSwitchItemStyle = ::gen_getSwitchItemStyle_fn
            fun gen_getSwitchTextStyle_fn(index: Number): UTSJSONObject {
                return _uO("color" to if (colorTypeIndex.value == index) {
                    "#ffffff"
                } else {
                    "#303133"
                }
                )
            }
            val getSwitchTextStyle = ::gen_getSwitchTextStyle_fn
            val triggerStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("background" to props.modelValue, "backgroundColor" to props.modelValue)
            }
            )
            fun gen_gradientStyleText_fn(): String {
                var colors = ""
                val gColors = gradientColors.value
                run {
                    var i: Number = 0
                    while(i < gColors.length){
                        if (i > 0) {
                            colors += ", "
                        }
                        colors += gColors[i].color
                        i++
                    }
                }
                return "linear-gradient(" + currentDirectionValue.value + ", " + colors + ")"
            }
            val gradientStyleText = ::gen_gradientStyleText_fn
            val displayColor = computed<String>(fun(): String {
                if (previewType.value == "gradient") {
                    return gradientStyleText()
                }
                if (previewType.value == "gradient-point" && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
                    return gradientColors.value[editingGradientIndex.value].color
                }
                return currentColor.value
            }
            )
            val previewStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("background" to displayColor.value, "backgroundColor" to displayColor.value)
            }
            )
            val saturationStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("backgroundColor" to hslToRgba(hue.value, 100, 50, 1))
            }
            )
            val saturationPointerStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("left" to (saturationPosition.value.x.toString(10) + "px"), "top" to (saturationPosition.value.y.toString(10) + "px"))
            }
            )
            val huePointerStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("left" to (huePosition.value.toString(10) + "px"))
            }
            )
            val alphaPointerStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("left" to (alphaPosition.value.toString(10) + "px"))
            }
            )
            val gradientTrackStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("background" to gradientStyleText())
            }
            )
            val directionPointerStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("left" to (directionPointer.value.x.toString(10) + "px"), "top" to (directionPointer.value.y.toString(10) + "px"))
            }
            )
            fun gen_getGradientPointerStyle_fn(item: GradientColor): UTSJSONObject {
                return _uO("left" to ((item.percent * 300).toString(10) + "px"))
            }
            val getGradientPointerStyle = ::gen_getGradientPointerStyle_fn
            fun gen_getGradientPointerInnerStyle_fn(item: GradientColor): UTSJSONObject {
                return _uO("backgroundColor" to item.color)
            }
            val getGradientPointerInnerStyle = ::gen_getGradientPointerInnerStyle_fn
            fun gen_getColorStyle_fn(color: String): UTSJSONObject {
                return _uO("backgroundColor" to color)
            }
            val getColorStyle = ::gen_getColorStyle_fn
            fun gen_parseSolidColor_fn(color: String): Unit {
                val state = parseSolidColorToState(color)
                hue.value = state["h"] as Number
                saturation.value = state["s"] as Number
                lightness.value = state["l"] as Number
                alpha.value = 1
                huePosition.value = hue.value / 360 * 300
                saturationPosition.value = Point(x = saturation.value / 100 * 300, y = (100 - lightness.value) / 100 * 150)
                alphaPosition.value = 300
                currentColor.value = color
            }
            val parseSolidColor = ::gen_parseSolidColor_fn
            fun gen_parseGradientColor_fn(gradient: String): Unit {
                val colors = _uA<GradientColor>()
                val firstHash = gradient.indexOf("#")
                if (firstHash >= 0 && gradient.length >= firstHash + 7) {
                    val firstColor = gradient.substring(firstHash, firstHash + 7)
                    currentColor.value = firstColor
                    colors.push(createGradientColor(firstColor, 0))
                }
                val secondHash = gradient.indexOf("#", firstHash + 1)
                if (secondHash >= 0 && gradient.length >= secondHash + 7) {
                    colors.push(createGradientColor(gradient.substring(secondHash, secondHash + 7), 1))
                }
                if (colors.length >= 2) {
                    gradientColors.value = colors
                }
            }
            val parseGradientColor = ::gen_parseGradientColor_fn
            fun gen_getDirectionAngle_fn(direction: String): Number {
                if (direction == "to bottom") {
                    return 90
                }
                if (direction == "to left") {
                    return 180
                }
                if (direction == "to top") {
                    return 270
                }
                if (direction == "to bottom right") {
                    return 45
                }
                if (direction == "to bottom left") {
                    return 135
                }
                if (direction == "to top left") {
                    return 225
                }
                if (direction == "to top right") {
                    return 315
                }
                return 0
            }
            val getDirectionAngle = ::gen_getDirectionAngle_fn
            fun gen_setDirectionPointerByAngle_fn(angle: Number): Unit {
                val radius: Number = 20
                val radian = angle * Math.PI / 180
                directionPointer.value = Point(x = radius * Math.cos(radian) + 20, y = radius * Math.sin(radian) + 20)
            }
            val setDirectionPointerByAngle = ::gen_setDirectionPointerByAngle_fn
            fun gen_initColor_fn(color: String): Unit {
                if (color.includes("linear-gradient")) {
                    colorTypeIndex.value = 1
                    parseGradientColor(color)
                    previewType.value = "gradient"
                } else {
                    colorTypeIndex.value = 0
                    parseSolidColor(color)
                    previewType.value = "solid"
                }
                setDirectionPointerByAngle(getDirectionAngle(currentDirectionValue.value))
            }
            val initColor = ::gen_initColor_fn
            fun gen_toPickerRect_fn(res: NodeInfo): PickerRect {
                return PickerRect(left = res.left ?: 0, top = res.top ?: 0, width = res.width ?: 0, height = res.height ?: 0)
            }
            val toPickerRect = ::gen_toPickerRect_fn
            fun gen_loadRects_fn(): Unit {
                uni.UNIB120614.upGetRect(".up-color-picker__gradient-track", false, instance?.proxy).then(fun(res: NodeInfo){
                    gradientTrackRect.value = toPickerRect(res)
                }
                )
                uni.UNIB120614.upGetRect(".up-color-picker__saturation", false, instance?.proxy).then(fun(res: NodeInfo){
                    saturationRect.value = toPickerRect(res)
                }
                )
                uni.UNIB120614.upGetRect(".up-color-picker__hue", false, instance?.proxy).then(fun(res: NodeInfo){
                    hueRect.value = toPickerRect(res)
                }
                )
                uni.UNIB120614.upGetRect(".up-color-picker__alpha", false, instance?.proxy).then(fun(res: NodeInfo){
                    alphaRect.value = toPickerRect(res)
                }
                )
                uni.UNIB120614.upGetRect(".up-color-picker__direction-circle", false, instance?.proxy).then(fun(res: NodeInfo){
                    directionCircleRect.value = toPickerRect(res)
                }
                )
            }
            val loadRects = ::gen_loadRects_fn
            fun gen_refreshRect_fn(target: Ref<PickerRect>, selector: String, done: ((rect: PickerRect) -> Unit)?): Unit {
                uni.UNIB120614.upGetRect(selector, false, instance?.proxy).then(fun(res: NodeInfo){
                    val rect = toPickerRect(res)
                    target.value = rect
                    if (done != null) {
                        done(rect)
                    }
                }
                )
            }
            val refreshRect = ::gen_refreshRect_fn
            fun gen_onPopupOpen_fn(): Unit {
                loadRects()
            }
            val onPopupOpen = ::gen_onPopupOpen_fn
            fun gen_open_fn(): Unit {
                initColor(props.modelValue)
                show.value = true
                nextTick(fun(){
                    loadRects()
                }
                )
                setTimeout(fun(){
                    loadRects()
                }
                , 400)
            }
            val open = ::gen_open_fn
            fun gen_close_fn(): Unit {
                show.value = false
                emit("close")
            }
            val close = ::gen_close_fn
            fun gen_confirm_fn(): Unit {
                val color = if (colorTypeIndex.value == 1) {
                    gradientStyleText()
                } else {
                    currentColor.value
                }
                emit("update:modelValue", color)
                emit("confirm", color)
                show.value = false
                editingGradientIndex.value = -1
                previewType.value = if (colorTypeIndex.value == 0) {
                    "solid"
                } else {
                    "gradient"
                }
                emit("close")
            }
            val confirm = ::gen_confirm_fn
            fun gen_changeColorType_fn(index: Number): Unit {
                colorTypeIndex.value = index
                previewType.value = if (index == 0) {
                    "solid"
                } else {
                    "gradient"
                }
                if (index == 0 && currentColor.value.includes("linear-gradient")) {
                    currentColor.value = gradientColors.value[0].color
                    parseSolidColor(currentColor.value)
                }
                nextTick(fun(){
                    loadRects()
                }
                )
            }
            val changeColorType = ::gen_changeColorType_fn
            fun gen_selectCommonColor_fn(color: String): Unit {
                if (colorTypeIndex.value == 1 && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
                    gradientColors.value[editingGradientIndex.value].color = color
                    currentColor.value = color
                    previewType.value = "gradient-point"
                } else {
                    parseSolidColor(color)
                    previewType.value = "solid"
                }
            }
            val selectCommonColor = ::gen_selectCommonColor_fn
            fun gen_openColorPickerForGradient_fn(index: Number): Unit {
                if (index < 0 || index >= gradientColors.value.length) {
                    return
                }
                editingGradientIndex.value = index
                currentColor.value = gradientColors.value[index].color
                parseSolidColor(currentColor.value)
                colorTypeIndex.value = 1
                previewType.value = "gradient-point"
            }
            val openColorPickerForGradient = ::gen_openColorPickerForGradient_fn
            fun gen_sortGradientColors_fn(): Unit {
                val gColors = gradientColors.value
                run {
                    var i: Number = 0
                    while(i < gColors.length - 1){
                        run {
                            var j = i + 1
                            while(j < gColors.length){
                                if (gColors[i].percent > gColors[j].percent) {
                                    val temp = gColors[i]
                                    gColors[i] = gColors[j]
                                    gColors[j] = temp
                                }
                                j++
                            }
                        }
                        i++
                    }
                }
            }
            val sortGradientColors = ::gen_sortGradientColors_fn
            fun gen_addGradientColor_fn(): Unit {
                if (gradientColors.value.length >= 5) {
                    return
                }
                gradientColors.value.push(createGradientColor(currentColor.value, 1))
                sortGradientColors()
            }
            val addGradientColor = ::gen_addGradientColor_fn
            fun gen_removeEditingGradientColor_fn(): Unit {
                if (gradientColors.value.length <= 2) {
                    return
                }
                if (editingGradientIndex.value < 0 || editingGradientIndex.value >= gradientColors.value.length) {
                    return
                }
                gradientColors.value.splice(editingGradientIndex.value, 1)
                editingGradientIndex.value = -1
                previewType.value = "gradient"
            }
            val removeEditingGradientColor = ::gen_removeEditingGradientColor_fn
            fun gen_applyTrackPercent_fn(clientX: Number, rect: PickerRect): Unit {
                if (rect.width <= 0) {
                    return
                }
                val index = draggingPointerIndex.value
                if (index < 0 || index >= gradientColors.value.length) {
                    return
                }
                val percent = clamp((clientX - rect.left) / rect.width, 0, 1)
                gradientColors.value[index].percent = percent
                sortGradientColors()
                run {
                    var i: Number = 0
                    while(i < gradientColors.value.length){
                        if (Math.abs(gradientColors.value[i].percent - percent) < 0.0001) {
                            draggingPointerIndex.value = i
                            editingGradientIndex.value = i
                            break
                        }
                        i++
                    }
                }
            }
            val applyTrackPercent = ::gen_applyTrackPercent_fn
            fun gen_onPointerTouchStart_fn(index: Number): Unit {
                draggingPointerIndex.value = index
                editingGradientIndex.value = index
                currentColor.value = gradientColors.value[index].color
                previewType.value = "gradient-point"
                refreshRect(gradientTrackRect, ".up-color-picker__gradient-track", null)
            }
            val onPointerTouchStart = ::gen_onPointerTouchStart_fn
            fun gen_onPointerTouchMove_fn(e: UniTouchEvent): Unit {
                if (draggingPointerIndex.value < 0 || draggingPointerIndex.value >= gradientColors.value.length) {
                    return
                }
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyTrackPercent(touch.clientX, gradientTrackRect.value)
            }
            val onPointerTouchMove = ::gen_onPointerTouchMove_fn
            fun gen_onPointerTouchEnd_fn(): Unit {
                draggingPointerIndex.value = -1
            }
            val onPointerTouchEnd = ::gen_onPointerTouchEnd_fn
            fun gen_updateSolidColor_fn(): Unit {
                val color = hslToRgba(hue.value, saturation.value, lightness.value, alpha.value)
                if (colorTypeIndex.value == 1 && editingGradientIndex.value >= 0 && editingGradientIndex.value < gradientColors.value.length) {
                    gradientColors.value[editingGradientIndex.value].color = color
                    currentColor.value = color
                    previewType.value = "gradient-point"
                } else {
                    currentColor.value = color
                    previewType.value = "solid"
                }
            }
            val updateSolidColor = ::gen_updateSolidColor_fn
            fun gen_applySaturationPosition_fn(clientX: Number, clientY: Number, rect: PickerRect): Unit {
                if (rect.width <= 0 || rect.height <= 0) {
                    return
                }
                val x = clamp(clientX - rect.left, 0, rect.width)
                val y = clamp(clientY - rect.top, 0, rect.height)
                saturationPosition.value = Point(x = x, y = y)
                saturation.value = x / rect.width * 100
                lightness.value = 100 - y / rect.height * 100
                updateSolidColor()
            }
            val applySaturationPosition = ::gen_applySaturationPosition_fn
            fun gen_onSaturationTouchStart_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                val clientX = touch.clientX
                val clientY = touch.clientY
                refreshRect(saturationRect, ".up-color-picker__saturation", fun(rect: PickerRect){
                    applySaturationPosition(clientX, clientY, rect)
                }
                )
            }
            val onSaturationTouchStart = ::gen_onSaturationTouchStart_fn
            fun gen_onSaturationTouchMove_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applySaturationPosition(touch.clientX, touch.clientY, saturationRect.value)
            }
            val onSaturationTouchMove = ::gen_onSaturationTouchMove_fn
            fun gen_onSaturationTouchEnd_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applySaturationPosition(touch.clientX, touch.clientY, saturationRect.value)
            }
            val onSaturationTouchEnd = ::gen_onSaturationTouchEnd_fn
            fun gen_applyHuePosition_fn(clientX: Number, rect: PickerRect): Unit {
                if (rect.width <= 0) {
                    return
                }
                val x = clamp(clientX - rect.left, 0, rect.width)
                huePosition.value = x
                hue.value = Math.round(x / rect.width * 360)
                updateSolidColor()
            }
            val applyHuePosition = ::gen_applyHuePosition_fn
            fun gen_onHueTouchStart_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                val clientX = touch.clientX
                refreshRect(hueRect, ".up-color-picker__hue", fun(rect: PickerRect){
                    applyHuePosition(clientX, rect)
                }
                )
            }
            val onHueTouchStart = ::gen_onHueTouchStart_fn
            fun gen_onHueTouchMove_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyHuePosition(touch.clientX, hueRect.value)
            }
            val onHueTouchMove = ::gen_onHueTouchMove_fn
            fun gen_onHueTouchEnd_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyHuePosition(touch.clientX, hueRect.value)
            }
            val onHueTouchEnd = ::gen_onHueTouchEnd_fn
            fun gen_applyAlphaPosition_fn(clientX: Number, rect: PickerRect): Unit {
                if (rect.width <= 0) {
                    return
                }
                val x = clamp(clientX - rect.left, 0, rect.width)
                alphaPosition.value = x
                alpha.value = x / rect.width
                updateSolidColor()
            }
            val applyAlphaPosition = ::gen_applyAlphaPosition_fn
            fun gen_onAlphaTouchStart_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                val clientX = touch.clientX
                refreshRect(alphaRect, ".up-color-picker__alpha", fun(rect: PickerRect){
                    applyAlphaPosition(clientX, rect)
                }
                )
            }
            val onAlphaTouchStart = ::gen_onAlphaTouchStart_fn
            fun gen_onAlphaTouchMove_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyAlphaPosition(touch.clientX, alphaRect.value)
            }
            val onAlphaTouchMove = ::gen_onAlphaTouchMove_fn
            fun gen_onAlphaTouchEnd_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyAlphaPosition(touch.clientX, alphaRect.value)
            }
            val onAlphaTouchEnd = ::gen_onAlphaTouchEnd_fn
            fun gen_updateGradientDirection_fn(angle: Number): Unit {
                if (angle >= 315 || angle < 45) {
                    currentDirectionValue.value = "to right"
                } else if (angle >= 45 && angle < 135) {
                    currentDirectionValue.value = "to bottom"
                } else if (angle >= 135 && angle < 225) {
                    currentDirectionValue.value = "to left"
                } else {
                    currentDirectionValue.value = "to top"
                }
            }
            val updateGradientDirection = ::gen_updateGradientDirection_fn
            fun gen_applyDirectionPosition_fn(clientX: Number, clientY: Number, rect: PickerRect): Unit {
                if (rect.width <= 0 || rect.height <= 0) {
                    return
                }
                val centerX = rect.left + rect.width / 2
                val centerY = rect.top + rect.height / 2
                val x = clientX - centerX
                val y = clientY - centerY
                val distance = Math.sqrt(x * x + y * y)
                val radius = rect.width / 2
                val ratio = if (distance > radius) {
                    radius / distance
                } else {
                    1
                }
                directionPointer.value = Point(x = x * ratio + rect.width / 2, y = y * ratio + rect.height / 2)
                var angle = Math.atan2(y, x) * 180 / Math.PI
                if (angle < 0) {
                    angle += 360
                }
                updateGradientDirection(angle)
            }
            val applyDirectionPosition = ::gen_applyDirectionPosition_fn
            fun gen_onDirectionTouchStart_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                val clientX = touch.clientX
                val clientY = touch.clientY
                refreshRect(directionCircleRect, ".up-color-picker__direction-circle", fun(rect: PickerRect){
                    applyDirectionPosition(clientX, clientY, rect)
                }
                )
            }
            val onDirectionTouchStart = ::gen_onDirectionTouchStart_fn
            fun gen_onDirectionTouchMove_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyDirectionPosition(touch.clientX, touch.clientY, directionCircleRect.value)
            }
            val onDirectionTouchMove = ::gen_onDirectionTouchMove_fn
            fun gen_onDirectionTouchEnd_fn(e: UniTouchEvent): Unit {
                val touch = touchPoint(e)
                if (touch == null) {
                    return
                }
                applyDirectionPosition(touch.clientX, touch.clientY, directionCircleRect.value)
            }
            val onDirectionTouchEnd = ::gen_onDirectionTouchEnd_fn
            watch(fun(): String {
                return props.modelValue
            }
            , fun(newVal: String){
                if (!show.value) {
                    initColor(newVal)
                }
            }
            )
            onMounted(fun(){
                initColor(props.modelValue)
            }
            )
            __expose(_uM("open" to open, "close" to close, "confirm" to confirm))
            return fun(): Any? {
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-color-picker"), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__trigger", "style" to _nS(triggerStyle.value), "onClick" to open), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 4),
                    _cV(_component_up_popup, _uM("show" to show.value, "mode" to "bottom", "round" to "10", "onClose" to close, "onOpen" to onPopupOpen, "closeOnClickOverlay" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to "weapp-tw-border up-color-picker__content"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-color-picker__header"), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border up-color-picker__title"), "选择颜色")
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border up-color-picker__switch"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__switch-item", "style" to _nS(getSwitchItemStyle(0)), "onClick" to fun(){
                                        changeColorType(0)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-color-picker__switch-text", "style" to _nS(getSwitchTextStyle(0))), "纯色", 4)
                                    ), 12, _uA(
                                        "onClick"
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__switch-item", "style" to _nS(getSwitchItemStyle(1)), "onClick" to fun(){
                                        changeColorType(1)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-color-picker__switch-text", "style" to _nS(getSwitchTextStyle(1))), "渐变", 4)
                                    ), 12, _uA(
                                        "onClick"
                                    ))
                                )),
                                if (colorTypeIndex.value == 1) {
                                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-color-picker__gradient"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__gradient-track", "style" to _nS(gradientTrackStyle.value)), _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(gradientColors.value, fun(item, index, __index, _cached): Any {
                                                return _cE("view", _uM("key" to index, "class" to "weapp-tw-border up-color-picker__gradient-pointer", "style" to _nS(getGradientPointerStyle(item)), "onTouchstart" to fun(){
                                                    onPointerTouchStart(index)
                                                }, "onTouchmove" to onPointerTouchMove, "onTouchend" to onPointerTouchEnd, "onClick" to fun(){
                                                    openColorPickerForGradient(index)
                                                }), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__gradient-pointer-inner", "style" to _nS(getGradientPointerInnerStyle(item))), null, 4)
                                                ), 44, _uA(
                                                    "onTouchstart",
                                                    "onClick"
                                                ))
                                            }), 128)
                                        ), 4),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__gradient-controls"), _uA(
                                            _cV(_component_up_button, _uM("type" to "primary", "color" to _ctx.confirmColor, "size" to "mini", "plain" to "", "class" to "up-color-picker__add-btn", "text" to "添加颜色", "onClick" to addGradientColor), null, 8, _uA(
                                                "color"
                                            )),
                                            _cV(_component_up_button, _uM("type" to "info", "size" to "mini", "plain" to "", "class" to "up-color-picker__add-btn", "text" to "删除当前", "onClick" to removeEditingGradientColor))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__gradient-direction"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border up-color-picker__label"), "方向:"),
                                            _cE("view", _uM("class" to "weapp-tw-border up-color-picker__direction-circle", "onTouchstart" to onDirectionTouchStart, "onTouchmove" to onDirectionTouchMove, "onTouchend" to onDirectionTouchEnd), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border up-color-picker__direction-pointer", "style" to _nS(directionPointerStyle.value)), null, 4)
                                            ), 32)
                                        ))
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                _cE("view", _uM("class" to "weapp-tw-border up-color-picker__solid"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__saturation", "style" to _nS(saturationStyle.value), "onTouchstart" to onSaturationTouchStart, "onTouchmove" to onSaturationTouchMove, "onTouchend" to onSaturationTouchEnd), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__saturation-white")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__saturation-black")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__saturation-pointer", "style" to _nS(saturationPointerStyle.value)), null, 4)
                                    ), 36),
                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue", "onTouchstart" to onHueTouchStart, "onTouchmove" to onHueTouchMove, "onTouchend" to onHueTouchEnd), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-segment up-color-picker__hue-segment--1")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-segment up-color-picker__hue-segment--2")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-segment up-color-picker__hue-segment--3")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-segment up-color-picker__hue-segment--4")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-segment up-color-picker__hue-segment--5")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-segment up-color-picker__hue-segment--6")),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__hue-pointer", "style" to _nS(huePointerStyle.value)), null, 4)
                                    ), 32),
                                    if (colorTypeIndex.value == 0) {
                                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-color-picker__alpha", "onTouchstart" to onAlphaTouchStart, "onTouchmove" to onAlphaTouchMove, "onTouchend" to onAlphaTouchEnd), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border up-color-picker__alpha-bg")),
                                            _cE("view", _uM("class" to "weapp-tw-border up-color-picker__alpha-mask")),
                                            _cE("view", _uM("class" to "weapp-tw-border up-color-picker__alpha-pointer", "style" to _nS(alphaPointerStyle.value)), null, 4)
                                        ), 32)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )),
                                if (normalizedCommonColors.value.length > 0) {
                                    _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-color-picker__common"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-color-picker__common-title"), "常用颜色"),
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__common-list"), _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(normalizedCommonColors.value, fun(color, index, __index, _cached): Any {
                                                return _cE("view", _uM("key" to index, "class" to "weapp-tw-border up-color-picker__common-item", "style" to _nS(getColorStyle(color)), "onClick" to fun(){
                                                    selectCommonColor(color)
                                                }), null, 12, _uA(
                                                    "onClick"
                                                ))
                                            }), 128)
                                        ))
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                _cE("view", _uM("class" to "weapp-tw-border up-color-picker__footer"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__preview"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border up-color-picker__preview-color", "style" to _nS(previewStyle.value)), null, 4),
                                        _cE("text", _uM("class" to "weapp-tw-border up-color-picker__preview-text"), _tD(displayColor.value), 1)
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border up-color-picker__actions"), _uA(
                                        _cV(_component_up_button, _uM("type" to "primary", "color" to _ctx.confirmColor, "size" to "small", "class" to "up-color-picker__btn", "text" to "确定", "onClick" to confirm), null, 8, _uA(
                                            "color"
                                        )),
                                        _cV(_component_up_button, _uM("type" to "info", "size" to "small", "class" to "up-color-picker__btn", "text" to "取消", "onClick" to close))
                                    ))
                                ))
                            ))
                        )
                    }
                    ), "_" to 1), 8, _uA(
                        "show"
                    ))
                ))
            }
        }
        var name = "up-color-picker"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-color-picker__trigger" to _pS(_uM("width" to 32, "height" to 32, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e5e5e5", "borderRightColor" to "#e5e5e5", "borderBottomColor" to "#e5e5e5", "borderLeftColor" to "#e5e5e5")), "up-color-picker__content" to _pS(_uM("width" to "100%", "paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20, "backgroundColor" to "#ffffff")), "up-color-picker__header" to _pS(_uM("alignItems" to "center", "marginBottom" to 16)), "up-color-picker__title" to _pS(_uM("fontSize" to 18, "fontWeight" to "bold", "color" to "#333333")), "up-color-picker__switch" to _pS(_uM("display" to "flex", "flexDirection" to "row", "marginBottom" to 18, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e5e5e5", "borderRightColor" to "#e5e5e5", "borderBottomColor" to "#e5e5e5", "borderLeftColor" to "#e5e5e5", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "overflow" to "hidden")), "up-color-picker__switch-item" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to 34, "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#ffffff")), "up-color-picker__switch-item--active" to _pS(_uM("backgroundColor" to "#2979ff")), "up-color-picker__switch-text" to _pS(_uM("fontSize" to 14, "color" to "#303133")), "up-color-picker__gradient" to _pS(_uM("marginBottom" to 12)), "up-color-picker__gradient-track" to _pS(_uM("position" to "relative", "width" to 300, "height" to 32, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "marginBottom" to 15)), "up-color-picker__gradient-pointer" to _pS(_uM("position" to "absolute", "top" to -10, "width" to 20, "height" to 52, "transform" to "translateX(-10px)", "alignItems" to "center")), "up-color-picker__gradient-pointer-inner" to _pS(_uM("width" to 20, "height" to 20, "borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10, "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#ffffff", "borderRightColor" to "#ffffff", "borderBottomColor" to "#ffffff", "borderLeftColor" to "#ffffff", "boxShadow" to "0 0 2px rgba(0, 0, 0, 0.5)")), "up-color-picker__gradient-controls" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "marginBottom" to 15)), "up-color-picker__add-btn" to _pS(_uM("marginRight" to 10)), "up-color-picker__gradient-direction" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "marginTop" to 10, "marginRight" to 0, "marginBottom" to 10, "marginLeft" to 0)), "up-color-picker__label" to _pS(_uM("fontSize" to 14, "color" to "#606266", "marginRight" to 12)), "up-color-picker__direction-circle" to _pS(_uM("width" to 40, "height" to 40, "borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20, "backgroundColor" to "#f5f7fa", "position" to "relative", "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#eeeeee", "borderRightColor" to "#eeeeee", "borderBottomColor" to "#eeeeee", "borderLeftColor" to "#eeeeee")), "up-color-picker__direction-pointer" to _pS(_uM("position" to "absolute", "width" to 8, "height" to 8, "backgroundColor" to "#ffffff", "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#333333", "borderRightColor" to "#333333", "borderBottomColor" to "#333333", "borderLeftColor" to "#333333", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "transform" to "translate(-4px, -4px)")), "up-color-picker__solid" to _pS(_uM("marginBottom" to 10)), "up-color-picker__saturation" to _pS(_uM("position" to "relative", "width" to 300, "height" to 150, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "marginBottom" to 15, "overflow" to "hidden")), "up-color-picker__saturation-white" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "top" to 0, "bottom" to 0, "backgroundImage" to "linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0))", "backgroundColor" to "rgba(0,0,0,0)")), "up-color-picker__saturation-black" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "top" to 0, "bottom" to 0, "backgroundImage" to "linear-gradient(to top, #000000, rgba(0, 0, 0, 0))", "backgroundColor" to "rgba(0,0,0,0)")), "up-color-picker__saturation-pointer" to _pS(_uM("position" to "absolute", "width" to 12, "height" to 12, "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#ffffff", "borderRightColor" to "#ffffff", "borderBottomColor" to "#ffffff", "borderLeftColor" to "#ffffff", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "transform" to "translate(-6px, -6px)", "boxShadow" to "0 0 2px rgba(0, 0, 0, 0.5)")), "up-color-picker__hue" to _pS(_uM("position" to "relative", "width" to 300, "height" to 12, "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "marginBottom" to 15, "flexDirection" to "row")), "up-color-picker__alpha" to _pS(_uM("position" to "relative", "width" to 300, "height" to 12, "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "marginBottom" to 15, "overflow" to "hidden", "backgroundColor" to "#eeeeee")), "up-color-picker__hue-segment" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to 12)), "up-color-picker__hue-segment--1" to _pS(_uM("borderTopLeftRadius" to 6, "borderBottomLeftRadius" to 6, "backgroundImage" to "linear-gradient(to right, #ff0000, #ffff00)")), "up-color-picker__hue-segment--2" to _pS(_uM("backgroundImage" to "linear-gradient(to right, #ffff00, #00ff00)")), "up-color-picker__hue-segment--3" to _pS(_uM("backgroundImage" to "linear-gradient(to right, #00ff00, #00ffff)")), "up-color-picker__hue-segment--4" to _pS(_uM("backgroundImage" to "linear-gradient(to right, #00ffff, #0000ff)")), "up-color-picker__hue-segment--5" to _pS(_uM("backgroundImage" to "linear-gradient(to right, #0000ff, #ff00ff)")), "up-color-picker__hue-segment--6" to _pS(_uM("borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "backgroundImage" to "linear-gradient(to right, #ff00ff, #ff0000)")), "up-color-picker__alpha-bg" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "top" to 0, "bottom" to 0)), "up-color-picker__alpha-mask" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "top" to 0, "bottom" to 0, "backgroundImage" to "linear-gradient(to right, rgba(255, 255, 255, 0), white)", "backgroundColor" to "rgba(0,0,0,0)")), "up-color-picker__hue-pointer" to _pS(_uM("position" to "absolute", "width" to 4, "height" to 16, "backgroundColor" to "#ffffff", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#cccccc", "borderRightColor" to "#cccccc", "borderBottomColor" to "#cccccc", "borderLeftColor" to "#cccccc", "borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "transform" to "translateX(-2px)", "top" to -2, "boxShadow" to "0 0 2px rgba(0, 0, 0, 0.5)")), "up-color-picker__alpha-pointer" to _pS(_uM("position" to "absolute", "width" to 4, "height" to 16, "backgroundColor" to "#ffffff", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#cccccc", "borderRightColor" to "#cccccc", "borderBottomColor" to "#cccccc", "borderLeftColor" to "#cccccc", "borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "transform" to "translateX(-2px)", "top" to -2, "boxShadow" to "0 0 2px rgba(0, 0, 0, 0.5)")), "up-color-picker__common" to _pS(_uM("marginTop" to 16)), "up-color-picker__common-title" to _pS(_uM("marginBottom" to 10, "fontSize" to 14, "color" to "#666666")), "up-color-picker__common-list" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap")), "up-color-picker__common-item" to _pS(_uM("width" to 24, "height" to 24, "borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12, "marginRight" to 10, "marginBottom" to 10, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#eeeeee", "borderRightColor" to "#eeeeee", "borderBottomColor" to "#eeeeee", "borderLeftColor" to "#eeeeee")), "up-color-picker__footer" to _pS(_uM("marginTop" to 20)), "up-color-picker__preview" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "marginBottom" to 15)), "up-color-picker__preview-color" to _pS(_uM("width" to 40, "height" to 40, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#eeeeee", "borderRightColor" to "#eeeeee", "borderBottomColor" to "#eeeeee", "borderLeftColor" to "#eeeeee", "marginRight" to 10)), "up-color-picker__preview-text" to _pS(_uM("fontSize" to 14, "color" to "#333333", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-color-picker__actions" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "flex-end")), "up-color-picker__btn" to _pS(_uM("marginLeft" to 10)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "confirm" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to "String", "default" to "#ff0000"), "commonColors" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA<String>()
        }
        ), "confirmColor" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "commonColors",
            "confirmColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
