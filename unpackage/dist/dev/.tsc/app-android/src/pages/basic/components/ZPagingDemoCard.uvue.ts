import _easycom_z_paging_x from '@/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue'
import { ref } from 'vue'
import Card from './Card.uvue'

type CompactArticleItem = { __$originalPosition?: UTSSourceMapPosition<"CompactArticleItem", "src/pages/basic/components/ZPagingDemoCard.uvue", 81, 6>;
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
      _cE("view", _uM({ class: "wtu-197s6ax-0 mb-12px" }), [
        _cE("text", _uM({ class: "text-13px wtu-1d5ovbr-1 leading-18px mb-8px" }), " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
        _cE("view", _uM({ class: "wtu-1htpmxv-2 mb-12px" }), [
          _cE("view", _uM({ class: "wtu-1dr0m6s-3 mr-8px" }), [
            _cE("view", _uM({
              class: "wtu-1f0bdjc-4 h-36px rounded-8px wtu-17naxc1-5 wtu-lzsk2-6 wtu-1htpmxv-2 wtu-e5ib9n-7 wtu-1osntaj-8",
              onClick: triggerError
            }), [
              _cE("text", _uM({ class: "wtu-4cku8x-9 text-12px wtu-2f5wfk-a" }), "模拟加载错误")
            ])
          ]),
          _cE("view", _uM({ class: "wtu-1dr0m6s-3" }), [
            _cE("view", _uM({
              class: "wtu-1f0bdjc-4 h-36px rounded-8px wtu-1d36wz2-b wtu-lzsk2-6 wtu-1htpmxv-2 wtu-e5ib9n-7 wtu-1osntaj-8",
              onClick: triggerClear
            }), [
              _cE("text", _uM({ class: "wtu-8et4kr-c text-12px wtu-2f5wfk-a" }), "清空数据")
            ])
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-sq9tbm-d py-8px px-12px border-width-1px border-style-solid border-color-[#edf2f7] border-bottom-width-0px",
        style: _nS(_uM({"border-top-left-radius":"12px","border-top-right-radius":"12px"}))
      }), [
        _cE("view", _uM({ class: "wtu-1htpmxv-2 wtu-15a3ljl-e rounded-8px p-2px" }), [
          _cE(Fragment, null, RenderHelpers.renderList(tabList, (tab, index, __index, _cached): any => {
            return _cE("view", _uM({
              key: index,
              class: "wtu-1dr0m6s-3 wtu-e5ib9n-7 wtu-1osntaj-8 py-6px rounded-6px",
              style: _nS(_uM({ backgroundColor: tabIndex.value === index ? '#ffffff' : 'transparent' })),
              onClick: () => {tabChange(index)}
            }), [
              _cE("text", _uM({
                class: "text-12px wtu-2f5wfk-a",
                style: _nS(_uM({ color: tabIndex.value === index ? 'var(--theme-color, #37c2bc)' : '#64748b' }))
              }), _tD(tab), 5 /* TEXT, STYLE */)
            ], 12 /* STYLE, PROPS */, ["onClick"])
          }), 64 /* STABLE_FRAGMENT */)
        ])
      ], 4 /* STYLE */),
      _cV(_component_z_paging_x, _uM({
        ref_key: "pagingX",
        ref: pagingX,
        "list-is": "scroll-view",
        "model-value": dataList.value,
        "default-page-size": 10,
        "paging-style": { height: '200px', border: '1px solid #edf2f7', borderTopWidth: '0px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', backgroundColor: '#f8fafc' },
        "onUpdate:modelValue": onUpdateModelValue,
        onQuery: onQuery
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE(Fragment, null, RenderHelpers.renderList(dataList.value, (item, __key, __index, _cached): any => {
            return _cE("view", _uM({
              key: item.id
            }), [
              _cE("view", _uM({ class: "mx-12px my-8px p-12px wtu-sq9tbm-d rounded-8px border-width-1px border-style-solid border-color-[#edf2f7]" }), [
                _cE("view", _uM({ class: "wtu-1htpmxv-2 wtu-f7s8fq-f wtu-e5ib9n-7 mb-6px" }), [
                  _cE("view", _uM({
                    style: _nS(_uM({ backgroundColor: item.tagBgColor, padding: '1px 6px', borderRadius: '4px' }))
                  }), [
                    _cE("text", _uM({
                      style: _nS(_uM({ color: item.tagColor, fontSize: '9px', fontWeight: 'bold' }))
                    }), _tD(item.tag), 5 /* TEXT, STYLE */)
                  ], 4 /* STYLE */),
                  _cE("text", _uM({ class: "text-11px wtu-1bv3nx7-g" }), "#" + _tD(item.id), 1 /* TEXT */)
                ]),
                _cE("text", _uM({ class: "text-14px wtu-2f5wfk-a wtu-18c00gg-h mb-4px" }), _tD(item.title), 1 /* TEXT */),
                _cE("text", _uM({ class: "text-12px wtu-1d5ovbr-1 leading-16px" }), _tD(item.summary), 1 /* TEXT */)
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
const GenSrcPagesBasicComponentsZPagingDemoCardStyles = [_uM([["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-197s6ax-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-1d5ovbr-1", _pS(_uM([["color", "#64748b"]]))], ["wtu-1htpmxv-2", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1dr0m6s-3", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1f0bdjc-4", _pS(_uM([["width", "100%"]]))], ["wtu-17naxc1-5", _pS(_uM([["backgroundColor", "#fee2e2"]]))], ["wtu-lzsk2-6", _pS(_uM([["display", "flex"]]))], ["wtu-e5ib9n-7", _pS(_uM([["alignItems", "center"]]))], ["wtu-1osntaj-8", _pS(_uM([["justifyContent", "center"]]))], ["wtu-4cku8x-9", _pS(_uM([["color", "#dc2626"]]))], ["wtu-2f5wfk-a", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-1d36wz2-b", _pS(_uM([["backgroundColor", "#fef3c7"]]))], ["wtu-8et4kr-c", _pS(_uM([["color", "#d97706"]]))], ["wtu-sq9tbm-d", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-15a3ljl-e", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-f7s8fq-f", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-1bv3nx7-g", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-18c00gg-h", _pS(_uM([["color", "#1e293b"]]))]])]
