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
open class GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var status: String by `$props`
    open var defaultText: String by `$props`
    open var pullingText: String by `$props`
    open var refreshingText: String by `$props`
    open var completeText: String by `$props`
    open var showUpdateTime: Boolean by `$props`
    open var updateTimeKey: String by `$props`
    open var timeTextTimestamp: Number by `$props`
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
        var setup: (__props: GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher
            val _cache = __ins.renderCache
            val props = __props
            val base64ArrowImg = ref(base64Arrow)
            val base64FlowerImg = ref(base64Flower)
            val base64SuccessImg = ref(base64Success)
            val isDefault = computed(fun(): Boolean {
                return props.status === default__11.Refresher.Default
            }
            )
            val isReleaseToRefresh = computed(fun(): Boolean {
                return props.status === default__11.Refresher.ReleaseToRefresh
            }
            )
            val isLoading = computed(fun(): Boolean {
                return props.status === default__11.Refresher.Loading
            }
            )
            val isComplete = computed(fun(): Boolean {
                return props.status === default__11.Refresher.Complete
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
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "status" to _uM("type" to "String", "default" to default__11.Refresher.Default), "defaultText" to _uM("type" to "String", "default" to "继续下拉刷新"), "pullingText" to _uM("type" to "String", "default" to "松开立即刷新"), "refreshingText" to _uM("type" to "String", "default" to "正在刷新..."), "completeText" to _uM("type" to "String", "default" to "刷新完成"), "showUpdateTime" to _uM("type" to "Boolean", "default" to false), "updateTimeKey" to _uM("type" to "String", "default" to "default"), "timeTextTimestamp" to _uM("type" to "Number", "default" to 0)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
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
