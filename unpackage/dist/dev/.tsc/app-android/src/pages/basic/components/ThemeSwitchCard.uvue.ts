import Card from './Card.uvue'
import { useAppStore } from '@/src/store/index.uts'
import { t } from '@/src/utils/i18n'


const __sfc__ = defineComponent({
  __name: 'ThemeSwitchCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const appStore = useAppStore()

const colorOptions = [
  '#37c2bc',
  '#0957DE',
  '#10b981',
  '#f43f5e',
  '#f97316',
]

function changeTheme(color: string) {
  appStore.setTheme(color)

  uni.showToast({
    title: t('basic.themeSuccess', null),
    icon: 'none',
    duration: 1500,
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({
    title: _ctx.$t('basic.themeTitle')
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center" }), [
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-8px" }), _tD(_ctx.$t('basic.themePreview')), 1 /* TEXT */),
        _cE("view", _uM({
          class: "mt-10px mx-auto w-200px h-44px rounded-8px flex flex-row items-center justify-center",
          style: _nS(_uM({ backgroundColor: unref(appStore).state.theme }))
        }), [
          _cE("text", _uM({ class: "text-__ffffff_ text-14px" }), _tD(_ctx.$t('basic.themeButton')), 1 /* TEXT */)
        ], 4 /* STYLE */)
      ]),
      _cE("view", _uM({ class: "flex-row justify-between py-10px" }), [
        _cE(Fragment, null, RenderHelpers.renderList(colorOptions, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "w-40px h-40px rounded-20px items-center justify-center",
            style: _nS(_uM({
          backgroundColor: item,
          borderWidth: unref(appStore).state.theme === item ? '3px' : '0px',
          borderStyle: 'solid',
          borderColor: '#1e293b'
        })),
            onClick: () => {changeTheme(item)}
          }), [
            unref(appStore).state.theme === item
              ? _cE("text", _uM({
                  key: 0,
                  class: "text-16px text-white font-bold"
                }), "✓")
              : _cC("v-if", true)
          ], 12 /* STYLE, PROPS */, ["onClick"])
        }), 64 /* STABLE_FRAGMENT */)
      ])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["title"])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsThemeSwitchCardStyles = [_uM([["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-40px", _pS(_uM([["height", 40]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["mt-10px", _pS(_uM([["marginTop", 10]]))], ["mx-auto", _pS(_uM([["marginLeft", "auto"], ["marginRight", "auto"]]))], ["none", _pS(_uM([["display", "none"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["py-10px", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-20px", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-16px", _pS(_uM([["fontSize", 16]]))], ["text-white", _pS(_uM([["color", "rgba(255,255,255,var(--un-color-opacity,1))"]]))], ["w-200px", _pS(_uM([["width", 200]]))], ["w-40px", _pS(_uM([["width", 40]]))]])]
