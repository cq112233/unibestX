import Card from '../../basic/components/Card.uvue';
import { camelCase, capitalize, chunk, cloneDeep, debounce, get, kebabCase, random, shuffle, uniq } from '@/uni_modules/iRainna-lodash';
import { computed, ref } from 'vue';

// ==========================================
// 1. 数组处理状态 (Array Operations)
// ==========================================

const __sfc__ = defineComponent({
  __name: 'LodashDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const rawArray = ref<number[]>([1, 2, 2, 3, 4, 4, 5, 6, 7, 8]);

// 使用 uniq 对数组进行去重
const uniqArray = computed((): number[] => {
  return uniq(rawArray.value as any[]) as number[];
});

// 使用 chunk 对去重后的数组按照指定大小进行切片分组
const chunkedArray = computed((): string => {
  const result = chunk(uniqArray.value as any[], 3);
  return JSON.stringify(result);
});

// 使用 shuffle 随机打乱数组顺序
function handleShuffle() {
  rawArray.value = shuffle(rawArray.value as any[]) as number[];
}

// ==========================================
// 2. 对象深拷贝与安全取值状态 (Object & Deep Clone)
// ==========================================
// 说明：UTS 的 get/cloneDeep 基于 UTSJSONObject 实现（UTS 中只能枚举 JSON 对象），
// 因此这里使用 UTSJSONObject 演示，而非 UTS 强类型对象
const rawObj: UTSJSONObject = {__$originalPosition: new UTSSourceMapPosition("rawObj", "src/pages/function/components/LodashDemoCard.uvue", 155, 7),
  user: {
    info: {
      name: 'UniAppX Developer',
      age: 25
    }
  }
};

// 使用 get 链式安全取值 (避免空指针/未定义路径崩溃)
const getNameResult = computed((): string => {
  return get(rawObj, 'user.info.name', '未找到') as string;
});

// 使用 get 对不存在的路径进行兜底取值
const getFallbackResult = computed((): string => {
  return get(rawObj, 'user.invalid.path', '兜底结果: 未查找到路径') as string;
});

// 使用 cloneDeep 对对象进行深度拷贝测试
const clonedObj = ref<UTSJSONObject>(cloneDeep(rawObj) as UTSJSONObject);
const rawObjAge = ref<number>(get(rawObj, 'user.info.age', 0) as number);
const clonedObjAge = computed((): number => {
  return get(clonedObj.value, 'user.info.age', 0) as number;
});

// 修改深拷贝副本的属性值，验证原对象属性未受到修改污染
function mutateClonedObj() {
  /* eslint-disable dot-notation */
  const user = clonedObj.value['user'] as UTSJSONObject;
  const info = user['info'] as UTSJSONObject;
  const currentAge = (info['age'] as number) + 1;
  info['age'] = currentAge;
  /* eslint-enable dot-notation */
}

// ==========================================
// 3. 字符串格式化状态 (String Operations)
// ==========================================
const inputText = ref('hello_world lodash-demo-test');

// 使用 camelCase 转为驼峰命名
const camelCaseResult = computed((): string => {
  return camelCase(inputText.value) as string;
});

// 使用 kebabCase 转为短横线命名
const kebabCaseResult = computed((): string => {
  return kebabCase(inputText.value) as string;
});

// 使用 capitalize 转为首字母大写
const capitalizeResult = computed((): string => {
  return capitalize(inputText.value) as string;
});

// ==========================================
// 4. 防抖与随机数状态 (Debounce & Utilities)
// ==========================================
const debouncedCount = ref(0);
const randomValue = ref<number>(random(1, 100) as number);

// 递增计数回调
function incrementCount() {
  debouncedCount.value += 1;
}

// 使用 debounce 包装防抖函数 (间隔 400 毫秒)
const debouncedIncrement = debounce(incrementCount, 400) as () => void;

// 点击防抖测试按钮
function handleDebounceClick() {
  debouncedIncrement();
}

// 重新生成随机数
function generateRandom() {
  randomValue.value = random(1, 100) as number;
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "Lodash 工具库 (iRainna-lodash)" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }), [
        _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }), "1. 数组切片去重与随机打乱 (chunk, uniq, shuffle)"),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "原始数组 (带重复元素):"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-qhe427-c wtu-12jpf2i-d wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), _tD(JSON.stringify(rawArray.value)), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.uniq 去重结果:"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-71osv8-f wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), _tD(JSON.stringify(uniqArray.value)), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-1ukgctb-g" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.chunk 切片结果 (每组 3 个):"),
          _cE("text", _uM({
            class: "result-text wtu-nlue1j-a wtu-qhe427-c wtu-1olf5ta-h wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), _tD(chunkedArray.value), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({
          class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-78ho70-l wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p",
          onClick: handleShuffle
        }), [
          _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-trlwv5-q" }), "点击使用 _.shuffle 打乱数组")
        ])
      ]),
      _cE("view", _uM({ class: "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }), [
        _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }), "2. 对象深拷贝与安全取值 (get, cloneDeep)"),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.get(obj, 'user.info.name', '未找到'):"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1olf5ta-h wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), " \"" + _tD(getNameResult.value) + "\" ", 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.get(obj, 'user.invalid.path', '安全兜底值'):"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-t30dgu-r wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), " \"" + _tD(getFallbackResult.value) + "\" ", 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-ie0kbi-s wtu-x0rgyb-t wtu-26he62-u" })),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b wtu-16b98e4-v" }), "深拷贝防污染对比 (点击修改深拷贝副本的值):"),
          _cE("view", _uM({ class: "wtu-11fbh7u-n wtu-20vb01-w wtu-16b98e4-v" }), [
            _cE("text", _uM({ class: "wtu-nlue1j-a wtu-trlwv5-q" }), "原对象 age:"),
            _cE("text", _uM({ class: "wtu-nlue1j-a wtu-1u1vbk3-7 wtu-12jpf2i-d" }), _tD(rawObjAge.value), 1 /* TEXT */)
          ]),
          _cE("view", _uM({ class: "wtu-11fbh7u-n wtu-20vb01-w wtu-12p3ytc-9" }), [
            _cE("text", _uM({ class: "wtu-nlue1j-a wtu-trlwv5-q" }), "副本对象 age:"),
            _cE("text", _uM({ class: "wtu-nlue1j-a wtu-1u1vbk3-7 wtu-dvbist-x" }), _tD(clonedObjAge.value), 1 /* TEXT */)
          ]),
          _cE("view", _uM({
            class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-15b9oe7-y wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p",
            onClick: mutateClonedObj
          }), [
            _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-fwu98w-z" }), "修改副本 age (+1)")
          ])
        ])
      ]),
      _cE("view", _uM({ class: "wtu-99n919-0 wtu-15nin6-1 wtu-kwjfx7-2 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }), [
        _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }), "3. 字符串修饰与格式化 (camelCase, kebabCase)"),
        _cE("view", _uM({ class: "wtu-1ukgctb-g" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b wtu-16b98e4-v" }), "输入文本:"),
          _cE("input", _uM({
            modelValue: inputText.value,
            onInput: ($event: UniInputEvent) => {(inputText).value = $event.detail.value},
            class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-11xru9i-10 wtu-ehidfg-11 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-119kf4q-12 wtu-wt9zgi-6 wtu-vhwil1-8",
            placeholder: "请输入待转换文本"
          }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"])
        ]),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.camelCase (驼峰):"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-en1iwp-13 wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), _tD(camelCaseResult.value), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-12p3ytc-9" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.kebabCase (短横线):"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1a9i6pt-14 wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), _tD(kebabCaseResult.value), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-qji53e-15" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.capitalize (首字母大写):"),
          _cE("text", _uM({
            class: "result-text wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-13awefi-16 wtu-efn5x4-e",
            style: _nS(_uM({"font-family":"monospace"}))
          }), _tD(capitalizeResult.value), 5 /* TEXT, STYLE */)
        ])
      ]),
      _cE("view", _uM({ class: "wtu-99n919-0 wtu-15nin6-1 wtu-1ip6ax4-3 wtu-1379u88-4 wtu-1v5vx5i-5" }), [
        _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-vhwil1-8 wtu-12p3ytc-9" }), "4. 防抖函数与随机数 (debounce, random)"),
        _cE("view", _uM({ class: "wtu-11fbh7u-n wtu-hehpb2-o wtu-20vb01-w wtu-1ukgctb-g" }), [
          _cE("view", _uM({ class: "wtu-1a16q90-17" }), [
            _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "防抖点击触发次数 (400ms):"),
            _cE("text", _uM({ class: "wtu-nlue1j-a wtu-cgohmy-18" }), "连击时仅在停止 400ms 后加 1")
          ]),
          _cE("text", _uM({ class: "wtu-vf75qw-19 wtu-1u1vbk3-7 wtu-6l0vg0-1a" }), _tD(debouncedCount.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({
          class: "wtu-zvxz19-i wtu-1hlaid0-j wtu-kkfitq-k wtu-l4ptrb-1b wtu-lfvf6n-m wtu-11fbh7u-n wtu-hehpb2-o wtu-ltxxn6-p wtu-1ukgctb-g",
          onClick: handleDebounceClick
        }), [
          _cE("text", _uM({ class: "wtu-wt9zgi-6 wtu-1u1vbk3-7 wtu-1cplfqo-1c" }), "快速连击测试防抖")
        ]),
        _cE("view", _uM({ class: "wtu-ie0kbi-s wtu-x0rgyb-t wtu-26he62-u" })),
        _cE("view", _uM({ class: "wtu-11fbh7u-n wtu-hehpb2-o wtu-20vb01-w" }), [
          _cE("text", _uM({ class: "wtu-nlue1j-a wtu-g2bdc6-b" }), "_.random(1, 100) 随机数:"),
          _cE("view", _uM({ class: "wtu-11fbh7u-n wtu-hehpb2-o" }), [
            _cE("text", _uM({ class: "wtu-ualvb1-1d wtu-1u1vbk3-7 wtu-1nj84tt-1e wtu-adf0bz-1f" }), _tD(randomValue.value), 1 /* TEXT */),
            _cE("view", _uM({
              class: "wtu-1fv5emj-1g wtu-ersrk-1h wtu-6f80ei-1i wtu-1uaoxco-1j",
              onClick: generateRandom
            }), [
              _cE("text", _uM({ class: "wtu-1m61e6s-1k wtu-1u1vbk3-7 wtu-1v1bob5-1l" }), "重新生成")
            ])
          ])
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsLodashDemoCardStyles = [_uM([["wtu-99n919-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-15nin6-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-kwjfx7-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-1ip6ax4-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1379u88-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1v5vx5i-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-wt9zgi-6", _pS(_uM([["fontSize", 13]]))], ["wtu-1u1vbk3-7", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-vhwil1-8", _pS(_uM([["color", "#1e293b"]]))], ["wtu-12p3ytc-9", _pS(_uM([["marginBottom", 8]]))], ["wtu-nlue1j-a", _pS(_uM([["fontSize", 12]]))], ["wtu-g2bdc6-b", _pS(_uM([["color", "#64748b"]]))], ["wtu-qhe427-c", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-12jpf2i-d", _pS(_uM([["color", "#334155"]]))], ["wtu-efn5x4-e", _pS(_uM([["marginTop", 2]]))], ["wtu-71osv8-f", _pS(_uM([["color", "#059669"]]))], ["wtu-1ukgctb-g", _pS(_uM([["marginBottom", 12]]))], ["wtu-1olf5ta-h", _pS(_uM([["color", "#3b82f6"]]))], ["wtu-zvxz19-i", _pS(_uM([["width", "100%"]]))], ["wtu-1hlaid0-j", _pS(_uM([["height", 36]]))], ["wtu-kkfitq-k", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-78ho70-l", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-lfvf6n-m", _pS(_uM([["display", "flex"]]))], ["wtu-11fbh7u-n", _pS(_uM([["flexDirection", "row"]]))], ["wtu-hehpb2-o", _pS(_uM([["alignItems", "center"]]))], ["wtu-ltxxn6-p", _pS(_uM([["justifyContent", "center"]]))], ["wtu-trlwv5-q", _pS(_uM([["color", "#475569"]]))], ["wtu-t30dgu-r", _pS(_uM([["color", "#d97706"]]))], ["wtu-ie0kbi-s", _pS(_uM([["height", 1]]))], ["wtu-x0rgyb-t", _pS(_uM([["backgroundColor", "#e2e8f0"]]))], ["wtu-26he62-u", _pS(_uM([["marginTop", 10], ["marginBottom", 10]]))], ["wtu-16b98e4-v", _pS(_uM([["marginBottom", 4]]))], ["wtu-20vb01-w", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-dvbist-x", _pS(_uM([["color", "#ec4899"]]))], ["wtu-15b9oe7-y", _pS(_uM([["backgroundColor", "#fce7f3"]]))], ["wtu-fwu98w-z", _pS(_uM([["color", "#be185d"]]))], ["wtu-11xru9i-10", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["wtu-ehidfg-11", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["wtu-119kf4q-12", _pS(_uM([["borderTopColor", "#cbd5e1"], ["borderRightColor", "#cbd5e1"], ["borderBottomColor", "#cbd5e1"], ["borderLeftColor", "#cbd5e1"]]))], ["wtu-en1iwp-13", _pS(_uM([["color", "#8b5cf6"]]))], ["wtu-1a9i6pt-14", _pS(_uM([["color", "#06b6d4"]]))], ["wtu-qji53e-15", _pS(_uM([["marginBottom", 6]]))], ["wtu-13awefi-16", _pS(_uM([["color", "#10b981"]]))], ["wtu-1a16q90-17", _pS(_uM([["flexDirection", "column"]]))], ["wtu-cgohmy-18", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-vf75qw-19", _pS(_uM([["fontSize", 20]]))], ["wtu-6l0vg0-1a", _pS(_uM([["color", "#f59e0b"]]))], ["wtu-l4ptrb-1b", _pS(_uM([["backgroundColor", "#fef3c7"]]))], ["wtu-1cplfqo-1c", _pS(_uM([["color", "#b45309"]]))], ["wtu-ualvb1-1d", _pS(_uM([["fontSize", 14]]))], ["wtu-1nj84tt-1e", _pS(_uM([["color", "#6366f1"]]))], ["wtu-adf0bz-1f", _pS(_uM([["marginRight", 12]]))], ["wtu-1fv5emj-1g", _pS(_uM([["paddingLeft", 8], ["paddingRight", 8]]))], ["wtu-ersrk-1h", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["wtu-6f80ei-1i", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["wtu-1uaoxco-1j", _pS(_uM([["backgroundColor", "#e0e7ff"]]))], ["wtu-1m61e6s-1k", _pS(_uM([["fontSize", 11]]))], ["wtu-1v1bob5-1l", _pS(_uM([["color", "#4338ca"]]))]])]
