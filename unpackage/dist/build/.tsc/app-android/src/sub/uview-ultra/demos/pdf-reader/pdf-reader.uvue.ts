import _easycom_up_title from '@/uni_modules/uview-ultra/components/up-title/up-title.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_pdf_reader from '@/uni_modules/uview-ultra/components/up-pdf-reader/up-pdf-reader.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'pdf-reader',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const height = ref<string>('600px');
const pdfUrl = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

function setHeight(val: string): void {
  height.value = val;
}

return (): any | null => {

const _component_up_title = resolveEasyComponent("up-title",_easycom_up_title)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_pdf_reader = resolveEasyComponent("up-pdf-reader",_easycom_up_pdf_reader)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-pdf-reader PDF 阅读','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-pdf-reader PDF 阅读','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "基础用法（web-view 加载 PDF）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("view", _uM({ class: "weapp-tw-border height-switch" }), [
                  _cV(_component_up_button, _uM({
                    text: "高度 600px",
                    type: "primary",
                    plain: height.value != '600px',
                    size: "mini",
                    class: "height-option",
                    onClick: () => {setHeight('600px')}
                  }), null, 8 /* PROPS */, ["plain", "onClick"]),
                  _cV(_component_up_button, _uM({
                    text: "高度 400px",
                    type: "primary",
                    plain: height.value != '400px',
                    size: "mini",
                    class: "height-option",
                    onClick: () => {setHeight('400px')}
                  }), null, 8 /* PROPS */, ["plain", "onClick"])
                ]),
                _cV(_component_up_pdf_reader, _uM({
                  src: pdfUrl,
                  height: height.value
                }), null, 8 /* PROPS */, ["height"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "说明")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), " up-pdf-reader 基于 web-view + pdf.js 渲染 PDF。Web/小程序端 web-view 会忽略宽高并全屏显示，且同一页面只能渲染一个；App 端可自由调整高度，内容在 web-view 内部滚动。若 PDF 区域空白，请更换为可达的 PDF 地址，或把 baseUrl 换成自部署的 pdf.js 路径。 ")
              ])
            ])
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
const GenSrcSubUviewUltraDemosPdfReaderPdfReaderStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-title", _pS(_uM([["marginBottom", 10]]))], ["demo-title-text", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["height-switch", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["marginBottom", 12]]))], ["height-option", _pS(_uM([["marginRight", 10]]))]])]
