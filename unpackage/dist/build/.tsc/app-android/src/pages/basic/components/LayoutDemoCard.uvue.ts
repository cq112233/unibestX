import Card from './Card.uvue';


const __sfc__ = defineComponent({
  __name: 'LayoutDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

function navigateToDemo() {
  uni.navigateTo({
    url: '/src/sub/layoutDemo/layoutDemo',
    fail: (err) => {
      console.error('navigateToDemo fail:', err);
    }
  });
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "布局页面示例" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "weapp-tw-border wtu-1k10fln-0 wtu-9bdh7e-1" }), [
        _cE("text", _uM({ class: "weapp-tw-border wtu-1q892sv-2 wtu-sqeomx-3 wtu-1ytm6t9-4" }), " 演示基于 definePage + navbar 布局模板的页面骨架。点击进入后可在示例页中自行编写内容，测试 navbar 顶部导航栏、showBack 返回、hideNavbar、下拉刷新等布局表现。 ")
      ]),
      _cE("view", _uM({
        class: "weapp-tw-border wtu-13sloda-5 wtu-mf1cio-6 wtu-2g0znn-7 wtu-d8wsqp-8 wtu-1li204k-9 wtu-1yvevap-a wtu-13xy5ep-b wtu-t8y181-c",
        onClick: navigateToDemo
      }), [
        _cE("text", _uM({ class: "weapp-tw-border wtu-ytclw4-d wtu-1w72lns-e wtu-1nb8k1y-f" }), "进入布局页面示例")
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsLayoutDemoCardStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["wtu-1k10fln-0", _pS(_uM([["flexDirection", "column"]]))], ["wtu-9bdh7e-1", _pS(_uM([["marginBottom", 16]]))], ["wtu-1q892sv-2", _pS(_uM([["fontSize", 13]]))], ["wtu-sqeomx-3", _pS(_uM([["color", "#64748b"]]))], ["wtu-1ytm6t9-4", _pS(_uM([["--tw-leading", "18px"], ["lineHeight", "18px"]]))], ["wtu-13sloda-5", _pS(_uM([["width", "100%"]]))], ["wtu-mf1cio-6", _pS(_uM([["height", 44]]))], ["wtu-2g0znn-7", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-d8wsqp-8", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-1li204k-9", _pS(_uM([["display", "flex"]]))], ["wtu-1yvevap-a", _pS(_uM([["flexDirection", "row"]]))], ["wtu-13xy5ep-b", _pS(_uM([["alignItems", "center"]]))], ["wtu-t8y181-c", _pS(_uM([["justifyContent", "center"]]))], ["wtu-ytclw4-d", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1w72lns-e", _pS(_uM([["fontSize", 14]]))], ["wtu-1nb8k1y-f", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))]])]
