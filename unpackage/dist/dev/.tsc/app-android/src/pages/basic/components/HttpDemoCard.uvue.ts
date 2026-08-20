import { computed, ref } from 'vue';
import Card from './Card.uvue';
import { foo, getFooList } from '@/src/api/foo';
import type { IFoo } from '@/src/api/foo';
import { toastSuccess } from '@/src/utils/toast.uts';

// ==========================================
// 响应式状态
// ==========================================

const __sfc__ = defineComponent({
  __name: 'HttpDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const mockList = ref<IFoo[]>([]);
const loading = ref<boolean>(false);
const requestStatus = ref<string>('idle'); // idle | loading | success | error
const responseData = ref<IFoo | null>(null);
const errorMsg = ref<string>('');

// ==========================================
// 计算属性
// ==========================================
const statusText = computed((): string => {
  switch (requestStatus.value) {
    case 'loading': return '请求中';
    case 'success': return '请求成功';
    case 'error': return '请求失败';
    default: return '待请求';
  }
});

const statusColor = computed((): string => {
  switch (requestStatus.value) {
    case 'loading': return '#d97706';
    case 'success': return '#059669';
    case 'error': return '#dc2626';
    default: return '#94a3b8';
  }
});

const statusBgColor = computed((): string => {
  switch (requestStatus.value) {
    case 'loading': return '#fef9c3';
    case 'success': return '#d1fae5';
    case 'error': return '#fee2e2';
    default: return '#f1f5f9';
  }
});

// 用显式 boolean 计算属性替换模板里的 != null / != '' 条件判断
const hasResponseData = computed((): boolean => {
  return responseData.value != null;
});

const hasErrorMsg = computed((): boolean => {
  return errorMsg.value.length > 0;
});

const responseText = computed((): string => {
  const data = responseData.value;
  if (data == null)
    return '';
  return `id: ${data.id}, name: ${data.name}`;
});

// ==========================================
// 方法
// ==========================================

/**
 * 加载 Mock 数据（本地，无需网络）
 */
async function loadMockData() {
  try {
    const list = await getFooList();
    mockList.value = list;
    // toastSuccess(`加载了 ${list.length} 条数据`)
  }
  catch (err) {
    console.error('loadMockData error:', err, " at src/pages/basic/components/HttpDemoCard.uvue:135");
  }
}

/**
 * 发起真实 API 请求（演示拦截器与错误处理）
 * 使用 async/await 与 try/catch，这在 UTS 中类型推导更稳定
 */
async function fetchRealApi() {
  loading.value = true;
  requestStatus.value = 'loading';
  responseData.value = null;
  errorMsg.value = '';

  try {
    const res = await foo();
    responseData.value = res;
    requestStatus.value = 'success';
  }
  catch (err) {
    console.log(err, 'err', " at src/pages/basic/components/HttpDemoCard.uvue:155");
    requestStatus.value = 'error';
    let errStr = '';
    if (err !== null) {
      errStr = JSON.stringify(err);
    }
    errorMsg.value = errStr.length > 0 ? errStr : '请求失败';
  }

  loading.value = false;
}

// 页面挂载时自动加载 Mock 数据
onMounted(() => {
  loadMockData();
});

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "HTTP 请求 Demo" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-w0ubis-0 wtu-qf0h83-1 wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }), [
        _cE("text", _uM({ class: "wtu-mcng40-6 wtu-pryky7-7 wtu-1vehn2-8" }), " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
      ]),
      _cE("view", _uM({ class: "wtu-ecdk3o-2" }), [
        _cE("text", _uM({ class: "wtu-owidvm-9 wtu-1gyo9ug-a wtu-1e7koem-b wtu-vnac5q-c" }), "Mock 数据列表（ID 为任意类型）"),
        _cE(Fragment, null, RenderHelpers.renderList(mockList.value, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "wtu-1p3s0p7-d wtu-or3po3-e wtu-1lgfe3e-f wtu-1us4hrd-g wtu-1y83w1l-h wtu-1ny4yap-i wtu-yqo827-j"
          }), [
            _cE("view", _uM({ class: "wtu-5wqmpn-k wtu-sz6l4-l wtu-1v2zgda-m wtu-1i8kliw-n wtu-ijj99f-o wtu-or3po3-e wtu-1hzxj1a-p" }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-155p5he-q wtu-1gyo9ug-a" }), _tD(item.id), 1 /* TEXT */)
            ]),
            _cE("text", _uM({ class: "wtu-owidvm-9 wtu-xg97j7-r" }), _tD(item.name), 1 /* TEXT */)
          ])
        }), 128 /* KEYED_FRAGMENT */)
      ]),
      _cE("view", _uM({ class: "wtu-edhfgi-s wtu-1115s0n-t wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }), [
        _cE("view", _uM({ class: "wtu-1p3s0p7-d wtu-ok6iny-u wtu-or3po3-e wtu-115s1if-v" }), [
          _cE("text", _uM({ class: "wtu-mdu9q5-w wtu-pryky7-7" }), "接口请求状态:"),
          _cE("view", _uM({
            style: _nS(_uM({ paddingLeft: '8px', paddingRight: '8px', paddingTop: '2px', paddingBottom: '2px', borderRadius: 10, backgroundColor: statusBgColor.value }))
          }), [
            _cE("text", _uM({
              style: _nS(_uM({ fontSize: 12, color: statusColor.value }))
            }), _tD(statusText.value), 5 /* TEXT, STYLE */)
          ], 4 /* STYLE */)
        ]),
        isTrue(hasResponseData.value)
          ? _cE("view", _uM({
              key: 0,
              class: "wtu-kp3eq2-x wtu-1ny4yap-i wtu-1ic2k2p-y wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"
            }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-s98mzw-z" }), _tD(responseText.value), 1 /* TEXT */)
            ])
          : _cC("v-if", true),
        isTrue(hasErrorMsg.value)
          ? _cE("view", _uM({
              key: 1,
              class: "wtu-snsrpe-10 wtu-1ny4yap-i wtu-1ic2k2p-y wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1bi5jw-11 wtu-1cffqjh-12"
            }), [
              _cE("text", _uM({ class: "wtu-mcng40-6 wtu-bquocn-13" }), "错误：" + _tD(errorMsg.value), 1 /* TEXT */)
            ])
          : _cC("v-if", true)
      ]),
      _cE("view", _uM({ class: "wtu-1p3s0p7-d" }), [
        _cE("view", _uM({ class: "wtu-wy44gc-14 wtu-1hzxj1a-p" }), [
          _cE("view", _uM({
            class: "wtu-1i8kliw-n wtu-1ny4yap-i wtu-10jafc4-15 wtu-1mbx3i8-16 wtu-io2yyi-17 wtu-1p3s0p7-d wtu-or3po3-e wtu-ijj99f-o",
            onClick: loadMockData
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-18 wtu-owidvm-9" }), "加载 Mock 数据")
          ])
        ]),
        _cE("view", _uM({ class: "wtu-wy44gc-14" }), [
          _cE("view", _uM({
            class: "wtu-1dwvvaj-19 wtu-1ny4yap-i wtu-10jafc4-15 wtu-1mbx3i8-16 wtu-io2yyi-17 wtu-1p3s0p7-d wtu-or3po3-e wtu-ijj99f-o",
            onClick: fetchRealApi
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-18 wtu-owidvm-9" }), _tD(loading.value ? '请求中...' : '真实 API 请求'), 1 /* TEXT */)
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
const GenSrcPagesBasicComponentsHttpDemoCardStyles = [_uM([["wtu-w0ubis-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-qf0h83-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-ecdk3o-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-wfs7cl-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-16hz6cp-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1ns4j6f-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-mcng40-6", _pS(_uM([["fontSize", 12]]))], ["wtu-pryky7-7", _pS(_uM([["color", "#64748b"]]))], ["wtu-1vehn2-8", _pS(_uM([["--tw-leading", "20px"], ["lineHeight", "20px"]]))], ["wtu-owidvm-9", _pS(_uM([["fontSize", 14]]))], ["wtu-1gyo9ug-a", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1e7koem-b", _pS(_uM([["color", "#2d3748"]]))], ["wtu-vnac5q-c", _pS(_uM([["marginBottom", 10]]))], ["wtu-1p3s0p7-d", _pS(_uM([["flexDirection", "row"]]))], ["wtu-or3po3-e", _pS(_uM([["alignItems", "center"]]))], ["wtu-1lgfe3e-f", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["wtu-1us4hrd-g", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["wtu-1y83w1l-h", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-1ny4yap-i", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-yqo827-j", _pS(_uM([["marginTop", 8]]))], ["wtu-5wqmpn-k", _pS(_uM([["width", 28]]))], ["wtu-sz6l4-l", _pS(_uM([["height", 28]]))], ["wtu-1v2zgda-m", _pS(_uM([["borderTopLeftRadius", 14], ["borderTopRightRadius", 14], ["borderBottomRightRadius", 14], ["borderBottomLeftRadius", 14]]))], ["wtu-1i8kliw-n", _pS(_uM([["backgroundColor", "#3182ce"]]))], ["wtu-ijj99f-o", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1hzxj1a-p", _pS(_uM([["marginRight", 10]]))], ["wtu-155p5he-q", _pS(_uM([["color", "#ffffff"]]))], ["wtu-xg97j7-r", _pS(_uM([["color", "#334155"]]))], ["wtu-edhfgi-s", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomRightRadius", 10], ["borderBottomLeftRadius", 10]]))], ["wtu-1115s0n-t", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["wtu-ok6iny-u", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-115s1if-v", _pS(_uM([["marginBottom", 6]]))], ["wtu-mdu9q5-w", _pS(_uM([["fontSize", 13]]))], ["wtu-kp3eq2-x", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-1ic2k2p-y", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10]]))], ["wtu-s98mzw-z", _pS(_uM([["color", "#475569"]]))], ["wtu-snsrpe-10", _pS(_uM([["backgroundColor", "#fff5f5"]]))], ["wtu-1bi5jw-11", _pS(_uM([["borderTopColor", "#fecaca"], ["borderRightColor", "#fecaca"], ["borderBottomColor", "#fecaca"], ["borderLeftColor", "#fecaca"]]))], ["wtu-1cffqjh-12", _pS(_uM([["marginTop", 6]]))], ["wtu-bquocn-13", _pS(_uM([["color", "#ef4444"]]))], ["wtu-wy44gc-14", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-10jafc4-15", _pS(_uM([["height", 42]]))], ["wtu-1mbx3i8-16", _pS(_uM([["width", "100%"]]))], ["wtu-io2yyi-17", _pS(_uM([["display", "flex"]]))], ["wtu-1tndks6-18", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1dwvvaj-19", _pS(_uM([["backgroundColor", "#10b981"]]))]])]
