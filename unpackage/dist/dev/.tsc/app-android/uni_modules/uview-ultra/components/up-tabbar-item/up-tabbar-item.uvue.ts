import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_badge from '@/uni_modules/uview-ultra/components/up-badge/up-badge.uvue'
import { computed, inject, ref, onMounted } from 'vue'
import type { ComputedRef } from 'vue'
import { addStyle } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-tabbar-item',
name: 'up-tabbar-item',
  props: {
  name: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: String,
    default: ''
  },
  badge: {
    type: [String, Number],
    default: null
  },
  dot: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  badgeStyle: {
    type: [Object, String],
    default: () => ({ top: '6px', right: '2px' })
  },
  mode: {
    type: String,
    default: ''
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
},
  emits: ['click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const parentProps = inject<ComputedRef<UTSJSONObject> | null>('upTabbarProps', null)
const parentRegister = inject<(() => number) | null>('upTabbarRegister', null)
const parentChange = inject<((name: any) => void) | null>('upTabbarChange', null)

const internalIndex = ref<number>(0)

onMounted(() => {
  if (parentRegister != null) {
    internalIndex.value = parentRegister()
  }
})

const isMidButton = computed<boolean>(() => {
  return props.mode == 'midButton'
})

const itemName = computed((): any => {
  if (props.name != null) {
    return props.name!
  }
  return internalIndex.value
})

const isActive = computed<boolean>(() => {
  if (parentProps == null) return false
  const parentObj = parentProps!.value
  if (parentObj == null) return false
  const parentVal = parentObj['value']
  if (parentVal == null) return false
  return parentVal.toString() == itemName.value.toString()
})

const activeColor = computed<string>((): string => {
  if (parentProps != null && parentProps!.value != null) {
    const val = parentProps!.value!['activeColor']
    if (val != null && val.toString() != '') return val.toString()
  }
  return '#1989fa'
})

const inactiveColor = computed<string>((): string => {
  if (parentProps != null && parentProps!.value != null) {
    const val = parentProps!.value!['inactiveColor']
    if (val != null && val.toString() != '') return val.toString()
  }
  return '#7d7e80'
})

const customTabbarItemStyle = computed((): UTSJSONObject => {
  return addStyle(props.customStyle) as UTSJSONObject
})

const customBadgeStyle = computed((): UTSJSONObject => {
  return addStyle(props.badgeStyle) as UTSJSONObject
})

function clickHandler() {
  if (parentChange != null) {
    parentChange(itemName.value)
  }
  emit('click', itemName.value)
}

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_badge = resolveEasyComponent("up-badge",_easycom_up_badge)

  return _cE("view", _uM({
    class: _nC(["up-tabbar-item", [isMidButton.value ? 'up-tabbar-item--mid-button' : '']]),
    style: _nS(customTabbarItemStyle.value),
    onClick: clickHandler
  }), [
    _cE("view", _uM({
      class: _nC(["up-tabbar-item__icon", [isMidButton.value ? 'up-tabbar-item__icon--mid-button' : '']])
    }), [
      isTrue(isMidButton.value)
        ? _cE("view", _uM({
            key: 0,
            class: "up-tabbar-item--mid-button-cover"
          }))
        : _cC("v-if", true),
      _ctx.icon != ''
        ? _cV(_component_up_icon, _uM({
            key: 1,
            name: _ctx.icon,
            color: isActive.value ? activeColor.value : inactiveColor.value,
            size: isMidButton.value ? 26 : 20
          }), null, 8 /* PROPS */, ["name", "color", "size"])
        : _cE(Fragment, _uM({ key: 2 }), [
            isTrue(isActive.value)
              ? renderSlot(_ctx.$slots, "active-icon", _uM({ key: 0 }))
              : renderSlot(_ctx.$slots, "inactive-icon", _uM({ key: 1 }))
          ], 64 /* STABLE_FRAGMENT */),
      _cV(_component_up_badge, _uM({
        absolute: "",
        offset: [0, _ctx.dot ? '34rpx' : (_ctx.badge != null && parseInt(_ctx.badge.toString()) > 9 ? '14rpx' : '20rpx')],
        customStyle: customBadgeStyle.value,
        isDot: _ctx.dot,
        value: _ctx.badge != null ? (_ctx.dot ? 1 : _ctx.badge) : 0,
        show: _ctx.dot ? true : (_ctx.badge != null ? parseInt(_ctx.badge.toString()) > 0 : false)
      }), null, 8 /* PROPS */, ["offset", "customStyle", "isDot", "value", "show"])
    ], 2 /* CLASS */),
    renderSlot(_ctx.$slots, "text", {}, (): any[] => [
      _cE("text", _uM({
        class: "up-tabbar-item__text",
        style: _nS(_uM({
					color: isActive.value ? activeColor.value : inactiveColor.value
				}))
      }), _tD(_ctx.text), 5 /* TEXT, STYLE */)
    ])
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpTabbarItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItemStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabbar-item", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-tabbar-item__icon", _pS(_uM([["position", "relative"], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-tabbar-item__text", _pS(_uM([["marginTop", 2], ["fontSize", 11], ["color", "#606266"], ["textAlign", "center"]]))], ["up-tabbar-item--mid-button", _pS(_uM([["position", "relative"]]))], ["up-tabbar-item__icon--mid-button", _pS(_uM([["position", "absolute"], ["top", -18], ["width", 44], ["height", 44], ["borderTopLeftRadius", "50%"], ["borderTopRightRadius", "50%"], ["borderBottomRightRadius", "50%"], ["borderBottomLeftRadius", "50%"], ["backgroundColor", "#ffffff"], ["boxShadow", "0 2px 8px rgba(0, 0, 0, 0.15)"], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["zIndex", 10]]))]])]
