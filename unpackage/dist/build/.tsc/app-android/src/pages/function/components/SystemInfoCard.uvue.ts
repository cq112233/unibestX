import Card from '../../basic/components/Card.uvue';
import { onMounted, ref } from 'vue';


const __sfc__ = defineComponent({
  __name: 'SystemInfoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const sysBrand = ref('');
const sysModel = ref('');
const sysSystem = ref('');
const sysPlatform = ref('');

function fetchSystemInfo() {
  try {
    const info = uni.getSystemInfoSync();
    sysBrand.value = info.brand ?? '';
    sysModel.value = info.model ?? '';
    sysSystem.value = info.system ?? '';
    sysPlatform.value = info.uniPlatform ?? '';
  }
  catch (err) {
    console.error(err);
  }
}

onMounted(() => {
  fetchSystemInfo();
});

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "设备系统信息" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-oay3eq-0 wtu-xwpmb1-1 wtu-1f04jd2-2 wtu-yvwy5v-3 wtu-ydbv97-4 wtu-luxr69-5" }), [
        _cE("view", _uM({ class: "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8" }), [
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-2prjq9-a" }), "手机品牌"),
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" }), _tD(sysBrand.value !== '' ? sysBrand.value : '暂无数据'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8" }), [
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-2prjq9-a" }), "手机型号"),
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" }), _tD(sysModel.value !== '' ? sysModel.value : '暂无数据'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8" }), [
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-2prjq9-a" }), "操作系统"),
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" }), _tD(sysSystem.value !== '' ? sysSystem.value : '暂无数据'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-2dnwdx-6 wtu-y6hc1g-7" }), [
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-2prjq9-a" }), "运行平台"),
          _cE("text", _uM({ class: "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c" }), _tD(sysPlatform.value !== '' ? sysPlatform.value : '暂无数据'), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({
        class: "wtu-1tlvelu-d wtu-xe6yl0-e wtu-79ydq7-f wtu-17j8w31-g wtu-o8ie9c-h wtu-2dnwdx-6 wtu-1ie67qt-i wtu-1d5n1t1-j",
        onClick: fetchSystemInfo
      }), [
        _cE("text", _uM({ class: "wtu-tl526o-k wtu-1hz062s-9 wtu-10grseq-b" }), "获取系统信息")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsSystemInfoCardStyles = [_uM([["wtu-oay3eq-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-xwpmb1-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-1f04jd2-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-yvwy5v-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-ydbv97-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-luxr69-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-2dnwdx-6", _pS(_uM([["flexDirection", "row"]]))], ["wtu-y6hc1g-7", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-fxzeik-8", _pS(_uM([["marginBottom", 10]]))], ["wtu-1hz062s-9", _pS(_uM([["fontSize", 14]]))], ["wtu-2prjq9-a", _pS(_uM([["color", "#718096"]]))], ["wtu-10grseq-b", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-14btyn8-c", _pS(_uM([["color", "#2d3748"]]))], ["wtu-1tlvelu-d", _pS(_uM([["width", "100%"]]))], ["wtu-xe6yl0-e", _pS(_uM([["height", 44]]))], ["wtu-79ydq7-f", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-17j8w31-g", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-o8ie9c-h", _pS(_uM([["display", "flex"]]))], ["wtu-1ie67qt-i", _pS(_uM([["alignItems", "center"]]))], ["wtu-1d5n1t1-j", _pS(_uM([["justifyContent", "center"]]))], ["wtu-tl526o-k", _pS(_uM([["color", "#ffffff"]]))]])]
