import _easycom_up_swipe_action_item from '@/uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue'
import _easycom_up_swipe_action from '@/uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'swipe-action',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const options1 = ref<UTSJSONObject[]>([
  {
    text: '删除',
    style: {
      backgroundColor: '#f56c6c'
    } as UTSJSONObject
  } as UTSJSONObject
]);

const options2 = ref<UTSJSONObject[]>([
  {
    text: '置顶',
    style: {
      backgroundColor: '#2979ff'
    } as UTSJSONObject
  } as UTSJSONObject,
  {
    text: '删除',
    style: {
      backgroundColor: '#f56c6c'
    } as UTSJSONObject
  } as UTSJSONObject
]);

return (): any | null => {

const _component_up_swipe_action_item = resolveEasyComponent("up-swipe-action-item",_easycom_up_swipe_action_item)
const _component_up_swipe_action = resolveEasyComponent("up-swipe-action",_easycom_up_swipe_action)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'SwipeAction 滑动操作','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'SwipeAction 滑动操作','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cV(_component_up_swipe_action, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_swipe_action_item, _uM({ options: options1.value }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("view", _uM({ class: "weapp-tw-border p-_b15px_B bg-_b_hfff_B rounded-_b5px_B" }), [
                          _cE("text", _uM({ class: "weapp-tw-border" }), "操作选项")
                        ])
                      ]),
                      _: 1 /* STABLE */
                    }), 8 /* PROPS */, ["options"])
                  ]),
                  _: 1 /* STABLE */
                }))
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "多按钮"),
                _cV(_component_up_swipe_action, null, _uM({
                  default: withSlotCtx((): any[] => [
                    _cV(_component_up_swipe_action_item, _uM({ options: options2.value }), _uM({
                      default: withSlotCtx((): any[] => [
                        _cE("view", _uM({ class: "weapp-tw-border p-_b15px_B bg-_b_hfff_B rounded-_b5px_B" }), [
                          _cE("text", _uM({ class: "weapp-tw-border" }), "多按钮操作")
                        ])
                      ]),
                      _: 1 /* STABLE */
                    }), 8 /* PROPS */, ["options"])
                  ]),
                  _: 1 /* STABLE */
                }))
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
const GenSrcSubUviewUltraDemosSwipeActionSwipeActionStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
