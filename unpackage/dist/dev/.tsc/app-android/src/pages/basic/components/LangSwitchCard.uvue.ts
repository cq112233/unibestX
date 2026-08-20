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
  const dummy = currentLocale.value;
  return uViewT('up.calendar.chooseDates', {} as UTSJSONObject);
});

const uViewConfirm = computed((): string => {
  const dummy = currentLocale.value;
  return uViewT('up.common.confirm', {} as UTSJSONObject);
});

const uViewStart = computed((): string => {
  const dummy = currentLocale.value;
  return uViewT('up.common.start', {} as UTSJSONObject);
});

const uViewEnd = computed((): string => {
  const dummy = currentLocale.value;
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
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-9qob8-0 mb-6px" }), _tD(langPreview.value), 1 /* TEXT */),
        _cE("text", _uM({ class: "text-16px wtu-tg5bk5-1 wtu-uqoqln-2" }), _tD(welcomeText.value), 1 /* TEXT */),
        _cE("text", _uM({ class: "text-14px wtu-apgfmb-3 mt-8px" }), _tD(helloText.value), 1 /* TEXT */),
        _cE("view", _uM({ class: "mt-12px pt-12px border-top-width-1px border-top-style-solid border-top-color-[#f1f5f9]" }), [
          _cE("text", _uM({ class: "text-12px wtu-9qob8-0 mb-6px" }), _tD(uviewPreview.value), 1 /* TEXT */),
          _cE("view", _uM({ class: "wtu-1xpqddw-4 wtu-1t7tavk-5 wtu-uadth0-6" }), [
            _cE("text", _uM({ class: "text-13px wtu-zus43i-7 wtu-grn2i8-8 px-8px py-4px rounded-4px wtu-re8qpd-9 mr-8px mb-4px" }), _tD(uViewChooseDates.value), 1 /* TEXT */),
            _cE("text", _uM({ class: "text-13px wtu-6g0b4e-a wtu-en5wvg-b px-8px py-4px rounded-4px wtu-re8qpd-9 mr-8px mb-4px" }), _tD(uViewConfirm.value), 1 /* TEXT */),
            _cE("text", _uM({ class: "text-13px wtu-ky8bvg-c wtu-14ion4g-d px-8px py-4px rounded-4px wtu-re8qpd-9 mb-4px" }), _tD(uViewStart.value) + " / " + _tD(uViewEnd.value), 1 /* TEXT */)
          ])
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-1xpqddw-4 wtu-1t7tavk-5 wtu-1fek2j3-e py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-[#f1f5f9]",
        onClick: () => {switchLanguage('zh-CN')}
      }), [
        _cE("view", _uM({ class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }), [
          _cE("text", _uM({ class: "text-15px wtu-1au22ic-f wtu-re8qpd-9" }), "简体中文")
        ]),
        _cE("view", _uM({ class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }), [
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
      _cE("view", _uM({
        class: "wtu-1xpqddw-4 wtu-1t7tavk-5 wtu-1fek2j3-e py-12px",
        onClick: () => {switchLanguage('en-US')}
      }), [
        _cE("view", _uM({ class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }), [
          _cE("text", _uM({ class: "text-15px wtu-1au22ic-f wtu-re8qpd-9" }), "English")
        ]),
        _cE("view", _uM({ class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }), [
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
const GenSrcPagesBasicComponentsLangSwitchCardStyles = [_uM([["wtu-9qob8-0", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-tg5bk5-1", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-uqoqln-2", _pS(_uM([["color", "#1e293b"]]))], ["wtu-apgfmb-3", _pS(_uM([["color", "#475569"]]))], ["wtu-1xpqddw-4", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1t7tavk-5", _pS(_uM([["alignItems", "center"]]))], ["wtu-uadth0-6", _pS(_uM([["flexWrap", "wrap"]]))], ["wtu-zus43i-7", _pS(_uM([["color", "#2563eb"]]))], ["wtu-grn2i8-8", _pS(_uM([["backgroundColor", "#eff6ff"]]))], ["wtu-re8qpd-9", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-6g0b4e-a", _pS(_uM([["color", "#059669"]]))], ["wtu-en5wvg-b", _pS(_uM([["backgroundColor", "#ecfdf5"]]))], ["wtu-ky8bvg-c", _pS(_uM([["color", "#d97706"]]))], ["wtu-14ion4g-d", _pS(_uM([["backgroundColor", "#fffbe2"]]))], ["wtu-1fek2j3-e", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-1au22ic-f", _pS(_uM([["color", "#334155"]]))]])]
