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
open class GenSrcPagesBasicComponentsSystemInfoDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsSystemInfoDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsSystemInfoDemoCard
            val _cache = __ins.renderCache
            val screenWidth = computed(fun(): Number {
                return systemInfo.value?.screenWidth ?: 0
            }
            )
            val screenHeight = computed(fun(): Number {
                return systemInfo.value?.screenHeight ?: 0
            }
            )
            val windowWidth = computed(fun(): Number {
                return systemInfo.value?.windowWidth ?: 0
            }
            )
            val windowHeight = computed(fun(): Number {
                return systemInfo.value?.windowHeight ?: 0
            }
            )
            val statusBarHeight = computed(fun(): Number {
                return systemInfo.value?.statusBarHeight ?: 0
            }
            )
            val pixelRatio = computed(fun(): Number {
                return systemInfo.value?.pixelRatio ?: 1
            }
            )
            val safeAreaTop = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.top + "px"
                } else {
                    "N/A"
                }
            }
            )
            val safeAreaBottom = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.bottom + "px"
                } else {
                    "N/A"
                }
            }
            )
            val safeAreaLeft = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.left + "px"
                } else {
                    "N/A"
                }
            }
            )
            val safeAreaRight = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.right + "px"
                } else {
                    "N/A"
                }
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "系统与安全区域信息"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-nruop9-0 wtu-tiruoi-1 wtu-scfi6j-2 wtu-1xymh2w-3 wtu-163p5ko-4 wtu-1wychmu-5"), _uA(
                            _cE("text", _uM("class" to "wtu-iud1zm-6 wtu-ok6xoz-7 wtu-sgmw91-8 wtu-1jkapvz-9"), "安全区域内边距 (SafeAreaInsets)"),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "Top (顶部距离)"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(safeAreaTop.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "Bottom (底部距离)"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(safeAreaBottom.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "Left (左侧距离)"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(safeAreaLeft.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "Right (右侧距离)"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(safeAreaRight.value), 1)
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-nruop9-0 wtu-tiruoi-1 wtu-1xymh2w-3 wtu-163p5ko-4 wtu-1wychmu-5"), _uA(
                            _cE("text", _uM("class" to "wtu-iud1zm-6 wtu-ok6xoz-7 wtu-sgmw91-8 wtu-1jkapvz-9"), "设备窗口规格 (WindowInfo)"),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "屏幕宽度"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(screenWidth.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "屏幕高度"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(screenHeight.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "可用窗口宽度"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(windowWidth.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "可用窗口高度"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(windowHeight.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "状态栏高度 (statusBarHeight)"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(statusBarHeight.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-lbcsyi-a wtu-1htvnc1-b"), _uA(
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-1thuw5y-e"), "设备像素比 (pixelRatio)"),
                                _cE("text", _uM("class" to "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f"), _tD(pixelRatio.value), 1)
                            ))
                        ))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-nruop9-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-tiruoi-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-scfi6j-2" to _pS(_uM("marginBottom" to 16)), "wtu-1xymh2w-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-163p5ko-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1wychmu-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-iud1zm-6" to _pS(_uM("fontSize" to 13)), "wtu-ok6xoz-7" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-sgmw91-8" to _pS(_uM("color" to "#1e293b")), "wtu-1jkapvz-9" to _pS(_uM("marginBottom" to 12)), "wtu-lbcsyi-a" to _pS(_uM("flexDirection" to "row")), "wtu-1htvnc1-b" to _pS(_uM("justifyContent" to "space-between")), "wtu-jynils-c" to _pS(_uM("marginBottom" to 8)), "wtu-1pw3wr1-d" to _pS(_uM("fontSize" to 14)), "wtu-1thuw5y-e" to _pS(_uM("color" to "#64748b")), "wtu-1sdp0je-f" to _pS(_uM("color" to "#334155")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
