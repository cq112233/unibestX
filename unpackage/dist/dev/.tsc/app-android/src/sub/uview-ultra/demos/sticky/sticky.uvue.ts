import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_sticky from '@/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'sticky',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const scrollTop = ref(0)
const windowHeight = ref(uni.getWindowInfo().windowHeight)

function handleScroll(e: UniScrollEvent) {
  scrollTop.value = e.detail.scrollTop
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_sticky = resolveEasyComponent("up-sticky",_easycom_up_sticky)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-sticky 吸顶'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({
            class: "page-container bg-__f8fafc_",
            style: _nS(_uM({ height: `${windowHeight.value}px` }))
          }), [
            _cV(_component_NavBar, _uM({
              title: "Sticky 吸顶",
              "auto-back": true
            })),
            _cE("scroll-view", _uM({
              style: _nS(_uM({"flex":"1","padding":"16px"})),
              "scroll-y": "true",
              onScroll: handleScroll
            }), [
              _cE("view", _uM({
                style: _nS(_uM({"background-color":"#ffffff","border-radius":"8px","padding":"12px","margin-bottom":"12px"}))
              }), [
                _cE("view", _uM({
                  style: _nS(_uM({"display":"flex","flex-direction":"row","align-items":"center","margin-bottom":"10px"}))
                }), [
                  _cE("view", _uM({
                    style: _nS(_uM({"width":"3px","height":"14px","background-color":"#2979ff","margin-right":"6px","border-radius":"2px"}))
                  }), null, 4 /* STYLE */),
                  _cE("text", _uM({
                    style: _nS(_uM({"font-size":"14px","font-weight":"bold","color":"#1e293b"}))
                  }), "吸顶效果说明", 4 /* STYLE */)
                ], 4 /* STYLE */),
                _cE("text", _uM({
                  style: _nS(_uM({"font-size":"13px","color":"#64748b","line-height":"20px"}))
                }), " 请向下滑动页面，当下面的操作栏滚动到顶部时，会触发吸顶悬浮固定在视口顶部。 ", 4 /* STYLE */),
                _cE("text", _uM({
                  style: _nS(_uM({"font-size":"12px","color":"#2563eb","margin-top":"6px"}))
                }), "当前 实时高度: " + _tD(scrollTop.value) + "px", 5 /* TEXT, STYLE */)
              ], 4 /* STYLE */),
              _cV(_component_up_sticky, _uM({
                "offset-top": 0,
                "scroll-top": scrollTop.value
              }), _uM({
                default: withSlotCtx((): any[] => [
                  _cE("view", _uM({ class: "bg-__2979ff_ p-12px rounded-8px flex-row items-center justify-between shadow-sm" }), [
                    _cE("text", _uM({ class: "text-white font-bold text-14px" }), "📌 悬浮吸顶操作栏"),
                    _cV(_component_up_button, _uM({
                      size: "small",
                      type: "warning",
                      text: "立即体验",
                      class: "w-80px"
                    }))
                  ])
                ]),
                _: 1 /* STABLE */
              }), 8 /* PROPS */, ["scroll-top"]),
              _cE(Fragment, null, RenderHelpers.renderList(20, (i, __key, __index, _cached): any => {
                return _cE("view", _uM({
                  key: i,
                  style: _nS(_uM({"background-color":"#ffffff","border-radius":"8px","padding":"12px","margin-top":"10px"}))
                }), [
                  _cE("text", _uM({
                    style: _nS(_uM({"font-size":"14px","font-weight":"bold","color":"#334155"}))
                  }), "列表条目 #" + _tD(i), 5 /* TEXT, STYLE */),
                  _cE("text", _uM({
                    style: _nS(_uM({"font-size":"12px","color":"#94a3b8","margin-top":"4px"}))
                  }), "向下滑动页面查看吸顶保持效果...", 4 /* STYLE */)
                ], 4 /* STYLE */)
              }), 64 /* STABLE_FRAGMENT */)
            ], 36 /* STYLE, NEED_HYDRATION */)
          ], 4 /* STYLE */)
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
const GenSrcSubUviewUltraDemosStickyStickyStyles = [_uM([["bg-__2979ff_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#2979ff"]]))], ["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["p-12px", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["shadow-sm", _pS(_uM([["boxShadow", "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))"], ["--un-shadow", "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))"]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-white", _pS(_uM([["color", "rgba(255,255,255,var(--un-color-opacity,1))"]]))], ["w-80px", _pS(_uM([["width", 80]]))], ["page-container", _pS(_uM([["display", "flex"], ["flexDirection", "column"]]))]])]
