import _easycom_z_paging_x from '@/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue'
import { ref } from 'vue'
import Card from './Card.uvue'

type CompactArticleItem = {
  id: number
  title: string
  summary: string
  tag: string
  tagBgColor: string
  tagColor: string
}


const __sfc__ = defineComponent({
  __name: 'ZPagingDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

/* eslint-disable ts/consistent-type-definitions */
const shouldFail = ref<boolean>(false)

const tabList = ['全部', '技术', '设计']
const tabIndex = ref<number>(0)

const pagingX = ref<ComponentPublicInstance | null>(null)
const dataList = ref<CompactArticleItem[]>([])

function onUpdateModelValue(val: any[]) {
  dataList.value = val as CompactArticleItem[]
}

function tabChange(index: number) {
  tabIndex.value = index
  if (pagingX.value != null) {
    pagingX.value!.$callMethod('reload')
  }
}

function triggerError() {
  shouldFail.value = true
  if (pagingX.value != null) {
    pagingX.value!.$callMethod('reload')
  }
}

function triggerClear() {
  dataList.value = []
  if (pagingX.value != null) {
    pagingX.value!.$callMethod('complete', [] as CompactArticleItem[])
  }
}

function getMockArticles(category: string, pageNo: number, pageSize: number): CompactArticleItem[] {
  const list = [] as CompactArticleItem[]
  const start = (pageNo - 1) * pageSize

  for (let i = 0; i < pageSize; i++) {
    const itemId = start + i + 1
    if (itemId > 12) {
      break
    }

    let tag = category
    if (category == '全部') {
      tag = itemId % 2 == 0 ? '技术' : '设计'
    }

    let tagBgColor = '#e0f2fe'
    let tagColor = '#0284c7'
    if (tag == '设计') {
      tagBgColor = '#f3e8ff'
      tagColor = '#7c3aed'
    }

    list.push({
      id: itemId,
      title: `${tag}动态 · 原生探索第 ${itemId} 篇`,
      summary: `卡片演示中的 ${tag} 文章，支持局部滚动加载数据。`,
      tag,
      tagBgColor,
      tagColor,
    } as CompactArticleItem)
  }
  return list
}

function onQuery(pageNo: number, pageSize: number) {
  const currentCategory = tabList[tabIndex.value]

  setTimeout(() => {
    if (shouldFail.value) {
      shouldFail.value = false
      if (pagingX.value != null) {
        pagingX.value!.$callMethod('completeByError')
      }
      return
    }

    const data = getMockArticles(currentCategory, pageNo, pageSize)
    if (pagingX.value != null) {
      pagingX.value!.$callMethod('complete', data)
    }
  }, 600)
}

return (): any | null => {

const _component_z_paging_x = resolveEasyComponent("z-paging-x",_easycom_z_paging_x)

  return _cV(unref(Card), _uM({ title: "数据分页列表 (z-paging-x)" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "flex-col mb-12px" }), [
        _cE("text", _uM({ class: "text-13px text-__64748b_ leading-18px mb-8px" }), " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
        _cE("view", _uM({ class: "flex-row mb-12px" }), [
          _cE("view", _uM({ class: "flex-1 mr-8px" }), [
            _cE("view", _uM({
              class: "w-full h-36px rounded-8px bg-__fee2e2_ flex flex-row items-center justify-center",
              onClick: triggerError
            }), [
              _cE("text", _uM({ class: "text-__dc2626_ text-12px font-bold" }), "模拟加载错误")
            ])
          ]),
          _cE("view", _uM({ class: "flex-1" }), [
            _cE("view", _uM({
              class: "w-full h-36px rounded-8px bg-__fef3c7_ flex flex-row items-center justify-center",
              onClick: triggerClear
            }), [
              _cE("text", _uM({ class: "text-__d97706_ text-12px font-bold" }), "清空数据")
            ])
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "bg-white py-8px px-12px border-width-1px border-style-solid border-color-__edf2f7_ border-bottom-width-0px",
        style: _nS(_uM({"border-top-left-radius":"12px","border-top-right-radius":"12px"}))
      }), [
        _cE("view", _uM({ class: "flex-row bg-__f1f5f9_ rounded-8px p-2px" }), [
          _cE(Fragment, null, RenderHelpers.renderList(tabList, (tab, index, __index, _cached): any => {
            return _cE("view", _uM({
              key: index,
              class: "flex-1 items-center justify-center py-6px rounded-6px",
              style: _nS(_uM({ backgroundColor: tabIndex.value === index ? '#ffffff' : 'transparent' })),
              onClick: () => {tabChange(index)}
            }), [
              _cE("text", _uM({
                class: "text-12px font-bold",
                style: _nS(_uM({ color: tabIndex.value === index ? 'var(--theme-color, #37c2bc)' : '#64748b' }))
              }), _tD(tab), 5 /* TEXT, STYLE */)
            ], 12 /* STYLE, PROPS */, ["onClick"])
          }), 64 /* STABLE_FRAGMENT */)
        ])
      ], 4 /* STYLE */),
      _cV(_component_z_paging_x, _uM({
        ref_key: "pagingX",
        ref: pagingX,
        "model-value": dataList.value,
        "default-page-size": 5,
        "paging-style": { height: '200px', border: '1px solid #edf2f7', borderTopWidth: '0px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', backgroundColor: '#f8fafc' },
        "onUpdate:modelValue": onUpdateModelValue,
        onQuery: onQuery
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE(Fragment, null, RenderHelpers.renderList(dataList.value, (item, __key, __index, _cached): any => {
            return _cE("list-item", _uM({
              key: item.id
            }), [
              _cE("view", _uM({ class: "mx-12px my-8px p-12px bg-white rounded-8px border-width-1px border-style-solid border-color-__edf2f7_" }), [
                _cE("view", _uM({ class: "flex-row justify-between items-center mb-6px" }), [
                  _cE("view", _uM({
                    style: _nS(_uM({ backgroundColor: item.tagBgColor, padding: '1px 6px', borderRadius: '4px' }))
                  }), [
                    _cE("text", _uM({
                      style: _nS(_uM({ color: item.tagColor, fontSize: '9px', fontWeight: 'bold' }))
                    }), _tD(item.tag), 5 /* TEXT, STYLE */)
                  ], 4 /* STYLE */),
                  _cE("text", _uM({ class: "text-11px text-__94a3b8_" }), "#" + _tD(item.id), 1 /* TEXT */)
                ]),
                _cE("text", _uM({ class: "text-14px font-bold text-__1e293b_ mb-4px" }), _tD(item.title), 1 /* TEXT */),
                _cE("text", _uM({ class: "text-12px text-__64748b_ leading-16px" }), _tD(item.summary), 1 /* TEXT */)
              ])
            ])
          }), 128 /* KEYED_FRAGMENT */)
        ]),
        _: 1 /* STABLE */
      }), 8 /* PROPS */, ["model-value"])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsZPagingDemoCardStyles = [_uM([["bg-__f1f5f9_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f1f5f9"]]))], ["bg-__fee2e2_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#fee2e2"]]))], ["bg-__fef3c7_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#fef3c7"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border-bottom-width-0px", _pS(_uM([["borderBottomWidth", 0]]))], ["border-color-__edf2f7_", _pS(_uM([["borderTopColor", "#edf2f7"], ["borderRightColor", "#edf2f7"], ["borderBottomColor", "#edf2f7"], ["borderLeftColor", "#edf2f7"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-col", _pS(_uM([["flexDirection", "column"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-36px", _pS(_uM([["height", 36]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["leading-16px", _pS(_uM([["lineHeight", "16px"]]))], ["leading-18px", _pS(_uM([["lineHeight", "18px"]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-4px", _pS(_uM([["marginBottom", 4]]))], ["mb-6px", _pS(_uM([["marginBottom", 6]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["mr-8px", _pS(_uM([["marginRight", 8]]))], ["mx-12px", _pS(_uM([["marginLeft", 12], ["marginRight", 12]]))], ["my-8px", _pS(_uM([["marginTop", 8], ["marginBottom", 8]]))], ["p-12px", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["p-2px", _pS(_uM([["paddingTop", 2], ["paddingRight", 2], ["paddingBottom", 2], ["paddingLeft", 2]]))], ["px-12px", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["py-6px", _pS(_uM([["paddingTop", 6], ["paddingBottom", 6]]))], ["py-8px", _pS(_uM([["paddingTop", 8], ["paddingBottom", 8]]))], ["rounded-6px", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__1e293b_", _pS(_uM([["color", "#1e293b"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__d97706_", _pS(_uM([["color", "#d97706"]]))], ["text-__dc2626_", _pS(_uM([["color", "#dc2626"]]))], ["text-11px", _pS(_uM([["fontSize", 11]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
