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
import io.dcloud.uniapp.extapi.chooseImage as uni_chooseImage
import io.dcloud.uniapp.extapi.scanCode as uni_scanCode
open class GenSrcPagesFunctionComponentsMediaCard : VueComponent {
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
        var setup: (__props: GenSrcPagesFunctionComponentsMediaCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsMediaCard
            val _cache = __ins.renderCache
            val photoUrl = ref("")
            val scanResult = ref("")
            fun gen_chooseImage_fn() {
                uni_chooseImage(ChooseImageOptions(count = 1, success = fun(res){
                    val paths = res.tempFilePaths
                    if (paths.length > 0) {
                        photoUrl.value = paths[0]
                    }
                }
                , fail = fun(err){
                    console.error(err)
                }
                ))
            }
            val chooseImage = ::gen_chooseImage_fn
            fun gen_scanCode_fn() {
                uni_scanCode(ScanCodeOptions(success = fun(res){
                    scanResult.value = res.result
                }
                , fail = fun(err){
                    console.error(err)
                }
                ))
            }
            val scanCode = ::gen_scanCode_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "相机与多媒体"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-19w2j55-0 wtu-vj37ae-1 wtu-iq02sv-2 wtu-1ohql58-3 wtu-pa6ipo-4 wtu-tlxzxu-5 wtu-q8b8gq-6 wtu-b9ro1a-7"), _uA(
                            if (photoUrl.value === "") {
                                _cE("text", _uM("key" to 0, "class" to "weapp-tw-border wtu-1q5m829-8 wtu-1s564xi-9"), "未选择照片")
                            } else {
                                _cE("image", _uM("key" to 1, "src" to photoUrl.value, "class" to "wtu-p8f9m4-a wtu-13oewch-b wtu-6cklr6-c", "mode" to "aspectFill"), null, 8, _uA(
                                    "src"
                                ))
                            }
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-2xyrg9-d wtu-1e3977j-e wtu-6cklr6-c wtu-1y0ezim-f wtu-xcm8yz-g wtu-y8rs9f-h wtu-kkkwyu-i wtu-q8b8gq-6 wtu-b9ro1a-7", "onClick" to chooseImage), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-1ra95rn-j wtu-1q5m829-8 wtu-qeuvjr-k"), "拍摄/选择照片")
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-19w2j55-0 wtu-vj37ae-1 wtu-iq02sv-2 wtu-1ohql58-3 wtu-pa6ipo-4 wtu-tlxzxu-5"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-18z544j-l wtu-1s564xi-9 wtu-1ek978k-m"), "扫码结果"),
                            _cE("text", _uM("class" to "weapp-tw-border wtu-1q5m829-8 wtu-qeuvjr-k wtu-1j4877a-n"), _tD(if (scanResult.value !== "") {
                                scanResult.value
                            } else {
                                "暂无数据"
                            }
                            ), 1)
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-2xyrg9-d wtu-1e3977j-e wtu-6cklr6-c wtu-yibfla-o wtu-y8rs9f-h wtu-kkkwyu-i wtu-q8b8gq-6 wtu-b9ro1a-7", "onClick" to scanCode), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-1ra95rn-j wtu-1q5m829-8 wtu-qeuvjr-k"), "扫码测试")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-19w2j55-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-vj37ae-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-iq02sv-2" to _pS(_uM("marginBottom" to 16)), "wtu-1ohql58-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-pa6ipo-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-tlxzxu-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-q8b8gq-6" to _pS(_uM("alignItems" to "center")), "wtu-b9ro1a-7" to _pS(_uM("justifyContent" to "center")), "wtu-1q5m829-8" to _pS(_uM("fontSize" to 14)), "wtu-1s564xi-9" to _pS(_uM("color" to "#94a3b8")), "wtu-p8f9m4-a" to _pS(_uM("width" to 150)), "wtu-13oewch-b" to _pS(_uM("height" to 150)), "wtu-6cklr6-c" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-2xyrg9-d" to _pS(_uM("width" to "100%")), "wtu-1e3977j-e" to _pS(_uM("height" to 44)), "wtu-1y0ezim-f" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-xcm8yz-g" to _pS(_uM("marginBottom" to 12)), "wtu-y8rs9f-h" to _pS(_uM("display" to "flex")), "wtu-kkkwyu-i" to _pS(_uM("flexDirection" to "row")), "wtu-1ra95rn-j" to _pS(_uM("color" to "#ffffff")), "wtu-qeuvjr-k" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-18z544j-l" to _pS(_uM("fontSize" to 12)), "wtu-1ek978k-m" to _pS(_uM("marginBottom" to 8)), "wtu-1j4877a-n" to _pS(_uM("color" to "#334155")), "wtu-yibfla-o" to _pS(_uM("backgroundColor" to "#10b981")))
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
