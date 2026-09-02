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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsThemeSwitchCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsThemeSwitchCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsThemeSwitchCard
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val themeTitle = computed(fun(): String {
                return `$t`("basic.themeTitle")
            }
            )
            val themePreview = computed(fun(): String {
                return `$t`("basic.themePreview")
            }
            )
            val themeButton = computed(fun(): String {
                return `$t`("basic.themeButton")
            }
            )
            val themeModeLabel = computed(fun(): String {
                return `$t`("basic.themeModeTitle")
            }
            )
            val themeModeOptions = computed(fun(): UTSArray<ThemeModeOption> {
                return _uA(
                    ThemeModeOption(value = "auto", label = `$t`("basic.themeModeAuto")),
                    ThemeModeOption(value = "light", label = `$t`("basic.themeModeLight")),
                    ThemeModeOption(value = "dark", label = `$t`("basic.themeModeDark"))
                )
            }
            )
            val currentTheme = computed(fun(): String {
                return appStore.state.theme
            }
            )
            val colorOptions = _uA(
                "#37c2bc",
                "#0957DE",
                "#10b981",
                "#f43f5e",
                "#f97316"
            )
            fun gen_changeTheme_fn(color: String) {
                appStore.setTheme(color)
                uni_showToast(ShowToastOptions(title = `$t`("basic.themeSuccess"), icon = "none", duration = 1500))
            }
            val changeTheme = ::gen_changeTheme_fn
            fun gen_changeThemeMode_fn(value: String) {
                appStore.setThemeMode(value)
                uni_showToast(ShowToastOptions(title = `$t`("basic.themeModeSuccess"), icon = "none", duration = 1500))
            }
            val changeThemeMode = ::gen_changeThemeMode_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to themeTitle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-4hrp8k-0 wtu-fhrzwj-1 wtu-mqajtg-2 wtu-bkb5z9-3 wtu-qepy49-4 wtu-1jfhtyf-5 wtu-1vbahwj-6"), _uA(
                            _cE("text", _uM("class" to "wtu-1guata8-7 wtu-i5demr-8 wtu-1yn2e0l-9"), _tD(themePreview.value), 1),
                            _cE("view", _uM("class" to "wtu-15u6clw-a wtu-7gvrw-b wtu-3m5zaz-c wtu-s0orfi-d wtu-1likcy9-e wtu-27v8zu-f wtu-1q091sr-g wtu-1vbahwj-6 wtu-1r3uoj-h", "style" to _nS(_uM("backgroundColor" to currentTheme.value))), _uA(
                                _cE("text", _uM("class" to "wtu-g3vc06-i wtu-1d27acy-j"), _tD(themeButton.value), 1)
                            ), 4)
                        )),
                        _cE("view", _uM("class" to "wtu-1q091sr-g wtu-1o0f0um-k wtu-1cu5goa-l"), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(colorOptions, fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("key" to index, "class" to "wtu-6fkyl1-m wtu-12mu282-n wtu-ww7gtr-o wtu-1vbahwj-6 wtu-1r3uoj-h", "style" to _nS(_uM("backgroundColor" to item, "borderWidth" to if (currentTheme.value == item) {
                                    "3px"
                                } else {
                                    "0px"
                                }
                                , "borderStyle" to "solid", "borderColor" to "#1e293b")), "onClick" to fun(){
                                    changeTheme(item)
                                }
                                ), _uA(
                                    if (currentTheme.value == item) {
                                        _cE("text", _uM("key" to 0, "class" to "wtu-127on44-p wtu-19gexn6-q wtu-1x7cgzs-r"), " ✓ ")
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ), 12, _uA(
                                    "onClick"
                                ))
                            }
                            ), 64)
                        )),
                        _cE("view", _uM("class" to "wtu-1q091sr-g wtu-1o0f0um-k wtu-1vbahwj-6 wtu-15u6clw-a wtu-15ctu2r-s"), _uA(
                            _cE("text", _uM("class" to "wtu-1d27acy-j wtu-1s8d77i-t"), _tD(themeModeLabel.value), 1),
                            _cE("view", _uM("class" to "wtu-1q091sr-g wtu-1likcy9-e wtu-1gk50cy-u", "style" to _nS(_uM("borderWidth" to "1px", "borderStyle" to "solid", "borderColor" to "var(--border-color, #e2e8f0)"))), _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(themeModeOptions.value, fun(item, index, __index, _cached): Any {
                                    return _cE("view", _uM("key" to index, "class" to "wtu-1p9z6y3-v wtu-1cuonmx-w", "style" to _nS(_uM("backgroundColor" to if (unref(appStore).state.themeMode == item.value) {
                                        unref(appStore).state.theme
                                    } else {
                                        "transparent"
                                    }
                                    )), "onClick" to fun(){
                                        changeThemeMode(item.value)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-1guata8-7", "style" to _nS(_uM("color" to if (unref(appStore).state.themeMode == item.value) {
                                            "#ffffff"
                                        } else {
                                            "var(--text-secondary, #64748b)"
                                        }
                                        ))), _tD(item.label), 5)
                                    ), 12, _uA(
                                        "onClick"
                                    ))
                                }
                                ), 128)
                            ), 4)
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "title"
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-4hrp8k-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-fhrzwj-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-mqajtg-2" to _pS(_uM("marginBottom" to 16)), "wtu-bkb5z9-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-qepy49-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1jfhtyf-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1vbahwj-6" to _pS(_uM("alignItems" to "center")), "wtu-1guata8-7" to _pS(_uM("fontSize" to 12)), "wtu-i5demr-8" to _pS(_uM("color" to "#94a3b8")), "wtu-1yn2e0l-9" to _pS(_uM("marginBottom" to 8)), "wtu-15u6clw-a" to _pS(_uM("marginTop" to 10)), "wtu-7gvrw-b" to _pS(_uM("marginLeft" to "auto", "marginRight" to "auto")), "wtu-3m5zaz-c" to _pS(_uM("width" to 200)), "wtu-s0orfi-d" to _pS(_uM("height" to 44)), "wtu-1likcy9-e" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-27v8zu-f" to _pS(_uM("display" to "flex")), "wtu-1q091sr-g" to _pS(_uM("flexDirection" to "row")), "wtu-1r3uoj-h" to _pS(_uM("justifyContent" to "center")), "wtu-g3vc06-i" to _pS(_uM("color" to "#ffffff")), "wtu-1d27acy-j" to _pS(_uM("fontSize" to 14)), "wtu-1o0f0um-k" to _pS(_uM("justifyContent" to "space-between")), "wtu-1cu5goa-l" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "wtu-6fkyl1-m" to _pS(_uM("width" to 40)), "wtu-12mu282-n" to _pS(_uM("height" to 40)), "wtu-ww7gtr-o" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-127on44-p" to _pS(_uM("fontSize" to 16)), "wtu-19gexn6-q" to _pS(_uM("color" to "#ffffff")), "wtu-1x7cgzs-r" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-15ctu2r-s" to _pS(_uM("paddingTop" to 10)), "wtu-1s8d77i-t" to _pS(_uM("color" to "#2d3748")), "wtu-1gk50cy-u" to _pS(_uM("overflow" to "hidden")), "wtu-1p9z6y3-v" to _pS(_uM("paddingLeft" to 14, "paddingRight" to 14)), "wtu-1cuonmx-w" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
