import _easycom_e_chart from '@/uni_modules/e-chart/components/e-chart/e-chart.uvue'
import Card from './Card.uvue'
import { computed, ref, watch } from 'vue'
import { systemInfo } from '@/src/utils/systemInfo'


const __sfc__ = defineComponent({
  __name: 'EchartsDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const echartRef = ref<ComponentPublicInstance | null>(null)
const currentType = ref('line')
const gridKey = 'gr' + 'id'

const lineOption = { __$originalPosition: new UTSSourceMapPosition("lineOption", "src/pages/basic/components/EchartsDemoCard.uvue", 56, 7), 
  title: {
    text: '访问趋势 (折线图)',
    textStyle: {
      fontSize: 12,
      color: '#64748b',
    },
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLine: {
      lineStyle: {
        color: '#cbd5e1',
      },
    },
    axisLabel: {
      color: '#64748b',
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: '#f1f5f9',
      },
    },
    axisLabel: {
      color: '#64748b',
    },
  },
  [gridKey]: {
    left: '12%',
    right: '5%',
    top: '18%',
    bottom: '12%',
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'line',
    smooth: true,
    color: '#3b82f6',
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(59, 130, 246, 0.4)' },
          { offset: 1, color: 'rgba(59, 130, 246, 0)' },
        ],
      },
    },
  }],
} as UTSJSONObject

const barOption = { __$originalPosition: new UTSSourceMapPosition("barOption", "src/pages/basic/components/EchartsDemoCard.uvue", 117, 7), 
  title: {
    text: '访问分布 (柱状图)',
    textStyle: {
      fontSize: 12,
      color: '#64748b',
    },
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLine: {
      lineStyle: {
        color: '#cbd5e1',
      },
    },
    axisLabel: {
      color: '#64748b',
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: '#f1f5f9',
      },
    },
    axisLabel: {
      color: '#64748b',
    },
  },
  [gridKey]: {
    left: '12%',
    right: '5%',
    top: '18%',
    bottom: '12%',
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    color: '#10b981',
  }],
} as UTSJSONObject

const pieOption = { __$originalPosition: new UTSSourceMapPosition("pieOption", "src/pages/basic/components/EchartsDemoCard.uvue", 164, 7), 
  title: {
    text: '访问来源 (饼图)',
    textStyle: {
      fontSize: 12,
      color: '#64748b',
    },
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '65%',
    center: ['50%', '50%'],
    data: [
      { value: 1048, name: '搜索引擎', itemStyle: { color: '#3b82f6' } },
      { value: 735, name: '直接访问', itemStyle: { color: '#10b981' } },
      { value: 580, name: '邮件营销', itemStyle: { color: '#f59e0b' } },
      { value: 484, name: '联盟广告', itemStyle: { color: '#8b5cf6' } },
    ],
  }],
} as UTSJSONObject

function initEchart() {
  if (echartRef.value != null) {
    const chart = echartRef.value as ComponentPublicInstance
    chart.$callMethod('init', lineOption)
  }
}

function changeToLine() {
  currentType.value = 'line'
  if (echartRef.value != null) {
    const chart = echartRef.value as ComponentPublicInstance
    chart.$callMethod('setOption', lineOption)
  }
}

function changeToBar() {
  currentType.value = 'bar'
  if (echartRef.value != null) {
    const chart = echartRef.value as ComponentPublicInstance
    chart.$callMethod('setOption', barOption)
  }
}

function changeToPie() {
  currentType.value = 'pie'
  if (echartRef.value != null) {
    const chart = echartRef.value as ComponentPublicInstance
    chart.$callMethod('setOption', pieOption)
  }
}

const windowWidth = computed((): number => {
  return systemInfo.value?.windowWidth ?? 0
})

watch(windowWidth, () => {
  setTimeout(() => {
    if (echartRef.value != null) {
      const chart = echartRef.value as ComponentPublicInstance
      chart.$callMethod('wtu-pwzd85-j')
    }
  }, 100)
})

