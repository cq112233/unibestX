import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import WeappTailwindcss from '../../components/WeappTailwindcss.uvue'
import BindClass from '../../components/BindClass.uvue'
import TButton from '../../components/t-button/t-button.uvue'


const __sfc__ = defineComponent({
  __name: 'index',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const buttonColors: Array<string> = [
  'wtu-g697f2-1k',
  'wtu-65nfi5-1l',
  'wtu-uoeg48-1m',
  'wtu-2wovqv-1n',
  'wtu-1iotpm-1o',
  'wtu-18v0hdl-1p',
  'wtu-66k4l0-1q',
  'wtu-2t7f5v-1r',
  'wtu-g0uk6u-1s',
  'wtu-121yvpx-1t',
  'wtu-x0185p-1u',
  'wtu-10621fs-1v',
  'wtu-5hlz47-1w',
  'wtu-ifoqje-1x',
  'wtu-1vumt3d-1y',
  'wtu-ncrg78-1z',
]

const globalNum = ref(0)

const buttonClass = computed((): string => {
  const index: number = globalNum.value % buttonColors.length
  return buttonColors[index]
})

const templateCorpusDynamicClass = computed((): string => {
  return 'template-corpus-dynamic wtu-1w7rkgd-20 wtu-19y5uyu-21 wtu-14syvt9-22 wtu-11d5tnd-23'
})

function setGlobalNum(num: number): void {
  globalNum.value = num
}

onLoad((): void => {
  console.log('欢迎使用 weapp-tailwindcss 模板', " at src/pages/index/index.uvue:43")
})

return (): any | null => {

const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "style-isolation": 'app',
        "navigation-bar-title-text": '首页'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "content" }), [
            _cV(_component_up_button, _uM({ type: "primary" }), _uM({
              default: withSlotCtx((): any[] => [" 按钮 "]),
              _: 1 /* STABLE */
            })),
            _cV(unref(WeappTailwindcss)),
            _cV(unref(BindClass)),
            _cE("view", _uM({ class: "wtu-npeq5m-0 wtu-qo6ov1-1 wtu-1wqxopl-2 issue-1002-probe" }), [
              _cE("text", _uM({ class: "wtu-1o2o74y-3 wtu-whql8o-4" }), "issue-1002 text-xs"),
              _cE("text", _uM({ class: "wtu-1k7bqiz-5 wtu-whql8o-4" }), "issue-1002 text-sm"),
              _cE("text", _uM({ class: "wtu-16eykte-6 wtu-whql8o-4" }), "issue-1002 text-base"),
              _cE("text", _uM({ class: "wtu-1kgtd4b-7 wtu-whql8o-4" }), "issue-1002 text-xl"),
              _cE("view", _uM({ class: "wtu-1kns6sl-8 wtu-no23xs-9 wtu-1g2ghcv-a wtu-1h9zz9y-b wtu-1fxevz5-c" })),
              _cE("text", _uM({ class: "issue-1002-apply" }), "issue-1002 scoped apply")
            ]),
            _cE("view", _uM({ class: "issue-902-theme-probe issue-902-theme-scope wtu-yokg53-d wtu-1wqxopl-2 wtu-whql8o-4" }), [
              _cE("text", null, "issue 902 theme variable")
            ]),
            _cE("view", _uM({ class: "template-corpus-card wtu-3a2iag-e wtu-jd0vpj-f wtu-ciw2dx-g wtu-18t9bml-h wtu-182yzfd-i wtu-1jbz3ca-j wtu-c2k5s2-k wtu-extyql-l wtu-1l87n62-m wtu-1js87gs-n wtu-whql8o-4 wtu-1xa2dkq-o wx_cbg-blue-500 not-wx_cbg-red-500 any-hover_cbg-slate-800" }), [
              _cE("view", _uM({ class: "template-corpus-radial wtu-11jmcfc-p wtu-17r68ei-q wtu-1vp3mep-r wtu-11wa8j1-s" }), [
                _cE("text", null, "template corpus radial")
              ]),
              _cE("view", _uM({ class: "template-corpus-space wtu-1uyfxo2-t" }), [
                _cE("view", _uM({ class: "wtu-u3sk51-u wtu-nl7mxc-v wtu-xy1mqn-w wtu-11l2up2-x wtu-11fqucj-y wtu-1y1zuzc-z" }), [
                  _cE("text", null, "space item 1")
                ]),
                _cE("view", _uM({
                  class: _nC(unref(templateCorpusDynamicClass))
                }), [
                  _cE("text", null, "space item 2")
                ], 2 /* CLASS */)
              ]),
              _cE("view", _uM({ class: "template-corpus-apply" }), [
                _cE("text", null, "apply corpus")
              ])
            ]),
            _cE("view", _uM({ class: "wtu-t353x5-10 wtu-npeq5m-0 wtu-lb36wo-11 wtu-uhfqvn-12 wtu-sir76g-13" })),
            _cE("text", _uM({ class: "wtu-1kgtd4b-7 wtu-12ejmrm-14" }), " 写法示例Start! "),
            _cE("view", _uM({ class: "wtu-1i029eu-15 wtu-3a2iag-e wtu-jd0vpj-f wtu-u0kjb1-16" }), [
              _cE("text", _uM({ class: "wtu-162mnqq-17 wtu-11vxfoi-18 wtu-1fxevz5-c wtu-11b3903-19 wtu-6d0iwi-1a wtu-whql8o-4" }), " 圆角+背景+文本 "),
              _cE("view", _uM({ class: "wtu-qtmlvq-1b" }), [
                _cE("button", _uM({
                  class: _nC(["wtu-azlpjx-1c wtu-whql8o-4", unref(buttonClass)]),
                  onClick: () => {setGlobalNum(unref(globalNum) + 1)}
                }), " click here to inc " + _tD(unref(globalNum)), 11 /* TEXT, CLASS, PROPS */, ["onClick"])
              ]),
              _cE("view", _uM({ class: "test" }), [
                _cE("text", _uM({ class: "wtu-zdv8qa-1d wtu-6d0iwi-1a" }), " @apply 多端写法示例 ")
              ]),
              _cE("view", _uM({ class: "theme-mode-demo wtu-rnleyn-1e wtu-195xlus-1f wtu-nl7mxc-v wtu-x42tnq-1g wtu-1113nb4-1h wtu-8cakgy-1i system-dark_cbg-slate-900 system-dark_ctext-slate-100 dark_cbg-zinc-900 dark_ctext-zinc-50" }), [
                _cE("text", null, "uni-app x Tailwind CSS v4 system dark"),
                _cE("view", _uM({ class: "theme-dark wtu-r3m7kp-1j wtu-195xlus-1f wtu-nl7mxc-v wtu-xy1mqn-w wtu-11b3903-19 wtu-8cakgy-1i dark_cbg-zinc-950 dark_ctext-zinc-50" }), [
                  _cE("text", null, "uni-app x Tailwind CSS v4 manual dark")
                ])
              ]),
              _cV(unref(TButton), _uM({
                "t-class": "bg-_b_h0977ee_B text-_b31rpx_B",
                "t-class-content": "px-_b29rpx_B"
              }), _uM({
                default: withSlotCtx((): any[] => [
                  _cE("text", null, "issue 977 t-class")
                ]),
                _: 1 /* STABLE */
              }))
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
const GenSrcPagesIndexIndexStyles = [_uM([["content", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["paddingTop", "32rpx"], ["paddingBottom", "32rpx"]]))], ["test", _pS(_uM([["marginTop", "24rpx"], ["display", "flex"], ["height", 100], ["width", 222.222], ["alignItems", "center"], ["justifyContent", "center"], ["borderTopLeftRadius", 40], ["borderTopRightRadius", 40], ["borderBottomRightRadius", 40], ["borderBottomLeftRadius", 40], ["backgroundColor", "rgba(49,237,216,0.54)"]]))], ["issue-1002-apply", _pS(_uM([["borderTopLeftRadius", 9999], ["borderTopRightRadius", 9999], ["borderBottomRightRadius", 9999], ["borderBottomLeftRadius", 9999], ["backgroundColor", "#164e63"], ["fontSize", "24rpx"], ["lineHeight", 1.33333], ["color", "#ffffff"]]))], ["border-solid", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["bg-gradient-to-br", _pS(_uM([["--tw-gradient-position", "to bottom right"], ["backgroundImage", "linear-gradient(var(--tw-gradient-stops))"]]))], ["from-slate-900", _pS(_uM([["--tw-gradient-from", "rgb(15, 23, 43)"], ["--tw-gradient-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )"]]))], ["to-slate-700", _pS(_uM([["--tw-gradient-to", "rgb(49, 65, 88)"], ["--tw-gradient-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )"]]))], ["shadow-xl", _pS(_uM([["--tw-shadow", "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["wtu-npeq5m-0", _pS(_uM([["width", "100%"]]))], ["wtu-qo6ov1-1", _pS(_uM([["backgroundColor", "#164e63"]]))], ["wtu-1wqxopl-2", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["wtu-1o2o74y-3", _pS(_uM([["fontSize", "24rpx"], ["lineHeight", 1.33333]]))], ["wtu-whql8o-4", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1k7bqiz-5", _pS(_uM([["fontSize", "28rpx"], ["lineHeight", 1.42857]]))], ["wtu-16eykte-6", _pS(_uM([["fontSize", "32rpx"], ["lineHeight", 1.5]]))], ["wtu-1kgtd4b-7", _pS(_uM([["fontSize", "40rpx"], ["lineHeight", 1.4]]))], ["wtu-1kns6sl-8", _pS(_uM([["marginTop", 8]]))], ["wtu-no23xs-9", _pS(_uM([["height", 48]]))], ["wtu-1g2ghcv-a", _pS(_uM([["width", 48]]))], ["wtu-1h9zz9y-b", _pS(_uM([["borderTopLeftRadius", 9999], ["borderTopRightRadius", 9999], ["borderBottomRightRadius", 9999], ["borderBottomLeftRadius", 9999]]))], ["wtu-1fxevz5-c", _pS(_uM([["backgroundColor", "#f21903"]]))], ["wtu-yokg53-d", _pS(_uM([["backgroundColor", "var(--theme-color)"]]))], ["wtu-3a2iag-e", _pS(_uM([["display", "flex"]]))], ["wtu-jd0vpj-f", _pS(_uM([["flexDirection", "column"]]))], ["wtu-18t9bml-h", _pS(_uM([["borderTopLeftRadius", 28], ["borderTopRightRadius", 28], ["borderBottomRightRadius", 28], ["borderBottomLeftRadius", 28]]))], ["wtu-182yzfd-i", _pS(_uM([["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1jbz3ca-j", _pS(_uM([["borderTopColor", "rgb(226,232,240)"], ["borderRightColor", "rgb(226,232,240)"], ["borderBottomColor", "rgb(226,232,240)"], ["borderLeftColor", "rgb(226,232,240)"]]))], ["wtu-c2k5s2-k", _pS(_uM([["--tw-gradient-position", "to bottom right"], ["backgroundImage", "linear-gradient(var(--tw-gradient-stops))"]]))], ["wtu-extyql-l", _pS(_uM([["--tw-gradient-from", "rgb(15, 23, 43)"], ["--tw-gradient-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )"]]))], ["wtu-1l87n62-m", _pS(_uM([["--tw-gradient-to", "rgb(49, 65, 88)"], ["--tw-gradient-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )"]]))], ["wtu-1js87gs-n", _pS(_uM([["paddingTop", "32rpx"], ["paddingRight", "32rpx"], ["paddingBottom", "32rpx"], ["paddingLeft", "32rpx"]]))], ["wtu-1xa2dkq-o", _pS(_uM([["--tw-shadow", "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["wtu-11jmcfc-p", _pS(_uM([["backgroundColor", "#e0f2fe"]]))], ["wtu-17r68ei-q", _pS(_uM([["paddingLeft", 48], ["paddingRight", 48]]))], ["wtu-1vp3mep-r", _pS(_uM([["paddingTop", 24], ["paddingBottom", 24]]))], ["wtu-11wa8j1-s", _pS(_uM([["color", "#123456"]]))], ["wtu-u3sk51-u", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["wtu-nl7mxc-v", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-xy1mqn-w", _pS(_uM([["paddingLeft", "24rpx"], ["paddingRight", "24rpx"]]))], ["wtu-11l2up2-x", _pS(_uM([["paddingTop", "8rpx"], ["paddingBottom", "8rpx"]]))], ["wtu-11fqucj-y", _pS(_uM([["fontSize", 26]]))], ["wtu-1y1zuzc-z", _pS(_uM([["color", "rgb(49,65,88)"]]))], ["wtu-t353x5-10", _pS(_uM([["marginTop", "24rpx"], ["marginBottom", "24rpx"]]))], ["wtu-lb36wo-11", _pS(_uM([["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 1]]))], ["wtu-uhfqvn-12", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-sir76g-13", _pS(_uM([["borderTopColor", "rgb(229,231,235)"], ["borderRightColor", "rgb(229,231,235)"], ["borderBottomColor", "rgb(229,231,235)"], ["borderLeftColor", "rgb(229,231,235)"]]))], ["wtu-12ejmrm-14", _pS(_uM([["color", "rgba(74,85,101,0.95)"]]))], ["wtu-1i029eu-15", _pS(_uM([["marginTop", 13.14758]]))], ["wtu-u0kjb1-16", _pS(_uM([["alignItems", "center"]]))], ["wtu-162mnqq-17", _pS(_uM([["width", "256rpx"]]))], ["wtu-11vxfoi-18", _pS(_uM([["borderTopLeftRadius", "12rpx"], ["borderTopRightRadius", "12rpx"], ["borderBottomRightRadius", "12rpx"], ["borderBottomLeftRadius", "12rpx"]]))], ["wtu-11b3903-19", _pS(_uM([["paddingTop", "16rpx"], ["paddingBottom", "16rpx"]]))], ["wtu-6d0iwi-1a", _pS(_uM([["textAlign", "center"]]))], ["wtu-qtmlvq-1b", _pS(_uM([["marginTop", "24rpx"]]))], ["wtu-azlpjx-1c", _pS(_uM([["width", "512rpx"]]))], ["wtu-zdv8qa-1d", _pS(_uM([["color", "#da0e3c"]]))], ["wtu-rnleyn-1e", _pS(_uM([["marginTop", "32rpx"]]))], ["wtu-195xlus-1f", _pS(_uM([["borderTopLeftRadius", "8rpx"], ["borderTopRightRadius", "8rpx"], ["borderBottomRightRadius", "8rpx"], ["borderBottomLeftRadius", "8rpx"]]))], ["wtu-x42tnq-1g", _pS(_uM([["paddingLeft", "32rpx"], ["paddingRight", "32rpx"]]))], ["wtu-1113nb4-1h", _pS(_uM([["paddingTop", "24rpx"], ["paddingBottom", "24rpx"]]))], ["wtu-8cakgy-1i", _pS(_uM([["color", "rgb(15,23,43)"]]))], ["wtu-r3m7kp-1j", _pS(_uM([["marginTop", "16rpx"]]))], ["wtu-g697f2-1k", _pS(_uM([["backgroundColor", "#000000"]]))], ["wtu-65nfi5-1l", _pS(_uM([["backgroundColor", "#111111"]]))], ["wtu-uoeg48-1m", _pS(_uM([["backgroundColor", "#222222"]]))], ["wtu-2wovqv-1n", _pS(_uM([["backgroundColor", "#333333"]]))], ["wtu-1iotpm-1o", _pS(_uM([["backgroundColor", "#444444"]]))], ["wtu-18v0hdl-1p", _pS(_uM([["backgroundColor", "#555555"]]))], ["wtu-66k4l0-1q", _pS(_uM([["backgroundColor", "#666666"]]))], ["wtu-2t7f5v-1r", _pS(_uM([["backgroundColor", "#777777"]]))], ["wtu-g0uk6u-1s", _pS(_uM([["backgroundColor", "#888888"]]))], ["wtu-121yvpx-1t", _pS(_uM([["backgroundColor", "#999999"]]))], ["wtu-x0185p-1u", _pS(_uM([["backgroundColor", "#aaaaaa"]]))], ["wtu-10621fs-1v", _pS(_uM([["backgroundColor", "#bbbbbb"]]))], ["wtu-5hlz47-1w", _pS(_uM([["backgroundColor", "#cccccc"]]))], ["wtu-ifoqje-1x", _pS(_uM([["backgroundColor", "#dddddd"]]))], ["wtu-1vumt3d-1y", _pS(_uM([["backgroundColor", "#eeeeee"]]))], ["wtu-ncrg78-1z", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-1w7rkgd-20", _pS(_uM([["backgroundColor", "#68c828"]]))], ["wtu-19y5uyu-21", _pS(_uM([["fontSize", 100]]))], ["wtu-14syvt9-22", _pS(_uM([["width", 323]]))], ["wtu-11d5tnd-23", _pS(_uM([["height", 45]]))]])]
