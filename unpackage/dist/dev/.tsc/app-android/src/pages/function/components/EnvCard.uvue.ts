import Card from '../../basic/components/Card.uvue'
import { computed, ref } from 'vue'
import {
  getCurrentEnv,
  getEnvConfigFor,
  getEnvLabel,
  getSystemEnv,
  resetEnv,
  setCurrentEnv,
} from '@/src/utils/env.uts'
import type { EnvType } from '@/src/utils/env.uts'


const __sfc__ = defineComponent({
  __name: 'EnvCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const COLOR_DEV: string = '#10b981'
const COLOR_TEST: string = '#f59e0b'
const COLOR_PROD: string = '#ef4444'
const COLOR_BG: string = '#e2e8f0'
const COLOR_WHITE: string = '#ffffff'
const COLOR_DARK: string = '#475569'

const systemEnv: EnvType = getSystemEnv()

const systemEnvLabel = computed((): string => {
  return systemEnv === 'development' ? '开发' : '生产'
})

// 当前环境（响应式，切换后可驱动 UI 更新）
const currentEnv = ref<EnvType>(getCurrentEnv())

const isOverridden = computed((): boolean => {
  return currentEnv.value !== systemEnv
})

const currentEnvLabel = computed((): string => {
  return getEnvLabel(currentEnv.value)
})

const envColor = computed((): string => {
  if (currentEnv.value === 'development') {
    return COLOR_DEV
  }
  if (currentEnv.value === 'test') {
    return COLOR_TEST
  }
  return COLOR_PROD
})

const envConfig = computed(() => {
  return getEnvConfigFor(currentEnv.value)
})

// 按钮颜色 computed（避免模板中三元运算类型问题）
const devBtnBg = computed((): string => {
  return currentEnv.value === 'development' ? COLOR_DEV : COLOR_BG
})
const devBtnText = computed((): string => {
  return currentEnv.value === 'development' ? COLOR_WHITE : COLOR_DARK
})
const testBtnBg = computed((): string => {
  return currentEnv.value === 'test' ? COLOR_TEST : COLOR_BG
})
const testBtnText = computed((): string => {
  return currentEnv.value === 'test' ? COLOR_WHITE : COLOR_DARK
})
const prodBtnBg = computed((): string => {
  return currentEnv.value === 'production' ? COLOR_PROD : COLOR_BG
})
const prodBtnText = computed((): string => {
  return currentEnv.value === 'production' ? COLOR_WHITE : COLOR_DARK
})

function switchEnv(type: string) {
  const env = type as EnvType
  setCurrentEnv(env)
  currentEnv.value = env
  const label = getEnvLabel(env)
  uni.showToast({
    title: `已切换至${label}环境`,
    icon: 'none',
    duration: 1500,
  })
}

function handleReset() {
  resetEnv()
  currentEnv.value = systemEnv
  uni.showToast({
    title: '已重置为系统默认环境',
    icon: 'none',
    duration: 1500,
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "环境变量" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("view", _uM({ class: "flex-row justify-between mb-10px" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "编译环境"),
          _cE("text", _uM({ class: "text-14px font-bold text-__2d3748_" }), _tD(systemEnvLabel.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "flex-row justify-between mb-10px" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "当前环境"),
          _cE("text", _uM({
            class: "text-14px font-bold",
            style: _nS(_uM({ color: envColor.value }))
          }), _tD(currentEnvLabel.value), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "flex-row justify-between mb-10px" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "接口地址"),
          _cE("text", _uM({ class: "text-12px text-__64748b_ flex-1 ml-8px text-right" }), _tD(envConfig.value.baseURL), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "flex-row justify-between" }), [
          _cE("text", _uM({ class: "text-14px text-__718096_" }), "是否已覆盖"),
          _cE("text", _uM({ class: "text-14px font-bold text-__2d3748_" }), _tD(isOverridden.value ? '是' : '否'), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-12px" }), "切换环境（仅当前运行生效）"),
        _cE("view", _uM({ class: "flex-row mt-12px" }), [
          _cE("view", _uM({
            class: "flex-1 h-38px rounded-8px flex flex-row items-center justify-center ml-5px mr-5px",
            style: _nS(_uM({ backgroundColor: devBtnBg.value })),
            onClick: () => {switchEnv('development')}
          }), [
            _cE("text", _uM({
              class: "text-14px font-bold",
              style: _nS(_uM({ color: devBtnText.value }))
            }), "开发", 4 /* STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "flex-1 h-38px rounded-8px flex flex-row items-center justify-center ml-5px mr-5px",
            style: _nS(_uM({ backgroundColor: testBtnBg.value })),
            onClick: () => {switchEnv('test')}
          }), [
            _cE("text", _uM({
              class: "text-14px font-bold",
              style: _nS(_uM({ color: testBtnText.value }))
            }), "测试", 4 /* STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "flex-1 h-38px rounded-8px flex flex-row items-center justify-center ml-5px mr-5px",
            style: _nS(_uM({ backgroundColor: prodBtnBg.value })),
            onClick: () => {switchEnv('production')}
          }), [
            _cE("text", _uM({
              class: "text-14px font-bold",
              style: _nS(_uM({ color: prodBtnText.value }))
            }), "生产", 4 /* STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"])
        ])
      ]),
      _cE("view", _uM({
        class: "w-full h-44px rounded-8px bg-__64748b_ flex flex-row items-center justify-center",
        onClick: handleReset
      }), [
        _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "重置为系统默认")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsEnvCardStyles = [_uM([["bg-__64748b_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#64748b"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-38px", _pS(_uM([["height", 38]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-10px", _pS(_uM([["marginBottom", 10]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["ml-5px", _pS(_uM([["marginLeft", 5]]))], ["ml-8px", _pS(_uM([["marginLeft", 8]]))], ["mr-5px", _pS(_uM([["marginRight", 5]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["none", _pS(_uM([["display", "none"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__2d3748_", _pS(_uM([["color", "#2d3748"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__718096_", _pS(_uM([["color", "#718096"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-right", _pS(_uM([["textAlign", "right"]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
