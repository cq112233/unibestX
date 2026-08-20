import _easycom_uni_icons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'
import Card from './Card.uvue';
import { computed } from 'vue';
import { useAppStore } from '@/src/store/index.uts';
import { $t, setTabbarItem } from '@/src/utils/i18n';
import { t as uViewT } from '@/uni_modules/uview-ultra/libs/i18n/index.uts';


const __sfc__ = defineComponent({
  __name: 'LangSwitchCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const appStore = useAppStore();

const langTitle = computed((): string => $t('basic.langTitle'));
const langPreview = computed((): string => $t('basic.langPreview'));
const welcomeText = computed((): string => $t('message.welcome'));
const helloText = computed((): string => $t('message.hello', { msg: 'hi' }));
const uviewPreview = computed((): string => $t('basic.uviewPreview'));

// 使用 computed 响应式获取当前 i18n 对象的语言环境
const currentLocale = computed((): string => {
  return appStore.state.locale;
});

const isZhCN = computed((): boolean => {
  return currentLocale.value == 'zh-CN';
});

const isEnUS = computed((): boolean => {
  return currentLocale.value == 'en-US';
});

const uViewChooseDates = computed((): string => {
  const _dummy = currentLocale.value;
  return uViewT('up.calendar.chooseDates', {} as UTSJSONObject);
});

const uViewConfirm = computed((): string => {
  const _dummy = currentLocale.value;
  return uViewT('up.common.confirm', {} as UTSJSONObject);
});

const uViewStart = computed((): string => {
  const _dummy = currentLocale.value;
  return uViewT('up.common.start', {} as UTSJSONObject);
});

const uViewEnd = computed((): string => {
  const _dummy = currentLocale.value;
  return uViewT('up.common.end', {} as UTSJSONObject);
});

function switchLanguage(lang: string) {
  appStore.setLocale(lang);
  setTabbarItem();

  uni.showToast({
    title: $t('message.switch_success'),
    icon: 'none',
    duration: 1500
  });
}

return (): any | null => {

const _component_uni_icons = resolveEasyComponent("uni-icons",_easycom_uni_icons)

  return _cV(unref(Card), _uM({ title: langTitle.value }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-zeqk4z-0 wtu-1py2ikc-1 wtu-1aqjbfx-2 wtu-w8jmyu-3 wtu-opyasy-4 wtu-13g5z0w-5" }), [
        _cE("text", _uM({ class: "wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8" }), _tD(langPreview.value), 1 /* TEXT */),
        _cE("text", _uM({ class: "wtu-f1cbux-9 wtu-tg5bk5-a wtu-uqoqln-b" }), _tD(welcomeText.value), 1 /* TEXT */),
        _cE("text", _uM({ class: "wtu-1wrjlrz-c wtu-apgfmb-d wtu-1nykptg-e" }), _tD(helloText.value), 1 /* TEXT */),
        _cE("view", _uM({ class: "wtu-16287mo-f wtu-u63ba2-g wtu-ui2fkq-h" })),
        _cE("view", null, [
          _cE("text", _uM({ class: "wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8" }), _tD(uviewPreview.value), 1 /* TEXT */),
          _cE("view", _uM({ class: "wtu-1xpqddw-i wtu-1t7tavk-j wtu-uadth0-k" }), [
            _cE("text", _uM({ class: "wtu-3p92ns-l wtu-zus43i-m wtu-grn2i8-n wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-11kd58a-s wtu-l3s08e-t" }), _tD(uViewChooseDates.value), 1 /* TEXT */),
            _cE("text", _uM({ class: "wtu-3p92ns-l wtu-6g0b4e-u wtu-en5wvg-v wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-11kd58a-s wtu-l3s08e-t" }), _tD(uViewConfirm.value), 1 /* TEXT */),
            _cE("text", _uM({ class: "wtu-3p92ns-l wtu-ky8bvg-w wtu-14ion4g-x wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-l3s08e-t" }), _tD(uViewStart.value) + " / " + _tD(uViewEnd.value), 1 /* TEXT */)
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-1xpqddw-i wtu-1t7tavk-j wtu-1fek2j3-y wtu-17qg8e9-z",
        onClick: () => {switchLanguage('zh-CN')}
      }), [
        _cE("view", _uM({ class: "wtu-1xpqddw-i wtu-1t7tavk-j" }), [
          _cE("text", _uM({ class: "wtu-6xv57u-10 wtu-1au22ic-11 wtu-re8qpd-r" }), "简体中文")
        ]),
        _cE("view", _uM({ class: "wtu-1xpqddw-i wtu-1t7tavk-j" }), [
          isTrue(isZhCN.value)
            ? _cV(_component_uni_icons, _uM({
                key: 0,
                type: "checkmarkempty",
                size: "20",
                style: _nS(_uM({"color":"#3b82f6"}))
              }), null, 8 /* PROPS */, ["style"])
            : _cC("v-if", true)
        ])
      ], 8 /* PROPS */, ["onClick"]),
      _cE("view", _uM({ class: "wtu-16287mo-f wtu-u63ba2-g" })),
      _cE("view", _uM({
        class: "wtu-1xpqddw-i wtu-1t7tavk-j wtu-1fek2j3-y wtu-17qg8e9-z",
        onClick: () => {switchLanguage('en-US')}
      }), [
        _cE("view", _uM({ class: "wtu-1xpqddw-i wtu-1t7tavk-j" }), [
          _cE("text", _uM({ class: "wtu-6xv57u-10 wtu-1au22ic-11 wtu-re8qpd-r" }), "English")
        ]),
        _cE("view", _uM({ class: "wtu-1xpqddw-i wtu-1t7tavk-j" }), [
          isTrue(isEnUS.value)
            ? _cV(_component_uni_icons, _uM({
                key: 0,
                type: "checkmarkempty",
                size: "20",
                style: _nS(_uM({"color":"#3b82f6"}))
              }), null, 8 /* PROPS */, ["style"])
            : _cC("v-if", true)
        ])
      ], 8 /* PROPS */, ["onClick"])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["title"])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsLangSwitchCardStyles = [_uM([["wtu-zeqk4z-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-1py2ikc-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-1aqjbfx-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-w8jmyu-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-opyasy-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-13g5z0w-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-1vqucrp-6", _pS(_uM([["fontSize", 12]]))], ["wtu-9qob8-7", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-1hy0bj4-8", _pS(_uM([["marginBottom", 6]]))], ["wtu-f1cbux-9", _pS(_uM([["fontSize", 16]]))], ["wtu-tg5bk5-a", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-uqoqln-b", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1wrjlrz-c", _pS(_uM([["fontSize", 14]]))], ["wtu-apgfmb-d", _pS(_uM([["color", "#475569"]]))], ["wtu-1nykptg-e", _pS(_uM([["marginTop", 8]]))], ["wtu-16287mo-f", _pS(_uM([["height", 1]]))], ["wtu-u63ba2-g", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-ui2fkq-h", _pS(_uM([["marginTop", 12], ["marginBottom", 12]]))], ["wtu-1xpqddw-i", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1t7tavk-j", _pS(_uM([["alignItems", "center"]]))], ["wtu-uadth0-k", _pS(_uM([["flexWrap", "wrap"]]))], ["wtu-3p92ns-l", _pS(_uM([["fontSize", 13]]))], ["wtu-zus43i-m", _pS(_uM([["color", "#2563eb"]]))], ["wtu-grn2i8-n", _pS(_uM([["backgroundColor", "#eff6ff"]]))], ["wtu-j3s3ch-o", _pS(_uM([["paddingLeft", 8], ["paddingRight", 8]]))], ["wtu-1x56in2-p", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["wtu-8n2rm8-q", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["wtu-re8qpd-r", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-11kd58a-s", _pS(_uM([["marginRight", 8]]))], ["wtu-l3s08e-t", _pS(_uM([["marginBottom", 4]]))], ["wtu-6g0b4e-u", _pS(_uM([["color", "#059669"]]))], ["wtu-en5wvg-v", _pS(_uM([["backgroundColor", "#ecfdf5"]]))], ["wtu-ky8bvg-w", _pS(_uM([["color", "#d97706"]]))], ["wtu-14ion4g-x", _pS(_uM([["backgroundColor", "#fffbe2"]]))], ["wtu-1fek2j3-y", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-17qg8e9-z", _pS(_uM([["paddingTop", 12], ["paddingBottom", 12]]))], ["wtu-6xv57u-10", _pS(_uM([["fontSize", 15]]))], ["wtu-1au22ic-11", _pS(_uM([["color", "#334155"]]))]])]
