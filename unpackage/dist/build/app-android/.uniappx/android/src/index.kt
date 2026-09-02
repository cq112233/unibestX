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
import io.dcloud.uniapp.extapi.`$emit` as uni__emit
import io.dcloud.uniapp.extapi.`$off` as uni__off
import io.dcloud.uniapp.extapi.`$on` as uni__on
import io.dcloud.uniapp.extapi.addInterceptor as uni_addInterceptor
import io.dcloud.uniapp.extapi.arrayBufferToBase64 as uni_arrayBufferToBase64
import io.dcloud.uniapp.extapi.base64ToArrayBuffer as uni_base64ToArrayBuffer
import io.dcloud.uniapp.extapi.createWebviewContext as uni_createWebviewContext
import io.dcloud.uniapp.extapi.downloadFile as uni_downloadFile
import io.dcloud.uniapp.extapi.exit as uni_exit
import io.dcloud.uniapp.extapi.getDeviceInfo as uni_getDeviceInfo
import io.dcloud.uniapp.extapi.getElementById as uni_getElementById
import io.dcloud.uniapp.extapi.getFileSystemManager as uni_getFileSystemManager
import io.dcloud.uniapp.extapi.getStorageSync as uni_getStorageSync
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
import io.dcloud.uniapp.extapi.loadFontFace as uni_loadFontFace
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.onAppThemeChange as uni_onAppThemeChange
import io.dcloud.uniapp.extapi.onOsThemeChange as uni_onOsThemeChange
import io.dcloud.uniapp.extapi.reLaunch as uni_reLaunch
import io.dcloud.uniapp.extapi.removeStorageSync as uni_removeStorageSync
import io.dcloud.uniapp.extapi.request as uni_request
import io.dcloud.uniapp.extapi.setAppTheme as uni_setAppTheme
import io.dcloud.uniapp.extapi.setStorageSync as uni_setStorageSync
import io.dcloud.uniapp.extapi.setTabBarItem as uni_setTabBarItem
import io.dcloud.uniapp.extapi.showToast as uni_showToast
import io.dcloud.uniapp.extapi.stopPullDownRefresh as uni_stopPullDownRefresh
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
import io.dcloud.uniapp.extapi.uploadFile as uni_uploadFile
val runBlock1 = run {
    __uniConfig.getAppStyles = fun(): Map<String, Map<String, Map<String, Any>>> {
        return GenApp.styles
    }
}
typealias UnsubscribeFn = () -> Unit
typealias SubscriptionMutationType = String
open class SubscriptionMutation (
    @JsonNotNull
    open var type: SubscriptionMutationType,
    @JsonNotNull
    open var storeId: String,
    open var payload: Any? = null,
    @JsonNotNull
    open var timestamp: Number,
) : UTSObject()
typealias StateSubscriptionCallback = (mutation: SubscriptionMutation, state: UTSJSONObject) -> Unit
open class ActionContext (
    @JsonNotNull
    open var name: String,
    @JsonNotNull
    open var storeId: String,
    @JsonNotNull
    open var args: UTSArray<Any>,
) : UTSObject()
typealias AfterActionCallback = (result: Any) -> Unit
typealias OnErrorActionCallback = (error: Any) -> Unit
typealias ActionSubscriptionCallback = (ctx: ActionContext, after: (cb: AfterActionCallback) -> Unit, onError: (cb: OnErrorActionCallback) -> Unit) -> Unit
open class PiniaPluginContext (
    @JsonNotNull
    open var pinia: IPinia,
    @JsonNotNull
    open var storeId: String,
    @JsonNotNull
    open var store: Any,
    @JsonNotNull
    open var state: Any,
) : UTSObject()
typealias PiniaPlugin = (ctx: PiniaPluginContext) -> Unit
interface IPinia {
    var state: UTSJSONObject
    var _stores: Map<String, Any>
    var _plugins: UTSArray<PiniaPlugin>
    var _e: EffectScope
    fun install(app: VueApp)
    fun use(plugin: PiniaPlugin): IPinia
}
open class PersistSerializer (
    open var serialize: (state: UTSJSONObject) -> String,
    open var deserialize: (raw: String) -> UTSJSONObject,
) : UTSObject()
open class PersistOptions (
    @JsonNotNull
    open var keyPrefix: String,
    open var includeStores: UTSArray<String>? = null,
    @JsonNotNull
    open var excludeStores: UTSArray<String>,
    open var serializer: PersistSerializer? = null,
) : UTSObject()
open class StateSubscriptionList {
    private var _list: UTSArray<StateSubscriptionCallback> = _uA()
    open fun add(cb: StateSubscriptionCallback): UnsubscribeFn {
        this._list.push(cb)
        return fun(): Unit {
            this.remove(cb)
        }
    }
    open fun remove(cb: StateSubscriptionCallback): Unit {
        val idx = this._list.indexOf(cb)
        if (idx >= 0) {
            this._list.splice(idx, 1)
        }
    }
    open fun trigger(mutation: SubscriptionMutation, state: UTSJSONObject): Unit {
        val snapshot: UTSArray<StateSubscriptionCallback> = _uA()
        run {
            var i: Number = 0
            while(i < this._list.length){
                snapshot.push(this._list[i])
                i++
            }
        }
        run {
            var i: Number = 0
            while(i < snapshot.length){
                try {
                    snapshot[i](mutation, state)
                }
                 catch (e: Throwable) {
                    console.warn("[x-pinia-s] state subscription error:", e)
                }
                i++
            }
        }
    }
    open fun clear(): Unit {
        this._list = _uA()
    }
    open fun size(): Number {
        return this._list.length
    }
}
open class ActionSubscriptionList {
    private var _list: UTSArray<ActionSubscriptionCallback> = _uA()
    open fun add(cb: ActionSubscriptionCallback): UnsubscribeFn {
        this._list.push(cb)
        return fun(): Unit {
            this.remove(cb)
        }
    }
    open fun remove(cb: ActionSubscriptionCallback): Unit {
        val idx = this._list.indexOf(cb)
        if (idx >= 0) {
            this._list.splice(idx, 1)
        }
    }
    open fun trigger(ctx: ActionContext): ActionTriggerResult {
        val afterList: UTSArray<AfterActionCallback> = _uA()
        val errorList: UTSArray<OnErrorActionCallback> = _uA()
        val after = fun(cb: AfterActionCallback): Unit {
            afterList.push(cb)
        }
        val onError = fun(cb: OnErrorActionCallback): Unit {
            errorList.push(cb)
        }
        val snapshot: UTSArray<ActionSubscriptionCallback> = _uA()
        run {
            var i: Number = 0
            while(i < this._list.length){
                snapshot.push(this._list[i])
                i++
            }
        }
        run {
            var i: Number = 0
            while(i < snapshot.length){
                try {
                    snapshot[i](ctx, after, onError)
                }
                 catch (e: Throwable) {
                    console.warn("[x-pinia-s] action subscription error:", e)
                }
                i++
            }
        }
        return ActionTriggerResult(afterList = afterList, errorList = errorList)
    }
    open fun clear(): Unit {
        this._list = _uA()
    }
    open fun size(): Number {
        return this._list.length
    }
}
open class ActionTriggerResult (
    @JsonNotNull
    open var afterList: UTSArray<AfterActionCallback>,
    @JsonNotNull
    open var errorList: UTSArray<OnErrorActionCallback>,
) : UTSObject()
open class PiniaStoreBase {
    open var `$id`: String = ""
    protected open var _state: Any? = null
    protected open var _stateSubs: StateSubscriptionList = StateSubscriptionList()
    protected open var _actionSubs: ActionSubscriptionList = ActionSubscriptionList()
    protected open var _watchStopper: (() -> Unit)? = null
    protected open var _pinia: IPinia? = null
    protected open var _bound: Boolean = false
    open var _scope: EffectScope? = null
    constructor(){}
    open val `$state`: Any?
        get(): Any? {
            return this._state
        }
    protected open fun bindState(state: Any): Unit {
        if (this._bound) {
            console.warn("[x-pinia-s][" + this.`$id` + "] bindState 只能调用一次")
            return
        }
        this._bound = true
        this._state = state
    }
    open fun _doReset(): Unit {}
    open fun _hydrate(_data: UTSJSONObject): Unit {}
    open fun _serialize(): UTSJSONObject {
        return (_uO())
    }
    protected open fun callAction(name: String, fn: () -> Any): Any? {
        return this._invokeAction(name, fn, _uA<Any>())
    }
    protected open fun callActionWithArgs(name: String, fn: () -> Any, args: UTSArray<Any>): Any? {
        return this._invokeAction(name, fn, args)
    }
    private fun _invokeAction(name: String, fn: () -> Any, args: UTSArray<Any>): Any? {
        val actionCtx = ActionContext(name = name, storeId = this.`$id`, args = args)
        val triggerResult: ActionTriggerResult = this._actionSubs.trigger(actionCtx)
        var result: Any? = null
        try {
            result = fn()
        }
         catch (e: Throwable) {
            run {
                var i: Number = 0
                while(i < triggerResult.errorList.length){
                    try {
                        triggerResult.errorList[i](e)
                    }
                     catch (e2: Throwable) {
                        console.warn("[x-pinia-s][" + this.`$id` + "] onError callback error:", e2)
                    }
                    i++
                }
            }
            throw e
        }
        run {
            var i: Number = 0
            while(i < triggerResult.afterList.length){
                try {
                    triggerResult.afterList[i](result)
                }
                 catch (e3: Throwable) {
                    console.warn("[x-pinia-s][" + this.`$id` + "] after callback error:", e3)
                }
                i++
            }
        }
        return result
    }
    open fun `$patch`(partial: UTSJSONObject): Unit {
        this._hydrate(partial)
        val m = SubscriptionMutation(type = "patch object", storeId = this.`$id`, payload = partial, timestamp = Date.now())
        val snapshot: UTSJSONObject = this._serialize()
        this._stateSubs.trigger(m, snapshot)
        if (this._pinia != null) {
            this._pinia!!.state[this.`$id`] = snapshot
        }
    }
    open fun `$reset`(): Unit {
        this._doReset()
        val m = SubscriptionMutation(type = "reset", storeId = this.`$id`, payload = null, timestamp = Date.now())
        val snapshot: UTSJSONObject = this._serialize()
        this._stateSubs.trigger(m, snapshot)
        if (this._pinia != null) {
            this._pinia!!.state[this.`$id`] = snapshot
        }
    }
    open fun `$subscribe`(cb: StateSubscriptionCallback): UnsubscribeFn {
        return this._stateSubs.add(cb)
    }
    open fun `$onAction`(cb: ActionSubscriptionCallback): UnsubscribeFn {
        return this._actionSubs.add(cb)
    }
    open fun `$dispose`(): Unit {
        if (this._watchStopper != null) {
            try {
                this._watchStopper!!()
            }
             catch (e: Throwable) {
                console.warn("[x-pinia-s][" + this.`$id` + "] watch stop error:", e)
            }
            this._watchStopper = null
        }
        this._stateSubs.clear()
        this._actionSubs.clear()
        if (this._scope != null) {
            try {
                this._scope!!.stop()
            }
             catch (e: Throwable) {
                console.warn("[x-pinia-s][" + this.`$id` + "] scope stop error:", e)
            }
            this._scope = null
        }
        if (this._pinia != null) {
            this._pinia!!._stores.`delete`(this.`$id`)
        }
    }
    open fun _setupBy(id: String, pinia: IPinia): Unit {
        this.`$id` = id
        this._pinia = pinia
        if (this._state != null) {
            val stateRef: Any = this._state!!
            val sl: StateSubscriptionList = this._stateSubs
            val sid: String = id
            val piniaRef: IPinia = pinia
            val selfRef: PiniaStoreBase = this
            this._watchStopper = watch(fun(): Any {
                return stateRef
            }
            , fun(): Unit {
                val m = SubscriptionMutation(type = "direct", storeId = sid, payload = null, timestamp = Date.now())
                val snapshot: UTSJSONObject = selfRef._serialize()
                sl.trigger(m, snapshot)
                piniaRef.state[sid] = snapshot
            }
            , WatchOptions(deep = true))
        }
        pinia.state[id] = this._serialize()
    }
}
var _activePinia: IPinia? = null
fun setActivePinia(pinia: IPinia?): Unit {
    _activePinia = pinia
}
fun getActivePinia(): IPinia? {
    return _activePinia
}
open class Pinia : IPinia {
    override var state = _uO()
    override var _stores: Map<String, Any> = Map<String, Any>()
    override var _plugins: UTSArray<PiniaPlugin> = _uA()
    override var _e: EffectScope = effectScope()
    private var _installed: Boolean = false
    constructor(){}
    override fun install(app: VueApp): Unit {
        if (this._installed) {
            console.warn("[x-pinia-s] pinia already installed on a Vue app")
            return
        }
        this._installed = true
        setActivePinia(this as IPinia)
    }
    override fun use(plugin: PiniaPlugin): IPinia {
        this._plugins.push(plugin)
        val piniaRef: IPinia = this
        this._stores.forEach(fun(store: Any, _id: String): Unit {
            applyPluginToStore(piniaRef, store, plugin)
        }
        )
        return this
    }
}
fun applyPluginToStore(pinia: IPinia, store: Any, plugin: PiniaPlugin): Unit {
    val storeBase: PiniaStoreBase = store as Any as PiniaStoreBase
    val ctx = PiniaPluginContext(pinia = pinia, storeId = storeBase.`$id`, store = store, state = storeBase.`$state`!!)
    try {
        plugin(ctx)
    }
     catch (e: Throwable) {
        console.warn("[x-pinia-s] plugin error on store " + ctx.storeId + ":", e)
    }
}
fun createPinia(): IPinia {
    val pinia: IPinia = Pinia()
    setActivePinia(pinia)
    return pinia
}
fun <T> defineStore(id: String, factory: () -> T): () -> T {
    return fun(): T {
        val pinia = getActivePinia()
        if (pinia == null) {
            throw UTSError("[x-pinia-s] no active Pinia. 请先在 main.uts 中调用 createPinia() 并 app.use(pinia)")
        }
        val activePinia = pinia!!
        val cached = activePinia._stores.get(id)
        if (cached != null) {
            console.log("[x-pinia-s] reuse cached store:", id)
            return cached as Any as T
        }
        console.log("[x-pinia-s] create new store:", id)
        val holder: UTSArray<Any> = _uA<Any>()
        activePinia._e.run(fun(): Unit {
            val childScope: EffectScope = effectScope()
            childScope.run(fun(): Unit {
                val created: T = factory()
                val base: PiniaStoreBase = created as Any as PiniaStoreBase
                base._scope = childScope
                base._setupBy(id, activePinia)
                holder.push(created as Any)
            }
            )
        }
        )
        val finalInstance: T = holder[0] as T
        activePinia._stores.set(id, finalInstance as Any)
        run {
            var i: Number = 0
            while(i < activePinia._plugins.length){
                applyPluginToStore(activePinia, finalInstance as Any, activePinia._plugins[i])
                i++
            }
        }
        return finalInstance
    }
}
val defaultSerializer = PersistSerializer(serialize = fun(state: UTSJSONObject): String {
    val s = JSON.stringify(state)
    return if (s == null) {
        "{}"
    } else {
        s!!
    }
}
, deserialize = fun(raw: String): UTSJSONObject {
    if (raw == "") {
        return (_uO())
    }
    val parsed = JSON.parseObject(raw)
    if (parsed == null) {
        return (_uO())
    }
    return parsed!!
}
)
fun mergePersistOptions(opts: PersistOptions?): PersistOptions {
    val defaults = PersistOptions(keyPrefix = "pinia:", includeStores = null, excludeStores = _uA(), serializer = null)
    if (opts == null) {
        return defaults
    }
    val o = opts!!
    return PersistOptions(keyPrefix = o.keyPrefix, includeStores = o.includeStores, excludeStores = o.excludeStores, serializer = o.serializer)
}
fun shouldPersist(storeId: String, opts: PersistOptions): Boolean {
    run {
        var i: Number = 0
        while(i < opts.excludeStores.length){
            if (opts.excludeStores[i] == storeId) {
                return false
            }
            i++
        }
    }
    if (opts.includeStores == null) {
        return true
    }
    val list = opts.includeStores!!
    run {
        var i: Number = 0
        while(i < list.length){
            if (list[i] == storeId) {
                return true
            }
            i++
        }
    }
    return false
}
fun createPersistPlugin(opts: PersistOptions?): PiniaPlugin {
    val config = mergePersistOptions(opts)
    val serializer = if (config.serializer == null) {
        defaultSerializer
    } else {
        config.serializer!!
    }
    val plugin: PiniaPlugin = fun(ctx: PiniaPluginContext): Unit {
        val id = ctx.storeId
        if (!shouldPersist(id, config)) {
            return
        }
        val storageKey = config.keyPrefix + id
        val storeBase: PiniaStoreBase = ctx.store as Any as PiniaStoreBase
        try {
            val raw = uni_getStorageSync(storageKey)
            if (raw != null && UTSAndroid.`typeof`(raw) == "string" && (raw as String) != "") {
                val restored = serializer.deserialize(raw as String)
                storeBase._hydrate(restored)
            }
        }
         catch (e: Throwable) {
            console.warn("[x-pinia-s][persist] restore failed for " + id + ":", e)
        }
        storeBase.`$subscribe`(fun(_mutation: SubscriptionMutation, state: UTSJSONObject): Unit {
            try {
                val str = serializer.serialize(state)
                uni_setStorageSync(storageKey, str)
            }
             catch (e: Throwable) {
                console.warn("[x-pinia-s][persist] save failed for " + id + ":", e)
            }
        }
        )
    }
    return plugin
}
open class ISingleTokenRes (
    @JsonNotNull
    open var token: String,
    @JsonNotNull
    open var expiresIn: Number,
) : UTSObject()
open class IDoubleTokenRes (
    @JsonNotNull
    open var accessToken: String,
    @JsonNotNull
    open var accessExpiresIn: Number,
    @JsonNotNull
    open var refreshToken: String,
    @JsonNotNull
    open var refreshExpiresIn: Number,
) : UTSObject()
open class ITokenState (
    @JsonNotNull
    open var token: String,
    @JsonNotNull
    open var expiresIn: Number,
    @JsonNotNull
    open var accessToken: String,
    @JsonNotNull
    open var accessExpiresIn: Number,
    @JsonNotNull
    open var refreshToken: String,
    @JsonNotNull
    open var refreshExpiresIn: Number,
    @JsonNotNull
    open var tokenExpireTime: Number,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return ITokenStateReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class ITokenStateReactiveObject : ITokenState, IUTSReactive<ITokenState> {
    override var __v_raw: ITokenState
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: ITokenState, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(token = __v_raw.token, expiresIn = __v_raw.expiresIn, accessToken = __v_raw.accessToken, accessExpiresIn = __v_raw.accessExpiresIn, refreshToken = __v_raw.refreshToken, refreshExpiresIn = __v_raw.refreshExpiresIn, tokenExpireTime = __v_raw.tokenExpireTime) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): ITokenStateReactiveObject {
        return ITokenStateReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var token: String
        get() {
            return _tRG(__v_raw, "token", __v_raw.token, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("token")) {
                return
            }
            val oldValue = __v_raw.token
            __v_raw.token = value
            _tRS(__v_raw, "token", oldValue, value)
        }
    override var expiresIn: Number
        get() {
            return _tRG(__v_raw, "expiresIn", __v_raw.expiresIn, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("expiresIn")) {
                return
            }
            val oldValue = __v_raw.expiresIn
            __v_raw.expiresIn = value
            _tRS(__v_raw, "expiresIn", oldValue, value)
        }
    override var accessToken: String
        get() {
            return _tRG(__v_raw, "accessToken", __v_raw.accessToken, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("accessToken")) {
                return
            }
            val oldValue = __v_raw.accessToken
            __v_raw.accessToken = value
            _tRS(__v_raw, "accessToken", oldValue, value)
        }
    override var accessExpiresIn: Number
        get() {
            return _tRG(__v_raw, "accessExpiresIn", __v_raw.accessExpiresIn, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("accessExpiresIn")) {
                return
            }
            val oldValue = __v_raw.accessExpiresIn
            __v_raw.accessExpiresIn = value
            _tRS(__v_raw, "accessExpiresIn", oldValue, value)
        }
    override var refreshToken: String
        get() {
            return _tRG(__v_raw, "refreshToken", __v_raw.refreshToken, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("refreshToken")) {
                return
            }
            val oldValue = __v_raw.refreshToken
            __v_raw.refreshToken = value
            _tRS(__v_raw, "refreshToken", oldValue, value)
        }
    override var refreshExpiresIn: Number
        get() {
            return _tRG(__v_raw, "refreshExpiresIn", __v_raw.refreshExpiresIn, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("refreshExpiresIn")) {
                return
            }
            val oldValue = __v_raw.refreshExpiresIn
            __v_raw.refreshExpiresIn = value
            _tRS(__v_raw, "refreshExpiresIn", oldValue, value)
        }
    override var tokenExpireTime: Number
        get() {
            return _tRG(__v_raw, "tokenExpireTime", __v_raw.tokenExpireTime, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tokenExpireTime")) {
                return
            }
            val oldValue = __v_raw.tokenExpireTime
            __v_raw.tokenExpireTime = value
            _tRS(__v_raw, "tokenExpireTime", oldValue, value)
        }
}
open class TokenStore : PiniaStoreBase {
    open var state: ITokenState = reactive<ITokenState>(ITokenState(token = "", expiresIn = 0, accessToken = "", accessExpiresIn = 0, refreshToken = "", refreshExpiresIn = 0, tokenExpireTime = 0))
    constructor() : super() {
        this.bindState(this.state)
    }
    override fun _doReset(): Unit {
        this.state.token = ""
        this.state.expiresIn = 0
        this.state.accessToken = ""
        this.state.accessExpiresIn = 0
        this.state.refreshToken = ""
        this.state.refreshExpiresIn = 0
        this.state.tokenExpireTime = 0
    }
    override fun _hydrate(_data: UTSJSONObject): Unit {
        if (_data["token"] != null) {
            this.state.token = _data["token"] as String
        }
        if (_data["expiresIn"] != null) {
            this.state.expiresIn = _data["expiresIn"] as Number
        }
        if (_data["accessToken"] != null) {
            this.state.accessToken = _data["accessToken"] as String
        }
        if (_data["accessExpiresIn"] != null) {
            this.state.accessExpiresIn = _data["accessExpiresIn"] as Number
        }
        if (_data["refreshToken"] != null) {
            this.state.refreshToken = _data["refreshToken"] as String
        }
        if (_data["refreshExpiresIn"] != null) {
            this.state.refreshExpiresIn = _data["refreshExpiresIn"] as Number
        }
        if (_data["tokenExpireTime"] != null) {
            this.state.tokenExpireTime = _data["tokenExpireTime"] as Number
        }
    }
    override fun _serialize(): UTSJSONObject {
        return _uO("token" to this.state.token, "expiresIn" to this.state.expiresIn, "accessToken" to this.state.accessToken, "accessExpiresIn" to this.state.accessExpiresIn, "refreshToken" to this.state.refreshToken, "refreshExpiresIn" to this.state.refreshExpiresIn, "tokenExpireTime" to this.state.tokenExpireTime)
    }
    open fun setSingleToken(res: ISingleTokenRes): Unit {
        this.state.token = res.token
        this.state.expiresIn = res.expiresIn
        val expireTime = Date.now() + res.expiresIn * 1000
        this.state.tokenExpireTime = expireTime
        uni_setStorageSync("accessTokenExpireTime", expireTime)
    }
    open fun setDoubleToken(res: IDoubleTokenRes): Unit {
        this.state.accessToken = res.accessToken
        this.state.accessExpiresIn = res.accessExpiresIn
        this.state.refreshToken = res.refreshToken
        this.state.refreshExpiresIn = res.refreshExpiresIn
        val now = Date.now()
        val expireTime = now + res.accessExpiresIn * 1000
        this.state.tokenExpireTime = expireTime
        uni_setStorageSync("accessTokenExpireTime", expireTime)
        uni_setStorageSync("refreshTokenExpireTime", now + res.refreshExpiresIn * 1000)
    }
    open fun clearToken(): Unit {
        this._doReset()
        uni_removeStorageSync("accessTokenExpireTime")
        uni_removeStorageSync("refreshTokenExpireTime")
    }
    open fun getToken(): String {
        if (this.state.accessToken != "") {
            return this.state.accessToken
        }
        return this.state.token
    }
    open fun isTokenValid(): Boolean {
        if (this.state.tokenExpireTime <= 0) {
            val kVal = uni_getStorageSync("accessTokenExpireTime")
            if (kVal != null && kVal !== "") {
                val num = UTSNumber.parseFloat(kVal.toString())
                if (!isNaN(num)) {
                    this.state.tokenExpireTime = num
                }
            }
        }
        return this.state.tokenExpireTime > 0 && Date.now() < this.state.tokenExpireTime
    }
    open fun isRefreshTokenValid(): Boolean {
        val kVal = uni_getStorageSync("refreshTokenExpireTime")
        if (kVal == null || kVal === "") {
            return false
        }
        val num = UTSNumber.parseFloat(kVal.toString())
        if (isNaN(num)) {
            return false
        }
        return Date.now() < num
    }
    open fun hasLoginInfo(): Boolean {
        return this.state.accessToken != "" || this.state.token != ""
    }
    open fun hasValidLogin(): Boolean {
        return this.hasLoginInfo() && this.isTokenValid()
    }
}
val useTokenStore = defineStore<TokenStore>("token", fun(): TokenStore {
    return TokenStore()
}
)
typealias CustomTabBarItemBadge = Any
open class CustomTabBarItem (
    @JsonNotNull
    open var text: String,
    @JsonNotNull
    open var pagePath: String,
    @JsonNotNull
    open var iconType: String,
    @JsonNotNull
    open var icon: String,
    @JsonNotNull
    open var iconActive: String,
    open var badge: CustomTabBarItemBadge? = null,
    @JsonNotNull
    open var isBulge: Boolean = false,
) : UTSObject()
open class TabbarStrategyType (
    @JsonNotNull
    open var NO_TABBAR: Number,
    @JsonNotNull
    open var NATIVE_TABBAR: Number,
    @JsonNotNull
    open var CUSTOM_TABBAR: Number,
) : UTSObject()
val TABBAR_STRATEGY_MAP = TabbarStrategyType(NO_TABBAR = 0, NATIVE_TABBAR = 1, CUSTOM_TABBAR = 2)
fun parseTabbarStrategy(): Number {
    val envMode: String = ("" + ("2" ?: "1")).trim()
    if (envMode == "0" || envMode == "NO_TABBAR") {
        return TABBAR_STRATEGY_MAP.NO_TABBAR
    }
    if (envMode == "2" || envMode == "CUSTOM_TABBAR") {
        return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR
    }
    return TABBAR_STRATEGY_MAP.NATIVE_TABBAR
}
val selectedTabbarStrategy: Number = parseTabbarStrategy()
val tabbarCacheEnable: Boolean = selectedTabbarStrategy != TABBAR_STRATEGY_MAP.NO_TABBAR
val customTabbarEnable: Boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR
val needHideNativeTabbar: Boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR
val isNativeTabbar: Boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR
val customTabbarList = _uA(
    CustomTabBarItem(text = "tabbar.home", pagePath = "src/pages/index/index", iconType = "icon", icon = "home", iconActive = "home-filled", badge = null, isBulge = false),
    CustomTabBarItem(text = "tabbar.basic", pagePath = "src/pages/basic/basic", iconType = "icon", icon = "tune", iconActive = "tune-filled", badge = null, isBulge = false),
    CustomTabBarItem(text = "tabbar.ai", pagePath = "", iconType = "icon", icon = "chatboxes", iconActive = "chatboxes-filled", badge = null, isBulge = true),
    CustomTabBarItem(text = "tabbar.function", pagePath = "src/pages/function/function", iconType = "icon", icon = "gear", iconActive = "gear-filled", badge = null, isBulge = false),
    CustomTabBarItem(text = "tabbar.me", pagePath = "src/pages/me/me", iconType = "icon", icon = "person", iconActive = "person-filled", badge = null, isBulge = false)
) as UTSArray<CustomTabBarItem>
fun normalizeList(): UTSArray<CustomTabBarItem> {
    val result: UTSArray<CustomTabBarItem> = _uA()
    run {
        var i: Number = 0
        while(i < customTabbarList.length){
            val item = customTabbarList[i]
            result.push(CustomTabBarItem(text = item.text, pagePath = if (item.pagePath.startsWith("/")) {
                item.pagePath
            } else {
                "/" + item.pagePath
            }
            , iconType = item.iconType, icon = item.icon, iconActive = item.iconActive, badge = item.badge, isBulge = item.isBulge))
            i++
        }
    }
    return result
}
val tabbarList = reactive(normalizeList())
@JvmField
val curIdx = ref(0)
val themeColor = ref("#37c2bc")
fun setCurIdx(idx: Number) {
    curIdx.value = idx
    uni_setStorageSync("app-tabbar-index", idx)
}
fun setCurIdxByPath(path: String) {
    var cleanPath = if (path.startsWith("/")) {
        path
    } else {
        "/" + path
    }
    val parts = cleanPath.split("?")
    cleanPath = parts[0]
    run {
        var i: Number = 0
        while(i < tabbarList.length){
            val tabPath = if (tabbarList[i].pagePath.startsWith("/")) {
                tabbarList[i].pagePath
            } else {
                "/" + tabbarList[i].pagePath
            }
            if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
                setCurIdx(i)
                break
            }
            i++
        }
    }
}
fun syncCurIdxByCurrentPage() {
    val pages = getCurrentPages()
    if (pages.length == 0) {
        return
    }
    val currentPage = pages[pages.length - 1]
    val route = currentPage.route
    if (route == null || route.length == 0) {
        return
    }
    setCurIdxByPath(route)
}
fun isPageTabbar(path: String): Boolean {
    if (selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NO_TABBAR) {
        return false
    }
    var cleanPath = if (path.startsWith("/")) {
        path
    } else {
        "/" + path
    }
    val parts = cleanPath.split("?")
    cleanPath = parts[0]
    run {
        var i: Number = 0
        while(i < tabbarList.length){
            val tabPath = if (tabbarList[i].pagePath.startsWith("/")) {
                tabbarList[i].pagePath
            } else {
                "/" + tabbarList[i].pagePath
            }
            if (tabPath === cleanPath || tabPath.endsWith(cleanPath)) {
                return true
            }
            i++
        }
    }
    return false
}
val LOGIN_STRATEGY_MAP: UTSJSONObject = _uO("DEFAULT_NO_NEED_LOGIN" to 0, "DEFAULT_NEED_LOGIN" to 1)
val LOGIN_STRATEGY = LOGIN_STRATEGY_MAP["DEFAULT_NO_NEED_LOGIN"]
val isNeedLoginMode = LOGIN_STRATEGY == LOGIN_STRATEGY_MAP["DEFAULT_NEED_LOGIN"]
val LOGIN_PAGE = "/src/sub/auth/login"
val EXCLUDE_LOGIN_PATH_LIST = _uA(
    "/src/sub/test/test"
)
open class UrlObj (
    @JsonNotNull
    open var path: String,
    @JsonNotNull
    open var query: Map<String, String>,
) : UTSObject()
fun parseUrlToObj(url: String): UrlObj {
    val parts = url.split("?")
    val path = parts[0]
    val query = Map<String, String>()
    if (parts.length > 1) {
        val queryStr = parts[1]
        val pairs = queryStr.split("&")
        run {
            var i: Number = 0
            while(i < pairs.length){
                val pair = pairs[i].split("=")
                if (pair.length > 1) {
                    val key = pair[0]
                    var value = pair[1]
                    if (value.includes("%")) {
                        value = decodeURIComponent(value) ?: ""
                    }
                    query.set(key, value)
                } else if (pair.length > 0) {
                    query.set(pair[0], "")
                }
                i++
            }
        }
    }
    return UrlObj(path = path, query = query)
}
fun judgeIsExcludePath(path: String): Boolean {
    var normalizedPath = path
    if (normalizedPath.startsWith("src/")) {
        normalizedPath = "/" + normalizedPath
    }
    return EXCLUDE_LOGIN_PATH_LIST.includes(normalizedPath)
}
fun doIntercept(url: String): Boolean {
    console.log("doIntercept url:", url)
    if (url == null || url == "") {
        return true
    }
    val urlObj = parseUrlToObj(url)
    var path = urlObj.path
    val query = urlObj.query
    if (path.startsWith("src/")) {
        path = "/" + path
    }
    if (!path.startsWith("/") && !path.startsWith("plugin://") && !path.startsWith("http://") && !path.startsWith("https://")) {
        val pages = getCurrentPages()
        var currentPath = ""
        if (pages.length > 0) {
            currentPath = pages[pages.length - 1].route
        }
        var normalizedCurrentPath = currentPath
        if (normalizedCurrentPath.startsWith("src/")) {
            normalizedCurrentPath = "/" + normalizedCurrentPath
        }
        if (!normalizedCurrentPath.startsWith("/")) {
            normalizedCurrentPath = "/" + normalizedCurrentPath
        }
        val lastSlashIdx = normalizedCurrentPath.lastIndexOf("/")
        var baseDir = ""
        if (lastSlashIdx >= 0) {
            baseDir = normalizedCurrentPath.substring(0, lastSlashIdx)
        }
        path = "" + baseDir + "/" + path
    }
    if (path.startsWith("src/")) {
        path = "/" + path
    }
    console.log("doIntercept normalized path:", path)
    val tokenStore = useTokenStore()
    val hasLogin = tokenStore.hasValidLogin()
    console.log("doIntercept login status - hasLogin:", hasLogin)
    if (hasLogin) {
        if (path !== LOGIN_PAGE) {
            return true
        } else {
            val redirect = query.get("redirect")
            val redirectUrl = if ((redirect != null && redirect != "")) {
                redirect
            } else {
                "/src/pages/index/index"
            }
            if (isPageTabbar(redirectUrl)) {
                setCurIdxByPath(redirectUrl)
                uni_switchTab(SwitchTabOptions(url = redirectUrl))
            } else {
                uni_navigateTo(NavigateToOptions(url = redirectUrl))
            }
            return false
        }
    }
    var fullPath = path
    if (query.size > 0) {
        val paramsList: UTSArray<String> = _uA()
        query.forEach(fun(kVal, key){
            paramsList.push("" + key + "=" + kVal)
        }
        )
        fullPath += "?" + paramsList.join("&")
    }
    val redirectUrl = "" + LOGIN_PAGE + "?redirect=" + encodeURIComponent(fullPath)
    if (isNeedLoginMode) {
        if (judgeIsExcludePath(path)) {
            return true
        } else {
            if (path === LOGIN_PAGE) {
                return true
            }
            console.log("doIntercept: redirecting to login page", redirectUrl)
            uni_navigateTo(NavigateToOptions(url = redirectUrl))
            return false
        }
    } else {
        if (judgeIsExcludePath(path)) {
            console.log("doIntercept: blacklisted path, redirecting to login page", redirectUrl)
            uni_navigateTo(NavigateToOptions(url = redirectUrl))
            return false
        }
        return true
    }
}
val navigateToInterceptor = Interceptor(invoke = fun(options: Any): Boolean {
    var url = ""
    if (options != null) {
        val opt = options as NavigateToOptions
        url = opt.url
    }
    return doIntercept(url)
}
)
val redirectToInterceptor = Interceptor(invoke = fun(options: Any): Boolean {
    var url = ""
    if (options != null) {
        val opt = options as RedirectToOptions
        url = opt.url
    }
    return doIntercept(url)
}
)
val reLaunchInterceptor = Interceptor(invoke = fun(options: Any): Boolean {
    var url = ""
    if (options != null) {
        val opt = options as ReLaunchOptions
        url = opt.url
    }
    return doIntercept(url)
}
)
val switchTabInterceptor = Interceptor(invoke = fun(options: Any): Boolean {
    var url = ""
    if (options != null) {
        val opt = options as SwitchTabOptions
        url = opt.url
    }
    return doIntercept(url)
}
)
val chooseLocationInterceptor = Interceptor(invoke = fun(options: Any): Boolean {
    return true
}
)
fun installRouteInterceptor() {
    uni_addInterceptor("navigateTo", navigateToInterceptor)
    uni_addInterceptor("reLaunch", reLaunchInterceptor)
    uni_addInterceptor("redirectTo", redirectToInterceptor)
    uni_addInterceptor("switchTab", switchTabInterceptor)
    uni_addInterceptor("chooseLocation", chooseLocationInterceptor)
}
open class I18nErrorCodesTypes (
    @JsonNotNull
    open var UNEXPECTED_RETURN_TYPE: Number,
    @JsonNotNull
    open var INVALID_ARGUMENT: Number,
    @JsonNotNull
    open var MUST_BE_CALL_SETUP_TOP: Number,
    @JsonNotNull
    open var NOT_INSTALLED: Number,
    @JsonNotNull
    open var REQUIRED_VALUE: Number,
    @JsonNotNull
    open var INVALID_VALUE: Number,
    @JsonNotNull
    open var CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Number,
    @JsonNotNull
    open var NOT_INSTALLED_WITH_PROVIDE: Number,
    @JsonNotNull
    open var UNEXPECTED_ERROR: Number,
    @JsonNotNull
    open var NOT_COMPATIBLE_LEGACY_VUE_I18N: Number,
    @JsonNotNull
    open var NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Number,
    @JsonNotNull
    open var TYPE_MISMATCH: Number,
) : UTSObject()
val I18nErrorCodes = I18nErrorCodesTypes(UNEXPECTED_RETURN_TYPE = 24, INVALID_ARGUMENT = 25, MUST_BE_CALL_SETUP_TOP = 26, NOT_INSTALLED = 27, REQUIRED_VALUE = 28, INVALID_VALUE = 29, CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN = 30, NOT_INSTALLED_WITH_PROVIDE = 31, UNEXPECTED_ERROR = 32, NOT_COMPATIBLE_LEGACY_VUE_I18N = 33, NOT_AVAILABLE_COMPOSITION_IN_LEGACY = 34, TYPE_MISMATCH = 35)
val errorMessages: Map<Number, String> = Map<Number, String>(_uA(
    _uA(
        I18nErrorCodes.UNEXPECTED_RETURN_TYPE,
        "composer中返回类型异常"
    ),
    _uA(
        I18nErrorCodes.INVALID_ARGUMENT,
        "参数无效"
    ),
    _uA(
        I18nErrorCodes.MUST_BE_CALL_SETUP_TOP,
        "必须在`setup`函数的顶部调用"
    ),
    _uA(
        I18nErrorCodes.NOT_INSTALLED,
        "需要用`app.use`函数安装"
    ),
    _uA(
        I18nErrorCodes.UNEXPECTED_ERROR,
        "意外错误"
    ),
    _uA(
        I18nErrorCodes.REQUIRED_VALUE,
        "值中必需，{0}"
    ),
    _uA(
        I18nErrorCodes.INVALID_VALUE,
        "值无效"
    ),
    _uA(
        I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,
        "无法设置vue-devtools插件"
    ),
    _uA(
        I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE,
        "需要用`provide`函数安装"
    ),
    _uA(
        I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N,
        "不兼容的旧版VueI18n。"
    ),
    _uA(
        I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY,
        "在旧版API模式下，Compostion API不可用。请确保旧版API模式正常工作"
    ),
    _uA(
        I18nErrorCodes.TYPE_MISMATCH,
        "类型不匹配"
    )
))
open class warnMessagesTypes (
    @JsonNotNull
    open var FALLBACK_TO_ROOT: Number,
    @JsonNotNull
    open var NOT_FOUND_PARENT_SCOPE: Number,
    @JsonNotNull
    open var IGNORE_OBJ_FLATTEN: Number,
    @JsonNotNull
    open var DEPRECATE_TC: Number,
) : UTSObject()
val I18nWarnCodes = warnMessagesTypes(FALLBACK_TO_ROOT = 8, NOT_FOUND_PARENT_SCOPE = 9, IGNORE_OBJ_FLATTEN = 10, DEPRECATE_TC = 11)
val warnMessages: Map<Number, String> = Map<Number, String>(_uA(
    _uA(
        I18nWarnCodes.FALLBACK_TO_ROOT,
        "使用根语言环境回退到{type} '{key}'。"
    ),
    _uA(
        I18nWarnCodes.NOT_FOUND_PARENT_SCOPE,
        "未找到父作用域，使用全局作用域。"
    ),
    _uA(
        I18nWarnCodes.IGNORE_OBJ_FLATTEN,
        "忽略对象扁平化：'{key}'键具有字符串值。"
    ),
    _uA(
        I18nWarnCodes.DEPRECATE_TC,
        "'tc'和'\$tc'已在v10中被弃用，请使用't'或'\$t'代替。'tc'和'\$tc'将在v11中移除。"
    )
))
fun getAllKeys(map: Map<String, UTSJSONObject>): UTSArray<String> {
    var keys: UTSArray<String> = _uA()
    map.forEach(fun(_, key){
        keys.push(key)
    }
    )
    return keys
}
fun isObject(obj: Any?): Boolean {
    return obj != null && UTSAndroid.`typeof`(obj) == "object"
}
open class Token (
    @JsonNotNull
    open var type: String,
    @JsonNotNull
    open var value: String,
) : UTSObject()
val RE_TOKEN_LIST_VALUE = UTSRegExp("^(?:\\d)+", "")
val RE_TOKEN_NAMED_VALUE = UTSRegExp("^(?:\\w)+", "")
fun parse(format: String): UTSArray<Token> {
    val tokens: UTSArray<Token> = _uA()
    var position: Number = 0
    var text: String = ""
    while(position < format.length){
        var char: String = format.charAt(position++)
        if (char == "{") {
            if (text.length > 0) {
                val token = Token(type = "text", value = text)
                tokens.push(token)
            }
            text = ""
            var sub: String = ""
            char = format.charAt(position++)
            while(char != "}"){
                sub += char
                char = format.charAt(position++)
            }
            val isClosed = char == "}"
            val type = if (RE_TOKEN_LIST_VALUE.test(sub)) {
                "list"
            } else {
                if (isClosed && RE_TOKEN_NAMED_VALUE.test(sub)) {
                    "named"
                } else {
                    "unknown"
                }
            }
            val token = Token(type = type, value = sub)
            tokens.push(token)
        } else if (char == "%") {
            if (format.charAt(position) != "{") {
                text += char
            }
        } else {
            text += char
        }
    }
    if (text.length > 0) {
        val token = Token(type = "text", value = text)
        tokens.push(token)
    }
    return tokens
}
fun compile(tokens: UTSArray<Token>, values: UTSJSONObject): UTSArray<Any> {
    return compile(tokens as UTSArray<Token>, values as Any)
}
fun compile(tokens: UTSArray<Token>, values: UTSArray<Any>): UTSArray<Any> {
    return compile(tokens as UTSArray<Token>, values as Any)
}
fun compile(tokens: UTSArray<Token>, values: Any): UTSArray<Any> {
    val compiled: UTSArray<Any> = _uA()
    var index: Number = 0
    val mode: String = if (UTSArray.isArray(values)) {
        "list"
    } else {
        if (isObject(values)) {
            "named"
        } else {
            "unknown"
        }
    }
    if (mode == "unknown") {
        return compiled
    }
    while(index < tokens.length){
        val token: Token = tokens[index]
        when (token.type) {
            "text" -> 
                compiled.push(token.value)
            "list" -> 
                {
                    val index__1 = parseInt(token.value, 10)
                    if (mode == "list") {
                        val value = (values as UTSArray<Any>)[index__1]
                        compiled.push(value)
                    } else {
                        if ("production" !== "production") {
                            warn("list did not receive a valid values array")
                        }
                    }
                }
            "named" -> 
                if (mode == "named") {
                    val value = (values as UTSJSONObject)[token.value] ?: ""
                    compiled.push("" + value)
                } else {
                    if ("production" !== "production") {
                        warn("Type of token '" + token.type + "' and format of value '" + mode + "' don't match!")
                    }
                }
            "unknown" -> 
                if (token.value.startsWith("'") && token.value.endsWith("'")) {
                    compiled.push(token.value.slice(1, -1))
                } else if ("production" !== "production") {
                    warn("Detect 'unknown' type of token!")
                }
        }
        index++
    }
    return compiled
}
open class BaseFormatter {
    private var _caches: Map<String, UTSArray<Token>>
    constructor(){
        this._caches = Map<String, UTSArray<Token>>()
    }
    open fun interpolate(message: String, values: Any?): UTSArray<Any> {
        if (values == null) {
            return _uA(
                message
            )
        }
        var tokens: UTSArray<Token>? = this._caches.get(message)
        if (tokens == null) {
            tokens = parse(message)
            this._caches.set(message, tokens)
        }
        return compile(tokens, values)
    }
}
typealias StringOrNull = String?
typealias Interpolate = (key: String, locale: StringOrNull, values: Any, visitedLinkStack: UTSArray<String>, interpolateMode: String) -> StringOrNull
typealias Link = (str: String, locale: StringOrNull, values: Any, visitedLinkStack: UTSArray<String>, interpolateMode: String) -> StringOrNull
typealias WarnDefault = (key: String, message: StringOrNull, values: Any, interpolateMode: String) -> StringOrNull
typealias LinkedModify = (str: String) -> String
typealias PluralizationRule = (choice: Number, choicesLength: Number) -> Number
interface Availabilities {
    var dateTimeFormat: Boolean
    var numberFormat: Boolean
}
open class AvailabilitiesImpl : Availabilities {
    override var dateTimeFormat: Boolean = false
    override var numberFormat: Boolean = false
    constructor(){}
}
val linkKeyMatcher = UTSRegExp("(?:@(?:\\.[a-zA-Z0-9_-]+)?:)(?:[\\w\\-_|:./]+|\\([\\w\\-_|:./]+\\)|(?:\\{[^}]+?\\}))", "g")
val linkKeyPrefixMatcher = UTSRegExp("^@(?:\\.([a-zA-Z]+))?:", "")
val bracketsMatcher = UTSRegExp("[()\\{\\}\\']", "g")
val defaultModifiers: Map<String, LinkedModify> = Map(_uA(
    _uA(
        "upper",
        fun(str: String): String {
            return str.toLocaleUpperCase()
        }
    ),
    _uA(
        "lower",
        fun(str: String): String {
            return str.toLocaleLowerCase()
        }
    ),
    _uA(
        "capitalize",
        fun(str: String): String {
            return "" + str.charAt(0).toLocaleUpperCase() + str.substring(1)
        }
    )
))
val DEFAULT_LOCALE = "en-US"
val defaultFormatter = BaseFormatter()
val availabilities = AvailabilitiesImpl()
fun setTabBarItems(tabbar: UTSArray<String>?) {
    if (tabbar == null) {
        return
    }
    val pages = getCurrentPages()
    val page = if (pages.length > 0) {
        pages[pages.length - 1]
    } else {
        null
    }
    val isTabBar = page != null
    if (!isTabBar) {
        return
    }
    tabbar.forEach(fun(text, index){
        uni_setTabBarItem(SetTabBarItemOptions(text = text, index = index, fail = fun(err) {
            console.warn(err.errMsg)
        }
        ))
    }
    )
}
fun getLocaleMap(locale: String, key: String, options: UTSJSONObject, root: Any? = null): Map<String, UTSJSONObject> {
    val __messages = UTSJSONObject.assign(_uO(), options.getJSON(key) ?: _uO())
    var map = Map<String, UTSJSONObject>()
    __messages.toMap().forEach(fun(value, key){
        if (value is UTSJSONObject) {
            map.set(key, value as UTSJSONObject)
        }
    }
    )
    if (map.size == 0 && root != null) {
        if (!map.has(locale)) {
            map.set(locale, _uO())
        }
    }
    return map
}
fun getLocaleTabbarMap(locale: String, key: String, options: UTSJSONObject): Map<String, UTSArray<String>> {
    val __messages = options.getJSON(key) ?: _uO()
    var map = Map<String, UTSArray<String>>()
    __messages.toMap().forEach(fun(tabbar, key){
        if (UTSArray.isArray(tabbar)) {
            map.set(key, tabbar as UTSArray<String>)
            if (key == locale) {
                setTimeout(fun(){
                    setTabBarItems(tabbar as UTSArray<String>)
                }
                , 500)
            }
        }
    }
    )
    return map
}
fun getModifiers(options: UTSJSONObject): Map<String, LinkedModify> {
    val __modifiers = (options.getJSON("modifiers") ?: _uO()).toMap()
    val _modifiers = Map<String, LinkedModify>()
    __modifiers.forEach(fun(value, key){
        if (UTSAndroid.`typeof`(value) == "function") {
            try {
                _modifiers.set(key, value as LinkedModify)
            }
             catch (e: Throwable) {
                console.warn(35, "自定义修饰器函数必须是类型：(str: string) => string")
            }
        }
    }
    )
    return _modifiers
}
fun getPluralizationRules(options: UTSJSONObject): Map<String, PluralizationRule> {
    val __pluralizationRules = (options.getJSON("pluralizationRules") ?: _uO()).toMap()
    val _pluralizationRules = Map<String, PluralizationRule>()
    __pluralizationRules.forEach(fun(value, key){
        if (UTSAndroid.`typeof`(value) == "function") {
            try {
                _pluralizationRules.set(key, value as PluralizationRule)
            }
             catch (e: Throwable) {
                if ("production" !== "production") {
                    console.warn(35, "自定义复数化规则函数必须是类型: ( choice: number, choicesLength: number) => number")
                }
            }
        }
    }
    )
    return _pluralizationRules
}
fun getFormatter(options: UTSJSONObject): BaseFormatter {
    val __formatter = options.get("formatter")
    return if (__formatter != null && __formatter is BaseFormatter) {
        __formatter as BaseFormatter
    } else {
        defaultFormatter
    }
}
var composerID: Number = 0
open class ComposerClass {
    open lateinit var id: Number
    open lateinit var locale: Ref<String>
    open lateinit var fallbackLocale: ComputedRefImpl<Any>
    open lateinit var messages: Ref<Map<String, UTSJSONObject>>
    open lateinit var availableLocales: UTSArray<String>
    open lateinit var availabilities: Availabilities
    private var _interpolate: Interpolate? = null
    private var _link: Link? = null
    private var _warnDefault: WarnDefault? = null
    private var _formatter: BaseFormatter
    private var _modifiers: Map<String, LinkedModify>
    private var _pluralizationRules: Map<String, PluralizationRule>
    private var _numberFormats: Ref<Map<String, UTSJSONObject>>
    private var _datetimeFormats: Ref<Map<String, UTSJSONObject>>
    private var _tabBars: Ref<Map<String, UTSArray<String>>>
    constructor(options: UTSJSONObject = _uO(), __root: ComposerClass? = null){
        this._formatter = getFormatter(options)
        this._modifiers = getModifiers(options)
        this._pluralizationRules = getPluralizationRules(options)
        val _inheritLocale = options.getBoolean("inheritLocale") ?: true
        val useRoot = __root != null && _inheritLocale
        val __locale = ref<String>(if (useRoot) {
            __root.locale.value
        } else {
            options.getString("locale") ?: DEFAULT_LOCALE
        }
        )
        val _fallbackLocale = ref<Any?>(if (useRoot) {
            __root.fallbackLocale.value
        } else {
            options.get("fallbackLocale")
        }
        )
        this.messages = ref<Map<String, UTSJSONObject>>(getLocaleMap(__locale.value, "messages", options, __root))
        this._numberFormats = ref<Map<String, UTSJSONObject>>(getLocaleMap(__locale.value, "numberFormats", options, __root))
        this._datetimeFormats = ref<Map<String, UTSJSONObject>>(getLocaleMap(__locale.value, "datetimeFormats", options, __root))
        this._tabBars = ref<Map<String, UTSArray<String>>>(getLocaleTabbarMap(__locale.value, "tabBars", options))
        this.locale = computed<String>(WritableComputedOptions(set = fun(kVal: String){
            __locale.value = kVal
            if (__root == null) {
                uni_setStorageSync("uVueI18nLocale", kVal)
            }
            setTabBarItems(this._tabBars.value.get(kVal))
        }
        , get = fun(): String {
            return __locale.value
        }
        ))
        this.fallbackLocale = computed<Any>(WritableComputedOptions(set = fun(kVal: Any){
            _fallbackLocale.value = kVal
        }
        , get = fun(): Any {
            return _fallbackLocale.value ?: false
        }
        ))
        this.availableLocales = getAllKeys(this.messages.value).sort()
        this.availabilities = uni.UNIB120614.availabilities
        this._initMethods()
        composerID++
        this.id = composerID
        val interceptor = Interceptor(complete = fun(_: NavigateToComplete){
            setTimeout(fun(){
                setTabBarItems(this._tabBars.value.get(this.locale.value))
            }
            , 50)
        }
        )
        if (__root == null) {
            uni_addInterceptor("switchTab", interceptor)
        }
    }
    private fun _initMethods(): Unit {
        this._link = fun(str: String, locale: String?, values: Any, visitedLinkStack: UTSArray<String>, interpolateMode: String): String? {
            val matches = str.match(linkKeyMatcher)
            var ret: String = str
            if (matches == null) {
                return str
            }
            run {
                var i: Number = 0
                while(i < matches.length){
                    val link = matches[i]
                    val linkKeyPrefixMatches = link!!.match(linkKeyPrefixMatcher)
                    if (linkKeyPrefixMatches == null) {
                        i++
                        continue
                    }
                    val linkPrefix = linkKeyPrefixMatches[0]
                    val formatterName = linkKeyPrefixMatches[1]
                    val linkPlaceholder: String = link.replace(linkPrefix!!, "").replace(bracketsMatcher, "")
                    if (visitedLinkStack.includes(linkPlaceholder)) {
                        console.warn("发现循环引用。\"" + link + "\"已经在link\"已经在" + visitedLinkStack.reverse().join(" <- ") + "链中访问过")
                        return ret
                    }
                    if (this._interpolate == null || this._warnDefault == null) {
                        return ret
                    }
                    visitedLinkStack.push(linkPlaceholder)
                    var translated = this._interpolate!!(linkPlaceholder, locale, values, visitedLinkStack, interpolateMode)
                    translated = this._warnDefault!!(linkPlaceholder, translated, values, interpolateMode)
                    if (this._modifiers.size > 0 && formatterName != null && this._modifiers.has(formatterName)) {} else if (translated != null && formatterName != null && defaultModifiers.has(formatterName)) {
                        val modifier = defaultModifiers.get(formatterName) as LinkedModify
                        translated = modifier(translated)
                    }
                    visitedLinkStack.pop()
                    ret = if (translated == null) {
                        ret
                    } else {
                        ret.replace(link, translated)
                    }
                    i++
                }
            }
            return ret
        }
        this._interpolate = fun(key: String, locale: String?, values: Any, visitedLinkStack: UTSArray<String>, interpolateMode: String): String? {
            val ___locale = locale ?: this.locale.value
            var ret = UTSJSONObject.assign(_uO(), this.messages.value.get(___locale) ?: _uO())?.getString(key)
            if (this.fallbackLocale.value != false && ret == null) {
                if (UTSAndroid.`typeof`(this.fallbackLocale.value) == "string" && ___locale != this.fallbackLocale.value) {
                    ret = this.messages.value.get(this.fallbackLocale.value as String)?.getString(key) ?: ret
                } else if (UTSArray.isArray(this.fallbackLocale.value)) {
                    val arr = (this.fallbackLocale.value as UTSArray<String>)
                    run {
                        var i: Number = 0
                        while(i < arr.length){
                            val _ret = this.messages.value.get(arr[i])?.getString(key)
                            if (_ret != null) {
                                ret = _ret
                                break
                            }
                            i++
                        }
                    }
                }
            }
            if (UTSAndroid.`typeof`(ret) == "string" && (ret!!.indexOf("@:") >= 0 || ret!!.indexOf("@.") >= 0)) {
                ret = this._link!!(ret!!, locale, values, visitedLinkStack, interpolateMode)
            }
            return ret
        }
        this._warnDefault = fun(key: String, message: String?, values: Any, interpolateMode: String): String? {
            if (message == null) {
                console.warn("无法翻译键路径 '" + key + "'. " + "使用键路径的值作为默认值.")
            }
            if (message == null) {
                return null
            }
            if (key == message) {
                return key
            }
            return this._render(message, values, interpolateMode)
        }
    }
    private fun _render(message: String, values: Any, interpolateMode: String): String {
        val ret = this._formatter.interpolate(message, values)
        return if (interpolateMode == "string") {
            "" + ret.join("")
        } else {
            JSON.stringify(ret)
        }
    }
    private fun fetchChoice(message: String, choice: Number? = null, locale: String? = null): String {
        if (message == "") {
            return message
        }
        val choices: UTSArray<String> = message.split("|")
        val defaultImpl = fun(reassigned_choice: Number?, _choicesLength: Number): Number {
            var _choice = reassigned_choice
            _choice = Math.abs(_choice ?: 1)
            if (_choicesLength == 2) {
                return if (_choice != 0) {
                    if (_choice > 1) {
                        1
                    } else {
                        0
                    }
                } else {
                    1
                }
            }
            return if (_choice != 0) {
                Math.min(_choice, 2)
            } else {
                0
            }
        }
        var index: Number
        if (this._pluralizationRules.has(locale ?: this.locale.value)) {
            index = this._pluralizationRules.get(locale ?: this.locale.value)!!(choice ?: 1, choices.length)
        } else {
            index = defaultImpl(choice, choices.length)
        }
        if (choices[index] == "") {
            return message
        }
        return choices[index].trim()
    }
    open fun t(key: String, values: Any? = null, locale: String? = null): String {
        val parsedArgs = values ?: _uO()
        val msg = this._warnDefault!!(key, this._interpolate!!(key, locale, parsedArgs, _uA(
            key
        ), "string"), parsedArgs, "string")
        return msg ?: ""
    }
    open fun tc(key: String, choice: Number? = null, values: Any? = null, locale: String? = null): String {
        val _obj: UTSJSONObject = _uO("count" to choice, "n" to choice)
        val predefined = if (values == null) {
            _obj
        } else {
            if (values is UTSJSONObject) {
                UTSJSONObject.assign(_obj, values as UTSJSONObject)
            } else {
                values
            }
        }
        return this.fetchChoice(this.t(key, predefined, locale), choice, locale)
    }
    open fun d(date: Any, key: String? = null, locale: String? = null, options: UTSJSONObject? = null): String {
        if (!this.availabilities.dateTimeFormat) {
            console.warn("无法格式化日期值，因为不支持 Intl.DateTimeFormat. " + ("key: " + key + ", locale: " + locale + ", options: " + options))
            return "" + date
        }
        return "" + date
    }
    open fun n(number: Number, key: String? = null, locale: String? = null, options: UTSJSONObject? = null): String {
        if (!this.availabilities.numberFormat) {
            console.warn("无法格式化数字值，因为不支持 Intl.NumberFormat. " + ("key: " + key + ", locale: " + locale + ", options: " + options))
            return number.toString(10)
        }
        return number.toString(10)
    }
    open fun setLocaleMessage(locale: String, message: UTSJSONObject): Unit {
        val map = Map<String, UTSJSONObject>()
        this.messages.value.forEach(fun(value, key){
            map.set(key, value)
        }
        )
        map.set(locale, message)
        this.messages.value = map
        this.availableLocales = getAllKeys(map).sort()
    }
    open fun getLocaleMessage(locale: String): UTSJSONObject {
        return this.messages.value.get(locale) ?: _uO()
    }
    open fun mergeLocaleMessage(locale: String, message: UTSJSONObject): Unit {
        val map = Map<String, UTSJSONObject>()
        this.messages.value.forEach(fun(value, key){
            if (key == locale) {
                map.set(key, UTSJSONObject.assign(_uO(), value, message))
            } else {
                map.set(key, value)
            }
        }
        )
        this.messages.value = map
        this.availableLocales = getAllKeys(map).sort()
    }
    open fun setDateTimeFormat(locale: String, format: UTSJSONObject): Unit {
        val map = Map<String, UTSJSONObject>()
        this._datetimeFormats.value.forEach(fun(value, key){
            map.set(key, value)
        }
        )
        map.set(locale, format)
        this._datetimeFormats.value = map
    }
    open fun getDateTimeFormat(locale: String): UTSJSONObject {
        return this._datetimeFormats.value.get(locale) ?: _uO()
    }
    open fun mergeDateTimeFormat(locale: String, format: UTSJSONObject): Unit {
        val map = Map<String, UTSJSONObject>()
        this._datetimeFormats.value.forEach(fun(value, key){
            if (key == locale) {
                map.set(key, UTSJSONObject.assign(_uO(), value, format))
            } else {
                map.set(key, value)
            }
        }
        )
        this._datetimeFormats.value = map
    }
    open fun setNumberFormat(locale: String, format: UTSJSONObject): Unit {
        val map = Map<String, UTSJSONObject>()
        this._numberFormats.value.forEach(fun(value, key){
            map.set(key, value)
        }
        )
        map.set(locale, format)
        this._numberFormats.value = map
    }
    open fun getNumberFormat(locale: String): UTSJSONObject {
        return this._numberFormats.value.get(locale) ?: _uO()
    }
    open fun mergeNumberFormat(locale: String, format: UTSJSONObject): Unit {
        val map = Map<String, UTSJSONObject>()
        this._numberFormats.value.forEach(fun(value, key){
            if (key == locale) {
                map.set(key, UTSJSONObject.assign(_uO(), value, format))
            } else {
                map.set(key, value)
            }
        }
        )
        this._numberFormats.value = map
    }
    open fun setTabBar(locale: String, tabbar: UTSArray<String>): Unit {
        val map = Map<String, UTSArray<String>>()
        this._tabBars.value.forEach(fun(value, key){
            map.set(key, value)
        }
        )
        map.set(locale, tabbar)
        this._tabBars.value = map
    }
    open fun getTabBar(locale: String): UTSArray<String> {
        return this._tabBars.value.get(locale) ?: _uA()
    }
}
fun createComposer(options: UTSJSONObject = _uO(), __root: ComposerClass? = null): ComposerClass {
    return ComposerClass(options, __root)
}
typealias I18nMode = String
var lime_i18n: UvueI18n? = null
open class UvueI18n {
    private var __global: ComposerClass
    private var __scope: EffectScope
    constructor(options: UTSJSONObject = _uO(), root: ComposerClass? = null){
        this.__scope = effectScope()
        this.__global = this.__scope.run(fun(): ComposerClass {
            return createComposer(UTSJSONObject.assign(_uO(), options), root)
        }
        )!!
    }
    open val mode: I18nMode
        get(): I18nMode {
            return "composition"
        }
    open val global: ComposerClass
        get(): ComposerClass {
            return this.__global
        }
    open val availableLocales: UTSArray<String>
        get(): UTSArray<String> {
            return getAllKeys(this.global.messages.value).sort()
        }
    open fun dispose() {
        this.__scope.stop()
    }
    open fun `$t`(key: String, values: Any? = null, locale: String? = null): String {
        val isLocale = UTSAndroid.`typeof`(values) == "string"
        val _values = if (isLocale) {
            null
        } else {
            values
        }
        val _locale = if (isLocale) {
            values as String
        } else {
            locale
        }
        return this.global.t(key, _values, _locale)
    }
    open fun `$tc`(key: String, choice: Number? = null, values: Any? = null, locale: String? = null): String {
        val isLocale = UTSAndroid.`typeof`(values) == "string"
        val _values = if (isLocale) {
            null
        } else {
            values
        }
        val _locale = if (isLocale) {
            values as String
        } else {
            locale
        }
        return this.global.tc(key, choice, _values, _locale)
    }
    open fun `$d`(date: Any, key: String? = null, locale: String? = null, options: UTSJSONObject? = null): String {
        return this.global.d(date, key, locale, options)
    }
    open fun `$n`(number: Number, key: String? = null, locale: Any? = null, options: UTSJSONObject? = null): String {
        val _locale = if (UTSAndroid.`typeof`(locale) == "string") {
            locale as String
        } else {
            null
        }
        val _options = if (UTSAndroid.`typeof`(locale) == "object" && locale != null) {
            locale as UTSJSONObject
        } else {
            options
        }
        return this.global.n(number, key, _locale, _options)
    }
    open val install: VuePlugin
        get(): VuePlugin {
            val _install = fun(app: VueApp){
                app.config.globalProperties["\$i18n"] = true
                app.config.globalProperties["\$t"] = true
                app.config.globalProperties["\$tc"] = true
                app.config.globalProperties["\$d"] = true
                app.config.globalProperties["\$n"] = true
                app.config.globalProperties["\$locale"] = true
            }
            return definePlugin(VuePlugin(install = _install))
        }
}
fun createI18n(options: UTSJSONObject = _uO()): UvueI18n {
    lime_i18n = UvueI18n(options)
    return lime_i18n!!
}
fun __uts_large_basic_fill_fill_1(__obj: UTSJSONObject): Unit {
    __obj["iconDemoTitle"] = "字体图标示例"
    __obj["svgAuthWarning"] = "SVG模式需授权收费"
    __obj["langTitle"] = "语言设置"
    __obj["langPreview"] = "多语言文本预览"
    __obj["themeTitle"] = "主题设置"
    __obj["themePreview"] = "主题色效果预览"
    __obj["themeButton"] = "主题按钮"
    __obj["themeSuccess"] = "主题色切换成功"
    __obj["themeModeTitle"] = "外观模式"
    __obj["themeModeAuto"] = "跟随系统"
    __obj["themeModeLight"] = "浅色"
    __obj["themeModeDark"] = "深色"
    __obj["themeModeSuccess"] = "外观模式切换成功"
    __obj["echartTitle"] = "ECharts 图表示例"
    __obj["echartLine"] = "折线图"
    __obj["echartBar"] = "柱状图"
    __obj["echartPie"] = "饼图"
}
fun __uts_large_basic_build_0(): UTSJSONObject {
    val __obj: UTSJSONObject = _uO()
    __uts_large_basic_fill_fill_1(__obj)
    return __obj
}
val message: UTSJSONObject = _uO("hello" to "{msg}，世界！", "welcome" to "欢迎使用 unibestX！", "switch_success" to "已切换为简体中文")
val tabbar: UTSJSONObject = _uO("home" to "首页", "basic" to "基础", "ai" to "AI", "function" to "功能", "me" to "我的")
val basic = __uts_large_basic_build_0()
val `default`: UTSJSONObject = _uO("message" to message, "tabbar" to tabbar, "basic" to basic, "function" to _uO("sysInfoTitle" to "设备系统信息", "brand" to "手机品牌", "model" to "手机型号", "system" to "操作系统", "platform" to "运行平台", "getSysInfoBtn" to "获取系统信息", "hapticsTitle" to "触感与工具", "vibrateBtn" to "短震动反馈", "vibrateSuccess" to "已触发短震动", "copyBtn" to "复制测试文本", "copySuccess" to "复制成功", "mediaTitle" to "相机与多媒体", "choosePhotoBtn" to "拍摄/选择照片", "scanCodeBtn" to "扫码测试", "scanResult" to "扫码结果", "noData" to "暂无数据"))
fun __uts_large_basic_fill_fill_1__1(__obj: UTSJSONObject): Unit {
    __obj["iconDemoTitle"] = "Font Icon Demo"
    __obj["svgAuthWarning"] = "SVG mode requires authorization & fee"
    __obj["langTitle"] = "Language Settings"
    __obj["langPreview"] = "Multi-language Preview"
    __obj["themeTitle"] = "Theme Settings"
    __obj["themePreview"] = "Theme Color Preview"
    __obj["themeButton"] = "Theme Button"
    __obj["themeSuccess"] = "Theme color updated successfully"
    __obj["themeModeTitle"] = "Appearance"
    __obj["themeModeAuto"] = "Follow System"
    __obj["themeModeLight"] = "Light"
    __obj["themeModeDark"] = "Dark"
    __obj["themeModeSuccess"] = "Appearance updated"
    __obj["echartTitle"] = "ECharts Chart Demo"
    __obj["echartLine"] = "Line Chart"
    __obj["echartBar"] = "Bar Chart"
    __obj["echartPie"] = "Pie Chart"
}
fun __uts_large_basic_build_0__1(): UTSJSONObject {
    val __obj: UTSJSONObject = _uO()
    __uts_large_basic_fill_fill_1__1(__obj)
    return __obj
}
val message__1: UTSJSONObject = _uO("hello" to "The world says {msg}!", "welcome" to "Welcome to use unibestX!", "switch_success" to "Switched to English")
val tabbar__1: UTSJSONObject = _uO("home" to "Home", "basic" to "Basic", "ai" to "AI", "function" to "Function", "me" to "Me")
val basic__1 = __uts_large_basic_build_0__1()
val default__1: UTSJSONObject = _uO("message" to message__1, "tabbar" to tabbar__1, "basic" to basic__1, "function" to _uO("sysInfoTitle" to "Device System Info", "brand" to "Brand", "model" to "Model", "system" to "OS", "platform" to "Platform", "getSysInfoBtn" to "Get System Info", "hapticsTitle" to "Short Vibration Feedback", "vibrateBtn" to "Short Vibration Feedback", "vibrateSuccess" to "Vibration triggered", "copyBtn" to "Copy Test Text", "copySuccess" to "Copied successfully", "mediaTitle" to "Camera & Media", "choosePhotoBtn" to "Take Photo/Choose Image", "scanCodeBtn" to "Scan Code Test", "scanResult" to "Scan Result", "noData" to "No data"))
val i18n = createI18n(_uO("locale" to "zh-CN", "fallbackLocale" to "en-US", "messages" to _uO("zh-CN" to `default` as UTSJSONObject, "en-US" to default__1 as UTSJSONObject)))
val light: UTSJSONObject = _uO("backgroundColor" to "#f8fafc", "backgroundColorBottom" to "#f8fafc", "backgroundColorContent" to "#f8fafc", "backgroundColorTop" to "#f8fafc", "backgroundTextStyle" to "dark", "navigationBarBackgroundColor" to "#ffffff", "navigationBarTextStyle" to "black", "tabBarBackgroundColor" to "#ffffff", "tabBarBorderStyle" to "black", "tabBarColor" to "#515151", "tabBarSelectedColor" to "#0957de")
val dark: UTSJSONObject = _uO("backgroundColor" to "#0f172a", "backgroundColorBottom" to "#0f172a", "backgroundColorContent" to "#0f172a", "backgroundColorTop" to "#0f172a", "backgroundTextStyle" to "light", "navigationBarBackgroundColor" to "#0f172a", "navigationBarTextStyle" to "white", "tabBarBackgroundColor" to "#0f172a", "tabBarBorderStyle" to "black", "tabBarColor" to "#515151", "tabBarSelectedColor" to "#0957de")
val default__2: UTSJSONObject = _uO("light" to light, "dark" to dark)
fun getSystemTheme(): String {
    var theme: String = "light"
    try {
        theme = uni_getDeviceInfo(null).osTheme ?: "light"
    }
     catch (e: Throwable) {}
    return theme
}
open class ThemeTokens (
    @JsonNotNull
    open var navBg: String,
    @JsonNotNull
    open var navText: String,
    @JsonNotNull
    open var tabBg: String,
    @JsonNotNull
    open var tabColor: String,
    @JsonNotNull
    open var tabSelected: String,
    @JsonNotNull
    open var tabBorder: String,
    @JsonNotNull
    open var bgContent: String,
) : UTSObject()
fun getThemeTokens(isDark: Boolean): ThemeTokens {
    val themeData = default__2 as UTSJSONObject
    val scheme = if (isDark) {
        themeData["dark"]
    } else {
        themeData["light"]
    }
     as UTSJSONObject
    return ThemeTokens(navBg = scheme["navigationBarBackgroundColor"] as String, navText = mapNavTextStyle(scheme["navigationBarTextStyle"] as String), tabBg = scheme["tabBarBackgroundColor"] as String, tabColor = scheme["tabBarColor"] as String, tabSelected = scheme["tabBarSelectedColor"] as String, tabBorder = mapTabBorderStyle(scheme["tabBarBorderStyle"] as String, isDark), bgContent = scheme["backgroundColorContent"] as String)
}
fun mapNavTextStyle(value: String): String {
    if (value == "black") {
        return "#000000"
    }
    if (value == "white") {
        return "#ffffff"
    }
    return value
}
fun mapTabBorderStyle(value: String, isDark: Boolean): String {
    if (value == "black") {
        return if (isDark) {
            "#334155"
        } else {
            "#e2e8f0"
        }
    }
    if (value == "white") {
        return "#ffffff"
    }
    return value
}
fun applyNavbarTheme(isDark: Boolean): Unit {
    val tokens = getThemeTokens(isDark)
}
open class IAppState (
    @JsonNotNull
    open var theme: String,
    @JsonNotNull
    open var locale: String,
    @JsonNotNull
    open var themeMode: String,
    @JsonNotNull
    open var isDark: Boolean = false,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return IAppStateReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class IAppStateReactiveObject : IAppState, IUTSReactive<IAppState> {
    override var __v_raw: IAppState
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: IAppState, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(theme = __v_raw.theme, locale = __v_raw.locale, themeMode = __v_raw.themeMode, isDark = __v_raw.isDark) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): IAppStateReactiveObject {
        return IAppStateReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var theme: String
        get() {
            return _tRG(__v_raw, "theme", __v_raw.theme, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("theme")) {
                return
            }
            val oldValue = __v_raw.theme
            __v_raw.theme = value
            _tRS(__v_raw, "theme", oldValue, value)
        }
    override var locale: String
        get() {
            return _tRG(__v_raw, "locale", __v_raw.locale, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("locale")) {
                return
            }
            val oldValue = __v_raw.locale
            __v_raw.locale = value
            _tRS(__v_raw, "locale", oldValue, value)
        }
    override var themeMode: String
        get() {
            return _tRG(__v_raw, "themeMode", __v_raw.themeMode, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("themeMode")) {
                return
            }
            val oldValue = __v_raw.themeMode
            __v_raw.themeMode = value
            _tRS(__v_raw, "themeMode", oldValue, value)
        }
    override var isDark: Boolean
        get() {
            return _tRG(__v_raw, "isDark", __v_raw.isDark, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("isDark")) {
                return
            }
            val oldValue = __v_raw.isDark
            __v_raw.isDark = value
            _tRS(__v_raw, "isDark", oldValue, value)
        }
}
fun getSystemLocale(): String {
    try {
        val sysInfo = uni_getSystemInfoSync()
        val appLang = sysInfo.appLanguage
        if (appLang != null && appLang.toLowerCase().includes("zh")) {
            return "zh-CN"
        }
        if (appLang != null && appLang.toLowerCase().includes("en")) {
            return "en-US"
        }
    }
     catch (e: Throwable) {}
    return "zh-CN"
}
val defaultAppState = IAppState(theme = "#37c2bc", locale = getSystemLocale(), themeMode = "auto", isDark = false)
open class AppStore : PiniaStoreBase {
    open var state: IAppState = reactive<IAppState>(IAppState(theme = "#37c2bc", locale = getSystemLocale(), themeMode = "auto", isDark = false))
    open var _themeModeInited: Boolean = false
    constructor() : super() {
        this.bindState(this.state)
        themeColor.value = this.state.theme
        i18n.global.locale.value = this.state.locale
    }
    override fun _doReset(): Unit {
        this.state.theme = defaultAppState.theme
        this.state.locale = defaultAppState.locale
        this.state.themeMode = defaultAppState.themeMode
        this.state.isDark = defaultAppState.isDark
        themeColor.value = defaultAppState.theme
        i18n.global.locale.value = defaultAppState.locale
        this.initThemeMode()
    }
    override fun _hydrate(_data: UTSJSONObject): Unit {
        if (_data["theme"] != null) {
            val colorVal = _data["theme"] as String
            this.state.theme = colorVal
            themeColor.value = colorVal
        }
        if (_data["locale"] != null) {
            val localeVal = _data["locale"] as String
            this.state.locale = localeVal
            i18n.global.locale.value = localeVal
        }
        if (_data["themeMode"] != null) {
            val modeVal = _data["themeMode"] as String
            if (modeVal == "auto" || modeVal == "light" || modeVal == "dark") {
                this.state.themeMode = modeVal
            } else {
                this.state.themeMode = "auto"
            }
        } else if (_data["isDark"] != null) {
            this.state.themeMode = if ((_data["isDark"] as Boolean)) {
                "dark"
            } else {
                "light"
            }
        }
    }
    override fun _serialize(): UTSJSONObject {
        return _uO("theme" to this.state.theme, "locale" to this.state.locale, "themeMode" to this.state.themeMode)
    }
    open fun setTheme(theme: String): Unit {
        this.state.theme = theme
        themeColor.value = theme
    }
    open fun initThemeMode(): Unit {
        if (!this._themeModeInited) {
            this._themeModeInited = true
            uni_onAppThemeChange(fun(res: AppThemeChangeResult){
                if (this.state.themeMode != "auto") {
                    this.state.isDark = res.appTheme == "dark"
                }
            }
            )
            uni_onOsThemeChange(fun(res: OsThemeChangeResult){
                if (this.state.themeMode == "auto") {
                    this.state.isDark = res.osTheme == "dark"
                }
            }
            )
        }
        uni_setAppTheme(SetAppThemeOptions(theme = this.state.themeMode as String))
        this.refreshIsDark()
    }
    open fun setThemeMode(mode: String): Unit {
        this.state.themeMode = mode
        uni_setAppTheme(SetAppThemeOptions(theme = mode as String))
        this.refreshIsDark()
    }
    open fun refreshIsDark(): Unit {
        val mode = this.state.themeMode
        if (mode == "light") {
            this.state.isDark = false
        } else if (mode == "dark") {
            this.state.isDark = true
        } else {
            this.state.isDark = getSystemTheme() == "dark"
        }
    }
    open fun setLocale(locale: String): Unit {
        this.state.locale = locale
        i18n.global.locale.value = locale
    }
}
val useAppStore = defineStore<AppStore>("app", fun(): AppStore {
    return AppStore()
}
)
open class IUserInfo (
    @JsonNotNull
    open var userId: Number,
    @JsonNotNull
    open var username: String,
    @JsonNotNull
    open var nickname: String,
    @JsonNotNull
    open var avatar: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return IUserInfoReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class IUserInfoReactiveObject : IUserInfo, IUTSReactive<IUserInfo> {
    override var __v_raw: IUserInfo
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: IUserInfo, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(userId = __v_raw.userId, username = __v_raw.username, nickname = __v_raw.nickname, avatar = __v_raw.avatar) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): IUserInfoReactiveObject {
        return IUserInfoReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var userId: Number
        get() {
            return _tRG(__v_raw, "userId", __v_raw.userId, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("userId")) {
                return
            }
            val oldValue = __v_raw.userId
            __v_raw.userId = value
            _tRS(__v_raw, "userId", oldValue, value)
        }
    override var username: String
        get() {
            return _tRG(__v_raw, "username", __v_raw.username, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("username")) {
                return
            }
            val oldValue = __v_raw.username
            __v_raw.username = value
            _tRS(__v_raw, "username", oldValue, value)
        }
    override var nickname: String
        get() {
            return _tRG(__v_raw, "nickname", __v_raw.nickname, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("nickname")) {
                return
            }
            val oldValue = __v_raw.nickname
            __v_raw.nickname = value
            _tRS(__v_raw, "nickname", oldValue, value)
        }
    override var avatar: String
        get() {
            return _tRG(__v_raw, "avatar", __v_raw.avatar, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("avatar")) {
                return
            }
            val oldValue = __v_raw.avatar
            __v_raw.avatar = value
            _tRS(__v_raw, "avatar", oldValue, value)
        }
}
open class IUserState (
    @JsonNotNull
    open var userInfo: IUserInfo,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return IUserStateReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class IUserStateReactiveObject : IUserState, IUTSReactive<IUserState> {
    override var __v_raw: IUserState
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: IUserState, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(userInfo = __v_raw.userInfo) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): IUserStateReactiveObject {
        return IUserStateReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var userInfo: IUserInfo
        get() {
            return _tRG(__v_raw, "userInfo", __v_raw.userInfo, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("userInfo")) {
                return
            }
            val oldValue = __v_raw.userInfo
            __v_raw.userInfo = value
            _tRS(__v_raw, "userInfo", oldValue, value)
        }
}
val DEFAULT_AVATAR = "/static/logo.png"
val defaultUserInfo = IUserInfo(userId = -1, username = "", nickname = "", avatar = DEFAULT_AVATAR)
open class UserStore : PiniaStoreBase {
    open var state: IUserState = reactive<IUserState>(IUserState(userInfo = IUserInfo(userId = -1, username = "", nickname = "", avatar = DEFAULT_AVATAR)))
    constructor() : super() {
        this.bindState(this.state)
    }
    override fun _doReset(): Unit {
        this.state.userInfo.userId = defaultUserInfo.userId
        this.state.userInfo.username = defaultUserInfo.username
        this.state.userInfo.nickname = defaultUserInfo.nickname
        this.state.userInfo.avatar = defaultUserInfo.avatar
    }
    override fun _hydrate(_data: UTSJSONObject): Unit {
        if (_data["userId"] != null) {
            this.state.userInfo.userId = _data["userId"] as Number
        }
        if (_data["username"] != null) {
            this.state.userInfo.username = _data["username"] as String
        }
        if (_data["nickname"] != null) {
            this.state.userInfo.nickname = _data["nickname"] as String
        }
        if (_data["avatar"] != null) {
            this.state.userInfo.avatar = _data["avatar"] as String
        }
        if (_data["userInfo"] != null) {
            val infoObj = _data["userInfo"] as UTSJSONObject
            if (infoObj["userId"] != null) {
                this.state.userInfo.userId = infoObj["userId"] as Number
            }
            if (infoObj["username"] != null) {
                this.state.userInfo.username = infoObj["username"] as String
            }
            if (infoObj["nickname"] != null) {
                this.state.userInfo.nickname = infoObj["nickname"] as String
            }
            if (infoObj["avatar"] != null) {
                this.state.userInfo.avatar = infoObj["avatar"] as String
            }
        }
    }
    override fun _serialize(): UTSJSONObject {
        val infoObj: UTSJSONObject = _uO("userId" to this.state.userInfo.userId, "username" to this.state.userInfo.username, "nickname" to this.state.userInfo.nickname, "avatar" to this.state.userInfo.avatar)
        return _uO("userInfo" to infoObj)
    }
    open fun setUserInfo(info: IUserInfo): Unit {
        this.state.userInfo = IUserInfo(userId = info.userId, username = info.username, nickname = info.nickname, avatar = if (info.avatar != "") {
            info.avatar
        } else {
            DEFAULT_AVATAR
        }
        )
    }
    open fun setAvatar(avatar: String): Unit {
        this.state.userInfo.avatar = avatar
    }
    open fun clearUserInfo(): Unit {
        this._doReset()
        uni_removeStorageSync("user")
    }
}
val useUserStore = defineStore<UserStore>("user", fun(): UserStore {
    return UserStore()
}
)
val pinia = createPinia()
val runBlock2 = run {
    pinia.use(createPersistPlugin(PersistOptions(keyPrefix = "pinia:", includeStores = _uA(
        "token",
        "user",
        "app"
    ), excludeStores = _uA<String>(), serializer = null)))
    setActivePinia(pinia)
}
open class GenApp : BaseApp {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        setCurrentInstance(__ins)
        __ins.proxy = this
        GenApp.setup(this)
    }
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenApp) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenApp
            val _cache = __ins.renderCache
            onLaunch(fun(_options){
                useAppStore().initThemeMode()
            }
            )
            onShow(fun(options){})
            return fun(): Any? {
                return null
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0,
                styles1,
                styles2,
                styles3
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("template-corpus-apply" to _pS(_uM("display" to "flex", "alignItems" to "center", "borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20, "backgroundColor" to "#9e58e9", "paddingLeft" to 18, "paddingRight" to 18, "paddingTop" to 10, "paddingBottom" to 10, "color" to "#ffffff", "fontSize" to 26)), "m-_b16px_B" to _pS(_uM("marginTop" to 16, "marginRight" to 16, "marginBottom" to 16, "marginLeft" to 16)), "mx-_b12px_B" to _pS(_uM("marginLeft" to 12, "marginRight" to 12)), "mx-_b16px_B" to _pS(_uM("marginLeft" to 16, "marginRight" to 16)), "mx-_b30px_B" to _pS(_uM("marginLeft" to 30, "marginRight" to 30)), "mx-auto" to _pS(_uM("marginLeft" to "auto", "marginRight" to "auto")), "my-3" to _pS(_uM("marginTop" to "24rpx", "marginBottom" to "24rpx")), "my-_b8px_B" to _pS(_uM("marginTop" to 8, "marginBottom" to 8)), "my-_b10px_B" to _pS(_uM("marginTop" to 10, "marginBottom" to 10)), "mt-2" to _pS(_uM("marginTop" to "16rpx")), "mt-3" to _pS(_uM("marginTop" to "24rpx")), "mt-4" to _pS(_uM("marginTop" to "32rpx")), "mt-_b2px_B" to _pS(_uM("marginTop" to 2)), "mt-_b4px_B" to _pS(_uM("marginTop" to 4)), "mt-_b6px_B" to _pS(_uM("marginTop" to 6)), "mt-_b8px_B" to _pS(_uM("marginTop" to 8)), "mt-_b10px_B" to _pS(_uM("marginTop" to 10)), "mt-_b13_d14758px_B" to _pS(_uM("marginTop" to 13.14758)), "mt-_b15px_B" to _pS(_uM("marginTop" to 15)), "mt-_b16px_B" to _pS(_uM("marginTop" to 16)), "mt-_b19px_B" to _pS(_uM("marginTop" to 19)), "mt-_b20px_B" to _pS(_uM("marginTop" to 20)), "mr-_b4px_B" to _pS(_uM("marginRight" to 4)), "mr-_b5px_B" to _pS(_uM("marginRight" to 5)), "mr-_b6px_B" to _pS(_uM("marginRight" to 6)), "mr-_b8px_B" to _pS(_uM("marginRight" to 8)), "mr-_b10px_B" to _pS(_uM("marginRight" to 10)), "mr-_b12px_B" to _pS(_uM("marginRight" to 12)), "mb-_b4px_B" to _pS(_uM("marginBottom" to 4)), "mb-_b6px_B" to _pS(_uM("marginBottom" to 6)), "mb-_b8px_B" to _pS(_uM("marginBottom" to 8)), "mb-_b10px_B" to _pS(_uM("marginBottom" to 10)), "mb-_b12_d32px_B" to _pS(_uM("marginBottom" to 12.32)), "mb-_b12px_B" to _pS(_uM("marginBottom" to 12)), "mb-_b14px_B" to _pS(_uM("marginBottom" to 14)), "mb-_b15px_B" to _pS(_uM("marginBottom" to 15)), "mb-_b16px_B" to _pS(_uM("marginBottom" to 16)), "mb-_b30px_B" to _pS(_uM("marginBottom" to 30)), "ml-_b4px_B" to _pS(_uM("marginLeft" to 4)), "ml-_b6px_B" to _pS(_uM("marginLeft" to 6)), "ml-_b8px_B" to _pS(_uM("marginLeft" to 8)), "ml-_b10px_B" to _pS(_uM("marginLeft" to 10)), "ml-_b12px_B" to _pS(_uM("marginLeft" to 12)), "ml-auto" to _pS(_uM("marginLeft" to "auto")), "flex" to _pS(_uM("display" to "flex")), "h-_b1px_B" to _pS(_uM("height" to 1)), "h-_b3px_B" to _pS(_uM("height" to 3)), "h-_b6px_B" to _pS(_uM("height" to 6)), "h-_b12px_B" to _pS(_uM("height" to 12)), "h-_b16px_B" to _pS(_uM("height" to 16)), "h-_b28px_B" to _pS(_uM("height" to 28)), "h-_b30px_B" to _pS(_uM("height" to 30)), "h-_b32px_B" to _pS(_uM("height" to 32)), "h-_b36px_B" to _pS(_uM("height" to 36)), "h-_b38px_B" to _pS(_uM("height" to 38)), "h-_b40px_B" to _pS(_uM("height" to 40)), "h-_b41px_B" to _pS(_uM("height" to 41)), "h-_b42px_B" to _pS(_uM("height" to 42)), "h-_b44px_B" to _pS(_uM("height" to 44)), "h-_b45px_B" to _pS(_uM("height" to 45)), "h-_b48_d3px_B" to _pS(_uM("height" to 48.3)), "h-_b48px_B" to _pS(_uM("height" to 48)), "h-_b80px_B" to _pS(_uM("height" to 80)), "h-_b100px_B" to _pS(_uM("height" to 100)), "h-_b120px_B" to _pS(_uM("height" to 120)), "h-_b130px_B" to _pS(_uM("height" to 130)), "h-_b150px_B" to _pS(_uM("height" to 150)), "h-_b200px_B" to _pS(_uM("height" to 200)), "h-_b280px_B" to _pS(_uM("height" to 280)), "h-full" to _pS(_uM("height" to "100%")), "w-32" to _pS(_uM("width" to "256rpx")), "w-64" to _pS(_uM("width" to "512rpx")), "w-_b3px_B" to _pS(_uM("width" to 3)), "w-_b4px_B" to _pS(_uM("width" to 4)), "w-_b6px_B" to _pS(_uM("width" to 6)), "w-_b28px_B" to _pS(_uM("width" to 28)), "w-_b32px_B" to _pS(_uM("width" to 32)), "w-_b36px_B" to _pS(_uM("width" to 36)), "w-_b40px_B" to _pS(_uM("width" to 40)), "w-_b48px_B" to _pS(_uM("width" to 48)), "w-_b60px_B" to _pS(_uM("width" to 60)), "w-_b80px_B" to _pS(_uM("width" to 80)), "w-_b100px_B" to _pS(_uM("width" to 100)), "w-_b120px_B" to _pS(_uM("width" to 120)), "w-_b150px_B" to _pS(_uM("width" to 150)), "w-_b173px_B" to _pS(_uM("width" to 173)), "w-_b200px_B" to _pS(_uM("width" to 200)), "w-_b222_d222px_B" to _pS(_uM("width" to 222.222)), "w-_b300px_B" to _pS(_uM("width" to 300)), "w-_b323px_B" to _pS(_uM("width" to 323)), "w-full" to _pS(_uM("width" to "100%")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "flex-wrap" to _pS(_uM("flexWrap" to "wrap")), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "self-start" to _pS(_uM("alignSelf" to "flex-start")), "overflow-hidden" to _pS(_uM("overflow" to "hidden")))
            }
        val styles1: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("rounded" to _pS(_uM("borderTopLeftRadius" to "8rpx", "borderTopRightRadius" to "8rpx", "borderBottomRightRadius" to "8rpx", "borderBottomLeftRadius" to "8rpx")), "rounded-_b2px_B" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2)), "rounded-_b3px_B" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "rounded-_b4px_B" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "rounded-_b6px_B" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "rounded-_b8px_B" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "rounded-_b10px_B" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10)), "rounded-_b12px_B" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-_b14px_B" to _pS(_uM("borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14)), "rounded-_b16px_B" to _pS(_uM("borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16)), "rounded-_b18px_B" to _pS(_uM("borderTopLeftRadius" to 18, "borderTopRightRadius" to 18, "borderBottomRightRadius" to 18, "borderBottomLeftRadius" to 18)), "rounded-_b20px_B" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "rounded-_b24px_B" to _pS(_uM("borderTopLeftRadius" to 24, "borderTopRightRadius" to 24, "borderBottomRightRadius" to 24, "borderBottomLeftRadius" to 24)), "rounded-_b28px_B" to _pS(_uM("borderTopLeftRadius" to 28, "borderTopRightRadius" to 28, "borderBottomRightRadius" to 28, "borderBottomLeftRadius" to 28)), "rounded-_b40px_B" to _pS(_uM("borderTopLeftRadius" to 40, "borderTopRightRadius" to 40, "borderBottomRightRadius" to 40, "borderBottomLeftRadius" to 40)), "rounded-full" to _pS(_uM("borderTopLeftRadius" to 9999, "borderTopRightRadius" to 9999, "borderBottomRightRadius" to 9999, "borderBottomLeftRadius" to 9999)), "rounded-lg" to _pS(_uM("borderTopLeftRadius" to "16rpx", "borderTopRightRadius" to "16rpx", "borderBottomRightRadius" to "16rpx", "borderBottomLeftRadius" to "16rpx")), "rounded-md" to _pS(_uM("borderTopLeftRadius" to "12rpx", "borderTopRightRadius" to "12rpx", "borderBottomRightRadius" to "12rpx", "borderBottomLeftRadius" to "12rpx")), "rounded-l-_b16px_B" to _pS(_uM("borderTopLeftRadius" to 16, "borderBottomLeftRadius" to 16)), "rounded-r-_b16px_B" to _pS(_uM("borderTopRightRadius" to 16, "borderBottomRightRadius" to 16)), "rounded-br-_b16px_B" to _pS(_uM("borderBottomRightRadius" to 16)), "rounded-bl-_b16px_B" to _pS(_uM("borderBottomLeftRadius" to 16)), "border" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "border-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "border-_b2px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2)), "border-_b3px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 3, "borderRightWidth" to 3, "borderBottomWidth" to 3, "borderLeftWidth" to 3)), "border-t" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderTopWidth" to 1)), "border-t-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderTopWidth" to 1)), "border-b-0" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 0)), "border-b-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 1)), "border-solid" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-_b_h99f6e4_B" to _pS(_uM("borderTopColor" to "#99f6e4", "borderRightColor" to "#99f6e4", "borderBottomColor" to "#99f6e4", "borderLeftColor" to "#99f6e4")), "border-_b_h999_B" to _pS(_uM("borderTopColor" to "#999999", "borderRightColor" to "#999999", "borderBottomColor" to "#999999", "borderLeftColor" to "#999999")), "border-_b_h111111_B" to _pS(_uM("borderTopColor" to "#111111", "borderRightColor" to "#111111", "borderBottomColor" to "#111111", "borderLeftColor" to "#111111")), "border-_b_ha7f3d0_B" to _pS(_uM("borderTopColor" to "#a7f3d0", "borderRightColor" to "#a7f3d0", "borderBottomColor" to "#a7f3d0", "borderLeftColor" to "#a7f3d0")), "border-_b_hbbf7d0_B" to _pS(_uM("borderTopColor" to "#bbf7d0", "borderRightColor" to "#bbf7d0", "borderBottomColor" to "#bbf7d0", "borderLeftColor" to "#bbf7d0")), "border-_b_hbfdbfe_B" to _pS(_uM("borderTopColor" to "#bfdbfe", "borderRightColor" to "#bfdbfe", "borderBottomColor" to "#bfdbfe", "borderLeftColor" to "#bfdbfe")), "border-_b_hcbd5e1_B" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "border-_b_he2e8f0_B" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-_b_hedf2f7_B" to _pS(_uM("borderTopColor" to "#edf2f7", "borderRightColor" to "#edf2f7", "borderBottomColor" to "#edf2f7", "borderLeftColor" to "#edf2f7")), "border-_b_hf1f5f9_B" to _pS(_uM("borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "border-_b_hfdba74_B" to _pS(_uM("borderTopColor" to "#fdba74", "borderRightColor" to "#fdba74", "borderBottomColor" to "#fdba74", "borderLeftColor" to "#fdba74")), "border-_b_hfde68a_B" to _pS(_uM("borderTopColor" to "#fde68a", "borderRightColor" to "#fde68a", "borderBottomColor" to "#fde68a", "borderLeftColor" to "#fde68a")), "border-_b_hfecaca_B" to _pS(_uM("borderTopColor" to "#fecaca", "borderRightColor" to "#fecaca", "borderBottomColor" to "#fecaca", "borderLeftColor" to "#fecaca")), "border-_b_hffe4e6_B" to _pS(_uM("borderTopColor" to "#ffe4e6", "borderRightColor" to "#ffe4e6", "borderBottomColor" to "#ffe4e6", "borderLeftColor" to "#ffe4e6")), "border-_b_hffedd5_B" to _pS(_uM("borderTopColor" to "#ffedd5", "borderRightColor" to "#ffedd5", "borderBottomColor" to "#ffedd5", "borderLeftColor" to "#ffedd5")), "border-gray-200" to _pS(_uM("borderTopColor" to "rgb(229,231,235)", "borderRightColor" to "rgb(229,231,235)", "borderBottomColor" to "rgb(229,231,235)", "borderLeftColor" to "rgb(229,231,235)")), "border-slate-200" to _pS(_uM("borderTopColor" to "rgb(226,232,240)", "borderRightColor" to "rgb(226,232,240)", "borderBottomColor" to "rgb(226,232,240)", "borderLeftColor" to "rgb(226,232,240)")), "bg-_b_h0d9488_B" to _pS(_uM("backgroundColor" to "#0d9488")), "bg-_b_h0ea5e9_B" to _pS(_uM("backgroundColor" to "#0ea5e9")), "bg-_b_h0f172a_B" to _pS(_uM("backgroundColor" to "#0f172a")), "bg-_b_h0f766e_B" to _pS(_uM("backgroundColor" to "#0f766e")), "bg-_b_h000_B" to _pS(_uM("backgroundColor" to "#000000")), "bg-_b_h3b82f6_B" to _pS(_uM("backgroundColor" to "#3b82f6")), "bg-_b_h3b0764_B" to _pS(_uM("backgroundColor" to "#3b0764")), "bg-_b_h7c3aed_B" to _pS(_uM("backgroundColor" to "#7c3aed")), "bg-_b_h8b5cf6_B" to _pS(_uM("backgroundColor" to "#8b5cf6")), "bg-_b_h10b981_B" to _pS(_uM("backgroundColor" to "#10b981")), "bg-_b_h14b8a6_B" to _pS(_uM("backgroundColor" to "#14b8a6")), "bg-_b_h31edd8_B_f_b0_d54_B" to _pS(_uM("backgroundColor" to "rgba(49,237,216,0.54)")), "bg-_b_h37c2bc14_B" to _pS(_uM("backgroundColor" to "#37c2bc14")), "bg-_b_h65a30d_B" to _pS(_uM("backgroundColor" to "#65a30d")), "bg-_b_h68c828_B" to _pS(_uM("backgroundColor" to "#68c828")), "bg-_b_h87add3_B" to _pS(_uM("backgroundColor" to "#87add3")), "bg-_b_h111_B" to _pS(_uM("backgroundColor" to "#111111")), "bg-_b_h164e63_B" to _pS(_uM("backgroundColor" to "#164e63")), "bg-_b_h222_B" to _pS(_uM("backgroundColor" to "#222222")), "bg-_b_h0284c7_B" to _pS(_uM("backgroundColor" to "#0284c7")), "bg-_b_h333_B" to _pS(_uM("backgroundColor" to "#333333")), "bg-_b_h444_B" to _pS(_uM("backgroundColor" to "#444444")), "bg-_b_h555_B" to _pS(_uM("backgroundColor" to "#555555")), "bg-_b_h666_B" to _pS(_uM("backgroundColor" to "#666666")), "bg-_b_h777_B" to _pS(_uM("backgroundColor" to "#777777")), "bg-_b_h888_B" to _pS(_uM("backgroundColor" to "#888888")), "bg-_b_h0977ee_B" to _pS(_uM("backgroundColor" to "#0977ee")), "bg-_b_h999_B" to _pS(_uM("backgroundColor" to "#999999")), "bg-_b_h2563eb_B" to _pS(_uM("backgroundColor" to "#2563eb")), "bg-_b_h3182ce14_B" to _pS(_uM("backgroundColor" to "#3182ce14")), "bg-_b_h3182ce_B" to _pS(_uM("backgroundColor" to "#3182ce")), "bg-_b_h6366f1_B" to _pS(_uM("backgroundColor" to "#6366f1")), "bg-_b_h6366f114_B" to _pS(_uM("backgroundColor" to "#6366f114")), "bg-_b_h059669_B" to _pS(_uM("backgroundColor" to "#059669")), "bg-_b_h64748b_B" to _pS(_uM("backgroundColor" to "#64748b")), "bg-_b_h102938_B" to _pS(_uM("backgroundColor" to "#102938")), "bg-_b_h123456_B" to _pS(_uM("backgroundColor" to "#123456")), "bg-_b_haaa_B" to _pS(_uM("backgroundColor" to "#aaaaaa")), "bg-_b_hbbb_B" to _pS(_uM("backgroundColor" to "#bbbbbb")), "bg-_b_hccc_B" to _pS(_uM("backgroundColor" to "#cccccc")), "bg-_b_hccfbf1_B" to _pS(_uM("backgroundColor" to "#ccfbf1")), "bg-_b_hd1fae5_B" to _pS(_uM("backgroundColor" to "#d1fae5")), "bg-_b_hd2e252_B" to _pS(_uM("backgroundColor" to "#d2e252")), "bg-_b_hd946ef_B" to _pS(_uM("backgroundColor" to "#d946ef")), "bg-_b_hd7700a_B" to _pS(_uM("backgroundColor" to "#d7700a")), "bg-_b_hd97706_B" to _pS(_uM("backgroundColor" to "#d97706")), "bg-_b_hdb2777_B" to _pS(_uM("backgroundColor" to "#db2777")), "bg-_b_hdbeafe_B" to _pS(_uM("backgroundColor" to "#dbeafe")), "bg-_b_hdc2626_B" to _pS(_uM("backgroundColor" to "#dc2626")), "bg-_b_hddd_B" to _pS(_uM("backgroundColor" to "#dddddd")), "bg-_b_he0e7ff_B" to _pS(_uM("backgroundColor" to "#e0e7ff")), "bg-_b_he0edff_B" to _pS(_uM("backgroundColor" to "#e0edff")))
            }
        val styles2: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("bg-_b_he0f2fe_B" to _pS(_uM("backgroundColor" to "#e0f2fe")), "bg-_b_he2e8f0_B" to _pS(_uM("backgroundColor" to "#e2e8f0")), "bg-_b_he6fffb_B" to _pS(_uM("backgroundColor" to "#e6fffb")), "bg-_b_hea580c_B" to _pS(_uM("backgroundColor" to "#ea580c")), "bg-_b_hecfdf5_B" to _pS(_uM("backgroundColor" to "#ecfdf5")), "bg-_b_heee_B" to _pS(_uM("backgroundColor" to "#eeeeee")), "bg-_b_hef4444_B" to _pS(_uM("backgroundColor" to "#ef4444")), "bg-_b_heff6ff_B" to _pS(_uM("backgroundColor" to "#eff6ff")), "bg-_b_hf0fdf4_B" to _pS(_uM("backgroundColor" to "#f0fdf4")), "bg-_b_hf1f5f9_B" to _pS(_uM("backgroundColor" to "#f1f5f9")), "bg-_b_hf7fafc_B" to _pS(_uM("backgroundColor" to "#f7fafc")), "bg-_b_hf8fafc_B" to _pS(_uM("backgroundColor" to "#f8fafc")), "bg-_b_hf59e0b1a_B" to _pS(_uM("backgroundColor" to "#f59e0b1a")), "bg-_b_hf59e0b_B" to _pS(_uM("backgroundColor" to "#f59e0b")), "bg-_b_hf205f6_B" to _pS(_uM("backgroundColor" to "#f205f6")), "bg-_b_hf21903_B" to _pS(_uM("backgroundColor" to "#f21903")), "bg-_b_hf97316_B" to _pS(_uM("backgroundColor" to "#f97316")), "bg-_b_hfce7f3_B" to _pS(_uM("backgroundColor" to "#fce7f3")), "bg-_b_hfee2e2_B" to _pS(_uM("backgroundColor" to "#fee2e2")), "bg-_b_hfef3c7_B" to _pS(_uM("backgroundColor" to "#fef3c7")), "bg-_b_hfef9c3_B" to _pS(_uM("backgroundColor" to "#fef9c3")), "bg-_b_hfff1f2_B" to _pS(_uM("backgroundColor" to "#fff1f2")), "bg-_b_hfff5f5_B" to _pS(_uM("backgroundColor" to "#fff5f5")), "bg-_b_hfff7ed_B" to _pS(_uM("backgroundColor" to "#fff7ed")), "bg-_b_hfff_B" to _pS(_uM("backgroundColor" to "#ffffff")), "bg-primary" to _pS(_uM("backgroundColor" to "var(--theme-color)")), "bg-white" to _pS(_uM("backgroundColor" to "#ffffff")), "bg-zinc-900" to _pS(_uM("backgroundColor" to "#18181b")), "bg-zinc-950" to _pS(_uM("backgroundColor" to "rgb(9,9,11)")), "bg-gradient-to-br" to _pS(_uM("--tw-gradient-stops" to "initial", "--tw-gradient-position" to "to bottom right", "backgroundImage" to "linear-gradient(var(--tw-gradient-stops))")), "from-slate-900" to _pS(_uM("--tw-gradient-position" to "initial", "--tw-gradient-to" to "#0000", "--tw-gradient-from" to "#0f172b", "--tw-gradient-stops" to "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )")), "to-slate-700" to _pS(_uM("--tw-gradient-position" to "initial", "--tw-gradient-from" to "#0000", "--tw-gradient-to" to "rgb(49, 65, 88)", "--tw-gradient-stops" to "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )")), "p-4" to _pS(_uM("paddingTop" to "32rpx", "paddingRight" to "32rpx", "paddingBottom" to "32rpx", "paddingLeft" to "32rpx")), "p-_b2px_B" to _pS(_uM("paddingTop" to 2, "paddingRight" to 2, "paddingBottom" to 2, "paddingLeft" to 2)), "p-_b4px_B" to _pS(_uM("paddingTop" to 4, "paddingRight" to 4, "paddingBottom" to 4, "paddingLeft" to 4)), "p-_b5px_B" to _pS(_uM("paddingTop" to 5, "paddingRight" to 5, "paddingBottom" to 5, "paddingLeft" to 5)), "p-_b6px_B" to _pS(_uM("paddingTop" to 6, "paddingRight" to 6, "paddingBottom" to 6, "paddingLeft" to 6)), "p-_b8px_B" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "p-_b10px_B" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "p-_b12px_B" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "p-_b14px_B" to _pS(_uM("paddingTop" to 14, "paddingRight" to 14, "paddingBottom" to 14, "paddingLeft" to 14)), "p-_b16px_B" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "p-_b20_d32px_B" to _pS(_uM("paddingTop" to 20.32, "paddingRight" to 20.32, "paddingBottom" to 20.32, "paddingLeft" to 20.32)), "p-_b20px_B" to _pS(_uM("paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "p-_b30px_B" to _pS(_uM("paddingTop" to 30, "paddingRight" to 30, "paddingBottom" to 30, "paddingLeft" to 30)), "px-3" to _pS(_uM("paddingLeft" to "24rpx", "paddingRight" to "24rpx")), "px-4" to _pS(_uM("paddingLeft" to "32rpx", "paddingRight" to "32rpx")), "px-_b4px_B" to _pS(_uM("paddingLeft" to 4, "paddingRight" to 4)), "px-_b6px_B" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "px-_b8px_B" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "px-_b10px_B" to _pS(_uM("paddingLeft" to 10, "paddingRight" to 10)), "px-_b12px_B" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "px-_b14px_B" to _pS(_uM("paddingLeft" to 14, "paddingRight" to 14)), "px-_b15px_B" to _pS(_uM("paddingLeft" to 15, "paddingRight" to 15)), "px-_b16px_B" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "px-_b20px_B" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "px-_b29rpx_B" to _pS(_uM("paddingLeft" to "29rpx", "paddingRight" to "29rpx")), "px-_b30px_B" to _pS(_uM("paddingLeft" to 30, "paddingRight" to 30)), "px-_b48px_B" to _pS(_uM("paddingLeft" to 48, "paddingRight" to 48)), "py-1" to _pS(_uM("paddingTop" to "8rpx", "paddingBottom" to "8rpx")), "py-2" to _pS(_uM("paddingTop" to "16rpx", "paddingBottom" to "16rpx")), "py-3" to _pS(_uM("paddingTop" to "24rpx", "paddingBottom" to "24rpx")), "py-4" to _pS(_uM("paddingTop" to "32rpx", "paddingBottom" to "32rpx")), "py-_b2px_B" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "py-_b3px_B" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "py-_b4px_B" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "py-_b6px_B" to _pS(_uM("paddingTop" to 6, "paddingBottom" to 6)), "py-_b8px_B" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)), "py-_b10px_B" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "py-_b12px_B" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "py-_b15px_B" to _pS(_uM("paddingTop" to 15, "paddingBottom" to 15)), "py-_b20px_B" to _pS(_uM("paddingTop" to 20, "paddingBottom" to 20)), "py-_b24px_B" to _pS(_uM("paddingTop" to 24, "paddingBottom" to 24)), "pt-_b4px_B" to _pS(_uM("paddingTop" to 4)), "pt-_b8px_B" to _pS(_uM("paddingTop" to 8)), "pt-_b10px_B" to _pS(_uM("paddingTop" to 10)), "pt-_b20px_B" to _pS(_uM("paddingTop" to 20)), "pb-_b8px_B" to _pS(_uM("paddingBottom" to 8)), "pb-_b10px_B" to _pS(_uM("paddingBottom" to 10)), "text-center" to _pS(_uM("textAlign" to "center")), "text-right" to _pS(_uM("textAlign" to "right")), "text-2xl" to _pS(_uM("fontSize" to "48rpx", "lineHeight" to 1.33333)), "text-base" to _pS(_uM("fontSize" to "32rpx", "lineHeight" to 1.5)), "text-sm" to _pS(_uM("fontSize" to "28rpx", "lineHeight" to 1.42857)), "text-xl" to _pS(_uM("fontSize" to "40rpx", "lineHeight" to 1.4)), "text-xs" to _pS(_uM("fontSize" to "24rpx", "lineHeight" to 1.33333)), "text-_b10px_B" to _pS(_uM("fontSize" to 10)), "text-_b11px_B" to _pS(_uM("fontSize" to 11)), "text-_b12px_B" to _pS(_uM("fontSize" to 12)), "text-_b13px_B" to _pS(_uM("fontSize" to 13)), "text-_b14px_B" to _pS(_uM("fontSize" to 14)), "text-_b15px_B" to _pS(_uM("fontSize" to 15)), "text-_b16px_B" to _pS(_uM("fontSize" to 16)), "text-_b18px_B" to _pS(_uM("fontSize" to 18)), "text-_b20px_B" to _pS(_uM("fontSize" to 20)), "text-_b24px_B" to _pS(_uM("fontSize" to 24)), "text-_b26px_B" to _pS(_uM("fontSize" to 26)), "text-_b31rpx_B" to _pS(_uM("fontSize" to "31rpx")), "text-_b93_d54rpx_B" to _pS(_uM("fontSize" to "93.54rpx")), "leading-_b16px_B" to _pS(_uM("--tw-leading" to "16px", "lineHeight" to "16px")))
            }
        val styles3: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("leading-_b18px_B" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "leading-_b20px_B" to _pS(_uM("--tw-leading" to "20px", "lineHeight" to "20px")), "leading-_b24px_B" to _pS(_uM("--tw-leading" to "24px", "lineHeight" to "24px")), "leading-_b26px_B" to _pS(_uM("--tw-leading" to "26px", "lineHeight" to "26px")), "leading-_b45px_B" to _pS(_uM("--tw-leading" to "45px", "lineHeight" to "45px")), "leading-normal" to _pS(_uM("--tw-leading" to "1.5", "lineHeight" to 1.5)), "leading-relaxed" to _pS(_uM("--tw-leading" to "1.625", "lineHeight" to 1.625)), "font-bold" to _pS(_uM("--tw-font-weight" to "700", "fontWeight" to 700)), "font-medium" to _pS(_uM("--tw-font-weight" to "500", "fontWeight" to 500)), "font-semibold" to _pS(_uM("--tw-font-weight" to "600", "fontWeight" to 600)), "text-_b_h0f8f8a_B" to _pS(_uM("color" to "#0f8f8a")), "text-_b_h0f766e_B" to _pS(_uM("color" to "#0f766e")), "text-_b_h1a202c_B" to _pS(_uM("color" to "#1a202c")), "text-_b_h1d4ed8_B" to _pS(_uM("color" to "#1d4ed8")), "text-_b_h1e40af_B" to _pS(_uM("color" to "#1e40af")), "text-_b_h1e293b_B" to _pS(_uM("color" to "#1e293b")), "text-_b_h2d3748_B" to _pS(_uM("color" to "#2d3748")), "text-_b_h3b82f6_B" to _pS(_uM("color" to "#3b82f6")), "text-_b_h4f46e5_B" to _pS(_uM("color" to "#4f46e5")), "text-_b_h06b6d4_B" to _pS(_uM("color" to "#06b6d4")), "text-_b_h8b5cf6_B" to _pS(_uM("color" to "#8b5cf6")), "text-_b_h10b981_B" to _pS(_uM("color" to "#10b981")), "text-_b_h22c55e_B" to _pS(_uM("color" to "#22c55e")), "text-_b_h38bdf8_B" to _pS(_uM("color" to "#38bdf8")), "text-_b_h065f46_B" to _pS(_uM("color" to "#065f46")), "text-_b_h70ed0a_B" to _pS(_uM("color" to "#70ed0a")), "text-_b_h94a3b8_B" to _pS(_uM("color" to "#94a3b8")), "text-_b_h2563eb_B" to _pS(_uM("color" to "#2563eb")), "text-_b_h3182ce_B" to _pS(_uM("color" to "#3182ce")), "text-_b_h4338ca_B" to _pS(_uM("color" to "#4338ca")), "text-_b_h6366f1_B" to _pS(_uM("color" to "#6366f1")), "text-_b_h15803d_B" to _pS(_uM("color" to "#15803d")), "text-_b_h059669_B" to _pS(_uM("color" to "#059669")), "text-_b_h64748b_B" to _pS(_uM("color" to "#64748b")), "text-_b_h111111_B" to _pS(_uM("color" to "#111111")), "text-_b_h123456_B" to _pS(_uM("color" to "#123456")), "text-_b_h166534_B" to _pS(_uM("color" to "#166534")), "text-_b_h334155_B" to _pS(_uM("color" to "#334155")), "text-_b_h475569_B" to _pS(_uM("color" to "#475569")), "text-_b_h666666_B" to _pS(_uM("color" to "#666666")), "text-_b_h718096_B" to _pS(_uM("color" to "#718096")), "text-_b_ha16207_B" to _pS(_uM("color" to "#a16207")), "text-_b_hb91c1c_B" to _pS(_uM("color" to "#b91c1c")), "text-_b_hb45309_B" to _pS(_uM("color" to "#b45309")), "text-_b_hbe185d_B" to _pS(_uM("color" to "#be185d")), "text-_b_hc2410c_B" to _pS(_uM("color" to "#c2410c")), "text-_b_hd14328_B" to _pS(_uM("color" to "#d14328")), "text-_b_hd97706_B" to _pS(_uM("color" to "#d97706")), "text-_b_hda0e3c_B" to _pS(_uM("color" to "#da0e3c")), "text-_b_hdc2626_B" to _pS(_uM("color" to "#dc2626")), "text-_b_hec4899_B" to _pS(_uM("color" to "#ec4899")), "text-_b_hef4444_B" to _pS(_uM("color" to "#ef4444")), "text-_b_hf7fbff_B" to _pS(_uM("color" to "#f7fbff")), "text-_b_hf43f5e_B" to _pS(_uM("color" to "#f43f5e")), "text-_b_hf59e0b_B" to _pS(_uM("color" to "#f59e0b")), "text-_b_hfef08a_B" to _pS(_uM("color" to "#fef08a")), "text-_b_hff0000_B" to _pS(_uM("color" to "#ff0000")), "text-_b_hffffff_B" to _pS(_uM("color" to "#ffffff")), "text-_bvar_p--theme-color_m_h37c2bc_P_B" to _pS(_uM("color" to "var(--theme-color)")), "text-gray-600_f75" to _pS(_uM("color" to "rgba(74,85,101,0.75)")), "text-gray-600_f95" to _pS(_uM("color" to "rgba(74,85,101,0.95)")), "text-slate-700" to _pS(_uM("color" to "rgb(49,65,88)")), "text-slate-900" to _pS(_uM("color" to "#0f172b")), "text-white" to _pS(_uM("color" to "#ffffff")), "text-zinc-50" to _pS(_uM("color" to "rgb(250,250,250)")), "underline" to _pS(_uM("textDecorationLine" to "underline")), "shadow-sm" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "shadow-xl" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "shadow-xs" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 1px 2px 0 rgba(0, 0, 0, 0.05)", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "android_cbg-_b_h2d6f08_B" to _pS(_uM("backgroundColor" to "#2d6f08")), "page" to _pS(_uM("--theme-color" to "#37c2bc")), "issue-902-theme-scope" to _pS(_uM("--theme-color" to "#16a34a")))
            }
    }
}
val GenAppClass = CreateVueAppComponent(GenApp::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "app", name = "", inheritAttrs = true, inject = Map(), props = Map(), propsNeedCastKeys = _uA(), emits = Map(), components = Map(), styles = GenApp.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenApp.setup(props as GenApp)
    }
    )
}
, fun(instance): GenApp {
    return GenApp(instance)
}
)
open class IconsDataItem (
    @JsonNotNull
    open var font_class: String,
    @JsonNotNull
    open var unicode: String,
) : UTSObject()
val fontData = _uA<IconsDataItem>(IconsDataItem(font_class = "arrow-down", unicode = "\ue6be"), IconsDataItem(font_class = "arrow-left", unicode = "\ue6bc"), IconsDataItem(font_class = "arrow-right", unicode = "\ue6bb"), IconsDataItem(font_class = "arrow-up", unicode = "\ue6bd"), IconsDataItem(font_class = "auth", unicode = "\ue6ab"), IconsDataItem(font_class = "auth-filled", unicode = "\ue6cc"), IconsDataItem(font_class = "back", unicode = "\ue6b9"), IconsDataItem(font_class = "bars", unicode = "\ue627"), IconsDataItem(font_class = "calendar", unicode = "\ue6a0"), IconsDataItem(font_class = "calendar-filled", unicode = "\ue6c0"), IconsDataItem(font_class = "camera", unicode = "\ue65a"), IconsDataItem(font_class = "camera-filled", unicode = "\ue658"), IconsDataItem(font_class = "cart", unicode = "\ue631"), IconsDataItem(font_class = "cart-filled", unicode = "\ue6d0"), IconsDataItem(font_class = "chat", unicode = "\ue65d"), IconsDataItem(font_class = "chat-filled", unicode = "\ue659"), IconsDataItem(font_class = "chatboxes", unicode = "\ue696"), IconsDataItem(font_class = "chatboxes-filled", unicode = "\ue692"), IconsDataItem(font_class = "chatbubble", unicode = "\ue697"), IconsDataItem(font_class = "chatbubble-filled", unicode = "\ue694"), IconsDataItem(font_class = "checkbox", unicode = "\ue62b"), IconsDataItem(font_class = "checkbox-filled", unicode = "\ue62c"), IconsDataItem(font_class = "checkmarkempty", unicode = "\ue65c"), IconsDataItem(font_class = "circle", unicode = "\ue65b"), IconsDataItem(font_class = "circle-filled", unicode = "\ue65e"), IconsDataItem(font_class = "clear", unicode = "\ue66d"), IconsDataItem(font_class = "close", unicode = "\ue673"), IconsDataItem(font_class = "closeempty", unicode = "\ue66c"), IconsDataItem(font_class = "cloud-download", unicode = "\ue647"), IconsDataItem(font_class = "cloud-download-filled", unicode = "\ue646"), IconsDataItem(font_class = "cloud-upload", unicode = "\ue645"), IconsDataItem(font_class = "cloud-upload-filled", unicode = "\ue648"), IconsDataItem(font_class = "color", unicode = "\ue6cf"), IconsDataItem(font_class = "color-filled", unicode = "\ue6c9"), IconsDataItem(font_class = "compose", unicode = "\ue67f"), IconsDataItem(font_class = "contact", unicode = "\ue693"), IconsDataItem(font_class = "contact-filled", unicode = "\ue695"), IconsDataItem(font_class = "down", unicode = "\ue6b8"), IconsDataItem(font_class = "bottom", unicode = "\ue6b8"), IconsDataItem(font_class = "download", unicode = "\ue68d"), IconsDataItem(font_class = "download-filled", unicode = "\ue681"), IconsDataItem(font_class = "email", unicode = "\ue69e"), IconsDataItem(font_class = "email-filled", unicode = "\ue69a"), IconsDataItem(font_class = "eye", unicode = "\ue651"), IconsDataItem(font_class = "eye-filled", unicode = "\ue66a"), IconsDataItem(font_class = "eye-slash", unicode = "\ue6b3"), IconsDataItem(font_class = "eye-slash-filled", unicode = "\ue6b4"), IconsDataItem(font_class = "fire", unicode = "\ue6a1"), IconsDataItem(font_class = "fire-filled", unicode = "\ue6c5"), IconsDataItem(font_class = "flag", unicode = "\ue65f"), IconsDataItem(font_class = "flag-filled", unicode = "\ue660"), IconsDataItem(font_class = "folder-add", unicode = "\ue6a9"), IconsDataItem(font_class = "folder-add-filled", unicode = "\ue6c8"), IconsDataItem(font_class = "font", unicode = "\ue6a3"), IconsDataItem(font_class = "forward", unicode = "\ue6ba"), IconsDataItem(font_class = "gear", unicode = "\ue664"), IconsDataItem(font_class = "gear-filled", unicode = "\ue661"), IconsDataItem(font_class = "gift", unicode = "\ue6a4"), IconsDataItem(font_class = "gift-filled", unicode = "\ue6c4"), IconsDataItem(font_class = "hand-down", unicode = "\ue63d"), IconsDataItem(font_class = "hand-down-filled", unicode = "\ue63c"), IconsDataItem(font_class = "hand-up", unicode = "\ue63f"), IconsDataItem(font_class = "hand-up-filled", unicode = "\ue63e"), IconsDataItem(font_class = "headphones", unicode = "\ue630"), IconsDataItem(font_class = "heart", unicode = "\ue639"), IconsDataItem(font_class = "heart-filled", unicode = "\ue641"), IconsDataItem(font_class = "help", unicode = "\ue679"), IconsDataItem(font_class = "help-filled", unicode = "\ue674"), IconsDataItem(font_class = "home", unicode = "\ue662"), IconsDataItem(font_class = "home-filled", unicode = "\ue663"), IconsDataItem(font_class = "image", unicode = "\ue670"), IconsDataItem(font_class = "image-filled", unicode = "\ue678"), IconsDataItem(font_class = "images", unicode = "\ue650"), IconsDataItem(font_class = "images-filled", unicode = "\ue64b"), IconsDataItem(font_class = "info", unicode = "\ue669"), IconsDataItem(font_class = "info-filled", unicode = "\ue649"), IconsDataItem(font_class = "left", unicode = "\ue6b7"), IconsDataItem(font_class = "link", unicode = "\ue6a5"), IconsDataItem(font_class = "list", unicode = "\ue644"), IconsDataItem(font_class = "location", unicode = "\ue6ae"), IconsDataItem(font_class = "location-filled", unicode = "\ue6af"), IconsDataItem(font_class = "locked", unicode = "\ue66b"), IconsDataItem(font_class = "locked-filled", unicode = "\ue668"), IconsDataItem(font_class = "loop", unicode = "\ue633"), IconsDataItem(font_class = "mail-open", unicode = "\ue643"), IconsDataItem(font_class = "mail-open-filled", unicode = "\ue63a"), IconsDataItem(font_class = "map", unicode = "\ue667"), IconsDataItem(font_class = "map-filled", unicode = "\ue666"), IconsDataItem(font_class = "map-pin", unicode = "\ue6ad"), IconsDataItem(font_class = "map-pin-ellipse", unicode = "\ue6ac"), IconsDataItem(font_class = "medal", unicode = "\ue6a2"), IconsDataItem(font_class = "medal-filled", unicode = "\ue6c3"), IconsDataItem(font_class = "mic", unicode = "\ue671"), IconsDataItem(font_class = "mic-filled", unicode = "\ue677"), IconsDataItem(font_class = "micoff", unicode = "\ue67e"), IconsDataItem(font_class = "micoff-filled", unicode = "\ue6b0"), IconsDataItem(font_class = "minus", unicode = "\ue66f"), IconsDataItem(font_class = "minus-filled", unicode = "\ue67d"), IconsDataItem(font_class = "more", unicode = "\ue64d"), IconsDataItem(font_class = "more-filled", unicode = "\ue64e"), IconsDataItem(font_class = "navigate", unicode = "\ue66e"), IconsDataItem(font_class = "navigate-filled", unicode = "\ue67a"), IconsDataItem(font_class = "notification", unicode = "\ue6a6"), IconsDataItem(font_class = "notification-filled", unicode = "\ue6c1"), IconsDataItem(font_class = "paperclip", unicode = "\ue652"), IconsDataItem(font_class = "paperplane", unicode = "\ue672"), IconsDataItem(font_class = "paperplane-filled", unicode = "\ue675"), IconsDataItem(font_class = "person", unicode = "\ue699"), IconsDataItem(font_class = "person-filled", unicode = "\ue69d"), IconsDataItem(font_class = "personadd", unicode = "\ue69f"), IconsDataItem(font_class = "personadd-filled", unicode = "\ue698"), IconsDataItem(font_class = "personadd-filled-copy", unicode = "\ue6d1"), IconsDataItem(font_class = "phone", unicode = "\ue69c"), IconsDataItem(font_class = "phone-filled", unicode = "\ue69b"), IconsDataItem(font_class = "plus", unicode = "\ue676"), IconsDataItem(font_class = "plus-filled", unicode = "\ue6c7"), IconsDataItem(font_class = "plusempty", unicode = "\ue67b"), IconsDataItem(font_class = "pulldown", unicode = "\ue632"), IconsDataItem(font_class = "pyq", unicode = "\ue682"), IconsDataItem(font_class = "qq", unicode = "\ue680"), IconsDataItem(font_class = "redo", unicode = "\ue64a"), IconsDataItem(font_class = "redo-filled", unicode = "\ue655"), IconsDataItem(font_class = "refresh", unicode = "\ue657"), IconsDataItem(font_class = "refresh-filled", unicode = "\ue656"), IconsDataItem(font_class = "refreshempty", unicode = "\ue6bf"), IconsDataItem(font_class = "reload", unicode = "\ue6b2"), IconsDataItem(font_class = "right", unicode = "\ue6b5"), IconsDataItem(font_class = "scan", unicode = "\ue62a"), IconsDataItem(font_class = "search", unicode = "\ue654"), IconsDataItem(font_class = "settings", unicode = "\ue653"), IconsDataItem(font_class = "settings-filled", unicode = "\ue6ce"), IconsDataItem(font_class = "shop", unicode = "\ue62f"), IconsDataItem(font_class = "shop-filled", unicode = "\ue6cd"), IconsDataItem(font_class = "smallcircle", unicode = "\ue67c"), IconsDataItem(font_class = "smallcircle-filled", unicode = "\ue665"), IconsDataItem(font_class = "sound", unicode = "\ue684"), IconsDataItem(font_class = "sound-filled", unicode = "\ue686"), IconsDataItem(font_class = "spinner-cycle", unicode = "\ue68a"), IconsDataItem(font_class = "staff", unicode = "\ue6a7"), IconsDataItem(font_class = "staff-filled", unicode = "\ue6cb"), IconsDataItem(font_class = "star", unicode = "\ue688"), IconsDataItem(font_class = "star-filled", unicode = "\ue68f"), IconsDataItem(font_class = "starhalf", unicode = "\ue683"), IconsDataItem(font_class = "trash", unicode = "\ue687"), IconsDataItem(font_class = "trash-filled", unicode = "\ue685"), IconsDataItem(font_class = "tune", unicode = "\ue6aa"), IconsDataItem(font_class = "tune-filled", unicode = "\ue6ca"), IconsDataItem(font_class = "undo", unicode = "\ue64f"), IconsDataItem(font_class = "undo-filled", unicode = "\ue64c"), IconsDataItem(font_class = "up", unicode = "\ue6b6"), IconsDataItem(font_class = "top", unicode = "\ue6b6"), IconsDataItem(font_class = "upload", unicode = "\ue690"), IconsDataItem(font_class = "upload-filled", unicode = "\ue68e"), IconsDataItem(font_class = "videocam", unicode = "\ue68c"), IconsDataItem(font_class = "videocam-filled", unicode = "\ue689"), IconsDataItem(font_class = "vip", unicode = "\ue6a8"), IconsDataItem(font_class = "vip-filled", unicode = "\ue6c6"), IconsDataItem(font_class = "wallet", unicode = "\ue6b1"), IconsDataItem(font_class = "wallet-filled", unicode = "\ue6c2"), IconsDataItem(font_class = "weibo", unicode = "\ue68b"), IconsDataItem(font_class = "weixin", unicode = "\ue691"))
val GenUniModulesUniIconsComponentsUniIconsUniIconsClass = CreateVueComponent(GenUniModulesUniIconsComponentsUniIconsUniIcons::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = GenUniModulesUniIconsComponentsUniIconsUniIcons.name, inheritAttrs = GenUniModulesUniIconsComponentsUniIconsUniIcons.inheritAttrs, inject = GenUniModulesUniIconsComponentsUniIconsUniIcons.inject, props = GenUniModulesUniIconsComponentsUniIconsUniIcons.props, propsNeedCastKeys = GenUniModulesUniIconsComponentsUniIconsUniIcons.propsNeedCastKeys, emits = GenUniModulesUniIconsComponentsUniIconsUniIcons.emits, components = GenUniModulesUniIconsComponentsUniIconsUniIcons.components, styles = GenUniModulesUniIconsComponentsUniIconsUniIcons.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenUniModulesUniIconsComponentsUniIconsUniIcons.setup(props as GenUniModulesUniIconsComponentsUniIconsUniIcons)
    }
    )
}
, fun(instance, renderer): GenUniModulesUniIconsComponentsUniIconsUniIcons {
    return GenUniModulesUniIconsComponentsUniIconsUniIcons(instance)
}
)
fun t(key: String, named: UTSJSONObject? = null): String {
    if (named != null) {
        return i18n.global.t(key, named)
    }
    return i18n.global.t(key)
}
fun `$t`(key: String, named: UTSJSONObject? = null): String {
    return t(key, named)
}
fun getI18nText(key: String): String {
    var cleanKey = key
    if (cleanKey.startsWith("%") && cleanKey.endsWith("%") && cleanKey.length > 2) {
        cleanKey = cleanKey.substring(1, cleanKey.length - 1)
    }
    return i18n.global.t(cleanKey)
}
fun setTabbarItem(): Unit {
    run {
        var i: Number = 0
        while(i < tabbarList.length){
            val item = tabbarList[i]
            val text = getI18nText(item.text)
            uni_setTabBarItem(SetTabBarItemOptions(index = i, text = text))
            i++
        }
    }
}
val GenSrcTabbarTabbarItemClass = CreateVueComponent(GenSrcTabbarTabbarItem::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcTabbarTabbarItem.inheritAttrs, inject = GenSrcTabbarTabbarItem.inject, props = GenSrcTabbarTabbarItem.props, propsNeedCastKeys = GenSrcTabbarTabbarItem.propsNeedCastKeys, emits = GenSrcTabbarTabbarItem.emits, components = GenSrcTabbarTabbarItem.components, styles = GenSrcTabbarTabbarItem.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcTabbarTabbarItem.setup(props as GenSrcTabbarTabbarItem)
    }
    )
}
, fun(instance, renderer): GenSrcTabbarTabbarItem {
    return GenSrcTabbarTabbarItem(instance)
}
)
open class SystemSafeAreaInsets (
    @JsonNotNull
    open var top: Number,
    @JsonNotNull
    open var right: Number,
    @JsonNotNull
    open var bottom: Number,
    @JsonNotNull
    open var left: Number,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return SystemSafeAreaInsetsReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class SystemSafeAreaInsetsReactiveObject : SystemSafeAreaInsets, IUTSReactive<SystemSafeAreaInsets> {
    override var __v_raw: SystemSafeAreaInsets
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: SystemSafeAreaInsets, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(top = __v_raw.top, right = __v_raw.right, bottom = __v_raw.bottom, left = __v_raw.left) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): SystemSafeAreaInsetsReactiveObject {
        return SystemSafeAreaInsetsReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var top: Number
        get() {
            return _tRG(__v_raw, "top", __v_raw.top, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("top")) {
                return
            }
            val oldValue = __v_raw.top
            __v_raw.top = value
            _tRS(__v_raw, "top", oldValue, value)
        }
    override var right: Number
        get() {
            return _tRG(__v_raw, "right", __v_raw.right, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("right")) {
                return
            }
            val oldValue = __v_raw.right
            __v_raw.right = value
            _tRS(__v_raw, "right", oldValue, value)
        }
    override var bottom: Number
        get() {
            return _tRG(__v_raw, "bottom", __v_raw.bottom, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("bottom")) {
                return
            }
            val oldValue = __v_raw.bottom
            __v_raw.bottom = value
            _tRS(__v_raw, "bottom", oldValue, value)
        }
    override var left: Number
        get() {
            return _tRG(__v_raw, "left", __v_raw.left, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("left")) {
                return
            }
            val oldValue = __v_raw.left
            __v_raw.left = value
            _tRS(__v_raw, "left", oldValue, value)
        }
}
open class SystemInfoType (
    @JsonNotNull
    open var screenWidth: Number,
    @JsonNotNull
    open var screenHeight: Number,
    @JsonNotNull
    open var windowWidth: Number,
    @JsonNotNull
    open var windowHeight: Number,
    @JsonNotNull
    open var statusBarHeight: Number,
    @JsonNotNull
    open var pixelRatio: Number,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return SystemInfoTypeReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class SystemInfoTypeReactiveObject : SystemInfoType, IUTSReactive<SystemInfoType> {
    override var __v_raw: SystemInfoType
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: SystemInfoType, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(screenWidth = __v_raw.screenWidth, screenHeight = __v_raw.screenHeight, windowWidth = __v_raw.windowWidth, windowHeight = __v_raw.windowHeight, statusBarHeight = __v_raw.statusBarHeight, pixelRatio = __v_raw.pixelRatio) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): SystemInfoTypeReactiveObject {
        return SystemInfoTypeReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var screenWidth: Number
        get() {
            return _tRG(__v_raw, "screenWidth", __v_raw.screenWidth, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("screenWidth")) {
                return
            }
            val oldValue = __v_raw.screenWidth
            __v_raw.screenWidth = value
            _tRS(__v_raw, "screenWidth", oldValue, value)
        }
    override var screenHeight: Number
        get() {
            return _tRG(__v_raw, "screenHeight", __v_raw.screenHeight, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("screenHeight")) {
                return
            }
            val oldValue = __v_raw.screenHeight
            __v_raw.screenHeight = value
            _tRS(__v_raw, "screenHeight", oldValue, value)
        }
    override var windowWidth: Number
        get() {
            return _tRG(__v_raw, "windowWidth", __v_raw.windowWidth, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("windowWidth")) {
                return
            }
            val oldValue = __v_raw.windowWidth
            __v_raw.windowWidth = value
            _tRS(__v_raw, "windowWidth", oldValue, value)
        }
    override var windowHeight: Number
        get() {
            return _tRG(__v_raw, "windowHeight", __v_raw.windowHeight, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("windowHeight")) {
                return
            }
            val oldValue = __v_raw.windowHeight
            __v_raw.windowHeight = value
            _tRS(__v_raw, "windowHeight", oldValue, value)
        }
    override var statusBarHeight: Number
        get() {
            return _tRG(__v_raw, "statusBarHeight", __v_raw.statusBarHeight, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("statusBarHeight")) {
                return
            }
            val oldValue = __v_raw.statusBarHeight
            __v_raw.statusBarHeight = value
            _tRS(__v_raw, "statusBarHeight", oldValue, value)
        }
    override var pixelRatio: Number
        get() {
            return _tRG(__v_raw, "pixelRatio", __v_raw.pixelRatio, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("pixelRatio")) {
                return
            }
            val oldValue = __v_raw.pixelRatio
            __v_raw.pixelRatio = value
            _tRS(__v_raw, "pixelRatio", oldValue, value)
        }
}
val systemInfo = ref(null as SystemInfoType?)
val safeAreaInsets = ref(null as SystemSafeAreaInsets?)
fun updateSystemInfo() {
    val sysInfo = uni_getSystemInfoSync()
    systemInfo.value = SystemInfoType(screenWidth = sysInfo.screenWidth, screenHeight = sysInfo.screenHeight, windowWidth = sysInfo.windowWidth, windowHeight = sysInfo.windowHeight, statusBarHeight = sysInfo.statusBarHeight, pixelRatio = sysInfo.pixelRatio)
    val safeArea = sysInfo.safeAreaInsets
    if (safeArea != null) {
        safeAreaInsets.value = SystemSafeAreaInsets(top = safeArea.top, right = safeArea.right, bottom = safeArea.bottom, left = safeArea.left)
    }
}
val runBlock3 = run {
    updateSystemInfo()
}
val GenSrcTabbarIndexClass = CreateVueComponent(GenSrcTabbarIndex::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcTabbarIndex.inheritAttrs, inject = GenSrcTabbarIndex.inject, props = GenSrcTabbarIndex.props, propsNeedCastKeys = GenSrcTabbarIndex.propsNeedCastKeys, emits = GenSrcTabbarIndex.emits, components = GenSrcTabbarIndex.components, styles = GenSrcTabbarIndex.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcTabbarIndex.setup(props as GenSrcTabbarIndex)
    }
    )
}
, fun(instance, renderer): GenSrcTabbarIndex {
    return GenSrcTabbarIndex(instance)
}
)
val GenAppkuClass = CreateVueComponent(GenAppku::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenAppku.inheritAttrs, inject = GenAppku.inject, props = GenAppku.props, propsNeedCastKeys = GenAppku.propsNeedCastKeys, emits = GenAppku.emits, components = GenAppku.components, styles = GenAppku.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenAppku.setup(props as GenAppku)
    }
    )
}
, fun(instance, renderer): GenAppku {
    return GenAppku(instance)
}
)
val GenSrcComponentsNavBarNavBarClass = CreateVueComponent(GenSrcComponentsNavBarNavBar::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcComponentsNavBarNavBar.inheritAttrs, inject = GenSrcComponentsNavBarNavBar.inject, props = GenSrcComponentsNavBarNavBar.props, propsNeedCastKeys = GenSrcComponentsNavBarNavBar.propsNeedCastKeys, emits = GenSrcComponentsNavBarNavBar.emits, components = GenSrcComponentsNavBarNavBar.components, styles = GenSrcComponentsNavBarNavBar.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcComponentsNavBarNavBar.setup(props as GenSrcComponentsNavBarNavBar)
    }
    )
}
, fun(instance, renderer): GenSrcComponentsNavBarNavBar {
    return GenSrcComponentsNavBarNavBar(instance)
}
)
val isPageScrollDisabled = ref(false)
fun setPageScrollEnabled(enabled: Boolean) {
    isPageScrollDisabled.value = !enabled
}
val GenSrcLayoutsNavbarClass = CreateVueComponent(GenSrcLayoutsNavbar::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcLayoutsNavbar.inheritAttrs, inject = GenSrcLayoutsNavbar.inject, props = GenSrcLayoutsNavbar.props, propsNeedCastKeys = GenSrcLayoutsNavbar.propsNeedCastKeys, emits = GenSrcLayoutsNavbar.emits, components = GenSrcLayoutsNavbar.components, styles = GenSrcLayoutsNavbar.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcLayoutsNavbar.setup(props as GenSrcLayoutsNavbar)
    }
    )
}
, fun(instance, renderer): GenSrcLayoutsNavbar {
    return GenSrcLayoutsNavbar(instance)
}
)
var firstBackTime: Number = 0
fun handleBackPressExit(): Boolean {
    val now = Date.now()
    if (firstBackTime == 0 || now - firstBackTime > 2000) {
        firstBackTime = now
        uni_showToast(ShowToastOptions(title = "再按一次退出应用", position = "bottom"))
        setTimeout(fun(){
            if (firstBackTime == now) {
                firstBackTime = 0
            }
        }
        , 2000)
        return true
    }
    try {
        val activity = UTSAndroid.getUniActivity()
        if (activity != null) {
            activity.finishAffinity()
        }
        setTimeout(fun(){
            java.lang.System.exit(0)
        }
        , 500)
    }
     catch (_e: Throwable) {
        uni_exit(null)
    }
    return false
}
val EVENT_PULL_DOWN_REFRESH = "onPagePullDownRefresh"
val EVENT_STOP_PULL_DOWN_REFRESH = "stopPagePullDownRefresh"
fun onNavbarPullDownRefresh(callback: () -> Unit): Unit {
    onMounted(fun(){
        uni__on(EVENT_PULL_DOWN_REFRESH, callback)
    }
    )
    onUnmounted(fun(){
        uni__off(EVENT_PULL_DOWN_REFRESH, callback)
    }
    )
}
fun stopNavbarPullDownRefresh(): Unit {
    uni__emit(EVENT_STOP_PULL_DOWN_REFRESH, null)
    uni_stopPullDownRefresh()
}
val GenSrcPagesIndexIndexClass = CreateVueComponent(GenSrcPagesIndexIndex::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcPagesIndexIndex.inheritAttrs, inject = GenSrcPagesIndexIndex.inject, props = GenSrcPagesIndexIndex.props, propsNeedCastKeys = GenSrcPagesIndexIndex.propsNeedCastKeys, emits = GenSrcPagesIndexIndex.emits, components = GenSrcPagesIndexIndex.components, styles = GenSrcPagesIndexIndex.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesIndexIndex.setup(props as GenSrcPagesIndexIndex)
    }
    )
}
, fun(instance, renderer): GenSrcPagesIndexIndex {
    return GenSrcPagesIndexIndex(instance, renderer)
}
)
open class ChatMessage (
    @JsonNotNull
    open var id: String,
    @JsonNotNull
    open var sender: String,
    @JsonNotNull
    open var content: String,
    @JsonNotNull
    open var time: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return ChatMessageReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class ChatMessageReactiveObject : ChatMessage, IUTSReactive<ChatMessage> {
    override var __v_raw: ChatMessage
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: ChatMessage, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(id = __v_raw.id, sender = __v_raw.sender, content = __v_raw.content, time = __v_raw.time) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): ChatMessageReactiveObject {
        return ChatMessageReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var id: String
        get() {
            return _tRG(__v_raw, "id", __v_raw.id, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("id")) {
                return
            }
            val oldValue = __v_raw.id
            __v_raw.id = value
            _tRS(__v_raw, "id", oldValue, value)
        }
    override var sender: String
        get() {
            return _tRG(__v_raw, "sender", __v_raw.sender, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("sender")) {
                return
            }
            val oldValue = __v_raw.sender
            __v_raw.sender = value
            _tRS(__v_raw, "sender", oldValue, value)
        }
    override var content: String
        get() {
            return _tRG(__v_raw, "content", __v_raw.content, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("content")) {
                return
            }
            val oldValue = __v_raw.content
            __v_raw.content = value
            _tRS(__v_raw, "content", oldValue, value)
        }
    override var time: String
        get() {
            return _tRG(__v_raw, "time", __v_raw.time, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("time")) {
                return
            }
            val oldValue = __v_raw.time
            __v_raw.time = value
            _tRS(__v_raw, "time", oldValue, value)
        }
}
val GenSrcPagesAiAiClass = CreateVueComponent(GenSrcPagesAiAi::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcPagesAiAi.inheritAttrs, inject = GenSrcPagesAiAi.inject, props = GenSrcPagesAiAi.props, propsNeedCastKeys = GenSrcPagesAiAi.propsNeedCastKeys, emits = GenSrcPagesAiAi.emits, components = GenSrcPagesAiAi.components, styles = GenSrcPagesAiAi.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesAiAi.setup(props as GenSrcPagesAiAi)
    }
    )
}
, fun(instance, renderer): GenSrcPagesAiAi {
    return GenSrcPagesAiAi(instance, renderer)
}
)
val GenSrcPagesBasicComponentsCardClass = CreateVueComponent(GenSrcPagesBasicComponentsCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsCard.inheritAttrs, inject = GenSrcPagesBasicComponentsCard.inject, props = GenSrcPagesBasicComponentsCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsCard.emits, components = GenSrcPagesBasicComponentsCard.components, styles = GenSrcPagesBasicComponentsCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsCard.setup(props as GenSrcPagesBasicComponentsCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsCard {
    return GenSrcPagesBasicComponentsCard(instance)
}
)
fun toast(message: String, _type: String = "default") {
    uni_showToast(ShowToastOptions(title = message, icon = "none"))
}
fun toastSuccess(message: String) {
    uni_showToast(ShowToastOptions(title = message, icon = "success"))
}
fun toastError(message: String) {
    uni_showToast(ShowToastOptions(title = message, icon = "error"))
}
fun toastWarning(message: String) {
    toast(message)
}
val GenSrcPagesBasicComponentsToastDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsToastDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsToastDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsToastDemoCard.inject, props = GenSrcPagesBasicComponentsToastDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsToastDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsToastDemoCard.emits, components = GenSrcPagesBasicComponentsToastDemoCard.components, styles = GenSrcPagesBasicComponentsToastDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsToastDemoCard.setup(props as GenSrcPagesBasicComponentsToastDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsToastDemoCard {
    return GenSrcPagesBasicComponentsToastDemoCard(instance)
}
)
val GenSrcPagesBasicComponentsChildDemoBoxClass = CreateVueComponent(GenSrcPagesBasicComponentsChildDemoBox::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsChildDemoBox.inheritAttrs, inject = GenSrcPagesBasicComponentsChildDemoBox.inject, props = GenSrcPagesBasicComponentsChildDemoBox.props, propsNeedCastKeys = GenSrcPagesBasicComponentsChildDemoBox.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsChildDemoBox.emits, components = GenSrcPagesBasicComponentsChildDemoBox.components, styles = GenSrcPagesBasicComponentsChildDemoBox.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsChildDemoBox.setup(props as GenSrcPagesBasicComponentsChildDemoBox)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsChildDemoBox {
    return GenSrcPagesBasicComponentsChildDemoBox(instance)
}
)
val GenSrcPagesBasicComponentsPropsDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsPropsDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsPropsDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsPropsDemoCard.inject, props = GenSrcPagesBasicComponentsPropsDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsPropsDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsPropsDemoCard.emits, components = GenSrcPagesBasicComponentsPropsDemoCard.components, styles = GenSrcPagesBasicComponentsPropsDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsPropsDemoCard.setup(props as GenSrcPagesBasicComponentsPropsDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsPropsDemoCard {
    return GenSrcPagesBasicComponentsPropsDemoCard(instance)
}
)
val Object = UTSJSONObject
open class FontIconConfig (
    @JsonNotNull
    open var prefix: String,
    @JsonNotNull
    open var fontFamily: String,
    open var icons: UTSJSONObject? = null,
    open var fontUrl: String? = null,
    open var jsonUrl: String? = null,
    open var autoLoadJson: Boolean? = null,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return FontIconConfigReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class FontIconConfigReactiveObject : FontIconConfig, IUTSReactive<FontIconConfig> {
    override var __v_raw: FontIconConfig
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: FontIconConfig, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(prefix = __v_raw.prefix, fontFamily = __v_raw.fontFamily, icons = __v_raw.icons, fontUrl = __v_raw.fontUrl, jsonUrl = __v_raw.jsonUrl, autoLoadJson = __v_raw.autoLoadJson) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): FontIconConfigReactiveObject {
        return FontIconConfigReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var prefix: String
        get() {
            return _tRG(__v_raw, "prefix", __v_raw.prefix, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("prefix")) {
                return
            }
            val oldValue = __v_raw.prefix
            __v_raw.prefix = value
            _tRS(__v_raw, "prefix", oldValue, value)
        }
    override var fontFamily: String
        get() {
            return _tRG(__v_raw, "fontFamily", __v_raw.fontFamily, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("fontFamily")) {
                return
            }
            val oldValue = __v_raw.fontFamily
            __v_raw.fontFamily = value
            _tRS(__v_raw, "fontFamily", oldValue, value)
        }
    override var icons: UTSJSONObject?
        get() {
            return _tRG(__v_raw, "icons", __v_raw.icons, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("icons")) {
                return
            }
            val oldValue = __v_raw.icons
            __v_raw.icons = value
            _tRS(__v_raw, "icons", oldValue, value)
        }
    override var fontUrl: String?
        get() {
            return _tRG(__v_raw, "fontUrl", __v_raw.fontUrl, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("fontUrl")) {
                return
            }
            val oldValue = __v_raw.fontUrl
            __v_raw.fontUrl = value
            _tRS(__v_raw, "fontUrl", oldValue, value)
        }
    override var jsonUrl: String?
        get() {
            return _tRG(__v_raw, "jsonUrl", __v_raw.jsonUrl, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("jsonUrl")) {
                return
            }
            val oldValue = __v_raw.jsonUrl
            __v_raw.jsonUrl = value
            _tRS(__v_raw, "jsonUrl", oldValue, value)
        }
    override var autoLoadJson: Boolean?
        get() {
            return _tRG(__v_raw, "autoLoadJson", __v_raw.autoLoadJson, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("autoLoadJson")) {
                return
            }
            val oldValue = __v_raw.autoLoadJson
            __v_raw.autoLoadJson = value
            _tRS(__v_raw, "autoLoadJson", oldValue, value)
        }
}
open class IconifyConfig (
    @JsonNotNull
    open var prefix: String,
    open var apiUrl: String? = null,
    open var icons: UTSJSONObject? = null,
    open var jsonUrl: String? = null,
    open var autoLoadJson: Boolean? = null,
) : UTSObject()
open class ParsedIconName (
    @JsonNotNull
    open var prefix: String,
    @JsonNotNull
    open var iconName: String,
    @JsonNotNull
    open var hasPrefix: Boolean = false,
    @JsonNotNull
    open var isImage: Boolean = false,
    @JsonNotNull
    open var isUnicode: Boolean = false,
    @JsonNotNull
    open var isSvg: Boolean = false,
) : UTSObject()
open class FontIconInfo (
    @JsonNotNull
    open var fontFamily: String,
    @JsonNotNull
    open var unicode: String,
    @JsonNotNull
    open var char: String,
    @JsonNotNull
    open var className: String,
) : UTSObject()
open class IconifyInfo (
    @JsonNotNull
    open var prefix: String,
    @JsonNotNull
    open var apiUrl: String,
    @JsonNotNull
    open var isLocal: Boolean = false,
    @JsonNotNull
    open var svgContent: String,
    @JsonNotNull
    open var iconName: String,
) : UTSObject()
open class UseIconOptions (
    open var prefix: String? = null,
) : UTSObject()
open class UseIconReturn (
    @JsonNotNull
    open var type: ComputedRef<String>,
    @JsonNotNull
    open var fontIcon: ComputedRef<FontIconInfo?>,
    @JsonNotNull
    open var iconifyUrl: ComputedRef<String?>,
    @JsonNotNull
    open var iconifyInfo: ComputedRef<IconifyInfo?>,
    @JsonNotNull
    open var imageUrl: ComputedRef<String>,
    @JsonNotNull
    open var parsed: ParsedIconName,
) : UTSObject()
val fontIconRegistry = Map<String, FontIconConfig>()
val iconifyRegistry = Map<String, IconifyConfig>()
val jsonCache = Map<String, UTSJSONObject>()
val iconData = Map<String, UTSJSONObject>()
val iconDataChangeCount = ref(0)
var DEFAULT_ICONIFY_API = "https://api.iconify.design"
fun isNullish(value: Any?): Boolean {
    return value == null
}
fun isUnicodeChar(str: String): Boolean {
    return UTSRegExp("[^\\u0000-\\u007F]", "").test(str)
}
fun isUnicodeEscape(str: String): Boolean {
    return UTSRegExp("^\\\\u[0-9a-fA-F]{4}\$", "").test(str)
}
fun parseUnicode(str: String): String {
    if (isUnicodeEscape(str)) {
        return String.fromCharCode(parseInt(str.slice(2), 16))
    }
    return str
}
fun isNetworkUrl(url: String): Boolean {
    return url.startsWith("http://") || url.startsWith("https://")
}
fun loadJsonData(jsonUrl: String): UTSPromise<UTSJSONObject> {
    return wrapUTSPromise(suspend w@{
            if (jsonCache.has(jsonUrl)) {
                return@w jsonCache.get(jsonUrl)!!
            }
            if (isNetworkUrl(jsonUrl)) {
                return@w UTSPromise(fun(resolve, reject){
                    uni_request<Any>(RequestOptions(url = jsonUrl, dataType = "text", success = fun(res){
                        if (res.statusCode == 200) {
                            val data = res.data as UTSJSONObject
                            jsonCache.set(jsonUrl, data)
                            resolve(data)
                        } else {
                            reject(UTSError("加载失败: " + res.statusCode))
                        }
                    }, fail = fun(err){
                        reject(err)
                    }))
                })
            } else {
                return@w UTSPromise(fun(resolve, reject){
                    try {
                        val fs = uni_getFileSystemManager()
                        fs.readFile(ReadFileOptions(filePath = jsonUrl, encoding = "utf-8", success = fun(res){
                            try {
                                val data = JSON.parse(res.data as String) as UTSJSONObject
                                jsonCache.set(jsonUrl, data)
                                resolve(data)
                            }
                             catch (error: Throwable) {
                                reject(UTSError("解析JSON失败"))
                            }
                        }
                        , fail = fun(err){
                            reject(err)
                        }
                        ))
                    }
                     catch (fsError: Throwable) {
                        reject(fsError)
                    }
                }
                )
            }
    })
}
val loadingFonts = ref(_uA<FontIconConfig>())
fun registerFontIcon(config: FontIconConfig): UTSPromise<Unit> {
    return wrapUTSPromise(suspend {
            val prefix = config.prefix
            val jsonUrl = config.jsonUrl
            val icons = config.icons ?: _uO()
            fontIconRegistry.set(prefix, config)
            if (!isNullish(config.fontUrl)) {
                loadingFonts.value.push(config)
                uni_loadFontFace(LoadFontFaceOptions(family = config.fontFamily, source = "url(\"" + config.fontUrl + "\")", success = fun(_){
                    val existingIndex = loadingFonts.value.findIndex(fun(item): Boolean {
                        return item.fontUrl == config.fontUrl
                    }
                    )
                    if (existingIndex > -1) {
                        loadingFonts.value.splice(existingIndex, 1)
                    }
                    console.log("字体加载成功: " + config.fontFamily + "; 正在加载字体数量: " + loadingFonts.value.length)
                }
                , fail = fun(err){
                    console.error("字体加载失败: " + config.fontFamily, err)
                }
                ))
            }
            if (UTSJSONObject.keys(icons).length > 0) {
                iconData.set(prefix, icons)
                iconDataChangeCount.value++
                console.log("已注册字体图标库: " + prefix + " (内置" + UTSJSONObject.keys(icons).length + "个图标)")
                if (!isNullish(jsonUrl)) {
                    loadAndMergeJson(prefix, jsonUrl!!)
                }
            } else if (!isNullish(jsonUrl)) {
                try {
                    val jsonIcons = await(loadJsonData(jsonUrl!!))
                    iconData.set(prefix, jsonIcons)
                    iconDataChangeCount.value++
                    console.log("已注册字体图标库: " + prefix + " (从JSON加载" + Object.keys(jsonIcons).length + "个图标)")
                } catch (error: Throwable) {
                    console.log("jsonUrl", jsonUrl)
                    console.error("注册字体图标库失败: " + prefix, error)
                    throw error
                }
            } else {
                console.warn("注册字体图标库: " + prefix + "，但未提供图标数据")
            }
    })
}
fun loadAndMergeJson(prefix: String, jsonUrl: String): UTSPromise<Unit> {
    return wrapUTSPromise(suspend {
            try {
                val jsonIcons = await(loadJsonData(jsonUrl))
                val currentIcons = iconData.get(prefix) ?: _uO()
                val mergedIcons = UTSJSONObject.assign<UTSJSONObject>(_uO(), currentIcons, jsonIcons) as UTSJSONObject
                iconData.set(prefix, mergedIcons)
                iconDataChangeCount.value++
                console.log("已合并图标库: " + prefix + "，现有" + Object.keys(mergedIcons).length + "个图标")
            }
             catch (error: Throwable) {
                console.warn("加载图标JSON失败: " + jsonUrl + "，使用现有图标")
            }
    })
}
fun parseIconName(name: String, prefix: String = ""): ParsedIconName {
    if (isUnicodeChar(name) || isUnicodeEscape(name)) {
        return ParsedIconName(prefix = prefix, iconName = name, hasPrefix = false, isImage = false, isUnicode = true, isSvg = false)
    }
    val isImageUrl = name.startsWith("/") || name.startsWith("http") || name.startsWith("data:") || UTSRegExp("\\.(png|jpg|jpeg|gif|svg|webp)\$", "i").test(name)
    val isSvgPath = UTSRegExp("\\.(svg)\$", "i").test(name) || name.startsWith("data:image/svg+xml;")
    if (isImageUrl) {
        return ParsedIconName(prefix = "", iconName = name, hasPrefix = false, isImage = true, isUnicode = false, isSvg = isSvgPath)
    }
    if (name.includes(":")) {
        val _name_split = name.split(":")
        val prefix = _name_split[0]
        val iconName = _name_split[1]
        return ParsedIconName(prefix = prefix, iconName = iconName, hasPrefix = true, isImage = false, isUnicode = false, isSvg = false)
    }
    return ParsedIconName(prefix = prefix, iconName = name, hasPrefix = false, isImage = false, isUnicode = false, isSvg = false)
}
fun useIcon(name: Any, options: UseIconOptions = UseIconOptions()): UseIconReturn {
    val parsed = computed(fun(): ParsedIconName {
        return parseIconName("" + unref(name), options.prefix ?: "l")
    }
    )
    val type = computed(fun(): String {
        val _parsed_value = parsed.value
        val prefix = _parsed_value.prefix
        val isImage = _parsed_value.isImage
        val hasPrefix = _parsed_value.hasPrefix
        val isUnicode = _parsed_value.isUnicode
        if (isUnicode) {
            return "font"
        }
        if (isImage) {
            return "image"
        }
        if (hasPrefix) {
            if (fontIconRegistry.has(prefix)) {
                return "font"
            }
            if (iconifyRegistry.has(prefix)) {
                return "iconify"
            }
            return "iconify"
        }
        if (!isNullish(options.prefix)) {
            if (fontIconRegistry.has(options.prefix!!)) {
                return "font"
            }
            if (iconifyRegistry.has(options.prefix!!)) {
                return "iconify"
            }
        }
        return "font"
    }
    )
    val fontIcon = computed(fun(): FontIconInfo? {
        iconDataChangeCount.value
        if (type.value == "font") {
            val _parsed_value = parsed.value
            val prefix = _parsed_value.prefix
            val iconName = _parsed_value.iconName
            val hasPrefix = _parsed_value.hasPrefix
            val isUnicode = _parsed_value.isUnicode
            if (isUnicode) {
                val char = parseUnicode(iconName)
                return FontIconInfo(fontFamily = options.prefix ?: "", unicode = iconName, char = char, className = "")
            }
            var targetPrefix = ""
            if (hasPrefix) {
                targetPrefix = prefix
            } else if (!isNullish(options.prefix)) {
                targetPrefix = options.prefix!!
            }
            if (!isNullish(targetPrefix) && fontIconRegistry.has(targetPrefix) && iconData.has(targetPrefix)) {
                val config = fontIconRegistry.get(targetPrefix)!!
                val icons = iconData.get(targetPrefix)!!
                val unicode = "" + (icons[iconName] ?: "")
                return FontIconInfo(fontFamily = config.fontFamily, unicode = unicode, char = if (unicode != "") {
                    String.fromCharCode(parseInt(unicode, 16))
                } else {
                    ""
                }
                , className = "" + config.prefix + "-" + iconName)
            }
        }
        return null
    }
    )
    val iconifyInfo = computed(fun(): IconifyInfo? {
        iconDataChangeCount.value
        if (type.value == "iconify") {
            val _parsed_value = parsed.value
            val prefix = _parsed_value.prefix
            val iconName = _parsed_value.iconName
            val hasPrefix = _parsed_value.hasPrefix
            var targetPrefix = prefix
            var targetIconName = iconName
            if (!hasPrefix) {
                if (!isNullish(options.prefix)) {
                    targetPrefix = options.prefix!!
                    targetIconName = iconName
                } else {
                    return null
                }
            }
            val config = iconifyRegistry.get(targetPrefix)
            val icons = iconData.get(targetPrefix)
            val isLocal = !isNullish(icons) && UTSJSONObject.keys(icons!!).length > 0
            var apiUrl = DEFAULT_ICONIFY_API
            if (!isNullish(config) && !isNullish(config?.apiUrl)) {
                apiUrl = config!!.apiUrl!!
            }
            return IconifyInfo(prefix = targetPrefix, apiUrl = apiUrl, isLocal = isLocal, svgContent = if (isLocal) {
                "" + (icons?.get(targetIconName) ?: "")
            } else {
                ""
            }
            , iconName = targetIconName)
        }
        return null
    }
    )
    val iconifyUrl = computed(fun(): String? {
        val info = iconifyInfo.value
        if (isNullish(info)) {
            return null
        }
        if (info!!.isLocal && info!!.svgContent != "") {
            return info?.svgContent ?: ""
        }
        return "" + info!!.apiUrl + "/" + info!!.prefix + "/" + info!!.iconName + ".svg"
    }
    )
    val imageUrl = computed(fun(): String {
        if (type.value == "image") {
            return parsed.value.iconName
        }
        return ""
    }
    )
    return UseIconReturn(type = type, fontIcon = fontIcon, iconifyUrl = iconifyUrl, iconifyInfo = iconifyInfo, imageUrl = imageUrl, parsed = parsed.value)
}
val runBlock4 = run {
    registerFontIcon(FontIconConfig(prefix = "l", fontFamily = "l", jsonUrl = "/uni_modules/lime-icon/static/icons.json"))
}
typealias ClassProp = Any?
@Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
fun classNames(vararg spreadArgs: ClassProp): String {
    var args = UTSArray(*spreadArgs)
    return classNamesArray(args)
}
fun classNamesArray(args: UTSArray<ClassProp>): String {
    val result: UTSArray<String> = _uA()
    run {
        var i: Number = 0
        while(i < args.length){
            val arg = args[i]
            if (arg == null) {
                i++
                continue
            }
            if (UTSAndroid.`typeof`(arg) == "string") {
                val trimmed = (arg as String).trim()
                if (trimmed != "") {
                    result.push(trimmed)
                }
            } else if (UTSAndroid.`typeof`(arg) == "number") {
                if (isFinite(arg as Number)) {
                    result.push("" + arg as Number)
                }
            } else if (UTSArray.isArray(arg)) {
                if ((arg as UTSArray<ClassProp>).length > 0) {
                    val className = classNamesArray(arg as UTSArray<ClassProp>)
                    if (className != "") {
                        result.push(className)
                    }
                }
            } else if (UTSAndroid.`typeof`(arg) == "object") {
                (arg as UTSJSONObject).toMap().forEach(fun(value, key){
                    if (value == true) {
                        result.push(key)
                    }
                }
                )
            }
            i++
        }
    }
    return result.join(" ")
}
fun toKebabCase(str: String): String {
    return str.replace(UTSRegExp("^[A-Z]", ""), fun(m: String, _a: Number, _b: String): String {
        return m.toLowerCase()
    }
    ).replace(UTSRegExp("[A-Z]", "g"), fun(m: String, _a: Number, _b: String): String {
        return "-" + m.toLowerCase()
    }
    )
}
typealias StyleProp = Any?
@Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
fun stringifyStyle(vararg spreadArgs: StyleProp): String {
    var args = UTSArray(*spreadArgs)
    return stringifyStyleArray(args)
}
fun isValidStyleValue(value: Any?): Boolean {
    if (value == null) {
        return false
    }
    if (value == "") {
        return false
    }
    if (UTSAndroid.`typeof`(value) == "number") {
        return isFinite(value as Number)
    }
    if (UTSAndroid.`typeof`(value) == "boolean") {
        return false
    }
    return true
}
fun stringifyStyleArray(args: UTSArray<StyleProp>): String {
    val result: UTSArray<String> = _uA()
    run {
        var i: Number = 0
        while(i < args.length){
            val arg = args[i]
            if (!isValidStyleValue(arg)) {
                i++
                continue
            }
            if (UTSAndroid.`typeof`(arg) == "string") {
                result.push(arg as String)
            } else if (UTSArray.isArray(arg)) {
                if ((arg as UTSArray<StyleProp>).length > 0) {
                    val style = stringifyStyleArray(arg as UTSArray<StyleProp>)
                    if (style != "") {
                        result.push(style)
                    }
                }
            } else if (UTSAndroid.`typeof`(arg) == "object") {
                (arg as UTSJSONObject).toMap().forEach(fun(value, key){
                    if (isValidStyleValue(value)) {
                        result.push("" + toKebabCase(key) + ":" + value)
                    }
                }
                )
            }
            i++
        }
    }
    return result.join(";")
}
fun isNumber(value: Any?): Boolean {
    return _uA(
        "Byte",
        "UByte",
        "Short",
        "UShort",
        "Int",
        "UInt",
        "Long",
        "ULong",
        "Float",
        "Double",
        "number"
    ).includes(UTSAndroid.`typeof`(value))
}
fun isString(str: Any?): Boolean {
    return UTSAndroid.`typeof`(str) == "string"
}
fun isNumeric(value: Any?): Boolean {
    if (value == null) {
        return false
    }
    if (isNumber(value)) {
        return true
    } else if (isString(value)) {
        val regex = UTSRegExp("^(-)?\\d+(\\.\\d+)?\$")
        return regex.test(value as String)
    }
    return false
}
fun isDef(value: Any?): Boolean {
    return value != null
}
fun addUnit(value: String): String? {
    return addUnit(value as Any?)
}
fun addUnit(value: Number): String? {
    return addUnit(value as Any?)
}
fun addUnit(reassignedValue: Any?): String? {
    var value = reassignedValue
    if (!isDef(value)) {
        return null
    }
    value = "" + value
    return if (isNumeric(value)) {
        "" + value as String + "px"
    } else {
        value as String
    }
}
interface IconProps {
    var name: String
    var color: String?
    var size: Any?
    var prefix: String
    var inherit: Boolean
    var web: Boolean
    var lClass: Any?
    var lStyle: Any?
}
val GenUniModulesLimeIconComponentsLIconLIconClass = CreateVueComponent(GenUniModulesLimeIconComponentsLIconLIcon::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenUniModulesLimeIconComponentsLIconLIcon.inheritAttrs, inject = GenUniModulesLimeIconComponentsLIconLIcon.inject, props = GenUniModulesLimeIconComponentsLIconLIcon.props, propsNeedCastKeys = GenUniModulesLimeIconComponentsLIconLIcon.propsNeedCastKeys, emits = GenUniModulesLimeIconComponentsLIconLIcon.emits, components = GenUniModulesLimeIconComponentsLIconLIcon.components, styles = GenUniModulesLimeIconComponentsLIconLIcon.styles, styleIsolation = UniSharedDataComponentStyleIsolation.App, externalClasses = _uA(
        "lClass"
    ), setup = fun(props: ComponentPublicInstance): Any? {
        return GenUniModulesLimeIconComponentsLIconLIcon.setup(props as GenUniModulesLimeIconComponentsLIconLIcon)
    }
    )
}
, fun(instance, renderer): GenUniModulesLimeIconComponentsLIconLIcon {
    return GenUniModulesLimeIconComponentsLIconLIcon(instance)
}
)
val GenSrcPagesBasicComponentsIconDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsIconDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsIconDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsIconDemoCard.inject, props = GenSrcPagesBasicComponentsIconDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsIconDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsIconDemoCard.emits, components = GenSrcPagesBasicComponentsIconDemoCard.components, styles = GenSrcPagesBasicComponentsIconDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsIconDemoCard.setup(props as GenSrcPagesBasicComponentsIconDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsIconDemoCard {
    return GenSrcPagesBasicComponentsIconDemoCard(instance)
}
)
val GenSrcPagesBasicComponentsLangSwitchCardClass = CreateVueComponent(GenSrcPagesBasicComponentsLangSwitchCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsLangSwitchCard.inheritAttrs, inject = GenSrcPagesBasicComponentsLangSwitchCard.inject, props = GenSrcPagesBasicComponentsLangSwitchCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsLangSwitchCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsLangSwitchCard.emits, components = GenSrcPagesBasicComponentsLangSwitchCard.components, styles = GenSrcPagesBasicComponentsLangSwitchCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsLangSwitchCard.setup(props as GenSrcPagesBasicComponentsLangSwitchCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsLangSwitchCard {
    return GenSrcPagesBasicComponentsLangSwitchCard(instance)
}
)
open class ThemeModeOption (
    @JsonNotNull
    open var value: String,
    @JsonNotNull
    open var label: String,
) : UTSObject()
val GenSrcPagesBasicComponentsThemeSwitchCardClass = CreateVueComponent(GenSrcPagesBasicComponentsThemeSwitchCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsThemeSwitchCard.inheritAttrs, inject = GenSrcPagesBasicComponentsThemeSwitchCard.inject, props = GenSrcPagesBasicComponentsThemeSwitchCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsThemeSwitchCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsThemeSwitchCard.emits, components = GenSrcPagesBasicComponentsThemeSwitchCard.components, styles = GenSrcPagesBasicComponentsThemeSwitchCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsThemeSwitchCard.setup(props as GenSrcPagesBasicComponentsThemeSwitchCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsThemeSwitchCard {
    return GenSrcPagesBasicComponentsThemeSwitchCard(instance)
}
)
val GenSrcPagesBasicComponentsRouterDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsRouterDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsRouterDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsRouterDemoCard.inject, props = GenSrcPagesBasicComponentsRouterDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsRouterDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsRouterDemoCard.emits, components = GenSrcPagesBasicComponentsRouterDemoCard.components, styles = GenSrcPagesBasicComponentsRouterDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsRouterDemoCard.setup(props as GenSrcPagesBasicComponentsRouterDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsRouterDemoCard {
    return GenSrcPagesBasicComponentsRouterDemoCard(instance)
}
)
interface IURLSearchParams {
    val size: Number
    fun append(key: String, value: String)
    fun `delete`(key: String)
    fun get(key: String): String?
    fun getAll(key: String): UTSArray<String>
    fun has(key: String): Boolean
    fun set(key: String, value: String)
    fun forEach(callback: (value: String, key: String, parent: IURLSearchParams) -> Unit, thisArg: Any?)
    fun entries(): UTSArray<UTSArray<String>>
    fun keys(): UTSArray<String>
    fun values(): UTSArray<String>
    fun valueIterator(): UTSIterator<Any?>
    fun sort()
}
open class LimeRequestSource (
    open var url: String? = null,
    open var baseURL: String? = null,
    open var path: String? = null,
    open var method: String? = null,
    open var timestamp: Number? = null,
) : UTSObject()
open class LimeRequestFail (
    @JsonNotNull
    open var errCode: Number,
    @JsonNotNull
    open var errSubject: String,
    open var data: Any? = null,
    open var cause: UTSError? = null,
    @JsonNotNull
    open var errMsg: String,
    open var source: LimeRequestSource? = null,
) : UTSObject()
interface LimeRequestResponse<T> {
    var data: T?
    var statusCode: Number
    var header: Any
    var cookies: UTSArray<String>
    var config: LimeRequestConfig
    var errMsg: String
    var tempFilePath: String
    var apFilePath: String
    var filePath: String
    var fileContent: Any?
}
typealias LimeeRequestRejected = (error: LimeRequestFail) -> Any
open class LimeRequestHandler<T> (
    open var fulfilled: (value: T) -> Any,
    open var rejected: LimeeRequestRejected? = null,
) : UTSObject()
open class LimeReducerFactoryResult<T> (
    open var use: (onFulfilled: (value: T) -> Any, onRejected: LimeeRequestRejected?) -> Unit,
    open var resolve: (data: T) -> UTSPromise<T>,
    open var reject: (error: LimeRequestFail) -> UTSPromise<LimeRequestFail>,
) : UTSObject()
open class LimeInterceptors<T, U> (
    @JsonNotNull
    open var request: LimeReducerFactoryResult<T>,
    @JsonNotNull
    open var response: LimeReducerFactoryResult<U>,
) : UTSObject()
typealias LimeRequestTask = Any
open class LimeRequestConfig (
    open var baseURL: String? = null,
    open var params: UTSJSONObject? = null,
    open var getTask: ((task: LimeRequestTask) -> Unit)? = null,
    open var data: Any? = null,
    open var extra: UTSJSONObject? = null,
    open var url: String? = null,
    open var header: UTSJSONObject? = null,
    open var method: String? = null,
    open var timeout: Number? = null,
    open var dataType: String? = null,
    open var responseType: String? = null,
    open var sslVerify: Boolean? = null,
    open var withCredentials: Boolean? = null,
    open var firstIpv4: Boolean? = null,
    open var enableHttp2: Boolean? = null,
    open var enableQuic: Boolean? = null,
    open var enableCache: Boolean? = null,
    open var enableHttpDNS: Boolean? = null,
    open var httpDNSServiceId: Boolean? = null,
    open var enableChunked: Boolean? = null,
    open var forceCellularNetwork: Boolean? = null,
    open var enableCookie: Boolean? = null,
    open var cloudCache: Any? = null,
    open var defer: Boolean? = null,
    open var files: UTSArray<UploadFileOptionFiles>? = null,
    open var fileType: String? = null,
    open var filePath: String? = null,
    open var name: String? = null,
    open var formData: UTSJSONObject? = null,
) : UTSObject()
open class URLSearchParams : UTSValueIterable<Any?>, IURLSearchParams {
    private var _params: UTSArray<UTSArray<String>> = _uA()
    override fun valueIterator(): UTSIterator<Any?> {
        var index: Number = 0
        val entries = this._params
        var obj = UTSIterator(next = fun(): UTSIteratorResult<Any?> {
            return if (index < entries.length) {
                UTSIteratorResult(value = entries[index++], done = false)
            } else {
                UTSIteratorResult(value = null, done = true)
            }
        }
        )
        return obj
    }
    constructor(init: Any? = null){
        if (init != null) {
            if (UTSAndroid.`typeof`(init) == "string") {
                this.parseString(init as String)
            } else if (UTSArray.isArray(init)) {
                (init as UTSArray<*>).forEach(fun(item){
                    if (UTSArray.isArray(item) && (item as UTSArray<Any>).length > 1) {
                        this.append("" + (item as UTSArray<Any>)[0], "" + (item as UTSArray<Any>)[1])
                    }
                })
            } else if (UTSAndroid.`typeof`(init) == "object") {
                (init as UTSJSONObject).toMap().forEach(fun(value, name){
                    this.append(name, "" + (value ?: ""))
                }
                )
            }
        }
    }
    private fun parseString(reassignedQuery: String) {
        var query = reassignedQuery
        if (query.startsWith("?")) {
            query = query.slice(1)
        }
        query.split("&").forEach(fun(pair){
            val arr = pair.split("=").map(fun(s): String? {
                return this.decode(s)
            }
            )
            if (arr[0] != null && arr[0]!!.length > 0) {
                this.append(arr[0]!!, if (arr.length > 1) {
                    arr[1]!!
                } else {
                    ""
                }
                )
            }
        }
        )
    }
    private fun encode(str: String): String? {
        return encodeURIComponent(str)?.replace(UTSRegExp("%20", "g"), "+")?.replace(UTSRegExp("%21", "g"), "!")?.replace(UTSRegExp("%27", "g"), "'")?.replace(UTSRegExp("%28", "g"), "(")?.replace(UTSRegExp("%29", "g"), ")")?.replace(UTSRegExp("%2A", "g"), "*")?.replace(UTSRegExp("%2D", "g"), "-")?.replace(UTSRegExp("%5F", "g"), "_")?.replace(UTSRegExp("%2E", "g"), ".")?.replace(UTSRegExp("%7E", "g"), "~")
    }
    private fun decode(str: String): String? {
        return decodeURIComponent(str.replace(UTSRegExp("\\+", "g"), " "))
    }
    override fun append(key: String, value: String) {
        this._params.push(_uA(
            "" + key,
            "" + value
        ))
    }
    override fun `delete`(key: String) {
        val k = "" + key
        this._params = this._params.filter(fun(pair): Boolean {
            return pair[0] != k
        }
        )
    }
    override fun get(key: String): String? {
        val entry = this._params.find(fun(pair): Boolean {
            return pair[0] == "" + key
        }
        )
        return if (entry != null) {
            entry[1]
        } else {
            null
        }
    }
    override fun getAll(key: String): UTSArray<String> {
        return this._params.filter(fun(pair): Boolean {
            return pair[0] == "" + key
        }
        ).map(fun(pair): String {
            return pair[1]
        }
        )
    }
    override fun has(key: String): Boolean {
        return this._params.some(fun(pair): Boolean {
            return pair[0] == "" + key
        }
        )
    }
    override fun set(key: String, value: String) {
        this.`delete`(key)
        this.append(key, value)
    }
    private fun _toString(): String {
        return this._params.map(fun(pair): String {
            return "" + this.encode(pair[0]) + "=" + this.encode(pair[1])
        }
        ).join("&")
    }
    override fun toString(): String {
        return this._toString()
    }
    override val size: Number
        get(): Number {
            return this._params.length
        }
    override fun forEach(callback: (value: String, key: String, searchParams: IURLSearchParams) -> Unit, thisArg: Any?) {
        this._params.forEach(fun(pair){
            callback(pair[1], pair[0], this)
        }
        )
    }
    override fun entries(): UTSArray<UTSArray<String>> {
        return this._params
    }
    override fun sort(): Unit {
        this._params.sort()
    }
    override fun values(): UTSArray<String> {
        return this._params.map(fun(pair): String {
            return pair[1]
        }
        )
    }
    override fun keys(): UTSArray<String> {
        return this._params.map(fun(pair): String {
            return pair[0]
        }
        )
    }
}
@Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
fun mergeConfig(vararg spreadConfigs: LimeRequestConfig): LimeRequestConfig {
    var configs = UTSArray(*spreadConfigs)
    return configs.reduce(fun(result, config): LimeRequestConfig {
        val _result = result
        for(key in resolveUTSKeyIterator(config)){
            if (config[key] != null) {
                _result[key] = config[key]
            }
        }
        return _result
    }
    , LimeRequestConfig())
}
fun mergeSearchParams(search: String, query: URLSearchParams): String {
    val originalParams = URLSearchParams(search)
    val mergedParams = URLSearchParams()
    originalParams.entries().forEach(fun(ref__1){
        var key = ref__1[0]
        var value = ref__1[1]
        mergedParams.append(key, value)
    }
    )
    query.entries().forEach(fun(ref__1){
        var key = ref__1[0]
        var value = ref__1[1]
        if (mergedParams.has(key)) {
            mergedParams.set(key, value)
        } else {
            mergedParams.append(key, value)
        }
    }
    )
    return mergedParams.toString()
}
fun mergeUrl(baseURL: String?, url: String?, params: UTSJSONObject?): String {
    var _baseURL = baseURL ?: ""
    var _url = url ?: ""
    var mergedUrl = ""
    if (UTSRegExp("^(https?:)?\\/\\/", "").test(_url)) {
        mergedUrl = url ?: ""
    } else if (_baseURL != "" && _url != "") {
        mergedUrl = _baseURL.replace(UTSRegExp("\\/*\$", ""), "") + _url
    } else if (_baseURL != "") {
        mergedUrl = _baseURL!!
    } else if (_url != "") {
        mergedUrl = _url!!
    }
    if (params != null) {
        val query = URLSearchParams(params)
        val index = mergedUrl.indexOf("?")
        if (index != -1) {
            val originPath = mergedUrl.slice(0, index)
            val search = mergedUrl.slice(index)
            mergedUrl = originPath + "?" + mergeSearchParams(search, query)
        } else {
            mergedUrl += "?" + query.toString()
        }
    }
    return mergedUrl
}
fun <T> reducerFactory(): LimeReducerFactoryResult<T> {
    val handlers: UTSArray<LimeRequestHandler<T>> = _uA()
    val use = fun(onFulfilled: (value: T) -> Any, onRejected: ((error: LimeRequestFail) -> Any)?){
        handlers.push(LimeRequestHandler(fulfilled = onFulfilled, rejected = onRejected))
    }
    val resolve = fun(data: T): UTSPromise<T> {
        return wrapUTSPromise(suspend w1@{
                var _data = data
                for(ref__1 in resolveUTSValueIterator(handlers)){
                    var fulfilled = ref__1.fulfilled
                    try {
                        _data = await(fulfilled(data)) as T
                    }
                     catch (err: UTSError) {
                        val error = LimeRequestFail(errCode = 0, errSubject = "lime-request", data = null, cause = err, errMsg = err.message)
                        return@w1 UTSPromise.reject(error)
                    }
                }
                return@w1 UTSPromise.resolve(_data)
        })
    }
    val reject = fun(reassignedError: LimeRequestFail): UTSPromise<LimeRequestFail> {
        var error = reassignedError
        return wrapUTSPromise(suspend w1@{
                for(ref__1 in resolveUTSValueIterator(handlers)){
                    var rejected = ref__1.rejected
                    try {
                        if (rejected != null) {
                            val data = await(rejected(error))
                            return@w1 UTSPromise.resolve(data)
                        }
                    }
                     catch (newError: UTSError) {
                        error = LimeRequestFail(errCode = 0, errSubject = "lime-request", data = null, cause = newError, errMsg = newError.message)
                    }
                }
                return@w1 UTSPromise.reject(error)
        })
    }
    return LimeReducerFactoryResult(use = use, resolve = resolve, reject = reject)
}
fun <T, U> createInterceptors(): LimeInterceptors<T, U> {
    return LimeInterceptors(request = reducerFactory<T>(), response = reducerFactory<U>())
}
fun isJSON(str: String): Boolean {
    val trimmed = str.trim()
    if (!(trimmed.startsWith("{") || trimmed.startsWith("["))) {
        return false
    }
    if (!UTSRegExp("^[\\{\\[\\}\\],:\"]", "").test(trimmed)) {
        return false
    }
    try {
        JSON.parse(str)
        return true
    }
     catch (e: Throwable) {
        return false
    }
}
open class LimeResponseImpl<T> : LimeRequestResponse<T> {
    override var data: T? = null
    override lateinit var statusCode: Number
    override lateinit var header: Any
    override lateinit var cookies: UTSArray<String>
    override lateinit var config: LimeRequestConfig
    override lateinit var errMsg: String
    override lateinit var tempFilePath: String
    override lateinit var apFilePath: String
    override lateinit var filePath: String
    override var fileContent: Any? = null
    constructor(data: T?, statusCode: Number, header: Any, cookies: UTSArray<String>, config: LimeRequestConfig, errMsg: String, tempFilePath: String, apFilePath: String, filePath: String, fileContent: Any?){
        this.data = data
        this.statusCode = statusCode
        this.header = header
        this.cookies = cookies
        this.config = config
        this.errMsg = errMsg
        this.tempFilePath = tempFilePath
        this.apFilePath = apFilePath
        this.filePath = filePath
        this.fileContent = fileContent
    }
}
open class Request {
    open lateinit var defaultConfig: LimeRequestConfig
    open lateinit var interceptors: LimeInterceptors<LimeRequestConfig, LimeRequestResponse<Any>>
    constructor(config: LimeRequestConfig){
        val defaultRequestConfig = LimeRequestConfig(baseURL = "")
        this.defaultConfig = mergeConfig(defaultRequestConfig, config)
        this.interceptors = createInterceptors<LimeRequestConfig, LimeRequestResponse<Any>>()
    }
    open fun <T> request(config: LimeRequestConfig): UTSPromise<LimeRequestResponse<T>> {
        return UTSPromise(fun(resolve, reject){
            var interceptors = this.interceptors as LimeInterceptors<LimeRequestConfig, LimeRequestResponse<T>>
            val _config = mergeConfig(this.defaultConfig, config)
            interceptors.request.resolve(_config).then(fun(config: Any){
                val _ref = config as LimeRequestConfig
                val baseURL = _ref.baseURL
                val params = _ref.params
                val getTask = _ref.getTask
                val url = _ref.url
                val mergedUrl = mergeUrl(baseURL, url, params)
                var task: LimeRequestTask?
                val errMsg = "lime-request " + config.method + " ok"
                when (config.method) {
                    "DOWNLOAD" -> 
                        task = uni_downloadFile(DownloadFileOptions(url = mergedUrl, header = config.header, filePath = config.filePath, timeout = config.timeout ?: 120000, success = fun(result) {
                            val tempFilePath = result.tempFilePath
                            val statusCode = result.statusCode
                            val apFilePath = ""
                            val filePath = ""
                            val fileContent = ""
                            val res = LimeResponseImpl<T>("" as T, statusCode, "", _uA(), config, errMsg, tempFilePath, apFilePath, filePath, fileContent)
                            interceptors.response.resolve(res).then(resolve, reject)
                        }
                        , fail = fun(error) {
                            val err = LimeRequestFail(errCode = error.errCode, errSubject = "lime-request", data = error.data, cause = error.cause, errMsg = error.errMsg)
                            interceptors.response.reject(err).then(fun(res: LimeRequestFail){
                                reject(res)
                            }
                            , reject)
                        }
                        )) as DownloadTask
                    "UPLOAD" -> 
                        task = uni_uploadFile(UploadFileOptions(url = mergedUrl, filePath = config.filePath, name = config.name, files = config.files, header = config.header, formData = config.formData, timeout = config.timeout ?: 60000, success = fun(result) {
                            val data = result.data
                            val statusCode = result.statusCode
                            val tempFilePath = ""
                            val apFilePath = ""
                            val filePath = ""
                            val fileContent = ""
                            val res = LimeResponseImpl<T>(data as T, statusCode, "", _uA(), config, errMsg, tempFilePath, apFilePath, filePath, fileContent)
                            interceptors.response.resolve(res).then(resolve, reject)
                        }
                        , fail = fun(error) {
                            val err = LimeRequestFail(errCode = error.errCode, errSubject = "lime-request", data = error.data, cause = error.cause, errMsg = error.errMsg)
                            interceptors.response.reject(err).then(fun(res: LimeRequestFail){
                                reject(res)
                            }
                            , reject)
                        }
                        )) as UploadTask
                    else -> 
                        {
                            var data: Any? = config.data
                            if (isRef(data)) {
                                data = unref(data)
                            }
                            if (isReactive(data)) {
                                data = UTSJSONObject.assign(_uO(), toRaw(data))
                            }
                            task = uni_request<Any>(RequestOptions(url = mergedUrl, data = data, header = config.header, method = config.method, timeout = config.timeout ?: 60000, withCredentials = config.withCredentials, firstIpv4 = config.firstIpv4, enableChunked = config.enableChunked, success = fun(result: RequestSuccess<Any>) {
                                val _ref = result as RequestSuccess<Any>
                                val data = _ref.data
                                val statusCode = _ref.statusCode
                                val header = _ref.header
                                val cookies = _ref.cookies
                                val tempFilePath = ""
                                val apFilePath = ""
                                val filePath = ""
                                val fileContent = ""
                                var parsedData = data
                                if (UTSAndroid.`typeof`(data) == "string") {
                                    try {
                                        if (isJSON(data as String)) {
                                            parsedData = JSON.parse(data as String)
                                        }
                                    }
                                     catch (error: Throwable) {}
                                }
                                val res = LimeResponseImpl<T>(parsedData as T, statusCode, header, cookies, config, errMsg, tempFilePath, apFilePath, filePath, fileContent)
                                interceptors.response.resolve(res).then(resolve, reject)
                            }
                            , fail = fun(error) {
                                val source = LimeRequestSource(url = mergedUrl, baseURL = baseURL, path = url, method = config.method)
                                val err = LimeRequestFail(errCode = error.errCode, errSubject = "lime-request", data = error.data, cause = error.cause, errMsg = error.errMsg, source = source)
                                interceptors.response.reject(err).then(fun(res: LimeRequestFail){
                                    reject(res)
                                }
                                , reject)
                                reject(err)
                            }
                            )) as RequestTask
                        }
                }
                if (getTask != null) {
                    getTask(task!!)
                }
            }
            ).`catch`(reject)
        }
        )
    }
    open fun <T> get(url: String, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "GET"
        return this.request<T>(_config)
    }
    open fun <T> head(url: String, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "HEAD"
        return this.request<T>(_config)
    }
    open fun <T> connect(url: String, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "CONNECT"
        return this.request<T>(_config)
    }
    open fun <T> trace(url: String, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "TRACE"
        return this.request<T>(_config)
    }
    open fun <T> post(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "POST"
        return this.request<T>(_config)
    }
    open fun <T> put(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "PUT"
        return this.request<T>(_config)
    }
    open fun <T> `delete`(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "DELETE"
        return this.request<T>(_config)
    }
    open fun <T> options(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<T>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "OPTIONS"
        return this.request<T>(_config)
    }
    open fun upload(url: String, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<Any>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "UPLOAD"
        return this.request(_config)
    }
    open fun download(url: String, config: LimeRequestConfig? = null): UTSPromise<LimeRequestResponse<Any>> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "DOWNLOAD"
        return this.request(_config)
    }
}
var lastRedirectTime: Number = 0
fun toLoginPage(options: UTSJSONObject? = null) {
    val now = Date.now()
    if (now - lastRedirectTime < 1000) {
        return
    }
    lastRedirectTime = now
    val opts = options ?: (_uO())
    val mode = opts["mode"] as String? ?: "navigateTo"
    val queryString = opts["queryString"] as String? ?: ""
    val LOGIN_PAGE = "/src/pages/auth/login"
    val url = "" + LOGIN_PAGE + queryString
    val pages = getCurrentPages()
    if (pages.length > 0) {
        val currentRoute = pages[pages.length - 1].route
        val currentPath = if (currentRoute.startsWith("/")) {
            currentRoute
        } else {
            "/" + currentRoute
        }
        if (currentPath === LOGIN_PAGE) {
            return
        }
    }
    if (mode === "navigateTo") {
        uni_navigateTo(NavigateToOptions(url = url))
    } else {
        uni_reLaunch(ReLaunchOptions(url = url))
    }
}
val ResultEnum: UTSJSONObject = _uO("Success0" to 0, "Success200" to 200, "RequestError" to 400, "Unauthorized" to 401, "Forbidden" to 403, "NotFound" to 404, "MethodNotAllowed" to 405, "RequestTimeout" to 408, "InternalServerError" to 500, "NotImplemented" to 501, "BadGateway" to 502, "ServiceUnavailable" to 503, "GatewayTimeout" to 504, "HttpVersionNotSupported" to 505)
val ContentTypeEnum: UTSJSONObject = _uO("AppJson" to "application/json;charset=UTF-8", "FormUrlEncoded" to "application/x-www-form-urlencoded;charset=UTF-8", "FormData" to "multipart/form-data;charset=UTF-8")
fun ShowMessage(status: Number): String {
    var message: String
    when (status) {
        400 -> 
            message = "请求错误(400)"
        401 -> 
            message = "未授权，请重新登录(401)"
        403 -> 
            message = "拒绝访问(403)"
        404 -> 
            message = "请求出错(404)"
        408 -> 
            message = "请求超时(408)"
        500 -> 
            message = "服务器错误(500)"
        501 -> 
            message = "服务未实现(501)"
        502 -> 
            message = "网络错误(502)"
        503 -> 
            message = "服务不可用(503)"
        504 -> 
            message = "网络超时(504)"
        505 -> 
            message = "HTTP版本不受支持(505)"
        else -> 
            message = "连接出错(" + status + ")!"
    }
    return "" + message + "，请检查网络或联系管理员！"
}
val DEFAULT_API_URL: String = "https://ukw0y1.laf.run"
val directBaseUrl: String = "" + ("https://ukw0y1.laf.run" ?: DEFAULT_API_URL)
val directSecondaryUrl: String = "" + ("https://ukw0y1.laf.run" ?: DEFAULT_API_URL)
val defaultUrl: String = if (directBaseUrl.startsWith("/")) {
    DEFAULT_API_URL
} else {
    directBaseUrl
}
val secondaryUrl: String = if (directSecondaryUrl.startsWith("/")) {
    DEFAULT_API_URL
} else {
    directSecondaryUrl
}
open class ApiDomainConfig (
    @JsonNotNull
    open var DEFAULT: String,
    @JsonNotNull
    open var SECONDARY: String,
) : UTSObject()
val API_DOMAINS = ApiDomainConfig(DEFAULT = defaultUrl, SECONDARY = secondaryUrl)
val requestInstance = Request(LimeRequestConfig(baseURL = API_DOMAINS.DEFAULT, timeout = 5000, header = _uO("Content-Type" to ContentTypeEnum["AppJson"], "Accept" to "application/json, text/plain, */*")))
val runBlock5 = run {
    requestInstance.interceptors.request.use(fun(config: LimeRequestConfig): LimeRequestConfig {
        if (config.header == null) {
            config.header = _uO()
        }
        val header = config.header as UTSJSONObject
        if (config.method != "UPLOAD" && header["Content-Type"] == null) {
            header["Content-Type"] = ContentTypeEnum["AppJson"]
        }
        if (header["Accept"] == null) {
            header["Accept"] = "application/json, text/plain, */*"
        }
        val extra = config.extra
        var ignoreAuth = false
        if (extra != null) {
            val authVal = (extra as UTSJSONObject).getBoolean("ignoreAuth")
            if (authVal == true) {
                ignoreAuth = true
            }
        }
        if (!ignoreAuth) {
            val tokenStore = useTokenStore()
            val token = tokenStore.getToken()
            if (token === "") {
                throw UTSError("[请求错误]：未登录")
            }
            header["token"] = token
        }
        if (extra != null) {
            val domain = (extra as UTSJSONObject)["domain"] as String?
            if (domain != null) {
                config.baseURL = domain
            }
        }
        return config
    }
    , fun(error: LimeRequestFail): UTSPromise<LimeRequestFail> {
        return UTSPromise.reject(error) as UTSPromise<LimeRequestFail>
    }
    )
    requestInstance.interceptors.response.use(fun(response: LimeRequestResponse<Any>): LimeRequestResponse<Any> {
        val config = response.config
        val extra = config.extra
        val method = config.method
        if (method === "UPLOAD" || method === "DOWNLOAD") {
            return response
        }
        val statusCode = response.statusCode
        if (statusCode != 200) {
            val errorMessage = ShowMessage(statusCode)
            console.error("errorMessage===>", errorMessage)
            uni_showToast(ShowToastOptions(title = errorMessage, icon = "error"))
            if (statusCode == 401) {
                val tokenStore = useTokenStore()
                tokenStore.clearToken()
                toLoginPage(_uO("mode" to "reLaunch"))
            }
            throw UTSError("" + errorMessage + "：" + response.errMsg)
        }
        val rawData = response.data
        if (rawData == null) {
            throw UTSError("返回的响应数据为空")
        }
        val resultObj = JSON.parseObject(JSON.stringify(rawData))
        if (resultObj != null) {
            val code = resultObj.getNumber("code")
            val msgByKey = resultObj["message"] as String?
            val msgByMsg = resultObj["msg"] as String?
            val message: String = if (msgByKey != null) {
                msgByKey
            } else {
                if (msgByMsg != null) {
                    msgByMsg
                } else {
                    "未知错误"
                }
            }
            if (code != null) {
                val codeVal = code as Number
                if (codeVal !== ResultEnum["Success0"] && codeVal !== ResultEnum["Success200"]) {
                    var toastEnabled = true
                    if (extra != null) {
                        val toastVal = (extra as UTSJSONObject).getBoolean("toast")
                        if (toastVal == false) {
                            toastEnabled = false
                        }
                    }
                    if (toastEnabled) {
                        uni_showToast(ShowToastOptions(title = message, icon = "none"))
                    }
                    if (codeVal === ResultEnum["Unauthorized"]) {
                        val tokenStore = useTokenStore()
                        tokenStore.clearToken()
                        toLoginPage(_uO("mode" to "reLaunch"))
                    }
                    throw UTSError("请求错误[" + codeVal + "]：" + message)
                }
            }
        }
        return response
    }
    , fun(error: LimeRequestFail): UTSPromise<LimeRequestFail> {
        console.error("request error ===>", error)
        uni_showToast(ShowToastOptions(title = "网络错误，请稍后再试", icon = "none"))
        return UTSPromise.reject(error) as UTSPromise<LimeRequestFail>
    }
    )
}
open class HttpClient {
    open fun <T> request(config: LimeRequestConfig): UTSPromise<T> {
        return requestInstance.request<Any>(config).then(fun(res: LimeRequestResponse<Any>): T {
            val rawData = res.data
            if (rawData == null) {
                throw UTSError("响应数据为空")
            }
            val obj = JSON.parseObject(JSON.stringify(rawData))
            if (obj != null) {
                val code = obj.getNumber("code")
                if (code != null) {
                    val innerData = obj.get("data")
                    if (innerData != null) {
                        return innerData as T
                    }
                    throw UTSError("响应结构包含 code，但 data 字段为空")
                }
            }
            return rawData as T
        }
        )
    }
    open fun <T> get(url: String, config: LimeRequestConfig? = null): UTSPromise<T> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.method = "GET"
        return this.request<T>(_config)
    }
    open fun <T> post(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<T> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "POST"
        return this.request<T>(_config)
    }
    open fun <T> put(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<T> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "PUT"
        return this.request<T>(_config)
    }
    open fun <T> `delete`(url: String, data: Any? = null, config: LimeRequestConfig? = null): UTSPromise<T> {
        val _config = (config ?: LimeRequestConfig()) as LimeRequestConfig
        _config.url = url
        _config.data = data
        _config.method = "DELETE"
        return this.request<T>(_config)
    }
    open fun <T> upload(url: String, config: LimeRequestConfig? = null): UTSPromise<T> {
        return requestInstance.upload(url, config).then(fun(res: LimeRequestResponse<Any>): T {
            val rawData = res.data
            if (rawData == null) {
                throw UTSError("上传响应为空")
            }
            return rawData as T
        }
        )
    }
}
val http = HttpClient()
open class UploadFileOptions__1 (
    open var url: String? = null,
    @JsonNotNull
    open var filePath: String,
    open var name: String? = null,
    open var header: UTSJSONObject? = null,
    open var formData: UTSJSONObject? = null,
    open var ignoreAuth: Boolean? = null,
    open var onProgress: ((progress: Number) -> Unit)? = null,
) : UTSObject()
val DEFAULT_FALLBACK_BASE_URL: String = "https://xxx.com"
val DEFAULT_FALLBACK_UPLOAD_PATH: String = "/gateway/user/sys/oss/upload/xxx"
val DEFAULT_OSS_BASE_URL: String = "" + ("https://xxx.com" ?: DEFAULT_FALLBACK_BASE_URL)
val DEFAULT_OSS_UPLOAD_PATH: String = "" + ("/gateway/user/sys/oss/upload/xxx" ?: DEFAULT_FALLBACK_UPLOAD_PATH)
val DEFAULT_OSS_UPLOAD_URL: String = "" + DEFAULT_OSS_BASE_URL + DEFAULT_OSS_UPLOAD_PATH
fun uploadFile(options: UploadFileOptions__1): UTSPromise<String> {
    return UTSPromise(fun(resolve, reject){
        var finalUrl = options.url ?: DEFAULT_OSS_UPLOAD_URL
        if (finalUrl.startsWith("/")) {
            finalUrl = "" + DEFAULT_OSS_BASE_URL + finalUrl
        }
        val header = options.header ?: (_uO())
        if (options.ignoreAuth != true) {
            val tokenStore = useTokenStore()
            val token = tokenStore.getToken()
            if (token != "") {
                header["token"] = token
            }
        }
        val uploadTask = uni_uploadFile(UploadFileOptions(url = finalUrl, filePath = options.filePath, name = options.name ?: "file", header = header, formData = options.formData ?: (_uO()), success = fun(res){
            val statusCode = res.statusCode
            if (statusCode != 200) {
                reject(UTSError("上传请求失败，HTTP 状态码: " + statusCode))
                return
            }
            try {
                val url = parseUploadResult(res.data)
                resolve(url)
            }
             catch (e: Throwable) {
                reject(if (e is UTSError) {
                    (e as UTSError)
                } else {
                    UTSError("" + e)
                }
                )
            }
        }
        , fail = fun(err){
            console.error("uni.uploadFile fail:", err)
            reject(UTSError(err.errMsg ?: "文件上传失败"))
        }
        ))
        if (options.onProgress != null) {
            uploadTask.onProgressUpdate(fun(res){
                options.onProgress!!(res.progress)
            }
            )
        }
    }
    )
}
fun parseUploadResult(raw: String): String {
    val trimmed = raw.trim()
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
        return trimmed
    }
    val obj = JSON.parseObject(trimmed)
    if (obj == null) {
        return trimmed
    }
    val successVal = obj.getBoolean("success")
    if (successVal == false) {
        val msg = obj.getString("msg") ?: obj.getString("message") ?: "上传业务失败"
        val code = obj.getString("code") ?: (if (obj.getNumber("code") != null) {
            "" + obj.getNumber("code")
        } else {
            ""
        }
        )
        throw UTSError("上传失败" + (if (code != "") {
            "[" + code + "]"
        } else {
            ""
        }
        ) + "：" + msg)
    }
    if (successVal != true) {
        val numCode = obj.getNumber("code")
        val strCode = obj.getString("code")
        var isFailed = false
        var codeStr = ""
        if (numCode != null) {
            codeStr = "" + numCode
            if (numCode != 200 && numCode != 0 && numCode != 10000) {
                isFailed = true
            }
        } else if (strCode != null) {
            codeStr = strCode
            if (strCode != "200" && strCode != "0" && strCode != "10000" && strCode != "000000" && strCode != "SUCCESS" && strCode != "OK") {
                isFailed = true
            }
        }
        if (isFailed) {
            val msg = obj.getString("msg") ?: obj.getString("message") ?: "上传失败"
            throw UTSError("上传失败[" + codeStr + "]：" + msg)
        }
    }
    val topUrl = obj.getString("url")
    if (topUrl != null && topUrl != "") {
        return topUrl
    }
    val data = obj.get("data")
    if (data != null) {
        if (UTSAndroid.`typeof`(data) == "string") {
            val dataStr = (data as String).trim()
            if (dataStr != "" && dataStr != "null") {
                return dataStr
            }
        }
        val dataObj = data as UTSJSONObject
        val dataUrl = dataObj.getString("url") ?: dataObj.getString("fileUrl") ?: dataObj.getString("ossUrl") ?: dataObj.getString("path") ?: dataObj.getString("link")
        if (dataUrl != null && dataUrl != "") {
            return dataUrl
        }
    }
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
        throw UTSError("上传成功但未能从响应中解析出文件 URL 地址")
    }
    return trimmed
}
val FOO_UPLOAD_PATH: String = DEFAULT_OSS_UPLOAD_PATH
open class IFoo (
    open var id: Any? = null,
    @JsonNotNull
    open var name: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return IFooReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class IFooReactiveObject : IFoo, IUTSReactive<IFoo> {
    override var __v_raw: IFoo
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: IFoo, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(id = __v_raw.id, name = __v_raw.name) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): IFooReactiveObject {
        return IFooReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var id: Any?
        get() {
            return _tRG(__v_raw, "id", __v_raw.id, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("id")) {
                return
            }
            val oldValue = __v_raw.id
            __v_raw.id = value
            _tRS(__v_raw, "id", oldValue, value)
        }
    override var name: String
        get() {
            return _tRG(__v_raw, "name", __v_raw.name, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("name")) {
                return
            }
            val oldValue = __v_raw.name
            __v_raw.name = value
            _tRS(__v_raw, "name", oldValue, value)
        }
}
val MOCK_FOO_LIST = _uA(
    IFoo(id = 1, name = "unix"),
    IFoo(id = 2, name = "UnibestX"),
    IFoo(id = 3, name = "lime-request")
) as UTSArray<IFoo>
fun getFooList(_params: UTSJSONObject? = null): UTSPromise<UTSArray<IFoo>> {
    return UTSPromise.resolve(MOCK_FOO_LIST)
}
fun foo(): UTSPromise<IFoo> {
    return http.get<UTSJSONObject>("/foo", LimeRequestConfig(params = _uO("name" to "unix", "page" to 1, "pageSize" to 10), baseURL = API_DOMAINS.SECONDARY, extra = _uO("ignoreAuth" to true))).then(fun(data: UTSJSONObject): IFoo {
        return IFoo(id = (data.get("id") ?: "") as Any, name = data.getString("name") ?: "")
    }
    )
}
fun uploadFooFile(filePath: String, ignoreAuth: Boolean = false, uploadPathOrUrl: String = FOO_UPLOAD_PATH): UTSPromise<String> {
    return uploadFile(UploadFileOptions__1(url = uploadPathOrUrl, filePath = filePath, formData = null, ignoreAuth = ignoreAuth))
}
val GenSrcPagesBasicComponentsHttpDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsHttpDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsHttpDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsHttpDemoCard.inject, props = GenSrcPagesBasicComponentsHttpDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsHttpDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsHttpDemoCard.emits, components = GenSrcPagesBasicComponentsHttpDemoCard.components, styles = GenSrcPagesBasicComponentsHttpDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsHttpDemoCard.setup(props as GenSrcPagesBasicComponentsHttpDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsHttpDemoCard {
    return GenSrcPagesBasicComponentsHttpDemoCard(instance)
}
)
val GenSrcPagesBasicComponentsTailwindcssDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsTailwindcssDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsTailwindcssDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsTailwindcssDemoCard.inject, props = GenSrcPagesBasicComponentsTailwindcssDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsTailwindcssDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsTailwindcssDemoCard.emits, components = GenSrcPagesBasicComponentsTailwindcssDemoCard.components, styles = GenSrcPagesBasicComponentsTailwindcssDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsTailwindcssDemoCard.setup(props as GenSrcPagesBasicComponentsTailwindcssDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsTailwindcssDemoCard {
    return GenSrcPagesBasicComponentsTailwindcssDemoCard(instance)
}
)
val GenSrcPagesBasicComponentsSystemInfoDemoCardClass = CreateVueComponent(GenSrcPagesBasicComponentsSystemInfoDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesBasicComponentsSystemInfoDemoCard.inheritAttrs, inject = GenSrcPagesBasicComponentsSystemInfoDemoCard.inject, props = GenSrcPagesBasicComponentsSystemInfoDemoCard.props, propsNeedCastKeys = GenSrcPagesBasicComponentsSystemInfoDemoCard.propsNeedCastKeys, emits = GenSrcPagesBasicComponentsSystemInfoDemoCard.emits, components = GenSrcPagesBasicComponentsSystemInfoDemoCard.components, styles = GenSrcPagesBasicComponentsSystemInfoDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicComponentsSystemInfoDemoCard.setup(props as GenSrcPagesBasicComponentsSystemInfoDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicComponentsSystemInfoDemoCard {
    return GenSrcPagesBasicComponentsSystemInfoDemoCard(instance)
}
)
val GenSrcPagesBasicBasicClass = CreateVueComponent(GenSrcPagesBasicBasic::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcPagesBasicBasic.inheritAttrs, inject = GenSrcPagesBasicBasic.inject, props = GenSrcPagesBasicBasic.props, propsNeedCastKeys = GenSrcPagesBasicBasic.propsNeedCastKeys, emits = GenSrcPagesBasicBasic.emits, components = GenSrcPagesBasicBasic.components, styles = GenSrcPagesBasicBasic.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesBasicBasic.setup(props as GenSrcPagesBasicBasic)
    }
    )
}
, fun(instance, renderer): GenSrcPagesBasicBasic {
    return GenSrcPagesBasicBasic(instance, renderer)
}
)
typealias EnvType = String
val GenSrcPagesFunctionComponentsEnvCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsEnvCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsEnvCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsEnvCard.inject, props = GenSrcPagesFunctionComponentsEnvCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsEnvCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsEnvCard.emits, components = GenSrcPagesFunctionComponentsEnvCard.components, styles = GenSrcPagesFunctionComponentsEnvCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsEnvCard.setup(props as GenSrcPagesFunctionComponentsEnvCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsEnvCard {
    return GenSrcPagesFunctionComponentsEnvCard(instance)
}
)
val GenSrcPagesFunctionComponentsSystemInfoCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsSystemInfoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsSystemInfoCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsSystemInfoCard.inject, props = GenSrcPagesFunctionComponentsSystemInfoCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsSystemInfoCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsSystemInfoCard.emits, components = GenSrcPagesFunctionComponentsSystemInfoCard.components, styles = GenSrcPagesFunctionComponentsSystemInfoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsSystemInfoCard.setup(props as GenSrcPagesFunctionComponentsSystemInfoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsSystemInfoCard {
    return GenSrcPagesFunctionComponentsSystemInfoCard(instance)
}
)
val GenSrcPagesFunctionComponentsHapticsCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsHapticsCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsHapticsCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsHapticsCard.inject, props = GenSrcPagesFunctionComponentsHapticsCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsHapticsCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsHapticsCard.emits, components = GenSrcPagesFunctionComponentsHapticsCard.components, styles = GenSrcPagesFunctionComponentsHapticsCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsHapticsCard.setup(props as GenSrcPagesFunctionComponentsHapticsCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsHapticsCard {
    return GenSrcPagesFunctionComponentsHapticsCard(instance)
}
)
val GenSrcPagesFunctionComponentsToastCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsToastCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsToastCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsToastCard.inject, props = GenSrcPagesFunctionComponentsToastCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsToastCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsToastCard.emits, components = GenSrcPagesFunctionComponentsToastCard.components, styles = GenSrcPagesFunctionComponentsToastCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsToastCard.setup(props as GenSrcPagesFunctionComponentsToastCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsToastCard {
    return GenSrcPagesFunctionComponentsToastCard(instance)
}
)
val GenSrcPagesFunctionComponentsMediaCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsMediaCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsMediaCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsMediaCard.inject, props = GenSrcPagesFunctionComponentsMediaCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsMediaCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsMediaCard.emits, components = GenSrcPagesFunctionComponentsMediaCard.components, styles = GenSrcPagesFunctionComponentsMediaCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsMediaCard.setup(props as GenSrcPagesFunctionComponentsMediaCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsMediaCard {
    return GenSrcPagesFunctionComponentsMediaCard(instance)
}
)
fun uniq(array: UTSArray<Any>): UTSArray<Any> {
    var index: Number = -1
    val length = array.length
    val result: UTSArray<Any> = _uA()
    while(++index < length){
        val value = array[index]
        if (result.indexOf(value) < 0) {
            result.push(value)
        }
    }
    return result
}
fun chunk(array: UTSArray<Any>, size: Number): UTSArray<Any> {
    val length = if (array != null) {
        array.length
    } else {
        0
    }
    if (length == 0 || size < 1) {
        return _uA()
    }
    var index: Number = 0
    val step = if (size > 0) {
        size
    } else {
        1
    }
    val result: UTSArray<Any> = _uA()
    while(index < length){
        val nextIndex = index + step
        result.push(array.slice(index, nextIndex))
        index = nextIndex
    }
    return result
}
fun shuffle(array: UTSArray<Any>): UTSArray<Any> {
    val length = if (array != null) {
        array.length
    } else {
        0
    }
    if (length == 0) {
        return _uA()
    }
    var index: Number = -1
    val lastIndex = length - 1
    val result = array.slice()
    while(++index < length){
        val rand = Math.floor(index + Math.random() * (lastIndex - index + 1)) as Number
        val value = result[rand]
        result[rand] = result[index]
        result[index] = value
    }
    return result
}
fun get(kObject: Any?, path: String, defaultValue: Any? = null): Any? {
    if (kObject == null) {
        return defaultValue
    }
    val pathKeys = path.split(".")
    var index: Number = 0
    val length = pathKeys.length
    var curr: Any? = kObject
    while(curr != null && index < length){
        val key = pathKeys[index++]
        if (UTSAndroid.`typeof`(curr) == "object") {
            val jsonObj = curr as UTSJSONObject
            curr = jsonObj[key]
        } else {
            curr = null
        }
    }
    return if (index == length && curr != null) {
        curr
    } else {
        defaultValue
    }
}
fun cloneDeep(value: Any?): Any? {
    if (value == null || UTSAndroid.`typeof`(value) != "object") {
        return value
    }
    if (UTSArray.isArray(value)) {
        val arr = value as UTSArray<Any>
        val copy: UTSArray<Any> = _uA()
        run {
            var i: Number = 0
            while(i < arr.length){
                val item = cloneDeep(arr[i])
                if (item != null) {
                    copy.push(item!!)
                }
                i++
            }
        }
        return copy
    }
    val obj = value as UTSJSONObject
    val res: UTSJSONObject = _uO()
    val keys = UTSJSONObject.keys(obj)
    run {
        var i: Number = 0
        while(i < keys.length){
            val k = keys[i]
            res[k] = cloneDeep(obj[k])
            i++
        }
    }
    return res
}
fun camelCase(string: String): String {
    if (string == "") {
        return ""
    }
    val words = string.replace(UTSRegExp("[-_]+", "g"), " ").trim().split(" ")
    var result = ""
    run {
        var i: Number = 0
        while(i < words.length){
            val word = words[i]
            if (word.length > 0) {
                if (result.length == 0) {
                    result += word.toLowerCase()
                } else {
                    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                }
            }
            i++
        }
    }
    return result
}
fun kebabCase(string: String): String {
    if (string == "") {
        return ""
    }
    val words = string.replace(UTSRegExp("([a-z0-9])([A-Z])", "g"), "\$1-\$2").replace(UTSRegExp("[-_\\s]+", "g"), "-").split("-")
    val result: UTSArray<String> = _uA()
    run {
        var i: Number = 0
        while(i < words.length){
            val w = words[i]
            if (w.length > 0) {
                result.push(w.toLowerCase())
            }
            i++
        }
    }
    return result.join("-")
}
fun capitalize(string: String): String {
    if (string == "") {
        return ""
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
fun debounce(func: Any, wait: Number): Any {
    var timerId: Number = 0
    fun timerExpired() {
        timerId = 0
        val fn = func as () -> Unit
        fn()
    }
    return fun() {
        if (timerId != 0) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(fun(){
            timerExpired()
        }
        , wait)
    }
}
fun random(lower: Number = 0, upper: Number = 1): Number {
    val min = Math.min(lower, upper)
    val max = Math.max(lower, upper)
    return Math.floor(min + Math.random() * (max - min + 1)) as Number
}
val GenSrcPagesFunctionComponentsLodashDemoCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsLodashDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsLodashDemoCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsLodashDemoCard.inject, props = GenSrcPagesFunctionComponentsLodashDemoCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsLodashDemoCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsLodashDemoCard.emits, components = GenSrcPagesFunctionComponentsLodashDemoCard.components, styles = GenSrcPagesFunctionComponentsLodashDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsLodashDemoCard.setup(props as GenSrcPagesFunctionComponentsLodashDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsLodashDemoCard {
    return GenSrcPagesFunctionComponentsLodashDemoCard(instance)
}
)
open class RsaPublicKey (
    @JsonNotNull
    open var modulus: Uint8Array,
    @JsonNotNull
    open var exponent: Uint8Array,
) : UTSObject()
open class RsaPrivateKey (
    @JsonNotNull
    open var modulus: Uint8Array,
    @JsonNotNull
    open var privateExponent: Uint8Array,
) : UTSObject()
open class DerElement (
    @JsonNotNull
    open var tag: Number,
    @JsonNotNull
    open var contentStart: Number,
    @JsonNotNull
    open var contentLen: Number,
    @JsonNotNull
    open var nextStart: Number,
) : UTSObject()
val B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
fun bytesToHex(bytes: Uint8Array): String {
    var result = ""
    run {
        var i: Number = 0
        while(i < bytes.length){
            val b = bytes[i] or 0
            result += (if (b < 16) {
                "0"
            } else {
                ""
            }
            ) + b.toString(16)
            i++
        }
    }
    return result
}
fun hexToBytes(hex: String): Uint8Array {
    val len = hex.length / 2
    val bytes = Uint8Array(len)
    run {
        var i: Number = 0
        while(i < len){
            bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16)
            i++
        }
    }
    return bytes
}
fun textToBytes(text: String): Uint8Array {
    return TextEncoder().encode(text)
}
fun bytesToText(bytes: Uint8Array): String {
    return TextDecoder().decode(bytes)
}
fun subBytes(bytes: Uint8Array, start: Number, end: Number): Uint8Array {
    val len = end - start
    val out = Uint8Array(len)
    run {
        var i: Number = 0
        while(i < len){
            out[i] = bytes[start + i]
            i++
        }
    }
    return out
}
fun stripPem(pem: String): String {
    val lines = pem.split("\n")
    var body = ""
    run {
        var i: Number = 0
        while(i < lines.length){
            if (lines[i].indexOf("-----") >= 0) {
                i++
                continue
            }
            body = body + lines[i]
            i++
        }
    }
    var result = ""
    run {
        var i: Number = 0
        while(i < body.length){
            val c = body.charAt(i)
            if (B64_CHARS.indexOf(c) >= 0 || c == "=") {
                result += c
            }
            i++
        }
    }
    return result
}
fun base64DecodeToBytes(b64: String): Uint8Array {
    var clean = stripPem(b64)
    while(clean.length % 4 != 0){
        clean = clean + "="
    }
    return Uint8Array(uni_base64ToArrayBuffer(clean))
}
fun derReadElement(bytes: Uint8Array, start: Number): DerElement {
    val tag = bytes[start] or 0
    val l0 = bytes[start + 1] or 0
    var len: Number = 0
    var headerLen: Number = 2
    if (l0 < 0x80) {
        len = l0
    } else {
        val numLen = l0 and 0x7f
        run {
            var i: Number = 0
            while(i < numLen){
                len = len * 256 + (bytes[start + 2 + i] or 0)
                i++
            }
        }
        headerLen = 2 + numLen
    }
    val contentStart = start + headerLen
    return DerElement(tag = tag, contentStart = contentStart, contentLen = len, nextStart = contentStart + len)
}
fun derIntegerValue(bytes: Uint8Array, elem: DerElement): Uint8Array {
    return trimZero(subBytes(bytes, elem.contentStart, elem.contentStart + elem.contentLen))
}
fun parsePublicKey(pem: String): RsaPublicKey {
    val der = base64DecodeToBytes(pem)
    val outer = derReadElement(der, 0)
    val content = subBytes(der, outer.contentStart, outer.contentStart + outer.contentLen)
    val first = derReadElement(content, 0)
    if (first.tag == 0x02) {
        val n = derIntegerValue(content, first)
        val eElem = derReadElement(content, first.nextStart)
        val e = derIntegerValue(content, eElem)
        return RsaPublicKey(modulus = n, exponent = e)
    }
    val algo = derReadElement(content, 0)
    val bit = derReadElement(content, algo.nextStart)
    val pkcs1 = subBytes(content, bit.contentStart + 1, bit.contentStart + bit.contentLen)
    val pk1 = derReadElement(pkcs1, 0)
    val nElem = derReadElement(pkcs1, pk1.contentStart)
    val n = derIntegerValue(pkcs1, nElem)
    val eElem = derReadElement(pkcs1, nElem.nextStart)
    val e = derIntegerValue(pkcs1, eElem)
    return RsaPublicKey(modulus = n, exponent = e)
}
fun parsePrivateKeyPkcs1(pkcs1: Uint8Array): RsaPrivateKey {
    val outer = derReadElement(pkcs1, 0)
    val content = subBytes(pkcs1, outer.contentStart, outer.contentStart + outer.contentLen)
    val ver = derReadElement(content, 0)
    val nElem = derReadElement(content, ver.nextStart)
    val n = derIntegerValue(content, nElem)
    val eElem = derReadElement(content, nElem.nextStart)
    val dElem = derReadElement(content, eElem.nextStart)
    val d = derIntegerValue(content, dElem)
    return RsaPrivateKey(modulus = n, privateExponent = d)
}
fun parsePrivateKey(pem: String): RsaPrivateKey {
    val der = base64DecodeToBytes(pem)
    val outer = derReadElement(der, 0)
    val content = subBytes(der, outer.contentStart, outer.contentStart + outer.contentLen)
    val first = derReadElement(content, 0)
    if (first.tag == 0x02) {
        val second = derReadElement(content, first.nextStart)
        if (second.tag == 0x02) {
            val n = derIntegerValue(content, second)
            val eElem = derReadElement(content, second.nextStart)
            val dElem = derReadElement(content, eElem.nextStart)
            val d = derIntegerValue(content, dElem)
            return RsaPrivateKey(modulus = n, privateExponent = d)
        }
        val algo = second
        val octet = derReadElement(content, algo.nextStart)
        val pkcs1 = subBytes(content, octet.contentStart, octet.contentStart + octet.contentLen)
        return parsePrivateKeyPkcs1(pkcs1)
    }
    throw UTSError("无法识别的私钥格式，请使用 PKCS#1 或 PKCS#8 密钥")
}
fun trimZero(bytes: Uint8Array): Uint8Array {
    var start: Number = 0
    while(start < bytes.length - 1 && bytes[start] == 0){
        start++
    }
    return subBytes(bytes, start, bytes.length)
}
fun isZero(bytes: Uint8Array): Boolean {
    run {
        var i: Number = 0
        while(i < bytes.length){
            if (bytes[i] != 0) {
                return false
            }
            i++
        }
    }
    return true
}
fun bigCmp(a: Uint8Array, b: Uint8Array): Number {
    if (a.length != b.length) {
        return if (a.length > b.length) {
            1
        } else {
            -1
        }
    }
    run {
        var i: Number = 0
        while(i < a.length){
            val av = a[i] or 0
            val bv = b[i] or 0
            if (av != bv) {
                return if (av > bv) {
                    1
                } else {
                    -1
                }
            }
            i++
        }
    }
    return 0
}
fun bigShrBits(a: Uint8Array, bits: Number): Uint8Array {
    val out = Uint8Array(a.length)
    var carry: Number = 0
    run {
        var i = a.length - 1
        while(i >= 0){
            val v = a[i] or 0
            out[i] = (v shr bits) or carry
            carry = (v and ((1 shl bits) - 1)) shl (8 - bits)
            i--
        }
    }
    return trimZero(out)
}
fun trimLE(bytes: Uint8Array): Uint8Array {
    var end = bytes.length
    while(end > 1 && bytes[end - 1] == 0){
        end = end - 1
    }
    return subBytes(bytes, 0, end)
}
fun toLE(bytes: Uint8Array): Uint8Array {
    val out = Uint8Array(bytes.length)
    run {
        var i: Number = 0
        while(i < bytes.length){
            out[i] = bytes[bytes.length - 1 - i]
            i++
        }
    }
    return trimLE(out)
}
fun toBE(bytes: Uint8Array): Uint8Array {
    val out = Uint8Array(bytes.length)
    run {
        var i: Number = 0
        while(i < bytes.length){
            out[i] = bytes[bytes.length - 1 - i]
            i++
        }
    }
    return trimZero(out)
}
fun bigShlBitsLE(a: Uint8Array, bits: Number): Uint8Array {
    val out = Uint8Array(a.length + 1)
    var carry: Number = 0
    run {
        var i: Number = 0
        while(i < a.length){
            val v = a[i] or 0
            out[i] = ((v shl bits) or carry) and 0xff
            carry = v shr (8 - bits)
            i++
        }
    }
    out[a.length] = carry
    return out
}
fun bigMul(a: Uint8Array, b: Uint8Array): Uint8Array {
    if (isZero(a) || isZero(b)) {
        return Uint8Array(1)
    }
    val outLen = a.length + b.length
    val out = Uint8Array(outLen)
    run {
        var i: Number = 0
        while(i < a.length){
            val ai = a[a.length - 1 - i] or 0
            var carry: Number = 0
            run {
                var j: Number = 0
                while(j < b.length){
                    val bj = b[b.length - 1 - j] or 0
                    val k = outLen - 1 - (i + j)
                    val t = (out[k] or 0) + ai * bj + carry
                    out[k] = t and 0xff
                    carry = t shr 8
                    j++
                }
            }
            val k2 = outLen - 1 - (i + b.length)
            out[k2] = (out[k2] or 0) + carry
            i++
        }
    }
    return trimZero(out)
}
fun leadingZeroBits(b: Number): Number {
    var bits: Number = 0
    var mask: Number = 0x80
    while((b and mask) == 0){
        bits = bits + 1
        mask = mask shr 1
    }
    return bits
}
fun bigGetBit(a: Uint8Array, i: Number): Number {
    val byteIndex = Math.floor(i / 8)
    val bitInByte = 7 - (i % 8)
    return ((a[byteIndex] or 0) shr bitInByte) and 1
}
fun padToN(bytes: Uint8Array, n: Number): Uint8Array {
    if (bytes.length >= n) {
        return bytes
    }
    val out = Uint8Array(n)
    val gap = n - bytes.length
    run {
        var i: Number = 0
        while(i < bytes.length){
            out[gap + i] = bytes[i]
            i++
        }
    }
    return out
}
fun bigMod(a: Uint8Array, m: Uint8Array): Uint8Array {
    if (bigCmp(a, m) < 0) {
        return a
    }
    val n = m.length
    if (n == 1) {
        val mv = m[0] or 0
        var rem: Number = 0
        run {
            var i: Number = 0
            while(i < a.length){
                rem = (rem * 256 + (a[i] or 0)) % mv
                i++
            }
        }
        val out = Uint8Array(1)
        out[0] = rem
        return out
    }
    val shift = leadingZeroBits(m[0] or 0)
    val v = trimLE(bigShlBitsLE(toLE(m), shift))
    val uArr = bigShlBitsLE(toLE(a), shift)
    val uLen = uArr.length
    val qLen = uLen - n
    run {
        var j = qLen - 1
        while(j >= 0){
            val uTop = (uArr[j + n] or 0) * 256 + (uArr[j + n - 1] or 0)
            var qhat = Math.floor(uTop / (v[n - 1] or 0))
            if (qhat >= 256) {
                qhat = 255
            }
            var rhat = uTop - qhat * (v[n - 1] or 0)
            while(qhat >= 256 || qhat * (v[n - 2] or 0) > rhat * 256 + (uArr[j + n - 2] or 0)){
                qhat = qhat - 1
                rhat = rhat + (v[n - 1] or 0)
                if (rhat >= 256) {
                    break
                }
            }
            var borrow: Number = 0
            run {
                var i: Number = 0
                while(i < n){
                    val p = qhat * (v[i] or 0) + borrow
                    val t = (uArr[j + i] or 0) - (p and 0xff)
                    uArr[j + i] = t and 0xff
                    borrow = (p shr 8) + (if (t < 0) {
                        1
                    } else {
                        0
                    }
                    )
                    i++
                }
            }
            var hi = (uArr[j + n] or 0) - borrow
            if (hi < 0) {
                var carry: Number = 0
                run {
                    var i: Number = 0
                    while(i < n){
                        val s = (uArr[j + i] or 0) + (v[i] or 0) + carry
                        uArr[j + i] = s and 0xff
                        carry = s shr 8
                        i++
                    }
                }
                hi = hi + carry
            }
            uArr[j + n] = hi
            j--
        }
    }
    return bigShrBits(toBE(subBytes(uArr, 0, n)), shift)
}
fun bigModPow(base: Uint8Array, exp: Uint8Array, m: Uint8Array): Uint8Array {
    var result = Uint8Array(1)
    result[0] = 1
    var b = bigMod(base, m)
    val expBits = exp.length * 8
    run {
        var i: Number = 0
        while(i < expBits){
            result = bigMod(bigMul(result, result), m)
            if (bigGetBit(exp, i) == 1) {
                result = bigMod(bigMul(result, b), m)
            }
            i++
        }
    }
    return result
}
fun i2osp(x: Uint8Array, k: Number): Uint8Array {
    return padToN(x, k)
}
fun buildDigestInfo(digestHex: String, hashType: String): Uint8Array {
    val digest = hexToBytes(digestHex)
    var prefixHex = "3031300d060960864801650304020105000420"
    if (hashType == "MD5") {
        prefixHex = "3020300c06082a864886f70d020505000410"
    } else if (hashType == "SHA-1" || hashType == "SHA1") {
        prefixHex = "3021300906052b0e03021a05000414"
    }
    val prefix = hexToBytes(prefixHex)
    val out = Uint8Array(prefix.length + digest.length)
    run {
        var i: Number = 0
        while(i < prefix.length){
            out[i] = prefix[i]
            i++
        }
    }
    run {
        var i: Number = 0
        while(i < digest.length){
            out[prefix.length + i] = digest[i]
            i++
        }
    }
    return out
}
fun rsaEncryptUts(text: String, publicKey: String): String {
    val key = parsePublicKey(publicKey)
    val k = key.modulus.length
    val m = textToBytes(text)
    val mLen = m.length
    if (mLen > k - 11) {
        throw UTSError("RSA 明文过长：最长 " + (k - 11) + " 字节，当前 " + mLen + " 字节")
    }
    val em = Uint8Array(k)
    em[0] = 0
    em[1] = 2
    val psLen = k - mLen - 3
    run {
        var i: Number = 0
        while(i < psLen){
            em[2 + i] = Math.floor(Math.random() * 255) + 1
            i++
        }
    }
    em[k - mLen - 1] = 0
    run {
        var i: Number = 0
        while(i < mLen){
            em[k - mLen + i] = m[i]
            i++
        }
    }
    val c = bigModPow(em, key.exponent, key.modulus)
    return bytesToHex(i2osp(c, k))
}
fun rsaDecryptUts(hex: String, privateKey: String): String {
    val key = parsePrivateKey(privateKey)
    val k = key.modulus.length
    val c = hexToBytes(hex)
    if (c.length != k) {
        throw UTSError("RSA 密文长度不正确：应为 " + k + " 字节，实际 " + c.length + " 字节")
    }
    val m = bigModPow(c, key.privateExponent, key.modulus)
    val em = i2osp(m, k)
    if (em[0] != 0 || em[1] != 2) {
        throw UTSError("RSA 解密失败：填充头无效")
    }
    var sep: Number = -1
    run {
        var i: Number = 2
        while(i < k){
            if (em[i] == 0) {
                sep = i
                break
            }
            i++
        }
    }
    if (sep < 10) {
        throw UTSError("RSA 解密失败：填充无效")
    }
    return bytesToText(subBytes(em, sep + 1, k))
}
fun rsaSignUts(digestHex: String, hashType: String, privateKey: String): String {
    val key = parsePrivateKey(privateKey)
    val k = key.modulus.length
    val t = buildDigestInfo(digestHex, hashType)
    val tLen = t.length
    if (tLen > k - 11) {
        throw UTSError("RSA 签名摘要过长：密钥至少需要 " + (tLen + 11) + " 字节")
    }
    val em = Uint8Array(k)
    em[0] = 0
    em[1] = 1
    val psLen = k - tLen - 3
    run {
        var i: Number = 0
        while(i < psLen){
            em[2 + i] = 0xff
            i++
        }
    }
    em[k - tLen - 1] = 0
    run {
        var i: Number = 0
        while(i < tLen){
            em[k - tLen + i] = t[i]
            i++
        }
    }
    val s = bigModPow(em, key.privateExponent, key.modulus)
    return bytesToHex(i2osp(s, k))
}
fun rsaVerifyUts(digestHex: String, hashType: String, publicKey: String, sigHex: String): Boolean {
    val key = parsePublicKey(publicKey)
    val k = key.modulus.length
    val s = hexToBytes(sigHex)
    if (s.length != k) {
        return false
    }
    val m = bigModPow(s, key.exponent, key.modulus)
    val em = i2osp(m, k)
    if (em[0] != 0 || em[1] != 1) {
        return false
    }
    var sep: Number = -1
    run {
        var i: Number = 2
        while(i < k){
            if (em[i] == 0) {
                sep = i
                break
            }
            if (em[i] != 0xff) {
                return false
            }
            i++
        }
    }
    if (sep < 10) {
        return false
    }
    val t = buildDigestInfo(digestHex, hashType)
    if (k - sep - 1 != t.length) {
        return false
    }
    run {
        var i: Number = 0
        while(i < t.length){
            if (em[sep + 1 + i] != t[i]) {
                return false
            }
            i++
        }
    }
    return true
}
fun rsaGenerateKeyPairAndroid(bits: Number): String {
    try {
        val kpg = java.security.KeyPairGenerator.getInstance("RSA")
        kpg.initialize(bits.toInt())
        val kp = kpg.generateKeyPair()
        val pubBytes = kp.getPublic().getEncoded()
        val priBytes = kp.getPrivate().getEncoded()
        val pubB64 = android.util.Base64.encodeToString(pubBytes, android.util.Base64.NO_WRAP)
        val priB64 = android.util.Base64.encodeToString(priBytes, android.util.Base64.NO_WRAP)
        return "{\"publicKey\":\"" + pubB64 + "\",\"privateKey\":\"" + priB64 + "\"}"
    }
     catch (_e: Throwable) {
        return "{\"publicKey\":\"\",\"privateKey\":\"\"}"
    }
}
fun rsaGenerateKeyPairUts(bits: Number): String {
    return rsaGenerateKeyPairAndroid(bits)
}
fun textToBytes__1(text: String): Uint8Array {
    return TextEncoder().encode(text)
}
fun bytesToText__1(bytes: Uint8Array): String {
    return TextDecoder().decode(bytes)
}
fun bytesToBase64(bytes: Uint8Array): String {
    return uni_arrayBufferToBase64(bytes.buffer as ArrayBuffer)
}
fun base64ToBytes(b64: String): Uint8Array {
    return Uint8Array(uni_base64ToArrayBuffer(b64))
}
fun bytesToHex__1(bytes: Uint8Array): String {
    var result = ""
    run {
        var i: Number = 0
        while(i < bytes.length){
            val b = bytes[i] or 0
            result += (if (b < 16) {
                "0"
            } else {
                ""
            }
            ) + b.toString(16)
            i++
        }
    }
    return result
}
fun hexToBytes__1(hex: String): Uint8Array {
    val len = hex.length / 2
    val bytes = Uint8Array(len)
    run {
        var i: Number = 0
        while(i < len){
            bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16)
            i++
        }
    }
    return bytes
}
fun copyBytes(src: Uint8Array, dst: Uint8Array, dstOff: Number): Unit {
    run {
        var i: Number = 0
        while(i < src.length){
            dst[dstOff + i] = src[i]
            i++
        }
    }
}
fun subBytes__1(bytes: Uint8Array, start: Number, end: Number): Uint8Array {
    val len = end - start
    val out = Uint8Array(len)
    run {
        var i: Number = 0
        while(i < len){
            out[i] = bytes[start + i]
            i++
        }
    }
    return out
}
fun readUint32BE(bytes: Uint8Array, off: Number): Number {
    return (((bytes[off] or 0) shl 24) or ((bytes[off + 1] or 0) shl 16) or ((bytes[off + 2] or 0) shl 8) or (bytes[off + 3] or 0)) ushr 0
}
fun writeUint32BE(out: Uint8Array, off: Number, v: Number): Unit {
    out[off] = (v ushr 24) and 0xff
    out[off + 1] = (v ushr 16) and 0xff
    out[off + 2] = (v ushr 8) and 0xff
    out[off + 3] = v and 0xff
}
fun readUint32LE(bytes: Uint8Array, off: Number): Number {
    return ((bytes[off] or 0) or ((bytes[off + 1] or 0) shl 8) or ((bytes[off + 2] or 0) shl 16) or ((bytes[off + 3] or 0) shl 24)) ushr 0
}
fun writeUint32LE(out: Uint8Array, off: Number, v: Number): Unit {
    out[off] = v and 0xff
    out[off + 1] = (v ushr 8) and 0xff
    out[off + 2] = (v ushr 16) and 0xff
    out[off + 3] = (v ushr 24) and 0xff
}
fun rotl32(x: Number, c: Number): Number {
    return ((x shl c) or (x ushr (32 - c))) ushr 0
}
fun rotr32(x: Number, n: Number): Number {
    return ((x ushr n) or (x shl (32 - n))) ushr 0
}
val MD5_K = _uA(
    0xd76aa478,
    0xe8c7b756,
    0x242070db,
    0xc1bdceee,
    0xf57c0faf,
    0x4787c62a,
    0xa8304613,
    0xfd469501,
    0x698098d8,
    0x8b44f7af,
    0xffff5bb1,
    0x895cd7be,
    0x6b901122,
    0xfd987193,
    0xa679438e,
    0x49b40821,
    0xf61e2562,
    0xc040b340,
    0x265e5a51,
    0xe9b6c7aa,
    0xd62f105d,
    0x02441453,
    0xd8a1e681,
    0xe7d3fbc8,
    0x21e1cde6,
    0xc33707d6,
    0xf4d50d87,
    0x455a14ed,
    0xa9e3e905,
    0xfcefa3f8,
    0x676f02d9,
    0x8d2a4c8a,
    0xfffa3942,
    0x8771f681,
    0x6d9d6122,
    0xfde5380c,
    0xa4beea44,
    0x4bdecfa9,
    0xf6bb4b60,
    0xbebfbc70,
    0x289b7ec6,
    0xeaa127fa,
    0xd4ef3085,
    0x04881d05,
    0xd9d4d039,
    0xe6db99e5,
    0x1fa27cf8,
    0xc4ac5665,
    0xf4292244,
    0x432aff97,
    0xab9423a7,
    0xfc93a039,
    0x655b59c3,
    0x8f0ccc92,
    0xffeff47d,
    0x85845dd1,
    0x6fa87e4f,
    0xfe2ce6e0,
    0xa3014314,
    0x4e0811a1,
    0xf7537e82,
    0xbd3af235,
    0x2ad7d2bb,
    0xeb86d391
) as UTSArray<Number>
val MD5_S = _uA(
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21
) as UTSArray<Number>
fun md5Bytes(data: Uint8Array): String {
    val origLen = data.length
    val bitLen = origLen * 8
    val padLen = if ((origLen % 64 < 56)) {
        (56 - origLen % 64)
    } else {
        (120 - origLen % 64)
    }
    val totalLen = origLen + padLen + 8
    val msg = Uint8Array(totalLen)
    copyBytes(data, msg, 0)
    msg[origLen] = 0x80
    val lowBits = (bitLen ushr 0)
    val highBits = Math.floor(bitLen / 0x100000000)
    writeUint32LE(msg, totalLen - 8, lowBits)
    writeUint32LE(msg, totalLen - 4, highBits)
    var a0: Number = 0x67452301
    var b0: Number = 0xefcdab89
    var c0: Number = 0x98badcfe
    var d0: Number = 0x10325476
    run {
        var off: Number = 0
        while(off < totalLen){
            val M: UTSArray<Number> = _uA()
            run {
                var j: Number = 0
                while(j < 16){
                    M.push(readUint32LE(msg, off + j * 4))
                    j++
                }
            }
            var A = a0
            var B = b0
            var C = c0
            var D = d0
            run {
                var i: Number = 0
                while(i < 64){
                    var F: Number = 0
                    var g: Number = 0
                    if (i < 16) {
                        F = (B and C) or (B.inv() and D)
                        g = i
                    } else if (i < 32) {
                        F = (D and B) or (D.inv() and C)
                        g = (5 * i + 1) % 16
                    } else if (i < 48) {
                        F = B xor C xor D
                        g = (3 * i + 5) % 16
                    } else {
                        F = C xor (B or D.inv())
                        g = (7 * i) % 16
                    }
                    val dTemp = D
                    D = C
                    C = B
                    val sum = (A + F + MD5_K[i] + M[g]) ushr 0
                    B = (B + rotl32(sum, MD5_S[i])) ushr 0
                    A = dTemp
                    i++
                }
            }
            a0 = (a0 + A) ushr 0
            b0 = (b0 + B) ushr 0
            c0 = (c0 + C) ushr 0
            d0 = (d0 + D) ushr 0
            off += 64
        }
    }
    val out = Uint8Array(16)
    writeUint32LE(out, 0, a0)
    writeUint32LE(out, 4, b0)
    writeUint32LE(out, 8, c0)
    writeUint32LE(out, 12, d0)
    return bytesToHex__1(out)
}
fun sha1Bytes(data: Uint8Array): String {
    val origLen = data.length
    val bitLen = origLen * 8
    val padLen = if ((origLen % 64 < 56)) {
        (56 - origLen % 64)
    } else {
        (120 - origLen % 64)
    }
    val totalLen = origLen + padLen + 8
    val msg = Uint8Array(totalLen)
    copyBytes(data, msg, 0)
    msg[origLen] = 0x80
    val highBits = Math.floor(bitLen / 0x100000000)
    val lowBits = (bitLen ushr 0)
    writeUint32BE(msg, totalLen - 8, highBits)
    writeUint32BE(msg, totalLen - 4, lowBits)
    var h0: Number = 0x67452301
    var h1: Number = 0xefcdab89
    var h2: Number = 0x98badcfe
    var h3: Number = 0x10325476
    var h4: Number = 0xc3d2e1f0
    run {
        var off: Number = 0
        while(off < totalLen){
            val w: UTSArray<Number> = _uA()
            run {
                var i: Number = 0
                while(i < 16){
                    w.push(readUint32BE(msg, off + i * 4))
                    i++
                }
            }
            run {
                var i: Number = 16
                while(i < 80){
                    w.push(rotl32(w[i - 3] xor w[i - 8] xor w[i - 14] xor w[i - 16], 1))
                    i++
                }
            }
            var a = h0
            var b = h1
            var c = h2
            var d = h3
            var e = h4
            run {
                var i: Number = 0
                while(i < 80){
                    var f: Number = 0
                    var k: Number = 0
                    if (i < 20) {
                        f = (b and c) or (b.inv() and d)
                        k = 0x5a827999
                    } else if (i < 40) {
                        f = b xor c xor d
                        k = 0x6ed9eba1
                    } else if (i < 60) {
                        f = (b and c) or (b and d) or (c and d)
                        k = 0x8f1bbcdc
                    } else {
                        f = b xor c xor d
                        k = 0xca62c1d6
                    }
                    val temp = (rotl32(a, 5) + f + e + k + w[i]) ushr 0
                    e = d
                    d = c
                    c = rotl32(b, 30)
                    b = a
                    a = temp
                    i++
                }
            }
            h0 = (h0 + a) ushr 0
            h1 = (h1 + b) ushr 0
            h2 = (h2 + c) ushr 0
            h3 = (h3 + d) ushr 0
            h4 = (h4 + e) ushr 0
            off += 64
        }
    }
    val out = Uint8Array(20)
    writeUint32BE(out, 0, h0)
    writeUint32BE(out, 4, h1)
    writeUint32BE(out, 8, h2)
    writeUint32BE(out, 12, h3)
    writeUint32BE(out, 16, h4)
    return bytesToHex__1(out)
}
val SHA256_K = _uA(
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
) as UTSArray<Number>
fun sha256Bytes(data: Uint8Array): String {
    val origLen = data.length
    val bitLen = origLen * 8
    val padLen = if ((origLen % 64 < 56)) {
        (56 - origLen % 64)
    } else {
        (120 - origLen % 64)
    }
    val totalLen = origLen + padLen + 8
    val msg = Uint8Array(totalLen)
    copyBytes(data, msg, 0)
    msg[origLen] = 0x80
    val highBits = Math.floor(bitLen / 0x100000000)
    val lowBits = (bitLen ushr 0)
    writeUint32BE(msg, totalLen - 8, highBits)
    writeUint32BE(msg, totalLen - 4, lowBits)
    var h0: Number = 0x6a09e667
    var h1: Number = 0xbb67ae85
    var h2: Number = 0x3c6ef372
    var h3: Number = 0xa54ff53a
    var h4: Number = 0x510e527f
    var h5: Number = 0x9b05688c
    var h6: Number = 0x1f83d9ab
    var h7: Number = 0x5be0cd19
    run {
        var off: Number = 0
        while(off < totalLen){
            val w: UTSArray<Number> = _uA()
            run {
                var i: Number = 0
                while(i < 16){
                    w.push(readUint32BE(msg, off + i * 4))
                    i++
                }
            }
            run {
                var i: Number = 16
                while(i < 64){
                    val s0 = rotr32(w[i - 15], 7) xor rotr32(w[i - 15], 18) xor (w[i - 15] ushr 3)
                    val s1 = rotr32(w[i - 2], 17) xor rotr32(w[i - 2], 19) xor (w[i - 2] ushr 10)
                    w.push((w[i - 16] + s0 + w[i - 7] + s1) ushr 0)
                    i++
                }
            }
            var a = h0
            var b = h1
            var c = h2
            var d = h3
            var e = h4
            var f = h5
            var g = h6
            var h = h7
            run {
                var i: Number = 0
                while(i < 64){
                    val S1 = rotr32(e, 6) xor rotr32(e, 11) xor rotr32(e, 25)
                    val ch = (e and f) xor (e.inv() and g)
                    val temp1 = (h + S1 + ch + SHA256_K[i] + w[i]) ushr 0
                    val S0 = rotr32(a, 2) xor rotr32(a, 13) xor rotr32(a, 22)
                    val maj = (a and b) xor (a and c) xor (b and c)
                    val temp2 = (S0 + maj) ushr 0
                    h = g
                    g = f
                    f = e
                    e = (d + temp1) ushr 0
                    d = c
                    c = b
                    b = a
                    a = (temp1 + temp2) ushr 0
                    i++
                }
            }
            h0 = (h0 + a) ushr 0
            h1 = (h1 + b) ushr 0
            h2 = (h2 + c) ushr 0
            h3 = (h3 + d) ushr 0
            h4 = (h4 + e) ushr 0
            h5 = (h5 + f) ushr 0
            h6 = (h6 + g) ushr 0
            h7 = (h7 + h) ushr 0
            off += 64
        }
    }
    val out = Uint8Array(32)
    writeUint32BE(out, 0, h0)
    writeUint32BE(out, 4, h1)
    writeUint32BE(out, 8, h2)
    writeUint32BE(out, 12, h3)
    writeUint32BE(out, 16, h4)
    writeUint32BE(out, 20, h5)
    writeUint32BE(out, 24, h6)
    writeUint32BE(out, 28, h7)
    return bytesToHex__1(out)
}
fun hmacSha1Bytes(text: String, key: String): String {
    val blockSize: Number = 64
    val msg = textToBytes__1(text)
    var keyBytes = textToBytes__1(key)
    if (keyBytes.length > blockSize) {
        keyBytes = hexToBytes__1(sha1Bytes(keyBytes))
    }
    val ipad = Uint8Array(blockSize)
    val opad = Uint8Array(blockSize)
    run {
        var i: Number = 0
        while(i < blockSize){
            val kb: Number = if (i < keyBytes.length) {
                (keyBytes[i] or 0)
            } else {
                0
            }
            ipad[i] = kb xor 0x36
            opad[i] = kb xor 0x5c
            i++
        }
    }
    val inner = Uint8Array(blockSize + msg.length)
    copyBytes(ipad, inner, 0)
    copyBytes(msg, inner, blockSize)
    val innerHash = hexToBytes__1(sha1Bytes(inner))
    val outer = Uint8Array(blockSize + 20)
    copyBytes(opad, outer, 0)
    copyBytes(innerHash, outer, blockSize)
    return sha1Bytes(outer)
}
val AES_SBOX: UTSArray<Number> = _uA()
val AES_INV_SBOX: UTSArray<Number> = _uA()
val AES_SUB_MIX = _uA(
    _uA<Number>(),
    _uA<Number>(),
    _uA<Number>(),
    _uA<Number>()
) as UTSArray<UTSArray<Number>>
val AES_INV_SUB_MIX = _uA(
    _uA<Number>(),
    _uA<Number>(),
    _uA<Number>(),
    _uA<Number>()
) as UTSArray<UTSArray<Number>>
val AES_RCON = _uA(
    0x00,
    0x01,
    0x02,
    0x04,
    0x08,
    0x10,
    0x20,
    0x40,
    0x80,
    0x1b,
    0x36
) as UTSArray<Number>
fun aesBuildTables(): Unit {
    val d: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < 256){
            d.push(if (i < 128) {
                i shl 1
            } else {
                (i shl 1) xor 0x11b
            }
            )
            AES_SBOX.push(0)
            AES_INV_SBOX.push(0)
            run {
                var j: Number = 0
                while(j < 4){
                    AES_SUB_MIX[j].push(0)
                    AES_INV_SUB_MIX[j].push(0)
                    j++
                }
            }
            i++
        }
    }
    var x: Number = 0
    var xi: Number = 0
    run {
        var i: Number = 0
        while(i < 256){
            var sx: Number = xi xor (xi shl 1) xor (xi shl 2) xor (xi shl 3) xor (xi shl 4)
            sx = (sx ushr 8) xor (sx and 0xff) xor 0x63
            AES_SBOX[x] = sx
            AES_INV_SBOX[sx] = x
            val x2 = d[x]
            val x4 = d[x2]
            val x8 = d[x4]
            var t = (d[sx] * 0x101) xor (sx * 0x1010100)
            AES_SUB_MIX[0][x] = (t shl 24) or (t ushr 8)
            AES_SUB_MIX[1][x] = (t shl 16) or (t ushr 16)
            AES_SUB_MIX[2][x] = (t shl 8) or (t ushr 24)
            AES_SUB_MIX[3][x] = t
            t = (x8 * 0x1010101) xor (x4 * 0x10001) xor (x2 * 0x101) xor (x * 0x1010100)
            AES_INV_SUB_MIX[0][sx] = (t shl 24) or (t ushr 8)
            AES_INV_SUB_MIX[1][sx] = (t shl 16) or (t ushr 16)
            AES_INV_SUB_MIX[2][sx] = (t shl 8) or (t ushr 24)
            AES_INV_SUB_MIX[3][sx] = t
            if (x == 0) {
                x = 1
                xi = 1
            } else {
                x = x2 xor d[d[d[x8 xor x2]]]
                xi = xi xor d[d[xi]]
            }
            i++
        }
    }
}
val runBlock6 = run {
    aesBuildTables()
}
fun aesExpandKeyWords(key: Uint8Array): UTSArray<Number> {
    val keySchedule: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < 4){
            keySchedule.push(((key[i * 4] or 0) shl 24) or ((key[i * 4 + 1] or 0) shl 16) or ((key[i * 4 + 2] or 0) shl 8) or (key[i * 4 + 3] or 0))
            i++
        }
    }
    run {
        var ksRow: Number = 4
        while(ksRow < 44){
            var t: Number = keySchedule[ksRow - 1]
            if (ksRow % 4 == 0) {
                t = (t shl 8) or (t ushr 24)
                t = (AES_SBOX[t ushr 24] shl 24) or (AES_SBOX[(t ushr 16) and 0xff] shl 16) or (AES_SBOX[(t ushr 8) and 0xff] shl 8) or AES_SBOX[t and 0xff]
                t = t xor (AES_RCON[Math.floor(ksRow / 4)] shl 24)
            }
            keySchedule.push(keySchedule[ksRow - 4] xor t)
            ksRow++
        }
    }
    return keySchedule
}
fun aesInvExpandKeyWords(keySchedule: UTSArray<Number>): UTSArray<Number> {
    val invKeySchedule: UTSArray<Number> = _uA()
    val ksRows: Number = 44
    run {
        var invKsRow: Number = 0
        while(invKsRow < ksRows){
            val ksRow = ksRows - invKsRow
            val t: Number = if ((invKsRow % 4 != 0)) {
                keySchedule[ksRow]
            } else {
                keySchedule[ksRow - 4]
            }
            if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule.push(t)
            } else {
                val v = (AES_INV_SUB_MIX[0][AES_SBOX[t ushr 24]] xor AES_INV_SUB_MIX[1][AES_SBOX[(t ushr 16) and 0xff]] xor AES_INV_SUB_MIX[2][AES_SBOX[(t ushr 8) and 0xff]] xor AES_INV_SUB_MIX[3][AES_SBOX[t and 0xff]]) ushr 0
                invKeySchedule.push(v)
            }
            invKsRow++
        }
    }
    return invKeySchedule
}
fun aesDoCryptBlock(M: UTSArray<Number>, offset: Number, keySchedule: UTSArray<Number>, SUB_MIX_0: UTSArray<Number>, SUB_MIX_1: UTSArray<Number>, SUB_MIX_2: UTSArray<Number>, SUB_MIX_3: UTSArray<Number>, SBOX: UTSArray<Number>): Unit {
    var s0 = M[offset] xor keySchedule[0]
    var s1 = M[offset + 1] xor keySchedule[1]
    var s2 = M[offset + 2] xor keySchedule[2]
    var s3 = M[offset + 3] xor keySchedule[3]
    var ksRows: Number = 4
    run {
        var round: Number = 1
        while(round < 10){
            val t0 = (SUB_MIX_0[s0 ushr 24] xor SUB_MIX_1[(s1 ushr 16) and 0xff] xor SUB_MIX_2[(s2 ushr 8) and 0xff] xor SUB_MIX_3[s3 and 0xff] xor keySchedule[ksRows++]) ushr 0
            val t1 = (SUB_MIX_0[s1 ushr 24] xor SUB_MIX_1[(s2 ushr 16) and 0xff] xor SUB_MIX_2[(s3 ushr 8) and 0xff] xor SUB_MIX_3[s0 and 0xff] xor keySchedule[ksRows++]) ushr 0
            val t2 = (SUB_MIX_0[s2 ushr 24] xor SUB_MIX_1[(s3 ushr 16) and 0xff] xor SUB_MIX_2[(s0 ushr 8) and 0xff] xor SUB_MIX_3[s1 and 0xff] xor keySchedule[ksRows++]) ushr 0
            val t3 = (SUB_MIX_0[s3 ushr 24] xor SUB_MIX_1[(s0 ushr 16) and 0xff] xor SUB_MIX_2[(s1 ushr 8) and 0xff] xor SUB_MIX_3[s2 and 0xff] xor keySchedule[ksRows++]) ushr 0
            s0 = t0
            s1 = t1
            s2 = t2
            s3 = t3
            round++
        }
    }
    val u0 = (((SBOX[s0 ushr 24] shl 24) or (SBOX[(s1 ushr 16) and 0xff] shl 16) or (SBOX[(s2 ushr 8) and 0xff] shl 8) or SBOX[s3 and 0xff]) xor keySchedule[ksRows++]) ushr 0
    val u1 = (((SBOX[s1 ushr 24] shl 24) or (SBOX[(s2 ushr 16) and 0xff] shl 16) or (SBOX[(s3 ushr 8) and 0xff] shl 8) or SBOX[s0 and 0xff]) xor keySchedule[ksRows++]) ushr 0
    val u2 = (((SBOX[s2 ushr 24] shl 24) or (SBOX[(s3 ushr 16) and 0xff] shl 16) or (SBOX[(s0 ushr 8) and 0xff] shl 8) or SBOX[s1 and 0xff]) xor keySchedule[ksRows++]) ushr 0
    val u3 = (((SBOX[s3 ushr 24] shl 24) or (SBOX[(s0 ushr 16) and 0xff] shl 16) or (SBOX[(s1 ushr 8) and 0xff] shl 8) or SBOX[s2 and 0xff]) xor keySchedule[ksRows++]) ushr 0
    M[offset] = u0
    M[offset + 1] = u1
    M[offset + 2] = u2
    M[offset + 3] = u3
}
fun aesBytesToWords(bytes: Uint8Array, off: Number): UTSArray<Number> {
    val w: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < 4){
            w.push(((bytes[off + i * 4] or 0) shl 24) or ((bytes[off + i * 4 + 1] or 0) shl 16) or ((bytes[off + i * 4 + 2] or 0) shl 8) or (bytes[off + i * 4 + 3] or 0))
            i++
        }
    }
    return w
}
fun aesWordsToBytes(words: UTSArray<Number>): Uint8Array {
    val out = Uint8Array(16)
    run {
        var i: Number = 0
        while(i < 4){
            out[i * 4] = (words[i] ushr 24) and 0xff
            out[i * 4 + 1] = (words[i] ushr 16) and 0xff
            out[i * 4 + 2] = (words[i] ushr 8) and 0xff
            out[i * 4 + 3] = words[i] and 0xff
            i++
        }
    }
    return out
}
fun aesEncryptBlock(block: Uint8Array, off: Number, keySchedule: UTSArray<Number>): Uint8Array {
    val words = aesBytesToWords(block, off)
    aesDoCryptBlock(words, 0, keySchedule, AES_SUB_MIX[0], AES_SUB_MIX[1], AES_SUB_MIX[2], AES_SUB_MIX[3], AES_SBOX)
    return aesWordsToBytes(words)
}
fun aesDecryptBlock(block: Uint8Array, off: Number, invKeySchedule: UTSArray<Number>): Uint8Array {
    val words = aesBytesToWords(block, off)
    var t: Number = words[1]
    words[1] = words[3]
    words[3] = t
    aesDoCryptBlock(words, 0, invKeySchedule, AES_INV_SUB_MIX[0], AES_INV_SUB_MIX[1], AES_INV_SUB_MIX[2], AES_INV_SUB_MIX[3], AES_INV_SBOX)
    t = words[1]
    words[1] = words[3]
    words[3] = t
    return aesWordsToBytes(words)
}
fun aesCipher(text: String, key: String, decrypt: Boolean): String {
    val pt = if (decrypt) {
        hexToBytes__1(text)
    } else {
        textToBytes__1(text)
    }
    val paddedLen: Number = if (decrypt) {
        pt.length
    } else {
        Math.ceil((pt.length + 1) / 16) * 16
    }
    val block = Uint8Array(paddedLen)
    copyBytes(pt, block, 0)
    if (!decrypt) {
        run {
            var i = pt.length
            while(i < paddedLen){
                block[i] = paddedLen - pt.length
                i++
            }
        }
    }
    val keyBytes = textToBytes__1(key)
    if (keyBytes.length != 16) {
        throw UTSError("AES 密钥必须为 16 字节（16 个 ASCII 字符）")
    }
    val schedule = if (decrypt) {
        aesInvExpandKeyWords(aesExpandKeyWords(keyBytes))
    } else {
        aesExpandKeyWords(keyBytes)
    }
    val out = Uint8Array(paddedLen)
    run {
        var off: Number = 0
        while(off < paddedLen){
            val res = if (decrypt) {
                aesDecryptBlock(block, off, schedule)
            } else {
                aesEncryptBlock(block, off, schedule)
            }
            run {
                var j: Number = 0
                while(j < 16){
                    out[off + j] = res[j]
                    j++
                }
            }
            off += 16
        }
    }
    if (!decrypt) {
        return bytesToHex__1(out)
    }
    val pad: Number = out[out.length - 1] or 0
    if (pad < 1 || pad > 16) {
        throw UTSError("AES 解密填充无效")
    }
    return bytesToText__1(subBytes__1(out, 0, out.length - pad))
}
val DES_IP = _uA(
    58,
    50,
    42,
    34,
    26,
    18,
    10,
    2,
    60,
    52,
    44,
    36,
    28,
    20,
    12,
    4,
    62,
    54,
    46,
    38,
    30,
    22,
    14,
    6,
    64,
    56,
    48,
    40,
    32,
    24,
    16,
    8,
    57,
    49,
    41,
    33,
    25,
    17,
    9,
    1,
    59,
    51,
    43,
    35,
    27,
    19,
    11,
    3,
    61,
    53,
    45,
    37,
    29,
    21,
    13,
    5,
    63,
    55,
    47,
    39,
    31,
    23,
    15,
    7
) as UTSArray<Number>
val DES_FP = _uA(
    40,
    8,
    48,
    16,
    56,
    24,
    64,
    32,
    39,
    7,
    47,
    15,
    55,
    23,
    63,
    31,
    38,
    6,
    46,
    14,
    54,
    22,
    62,
    30,
    37,
    5,
    45,
    13,
    53,
    21,
    61,
    29,
    36,
    4,
    44,
    12,
    52,
    20,
    60,
    28,
    35,
    3,
    43,
    11,
    51,
    19,
    59,
    27,
    34,
    2,
    42,
    10,
    50,
    18,
    58,
    26,
    33,
    1,
    41,
    9,
    49,
    17,
    57,
    25
) as UTSArray<Number>
val DES_E = _uA(
    32,
    1,
    2,
    3,
    4,
    5,
    4,
    5,
    6,
    7,
    8,
    9,
    8,
    9,
    10,
    11,
    12,
    13,
    12,
    13,
    14,
    15,
    16,
    17,
    16,
    17,
    18,
    19,
    20,
    21,
    20,
    21,
    22,
    23,
    24,
    25,
    24,
    25,
    26,
    27,
    28,
    29,
    28,
    29,
    30,
    31,
    32,
    1
) as UTSArray<Number>
val DES_P = _uA(
    16,
    7,
    20,
    21,
    29,
    12,
    28,
    17,
    1,
    15,
    23,
    26,
    5,
    18,
    31,
    10,
    2,
    8,
    24,
    14,
    32,
    27,
    3,
    9,
    19,
    13,
    30,
    6,
    22,
    11,
    4,
    25
) as UTSArray<Number>
val DES_PC1 = _uA(
    57,
    49,
    41,
    33,
    25,
    17,
    9,
    1,
    58,
    50,
    42,
    34,
    26,
    18,
    10,
    2,
    59,
    51,
    43,
    35,
    27,
    19,
    11,
    3,
    60,
    52,
    44,
    36,
    63,
    55,
    47,
    39,
    31,
    23,
    15,
    7,
    62,
    54,
    46,
    38,
    30,
    22,
    14,
    6,
    61,
    53,
    45,
    37,
    29,
    21,
    13,
    5,
    28,
    20,
    12,
    4
) as UTSArray<Number>
val DES_PC2 = _uA(
    14,
    17,
    11,
    24,
    1,
    5,
    3,
    28,
    15,
    6,
    21,
    10,
    23,
    19,
    12,
    4,
    26,
    8,
    16,
    7,
    27,
    20,
    13,
    2,
    41,
    52,
    31,
    37,
    47,
    55,
    30,
    40,
    51,
    45,
    33,
    48,
    44,
    49,
    39,
    56,
    34,
    53,
    46,
    42,
    50,
    36,
    29,
    32
) as UTSArray<Number>
val DES_SHIFTS = _uA(
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1
) as UTSArray<Number>
val DES_SBOX = _uA(
    _uA(
        14,
        4,
        13,
        1,
        2,
        15,
        11,
        8,
        3,
        10,
        6,
        12,
        5,
        9,
        0,
        7,
        0,
        15,
        7,
        4,
        14,
        2,
        13,
        1,
        10,
        6,
        12,
        11,
        9,
        5,
        3,
        8,
        4,
        1,
        14,
        8,
        13,
        6,
        2,
        11,
        15,
        12,
        9,
        7,
        3,
        10,
        5,
        0,
        15,
        12,
        8,
        2,
        4,
        9,
        1,
        7,
        5,
        11,
        3,
        14,
        10,
        0,
        6,
        13
    ),
    _uA(
        15,
        1,
        8,
        14,
        6,
        11,
        3,
        4,
        9,
        7,
        2,
        13,
        12,
        0,
        5,
        10,
        3,
        13,
        4,
        7,
        15,
        2,
        8,
        14,
        12,
        0,
        1,
        10,
        6,
        9,
        11,
        5,
        0,
        14,
        7,
        11,
        10,
        4,
        13,
        1,
        5,
        8,
        12,
        6,
        9,
        3,
        2,
        15,
        13,
        8,
        10,
        1,
        3,
        15,
        4,
        2,
        11,
        6,
        7,
        12,
        0,
        5,
        14,
        9
    ),
    _uA(
        10,
        0,
        9,
        14,
        6,
        3,
        15,
        5,
        1,
        13,
        12,
        7,
        11,
        4,
        2,
        8,
        13,
        7,
        0,
        9,
        3,
        4,
        6,
        10,
        2,
        8,
        5,
        14,
        12,
        11,
        15,
        1,
        13,
        6,
        4,
        9,
        8,
        15,
        3,
        0,
        11,
        1,
        2,
        12,
        5,
        10,
        14,
        7,
        1,
        10,
        13,
        0,
        6,
        9,
        8,
        7,
        4,
        15,
        14,
        3,
        11,
        5,
        2,
        12
    ),
    _uA(
        7,
        13,
        14,
        3,
        0,
        6,
        9,
        10,
        1,
        2,
        8,
        5,
        11,
        12,
        4,
        15,
        13,
        8,
        11,
        5,
        6,
        15,
        0,
        3,
        4,
        7,
        2,
        12,
        1,
        10,
        14,
        9,
        10,
        6,
        9,
        0,
        12,
        11,
        7,
        13,
        15,
        1,
        3,
        14,
        5,
        2,
        8,
        4,
        3,
        15,
        0,
        6,
        10,
        1,
        13,
        8,
        9,
        4,
        5,
        11,
        12,
        7,
        2,
        14
    ),
    _uA(
        2,
        12,
        4,
        1,
        7,
        10,
        11,
        6,
        8,
        5,
        3,
        15,
        13,
        0,
        14,
        9,
        14,
        11,
        2,
        12,
        4,
        7,
        13,
        1,
        5,
        0,
        15,
        10,
        3,
        9,
        8,
        6,
        4,
        2,
        1,
        11,
        10,
        13,
        7,
        8,
        15,
        9,
        12,
        5,
        6,
        3,
        0,
        14,
        11,
        8,
        12,
        7,
        1,
        14,
        2,
        13,
        6,
        15,
        0,
        9,
        10,
        4,
        5,
        3
    ),
    _uA(
        12,
        1,
        10,
        15,
        9,
        2,
        6,
        8,
        0,
        13,
        3,
        4,
        14,
        7,
        5,
        11,
        10,
        15,
        4,
        2,
        7,
        12,
        9,
        5,
        6,
        1,
        13,
        14,
        0,
        11,
        3,
        8,
        9,
        14,
        15,
        5,
        2,
        8,
        12,
        3,
        7,
        0,
        4,
        10,
        1,
        13,
        11,
        6,
        4,
        3,
        2,
        12,
        9,
        5,
        15,
        10,
        11,
        14,
        1,
        7,
        6,
        0,
        8,
        13
    ),
    _uA(
        4,
        11,
        2,
        14,
        15,
        0,
        8,
        13,
        3,
        12,
        9,
        7,
        5,
        10,
        6,
        1,
        13,
        0,
        11,
        7,
        4,
        9,
        1,
        10,
        14,
        3,
        5,
        12,
        2,
        15,
        8,
        6,
        1,
        4,
        11,
        13,
        12,
        3,
        7,
        14,
        10,
        15,
        6,
        8,
        0,
        5,
        9,
        2,
        6,
        11,
        13,
        8,
        1,
        4,
        10,
        7,
        9,
        5,
        0,
        15,
        14,
        2,
        3,
        12
    ),
    _uA(
        13,
        2,
        8,
        4,
        6,
        15,
        11,
        1,
        10,
        9,
        3,
        14,
        5,
        0,
        12,
        7,
        1,
        15,
        13,
        8,
        10,
        3,
        7,
        4,
        12,
        5,
        6,
        11,
        0,
        14,
        9,
        2,
        7,
        11,
        4,
        1,
        9,
        12,
        14,
        2,
        0,
        6,
        10,
        13,
        15,
        3,
        5,
        8,
        2,
        1,
        14,
        7,
        4,
        10,
        8,
        13,
        15,
        12,
        9,
        0,
        3,
        5,
        6,
        11
    )
) as UTSArray<UTSArray<Number>>
fun desBytesToBits(bytes: Uint8Array): UTSArray<Number> {
    val bits: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < bytes.length){
            val b = bytes[i] or 0
            run {
                var j: Number = 7
                while(j >= 0){
                    bits.push((b shr j) and 1)
                    j--
                }
            }
            i++
        }
    }
    return bits
}
fun desBitsToBytes(bits: UTSArray<Number>): Uint8Array {
    val out = Uint8Array(bits.length / 8)
    run {
        var i: Number = 0
        while(i < out.length){
            var v: Number = 0
            run {
                var j: Number = 0
                while(j < 8){
                    v = (v shl 1) or bits[i * 8 + j]
                    j++
                }
            }
            out[i] = v
            i++
        }
    }
    return out
}
fun desPermute(bits: UTSArray<Number>, table: UTSArray<Number>): UTSArray<Number> {
    val out: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < table.length){
            out.push(bits[table[i] - 1])
            i++
        }
    }
    return out
}
fun desRotateLeft(bits: UTSArray<Number>, shift: Number): UTSArray<Number> {
    return bits.slice(shift).concat(bits.slice(0, shift))
}
fun desBitsToNum(bits: UTSArray<Number>): Number {
    var v: Number = 0
    run {
        var i: Number = 0
        while(i < bits.length){
            v = ((v shl 1) or bits[i]) ushr 0
            i++
        }
    }
    return v
}
fun desSubKeys(key: Uint8Array): UTSArray<UTSArray<Number>> {
    var cd: UTSArray<Number> = desPermute(desBytesToBits(key), DES_PC1)
    val subkeys: UTSArray<UTSArray<Number>> = _uA()
    run {
        var i: Number = 0
        while(i < 16){
            val c = desRotateLeft(cd.slice(0, 28), DES_SHIFTS[i])
            val d = desRotateLeft(cd.slice(28), DES_SHIFTS[i])
            cd = c.concat(d)
            subkeys.push(desPermute(cd, DES_PC2))
            i++
        }
    }
    return subkeys
}
fun desFeistel(rBits: UTSArray<Number>, subkey: UTSArray<Number>): UTSArray<Number> {
    val expanded = desPermute(rBits, DES_E)
    val xored: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < 48){
            xored.push(expanded[i] xor subkey[i])
            i++
        }
    }
    var sboxOut: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < 8){
            val group = xored.slice(i * 6, i * 6 + 6)
            val row = (group[0] shl 1) or group[5]
            val col = desBitsToNum(group.slice(1, 5))
            val kVal = DES_SBOX[i][row * 16 + col]
            sboxOut = sboxOut.concat(_uA(
                (kVal shr 3) and 1,
                (kVal shr 2) and 1,
                (kVal shr 1) and 1,
                kVal and 1
            ))
            i++
        }
    }
    return desPermute(sboxOut, DES_P)
}
fun desProcessBlock(block: Uint8Array, off: Number, subkeys: UTSArray<UTSArray<Number>>): Uint8Array {
    val blockBits: UTSArray<Number> = _uA()
    run {
        var i: Number = 0
        while(i < 8){
            val b = block[off + i] or 0
            run {
                var j: Number = 7
                while(j >= 0){
                    blockBits.push((b shr j) and 1)
                    j--
                }
            }
            i++
        }
    }
    var bits: UTSArray<Number> = desPermute(blockBits, DES_IP)
    var l: UTSArray<Number> = bits.slice(0, 32)
    var r: UTSArray<Number> = bits.slice(32)
    run {
        var i: Number = 0
        while(i < 16){
            val f = desFeistel(r, subkeys[i])
            val nr: UTSArray<Number> = _uA()
            run {
                var j: Number = 0
                while(j < 32){
                    nr.push(l[j] xor f[j])
                    j++
                }
            }
            l = r
            r = nr
            i++
        }
    }
    return desBitsToBytes(desPermute(r.concat(l), DES_FP))
}
fun desCipher(text: String, key: String, decrypt: Boolean): String {
    val pt = if (decrypt) {
        hexToBytes__1(text)
    } else {
        textToBytes__1(text)
    }
    val paddedLen: Number = if (decrypt) {
        pt.length
    } else {
        Math.ceil((pt.length + 1) / 8) * 8
    }
    val block = Uint8Array(paddedLen)
    copyBytes(pt, block, 0)
    if (!decrypt) {
        run {
            var i = pt.length
            while(i < paddedLen){
                block[i] = paddedLen - pt.length
                i++
            }
        }
    }
    val keyBytes = textToBytes__1(key)
    if (keyBytes.length != 8) {
        throw UTSError("DES 密钥必须为 8 字节（8 个 ASCII 字符）")
    }
    val subkeys = desSubKeys(keyBytes)
    if (decrypt) {
        subkeys.reverse()
    }
    val out = Uint8Array(paddedLen)
    run {
        var off: Number = 0
        while(off < paddedLen){
            val res = desProcessBlock(block, off, subkeys)
            run {
                var j: Number = 0
                while(j < 8){
                    out[off + j] = res[j]
                    j++
                }
            }
            off += 8
        }
    }
    if (!decrypt) {
        return bytesToHex__1(out)
    }
    val pad: Number = out[out.length - 1] or 0
    if (pad < 1 || pad > 8) {
        throw UTSError("DES 解密填充无效")
    }
    return bytesToText__1(subBytes__1(out, 0, out.length - pad))
}
fun base64Encode(text: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(bytesToBase64(textToBytes__1(text)))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun base64Decode(base64: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(bytesToText__1(base64ToBytes(base64)))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun md5(text: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(md5Bytes(textToBytes__1(text)))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun sha256(text: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(sha256Bytes(textToBytes__1(text)))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun hmacSha1(text: String, key: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(hmacSha1Bytes(text, key))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun aesEncrypt(text: String, key: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(aesCipher(text, key, false))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun aesDecrypt(hex: String, key: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(aesCipher(hex, key, true))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun desEncrypt(text: String, key: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(desCipher(text, key, false))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun desDecrypt(hex: String, key: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(desCipher(hex, key, true))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun rsaGenerateKeyPair(bits: Number): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(rsaGenerateKeyPairUts(bits))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun rsaEncrypt(text: String, publicKey: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(rsaEncryptUts(text, publicKey))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun rsaDecrypt(hex: String, privateKey: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(rsaDecryptUts(hex, privateKey))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun hashHex(data: Uint8Array, hashType: String): String {
    if (hashType == "MD5") {
        return md5Bytes(data)
    }
    if (hashType == "SHA-1" || hashType == "SHA1") {
        return sha1Bytes(data)
    }
    return sha256Bytes(data)
}
fun rsaSign(text: String, privateKey: String, hashType: String): UTSPromise<String> {
    return UTSPromise<String>(fun(resolve, reject){
        try {
            resolve(rsaSignUts(hashHex(textToBytes__1(text), hashType), hashType, privateKey))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun rsaVerify(text: String, publicKey: String, sigHex: String, hashType: String): UTSPromise<Boolean> {
    return UTSPromise<Boolean>(fun(resolve, reject){
        try {
            resolve(rsaVerifyUts(hashHex(textToBytes__1(text), hashType), hashType, publicKey, sigHex))
        }
         catch (e: Throwable) {
            reject(e)
        }
    }
    )
}
fun generateUUID(): String {
    try {
        return java.util.UUID.randomUUID().toString()
    }
     catch (_e: Throwable) {}
    val hexDigits = "0123456789abcdef"
    var s = ""
    run {
        var i: Number = 0
        while(i < 36){
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                s += "-"
            } else if (i == 14) {
                s += "4"
            } else {
                val r = Math.floor(Math.random() * 16)
                val kVal = if ((i == 19)) {
                    ((r and 0x3) or 0x8)
                } else {
                    r
                }
                s += hexDigits.charAt(kVal)
            }
            i++
        }
    }
    return s
}
val GenSrcPagesFunctionComponentsCryptoDemoCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsCryptoDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsCryptoDemoCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsCryptoDemoCard.inject, props = GenSrcPagesFunctionComponentsCryptoDemoCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsCryptoDemoCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsCryptoDemoCard.emits, components = GenSrcPagesFunctionComponentsCryptoDemoCard.components, styles = GenSrcPagesFunctionComponentsCryptoDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsCryptoDemoCard.setup(props as GenSrcPagesFunctionComponentsCryptoDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsCryptoDemoCard {
    return GenSrcPagesFunctionComponentsCryptoDemoCard(instance)
}
)
val SECONDS_A_MINUTE: Number = 60
val SECONDS_A_HOUR = SECONDS_A_MINUTE * 60
val SECONDS_A_DAY = SECONDS_A_HOUR * 24
val SECONDS_A_WEEK = SECONDS_A_DAY * 7
val MILLISECONDS_A_SECOND: Number = 1e3
val MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND
val MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND
val MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND
val MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND
val MS = "millisecond"
val S = "second"
val MIN = "minute"
val H = "hour"
val D = "day"
val W = "week"
val M = "month"
val Q = "quarter"
val Y = "year"
val DATE = "date"
val FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ"
val INVALID_DATE_STRING = "Invalid Date"
val REGEX_PARSE = UTSRegExp("^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?\$", "")
open class DayutsConfig (
    open var date: Any? = null,
    open var format: String? = null,
    open var locale: String? = null,
) : UTSObject()
typealias DayutsUnit = String
open class DayutsFormats (
    @JsonNotNull
    open var LT: String,
    @JsonNotNull
    open var LTS: String,
    @JsonNotNull
    @get:JvmName("getL0")
    @set:JvmName("setL0")
    open var L: String,
    @JsonNotNull
    open var LL: String,
    @JsonNotNull
    open var LLL: String,
    @JsonNotNull
    open var LLLL: String,
    @JsonNotNull
    @get:JvmName("getL1")
    @set:JvmName("setL1")
    open var l: String,
    @JsonNotNull
    open var ll: String,
    @JsonNotNull
    open var lll: String,
    @JsonNotNull
    open var llll: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return DayutsFormatsReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class DayutsFormatsReactiveObject : DayutsFormats, IUTSReactive<DayutsFormats> {
    override var __v_raw: DayutsFormats
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: DayutsFormats, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(LT = __v_raw.LT, LTS = __v_raw.LTS, L = __v_raw.L, LL = __v_raw.LL, LLL = __v_raw.LLL, LLLL = __v_raw.LLLL, l = __v_raw.l, ll = __v_raw.ll, lll = __v_raw.lll, llll = __v_raw.llll) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): DayutsFormatsReactiveObject {
        return DayutsFormatsReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var LT: String
        get() {
            return _tRG(__v_raw, "LT", __v_raw.LT, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("LT")) {
                return
            }
            val oldValue = __v_raw.LT
            __v_raw.LT = value
            _tRS(__v_raw, "LT", oldValue, value)
        }
    override var LTS: String
        get() {
            return _tRG(__v_raw, "LTS", __v_raw.LTS, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("LTS")) {
                return
            }
            val oldValue = __v_raw.LTS
            __v_raw.LTS = value
            _tRS(__v_raw, "LTS", oldValue, value)
        }
    override var L: String
        @JvmName("getL0")
        get() {
            return _tRG(__v_raw, "L", __v_raw.L, __v_isReadonly, __v_isShallow)
        }
        @JvmName("setL0")
        set(value) {
            if (!__v_canSet("L")) {
                return
            }
            val oldValue = __v_raw.L
            __v_raw.L = value
            _tRS(__v_raw, "L", oldValue, value)
        }
    override var LL: String
        get() {
            return _tRG(__v_raw, "LL", __v_raw.LL, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("LL")) {
                return
            }
            val oldValue = __v_raw.LL
            __v_raw.LL = value
            _tRS(__v_raw, "LL", oldValue, value)
        }
    override var LLL: String
        get() {
            return _tRG(__v_raw, "LLL", __v_raw.LLL, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("LLL")) {
                return
            }
            val oldValue = __v_raw.LLL
            __v_raw.LLL = value
            _tRS(__v_raw, "LLL", oldValue, value)
        }
    override var LLLL: String
        get() {
            return _tRG(__v_raw, "LLLL", __v_raw.LLLL, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("LLLL")) {
                return
            }
            val oldValue = __v_raw.LLLL
            __v_raw.LLLL = value
            _tRS(__v_raw, "LLLL", oldValue, value)
        }
    override var l: String
        @JvmName("getL1")
        get() {
            return _tRG(__v_raw, "l", __v_raw.l, __v_isReadonly, __v_isShallow)
        }
        @JvmName("setL1")
        set(value) {
            if (!__v_canSet("l")) {
                return
            }
            val oldValue = __v_raw.l
            __v_raw.l = value
            _tRS(__v_raw, "l", oldValue, value)
        }
    override var ll: String
        get() {
            return _tRG(__v_raw, "ll", __v_raw.ll, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("ll")) {
                return
            }
            val oldValue = __v_raw.ll
            __v_raw.ll = value
            _tRS(__v_raw, "ll", oldValue, value)
        }
    override var lll: String
        get() {
            return _tRG(__v_raw, "lll", __v_raw.lll, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("lll")) {
                return
            }
            val oldValue = __v_raw.lll
            __v_raw.lll = value
            _tRS(__v_raw, "lll", oldValue, value)
        }
    override var llll: String
        get() {
            return _tRG(__v_raw, "llll", __v_raw.llll, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("llll")) {
                return
            }
            val oldValue = __v_raw.llll
            __v_raw.llll = value
            _tRS(__v_raw, "llll", oldValue, value)
        }
}
open class DayutsRelativeTime (
    @JsonNotNull
    open var future: String,
    @JsonNotNull
    open var past: String,
    @JsonNotNull
    open var s: String,
    @JsonNotNull
    @get:JvmName("getM0")
    @set:JvmName("setM0")
    open var m: String,
    @JsonNotNull
    open var mm: String,
    @JsonNotNull
    open var h: String,
    @JsonNotNull
    open var hh: String,
    @JsonNotNull
    open var d: String,
    @JsonNotNull
    open var dd: String,
    @JsonNotNull
    @get:JvmName("getM1")
    @set:JvmName("setM1")
    open var M: String,
    @JsonNotNull
    open var MM: String,
    @JsonNotNull
    open var y: String,
    @JsonNotNull
    open var yy: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return DayutsRelativeTimeReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class DayutsRelativeTimeReactiveObject : DayutsRelativeTime, IUTSReactive<DayutsRelativeTime> {
    override var __v_raw: DayutsRelativeTime
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: DayutsRelativeTime, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(future = __v_raw.future, past = __v_raw.past, s = __v_raw.s, m = __v_raw.m, mm = __v_raw.mm, h = __v_raw.h, hh = __v_raw.hh, d = __v_raw.d, dd = __v_raw.dd, M = __v_raw.M, MM = __v_raw.MM, y = __v_raw.y, yy = __v_raw.yy) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): DayutsRelativeTimeReactiveObject {
        return DayutsRelativeTimeReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var future: String
        get() {
            return _tRG(__v_raw, "future", __v_raw.future, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("future")) {
                return
            }
            val oldValue = __v_raw.future
            __v_raw.future = value
            _tRS(__v_raw, "future", oldValue, value)
        }
    override var past: String
        get() {
            return _tRG(__v_raw, "past", __v_raw.past, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("past")) {
                return
            }
            val oldValue = __v_raw.past
            __v_raw.past = value
            _tRS(__v_raw, "past", oldValue, value)
        }
    override var s: String
        get() {
            return _tRG(__v_raw, "s", __v_raw.s, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("s")) {
                return
            }
            val oldValue = __v_raw.s
            __v_raw.s = value
            _tRS(__v_raw, "s", oldValue, value)
        }
    override var m: String
        @JvmName("getM0")
        get() {
            return _tRG(__v_raw, "m", __v_raw.m, __v_isReadonly, __v_isShallow)
        }
        @JvmName("setM0")
        set(value) {
            if (!__v_canSet("m")) {
                return
            }
            val oldValue = __v_raw.m
            __v_raw.m = value
            _tRS(__v_raw, "m", oldValue, value)
        }
    override var mm: String
        get() {
            return _tRG(__v_raw, "mm", __v_raw.mm, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("mm")) {
                return
            }
            val oldValue = __v_raw.mm
            __v_raw.mm = value
            _tRS(__v_raw, "mm", oldValue, value)
        }
    override var h: String
        get() {
            return _tRG(__v_raw, "h", __v_raw.h, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("h")) {
                return
            }
            val oldValue = __v_raw.h
            __v_raw.h = value
            _tRS(__v_raw, "h", oldValue, value)
        }
    override var hh: String
        get() {
            return _tRG(__v_raw, "hh", __v_raw.hh, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("hh")) {
                return
            }
            val oldValue = __v_raw.hh
            __v_raw.hh = value
            _tRS(__v_raw, "hh", oldValue, value)
        }
    override var d: String
        get() {
            return _tRG(__v_raw, "d", __v_raw.d, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("d")) {
                return
            }
            val oldValue = __v_raw.d
            __v_raw.d = value
            _tRS(__v_raw, "d", oldValue, value)
        }
    override var dd: String
        get() {
            return _tRG(__v_raw, "dd", __v_raw.dd, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("dd")) {
                return
            }
            val oldValue = __v_raw.dd
            __v_raw.dd = value
            _tRS(__v_raw, "dd", oldValue, value)
        }
    override var M: String
        @JvmName("getM1")
        get() {
            return _tRG(__v_raw, "M", __v_raw.M, __v_isReadonly, __v_isShallow)
        }
        @JvmName("setM1")
        set(value) {
            if (!__v_canSet("M")) {
                return
            }
            val oldValue = __v_raw.M
            __v_raw.M = value
            _tRS(__v_raw, "M", oldValue, value)
        }
    override var MM: String
        get() {
            return _tRG(__v_raw, "MM", __v_raw.MM, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("MM")) {
                return
            }
            val oldValue = __v_raw.MM
            __v_raw.MM = value
            _tRS(__v_raw, "MM", oldValue, value)
        }
    override var y: String
        get() {
            return _tRG(__v_raw, "y", __v_raw.y, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("y")) {
                return
            }
            val oldValue = __v_raw.y
            __v_raw.y = value
            _tRS(__v_raw, "y", oldValue, value)
        }
    override var yy: String
        get() {
            return _tRG(__v_raw, "yy", __v_raw.yy, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("yy")) {
                return
            }
            val oldValue = __v_raw.yy
            __v_raw.yy = value
            _tRS(__v_raw, "yy", oldValue, value)
        }
}
open class DayutsLocale (
    @JsonNotNull
    open var name: String,
    @JsonNotNull
    open var weekdays: UTSArray<String>,
    open var weekdaysShort: UTSArray<String>? = null,
    open var weekdaysMin: UTSArray<String>? = null,
    @JsonNotNull
    open var months: UTSArray<String>,
    open var monthsShort: UTSArray<String>? = null,
    open var ordinal: (number: Number, period: String) -> String,
    open var weekStart: Number? = null,
    open var yearStart: Number? = null,
    open var formats: DayutsFormats? = null,
    open var relativeTime: DayutsRelativeTime? = null,
    open var meridiem: ((hour: Number, minute: Number, isLowercase: Boolean) -> String)? = null,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return DayutsLocaleReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class DayutsLocaleReactiveObject : DayutsLocale, IUTSReactive<DayutsLocale> {
    override var __v_raw: DayutsLocale
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: DayutsLocale, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(name = __v_raw.name, weekdays = __v_raw.weekdays, weekdaysShort = __v_raw.weekdaysShort, weekdaysMin = __v_raw.weekdaysMin, months = __v_raw.months, monthsShort = __v_raw.monthsShort, ordinal = __v_raw.ordinal, weekStart = __v_raw.weekStart, yearStart = __v_raw.yearStart, formats = __v_raw.formats, relativeTime = __v_raw.relativeTime, meridiem = __v_raw.meridiem) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): DayutsLocaleReactiveObject {
        return DayutsLocaleReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var name: String
        get() {
            return _tRG(__v_raw, "name", __v_raw.name, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("name")) {
                return
            }
            val oldValue = __v_raw.name
            __v_raw.name = value
            _tRS(__v_raw, "name", oldValue, value)
        }
    override var weekdays: UTSArray<String>
        get() {
            return _tRG(__v_raw, "weekdays", __v_raw.weekdays, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("weekdays")) {
                return
            }
            val oldValue = __v_raw.weekdays
            __v_raw.weekdays = value
            _tRS(__v_raw, "weekdays", oldValue, value)
        }
    override var weekdaysShort: UTSArray<String>?
        get() {
            return _tRG(__v_raw, "weekdaysShort", __v_raw.weekdaysShort, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("weekdaysShort")) {
                return
            }
            val oldValue = __v_raw.weekdaysShort
            __v_raw.weekdaysShort = value
            _tRS(__v_raw, "weekdaysShort", oldValue, value)
        }
    override var weekdaysMin: UTSArray<String>?
        get() {
            return _tRG(__v_raw, "weekdaysMin", __v_raw.weekdaysMin, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("weekdaysMin")) {
                return
            }
            val oldValue = __v_raw.weekdaysMin
            __v_raw.weekdaysMin = value
            _tRS(__v_raw, "weekdaysMin", oldValue, value)
        }
    override var months: UTSArray<String>
        get() {
            return _tRG(__v_raw, "months", __v_raw.months, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("months")) {
                return
            }
            val oldValue = __v_raw.months
            __v_raw.months = value
            _tRS(__v_raw, "months", oldValue, value)
        }
    override var monthsShort: UTSArray<String>?
        get() {
            return _tRG(__v_raw, "monthsShort", __v_raw.monthsShort, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("monthsShort")) {
                return
            }
            val oldValue = __v_raw.monthsShort
            __v_raw.monthsShort = value
            _tRS(__v_raw, "monthsShort", oldValue, value)
        }
    override var weekStart: Number?
        get() {
            return _tRG(__v_raw, "weekStart", __v_raw.weekStart, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("weekStart")) {
                return
            }
            val oldValue = __v_raw.weekStart
            __v_raw.weekStart = value
            _tRS(__v_raw, "weekStart", oldValue, value)
        }
    override var yearStart: Number?
        get() {
            return _tRG(__v_raw, "yearStart", __v_raw.yearStart, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("yearStart")) {
                return
            }
            val oldValue = __v_raw.yearStart
            __v_raw.yearStart = value
            _tRS(__v_raw, "yearStart", oldValue, value)
        }
    override var formats: DayutsFormats?
        get() {
            return _tRG(__v_raw, "formats", __v_raw.formats, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("formats")) {
                return
            }
            val oldValue = __v_raw.formats
            __v_raw.formats = value
            _tRS(__v_raw, "formats", oldValue, value)
        }
    override var relativeTime: DayutsRelativeTime?
        get() {
            return _tRG(__v_raw, "relativeTime", __v_raw.relativeTime, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("relativeTime")) {
                return
            }
            val oldValue = __v_raw.relativeTime
            __v_raw.relativeTime = value
            _tRS(__v_raw, "relativeTime", oldValue, value)
        }
}
open class DayutsObject (
    @JsonNotNull
    open var years: Number,
    @JsonNotNull
    open var months: Number,
    @JsonNotNull
    open var date: Number,
    @JsonNotNull
    open var hours: Number,
    @JsonNotNull
    open var minutes: Number,
    @JsonNotNull
    open var seconds: Number,
    @JsonNotNull
    open var milliseconds: Number,
) : UTSObject()
val default__3 = DayutsLocale(name = "en", weekdays = _uA(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
), months = _uA(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
), relativeTime = DayutsRelativeTime(future = "in %s", past = "%s ago", s = "a few seconds", m = "a minute", mm = "%d minutes", h = "an hour", hh = "%d hours", d = "a day", dd = "%d days", M = "a month", MM = "%d months", y = "a year", yy = "%d years"), ordinal = fun(n: Number, _: String): String {
    val s = _uA(
        "th",
        "st",
        "nd",
        "rd"
    )
    val v = n % 100
    val i = (v - 20) % 10
    val k = if (i < s.length) {
        i
    } else {
        if (v < s.length) {
            v
        } else {
            0
        }
    }
    return "[" + n + s[k] + "]"
}
)
val locale = DayutsLocale(name = "zh-cn", weekdays = _uA(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
), weekdaysShort = _uA(
    "周日",
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六"
), weekdaysMin = _uA(
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六"
), months = _uA(
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
), monthsShort = _uA(
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
), ordinal = fun(number: Number, period: String): String {
    if (period == "W") {
        return "" + number + "周"
    }
    return "" + number + "日"
}
, weekStart = 1, yearStart = 4, formats = DayutsFormats(LT = "HH:mm", LTS = "HH:mm:ss", L = "YYYY/MM/DD", LL = "YYYY年M月D日", LLL = "YYYY年M月D日Ah点mm分", LLLL = "YYYY年M月D日ddddAh点mm分", l = "YYYY/M/D", ll = "YYYY年M月D日", lll = "YYYY年M月D日 HH:mm", llll = "YYYY年M月D日dddd HH:mm"), relativeTime = DayutsRelativeTime(future = "%s内", past = "%s前", s = "几秒", m = "1 分钟", mm = "%d 分钟", h = "1 小时", hh = "%d 小时", d = "1 天", dd = "%d 天", M = "1 个月", MM = "%d 个月", y = "1 年", yy = "%d 年"), meridiem = fun(hour: Number, minute: Number, _: Boolean): String {
    val hm = (hour * 100) + minute
    if (hm < 600) {
        return "凌晨"
    } else if (hm < 900) {
        return "早上"
    } else if (hm < 1100) {
        return "上午"
    } else if (hm < 1300) {
        return "中午"
    } else if (hm < 1800) {
        return "下午"
    }
    return "晚上"
}
)
val localesMap = Map<String, DayutsLocale>()
open class LocaleState (
    @JsonNotNull
    open var lang: String,
    @JsonNotNull
    open var locales: Map<String, DayutsLocale>,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return LocaleStateReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class LocaleStateReactiveObject : LocaleState, IUTSReactive<LocaleState> {
    override var __v_raw: LocaleState
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: LocaleState, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(lang = __v_raw.lang, locales = __v_raw.locales) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): LocaleStateReactiveObject {
        return LocaleStateReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var lang: String
        get() {
            return _tRG(__v_raw, "lang", __v_raw.lang, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("lang")) {
                return
            }
            val oldValue = __v_raw.lang
            __v_raw.lang = value
            _tRS(__v_raw, "lang", oldValue, value)
        }
    override var locales: Map<String, DayutsLocale>
        get() {
            return _tRG(__v_raw, "locales", __v_raw.locales, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("locales")) {
                return
            }
            val oldValue = __v_raw.locales
            __v_raw.locales = value
            _tRS(__v_raw, "locales", oldValue, value)
        }
}
var localeState = reactive(LocaleState(lang = "en", locales = localesMap))
val runBlock7 = run {
    localeState.locales.set("en", default__3)
    localeState.locales.set("zh-cn", locale)
}
open class DayutsIntl {
    constructor(){}
    open fun use(locale: DayutsLocale): DayutsIntl {
        localeState.locales.set(locale.name, locale)
        return this
    }
    open var locale: String
        get(): String {
            return localeState.lang
        }
        set(locale: String) {
            if (localeState.locales.has(locale)) {
                localeState.lang = locale
            } else {
                var list: UTSArray<String> = _uA()
                localeState.locales.forEach(fun(_: Any, key: String) {
                    list.push(key)
                }
                )
                console.warn("未知语言: \"" + locale + "\". 请使用以下已知语言之一:" + list.join(", "))
            }
        }
    open fun set(name: String, locale: DayutsLocale) {
        localeState.locales.set(name, locale)
    }
    open fun has(name: String): Boolean {
        return localeState.locales.has(name)
    }
}
val dayutsIntl = DayutsIntl()
open class Threshold (
    @JsonNotNull
    open var l: String,
    open var r: Number? = null,
    open var d: DayutsUnit? = null,
) : UTSObject()
fun padStart(string: String, length: Number, pad: String): String {
    val str = string
    if (str.length >= length) {
        return str
    }
    return str.padStart(length, pad)
}
fun parseLocale(preset: String?): String? {
    return parseLocale(preset as Any?, null, false)
}
fun parseLocale(preset: DayutsLocale?): String? {
    return parseLocale(preset as Any?, null, false)
}
fun parseLocale(preset: String, kObject: DayutsLocale?, isLocal: Boolean): String? {
    return parseLocale(preset as Any?, kObject as DayutsLocale?, isLocal as Boolean)
}
fun parseLocale(preset: DayutsLocale, kObject: DayutsLocale, isLocal: Boolean): String? {
    return parseLocale(preset as Any?, kObject as DayutsLocale?, isLocal as Boolean)
}
fun parseLocale(preset: Any?, kObject: DayutsLocale? = null, isLocal: Boolean = false): String? {
    var l: String? = null
    if (preset == null) {
        return dayutsIntl.locale
    }
    if (UTSAndroid.`typeof`(preset) == "string") {
        val presetLower = (preset as String).toLowerCase()
        if (dayutsIntl.has(presetLower)) {
            l = presetLower
        }
        if (kObject != null) {
            dayutsIntl.set(presetLower, kObject)
            l = presetLower
        }
        val presetSplit = (preset as String).split("-")
        if (l == null && presetSplit.length > 1) {
            return parseLocale(presetSplit[0])
        }
    } else if (preset is DayutsLocale) {
        dayutsIntl.set(preset.name, preset)
        l = preset.name
    }
    if (!isLocal && l != null) {
        dayutsIntl.locale = l
    }
    return l ?: dayutsIntl.locale
}
fun padZoneStr(instance: Dayuts): String {
    val negMinutes = -instance.utcOffset()
    val minutes = Math.abs(negMinutes)
    val hourOffset = Math.floor(minutes / 60)
    val minuteOffset = minutes % 60
    return "" + (if (negMinutes <= 0) {
        "+"
    } else {
        "-"
    }
    ) + padStart(hourOffset.toString(10), 2, "0") + ":" + padStart(minuteOffset.toString(10), 2, "0")
}
fun isNumber__1(value: Any?): Boolean {
    return _uA(
        "Byte",
        "UByte",
        "Short",
        "UShort",
        "Int",
        "UInt",
        "Long",
        "ULong",
        "Float",
        "Double",
        "number"
    ).includes(UTSAndroid.`typeof`(value))
}
fun tryParseNumberAtIndex(digits: UTSArray<Any?>, index: Number): Number? {
    if (index >= 0 && index < digits.length) {
        if (digits[index] == null) {
            return null
        }
        val parsedNumber = if (isNumber__1(digits[index])) {
            digits[index] as Number
        } else {
            parseInt("" + digits[index], 10)
        }
        if (!isNaN(parsedNumber)) {
            return parsedNumber
        }
    }
    return null
}
fun createDateFromArray(d: UTSArray<Any?>, offset: Number = 0): Date {
    val year = tryParseNumberAtIndex(d, 1 - offset) ?: Date().getFullYear()
    val month = (tryParseNumberAtIndex(d, 2 - offset) ?: 1) - 1
    val day = tryParseNumberAtIndex(d, 3 - offset) ?: 1
    val hour = tryParseNumberAtIndex(d, 4 - offset) ?: 0
    val minute = tryParseNumberAtIndex(d, 5 - offset) ?: 0
    val second = tryParseNumberAtIndex(d, 6 - offset) ?: 0
    val millisecond = (tryParseNumberAtIndex(d, 7 - offset) ?: 0).toString(10).substring(0, 3)
    return Date(year, month, day, hour, minute, second, parseInt(millisecond))
}
fun parseDate(cfg: DayutsConfig): Date? {
    val date = cfg.date
    if (date == null) {
        return Date()
    }
    if (date is Date) {
        return date as Date
    }
    try {
        if (UTSAndroid.`typeof`(date) == "string" && !UTSRegExp("Z\$", "i").test(date as String)) {
            val d = (date as String).match(REGEX_PARSE)
            val isNull = d == null || UTSArray.isArray(d) && d.length == 0
            if (!isNull) {
                return createDateFromArray(d as UTSArray<Any?>)
            }
        }
        if (UTSAndroid.`typeof`(date) == "string") {
            return Date(date as String)
        }
        if (UTSArray.isArray(date)) {
            return createDateFromArray(date as UTSArray<Any?>, 1)
        }
        if (isNumber__1(date)) {
            return Date(date as Number)
        }
        return null
    }
     catch (err: Throwable) {
        return null
    }
}
fun wrapper(date: Any, instance: Dayuts): Dayuts {
    return dayuts(date, instance.`$L`)
}
fun prettyUnit(u: String): DayutsUnit {
    val special = Map<String, String>(_uA(
        _uA(
            "M",
            M
        ),
        _uA(
            "y",
            Y
        ),
        _uA(
            "w",
            W
        ),
        _uA(
            "d",
            D
        ),
        _uA(
            "D",
            DATE
        ),
        _uA(
            "h",
            H
        ),
        _uA(
            "m",
            MIN
        ),
        _uA(
            "s",
            S
        ),
        _uA(
            "ms",
            MS
        ),
        _uA(
            "Q",
            Q
        )
    ))
    return (special.get(u) ?: ("" + u).toLowerCase().replace(UTSRegExp("s\$", ""), "")) as DayutsUnit
}
fun monthDiff(a: Dayuts, b: Dayuts): Number {
    if (a.date() < b.date()) {
        return -monthDiff(b, a)
    }
    val wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month())
    val anchor = a.clone().add(wholeMonthDiff, M).valueOf()
    val c = b.valueOf() - anchor < 0
    val anchor2 = a.clone().add(wholeMonthDiff + (if (c) {
        -1
    } else {
        1
    }
    ), M).valueOf()
    val decimalMonthDiff = (b.valueOf() - anchor) / (if (c) {
        (anchor - anchor2)
    } else {
        (anchor2 - anchor)
    }
    )
    val result = wholeMonthDiff + decimalMonthDiff
    val negatedResult = -result
    val absResult = +negatedResult
    val finalResult = if (!isNaN(absResult)) {
        absResult
    } else {
        0
    }
    return finalResult
}
fun absFloor(n: Number): Number {
    return if (n < 0) {
        Math.max(Math.ceil(n), 0)
    } else {
        Math.floor(n)
    }
}
open class Dayuts {
    open lateinit var `$L`: String
    private var valid: Boolean = true
    private var `$d`: Date = Date()
    private var `$y`: Number = 0
    private var `$M`: Number = 0
    private var `$D`: Number = 0
    private var `$W`: Number = 0
    private var `$H`: Number = 0
    private var `$m`: Number = 0
    private var `$s`: Number = 0
    private var `$ms`: Number = 0
    private var `$u`: Boolean = false
    constructor(cfg: DayutsConfig){
        this.`$L` = parseLocale(cfg.locale) ?: dayutsIntl.locale
        this.parse(cfg)
    }
    open fun parse(cfg: DayutsConfig) {
        val _d = parseDate(cfg)
        if (_d != null) {
            this.`$d` = parseDate(cfg)!!
            this.init()
        } else {
            this.valid = false
        }
    }
    open fun init() {
        val `$d` = this.`$d`
        this.`$y` = `$d`.getFullYear()
        this.`$M` = `$d`.getMonth()
        this.`$D` = `$d`.getDate()
        this.`$W` = `$d`.getDay()
        this.`$H` = `$d`.getHours()
        this.`$m` = `$d`.getMinutes()
        this.`$s` = `$d`.getSeconds()
        this.`$ms` = `$d`.getMilliseconds()
    }
    open fun isValid(): Boolean {
        return this.valid
    }
    open fun isSame(input: String): Boolean {
        return this.isSame(input as Any, "millisecond")
    }
    open fun isSame(input: Number): Boolean {
        return this.isSame(input as Any, "millisecond")
    }
    open fun isSame(input: Date): Boolean {
        return this.isSame(input as Any, "millisecond")
    }
    open fun isSame(input: Dayuts): Boolean {
        return this.isSame(input as Any, "millisecond")
    }
    open fun isSame(input: UTSJSONObject): Boolean {
        return this.isSame(input as Any, "millisecond")
    }
    open fun isSame(input: String, units: DayutsUnit): Boolean {
        return this.isSame(input as Any, units as DayutsUnit)
    }
    open fun isSame(input: Number, units: DayutsUnit): Boolean {
        return this.isSame(input as Any, units as DayutsUnit)
    }
    open fun isSame(input: Date, units: DayutsUnit): Boolean {
        return this.isSame(input as Any, units as DayutsUnit)
    }
    open fun isSame(input: Dayuts, units: DayutsUnit): Boolean {
        return this.isSame(input as Any, units as DayutsUnit)
    }
    open fun isSame(input: UTSJSONObject, units: DayutsUnit): Boolean {
        return this.isSame(input as Any, units as DayutsUnit)
    }
    open fun isSame(input: Any, units: DayutsUnit = "millisecond"): Boolean {
        val other = if (input is Dayuts) {
            input as Dayuts
        } else {
            dayuts(input)
        }
        val date1 = this.startOf(units).valueOf()
        val date2 = other.valueOf()
        val date3 = this.endOf(units).valueOf()
        return date1 <= date2 && date2 <= date3
    }
    open fun isAfter(input: String): Boolean {
        return this.isAfter(input as Any, "millisecond")
    }
    open fun isAfter(input: Number): Boolean {
        return this.isAfter(input as Any, "millisecond")
    }
    open fun isAfter(input: Date): Boolean {
        return this.isAfter(input as Any, "millisecond")
    }
    open fun isAfter(input: Dayuts): Boolean {
        return this.isAfter(input as Any, "millisecond")
    }
    open fun isAfter(input: UTSJSONObject): Boolean {
        return this.isAfter(input as Any, "millisecond")
    }
    open fun isAfter(input: String, units: DayutsUnit): Boolean {
        return this.isAfter(input as Any, units as DayutsUnit)
    }
    open fun isAfter(input: Number, units: DayutsUnit): Boolean {
        return this.isAfter(input as Any, units as DayutsUnit)
    }
    open fun isAfter(input: Date, units: DayutsUnit): Boolean {
        return this.isAfter(input as Any, units as DayutsUnit)
    }
    open fun isAfter(input: Dayuts, units: DayutsUnit): Boolean {
        return this.isAfter(input as Any, units as DayutsUnit)
    }
    open fun isAfter(input: UTSJSONObject, units: DayutsUnit): Boolean {
        return this.isAfter(input as Any, units as DayutsUnit)
    }
    open fun isAfter(input: Any, units: DayutsUnit = "millisecond"): Boolean {
        val other = if (input is Dayuts) {
            input as Dayuts
        } else {
            dayuts(input)
        }
        val date1 = other.valueOf()
        val date2 = this.startOf(units).valueOf()
        return date1 < date2
    }
    open fun isBefore(input: String): Boolean {
        return this.isBefore(input as Any, "millisecond")
    }
    open fun isBefore(input: Number): Boolean {
        return this.isBefore(input as Any, "millisecond")
    }
    open fun isBefore(input: Date): Boolean {
        return this.isBefore(input as Any, "millisecond")
    }
    open fun isBefore(input: Dayuts): Boolean {
        return this.isBefore(input as Any, "millisecond")
    }
    open fun isBefore(input: UTSJSONObject): Boolean {
        return this.isBefore(input as Any, "millisecond")
    }
    open fun isBefore(input: String, units: DayutsUnit): Boolean {
        return this.isBefore(input as Any, units as DayutsUnit)
    }
    open fun isBefore(input: Number, units: DayutsUnit): Boolean {
        return this.isBefore(input as Any, units as DayutsUnit)
    }
    open fun isBefore(input: Date, units: DayutsUnit): Boolean {
        return this.isBefore(input as Any, units as DayutsUnit)
    }
    open fun isBefore(input: Dayuts, units: DayutsUnit): Boolean {
        return this.isBefore(input as Any, units as DayutsUnit)
    }
    open fun isBefore(input: UTSJSONObject, units: DayutsUnit): Boolean {
        return this.isBefore(input as Any, units as DayutsUnit)
    }
    open fun isBefore(input: Any, units: DayutsUnit = "millisecond"): Boolean {
        val other = if (input is Dayuts) {
            input as Dayuts
        } else {
            dayuts(input)
        }
        val date1 = other.valueOf()
        val date2 = this.endOf(units).valueOf()
        return date2 < date1
    }
    open fun isSameOrBefore(input: String): Boolean {
        return this.isSameOrBefore(input as Any, "millisecond")
    }
    open fun isSameOrBefore(input: Number): Boolean {
        return this.isSameOrBefore(input as Any, "millisecond")
    }
    open fun isSameOrBefore(input: Date): Boolean {
        return this.isSameOrBefore(input as Any, "millisecond")
    }
    open fun isSameOrBefore(input: Dayuts): Boolean {
        return this.isSameOrBefore(input as Any, "millisecond")
    }
    open fun isSameOrBefore(input: UTSJSONObject): Boolean {
        return this.isSameOrBefore(input as Any, "millisecond")
    }
    open fun isSameOrBefore(input: String, units: DayutsUnit): Boolean {
        return this.isSameOrBefore(input as Any, units as DayutsUnit)
    }
    open fun isSameOrBefore(input: Number, units: DayutsUnit): Boolean {
        return this.isSameOrBefore(input as Any, units as DayutsUnit)
    }
    open fun isSameOrBefore(input: Date, units: DayutsUnit): Boolean {
        return this.isSameOrBefore(input as Any, units as DayutsUnit)
    }
    open fun isSameOrBefore(input: Dayuts, units: DayutsUnit): Boolean {
        return this.isSameOrBefore(input as Any, units as DayutsUnit)
    }
    open fun isSameOrBefore(input: UTSJSONObject, units: DayutsUnit): Boolean {
        return this.isSameOrBefore(input as Any, units as DayutsUnit)
    }
    open fun isSameOrBefore(input: Any, units: DayutsUnit = "millisecond"): Boolean {
        return this.isSame(input, units) || this.isBefore(input, units)
    }
    open fun isSameOrAfter(input: String): Boolean {
        return this.isSameOrAfter(input as Any, "millisecond")
    }
    open fun isSameOrAfter(input: Number): Boolean {
        return this.isSameOrAfter(input as Any, "millisecond")
    }
    open fun isSameOrAfter(input: Date): Boolean {
        return this.isSameOrAfter(input as Any, "millisecond")
    }
    open fun isSameOrAfter(input: Dayuts): Boolean {
        return this.isSameOrAfter(input as Any, "millisecond")
    }
    open fun isSameOrAfter(input: UTSJSONObject): Boolean {
        return this.isSameOrAfter(input as Any, "millisecond")
    }
    open fun isSameOrAfter(input: String, units: DayutsUnit): Boolean {
        return this.isSameOrAfter(input as Any, units as DayutsUnit)
    }
    open fun isSameOrAfter(input: Number, units: DayutsUnit): Boolean {
        return this.isSameOrAfter(input as Any, units as DayutsUnit)
    }
    open fun isSameOrAfter(input: Date, units: DayutsUnit): Boolean {
        return this.isSameOrAfter(input as Any, units as DayutsUnit)
    }
    open fun isSameOrAfter(input: Dayuts, units: DayutsUnit): Boolean {
        return this.isSameOrAfter(input as Any, units as DayutsUnit)
    }
    open fun isSameOrAfter(input: UTSJSONObject, units: DayutsUnit): Boolean {
        return this.isSameOrAfter(input as Any, units as DayutsUnit)
    }
    open fun isSameOrAfter(input: Any, units: DayutsUnit = "millisecond"): Boolean {
        return this.isSame(input, units) || this.isAfter(input, units)
    }
    open fun isBetween(input: Any, input2: Any, units: DayutsUnit = "millisecond", interval: String = "()"): Boolean {
        val dA = dayuts(input)
        val dB = dayuts(input2)
        val dAi = interval.startsWith("(")
        val dBi = interval.endsWith(")")
        return ((if (dAi) {
            this.isAfter(dA, units)
        } else {
            !this.isBefore(dA, units)
        }
        ) && (if (dBi) {
            this.isBefore(dB, units)
        } else {
            !this.isAfter(dB, units)
        }
        )) || ((if (dAi) {
            this.isBefore(dA, units)
        } else {
            !this.isAfter(dA, units)
        }
        ) && (if (dBi) {
            this.isAfter(dB, units)
        } else {
            !this.isBefore(dB, units)
        }
        ))
    }
    open fun isLeapYear(): Boolean {
        return ((this.`$y` % 4 == 0) && (this.`$y` % 100 != 0)) || (this.`$y` % 400 == 0)
    }
    open fun isToday(): Boolean {
        val comparisonTemplate = "YYYY-MM-DD"
        val now = dayuts()
        return this.format(comparisonTemplate) == now.format(comparisonTemplate)
    }
    open fun unix(): Number {
        return Math.floor(this.valueOf() / 1000)
    }
    open fun startOf(units: DayutsUnit, startOf: Boolean = true): Dayuts {
        val isStartOf = startOf
        val unit = prettyUnit(units)
        val instanceFactory = fun(d: Number, m: Number): Dayuts {
            val ins = dayuts(Date(this.`$y`, m, d))
            return if (isStartOf) {
                ins
            } else {
                ins.endOf(D)
            }
        }
        val instanceFactorySet = fun(method: String, slice: Number): Dayuts {
            val argumentStart: UTSArray<Number> = _uA(
                0,
                0,
                0,
                0
            )
            val argumentEnd: UTSArray<Number> = _uA(
                23,
                59,
                59,
                999
            )
            val args = (if (isStartOf) {
                argumentStart
            } else {
                argumentEnd
            }
            ).slice(slice)
            val date = this.toDate()
            if (method == "setHours") {
                date.setHours(args[0])
                date.setMinutes(args[1])
                date.setSeconds(args[2])
                date.setMilliseconds(args[3])
            } else if (method == "setMinutes") {
                date.setMinutes(args[0])
                date.setSeconds(args[1])
                date.setMilliseconds(args[2])
            } else if (method == "setSeconds") {
                date.setSeconds(args[0])
                date.setMilliseconds(args[1])
            } else if (method == "setMilliseconds") {
                date.setMilliseconds(args[0])
            }
            return dayuts(date)
        }
        val _this = this
        val `$W` = _this.`$W`
        val `$M` = _this.`$M`
        val `$D` = _this.`$D`
        val utcPad = "set" + (if (this.`$u`) {
            "UTC"
        } else {
            ""
        }
        )
        if (unit == Y) {
            return if (isStartOf) {
                instanceFactory(1, 0)
            } else {
                instanceFactory(31, 11)
            }
        } else if (unit == M) {
            return if (isStartOf) {
                instanceFactory(1, `$M`)
            } else {
                instanceFactory(0, `$M` + 1)
            }
        } else if (unit == W) {
            val weekStart = this.`$locale`().weekStart ?: 0
            val gap = (if (`$W` < weekStart) {
                `$W` + 7
            } else {
                `$W`
            }) - weekStart
            return instanceFactory(if (isStartOf) {
                `$D` - gap
            } else {
                `$D` + (6 - gap)
            }, `$M`)
        } else if (unit == D || unit == DATE) {
            return instanceFactorySet("" + utcPad + "Hours", 0)
        } else if (unit == H) {
            return instanceFactorySet("" + utcPad + "Minutes", 1)
        } else if (unit == MIN) {
            return instanceFactorySet("" + utcPad + "Seconds", 2)
        } else if (unit == S) {
            return instanceFactorySet("" + utcPad + "Milliseconds", 3)
        } else {
            return this.clone()
        }
    }
    open fun endOf(units: DayutsUnit): Dayuts {
        return this.startOf(units, false)
    }
    private fun `$set`(units: DayutsUnit, int: Number): Dayuts {
        val unit = prettyUnit(units)
        val arg = if (unit == D) {
            this.`$D` + (int - this.`$W`)
        } else {
            int
        }
        val setDateUnit = fun(date: Dayuts, unit: DayutsUnit, arg: Number){
            if (unit == D || unit == DATE) {
                date.`$d`.setDate(arg)
            } else if (unit == M) {
                date.`$d`.setMonth(arg)
            } else if (unit == Y) {
                date.`$d`.setFullYear(arg)
            } else if (unit == H) {
                date.`$d`.setHours(arg)
            } else if (unit == MIN) {
                date.`$d`.setMinutes(arg)
            } else if (unit == S) {
                date.`$d`.setSeconds(arg)
            } else if (unit == MS) {
                date.`$d`.setMilliseconds(arg)
            }
        }
        if (unit == M || unit == Y) {
            val date = this.clone().set(DATE, 1)
            setDateUnit(date, unit, arg)
            date.init()
            this.`$d` = date.set(DATE, Math.min(this.`$D`, date.daysInMonth())).`$d`
        } else {
            setDateUnit(this, unit, arg)
        }
        this.init()
        return this
    }
    open fun set(string: DayutsUnit, int: Number): Dayuts {
        return this.clone().`$set`(string, int)
    }
    open fun get(units: DayutsUnit): Number {
        val unit = prettyUnit(units)
        if (unit == D) {
            return this.day()
        } else if (unit == DATE) {
            return this.date()
        } else if (unit == M) {
            return this.month()
        } else if (unit == Y) {
            return this.year()
        } else if (unit == H) {
            return this.hour()
        } else if (unit == MIN) {
            return this.minute()
        } else if (unit == S) {
            return this.second()
        } else if (unit == MS) {
            return this.millisecond()
        }
        return 0
    }
    open fun year(): Number {
        return this.year(null) as Number
    }
    open fun year(input: Number): Dayuts {
        return this.year(input as Number?) as Dayuts
    }
    open fun year(input: Number? = null): Any {
        if (input == null) {
            return this.`$y`
        }
        return this.set(Y, input)
    }
    open fun month(): Number {
        return this.month(null) as Number
    }
    open fun month(input: Number): Dayuts {
        return this.month(input as Number?) as Dayuts
    }
    open fun month(input: Number? = null): Any {
        if (input == null) {
            return this.`$M`
        }
        return this.set(M, input)
    }
    open fun day(): Number {
        return this.day(null) as Number
    }
    open fun day(input: Number): Dayuts {
        return this.day(input as Number?) as Dayuts
    }
    open fun day(input: Number? = null): Any {
        if (input == null) {
            return this.`$W`
        }
        return this.set(D, input)
    }
    open fun date(): Number {
        return this.date(null) as Number
    }
    open fun date(input: Number): Dayuts {
        return this.date(input as Number?) as Dayuts
    }
    open fun date(input: Number? = null): Any {
        if (input == null) {
            return this.`$D`
        }
        return this.set(DATE, input)
    }
    open fun hour(): Number {
        return this.hour(null) as Number
    }
    open fun hour(input: Number): Dayuts {
        return this.hour(input as Number?) as Dayuts
    }
    open fun hour(input: Number? = null): Any {
        if (input == null) {
            return this.`$H`
        }
        return this.set(H, input)
    }
    open fun minute(): Number {
        return this.minute(null) as Number
    }
    open fun minute(input: Number): Dayuts {
        return this.minute(input as Number?) as Dayuts
    }
    open fun minute(input: Number? = null): Any {
        if (input == null) {
            return this.`$m`
        }
        return this.set(MIN, input)
    }
    open fun second(): Number {
        return this.second(null) as Number
    }
    open fun second(input: Number): Dayuts {
        return this.second(input as Number?) as Dayuts
    }
    open fun second(input: Number? = null): Any {
        if (input == null) {
            return this.`$s`
        }
        return this.set(S, input)
    }
    open fun millisecond(): Number {
        return this.millisecond(null) as Number
    }
    open fun millisecond(input: Number): Dayuts {
        return this.millisecond(input as Number?) as Dayuts
    }
    open fun millisecond(input: Number? = null): Any {
        if (input == null) {
            return this.`$ms`
        }
        return this.set(MS, input)
    }
    open fun add(number: Number, units: DayutsUnit): Dayuts {
        val unit = prettyUnit(units)
        val instanceFactorySet = fun(n: Number): Dayuts {
            val d = dayuts(this)
            return d.date(d.date() + Math.round(n * number))
        }
        if (unit == M) {
            return this.set(M, this.`$M` + number)
        }
        if (unit == Y) {
            return this.set(Y, this.`$y` + number)
        }
        if (unit == D) {
            return instanceFactorySet(1)
        }
        if (unit == W) {
            return instanceFactorySet(7)
        }
        val steps = Map<String, Number>(_uA(
            _uA(
                MIN,
                MILLISECONDS_A_MINUTE
            ),
            _uA(
                H,
                MILLISECONDS_A_HOUR
            ),
            _uA(
                S,
                MILLISECONDS_A_SECOND
            )
        ))
        val step = steps.get(unit) ?: 1
        val nextTimeStamp = this.`$d`.getTime() + (number * step)
        return wrapper(nextTimeStamp, this)
    }
    open fun subtract(number: Number, units: DayutsUnit): Dayuts {
        return this.add(number * -1, units)
    }
    open fun format(formatStr: String? = null): String {
        val locale = this.`$locale`()
        if (!this.isValid()) {
            return INVALID_DATE_STRING
        }
        val str = formatStr ?: FORMAT_DEFAULT
        val zoneStr = padZoneStr(this)
        val _this = this
        val `$H` = _this.`$H`
        val `$m` = _this.`$m`
        val `$M` = _this.`$M`
        val weekdays = locale.weekdays
        val months = locale.months
        val meridiem = locale.meridiem
        fun getShort(arr: UTSArray<String>?, index: Number, full: UTSArray<String> = _uA(), length: Number = 0): String {
            if (arr != null && arr.length >= index) {
                return arr[index]
            } else if (full.length >= index) {
                return full[index].slice(0, length)
            }
            return ""
        }
        val `get$H` = fun(num: Number): String {
            return padStart((if (`$H` % 12 == 0) {
                12
            } else {
                `$H` % 12
            }
            ).toString(10), num, "0")
        }
        val meridiemFunc = meridiem ?: (fun(hour: Number, _: Number, isLowercase: Boolean): String {
            val m = if (hour < 12) {
                "AM"
            } else {
                "PM"
            }
            return if (isLowercase) {
                m.toLowerCase()
            } else {
                m
            }
        }
        )
        return str.replace("YYYY", padStart(this.`$y`.toString(10), 4, "0")).replace("YY", this.`$y`.toString(10).slice(-2)).replace("MMMM", getShort(months, `$M`)).replace("MM", padStart((`$M` + 1).toString(10), 2, "0")).replace("M", (`$M` + 1).toString(10)).replace("DD", padStart(this.`$D`.toString(10), 2, "0")).replace("D", this.`$D`.toString(10)).replace("dddd", weekdays[this.`$W`]).replace("ddd", getShort(locale.weekdaysShort, this.`$W`, weekdays, 3)).replace("dd", getShort(locale.weekdaysMin, this.`$W`, weekdays, 2)).replace("d", this.`$W`.toString(10)).replace("HH", padStart(`$H`.toString(10), 2, "0")).replace("H", `$H`.toString(10)).replace("hh", `get$H`(2)).replace("h", `get$H`(1)).replace("mm", padStart(`$m`.toString(10), 2, "0")).replace("m", `$m`.toString(10)).replace("ss", padStart(this.`$s`.toString(10), 2, "0")).replace("s", this.`$s`.toString(10)).replace("SSS", padStart(this.`$ms`.toString(10), 3, "0")).replace("A", meridiemFunc(`$H`, `$m`, false)).replace("a", meridiemFunc(`$H`, `$m`, true)).replace("Z", zoneStr)
    }
    open fun utcOffset(): Number {
        return 0
    }
    open fun diff(input: String): Number {
        return this.diff(input as Any, "millisecond", false)
    }
    open fun diff(input: Number): Number {
        return this.diff(input as Any, "millisecond", false)
    }
    open fun diff(input: Date): Number {
        return this.diff(input as Any, "millisecond", false)
    }
    open fun diff(input: Dayuts): Number {
        return this.diff(input as Any, "millisecond", false)
    }
    open fun diff(input: UTSJSONObject): Number {
        return this.diff(input as Any, "millisecond", false)
    }
    open fun diff(input: String, units: DayutsUnit): Number {
        return this.diff(input as Any, units as DayutsUnit, false)
    }
    open fun diff(input: Number, units: DayutsUnit): Number {
        return this.diff(input as Any, units as DayutsUnit, false)
    }
    open fun diff(input: Date, units: DayutsUnit): Number {
        return this.diff(input as Any, units as DayutsUnit, false)
    }
    open fun diff(input: Dayuts, units: DayutsUnit): Number {
        return this.diff(input as Any, units as DayutsUnit, false)
    }
    open fun diff(input: UTSJSONObject, units: DayutsUnit): Number {
        return this.diff(input as Any, units as DayutsUnit, false)
    }
    open fun diff(input: String, units: DayutsUnit, float: Boolean): Number {
        return this.diff(input as Any, units as DayutsUnit, float as Boolean)
    }
    open fun diff(input: Number, units: DayutsUnit, float: Boolean): Number {
        return this.diff(input as Any, units as DayutsUnit, float as Boolean)
    }
    open fun diff(input: Date, units: DayutsUnit, float: Boolean): Number {
        return this.diff(input as Any, units as DayutsUnit, float as Boolean)
    }
    open fun diff(input: Dayuts, units: DayutsUnit, float: Boolean): Number {
        return this.diff(input as Any, units as DayutsUnit, float as Boolean)
    }
    open fun diff(input: UTSJSONObject, units: DayutsUnit, float: Boolean): Number {
        return this.diff(input as Any, units as DayutsUnit, float as Boolean)
    }
    open fun diff(input: Any, units: DayutsUnit = "millisecond", float: Boolean = false): Number {
        val unit = prettyUnit(units)
        val that = dayuts(input)
        val zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE
        val diff = this.valueOf() - that.valueOf()
        val getMonth = fun(): Number {
            return monthDiff(this, that)
        }
        var result: Number
        when (unit) {
            Y -> 
                result = getMonth() / 12
            M -> 
                result = getMonth()
            Q -> 
                result = getMonth() / 3
            W -> 
                result = (diff - zoneDelta) / MILLISECONDS_A_WEEK
            D -> 
                result = (diff - zoneDelta) / MILLISECONDS_A_DAY
            H -> 
                result = diff / MILLISECONDS_A_HOUR
            MIN -> 
                result = diff / MILLISECONDS_A_MINUTE
            S -> 
                result = diff / MILLISECONDS_A_SECOND
            else -> 
                result = diff
        }
        return if (float) {
            result
        } else {
            absFloor(result)
        }
    }
    open fun toDate(): Date {
        return Date(this.valueOf())
    }
    open fun toJSON(): String? {
        return if (this.isValid()) {
            this.toISOString()
        } else {
            null
        }
    }
    open fun toISOString(): String {
        return this.`$d`.toString()
    }
    open fun toObject(): DayutsObject {
        return DayutsObject(years = this.`$y`, months = this.`$M`, date = this.`$D`, hours = this.`$H`, minutes = this.`$m`, seconds = this.`$s`, milliseconds = this.`$ms`)
    }
    open fun toArray(): UTSArray<Number> {
        return _uA(
            this.`$y`,
            this.`$M`,
            this.`$D`,
            this.`$H`,
            this.`$m`,
            this.`$s`,
            this.`$ms`
        )
    }
    open fun valueOf(): Number {
        return this.`$d`.getTime()
    }
    open fun daysInMonth(): Number {
        return this.endOf(M).`$D`
    }
    private fun `$locale`(): DayutsLocale {
        return localeState.locales.get(this.`$L`)!!
    }
    open fun locale(preset: String, kObject: DayutsLocale): Dayuts {
        return this.locale(preset as Any, kObject as DayutsLocale?)
    }
    open fun locale(preset: DayutsLocale, kObject: DayutsLocale): Dayuts {
        return this.locale(preset as Any, kObject as DayutsLocale?)
    }
    open fun locale(preset: Any, kObject: DayutsLocale? = null): Dayuts {
        val that = this.clone()
        val nextLocaleName = parseLocale(preset, kObject, true)
        if (nextLocaleName != null) {
            that.`$L` = nextLocaleName
        }
        return that
    }
    open fun clone(): Dayuts {
        return wrapper(this.`$d`.getTime(), this)
    }
    override fun toString(): String {
        return this.`$d`.toString()
    }
    open fun dayOfYear(): Number {
        return this.dayOfYear(null) as Number
    }
    open fun dayOfYear(input: Number): Dayuts {
        return this.dayOfYear(input as Number?) as Dayuts
    }
    open fun dayOfYear(input: Number? = null): Any {
        val dayOfYear = Math.round((this.startOf("day").valueOf() - this.startOf("year").valueOf()) / 864e5) + 1
        return if (input == null) {
            dayOfYear
        } else {
            this.add(input - dayOfYear, "day")
        }
    }
    open fun fromToBase(input: String, withoutSuffix: Boolean, instance: Dayuts, isFrom: Boolean): String {
        return this.fromToBase(input as Any, withoutSuffix as Boolean, instance as Dayuts, isFrom as Boolean)
    }
    open fun fromToBase(input: Number, withoutSuffix: Boolean, instance: Dayuts, isFrom: Boolean): String {
        return this.fromToBase(input as Any, withoutSuffix as Boolean, instance as Dayuts, isFrom as Boolean)
    }
    open fun fromToBase(input: Date, withoutSuffix: Boolean, instance: Dayuts, isFrom: Boolean): String {
        return this.fromToBase(input as Any, withoutSuffix as Boolean, instance as Dayuts, isFrom as Boolean)
    }
    open fun fromToBase(input: Dayuts, withoutSuffix: Boolean, instance: Dayuts, isFrom: Boolean): String {
        return this.fromToBase(input as Any, withoutSuffix as Boolean, instance as Dayuts, isFrom as Boolean)
    }
    open fun fromToBase(input: UTSJSONObject, withoutSuffix: Boolean, instance: Dayuts, isFrom: Boolean): String {
        return this.fromToBase(input as Any, withoutSuffix as Boolean, instance as Dayuts, isFrom as Boolean)
    }
    open fun fromToBase(input: Any, withoutSuffix: Boolean, instance: Dayuts, isFrom: Boolean): String {
        val relObj = localeState.locales.get("en")?.relativeTime
        val loc = instance.`$locale`().relativeTime ?: relObj
        if (loc == null) {
            return ""
        }
        val T__1 = _uA(
            Threshold(l = "s", r = 44, d = S),
            Threshold(l = "m", r = 89),
            Threshold(l = "mm", r = 44, d = MIN),
            Threshold(l = "h", r = 89),
            Threshold(l = "hh", r = 21, d = H),
            Threshold(l = "d", r = 35),
            Threshold(l = "dd", r = 25, d = D),
            Threshold(l = "M", r = 45),
            Threshold(l = "MM", r = 10, d = M),
            Threshold(l = "y", r = 17),
            Threshold(l = "yy", d = Y)
        ) as UTSArray<Threshold>
        val Tl = T__1.length
        var result: Number = 0
        var out: String = ""
        var isFuture: Boolean = false
        run {
            var i: Number = 0
            while(i < Tl){
                var t = T__1[i]
                if (t.d != null) {
                    result = if (isFrom) {
                        dayuts(input).diff(instance, t.d!!, true)
                    } else {
                        instance.diff(input, t.d!!, true)
                    }
                }
                var abs = Math.round(Math.abs(result))
                isFuture = result > 0
                if (t.r == null || t.r != null && abs <= t.r!!) {
                    if (abs <= 1 && i > 0) {
                        t = T__1[i - 1]
                    }
                    val format = loc[t.l]
                    if (UTSAndroid.`typeof`(format) == "string") {
                        out = (format as String).replace("%d", abs.toString(10))
                    }
                    break
                }
                i += 1
            }
        }
        if (withoutSuffix) {
            return out
        }
        val pastOrFuture = if (isFuture) {
            loc.future
        } else {
            loc.past
        }
        return pastOrFuture.replace("%s", out)
    }
    open fun to(input: String): String {
        return this.to(input as Any, false)
    }
    open fun to(input: Number): String {
        return this.to(input as Any, false)
    }
    open fun to(input: Date): String {
        return this.to(input as Any, false)
    }
    open fun to(input: Dayuts): String {
        return this.to(input as Any, false)
    }
    open fun to(input: UTSJSONObject): String {
        return this.to(input as Any, false)
    }
    open fun to(input: String, withoutSuffix: Boolean): String {
        return this.to(input as Any, withoutSuffix as Boolean)
    }
    open fun to(input: Number, withoutSuffix: Boolean): String {
        return this.to(input as Any, withoutSuffix as Boolean)
    }
    open fun to(input: Date, withoutSuffix: Boolean): String {
        return this.to(input as Any, withoutSuffix as Boolean)
    }
    open fun to(input: Dayuts, withoutSuffix: Boolean): String {
        return this.to(input as Any, withoutSuffix as Boolean)
    }
    open fun to(input: UTSJSONObject, withoutSuffix: Boolean): String {
        return this.to(input as Any, withoutSuffix as Boolean)
    }
    open fun to(input: Any, withoutSuffix: Boolean = false): String {
        return this.fromToBase(input, withoutSuffix, this, true)
    }
    open fun from(input: String): String {
        return this.from(input as Any, false)
    }
    open fun from(input: Number): String {
        return this.from(input as Any, false)
    }
    open fun from(input: Date): String {
        return this.from(input as Any, false)
    }
    open fun from(input: Dayuts): String {
        return this.from(input as Any, false)
    }
    open fun from(input: UTSJSONObject): String {
        return this.from(input as Any, false)
    }
    open fun from(input: String, withoutSuffix: Boolean): String {
        return this.from(input as Any, withoutSuffix as Boolean)
    }
    open fun from(input: Number, withoutSuffix: Boolean): String {
        return this.from(input as Any, withoutSuffix as Boolean)
    }
    open fun from(input: Date, withoutSuffix: Boolean): String {
        return this.from(input as Any, withoutSuffix as Boolean)
    }
    open fun from(input: Dayuts, withoutSuffix: Boolean): String {
        return this.from(input as Any, withoutSuffix as Boolean)
    }
    open fun from(input: UTSJSONObject, withoutSuffix: Boolean): String {
        return this.from(input as Any, withoutSuffix as Boolean)
    }
    open fun from(input: Any, withoutSuffix: Boolean = false): String {
        return this.fromToBase(input, withoutSuffix, this, false)
    }
    open fun toNow(): String {
        return this.toNow(false)
    }
    open fun toNow(withoutSuffix: Boolean = false): String {
        return this.to(dayuts(), withoutSuffix)
    }
    open fun fromNow(): String {
        return this.fromNow(false)
    }
    open fun fromNow(withoutSuffix: Boolean = false): String {
        return this.from(dayuts(), withoutSuffix)
    }
}
fun dayuts(): Dayuts {
    return dayuts(null, null, null)
}
fun dayuts(date: String): Dayuts {
    return dayuts(date as Any?, null, null)
}
fun dayuts(date: UTSArray<Any>): Dayuts {
    return dayuts(date as Any?, null, null)
}
fun dayuts(date: Number): Dayuts {
    return dayuts(date as Any?, null, null)
}
fun dayuts(date: UTSJSONObject): Dayuts {
    return dayuts(date as Any?, null, null)
}
fun dayuts(date: Date): Dayuts {
    return dayuts(date as Any?, null, null)
}
fun dayuts(date: Dayuts): Dayuts {
    return dayuts(date as Any?, null, null)
}
fun dayuts(date: Any? = null, format: String? = null, locale: String? = null): Dayuts {
    if (date != null && date is Dayuts) {
        return (date as Dayuts).clone()
    }
    return Dayuts(DayutsConfig(date = date, format = format, locale = locale))
}
val GenSrcPagesFunctionComponentsTimeDemoCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsTimeDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsTimeDemoCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsTimeDemoCard.inject, props = GenSrcPagesFunctionComponentsTimeDemoCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsTimeDemoCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsTimeDemoCard.emits, components = GenSrcPagesFunctionComponentsTimeDemoCard.components, styles = GenSrcPagesFunctionComponentsTimeDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsTimeDemoCard.setup(props as GenSrcPagesFunctionComponentsTimeDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsTimeDemoCard {
    return GenSrcPagesFunctionComponentsTimeDemoCard(instance)
}
)
open class LimeSignatureToFileSuccess (
    @JsonNotNull
    open var tempFilePath: String,
    @JsonNotNull
    open var isEmpty: Boolean = false,
) : UTSObject()
typealias LimeSignatureToFileSuccessCallback = (res: LimeSignatureToFileSuccess) -> Unit
typealias LimeSignatureToFileFailCallback = (res: TakeSnapshotFail) -> Unit
typealias LimeSignatureToFileCompleteCallback = (res: Any) -> Unit
open class LimeSignatureToTempFilePathOptions (
    open var success: LimeSignatureToFileSuccessCallback? = null,
    open var fail: LimeSignatureToFileFailCallback? = null,
    open var complete: LimeSignatureToFileCompleteCallback? = null,
    open var format: String? = null,
) : UTSObject()
open class LimeSignatureOptions (
    @JsonNotNull
    open var penColor: String,
    @JsonNotNull
    open var openSmooth: Boolean = false,
    @JsonNotNull
    open var disableScroll: Boolean = false,
    @JsonNotNull
    open var disabled: Boolean = false,
    @JsonNotNull
    open var penSize: Number,
    @JsonNotNull
    open var minLineWidth: Number,
    @JsonNotNull
    open var maxLineWidth: Number,
    @JsonNotNull
    open var minSpeed: Number,
    @JsonNotNull
    open var maxWidthDiffRate: Number,
    @JsonNotNull
    open var maxHistoryLength: Number,
) : UTSObject()
open class LimeSignaturePoint (
    @JsonNotNull
    open var x: Number,
    @JsonNotNull
    open var y: Number,
    open var c: String? = null,
    open var w: Number? = null,
) : UTSObject()
typealias LimeSignatureLine = UTSArray<LimeSignaturePoint>
var points: LimeSignatureLine = _uA()
var undoStack: UTSArray<LimeSignatureLine> = _uA()
var redoStack: UTSArray<LimeSignatureLine> = _uA()
var lastX: Number = 0
var lastY: Number = 0
typealias SignatureUniElement = UniCanvasElement
typealias SignatureCanvasContext = CanvasRenderingContext2D
open class Signature {
    open lateinit var el: SignatureUniElement
    open lateinit var ctx: SignatureCanvasContext
    open var options: LimeSignatureOptions = LimeSignatureOptions(penColor = "black", openSmooth = true, disableScroll = true, disabled = false, penSize = 2, minLineWidth = 2, maxLineWidth = 6, minSpeed = 1.5, maxWidthDiffRate = 20, maxHistoryLength = 20)
    open var isEmpty: Boolean = true
    open var isDrawing: Boolean = false
    open var touchstartCallbackWrapper: UniCallbackWrapper? = null
    open var touchmoveCallbackWrapper: UniCallbackWrapper? = null
    open var touchendCallbackWrapper: UniCallbackWrapper? = null
    open var change: ((isEmpty: Boolean) -> Unit)? = null
    constructor(el: SignatureUniElement){
        this.el = el
        val dpr = uni_getDeviceInfo(null).devicePixelRatio ?: 1
        val rect = el.getBoundingClientRect()
        val w = if (rect.width > 0) {
            rect.width
        } else {
            300
        }
        val h = if (rect.height > 0) {
            rect.height
        } else {
            300
        }
        el.width = w * dpr
        el.height = h * dpr
        this.ctx = el.getContext("2d") as CanvasRenderingContext2D
        this.ctx.scale(dpr, dpr)
        this.init()
    }
    open fun onChange(cb: (isEmpty: Boolean) -> Unit) {
        this.change = cb
    }
    open fun init() {}
    open fun remove() {}
    open fun setOption(options: LimeSignatureOptions) {
        this.options = options
    }
    open fun disableScroll(event: UniTouchEvent) {}
    open fun getTouchLimeSignaturePoint(event: UniTouchEvent): LimeSignaturePoint {
        val rect = this.el.getBoundingClientRect()
        val touche = event.touches[0]
        val x = touche.clientX
        val y = touche.clientY
        return LimeSignaturePoint(x = x - rect.left, y = y - rect.top)
    }
    open var onTouchStart: (event: UniTouchEvent) -> Unit = fun(event: UniTouchEvent){
        if (this.options.disabled) {
            return
        }
        this.disableScroll(event)
        val _this_getTouchLimeSignaturePoint = this.getTouchLimeSignaturePoint(event)
        val x = _this_getTouchLimeSignaturePoint.x
        val y = _this_getTouchLimeSignaturePoint.y
        this.isDrawing = true
        this.isEmpty = false
        lastX = x
        lastY = y
        points.push(LimeSignaturePoint(x = x, y = y))
    }
    open var onTouchMove: (event: UniTouchEvent) -> Unit = fun(event: UniTouchEvent){
        if (this.options.disabled || !this.isDrawing) {
            return
        }
        this.disableScroll(event)
        val _this_getTouchLimeSignaturePoint = this.getTouchLimeSignaturePoint(event)
        val x = _this_getTouchLimeSignaturePoint.x
        val y = _this_getTouchLimeSignaturePoint.y
        val lineWidth = this.options.penSize
        val strokeStyle = this.options.penColor
        val point = LimeSignaturePoint(x = x, y = y)
        val last = LimeSignaturePoint(x = lastX, y = lastY)
        this.drawLine(point, last, lineWidth, strokeStyle)
        lastX = x
        lastY = y
        points.push(LimeSignaturePoint(x = x, y = y, c = strokeStyle, w = lineWidth))
    }
    open var onTouchEnd: (event: UniTouchEvent) -> Unit = fun(event: UniTouchEvent){
        this.disableScroll(event)
        this.isDrawing = false
        undoStack.push(points)
        redoStack = _uA<LimeSignatureLine>()
        points = _uA<LimeSignaturePoint>()
        this.change?.invoke(this.isEmpty)
    }
    open fun drawLine(point: LimeSignaturePoint, last: LimeSignaturePoint, lineWidth: Number, strokeStyle: String) {
        val ctx = this.ctx
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = strokeStyle
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.beginPath()
        ctx.moveTo(last.x, last.y)
        ctx.lineTo(point.x, point.y)
        ctx.stroke()
        ctx.closePath()
        this._draw()
    }
    open fun _clear() {
        this.ctx.clearRect(0, 0, 100000, 100000)
    }
    open fun _draw() {}
    open fun clear() {
        this._clear()
        this._draw()
        this.isEmpty = true
        undoStack = _uA<LimeSignatureLine>()
        redoStack = _uA<LimeSignatureLine>()
        points = _uA<LimeSignaturePoint>()
    }
    open fun undo() {
        if (redoStack.length == this.options.maxHistoryLength && this.options.maxHistoryLength != 0) {
            return
        }
        this._clear()
        if (undoStack.length > 0) {
            val lastPath: LimeSignatureLine = undoStack.pop()!!
            redoStack.push(lastPath)
            if (undoStack.length == 0) {
                this.isEmpty = true
                this._draw()
                return
            }
            run {
                var l: Number = 0
                while(l < undoStack.length){
                    run {
                        var i: Number = 1
                        while(i < undoStack[l].length){
                            val last = undoStack[l][i - 1]
                            val point = undoStack[l][i]
                            this.drawLine(point, last, point.w!!, point.c!!)
                            i++
                        }
                    }
                    l++
                }
            }
        } else {
            this._draw()
        }
    }
    open fun redo() {
        if (redoStack.length < 1) {
            return
        }
        this._clear()
        val lastPath: LimeSignatureLine = redoStack.pop()!!
        undoStack.push(lastPath)
        this.isEmpty = false
        run {
            var l: Number = 0
            while(l < undoStack.length){
                run {
                    var i: Number = 1
                    while(i < undoStack[l].length){
                        val last = undoStack[l][i - 1]
                        val point = undoStack[l][i]
                        val w = if (point.w != null) {
                            point.w!!
                        } else {
                            this.options.penSize
                        }
                        val c = if (point.c != null) {
                            point.c!!
                        } else {
                            this.options.penColor
                        }
                        this.drawLine(point, last, w, c)
                        i++
                    }
                }
                l++
            }
        }
        this._draw()
    }
}
val GenUniModulesLimeSignatureComponentsLSignatureLSignatureClass = CreateVueComponent(GenUniModulesLimeSignatureComponentsLSignatureLSignature::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenUniModulesLimeSignatureComponentsLSignatureLSignature.inheritAttrs, inject = GenUniModulesLimeSignatureComponentsLSignatureLSignature.inject, props = GenUniModulesLimeSignatureComponentsLSignatureLSignature.props, propsNeedCastKeys = GenUniModulesLimeSignatureComponentsLSignatureLSignature.propsNeedCastKeys, emits = GenUniModulesLimeSignatureComponentsLSignatureLSignature.emits, components = GenUniModulesLimeSignatureComponentsLSignatureLSignature.components, styles = GenUniModulesLimeSignatureComponentsLSignatureLSignature.styles, setup = fun(props: ComponentPublicInstance, ctx: SetupContext): Any? {
        return GenUniModulesLimeSignatureComponentsLSignatureLSignature.setup(props as GenUniModulesLimeSignatureComponentsLSignatureLSignature, ctx)
    }
    )
}
, fun(instance, renderer): GenUniModulesLimeSignatureComponentsLSignatureLSignature {
    return GenUniModulesLimeSignatureComponentsLSignatureLSignature(instance)
}
)
val GenSrcPagesFunctionComponentsSignatureCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsSignatureCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsSignatureCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsSignatureCard.inject, props = GenSrcPagesFunctionComponentsSignatureCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsSignatureCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsSignatureCard.emits, components = GenSrcPagesFunctionComponentsSignatureCard.components, styles = GenSrcPagesFunctionComponentsSignatureCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsSignatureCard.setup(props as GenSrcPagesFunctionComponentsSignatureCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsSignatureCard {
    return GenSrcPagesFunctionComponentsSignatureCard(instance)
}
)
typealias EchartEvent = (e: UTSJSONObject) -> Unit
open class WebviewEchart {
    private var canvasId: String = ""
    private var webviewCtx: WebviewContext? = null
    private var element: UniWebViewElement? = null
    private var onEventMap: Map<String, EchartEvent> = Map()
    private var onceEventMap: Map<String, EchartEvent> = Map()
    constructor(canvasId: String, webviewCtx: WebviewContext? = null, element: UniWebViewElement? = null){
        this.canvasId = canvasId
        this.webviewCtx = webviewCtx
        this.element = element
    }
    open fun evalJS(code: String) {
        if (this.element != null) {
            this.element!!.evalJS(code)
            return
        }
        if (this.webviewCtx != null) {
            this.webviewCtx!!.evalJS(code)
            return
        }
        if (this.canvasId != "") {
            val el = uni_getElementById(this.canvasId) as UniWebViewElement?
            if (el != null) {
                this.element = el
                this.element!!.evalJS(code)
                return
            }
            try {
                val ctx = uni_createWebviewContext(this.canvasId, null)
                if (ctx != null) {
                    this.webviewCtx = ctx
                    this.webviewCtx!!.evalJS(code)
                    return
                }
            }
             catch (_e: Throwable) {}
        }
    }
    open fun init(theme: String?, opts: UTSJSONObject = _uO()) {
        this.evalJS("init(" + JSON.stringify(_uO("theme" to theme, "opts" to opts)) + ")")
    }
    open fun onWebviewMsg(e: UniWebViewMessageEvent) {
        console.log("onWebviewMsg", e.detail.data)
        for(msg in resolveUTSValueIterator(e.detail.data)){
            val msgType = msg["type"] as String
            val data = msg["data"] as UTSJSONObject
            val onEventMap = this.onEventMap.get(msgType)
            if (onEventMap != null) {
                onEventMap(data)
            }
            val onceEvent = this.onceEventMap.get(msgType)
            if (onceEvent != null) {
                onceEvent(data)
                this.onceEventMap.`delete`(msgType)
            }
        }
    }
    open fun setOption(option: UTSJSONObject, notMerge: Boolean = false, lazyUpdate: Boolean = false) {
        this.evalJS("setOption(" + JSON.stringify(option) + ", " + notMerge + ", " + lazyUpdate + ")")
    }
    open fun getOption(success: EchartEvent) {
        this.onceEventMap.set("getOption", success)
        this.evalJS("getOption()")
    }
    open fun getWidth(success: EchartEvent) {
        this.onceEventMap.set("getWidth", success)
        this.evalJS("getWidth()")
    }
    open fun getHeight(success: EchartEvent) {
        this.onceEventMap.set("getHeight", success)
        this.evalJS("getHeight()")
    }
    open fun resize(option: UTSJSONObject = _uO()) {
        this.evalJS("resize(" + JSON.stringify(option) + ")")
    }
    open fun on(name: String, handler: EchartEvent) {
        this.onEventMap.set(name, handler)
        this.evalJS("on(" + JSON.stringify(_uO("name" to name)) + ")")
    }
    open fun on(name: String, query: Any, handler: EchartEvent) {
        this.onEventMap.set(name, handler)
        this.evalJS("on(" + JSON.stringify(_uO("name" to name, "query" to query)) + ")")
    }
    open fun off(name: String) {
        this.evalJS("off(" + JSON.stringify(_uO("name" to name)) + ")")
    }
    open fun dispatchAction(option: UTSJSONObject) {
        this.evalJS("dispatchAction(" + JSON.stringify(option) + ")")
    }
    open fun showLoading(option: UTSJSONObject) {
        this.evalJS("showLoading(" + JSON.stringify(option) + ")")
    }
    open fun hideLoading() {
        this.evalJS("hideLoading()")
    }
    open fun appendData(option: UTSJSONObject) {
        this.evalJS("appendData(" + JSON.stringify(option) + ")")
    }
    open fun canvasToTempFilePath(option: UTSJSONObject) {
        val success = option["success"] as (res: UTSJSONObject) -> Unit
        this.onceEventMap.set("canvasToTempFilePath", success)
        this.evalJS("canvasToTempFilePath()")
    }
    open fun clear() {
        this.evalJS("clear()")
    }
    open fun dispose() {
        this.evalJS("dispose()")
    }
}
fun getRandomId(): String {
    return "chart_" + Math.random().toString(36).substring(2, 16)
}
fun addUnitRpx(num: Any): String {
    return if (UTSAndroid.`typeof`(num) === "number") {
        "" + num as Number + "rpx"
    } else {
        num as String
    }
}
val GenUniModulesEChartComponentsEChartEChartClass = CreateVueComponent(GenUniModulesEChartComponentsEChartEChart::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = GenUniModulesEChartComponentsEChartEChart.name, inheritAttrs = GenUniModulesEChartComponentsEChartEChart.inheritAttrs, inject = GenUniModulesEChartComponentsEChartEChart.inject, props = GenUniModulesEChartComponentsEChartEChart.props, propsNeedCastKeys = GenUniModulesEChartComponentsEChartEChart.propsNeedCastKeys, emits = GenUniModulesEChartComponentsEChartEChart.emits, components = GenUniModulesEChartComponentsEChartEChart.components, styles = GenUniModulesEChartComponentsEChartEChart.styles, setup = fun(props: ComponentPublicInstance, ctx: SetupContext): Any? {
        return GenUniModulesEChartComponentsEChartEChart.setup(props as GenUniModulesEChartComponentsEChartEChart, ctx)
    }
    )
}
, fun(instance, renderer): GenUniModulesEChartComponentsEChartEChart {
    return GenUniModulesEChartComponentsEChartEChart(instance)
}
)
fun __uts_large_pieOption_prop_item_prop_fill_fill_1(__arr: UTSArray<UTSJSONObject>): Unit {
    __arr.push(_uO("value" to 1048, "name" to "搜索引擎", "itemStyle" to _uO("color" to "#3b82f6")))
    __arr.push(_uO("value" to 735, "name" to "直接访问", "itemStyle" to _uO("color" to "#10b981")))
    __arr.push(_uO("value" to 580, "name" to "邮件营销", "itemStyle" to _uO("color" to "#f59e0b")))
    __arr.push(_uO("value" to 484, "name" to "联盟广告", "itemStyle" to _uO("color" to "#8b5cf6")))
}
fun __uts_large_pieOption_prop_item_prop_build_0(): UTSArray<UTSJSONObject> {
    val __arr = _uA<UTSJSONObject>()
    __uts_large_pieOption_prop_item_prop_fill_fill_1(__arr)
    return __arr
}
fun __uts_large_pieOption_prop_item_fill_fill_3(__obj: UTSJSONObject): Unit {
    __obj["name"] = "访问来源"
    __obj["type"] = "pie"
    __obj["radius"] = "52%"
    __obj["center"] = _uA(
        "50%",
        "52%"
    )
    __obj["label"] = _uO("fontSize" to 11, "color" to "#64748b")
    __obj["data"] = __uts_large_pieOption_prop_item_prop_build_0()
}
fun __uts_large_pieOption_prop_item_build_2(): UTSJSONObject {
    val __obj: UTSJSONObject = _uO()
    __uts_large_pieOption_prop_item_fill_fill_3(__obj)
    return __obj
}
fun __uts_large_pieOption_prop_fill_fill_5(__arr: UTSArray<UTSJSONObject>): Unit {
    __arr.push(__uts_large_pieOption_prop_item_build_2())
}
fun __uts_large_pieOption_prop_build_4(): UTSArray<UTSJSONObject> {
    val __arr = _uA<UTSJSONObject>()
    __uts_large_pieOption_prop_fill_fill_5(__arr)
    return __arr
}
fun __uts_large_pieOption_fill_fill_7(__obj: UTSJSONObject): Unit {
    __obj["title"] = _uO("text" to "访问来源 (饼图)", "textStyle" to _uO("fontSize" to 12, "color" to "#64748b"))
    __obj["series"] = __uts_large_pieOption_prop_build_4()
}
fun __uts_large_pieOption_build_6(): UTSJSONObject {
    val __obj: UTSJSONObject = _uO()
    __uts_large_pieOption_fill_fill_7(__obj)
    return __obj
}
val GenSrcPagesFunctionComponentsEchartsDemoCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsEchartsDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsEchartsDemoCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsEchartsDemoCard.inject, props = GenSrcPagesFunctionComponentsEchartsDemoCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsEchartsDemoCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsEchartsDemoCard.emits, components = GenSrcPagesFunctionComponentsEchartsDemoCard.components, styles = GenSrcPagesFunctionComponentsEchartsDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsEchartsDemoCard.setup(props as GenSrcPagesFunctionComponentsEchartsDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsEchartsDemoCard {
    return GenSrcPagesFunctionComponentsEchartsDemoCard(instance)
}
)
val base64Arrow: String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC"
val base64Flower: String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC"
val base64Success: String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC"
val base64Empty: String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYmRmZTJkLTFjZDYtMmI0OC1iNTI1LTljOWFmN2U2MDg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm30U/gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/UExURUdwTODg4O3t7e7u7unp6d7e3uTk5M/Pz8nJyePj4+jo6Pj4+MrKyszMzO7u7unp6fb29vLy8vr6+v7+/sHBweag3xAAAAAOdFJOUwAxia5pF0n+/vzX3KbULQ2DYQAACG1JREFUeNrtm4l2o7gShi20IWFrAd7/WUc7EosDWKZ976Hc7WTmdMKXv0qlqpLyeNx222233Xbbbbfddtv/mOHn8xexSNsiRH5PrbFtW4p+DetpsF4v8Gs+HA3WEwOAfwzriYxaLTVsP8X1QK0z+vqQCzewYogi60aL9SEX5oyxphYVCFTGjfSJCTmN1jBruN5KTGCUS8bhySQGHRaohmW4glwtldbOeYJYKlgvbyUuA8aFFEKc++aIM4hrRnyiMnIZKq1PrihcM3GNKboMF1Naa9X9+8T1KrxIlVbGjv3cAEHOYYMqqgUsVuJqqehV3+sjDwB+DTJp0lYtMCyZpxqjF4e+74+sRcQSFZO8UonUSEFzuUY+DKo59A2kZDatGCjzCauy/2AmhSyCq0WHEj0KTNJDmVeNhErMt1Q8W4xti4/FwMJ4jaxl05TKFiNtD3kBGrHnhiph9V0eXQc6DkyE2xX830AlKshFTErXeuCZXK/9m41wFsGSfZ4lcGeyZ98PrylJ7MWCojQZ3qSukL2QslgdngqJnTEPdTJhXvbNBoR/+7wabIxWduN/Ja5dWEivm4XSZ2uQckNzmRlHrn2lc6eiafvS4V2Hd12tesau8toZW0CtWoZYb9t+OqxdCYKYjVPF16pVbILIy/gR7MVaWMHYPCoa2VkzkX4Iry2rirXbumGyAjGC1h62YLw6ApsNKZph3fpIWHt08JovRWD62sejpXhTrhWrPpl6zZ6PW2oTG5ltlvgtF6weNYCWKeJJSfg4W6PNJlj3sVZgOXV4lc8n4RlkMTLEBDVoYc3nI09kpyzzfgWsjyzBZSNDKF2/wjh+sxYvn8Y1scxlfLF9T1RBO3wVHsnq8Fk4oGkEh/0KJPSa8T2CeWE5X9BPmgLsaRIGeNL2kshCsWoLBmdPJW5Wbz1ndAKUXjPwxXYAUpSV3fy5BJg1aa1tyVXHHMgVH31ewDVrleHr9XqC684SUF4mecR3+wW5SC2QNvxUizRv98mLDhPgYiMDb+v8g0OADxqxcnf9w01mZYJF0fUVP5LcdswbsMmy1DVs5PlE5NpNiTR8M8qAWZkOy6aN13VcoOF2/s3xn3Mes8Xza05tgR/BuNz69nlNzMR0fH45p+G4R9oxh2mKt9MF4J7K/lvWUojwF5nCgCpuRUptnZMQ3au0nSo2UsHgV3xpmeLYzGml3ZFBBzYGPCpOQRwXs1/GG1J74dlZc6JKUOtjBAz9XjVxucGWHbZVJDPJQGYDRl1Qmf1ovk2Sbghb6MQlnF7mBzM1bgOqJAPpoOQaVe+4Skcit3uqHMyG/Sh1rHNN0gAfM0nnPrmulfLVBSm20TSZSdWa0LJl2ukVyE4vTYCgP3uQkwv1TKtQWgxDzBSg80OQjCs4klKvuUzHLCfIbDKIE/S5VIGqD1iD2819pkAqTWdmeina+oZABi7X5B1MGoTJqJSchuk6JNHcgUPAcsVFk0+N0oDN68Vo7FQSmCXjx46OEtUk1lpY2ZFQGr/AcpqVato4wPUD+RhfAeyQI5sJ6l2sDwnKqNFSJvpiyJbFl3kTOjZ2ievwCR7hkUoWeV2vOLAXvB39AJoyqYa81A5cvaAidXYTFTycKDBcalVK5f3XS89kzLVl9txfL+K+p6NUnitz5KkKm7D3DrRPNq4bk7l20aFRppNilmuQI+uzTtj9wPBkTsVwM7HbJ5pwGgujyRyZDzQLNoiRFluRtQ+GzEguqRxUL+ZMFqulMzIfaP3ARj2k/txB8c+2HyjmDizCaVWtNoE5MvMlKs/4VQ7HUJZCrU6qCKcNJ2aSWUZhJZu4VI0LB4CHFdj77DRuGi28WKAxoRyZyzGVrmc0jmk1nP5QaxZo1puqq1YIAqgZb8e/rABZJWNCNxV7DSTpOO7Aail9J9nYHtua/4ouE/aS0X1qtXQzwGx+rnbi2vhF/TfZG52oc6DPo1WCi3RTDnRk7TEntoEp38gg+DjYs2opkR3JW5EpL9rU0XSK5/6LOTAVS+72x7pm60zSf5HMdldjhzJqw1FRcxXdS3ZNZp0s92FiyluUvBPoD9ynZNkBiu2NF11ofnlnQbZgKqvusj9R/f6DOzgVsahbNlXxlsxU8y7qrbTupitRyxFBKG6H3aEPUqj7YrzAymq41FXlZLlO4WLbvG2Kg4vYB+wPfWS2B5Rq8TW9ROpAZbiF6MmCTsx1NLLsx7NOoOiZup2CNbZ36xc96ErcxzuILGrmmFhimjtwKo/yTm7feTVwB61IzbnW4967Kt3cDDotGt8JKrTiUyO3Uy2PZZt9tapXEfXhWmTgcoB+JchFWsiCKvYnhmn/tKuJDbgly897FnFfkE1rQLKy810OU7xW3bEJHCD5gERtuTGuxoJqA6qI9TNMa6MbvZomsiubbPYx78YXDaaRqqsyqfSaLZdjYGHLu65rDgydXCWm1P5EvcQ828f9pcBapTILSMv1nZCAc0WzFIFsGfUi/kmAxc6cFqDSYuPSMIbs1OVrwITTQM9HVRFJ5JL56qcoFzzT1uVcd2v9jFw8BHlcWtmEI86hp5Dy/zOlK8cUp/rVseRUBqawz6kmAcPLM9l5m8h4V53Iz/2mFJaTCvF8JbsMvPjU/7crbUXart0v4WyE0LnDPcAX95Knj4VUE8HCdNdUP8BDcOXKdPl4uSWbh4LfOV0HDdfipOmu+eIRrDsNPkIT7np/8ZAzVdOd1u8wHIqeXt8VqtgiO50ePeNaGG+uO9rHiKdL71pnIun8jxEKXv2r2HYBzO/mz96vFKoMM5WLk7tQXS9U5kwCu5lk7n6++kdCFWRaTUzm0/5fClWGWTrM/AGhCrJO/ZBQhTPFLwmV7ebgcdttt91222233Xbbbf+H9h+2WEtdHVinLAAAAABJRU5ErkJggg=="
val base64Error: String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmOTU1MTU4LTgyMWItMDg0NS1hYmY1LTlhMTU0YzVlNjg2MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2LDQsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURUdwTNra2s7Ozq2tre3t7dPT087OzuPj4+3t7dbW1u/v79bW1vz8/MrKytDQ0Nzc3MPDw/X19bi4uMZQDnEAAAAKdFJOUwBqEPywotz+wzqApqiTAAAHW0lEQVR42u1b25akIAwcbx2UFoj//7HLTQVBRcSZfTDnbM/uTl/KSlEkwf75eeONN95444033njjjTduR9/0/yOsbqoevObL7101tYX1HFs9QFtfZalRP+rpQVgdAFx990ZnT8L6eZItUl99jeGpf1DxdV/VP9fV1f/PFlF1bYHoVFSRC60IyVjrFRnuB8IoxpExSrstsErKHpJw1eqybNLbAQvAYkKjUrjoBgKRqAaeIjG5+qaps6hKcMWmcdSwqAJWBbAgCZZaIYbsqggqqlHNbFFa5yVR4jKvrKEErOEjNCqNSwHrfE8lpLsod/u+cOPPMPBJ+Gz5dM0cXNgclre+pSxhYI1WW5Tf9ENSMIdLCiWs6q9hwQprBVYKFqyPlx4WtoSvrT9lC/wkGt8qlkQooC3hi6sgW3Bb8gtdpSV/za/mn49pC0oYhONbfyd5hzDLFivKFpTS1gKM0we0tQCEncfgQn7Rt+DC/299i1MSRJcBC0r7VviG5KZvwV5WIUobxHyrJKy8VRjXVgFYsPu5kOtbxdhycCDuihziXVLoW7xwEiUmDgd544B46luWLW+nugMLB2BimmC3cxTNxCDg8xFtuUSNqoFsDKzY8psa+XtBNWXr74N6qxwsS5T6VL5robKl10+ZRu5S9qBvUYuJwVHzjwjrE3G33qKh+WXBgmkmCvHYquTvZ8oo7rLFA4PJgYW0MdePIRQIGUPNbSMw5lubJMKtJI6+Wk6cVFMmACO+VVryeL7ZgI8MhwS2fnNPPK0geHBRd11eJSiyL4KjrL2umm1XIpRii1MKB/mU/iCZwF+pt5z3UJ7UiF3nQqadAXC3T3xEW2IyuDBe3yDTe0+A64it2WTyYSGVHymUI/EduvSWKJ80Dtv2NbYSoQxbMkVC7yzNGIWFvDF7gRD79RYrWW/BDGti4wwLtgvO7gWKUZ8Mt94qX8vLJE70+xVNwzDm9ghNM+FX7p/jlZUId2HJD+Tf79hMe3WNrAK/30E+C8/6xOCqbqxE5JNMYrNbnaLUvJAewfCg8zF0Ba/tbviWLvPYfsGFA1PVD8ZdnjlVc/DS/o7LK4NHjOjKKbfCTSCo5XmwKbaZM4jlc9NGEYd9Ijd0QS5ZGaOR2O+DPlGyRb2nXZzgnI1GdFWF+0gh3ifyTRqvzpXI2eElk58FeHziCF5hY+hSMV9Ge/mohUTGuQ4vzHYe8bW5sNdFQ58St22Vcf5zzJbtcGT4iYQ7iz8dFuxoWRYMjAM7KCnypHOTLSqdUwYIFpndOD/6B2FBzNQxYmW/zxYE4j8yLHga1s2Rbm/O5PXtGcuNDIW1dTj5hpjGsO+7z2Kk9NP1JWDlnWKAM4H6zCUNM05KyVPHBclYzUbgjE3N3tP2JWHBmbqD4GLeCs2jhMT13lMVljwcEbetwZgtHUxVQ21ho3fE7inf2s8vzMWq0EWpfOBg5hcDSGwaF2+LaysRIzNFqRgBv2sMhi/Ix0WiW8rBKNBv4ExBI7eorx9ANazsPCb5FkSNH+Reacos+AYxaFzX76KMH65c8ytzZ40YvpFAqtgC/otn1eCmMI5K8yVRQVVwq3aVtU+jJktwjyP7x+BKv8vtoH098vXYSJcrWGJcAW11r8WVRxe5vgcuFbXqwnaEZejS6mrLwYKUg1ch2RJswTFYgMOwoau+AQsSp/FuDhVZi7J402ifgGla/GJIzGLYG5H4rnKMCUydL9wcsmZSuPikR2QmjQbWqaV2ob2RdMvaLEvFlRiXpYeTwqVOtMZF+qi0dS4uEjJKMvWuYK3S0jHZwaq7BylYp/O2uu3q04lNqudLWEJQd/3paTBz12IaLIPtzE5P1AUuW9TB8NVzaG9/TIfV+eXsWeezz6HWlptEbo4SIAeWur/Y/RZC/gmZTiLzUY2j5ct6fjKsFvxqgyQxE9sbmfYtnJMIciEKo6+FL0wziJmtkzspIcUl0PgWrL7VCKP7hl61U4WLeN+7Ieli2vZhmq0VgjDOgIyhJ62sSpDkWNZa1wiB8WoLlxzy29XpGVPgn1ut5VYcGyRLK7OCiJaDYMrAneJUkZWdw0yDgNm5nDowqLc0Kp581FO7QS4pC9S/YRW9xkVdNOj0ZHCp9anEZw3VEK/fopiDrkMObkcdJtT1g6+uzQ60bIdUPztdWZWy53m+v/zFYPOGHO4AZsalmtJNkyHrCAx1RXX7mt5g1L1pDezpkXv8wJwpVRSSaf2c26Y0rrXXxyWBptu/ovdak+VhkqjGBZUdvKygqANKA/MqZ/36kcGwFn90RnWp66ksKuHgitLFY8BU+F2ZvqpxpMY9qR3YwOUJ12fc0KUHVKdswcKXuwetErCnwvMKuXxfc/3RVJ2yFc+iosQd3X+WGSVz1UiuN2J156FyVyHbsOUp3krezaPUT/VxXqdfwvknb/Zgp+idTxTbrkLqYuKreRnhy65Gf4W0NsDoYiqf6uZsvr8V9eo6XWc5+3TVf/3N1TfeeOONN95444033njjjTfeSI1/IeOYOeO4fGAAAAAASUVORK5CYII="
val base64BackToTop: String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg=="
val GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptyClass = CreateVueComponent(GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.name, inheritAttrs = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.inheritAttrs, inject = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.inject, props = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.props, propsNeedCastKeys = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.propsNeedCastKeys, emits = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.emits, components = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.components, styles = GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty.setup(props as GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty)
    }
    )
}
, fun(instance, renderer): GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty {
    return GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty(instance)
}
)
val GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadingClass = CreateVueComponent(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.inheritAttrs, inject = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.inject, props = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.props, propsNeedCastKeys = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.propsNeedCastKeys, emits = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.emits, components = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.components, styles = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading.setup(props as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading)
    }
    )
}
, fun(instance, renderer): GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading {
    return GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading(instance)
}
)
open class LoadingType (
    @JsonNotNull
    open var Refresher: String,
    @JsonNotNull
    open var LoadMore: String,
) : UTSObject()
open class Refresher (
    @JsonNotNull
    open var Default: String,
    @JsonNotNull
    open var ReleaseToRefresh: String,
    @JsonNotNull
    open var Loading: String,
    @JsonNotNull
    open var Complete: String,
) : UTSObject()
open class More (
    @JsonNotNull
    open var Default: String,
    @JsonNotNull
    open var Loading: String,
    @JsonNotNull
    open var NoMore: String,
    @JsonNotNull
    open var Fail: String,
) : UTSObject()
open class QueryFrom (
    @JsonNotNull
    open var Refresh: String,
    @JsonNotNull
    open var UserPullDown: String,
    @JsonNotNull
    open var LoadMore: String,
    @JsonNotNull
    open var Reload: String,
) : UTSObject()
open class CacheMode (
    @JsonNotNull
    open var Always: String,
    @JsonNotNull
    open var Default: String,
) : UTSObject()
open class EnumType (
    @JsonNotNull
    open var LoadingType: LoadingType,
    @JsonNotNull
    open var More: More,
    @JsonNotNull
    open var Refresher: Refresher,
    @JsonNotNull
    open var QueryFrom: QueryFrom,
    @JsonNotNull
    open var CacheMode: CacheMode,
) : UTSObject()
val default__4 = EnumType(LoadingType = LoadingType(Refresher = "refresher", LoadMore = "load-more"), Refresher = Refresher(Default = "default", ReleaseToRefresh = "release-to-refresh", Loading = "loading", Complete = "complete"), More = More(Default = "default", Loading = "loading", NoMore = "no-more", Fail = "fail"), QueryFrom = QueryFrom(UserPullDown = "user-pull-down", Reload = "reload", Refresh = "refresh", LoadMore = "load-more"), CacheMode = CacheMode(Default = "default", Always = "always"))
open class RefresherTimeTextMapType (
    @JsonNotNull
    open var title: String,
    @JsonNotNull
    open var none: String,
    @JsonNotNull
    open var today: String,
    @JsonNotNull
    open var yesterday: String,
) : UTSObject()
val refresherTimeStorageKey: String = "Z-PAGING-X-REFRESHER-TIME-STORAGE-KEY"
val refresherTimeTextMap: RefresherTimeTextMapType = RefresherTimeTextMapType(title = "最后更新：", none = "无", today = "今天", yesterday = "昨天")
fun updateRefesrherTime(key: String): Unit {
    val datas: UTSJSONObject = _getRefesrherTime() ?: _uO()
    datas[key] = getTime()
    uni_setStorageSync(refresherTimeStorageKey, datas)
}
fun getRefesrherFormatTimeByKey(key: String): String {
    val time: Number? = _getRefesrherTimeByKey(key)
    val timeText = if (time != null) {
        _timeFormat(time)
    } else {
        refresherTimeTextMap.none
    }
    return "" + refresherTimeTextMap.title + timeText
}
fun getTime(): Number {
    return Date().getTime()
}
fun _getRefesrherTime(): UTSJSONObject? {
    val result: Any? = uni_getStorageSync(refresherTimeStorageKey)
    return if (result != null && result is UTSJSONObject) {
        result as UTSJSONObject
    } else {
        null
    }
}
fun _getRefesrherTimeByKey(key: String): Number? {
    val datas: UTSJSONObject? = _getRefesrherTime()
    if (datas != null) {
        return datas.getNumber(key)
    }
    return null
}
fun _timeFormat(time: Number): String {
    val date: Date = Date(time)
    val currentDate: Date = Date()
    val dateDay = _onlyKeepDateDay(Date(time))
    val currentDateDay = _onlyKeepDateDay(Date())
    val disTime: Number = dateDay.getTime() - currentDateDay.getTime()
    var dayStr: String
    val timeStr = _dateTimeFormat(date)
    if (disTime == 0) {
        dayStr = refresherTimeTextMap.today
    } else if (disTime == -86400000) {
        dayStr = refresherTimeTextMap.yesterday
    } else {
        dayStr = _dateDayFormat(date, date.getFullYear() !== currentDate.getFullYear())
    }
    return "" + dayStr + " " + timeStr
}
fun _onlyKeepDateDay(date: Date): Date {
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date
}
fun _dateDayFormat(date: Date, showYear: Boolean = true): String {
    val year: Number = date.getFullYear()
    val month: Number = date.getMonth() + 1
    val day: Number = date.getDate()
    return if (showYear) {
        "" + year + "-" + _fullZeroToTwo(month) + "-" + _fullZeroToTwo(day)
    } else {
        "" + _fullZeroToTwo(month) + "-" + _fullZeroToTwo(day)
    }
}
fun _dateTimeFormat(date: Date): String {
    val hour: Number = date.getHours()
    val minute: Number = date.getMinutes()
    return "" + _fullZeroToTwo(hour) + ":" + _fullZeroToTwo(minute)
}
fun _fullZeroToTwo(value: Number): String {
    val str: String = value.toString(10)
    return if (str.length == 1) {
        "0" + str
    } else {
        str
    }
}
val GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherClass = CreateVueComponent(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.name, inheritAttrs = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.inheritAttrs, inject = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.inject, props = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.props, propsNeedCastKeys = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.propsNeedCastKeys, emits = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.emits, components = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.components, styles = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher.setup(props as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher)
    }
    )
}
, fun(instance, renderer): GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher {
    return GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher(instance)
}
)
val GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreClass = CreateVueComponent(GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.name, inheritAttrs = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.inheritAttrs, inject = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.inject, props = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.props, propsNeedCastKeys = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.propsNeedCastKeys, emits = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.emits, components = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.components, styles = GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore.setup(props as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore)
    }
    )
}
, fun(instance, renderer): GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore {
    return GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore(instance)
}
)
var config: UTSJSONObject? = null
fun <T> gc(key: String, defaultValue: T): T {
    if (config == null) {
        return defaultValue
    }
    val value: Any? = config!![key]
    return if (value == null) {
        defaultValue
    } else {
        value
    }
     as T
}
val GenUniModulesZPagingXComponentsZPagingXZPagingXClass = CreateVueComponent(GenUniModulesZPagingXComponentsZPagingXZPagingX::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenUniModulesZPagingXComponentsZPagingXZPagingX.inheritAttrs, inject = GenUniModulesZPagingXComponentsZPagingXZPagingX.inject, props = GenUniModulesZPagingXComponentsZPagingXZPagingX.props, propsNeedCastKeys = GenUniModulesZPagingXComponentsZPagingXZPagingX.propsNeedCastKeys, emits = GenUniModulesZPagingXComponentsZPagingXZPagingX.emits, components = GenUniModulesZPagingXComponentsZPagingXZPagingX.components, styles = GenUniModulesZPagingXComponentsZPagingXZPagingX.styles, setup = fun(props: ComponentPublicInstance, ctx: SetupContext): Any? {
        return GenUniModulesZPagingXComponentsZPagingXZPagingX.setup(props as GenUniModulesZPagingXComponentsZPagingXZPagingX, ctx)
    }
    )
}
, fun(instance, renderer): GenUniModulesZPagingXComponentsZPagingXZPagingX {
    return GenUniModulesZPagingXComponentsZPagingXZPagingX(instance)
}
)
open class CompactArticleItem (
    @JsonNotNull
    open var id: Number,
    @JsonNotNull
    open var title: String,
    @JsonNotNull
    open var summary: String,
    @JsonNotNull
    open var tag: String,
    @JsonNotNull
    open var tagBgColor: String,
    @JsonNotNull
    open var tagColor: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return CompactArticleItemReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class CompactArticleItemReactiveObject : CompactArticleItem, IUTSReactive<CompactArticleItem> {
    override var __v_raw: CompactArticleItem
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: CompactArticleItem, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(id = __v_raw.id, title = __v_raw.title, summary = __v_raw.summary, tag = __v_raw.tag, tagBgColor = __v_raw.tagBgColor, tagColor = __v_raw.tagColor) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): CompactArticleItemReactiveObject {
        return CompactArticleItemReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var id: Number
        get() {
            return _tRG(__v_raw, "id", __v_raw.id, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("id")) {
                return
            }
            val oldValue = __v_raw.id
            __v_raw.id = value
            _tRS(__v_raw, "id", oldValue, value)
        }
    override var title: String
        get() {
            return _tRG(__v_raw, "title", __v_raw.title, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("title")) {
                return
            }
            val oldValue = __v_raw.title
            __v_raw.title = value
            _tRS(__v_raw, "title", oldValue, value)
        }
    override var summary: String
        get() {
            return _tRG(__v_raw, "summary", __v_raw.summary, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("summary")) {
                return
            }
            val oldValue = __v_raw.summary
            __v_raw.summary = value
            _tRS(__v_raw, "summary", oldValue, value)
        }
    override var tag: String
        get() {
            return _tRG(__v_raw, "tag", __v_raw.tag, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tag")) {
                return
            }
            val oldValue = __v_raw.tag
            __v_raw.tag = value
            _tRS(__v_raw, "tag", oldValue, value)
        }
    override var tagBgColor: String
        get() {
            return _tRG(__v_raw, "tagBgColor", __v_raw.tagBgColor, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tagBgColor")) {
                return
            }
            val oldValue = __v_raw.tagBgColor
            __v_raw.tagBgColor = value
            _tRS(__v_raw, "tagBgColor", oldValue, value)
        }
    override var tagColor: String
        get() {
            return _tRG(__v_raw, "tagColor", __v_raw.tagColor, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tagColor")) {
                return
            }
            val oldValue = __v_raw.tagColor
            __v_raw.tagColor = value
            _tRS(__v_raw, "tagColor", oldValue, value)
        }
}
val GenSrcPagesFunctionComponentsZPagingDemoCardClass = CreateVueComponent(GenSrcPagesFunctionComponentsZPagingDemoCard::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcPagesFunctionComponentsZPagingDemoCard.inheritAttrs, inject = GenSrcPagesFunctionComponentsZPagingDemoCard.inject, props = GenSrcPagesFunctionComponentsZPagingDemoCard.props, propsNeedCastKeys = GenSrcPagesFunctionComponentsZPagingDemoCard.propsNeedCastKeys, emits = GenSrcPagesFunctionComponentsZPagingDemoCard.emits, components = GenSrcPagesFunctionComponentsZPagingDemoCard.components, styles = GenSrcPagesFunctionComponentsZPagingDemoCard.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionComponentsZPagingDemoCard.setup(props as GenSrcPagesFunctionComponentsZPagingDemoCard)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionComponentsZPagingDemoCard {
    return GenSrcPagesFunctionComponentsZPagingDemoCard(instance)
}
)
val GenSrcPagesFunctionFunctionClass = CreateVueComponent(GenSrcPagesFunctionFunction::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcPagesFunctionFunction.inheritAttrs, inject = GenSrcPagesFunctionFunction.inject, props = GenSrcPagesFunctionFunction.props, propsNeedCastKeys = GenSrcPagesFunctionFunction.propsNeedCastKeys, emits = GenSrcPagesFunctionFunction.emits, components = GenSrcPagesFunctionFunction.components, styles = GenSrcPagesFunctionFunction.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesFunctionFunction.setup(props as GenSrcPagesFunctionFunction)
    }
    )
}
, fun(instance, renderer): GenSrcPagesFunctionFunction {
    return GenSrcPagesFunctionFunction(instance, renderer)
}
)
val GenSrcPagesMeMeClass = CreateVueComponent(GenSrcPagesMeMe::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcPagesMeMe.inheritAttrs, inject = GenSrcPagesMeMe.inject, props = GenSrcPagesMeMe.props, propsNeedCastKeys = GenSrcPagesMeMe.propsNeedCastKeys, emits = GenSrcPagesMeMe.emits, components = GenSrcPagesMeMe.components, styles = GenSrcPagesMeMe.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcPagesMeMe.setup(props as GenSrcPagesMeMe)
    }
    )
}
, fun(instance, renderer): GenSrcPagesMeMe {
    return GenSrcPagesMeMe(instance, renderer)
}
)
val GenSrcSubAuthLoginClass = CreateVueComponent(GenSrcSubAuthLogin::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcSubAuthLogin.inheritAttrs, inject = GenSrcSubAuthLogin.inject, props = GenSrcSubAuthLogin.props, propsNeedCastKeys = GenSrcSubAuthLogin.propsNeedCastKeys, emits = GenSrcSubAuthLogin.emits, components = GenSrcSubAuthLogin.components, styles = GenSrcSubAuthLogin.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubAuthLogin.setup(props as GenSrcSubAuthLogin)
    }
    )
}
, fun(instance, renderer): GenSrcSubAuthLogin {
    return GenSrcSubAuthLogin(instance, renderer)
}
)
val GenSrcSubAuthRegisterClass = CreateVueComponent(GenSrcSubAuthRegister::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcSubAuthRegister.inheritAttrs, inject = GenSrcSubAuthRegister.inject, props = GenSrcSubAuthRegister.props, propsNeedCastKeys = GenSrcSubAuthRegister.propsNeedCastKeys, emits = GenSrcSubAuthRegister.emits, components = GenSrcSubAuthRegister.components, styles = GenSrcSubAuthRegister.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubAuthRegister.setup(props as GenSrcSubAuthRegister)
    }
    )
}
, fun(instance, renderer): GenSrcSubAuthRegister {
    return GenSrcSubAuthRegister(instance, renderer)
}
)
open class ArticleItem (
    @JsonNotNull
    open var id: Number,
    @JsonNotNull
    open var title: String,
    @JsonNotNull
    open var summary: String,
    @JsonNotNull
    open var author: String,
    @JsonNotNull
    open var createTime: String,
    @JsonNotNull
    open var tag: String,
    @JsonNotNull
    open var tagBgColor: String,
    @JsonNotNull
    open var tagColor: String,
) : UTSReactiveObject() {
    override fun __v_create(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): UTSReactiveObject {
        return ArticleItemReactiveObject(this, __v_isReadonly, __v_isShallow, __v_skip)
    }
}
class ArticleItemReactiveObject : ArticleItem, IUTSReactive<ArticleItem> {
    override var __v_raw: ArticleItem
    override var __v_isReadonly: Boolean
    override var __v_isShallow: Boolean
    override var __v_skip: Boolean
    constructor(__v_raw: ArticleItem, __v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean) : super(id = __v_raw.id, title = __v_raw.title, summary = __v_raw.summary, author = __v_raw.author, createTime = __v_raw.createTime, tag = __v_raw.tag, tagBgColor = __v_raw.tagBgColor, tagColor = __v_raw.tagColor) {
        this.__v_raw = __v_raw
        this.__v_isReadonly = __v_isReadonly
        this.__v_isShallow = __v_isShallow
        this.__v_skip = __v_skip
    }
    override fun __v_clone(__v_isReadonly: Boolean, __v_isShallow: Boolean, __v_skip: Boolean): ArticleItemReactiveObject {
        return ArticleItemReactiveObject(this.__v_raw, __v_isReadonly, __v_isShallow, __v_skip)
    }
    override var id: Number
        get() {
            return _tRG(__v_raw, "id", __v_raw.id, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("id")) {
                return
            }
            val oldValue = __v_raw.id
            __v_raw.id = value
            _tRS(__v_raw, "id", oldValue, value)
        }
    override var title: String
        get() {
            return _tRG(__v_raw, "title", __v_raw.title, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("title")) {
                return
            }
            val oldValue = __v_raw.title
            __v_raw.title = value
            _tRS(__v_raw, "title", oldValue, value)
        }
    override var summary: String
        get() {
            return _tRG(__v_raw, "summary", __v_raw.summary, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("summary")) {
                return
            }
            val oldValue = __v_raw.summary
            __v_raw.summary = value
            _tRS(__v_raw, "summary", oldValue, value)
        }
    override var author: String
        get() {
            return _tRG(__v_raw, "author", __v_raw.author, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("author")) {
                return
            }
            val oldValue = __v_raw.author
            __v_raw.author = value
            _tRS(__v_raw, "author", oldValue, value)
        }
    override var createTime: String
        get() {
            return _tRG(__v_raw, "createTime", __v_raw.createTime, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("createTime")) {
                return
            }
            val oldValue = __v_raw.createTime
            __v_raw.createTime = value
            _tRS(__v_raw, "createTime", oldValue, value)
        }
    override var tag: String
        get() {
            return _tRG(__v_raw, "tag", __v_raw.tag, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tag")) {
                return
            }
            val oldValue = __v_raw.tag
            __v_raw.tag = value
            _tRS(__v_raw, "tag", oldValue, value)
        }
    override var tagBgColor: String
        get() {
            return _tRG(__v_raw, "tagBgColor", __v_raw.tagBgColor, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tagBgColor")) {
                return
            }
            val oldValue = __v_raw.tagBgColor
            __v_raw.tagBgColor = value
            _tRS(__v_raw, "tagBgColor", oldValue, value)
        }
    override var tagColor: String
        get() {
            return _tRG(__v_raw, "tagColor", __v_raw.tagColor, __v_isReadonly, __v_isShallow)
        }
        set(value) {
            if (!__v_canSet("tagColor")) {
                return
            }
            val oldValue = __v_raw.tagColor
            __v_raw.tagColor = value
            _tRS(__v_raw, "tagColor", oldValue, value)
        }
}
val GenSrcSubPagingPagingClass = CreateVueComponent(GenSrcSubPagingPaging::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcSubPagingPaging.inheritAttrs, inject = GenSrcSubPagingPaging.inject, props = GenSrcSubPagingPaging.props, propsNeedCastKeys = GenSrcSubPagingPaging.propsNeedCastKeys, emits = GenSrcSubPagingPaging.emits, components = GenSrcSubPagingPaging.components, styles = GenSrcSubPagingPaging.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubPagingPaging.setup(props as GenSrcSubPagingPaging)
    }
    )
}
, fun(instance, renderer): GenSrcSubPagingPaging {
    return GenSrcSubPagingPaging(instance, renderer)
}
)
val GenSrcSubTailwindcssComponentsWeappTailwindcssClass = CreateVueComponent(GenSrcSubTailwindcssComponentsWeappTailwindcss::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcSubTailwindcssComponentsWeappTailwindcss.inheritAttrs, inject = GenSrcSubTailwindcssComponentsWeappTailwindcss.inject, props = GenSrcSubTailwindcssComponentsWeappTailwindcss.props, propsNeedCastKeys = GenSrcSubTailwindcssComponentsWeappTailwindcss.propsNeedCastKeys, emits = GenSrcSubTailwindcssComponentsWeappTailwindcss.emits, components = GenSrcSubTailwindcssComponentsWeappTailwindcss.components, styles = GenSrcSubTailwindcssComponentsWeappTailwindcss.styles)
}
, fun(instance, renderer): GenSrcSubTailwindcssComponentsWeappTailwindcss {
    return GenSrcSubTailwindcssComponentsWeappTailwindcss(instance)
}
)
val GenSrcSubTailwindcssComponentsBindClassClass = CreateVueComponent(GenSrcSubTailwindcssComponentsBindClass::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcSubTailwindcssComponentsBindClass.inheritAttrs, inject = GenSrcSubTailwindcssComponentsBindClass.inject, props = GenSrcSubTailwindcssComponentsBindClass.props, propsNeedCastKeys = GenSrcSubTailwindcssComponentsBindClass.propsNeedCastKeys, emits = GenSrcSubTailwindcssComponentsBindClass.emits, components = GenSrcSubTailwindcssComponentsBindClass.components, styles = GenSrcSubTailwindcssComponentsBindClass.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubTailwindcssComponentsBindClass.setup(props as GenSrcSubTailwindcssComponentsBindClass)
    }
    )
}
, fun(instance, renderer): GenSrcSubTailwindcssComponentsBindClass {
    return GenSrcSubTailwindcssComponentsBindClass(instance)
}
)
val GenSrcSubTailwindcssComponentsTButtonClass = CreateVueComponent(GenSrcSubTailwindcssComponentsTButton::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "component", name = "", inheritAttrs = GenSrcSubTailwindcssComponentsTButton.inheritAttrs, inject = GenSrcSubTailwindcssComponentsTButton.inject, props = GenSrcSubTailwindcssComponentsTButton.props, propsNeedCastKeys = GenSrcSubTailwindcssComponentsTButton.propsNeedCastKeys, emits = GenSrcSubTailwindcssComponentsTButton.emits, components = GenSrcSubTailwindcssComponentsTButton.components, styles = GenSrcSubTailwindcssComponentsTButton.styles)
}
, fun(instance, renderer): GenSrcSubTailwindcssComponentsTButton {
    return GenSrcSubTailwindcssComponentsTButton(instance)
}
)
val GenSrcSubTailwindcssTailwindcssClass = CreateVueComponent(GenSrcSubTailwindcssTailwindcss::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcSubTailwindcssTailwindcss.inheritAttrs, inject = GenSrcSubTailwindcssTailwindcss.inject, props = GenSrcSubTailwindcssTailwindcss.props, propsNeedCastKeys = GenSrcSubTailwindcssTailwindcss.propsNeedCastKeys, emits = GenSrcSubTailwindcssTailwindcss.emits, components = GenSrcSubTailwindcssTailwindcss.components, styles = GenSrcSubTailwindcssTailwindcss.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubTailwindcssTailwindcss.setup(props as GenSrcSubTailwindcssTailwindcss)
    }
    )
}
, fun(instance, renderer): GenSrcSubTailwindcssTailwindcss {
    return GenSrcSubTailwindcssTailwindcss(instance, renderer)
}
)
val GenSrcSubTestTestClass = CreateVueComponent(GenSrcSubTestTest::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcSubTestTest.inheritAttrs, inject = GenSrcSubTestTest.inject, props = GenSrcSubTestTest.props, propsNeedCastKeys = GenSrcSubTestTest.propsNeedCastKeys, emits = GenSrcSubTestTest.emits, components = GenSrcSubTestTest.components, styles = GenSrcSubTestTest.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubTestTest.setup(props as GenSrcSubTestTest)
    }
    )
}
, fun(instance, renderer): GenSrcSubTestTest {
    return GenSrcSubTestTest(instance, renderer)
}
)
val default__5 = "/assets/logo.de257528.png"
val GenSrcSubUiTestUiTestClass = CreateVueComponent(GenSrcSubUiTestUiTest::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(type = "page", name = "", inheritAttrs = GenSrcSubUiTestUiTest.inheritAttrs, inject = GenSrcSubUiTestUiTest.inject, props = GenSrcSubUiTestUiTest.props, propsNeedCastKeys = GenSrcSubUiTestUiTest.propsNeedCastKeys, emits = GenSrcSubUiTestUiTest.emits, components = GenSrcSubUiTestUiTest.components, styles = GenSrcSubUiTestUiTest.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenSrcSubUiTestUiTest.setup(props as GenSrcSubUiTestUiTest)
    }
    )
}
, fun(instance, renderer): GenSrcSubUiTestUiTest {
    return GenSrcSubUiTestUiTest(instance, renderer)
}
)
fun createApp(): UTSJSONObject {
    installRouteInterceptor()
    val app = createSSRApp(GenAppClass)
    app.use(pinia)
    app.config.globalProperties["\$pinia"] = true
    app.use(i18n)
    return _uO("app" to app)
}
fun main(app: IApp) {
    enableStyleIsolation()
    definePageRoutes()
    defineAppConfig()
    (createApp()["app"] as VueApp).mount(app, GenUniApp())
}
open class UniAppConfig : io.dcloud.uniapp.appframe.AppConfig {
    override var name: String = "unibestX"
    override var appid: String = "__UNI__B120614"
    override var versionName: String = "1.0.0"
    override var versionCode: String = "100"
    override var uniCompilerVersion: String = "5.25"
    constructor() : super() {}
}
fun definePageRoutes() {
    __uniRoutes.push(UniPageRoute(path = "src/pages/index/index", component = GenSrcPagesIndexIndexClass, meta = UniPageMeta(isQuit = true), style = _uM("navigationBarTitleText" to "首页", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/pages/ai/ai", component = GenSrcPagesAiAiClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "AI 智能助手", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/pages/basic/basic", component = GenSrcPagesBasicBasicClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "基础", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/pages/function/function", component = GenSrcPagesFunctionFunctionClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "功能", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/pages/me/me", component = GenSrcPagesMeMeClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "我的", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/sub/auth/login", component = GenSrcSubAuthLoginClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "登录", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/sub/auth/register", component = GenSrcSubAuthRegisterClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "注册", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/sub/paging/paging", component = GenSrcSubPagingPagingClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "分页加载 (z-paging-x)", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/sub/tailwindcss/tailwindcss", component = GenSrcSubTailwindcssTailwindcssClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "weapp-tailwindcss 示例", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/sub/test/test", component = GenSrcSubTestTestClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "URL 参数测试", "navigationStyle" to "custom")))
    __uniRoutes.push(UniPageRoute(path = "src/sub/uiTest/uiTest", component = GenSrcSubUiTestUiTestClass, meta = UniPageMeta(isQuit = false), style = _uM("navigationBarTitleText" to "UI 测试", "navigationStyle" to "custom")))
}
val __uniTabBar: Map<String, Any?>? = _uM("custom" to true, "color" to "@tabBarColor", "selectedColor" to "@tabBarSelectedColor", "backgroundColor" to "@tabBarBackgroundColor", "borderStyle" to "@tabBarBorderStyle", "list" to _uA(
    _uM("pagePath" to "src/pages/index/index", "text" to "首页", "iconPath" to "static/tabbar/home.png", "selectedIconPath" to "static/tabbar/home_fill.png"),
    _uM("pagePath" to "src/pages/basic/basic", "text" to "基础", "iconPath" to "static/tabbar/tune.png", "selectedIconPath" to "static/tabbar/tune_fill.png"),
    _uM("pagePath" to "src/pages/function/function", "text" to "功能", "iconPath" to "static/tabbar/gear.png", "selectedIconPath" to "static/tabbar/gear_fill.png"),
    _uM("pagePath" to "src/pages/me/me", "text" to "我的", "iconPath" to "static/tabbar/people.png", "selectedIconPath" to "static/tabbar/people_fill.png")
))
val __uniLaunchPage: Map<String, Any?> = _uM("url" to "src/pages/index/index", "style" to _uM("navigationBarTitleText" to "首页", "navigationStyle" to "custom"))
fun defineAppConfig() {
    __uniConfig.entryPagePath = "/src/pages/index/index"
    __uniConfig.globalStyle = _uM("navigationBarTextStyle" to "@navigationBarTextStyle", "navigationBarTitleText" to "uni-app x", "navigationBarBackgroundColor" to "@navigationBarBackgroundColor", "backgroundColor" to "@backgroundColor", "backgroundColorContent" to "@backgroundColorContent", "backgroundColorTop" to "@backgroundColorTop", "backgroundColorBottom" to "@backgroundColorBottom", "backgroundTextStyle" to "@backgroundTextStyle")
    __uniConfig.getTabBarConfig = fun(): Map<String, Any>? {
        return _uM("custom" to true, "color" to "@tabBarColor", "selectedColor" to "@tabBarSelectedColor", "backgroundColor" to "@tabBarBackgroundColor", "borderStyle" to "@tabBarBorderStyle", "list" to _uA(
            _uM("pagePath" to "src/pages/index/index", "text" to "首页", "iconPath" to "static/tabbar/home.png", "selectedIconPath" to "static/tabbar/home_fill.png"),
            _uM("pagePath" to "src/pages/basic/basic", "text" to "基础", "iconPath" to "static/tabbar/tune.png", "selectedIconPath" to "static/tabbar/tune_fill.png"),
            _uM("pagePath" to "src/pages/function/function", "text" to "功能", "iconPath" to "static/tabbar/gear.png", "selectedIconPath" to "static/tabbar/gear_fill.png"),
            _uM("pagePath" to "src/pages/me/me", "text" to "我的", "iconPath" to "static/tabbar/people.png", "selectedIconPath" to "static/tabbar/people_fill.png")
        ))
    }
    __uniConfig.tabBar = __uniConfig.getTabBarConfig()
    __uniConfig.conditionUrl = ""
    __uniConfig.uniIdRouter = Map()
    __uniConfig.themeConfig = _uM("light" to _uM("backgroundColor" to "#f8fafc", "backgroundColorBottom" to "#f8fafc", "backgroundColorContent" to "#f8fafc", "backgroundColorTop" to "#f8fafc", "backgroundTextStyle" to "dark", "navigationBarBackgroundColor" to "#ffffff", "navigationBarTextStyle" to "black", "tabBarBackgroundColor" to "#ffffff", "tabBarBorderStyle" to "black", "tabBarColor" to "#515151", "tabBarSelectedColor" to "#0957de"), "dark" to _uM("backgroundColor" to "#0f172a", "backgroundColorBottom" to "#0f172a", "backgroundColorContent" to "#0f172a", "backgroundColorTop" to "#0f172a", "backgroundTextStyle" to "light", "navigationBarBackgroundColor" to "#0f172a", "navigationBarTextStyle" to "white", "tabBarBackgroundColor" to "#0f172a", "tabBarBorderStyle" to "black", "tabBarColor" to "#515151", "tabBarSelectedColor" to "#0957de"))
    __uniConfig.ready = true
}
open class UniCloudConfig : io.dcloud.unicloud.InternalUniCloudConfig {
    override var isDev: Boolean = false
    override var spaceList: String = "[{\"provider\":\"alipay\",\"spaceName\":\"unibest-x\",\"spaceId\":\"env-00jy6p9vat6w\",\"spaceAppId\":\"2021006189647783\",\"accessKey\":\"v1hNSO9cKet13BIZ\",\"secretKey\":\"KCHJ9hiSZqvmd8Yx\",\"endpoint\":\"https://env-00jy6p9vat6w.api-hz.cloudbasefunction.cn\",\"failoverEndpoint\":\"\"}]"
    override var debuggerInfo: String? = null
    override var secureNetworkEnable: Boolean = false
    override var secureNetworkConfig: String? = "[]"
    constructor() : super() {}
}
var `___$i18n` = lime_i18n!!
var `___$locale` = lime_i18n!!.global.locale
var `___$pinia` = pinia
var VueComponent.`$i18n`
    get() = `___$i18n`
    set(value) {
        `___$i18n` = value
    }
fun VueComponent.`$t`(key: String, values: Any? = null, locale: String? = null): String {
    val isLocale = UTSAndroid.`typeof`(values) == "string"
    val _values = if (isLocale) {
        null
    } else {
        values
    }
    val _locale = if (isLocale) {
        values as String
    } else {
        locale
    }
    return lime_i18n!!.global.t(key, _values, _locale)
}
fun VueComponent.`$tc`(key: String, choice: Number? = null, values: Any? = null, locale: String? = null): String {
    val isLocale = UTSAndroid.`typeof`(values) == "string"
    val _values = if (isLocale) {
        null
    } else {
        values
    }
    val _locale = if (isLocale) {
        values as String
    } else {
        locale
    }
    return lime_i18n!!.global.tc(key, choice, _values, _locale)
}
fun VueComponent.`$d`(date: Any, key: String? = null, locale: String? = null, options: UTSJSONObject? = null): String {
    return lime_i18n!!.global.d(date, key, locale, options)
}
fun VueComponent.`$n`(number: Number, key: String? = null, locale: Any? = null, options: UTSJSONObject? = null): String {
    val _locale = if (UTSAndroid.`typeof`(locale) == "string") {
        locale as String
    } else {
        null
    }
    val _options = if (UTSAndroid.`typeof`(locale) == "object" && locale != null) {
        locale as UTSJSONObject
    } else {
        options
    }
    return lime_i18n!!.global.n(number, key, _locale, _options)
}
var VueComponent.`$locale`
    get() = `___$locale`
    set(value) {
        `___$locale` = value
    }
var VueComponent.`$pinia`
    get() = `___$pinia`
    set(value) {
        `___$pinia` = value
    }
open class GenUniApp : UniAppImpl() {
    open val vm: GenApp?
        get() {
            return getAppVm() as GenApp?
        }
    open val `$vm`: GenApp?
        get() {
            return getAppVm() as GenApp?
        }
}
fun getApp(): GenUniApp {
    return getUniApp() as GenUniApp
}
