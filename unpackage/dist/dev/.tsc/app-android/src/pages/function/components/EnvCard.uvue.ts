import Card from '../../basic/components/Card.uvue';
import { computed, ref } from 'vue';
import {
  getCurrentEnv,
  getEnvConfigFor,
  getEnvLabel,
  getSystemEnv,
  resetEnv,
  setCurrentEnv
} from '@/src/utils/env.uts';
import type { EnvType } from '@/src/utils/env.uts';


const __sfc__ = defineComponent({
  __name: 'EnvCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const COLOR_DEV: string = '#10b981';
const COLOR_TEST: string = '#f59e0b';
const COLOR_PROD: string = '#ef4444';
const COLOR_BG: string = '#e2e8f0';
const COLOR_WHITE: string = '#ffffff';
const COLOR_DARK: string = '#475569';

const systemEnv: EnvType = getSystemEnv();

const systemEnvLabel = computed((): string => {
  return systemEnv === 'development' ? '开发' : '生产';
});

// 当前环境（响应式，切换后可驱动 UI 更新）
const currentEnv = ref<EnvType>(getCurrentEnv());

const isOverridden = computed((): boolean => {
  return currentEnv.value !== systemEnv;
});

const currentEnvLabel = computed((): string => {
  return getEnvLabel(currentEnv.value);
});

const envColor = computed((): string => {
  if (currentEnv.value === 'development') {
    return COLOR_DEV;
  }
  if (currentEnv.value === 'test') {
    return COLOR_TEST;
  }
  return COLOR_PROD;
});

const envConfig = computed(() => {
  return getEnvConfigFor(currentEnv.value);
});

// 按钮颜色 computed（避免模板中三元运算类型问题）
const devBtnBg = computed((): string => {
  return currentEnv.value === 'development' ? COLOR_DEV : COLOR_BG;
});
const devBtnText = computed((): string => {
  return currentEnv.value === 'development' ? COLOR_WHITE : COLOR_DARK;
});
const testBtnBg = computed((): string => {
  return currentEnv.value === 'test' ? COLOR_TEST : COLOR_BG;
});
const testBtnText = computed((): string => {
  return currentEnv.value === 'test' ? COLOR_WHITE : COLOR_DARK;
});
const prodBtnBg = computed((): string => {
  return currentEnv.value === 'production' ? COLOR_PROD : COLOR_BG;
});
const prodBtnText = computed((): string => {
  return currentEnv.value === 'production' ? COLOR_WHITE : COLOR_DARK;
});

function switchEnv(type: string) {
  const env = type as EnvType;
  setCurrentEnv(env);
  currentEnv.value = env;
  const label = getEnvLabel(env);
  uni.showToast({
    title: `已切换至${label}环境`,
    icon: 'none',
    duration: 1500
  });
}

function handleReset() {
  resetEnv();
  currentEnv.value = systemEnv;
  uni.showToast({
    title: '已重置为系统默认环境',
    icon: 'none',
    duration: 1500
  });
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "环境变量" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("view", _uM({ class: "wtu-1wn3kuh-0 wtu-x1ltc0-1 mb-10px" }), [
          _cE("text", _uM({ class: "text-14px wtu-y0qx9p-2" }), "编译环境"),
          _cE("text", _uM({ class: "text-14px wtu-1xrmo7y-3 wtu-pfwwnc-4" }), _tD(systemEnvLabel.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-1wn3kuh-0 wtu-x1ltc0-1 mb-10px" }), [
          _cE("text", _uM({ class: "text-14px wtu-y0qx9p-2" }), "当前环境"),
          _cE("text", _uM({
            class: "text-14px wtu-1xrmo7y-3",
            style: _nS(_uM({ color: envColor.value }))
          }), _tD(currentEnvLabel.value), 5 /* TEXT, STYLE */)
        ]),
        _cE("view", _uM({ class: "wtu-1wn3kuh-0 wtu-x1ltc0-1 mb-10px" }), [
          _cE("text", _uM({ class: "text-14px wtu-y0qx9p-2" }), "接口地址"),
          _cE("text", _uM({ class: "text-12px wtu-1a0szfl-5 wtu-10cqf12-6 ml-8px wtu-1exppl3-7" }), _tD(envConfig.value.baseURL), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-1wn3kuh-0 wtu-x1ltc0-1" }), [
          _cE("text", _uM({ class: "text-14px wtu-y0qx9p-2" }), "是否已覆盖"),
          _cE("text", _uM({ class: "text-14px wtu-1xrmo7y-3 wtu-pfwwnc-4" }), _tD(isOverridden.value ? '是' : '否'), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-1otqyah-8 mb-12px" }), "切换环境（仅当前运行生效）"),
        _cE("view", _uM({ class: "wtu-1wn3kuh-0 mt-12px" }), [
          _cE("view", _uM({
            class: "wtu-10cqf12-6 h-38px rounded-8px wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b ml-5px mr-5px",
            style: _nS(_uM({ backgroundColor: devBtnBg.value })),
            onClick: () => {switchEnv('development')}
          }), [
            _cE("text", _uM({
              class: "text-14px wtu-1xrmo7y-3",
              style: _nS(_uM({ color: devBtnText.value }))
            }), "开发", 4 /* STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "wtu-10cqf12-6 h-38px rounded-8px wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b ml-5px mr-5px",
            style: _nS(_uM({ backgroundColor: testBtnBg.value })),
            onClick: () => {switchEnv('test')}
          }), [
            _cE("text", _uM({
              class: "text-14px wtu-1xrmo7y-3",
              style: _nS(_uM({ color: testBtnText.value }))
            }), "测试", 4 /* STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "wtu-10cqf12-6 h-38px rounded-8px wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b ml-5px mr-5px",
            style: _nS(_uM({ backgroundColor: prodBtnBg.value })),
            onClick: () => {switchEnv('production')}
          }), [
            _cE("text", _uM({
              class: "text-14px wtu-1xrmo7y-3",
              style: _nS(_uM({ color: prodBtnText.value }))
            }), "生产", 4 /* STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"])
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-zeam06-c h-44px rounded-8px wtu-thuvft-d wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b",
        onClick: handleReset
      }), [
        _cE("text", _uM({ class: "wtu-1bkp4ss-e text-14px wtu-1xrmo7y-3" }), "重置为系统默认")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsEnvCardStyles = [_uM([["wtu-1wn3kuh-0", _pS(_uM([["flexDirection", "row"]]))], ["wtu-x1ltc0-1", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-y0qx9p-2", _pS(_uM([["color", "#718096"]]))], ["wtu-1xrmo7y-3", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-pfwwnc-4", _pS(_uM([["color", "#2d3748"]]))], ["wtu-1a0szfl-5", _pS(_uM([["color", "#64748b"]]))], ["wtu-10cqf12-6", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1exppl3-7", _pS(_uM([["textAlign", "right"]]))], ["wtu-1otqyah-8", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-1hgp7bw-9", _pS(_uM([["display", "flex"]]))], ["wtu-1njuza1-a", _pS(_uM([["alignItems", "center"]]))], ["wtu-szxrt-b", _pS(_uM([["justifyContent", "center"]]))], ["wtu-zeam06-c", _pS(_uM([["width", "100%"]]))], ["wtu-thuvft-d", _pS(_uM([["backgroundColor", "#64748b"]]))], ["wtu-1bkp4ss-e", _pS(_uM([["color", "#ffffff"]]))]])]
