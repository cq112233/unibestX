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
open class GenSrcPagesMeMe : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
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
                            switchTabbar("/src/pages/index/index")
                        }
                        , 0)
                    }
                }
                ))
            }
            val handleLogout = ::gen_handleLogout_fn
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "我的", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "我的", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-umklo8-2 wtu-tikv1r-3 wtu-ivlko1-4 wtu-1dbe7du-5"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border wtu-v9mcu4-6 wtu-4q8au6-7 wtu-4hefdc-8 wtu-8ywmhi-9 wtu-1d9c8uz-a wtu-r07p60-b wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-3"), _uA(
                                        _cE("image", _uM("class" to "wtu-ammpw5-c wtu-1i4unru-d wtu-15pbjq5-e wtu-kjtkcs-f wtu-19juoov-g wtu-1ypllkc-h wtu-1q8anq5-i", "src" to avatarUrl.value), null, 8, _uA(
                                            "src"
                                        )),
                                        _cE("text", _uM("class" to "weapp-tw-border wtu-1mh8q0y-j wtu-58fnu4-k wtu-1c3ypac-l wtu-tminbx-m"), _tD(if (unref(userStore).state.userInfo.username.length > 0) {
                                            unref(userStore).state.userInfo.username
                                        } else {
                                            "未登录用户"
                                        }
                                        ), 1),
                                        if (unref(userStore).state.userInfo.username.length > 0) {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border wtu-ysnhyx-n wtu-1ya1no3-o wtu-n8468q-p"), _tD(unref(userStore).state.userInfo.nickname), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1hohpe6-0 wtu-1pllh87-q"), _uA(
                                            _cE("text", _uM("class" to _nC(_uA(
                                                "weapp-tw-border wtu-15s69u4-r wtu-jzjlp-s wtu-15d7yqm-t wtu-w73263-u wtu-17lenqs-v wtu-j5499y-w",
                                                if (unref(tokenStore).hasValidLogin()) {
                                                    "wtu-1x8u93y-x wtu-1obvnxf-y"
                                                } else {
                                                    "wtu-11a9dql-z wtu-1ya1no3-o"
                                                }
                                            ))), _tD(if (unref(tokenStore).hasValidLogin()) {
                                                "已登录"
                                            } else {
                                                "未登录"
                                            }
                                            ), 3)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border wtu-v9mcu4-6 wtu-4q8au6-7 wtu-4hefdc-8 wtu-1ssxnx3-10 wtu-r07p60-b wtu-1hohpe6-0 wtu-kfqmh9-1"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-f24hak-11 wtu-1hohpe6-0 wtu-1pllh87-q"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-1n331w6-12 wtu-4yhcom-13 wtu-wy5oxr-14"), "用户信息 (JSON)")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-oegkbd-15 wtu-11a9dql-z wtu-n8468q-p")),
                                        _cE("scroll-view", _uM("class" to "wtu-1p4csuv-16 wtu-tcbx2t-17 wtu-1rs8ewt-18 wtu-167vn40-19", "direction" to "vertical"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-15s69u4-r wtu-1f6mdr3-1a wtu-1vnq6qv-1b", "style" to _nS(_uM("font-family" to "monospace"))), _tD(userInfoJson.value), 5)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border wtu-v9mcu4-6 wtu-hy1yfe-1c wtu-1hohpe6-0 wtu-kfqmh9-1"), _uA(
                                        if (isTrue(unref(tokenStore).hasValidLogin())) {
                                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border wtu-v9mcu4-6 wtu-1spr422-1d wtu-tcbx2t-17 wtu-1l9wu4z-1e wtu-1hohpe6-0 wtu-1pllh87-q wtu-tikv1r-3 wtu-1rnqkyn-1f", "onClick" to handleLogout), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-amc2mi-1g wtu-1n331w6-12 wtu-58fnu4-k"), "退出登录")
                                            ))
                                        } else {
                                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border wtu-v9mcu4-6 wtu-1spr422-1d wtu-tcbx2t-17 wtu-1y6dimz-1h wtu-1hohpe6-0 wtu-1pllh87-q wtu-tikv1r-3 wtu-1rnqkyn-1f", "onClick" to handleLogin), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-amc2mi-1g wtu-1n331w6-12 wtu-58fnu4-k"), "登录")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-1hohpe6-0" to _pS(_uM("display" to "flex")), "wtu-kfqmh9-1" to _pS(_uM("flexDirection" to "column")), "wtu-umklo8-2" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-tikv1r-3" to _pS(_uM("alignItems" to "center")), "wtu-ivlko1-4" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "wtu-1dbe7du-5" to _pS(_uM("paddingTop" to 8)), "wtu-v9mcu4-6" to _pS(_uM("width" to "100%")), "wtu-4q8au6-7" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-4hefdc-8" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-8ywmhi-9" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "wtu-1d9c8uz-a" to _pS(_uM("paddingTop" to 20, "paddingBottom" to 20)), "wtu-r07p60-b" to _pS(_uM("marginBottom" to 16)), "wtu-ammpw5-c" to _pS(_uM("width" to 80)), "wtu-1i4unru-d" to _pS(_uM("height" to 80)), "wtu-15pbjq5-e" to _pS(_uM("borderTopLeftRadius" to 40, "borderTopRightRadius" to 40, "borderBottomRightRadius" to 40, "borderBottomLeftRadius" to 40)), "wtu-kjtkcs-f" to _pS(_uM("marginBottom" to 12)), "wtu-19juoov-g" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 3, "borderRightWidth" to 3, "borderBottomWidth" to 3, "borderLeftWidth" to 3)), "wtu-1ypllkc-h" to _pS(_uM("borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "wtu-1q8anq5-i" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1mh8q0y-j" to _pS(_uM("fontSize" to 18)), "wtu-58fnu4-k" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1c3ypac-l" to _pS(_uM("color" to "#1e293b")), "wtu-tminbx-m" to _pS(_uM("marginBottom" to 4)), "wtu-ysnhyx-n" to _pS(_uM("fontSize" to 13)), "wtu-1ya1no3-o" to _pS(_uM("color" to "#64748b")), "wtu-n8468q-p" to _pS(_uM("marginBottom" to 10)), "wtu-1pllh87-q" to _pS(_uM("flexDirection" to "row")), "wtu-15s69u4-r" to _pS(_uM("fontSize" to 12)), "wtu-jzjlp-s" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-15d7yqm-t" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "wtu-w73263-u" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-17lenqs-v" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-j5499y-w" to _pS(_uM("overflow" to "hidden")), "wtu-1x8u93y-x" to _pS(_uM("backgroundColor" to "#d1fae5")), "wtu-1obvnxf-y" to _pS(_uM("color" to "#065f46")), "wtu-11a9dql-z" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-1ssxnx3-10" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-f24hak-11" to _pS(_uM("paddingBottom" to 8)), "wtu-1n331w6-12" to _pS(_uM("fontSize" to 14)), "wtu-4yhcom-13" to _pS(_uM("--tw-font-weight" to "var(--font-weight-semibold, 600)", "fontWeight" to 600)), "wtu-wy5oxr-14" to _pS(_uM("color" to "#334155")), "wtu-oegkbd-15" to _pS(_uM("height" to 1)), "wtu-1p4csuv-16" to _pS(_uM("backgroundColor" to "#0f172a")), "wtu-tcbx2t-17" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1rs8ewt-18" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "wtu-167vn40-19" to _pS(_uM("height" to 130)), "wtu-1f6mdr3-1a" to _pS(_uM("color" to "#38bdf8")), "wtu-1vnq6qv-1b" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-hy1yfe-1c" to _pS(_uM("paddingLeft" to 4, "paddingRight" to 4)), "wtu-1spr422-1d" to _pS(_uM("height" to 44)), "wtu-1l9wu4z-1e" to _pS(_uM("backgroundColor" to "#ef4444")), "wtu-1rnqkyn-1f" to _pS(_uM("justifyContent" to "center")), "wtu-amc2mi-1g" to _pS(_uM("color" to "#ffffff")), "wtu-1y6dimz-1h" to _pS(_uM("backgroundColor" to "#3b82f6")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
