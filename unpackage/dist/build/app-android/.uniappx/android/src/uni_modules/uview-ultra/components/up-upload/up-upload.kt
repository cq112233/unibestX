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
import io.dcloud.uniapp.extapi.previewImage as uni_previewImage
open class GenUniModulesUviewUltraComponentsUpUploadUpUpload : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var accept: String by `$props`
    open var extension: UTSArray<String> by `$props`
    open var capture: Any by `$props`
    open var compressed: Boolean by `$props`
    open var camera: String by `$props`
    open var maxDuration: Number by `$props`
    open var uploadIcon: String by `$props`
    open var uploadIconColor: String by `$props`
    open var useBeforeRead: Boolean by `$props`
    open var afterRead: Any? by `$props`
    open var beforeRead: Any? by `$props`
    open var previewFullImage: Boolean by `$props`
    open var maxCount: Any by `$props`
    open var disabled: Boolean by `$props`
    open var imageMode: String by `$props`
    open var name: String by `$props`
    open var sizeType: UTSArray<String> by `$props`
    open var multiple: Boolean by `$props`
    open var deletable: Boolean by `$props`
    open var maxSize: Any by `$props`
    open var fileList: UTSArray<UTSJSONObject> by `$props`
    open var uploadText: String by `$props`
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var previewImage: Boolean by `$props`
    open var autoDelete: Boolean by `$props`
    open var autoUpload: Boolean by `$props`
    open var autoUploadApi: String by `$props`
    open var autoUploadDriver: String by `$props`
    open var autoUploadAuthUrl: String by `$props`
    open var autoUploadHeader: UTSJSONObject by `$props`
    open var getVideoThumb: Boolean by `$props`
    open var customAfterAutoUpload: Boolean by `$props`
    open var videoPreviewObjectFit: String by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpUploadUpUpload) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpUploadUpUpload
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val lists = ref(_uA<UPUploadListItem>())
            val isInCount = ref<Boolean>(true)
            val popupShow = ref<Boolean>(false)
            val currentItemIndex = ref<Number>(-1)
            val customUploadStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.customStyle) as UTSJSONObject
            }
            )
            val itemDimensionStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to addUnit(props.width), "height" to addUnit(props.height))
            }
            )
            fun gen_getProgressStyle_fn(item: Any): UTSJSONObject {
                val it = item as UTSJSONObject
                val prog = (it["progress"] as Number?) ?: 0
                return _uO("width" to ("" + prog + "%"))
            }
            val getProgressStyle = ::gen_getProgressStyle_fn
            fun gen_formatFileList_fn() {
                var fileList = props.fileList as UTSArray<UTSJSONObject>
                var maxCount = parseInt(props.maxCount.toString())
                var resLists = _uA<UPUploadListItem>()
                fileList.forEach(fun(item: UTSJSONObject){
                    val name = if (item["name"] != null) {
                        item["name"] as String
                    } else {
                        if (item["url"] != null) {
                            item["url"] as String
                        } else {
                            item["thumb"] as String
                        }
                    }
                    var tmp = UTSJSONObject.assign(UTSJSONObject.assign(_uO(), item), _uO("isImage" to if (item["name"] != null) {
                        image(item["name"] as String)
                    } else {
                        ((props.accept == "image") ?: image(name))
                    }
                    , "isVideo" to if (item["name"] != null) {
                        video(item["name"] as String)
                    } else {
                        ((props.accept == "video") ?: video(name))
                    }
                    , "deletable" to if (UTSAndroid.`typeof`(item["deletable"]) == "boolean") {
                        item["deletable"]
                    } else {
                        props.deletable
                    }
                    ))
                    var tmpObj = JSON.parse<UPUploadListItem>(JSON.stringify(tmp))
                    if (tmpObj != null) {
                        resLists.push(tmpObj!!)
                    }
                }
                )
                lists.value = resLists
                isInCount.value = resLists.length < maxCount
            }
            val formatFileList = ::gen_formatFileList_fn
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.fileList
            }
            , fun(){
                formatFileList()
            }
            , WatchOptions(immediate = true, deep = true))
            watch(fun(): Boolean {
                return props.deletable
            }
            , fun(){
                formatFileList()
            }
            )
            watch(fun(): Any {
                return props.maxCount
            }
            , fun(){
                formatFileList()
            }
            )
            watch(fun(): String {
                return props.accept
            }
            , fun(){
                formatFileList()
            }
            )
            watch(popupShow, fun(newVal: Boolean){
                if (!newVal) {
                    currentItemIndex.value = -1
                }
            }
            )
            fun gen_convertFileToUTSJSON_fn(file: UTSArray<UPUploadFileChoosed?>): UTSArray<UTSJSONObject> {
                val result: UTSArray<UTSJSONObject> = _uA()
                file.forEach(fun(item: UPUploadFileChoosed?){
                    if (item != null) {
                        val obj = JSON.parseObject(JSON.stringify(item))
                        if (obj != null) {
                            result.push(obj)
                        }
                    }
                }
                )
                return result
            }
            val convertFileToUTSJSON = ::gen_convertFileToUTSJSON_fn
            fun getDetail(index: Number? = null): UTSJSONObject {
                return _uO("name" to props.name, "index" to if (index == null) {
                    props.fileList.length
                } else {
                    index
                }
                )
            }
            fun gen_getOtherItemText_fn(item: UPUploadListItem): String {
                val isVid = item.isVideo || (item.type != null && item.type == "video")
                if (isVid) {
                    if (item.name != null && (item.name as String) != "") {
                        return item.name as String
                    }
                    return t("up.common.video", _uO())
                }
                if (item.name != null && (item.name as String) != "") {
                    return item.name as String
                }
                return t("up.common.file", _uO())
            }
            val getOtherItemText = ::gen_getOtherItemText_fn
            fun gen_onAfterRead_fn(file: UTSArray<UPUploadFileChoosed?>) {
                var maxSize = parseFloat(props.maxSize.toString())
                var afterRead = props.afterRead
                val even = fun(item: UPUploadFileChoosed?): Boolean {
                    var tmp: Number = if ((item != null && item.size != null)) {
                        item.size!!
                    } else {
                        0
                    }
                    return tmp > maxSize
                }
                val oversize = file.some(even)
                if (oversize) {
                    toast(t("up.upload.sizeExceed", _uO()))
                    emit("oversize", UTSJSONObject.assign(_uO("file" to convertFileToUTSJSON(file)), getDetail(null)))
                    return
                }
                if (UTSAndroid.`typeof`(afterRead) == "function") {
                    (afterRead as UPUploadReadCallback)(file, getDetail(null))
                }
                emit("afterRead", UTSJSONObject.assign(_uO("file" to convertFileToUTSJSON(file)), getDetail(null)))
            }
            val onAfterRead = ::gen_onAfterRead_fn
            fun gen_onBeforeRead_fn(file: UTSArray<UPUploadFileChoosed?>) {
                var beforeRead = props.beforeRead
                var useBeforeRead = props.useBeforeRead
                var res: Any = file
                if (beforeRead != null && func(beforeRead)) {
                    res = (beforeRead as UPUploadReadCallback)(file, getDetail(null))
                }
                if (useBeforeRead) {
                    emit("beforeRead", UTSJSONObject.assign(UTSJSONObject.assign(_uO("file" to convertFileToUTSJSON(file)), getDetail(null)), _uO("callback" to fun(ok: Boolean){
                        if (ok) {
                            onAfterRead(file)
                        }
                    }
                    )))
                    return
                }
                if (UTSAndroid.`typeof`(res) == "boolean" && !(res as Boolean)) {
                    return
                }
                val readFile = if (res != null) {
                    res
                } else {
                    file
                }
                 as UTSArray<UPUploadFileChoosed?>
                onAfterRead(readFile)
            }
            val onBeforeRead = ::gen_onBeforeRead_fn
            fun gen_chooseFileAction_fn(params: UTSJSONObject): Boolean {
                var maxCount = parseInt(props.maxCount.toString())
                var disabled = props.disabled
                if (disabled) {
                    return false
                }
                val chooseParams = UTSJSONObject.assign(_uO("accept" to props.accept, "extension" to props.extension, "multiple" to props.multiple, "capture" to props.capture, "compressed" to props.compressed, "maxDuration" to props.maxDuration, "sizeType" to props.sizeType, "camera" to props.camera), UTSJSONObject.assign(_uO("maxCount" to (maxCount - lists.value.length)), params))
                var chooseParamsObj = JSON.parseObject<UPUploadChooseFileOptions>(JSON.stringify(chooseParams))
                if (chooseParamsObj != null) {
                    chooseFile(chooseParamsObj).then(fun(res: UTSArray<UPUploadFileChoosed?>){
                        onBeforeRead(res)
                    }
                    )
                }
                return true
            }
            val chooseFileAction = ::gen_chooseFileAction_fn
            fun gen_onChooseTap_fn(): Unit {
                chooseFileAction(_uO())
            }
            val onChooseTap = ::gen_onChooseTap_fn
            fun gen_videoErrorCallback_fn() {}
            val videoErrorCallback = ::gen_videoErrorCallback_fn
            fun gen_deleteItem_fn(index: Number) {
                val currentFileList = props.fileList.slice()
                if (props.autoDelete) {
                    currentFileList.splice(index, 1)
                    emit("update:fileList", currentFileList)
                } else {
                    emit("delete", UTSJSONObject.assign(UTSJSONObject.assign(_uO(), getDetail(index)), _uO("file" to currentFileList[index])))
                }
            }
            val deleteItem = ::gen_deleteItem_fn
            fun gen_onPreviewImage_fn(previewItem: UPUploadListItem, index: Number) {
                if (!previewItem.isImage || !props.previewFullImage) {
                    return
                }
                var current: Number = 0
                val urls = _uA<String>()
                var imageIndex: Number = 0
                run {
                    var i: Number = 0
                    while(i < lists.value.length){
                        val item = lists.value[i]
                        if (item.isImage || (item.type != null && item.type == "image")) {
                            urls.push(if (item.url != null) {
                                item.url as String
                            } else {
                                item.thumb as String
                            }
                            )
                            if (i == index) {
                                current = imageIndex
                            }
                            imageIndex += 1
                        }
                        i++
                    }
                }
                if (urls.length < 1) {
                    return
                }
                uni_previewImage(PreviewImageOptions(urls = urls, current = current, fail = fun(_) {
                    toast(t("up.upload.previewImageFail", _uO()))
                }
                ))
            }
            val onPreviewImage = ::gen_onPreviewImage_fn
            fun gen_onPreviewVideo_fn(previewItem: UPUploadListItem, index: Number) {
                if (!props.previewFullImage) {
                    return
                }
                popupShow.value = true
                currentItemIndex.value = index
            }
            val onPreviewVideo = ::gen_onPreviewVideo_fn
            fun gen_onClickPreview_fn(item: UPUploadListItem, index: Number) {
                if (props.previewFullImage) {
                    when (item.type) {
                        "image" -> 
                            onPreviewImage(item, index)
                        "video" -> 
                            onPreviewVideo(item, index)
                        else -> 
                            {}
                    }
                }
                emit("clickPreview", UTSJSONObject.assign(UTSJSONObject.assign(_uO(), item as Any as UTSJSONObject), getDetail(index)))
            }
            val onClickPreview = ::gen_onClickPreview_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_gap = resolveEasyComponent("up-gap", GenUniModulesUviewUltraComponentsUpGapUpGapClass)
                val _component_video = resolveComponent("video")
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-upload", "style" to _nS(unref(customUploadStyle))), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-upload__wrap"), _uA(
                        if (isTrue(_ctx.previewImage)) {
                            _cE(Fragment, _uM("key" to 0), RenderHelpers.renderList(lists.value, fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("class" to "weapp-tw-border up-upload__wrap__preview", "key" to index), _uA(
                                    if (isTrue(item.isImage || (item.type != null && item.type == "image"))) {
                                        _cE("image", _uM("key" to 0, "src" to if (item.thumb != null) {
                                            item.thumb
                                        } else {
                                            item.url
                                        }, "mode" to _ctx.imageMode, "class" to "up-upload__wrap__preview__image", "onClick" to fun(){
                                            onClickPreview(item, index)
                                        }, "style" to _nS(unref(itemDimensionStyle))), null, 12, _uA(
                                            "src",
                                            "mode",
                                            "onClick"
                                        ))
                                    } else {
                                        if (isTrue((item.isVideo || (item.type != null && item.type == "video")) && _ctx.getVideoThumb)) {
                                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-upload__wrap__preview__video", "style" to _nS(unref(itemDimensionStyle))), _uA(
                                                if (isTrue(item.thumb)) {
                                                    _cE("image", _uM("key" to 0, "src" to item.thumb, "mode" to _ctx.imageMode, "class" to "up-upload__wrap__preview__image", "onClick" to fun(){
                                                        onClickPreview(item, index)
                                                    }, "style" to _nS(unref(itemDimensionStyle))), null, 12, _uA(
                                                        "src",
                                                        "mode",
                                                        "onClick"
                                                    ))
                                                } else {
                                                    _cV(_component_up_icon, _uM("key" to 1, "color" to "#80CBF9", "size" to "26", "name" to if (item.isVideo || (item.type != null && item.type == "video")) {
                                                        "movie"
                                                    } else {
                                                        "file-text"
                                                    }), null, 8, _uA(
                                                        "name"
                                                    ))
                                                },
                                                if (item.status == "success") {
                                                    _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-upload__wrap__play", "onClick" to fun(){
                                                        onClickPreview(item, index)
                                                    }), _uA(
                                                        renderSlot(_ctx.`$slots`, "playIcon"),
                                                        if (_ctx.`$slots`["playIcon"] == null) {
                                                            _cV(_component_up_icon, _uM("key" to 0, "class" to "up-upload__wrap__play__icon", "name" to "play-right", "size" to "22px"))
                                                        } else {
                                                            _cC("v-if", true)
                                                        }
                                                    ), 8, _uA(
                                                        "onClick"
                                                    ))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                            ), 4)
                                        } else {
                                            _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-upload__wrap__preview__other", "onClick" to fun(){
                                                onClickPreview(item, index)
                                            }, "style" to _nS(unref(itemDimensionStyle))), _uA(
                                                _cV(_component_up_icon, _uM("color" to "#80CBF9", "size" to "26", "name" to if (item.isVideo || (item.type != null && item.type == "video")) {
                                                    "movie"
                                                } else {
                                                    "folder"
                                                }), null, 8, _uA(
                                                    "name"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border up-upload__wrap__preview__other__text"), _tD(getOtherItemText(item)), 1)
                                            ), 12, _uA(
                                                "onClick"
                                            ))
                                        }
                                    },
                                    if (isTrue(item.status == "uploading" || item.status == "failed")) {
                                        _cE("view", _uM("key" to 3, "class" to "weapp-tw-border up-upload__status"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border up-upload__status__icon"), _uA(
                                                if (item.status == "failed") {
                                                    _cV(_component_up_icon, _uM("key" to 0, "name" to "close-circle", "color" to "#ffffff", "size" to "25"))
                                                } else {
                                                    _cV(_component_up_loading_icon, _uM("key" to 1, "size" to "22", "mode" to "circle"))
                                                }
                                            )),
                                            if (isTrue(item.message != null && item.message != "")) {
                                                _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-upload__status__message"), _tD(item.message), 1)
                                            } else {
                                                _cC("v-if", true)
                                            },
                                            _cV(_component_up_gap, _uM("class" to "up-upload__progress", "height" to "3px", "style" to _nS(getProgressStyle(item))), null, 8, _uA(
                                                "style"
                                            ))
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    },
                                    if (isTrue(item.status != "uploading" && (_ctx.deletable || item.deletable))) {
                                        _cE("view", _uM("key" to 4, "class" to "weapp-tw-border up-upload__deletable", "onClick" to withModifiers(fun(){
                                            deleteItem(index)
                                        }, _uA(
                                            "stop"
                                        ))), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border up-upload__deletable__icon"), _uA(
                                                _cV(_component_up_icon, _uM("name" to "close", "color" to "#ffffff", "size" to "10"))
                                            ))
                                        ), 8, _uA(
                                            "onClick"
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    },
                                    renderSlot(_ctx.`$slots`, "success", _uO(), fun(): UTSArray<Any> {
                                        return _uA(
                                            if (item.status == "success") {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-upload__success"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border up-upload__success__icon"), _uA(
                                                        _cV(_component_up_icon, _uM("name" to "checkmark", "color" to "#ffffff", "size" to "12"))
                                                    ))
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            }
                                        )
                                    })
                                ))
                            }), 128)
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (isTrue(isInCount.value)) {
                            _cE(Fragment, _uM("key" to 1), _uA(
                                if (_ctx.`$slots`["trigger"] != null) {
                                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border", "onClick" to onChooseTap), _uA(
                                        renderSlot(_ctx.`$slots`, "trigger")
                                    ))
                                } else {
                                    if (isTrue(_ctx.`$slots`["trigger"] == null && (_ctx.`$slots`["default"] != null || _ctx.`$slots`["\$default"] != null))) {
                                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border", "onClick" to onChooseTap), _uA(
                                            renderSlot(_ctx.`$slots`, "default")
                                        ))
                                    } else {
                                        _cE("view", _uM("key" to 2, "class" to _nC(_uA(
                                            "weapp-tw-border up-upload__button",
                                            _uA(
                                                if (_ctx.disabled) {
                                                    "up-upload__button--disabled"
                                                } else {
                                                    ""
                                                }
                                            )
                                        )), "hover-class" to if (!_ctx.disabled) {
                                            "up-upload__button--hover"
                                        } else {
                                            ""
                                        }, "hover-stay-time" to "150", "onClick" to onChooseTap, "style" to _nS(unref(itemDimensionStyle))), _uA(
                                            _cV(_component_up_icon, _uM("name" to _ctx.uploadIcon, "size" to "26", "color" to _ctx.uploadIconColor), null, 8, _uA(
                                                "name",
                                                "color"
                                            )),
                                            if (_ctx.uploadText != "") {
                                                _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-upload__button__text"), _tD(_ctx.uploadText), 1)
                                            } else {
                                                _cC("v-if", true)
                                            }
                                        ), 14, _uA(
                                            "hover-class"
                                        ))
                                    }
                                }
                            ), 64)
                        } else {
                            _cC("v-if", true)
                        }
                    )),
                    _cV(_component_up_popup, _uM("mode" to "center", "show" to popupShow.value, "onUpdate:show" to fun(`$event`: Boolean){
                        popupShow.value = `$event`
                    }
                    ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            if (isTrue(popupShow.value)) {
                                _cV(_component_video, _uM("key" to 0, "id" to "myVideo", "src" to if (currentItemIndex.value >= 0) {
                                    lists.value[currentItemIndex.value].url
                                } else {
                                    ""
                                }, "onError" to videoErrorCallback, "show-center-play-btn" to "", "object-fit" to _ctx.videoPreviewObjectFit, "show-fullscreen-btn" to "true", "enable-play-gesture" to "", "controls" to "", "autoplay" to true, "auto-pause-if-open-native" to "", "initial-time" to 0.1), null, 8, _uA(
                                    "src",
                                    "object-fit"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        )
                    }
                    ), "_" to 1), 8, _uA(
                        "show",
                        "onUpdate:show"
                    ))
                ), 4)
            }
        }
        var name = "up-upload"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-upload" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-upload__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap")), "up-upload__wrap__preview" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "marginTop" to 0, "marginRight" to 8, "marginBottom" to 8, "marginLeft" to 0, "position" to "relative", "overflow" to "hidden", "display" to "flex", "flexDirection" to "row")), "up-upload__wrap__preview__image" to _pS(_uM("width" to 80, "height" to 80)), "up-upload__wrap__preview__video" to _pS(_uM("width" to 80, "height" to 80, "backgroundColor" to "#f2f2f2", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center")), "up-upload__wrap__preview__other" to _pS(_uM("width" to 80, "height" to 80, "backgroundColor" to "#f2f2f2", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center")), "up-upload__wrap__preview__video__text" to _pS(_uM("fontSize" to 11, "color" to "#909193", "marginTop" to 2)), "up-upload__wrap__preview__other__text" to _pS(_uM("fontSize" to 11, "color" to "#909193", "marginTop" to 2)), "up-upload__wrap__play" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "bottom" to 0, "right" to 0, "display" to "flex", "justifyContent" to "center", "alignItems" to "center")), "up-upload__wrap__play__icon" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "opacity" to 0.8)), "up-upload__deletable" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "backgroundColor" to "#373737", "height" to 14, "width" to 14, "display" to "flex", "flexDirection" to "row", "borderBottomLeftRadius" to 100, "alignItems" to "center", "justifyContent" to "center", "zIndex" to 3)), "up-upload__deletable__icon" to _pS(_uM("position" to "absolute", "transform" to "scale(0.7)", "top" to 0, "right" to 0)), "up-upload__success" to _pS(_uM("position" to "absolute", "bottom" to 0, "right" to 0, "display" to "flex", "flexDirection" to "row", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)", "borderBottomColor" to "#5ac725", "borderRightColor" to "#5ac725", "borderTopWidth" to 9, "borderRightWidth" to 9, "borderBottomWidth" to 9, "borderLeftWidth" to 9, "alignItems" to "center", "justifyContent" to "center")), "up-upload__success__icon" to _pS(_uM("position" to "absolute", "transform" to "scale(0.7)", "bottom" to -10, "right" to -10)), "up-upload__progress" to _pS(_uM("!backgroundColor" to "var(--theme-color, #0957de)", "position" to "absolute", "bottom" to 0, "left" to 0)), "up-upload__status" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "left" to 0, "right" to 0, "backgroundColor" to "rgba(0,0,0,0.5)", "display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center")), "up-upload__status__icon" to _pS(_uM("position" to "relative", "zIndex" to 1)), "up-upload__status__message" to _pS(_uM("fontSize" to 12, "color" to "#FFFFFF", "marginTop" to 5)), "up-upload__button" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "width" to 80, "height" to 80, "backgroundColor" to "#f4f5f7", "borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "marginTop" to 0, "marginRight" to 8, "marginBottom" to 8, "marginLeft" to 0, "boxSizing" to "border-box")), "up-upload__button__text" to _pS(_uM("fontSize" to 11, "color" to "#909193", "marginTop" to 2)), "up-upload__button--hover" to _pS(_uM("backgroundColor" to "#e6e7e9")), "up-upload__button--disabled" to _pS(_uM("opacity" to 0.5)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("error" to null, "beforeRead" to null, "oversize" to null, "afterRead" to null, "delete" to null, "clickPreview" to null, "update:fileList" to null, "afterAutoUpload" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "accept" to _uM("type" to "String", "default" to "image"), "extension" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA<String>()
        }
        ), "capture" to _uM("type" to _uA(
            "Array",
            "String"
        ), "default" to fun(): UTSArray<String> {
            return _uA<String>("album", "camera")
        }
        ), "compressed" to _uM("type" to "Boolean", "default" to true), "camera" to _uM("type" to "String", "default" to "back"), "maxDuration" to _uM("type" to "Number", "default" to 60), "uploadIcon" to _uM("type" to "String", "default" to "camera-fill"), "uploadIconColor" to _uM("type" to "String", "default" to "#D3D4D6"), "useBeforeRead" to _uM("type" to "Boolean", "default" to false), "afterRead" to _uM("default" to null), "beforeRead" to _uM("default" to null), "previewFullImage" to _uM("type" to "Boolean", "default" to true), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 52), "disabled" to _uM("type" to "Boolean", "default" to false), "imageMode" to _uM("type" to "String", "default" to "aspectFill"), "name" to _uM("type" to "String", "default" to ""), "sizeType" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA<String>("original", "compressed")
        }
        ), "multiple" to _uM("type" to "Boolean", "default" to false), "deletable" to _uM("type" to "Boolean", "default" to true), "maxSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to UTSNumber.MAX_VALUE), "fileList" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "uploadText" to _uM("type" to "String", "default" to ""), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "previewImage" to _uM("type" to "Boolean", "default" to true), "autoDelete" to _uM("type" to "Boolean", "default" to false), "autoUpload" to _uM("type" to "Boolean", "default" to false), "autoUploadApi" to _uM("type" to "String", "default" to ""), "autoUploadDriver" to _uM("type" to "String", "default" to ""), "autoUploadAuthUrl" to _uM("type" to "String", "default" to ""), "autoUploadHeader" to _uM("type" to "Object", "default" to fun(): UTSJSONObject {
            return _uO()
        }
        ), "getVideoThumb" to _uM("type" to "Boolean", "default" to false), "customAfterAutoUpload" to _uM("type" to "Boolean", "default" to false), "videoPreviewObjectFit" to _uM("type" to "String", "default" to "cover"), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "accept",
            "extension",
            "capture",
            "compressed",
            "camera",
            "maxDuration",
            "uploadIcon",
            "uploadIconColor",
            "useBeforeRead",
            "afterRead",
            "beforeRead",
            "previewFullImage",
            "maxCount",
            "disabled",
            "imageMode",
            "name",
            "sizeType",
            "multiple",
            "deletable",
            "maxSize",
            "fileList",
            "uploadText",
            "width",
            "height",
            "previewImage",
            "autoDelete",
            "autoUpload",
            "autoUploadApi",
            "autoUploadDriver",
            "autoUploadAuthUrl",
            "autoUploadHeader",
            "getVideoThumb",
            "customAfterAutoUpload",
            "videoPreviewObjectFit",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
