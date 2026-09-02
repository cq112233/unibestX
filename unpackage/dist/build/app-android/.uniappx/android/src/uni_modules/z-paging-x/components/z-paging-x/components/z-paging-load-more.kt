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
open class GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var status: String by `$props`
    open var defaultText: String by `$props`
    open var loadingText: String by `$props`
    open var noMoreText: String by `$props`
    open var failText: String by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val isDefault = computed(fun(): Boolean {
                return props.status === default__4.More.Default
            }
            )
            val isLoading = computed(fun(): Boolean {
                return props.status === default__4.More.Loading
            }
            )
            val isNoMore = computed(fun(): Boolean {
                return props.status === default__4.More.NoMore
            }
            )
            val isFail = computed(fun(): Boolean {
                return props.status === default__4.More.Fail
            }
            )
            val statusText = computed(fun(): String {
                if (isDefault.value) {
                    return props.defaultText
                } else if (isLoading.value) {
                    return props.loadingText
                } else if (isNoMore.value) {
                    return props.noMoreText
                } else if (isFail.value) {
                    return props.failText
                } else {
                    return ""
                }
            }
            )
            val onClickMore = fun(){
                emit("clickMore")
            }
            return fun(): Any? {
                return _cE("view", _uM("class" to "zpx-l-container", "onClick" to onClickMore), _uA(
                    if (isTrue(isNoMore.value)) {
                        _cE("view", _uM("key" to 0, "class" to "zpx-l-line"))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(isLoading.value)) {
                        _cV(unref(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadingClass), _uM("key" to 1))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("text", _uM("class" to "zpx-l-loading-text"), _tD(statusText.value), 1),
                    if (isTrue(isNoMore.value)) {
                        _cE("view", _uM("key" to 2, "class" to "zpx-l-line"))
                    } else {
                        _cC("v-if", true)
                    }
                ))
            }
        }
        var name = "z-paging-load-more"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("zpx-l-container" to _pS(_uM("height" to "80rpx", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "zpx-l-loading-text" to _pS(_uM("color" to "#a4a4a4", "marginLeft" to "10rpx", "fontSize" to "28rpx")), "zpx-l-line" to _pS(_uM("backgroundColor" to "#eeeeee", "width" to "100rpx", "height" to 1, "marginTop" to "0rpx", "marginRight" to "10rpx", "marginBottom" to "0rpx", "marginLeft" to "10rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("clickMore" to null)
        var props = _nP(_uM("status" to _uM("type" to "String", "default" to default__4.More.Default), "defaultText" to _uM("type" to "String", "default" to "点击加载更多"), "loadingText" to _uM("type" to "String", "default" to "正在加载..."), "noMoreText" to _uM("type" to "String", "default" to "没有更多了"), "failText" to _uM("type" to "String", "default" to "加载失败，点击重新加载")))
        var propsNeedCastKeys = _uA(
            "status",
            "defaultText",
            "loadingText",
            "noMoreText",
            "failText"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
