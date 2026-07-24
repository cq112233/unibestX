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
import io.dcloud.uniapp.extapi.getImageInfo as uni_getImageInfo
import io.dcloud.uniapp.extapi.previewImage as uni_previewImage
open class GenUniModulesUviewUltraComponentsUpAlbumUpAlbum : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var urls: UTSArray<Any> by `$props`
    open var keyName: String by `$props`
    open var singleSize: Any by `$props`
    open var multipleSize: Any by `$props`
    open var space: Any by `$props`
    open var singleMode: String by `$props`
    open var multipleMode: String by `$props`
    open var maxCount: Any by `$props`
    open var previewFullImage: Boolean by `$props`
    open var rowCount: Any by `$props`
    open var showMore: Boolean by `$props`
    open var shape: String by `$props`
    open var radius: Any by `$props`
    open var autoWrap: Boolean by `$props`
    open var unit: String by `$props`
    open var stop: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpAlbumUpAlbum) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpAlbumUpAlbum
            val _cache = __ins.renderCache
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val preventEvent = useUltraUI().preventEvent
            val singleWidth = ref(0)
            val singleHeight = ref(0)
            val singlePercent = ref(0.6)
            val getSrc = fun(item: Any): String {
                if (UTSAndroid.`typeof`(item) == "object") {
                    var item1 = item as UTSJSONObject
                    return if ((props.keyName != "" && item1.getString(props.keyName) != null)) {
                        item1.getString(props.keyName)!!
                    } else {
                        item1.getString("src")!!
                    }
                } else {
                    return item.toString()
                }
            }
            val getComponentWidth = fun(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        sleep(30).then(fun(){
                            uni.UNI5198058.upGetRect(".up-album__row", false, instance).then(fun(res: Any){
                                var size = res as NodeInfo
                                var width = size.width
                                if (width != null) {
                                    singleWidth.value = width * singlePercent.value as Number
                                }
                            }
                            )
                        }
                        )
                })
            }
            val showUrls = computed(fun(): UTSArray<UTSArray<Any>> {
                if (props.autoWrap) {
                    return _uA(
                        props.urls.slice(0, parseInt(props.maxCount.toString()))
                    )
                } else {
                    val arr: UTSArray<UTSArray<Any>> = _uA()
                    props.urls.map(fun(item, index){
                        if (index + 1 <= parseInt(props.maxCount.toString())) {
                            val itemIndex = Math.floor(index / parseInt(props.rowCount.toString()))
                            if (arr.length == 0 || itemIndex >= arr.length) {
                                arr.push(_uA<Any>())
                            }
                            arr[arr.length - 1].push(item)
                        }
                    }
                    )
                    return arr
                }
            }
            )
            val getImageRect = fun(){
                val src = getSrc(props.urls[0])
                uni_getImageInfo(GetImageInfoOptions(src = src, success = fun(res: GetImageInfoSuccess){
                    val isHorizotal = res.width >= res.height
                    singleWidth.value = if (isHorizotal) {
                        props.singleSize as Number
                    } else {
                        (res.width / res.height) * getPx(props.singleSize) as Number
                    }
                    singleHeight.value = if (!isHorizotal) {
                        props.singleSize as Number
                    } else {
                        (res.height / res.width) * singleWidth.value as Number
                    }
                }
                , fail = fun(_){
                    getComponentWidth()
                }
                ))
            }
            onMounted(fun(){
                if (props.urls.length == 1) {
                    getImageRect()
                }
            }
            )
            watch(fun(): UTSArray<Any> {
                return props.urls
            }
            , fun(newVal: UTSArray<Any>){
                if (newVal.length == 1) {
                    getImageRect()
                }
            }
            , WatchOptions(flush = "post", immediate = false))
            val imageStyle = computed(fun(): (index1: Number, index2: Number) -> UTSJSONObject {
                return fun(index1: Number, index2: Number): UTSJSONObject {
                    val space = props.space
                    val rowCount = props.rowCount
                    val multipleSize = props.multipleSize
                    val urls = props.urls
                    val rowLen = showUrls.value.length
                    val allLen = props.urls.length
                    val style: UTSJSONObject = _uO("marginRight" to addUnit(space), "marginBottom" to addUnit(space))
                    if (index1 === rowLen && !props.autoWrap) {
                        style["marginBottom"] = 0
                    }
                    if (!props.autoWrap) {
                        if (index2 === parseInt(rowCount.toString()) || (index1 == rowLen && index2 == showUrls.value[index1 - 1].length)) {
                            style["marginRight"] = 0
                        }
                    }
                    return style
                }
            }
            )
            val imageWidth = computed(fun(): String {
                return addUnit(if (props.urls.length == 1) {
                    singleWidth.value
                } else {
                    props.multipleSize
                }
                , props.unit)
            }
            )
            val imageHeight = computed(fun(): String {
                return addUnit(if (props.urls.length == 1) {
                    singleHeight.value
                } else {
                    props.multipleSize
                }
                , props.unit)
            }
            )
            val albumWidth = computed(fun(): Number {
                var width: Number = 0
                if (props.urls.length == 1) {
                    width = singleWidth.value
                } else {
                    width = showUrls.value[0].length * parseInt(props.multipleSize.toString()) + parseInt(props.space.toString()) * (showUrls.value[0].length - 1)
                }
                emit("albumWidth", width)
                return width
            }
            )
            val onPreviewTap = fun(e: Any, url: String){
                var ee = e as UniPointerEvent
                val urls = props.urls.map(fun(item: Any): String {
                    return getSrc(item)
                }
                )
                if (props.previewFullImage) {
                    uni_previewImage(PreviewImageOptions(current = url, urls = urls))
                    if (props.stop) {
                        preventEvent(ee)
                    }
                } else {
                    emit("preview", _uO("urls" to urls, "currentIndex" to urls.indexOf(url)))
                }
            }
            return fun(): Any? {
                val _component_up_text = resolveEasyComponent("up-text", GenUniModulesUviewUltraComponentsUpTextUpTextClass)
                return _cE("view", _uM("class" to "up-album"), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(showUrls.value, fun(arr, index, __index, _cached): Any {
                        return _cE("view", _uM("class" to "up-album__row", "ref_for" to true, "ref" to "up-album__row", "forComputedUse" to albumWidth.value, "key" to index, "style" to _nS(_uM("flexWrap" to if (_ctx.autoWrap) {
                            "wrap"
                        } else {
                            "nowrap"
                        }
                        ))), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(arr, fun(item, index1, __index, _cached): Any {
                                return _cE("view", _uM("class" to "up-album__row__wrapper", "key" to index1, "style" to _nS(_uA(
                                    imageStyle.value(index + 1, index1 + 1)
                                )), "onClick" to fun(`$event`: Any){
                                    onPreviewTap(`$event`, getSrc(item))
                                }
                                ), _uA(
                                    _cE("image", _uM("src" to getSrc(item), "mode" to if (_ctx.urls.length == 1) {
                                        if ((imageHeight.value != "0px" && imageHeight.value != "0rpx")) {
                                            _ctx.singleMode
                                        } else {
                                            "widthFix"
                                        }
                                    } else {
                                        _ctx.multipleMode
                                    }
                                    , "style" to _nS(_uA(
                                        _uM("width" to imageWidth.value, "height" to imageHeight.value, "borderRadius" to if (_ctx.shape == "circle") {
                                            "10000px"
                                        } else {
                                            _ctx.`$upAddUnit`(_ctx.radius)
                                        }
                                        )
                                    ))), null, 12, _uA(
                                        "src",
                                        "mode"
                                    )),
                                    if (isTrue(_ctx.showMore && _ctx.urls.length > parseInt(_ctx.rowCount.toString()) * showUrls.value.length && index === showUrls.value.length - 1 && index1 === showUrls.value[showUrls.value.length - 1].length - 1)) {
                                        _cE("view", _uM("key" to 0, "class" to "up-album__row__wrapper__text", "style" to _nS(_uM("borderRadius" to if (_ctx.shape == "circle") {
                                            "50%"
                                        } else {
                                            _ctx.`$upAddUnit`(_ctx.radius)
                                        }))), _uA(
                                            _cV(_component_up_text, _uM("text" to ("+" + (_ctx.urls.length - parseInt(_ctx.maxCount.toString()))), "color" to "#fff", "size" to (parseInt(_ctx.multipleSize.toString()) * 0.3), "align" to "center", "customStyle" to "justify-content: center"), null, 8, _uA(
                                                "text",
                                                "size"
                                            ))
                                        ), 4)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ), 12, _uA(
                                    "onClick"
                                ))
                            }
                            ), 128)
                        ), 12, _uA(
                            "forComputedUse"
                        ))
                    }
                    ), 128)
                ))
            }
        }
        var name = "up-album"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-album" to _pS(_uM("display" to "flex", "flexDirection" to "column")), "up-album__row" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-album__row__wrapper" to _pS(_uM("position" to "relative")), "up-album__row__wrapper__text" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "right" to 0, "bottom" to 0, "backgroundColor" to "rgba(0,0,0,0.3)", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("preview" to null, "albumWidth" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "urls" to _uM("type" to "Array", "default" to default__77.getArray<Any>("album.urls")), "keyName" to _uM("type" to "String", "default" to default__77.getString("album.keyName")), "singleSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__77.getNumber("album.singleSize")), "multipleSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__77.getNumber("album.multipleSize")), "space" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__77.getNumber("album.space")), "singleMode" to _uM("type" to "String", "default" to default__77.getString("album.singleMode")), "multipleMode" to _uM("type" to "String", "default" to default__77.getString("album.multipleMode")), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__77.getNumber("album.maxCount")), "previewFullImage" to _uM("type" to "Boolean", "default" to default__77.getBoolean("album.previewFullImage")), "rowCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__77.getNumber("album.rowCount")), "showMore" to _uM("type" to "Boolean", "default" to default__77.getBoolean("album.showMore")), "shape" to _uM("type" to "String", "default" to default__35.getString("image.shape")), "radius" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__35.getNumber("image.radius")), "autoWrap" to _uM("type" to "Boolean", "default" to default__77.getBoolean("album.autoWrap")), "unit" to _uM("type" to "String", "default" to default__77.getString("album.unit")), "stop" to _uM("type" to "Boolean", "default" to default__77.getBoolean("album.stop"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "urls",
            "keyName",
            "singleSize",
            "multipleSize",
            "space",
            "singleMode",
            "multipleMode",
            "maxCount",
            "previewFullImage",
            "rowCount",
            "showMore",
            "shape",
            "radius",
            "autoWrap",
            "unit",
            "stop"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
