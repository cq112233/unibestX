import _easycom_up_parse from '@/uni_modules/uview-ultra/components/up-parse/up-parse.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'parse',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const content1 = ref(`<p>欢迎使用 uview-ultra 富文本解析组件，这里是一段很长的描述文字，用来测试换行和基础排版能力。</p><img src='https://cdn.uviewui.com/uview/swiper/2.jpg' />`);
const content2 = ref(`<p>这段文本可以长按被选中和复制，因为开启了 selectable 属性。您可以尝试长按我试试。</p>`);
const content3 = ref(`<h3>这是一级标题</h3><p>这段文字使用了 tagStyle 设置特定的样式，比如颜色和字号，还有加粗效果。</p>`);

const tagStyle = ref({
  p: 'color: #606266; font-size: 14px; line-height: 1.8;',
  h3: 'color: #2979ff; font-weight: bold; margin-bottom: 10px;'
});

return (): any | null => {

const _component_up_parse = resolveEasyComponent("up-parse",_easycom_up_parse)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Parse 富文本解析','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Parse 富文本解析','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cV(_component_up_parse, _uM({ content: content1.value }), null, 8 /* PROPS */, ["content"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "长按可复制 (selectable)"),
                _cV(_component_up_parse, _uM({
                  content: content2.value,
                  selectable: true
                }), null, 8 /* PROPS */, ["content"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义样式 (tagStyle)"),
                _cV(_component_up_parse, _uM({
                  content: content3.value,
                  "tag-style": tagStyle.value
                }), null, 8 /* PROPS */, ["content", "tag-style"])
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
const GenSrcSubUviewUltraDemosParseParseStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
