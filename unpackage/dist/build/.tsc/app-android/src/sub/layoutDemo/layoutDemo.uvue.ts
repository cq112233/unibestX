import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { computed, ref } from 'vue';
import { availableHeight } from '@/src/utils/systemInfo.uts';
type DemoItem = {
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  avatar: string;
  color: string;
};


const __sfc__ = defineComponent({
  __name: 'layoutDemo',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

/**
 * 开发者可写区域高度（框架已按当前布局算好，navbar / default 通用）
 * 根容器 flex-1 即撑满该高度；此值用于需要显式定高/定位时绑定。
 */
const computedAvailableHeight = computed<number>((): number => availableHeight.value ?? 0);

/** 最小模板（内部自写 scroll-view 的可照抄骨架） */
const codeTemplate = `<view class="flex flex-col flex-1">
  <!-- 顶部固定内容（可选） -->

  <scroll-view direction="vertical" class="flex-1 flex flex-col"
    @scroll="onScroll" @scrolltolower="onLower">
    <!-- 滚动内容 -->
  </scroll-view>
</view>`;

/** 滚动演示数据 */
const demoItems: Array<DemoItem> = [
  { title: '首页', subtitle: 'Home', desc: '根容器 flex-1 撑满开发高度，滚动区域在内部自写 scroll-view。', tag: '首页', avatar: '首', color: '#3b82f6' },
  { title: '向下滑动', subtitle: 'Scroll me', desc: '此列表由内部 scroll-view 滚动，@scroll 会实时更新 scrollTop。', tag: '滚动', avatar: '滚', color: '#10b981' },
  { title: '第三项', subtitle: 'Item 3', desc: '滚动超出后内部 scroll-view 接管、触底检测独立生效。', tag: '示例', avatar: '3', color: '#f59e0b' },
  { title: '第四项', subtitle: 'Item 4', desc: '触底时触发 @scrolltolower，次数在上方指标卡累加。', tag: '触底', avatar: '4', color: '#ec4899' },
  { title: '第五项', subtitle: 'Item 5', desc: '根容器必须为 view（非 scroll-view），避免与布局产生双重滚动冲突。', tag: '规范', avatar: '5', color: '#8b5cf6' },
  { title: '第六项', subtitle: 'Item 6', desc: '可用高度 computedAvailableHeight 即你要写的高度，框架已算好。', tag: '高度', avatar: '6', color: '#06b6d4' },
  { title: '第七项', subtitle: 'Item 7', desc: 'VITE_TABBAR_MODE=1 时不包含底部 tabbar 区域，底部非编辑区。', tag: '模式', avatar: '7', color: '#6366f1' },
  { title: '第八项', subtitle: 'Item 8', desc: '按 H5 正常开发即可，无需再手算状态栏/导航栏/tabbar 偏移。', tag: 'H5', avatar: '8', color: '#0ea5e9' }
];

/** 当前滚动位置与触底计数（由内部 scroll-view 驱动） */
const scrollTop = ref(0);
const reachBottomCount = ref(0);

function handleScroll(e: UniScrollEvent): void {
  scrollTop.value = Math.ceil(e.detail.scrollTop);
}
function handleScrollToLower(): void {
  reachBottomCount.value++;
}

return (): any | null => {

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'布局页面示例','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'布局页面示例','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border flex flex-col flex-1 items-center px-_b16px_B pt-_b8px_B" }), [
            _cE("view", _uM({
              class: "weapp-tw-border w-full mb-_b16px_B",
              style: _nS(_uM({ maxWidth: '520px' }))
            }), [
              _cE("view", _uM({ class: "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B flex flex-col" }), [
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center mb-_b10px_B" }), [
                  _cE("view", _uM({ class: "weapp-tw-border w-_b6px_B h-_b16px_B rounded-_b3px_B bg-_b_h3b82f6_B mr-_b8px_B" })),
                  _cE("text", _uM({ class: "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B" }), "布局骨架示例"),
                  _cE("text", _uM({ class: "weapp-tw-border text-_b11px_B text-_b_h94a3b8_B ml-_b8px_B px-_b6px_B py-_b2px_B rounded-_b4px_B bg-_b_hf1f5f9_B" }), "说明")
                ]),
                _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h64748b_B leading-_b19px_B" }), " 本页演示用 navbar / default 布局写一个能滚动的页面骨架：根容器用 view + flex-1，滚动区域在内部自写 scroll-view，内容高度直接用 computedAvailableHeight，其余交给框架。 "),
                _cE("view", _uM({ class: "weapp-tw-border flex-row flex-wrap mt-_b12px_B" }), [
                  _cE("view", _uM({ class: "weapp-tw-border rounded-_b6px_B px-_b8px_B py-_b4px_B bg-_b_heff6ff_B mr-_b8px_B mb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b11px_B text-_b_h1d4ed8_B" }), "① 根用 view")
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border rounded-_b6px_B px-_b8px_B py-_b4px_B bg-_b_hecfdf5_B mr-_b8px_B mb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b11px_B text-_b_h065f46_B" }), "② 内部 scroll-view")
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border rounded-_b6px_B px-_b8px_B py-_b4px_B bg-_b_hfffbeb_B mr-_b8px_B mb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b11px_B text-_b_h92400e_B" }), "③ 高度抄 computedAvailableHeight")
                  ])
                ])
              ])
            ], 4 /* STYLE */),
            _cE("scroll-view", _uM({
              direction: "vertical",
              class: "w-full flex flex-col flex-1",
              style: _nS(_uM({ maxWidth: '520px' })),
              "lower-threshold": 50,
              onScroll: handleScroll,
              onScrolltolower: handleScrollToLower
            }), [
              _cE("view", _uM({ class: "weapp-tw-border flex flex-col" }), [
                _cE("view", _uM({ class: "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col" }), [
                  _cE("view", _uM({ class: "weapp-tw-border pb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B" }), "你只需要三步")
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B" })),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-start mb-_b10px_B" }), [
                    _cE("view", _uM({ class: "weapp-tw-border w-_b20px_B h-_b20px_B rounded-_b5px_B bg-_b_hdbeafe_B flex items-center justify-center mr-_b10px_B flex-none" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B font-bold text-_b_h1d4ed8_B" }), "1")
                    ]),
                    _cE("view", _uM({ class: "weapp-tw-border flex flex-row flex-wrap flex-1" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), "根容器写 "),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h1d4ed8_B leading-_b20px_B" }), "view class=\"flex flex-col flex-1\""),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), "，撑满开发高度。")
                    ])
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-start mb-_b10px_B" }), [
                    _cE("view", _uM({ class: "weapp-tw-border w-_b20px_B h-_b20px_B rounded-_b5px_B bg-_b_hdbeafe_B flex items-center justify-center mr-_b10px_B flex-none" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B font-bold text-_b_h1d4ed8_B" }), "2")
                    ]),
                    _cE("view", _uM({ class: "weapp-tw-border flex flex-row flex-wrap flex-1" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), "要滚动的区域，在根里面自写一个 "),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h1d4ed8_B leading-_b20px_B" }), "scroll-view"),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), " 即可。")
                    ])
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-start" }), [
                    _cE("view", _uM({ class: "weapp-tw-border w-_b20px_B h-_b20px_B rounded-_b5px_B bg-_b_hdbeafe_B flex items-center justify-center mr-_b10px_B flex-none" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B font-bold text-_b_h1d4ed8_B" }), "3")
                    ]),
                    _cE("view", _uM({ class: "weapp-tw-border flex flex-row flex-wrap flex-1" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), "内容高度直接绑定 "),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h1d4ed8_B leading-_b20px_B" }), "computedAvailableHeight"),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), "，其余交给框架。")
                    ])
                  ])
                ]),
                _cE("view", _uM({ class: "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col" }), [
                  _cE("view", _uM({ class: "weapp-tw-border pb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B" }), "约定细节")
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B" })),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-start mb-_b10px_B" }), [
                    _cE("view", _uM({ class: "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_h3b82f6_B mr-_b8px_B mt-_b8px_B" })),
                    _cE("view", _uM({ class: "weapp-tw-border flex-1 flex-col" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), " 根容器用 view，不要用 scroll-view 当根，否则和布局的滚动容器双重滚动冲突。 ")
                    ])
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B" })),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-start mb-_b10px_B" }), [
                    _cE("view", _uM({ class: "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_h10b981_B mr-_b8px_B mt-_b8px_B" })),
                    _cE("view", _uM({ class: "weapp-tw-border flex-1 flex-col" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), " 可用高度 computedAvailableHeight 就是你要写的高度，状态栏/导航栏/tabbar 框架已算好。 ")
                    ])
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B" })),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-start" }), [
                    _cE("view", _uM({ class: "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_hf59e0b_B mr-_b8px_B mt-_b8px_B" })),
                    _cE("view", _uM({ class: "weapp-tw-border flex-1 flex-col" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B" }), " VITE_TABBAR_MODE=1 时不包含底部 tabbar 区域（底部非编辑区，无需计入）。 ")
                    ])
                  ])
                ]),
                _cE("view", _uM({ class: "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col" }), [
                  _cE("view", _uM({ class: "weapp-tw-border pb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B" }), "最小模板")
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B" })),
                  _cE("view", _uM({ class: "weapp-tw-border w-full bg-_b_h0f172a_B rounded-_b8px_B p-_b12px_B" }), [
                    _cE("text", _uM({
                      class: "weapp-tw-border text-_b11px_B text-_b_h38bdf8_B leading-_b17px_B",
                      style: _nS(_uM({"font-family":"monospace"}))
                    }), _tD(codeTemplate), 4 /* STYLE */)
                  ])
                ]),
                _cE("view", _uM({ class: "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col" }), [
                  _cE("view", _uM({ class: "weapp-tw-border pb-_b8px_B" }), [
                    _cE("text", _uM({ class: "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B" }), "实时指标")
                  ]),
                  _cE("view", _uM({ class: "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b12px_B" })),
                  _cE("view", _uM({ class: "weapp-tw-border flex-row items-center justify-between" }), [
                    _cE("view", _uM({ class: "weapp-tw-border flex-col flex-1 items-center" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b20px_B font-bold text-_b_h3b82f6_B" }), _tD(computedAvailableHeight.value), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B" }), "可用高度 px")
                    ]),
                    _cE("view", _uM({ class: "weapp-tw-border w-_b1px_B bg-_b_hf1f5f9_B" })),
                    _cE("view", _uM({ class: "weapp-tw-border flex-col flex-1 items-center" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b20px_B font-bold text-_b_h10b981_B" }), _tD(scrollTop.value), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B" }), "scrollTop")
                    ]),
                    _cE("view", _uM({ class: "weapp-tw-border w-_b1px_B bg-_b_hf1f5f9_B" })),
                    _cE("view", _uM({ class: "weapp-tw-border flex-col flex-1 items-center" }), [
                      _cE("text", _uM({ class: "weapp-tw-border text-_b20px_B font-bold text-_b_hf59e0b_B" }), _tD(reachBottomCount.value), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B" }), "触底")
                    ])
                  ])
                ]),
                _cE(Fragment, null, RenderHelpers.renderList(demoItems, (item, index, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: index,
                    class: "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col"
                  }), [
                    _cE("view", _uM({ class: "weapp-tw-border flex-row items-center mb-_b10px_B" }), [
                      _cE("view", _uM({
                        style: _nS(_uM({ backgroundColor: item.color })),
                        class: "weapp-tw-border w-_b44px_B h-_b44px_B rounded-_b22px_B flex items-center justify-center mr-_b12px_B flex-none"
                      }), [
                        _cE("text", _uM({ class: "weapp-tw-border text-_b18px_B font-bold text-_b_hffffff_B" }), _tD(item.avatar), 1 /* TEXT */)
                      ], 4 /* STYLE */),
                      _cE("view", _uM({ class: "weapp-tw-border flex-col flex-1" }), [
                        _cE("text", _uM({ class: "weapp-tw-border text-_b15px_B font-semibold text-_b_h1e293b_B" }), _tD(item.title), 1 /* TEXT */),
                        _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B text-_b_h64748b_B mt-_b2px_B" }), _tD(item.subtitle), 1 /* TEXT */)
                      ]),
                      _cE("view", _uM({
                        style: _nS(_uM({ backgroundColor: item.color })),
                        class: "weapp-tw-border rounded-_b20px_B px-_b10px_B py-_b3px_B flex-none"
                      }), [
                        _cE("text", _uM({ class: "weapp-tw-border text-_b11px_B text-_b_hffffff_B" }), _tD(item.tag), 1 /* TEXT */)
                      ], 4 /* STYLE */)
                    ]),
                    _cE("text", _uM({ class: "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b19px_B" }), _tD(item.desc), 1 /* TEXT */)
                  ])
                }), 64 /* STABLE_FRAGMENT */),
                _cE("view", _uM({ class: "weapp-tw-border flex-col items-center py-_b16px_B" }), [
                  _cE("text", _uM({ class: "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B" }), "已触底 " + _tD(reachBottomCount.value) + " 次 · 内容结束", 1 /* TEXT */)
                ])
              ])
            ], 36 /* STYLE, NEED_HYDRATION */)
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
const GenSrcSubLayoutDemoLayoutDemoStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))]])]
