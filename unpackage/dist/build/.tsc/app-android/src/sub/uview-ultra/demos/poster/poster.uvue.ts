import _easycom_up_title from '@/uni_modules/uview-ultra/components/up-title/up-title.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_poster from '@/uni_modules/uview-ultra/components/up-poster/up-poster.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'poster',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const baseJson = ref<UTSJSONObject>({
  css: {
    width: '375px',
    height: '600px',
    background: 'linear-gradient(to bottom, #0957de, #7c3aed)',
    radius: '12px'
  },
  views: [
    {
      type: 'view',
      css: {
        left: 20,
        top: 20,
        width: 335,
        height: 120,
        background: 'rgba(255, 255, 255, 0.2)',
        radius: 12
      }
    },
    {
      type: 'text',
      text: 'unibestX',
      css: { left: 40, top: 40, width: 240, fontSize: 28, lineHeight: 34, color: '#ffffff', fontWeight: 'bold' }
    },
    {
      type: 'text',
      text: 'uni-app X 开发模板',
      css: { left: 40, top: 84, width: 260, fontSize: 15, lineHeight: 20, color: '#e2e8f0' }
    },
    {
      type: 'image',
      src: '/static/logo.png',
      css: { left: 30, top: 170, width: 100, height: 100, radius: 50 }
    },
    {
      type: 'text',
      text: 'uview-ultra',
      css: { left: 150, top: 188, width: 200, fontSize: 22, lineHeight: 28, color: '#1e293b', fontWeight: 'bold' }
    },
    {
      type: 'text',
      text: '基于 uni-app X 的组件库',
      css: { left: 150, top: 224, width: 200, fontSize: 14, lineHeight: 20, color: '#64748b' }
    },
    {
      type: 'view',
      css: {
        left: 30,
        top: 300,
        width: 315,
        height: 120,
        background: '#f8fafc',
        radius: 12
      }
    },
    {
      type: 'text',
      text: '扫码查看',
      css: { left: 60, top: 320, width: 120, fontSize: 16, lineHeight: 22, color: '#334155', fontWeight: 'bold' }
    },
    {
      type: 'qrcode',
      text: 'https://uview-ultra.lingyun.net',
      css: { left: 200, top: 310, width: 100, foreground: '#0957de', background: '#ffffff', lv: 3 }
    },
    {
      type: 'view',
      css: {
        left: 30,
        top: 440,
        width: 315,
        height: 130,
        background: 'linear-gradient(to right, #f59e0b, #ef4444)',
        radius: 12
      }
    },
    {
      type: 'text',
      text: '2026.08.20',
      css: { left: 60, top: 486, width: 260, fontSize: 24, lineHeight: 30, color: '#ffffff', fontWeight: 'bold' }
    }
  ]
} as UTSJSONObject);

const posterJson = ref<UTSJSONObject>(baseJson.value);

const customJson = ref<UTSJSONObject>({
  css: {
    width: '300px',
    height: '480px',
    background: 'linear-gradient(to bottom, #0f172a, #334155)',
    radius: '8px'
  },
  views: [
    {
      type: 'text',
      text: 'CUSTOM POSTER',
      css: { left: 30, top: 30, width: 240, fontSize: 24, lineHeight: 30, color: '#fbbf24', fontWeight: 'bold' }
    },
    {
      type: 'text',
      text: '自定义样式海报',
      css: { left: 30, top: 74, width: 240, fontSize: 15, lineHeight: 20, color: '#e2e8f0' }
    },
    {
      type: 'qrcode',
      text: 'https://github.com/cq112233/unibestX',
      css: { left: 100, top: 140, width: 100, foreground: '#f8fafc', background: '#ffffff', lv: 3 }
    },
    {
      type: 'text',
      text: '扫码关注',
      css: { left: 30, top: 270, width: 240, fontSize: 16, lineHeight: 22, color: '#94a3b8' }
    },
    {
      type: 'view',
      css: {
        left: 30,
        top: 330,
        width: 240,
        height: 80,
        background: 'linear-gradient(to right, #0ea5e9, #6366f1)',
        radius: 40
      }
    },
    {
      type: 'text',
      text: '立即体验',
      css: { left: 30, top: 360, width: 240, fontSize: 20, lineHeight: 26, color: '#ffffff', fontWeight: 'bold' }
    }
  ]
} as UTSJSONObject);

