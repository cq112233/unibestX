import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import WeappTailwindcss from './components/WeappTailwindcss.uvue';
import BindClass from './components/BindClass.uvue';
import TButton from './components/t-button.uvue';
import { useAppStore } from '@/src/store/index.uts';


const __sfc__ = defineComponent({
  __name: 'tailwindcss',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const appStore = useAppStore();

const isDark = computed((): boolean => appStore.state.isDark);

function toggleDark(): void {
  const nextMode = appStore.state.isDark ? 'light' : 'dark';
  appStore.setThemeMode(nextMode);
}

const buttonColors: Array<string> = [
  'bg-_b_h000_B',
  'bg-_b_h111_B',
  'bg-_b_h222_B',
  'bg-_b_h333_B',
  'bg-_b_h444_B',
  'bg-_b_h555_B',
  'bg-_b_h666_B',
  'bg-_b_h777_B',
  'bg-_b_h888_B',
  'bg-_b_h999_B',
  'bg-_b_haaa_B',
  'bg-_b_hbbb_B',
  'bg-_b_hccc_B',
  'bg-_b_hddd_B',
  'bg-_b_heee_B',
  'bg-_b_hfff_B'
];

const globalNum = ref(0);

const buttonClass = computed((): string => {
  const index: number = globalNum.value % buttonColors.length;
  return buttonColors[index];
});

const templateCorpusDynamicClass = computed((): string => {
  return 'template-corpus-dynamic bg-_b_h68c828_B text-slate-700 text-_b26px_B w-_b323px_B h-_b45px_B leading-_b45px_B px-3';
});

function setGlobalNum(num: number): void {
  globalNum.value = num;
}

onLoad((): void => {
  console.log('欢迎使用 weapp-tailwindcss 模板', " at src/sub/tailwindcss/tailwindcss.uvue:53");
});

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), null, _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", null, [
            _cV(_component_NavBar, _uM({
              title: "weapp-tailwindcss 示例",
              "auto-back": true,
              "safe-area-inset-top": true
            })),
            _cE("view", _uM({
              class: _nC(["content", _uM({ dark: unref(isDark) })])
            }), [
              _cV(unref(WeappTailwindcss)),
              _cV(unref(BindClass)),
              _cE("button", _uM({
                class: "mt-4 w-64 rounded-full bg-_b_heccc68_B px-4 py-2 text-white dark_cbg-_b_h3498db_B",
                onClick: toggleDark
              }), [
                _cE("text", null, _tD(unref(isDark) ? '切换到亮色模式' : '切换到暗色模式'), 1 /* TEXT */)
              ]),
              _cE("view", _uM({ class: "w-full bg-_b_h164e63_B p-_b12px_B issue-1002-probe" }), [
                _cE("text", _uM({ class: "text-xs text-white" }), "issue-1002 text-xs"),
                _cE("text", _uM({ class: "text-sm text-white" }), "issue-1002 text-sm"),
                _cE("text", _uM({ class: "text-base text-white" }), "issue-1002 text-base"),
                _cE("text", _uM({ class: "text-xl text-white" }), "issue-1002 text-xl"),
                _cE("view", _uM({ class: "mt-_b8px_B h-_b48px_B w-_b48px_B rounded-full bg-_b_hf21903_B" })),
                _cE("text", _uM({ class: "issue-1002-apply" }), "issue-1002 scoped apply")
              ]),
              _cE("view", _uM({ class: "issue-902-theme-probe issue-902-theme-scope bg-primary p-_b12px_B text-white" }), [
                _cE("text", null, "issue 902 theme variable")
              ]),
              _cE("view", _uM({ class: "template-corpus-card flex flex-col gap-3 rounded-_b28px_B border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white shadow-xl wx_cbg-blue-500 h5_cbg-green-500 harmony_cbg-_b_hc64b4b_B ios_cbg-_b_h0169f0_B android_cbg-_b_h2d6f08_B dark_cbg-white dark_ch5_cbg-_b_h0169f0_B" }), [
                _cE("view", _uM({ class: "template-corpus-radial bg-_b_he0f2fe_B px-_b48px_B py-_b24px_B text-_b_h123456_B" }), [
                  _cE("text", null, "template corpus radial")
                ]),
                _cE("view", _uM({ class: "template-corpus-space space-y-2" }), [
                  _cE("view", _uM({ class: "rounded-_b20px_B bg-white px-3 py-1 text-_b26px_B text-slate-700" }), [
                    _cE("text", null, "space item 1")
                  ]),
                  _cE("view", _uM({
                    class: _nC(unref(templateCorpusDynamicClass))
                  }), [
                    _cE("text", null, "space item 2")
                  ], 2 /* CLASS */)
                ]),
                _cE("view", _uM({ class: "template-corpus-apply" }), [
                  _cE("text", null, "apply corpus")
                ])
              ]),
              _cE("view", _uM({ class: "my-3 w-full border-t border-solid border-gray-200" })),
              _cE("text", _uM({ class: "text-xl text-gray-600_f95" }), " 写法示例Start! "),
              _cE("view", _uM({ class: "mt-_b13_d14758px_B flex flex-col items-center" }), [
                _cE("text", _uM({ class: "w-32 rounded-md bg-_b_hf21903_B py-2 text-center text-white" }), " 圆角+背景+文本 "),
                _cE("view", _uM({ class: "mt-3" }), [
                  _cE("button", _uM({
                    class: _nC(["w-64 text-white", unref(buttonClass)]),
                    onClick: () => {setGlobalNum(unref(globalNum) + 1)}
                  }), " click here to inc " + _tD(unref(globalNum)), 11 /* TEXT, CLASS, PROPS */, ["onClick"])
                ]),
                _cE("view", _uM({ class: "test" }), [
                  _cE("text", _uM({ class: "text-_b_hda0e3c_B text-center" }), " @apply 多端写法示例 ")
                ]),
                _cE("view", _uM({ class: "theme-mode-demo mt-4 rounded bg-white px-4 py-3 text-slate-900 system-dark_cbg-slate-900 system-dark_ctext-slate-100 dark_cbg-zinc-900 dark_ctext-zinc-50" }), [
                  _cE("text", null, "uni-app x Tailwind CSS v4 system dark"),
                  _cE("view", _uM({ class: "theme-dark mt-2 rounded bg-white px-3 py-2 text-slate-900 dark_cbg-zinc-950 dark_ctext-zinc-50" }), [
                    _cE("text", null, "uni-app x Tailwind CSS v4 manual dark")
                  ])
                ]),
                _cV(unref(TButton), _uM({
                  "t-class": "bg-_b_h0977ee_B text-_b31rpx_B",
                  "t-class-content": "px-_b29rpx_B"
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", null, "issue 977 t-class")
                  ]),
                  _: 1 /* STABLE */
                }))
              ])
            ], 2 /* CLASS */)
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
const GenSrcSubTailwindcssTailwindcssStyles = [_uM([["content", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["paddingTop", "32rpx"], ["paddingBottom", "32rpx"]]))], ["test", _pS(_uM([["marginTop", "24rpx"], ["display", "flex"], ["height", 100], ["width", 222.222], ["alignItems", "center"], ["justifyContent", "center"], ["borderTopLeftRadius", 40], ["borderTopRightRadius", 40], ["borderBottomRightRadius", 40], ["borderBottomLeftRadius", 40], ["backgroundColor", "rgba(49,237,216,0.54)"]]))], ["issue-1002-apply", _pS(_uM([["borderTopLeftRadius", 9999], ["borderTopRightRadius", 9999], ["borderBottomRightRadius", 9999], ["borderBottomLeftRadius", 9999], ["backgroundColor", "#164e63"], ["fontSize", "24rpx"], ["lineHeight", 1.33333], ["color", "#ffffff"]]))]])]
