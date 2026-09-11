import _easycom_up_title from '@/uni_modules/uview-ultra/components/up-title/up-title.uvue'
import _easycom_up_dragsort from '@/uni_modules/uview-ultra/components/up-dragsort/up-dragsort.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'dragsort',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const plainList = ref<UTSJSONObject[]>([
  { id: 1, label: '普通列表项 1' },
  { id: 2, label: '普通列表项 2' },
  { id: 3, label: '普通列表项 3' },
  { id: 4, label: '普通列表项 4' },
  { id: 5, label: '普通列表项 5' }
] as UTSJSONObject[]);

const leftHandleList = ref<UTSJSONObject[]>([
  { id: 1, label: '左侧手柄项 1' },
  { id: 2, label: '左侧手柄项 2' },
  { id: 3, label: '左侧手柄项 3' },
  { id: 4, label: '左侧手柄项 4' }
] as UTSJSONObject[]);

const verticalList = ref<UTSJSONObject[]>([
  { id: 1, label: '列表项 1' },
  { id: 2, label: '列表项 2' },
  { id: 3, label: '列表项 3' },
  { id: 4, label: '列表项 4' },
  { id: 5, label: '列表项 5' }
] as UTSJSONObject[]);

const horizontalList = ref<UTSJSONObject[]>([
  { id: 1, label: '卡片 1' },
  { id: 2, label: '卡片 2' },
  { id: 3, label: '卡片 3' },
  { id: 4, label: '卡片 4' }
] as UTSJSONObject[]);

const gridList = ref<UTSJSONObject[]>([
  { id: 1, label: '应用 1' },
  { id: 2, label: '应用 2' },
  { id: 3, label: '应用 3' },
  { id: 4, label: '应用 4' },
  { id: 5, label: '应用 5' },
  { id: 6, label: '应用 6' },
  { id: 7, label: '应用 7' },
  { id: 8, label: '应用 8' }
] as UTSJSONObject[]);

const disabledList = ref<UTSJSONObject[]>([
  { id: 1, label: '普通项 1' },
  { id: 2, label: '锁定项（不可拖动）', draggable: false },
  { id: 3, label: '普通项 2' },
  { id: 4, label: '普通项 3' },
  { id: 5, label: '锁定项（不可拖动）', draggable: false },
  { id: 6, label: '普通项 4' }
] as UTSJSONObject[]);

const eventLog = ref<string>('拖拽完成后，drag-end 会返回最新列表顺序');

function getLabel(item: UTSJSONObject): string {
  const label = item.label;
  return label == null ? '' : label.toString();
}

function getItemDisabled(item: UTSJSONObject): boolean {
  const draggableValue = item.draggable;
  return draggableValue != null && draggableValue.toString() == 'false';
}

function getOrder(list: UTSJSONObject[]): string {
  const labels = [] as string[];
  for (let i = 0; i < list.length; i++) {
    labels.push(getLabel(list[i]));
  }
  return labels.join(' → ');
}

function onDragEnd(list: UTSJSONObject[]) {
  eventLog.value = `drag-end => ${getOrder(list)}`;
}

