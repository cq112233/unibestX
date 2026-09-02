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
open class GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var status: String by `$props`
    open var defaultText: String by `$props`
    open var pullingText: String by `$props`
    open var refreshingText: String by `$props`
    open var completeText: String by `$props`
    open var showUpdateTime: Boolean by `$props`
    open var updateTimeKey: String by `$props`
    open var timeTextTimestamp: Number by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher
            val _cache = __ins.renderCache
            val props = __props
            val base64ArrowImg = ref(base64Arrow)
            val base64FlowerImg = ref(base64Flower)
            val base64SuccessImg = ref(base64Success)
            val isDefault = computed(fun(): Boolean {
                return props.status === default__4.Refresher.Default
            }
            )
            val isReleaseToRefresh = computed(fun(): Boolean {
                return props.status === default__4.Refresher.ReleaseToRefresh
            }
            )
            val isLoading = computed(fun(): Boolean {
                return props.status === default__4.Refresher.Loading
            }
            )
            val isComplete = computed(fun(): Boolean {
                return props.status === default__4.Refresher.Complete
            }
            )
            val getLeftImageClass = computed(fun(): String {
                if (isDefault.value) {
                    return "zpx-r-arrow-down"
                } else if (isReleaseToRefresh.value) {
                    return "zpx-r-arrow-top"
                }
                return ""
            }
            )
            val getLeftImageSrc = computed(fun(): String {
                if (isDefault.value) {
                    return base64ArrowImg.value
                } else if (isReleaseToRefresh.value) {
                    return base64ArrowImg.value
                } else if (isLoading.value) {
                    return base64FlowerImg.value
                } else if (isComplete.value) {
                    return base64SuccessImg.value
                }
                return base64ArrowImg.value
            }
            )
            val statusText = computed(fun(): String {
                if (isDefault.value) {
                    return props.defaultText
                } else if (isReleaseToRefresh.value) {
                    return props.pullingText
                } else if (isLoading.value) {
                    return props.refreshingText
                } else if (isComplete.value) {
                    return props.completeText
                } else {
                    return ""
                }
            }
            )
            val refresherTimeText = computed(fun(): String {
                props.timeTextTimestamp
                return getRefesrherFormatTimeByKey(props.updateTimeKey)
            }
            )
            val showRefresherTimeText = computed(fun(): Boolean {
                return props.showUpdateTime && refresherTimeText.value.length > 0
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "zpx-r-container", "style" to _nS(_uM("height" to if (_ctx.showUpdateTime) {
                    "60px"
                } else {
                    "40px"
                }
                ))), _uA(
                    if (isTrue(isLoading.value)) {
                        _cV(unref(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadingClass), _uM("key" to 0))
                    } else {
                        _cE("image", _uM("key" to 1, "class" to _nC(_uA(
                            "zpx-r-image",
                            getLeftImageClass.value
                        )), "src" to getLeftImageSrc.value), null, 10, _uA(
                            "src"
                        ))
                    }
                    ,
                    _cE("view", _uM("class" to "zpx-r-text-container", "style" to _nS(_uM("marginLeft" to if (showRefresherTimeText.value) {
                        "25rpx"
                    } else {
                        "10rpx"
                    }
                    ))), _uA(
                        _cE("text", _uM("class" to "zpx-r-text"), _tD(statusText.value), 1),
                        if (isTrue(showRefresherTimeText.value)) {
                            _cE("text", _uM("key" to 0, "class" to "zpx-r-text zpx-r-time-text"), _tD(refresherTimeText.value), 1)
                        } else {
                            _cC("v-if", true)
                        }
                    ), 4)
                ), 4)
            }
        }
        var name = "z-paging-refresher"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("zpx-r-container" to _pS(_uM("height" to 40, "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "zpx-r-image" to _pS(_uM("width" to "34rpx", "height" to "34rpx", "transitionDuration" to ".2s", "transitionProperty" to "transform", "transform" to "rotate(0deg)")), "zpx-r-arrow-top" to _pS(_uM("transform" to "rotate(0deg)")), "zpx-r-arrow-down" to _pS(_uM("transform" to "rotate(180deg)")), "zpx-r-text-container" to _pS(_uM("flexDirection" to "column", "alignItems" to "center")), "zpx-r-text" to _pS(_uM("color" to "#808080", "fontSize" to "28rpx")), "zpx-r-time-text" to _pS(_uM("fontSize" to "26rpx", "marginTop" to "10rpx")), "@TRANSITION" to _uM("zpx-r-image" to _uM("duration" to ".2s", "property" to "transform")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("status" to _uM("type" to "String", "default" to default__4.Refresher.Default), "defaultText" to _uM("type" to "String", "default" to "继续下拉刷新"), "pullingText" to _uM("type" to "String", "default" to "松开立即刷新"), "refreshingText" to _uM("type" to "String", "default" to "正在刷新..."), "completeText" to _uM("type" to "String", "default" to "刷新完成"), "showUpdateTime" to _uM("type" to "Boolean", "default" to false), "updateTimeKey" to _uM("type" to "String", "default" to "default"), "timeTextTimestamp" to _uM("type" to "Number", "default" to 0)))
        var propsNeedCastKeys = _uA(
            "status",
            "defaultText",
            "pullingText",
            "refreshingText",
            "completeText",
            "showUpdateTime",
            "updateTimeKey",
            "timeTextTimestamp"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
