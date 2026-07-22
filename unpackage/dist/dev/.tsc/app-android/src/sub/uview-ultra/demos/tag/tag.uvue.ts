import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_tag from '@/uni_modules/uview-ultra/components/up-tag/up-tag.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue'


const __sfc__ = defineComponent({
  __name: 'tag',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const showTag = ref(true)
function closeTag() {
  showTag.value = false
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_tag = resolveEasyComponent("up-tag",_easycom_up_tag)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-tag 标签'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }), [
            _cV(_component_NavBar, _uM({
              title: "up-tag 标签",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("view", _uM({ class: "p-16px" }), [
              _cE("view", _uM({ class: "demo-block" }), [
                _cE("text", _uM({ class: "demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "flex-row items-center flex-wrap" }), [
                  _cV(_component_up_tag, _uM({
                    text: "标签",
                    type: "primary",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "成功",
                    type: "success",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "警告",
                    type: "warning",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "危险",
                    type: "error",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "镂空标签"),
                _cE("view", _uM({ class: "flex-row items-center flex-wrap" }), [
                  _cV(_component_up_tag, _uM({
                    text: "镂空",
                    type: "primary",
                    plain: true,
                    size: "normal",
                    class: "mr-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "镂空",
                    type: "success",
                    plain: true,
                    size: "normal",
                    class: "mr-10px"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "不同尺寸"),
                _cE("view", _uM({ class: "flex-row items-center flex-wrap" }), [
                  _cV(_component_up_tag, _uM({
                    text: "大尺寸",
                    size: "large",
                    type: "primary",
                    class: "mr-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "普通",
                    size: "normal",
                    type: "success",
                    class: "mr-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "迷你",
                    size: "mini",
                    type: "warning",
                    class: "mr-10px"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "不同形状"),
                _cE("view", _uM({ class: "flex-row items-center flex-wrap" }), [
                  _cV(_component_up_tag, _uM({
                    text: "半圆角",
                    shape: "circle",
                    type: "primary",
                    class: "mr-10px"
                  })),
                  _cV(_component_up_tag, _uM({
                    text: "直角",
                    shape: "square",
                    type: "primary",
                    class: "mr-10px"
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "demo-block mt-12px" }), [
                _cE("text", _uM({ class: "demo-label" }), "可关闭标签"),
                _cE("view", _uM({ class: "flex-row items-center flex-wrap" }), [
                  isTrue(showTag.value)
                    ? _cV(_component_up_tag, _uM({
                        key: 0,
                        text: "点击关闭",
                        type: "primary",
                        closable: "",
                        onClose: closeTag,
                        class: "mr-10px"
                      }))
                    : _cC("v-if", true)
                ])
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
const GenSrcSubUviewUltraDemosTagTagStyles = [_uM([["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["flex-wrap", _pS(_uM([["flexWrap", "wrap"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["mb-10px", _pS(_uM([["marginBottom", 10]]))], ["mr-10px", _pS(_uM([["marginRight", 10]]))], ["mt-12px", _pS(_uM([["marginTop", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["pb-30px", _pS(_uM([["paddingBottom", 30]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))]])]
