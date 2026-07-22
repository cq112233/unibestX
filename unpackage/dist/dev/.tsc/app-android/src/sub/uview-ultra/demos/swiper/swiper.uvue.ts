import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_swiper from '@/uni_modules/uview-ultra/components/up-swiper/up-swiper.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'swiper',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const swiperList = ref([
  { image: '/static/logo.png', title: 'uview-ultra 组件演示' },
  { image: '/static/logo.png', title: '高品质 UI 组件库' },
  { image: '/static/logo.png', title: '多端适配 · 开箱即用' },
] as UTSJSONObject[])

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_swiper = resolveEasyComponent("up-swiper",_easycom_up_swiper)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-swiper 轮播图'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "Swiper 轮播图",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础轮播图"),
                _cV(_component_up_swiper, _uM({
                  list: swiperList.value,
                  "key-name": "image",
                  indicator: true,
                  "indicator-mode": "dot",
                  circular: true,
                  autoplay: true,
                  interval: 3000,
                  height: "180",
                  "show-title": true
                }), null, 8 /* PROPS */, ["list"])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "卡片式轮播"),
                _cV(_component_up_swiper, _uM({
                  list: swiperList.value,
                  "key-name": "image",
                  indicator: true,
                  "indicator-mode": "line",
                  circular: true,
                  "previous-margin": 30,
                  "next-margin": 30,
                  height: "160"
                }), null, 8 /* PROPS */, ["list"])
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
const GenSrcSubUviewUltraDemosSwiperSwiperStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