return (): any | null => {

const _component_up_title = resolveEasyComponent("up-title",_easycom_up_title)
const _component_up_dragsort = resolveEasyComponent("up-dragsort",_easycom_up_dragsort)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-dragsort 拖拽排序','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-dragsort 拖拽排序','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "无手柄（按住整项任意位置拖拽排序）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_dragsort, _uM({
                  "initial-list": plainList.value,
                  direction: "vertical",
                  onDragEnd: onDragEnd
                }), _uM({
                  default: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  const index = slotProps["index"]
                  return [
                    _cE("view", _uM({ class: "weapp-tw-border drag-item" }), [
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-text" }), _tD(getLabel(item as UTSJSONObject)), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-index" }), _tD((index as number) + 1), 1 /* TEXT */)
                    ])
                  ]}),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["initial-list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "垂直拖拽（按住右侧手柄排序）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_dragsort, _uM({
                  "initial-list": verticalList.value,
                  direction: "vertical",
                  "handle-drag": "",
                  onDragEnd: onDragEnd
                }), _uM({
                  handler: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "weapp-tw-border drag-handler" }), [
                      _cV(_component_up_icon, _uM({
                        name: "list",
                        color: "#64748b",
                        size: "20"
                      }))
                    ])
                  ]),
                  default: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  const index = slotProps["index"]
                  return [
                    _cE("view", _uM({ class: "weapp-tw-border drag-item" }), [
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-text" }), _tD(getLabel(item as UTSJSONObject)), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-index" }), _tD((index as number) + 1), 1 /* TEXT */)
                    ])
                  ]}),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["initial-list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "垂直拖拽（按住左侧手柄排序）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_dragsort, _uM({
                  "initial-list": leftHandleList.value,
                  direction: "vertical",
                  "handle-drag": "",
                  "handler-position": "left",
                  onDragEnd: onDragEnd
                }), _uM({
                  handler: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "weapp-tw-border drag-handler drag-handler--left" }), [
                      _cV(_component_up_icon, _uM({
                        name: "list",
                        color: "#64748b",
                        size: "20"
                      }))
                    ])
                  ]),
                  default: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  const index = slotProps["index"]
                  return [
                    _cE("view", _uM({ class: "weapp-tw-border drag-item drag-item--left" }), [
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-text" }), _tD(getLabel(item as UTSJSONObject)), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-index" }), _tD((index as number) + 1), 1 /* TEXT */)
                    ])
                  ]}),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["initial-list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "水平拖拽（按住右侧手柄左右拖动）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_dragsort, _uM({
                  "initial-list": horizontalList.value,
                  direction: "horizontal",
                  "handle-drag": "",
                  onDragEnd: onDragEnd
                }), _uM({
                  handler: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "weapp-tw-border drag-handler-h" }), [
                      _cV(_component_up_icon, _uM({
                        name: "list",
                        color: "#2563eb",
                        size: "20"
                      }))
                    ])
                  ]),
                  default: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  return [
                    _cE("view", _uM({ class: "weapp-tw-border drag-item-h" }), [
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-text" }), _tD(getLabel(item as UTSJSONObject)), 1 /* TEXT */)
                    ])
                  ]}),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["initial-list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "九宫格拖拽（direction=\"all\"、3 列，按住角标拖拽）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_dragsort, _uM({
                  "initial-list": gridList.value,
                  direction: "all",
                  columns: 3,
                  "handle-drag": "",
                  onDragEnd: onDragEnd
                }), _uM({
                  handler: withSlotCtx((): any[] => [
                    _cE("view", _uM({ class: "weapp-tw-border drag-handler-grid" }), [
                      _cV(_component_up_icon, _uM({
                        name: "list",
                        color: "#475569",
                        size: "14"
                      }))
                    ])
                  ]),
                  default: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  const index = slotProps["index"]
                  return [
                    _cE("view", _uM({ class: "weapp-tw-border drag-item-grid" }), [
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-grid-text" }), _tD(getLabel(item as UTSJSONObject)), 1 /* TEXT */),
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-grid-index" }), "#" + _tD((index as number) + 1), 1 /* TEXT */)
                    ])
                  ]}),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["initial-list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "部分项禁用拖拽（draggable: false）")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cV(_component_up_dragsort, _uM({
                  "initial-list": disabledList.value,
                  direction: "vertical",
                  "handle-drag": "",
                  onDragEnd: onDragEnd
                }), _uM({
                  handler: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  return [
                    _cE("view", _uM({
                      class: _nC(["weapp-tw-border drag-handler", getItemDisabled(item as UTSJSONObject) ? 'drag-handler--disabled' : ''])
                    }), [
                      _cV(_component_up_icon, _uM({
                        name: "list",
                        color: getItemDisabled(item as UTSJSONObject) ? '#94a3b8' : '#64748b',
                        size: "20"
                      }), null, 8 /* PROPS */, ["color"])
                    ], 2 /* CLASS */)
                  ]}),
                  default: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
                  const item = slotProps["item"]
                  return [
                    _cE("view", _uM({
                      class: _nC(["weapp-tw-border drag-item", getItemDisabled(item as UTSJSONObject) ? 'drag-item--disabled' : ''])
                    }), [
                      _cE("text", _uM({ class: "weapp-tw-border drag-item-text" }), _tD(getLabel(item as UTSJSONObject)), 1 /* TEXT */)
                    ], 2 /* CLASS */)
                  ]}),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["initial-list"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cV(_component_up_title, _uM({ class: "demo-title" }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE("text", _uM({ class: "weapp-tw-border demo-title-text" }), "说明")
                  ]),
                  _: 1 /* STABLE */
                })),
                _cE("text", _uM({ class: "weapp-tw-border demo-text" }), " up-dragsort 在 App 端（安卓/iOS/鸿蒙）使用原生 touch 手势实现，H5/小程序沿用 movable-view 原实现；不传 handler 插槽时按住整项任意位置即可拖拽排序，传入 handler 插槽并配合 handle-drag 属性则仅手柄可拖拽，handler-position 属性可控制手柄在左/右；支持 vertical / horizontal / all 三种方向，drag-end 事件返回排序后的列表。 ")
              ]),
              _cE("view", _uM({ class: "weapp-tw-border log-box mt-_b10px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border log-text" }), _tD(eventLog.value), 1 /* TEXT */)
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
const GenSrcSubUviewUltraDemosDragsortDragsortStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-title", _pS(_uM([["marginBottom", 10]]))], ["demo-title-text", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"]]))], ["demo-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["log-box", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["backgroundColor", "#f1f5f9"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["log-text", _pS(_uM([["fontSize", 13], ["color", "#475569"], ["lineHeight", "20px"]]))], ["drag-item", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["height", 56], ["paddingLeft", 12], ["paddingRight", 52], ["backgroundColor", "#ffffff"], ["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#eef2f7"]]))], ["drag-item--disabled", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["drag-item-text", _pS(_uM([["fontSize", 14], ["color", "#1e293b"]]))], ["drag-item-index", _pS(_uM([["marginLeft", "auto"], ["fontSize", 12], ["color", "#94a3b8"]]))], ["drag-handler", _pS(_uM([["position", "absolute"], ["top", 0], ["right", 0], ["width", 44], ["height", 56], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "#eef2f7"], ["borderLeftWidth", 1], ["borderLeftStyle", "solid"], ["borderLeftColor", "#e2e8f0"]]))], ["drag-handler--left", _pS(_uM([["left", 0], ["right", "auto"], ["borderLeftWidth", 0], ["borderRightWidth", 1], ["borderRightStyle", "solid"], ["borderRightColor", "#e2e8f0"]]))], ["drag-item--left", _pS(_uM([["paddingLeft", 52], ["paddingRight", 12]]))], ["drag-handler--disabled", _pS(_uM([["backgroundColor", "#e2e8f0"]]))], ["drag-handler-h", _pS(_uM([["position", "absolute"], ["top", 0], ["right", 0], ["width", 40], ["height", 56], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "#dbeafe"], ["borderLeftWidth", 1], ["borderLeftStyle", "solid"], ["borderLeftColor", "#bfdbfe"], ["borderTopLeftRadius", 0], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 0]]))], ["drag-item-h", _pS(_uM([["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["width", 140], ["height", 56], ["marginRight", 8], ["backgroundColor", "#eff6ff"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#bfdbfe"], ["borderRightColor", "#bfdbfe"], ["borderBottomColor", "#bfdbfe"], ["borderLeftColor", "#bfdbfe"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8], ["boxSizing", "border-box"]]))], ["drag-item-grid", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"], ["width", 96], ["height", 96], ["backgroundColor", "#f1f5f9"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8], ["boxSizing", "border-box"]]))], ["drag-item-grid-text", _pS(_uM([["fontSize", 13], ["color", "#334155"]]))], ["drag-item-grid-index", _pS(_uM([["marginTop", 6], ["fontSize", 11], ["color", "#94a3b8"]]))], ["drag-handler-grid", _pS(_uM([["position", "absolute"], ["top", 0], ["right", 0], ["width", 28], ["height", 28], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "#e2e8f0"], ["borderTopLeftRadius", 0], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 0], ["borderBottomLeftRadius", 8]]))]])]
