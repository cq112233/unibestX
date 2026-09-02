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
import io.dcloud.uniapp.extapi.getStorageInfoSync as uni_getStorageInfoSync
import io.dcloud.uniapp.extapi.getStorageSync as uni_getStorageSync
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.showModal as uni_showModal
import io.dcloud.uniapp.extapi.showToast as uni_showToast
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenSrcPagesMeMe : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesMeMe) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesMeMe
            val _cache = __ins.renderCache
            onNavbarPullDownRefresh(fun(){
                setTimeout(fun(){
                    stopNavbarPullDownRefresh()
                }
                , 1000)
            }
            )
            onBackPress(fun(options: OnBackPressOptions): Boolean {
                if (options.from == "backbutton") {
                    return handleBackPressExit()
                }
                return false
            }
            )
            val userStore = useUserStore()
            val tokenStore = useTokenStore()
            val avatarUrl = computed(fun(): String {
                if (userStore.state.userInfo.avatar.length > 0) {
                    return userStore.state.userInfo.avatar
                }
                return "/static/logo.png"
            }
            )
            val userInfoJson = computed(fun(): String {
                val info: UTSJSONObject = _uO("userId" to userStore.state.userInfo.userId, "username" to userStore.state.userInfo.username, "nickname" to userStore.state.userInfo.nickname, "avatar" to userStore.state.userInfo.avatar)
                return JSON.stringify(info, null, 2)
            }
            )
            onShow(fun(){
                console.log("All storage keys:", uni_getStorageInfoSync().keys)
                console.log("pinia:token:", uni_getStorageSync("pinia:token"))
                console.log("pinia:user:", uni_getStorageSync("pinia:user"))
            }
            )
            fun gen_handleLogin_fn() {
                uni_navigateTo(NavigateToOptions(url = LOGIN_PAGE))
            }
            val handleLogin = ::gen_handleLogin_fn
            fun gen_handleLogout_fn() {
                uni_showModal(ShowModalOptions(title = "提示", content = "确定要退出登录吗？", success = fun(res){
                    if (res.confirm) {
                        tokenStore.clearToken()
                        userStore.clearUserInfo()
                        uni_showToast(ShowToastOptions(title = "退出登录成功", icon = "success"))
                        setTimeout(fun(){
                            val targetUrl = "/src/pages/index/index"
                            setCurIdxByPath(targetUrl)
                            uni_switchTab(SwitchTabOptions(url = targetUrl))
                        }
                        , 0)
                    }
                }
                ))
            }
            val handleLogout = ::gen_handleLogout_fn
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "我的", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2 wtu-ivlko1-3 wtu-1dbe7du-4"), _uA(
                                    _cE("view", _uM("class" to "wtu-v9mcu4-5 wtu-4q8au6-6 wtu-4hefdc-7 wtu-8ywmhi-8 wtu-1d9c8uz-9 wtu-r07p60-a wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2"), _uA(
                                        _cE("image", _uM("class" to "wtu-ammpw5-b wtu-1i4unru-c wtu-15pbjq5-d wtu-kjtkcs-e wtu-19juoov-f wtu-1ypllkc-g wtu-1q8anq5-h", "src" to unref(avatarUrl)), null, 8, _uA(
                                            "src"
                                        )),
                                        _cE("text", _uM("class" to "wtu-1mh8q0y-i wtu-58fnu4-j wtu-1c3ypac-k wtu-tminbx-l"), _tD(if (unref(userStore).state.userInfo.username.length > 0) {
                                            unref(userStore).state.userInfo.username
                                        } else {
                                            "未登录用户"
                                        }
                                        ), 1),
                                        if (unref(userStore).state.userInfo.username.length > 0) {
                                            _cE("text", _uM("key" to 0, "class" to "wtu-ysnhyx-m wtu-1ya1no3-n wtu-n8468q-o"), _tD(unref(userStore).state.userInfo.nickname), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        _cE("view", _uM("class" to "wtu-1hohpe6-0 wtu-1pllh87-p"), _uA(
                                            _cE("text", _uM("class" to _nC(_uA(
                                                "wtu-15s69u4-q wtu-jzjlp-r wtu-15d7yqm-s wtu-w73263-t wtu-17lenqs-u wtu-j5499y-v",
                                                if (unref(tokenStore).hasValidLogin()) {
                                                    "wtu-1x8u93y-w wtu-1obvnxf-x"
                                                } else {
                                                    "wtu-11a9dql-y wtu-1ya1no3-n"
                                                }
                                            ))), _tD(if (unref(tokenStore).hasValidLogin()) {
                                                "已登录"
                                            } else {
                                                "未登录"
                                            }
                                            ), 3)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "wtu-v9mcu4-5 wtu-4q8au6-6 wtu-4hefdc-7 wtu-1ssxnx3-z wtu-r07p60-a wtu-1hohpe6-0 wtu-kfqmh9-1"), _uA(
                                        _cE("view", _uM("class" to "wtu-f24hak-10 wtu-1hohpe6-0 wtu-1pllh87-p"), _uA(
                                            _cE("text", _uM("class" to "wtu-1n331w6-11 wtu-4yhcom-12 wtu-wy5oxr-13"), "用户信息 (JSON)")
                                        )),
                                        _cE("view", _uM("class" to "wtu-oegkbd-14 wtu-11a9dql-y wtu-n8468q-o")),
                                        _cE("scroll-view", _uM("class" to "wtu-1p4csuv-15 wtu-tcbx2t-16 wtu-1rs8ewt-17 wtu-167vn40-18", "direction" to "vertical"), _uA(
                                            _cE("text", _uM("class" to "wtu-15s69u4-q wtu-1f6mdr3-19 wtu-1vnq6qv-1a", "style" to _nS(_uM("font-family" to "monospace"))), _tD(unref(userInfoJson)), 5)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "wtu-v9mcu4-5 wtu-hy1yfe-1b wtu-1hohpe6-0 wtu-kfqmh9-1"), _uA(
                                        if (isTrue(unref(tokenStore).hasValidLogin())) {
                                            _cE("view", _uM("key" to 0, "class" to "wtu-v9mcu4-5 wtu-1spr422-1c wtu-tcbx2t-16 wtu-1l9wu4z-1d wtu-1hohpe6-0 wtu-1pllh87-p wtu-tikv1r-2 wtu-1rnqkyn-1e", "onClick" to handleLogout), _uA(
                                                _cE("text", _uM("class" to "wtu-amc2mi-1f wtu-1n331w6-11 wtu-58fnu4-j"), "退出登录")
                                            ))
                                        } else {
                                            _cE("view", _uM("key" to 1, "class" to "wtu-v9mcu4-5 wtu-1spr422-1c wtu-tcbx2t-16 wtu-1y6dimz-1g wtu-1hohpe6-0 wtu-1pllh87-p wtu-tikv1r-2 wtu-1rnqkyn-1e", "onClick" to handleLogin), _uA(
                                                _cE("text", _uM("class" to "wtu-amc2mi-1f wtu-1n331w6-11 wtu-58fnu4-j"), "登录")
                                            ))
                                        }
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
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
                return _uM("wtu-1hohpe6-0" to _pS(_uM("display" to "flex")), "wtu-kfqmh9-1" to _pS(_uM("flexDirection" to "column")), "wtu-tikv1r-2" to _pS(_uM("alignItems" to "center")), "wtu-ivlko1-3" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "wtu-1dbe7du-4" to _pS(_uM("paddingTop" to 8)), "wtu-v9mcu4-5" to _pS(_uM("width" to "100%")), "wtu-4q8au6-6" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-4hefdc-7" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-8ywmhi-8" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "wtu-1d9c8uz-9" to _pS(_uM("paddingTop" to 20, "paddingBottom" to 20)), "wtu-r07p60-a" to _pS(_uM("marginBottom" to 16)), "wtu-ammpw5-b" to _pS(_uM("width" to 80)), "wtu-1i4unru-c" to _pS(_uM("height" to 80)), "wtu-15pbjq5-d" to _pS(_uM("borderTopLeftRadius" to 40, "borderTopRightRadius" to 40, "borderBottomRightRadius" to 40, "borderBottomLeftRadius" to 40)), "wtu-kjtkcs-e" to _pS(_uM("marginBottom" to 12)), "wtu-19juoov-f" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 3, "borderRightWidth" to 3, "borderBottomWidth" to 3, "borderLeftWidth" to 3)), "wtu-1ypllkc-g" to _pS(_uM("borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "wtu-1q8anq5-h" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1mh8q0y-i" to _pS(_uM("fontSize" to 18)), "wtu-58fnu4-j" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1c3ypac-k" to _pS(_uM("color" to "#1e293b")), "wtu-tminbx-l" to _pS(_uM("marginBottom" to 4)), "wtu-ysnhyx-m" to _pS(_uM("fontSize" to 13)), "wtu-1ya1no3-n" to _pS(_uM("color" to "#64748b")), "wtu-n8468q-o" to _pS(_uM("marginBottom" to 10)), "wtu-1pllh87-p" to _pS(_uM("flexDirection" to "row")), "wtu-15s69u4-q" to _pS(_uM("fontSize" to 12)), "wtu-jzjlp-r" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-15d7yqm-s" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "wtu-w73263-t" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-17lenqs-u" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-j5499y-v" to _pS(_uM("overflow" to "hidden")), "wtu-1x8u93y-w" to _pS(_uM("backgroundColor" to "#d1fae5")), "wtu-1obvnxf-x" to _pS(_uM("color" to "#065f46")), "wtu-11a9dql-y" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-1ssxnx3-z" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-f24hak-10" to _pS(_uM("paddingBottom" to 8)), "wtu-1n331w6-11" to _pS(_uM("fontSize" to 14)), "wtu-4yhcom-12" to _pS(_uM("--tw-font-weight" to "var(--font-weight-semibold, 600)", "fontWeight" to 600)), "wtu-wy5oxr-13" to _pS(_uM("color" to "#334155")), "wtu-oegkbd-14" to _pS(_uM("height" to 1)), "wtu-1p4csuv-15" to _pS(_uM("backgroundColor" to "#0f172a")), "wtu-tcbx2t-16" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1rs8ewt-17" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "wtu-167vn40-18" to _pS(_uM("height" to 130)), "wtu-1f6mdr3-19" to _pS(_uM("color" to "#38bdf8")), "wtu-1vnq6qv-1a" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-hy1yfe-1b" to _pS(_uM("paddingLeft" to 4, "paddingRight" to 4)), "wtu-1spr422-1c" to _pS(_uM("height" to 44)), "wtu-1l9wu4z-1d" to _pS(_uM("backgroundColor" to "#ef4444")), "wtu-1rnqkyn-1e" to _pS(_uM("justifyContent" to "center")), "wtu-amc2mi-1f" to _pS(_uM("color" to "#ffffff")), "wtu-1y6dimz-1g" to _pS(_uM("backgroundColor" to "#3b82f6")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
