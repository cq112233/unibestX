import Card from './Card.uvue';
import { computed } from 'vue';
import { useAppStore } from '@/src/store/index.uts';
import { $t } from '@/src/utils/i18n';

// 外观模式选项：auto（跟随系统）/ light（浅色）/ dark（深色）
type ThemeModeOption = {
  value: string;
  label: string;
};


const __sfc__ = defineComponent({
  __name: 'ThemeSwitchCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const appStore = useAppStore();

const themeTitle = computed((): string => $t('basic.themeTitle'));
const themePreview = computed((): string => $t('basic.themePreview'));
const themeButton = computed((): string => $t('basic.themeButton'));
const themeModeLabel = computed((): string => $t('basic.themeModeTitle'));

const themeModeOptions = computed((): ThemeModeOption[] => {
  return [
    { value: 'auto', label: $t('basic.themeModeAuto') },
    { value: 'light', label: $t('basic.themeModeLight') },
    { value: 'dark', label: $t('basic.themeModeDark') }
  ];
});

const currentTheme = computed((): string => {
  return appStore.state.theme;
});

const colorOptions = [
  '#37c2bc',
  '#0957DE',
  '#10b981',
  '#f43f5e',
  '#f97316'
];

function changeTheme(color: string) {
  appStore.setTheme(color);

  uni.showToast({
    title: $t('basic.themeSuccess'),
    icon: 'none',
    duration: 1500
  });
}

function changeThemeMode(value: string) {
  appStore.setThemeMode(value);

  uni.showToast({
    title: $t('basic.themeModeSuccess'),
    icon: 'none',
    duration: 1500
  });
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: themeTitle.value }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-4hrp8k-0 wtu-fhrzwj-1 wtu-mqajtg-2 wtu-bkb5z9-3 wtu-qepy49-4 wtu-1jfhtyf-5 wtu-1vbahwj-6" }), [
        _cE("text", _uM({ class: "wtu-1guata8-7 wtu-i5demr-8 wtu-1yn2e0l-9" }), _tD(themePreview.value), 1 /* TEXT */),
        _cE("view", _uM({
          class: "wtu-15u6clw-a wtu-7gvrw-b wtu-3m5zaz-c wtu-s0orfi-d wtu-1likcy9-e wtu-27v8zu-f wtu-1q091sr-g wtu-1vbahwj-6 wtu-1r3uoj-h",
          style: _nS(_uM({ backgroundColor: currentTheme.value }))
        }), [
          _cE("text", _uM({ class: "wtu-g3vc06-i wtu-1d27acy-j" }), _tD(themeButton.value), 1 /* TEXT */)
        ], 4 /* STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-1q091sr-g wtu-1o0f0um-k wtu-1cu5goa-l" }), [
        _cE(Fragment, null, RenderHelpers.renderList(colorOptions, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "wtu-6fkyl1-m wtu-12mu282-n wtu-ww7gtr-o wtu-1vbahwj-6 wtu-1r3uoj-h",
            style: _nS(_uM({
          backgroundColor: item,
          borderWidth: currentTheme.value == item ? '3px' : '0px',
          borderStyle: 'solid',
          borderColor: '#1e293b'
        })),
            onClick: () => {changeTheme(item)}
          }), [
            currentTheme.value == item
              ? _cE("text", _uM({
                  key: 0,
                  class: "wtu-127on44-p wtu-19gexn6-q wtu-1x7cgzs-r"
                }), " ✓ ")
              : _cC("v-if", true)
          ], 12 /* STYLE, PROPS */, ["onClick"])
        }), 64 /* STABLE_FRAGMENT */)
      ]),
      _cE("view", _uM({ class: "wtu-1q091sr-g wtu-1o0f0um-k wtu-1vbahwj-6 wtu-15u6clw-a wtu-15ctu2r-s" }), [
        _cE("text", _uM({ class: "wtu-1d27acy-j wtu-1s8d77i-t" }), _tD(themeModeLabel.value), 1 /* TEXT */),
        _cE("view", _uM({
          class: "wtu-1q091sr-g wtu-1likcy9-e wtu-1gk50cy-u",
          style: _nS(_uM({
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--border-color, #e2e8f0)'
        }))
        }), [
          _cE(Fragment, null, RenderHelpers.renderList(themeModeOptions.value, (item, index, __index, _cached): any => {
            return _cE("view", _uM({
              key: index,
              class: "wtu-1p9z6y3-v wtu-1cuonmx-w",
              style: _nS(_uM({
            backgroundColor: unref(appStore).state.themeMode == item.value ? unref(appStore).state.theme : 'transparent'
          })),
              onClick: () => {changeThemeMode(item.value)}
            }), [
              _cE("text", _uM({
                class: "wtu-1guata8-7",
                style: _nS(_uM({
              color: unref(appStore).state.themeMode == item.value ? '#ffffff' : 'var(--text-secondary, #64748b)'
            }))
              }), _tD(item.label), 5 /* TEXT, STYLE */)
            ], 12 /* STYLE, PROPS */, ["onClick"])
          }), 128 /* KEYED_FRAGMENT */)
        ], 4 /* STYLE */)
      ])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["title"])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsThemeSwitchCardStyles = [_uM([["wtu-4hrp8k-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-fhrzwj-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-mqajtg-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-bkb5z9-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-qepy49-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1jfhtyf-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-1vbahwj-6", _pS(_uM([["alignItems", "center"]]))], ["wtu-1guata8-7", _pS(_uM([["fontSize", 12]]))], ["wtu-i5demr-8", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-1yn2e0l-9", _pS(_uM([["marginBottom", 8]]))], ["wtu-15u6clw-a", _pS(_uM([["marginTop", 10]]))], ["wtu-7gvrw-b", _pS(_uM([["marginLeft", "auto"], ["marginRight", "auto"]]))], ["wtu-3m5zaz-c", _pS(_uM([["width", 200]]))], ["wtu-s0orfi-d", _pS(_uM([["height", 44]]))], ["wtu-1likcy9-e", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-27v8zu-f", _pS(_uM([["display", "flex"]]))], ["wtu-1q091sr-g", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1r3uoj-h", _pS(_uM([["justifyContent", "center"]]))], ["wtu-g3vc06-i", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1d27acy-j", _pS(_uM([["fontSize", 14]]))], ["wtu-1o0f0um-k", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-1cu5goa-l", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["wtu-6fkyl1-m", _pS(_uM([["width", 40]]))], ["wtu-12mu282-n", _pS(_uM([["height", 40]]))], ["wtu-ww7gtr-o", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["wtu-127on44-p", _pS(_uM([["fontSize", 16]]))], ["wtu-19gexn6-q", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1x7cgzs-r", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-15ctu2r-s", _pS(_uM([["paddingTop", 10]]))], ["wtu-1s8d77i-t", _pS(_uM([["color", "#2d3748"]]))], ["wtu-1gk50cy-u", _pS(_uM([["overflow", "hidden"]]))], ["wtu-1p9z6y3-v", _pS(_uM([["paddingLeft", 14], ["paddingRight", 14]]))], ["wtu-1cuonmx-w", _pS(_uM([["paddingTop", 8], ["paddingBottom", 8]]))]])]
