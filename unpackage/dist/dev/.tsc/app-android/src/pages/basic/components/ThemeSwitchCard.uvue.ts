import Card from './Card.uvue';
import { computed } from 'vue';
import { useAppStore } from '@/src/store/index.uts';
import { $t } from '@/src/utils/i18n';

// 外观模式选项：auto（跟随系统）/ light（浅色）/ dark（深色）
type ThemeModeOption = { __$originalPosition?: UTSSourceMapPosition<"ThemeModeOption", "src/pages/basic/components/ThemeSwitchCard.uvue", 79, 6>;
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
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-1vbahwj-0" }), [
        _cE("text", _uM({ class: "text-12px wtu-i5demr-1 mb-8px" }), _tD(themePreview.value), 1 /* TEXT */),
        _cE("view", _uM({
          class: "mt-10px wtu-7gvrw-2 w-200px h-44px rounded-8px wtu-27v8zu-3 wtu-1q091sr-4 wtu-1vbahwj-0 wtu-1r3uoj-5",
          style: _nS(_uM({ backgroundColor: currentTheme.value }))
        }), [
          _cE("text", _uM({ class: "wtu-g3vc06-6 text-14px" }), _tD(themeButton.value), 1 /* TEXT */)
        ], 4 /* STYLE */)
      ]),
      _cE("view", _uM({ class: "wtu-1q091sr-4 wtu-1o0f0um-7 py-10px" }), [
        _cE(Fragment, null, RenderHelpers.renderList(colorOptions, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "w-40px h-40px rounded-20px wtu-1vbahwj-0 wtu-1r3uoj-5",
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
                  class: "text-16px wtu-19gexn6-8 wtu-1x7cgzs-9"
                }), " ✓ ")
              : _cC("v-if", true)
          ], 12 /* STYLE, PROPS */, ["onClick"])
        }), 64 /* STABLE_FRAGMENT */)
      ]),
      _cE("view", _uM({ class: "wtu-1q091sr-4 wtu-1o0f0um-7 wtu-1vbahwj-0 mt-10px pt-10px" }), [
        _cE("text", _uM({ class: "text-14px wtu-1s8d77i-a" }), _tD(themeModeLabel.value), 1 /* TEXT */),
        _cE("view", _uM({
          class: "wtu-1q091sr-4 rounded-8px wtu-1gk50cy-b",
          style: _nS(_uM({
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--border-color, #e2e8f0)'
        }))
        }), [
          _cE(Fragment, null, RenderHelpers.renderList(themeModeOptions.value, (item, index, __index, _cached): any => {
            return _cE("view", _uM({
              key: index,
              class: "px-14px py-8px",
              style: _nS(_uM({
            backgroundColor: unref(appStore).state.themeMode == item.value ? unref(appStore).state.theme : 'transparent'
          })),
              onClick: () => {changeThemeMode(item.value)}
            }), [
              _cE("text", _uM({
                class: "text-12px",
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
const GenSrcPagesBasicComponentsThemeSwitchCardStyles = [_uM([["wtu-1vbahwj-0", _pS(_uM([["alignItems", "center"]]))], ["wtu-i5demr-1", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-7gvrw-2", _pS(_uM([["marginLeft", "auto"], ["marginRight", "auto"]]))], ["wtu-27v8zu-3", _pS(_uM([["display", "flex"]]))], ["wtu-1q091sr-4", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1r3uoj-5", _pS(_uM([["justifyContent", "center"]]))], ["wtu-g3vc06-6", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1o0f0um-7", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-19gexn6-8", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1x7cgzs-9", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1s8d77i-a", _pS(_uM([["color", "#2d3748"]]))], ["wtu-1gk50cy-b", _pS(_uM([["overflow", "hidden"]]))]])]
