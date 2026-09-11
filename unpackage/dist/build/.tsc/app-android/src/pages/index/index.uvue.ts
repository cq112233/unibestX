import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { computed } from 'vue';
import { handleBackPressExit } from '../../utils/backPress.uts';
import { onNavbarPageScroll, onNavbarPullDownRefresh, onNavbarReachBottom, stopNavbarPullDownRefresh } from '../../utils/refresh.uts';
import { systemInfo as systemInfoRef } from '../../utils/systemInfo.uts';
import type { SystemInfoType } from '../../utils/systemInfo.uts';

// 用计算属性承接模块级 systemInfo ref，保证模板中可正常自动解包

const __sfc__ = defineComponent({
  __name: 'index',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const systemInfo = computed<SystemInfoType | null>((): SystemInfoType | null => systemInfoRef.value);
;

// 监听 navbar 自定义下拉刷新事件（在 enablePullDownRefresh: true 时生效）
onNavbarPullDownRefresh(() => {
  setTimeout(() => {
    // 数据加载完毕后，手动停止下拉刷新动画状态
    stopNavbarPullDownRefresh();
  }, 1000);
});

// 1. 监听页面滚动（替代原生的 onPageScroll）
onNavbarPageScroll(({ scrollTop }) => {
  console.log('onNavbarPageScroll 触发，当前滚动距离:', scrollTop);
});

// 2. 监听页面触底（替代原生的 onReachBottom）
onNavbarReachBottom(() => {
  console.log('onNavbarReachBottom 触发，已滑动到底部');
  // 执行分页加载下一页等业务逻辑...
});

onBackPress((options: OnBackPressOptions): boolean => {

  if (options.from == 'backbutton') {
    return handleBackPressExit();
  }

  return false;
});

return (): any | null => {

  return _cV(unref(AppKu), _uM({
    "custom-page-class": 'border-radius-12',
    "custom-page-style": 'background-color: transparent;',
    layout: 'navbar',
    "show-back": false,
    "hide-navbar": false,
    "enable-pull-down-refresh": true,
    "page-style": {'navigationBarBackgroundColor':'#ffffff','navigationBarTitleText':'首页','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "custom-page-class": 'border-radius-12',
        "custom-page-style": 'background-color: transparent;',
        "show-back": false,
        "hide-navbar": false,
        "enable-pull-down-refresh": true,
        "page-style": {'navigationBarBackgroundColor':'#ffffff','navigationBarTitleText':'首页','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border" }), [
            _cE("view", _uM({ class: "weapp-tw-border content-container" }), [
              _cE("image", _uM({
                class: "wtu-1ijr6ye-0 wtu-jhzgjb-1 wtu-1kpaxbq-2 wtu-76k8bv-3 wtu-u3sk51-4",
                src: "/static/logo.png"
              })),
              _cE("text", _uM({ class: "weapp-tw-border wtu-11fqucj-5 wtu-1h272rc-6 wtu-1kpaxbq-2 wtu-1ni8q32-7 wtu-a7oh1k-8" }), _tD(systemInfo.value?.appTitle ?? ''), 1 /* TEXT */),
              _cE("text", _uM({ class: "weapp-tw-border wtu-6d0iwi-9 wtu-6kdfg0-a wtu-1uoczot-b wtu-2lciq2-c wtu-1ax9487-d" }), " 最好用的 uni-appX 开发模板 "),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1j2jqw-e wtu-167by10-f wtu-1if6fbe-g wtu-13uepsk-h wtu-bb1xdk-i wtu-mm3ayz-j wtu-uhfqvn-k wtu-194vqw9-l wtu-3a2iag-m wtu-y7fbel-n wtu-u0kjb1-o wtu-14wfwos-p" }), [
                _cE("view", _uM({ class: "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r" }), [
                  _cE("text", _uM({ class: "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u" }), "编译平台"),
                  _cE("text", _uM({ class: "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-16wxq6m-x" }), _tD(systemInfo.value?.platformName ?? ''), 1 /* TEXT */)
                ]),
                _cE("view", _uM({ class: "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10" })),
                _cE("view", _uM({ class: "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r" }), [
                  _cE("text", _uM({ class: "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u" }), "当前环境"),
                  _cE("text", _uM({
                    class: "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w",
                    style: _nS(_uM({ color: (systemInfo.value?.env == 'test' ? '#d97706' : (systemInfo.value?.env == 'production' ? '#dc2626' : '#059669')) }))
                  }), _tD(systemInfo.value?.envName ?? ''), 5 /* TEXT, STYLE */)
                ]),
                _cE("view", _uM({ class: "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10" })),
                _cE("view", _uM({ class: "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r" }), [
                  _cE("text", _uM({ class: "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u" }), "渲染模式"),
                  _cE("text", _uM({ class: "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-1qqe9yz-11" }), _tD(systemInfo.value?.isVapor == true ? 'Vapor' : 'VDOM'), 1 /* TEXT */)
                ]),
                _cE("view", _uM({ class: "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10" })),
                _cE("view", _uM({ class: "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r" }), [
                  _cE("text", _uM({ class: "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u" }), "应用版本"),
                  _cE("text", _uM({ class: "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-1eeu7o1-12" }), "v" + _tD(systemInfo.value?.appVersion ?? ''), 1 /* TEXT */)
                ]),
                _cE("view", _uM({ class: "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10" })),
                _cE("view", _uM({ class: "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r" }), [
                  _cE("text", _uM({ class: "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u" }), "编译引擎"),
                  _cE("text", _uM({ class: "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-1uoczot-b" }), _tD(systemInfo.value?.compilerVersion ?? ''), 1 /* TEXT */)
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-1ni8q32-7 wtu-f2chv7-13 wtu-k8abjg-14 wtu-1kxtjp2-15 wtu-w9w6vm-16" }), " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + weapp-tailwindcss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了 ECharts 图表、主题配置、暗黑模式、加密方式配置等常用功能与基本组件，让你编写 uni-appX 拥有 best 体验。 ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1f7ofdn-1c" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-joy599-1d" }), " ⚡ 渲染模式：本项目全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　Vapor 蒸汽模式是新一代渲染引擎，渲染性能超过原生，Android 端语法要求更宽松，AI 友好度与动态性更强；从 2026 年起将逐渐替代老的 VDOM 模式。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　推荐使用 Vapor 蒸汽模式，可在 manifest.json 中按需切换回 VDOM 模式。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　注意：Vapor 模式下开发过的代码，切换回 VDOM 模式可能因编译检查更严格而报类型或语法错误，请按需选择。 ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-xwsxph-1f" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-4yix9d-1g" }), " 🧪 沙盒独立调试模式（Page Sandbox）：单页/模块秒级极速开发 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　大型项目或分包页面众多时，开启沙盒模式可仅编译指定目标页面（自动置为启动首页），跳过全量页面构建与 TabBar 启动开销，启动与热重载快如闪电。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-1kxtjp2-15 wtu-2lciq2-c wtu-w9w6vm-16" }), " 　　• 方式一（代码级・推荐）：在任意页面的 definePage 中配置： "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k" }), " 　　 - debug: true（开启当前页面沙盒调试） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k" }), " 　　 - debugHome: true（将当前页面设为沙盒默认启动首页，排在第 1 位） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k" }), " 　　 - debug: false（拥有最高一票否决权，调试完成后改回 false 即可退出沙盒） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-1kxtjp2-15 wtu-2lciq2-c wtu-w9w6vm-16 wtu-aycepd-1l" }), " 　　• 方式二（环境级・批量）：在 .env 文件中配置： "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k" }), " 　　 - VITE_DEV_SANDBOX=true（开启环境级沙盒） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k" }), " 　　 - VITE_DEV_SANDBOX_PAGES=src/sub/auth/login, src/sub/auth/*（指定单页/多页/通配符路径） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-t0imyz-1h wtu-1eeu7o1-12 wtu-2lciq2-c wtu-1dx92xw-1j wtu-hqukzp-1k" }), " 　　 ⭐ 优先级规则：.env 开启时拥有最高优先级，完全以 .env 指定的页面为主（自动覆盖代码内的 debug 声明）；.env 关闭时才回退按代码级 debug 独立调试。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-4yix9d-1g wtu-2lciq2-c wtu-w9w6vm-16 wtu-1ax9487-d" }), " 　　🔒 安全保护：调试期间全内存路由接管，绝不修改与污染 pages.config.json 生产全量配置！ ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1ed0d8l-1m" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-1ein7bi-1n" }), " 🎨 样式引擎：Tailwind CSS v4 + weapp-tailwindcss "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　weapp-tailwindcss 是 uni-app X 的 Tailwind CSS 适配方案，类名写法与 Web 端完全一致：支持方括号任意值（text-[14px]、mt-[12px]、bg-[#3b82f6] 等），免去手写 CSS。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　内置 dark: 暗黑变体与 wx:、h5:、app: 等平台变体，一套类名多端生效；支持 @apply 样式复用，可在「基础 → weapp-tailwindcss Demo」查看完整示例。 ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-pb3jfp-1o" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-16wxq6m-x" }), " 📦 UI 组件库说明（当前分支未内置组件库） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　当前 main 分支为轻量纯净底座，未自带第三方 UI 组件库，方便开发者按需接入或使用 Tailwind CSS 灵活封装。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　如需使用开箱即用的成套组件库，可切换至对应组件库分支： "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-16wxq6m-x wtu-2lciq2-c wtu-w9w6vm-16" }), " 　　• uniX-rice-ui 分支：集成 Rice UI 组件库（推荐，官方团队持续维护） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-16wxq6m-x wtu-2lciq2-c wtu-w9w6vm-16" }), " 　　• uniX-uview-ultra 分支：集成 uview-ultra 组件库 ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1nk3btt-1p" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-1eeu7o1-12" }), " ⚠️ 页面路由配置须知（重要） "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 　　本项目内置 vite-plugin-uni-pages 自动文件路由插件：当页面代码中有 definePage 或 <route> 配置时，插件会自动双向同步 pages.config.json 和 pages.json；当页面中未写配置时，请在 pages.config.json 中配置，也会自动同步到 pages.json。 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-aycepd-1l wtu-1eeu7o1-12 wtu-1dx92xw-1j" }), " 　　注意：pages.json 为自动构建产物，切勿直接在 pages.json 中修改！ ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1f7ofdn-1c wtu-1s0zndm-1q" }), [
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 📄 文件路由 — 自动扫描路由，通过 pages.config.json / definePage 统一配置 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " ⚡ 渲染模式 — 全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🧱 样式引擎 — Tailwind CSS v4 + weapp-tailwindcss，方括号任意值与 dark: 变体全端生效 "),
                _cE("text", _uM({
                  class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e",
                  style: _nS(_uM({"line-height":"26px"}))
                }), " 🧩 UI 组件库 — 集成 uview-ultra 组件库，按钮、标签、弹窗等开箱即用 ", 4 /* STYLE */),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 "),
                _cE("text", _uM({
                  class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e",
                  style: _nS(_uM({"line-height":"26px"}))
                }), " 🎨 图标字体 — 支持 uni-icon、lime-icon、up-icon 三套图标方案 ", 4 /* STYLE */),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🎭 主题配置 — 五种预设主题色 + 暗黑模式（auto / light / dark），原生与组件同步生效 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 🔐 加密配置 — 内置 unix-crypto，AES / DES / MD5 / SHA-256 / HMAC-SHA1 / Base64 / RSA 全端加密解密 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 "),
                _cE("text", _uM({ class: "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16" }), " 📋 分页列表 — z-paging-x 分页加载，Tab 筛选、错误模拟、空数据 ")
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
const GenSrcPagesIndexIndexStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["wtu-1ijr6ye-0", _pS(_uM([["width", 100]]))], ["wtu-jhzgjb-1", _pS(_uM([["height", 100]]))], ["wtu-1kpaxbq-2", _pS(_uM([["marginLeft", "auto"], ["marginRight", "auto"]]))], ["wtu-76k8bv-3", _pS(_uM([["marginTop", 20]]))], ["wtu-u3sk51-4", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["wtu-11fqucj-5", _pS(_uM([["fontSize", 26]]))], ["wtu-1h272rc-6", _pS(_uM([["--tw-font-weight", "var(--font-weight-semibold, 600)"], ["fontWeight", 600]]))], ["wtu-1ni8q32-7", _pS(_uM([["marginTop", 10]]))], ["wtu-a7oh1k-8", _pS(_uM([["color", "#d14328"]]))], ["wtu-6d0iwi-9", _pS(_uM([["textAlign", "center"]]))], ["wtu-6kdfg0-a", _pS(_uM([["fontSize", 18]]))], ["wtu-1uoczot-b", _pS(_uM([["color", "#334155"]]))], ["wtu-2lciq2-c", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-1ax9487-d", _pS(_uM([["marginTop", 6]]))], ["wtu-1j2jqw-e", _pS(_uM([["marginLeft", 16], ["marginRight", 16]]))], ["wtu-167by10-f", _pS(_uM([["marginTop", 16]]))], ["wtu-1if6fbe-g", _pS(_uM([["paddingLeft", 6], ["paddingRight", 6]]))], ["wtu-13uepsk-h", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["wtu-bb1xdk-i", _pS(_uM([["borderTopLeftRadius", 14], ["borderTopRightRadius", 14], ["borderBottomRightRadius", 14], ["borderBottomLeftRadius", 14]]))], ["wtu-mm3ayz-j", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-uhfqvn-k", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-194vqw9-l", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-3a2iag-m", _pS(_uM([["display", "flex"]]))], ["wtu-y7fbel-n", _pS(_uM([["flexDirection", "row"]]))], ["wtu-u0kjb1-o", _pS(_uM([["alignItems", "center"]]))], ["wtu-14wfwos-p", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-1f3lg56-q", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1oyjgn1-r", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1qvyibs-s", _pS(_uM([["fontSize", 10]]))], ["wtu-1jbj2n1-t", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-5hesch-u", _pS(_uM([["marginBottom", 2]]))], ["wtu-127y8dy-v", _pS(_uM([["fontSize", 12]]))], ["wtu-oogtoa-w", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-16wxq6m-x", _pS(_uM([["color", "#4f46e5"]]))], ["wtu-w81r72-y", _pS(_uM([["width", 1]]))], ["wtu-cc0q1m-z", _pS(_uM([["height", 20]]))], ["wtu-9qzku8-10", _pS(_uM([["backgroundColor", "#e2e8f0"]]))], ["wtu-1qqe9yz-11", _pS(_uM([["color", "#059669"]]))], ["wtu-1eeu7o1-12", _pS(_uM([["color", "#d97706"]]))], ["wtu-f2chv7-13", _pS(_uM([["paddingLeft", 30], ["paddingRight", 30]]))], ["wtu-k8abjg-14", _pS(_uM([["fontSize", 14]]))], ["wtu-1kxtjp2-15", _pS(_uM([["color", "#475569"]]))], ["wtu-w9w6vm-16", _pS(_uM([["--tw-leading", "26px"], ["lineHeight", "26px"]]))], ["wtu-1wmf5qf-17", _pS(_uM([["marginTop", 15]]))], ["wtu-1059bec-18", _pS(_uM([["marginLeft", 30], ["marginRight", 30]]))], ["wtu-6ezqn4-19", _pS(_uM([["paddingLeft", 20], ["paddingRight", 20]]))], ["wtu-byz6wt-1a", _pS(_uM([["paddingTop", 15], ["paddingBottom", 15]]))], ["wtu-ejnzxm-1b", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-1f7ofdn-1c", _pS(_uM([["backgroundColor", "#37c2bc14"]]))], ["wtu-joy599-1d", _pS(_uM([["color", "#0f8f8a"]]))], ["wtu-13jhek8-1e", _pS(_uM([["color", "#666666"]]))], ["wtu-xwsxph-1f", _pS(_uM([["backgroundColor", "#8b5cf614"]]))], ["wtu-4yix9d-1g", _pS(_uM([["color", "#7c3aed"]]))], ["wtu-t0imyz-1h", _pS(_uM([["fontSize", 13]]))], ["wtu-tp9td9-1i", _pS(_uM([["color", "#64748b"]]))], ["wtu-1dx92xw-1j", _pS(_uM([["--tw-leading", "24px"], ["lineHeight", "24px"]]))], ["wtu-hqukzp-1k", _pS(_uM([["paddingLeft", 10]]))], ["wtu-aycepd-1l", _pS(_uM([["marginTop", 4]]))], ["wtu-1ed0d8l-1m", _pS(_uM([["backgroundColor", "#3182ce14"]]))], ["wtu-1ein7bi-1n", _pS(_uM([["color", "#3182ce"]]))], ["wtu-pb3jfp-1o", _pS(_uM([["backgroundColor", "#6366f114"]]))], ["wtu-1nk3btt-1p", _pS(_uM([["backgroundColor", "#f59e0b1a"]]))], ["wtu-1s0zndm-1q", _pS(_uM([["marginBottom", 30]]))]])]
