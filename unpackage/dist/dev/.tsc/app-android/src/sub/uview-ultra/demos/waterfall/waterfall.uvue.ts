import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref, computed } from 'vue'


const __sfc__ = defineComponent({
  __name: 'waterfall',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const list = ref<UTSJSONObject[]>([
  { title: 'uview-ultra 核心UI组件', desc: '轻量级UI框架', price: 129, imgHeight: '80px' } as UTSJSONObject,
  { title: '高性能 UniAppX 跨端套件', desc: '支持原生Android/iOS', price: 299, imgHeight: '160px' } as UTSJSONObject,
  { title: '智能瀑布流弹性排版', desc: '自动适配列高', price: 89, imgHeight: '110px' } as UTSJSONObject,
  { title: '极速渲染流畅体验', desc: '零延迟丝滑滚动', price: 199, imgHeight: '200px' } as UTSJSONObject,
  { title: '炫彩主题切换系统', desc: '一键换肤体验', price: 49, imgHeight: '90px' } as UTSJSONObject,
  { title: '全套内置工程级图标库', desc: '上百款高清矢量图标', price: 159, imgHeight: '140px' } as UTSJSONObject,
  { title: '响应式页面布局容器', desc: '完美适配屏幕', price: 79, imgHeight: '180px' } as UTSJSONObject,
  { title: '开箱即用多端示例', desc: '快速构建产品原型', price: 99, imgHeight: '120px' } as UTSJSONObject,
])

// 手动交错分配到左右两列，模拟瀑布流效果
const leftList = computed((): UTSJSONObject[] => {
  const result: UTSJSONObject[] = []
  for (let i: number = 0; i < list.value.length; i++) {
    if (i % 2 == 0) {
      result.push(list.value[i])
    }
  }
  return result
})

const rightList = computed((): UTSJSONObject[] => {
  const result: UTSJSONObject[] = []
  for (let i: number = 0; i < list.value.length; i++) {
    if (i % 2 != 0) {
      result.push(list.value[i])
    }
  }
  return result
})

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-waterfall 瀑布流'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Waterfall 瀑布流",
              "auto-back": true
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础瀑布流 (2列)"),
                _cE("view", _uM({ class: "waterfall-container" }), [
                  _cE("view", _uM({ class: "waterfall-col" }), [
                    _cE(Fragment, null, RenderHelpers.renderList(leftList.value, (item, idx, __index, _cached): any => {
                      return _cE("view", _uM({
                        key: idx,
                        class: "waterfall-card"
                      }), [
                        _cE("image", _uM({
                          src: "/static/logo.png",
                          mode: "aspectFit",
                          style: _nS(_uM({ width: '100%', height: item.getString('imgHeight') ?? '100px', borderRadius: '6px', backgroundColor: '#ffffff' }))
                        }), null, 4 /* STYLE */),
                        _cE("text", _uM({ class: "card-title" }), _tD(item.getString('title')), 1 /* TEXT */),
                        _cE("text", _uM({ class: "card-desc" }), _tD(item.getString('desc')), 1 /* TEXT */),
                        _cE("text", _uM({ class: "card-price" }), "￥" + _tD(item.getNumber('price')), 1 /* TEXT */)
                      ])
                    }), 128 /* KEYED_FRAGMENT */)
                  ]),
                  _cE("view", _uM({ class: "waterfall-col ml-10rpx" }), [
                    _cE(Fragment, null, RenderHelpers.renderList(rightList.value, (item, idx, __index, _cached): any => {
                      return _cE("view", _uM({
                        key: idx,
                        class: "waterfall-card"
                      }), [
                        _cE("image", _uM({
                          src: "/static/logo.png",
                          mode: "aspectFit",
                          style: _nS(_uM({ width: '100%', height: item.getString('imgHeight') ?? '100px', borderRadius: '6px', backgroundColor: '#ffffff' }))
                        }), null, 4 /* STYLE */),
                        _cE("text", _uM({ class: "card-title" }), _tD(item.getString('title')), 1 /* TEXT */),
                        _cE("text", _uM({ class: "card-desc" }), _tD(item.getString('desc')), 1 /* TEXT */),
                        _cE("text", _uM({ class: "card-price" }), "￥" + _tD(item.getNumber('price')), 1 /* TEXT */)
                      ])
                    }), 128 /* KEYED_FRAGMENT */)
                  ])
                ])
              ])
            ])
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
const GenSrcSubUviewUltraDemosWaterfallWaterfallStyles = [_uM([["bg-__f1f5f9_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f1f5f9"]]))], ["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["ml-10rpx", _pS(_uM([["marginLeft", "10rpx"]]))], ["mt-2px", _pS(_uM([["marginTop", 2]]))], ["mt-4px", _pS(_uM([["marginTop", 4]]))], ["mt-6px", _pS(_uM([["marginTop", 6]]))], ["overflow-hidden", _pS(_uM([["overflow", "hidden"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["p-6px", _pS(_uM([["paddingTop", 6], ["paddingRight", 6], ["paddingBottom", 6], ["paddingLeft", 6]]))], ["p-8px", _pS(_uM([["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__334155_", _pS(_uM([["color", "#334155"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__e11d48_", _pS(_uM([["color", "#e11d48"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))], ["waterfall-container", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"]]))], ["waterfall-col", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "column"]]))], ["waterfall-card", _pS(_uM([["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8], ["overflow", "hidden"], ["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8], ["marginBottom", 8]]))], ["card-title", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#334155"], ["marginTop", 6]]))], ["card-desc", _pS(_uM([["fontSize", 12], ["color", "#94a3b8"], ["marginTop", 2]]))], ["card-price", _pS(_uM([["fontSize", 14], ["color", "#e11d48"], ["marginTop", 4], ["fontWeight", "bold"]]))]])]
