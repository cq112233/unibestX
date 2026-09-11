import _easycom_up_float_button from '@/uni_modules/uview-ultra/components/up-float-button/up-float-button.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'float-button',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const basicClickCount = ref(0);
const eventLog = ref<string>('点击任意悬浮按钮，事件会打印在这里');

// 菜单项：name 为图标名，未指定的 backgroundColor / color 会退回组件自身的同名属性
const menuList = ref<UTSJSONObject[]>([
  { name: 'star-fill', backgroundColor: '#ff9900', color: '#ffffff' },
  { name: 'chat-fill', backgroundColor: '#3c9cff', color: '#ffffff' },
  { name: 'share-fill', backgroundColor: '#19be6b', color: '#ffffff' }
] as UTSJSONObject[]);

function log(message: string): void {
  eventLog.value = message;
}

function onBasicClick(): void {
  basicClickCount.value = basicClickCount.value + 1;
  log(`click => 基础按钮被点击，第 ${basicClickCount.value} 次`);
}

function onMenuClick(): void {
  log('click => 菜单按钮展开 / 收起');
}

function onCustomClick(): void {
  log('click => 自定义样式按钮被点击');
}

function onDragButtonClick(): void {
  log('click => 可拖动按钮被点击（拖动不会触发这一条）');
}

// item-click 的载荷是原对象浅拷贝 + index，直接用 UTSJSONObject 的取值方法，别走 any
function onItemClick(item: UTSJSONObject): void {
  const index = item.getNumber('index') ?? 0;
  const name = item.getString('name') ?? '';
  log(`item-click => index=${index} name=${name}`);
}

return (): any | null => {

const _component_up_float_button = resolveEasyComponent("up-float-button",_easycom_up_float_button)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-float-button 悬浮按钮','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-float-button 悬浮按钮','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "组件说明"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), "up-float-button 通过 position: fixed 固定在屏幕上，常用于承载「回到顶部 / 客服 / 快速入口」这类全局操作。isMenu 为 true 时，点击主按钮会展开 list 里的子按钮。")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "1. 基础用法（top 定位）"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), "不传 isMenu 时点击只触发 click 事件。本例用 top 而不是 bottom 指定位置，按钮在右上角。"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text mt-_b6px_B" }), "click 次数：" + _tD(basicClickCount.value), 1 /* TEXT */)
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "2. 菜单模式（isMenu + list）"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), "点击主按钮展开 / 收起，主按钮上的 plus 图标会旋转 45° 变成关闭样式。子项点击触发 item-click，载荷是原对象的浅拷贝并附加 index。")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "3. 自定义尺寸与配色"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), "width / height / backgroundColor / color 可整体改外观，默认插槽可以换成任意内容（这里放了一个 edit-pen 图标）。"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text mt-_b6px_B" }), "注意：borderColor 只写入 border-color，组件未设置 border-width / border-style，所以单传 borderColor 不会出现边框。")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "4. 可拖动（draggable）"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), "打开 draggable 后，按住主按钮可以拖到屏幕任意位置，自动夹在窗口内。初始位置仍然由 top / right / bottom 换算而来，拖过一次之后就归用户了。"),
                _cE("text", _uM({ class: "weapp-tw-border demo-text mt-_b6px_B" }), "橙色那个就是。拖动会抑制 click —— 位移超过 8px 就当成拖动，不再触发 click / 不展开菜单。")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "事件日志"),
                _cE("view", _uM({ class: "weapp-tw-border log-box mt-_b10px_B" }), [
                  _cE("text", _uM({ class: "weapp-tw-border log-text" }), _tD(eventLog.value), 1 /* TEXT */)
                ])
              ])
            ]),
            _cV(_component_up_float_button, _uM({
              top: "150px",
              right: "30px",
              onClick: onBasicClick
            })),
            _cV(_component_up_float_button, _uM({
              bottom: "190px",
              right: "30px",
              "is-menu": true,
              list: menuList.value,
              onClick: onMenuClick,
              onItemClick: onItemClick
            }), null, 8 /* PROPS */, ["list"]),
            _cV(_component_up_float_button, _uM({
              bottom: "40px",
              right: "30px",
              "background-color": "#19be6b",
              color: "#ffffff",
              width: "60px",
              height: "60px",
              onClick: onCustomClick
            }), _uM({
              default: withSlotCtx((): any[] => [
                _cV(_component_up_icon, _uM({
                  name: "edit-pen",
                  color: "#ffffff",
                  size: "26"
                }))
              ]),
              _: 1 /* STABLE */
            })),
            _cV(_component_up_float_button, _uM({
              top: "300px",
              right: "30px",
              "background-color": "#f59e0b",
              color: "#ffffff",
              draggable: true,
              onClick: onDragButtonClick
            }), _uM({
              default: withSlotCtx((): any[] => [
                _cV(_component_up_icon, _uM({
                  name: "pushpin",
                  color: "#ffffff",
                  size: "24"
                }))
              ]),
              _: 1 /* STABLE */
            }))
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
const GenSrcSubUviewUltraDemosFloatButtonFloatButtonStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["log-box", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["log-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))]])]
