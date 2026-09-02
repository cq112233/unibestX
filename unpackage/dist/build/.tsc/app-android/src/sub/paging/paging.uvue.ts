import _easycom_z_paging_x from '@/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';
type ArticleItem = {
  id: number;
  title: string;
  summary: string;
  author: string;
  createTime: string;
  tag: string;
  tagBgColor: string;
  tagColor: string;
};

// 选项卡配置

const __sfc__ = defineComponent({
  __name: 'paging',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

// 声明 ArticleItem 类型（使用 type 别名符合 UTS 强类型规范）
const tabList = ['全部', '技术', '设计', '生活'];
const tabIndex = ref<number>(0);

// z-paging-x 组件引用与数据绑定
const pagingX = ref<ComponentPublicInstance | null>(null);
const dataList = ref<ArticleItem[]>([]);

// 手动更新绑定的列表数据，避免 compiler 产生 union types
function onUpdateModelValue(val: any[]) {
  dataList.value = val as ArticleItem[];
}

// 模拟获取数据 API 函数
function getMockArticles(category: string, pageNo: number, pageSize: number): ArticleItem[] {
  const list = [] as ArticleItem[];
  const start = (pageNo - 1) * pageSize;

  for (let i = 0; i < pageSize; i++) {
    const itemId = start + i + 1;
    // 限制列表总大小为 35 条，以演示 "没有更多数据"
    if (itemId > 35) {
      break;
    }

    // 确定文章标签与对应的颜色配方
    let tag = category;
    if (category == '全部') {
      const idx = itemId % 3;
      if (idx == 0)
        tag = '技术';
      else if (idx == 1)
        tag = '设计';
      else tag = '生活';
    }

    let tagBgColor = '#e0f2fe';
    let tagColor = '#0284c7';
    if (tag == '设计') {
      tagBgColor = '#f3e8ff';
      tagColor = '#7c3aed';
    }
    else if (tag == '生活') {
      tagBgColor = '#dcfce7';
      tagColor = '#16a34a';
    }

    list.push({
      id: itemId,
      title: `${tag}专栏 · 探索移动端开发的未来第 ${itemId} 篇`,
      summary: `这是关于 ${tag} 领域的精选分享文章。通过全新的跨端原生开发理念，帮助开发者在性能与效率之间找到完美的平衡点。`,
      author: '技术专家 · unix',
      createTime: `06-04 15:${30 - i}`,
      tag,
      tagBgColor,
      tagColor
    } as ArticleItem);
  }
  return list;
}

// 下拉刷新或触底加载的回调
function onQuery(pageNo: number, pageSize: number) {
  const currentCategory = tabList[tabIndex.value];

  // 模拟 800ms 的网络延时
  setTimeout(() => {
    try {
      const data = getMockArticles(currentCategory, pageNo, pageSize);
      if (pagingX.value != null) {
        pagingX.value!.$callMethod('complete', data);
      }
    }
    catch (e) {
      if (pagingX.value != null) {
        pagingX.value!.$callMethod('completeByError');
      }
    }
  }, 800);
}

// 切换 Tab 时触发重新加载
function tabChange(index: number) {
  tabIndex.value = index;
  if (pagingX.value != null) {
    pagingX.value!.$callMethod('reload');
  }
}

return (): any | null => {

const _component_z_paging_x = resolveEasyComponent("z-paging-x",_easycom_z_paging_x)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'分页加载 (z-paging-x)','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "flex flex-col flex-1 h-full bg-_b_hf7fafc_B" }), [
            _cE("view", _uM({ class: "bg-white py-_b12px_B px-_b16px_B border-b-_b1px_B border-bottom-style-solid border-bottom-color-_b_hf1f5f9_B" }), [
              _cE("view", _uM({ class: "flex-row bg-_b_hf1f5f9_B rounded-_b12px_B p-_b4px_B" }), [
                _cE(Fragment, null, RenderHelpers.renderList(tabList, (tab, index, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: index,
                    class: "flex-1 items-center justify-center py-_b8px_B rounded-_b8px_B",
                    style: _nS(_uM({ backgroundColor: tabIndex.value === index ? '#ffffff' : 'transparent' })),
                    onClick: () => {tabChange(index)}
                  }), [
                    _cE("text", _uM({
                      class: "text-_b13px_B font-bold",
                      style: _nS(_uM({ color: tabIndex.value === index ? 'var(--theme-color, #37c2bc)' : '#64748b' }))
                    }), _tD(tab), 5 /* TEXT, STYLE */)
                  ], 12 /* STYLE, PROPS */, ["onClick"])
                }), 64 /* STABLE_FRAGMENT */)
              ])
            ]),
            _cV(_component_z_paging_x, _uM({
              ref_key: "pagingX",
              ref: pagingX,
              "model-value": dataList.value,
              "default-page-size": 10,
              class: "flex-1",
              "onUpdate:modelValue": onUpdateModelValue,
              onQuery: onQuery
            }), _uM({
              default: withSlotCtx((): any[] => [
                _cE(Fragment, null, RenderHelpers.renderList(dataList.value, (item, __key, __index, _cached): any => {
                  return _cE("list-item", _uM({
                    key: item.id
                  }), [
                    _cE("view", _uM({ class: "mx-_b16px_B my-_b8px_B p-_b16px_B bg-white rounded-_b12px_B border-_b1px_B border-solid border-_b_hedf2f7_B shadow-sm" }), [
                      _cE("view", _uM({ class: "flex-row justify-between items-center mb-_b8px_B" }), [
                        _cE("view", _uM({
                          style: _nS(_uM({ backgroundColor: item.tagBgColor, padding: '2px 8px', borderRadius: '6px' }))
                        }), [
                          _cE("text", _uM({
                            style: _nS(_uM({ color: item.tagColor, fontSize: '10px', fontWeight: 'bold' }))
                          }), _tD(item.tag), 5 /* TEXT, STYLE */)
                        ], 4 /* STYLE */),
                        _cE("text", _uM({ class: "text-_b12px_B text-_b_h94a3b8_B" }), "#" + _tD(item.id), 1 /* TEXT */)
                      ]),
                      _cE("text", _uM({ class: "text-_b15px_B font-bold text-_b_h1e293b_B mb-_b6px_B" }), _tD(item.title), 1 /* TEXT */),
                      _cE("text", _uM({ class: "text-_b13px_B text-_b_h64748b_B leading-_b18px_B mb-_b12px_B" }), _tD(item.summary), 1 /* TEXT */),
                      _cE("view", _uM({ class: "flex-row justify-between items-center border-t-_b1px_B border-top-style-solid border-top-color-_b_hf8fafc_B pt-_b8px_B" }), [
                        _cE("text", _uM({ class: "text-_b12px_B text-_b_h475569_B font-medium" }), _tD(item.author), 1 /* TEXT */),
                        _cE("text", _uM({ class: "text-_b11px_B text-_b_h94a3b8_B" }), _tD(item.createTime), 1 /* TEXT */)
                      ])
                    ])
                  ])
                }), 128 /* KEYED_FRAGMENT */)
              ]),
              _: 1 /* STABLE */
            }), 8 /* PROPS */, ["model-value"])
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcSubPagingPagingStyles = [_uM([["flex", _pS(_uM([["display", "flex"]]))], ["flex-col", _pS(_uM([["flexDirection", "column"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["h-full", _pS(_uM([["height", "100%"]]))], ["bg-_b_hf7fafc_B", _pS(_uM([["backgroundColor", "#f7fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["py-_b12px_B", _pS(_uM([["paddingTop", 12], ["paddingBottom", 12]]))], ["px-_b16px_B", _pS(_uM([["paddingLeft", 16], ["paddingRight", 16]]))], ["border-b-_b1px_B", _pS(_uM([["--tw-border-style", "solid"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderBottomWidth", 1]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["bg-_b_hf1f5f9_B", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["rounded-_b12px_B", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["p-_b4px_B", _pS(_uM([["paddingTop", 4], ["paddingRight", 4], ["paddingBottom", 4], ["paddingLeft", 4]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["py-_b8px_B", _pS(_uM([["paddingTop", 8], ["paddingBottom", 8]]))], ["rounded-_b8px_B", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-_b13px_B", _pS(_uM([["fontSize", 13]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["mx-_b16px_B", _pS(_uM([["marginLeft", 16], ["marginRight", 16]]))], ["my-_b8px_B", _pS(_uM([["marginTop", 8], ["marginBottom", 8]]))], ["p-_b16px_B", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["border-_b1px_B", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["border-solid", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-_b_hedf2f7_B", _pS(_uM([["borderTopColor", "#edf2f7"], ["borderRightColor", "#edf2f7"], ["borderBottomColor", "#edf2f7"], ["borderLeftColor", "#edf2f7"]]))], ["shadow-sm", _pS(_uM([["--tw-inset-shadow", "0 0 #0000"], ["--tw-inset-ring-shadow", "0 0 #0000"], ["--tw-ring-offset-shadow", "0 0 #0000"], ["--tw-ring-shadow", "0 0 #0000"], ["--tw-shadow", "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["mb-_b8px_B", _pS(_uM([["marginBottom", 8]]))], ["text-_b12px_B", _pS(_uM([["fontSize", 12]]))], ["text-_b_h94a3b8_B", _pS(_uM([["color", "#94a3b8"]]))], ["text-_b15px_B", _pS(_uM([["fontSize", 15]]))], ["text-_b_h1e293b_B", _pS(_uM([["color", "#1e293b"]]))], ["mb-_b6px_B", _pS(_uM([["marginBottom", 6]]))], ["text-_b_h64748b_B", _pS(_uM([["color", "#64748b"]]))], ["leading-_b18px_B", _pS(_uM([["--tw-leading", "18px"], ["lineHeight", "18px"]]))], ["mb-_b12px_B", _pS(_uM([["marginBottom", 12]]))], ["border-t-_b1px_B", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 1]]))], ["pt-_b8px_B", _pS(_uM([["paddingTop", 8]]))], ["text-_b_h475569_B", _pS(_uM([["color", "#475569"]]))], ["font-medium", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["text-_b11px_B", _pS(_uM([["fontSize", 11]]))]])]
