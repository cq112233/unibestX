import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_list from '@/uni_modules/uview-ultra/components/up-list/up-list.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { ref } from 'vue';


const __sfc__ = defineComponent({
  __name: 'list',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const listItems = ref([
  { title: '列表 1 - 项目 01', desc: '支持下拉刷新与触底加载' },
  { title: '列表 1 - 项目 02', desc: '基于 scroll-view 封装' },
  { title: '列表 1 - 项目 03', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 04', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 05', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 06', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 07', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 08', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 09', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 10', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 11', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 12', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 13', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 14', desc: '支持单指内部滚动' },
  { title: '列表 1 - 项目 15', desc: '支持单指内部滚动' }
] as UTSJSONObject[]);

const staticListItems = ref([
  { title: '列表 2 - 项目 01', desc: '静态列表第 1 项内容' },
  { title: '列表 2 - 项目 02', desc: '静态列表第 2 项内容' },
  { title: '列表 2 - 项目 03', desc: '静态列表第 3 项内容' },
  { title: '列表 2 - 项目 04', desc: '静态列表第 4 项内容' },
  { title: '列表 2 - 项目 05', desc: '静态列表第 5 项内容' },
  { title: '列表 2 - 项目 06', desc: '静态列表第 6 项内容' },
  { title: '列表 2 - 项目 07', desc: '静态列表第 7 项内容' },
  { title: '列表 2 - 项目 08', desc: '静态列表第 8 项内容' },
  { title: '列表 2 - 项目 09', desc: '静态列表第 9 项内容' },
  { title: '列表 2 - 项目 10', desc: '静态列表第 10 项内容' },
  { title: '列表 2 - 项目 11', desc: '静态列表第 11 项内容' },
  { title: '列表 2 - 项目 12', desc: '静态列表第 12 项内容' },
  { title: '列表 2 - 项目 13', desc: '静态列表第 13 项内容' },
  { title: '列表 2 - 项目 14', desc: '静态列表第 14 项内容' },
  { title: '列表 2 - 项目 15', desc: '静态列表第 15 项内容' }
] as UTSJSONObject[]);

const listLoading = ref(false);
const listRefreshing = ref(false);
let listLoadCount = 1;

function onListLoadMore(): void {
  if (listLoading.value)
    return;
  listLoading.value = true;
  setTimeout(() => {
    listLoadCount += 1;
    const newItems: UTSJSONObject[] = [];
    for (let i = 1; i <= 3; i++) {
      newItems.push({
        title: `加载项 ${listLoadCount}-${i}`,
        desc: `这是第 ${listLoadCount} 批加载的第 ${i} 条数据`
      } as UTSJSONObject);
    }
    listItems.value = listItems.value.concat(newItems);
    listLoading.value = false;
    uni.showToast({ title: `加载了 ${newItems.length} 条`, icon: 'none', duration: 1500 });
  }, 1000);
}

function onListRefresh(): void {
  listRefreshing.value = true;
  setTimeout(() => {
    listRefreshing.value = false;
    uni.showToast({ title: '刷新完成', icon: 'none', duration: 1500 });
  }, 1500);
}

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_list = resolveEasyComponent("up-list",_easycom_up_list)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'up-list 列表',
        "disable-scroll": true
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-container bg-_b_hf8fafc_B flex flex-col flex-1 h-full" }), [
            _cV(_component_NavBar, _uM({
              title: "up-list 双列表嵌套",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            })),
            _cE("scroll-view", _uM({
              type: "nested",
              direction: "vertical",
              class: "flex-1 h-0"
            }), [
              _cE("nested-scroll-header", null, [
                _cE("view", _uM({ class: "p-12px pb-0" }), [
                  _cE("text", _uM({ class: "text-14px font-bold text-_b_h2979ff_B mb-8px" }), "列表 1：动态加载列表 (高度 380px)"),
                  _cV(_component_up_list, _uM({
                    height: 580,
                    "lower-threshold": 20,
                    "refresher-enabled": true,
                    "refresher-triggered": listRefreshing.value,
                    class: "bg-white rounded-8px shadow-xs",
                    onScrolltolower: onListLoadMore,
                    onRefresherrefresh: onListRefresh
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cE(Fragment, null, RenderHelpers.renderList(listItems.value, (item, idx, __index, _cached): any => {
                        return _cE("view", _uM({
                          key: idx,
                          class: "demo-list-cell"
                        }), [
                          _cE("view", _uM({ class: "demo-list-cell-avatar" }), [
                            _cV(_component_up_icon, _uM({
                              name: "account",
                              size: "20",
                              color: "#ffffff"
                            }))
                          ]),
                          _cE("view", _uM({ class: "demo-list-cell-content" }), [
                            _cE("text", _uM({ class: "text-14px font-500 text-_b_h303133_B" }), _tD(item.title as string), 1 /* TEXT */),
                            _cE("text", _uM({ class: "text-12px text-_b_h909399_B mt-4px" }), _tD(item.desc as string), 1 /* TEXT */)
                          ])
                        ])
                      }), 128 /* KEYED_FRAGMENT */),
                      isTrue(listLoading.value)
                        ? _cE("view", _uM({
                            key: 0,
                            class: "list-loading"
                          }), [
                            _cV(_component_up_loading_icon, _uM({
                              mode: "circle",
                              size: "20"
                            })),
                            _cE("text", _uM({ class: "text-12px text-_b_h909399_B ml-8px" }), "加载中...")
                          ])
                        : _cC("v-if", true)
                    ]),
                    _: 1 /* STABLE */
                  }), 8 /* PROPS */, ["refresher-triggered"])
                ])
              ]),
              _cE("nested-scroll-header", null, [
                _cE("view", _uM({ class: "p-12px pb-24px" }), [
                  _cE("text", _uM({ class: "text-14px font-bold text-_b_h19be6b_B mb-8px" }), "列表 2：静态展示列表 (高度 280px)"),
                  _cV(_component_up_list, _uM({
                    height: 280,
                    class: "bg-white rounded-8px shadow-xs"
                  }), _uM({
                    default: withSlotCtx((): any[] => [
                      _cE(Fragment, null, RenderHelpers.renderList(staticListItems.value, (item, idx, __index, _cached): any => {
                        return _cE("view", _uM({
                          key: idx,
                          class: "demo-list-cell"
                        }), [
                          _cE("view", _uM({ class: "w-8px h-8px rounded-4px bg-_b_h19be6b_B mr-10px" })),
                          _cE("view", _uM({ class: "demo-list-cell-content" }), [
                            _cE("text", _uM({ class: "text-14px font-500 text-_b_h303133_B" }), _tD(item.title as string), 1 /* TEXT */),
                            _cE("text", _uM({ class: "text-12px text-_b_h909399_B mt-4px" }), _tD(item.desc as string), 1 /* TEXT */)
                          ])
                        ])
                      }), 128 /* KEYED_FRAGMENT */)
                    ]),
                    _: 1 /* STABLE */
                  }))
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
const GenSrcSubUviewUltraDemosListListStyles = [_uM([["demo-list-cell", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16], ["backgroundColor", "#ffffff"], ["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#f5f5f5"]]))], ["demo-list-cell-avatar", _pS(_uM([["width", 40], ["height", 40], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["marginRight", 12], ["backgroundColor", "#2979ff"], ["display", "flex"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["demo-list-cell-content", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["list-loading", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["paddingTop", 15], ["paddingRight", 0], ["paddingBottom", 15], ["paddingLeft", 0]]))]])]
