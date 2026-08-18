import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import WeappTailwindcss from '../../components/WeappTailwindcss.uvue';
import BindClass from '../../components/BindClass.uvue';
import TButton from '../../components/t-button/t-button.uvue';


const __sfc__ = defineComponent({
  __name: 'index',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const buttonColors: Array<string> = [
  'bg-_b_h000_B',
  'bg-_b_h111_B',
  'bg-_b_h222_B',
  'bg-_b_h333_B',
  'bg-_b_h444_B',
  'bg-_b_h555_B',
  'bg-_b_h666_B',
  'bg-_b_h777_B',
  'bg-_b_h888_B',
  'bg-_b_h999_B',
  'bg-_b_haaa_B',
  'bg-_b_hbbb_B',
  'bg-_b_hccc_B',
  'bg-_b_hddd_B',
  'bg-_b_heee_B',
  'bg-_b_hfff_B'
];

const globalNum = ref(0);

const buttonClass = computed((): string => {
  const index: number = globalNum.value % buttonColors.length;
  return buttonColors[index];
});

const templateCorpusDynamicClass = computed((): string => {
  return 'template-corpus-dynamic wtu-1w7rkgd-1p wtu-1y1zuzc-11 wtu-11fqucj-10 wtu-14syvt9-1q wtu-11d5tnd-1r wtu-1sza2eb-1s wtu-xy1mqn-y';
});

function setGlobalNum(num: number): void {
  globalNum.value = num;
}

onLoad((): void => {
  console.log('欢迎使用 weapp-tailwindcss 模板', " at src/pages/index/index.uvue:43");
});

return (): any | null => {

const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": '首页',
        "background-color": '#1abc9c',
        "background-color-content": '#1abc9c'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "content" }), [
            _cV(unref(WeappTailwindcss)),
            _cV(unref(BindClass)),
            _cV(_component_up_button, _uM({ type: "primary" }), _uM({
              default: withSlotCtx((): any[] => [
                _cE("text", _uM({ class: "wtu-sw1vrs-0 wtu-1im7ya9-1" }), " 主要按钮 ")
              ]),
              _: 1 /* STABLE */
            })),
            _cE("view", _uM({ class: "wtu-npeq5m-2 wtu-qo6ov1-3 wtu-1wqxopl-4 issue-1002-probe" }), [
              _cE("text", _uM({ class: "wtu-1o2o74y-5 wtu-whql8o-6" }), "issue-1002 text-xs"),
              _cE("text", _uM({ class: "wtu-1k7bqiz-7 wtu-whql8o-6" }), "issue-1002 text-sm"),
              _cE("text", _uM({ class: "wtu-16eykte-8 wtu-whql8o-6" }), "issue-1002 text-base"),
              _cE("text", _uM({ class: "wtu-1kgtd4b-9 wtu-whql8o-6" }), "issue-1002 text-xl"),
              _cE("view", _uM({ class: "wtu-1kns6sl-a wtu-no23xs-b wtu-1g2ghcv-c wtu-1h9zz9y-d wtu-1fxevz5-e" })),
              _cE("text", _uM({ class: "issue-1002-apply" }), "issue-1002 scoped apply")
            ]),
            _cE("view", _uM({ class: "issue-902-theme-probe issue-902-theme-scope wtu-yokg53-f wtu-1wqxopl-4 wtu-whql8o-6" }), [
              _cE("text", null, "issue 902 theme variable")
            ]),
            _cE("view", _uM({ class: "template-corpus-card wtu-3a2iag-g wtu-jd0vpj-h wtu-ciw2dx-i wtu-18t9bml-j wtu-182yzfd-k wtu-1jbz3ca-l wtu-c2k5s2-m wtu-extyql-n wtu-1l87n62-o wtu-1js87gs-p wtu-whql8o-6 wtu-1xa2dkq-q wx_cbg-blue-500 not-wx_cbg-red-500 any-hover_cbg-slate-800" }), [
              _cE("view", _uM({ class: "template-corpus-radial wtu-11jmcfc-r wtu-17r68ei-s wtu-1vp3mep-t wtu-11wa8j1-u" }), [
                _cE("text", null, "template corpus radial")
              ]),
              _cE("view", _uM({ class: "template-corpus-space wtu-1uyfxo2-v" }), [
                _cE("view", _uM({ class: "wtu-u3sk51-w wtu-nl7mxc-x wtu-xy1mqn-y wtu-11l2up2-z wtu-11fqucj-10 wtu-1y1zuzc-11" }), [
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
            _cE("view", _uM({ class: "wtu-t353x5-12 wtu-npeq5m-2 wtu-lb36wo-13 wtu-uhfqvn-14 wtu-sir76g-15" })),
            _cE("text", _uM({ class: "wtu-1kgtd4b-9 wtu-12ejmrm-16" }), " 写法示例Start! "),
            _cE("view", _uM({ class: "wtu-1i029eu-17 wtu-3a2iag-g wtu-jd0vpj-h wtu-u0kjb1-18" }), [
              _cE("text", _uM({ class: "wtu-162mnqq-19 wtu-11vxfoi-1a wtu-1fxevz5-e wtu-11b3903-1b wtu-6d0iwi-1c wtu-whql8o-6" }), " 圆角+背景+文本 "),
              _cE("view", _uM({ class: "wtu-qtmlvq-1d" }), [
                _cE("button", _uM({
                  class: _nC(["wtu-azlpjx-1e wtu-whql8o-6", unref(buttonClass)]),
                  onClick: () => {setGlobalNum(unref(globalNum) + 1)}
                }), " click here to inc " + _tD(unref(globalNum)), 11 /* TEXT, CLASS, PROPS */, ["onClick"])
              ]),
              _cE("view", _uM({ class: "test" }), [
                _cE("text", _uM({ class: "wtu-zdv8qa-1f wtu-6d0iwi-1c" }), " @apply 多端写法示例 ")
              ]),
              _cE("view", _uM({ class: "theme-mode-demo wtu-rnleyn-1g wtu-195xlus-1h wtu-nl7mxc-x wtu-x42tnq-1i wtu-1113nb4-1j wtu-8cakgy-1k system-dark_cbg-slate-900 system-dark_ctext-slate-100 dark_cbg-zinc-900 dark_ctext-zinc-50" }), [
                _cE("text", null, "uni-app x Tailwind CSS v4 system dark"),
                _cE("view", _uM({ class: "theme-dark wtu-r3m7kp-1l wtu-195xlus-1h wtu-nl7mxc-x wtu-xy1mqn-y wtu-11b3903-1b wtu-8cakgy-1k dark_cbg-zinc-950 dark_ctext-zinc-50" }), [
                  _cE("text", null, "uni-app x Tailwind CSS v4 manual dark")
                ])
              ]),
              _cV(unref(TButton), _uM({
                "t-class": "wtu-za16cx-1m wtu-avt5s5-1n",
                "t-class-content": "wtu-g3fp33-1o"
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
const GenSrcPagesIndexIndexStyles = [_uM([["content", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["paddingTop", "32rpx"], ["paddingBottom", "32rpx"]]))], ["test", _pS(_uM([["marginTop", "24rpx"], ["display", "flex"], ["height", 100], ["width", 222.222], ["alignItems", "center"], ["justifyContent", "center"], ["borderTopLeftRadius", 40], ["borderTopRightRadius", 40], ["borderBottomRightRadius", 40], ["borderBottomLeftRadius", 40], ["backgroundColor", "rgba(49,237,216,0.54)"]]))], ["issue-1002-apply", _pS(_uM([["borderTopLeftRadius", 9999], ["borderTopRightRadius", 9999], ["borderBottomRightRadius", 9999], ["borderBottomLeftRadius", 9999], ["backgroundColor", "#164e63"], ["fontSize", "24rpx"], ["lineHeight", 1.33333], ["color", "#ffffff"]]))], ["wtu-sw1vrs-0", _pS(_uM([["color", "#000000"]]))], ["wtu-1im7ya9-1", _pS(_uM([["fontSize", 20]]))], ["wtu-npeq5m-2", _pS(_uM([["width", "100%"]]))], ["wtu-qo6ov1-3", _pS(_uM([["backgroundColor", "#164e63"]]))], ["wtu-1wqxopl-4", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["wtu-1o2o74y-5", _pS(_uM([["fontSize", "24rpx"], ["lineHeight", 1.33333]]))], ["wtu-whql8o-6", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1k7bqiz-7", _pS(_uM([["fontSize", "28rpx"], ["lineHeight", 1.42857]]))], ["wtu-16eykte-8", _pS(_uM([["fontSize", "32rpx"], ["lineHeight", 1.5]]))], ["wtu-1kgtd4b-9", _pS(_uM([["fontSize", "40rpx"], ["lineHeight", 1.4]]))], ["wtu-1kns6sl-a", _pS(_uM([["marginTop", 8]]))], ["wtu-no23xs-b", _pS(_uM([["height", 48]]))], ["wtu-1g2ghcv-c", _pS(_uM([["width", 48]]))], ["wtu-1h9zz9y-d", _pS(_uM([["borderTopLeftRadius", 9999], ["borderTopRightRadius", 9999], ["borderBottomRightRadius", 9999], ["borderBottomLeftRadius", 9999]]))], ["wtu-1fxevz5-e", _pS(_uM([["backgroundColor", "#f21903"]]))], ["wtu-yokg53-f", _pS(_uM([["backgroundColor", "var(--theme-color)"]]))], ["wtu-3a2iag-g", _pS(_uM([["display", "flex"]]))], ["wtu-jd0vpj-h", _pS(_uM([["flexDirection", "column"]]))], ["wtu-18t9bml-j", _pS(_uM([["borderTopLeftRadius", 28], ["borderTopRightRadius", 28], ["borderBottomRightRadius", 28], ["borderBottomLeftRadius", 28]]))], ["wtu-182yzfd-k", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1jbz3ca-l", _pS(_uM([["borderTopColor", "rgb(226,232,240)"], ["borderRightColor", "rgb(226,232,240)"], ["borderBottomColor", "rgb(226,232,240)"], ["borderLeftColor", "rgb(226,232,240)"]]))], ["wtu-c2k5s2-m", _pS(_uM([["--tw-gradient-stops", "initial"], ["--tw-gradient-position", "to bottom right"], ["backgroundImage", "linear-gradient(var(--tw-gradient-stops))"]]))], ["wtu-extyql-n", _pS(_uM([["--tw-gradient-position", "initial"], ["--tw-gradient-from-position", "0%"], ["--tw-gradient-to", "#0000"], ["--tw-gradient-to-position", "100%"], ["--tw-gradient-from", "var(--color-slate-900, rgb(15, 23, 43))"], ["--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position)), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )"]]))], ["wtu-1l87n62-o", _pS(_uM([["--tw-gradient-position", "initial"], ["--tw-gradient-from", "#0000"], ["--tw-gradient-from-position", "0%"], ["--tw-gradient-to-position", "100%"], ["--tw-gradient-to", "var(--color-slate-700, rgb(49, 65, 88))"], ["--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position)), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )"]]))], ["wtu-1js87gs-p", _pS(_uM([["paddingTop", "32rpx"], ["paddingRight", "32rpx"], ["paddingBottom", "32rpx"], ["paddingLeft", "32rpx"]]))], ["wtu-1xa2dkq-q", _pS(_uM([["--tw-inset-shadow", "0 0 #0000"], ["--tw-inset-ring-shadow", "0 0 #0000"], ["--tw-ring-offset-shadow", "0 0 #0000"], ["--tw-ring-shadow", "0 0 #0000"], ["--tw-shadow", "0 20px 25px -5px var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["wtu-11jmcfc-r", _pS(_uM([["backgroundColor", "#e0f2fe"]]))], ["wtu-17r68ei-s", _pS(_uM([["paddingLeft", 48], ["paddingRight", 48]]))], ["wtu-1vp3mep-t", _pS(_uM([["paddingTop", 24], ["paddingBottom", 24]]))], ["wtu-11wa8j1-u", _pS(_uM([["color", "#123456"]]))], ["wtu-u3sk51-w", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["wtu-nl7mxc-x", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-xy1mqn-y", _pS(_uM([["paddingLeft", "24rpx"], ["paddingRight", "24rpx"]]))], ["wtu-11l2up2-z", _pS(_uM([["paddingTop", "8rpx"], ["paddingBottom", "8rpx"]]))], ["wtu-11fqucj-10", _pS(_uM([["fontSize", 26]]))], ["wtu-1y1zuzc-11", _pS(_uM([["color", "rgb(49,65,88)"]]))], ["wtu-t353x5-12", _pS(_uM([["marginTop", "24rpx"], ["marginBottom", "24rpx"]]))], ["wtu-lb36wo-13", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 1]]))], ["wtu-uhfqvn-14", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-sir76g-15", _pS(_uM([["borderTopColor", "rgb(229,231,235)"], ["borderRightColor", "rgb(229,231,235)"], ["borderBottomColor", "rgb(229,231,235)"], ["borderLeftColor", "rgb(229,231,235)"]]))], ["wtu-12ejmrm-16", _pS(_uM([["color", "rgba(74,85,101,0.95)"]]))], ["wtu-1i029eu-17", _pS(_uM([["marginTop", 13.14758]]))], ["wtu-u0kjb1-18", _pS(_uM([["alignItems", "center"]]))], ["wtu-162mnqq-19", _pS(_uM([["width", "256rpx"]]))], ["wtu-11vxfoi-1a", _pS(_uM([["borderTopLeftRadius", "12rpx"], ["borderTopRightRadius", "12rpx"], ["borderBottomRightRadius", "12rpx"], ["borderBottomLeftRadius", "12rpx"]]))], ["wtu-11b3903-1b", _pS(_uM([["paddingTop", "16rpx"], ["paddingBottom", "16rpx"]]))], ["wtu-6d0iwi-1c", _pS(_uM([["textAlign", "center"]]))], ["wtu-qtmlvq-1d", _pS(_uM([["marginTop", "24rpx"]]))], ["wtu-azlpjx-1e", _pS(_uM([["width", "512rpx"]]))], ["wtu-zdv8qa-1f", _pS(_uM([["color", "#da0e3c"]]))], ["wtu-rnleyn-1g", _pS(_uM([["marginTop", "32rpx"]]))], ["wtu-195xlus-1h", _pS(_uM([["borderTopLeftRadius", "8rpx"], ["borderTopRightRadius", "8rpx"], ["borderBottomRightRadius", "8rpx"], ["borderBottomLeftRadius", "8rpx"]]))], ["wtu-x42tnq-1i", _pS(_uM([["paddingLeft", "32rpx"], ["paddingRight", "32rpx"]]))], ["wtu-1113nb4-1j", _pS(_uM([["paddingTop", "24rpx"], ["paddingBottom", "24rpx"]]))], ["wtu-8cakgy-1k", _pS(_uM([["color", "rgb(15,23,43)"]]))], ["wtu-r3m7kp-1l", _pS(_uM([["marginTop", "16rpx"]]))], ["wtu-za16cx-1m", _pS(_uM([["backgroundColor", "#0977ee"]]))], ["wtu-avt5s5-1n", _pS(_uM([["fontSize", "31rpx"]]))], ["wtu-g3fp33-1o", _pS(_uM([["paddingLeft", "29rpx"], ["paddingRight", "29rpx"]]))], ["wtu-1w7rkgd-1p", _pS(_uM([["backgroundColor", "#68c828"]]))], ["wtu-14syvt9-1q", _pS(_uM([["width", 323]]))], ["wtu-11d5tnd-1r", _pS(_uM([["height", 45]]))], ["wtu-1sza2eb-1s", _pS(_uM([["--tw-leading", "45px"], ["lineHeight", "45px"]]))]])]
