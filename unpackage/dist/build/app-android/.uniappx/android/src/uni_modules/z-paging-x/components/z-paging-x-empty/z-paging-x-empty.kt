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
open class GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var emptyText: String by `$props`
    open var emptyImg: String by `$props`
    open var showEmptyReload: Boolean by `$props`
    open var emptyReloadText: String by `$props`
    open var isLoadFailed: Boolean by `$props`
    open var emptyStyle: Any? by `$props`
    open var emptyImgStyle: Any? by `$props`
    open var emptyTitleStyle: Any? by `$props`
    open var emptyReloadStyle: Any? by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val localEmptyImg = computed(fun(): String {
                return if (props.isLoadFailed) {
                    base64Error
                } else {
                    base64Empty
                }
            }
            )
            val reloadClick = fun(){
                emit("reload")
            }
            val emptyClick = fun(){
                emit("viewClick")
            }
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uM("zpx-container" to true)), "style" to _nS(_uA(
                    _ctx.emptyStyle
                )), "onClick" to emptyClick), _uA(
                    _cE("view", _uM("class" to "zpx-main"), _uA(
                        if (_ctx.emptyImg.length > 0) {
                            _cE("image", _uM("key" to 0, "class" to "zpx-main-image", "style" to _nS(_uA(
                                _ctx.emptyImgStyle
                            )), "src" to _ctx.emptyImg), null, 12, _uA(
                                "src"
                            ))
                        } else {
                            _cE("image", _uM("key" to 1, "class" to "zpx-main-image", "mode" to "aspectFit", "style" to _nS(_uA(
                                _ctx.emptyImgStyle
                            )), "src" to localEmptyImg.value), null, 12, _uA(
                                "src"
                            ))
                        }
                        ,
                        _cE("text", _uM("class" to "zpx-main-title", "style" to _nS(_uA(
                            _ctx.emptyTitleStyle
                        ))), _tD(_ctx.emptyText), 5),
                        if (isTrue(_ctx.showEmptyReload)) {
                            _cE("text", _uM("key" to 2, "class" to "zpx-main-error-btn", "style" to _nS(_uA(
                                _ctx.emptyReloadStyle
                            )), "onClick" to withModifiers(reloadClick, _uA(
                                "stop"
                            ))), _tD(_ctx.emptyReloadText), 5)
                        } else {
                            _cC("v-if", true)
                        }
                    ))
                ), 6)
            }
        }
        var name = "z-paging-x-empty"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("zpx-container" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "alignItems" to "center", "justifyContent" to "center")), "zpx-main" to _pS(_uM("flexDirection" to "column", "alignItems" to "center", "paddingTop" to "50rpx", "paddingRight" to "0rpx", "paddingBottom" to "50rpx", "paddingLeft" to "0rpx")), "zpx-main-image" to _pS(_uM("width" to "240rpx", "height" to "240rpx")), "zpx-main-title" to _pS(_uM("fontSize" to "28rpx", "color" to "#aaaaaa", "textAlign" to "center", "marginTop" to "10rpx", "paddingTop" to "0rpx", "paddingRight" to "20rpx", "paddingBottom" to "0rpx", "paddingLeft" to "20rpx")), "zpx-main-error-btn" to _pS(_uM("fontSize" to "28rpx", "paddingTop" to "8rpx", "paddingRight" to "24rpx", "paddingBottom" to "8rpx", "paddingLeft" to "24rpx", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#dddddd", "borderRightColor" to "#dddddd", "borderBottomColor" to "#dddddd", "borderLeftColor" to "#dddddd", "borderTopLeftRadius" to "6rpx", "borderTopRightRadius" to "6rpx", "borderBottomRightRadius" to "6rpx", "borderBottomLeftRadius" to "6rpx", "color" to "#aaaaaa", "marginTop" to "50rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("reload" to null, "viewClick" to null)
        var props = _nP(_uM("emptyText" to _uM("type" to "String", "default" to "没有数据哦~"), "emptyImg" to _uM("type" to "String", "default" to ""), "showEmptyReload" to _uM("type" to "Boolean", "default" to false), "emptyReloadText" to _uM("type" to "String", "default" to "重新加载"), "isLoadFailed" to _uM("type" to "Boolean", "default" to false), "emptyStyle" to _uM(), "emptyImgStyle" to _uM(), "emptyTitleStyle" to _uM(), "emptyReloadStyle" to _uM()))
        var propsNeedCastKeys = _uA(
            "emptyText",
            "emptyImg",
            "showEmptyReload",
            "emptyReloadText",
            "isLoadFailed"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
