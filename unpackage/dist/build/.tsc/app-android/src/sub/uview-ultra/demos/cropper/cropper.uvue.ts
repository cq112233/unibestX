import _easycom_up_title from '@/uni_modules/uview-ultra/components/up-title/up-title.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_cropper from '@/uni_modules/uview-ultra/components/up-cropper/up-cropper.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'cropper',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const croppedPath = ref<string>('');
const eventLog = ref<string>('');
const cropperRef = ref(null as ComponentPublicInstance | null);

function onChoose() {
  const cropper = cropperRef.value;
  if (cropper == null)
    return;
  cropper.$callMethod('chooseImage', 0, {} as UTSJSONObject, null);
  eventLog.value = '正在选择图片...';
}

function onReset() {
  croppedPath.value = '';
  eventLog.value = '已清空结果';
}

function onConfirm(event: UTSJSONObject) {
  const path = event.path;
  croppedPath.value = path == null ? '' : path.toString();
  const len = croppedPath.value.length;
  const prefix = len > 24 ? `${croppedPath.value.substring(0, 24)}...` : croppedPath.value;
  eventLog.value = `confirm => 图片长度 ${len}，前缀 ${prefix}`;
}

function onCancel() {
  eventLog.value = 'cancel => 已取消裁剪';
}

function onError(event: UTSJSONObject) {
  const message = event.message;
  eventLog.value = `error => ${message == null ? '裁剪失败' : message.toString()}`;
}

return (): any | null => {

const _component_up_title = resolveEasyComponent("up-title",_easycom_up_title)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_cropper = resolveEasyComponent("up-cropper",_easycom_up_cropper)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-cropper 裁剪','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-cropper 裁剪','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "基础用法（选择图片并裁剪）")
                  ]),
                  _: 1 /* STABLE */
                })),
                croppedPath.value.length > 0
                  ? _cE("view", _uM({
                      key: 0,
                      class: "weapp-tw-border cropper-preview"
                    }), [
                      _cE("image", _uM({
                        src: croppedPath.value,
                        class: "cropper-image",
                        mode: "aspectFit"
                      }), null, 8 /* PROPS */, ["src"])
                    ])
                  : _cE("view", _uM({
                      key: 1,
                      class: "weapp-tw-border cropper-placeholder"
                    }), [
                      _cE("text", _uM({ class: "weapp-tw-border cropper-placeholder-text" }), "点击下方按钮选择图片并裁剪")
                    ]),
                _cE("view", _uM({ class: "weapp-tw-border btn-row mt-_b10px_B" }), [
                  _cV(_component_up_button, _uM({
                    text: "选择图片",
                    type: "primary",
                    size: "small",
                    class: "demo-btn",
                    onClick: onChoose
                  })),
                  _cV(_component_up_button, _uM({
                    text: "清空结果",
                    type: "primary",
                    plain: "",
                    size: "small",
                    class: "demo-btn",
                    onClick: onReset
                  }))
                ]),
                _cE("text", _uM({ class: "weapp-tw-border log-text mt-_b10px_B" }), _tD(eventLog.value), 1 /* TEXT */)
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "说明")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), " up-cropper 支持缩放/旋转/预览/导出，点击组件默认插槽即可唤起裁剪面板；confirm 事件返回的 path 为 base64 data URL，鸿蒙真机 image 组件对 data URL 支持有限，若黑屏属平台限制。 ")
              ])
            ]),
            _cV(_component_up_cropper, _uM({
              ref_key: "cropperRef",
              ref: cropperRef,
              "can-change-size": true,
              onConfirm: onConfirm,
              onCancel: onCancel,
              onError: onError
            }), _uM({
              default: withSlotCtx((): any[] => [
                _cE("view", _uM({ class: "weapp-tw-border cropper-trigger" }), [
                  _cE("text", _uM({ class: "weapp-tw-border cropper-trigger-text" }), "点击此处打开裁剪（默认插槽）")
                ])
              ]),
              _: 1 /* STABLE */
            }), 512 /* NEED_PATCH */)
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
const GenSrcSubUviewUltraDemosCropperCropperStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-title", _pS(_uM([["marginBottom", 10]]))], ["demo-title-text", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["cropper-preview", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["width", "100%"], ["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["cropper-image", _pS(_uM([["width", 260], ["height", 260]]))], ["cropper-placeholder", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["width", "100%"], ["height", 200], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["cropper-placeholder-text", _pS(_uM([["fontSize", 13], ["color", "#94a3b8"]]))], ["cropper-trigger", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["marginTop", 16], ["marginRight", 16], ["marginBottom", 16], ["marginLeft", 16], ["height", 56], ["backgroundColor", "#0957de"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["cropper-trigger-text", _pS(_uM([["fontSize", 13], ["color", "#ffffff"]]))], ["log-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["btn-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["demo-btn", _pS(_uM([["marginRight", 10]]))]])]
