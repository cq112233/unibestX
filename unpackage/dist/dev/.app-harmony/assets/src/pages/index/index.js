import { _ as __easycom_2 } from "../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { W as WeappTailwindcss } from "../../components/WeappTailwindcss.js";
import { B as BindClass } from "../../components/BindClass.js";
import { T as TButton } from "../../components/t-button/t-button.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../utils/toast.js";
import "../../../static/logo-text-colorful.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const buttonColors = [
      "bg-_b_h000_B",
      "bg-_b_h111_B",
      "bg-_b_h222_B",
      "bg-_b_h333_B",
      "bg-_b_h444_B",
      "bg-_b_h555_B",
      "bg-_b_h666_B",
      "bg-_b_h777_B",
      "bg-_b_h888_B",
      "bg-_b_h999_B",
      "bg-_b_haaa_B",
      "bg-_b_hbbb_B",
      "bg-_b_hccc_B",
      "bg-_b_hddd_B",
      "bg-_b_heee_B",
      "bg-_b_hfff_B"
    ];
    const globalNum = ref(0);
    const buttonClass = computed(() => {
      const index2 = globalNum.value % buttonColors.length;
      return buttonColors[index2];
    });
    const templateCorpusDynamicClass = computed(() => {
      return "template-corpus-dynamic wtu-1w7rkgd-1p wtu-1y1zuzc-11 wtu-11fqucj-10 wtu-14syvt9-1q wtu-11d5tnd-1r wtu-1sza2eb-1s wtu-xy1mqn-y";
    });
    function setGlobalNum(num) {
      globalNum.value = num;
    }
    onLoad(() => {
      uni.__f__("log", "at src/pages/index/index.uvue:41", "欢迎使用 weapp-tailwindcss 模板");
    });
    const __returned__ = { buttonColors, globalNum, buttonClass, templateCorpusDynamicClass, setGlobalNum, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    }, get WeappTailwindcss() {
      return WeappTailwindcss;
    }, get BindClass() {
      return BindClass;
    }, get TButton() {
      return TButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"content":{"":{"display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"32rpx","paddingBottom":"32rpx"}},"test":{"":{"marginTop":"24rpx","display":"flex","height":100,"width":222.222,"alignItems":"center","justifyContent":"center","borderTopLeftRadius":40,"borderTopRightRadius":40,"borderBottomRightRadius":40,"borderBottomLeftRadius":40,"backgroundColor":"rgba(49,237,216,0.54)","borderRadius":40}},"issue-1002-apply":{"":{"borderTopLeftRadius":9999,"borderTopRightRadius":9999,"borderBottomRightRadius":9999,"borderBottomLeftRadius":9999,"backgroundColor":"#164e63","fontSize":"24rpx","lineHeight":"1.33333","color":"#fff","borderRadius":9999}},"wtu-sw1vrs-0":{"":{"color":"#000000"}},"wtu-1im7ya9-1":{"":{"fontSize":20}},"wtu-npeq5m-2":{"":{"width":"100%"}},"wtu-qo6ov1-3":{"":{"backgroundColor":"#164e63"}},"wtu-1wqxopl-4":{"":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"padding":12}},"wtu-1o2o74y-5":{"":{"fontSize":"24rpx","lineHeight":"1.33333"}},"wtu-whql8o-6":{"":{"color":"#fff"}},"wtu-1k7bqiz-7":{"":{"fontSize":"28rpx","lineHeight":"1.42857"}},"wtu-16eykte-8":{"":{"fontSize":"32rpx","lineHeight":"1.5"}},"wtu-1kgtd4b-9":{"":{"fontSize":"40rpx","lineHeight":"1.4"}},"wtu-1kns6sl-a":{"":{"marginTop":8}},"wtu-no23xs-b":{"":{"height":48}},"wtu-1g2ghcv-c":{"":{"width":48}},"wtu-1h9zz9y-d":{"":{"borderTopLeftRadius":9999,"borderTopRightRadius":9999,"borderBottomRightRadius":9999,"borderBottomLeftRadius":9999,"borderRadius":9999}},"wtu-1fxevz5-e":{"":{"backgroundColor":"#f21903"}},"wtu-yokg53-f":{"":{"backgroundColor":"var(--theme-color)"}},"wtu-3a2iag-g":{"":{"display":"flex"}},"wtu-jd0vpj-h":{"":{"flexDirection":"column"}},"wtu-18t9bml-j":{"":{"borderTopLeftRadius":28,"borderTopRightRadius":28,"borderBottomRightRadius":28,"borderBottomLeftRadius":28,"borderRadius":28}},"wtu-182yzfd-k":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"-TwBorderStyle":"solid","borderStyle":"var(--tw-border-style)","borderWidth":1}},"wtu-1jbz3ca-l":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0","borderColor":"rgb(226,232,240)"}},"wtu-c2k5s2-m":{"":{"--tw-gradient-stops":"initial","--tw-gradient-position":"to bottom right","backgroundImage":"linear-gradient(var(--tw-gradient-stops))","-TwGradientStops":"initial","-TwGradientPosition":"to bottom right"}},"wtu-extyql-n":{"":{"--tw-gradient-position":"initial","--tw-gradient-from-position":"0%","--tw-gradient-to":"#0000","--tw-gradient-to-position":"100%","--tw-gradient-from":"var(--color-slate-900, rgb(15, 23, 43))","--tw-gradient-stops":"var(--tw-gradient-via-stops, var(--tw-gradient-position)), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )","-TwGradientPosition":"initial","-TwGradientFromPosition":"0%","-TwGradientTo":"#0000","-TwGradientToPosition":"100%","-TwGradientFrom":"var(--color-slate-900,rgb(15,23,43))","-TwGradientStops":"var(--tw-gradient-via-stops,var(--tw-gradient-position)),var(--tw-gradient-from) var(--tw-gradient-from-position,),var(--tw-gradient-to) var(--tw-gradient-to-position,)"}},"wtu-1l87n62-o":{"":{"--tw-gradient-position":"initial","--tw-gradient-from":"#0000","--tw-gradient-from-position":"0%","--tw-gradient-to-position":"100%","--tw-gradient-to":"var(--color-slate-700, rgb(49, 65, 88))","--tw-gradient-stops":"var(--tw-gradient-via-stops, var(--tw-gradient-position)), var(--tw-gradient-from) var(--tw-gradient-from-position, ), var(--tw-gradient-to) var(--tw-gradient-to-position, )","-TwGradientPosition":"initial","-TwGradientFrom":"#0000","-TwGradientFromPosition":"0%","-TwGradientToPosition":"100%","-TwGradientTo":"var(--color-slate-700,rgb(49,65,88))","-TwGradientStops":"var(--tw-gradient-via-stops,var(--tw-gradient-position)),var(--tw-gradient-from) var(--tw-gradient-from-position,),var(--tw-gradient-to) var(--tw-gradient-to-position,)"}},"wtu-1js87gs-p":{"":{"paddingTop":"32rpx","paddingRight":"32rpx","paddingBottom":"32rpx","paddingLeft":"32rpx","padding":"32rpx"}},"wtu-1xa2dkq-q":{"":{"--tw-inset-shadow":"0 0 #0000","--tw-inset-ring-shadow":"0 0 #0000","--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 20px 25px -5px var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))","boxShadow":"var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","-TwInsetShadow":"0 0 #0000","-TwInsetRingShadow":"0 0 #0000","-TwRingOffsetShadow":"0 0 #0000","-TwRingShadow":"0 0 #0000","-TwShadow":"0 20px 25px -5px var(--tw-shadow-color,rgba(0,0,0,0.1)),0 8px 10px -6px var(--tw-shadow-color,rgba(0,0,0,0.1))"}},"wtu-11jmcfc-r":{"":{"backgroundColor":"#e0f2fe"}},"wtu-17r68ei-s":{"":{"paddingLeft":48,"paddingRight":48}},"wtu-1vp3mep-t":{"":{"paddingTop":24,"paddingBottom":24}},"wtu-11wa8j1-u":{"":{"color":"#123456"}},"wtu-u3sk51-w":{"":{"borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20,"borderRadius":20}},"wtu-nl7mxc-x":{"":{"backgroundColor":"#fff"}},"wtu-xy1mqn-y":{"":{"paddingLeft":"24rpx","paddingRight":"24rpx"}},"wtu-11l2up2-z":{"":{"paddingTop":"8rpx","paddingBottom":"8rpx"}},"wtu-11fqucj-10":{"":{"fontSize":26}},"wtu-1y1zuzc-11":{"":{"color":"rgb(49,65,88)"}},"wtu-t353x5-12":{"":{"marginTop":"24rpx","marginBottom":"24rpx"}},"wtu-lb36wo-13":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderTopWidth":1,"-TwBorderStyle":"solid"}},"wtu-uhfqvn-14":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","-TwBorderStyle":"solid","borderStyle":"solid"}},"wtu-sir76g-15":{"":{"borderTopColor":"#e5e7eb","borderRightColor":"#e5e7eb","borderBottomColor":"#e5e7eb","borderLeftColor":"#e5e7eb","borderColor":"rgb(229,231,235)"}},"wtu-12ejmrm-16":{"":{"color":"rgba(74,85,101,0.95)"}},"wtu-1i029eu-17":{"":{"marginTop":13.14758}},"wtu-u0kjb1-18":{"":{"alignItems":"center"}},"wtu-162mnqq-19":{"":{"width":"256rpx"}},"wtu-11vxfoi-1a":{"":{"borderTopLeftRadius":"12rpx","borderTopRightRadius":"12rpx","borderBottomRightRadius":"12rpx","borderBottomLeftRadius":"12rpx","borderRadius":"12rpx"}},"wtu-11b3903-1b":{"":{"paddingTop":"16rpx","paddingBottom":"16rpx"}},"wtu-6d0iwi-1c":{"":{"textAlign":"center"}},"wtu-qtmlvq-1d":{"":{"marginTop":"24rpx"}},"wtu-azlpjx-1e":{"":{"width":"512rpx"}},"wtu-zdv8qa-1f":{"":{"color":"#da0e3c"}},"wtu-rnleyn-1g":{"":{"marginTop":"32rpx"}},"wtu-195xlus-1h":{"":{"borderTopLeftRadius":"8rpx","borderTopRightRadius":"8rpx","borderBottomRightRadius":"8rpx","borderBottomLeftRadius":"8rpx","borderRadius":"8rpx"}},"wtu-x42tnq-1i":{"":{"paddingLeft":"32rpx","paddingRight":"32rpx"}},"wtu-1113nb4-1j":{"":{"paddingTop":"24rpx","paddingBottom":"24rpx"}},"wtu-8cakgy-1k":{"":{"color":"rgb(15,23,43)"}},"wtu-r3m7kp-1l":{"":{"marginTop":"16rpx"}},"wtu-za16cx-1m":{"":{"backgroundColor":"#0977ee"}},"wtu-avt5s5-1n":{"":{"fontSize":"31rpx"}},"wtu-g3fp33-1o":{"":{"paddingLeft":"29rpx","paddingRight":"29rpx"}},"wtu-1w7rkgd-1p":{"":{"backgroundColor":"#68c828"}},"wtu-14syvt9-1q":{"":{"width":323}},"wtu-11d5tnd-1r":{"":{"height":45}},"wtu-1sza2eb-1s":{"":{"--tw-leading":"45px","lineHeight":45,"-TwLeading":45}},"bg-_b_h000_B":{"":{"backgroundColor":"#000"}},"bg-_b_h111_B":{"":{"backgroundColor":"#111"}},"bg-_b_h222_B":{"":{"backgroundColor":"#222"}},"bg-_b_h333_B":{"":{"backgroundColor":"#333"}},"bg-_b_h444_B":{"":{"backgroundColor":"#444"}},"bg-_b_h555_B":{"":{"backgroundColor":"#555"}},"bg-_b_h666_B":{"":{"backgroundColor":"#666"}},"bg-_b_h777_B":{"":{"backgroundColor":"#777"}},"bg-_b_h888_B":{"":{"backgroundColor":"#888"}},"bg-_b_h999_B":{"":{"backgroundColor":"#999"}},"bg-_b_haaa_B":{"":{"backgroundColor":"#aaa"}},"bg-_b_hbbb_B":{"":{"backgroundColor":"#bbb"}},"bg-_b_hccc_B":{"":{"backgroundColor":"#ccc"}},"bg-_b_hddd_B":{"":{"backgroundColor":"#ddd"}},"bg-_b_heee_B":{"":{"backgroundColor":"#eee"}},"bg-_b_hfff_B":{"":{"backgroundColor":"#fff"}},"flex":{"":{"display":"flex"}},"text-xs":{"":{"fontSize":"var(--text-xs)","lineHeight":"var(--tw-leading,var(--text-xs--line-height))"}},"text-sm":{"":{"fontSize":"var(--text-sm)","lineHeight":"var(--tw-leading,var(--text-sm--line-height))"}},"text-base":{"":{"fontSize":"var(--text-base)","lineHeight":"var(--tw-leading,var(--text-base--line-height))"}},"text-xl":{"":{"fontSize":"var(--text-xl)","lineHeight":"var(--tw-leading,var(--text-xl--line-height))"}},"issue-902-theme-scope":{"":{"--theme-color":"#16a34a","-ThemeColor":"#16a34a"}},"harmony_cbg-_b_hc64b4b_B":{"":{"backgroundColor":"#c64b4b"}},"template-corpus-apply":{"":{"display":"flex","alignItems":"center","borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20,"backgroundColor":"#9e58e9","paddingLeft":18,"paddingRight":18,"paddingTop":10,"paddingBottom":10,"color":"#fff","fontSize":26,"borderRadius":20,"paddingInline":18,"paddingBlock":10}},"dark_cbg-zinc-900":{".theme-dark":{"backgroundColor":"rgb(24,24,27)"},"":{"backgroundColor":"var(--color-zinc-900)"}},"dark_ctext-zinc-50":{".theme-dark":{"color":"rgb(250,250,250)"},"":{"color":"var(--color-zinc-50)"}},"dark_cbg-zinc-950":{".theme-dark":{"backgroundColor":"rgb(9,9,11)"},"":{"backgroundColor":"var(--color-zinc-950)"}},"wtu-ciw2dx-i":{"":{"gap":"calc(var(--spacing) * 3)"}},"system-dark_cbg-slate-900":{"":{"backgroundColor":"var(--color-slate-900)"}},"system-dark_ctext-slate-100":{"":{"color":"var(--color-slate-100)"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createVNode: _createVNode, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, normalizeClass: _normalizeClass, toDisplayString: _toDisplayString, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "首页",
        "background-color": "#1abc9c",
        "background-color-content": "#1abc9c"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "content" }, [
            _createVNode($setup["WeappTailwindcss"]),
            _createVNode($setup["BindClass"]),
            _createVNode(_component_up_button, { type: "primary" }, {
              default: _withCtx(() => [
                _createElementVNode("text", { class: "wtu-sw1vrs-0 wtu-1im7ya9-1" }, " 主要按钮 ")
              ]),
              _: 1
              /* STABLE */
            }),
            _createElementVNode("view", { class: "wtu-npeq5m-2 wtu-qo6ov1-3 wtu-1wqxopl-4 issue-1002-probe" }, [
              _createElementVNode("text", { class: "wtu-1o2o74y-5 wtu-whql8o-6" }, "issue-1002 text-xs"),
              _createElementVNode("text", { class: "wtu-1k7bqiz-7 wtu-whql8o-6" }, "issue-1002 text-sm"),
              _createElementVNode("text", { class: "wtu-16eykte-8 wtu-whql8o-6" }, "issue-1002 text-base"),
              _createElementVNode("text", { class: "wtu-1kgtd4b-9 wtu-whql8o-6" }, "issue-1002 text-xl"),
              _createElementVNode("view", { class: "wtu-1kns6sl-a wtu-no23xs-b wtu-1g2ghcv-c wtu-1h9zz9y-d wtu-1fxevz5-e" }),
              _createElementVNode("text", { class: "issue-1002-apply" }, "issue-1002 scoped apply")
            ]),
            _createElementVNode("view", { class: "issue-902-theme-probe issue-902-theme-scope wtu-yokg53-f wtu-1wqxopl-4 wtu-whql8o-6" }, [
              _createElementVNode("text", null, "issue 902 theme variable")
            ]),
            _createElementVNode("view", { class: "template-corpus-card wtu-3a2iag-g wtu-jd0vpj-h wtu-ciw2dx-i wtu-18t9bml-j wtu-182yzfd-k wtu-1jbz3ca-l wtu-c2k5s2-m wtu-extyql-n wtu-1l87n62-o wtu-1js87gs-p wtu-whql8o-6 wtu-1xa2dkq-q wx_cbg-blue-500 h5_cbg-green-500 harmony_cbg-_b_hc64b4b_B ios_cbg-_b_h0169f0_B android_cbg-_b_h2d6f08_B" }, [
              _createElementVNode("view", { class: "template-corpus-radial wtu-11jmcfc-r wtu-17r68ei-s wtu-1vp3mep-t wtu-11wa8j1-u" }, [
                _createElementVNode("text", null, "template corpus radial")
              ]),
              _createElementVNode("view", { class: "template-corpus-space wtu-1uyfxo2-v" }, [
                _createElementVNode("view", { class: "wtu-u3sk51-w wtu-nl7mxc-x wtu-xy1mqn-y wtu-11l2up2-z wtu-11fqucj-10 wtu-1y1zuzc-11" }, [
                  _createElementVNode("text", null, "space item 1")
                ]),
                _createElementVNode(
                  "view",
                  {
                    class: _normalizeClass($setup.templateCorpusDynamicClass)
                  },
                  [
                    _createElementVNode("text", null, "space item 2")
                  ],
                  2
                  /* CLASS */
                )
              ]),
              _createElementVNode("view", { class: "template-corpus-apply" }, [
                _createElementVNode("text", null, "apply corpus")
              ])
            ]),
            _createElementVNode("view", { class: "wtu-t353x5-12 wtu-npeq5m-2 wtu-lb36wo-13 wtu-uhfqvn-14 wtu-sir76g-15" }),
            _createElementVNode("text", { class: "wtu-1kgtd4b-9 wtu-12ejmrm-16" }, " 写法示例Start! "),
            _createElementVNode("view", { class: "wtu-1i029eu-17 wtu-3a2iag-g wtu-jd0vpj-h wtu-u0kjb1-18" }, [
              _createElementVNode("text", { class: "wtu-162mnqq-19 wtu-11vxfoi-1a wtu-1fxevz5-e wtu-11b3903-1b wtu-6d0iwi-1c wtu-whql8o-6" }, " 圆角+背景+文本 "),
              _createElementVNode("view", { class: "wtu-qtmlvq-1d" }, [
                _createElementVNode(
                  "button",
                  {
                    class: _normalizeClass(["wtu-azlpjx-1e wtu-whql8o-6", $setup.buttonClass]),
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.setGlobalNum($setup.globalNum + 1))
                  },
                  " click here to inc " + _toDisplayString($setup.globalNum),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              _createElementVNode("view", { class: "test" }, [
                _createElementVNode("text", { class: "wtu-zdv8qa-1f wtu-6d0iwi-1c" }, " @apply 多端写法示例 ")
              ]),
              _createElementVNode("view", { class: "theme-mode-demo wtu-rnleyn-1g wtu-195xlus-1h wtu-nl7mxc-x wtu-x42tnq-1i wtu-1113nb4-1j wtu-8cakgy-1k system-dark_cbg-slate-900 system-dark_ctext-slate-100 dark_cbg-zinc-900 dark_ctext-zinc-50" }, [
                _createElementVNode("text", null, "uni-app x Tailwind CSS v4 system dark"),
                _createElementVNode("view", { class: "theme-dark wtu-r3m7kp-1l wtu-195xlus-1h wtu-nl7mxc-x wtu-xy1mqn-y wtu-11b3903-1b wtu-8cakgy-1k dark_cbg-zinc-950 dark_ctext-zinc-50" }, [
                  _createElementVNode("text", null, "uni-app x Tailwind CSS v4 manual dark")
                ])
              ]),
              _createVNode($setup["TButton"], {
                "t-class": "wtu-za16cx-1m wtu-avt5s5-1n",
                "t-class-content": "wtu-g3fp33-1o"
              }, {
                default: _withCtx(() => [
                  _createElementVNode("text", null, "issue 977 t-class")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/index/index.uvue"]]);
export {
  index as default
};
//# sourceMappingURL=index.js.map
