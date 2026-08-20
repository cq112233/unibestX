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
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-pryky7-0 leading-20px" }), " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
      ]),
      _cE("view", _uM({ class: "mb-16px" }), [
        _cE("text", _uM({ class: "text-14px wtu-1gyo9ug-1 wtu-1e7koem-2 mb-10px" }), "Mock 数据列表（ID 为任意类型）"),
        _cE(Fragment, null, RenderHelpers.renderList(mockList.value, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "wtu-1p3s0p7-3 wtu-or3po3-4 py-10px px-12px wtu-1y83w1l-5 rounded-8px mt-8px"
          }), [
            _cE("view", _uM({ class: "w-28px h-28px rounded-14px wtu-1i8kliw-6 wtu-ijj99f-7 wtu-or3po3-4 mr-10px" }), [
              _cE("text", _uM({ class: "text-12px wtu-155p5he-8 wtu-1gyo9ug-1" }), _tD(item.id), 1 /* TEXT */)
            ]),
            _cE("text", _uM({ class: "text-14px wtu-xg97j7-9" }), _tD(item.name), 1 /* TEXT */)
          ])
        }), 128 /* KEYED_FRAGMENT */)
      ]),
      _cE("view", _uM({ class: "rounded-10px p-12px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("view", _uM({ class: "wtu-1p3s0p7-3 wtu-ok6iny-a wtu-or3po3-4 mb-6px" }), [
          _cE("text", _uM({ class: "text-13px wtu-pryky7-0" }), "接口请求状态:"),
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
              class: "wtu-kp3eq2-b rounded-8px p-10px border-width-1px border-style-solid border-color-[#e2e8f0]"
            }), [
              _cE("text", _uM({ class: "text-12px wtu-s98mzw-c" }), _tD(responseText.value), 1 /* TEXT */)
            ])
          : _cC("v-if", true),
        isTrue(hasErrorMsg.value)
          ? _cE("view", _uM({
              key: 1,
              class: "wtu-snsrpe-d rounded-8px p-10px border-width-1px border-style-solid border-color-[#fecaca] mt-6px"
            }), [
              _cE("text", _uM({ class: "text-12px wtu-bquocn-e" }), "错误：" + _tD(errorMsg.value), 1 /* TEXT */)
            ])
          : _cC("v-if", true)
      ]),
      _cE("view", _uM({ class: "wtu-1p3s0p7-3" }), [
        _cE("view", _uM({ class: "wtu-wy44gc-f mr-10px" }), [
          _cE("view", _uM({
            class: "wtu-1i8kliw-6 rounded-8px h-42px wtu-1mbx3i8-g wtu-io2yyi-h wtu-1p3s0p7-3 wtu-or3po3-4 wtu-ijj99f-7",
            onClick: loadMockData
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-i text-14px" }), "加载 Mock 数据")
          ])
        ]),
        _cE("view", _uM({ class: "wtu-wy44gc-f" }), [
          _cE("view", _uM({
            class: "wtu-1dwvvaj-j rounded-8px h-42px wtu-1mbx3i8-g wtu-io2yyi-h wtu-1p3s0p7-3 wtu-or3po3-4 wtu-ijj99f-7",
            onClick: fetchRealApi
          }), [
            _cE("text", _uM({ class: "wtu-1tndks6-i text-14px" }), _tD(loading.value ? '请求中...' : '真实 API 请求'), 1 /* TEXT */)
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
const GenSrcPagesBasicComponentsHttpDemoCardStyles = [_uM([["wtu-pryky7-0", _pS(_uM([["color", "#64748b"]]))], ["wtu-1gyo9ug-1", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1e7koem-2", _pS(_uM([["color", "#2d3748"]]))], ["wtu-1p3s0p7-3", _pS(_uM([["flexDirection", "row"]]))], ["wtu-or3po3-4", _pS(_uM([["alignItems", "center"]]))], ["wtu-1y83w1l-5", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-1i8kliw-6", _pS(_uM([["backgroundColor", "#3182ce"]]))], ["wtu-ijj99f-7", _pS(_uM([["justifyContent", "center"]]))], ["wtu-155p5he-8", _pS(_uM([["color", "#ffffff"]]))], ["wtu-xg97j7-9", _pS(_uM([["color", "#334155"]]))], ["wtu-ok6iny-a", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-kp3eq2-b", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-s98mzw-c", _pS(_uM([["color", "#475569"]]))], ["wtu-snsrpe-d", _pS(_uM([["backgroundColor", "#fff5f5"]]))], ["wtu-bquocn-e", _pS(_uM([["color", "#ef4444"]]))], ["wtu-wy44gc-f", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1mbx3i8-g", _pS(_uM([["width", "100%"]]))], ["wtu-io2yyi-h", _pS(_uM([["display", "flex"]]))], ["wtu-1tndks6-i", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1dwvvaj-j", _pS(_uM([["backgroundColor", "#10b981"]]))]])]