const posterPath = ref<string>('');
const eventLog = ref<string>('');
const isCustom = ref<boolean>(false);

const posterRef = ref(null as ComponentPublicInstance | null);

function onGenerate() {
  const poster = posterRef.value;
  if (poster == null)
    return;
  poster.$callMethod('exportImage');
  eventLog.value = '正在生成海报...';
}

function onSwitchJson() {
  const poster = posterRef.value;
  if (poster == null)
    return;
  if (isCustom.value) {
    posterJson.value = baseJson.value;
    isCustom.value = false;
    eventLog.value = '已切换回默认样式，正在生成...';
  }
  else {
    posterJson.value = customJson.value;
    isCustom.value = true;
    eventLog.value = '已切换自定义样式，正在生成...';
  }
  poster.$callMethod('exportImage');
}

function onExport(event: UTSJSONObject) {
  const path = event.path;
  if (path != null && path.toString().length > 0) {
    posterPath.value = path.toString();
    eventLog.value = '生成成功';
  }
  else {
    eventLog.value = '生成失败：未返回图片路径';
  }
}

function onError(event: UTSJSONObject) {
  const message = event.message;
  eventLog.value = `error => ${message == null ? '生成失败' : message.toString()}`;
}

return (): any | null => {

const _component_up_title = resolveEasyComponent("up-title",_easycom_up_title)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_poster = resolveEasyComponent("up-poster",_easycom_up_poster)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-poster 海报','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-poster 海报','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "基础用法（生成海报图片）")
                  ]),
                  _: 1 /* STABLE */
                })),
                posterPath.value.length > 0
                  ? _cE("view", _uM({
                      key: 0,
                      class: "weapp-tw-border poster-preview"
                    }), [
                      _cE("image", _uM({
                        src: posterPath.value,
                        class: "poster-image",
                        mode: "aspectFit"
                      }), null, 8 /* PROPS */, ["src"])
                    ])
                  : _cE("view", _uM({
                      key: 1,
                      class: "weapp-tw-border poster-placeholder"
                    }), [
                      _cE("text", _uM({ class: "weapp-tw-border poster-placeholder-text" }), "点击下方按钮生成海报")
                    ]),
                _cE("view", _uM({ class: "weapp-tw-border btn-row mt-_b10px_B" }), [
                  _cV(_component_up_button, _uM({
                    text: "生成海报",
                    type: "primary",
                    size: "small",
                    class: "demo-btn",
                    onClick: onGenerate
                  })),
                  _cV(_component_up_button, _uM({
                    text: "切换样式",
                    type: "primary",
                    plain: "",
                    size: "small",
                    class: "demo-btn",
                    onClick: onSwitchJson
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
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), " up-poster 通过 :json 配置海报内容（背景/文本/图片/二维码），调用 exportImage() 生成图片并触发 export 事件返回临时路径。 ")
              ])
            ]),
            _cV(_component_up_poster, _uM({
              ref_key: "posterRef",
              ref: posterRef,
              json: posterJson.value,
              onExport: onExport,
              onError: onError
            }), null, 8 /* PROPS */, ["json"])
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
const GenSrcSubUviewUltraDemosPosterPosterStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-title", _pS(_uM([["marginBottom", 10]]))], ["demo-title-text", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["poster-preview", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["width", "100%"], ["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["poster-image", _pS(_uM([["width", 260], ["height", 400]]))], ["poster-placeholder", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["width", "100%"], ["height", 200], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["poster-placeholder-text", _pS(_uM([["fontSize", 13], ["color", "#94a3b8"]]))], ["log-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["btn-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["demo-btn", _pS(_uM([["marginRight", 10]]))]])]
