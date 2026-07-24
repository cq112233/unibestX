import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_picker from '@/uni_modules/uview-ultra/components/up-picker/up-picker.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'picker',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const pickerShow1 = ref(false)
const pickerShow2 = ref(false)
const pickerShow3 = ref(false)

const columns1 = ref([
  ['中国', '美国', '日本', '英国']
])
const columns2 = ref([
  ['亚洲', '欧洲'],
  ['中国', '英国']
])

function showPicker1() {
  pickerShow1.value = true
}
function showPicker2() {
  pickerShow2.value = true
}
function showPicker3() {
  pickerShow3.value = true
}

function onConfirm1(e: UTSJSONObject) {
  console.log('picker 1 confirm', e)
  pickerShow1.value = false
}
function onConfirm2(e: UTSJSONObject) {
  console.log('picker 2 confirm', e)
  pickerShow2.value = false
}
function onConfirm3(e: UTSJSONObject) {
  console.log('picker 3 confirm', e)
  pickerShow3.value = false
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_picker = resolveEasyComponent("up-picker",_easycom_up_picker)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-picker 选择器'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-picker 选择器",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础单列"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    text: "单列选择",
                    size: "mini",
                    onClick: showPicker1
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "多列选择"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "success",
                    text: "多列选择",
                    size: "mini",
                    onClick: showPicker2
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "加载状态"),
                _cE("view", _uM({ class: "flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "warning",
                    text: "加载中选择",
                    size: "mini",
                    onClick: showPicker3
                  }))
                ])
              ])
            ]),
            _cV(_component_up_picker, _uM({
              show: pickerShow1.value,
              columns: columns1.value,
              onConfirm: onConfirm1,
              onCancel: () => {pickerShow1.value = false}
            }), null, 8 /* PROPS */, ["show", "columns", "onCancel"]),
            _cV(_component_up_picker, _uM({
              show: pickerShow2.value,
              columns: columns2.value,
              onConfirm: onConfirm2,
              onCancel: () => {pickerShow2.value = false}
            }), null, 8 /* PROPS */, ["show", "columns", "onCancel"]),
            _cV(_component_up_picker, _uM({
              show: pickerShow3.value,
              columns: columns1.value,
              loading: true,
              onConfirm: onConfirm3,
              onCancel: () => {pickerShow3.value = false}
            }), null, 8 /* PROPS */, ["show", "columns", "onCancel"])
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
const GenSrcSubUviewUltraDemosPickerPickerStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
