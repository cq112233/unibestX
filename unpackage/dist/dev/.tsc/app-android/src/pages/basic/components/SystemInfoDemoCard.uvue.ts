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
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-13px wtu-ok6xoz-0 wtu-sgmw91-1 mb-12px" }), "安全区域内边距 (SafeAreaInsets)"),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "Top (顶部距离)"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(safeAreaTop.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "Bottom (底部距离)"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(safeAreaBottom.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "Left (左侧距离)"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(safeAreaLeft.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "Right (右侧距离)"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(safeAreaRight.value), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-13px wtu-ok6xoz-0 wtu-sgmw91-1 mb-12px" }), "设备窗口规格 (WindowInfo)"),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "屏幕宽度"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(screenWidth.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "屏幕高度"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(screenHeight.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "可用窗口宽度"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(windowWidth.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "可用窗口高度"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(windowHeight.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "状态栏高度 (statusBarHeight)"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(statusBarHeight.value) + " px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-lbcsyi-2 wtu-1htvnc1-3" }), [
          _cE("text", _uM({ class: "text-14px wtu-1thuw5y-4" }), "设备像素比 (pixelRatio)"),
          _cE("text", _uM({ class: "text-14px wtu-ok6xoz-0 wtu-1sdp0je-5" }), _tD(pixelRatio.value), 1 /* TEXT */)
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsSystemInfoDemoCardStyles = [_uM([["wtu-ok6xoz-0", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-sgmw91-1", _pS(_uM([["color", "#1e293b"]]))], ["wtu-lbcsyi-2", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1htvnc1-3", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-1thuw5y-4", _pS(_uM([["color", "#64748b"]]))], ["wtu-1sdp0je-5", _pS(_uM([["color", "#334155"]]))]])]
