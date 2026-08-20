import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_sticky from '@/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { computed, ref } from 'vue';
import { safeAreaInsets, systemInfo } from '@/src/utils/systemInfo';


const __sfc__ = defineComponent({
  __name: 'sticky',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const scrollTop = ref(0);
const windowHeight = ref(uni.getWindowInfo().windowHeight);

const navHeight = computed((): number => {
  const top = safeAreaInsets.value?.top ?? systemInfo.value?.statusBarHeight ?? 0;
  return top + 44;
});

function handleScroll(e: UniScrollEvent) {
  scrollTop.value = e.detail.scrollTop;
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
            class: "page-container bg-_b_hf8fafc_B",
            style: _nS(_uM({ height: `${windowHeight.value}px` }))
          }), [
            _cV(_component_NavBar, _uM({
              title: "Sticky 吸顶",
              "auto-back": true
            })),
            _cE("scroll-view", _uM({
              style: _nS(_uM({"flex":"1","padding":"16px"})),
              direction: "vertical",
              onScroll: handleScroll
            }), [
              _cE("view", _uM({ class: "bg-white rounded-_b8px_B p-_b12px_B mb-_b12px_B shadow-xs" }), [
                _cE("view", _uM({ class: "flex-row items-center mb-_b10px_B" }), [
                  _cE("view", _uM({ class: "w-_b3px_B h-_b14px_B bg-_b_h2979ff_B mr-_b6px_B rounded-_b2px_B" })),
                  _cE("text", _uM({ class: "text-_b14px_B font-bold text-_b_h1e293b_B" }), "吸顶效果说明")
                ]),
                _cE("text", _uM({ class: "text-_b13px_B text-_b_h64748b_B leading-_b20px_B" }), " 向上滑动页面，当下面的操作栏滚动到顶部时，会触发 up-sticky 组件吸顶悬浮固定。 ")
              ]),
              _cV(_component_up_sticky, _uM({
                "offset-top": 0,
                "custom-nav-height": navHeight.value,
                "scroll-top": scrollTop.value
              }), _uM({
                default: withSlotCtx((): any[] => [
                  _cE("view", _uM({ class: "bg-_b_h2979ff_B p-_b12px_B rounded-_b8px_B flex-row items-center justify-between shadow-sm mb-_b10px_B" }), [
                    _cE("text", _uM({ class: "text-white font-bold text-_b14px_B" }), "📌 悬浮吸顶操作栏"),
                    _cV(_component_up_button, _uM({
                      size: "small",
                      type: "warning",
                      text: "立即体验",
                      class: "w-_b90px_B"
                    }))
                  ])
                ]),
                _: 1 /* STABLE */
              }), 8 /* PROPS */, ["custom-nav-height", "scroll-top"]),
              _cE(Fragment, null, RenderHelpers.renderList(25, (i, __key, __index, _cached): any => {
                return _cE("view", _uM({
                  key: i,
                  class: "bg-white rounded-_b8px_B p-_b12px_B mt-_b10px_B shadow-xs"
                }), [
                  _cE("text", _uM({ class: "text-_b14px_B font-bold text-_b_h334155_B" }), "列表条目 #" + _tD(i), 1 /* TEXT */),
                  _cE("text", _uM({ class: "text-_b12px_B text-_b_h94a3b8_B mt-_b4px_B" }), "向下滑动页面查看吸顶保持效果...")
                ])
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
const GenSrcSubUviewUltraDemosStickyStickyStyles = [_uM([["page-container", _pS(_uM([["display", "flex"], ["flexDirection", "column"]]))]])]
