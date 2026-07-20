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
import io.dcloud.uniapp.extapi.getStorageInfoSync as uni_getStorageInfoSync
import io.dcloud.uniapp.extapi.getStorageSync as uni_getStorageSync
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.showModal as uni_showModal
import io.dcloud.uniapp.extapi.showToast as uni_showToast
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
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
        var setup: (__props: GenSrcPagesMeMe) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesMeMe
            val _cache = __ins.renderCache
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
                val info: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("info", "src/pages/me/me.uvue", 82, 9), "userId" to userStore.state.userInfo.userId, "username" to userStore.state.userInfo.username, "nickname" to userStore.state.userInfo.nickname, "avatar" to userStore.state.userInfo.avatar)
                return JSON.stringify(info, null, 2)
            }
            )
            onShow(fun(){
                console.log("All storage keys:", uni_getStorageInfoSync().keys, " at src/pages/me/me.uvue:92")
                console.log("pinia:token:", uni_getStorageSync("pinia:token"), " at src/pages/me/me.uvue:93")
                console.log("pinia:user:", uni_getStorageSync("pinia:user"), " at src/pages/me/me.uvue:94")
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
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-bar-title-text" to "我的"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container"), _uA(
                                    _cE("view", _uM("class" to "header-card"), _uA(
                                        _cE("image", _uM("class" to "avatar", "src" to unref(avatarUrl)), null, 8, _uA(
                                            "src"
                                        )),
                                        _cE("text", _uM("class" to "username"), _tD(if (unref(userStore).state.userInfo.username.length > 0) {
                                            unref(userStore).state.userInfo.username
                                        } else {
                                            "未登录用户"
                                        }
                                        ), 1),
                                        if (unref(userStore).state.userInfo.username.length > 0) {
                                            _cE("text", _uM("key" to 0, "class" to "nickname"), _tD(unref(userStore).state.userInfo.nickname), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        _cE("view", _uM("class" to "status-wrap"), _uA(
                                            _cE("text", _uM("class" to _nC(_uA(
                                                "status-tag",
                                                if (unref(tokenStore).hasValidLogin()) {
                                                    "status-logged-in"
                                                } else {
                                                    "status-not-logged-in"
                                                }
                                            ))), _tD(if (unref(tokenStore).hasValidLogin()) {
                                                "已登录"
                                            } else {
                                                "未登录"
                                            }
                                            ), 3)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "info-card"), _uA(
                                        _cE("view", _uM("class" to "info-header"), _uA(
                                            _cE("text", _uM("class" to "info-title"), "用户信息 (JSON)")
                                        )),
                                        _cE("scroll-view", _uM("class" to "json-scroll", "scroll-y" to "true"), _uA(
                                            _cE("text", _uM("class" to "json-text"), _tD(unref(userInfoJson)), 1)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "btn-wrap"), _uA(
                                        if (isTrue(unref(tokenStore).hasValidLogin())) {
                                            _cE("button", _uM("key" to 0, "class" to "btn-logout", "onClick" to handleLogout), " 退出登录 ")
                                        } else {
                                            _cE("button", _uM("key" to 1, "class" to "btn-login", "onClick" to handleLogin), " 登录 ")
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
                return _uM("page-container" to _pS(_uM("display" to "flex", "flexDirection" to "column", "paddingTop" to 24, "paddingRight" to 16, "paddingBottom" to 24, "paddingLeft" to 16, "alignItems" to "center", "backgroundColor" to "#f8f8f8", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "header-card" to _pS(_uM("width" to "100%", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12, "paddingTop" to 30, "paddingRight" to 20, "paddingBottom" to 30, "paddingLeft" to 20, "marginBottom" to 20, "display" to "flex", "flexDirection" to "column", "alignItems" to "center")), "avatar" to _pS(_uM("width" to 90, "height" to 90, "borderTopLeftRadius" to 45, "borderTopRightRadius" to 45, "borderBottomRightRadius" to 45, "borderBottomLeftRadius" to 45, "marginBottom" to 16, "borderTopWidth" to 3, "borderRightWidth" to 3, "borderBottomWidth" to 3, "borderLeftWidth" to 3, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "username" to _pS(_uM("fontSize" to 20, "fontWeight" to "bold", "color" to "#1e293b", "marginBottom" to 4)), "nickname" to _pS(_uM("fontSize" to 14, "color" to "#64748b", "marginBottom" to 12)), "status-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "status-tag" to _pS(_uM("fontSize" to 12, "paddingTop" to 4, "paddingRight" to 12, "paddingBottom" to 4, "paddingLeft" to 12, "borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20, "fontWeight" to "500", "overflow" to "hidden")), "status-logged-in" to _pS(_uM("backgroundColor" to "#d1fae5", "color" to "#065f46")), "status-not-logged-in" to _pS(_uM("backgroundColor" to "#f1f5f9", "color" to "#64748b")), "info-card" to _pS(_uM("width" to "100%", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12, "paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20, "marginBottom" to 24, "display" to "flex", "flexDirection" to "column")), "info-header" to _pS(_uM("borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f1f5f9", "paddingBottom" to 8, "marginBottom" to 12, "display" to "flex", "flexDirection" to "row")), "info-title" to _pS(_uM("fontSize" to 15, "fontWeight" to "600", "color" to "#334155")), "json-scroll" to _pS(_uM("backgroundColor" to "#0f172a", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "maxHeight" to 180)), "json-text" to _pS(_uM("fontSize" to 13, "color" to "#38bdf8", "lineHeight" to 1.6, "fontFamily" to "monospace")), "btn-wrap" to _pS(_uM("width" to "100%", "paddingTop" to 0, "paddingRight" to 8, "paddingBottom" to 0, "paddingLeft" to 8, "display" to "flex", "flexDirection" to "column")), "btn-logout" to _pS(_uM("width" to "100%", "height" to 48, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "backgroundColor" to "#ef4444", "color" to "#ffffff")), "btn-login" to _pS(_uM("width" to "100%", "height" to 48, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "backgroundColor" to "#3b82f6", "color" to "#ffffff")))
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
