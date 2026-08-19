import { computed, ref, watch, onMounted, getCurrentInstance } from 'vue'
import defProps from './sticky.uts'
import { addStyle, deepMerge, getPx, guid } from '../../libs/function/index.uts'
import zIndexConfig from '../../libs/config/zIndex.uts'


const __sfc__ = defineComponent({
  __name: 'up-sticky',
name: 'up-sticky',
  props: {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  customNavHeight: {
    type: [String, Number],
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: 'transparent'
  },
  zIndex: {
    type: [String, Number],
    default: ''
  },
  index: {
    type: [String, Number],
    default: ''
  },
  scrollTop: {
    type: [String, Number],
    default: 0
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

const instance = getCurrentInstance()

const uZindex = computed<number>(() => {
  const zVal = props.zIndex
  if (zVal != null && zVal.toString() != '') {
    const parsed = parseInt(zVal.toString())
    if (!isNaN(parsed)) {
      return parsed
    }
  }
  return (zIndexConfig['sticky'] as number ?? 999)
})

const webMpStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue", 78, 9), } as UTSJSONObject
  if (!props.disabled) {
    style['position'] = 'sti' + 'cky'
    const top = parseFloat(getPx(props.offsetTop))
    style['top'] = top + 'px'
    style['zIndex'] = uZindex.value
  } else {
    style['position'] = 'relative'
  }
  if (props.bgColor != '') {
    style['backgroundColor'] = props.bgColor
  }
  return deepMerge(addStyle(props.customStyle), style) as UTSJSONObject
})


const elId = ref<string>('up-sticky-' + guid())
const isFixed = ref<boolean>(false)
const initialTop = ref<number>(0)
const height = ref<number>(0)
const left = ref<number>(0)
const width = ref<number>(0)
const isInit = ref<boolean>(false)

const stickyTop = computed<number>(() => {
  return parseFloat(getPx(props.offsetTop)) + parseFloat(getPx(props.customNavHeight))
})

const wrapperStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue", 107, 9), } as UTSJSONObject
  if (isFixed.value && height.value > 0) {
    style['height'] = height.value + 'px'
  }
  return style
})

const contentStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue", 115, 9), } as UTSJSONObject
  if (!props.disabled && isFixed.value) {
    style['position'] = 'fixed'
    style['top'] = stickyTop.value + 'px'
    style['left'] = left.value + 'px'
    if (width.value > 0) {
      style['width'] = width.value + 'px'
    }
    style['zIndex'] = uZindex.value
  } else {
    style['position'] = 'relative'
  }
  if (props.bgColor != '') {
    style['backgroundColor'] = props.bgColor
  }
  return deepMerge(addStyle(props.customStyle), style) as UTSJSONObject
})

function getRect(): Promise<NodeInfo> {
  return new Promise((resolve) => {
    uni.createSelectorQuery().in(instance?.proxy).select('#' + elId.value).boundingClientRect().exec((ret) => {
      resolve(ret[0] as NodeInfo)
    })
  })
}

function checkFixed(st: number) {
  if (!isInit.value) {
    init()
    return
  }
  const currentY = initialTop.value - st
  if (currentY <= stickyTop.value && initialTop.value > 0) {
    if (!isFixed.value) {
      getRect().then((res: NodeInfo) => {
        if (res.width != null && res.width! > 0) {
          width.value = res.width!
        }
        if (res.left != null) {
          left.value = res.left!
        }
        if (res.height != null && res.height! > 0) {
          height.value = res.height!
        }
      })
    }
    isFixed.value = true
  } else {
    isFixed.value = false
  }
}

function init() {
  getRect().then((res: NodeInfo) => {
    if (res.height != null && res.height! > 0) {
      height.value = res.height!
    }
    if (res.left != null) {
      left.value = res.left!
    }
    if (res.width != null && res.width! > 0) {
      width.value = res.width!
    }
    const currentTop = res.top ?? 0
    const st = parseFloat(props.scrollTop.toString())
    initialTop.value = currentTop + st
    isInit.value = true
    checkFixed(st)
  })
}

watch((): any => props.scrollTop, (val: any) => {
  if (props.disabled) return
  const st = parseFloat(val.toString())
  checkFixed(st)
})

onMounted(() => {
  init()
})


return (): any | null => {

  return _cE("view", _uM({
    class: "up-sticky",
    id: elId.value,
    style: _nS(wrapperStyle.value)
  }), [
    _cE("view", _uM({
      class: "up-sticky__content",
      style: _nS(contentStyle.value)
    }), [
      renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */)
  ], 12 /* STYLE, PROPS */, ["id"])
}
}

})
export default __sfc__
export type UpStickyComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpStickyUpStickyStyles = [_uM([["up-sticky", _pS(_uM([["width", "100%"], ["boxSizing", "border-box"]]))], ["up-sticky__content", _pS(_uM([["boxSizing", "border-box"]]))]])]
