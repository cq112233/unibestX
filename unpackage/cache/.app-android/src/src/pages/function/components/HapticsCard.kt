@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import android.content.Context
import android.os.Build
import android.os.Vibrator
import android.os.VibratorManager
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
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesFunctionComponentsHapticsCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
        var setup: (__props: GenSrcPagesFunctionComponentsHapticsCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsHapticsCard
            val _cache = __ins.renderCache
            val copyText = ref("Hello unibestX!")
            fun gen_vibrationAndroid_fn(): Unit {
                val activity = UTSAndroid.getUniActivity()
                if (activity == null) {
                    uni_showToast(ShowToastOptions(title = "获取 Activity 失败", icon = "none"))
                    return
                }
                try {
                    if (Build.VERSION.SDK_INT >= 31) {
                        val manager = activity.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as VibratorManager
                        if (manager != null) {
                            manager.defaultVibrator.vibrate(15)
                            uni_showToast(ShowToastOptions(title = "已触发短震动", icon = "none"))
                        } else {
                            uni_showToast(ShowToastOptions(title = "获取震动服务失败", icon = "none"))
                        }
                    } else {
                        val vibrator = activity.getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
                        if (vibrator != null) {
                            vibrator.vibrate(15)
                            uni_showToast(ShowToastOptions(title = "已触发短震动", icon = "none"))
                        } else {
                            uni_showToast(ShowToastOptions(title = "获取震动服务失败", icon = "none"))
                        }
                    }
                }
                 catch (e: Throwable) {
                    uni_showToast(ShowToastOptions(title = "震动调用失败", icon = "none"))
                }
            }
            val vibrationAndroid = ::gen_vibrationAndroid_fn
            fun gen_triggerVibration_fn() {
                vibrationAndroid()
            }
            val triggerVibration = ::gen_triggerVibration_fn
            fun gen_handleCopy_fn() {
                if (copyText.value === "") {
                    return
                }
                uni_setClipboardData(SetClipboardDataOptions(data = copyText.value, success = fun(_){
                    uni_showToast(ShowToastOptions(title = "复制成功", icon = "success"))
                }
                ))
            }
            val handleCopy = ::gen_handleCopy_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "触感与工具"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-12px text-__94a3b8_ mb-8px"), "剪贴板测试文本"),
                            _cE("input", _uM("modelValue" to copyText.value, "onInput" to fun(`$event`: UniInputEvent){
                                copyText.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要复制的文本", "class" to "h-38px bg-white rounded-6px px-12px border-width-1px border-style-solid border-color-__cbd5e1_ text-14px text-__334155_ mb-12px"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "w-full h-38px rounded-8px bg-__10b981_ flex flex-row items-center justify-center", "onClick" to handleCopy), _uA(
                                _cE("text", _uM("class" to "text-__ffffff_ text-14px font-bold"), "复制测试文本")
                            ))
                        )),
                        _cE("view", _uM("class" to "w-full h-44px rounded-8px bg-__f59e0b_ flex flex-row items-center justify-center", "onClick" to triggerVibration), _uA(
                            _cE("text", _uM("class" to "text-__ffffff_ text-14px font-bold"), "短震动反馈")
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
                return _uM("bg-__10b981_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#10b981")), "bg-__f59e0b_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f59e0b")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "border-color-__cbd5e1_" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "border-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex" to _pS(_uM("display" to "flex")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to "700")), "h-38px" to _pS(_uM("height" to 38)), "h-44px" to _pS(_uM("height" to 44)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-center" to _pS(_uM("justifyContent" to "center")), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "none" to _pS(_uM("display" to "none")), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "px-12px" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-6px" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-__ffffff_" to _pS(_uM("color" to "#ffffff")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "w-full" to _pS(_uM("width" to "100%")))
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
