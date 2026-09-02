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
import io.dcloud.uniapp.extapi.chooseImage as uni_chooseImage
import io.dcloud.uniapp.extapi.previewImage as uni_previewImage
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsHttpDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsHttpDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsHttpDemoCard
            val _cache = __ins.renderCache
            val mockList = ref(_uA<IFoo>())
            val loading = ref<Boolean>(false)
            val requestStatus = ref<String>("idle")
            val responseData = ref<IFoo?>(null)
            val errorMsg = ref<String>("")
            val userInfo = ref<String>("")
            val cloudLoading = ref<Boolean>(false)
            val cloudErrorMsg = ref<String>("")
            val uploadPath = ref<String>(FOO_UPLOAD_PATH)
            val uploadLoading = ref<Boolean>(false)
            val uploadResult = ref<String>("")
            val uploadError = ref<String>("")
            val statusText = computed(fun(): String {
                when (requestStatus.value) {
                    "loading" -> 
                        return "请求中"
                    "success" -> 
                        return "请求成功"
                    "error" -> 
                        return "请求失败"
                    else -> 
                        return "待请求"
                }
            }
            )
            val statusTextClass = computed(fun(): String {
                when (requestStatus.value) {
                    "loading" -> 
                        return "wtu-kl45yb-2k"
                    "success" -> 
                        return "wtu-fv1izt-2l"
                    "error" -> 
                        return "wtu-1ivzueh-16"
                    else -> 
                        return "wtu-6tsugz-15"
                }
            }
            )
            val statusBgClass = computed(fun(): String {
                when (requestStatus.value) {
                    "loading" -> 
                        return "wtu-1xrn6ww-2m"
                    "success" -> 
                        return "wtu-k3m9e2-2n"
                    "error" -> 
                        return "wtu-1jk4s61-2o"
                    else -> 
                        return "wtu-1y83w1l-1f"
                }
            }
            )
            val hasResponseData = computed(fun(): Boolean {
                return responseData.value != null
            }
            )
            val hasErrorMsg = computed(fun(): Boolean {
                return errorMsg.value.length > 0
            }
            )
            val responseText = computed(fun(): String {
                val data = responseData.value
                if (data == null) {
                    return ""
                }
                return "id: " + data.id + ", name: " + data.name
            }
            )
            val hasCloudError = computed(fun(): Boolean {
                return cloudErrorMsg.value.length > 0
            }
            )
            val cloudStatusText = computed(fun(): String {
                if (cloudLoading.value) {
                    return "连接中"
                }
                if (hasCloudError.value) {
                    return "连接失败"
                }
                return "已连接"
            }
            )
            val cloudStatusBgClass = computed(fun(): String {
                if (cloudLoading.value) {
                    return "wtu-1xrn6ww-2m"
                }
                if (hasCloudError.value) {
                    return "wtu-1jk4s61-2o"
                }
                return "wtu-p7uzb7-2p"
            }
            )
            val cloudStatusDotClass = computed(fun(): String {
                if (cloudLoading.value) {
                    return "wtu-o857rv-2q"
                }
                if (hasCloudError.value) {
                    return "wtu-1f8d0xd-2r"
                }
                return "wtu-tcezrl-2s"
            }
            )
            val cloudStatusTextClass = computed(fun(): String {
                if (cloudLoading.value) {
                    return "wtu-92z56f-2t"
                }
                if (hasCloudError.value) {
                    return "wtu-y8jpqd-2u"
                }
                return "wtu-1t7q418-l"
            }
            )
            val hasUploadError = computed(fun(): Boolean {
                return uploadError.value.length > 0
            }
            )
            val hasUploadResult = computed(fun(): Boolean {
                return uploadResult.value.length > 0
            }
            )
            val uploadResultText = computed(fun(): String {
                return uploadResult.value
            }
            )
            fun gen_loadMockData_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            val list = await(getFooList())
                            mockList.value = list
                        }
                         catch (err: Throwable) {
                            console.error("loadMockData error:", err)
                        }
                })
            }
            val loadMockData = ::gen_loadMockData_fn
            fun gen_fetchRealApi_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        loading.value = true
                        requestStatus.value = "loading"
                        responseData.value = null
                        errorMsg.value = ""
                        try {
                            val res = await(foo())
                            responseData.value = res
                            requestStatus.value = "success"
                        }
                         catch (err: Throwable) {
                            console.log(err, "err")
                            requestStatus.value = "error"
                            var msg = "请求失败"
                            if (err is UTSError) {
                                msg = (err as UTSError).message
                            } else if (err is UTSJSONObject) {
                                val errMsg = (err as UTSJSONObject).getString("message") ?: (err as UTSJSONObject).getString("msg") ?: (err as UTSJSONObject).getString("errMsg")
                                if (errMsg != null) {
                                    msg = errMsg
                                } else {
                                    msg = JSON.stringify(err)
                                }
                            } else if (err != null) {
                                msg = "" + err
                            }
                            errorMsg.value = msg
                        }
                        loading.value = false
                })
            }
            val fetchRealApi = ::gen_fetchRealApi_fn
            fun gen_getUserInfo_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        cloudLoading.value = true
                        cloudErrorMsg.value = ""
                        try {
                            val res = await(uniCloud.importObject("user", GenCloudObjUser::class.java).getUserInfo())
                            userInfo.value = JSON.stringify(res["data"])
                            console.log("res", res)
                        }
                         catch (err: Throwable) {
                            cloudErrorMsg.value = "云端数据获取失败，请检查 uniCloud 配置后重试"
                            console.error("getUserInfo error:", err)
                        }
                        cloudLoading.value = false
                })
            }
            val getUserInfo = ::gen_getUserInfo_fn
            fun gen_uploadFileByPath_fn(filePath: String): UTSPromise<Unit> {
                return wrapUTSPromise(suspend w1@{
                        if (DEFAULT_OSS_BASE_URL == "" || DEFAULT_OSS_BASE_URL.includes("xxx") || uploadPath.value == "" || uploadPath.value.includes("xxx")) {
                            uploadError.value = "请在对应环境的 .env 文件中配置真实的 VITE_UPLOAD_BASEURL 与 VITE_UPLOAD_PATH"
                            uni_showToast(ShowToastOptions(title = "请先在 .env 中配置真实上传地址", icon = "none"))
                            return@w1
                        }
                        uploadLoading.value = true
                        uploadError.value = ""
                        uploadResult.value = ""
                        try {
                            val ossUrl = await(uploadFooFile(filePath, true, uploadPath.value))
                            uploadResult.value = ossUrl
                        }
                         catch (err: Throwable) {
                            var msg = "上传失败"
                            if (err is UTSError) {
                                msg = (err as UTSError).message
                            } else if (err != null) {
                                msg = "" + err
                            }
                            uploadError.value = msg
                        }
                        uploadLoading.value = false
                })
            }
            val uploadFileByPath = ::gen_uploadFileByPath_fn
            fun gen_chooseAndUpload_fn() {
                if (uploadLoading.value) {
                    return
                }
                uploadError.value = ""
                uni_chooseImage(ChooseImageOptions(count = 1, sourceType = _uA(
                    "album",
                    "camera"
                ), success = fun(res){
                    val paths = res.tempFilePaths
                    if (paths.length <= 0) {
                        uploadError.value = "未选择文件"
                        return
                    }
                    uploadFileByPath(paths[0] as String)
                }
                , fail = fun(err){
                    console.log("chooseImage fail:", err)
                    var errMsg = ""
                    if (err != null && err.errMsg != null) {
                        errMsg = "" + err.errMsg
                    }
                    if (errMsg.includes("cancel")) {
                        return
                    }
                    uploadError.value = if (errMsg != "") {
                        "选择文件失败: " + errMsg
                    } else {
                        "选择文件失败"
                    }
                }
                ))
            }
            val chooseAndUpload = ::gen_chooseAndUpload_fn
            fun gen_copyUploadUrl_fn() {
                val url = uploadResult.value
                if (url == "") {
                    return
                }
                uni_setClipboardData(SetClipboardDataOptions(data = url, showToast = false, success = fun(_){
                    uni_showToast(ShowToastOptions(title = "链接已复制", icon = "success"))
                }
                ))
            }
            val copyUploadUrl = ::gen_copyUploadUrl_fn
            fun gen_previewUploadedImage_fn() {
                val url = uploadResult.value
                if (url == "") {
                    return
                }
                uni_previewImage(PreviewImageOptions(urls = _uA(
                    url
                )))
            }
            val previewUploadedImage = ::gen_previewUploadedImage_fn
            onMounted(fun(){
                loadMockData()
                getUserInfo()
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "HTTP 请求 Demo"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-w0ubis-0 wtu-qf0h83-1 wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"), _uA(
                            _cE("text", _uM("class" to "wtu-mcng40-6 wtu-pryky7-7 wtu-1vehn2-8"), " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
                        )),
                        _cE("view", _uM("class" to "wtu-ecdk3o-2"), _uA(
                            _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-vnac5q-c"), _uA(
                                _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a"), _uA(
                                    _cE("view", _uM("class" to "wtu-bx383i-d wtu-yg23h9-e wtu-1ny4yap-f wtu-1p6uh6r-g wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-vuut8m-h wtu-or3po3-a wtu-ijj99f-i wtu-1hzxj1a-j"), _uA(
                                        _cE("text", _uM("class" to "wtu-mcng40-6 wtu-1gyo9ug-k wtu-1t7q418-l"), "UC")
                                    )),
                                    _cE("view", null, _uA(
                                        _cE("text", _uM("class" to "wtu-owidvm-m wtu-1gyo9ug-k wtu-tbkcso-n"), "uniCloud 云对象"),
                                        _cE("text", _uM("class" to "wtu-52xho3-o wtu-pryky7-7 wtu-1ur1rlt-p"), "user.getUserInfo")
                                    ))
                                )),
                                _cE("view", _uM("class" to _nC(_uA(
                                    "wtu-1p3s0p7-9 wtu-or3po3-a wtu-1jy1lu-q wtu-t9pnvh-r wtu-edhfgi-s",
                                    cloudStatusBgClass.value
                                ))), _uA(
                                    _cE("view", _uM("class" to _nC(_uA(
                                        "wtu-ga9uen-t wtu-1l83xre-u wtu-11tvxcq-v wtu-ofr59w-w",
                                        cloudStatusDotClass.value
                                    ))), null, 2),
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "wtu-52xho3-o",
                                        cloudStatusTextClass.value
                                    ))), _tD(cloudStatusText.value), 3)
                                ), 2)
                            )),
                            _cE("view", _uM("class" to "wtu-1ny4yap-f wtu-18s889y-x wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-2k7lhn-y wtu-4cqy02-z"), _uA(
                                _cE("view", _uM("class" to "wtu-2crfgb-10 wtu-ehcs6-11")),
                                _cE("view", _uM("class" to "wtu-1115s0n-12"), _uA(
                                    _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-1awb42t-13"), _uA(
                                        _cE("text", _uM("class" to "wtu-52xho3-o wtu-pryky7-7"), "响应数据"),
                                        _cE("text", _uM("class" to "wtu-ead332-14 wtu-6tsugz-15"), "JSON")
                                    )),
                                    if (isTrue(cloudLoading.value)) {
                                        _cE("text", _uM("key" to 0, "class" to "wtu-mcng40-6 wtu-1t7q418-l"), "正在连接云端服务...")
                                    } else {
                                        if (isTrue(hasCloudError.value)) {
                                            _cE("text", _uM("key" to 1, "class" to "wtu-mcng40-6 wtu-1ivzueh-16"), _tD(cloudErrorMsg.value), 1)
                                        } else {
                                            _cE("text", _uM("key" to 2, "class" to "wtu-mcng40-6 wtu-xg97j7-17 wtu-1vehn2-8"), _tD(userInfo.value), 1)
                                        }
                                    }
                                    ,
                                    if (isTrue(hasCloudError.value)) {
                                        _cE("view", _uM("key" to 3, "class" to "wtu-17nc15w-18 wtu-1p3s0p7-9"), _uA(
                                            _cE("view", _uM("class" to "wtu-yg23h9-e wtu-1us4hrd-19 wtu-1792i3v-1a wtu-1k2vmtw-1b wtu-or3po3-a wtu-ijj99f-i", "onClick" to getUserInfo), _uA(
                                                _cE("text", _uM("class" to "wtu-mcng40-6 wtu-155p5he-1c"), "重新获取")
                                            ))
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-ecdk3o-2"), _uA(
                            _cE("text", _uM("class" to "wtu-owidvm-m wtu-1gyo9ug-k wtu-1e7koem-1d wtu-vnac5q-c"), "Mock 数据列表（ID 为任意类型）"),
                            _cE(Fragment, null, RenderHelpers.renderList(mockList.value, fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("key" to index, "class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-1lgfe3e-1e wtu-1us4hrd-19 wtu-1y83w1l-1f wtu-1ny4yap-f wtu-yqo827-1g"), _uA(
                                    _cE("view", _uM("class" to "wtu-5wqmpn-1h wtu-sz6l4-1i wtu-1v2zgda-1j wtu-1i8kliw-1k wtu-ijj99f-i wtu-or3po3-a wtu-1hzxj1a-j"), _uA(
                                        _cE("text", _uM("class" to "wtu-mcng40-6 wtu-155p5he-1c wtu-1gyo9ug-k"), _tD(item.id), 1)
                                    )),
                                    _cE("text", _uM("class" to "wtu-owidvm-m wtu-xg97j7-17"), _tD(item.name), 1)
                                ))
                            }
                            ), 128)
                        )),
                        _cE("view", _uM("class" to "wtu-edhfgi-s wtu-1115s0n-12 wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"), _uA(
                            _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-ok6iny-b wtu-or3po3-a wtu-115s1if-1l"), _uA(
                                _cE("text", _uM("class" to "wtu-mdu9q5-1m wtu-pryky7-7"), "接口请求状态:"),
                                _cE("view", _uM("class" to _nC(_uA(
                                    "wtu-1jy1lu-q wtu-uaewvr-1n wtu-edhfgi-s",
                                    statusBgClass.value
                                ))), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "wtu-mcng40-6",
                                        statusTextClass.value
                                    ))), _tD(statusText.value), 3)
                                ), 2)
                            )),
                            if (isTrue(hasResponseData.value)) {
                                _cE("view", _uM("key" to 0, "class" to "wtu-kp3eq2-1o wtu-1ny4yap-f wtu-1ic2k2p-1p wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"), _uA(
                                    _cE("text", _uM("class" to "wtu-mcng40-6 wtu-s98mzw-1q"), _tD(responseText.value), 1)
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(hasErrorMsg.value)) {
                                _cE("view", _uM("key" to 1, "class" to "wtu-snsrpe-1r wtu-1ny4yap-f wtu-1ic2k2p-1p wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1bi5jw-1s wtu-1cffqjh-1t"), _uA(
                                    _cE("text", _uM("class" to "wtu-mcng40-6 wtu-bquocn-1u"), "错误：" + _tD(errorMsg.value), 1)
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        )),
                        _cE("view", _uM("class" to "wtu-1p3s0p7-9"), _uA(
                            _cE("view", _uM("class" to "wtu-wy44gc-1v wtu-1hzxj1a-j"), _uA(
                                _cE("view", _uM("class" to "wtu-1i8kliw-1k wtu-1ny4yap-f wtu-10jafc4-1w wtu-1mbx3i8-1x wtu-io2yyi-1y wtu-1p3s0p7-9 wtu-or3po3-a wtu-ijj99f-i", "onClick" to loadMockData), _uA(
                                    _cE("text", _uM("class" to "wtu-1tndks6-1z wtu-owidvm-m"), "加载 Mock 数据")
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-wy44gc-1v"), _uA(
                                _cE("view", _uM("class" to "wtu-1dwvvaj-20 wtu-1ny4yap-f wtu-10jafc4-1w wtu-1mbx3i8-1x wtu-io2yyi-1y wtu-1p3s0p7-9 wtu-or3po3-a wtu-ijj99f-i", "onClick" to fetchRealApi), _uA(
                                    _cE("text", _uM("class" to "wtu-1tndks6-1z wtu-owidvm-m"), _tD(if (loading.value) {
                                        "请求中..."
                                    } else {
                                        "真实 API 请求"
                                    }
                                    ), 1)
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-1pmzy0e-21"), _uA(
                            _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-vnac5q-c"), _uA(
                                _cE("view", _uM("class" to "wtu-bx383i-d wtu-yg23h9-e wtu-1ny4yap-f wtu-2bai5c-22 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-11ywkxn-23 wtu-or3po3-a wtu-ijj99f-i wtu-1hzxj1a-j"), _uA(
                                    _cE("text", _uM("class" to "wtu-mcng40-6 wtu-1gyo9ug-k wtu-wx16af-24"), "UP")
                                )),
                                _cE("view", _uM("class" to "wtu-wy44gc-1v"), _uA(
                                    _cE("text", _uM("class" to "wtu-owidvm-m wtu-1gyo9ug-k wtu-tbkcso-n"), "文件上传"),
                                    _cE("text", _uM("class" to "wtu-52xho3-o wtu-pryky7-7 wtu-1ur1rlt-p"), _tD(uploadPath.value), 1)
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-2bai5c-22 wtu-hw36l4-25 wtu-1792i3v-1a wtu-vnac5q-c wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-bgknk1-26"), _uA(
                                _cE("text", _uM("class" to "wtu-52xho3-o wtu-wx16af-24 wtu-bturnd-27 wtu-wy44gc-1v"), " 💡 上传 OSS 接口地址支持直接在 .env 环境变量中配置（VITE_UPLOAD_BASEURL / VITE_UPLOAD_PATH） ")
                            )),
                            _cE("view", _uM("class" to "wtu-1ny4yap-f wtu-18s889y-x wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-2k7lhn-y wtu-4cqy02-z"), _uA(
                                _cE("view", _uM("class" to "wtu-2crfgb-10 wtu-rp6t3a-28")),
                                _cE("view", _uM("class" to "wtu-1115s0n-12"), _uA(
                                    _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-1awb42t-13"), _uA(
                                        _cE("text", _uM("class" to "wtu-52xho3-o wtu-pryky7-7"), "上传结果"),
                                        _cE("text", _uM("class" to "wtu-ead332-14 wtu-6tsugz-15"), "POST")
                                    )),
                                    if (isTrue(uploadLoading.value)) {
                                        _cE("text", _uM("key" to 0, "class" to "wtu-mcng40-6 wtu-wx16af-24"), "正在上传...")
                                    } else {
                                        if (isTrue(hasUploadError.value)) {
                                            _cE("text", _uM("key" to 1, "class" to "wtu-mcng40-6 wtu-1ivzueh-16"), _tD(uploadError.value), 1)
                                        } else {
                                            if (isTrue(hasUploadResult.value)) {
                                                _cE("view", _uM("key" to 2), _uA(
                                                    _cE("view", _uM("class" to "wtu-or3po3-a wtu-ijj99f-i wtu-1lgfe3e-1e wtu-kp3eq2-1o wtu-1ny4yap-f wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"), _uA(
                                                        _cE("image", _uM("src" to uploadResultText.value, "class" to "wtu-1e5wgja-29 wtu-1q8psy7-2a wtu-1ny4yap-f", "mode" to "aspectFill", "onClick" to previewUploadedImage), null, 8, _uA(
                                                            "src"
                                                        )),
                                                        _cE("text", _uM("class" to "wtu-ead332-14 wtu-6tsugz-15 wtu-1cffqjh-1t"), "点击查看大图")
                                                    )),
                                                    _cE("view", _uM("class" to "wtu-17nc15w-18 wtu-1ic2k2p-1p wtu-18s889y-x wtu-1ny4yap-f wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"), _uA(
                                                        _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a wtu-ok6iny-b wtu-115s1if-1l"), _uA(
                                                            _cE("view", _uM("class" to "wtu-1p3s0p7-9 wtu-or3po3-a"), _uA(
                                                                _cE("view", _uM("class" to "wtu-x3m0ie-2b wtu-1rl0xbz-2c wtu-rp6t3a-28 wtu-zn5xf3-2d wtu-q2u73r-2e")),
                                                                _cE("text", _uM("class" to "wtu-52xho3-o wtu-1gyo9ug-k wtu-s98mzw-1q"), "OSS 链接地址")
                                                            )),
                                                            _cE("view", _uM("class" to "wtu-1jy1lu-q wtu-13huiaq-2f wtu-ymgoet-2g wtu-naxge4-2h wtu-1p3s0p7-9 wtu-or3po3-a", "onClick" to copyUploadUrl), _uA(
                                                                _cE("text", _uM("class" to "wtu-ead332-14 wtu-155p5he-1c wtu-1xw5jy8-2i"), "复制链接")
                                                            ))
                                                        )),
                                                        _cE("text", _uM("class" to "oss-url-text wtu-52xho3-o wtu-xg97j7-17 wtu-8o3aer-2j", "selectable" to true), _tD(uploadResultText.value), 1)
                                                    ))
                                                ))
                                            } else {
                                                _cE("text", _uM("key" to 3, "class" to "wtu-mcng40-6 wtu-6tsugz-15"), "未选择文件")
                                            }
                                        }
                                    }
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-17nc15w-18"), _uA(
                                _cE("view", _uM("class" to "wtu-rp6t3a-28 wtu-1ny4yap-f wtu-10jafc4-1w wtu-1mbx3i8-1x wtu-io2yyi-1y wtu-1p3s0p7-9 wtu-or3po3-a wtu-ijj99f-i", "onClick" to chooseAndUpload), _uA(
                                    _cE("text", _uM("class" to "wtu-1tndks6-1z wtu-owidvm-m"), _tD(if (uploadLoading.value) {
                                        "上传中..."
                                    } else {
                                        "选择图片并上传"
                                    }
                                    ), 1)
                                ))
                            ))
                        ))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0,
                styles1
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-w0ubis-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-qf0h83-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-ecdk3o-2" to _pS(_uM("marginBottom" to 16)), "wtu-wfs7cl-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-16hz6cp-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1ns4j6f-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-mcng40-6" to _pS(_uM("fontSize" to 12)), "wtu-pryky7-7" to _pS(_uM("color" to "#64748b")), "wtu-1vehn2-8" to _pS(_uM("--tw-leading" to "20px", "lineHeight" to "20px")), "wtu-1p3s0p7-9" to _pS(_uM("flexDirection" to "row")), "wtu-or3po3-a" to _pS(_uM("alignItems" to "center")), "wtu-ok6iny-b" to _pS(_uM("justifyContent" to "space-between")), "wtu-vnac5q-c" to _pS(_uM("marginBottom" to 10)), "wtu-bx383i-d" to _pS(_uM("width" to 32)), "wtu-yg23h9-e" to _pS(_uM("height" to 32)), "wtu-1ny4yap-f" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1p6uh6r-g" to _pS(_uM("backgroundColor" to "#e6fffb")), "wtu-vuut8m-h" to _pS(_uM("borderTopColor" to "#99f6e4", "borderRightColor" to "#99f6e4", "borderBottomColor" to "#99f6e4", "borderLeftColor" to "#99f6e4")), "wtu-ijj99f-i" to _pS(_uM("justifyContent" to "center")), "wtu-1hzxj1a-j" to _pS(_uM("marginRight" to 10)), "wtu-1gyo9ug-k" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1t7q418-l" to _pS(_uM("color" to "#0f766e")), "wtu-owidvm-m" to _pS(_uM("fontSize" to 14)), "wtu-tbkcso-n" to _pS(_uM("color" to "#1e293b")), "wtu-52xho3-o" to _pS(_uM("fontSize" to 11)), "wtu-1ur1rlt-p" to _pS(_uM("marginTop" to 2)), "wtu-1jy1lu-q" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "wtu-t9pnvh-r" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "wtu-edhfgi-s" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10)), "wtu-ga9uen-t" to _pS(_uM("width" to 6)), "wtu-1l83xre-u" to _pS(_uM("height" to 6)), "wtu-11tvxcq-v" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "wtu-ofr59w-w" to _pS(_uM("marginRight" to 5)), "wtu-18s889y-x" to _pS(_uM("backgroundColor" to "#f8fafc")), "wtu-2k7lhn-y" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "wtu-4cqy02-z" to _pS(_uM("overflow" to "hidden")), "wtu-2crfgb-10" to _pS(_uM("height" to 3)), "wtu-ehcs6-11" to _pS(_uM("backgroundColor" to "#14b8a6")), "wtu-1115s0n-12" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "wtu-1awb42t-13" to _pS(_uM("marginBottom" to 8)), "wtu-ead332-14" to _pS(_uM("fontSize" to 10)), "wtu-6tsugz-15" to _pS(_uM("color" to "#94a3b8")), "wtu-1ivzueh-16" to _pS(_uM("color" to "#dc2626")), "wtu-xg97j7-17" to _pS(_uM("color" to "#334155")), "wtu-17nc15w-18" to _pS(_uM("marginTop" to 10)), "wtu-1us4hrd-19" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-1792i3v-1a" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-1k2vmtw-1b" to _pS(_uM("backgroundColor" to "#0f766e")), "wtu-155p5he-1c" to _pS(_uM("color" to "#ffffff")), "wtu-1e7koem-1d" to _pS(_uM("color" to "#2d3748")), "wtu-1lgfe3e-1e" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "wtu-1y83w1l-1f" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-yqo827-1g" to _pS(_uM("marginTop" to 8)), "wtu-5wqmpn-1h" to _pS(_uM("width" to 28)), "wtu-sz6l4-1i" to _pS(_uM("height" to 28)), "wtu-1v2zgda-1j" to _pS(_uM("borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14)), "wtu-1i8kliw-1k" to _pS(_uM("backgroundColor" to "#3182ce")), "wtu-115s1if-1l" to _pS(_uM("marginBottom" to 6)), "wtu-mdu9q5-1m" to _pS(_uM("fontSize" to 13)), "wtu-uaewvr-1n" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "wtu-kp3eq2-1o" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-1ic2k2p-1p" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "wtu-s98mzw-1q" to _pS(_uM("color" to "#475569")), "wtu-snsrpe-1r" to _pS(_uM("backgroundColor" to "#fff5f5")), "wtu-1bi5jw-1s" to _pS(_uM("borderTopColor" to "#fecaca", "borderRightColor" to "#fecaca", "borderBottomColor" to "#fecaca", "borderLeftColor" to "#fecaca")), "wtu-1cffqjh-1t" to _pS(_uM("marginTop" to 6)), "wtu-bquocn-1u" to _pS(_uM("color" to "#ef4444")), "wtu-wy44gc-1v" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-10jafc4-1w" to _pS(_uM("height" to 42)), "wtu-1mbx3i8-1x" to _pS(_uM("width" to "100%")), "wtu-io2yyi-1y" to _pS(_uM("display" to "flex")), "wtu-1tndks6-1z" to _pS(_uM("color" to "#ffffff")), "wtu-1dwvvaj-20" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-1pmzy0e-21" to _pS(_uM("marginTop" to 16)), "wtu-2bai5c-22" to _pS(_uM("backgroundColor" to "#fff7ed")), "wtu-11ywkxn-23" to _pS(_uM("borderTopColor" to "#fdba74", "borderRightColor" to "#fdba74", "borderBottomColor" to "#fdba74", "borderLeftColor" to "#fdba74")), "wtu-wx16af-24" to _pS(_uM("color" to "#c2410c")), "wtu-hw36l4-25" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "wtu-bgknk1-26" to _pS(_uM("borderTopColor" to "#ffedd5", "borderRightColor" to "#ffedd5", "borderBottomColor" to "#ffedd5", "borderLeftColor" to "#ffedd5")), "wtu-bturnd-27" to _pS(_uM("--tw-leading" to "16px", "lineHeight" to "16px")), "wtu-rp6t3a-28" to _pS(_uM("backgroundColor" to "#f97316")), "wtu-1e5wgja-29" to _pS(_uM("width" to 120)), "wtu-1q8psy7-2a" to _pS(_uM("height" to 120)), "wtu-x3m0ie-2b" to _pS(_uM("width" to 3)), "wtu-1rl0xbz-2c" to _pS(_uM("height" to 12)), "wtu-zn5xf3-2d" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2)), "wtu-q2u73r-2e" to _pS(_uM("marginRight" to 6)), "wtu-13huiaq-2f" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "wtu-ymgoet-2g" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-naxge4-2h" to _pS(_uM("backgroundColor" to "#ea580c")), "wtu-1xw5jy8-2i" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-8o3aer-2j" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-kl45yb-2k" to _pS(_uM("color" to "#d97706")), "wtu-fv1izt-2l" to _pS(_uM("color" to "#059669")), "wtu-1xrn6ww-2m" to _pS(_uM("backgroundColor" to "#fef9c3")), "wtu-k3m9e2-2n" to _pS(_uM("backgroundColor" to "#d1fae5")), "wtu-1jk4s61-2o" to _pS(_uM("backgroundColor" to "#fee2e2")), "wtu-p7uzb7-2p" to _pS(_uM("backgroundColor" to "#ccfbf1")), "wtu-o857rv-2q" to _pS(_uM("backgroundColor" to "#d97706")), "wtu-1f8d0xd-2r" to _pS(_uM("backgroundColor" to "#dc2626")))
            }
        val styles1: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-tcezrl-2s" to _pS(_uM("backgroundColor" to "#0d9488")), "wtu-92z56f-2t" to _pS(_uM("color" to "#a16207")), "wtu-y8jpqd-2u" to _pS(_uM("color" to "#b91c1c")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
