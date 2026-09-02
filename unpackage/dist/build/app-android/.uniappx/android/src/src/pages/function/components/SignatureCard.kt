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
open class GenSrcPagesFunctionComponentsSignatureCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsSignatureCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsSignatureCard
            val _cache = __ins.renderCache
            val sigRef = ref<ComponentPublicInstance?>(null)
            val penColor = ref("red")
            val penSize = ref(4)
            val openSmooth = ref(true)
            val signUrl = ref("")
            val colorList = _uA(
                "#ef4444",
                "#000000",
                "#3b82f6",
                "#10b981",
                "#f59e0b"
            )
            val penSizeOptions: UTSArray<Number> = _uA(
                1,
                3,
                5,
                8,
                12
            )
            fun gen_onCardTouchStart_fn(_e: UniTouchEvent) {
                setPageScrollEnabled(false)
            }
            val onCardTouchStart = ::gen_onCardTouchStart_fn
            fun gen_onCardTouchEnd_fn(_e: UniTouchEvent) {
                setPageScrollEnabled(true)
            }
            val onCardTouchEnd = ::gen_onCardTouchEnd_fn
            fun gen_preventScroll_fn(_e: UniTouchEvent) {}
            val preventScroll = ::gen_preventScroll_fn
            onUnmounted(fun(){
                setPageScrollEnabled(true)
            }
            )
            fun gen_onAction_fn(type: String) {
                val el = sigRef.value
                if (el == null) {
                    uni_showToast(ShowToastOptions(title = "签名组件未就绪", icon = "none"))
                    return
                }
                if (type === "clear") {
                    el.`$callMethod`("clear")
                    signUrl.value = ""
                } else if (type === "undo") {
                    el.`$callMethod`("undo")
                } else if (type === "redo") {
                    el.`$callMethod`("redo")
                } else if (type === "save") {
                    el.`$callMethod`("canvasToTempFilePath", LimeSignatureToTempFilePathOptions(success = fun(res: LimeSignatureToFileSuccess){
                        if (res.isEmpty) {
                            uni_showToast(ShowToastOptions(title = "请先签名", icon = "none"))
                            return
                        }
                        signUrl.value = res.tempFilePath
                        uni_showToast(ShowToastOptions(title = "签名保存成功", icon = "success"))
                    }
                    , fail = fun(_err: Any){
                        uni_showToast(ShowToastOptions(title = "保存失败", icon = "error"))
                    }
                    ))
                }
            }
            val onAction = ::gen_onAction_fn
            return fun(): Any? {
                val _component_l_signature = resolveEasyComponent("l-signature", GenUniModulesLimeSignatureComponentsLSignatureLSignatureClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "签名板 lime-signature"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "signature-wrapper wtu-121thbv-0 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4 wtu-1dvrapb-5", "style" to _nS(_uM("width" to "100%", "height" to "300px")), "onTouchstart" to onCardTouchStart, "onTouchend" to onCardTouchEnd, "onTouchcancel" to onCardTouchEnd, "onTouchmove" to withModifiers(preventScroll, _uA(
                            "stop",
                            "prevent"
                        ))), _uA(
                            _cV(_component_l_signature, _uM("ref_key" to "sigRef", "ref" to sigRef, "style" to _nS(_uM("width" to "100%", "height" to "100%")), "pen-color" to penColor.value, "pen-size" to penSize.value, "open-smooth" to openSmooth.value, "disable-scroll" to true, "background-color" to "#ffffff"), null, 8, _uA(
                                "style",
                                "pen-color",
                                "pen-size",
                                "open-smooth"
                            ))
                        ), 36),
                        _cE("view", _uM("class" to "wtu-121thbv-0 wtu-p8z8w4-6 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4"), _uA(
                            _cE("text", _uM("class" to "wtu-gfe5sd-7 wtu-1cr1yu4-8 wtu-c60ml5-9"), "画板操作"),
                            _cE("view", _uM("class" to "wtu-15uu4fg-a wtu-c60ml5-9 wtu-yfu56f-b"), _uA(
                                _cE("view", _uM("class" to "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-1jk32ls-f wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i wtu-rtg07c-j", "onClick" to fun(){
                                    onAction("save")
                                }
                                ), _uA(
                                    _cE("text", _uM("class" to "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m"), "保存图片")
                                ), 8, _uA(
                                    "onClick"
                                )),
                                _cE("view", _uM("class" to "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-ewjr3a-n wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i wtu-rtg07c-j", "onClick" to fun(){
                                    onAction("undo")
                                }
                                ), _uA(
                                    _cE("text", _uM("class" to "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m"), "撤销")
                                ), 8, _uA(
                                    "onClick"
                                )),
                                _cE("view", _uM("class" to "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-v6oeps-o wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i wtu-rtg07c-j", "onClick" to fun(){
                                    onAction("redo")
                                }
                                ), _uA(
                                    _cE("text", _uM("class" to "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m"), "重做")
                                ), 8, _uA(
                                    "onClick"
                                )),
                                _cE("view", _uM("class" to "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-han5s8-p wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i", "onClick" to fun(){
                                    onAction("clear")
                                }
                                ), _uA(
                                    _cE("text", _uM("class" to "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m"), "清空")
                                ), 8, _uA(
                                    "onClick"
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-121thbv-0 wtu-p8z8w4-6 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4"), _uA(
                            _cE("text", _uM("class" to "wtu-gfe5sd-7 wtu-1cr1yu4-8 wtu-c60ml5-9"), "画笔设置"),
                            _cE("view", _uM("class" to "wtu-15uu4fg-a wtu-yfu56f-b wtu-q3ffeg-h wtu-c60ml5-9"), _uA(
                                _cE("text", _uM("class" to "wtu-1567i1s-l wtu-j8xvyj-q"), "画笔颜色"),
                                _cE("view", _uM("class" to "wtu-15uu4fg-a"), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(colorList, fun(clr, __key, __index, _cached): Any {
                                        return _cE("view", _uM("key" to clr, "class" to "wtu-1bzq6ig-r wtu-iw9emz-s wtu-tzj4ax-t wtu-uw41ie-u wtu-1cu0ly5-v wtu-kdfn8q-3 wtu-q3ffeg-h wtu-m0xl7g-i", "style" to _nS(_uM("backgroundColor" to clr, "borderColor" to if (penColor.value === clr) {
                                            "#1e293b"
                                        } else {
                                            "transparent"
                                        }
                                        )), "onClick" to fun(){
                                            penColor.value = clr
                                        }
                                        ), null, 12, _uA(
                                            "onClick"
                                        ))
                                    }
                                    ), 64)
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-15uu4fg-a wtu-yfu56f-b wtu-q3ffeg-h wtu-c60ml5-9"), _uA(
                                _cE("text", _uM("class" to "wtu-1567i1s-l wtu-j8xvyj-q"), "画笔粗细"),
                                _cE("text", _uM("class" to "wtu-gfe5sd-7 wtu-1cr1yu4-8"), _tD(penSize.value) + "px", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-15uu4fg-a wtu-c60ml5-9"), _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(penSizeOptions, fun(sz, _j, __index, _cached): Any {
                                    return _cE("view", _uM("key" to sz, "class" to _nC(_uA(
                                        "wtu-dhurvf-c wtu-1ia7rtq-w wtu-cjnkl2-x wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i",
                                        if (_j < penSizeOptions.length - 1) {
                                            "wtu-rtg07c-j"
                                        } else {
                                            ""
                                        }
                                    )), "style" to _nS(_uM("backgroundColor" to if (penSize.value === sz) {
                                        "#3b82f6"
                                    } else {
                                        "#e2e8f0"
                                    }
                                    )), "onClick" to fun(){
                                        penSize.value = sz
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-gfe5sd-7 wtu-19k59p-m", "style" to _nS(_uM("color" to if (penSize.value === sz) {
                                            "#ffffff"
                                        } else {
                                            "#475569"
                                        }
                                        ))), _tD(sz) + "px", 5)
                                    ), 14, _uA(
                                        "onClick"
                                    ))
                                }
                                ), 64)
                            ))
                        )),
                        if (signUrl.value !== "") {
                            _cE("view", _uM("key" to 0, "class" to "wtu-121thbv-0 wtu-p8z8w4-6 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4 wtu-q3ffeg-h"), _uA(
                                _cE("text", _uM("class" to "wtu-gfe5sd-7 wtu-1cr1yu4-8 wtu-1nsxweq-10"), "签名预览"),
                                _cE("image", _uM("src" to signUrl.value, "class" to "wtu-849arj-11 wtu-bsmas6-12 wtu-11akng4-e wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4", "mode" to "aspectFit"), null, 8, _uA(
                                    "src"
                                ))
                            ))
                        } else {
                            _cC("v-if", true)
                        }
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
                return _uM("wtu-121thbv-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1bsz7w5-1" to _pS(_uM("marginBottom" to 16)), "wtu-14qjfb2-2" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-kdfn8q-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-iddhag-4" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1dvrapb-5" to _pS(_uM("overflow" to "hidden")), "wtu-p8z8w4-6" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-gfe5sd-7" to _pS(_uM("fontSize" to 12)), "wtu-1cr1yu4-8" to _pS(_uM("color" to "#94a3b8")), "wtu-c60ml5-9" to _pS(_uM("marginBottom" to 12)), "wtu-15uu4fg-a" to _pS(_uM("flexDirection" to "row")), "wtu-yfu56f-b" to _pS(_uM("justifyContent" to "space-between")), "wtu-dhurvf-c" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-1kpqwy-d" to _pS(_uM("height" to 36)), "wtu-11akng4-e" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1jk32ls-f" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-1icw4t1-g" to _pS(_uM("display" to "flex")), "wtu-q3ffeg-h" to _pS(_uM("alignItems" to "center")), "wtu-m0xl7g-i" to _pS(_uM("justifyContent" to "center")), "wtu-rtg07c-j" to _pS(_uM("marginRight" to 6)), "wtu-i6srrl-k" to _pS(_uM("color" to "#ffffff")), "wtu-1567i1s-l" to _pS(_uM("fontSize" to 13)), "wtu-19k59p-m" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-ewjr3a-n" to _pS(_uM("backgroundColor" to "#f59e0b")), "wtu-v6oeps-o" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-han5s8-p" to _pS(_uM("backgroundColor" to "#ef4444")), "wtu-j8xvyj-q" to _pS(_uM("color" to "#475569")), "wtu-1bzq6ig-r" to _pS(_uM("width" to 28)), "wtu-iw9emz-s" to _pS(_uM("height" to 28)), "wtu-tzj4ax-t" to _pS(_uM("borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14)), "wtu-uw41ie-u" to _pS(_uM("marginLeft" to 6)), "wtu-1cu0ly5-v" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2)), "wtu-1ia7rtq-w" to _pS(_uM("height" to 32)), "wtu-cjnkl2-x" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-18wy7bw-y" to _pS(_uM("width" to 60)), "wtu-comc8v-z" to _pS(_uM("borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16)), "wtu-1nsxweq-10" to _pS(_uM("marginBottom" to 8)), "wtu-849arj-11" to _pS(_uM("width" to "100%")), "wtu-bsmas6-12" to _pS(_uM("height" to 120)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
