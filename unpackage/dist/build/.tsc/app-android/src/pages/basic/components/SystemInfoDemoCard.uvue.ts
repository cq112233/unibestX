import Card from './Card.uvue';
import { safeAreaInsets, systemInfo } from '@/src/utils/systemInfo';
import { computed } from 'vue';


const __sfc__ = defineComponent({
  __name: 'SystemInfoDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const screenWidth = computed((): number => systemInfo.value?.screenWidth ?? 0);
const screenHeight = computed((): number => systemInfo.value?.screenHeight ?? 0);
const windowWidth = computed((): number => systemInfo.value?.windowWidth ?? 0);
const windowHeight = computed((): number => systemInfo.value?.windowHeight ?? 0);
const statusBarHeight = computed((): number => systemInfo.value?.statusBarHeight ?? 0);
const pixelRatio = computed((): number => systemInfo.value?.pixelRatio ?? 1);

const safeAreaTop = computed((): string => safeAreaInsets.value != null ? `${safeAreaInsets.value!.top}px` : 'N/A');
const safeAreaBottom = computed((): string => safeAreaInsets.value != null ? `${safeAreaInsets.value!.bottom}px` : 'N/A');
const safeAreaLeft = computed((): string => safeAreaInsets.value != null ? `${safeAreaInsets.value!.left}px` : 'N/A');
const safeAreaRight = computed((): string => safeAreaInsets.value != null ? `${safeAreaInsets.value!.right}px` : 'N/A');

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "系统与安全区域信息" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-nruop9-0 wtu-tiruoi-1 wtu-scfi6j-2 wtu-1xymh2w-3 wtu-163p5ko-4 wtu-1wychmu-5" }), [
        _cE("text", _uM({ class: "wtu-iud1zm-6 wtu-ok6xoz-7 wtu-sgmw91-8 wtu-1jkapvz-9" }), "安全区域内边距 (SafeAreaInsets)"),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "Top (顶部距离)"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(safeAreaTop.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "Bottom (底部距离)"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(safeAreaBottom.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "Left (左侧距离)"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(safeAreaLeft.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "Right (右侧距离)"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(safeAreaRight.value), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({ class: "wtu-nruop9-0 wtu-tiruoi-1 wtu-1xymh2w-3 wtu-163p5ko-4 wtu-1wychmu-5" }), [
        _cE("text", _uM({ class: "wtu-iud1zm-6 wtu-ok6xoz-7 wtu-sgmw91-8 wtu-1jkapvz-9" }), "设备窗口规格 (WindowInfo)"),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "屏幕宽度"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(screenWidth.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "屏幕高度"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(screenHeight.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "可用窗口宽度"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(windowWidth.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "可用窗口高度"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(windowHeight.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b wtu-jynils-c" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "状态栏高度 (statusBarHeight)"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(statusBarHeight.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-a wtu-1htvnc1-b" }), [
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-1thuw5y-e" }), "设备像素比 (pixelRatio)"),
          _cE("text", _uM({ class: "wtu-1pw3wr1-d wtu-ok6xoz-7 wtu-1sdp0je-f" }), _tD(pixelRatio.value), 1 /* TEXT */)
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsSystemInfoDemoCardStyles = [_uM([["wtu-nruop9-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-tiruoi-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-scfi6j-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-1xymh2w-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-163p5ko-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-1wychmu-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-iud1zm-6", _pS(_uM([["fontSize", 13]]))], ["wtu-ok6xoz-7", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-sgmw91-8", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1jkapvz-9", _pS(_uM([["marginBottom", 12]]))], ["wtu-lbcsyi-a", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1htvnc1-b", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-jynils-c", _pS(_uM([["marginBottom", 8]]))], ["wtu-1pw3wr1-d", _pS(_uM([["fontSize", 14]]))], ["wtu-1thuw5y-e", _pS(_uM([["color", "#64748b"]]))], ["wtu-1sdp0je-f", _pS(_uM([["color", "#334155"]]))]])]
