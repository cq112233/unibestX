import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_action_sheet from '@/uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'action-sheet',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const actionSheetShow = ref(false)
const actionList = ref([
  { name: '拍照' },
  { name: '从相册选择' }
])

function onActionSelect(e: UTSJSONObject) {
  console.log('action select', e, " at src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue:49")
  actionSheetShow.value = false
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_action_sheet = resolveEasyComponent("up-action-sheet",_easycom_up_action_sheet)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-action-sheet 动作面板'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-action-sheet 动作面板",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    text: "弹出面板",
                    size: "mini",
                    onClick: () => {actionSheetShow.value = true}
                  }), null, 8 /* PROPS */, ["onClick"])
                ])
              ])
            ]),
            _cV(_component_up_action_sheet, _uM({
              show: actionSheetShow.value,
              actions: actionList.value,
              title: "请选择操作",
              onClose: () => {actionSheetShow.value = false},
              onSelect: onActionSelect
            }), null, 8 /* PROPS */, ["show", "actions", "onClose"])
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcSubUviewUltraDemosActionSheetActionSheetStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
