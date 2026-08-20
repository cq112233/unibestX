import _easycom_up_safe_bottom from '@/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue'
import { computed, ref, watch, provide, onMounted, getCurrentInstance } from 'vue'
import { addStyle, deepMerge, sleep, upGetRect } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-tabbar',
name: 'up-tabbar',
  props: {
  value: {
    type: [String, Number],
    default: null
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
  borderColor: {
    type: String,
    default: ''
  },
  zIndex: {
    type: [String, Number],
    default: 1
  },
  activeColor: {
    type: String,
    default: '#1989fa'
  },
  inactiveColor: {
    type: String,
    default: '#7d7e80'
  },
  fixed: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
},
  emits: ['change', 'update:value'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()
const placeholderHeight = ref<number>(0)

const tabbarStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue", 84, 9), 
    zIndex: props.zIndex
  } as UTSJSONObject
  if (props.borderColor != '') {
    style['borderColor'] = props.borderColor + ' !important'
  }
  if (props.backgroundColor != '') {
    style['backgroundColor'] = props.backgroundColor
  }
  return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
})

const parentState = computed((): UTSJSONObject => {
  return {
    value: props.value,
    activeColor: props.activeColor,
    inactiveColor: props.inactiveColor,
    safeAreaInsetBottom: props.safeAreaInsetBottom,
    border: props.border,
    borderColor: props.borderColor,
    zIndex: props.zIndex,
    fixed: props.fixed,
    placeholder: props.placeholder,
    backgroundColor: props.backgroundColor,
  } as UTSJSONObject
})

const itemCount = ref<number>(0)
const registerTabbarItem = (): number => {
  const currentIndex = itemCount.value
  itemCount.value = itemCount.value + 1
  return currentIndex
}

provide('upTabbarProps', parentState)
provide('upTabbarRegister', registerTabbarItem)
provide('upTabbarChange', (name: any) => {
  emit('update:value', name)
  emit('change', name)
})

async function setPlaceholderHeight() {
  if (!props.fixed || !props.placeholder) return
  await sleep(20)
  upGetRect('.up-tabbar__content', false, instance?.proxy).then((size: NodeInfo) => {
    placeholderHeight.value = size.height ?? 50
  })
}

function noop() {}

watch((): Array<any | null> => [props.fixed, props.placeholder] as Array<any | null>, () => {
  setPlaceholderHeight()
})

onMounted(() => {
  setPlaceholderHeight()
})

return (): any | null => {

const _component_up_safe_bottom = resolveEasyComponent("up-safe-bottom",_easycom_up_safe_bottom)

  return _cE("view", _uM({ class: "up-tabbar" }), [
    _cE("view", _uM({
      class: _nC(["up-tabbar__content", [_ctx.border ? 'up-border-top' : '', _ctx.fixed ? 'up-tabbar--fixed' : '']]),
      onTouchmove: withModifiers(noop, ["stop","prevent"]),
      style: _nS(tabbarStyle.value)
    }), [
      _cE("view", _uM({ class: "up-tabbar__content__item-wrapper" }), [
        renderSlot(_ctx.$slots, "default")
      ]),
      isTrue(_ctx.safeAreaInsetBottom)
        ? _cV(_component_up_safe_bottom, _uM({ key: 0 }))
        : _cC("v-if", true)
    ], 38 /* CLASS, STYLE, NEED_HYDRATION */),
    isTrue(_ctx.placeholder && _ctx.fixed)
      ? _cE("view", _uM({
          key: 0,
          class: "up-tabbar__placeholder",
          style: _nS(_uM({
				height: placeholderHeight.value + 'px',
			}))
        }), null, 4 /* STYLE */)
      : _cC("v-if", true)
  ])
}
}

})
export default __sfc__
export type UpTabbarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTabbarUpTabbarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabbar", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["width", "100%"]]))], ["up-tabbar__content", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["backgroundColor", "#ffffff"], ["width", "100%"]]))], ["up-tabbar__content__item-wrapper", _pS(_uM([["height", 50], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "space-around"], ["alignItems", "stretch"], ["width", "100%"]]))], ["up-tabbar--fixed", _pS(_uM([["position", "fixed"], ["bottom", 0], ["left", 0], ["right", 0]]))]])]
