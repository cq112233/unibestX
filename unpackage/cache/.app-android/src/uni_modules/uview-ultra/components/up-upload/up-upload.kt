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
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
import io.dcloud.uniapp.extapi.previewImage as uni_previewImage
import io.dcloud.uniapp.extapi.request as uni_request
import io.dcloud.uniapp.extapi.showToast as uni_showToast
import io.dcloud.uniapp.extapi.uploadFile as uni_uploadFile
open class GenUniModulesUviewUltraComponentsUpUploadUpUpload : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.accept
        }
        , fun(kVal: String) {
            if (kVal === "all" || kVal === "media") {
                error("只有微信小程序才支持把accept配置为all、media之一")
            }
            if (kVal === "file") {
                error("只有微信小程序和H5(HX2.9.9)才支持把accept配置为file")
            }
        }
        , WatchOptions(immediate = true))
        this.`$watch`(fun(): Any? {
            return this.fileList
        }
        , fun() {
            this.formatFileList()
        }
        , WatchOptions(immediate = true, deep = true))
        this.`$watch`(fun(): Any? {
            return this.deletable
        }
        , fun(newVal: Boolean) {
            this.formatFileList()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.maxCount
        }
        , fun(newVal: Any) {
            this.formatFileList()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.accept
        }
        , fun(newVal: String) {
            this.formatFileList()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.popupShow
        }
        , fun(newVal: Boolean) {
            if (!newVal) {
                this.currentItemIndex = -1
            }
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        val _component_up_gap = resolveEasyComponent("up-gap", GenUniModulesUviewUltraComponentsUpGapUpGapClass)
        val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
        return _cE("view", _uM("class" to "up-upload", "style" to _nS(_uA(
            _ctx.addStyle(_ctx.customStyle)
        ))), _uA(
            _cE("view", _uM("class" to "up-upload__wrap"), _uA(
                if (isTrue(_ctx.previewImage)) {
                    _cE(Fragment, _uM("key" to 0), RenderHelpers.renderList(_ctx.lists, fun(item, index, __index, _cached): Any {
                        return _cE("view", _uM("class" to "up-upload__wrap__preview", "key" to index), _uA(
                            if (isTrue(item.isImage || (item.type != null && item.type === "image"))) {
                                _cE("image", _uM("key" to 0, "src" to if (item.thumb != null) {
                                    item.thumb
                                } else {
                                    item.url
                                }, "mode" to _ctx.imageMode, "class" to "up-upload__wrap__preview__image", "onClick" to fun(){
                                    _ctx.onClickPreview(item, index)
                                }, "style" to _nS(_uA(
                                    _uM("width" to _ctx.addUnit(_ctx.width), "height" to _ctx.addUnit(_ctx.height))
                                ))), null, 12, _uA(
                                    "src",
                                    "mode",
                                    "onClick"
                                ))
                            } else {
                                if (isTrue((item.isVideo || (item.type != null && item.type === "video")) && _ctx.getVideoThumb)) {
                                    _cE("view", _uM("key" to 1, "class" to "up-upload__wrap__preview__video", "style" to _nS(_uM("width" to _ctx.addUnit(_ctx.width), "height" to _ctx.addUnit(_ctx.height)))), _uA(
                                        if (isTrue(item.thumb)) {
                                            _cE("image", _uM("key" to 0, "src" to item.thumb, "mode" to _ctx.imageMode, "class" to "up-upload__wrap__preview__image", "onClick" to fun(){
                                                _ctx.onClickPreview(item, index)
                                            }, "style" to _nS(_uA(
                                                _uM("width" to _ctx.addUnit(_ctx.width), "height" to _ctx.addUnit(_ctx.height))
                                            ))), null, 12, _uA(
                                                "src",
                                                "mode",
                                                "onClick"
                                            ))
                                        } else {
                                            _cV(_component_up_icon, _uM("key" to 1, "color" to "#80CBF9", "size" to "26", "name" to if (item.isVideo || (item.type != null && item.type === "video")) {
                                                "movie"
                                            } else {
                                                "file-text"
                                            }), null, 8, _uA(
                                                "name"
                                            ))
                                        },
                                        if (item.status === "success") {
                                            _cE("view", _uM("key" to 2, "class" to "up-upload__wrap__play", "onClick" to fun(){
                                                _ctx.onClickPreview(item, index)
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
                                    _cE("view", _uM("key" to 2, "class" to "up-upload__wrap__preview__other", "onClick" to fun(){
                                        _ctx.onClickPreview(item, index)
                                    }, "style" to _nS(_uA(
                                        _uM("width" to _ctx.addUnit(_ctx.width), "height" to _ctx.addUnit(_ctx.height))
                                    ))), _uA(
                                        _cV(_component_up_icon, _uM("color" to "#80CBF9", "size" to "26", "name" to if (item.isVideo || (item.type != null && item.type === "video")) {
                                            "movie"
                                        } else {
                                            "folder"
                                        }), null, 8, _uA(
                                            "name"
                                        )),
                                        _cE("text", _uM("class" to "up-upload__wrap__preview__other__text"), _tD(if (item.isVideo || (item.type != null && item.type === "video")) {
                                            if (item.name != null) {
                                                item.name
                                            } else {
                                                _ctx.`$t`("up.common.video")
                                            }
                                        } else {
                                            if (item.name != null) {
                                                item.name
                                            } else {
                                                _ctx.`$t`("up.common.file")
                                            }
                                        }), 1)
                                    ), 12, _uA(
                                        "onClick"
                                    ))
                                }
                            },
                            if (isTrue(item.status === "uploading" || item.status === "failed")) {
                                _cE("view", _uM("key" to 3, "class" to "up-upload__status"), _uA(
                                    _cE("view", _uM("class" to "up-upload__status__icon"), _uA(
                                        if (item.status === "failed") {
                                            _cV(_component_up_icon, _uM("key" to 0, "name" to "close-circle", "color" to "#ffffff", "size" to "25"))
                                        } else {
                                            _cV(_component_up_loading_icon, _uM("key" to 1, "size" to "22", "mode" to "circle"))
                                        }
                                    )),
                                    if (isTrue(item.message)) {
                                        _cE("text", _uM("key" to 0, "class" to "up-upload__status__message"), _tD(item.message), 1)
                                    } else {
                                        _cC("v-if", true)
                                    },
                                    _cV(_component_up_gap, _uM("class" to "up-upload__progress", "height" to "3px", "style" to _nS(_uM("width" to ((item.progress ?: 0) + "%")))), null, 8, _uA(
                                        "style"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            },
                            if (isTrue(item.status !== "uploading" && (_ctx.deletable || item.deletable))) {
                                _cE("view", _uM("key" to 4, "class" to "up-upload__deletable", "onClick" to withModifiers(fun(){
                                    _ctx.deleteItem(index)
                                }, _uA(
                                    "stop"
                                ))), _uA(
                                    _cE("view", _uM("class" to "up-upload__deletable__icon"), _uA(
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
                                    if (item.status === "success") {
                                        _cE("view", _uM("key" to 0, "class" to "up-upload__success"), _uA(
                                            _cE("view", _uM("class" to "up-upload__success__icon"), _uA(
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
                if (isTrue(_ctx.isInCount)) {
                    _cE(Fragment, _uM("key" to 1), _uA(
                        if (_ctx.`$slots`["trigger"] != null) {
                            _cE("view", _uM("key" to 0, "onClick" to _ctx.onChooseTap), _uA(
                                renderSlot(_ctx.`$slots`, "trigger")
                            ), 8, _uA(
                                "onClick"
                            ))
                        } else {
                            if (isTrue(_ctx.`$slots`["trigger"] == null && (_ctx.`$slots`["default"] != null || _ctx.`$slots`["\$default"] != null))) {
                                _cE("view", _uM("key" to 1, "onClick" to _ctx.onChooseTap), _uA(
                                    renderSlot(_ctx.`$slots`, "default")
                                ), 8, _uA(
                                    "onClick"
                                ))
                            } else {
                                _cE("view", _uM("key" to 2, "class" to _nC(_uA(
                                    "up-upload__button",
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
                                }, "hover-stay-time" to "150", "onClick" to _ctx.onChooseTap, "style" to _nS(_uA(
                                    _uM("width" to _ctx.addUnit(_ctx.width), "height" to _ctx.addUnit(_ctx.height))
                                ))), _uA(
                                    _cV(_component_up_icon, _uM("name" to _ctx.uploadIcon, "size" to "26", "color" to _ctx.uploadIconColor), null, 8, _uA(
                                        "name",
                                        "color"
                                    )),
                                    if (isTrue(_ctx.uploadText)) {
                                        _cE("text", _uM("key" to 0, "class" to "up-upload__button__text"), _tD(_ctx.uploadText), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ), 14, _uA(
                                    "hover-class",
                                    "onClick"
                                ))
                            }
                        }
                    ), 64)
                } else {
                    _cC("v-if", true)
                }
            )),
            _cE("canvas", _uM("id" to "myCanvas", "type" to "2d", "style" to _nS(_uM("width" to "100px", "height" to "150px", "display" to "none"))), null, 4),
            _cV(_component_up_popup, _uM("mode" to "center", "show" to _ctx.popupShow, "onUpdate:show" to fun(`$event`: Boolean){
                _ctx.popupShow = `$event`
            }
            ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                return _uA(
                    if (isTrue(_ctx.popupShow)) {
                        _cE("video", _uM("key" to 0, "id" to "myVideo", "src" to if (_ctx.currentItemIndex >= 0) {
                            _ctx.lists[_ctx.currentItemIndex].url
                        } else {
                            ""
                        }, "onError" to _ctx.videoErrorCallback, "show-center-play-btn" to "", "object-fit" to _ctx.videoPreviewObjectFit, "show-fullscreen-btn" to "true", "enable-play-gesture" to "", "controls" to "", "autoplay" to true, "auto-pause-if-open-native" to "", "todoloadedmetadata" to "loadedVideoMetadata", "initial-time" to 0.1), null, 40, _uA(
                            "src",
                            "onError",
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
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var accept: String by `$props`
    open var extension: UTSArray<String>? by `$props`
    open var capture: Any? by `$props`
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
    open var sizeType: UTSArray<String>? by `$props`
    open var multiple: Boolean by `$props`
    open var deletable: Boolean by `$props`
    open var maxSize: Any by `$props`
    open var fileList: UTSArray<UTSJSONObject>? by `$props`
    open var uploadText: String by `$props`
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var previewImage: Boolean by `$props`
    open var autoDelete: Boolean by `$props`
    open var autoUpload: Boolean by `$props`
    open var autoUploadApi: String by `$props`
    open var autoUploadDriver: String by `$props`
    open var autoUploadAuthUrl: String by `$props`
    open var autoUploadHeader: UTSJSONObject? by `$props`
    open var getVideoThumb: Boolean by `$props`
    open var customAfterAutoUpload: Boolean by `$props`
    open var videoPreviewObjectFit: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var lists: UTSArray<UPUploadListItem> by `$data`
    open var isInCount: Boolean by `$data`
    open var popupShow: Boolean by `$data`
    open var currentItemIndex: Number by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "lists" to _uA<UPUploadListItem>(), "isInCount" to true, "popupShow" to false, "currentItemIndex" to -1)
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
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
    open var t = ::gen_t_fn
    open fun gen_t_fn(key: String): String {
        return t__1(key, _uO())
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var videoErrorCallback = ::gen_videoErrorCallback_fn
    open fun gen_videoErrorCallback_fn() {}
    open var loadedVideoMetadata = ::gen_loadedVideoMetadata_fn
    open fun gen_loadedVideoMetadata_fn(e: Any) {
        if (this.currentItemIndex < 0) {
            return
        }
        if (this.autoUploadDriver != "local") {
            return
        }
        if (!this.getVideoThumb) {
            return
        }
        var w = this.lists[this.currentItemIndex].width
        var h = this.lists[this.currentItemIndex].height
        val dpr = uni_getSystemInfoSync().pixelRatio
    }
    open var formatFileList = ::gen_formatFileList_fn
    open fun gen_formatFileList_fn() {
        var fileList = this.fileList as UTSArray<UTSJSONObject>
        var maxCount = parseInt(this.maxCount.toString())
        var lists = _uA<UPUploadListItem>()
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
                ((this.accept === "image") ?: image(name))
            }
            , "isVideo" to if (item["name"] != null) {
                video(item["name"] as String)
            } else {
                ((this.accept === "video") ?: video(name))
            }
            , "deletable" to if (UTSAndroid.`typeof`(item["deletable"]) === "boolean") {
                item["deletable"]
            } else {
                this.deletable
            }
            ))
            var tmpObj = UTSAndroid.consoleDebugError(JSON.parse<UPUploadListItem>(JSON.stringify(tmp)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:515")
            if (tmpObj != null) {
                lists.push(tmpObj!!)
            }
        }
        )
        this.lists = lists
        this.isInCount = lists.length < maxCount
    }
    open var onChooseTap = ::gen_onChooseTap_fn
    open fun gen_onChooseTap_fn(): Unit {
        this.chooseFile(_uO())
    }
    open var chooseFile = ::gen_chooseFile_fn
    open fun gen_chooseFile_fn(params: UTSJSONObject): Boolean {
        var maxCount = this.maxCount as Number
        var multiple = this.multiple
        var lists = this.lists
        var disabled = this.disabled
        if (disabled) {
            return false
        }
        val chooseParams = UTSJSONObject.assign(_uO("accept" to this.accept, "extension" to this.extension, "multiple" to this.multiple, "capture" to this.capture, "compressed" to this.compressed, "maxDuration" to this.maxDuration, "sizeType" to this.sizeType, "camera" to this.camera), UTSJSONObject.assign(_uO("maxCount" to (maxCount - lists.length)), params))
        var chooseParamsObj = UTSAndroid.consoleDebugError(JSON.parseObject<UPUploadChooseFileOptions>(JSON.stringify(chooseParams)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:547")
        if (chooseParamsObj != null) {
            uni.UNI5198058.chooseFile(chooseParamsObj).then(fun(res: UTSArray<UPUploadFileChoosed?>){
                val result = if (chooseParams["multiple"] != null && chooseParams["multiple"] != false) {
                    res
                } else {
                    res
                }
                this.onBeforeRead(result)
            }
            )
        }
        return true
    }
    open var onBeforeRead = ::gen_onBeforeRead_fn
    open fun gen_onBeforeRead_fn(file: UTSArray<UPUploadFileChoosed?>) {
        var beforeRead = this.beforeRead
        var useBeforeRead = this.useBeforeRead
        var res: Any = file
        if (beforeRead != null && func(beforeRead)) {
            res = (beforeRead as UPUploadReadCallback)(file, this.getDetail(null))
        }
        if (useBeforeRead) {
            this.`$emit`("beforeRead", UTSJSONObject.assign(UTSJSONObject.assign(_uO("file" to this.convertFileToUTSJSON(file)), this.getDetail(null)), _uO("callback" to fun(ok: Boolean){
                if (ok) {
                    this.onAfterRead(file)
                }
            }
            )))
            return
        }
        if (promise(res)) {} else {
            if (UTSAndroid.`typeof`(res) == "boolean" && !(res as Boolean)) {
                return
            }
            val readFile = if (res != null) {
                res
            } else {
                file
            }
             as UTSArray<UPUploadFileChoosed?>
            this.onAfterRead(readFile)
        }
    }
    open var convertFileToUTSJSON = ::gen_convertFileToUTSJSON_fn
    open fun gen_convertFileToUTSJSON_fn(file: UTSArray<UPUploadFileChoosed?>): UTSArray<UTSJSONObject> {
        val result: UTSArray<UTSJSONObject> = _uA()
        file.forEach(fun(item: UPUploadFileChoosed?){
            if (item != null) {
                val obj = UTSAndroid.consoleDebugError(JSON.parseObject(JSON.stringify(item)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:600")
                if (obj != null) {
                    result.push(obj)
                }
            }
        }
        )
        return result
    }
    open fun getDetail(index: Number? = null): UTSJSONObject {
        val fileList = this.fileList as UTSArray<UTSJSONObject>
        return _uO("name" to this.name, "index" to if (index == null) {
            fileList.length
        } else {
            index
        }
        )
    }
    open var onAfterRead = ::gen_onAfterRead_fn
    open fun gen_onAfterRead_fn(file: UTSArray<UPUploadFileChoosed?>): UTSPromise<Unit> {
        return wrapUTSPromise(suspend w@{
                var maxSize = this.maxSize as Number
                var afterRead = this.afterRead
                val fileList = this.fileList as UTSArray<UTSJSONObject>
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
                    uni_showToast(ShowToastOptions(title = t__1("up.upload.sizeExceed", _uO())))
                    this.`$emit`("oversize", UTSJSONObject.assign(_uO("file" to this.convertFileToUTSJSON(file)), this.getDetail(null)))
                    return@w
                }
                var len = fileList.length
                if (this.autoUpload) {
                    var lists = (_uA<UPUploadFileChoosed>()).concat(file)
                    var fileListLen = fileList.length
                    lists.map(fun(item: UPUploadFileChoosed){
                        val itemJSON = UTSAndroid.consoleDebugError(JSON.parseObject(JSON.stringify(item)), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:646")
                        if (itemJSON != null) {
                            fileList.push(UTSJSONObject.assign(itemJSON, _uO("status" to "uploading", "message" to t__1("up.upload.uploading", _uO()), "progress" to 0)))
                        }
                    })
                    var that = this
                    this.`$emit`("update:fileList", fileList)
                    run {
                        var i: Number = 0
                        while(i < lists.length){
                            var j = i
                            var result = ""
                            when (this.autoUploadDriver) {
                                "cos" -> 
                                    {}
                                "kodo" -> 
                                    {}
                                "oss", "upload_oss" -> 
                                    {
                                        console.log("at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:669", " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:474")
                                        var formData: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("formData", "uni_modules/uview-ultra/components/up-upload/up-upload.uvue", 670, 13))
                                        uni_request<Any>(RequestOptions(url = this.autoUploadAuthUrl, method = "GET", header = this.autoUploadHeader, data = _uO("filename" to lists[j]["name"] as String), success = fun(ret: RequestSuccess<Any>){
                                            var res0 = ret.data as UTSJSONObject
                                            if (res0["code"] as Number == 200) {
                                                formData = res0!!!!.getAny("data.params") as UTSJSONObject
                                            } else {
                                                uni_showToast(ShowToastOptions(title = res0["msg"] as String, duration = 1500))
                                                return
                                            }
                                            if (res0!!!!.getString("data.params.host") != null) {
                                                var uploadTask = uni_uploadFile(UploadFileOptions(url = res0!!!!.getString("data.params.host") ?: "", filePath = lists[j].url, name = "file", formData = formData, success = fun(uploadFileRes: UploadFileSuccess){
                                                    var thumb = ""
                                                    var uploadRes = UTSAndroid.consoleDebugError(JSON.parseObject(uploadFileRes.data), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:703")
                                                    result = res0!!!!.getString("data.params.host") + "/" + res0!!!!.getString("data.params.key")
                                                    if (that.accept === "video" || video(result)) {
                                                        thumb = result + "?x-oss-process=video/snapshot,t_10000,m_fast"
                                                    }
                                                    if (that.customAfterAutoUpload) {
                                                        that.emitAfterAutoUpload(uploadRes, len + j, result, thumb)
                                                    } else {
                                                        that.succcessUpload(len + j, result, thumb)
                                                    }
                                                }
                                                ))
                                                uploadTask.onProgressUpdate(fun(res){
                                                    that.updateUpload(len + j, _uO("progress" to res.progress))
                                                }
                                                )
                                            }
                                        }))
                                    }
                                "local" -> 
                                    {
                                        var uploadTask = uni_uploadFile(UploadFileOptions(url = this.autoUploadApi, filePath = lists[j].url, name = "file", header = this.autoUploadHeader, success = fun(uploadFileRes: UploadFileSuccess){
                                            var res0 = UTSAndroid.consoleDebugError(JSON.parseObject(uploadFileRes.data), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:737")
                                            if (that.customAfterAutoUpload) {
                                                that.emitAfterAutoUpload(res0, len + j)
                                            } else {
                                                if (res0!!!!["code"] as Number != 200) {
                                                    uni_showToast(ShowToastOptions(title = res0!!!!["msg"] as String))
                                                } else {
                                                    result = res0!!!!.getString("data.url") ?: ""
                                                    that.succcessUpload(len + j, result)
                                                }
                                            }
                                        }))
                                        uploadTask.onProgressUpdate(fun(res){
                                            that.updateUpload(len + j, _uO("progress" to res.progress))
                                        })
                                    }
                                else -> 
                                    {
                                        var uploadTask = uni_uploadFile(UploadFileOptions(url = this.autoUploadApi, filePath = lists[j].url, name = "file", header = this.autoUploadHeader, success = fun(uploadFileRes: UploadFileSuccess){
                                            var res0 = UTSAndroid.consoleDebugError(JSON.parseObject(uploadFileRes.data), " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:737")
                                            if (that.customAfterAutoUpload) {
                                                that.emitAfterAutoUpload(res0, len + j)
                                            } else {
                                                if (res0!!!!["code"] as Number != 200) {
                                                    uni_showToast(ShowToastOptions(title = res0!!!!["msg"] as String))
                                                } else {
                                                    result = res0!!!!.getString("data.url") ?: ""
                                                    that.succcessUpload(len + j, result)
                                                }
                                            }
                                        }))
                                        uploadTask.onProgressUpdate(fun(res){
                                            that.updateUpload(len + j, _uO("progress" to res.progress))
                                        })
                                    }
                            }
                            i++
                        }
                    }
                } else {
                    if (UTSAndroid.`typeof`(afterRead) === "function") {
                        (afterRead as UPUploadReadCallback)(file, this.getDetail(null))
                    }
                    this.`$emit`("afterRead", UTSJSONObject.assign(_uO("file" to this.convertFileToUTSJSON(file)), this.getDetail(null)))
                }
        })
    }
    open fun emitAfterAutoUpload(res: UTSJSONObject?, index: Number, defaultUrl: String = "", defaultThumb: String = "") {
        val payload = UTSJSONObject.assign(if (res != null) {
            res
        } else {
            _uO()
        }
        , _uO("url" to defaultUrl, "thumb" to defaultThumb, "callback" to fun(r: UTSJSONObject){
            val url = r.getString("url") ?: defaultUrl
            if (url == "") {
                return
            }
            val thumb = r.getString("thumb") ?: defaultThumb
            this.succcessUpload(index, url, thumb)
        }
        ))
        this.`$emit`("afterAutoUpload", payload)
    }
    open var updateUpload = ::gen_updateUpload_fn
    open fun gen_updateUpload_fn(index: Number, param: UTSJSONObject) {
        val fileList = this.fileList as UTSArray<UTSJSONObject>
        var item = fileList[index]
        fileList.splice(index, 1, UTSJSONObject.assign(_uO(), item as UTSJSONObject, _uO("status" to if (param["progress"] as Number == 100) {
            "success"
        } else {
            "uploading"
        }
        , "message" to "", "progress" to param["progress"] as Number)))
        this.`$emit`("update:fileList", fileList)
    }
    open fun succcessUpload(index: Number, url: String, thumb: String = "") {
        val fileList = this.fileList as UTSArray<UTSJSONObject>
        var item = fileList[index]
        fileList.splice(index, 1, UTSJSONObject.assign(_uO(), item as UTSJSONObject, _uO("status" to "success", "message" to "", "url" to url, "progress" to 100, "thumb" to thumb)))
        this.`$emit`("update:fileList", fileList)
    }
    open var deleteItem = ::gen_deleteItem_fn
    open fun gen_deleteItem_fn(index: Number) {
        val fileList = this.fileList as UTSArray<UTSJSONObject>
        if (this.autoDelete) {
            fileList.splice(index, 1)
            this.`$emit`("update:fileList", fileList)
        } else {
            this.`$emit`("delete", UTSJSONObject.assign(UTSJSONObject.assign(_uO(), this.getDetail(index)), _uO("file" to fileList[index])))
        }
    }
    open var onPreviewImage = ::gen_onPreviewImage_fn
    open fun gen_onPreviewImage_fn(previewItem: UPUploadListItem, index: Number) {
        if (!previewItem.isImage || !this.previewFullImage) {
            return
        }
        var current: Number = 0
        val urls = _uA<String>()
        var imageIndex: Number = 0
        run {
            var i: Number = 0
            while(i < this.lists.length){
                val item = this.lists[i]
                if (item.isImage || (item.type != null && item.type === "image")) {
                    urls.push(if (item.url != null) {
                        item.url as String
                    } else {
                        item.thumb as String
                    }
                    )
                    if (i === index) {
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
            toast(t__1("up.upload.previewImageFail", _uO()))
        }
        ))
    }
    open var onPreviewVideo = ::gen_onPreviewVideo_fn
    open fun gen_onPreviewVideo_fn(previewItem: UPUploadListItem, index: Number) {
        if (!this.previewFullImage) {
            return
        }
        val sources = _uA<UTSJSONObject>()
        var videoIndex: Number = 0
        run {
            var i: Number = 0
            while(i < this.lists.length){
                val item = this.lists[i]
                if (item.isVideo || (item.type != null && item.type === "video")) {
                    sources.push(UTSJSONObject.assign(UTSJSONObject.assign(_uO(), item), _uO("type" to "video")))
                    if (i === index) {
                        videoIndex
                    }
                    videoIndex += 1
                }
                i++
            }
        }
        if (sources.length < 1) {
            return
        }
        this.popupShow = true
        this.currentItemIndex = index
        console.log(this.lists[this.currentItemIndex], " at uni_modules/uview-ultra/components/up-upload/up-upload.uvue:880")
    }
    open var onClickPreview = ::gen_onClickPreview_fn
    open fun gen_onClickPreview_fn(item: UPUploadListItem, index: Number) {
        if (this.previewFullImage) {
            when (item.type) {
                "image" -> 
                    this.onPreviewImage(item, index)
                "video" -> 
                    this.onPreviewVideo(item, index)
                else -> 
                    {}
            }
        }
        this.`$emit`("clickPreview", UTSJSONObject.assign(UTSJSONObject.assign(_uO(), item as UTSJSONObject), this.getDetail(index)))
    }
    companion object {
        var name = "up-upload"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-upload" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-upload__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap")), "up-upload__wrap__preview" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "marginTop" to 0, "marginRight" to 8, "marginBottom" to 8, "marginLeft" to 0, "position" to "relative", "overflow" to "hidden", "display" to "flex", "flexDirection" to "row")), "up-upload__wrap__preview__image" to _pS(_uM("width" to 80, "height" to 80)), "up-upload__wrap__preview__video" to _pS(_uM("width" to 80, "height" to 80, "backgroundColor" to "#f2f2f2", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center")), "up-upload__wrap__preview__other" to _pS(_uM("width" to 80, "height" to 80, "backgroundColor" to "#f2f2f2", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center")), "up-upload__wrap__preview__video__text" to _pS(_uM("fontSize" to 11, "color" to "#909193", "marginTop" to 2)), "up-upload__wrap__preview__other__text" to _pS(_uM("fontSize" to 11, "color" to "#909193", "marginTop" to 2)), "up-upload__wrap__play" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "bottom" to 0, "right" to 0, "display" to "flex", "justifyContent" to "center", "alignItems" to "center")), "up-upload__wrap__play__icon" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "opacity" to 0.8)), "up-upload__deletable" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "backgroundColor" to "#373737", "height" to 14, "width" to 14, "display" to "flex", "flexDirection" to "row", "borderBottomLeftRadius" to 100, "alignItems" to "center", "justifyContent" to "center", "zIndex" to 3)), "up-upload__deletable__icon" to _pS(_uM("position" to "absolute", "transform" to "scale(0.7)", "top" to 0, "right" to 0)), "up-upload__success" to _pS(_uM("position" to "absolute", "bottom" to 0, "right" to 0, "display" to "flex", "flexDirection" to "row", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)", "borderBottomColor" to "#5ac725", "borderRightColor" to "#5ac725", "borderTopWidth" to 9, "borderRightWidth" to 9, "borderBottomWidth" to 9, "borderLeftWidth" to 9, "alignItems" to "center", "justifyContent" to "center")), "up-upload__success__icon" to _pS(_uM("position" to "absolute", "transform" to "scale(0.7)", "bottom" to -10, "right" to -10)), "up-upload__progress" to _pS(_uM("!backgroundColor" to "var(--theme-color, #0957de)", "position" to "absolute", "bottom" to 0, "left" to 0)), "up-upload__status" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "left" to 0, "right" to 0, "backgroundColor" to "rgba(0,0,0,0.5)", "display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center")), "up-upload__status__icon" to _pS(_uM("position" to "relative", "zIndex" to 1)), "up-upload__status__message" to _pS(_uM("fontSize" to 12, "color" to "#FFFFFF", "marginTop" to 5)), "up-upload__button" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "width" to 80, "height" to 80, "backgroundColor" to "#f4f5f7", "borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "marginTop" to 0, "marginRight" to 8, "marginBottom" to 8, "marginLeft" to 0, "boxSizing" to "border-box")), "up-upload__button__text" to _pS(_uM("fontSize" to 11, "color" to "#909193", "marginTop" to 2)), "up-upload__button--hover" to _pS(_uM("backgroundColor" to "#e6e7e9")), "up-upload__button--disabled" to _pS(_uM("opacity" to 0.5)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("error" to null, "beforeRead" to null, "oversize" to null, "afterRead" to null, "delete" to null, "clickPreview" to null, "update:fileList" to null, "afterAutoUpload" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "accept" to _uM("type" to "String", "default" to "image"), "extension" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return createStringList()
        }
        ), "capture" to _uM("type" to _uA(
            "Array",
            "String"
        ), "default" to fun(): UTSArray<String> {
            return createCaptureList()
        }
        ), "compressed" to _uM("type" to "Boolean", "default" to true), "camera" to _uM("type" to "String", "default" to "back"), "maxDuration" to _uM("type" to "Number", "default" to 60), "uploadIcon" to _uM("type" to "String", "default" to "camera-fill"), "uploadIconColor" to _uM("type" to "String", "default" to "#D3D4D6"), "useBeforeRead" to _uM("type" to "Boolean", "default" to false), "afterRead" to _uM("default" to null), "beforeRead" to _uM("default" to null), "previewFullImage" to _uM("type" to "Boolean", "default" to true), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 52), "disabled" to _uM("type" to "Boolean", "default" to false), "imageMode" to _uM("type" to "String", "default" to "aspectFill"), "name" to _uM("type" to "String", "default" to ""), "sizeType" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return createStringList(_uA<String>("original", "compressed"))
        }
        ), "multiple" to _uM("type" to "Boolean", "default" to false), "deletable" to _uM("type" to "Boolean", "default" to true), "maxSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to UTSNumber.MAX_VALUE), "fileList" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return createFileList()
        }
        ), "uploadText" to _uM("type" to "String", "default" to ""), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "previewImage" to _uM("type" to "Boolean", "default" to true), "autoDelete" to _uM("type" to "Boolean", "default" to false), "autoUpload" to _uM("type" to "Boolean", "default" to false), "autoUploadApi" to _uM("type" to "String", "default" to ""), "autoUploadDriver" to _uM("type" to "String", "default" to ""), "autoUploadAuthUrl" to _uM("type" to "String", "default" to ""), "autoUploadHeader" to _uM("type" to "Object", "default" to fun(): UTSJSONObject {
            return createHeader()
        }
        ), "getVideoThumb" to _uM("type" to "Boolean", "default" to false), "customAfterAutoUpload" to _uM("type" to "Boolean", "default" to false), "videoPreviewObjectFit" to _uM("type" to "String", "default" to "cover")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "accept",
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
            "multiple",
            "deletable",
            "maxSize",
            "uploadText",
            "width",
            "height",
            "previewImage",
            "autoDelete",
            "autoUpload",
            "autoUploadApi",
            "autoUploadDriver",
            "autoUploadAuthUrl",
            "getVideoThumb",
            "customAfterAutoUpload",
            "videoPreviewObjectFit"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
