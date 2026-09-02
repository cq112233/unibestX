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
open class GenSrcPagesFunctionComponentsLodashDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsLodashDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsLodashDemoCard
            val _cache = __ins.renderCache
            val rawArray = ref(_uA<Number>(1, 2, 2, 3, 4, 4, 5, 6, 7, 8))
            val uniqArray = computed(fun(): UTSArray<Number> {
                return uniq(rawArray.value as UTSArray<Any>) as UTSArray<Number>
            }
            )
            val chunkedArray = computed(fun(): String {
                val result = chunk(uniqArray.value as UTSArray<Any>, 3)
                return JSON.stringify(result)
            }
            )
            fun gen_handleShuffle_fn() {
                rawArray.value = shuffle(rawArray.value as UTSArray<Any>) as UTSArray<Number>
            }
            val handleShuffle = ::gen_handleShuffle_fn
            val rawObj: UTSJSONObject = _uO("user" to _uO("info" to _uO("name" to "UniAppX Developer", "age" to 25)))
            val getNameResult = computed(fun(): String {
                return get(rawObj, "user.info.name", "未找到") as String
            }
            )
            val getFallbackResult = computed(fun(): String {
                return get(rawObj, "user.invalid.path", "兜底结果: 未查找到路径") as String
            }
            )
            val clonedObj = ref<UTSJSONObject>(cloneDeep(rawObj) as UTSJSONObject)
            val rawObjAge = ref<Number>(get(rawObj, "user.info.age", 0) as Number)
            val clonedObjAge = computed(fun(): Number {
                return get(clonedObj.value, "user.info.age", 0) as Number
            }
            )
            fun gen_mutateClonedObj_fn() {
                val user = clonedObj.value["user"] as UTSJSONObject
                val info = user["info"] as UTSJSONObject
                val currentAge = (info["age"] as Number) + 1
                info["age"] = currentAge
            }
            val mutateClonedObj = ::gen_mutateClonedObj_fn
            val inputText = ref("hello_world lodash-demo-test")
            val camelCaseResult = computed(fun(): String {
                return camelCase(inputText.value) as String
            }
            )
            val kebabCaseResult = computed(fun(): String {
                return kebabCase(inputText.value) as String
            }
            )
            val capitalizeResult = computed(fun(): String {
                return capitalize(inputText.value) as String
            }
            )
            val debouncedCount = ref(0)
            val randomValue = ref<Number>(random(1, 100) as Number)
            fun gen_incrementCount_fn() {
                debouncedCount.value += 1
            }
            val incrementCount = ::gen_incrementCount_fn
            val debouncedIncrement = debounce(incrementCount, 400) as () -> Unit
            fun gen_handleDebounceClick_fn() {
                debouncedIncrement()
            }
            val handleDebounceClick = ::gen_handleDebounceClick_fn
            fun gen_generateRandom_fn() {
                randomValue.value = random(1, 100) as Number
            }
            val generateRandom = ::gen_generateRandom_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "Lodash 工具库 (iRainna-lodash)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5"), _uA(
                            _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9"), "1. 数组切片去重与随机打乱 (chunk, uniq, shuffle)"),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "原始数组 (带重复元素):"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-qhe427-c wtu-12jpf2i-d wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), _tD(JSON.stringify(rawArray.value)), 5)
                            )),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.uniq 去重结果:"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-71osv8-f wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), _tD(JSON.stringify(uniqArray.value)), 5)
                            )),
                            _cE("view", _uM("class" to "wtu-1ukgctb-g"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.chunk 切片结果 (每组 3 个):"),
                                _cE("text", _uM("class" to "result-text wtu-nlue1j-a wtu-qhe427-c wtu-1olf5ta-h wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), _tD(chunkedArray.value), 5)
                            )),
                            _cE("view", _uM("class" to "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-78ho70-l wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p", "onClick" to handleShuffle), _uA(
                                _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-trlwv5-q"), "点击使用 _.shuffle 打乱数组")
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5"), _uA(
                            _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9"), "2. 对象深拷贝与安全取值 (get, cloneDeep)"),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.get(obj, 'user.info.name', '未找到'):"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1olf5ta-h wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), " \"" + _tD(getNameResult.value) + "\" ", 5)
                            )),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.get(obj, 'user.invalid.path', '安全兜底值'):"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-t30dgu-r wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), " \"" + _tD(getFallbackResult.value) + "\" ", 5)
                            )),
                            _cE("view", _uM("class" to "wtu-ie0kbi-s wtu-x0rgyb-t wtu-26he62-u")),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b wtu-16b98e4-v"), "深拷贝防污染对比 (点击修改深拷贝副本的值):"),
                                _cE("view", _uM("class" to "wtu-11fbh7u-n wtu-20vb01-w wtu-16b98e4-v"), _uA(
                                    _cE("text", _uM("class" to "wtu-nlue1j-a wtu-trlwv5-q"), "原对象 age:"),
                                    _cE("text", _uM("class" to "wtu-nlue1j-a wtu-1u1vbk3-7 wtu-12jpf2i-d"), _tD(rawObjAge.value), 1)
                                )),
                                _cE("view", _uM("class" to "wtu-11fbh7u-n wtu-20vb01-w wtu-12p3ytc-9"), _uA(
                                    _cE("text", _uM("class" to "wtu-nlue1j-a wtu-trlwv5-q"), "副本对象 age:"),
                                    _cE("text", _uM("class" to "wtu-nlue1j-a wtu-1u1vbk3-7 wtu-dvbist-x"), _tD(clonedObjAge.value), 1)
                                )),
                                _cE("view", _uM("class" to "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-15b9oe7-y wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p", "onClick" to mutateClonedObj), _uA(
                                    _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-fwu98w-z"), "修改副本 age (+1)")
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5"), _uA(
                            _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9"), "3. 字符串修饰与格式化 (camelCase, kebabCase)"),
                            _cE("view", _uM("class" to "wtu-1ukgctb-g"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b wtu-16b98e4-v"), "输入文本:"),
                                _cE("input", _uM("modelValue" to inputText.value, "onInput" to fun(`$event`: UniInputEvent){
                                    inputText.value = `$event`.detail.value
                                }
                                , "class" to "wtu-zvxz19-i wtu-1hlaid0-j wtu-11xru9i-10 wtu-ehidfg-11 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-119kf4q-12 wtu-wt9zgi-6 wtu-vhwil1-8", "placeholder" to "请输入待转换文本"), null, 40, _uA(
                                    "modelValue",
                                    "onInput"
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.camelCase (驼峰):"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-en1iwp-13 wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), _tD(camelCaseResult.value), 5)
                            )),
                            _cE("view", _uM("class" to "wtu-12p3ytc-9"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.kebabCase (短横线):"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1a9i6pt-14 wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), _tD(kebabCaseResult.value), 5)
                            )),
                            _cE("view", _uM("class" to "wtu-qji53e-15"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.capitalize (首字母大写):"),
                                _cE("text", _uM("class" to "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-13awefi-16 wtu-efn5x4-e", "style" to _nS(_uM("font-family" to "monospace"))), _tD(capitalizeResult.value), 5)
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-99n919-0 wtu-15nin6-1 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5"), _uA(
                            _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9"), "4. 防抖函数与随机数 (debounce, random)"),
                            _cE("view", _uM("class" to "wtu-11fbh7u-n wtu-hehpb2-o wtu-20vb01-w wtu-1ukgctb-g"), _uA(
                                _cE("view", _uM("class" to "wtu-1a16q90-17"), _uA(
                                    _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "防抖点击触发次数 (400ms):"),
                                    _cE("text", _uM("class" to "wtu-nlue1j-a wtu-cgohmy-18"), "连击时仅在停止 400ms 后加 1")
                                )),
                                _cE("text", _uM("class" to "wtu-vf75qw-19 wtu-1u1vbk3-7 wtu-6l0vg0-1a"), _tD(debouncedCount.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-l4ptrb-1b wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p wtu-1ukgctb-g", "onClick" to handleDebounceClick), _uA(
                                _cE("text", _uM("class" to "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1cplfqo-1c"), "快速连击测试防抖")
                            )),
                            _cE("view", _uM("class" to "wtu-ie0kbi-s wtu-x0rgyb-t wtu-26he62-u")),
                            _cE("view", _uM("class" to "wtu-11fbh7u-n wtu-hehpb2-o wtu-20vb01-w"), _uA(
                                _cE("text", _uM("class" to "wtu-nlue1j-a wtu-g2bdc6-b"), "_.random(1, 100) 随机数:"),
                                _cE("view", _uM("class" to "wtu-11fbh7u-n wtu-hehpb2-o"), _uA(
                                    _cE("text", _uM("class" to "wtu-ualvb1-1d wtu-1u1vbk3-7 wtu-1nj84tt-1e wtu-adf0bz-1f"), _tD(randomValue.value), 1),
                                    _cE("view", _uM("class" to "wtu-1fv5emj-1g wtu-ersrk-1h wtu-6f80ei-1i wtu-1uaoxco-1j", "onClick" to generateRandom), _uA(
                                        _cE("text", _uM("class" to "wtu-1m61e6s-1k wtu-1u1vbk3-7 wtu-1v1bob5-1l"), "重新生成")
                                    ))
                                ))
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
                return _uM("wtu-99n919-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-15nin6-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-kwjfx7-2" to _pS(_uM("marginBottom" to 16)), "wtu-1ip6ax4-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1379u88-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1v5vx5i-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-wt9zgi-6" to _pS(_uM("fontSize" to 13)), "wtu-1u1vbk3-7" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-vhwil1-8" to _pS(_uM("color" to "#1e293b")), "wtu-12p3ytc-9" to _pS(_uM("marginBottom" to 8)), "wtu-nlue1j-a" to _pS(_uM("fontSize" to 12)), "wtu-g2bdc6-b" to _pS(_uM("color" to "#64748b")), "wtu-qhe427-c" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-12jpf2i-d" to _pS(_uM("color" to "#334155")), "wtu-efn5x4-e" to _pS(_uM("marginTop" to 2)), "wtu-71osv8-f" to _pS(_uM("color" to "#059669")), "wtu-1ukgctb-g" to _pS(_uM("marginBottom" to 12)), "wtu-1olf5ta-h" to _pS(_uM("color" to "#3b82f6")), "wtu-zvxz19-i" to _pS(_uM("width" to "100%")), "wtu-1hlaid0-j" to _pS(_uM("height" to 36)), "wtu-kkfitq-k" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-78ho70-l" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-lfvf6n-m" to _pS(_uM("display" to "flex")), "wtu-11fbh7u-n" to _pS(_uM("flexDirection" to "row")), "wtu-hehpb2-o" to _pS(_uM("alignItems" to "center")), "wtu-ltxxn6-p" to _pS(_uM("justifyContent" to "center")), "wtu-trlwv5-q" to _pS(_uM("color" to "#475569")), "wtu-t30dgu-r" to _pS(_uM("color" to "#d97706")), "wtu-ie0kbi-s" to _pS(_uM("height" to 1)), "wtu-x0rgyb-t" to _pS(_uM("backgroundColor" to "#e2e8f0")), "wtu-26he62-u" to _pS(_uM("marginTop" to 10, "marginBottom" to 10)), "wtu-16b98e4-v" to _pS(_uM("marginBottom" to 4)), "wtu-20vb01-w" to _pS(_uM("justifyContent" to "space-between")), "wtu-dvbist-x" to _pS(_uM("color" to "#ec4899")), "wtu-15b9oe7-y" to _pS(_uM("backgroundColor" to "#fce7f3")), "wtu-fwu98w-z" to _pS(_uM("color" to "#be185d")), "wtu-11xru9i-10" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-ehidfg-11" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-119kf4q-12" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "wtu-en1iwp-13" to _pS(_uM("color" to "#8b5cf6")), "wtu-1a9i6pt-14" to _pS(_uM("color" to "#06b6d4")), "wtu-qji53e-15" to _pS(_uM("marginBottom" to 6)), "wtu-13awefi-16" to _pS(_uM("color" to "#10b981")), "wtu-1a16q90-17" to _pS(_uM("flexDirection" to "column")), "wtu-cgohmy-18" to _pS(_uM("color" to "#94a3b8")), "wtu-vf75qw-19" to _pS(_uM("fontSize" to 20)), "wtu-6l0vg0-1a" to _pS(_uM("color" to "#f59e0b")), "wtu-l4ptrb-1b" to _pS(_uM("backgroundColor" to "#fef3c7")), "wtu-1cplfqo-1c" to _pS(_uM("color" to "#b45309")), "wtu-ualvb1-1d" to _pS(_uM("fontSize" to 14)), "wtu-1nj84tt-1e" to _pS(_uM("color" to "#6366f1")), "wtu-adf0bz-1f" to _pS(_uM("marginRight" to 12)), "wtu-1fv5emj-1g" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "wtu-ersrk-1h" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "wtu-6f80ei-1i" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-1uaoxco-1j" to _pS(_uM("backgroundColor" to "#e0e7ff")), "wtu-1m61e6s-1k" to _pS(_uM("fontSize" to 11)), "wtu-1v1bob5-1l" to _pS(_uM("color" to "#4338ca")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
