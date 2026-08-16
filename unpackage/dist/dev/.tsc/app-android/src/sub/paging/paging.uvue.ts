import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_z_paging_x from '@/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
/* eslint-disable ts/consistent-type-definitions */
import { ref } from 'vue'

// 声明 ArticleItem 类型（使用 type 别名符合 UTS 强类型规范）
type ArticleItem = { __$originalPosition?: UTSSourceMapPosition<"ArticleItem", "src/sub/paging/paging.uvue", 123, 6>;
  id: number
  title: string
  summary: string
  author: string
  createTime: string
  tag: string
  tagBgColor: string
  tagColor: string
}

// 选项卡配置

const __sfc__ = defineComponent({
  __name: 'paging',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const tabList = ['全部', '技术', '设计', '生活']
const tabIndex = ref<number>(0)

// z-paging-x 组件引用与数据绑定
const pagingX = ref<ComponentPublicInstance | null>(null)
const dataList = ref<ArticleItem[]>([])

// 手动更新绑定的列表数据，避免 compiler 产生 union types
function onUpdateModelValue(val: any[]) {
  dataList.value = val as ArticleItem[]
}

// 模拟获取数据 API 函数
function getMockArticles(category: string, pageNo: number, pageSize: number): ArticleItem[] {
  const list = [] as ArticleItem[]
  const start = (pageNo - 1) * pageSize

  for (let i = 0; i < pageSize; i++) {
    const itemId = start + i + 1
    // 限制列表总大小为 35 条，以演示 "没有更多数据"
    if (itemId > 35) {
      break
    }

    // 确定文章标签与对应的颜色配方
    let tag = category
    if (category == '全部') {
      const idx = itemId % 3
      if (idx == 0)
        tag = '技术'
      else if (idx == 1)
        tag = '设计'
      else tag = '生活'
    }

    let tagBgColor = '#e0f2fe'
    let tagColor = '#0284c7'
    if (tag == '设计') {
      tagBgColor = '#f3e8ff'
      tagColor = '#7c3aed'
    }
    else if (tag == '生活') {
      tagBgColor = '#dcfce7'
      tagColor = '#16a34a'
    }

    list.push({
      id: itemId,
      title: `${tag}专栏 · 探索移动端开发的未来第 ${itemId} 篇`,
      summary: `这是关于 ${tag} 领域的精选分享文章。通过全新的跨端原生开发理念，帮助开发者在性能与效率之间找到完美的平衡点。`,
      author: '技术专家 · unix',
      createTime: `06-04 15:${30 - i}`,
      tag,
      tagBgColor,
      tagColor,
    } as ArticleItem)
  }
  return list
}

// 下拉刷新或触底加载的回调
function onQuery(pageNo: number, pageSize: number) {
  const currentCategory = tabList[tabIndex.value]

  // 模拟 800ms 的网络延时
  setTimeout(() => {
    try {
      const data = getMockArticles(currentCategory, pageNo, pageSize)
      if (pagingX.value != null) {
        pagingX.value!.$callMethod('complete', data)
      }
    }
    catch (e) {
      if (pagingX.value != null) {
        pagingX.value!.$callMethod('completeByError')
      }
    }
  }, 800)
}

// 切换 Tab 时触发重新加载
function tabChange(index: number) {
  tabIndex.value = index
  if (pagingX.value != null) {
    pagingX.value!.$callMethod('reload')
  }
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_z_paging_x = resolveEasyComponent("z-paging-x",_easycom_z_paging_x)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": '分页加载'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "flex flex-col flex-1 h-full bg-__f7fafc_" }), [
            _cV(_component_NavBar, _uM({
              title: "分页加载 (z-paging-x)",
              "show-back": true
            })),
            _cE("view", _uM({ class: "bg-white py-12px px-16px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_" }), [
              _cE("view", _uM({ class: "flex-row bg-__f1f5f9_ rounded-12px p-4px" }), [
                _cE(Fragment, null, RenderHelpers.renderList(tabList, (tab, index, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: index,
                    class: "flex-1 items-center justify-center py-8px rounded-8px",
                    style: _nS(_uM({ backgroundColor: tabIndex.value === index ? '#ffffff' : 'transparent' })),
                    onClick: () => {tabChange(index)}
                  }), [
                    _cE("text", _uM({
                      class: "text-13px font-bold",
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
                    _cE("view", _uM({ class: "mx-16px my-8px p-16px bg-white rounded-12px border-width-1px border-style-solid border-color-__edf2f7_ shadow-sm" }), [
                      _cE("view", _uM({ class: "flex-row justify-between items-center mb-8px" }), [
                        _cE("view", _uM({
                          style: _nS(_uM({ backgroundColor: item.tagBgColor, padding: '2px 8px', borderRadius: '6px' }))
                        }), [
                          _cE("text", _uM({
                            style: _nS(_uM({ color: item.tagColor, fontSize: '10px', fontWeight: 'bold' }))
                          }), _tD(item.tag), 5 /* TEXT, STYLE */)
                        ], 4 /* STYLE */),
                        _cE("text", _uM({ class: "text-12px text-__94a3b8_" }), "#" + _tD(item.id), 1 /* TEXT */)
                      ]),
                      _cE("text", _uM({ class: "text-15px font-bold text-__1e293b_ mb-6px" }), _tD(item.title), 1 /* TEXT */),
                      _cE("text", _uM({ class: "text-13px text-__64748b_ leading-18px mb-12px" }), _tD(item.summary), 1 /* TEXT */),
                      _cE("view", _uM({ class: "flex-row justify-between items-center border-top-width-1px border-top-style-solid border-top-color-__f8fafc_ pt-8px" }), [
                        _cE("text", _uM({ class: "text-12px text-__475569_ font-medium" }), _tD(item.author), 1 /* TEXT */),
                        _cE("text", _uM({ class: "text-11px text-__94a3b8_" }), _tD(item.createTime), 1 /* TEXT */)
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
const GenSrcSubPagingPagingStyles = [_uM([["bg-__f1f5f9_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f1f5f9"]]))], ["bg-__f7fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f7fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border-bottom-color-__f1f5f9_", _pS(_uM([["borderBottomColor", "#f1f5f9"]]))], ["border-bottom-style-solid", _pS(_uM([["borderBottomStyle", "solid"]]))], ["border-bottom-width-1px", _pS(_uM([["borderBottomWidth", 1]]))], ["border-color-__edf2f7_", _pS(_uM([["borderTopColor", "#edf2f7"], ["borderRightColor", "#edf2f7"], ["borderBottomColor", "#edf2f7"], ["borderLeftColor", "#edf2f7"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-top-color-__f8fafc_", _pS(_uM([["borderTopColor", "#f8fafc"]]))], ["border-top-style-solid", _pS(_uM([["borderTopStyle", "solid"]]))], ["border-top-width-1px", _pS(_uM([["borderTopWidth", 1]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-col", _pS(_uM([["flexDirection", "column"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["font-medium", _pS(_uM([["fontWeight", 500]]))], ["h-full", _pS(_uM([["height", "100%"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["leading-18px", _pS(_uM([["lineHeight", "18px"]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-6px", _pS(_uM([["marginBottom", 6]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["mx-16px", _pS(_uM([["marginLeft", 16], ["marginRight", 16]]))], ["my-8px", _pS(_uM([["marginTop", 8], ["marginBottom", 8]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["p-4px", _pS(_uM([["paddingTop", 4], ["paddingRight", 4], ["paddingBottom", 4], ["paddingLeft", 4]]))], ["pt-8px", _pS(_uM([["paddingTop", 8]]))], ["px-16px", _pS(_uM([["paddingLeft", 16], ["paddingRight", 16]]))], ["py-12px", _pS(_uM([["paddingTop", 12], ["paddingBottom", 12]]))], ["py-8px", _pS(_uM([["paddingTop", 8], ["paddingBottom", 8]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["shadow-sm", _pS(_uM([["boxShadow", "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))"], ["--un-shadow", "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))"]]))], ["text-__1e293b_", _pS(_uM([["color", "#1e293b"]]))], ["text-__475569_", _pS(_uM([["color", "#475569"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-11px", _pS(_uM([["fontSize", 11]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["text-15px", _pS(_uM([["fontSize", 15]]))]])]
