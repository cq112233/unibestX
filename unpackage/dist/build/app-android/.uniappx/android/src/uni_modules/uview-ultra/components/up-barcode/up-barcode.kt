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
import io.dcloud.uniapp.extapi.createCanvasContextAsync as uni_createCanvasContextAsync
open class GenUniModulesUviewUltraComponentsUpBarcodeUpBarcode : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var value: Any by `$props`
    open var format: String by `$props`
    open var width: Number by `$props`
    open var height: Number by `$props`
    open var displayValue: Boolean by `$props`
    open var text: String by `$props`
    open var fontOptions: String by `$props`
    open var font: String by `$props`
    open var textAlign: String by `$props`
    open var textPosition: String by `$props`
    open var textMargin: Number by `$props`
    open var fontSize: Number by `$props`
    open var background: String by `$props`
    open var lineColor: String by `$props`
    open var margin: Number by `$props`
    open var marginTop: Number by `$props`
    open var marginBottom: Number by `$props`
    open var marginLeft: Number by `$props`
    open var marginRight: Number by `$props`
    open var useCanvas: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var generateBarcode: () -> Unit
        get() {
            return unref(this.`$exposed`["generateBarcode"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "generateBarcode", value)
        }
    open fun toTempFilePath(options: UTSJSONObject = _uO()): Unit {
        return callKotlinFunction(this.`$exposed`["toTempFilePath"]!!, _uA(
            options
        )) as Unit
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpBarcodeUpBarcode, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpBarcodeUpBarcode
            val _cache = __ins.renderCache
            fun gen_stringValue_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val stringValue = ::gen_stringValue_fn
            fun gen_normalizeNumber_fn(value: Any?, defaultValue: Number): Number {
                if (UTSAndroid.`typeof`(value) === "number") {
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
            val normalizeNumber = ::gen_normalizeNumber_fn
            fun gen_digitAt_fn(value: String, index: Number): Number {
                return parseInt(value.substring(index, index + 1))
            }
            val digitAt = ::gen_digitAt_fn
            fun gen_code128Patterns_fn(): UTSArray<String> {
                return _uA(
                    "11011001100",
                    "11001101100",
                    "11001100110",
                    "10010011000",
                    "10010001100",
                    "10001001100",
                    "10011001000",
                    "10011000100",
                    "10001100100",
                    "11001001000",
                    "11001000100",
                    "11000100100",
                    "10110011100",
                    "10011011100",
                    "10011001110",
                    "10111001100",
                    "10011101100",
                    "10011100110",
                    "11001110010",
                    "11001011100",
                    "11001001110",
                    "11011100100",
                    "11001110100",
                    "11101101110",
                    "11101001100",
                    "11100101100",
                    "11100100110",
                    "11101100100",
                    "11100110100",
                    "11100110010",
                    "11011011000",
                    "11011000110",
                    "11000110110",
                    "10100011000",
                    "10001011000",
                    "10001000110",
                    "10110001000",
                    "10001101000",
                    "10001100010",
                    "11010001000",
                    "11000101000",
                    "11000100010",
                    "10110111000",
                    "10110001110",
                    "10001101110",
                    "10111011000",
                    "10111000110",
                    "10001110110",
                    "11101110110",
                    "11010001110",
                    "11000101110",
                    "11011101000",
                    "11011100010",
                    "11011101110",
                    "11101011000",
                    "11101000110",
                    "11100010110",
                    "11101101000",
                    "11101100010",
                    "11100011010",
                    "11101111010",
                    "11001000010",
                    "11110001010",
                    "10100110000",
                    "10100001100",
                    "10010110000",
                    "10010000110",
                    "10000101100",
                    "10000100110",
                    "10110010000",
                    "10110000100",
                    "10011010000",
                    "10011000010",
                    "10000110100",
                    "10000110010",
                    "11000010010",
                    "11001010000",
                    "11110111010",
                    "11000010100",
                    "10001111010",
                    "10100111100",
                    "10010111100",
                    "10010011110",
                    "10111100100",
                    "10011110100",
                    "10011110010",
                    "11110100100",
                    "11110010100",
                    "11110010010",
                    "11011011110",
                    "11011110110",
                    "11110110110",
                    "10101111000",
                    "10100011110",
                    "10001011110",
                    "10111101000",
                    "10111100010",
                    "11110101000",
                    "11110100010",
                    "10111011110",
                    "10111101110",
                    "11101011110",
                    "11110101110",
                    "11010000100",
                    "11010010000",
                    "11010011100",
                    "11000111010"
                )
            }
            val code128Patterns = ::gen_code128Patterns_fn
            fun gen_leftOddCodes_fn(): UTSArray<String> {
                return _uA(
                    "0001101",
                    "0011001",
                    "0010011",
                    "0111101",
                    "0100011",
                    "0110001",
                    "0101111",
                    "0111011",
                    "0110111",
                    "0001011"
                )
            }
            val leftOddCodes = ::gen_leftOddCodes_fn
            fun gen_leftEvenCodes_fn(): UTSArray<String> {
                return _uA(
                    "0100111",
                    "0110011",
                    "0011011",
                    "0100001",
                    "0011101",
                    "0111001",
                    "0000101",
                    "0010001",
                    "0001001",
                    "0010111"
                )
            }
            val leftEvenCodes = ::gen_leftEvenCodes_fn
            fun gen_rightCodes_fn(): UTSArray<String> {
                return _uA(
                    "1110010",
                    "1100110",
                    "1101100",
                    "1000010",
                    "1011100",
                    "1001110",
                    "1010000",
                    "1000100",
                    "1001000",
                    "1110100"
                )
            }
            val rightCodes = ::gen_rightCodes_fn
            fun gen_code39Map_fn(): UTSJSONObject {
                return _uO("0" to "101001101101", "1" to "110100101011", "2" to "101100101011", "3" to "110110010101", "4" to "101001101011", "5" to "110100110101", "6" to "101100110101", "7" to "101001011011", "8" to "110100101101", "9" to "101100101101", "A" to "110101001011", "B" to "101101001011", "C" to "110110100101", "D" to "101011001011", "E" to "110101100101", "F" to "101101100101", "G" to "101010011011", "H" to "110101001101", "I" to "101101001101", "J" to "101011001101", "K" to "110101010011", "L" to "101101010011", "M" to "110110101001", "N" to "101011010011", "O" to "110101101001", "P" to "101101101001", "Q" to "101010110011", "R" to "110101011001", "S" to "101101011001", "T" to "101011011001", "U" to "110010101011", "V" to "100011101010111", "W" to "111000111010101", "X" to "100010111010111", "Y" to "111000101110101", "Z" to "100011101110101", "-" to "100010101110111", "." to "111000101011101", " " to "100011101011101", "*" to "100010111011101", "\$" to "100010001000101", "/" to "100010001010001", "+" to "100010100010001", "%" to "101000100010001")
            }
            val code39Map = ::gen_code39Map_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val canvasId = ref<String>("up-barcode-" + Date.now().toString(10))
            val barcodeImage = ref<String>("")
            val showCanvas = ref<Boolean>(false)
            var canvasContext: CanvasContext? = null
            var ctx: CanvasRenderingContext2D? = null
            val bars = ref(_uA<UTSJSONObject>())
            val canvasWidth = ref<Number>(200)
            val canvasHeight = ref<Number>(80)
            val error = ref<String>("")
            val marginTopValue = computed<Number>(fun(): Number {
                return if (props.marginTop >= 0) {
                    props.marginTop
                } else {
                    props.margin
                }
            }
            )
            val marginBottomValue = computed<Number>(fun(): Number {
                return if (props.marginBottom >= 0) {
                    props.marginBottom
                } else {
                    props.margin
                }
            }
            )
            val marginLeftValue = computed<Number>(fun(): Number {
                return if (props.marginLeft >= 0) {
                    props.marginLeft
                } else {
                    props.margin
                }
            }
            )
            val marginRightValue = computed<Number>(fun(): Number {
                return if (props.marginRight >= 0) {
                    props.marginRight
                } else {
                    props.margin
                }
            }
            )
            val displayText = computed<String>(fun(): String {
                return if (props.text.length > 0) {
                    props.text
                } else {
                    stringValue(props.value)
                }
            }
            )
            val showTopText = computed<Boolean>(fun(): Boolean {
                return props.displayValue && props.textPosition == "top" && error.value.length == 0
            }
            )
            val showBottomText = computed<Boolean>(fun(): Boolean {
                return props.displayValue && props.textPosition != "top" && error.value.length == 0
            }
            )
            val showImage = computed<Boolean>(fun(): Boolean {
                return props.useCanvas == false && barcodeImage.value.length > 0 && error.value.length == 0
            }
            )
            val rootStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (canvasWidth.value.toString(10) + "px"), "minHeight" to (canvasHeight.value.toString(10) + "px"), "paddingTop" to (marginTopValue.value.toString(10) + "px"), "paddingBottom" to (marginBottomValue.value.toString(10) + "px"), "paddingLeft" to (marginLeftValue.value.toString(10) + "px"), "paddingRight" to (marginRightValue.value.toString(10) + "px"), "backgroundColor" to props.background)
            }
            )
            val barcodeStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (props.width.toString(10) + "px"), "height" to (props.height.toString(10) + "px"), "backgroundColor" to props.background)
            }
            )
            val canvasStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (canvasWidth.value.toString(10) + "px"), "height" to (canvasHeight.value.toString(10) + "px"))
            }
            )
            val imageStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (canvasWidth.value.toString(10) + "px"), "height" to (canvasHeight.value.toString(10) + "px"))
            }
            )
            val textStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("fontSize" to (props.fontSize.toString(10) + "px"), "lineHeight" to ((props.fontSize + props.textMargin).toString(10) + "px"), "color" to props.lineColor, "textAlign" to props.textAlign)
            }
            )
            fun gen_getBarStyle_fn(bar: UTSJSONObject): UTSJSONObject {
                return _uO("width" to (normalizeNumber(bar["width"], 1).toString(10) + "px"), "height" to (props.height.toString(10) + "px"), "backgroundColor" to stringValue(bar["color"]))
            }
            val getBarStyle = ::gen_getBarStyle_fn
            fun gen_getErrorMessage_fn(err: Any?): String {
                if (err == null) {
                    return ""
                }
                val errObj = err as UTSJSONObject
                val message = errObj["message"]
                return if (message == null) {
                    err.toString()
                } else {
                    message.toString()
                }
            }
            val getErrorMessage = ::gen_getErrorMessage_fn
            fun gen_createBars_fn(bits: String): UTSArray<UTSJSONObject> {
                val list = _uA<UTSJSONObject>()
                if (bits.length == 0) {
                    return list
                }
                val moduleWidth = props.width / bits.length
                var current = bits.substring(0, 1)
                var count: Number = 1
                run {
                    var i: Number = 1
                    while(i < bits.length){
                        val bit = bits.substring(i, i + 1)
                        if (bit == current) {
                            count++
                        } else {
                            list.push(_uO("color" to if (current == "1") {
                                props.lineColor
                            } else {
                                props.background
                            }
                            , "width" to (count * moduleWidth)))
                            current = bit
                            count = 1
                        }
                        i++
                    }
                }
                list.push(_uO("color" to if (current == "1") {
                    props.lineColor
                } else {
                    props.background
                }
                , "width" to (count * moduleWidth)))
                return list
            }
            val createBars = ::gen_createBars_fn
            fun gen_encodeCode128_fn(data: String): String {
                val chars = " !\"#\$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
                val codes = _uA<Number>()
                var checksum: Number = 104
                codes.push(104)
                run {
                    var i: Number = 0
                    while(i < data.length){
                        val code = chars.indexOf(data.substring(i, i + 1))
                        if (code < 0) {
                            throw UTSError("Invalid character in CODE128")
                        }
                        codes.push(code)
                        checksum += code * (i + 1)
                        i++
                    }
                }
                codes.push(checksum % 103)
                codes.push(106)
                val patterns = code128Patterns()
                var barcode = ""
                run {
                    var i: Number = 0
                    while(i < codes.length){
                        barcode += patterns[codes[i]]
                        i++
                    }
                }
                return barcode + "00000"
            }
            val encodeCode128 = ::gen_encodeCode128_fn
            fun gen_encodeCode39_fn(data: String): String {
                val codes = code39Map()
                val kVal = data.toUpperCase()
                var barcode = stringValue(codes["*"])
                run {
                    var i: Number = 0
                    while(i < kVal.length){
                        val char = kVal.substring(i, i + 1)
                        val code = codes[char]
                        if (code == null) {
                            throw UTSError("Invalid character in CODE39")
                        }
                        barcode += "0" + code.toString()
                        i++
                    }
                }
                return barcode + "0" + stringValue(codes["*"])
            }
            val encodeCode39 = ::gen_encodeCode39_fn
            fun gen_encodeEAN13_fn(data: String): String {
                if (!UTSRegExp("^\\d{13}\$", "").test(data)) {
                    throw UTSError("EAN13 must be 13 digits")
                }
                var sum: Number = 0
                run {
                    var i: Number = 0
                    while(i < 12){
                        val digit = digitAt(data, i)
                        sum += if (i % 2 == 0) {
                            digit
                        } else {
                            digit * 3
                        }
                        i++
                    }
                }
                val checkDigit = (10 - (sum % 10)) % 10
                if (digitAt(data, 12) != checkDigit) {
                    throw UTSError("Invalid EAN13 check digit")
                }
                val leftData = data.substring(1, 7)
                val rightData = data.substring(7, 13)
                val parity = _uA<String>("LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL")
                val odd = leftOddCodes()
                val even = leftEvenCodes()
                val right = rightCodes()
                val pattern = parity[digitAt(data, 0)]
                var barcode = "101"
                run {
                    var i: Number = 0
                    while(i < leftData.length){
                        val digit = digitAt(leftData, i)
                        barcode += if (pattern.substring(i, i + 1) == "L") {
                            odd[digit]
                        } else {
                            even[digit]
                        }
                        i++
                    }
                }
                barcode += "01010"
                run {
                    var i: Number = 0
                    while(i < rightData.length){
                        barcode += right[digitAt(rightData, i)]
                        i++
                    }
                }
                return barcode + "101"
            }
            val encodeEAN13 = ::gen_encodeEAN13_fn
            fun gen_encodeEAN8_fn(data: String): String {
                if (!UTSRegExp("^\\d{8}\$", "").test(data)) {
                    throw UTSError("EAN8 must be 8 digits")
                }
                var sum: Number = 0
                run {
                    var i: Number = 0
                    while(i < 7){
                        val digit = digitAt(data, i)
                        sum += digit * (if (i % 2 == 0) {
                            3
                        } else {
                            1
                        }
                        )
                        i++
                    }
                }
                val checkDigit = (10 - (sum % 10)) % 10
                if (digitAt(data, 7) != checkDigit) {
                    throw UTSError("Invalid EAN8 check digit")
                }
                val odd = leftOddCodes()
                val right = rightCodes()
                var barcode = "101"
                run {
                    var i: Number = 0
                    while(i < 4){
                        barcode += odd[digitAt(data, i)]
                        i++
                    }
                }
                barcode += "01010"
                run {
                    var i: Number = 4
                    while(i < 8){
                        barcode += right[digitAt(data, i)]
                        i++
                    }
                }
                return barcode + "101"
            }
            val encodeEAN8 = ::gen_encodeEAN8_fn
            fun gen_encodeEAN52_fn(data: String, fmt: String): String {
                val length = if (fmt == "EAN5") {
                    5
                } else {
                    2
                }
                if (data.length != length || !UTSRegExp("^\\d+\$", "").test(data)) {
                    throw UTSError(fmt + " must be " + length.toString() + " digits")
                }
                val codes = leftOddCodes()
                var barcode = "1011"
                run {
                    var i: Number = 0
                    while(i < data.length){
                        if (i > 0) {
                            barcode += "01"
                        }
                        barcode += codes[digitAt(data, i)]
                        i++
                    }
                }
                return barcode
            }
            val encodeEAN52 = ::gen_encodeEAN52_fn
            fun gen_encodeUPCA_fn(data: String): String {
                var kVal = data
                if (UTSRegExp("^\\d{11}\$", "").test(kVal)) {
                    var sum: Number = 0
                    run {
                        var i: Number = 0
                        while(i < 11){
                            val digit = digitAt(kVal, i)
                            sum += if (i % 2 == 0) {
                                digit * 3
                            } else {
                                digit
                            }
                            i++
                        }
                    }
                    kVal += ((10 - (sum % 10)) % 10).toString(10)
                }
                if (!UTSRegExp("^\\d{12}\$", "").test(kVal)) {
                    throw UTSError("UPC-A must be 11 or 12 digits")
                }
                return encodeEAN13("0" + kVal)
            }
            val encodeUPCA = ::gen_encodeUPCA_fn
            fun gen_encodeUPCE_fn(data: String): String {
                var kVal = data
                if (UTSRegExp("^\\d{7}\$", "").test(kVal)) {
                    var sum: Number = 0
                    run {
                        var i: Number = 0
                        while(i < 7){
                            val digit = digitAt(kVal, i)
                            sum += if (i % 2 == 0) {
                                digit * 3
                            } else {
                                digit
                            }
                            i++
                        }
                    }
                    kVal += ((10 - (sum % 10)) % 10).toString(10)
                }
                if (!UTSRegExp("^\\d{8}\$", "").test(kVal)) {
                    throw UTSError("UPC-E must be 7 or 8 digits")
                }
                val odd = leftOddCodes()
                val even = leftEvenCodes()
                val middle = kVal.substring(1, 7)
                val checkDigit = kVal.substring(7, 8)
                var pattern = "EEOOOO"
                if (checkDigit == "0" || checkDigit == "1" || checkDigit == "2" || checkDigit == "3") {
                    pattern = "EEEEOO"
                } else if (checkDigit == "4") {
                    pattern = "EEEOOO"
                }
                var barcode = "101"
                run {
                    var i: Number = 0
                    while(i < middle.length){
                        val digit = digitAt(middle, i)
                        barcode += if (pattern.substring(i, i + 1) == "E") {
                            even[digit]
                        } else {
                            odd[digit]
                        }
                        i++
                    }
                }
                return barcode + "010101101"
            }
            val encodeUPCE = ::gen_encodeUPCE_fn
            fun gen_encodeBarcode_fn(kVal: String, fmt: String): String {
                when (fmt) {
                    "CODE39" -> 
                        return encodeCode39(kVal)
                    "EAN13" -> 
                        return encodeEAN13(kVal)
                    "EAN8" -> 
                        return encodeEAN8(kVal)
                    "EAN5", "EAN2" -> 
                        return encodeEAN52(kVal, fmt)
                    "UPC", "UPCA" -> 
                        return encodeUPCA(kVal)
                    "UPCE" -> 
                        return encodeUPCE(kVal)
                    "CODE128" -> 
                        return encodeCode128(kVal)
                    "auto" -> 
                        return encodeCode128(kVal)
                    else -> 
                        return encodeCode128(kVal)
                }
            }
            val encodeBarcode = ::gen_encodeBarcode_fn
            fun gen_initCanvas_fn(): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, reject){
                    uni_createCanvasContextAsync(CreateCanvasContextAsyncOptions(id = canvasId.value as String, component = instance?.proxy, success = fun(context: CanvasContext){
                        canvasContext = context
                        ctx = context.getContext("2d")
                        resolve(Unit)
                    }
                    , fail = fun(err: UniError){
                        reject(err)
                    }
                    ))
                }
                )
            }
            val initCanvas = ::gen_initCanvas_fn
            fun gen_drawCanvasText_fn(context: CanvasRenderingContext2D, barcodeY: Number, textHeight: Number): Unit {
                val txt = displayText.value
                val textX = if (props.textAlign == "left") {
                    marginLeftValue.value
                } else {
                    if (props.textAlign == "right") {
                        canvasWidth.value - marginRightValue.value
                    } else {
                        canvasWidth.value / 2
                    }
                }
                var textY = if (props.textPosition == "top") {
                    marginTopValue.value + props.fontSize
                } else {
                    barcodeY + props.height + props.textMargin + props.fontSize
                }
                if (textY > canvasHeight.value - marginBottomValue.value) {
                    textY = canvasHeight.value - marginBottomValue.value - 2
                }
                context.fillStyle = props.lineColor
                context.font = if (props.fontOptions.length > 0) {
                    props.fontOptions + " " + props.fontSize.toString(10) + "px " + props.font
                } else {
                    props.fontSize.toString(10) + "px " + props.font
                }
                val align = if (props.textAlign == "left") {
                    "left"
                } else {
                    if (props.textAlign == "right") {
                        "right"
                    } else {
                        "center"
                    }
                }
                context.textAlign = align
                context.fillText(txt, textX, textY)
            }
            val drawCanvasText = ::gen_drawCanvasText_fn
            fun gen_drawCanvasBarcode_fn(): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, reject){
                    val context = ctx
                    if (context == null) {
                        reject(UTSError("Canvas is not ready"))
                        return
                    }
                    try {
                        val bits = encodeBarcode(stringValue(props.value), props.format)
                        context.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
                        context.fillStyle = props.background
                        context.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
                        var barcodeY = marginTopValue.value
                        val textHeight = if (props.displayValue) {
                            props.fontSize + props.textMargin
                        } else {
                            0
                        }
                        if (props.displayValue && props.textPosition == "top") {
                            barcodeY += textHeight
                        }
                        val moduleWidth = props.width / Math.max(1, bits.length)
                        context.fillStyle = props.lineColor
                        var x = marginLeftValue.value
                        run {
                            var i: Number = 0
                            while(i < bits.length){
                                if (bits.substring(i, i + 1) == "1") {
                                    context.fillRect(x, barcodeY, moduleWidth + 0.5, props.height)
                                }
                                x += moduleWidth
                                i++
                            }
                        }
                        if (props.displayValue) {
                            drawCanvasText(context, barcodeY, textHeight)
                        }
                        resolve(Unit)
                    }
                     catch (err: Throwable) {
                        reject(err)
                    }
                }
                )
            }
            val drawCanvasBarcode = ::gen_drawCanvasBarcode_fn
            fun gen_exportImage_fn(): UTSPromise<String> {
                return UTSPromise(fun(resolve, reject){
                    showCanvas.value = true
                    nextTick(fun(){
                        initCanvas().then(fun(){
                            drawCanvasBarcode().then(fun(){
                                if (canvasContext == null) {
                                    showCanvas.value = false
                                    reject(UTSError("Canvas is not ready"))
                                    return
                                }
                                val dataUrl = canvasContext!!.toDataURL("image/png", 1)
                                showCanvas.value = false
                                emit("rendered", _uO("type" to "image", "value" to props.value, "path" to dataUrl))
                                resolve(dataUrl)
                            }
                            ).`catch`(fun(err: Any?){
                                showCanvas.value = false
                                reject(err)
                            }
                            )
                        }
                        ).`catch`(fun(err: Any?){
                            showCanvas.value = false
                            reject(err)
                        }
                        )
                    }
                    )
                }
                )
            }
            val exportImage = ::gen_exportImage_fn
            fun gen_generateBarcode_fn(): Unit {
                try {
                    error.value = ""
                    val bits = encodeBarcode(stringValue(props.value), props.format)
                    bars.value = createBars(bits)
                    val textHeight = if (props.displayValue) {
                        props.fontSize + props.textMargin
                    } else {
                        0
                    }
                    canvasWidth.value = props.width + marginLeftValue.value + marginRightValue.value
                    canvasHeight.value = props.height + marginTopValue.value + marginBottomValue.value + textHeight
                    if (props.useCanvas == false) {
                        nextTick(fun(){
                            exportImage().then(fun(path: String){
                                barcodeImage.value = path
                            }).`catch`(fun(err: Any?){
                                emit("error", err)
                            })
                        })
                    } else {
                        barcodeImage.value = ""
                    }
                    emit("rendered", _uO("type" to if (props.useCanvas == false) {
                        "image"
                    } else {
                        "view"
                    }
                    , "value" to props.value, "format" to props.format, "path" to barcodeImage.value))
                }
                 catch (err: Throwable) {
                    val message = getErrorMessage(err)
                    error.value = if (message.length > 0) {
                        message
                    } else {
                        "生成条码失败"
                    }
                    bars.value = _uA<UTSJSONObject>()
                    emit("error", _uO("message" to error.value, "value" to props.value, "format" to props.format))
                }
            }
            val generateBarcode = ::gen_generateBarcode_fn
            fun toTempFilePath(options: UTSJSONObject = _uO()): Unit {
                val success = options["success"] as ((res: UTSJSONObject) -> Unit)?
                val fail = options["fail"] as ((err: Any?) -> Unit)?
                exportImage().then(fun(path: String){
                    if (success != null) {
                        success(_uO("tempFilePath" to path, "path" to path))
                    }
                }
                ).`catch`(fun(err: Any?){
                    if (fail != null) {
                        fail(err)
                    } else {
                        emit("error", err)
                    }
                }
                )
            }
            watch(fun(): UTSArray<Any?> {
                return _uA<Any?>(props.value, props.format, props.width, props.height, props.displayValue, props.text, props.textPosition, props.textMargin, props.fontSize, props.background, props.lineColor, props.margin)
            }
            , fun(){
                generateBarcode()
            }
            )
            onMounted(fun(){
                generateBarcode()
            }
            )
            __expose(_uM("generateBarcode" to generateBarcode, "toTempFilePath" to ::toTempFilePath))
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-barcode", "style" to _nS(rootStyle.value)), _uA(
                    if (isTrue(showCanvas.value)) {
                        _cE("canvas", _uM("key" to 0, "class" to "up-barcode__canvas", "id" to canvasId.value, "canvas-id" to canvasId.value, "style" to _nS(canvasStyle.value)), null, 12, _uA(
                            "id",
                            "canvas-id"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(showImage.value)) {
                        _cE("image", _uM("key" to 1, "src" to barcodeImage.value, "style" to _nS(imageStyle.value), "mode" to "aspectFit"), null, 12, _uA(
                            "src"
                        ))
                    } else {
                        _cE(Fragment, _uM("key" to 2), _uA(
                            if (isTrue(showTopText.value)) {
                                _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-barcode__text", "style" to _nS(textStyle.value)), _tD(displayText.value), 5)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (error.value.length > 0) {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-barcode__error", "style" to _nS(barcodeStyle.value)), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border up-barcode__error-text"), _tD(error.value), 1)
                                ), 4)
                            } else {
                                _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-barcode__bars", "style" to _nS(barcodeStyle.value)), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(bars.value, fun(bar, index, __index, _cached): Any {
                                        return _cE("view", _uM("key" to index, "class" to "weapp-tw-border up-barcode__bar", "style" to _nS(getBarStyle(bar))), null, 4)
                                    }
                                    ), 128)
                                ), 4)
                            }
                            ,
                            if (isTrue(showBottomText.value)) {
                                _cE("text", _uM("key" to 3, "class" to "weapp-tw-border up-barcode__text", "style" to _nS(textStyle.value)), _tD(displayText.value), 5)
                            } else {
                                _cC("v-if", true)
                            }
                        ), 64)
                    }
                ), 4)
            }
        }
        var name = "up-barcode"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-barcode" to _pS(_uM("display" to "flex", "flexDirection" to "column", "boxSizing" to "border-box")), "up-barcode__bars" to _pS(_uM("display" to "flex", "flexDirection" to "row", "overflow" to "hidden")), "up-barcode__bar" to _pS(_uM("flexShrink" to 0)), "up-barcode__canvas" to _pS(_uM("position" to "fixed", "left" to -9999, "top" to -9999)), "up-barcode__text" to _pS(_uM("display" to "flex", "width" to "100%")), "up-barcode__error" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#f8f8f8")), "up-barcode__error-text" to _pS(_uM("color" to "#fa3534", "fontSize" to 14)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("rendered" to null, "error" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "value" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "format" to _uM("type" to "String", "default" to "auto"), "width" to _uM("type" to "Number", "default" to 200), "height" to _uM("type" to "Number", "default" to 80), "displayValue" to _uM("type" to "Boolean", "default" to true), "text" to _uM("type" to "String", "default" to ""), "fontOptions" to _uM("type" to "String", "default" to ""), "font" to _uM("type" to "String", "default" to "monospace"), "textAlign" to _uM("type" to "String", "default" to "center"), "textPosition" to _uM("type" to "String", "default" to "bottom"), "textMargin" to _uM("type" to "Number", "default" to 2), "fontSize" to _uM("type" to "Number", "default" to 14), "background" to _uM("type" to "String", "default" to "#ffffff"), "lineColor" to _uM("type" to "String", "default" to "#000000"), "margin" to _uM("type" to "Number", "default" to 10), "marginTop" to _uM("type" to "Number", "default" to -1), "marginBottom" to _uM("type" to "Number", "default" to -1), "marginLeft" to _uM("type" to "Number", "default" to -1), "marginRight" to _uM("type" to "Number", "default" to -1), "useCanvas" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "value",
            "format",
            "width",
            "height",
            "displayValue",
            "text",
            "fontOptions",
            "font",
            "textAlign",
            "textPosition",
            "textMargin",
            "fontSize",
            "background",
            "lineColor",
            "margin",
            "marginTop",
            "marginBottom",
            "marginLeft",
            "marginRight",
            "useCanvas"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