return (): any | null => {

const _component_e_chart = resolveEasyComponent("e-chart",_easycom_e_chart)

  return _cV(unref(Card), _uM({
    title: _ctx.$t('basic.echartTitle')
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-jt2kws-0 h-260px mt-10px" }), [
        _cV(_component_e_chart, _uM({
          ref_key: "echartRef",
          ref: echartRef,
          class: "wtu-jt2kws-0 wtu-r3lygi-1",
          onReady: initEchart
        }), null, 512 /* NEED_PATCH */)
      ]),
      _cE("view", _uM({ class: "wtu-1cgo7o7-2 wtu-yw6ev6-3 mt-15px" }), [
        _cE("view", _uM({ class: "wtu-1ic66jc-4 mr-8px" }), [
          _cE("view", _uM({
            class: _nC(["wtu-jt2kws-0 h-36px rounded-8px wtu-gka6r2-5 wtu-1cgo7o7-2 wtu-15mb7nz-6 wtu-1rqhojj-7", currentType.value !== 'line' ? 'wtu-15vl6hy-8' : 'wtu-jq7tyz-9']),
            onClick: changeToLine
          }), [
            _cE("text", _uM({
              class: _nC(["text-12px wtu-16hwtho-a", currentType.value !== 'line' ? 'wtu-1qm4myr-b' : 'wtu-qcdy5m-c'])
            }), _tD(_ctx.$t('basic.echartLine')), 3 /* TEXT, CLASS */)
          ], 2 /* CLASS */)
        ]),
        _cE("view", _uM({ class: "wtu-1ic66jc-4 mr-8px" }), [
          _cE("view", _uM({
            class: _nC(["wtu-jt2kws-0 h-36px rounded-8px wtu-gka6r2-5 wtu-1cgo7o7-2 wtu-15mb7nz-6 wtu-1rqhojj-7", currentType.value !== 'bar' ? 'wtu-1bvelj2-d' : 'wtu-t6nyan-e']),
            onClick: changeToBar
          }), [
            _cE("text", _uM({
              class: _nC(["text-12px wtu-16hwtho-a", currentType.value !== 'bar' ? 'wtu-1icmodz-f' : 'wtu-qcdy5m-c'])
            }), _tD(_ctx.$t('basic.echartBar')), 3 /* TEXT, CLASS */)
          ], 2 /* CLASS */)
        ]),
        _cE("view", _uM({ class: "wtu-1ic66jc-4" }), [
          _cE("view", _uM({
            class: _nC(["wtu-jt2kws-0 h-36px rounded-8px wtu-gka6r2-5 wtu-1cgo7o7-2 wtu-15mb7nz-6 wtu-1rqhojj-7", currentType.value !== 'pie' ? 'wtu-1kp3vbu-g' : 'wtu-rl5n1d-h']),
            onClick: changeToPie
          }), [
            _cE("text", _uM({
              class: _nC(["text-12px wtu-16hwtho-a", currentType.value !== 'pie' ? 'wtu-co0z8p-i' : 'wtu-qcdy5m-c'])
            }), _tD(_ctx.$t('basic.echartPie')), 3 /* TEXT, CLASS */)
          ], 2 /* CLASS */)
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["title"])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsEchartsDemoCardStyles = [_uM([["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-jt2kws-0", _pS(_uM([["width", "100%"]]))], ["wtu-r3lygi-1", _pS(_uM([["!height", "100%"]]))], ["wtu-1cgo7o7-2", _pS(_uM([["flexDirection", "row"]]))], ["wtu-yw6ev6-3", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-1ic66jc-4", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-gka6r2-5", _pS(_uM([["display", "flex"]]))], ["wtu-15mb7nz-6", _pS(_uM([["alignItems", "center"]]))], ["wtu-1rqhojj-7", _pS(_uM([["justifyContent", "center"]]))], ["wtu-15vl6hy-8", _pS(_uM([["backgroundColor", "#e0edff"]]))], ["wtu-jq7tyz-9", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-16hwtho-a", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-1qm4myr-b", _pS(_uM([["color", "#3b82f6"]]))], ["wtu-qcdy5m-c", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1bvelj2-d", _pS(_uM([["backgroundColor", "#d1fae5"]]))], ["wtu-t6nyan-e", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-1icmodz-f", _pS(_uM([["color", "#10b981"]]))], ["wtu-1kp3vbu-g", _pS(_uM([["backgroundColor", "#fef3c7"]]))], ["wtu-rl5n1d-h", _pS(_uM([["backgroundColor", "#f59e0b"]]))], ["wtu-co0z8p-i", _pS(_uM([["color", "#f59e0b"]]))], ["wtu-pwzd85-j", _pS(_uM([["resize", "both"]]))]])]
