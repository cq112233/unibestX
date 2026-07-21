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
                val info: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("info", "src/pages/me/me.uvue", 142, 9), "userId" to userStore.state.userInfo.userId, "username" to userStore.state.userInfo.username, "nickname" to userStore.state.userInfo.nickname, "avatar" to userStore.state.userInfo.avatar)
                return JSON.stringify(info, null, 2)
            }
            )
            onShow(fun(){
                console.log("All storage keys:", uni_getStorageInfoSync().keys, " at src/pages/me/me.uvue:152")
                console.log("pinia:token:", uni_getStorageSync("pinia:token"), " at src/pages/me/me.uvue:153")
                console.log("pinia:user:", uni_getStorageSync("pinia:user"), " at src/pages/me/me.uvue:154")
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
                                _cE("view", _uM("class" to "flex flex-col items-center px-16px py-24px flex-1"), _uA(
                                    _cE("view", _uM("class" to "w-full bg-white rounded-12px px-20px py-30px mb-20px flex flex-col items-center"), _uA(
                                        _cE("image", _uM("class" to "w-90px h-90px rounded-45px mb-16px border-width-3px border-color-__f1f5f9_ border-solid", "src" to unref(avatarUrl)), null, 8, _uA(
                                            "src"
                                        )),
                                        _cE("text", _uM("class" to "text-20px font-bold text-__1e293b_ mb-4px"), _tD(if (unref(userStore).state.userInfo.username.length > 0) {
                                            unref(userStore).state.userInfo.username
                                        } else {
                                            "未登录用户"
                                        }
                                        ), 1),
                                        if (unref(userStore).state.userInfo.username.length > 0) {
                                            _cE("text", _uM("key" to 0, "class" to "text-14px text-__64748b_ mb-12px"), _tD(unref(userStore).state.userInfo.nickname), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        _cE("view", _uM("class" to "flex flex-row"), _uA(
                                            _cE("text", _uM("class" to _nC(_uA(
                                                "text-12px px-12px py-4px rounded-20px font-medium overflow-hidden",
                                                if (unref(tokenStore).hasValidLogin()) {
                                                    "bg-__d1fae5_ text-__065f46_"
                                                } else {
                                                    "bg-__f1f5f9_ text-__64748b_"
                                                }
                                            ))), _tD(if (unref(tokenStore).hasValidLogin()) {
                                                "已登录"
                                            } else {
                                                "未登录"
                                            }
                                            ), 3)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "w-full bg-white rounded-12px p-20px mb-24px flex flex-col"), _uA(
                                        _cE("view", _uM("class" to "border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_ pb-8px mb-12px flex flex-row"), _uA(
                                            _cE("text", _uM("class" to "text-15px font-semibold text-__334155_"), "用户信息 (JSON)")
                                        )),
                                        _cE("scroll-view", _uM("class" to "bg-__0f172a_ rounded-8px p-12px h-180px", "scroll-y" to "true"), _uA(
                                            _cE("text", _uM("class" to "text-13px text-__38bdf8_ leading-20px", "style" to _nS(_uM("font-family" to "monospace"))), _tD(unref(userInfoJson)), 5)
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "w-full px-8px flex flex-col"), _uA(
                                        if (isTrue(unref(tokenStore).hasValidLogin())) {
                                            _cE("view", _uM("key" to 0, "class" to "w-full h-48px rounded-8px bg-__ef4444_ flex flex-row items-center justify-center", "onClick" to handleLogout), _uA(
                                                _cE("text", _uM("class" to "text-__ffffff_ text-14px font-bold"), "退出登录")
                                            ))
                                        } else {
                                            _cE("view", _uM("key" to 1, "class" to "w-full h-48px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center", "onClick" to handleLogin), _uA(
                                                _cE("text", _uM("class" to "text-__ffffff_ text-14px font-bold"), "登录")
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
                return _uM("bg-__0f172a_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#0f172a")), "bg-__3b82f6_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3b82f6")), "bg-__d1fae5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#d1fae5")), "bg-__ef4444_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ef4444")), "bg-__f1f5f9_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f1f5f9")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "border-bottom-color-__f1f5f9_" to _pS(_uM("borderBottomColor" to "#f1f5f9")), "border-bottom-style-solid" to _pS(_uM("borderBottomStyle" to "solid")), "border-bottom-width-1px" to _pS(_uM("borderBottomWidth" to 1)), "border-color-__f1f5f9_" to _pS(_uM("borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "border-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-width-3px" to _pS(_uM("borderTopWidth" to 3, "borderRightWidth" to 3, "borderBottomWidth" to 3, "borderLeftWidth" to 3)), "flex" to _pS(_uM("display" to "flex")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to 700)), "font-medium" to _pS(_uM("fontWeight" to 500)), "font-semibold" to _pS(_uM("fontWeight" to 600)), "h-180px" to _pS(_uM("height" to 180)), "h-48px" to _pS(_uM("height" to 48)), "h-90px" to _pS(_uM("height" to 90)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-center" to _pS(_uM("justifyContent" to "center")), "leading-20px" to _pS(_uM("lineHeight" to "20px")), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-20px" to _pS(_uM("marginBottom" to 20)), "mb-24px" to _pS(_uM("marginBottom" to 24)), "mb-4px" to _pS(_uM("marginBottom" to 4)), "overflow-hidden" to _pS(_uM("overflow" to "hidden")), "p-12px" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "p-20px" to _pS(_uM("paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "pb-8px" to _pS(_uM("paddingBottom" to 8)), "px-12px" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "px-16px" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "px-20px" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "px-8px" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "py-24px" to _pS(_uM("paddingTop" to 24, "paddingBottom" to 24)), "py-30px" to _pS(_uM("paddingTop" to 30, "paddingBottom" to 30)), "py-4px" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-20px" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "rounded-45px" to _pS(_uM("borderTopLeftRadius" to 45, "borderTopRightRadius" to 45, "borderBottomRightRadius" to 45, "borderBottomLeftRadius" to 45)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__065f46_" to _pS(_uM("color" to "#065f46")), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__38bdf8_" to _pS(_uM("color" to "#38bdf8")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__ffffff_" to _pS(_uM("color" to "#ffffff")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-15px" to _pS(_uM("fontSize" to 15)), "text-20px" to _pS(_uM("fontSize" to 20)), "w-90px" to _pS(_uM("width" to 90)), "w-full" to _pS(_uM("width" to "100%")))
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
