import _easycom_up_steps_item from '@/uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue'
import _easycom_up_steps from '@/uni_modules/uview-ultra/components/up-steps/up-steps.uvue'
import _easycom_up_tabs from '@/uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_cell from '@/uni_modules/uview-ultra/components/up-cell/up-cell.uvue'
import _easycom_up_cell_group from '@/uni_modules/uview-ultra/components/up-cell-group/up-cell-group.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_popup from '@/uni_modules/uview-ultra/components/up-popup/up-popup.uvue'
import { ref, computed, watch } from 'vue'
import { t } from '../../libs/i18n'


const __sfc__ = defineComponent({
  __name: 'up-cascader',
name: 'up-cascader',
  props: {
	show: {
		type: Boolean,
		default: false
	},
	data: {
		type: Array as PropType<Array<UTSJSONObject>>,
		default: () => [] as Array<UTSJSONObject>
	},
	modelValue: {
		type: Array as PropType<Array<any>>,
		default: () => [] as Array<any>
	},
	valueKey: {
		type: String,
		default: 'value'
	},
	labelKey: {
		type: String,
		default: 'label'
	},
	childrenKey: {
		type: String,
		default: 'children'
	},
	maskCloseAble: {
		type: Boolean,
		default: true
	},
	zIndex: {
		type: [String, Number],
		default: 0
	},
	autoClose: {
		type: Boolean,
		default: false
	},
	headerDirection: {
		type: String,
		default: 'row'
	},
	optionsCols: {
		type: Number,
		default: 2
	},
	closeable: {
		type: Boolean,
		default: true
	}
},
  emits: ['update:modelValue', 'update:show', 'change', 'confirm', 'cancel'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

function toText(value: any | null): string {
	return value == null ? '' : value.toString()
}

function sameValue(left: any | null, right: any | null): boolean {
	return toText(left) == toText(right)
}

function emptyObjectList(): Array<UTSJSONObject> {
	return [] as Array<UTSJSONObject>
}



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const levelList = ref<Array<Array<UTSJSONObject>>>([])
const selectedValueIndexs = ref<Array<number>>([])
const tabsIndex = ref<number>(0)
const popupShow = ref<boolean>(props.show)
const confirmValues = ref<Array<any>>([])

const isChange = computed<boolean>((): boolean => {
	return tabsIndex.value > 1
})

const levelWrapStyle = computed<string>((): string => {
	if (props.optionsCols == 2 && isChange.value) {
		return 'transform: translateX(-33.3333333%)'
	}
	return ''
})

const cancelText = computed<string>((): string => {
	return t('up.common.cancel', {} as UTSJSONObject)
})

const confirmText = computed<string>((): string => {
	return t('up.common.confirm', {} as UTSJSONObject)
})

const placeholderText = computed<string>((): string => {
	return t('up.common.pleaseChoose', {} as UTSJSONObject)
})

const uZIndex = computed<number>((): number => {
	if (typeof props.zIndex == 'number' && (props.zIndex as number) > 0) {
		return props.zIndex as number
	}
	const parsed = parseInt(toText(props.zIndex))
	return isNaN(parsed) || parsed <= 0 ? 1075 : parsed
})

function getAreaItemStyle(): string {
	return props.optionsCols == 2 ? 'width:33.33333%' : 'width:750rpx'
}

function getDataList(): Array<UTSJSONObject> {
	return props.data
}

function getChildren(item: UTSJSONObject): Array<UTSJSONObject> {
	const children = item[props.childrenKey] as Array<UTSJSONObject> | null
	if (children != null && Array.isArray(children)) return children as Array<UTSJSONObject>
	return emptyObjectList()
}

function getItemLabel(item: UTSJSONObject): string {
	return toText(item[props.labelKey])
}

function getItemValue(item: UTSJSONObject): any | null {
	return item[props.valueKey]
}

function getTabName(item: UTSJSONObject): string {
	return toText(item['name'])
}

function isSelected(levelIndex: number, index: number): boolean {
	if (levelIndex < 0 || levelIndex >= selectedValueIndexs.value.length) return false
	return selectedValueIndexs.value[levelIndex] == index
}

function canShowLevel(levelIndex: number): boolean {
	return levelIndex == 0 || selectedValueIndexs.value.length >= levelIndex
}

function stepClick(index: number): void {
	tabsIndex.value = index
}

const genTabsList = computed<Array<UTSJSONObject>>((): Array<UTSJSONObject> => {
	const tabsList = [] as Array<UTSJSONObject>
	const levelCount = Math.min(selectedValueIndexs.value.length, levelList.value.length)
	for (let i = 0; i < levelCount; i++) {
		const selectedIndex = selectedValueIndexs.value[i]
		const levelData = levelList.value[i]
		if (selectedIndex < 0 || selectedIndex >= levelData.length) {
			tabsList.push({ name: placeholderText.value } as UTSJSONObject)
			continue
		}
		const selectedItem = levelData[selectedIndex]
		tabsList.push({ name: getItemLabel(selectedItem) } as UTSJSONObject)
		if (i == selectedValueIndexs.value.length - 1) {
			const children = getChildren(selectedItem)
			if (children.length > 0) {
				tabsList.push({ name: placeholderText.value } as UTSJSONObject)
			}
		}
	}
	if (tabsList.length == 0) {
		tabsList.push({ name: placeholderText.value } as UTSJSONObject)
	}
	return tabsList
})

function getSelectedValues(): Array<any> {
	const result = [] as Array<any>
	for (let i = 0; i < selectedValueIndexs.value.length; i++) {
		if (i >= levelList.value.length) break
		const selectedIndex = selectedValueIndexs.value[i]
		const levelData = levelList.value[i]
		if (selectedIndex < 0 || selectedIndex >= levelData.length) continue
		const val = getItemValue(levelData[selectedIndex])
		if (val != null) result.push(val)
	}
	return result
}

function findValueIndex(list: Array<UTSJSONObject>, val: any | null): number {
	for (let i = 0; i < list.length; i++) {
		if (sameValue(getItemValue(list[i]), val)) return i
	}
	return -1
}

function initLevelList(): void {
	const list = getDataList()
	levelList.value = list.length > 0 ? [list] as Array<Array<UTSJSONObject>> : [] as Array<Array<UTSJSONObject>>
	selectedValueIndexs.value = [] as Array<number>
	tabsIndex.value = 0
	confirmValues.value = [] as Array<any>
}

function setDefaultValue(): void {
	const values = props.modelValue
	const root = getDataList()
	selectedValueIndexs.value = [] as Array<number>
	levelList.value = root.length > 0 ? [root] as Array<Array<UTSJSONObject>> : [] as Array<Array<UTSJSONObject>>
	if (values.length == 0 || root.length == 0) {
		confirmValues.value = [] as Array<any>
		tabsIndex.value = 0
		return
	}
	const nextLevels = [root] as Array<Array<UTSJSONObject>>
	const nextIndexs = [] as Array<number>
	let currentLevelData = root
	for (let i = 0; i < values.length; i++) {
		const index = findValueIndex(currentLevelData, values[i])
		if (index == -1) break
		nextIndexs.push(index)
		const children = getChildren(currentLevelData[index])
		if (children.length == 0) break
		currentLevelData = children
		if (i < values.length - 1) {
			nextLevels.push(children)
		}
	}
	levelList.value = nextLevels
	selectedValueIndexs.value = nextIndexs
	confirmValues.value = getSelectedValues()
	tabsIndex.value = selectedValueIndexs.value.length > 0 ? selectedValueIndexs.value.length - 1 : 0
}

function close(): void {
	emit('cancel')
	emit('update:show', false)
	popupShow.value = false
}

function tabsChange(item: UTSJSONObject): void {
	const index = parseInt(toText(item['index']))
	if (!isNaN(index)) {
		tabsIndex.value = index
	}
}

function handleConfirm(): void {
	const values = confirmValues.value.length > 0 ? confirmValues.value : getSelectedValues()
	confirmValues.value = values
	emit('update:modelValue', values)
	emit('confirm', values)
	emit('update:show', false)
	popupShow.value = false
}

function levelChange(levelIndex: number, index: number): void {
	if (levelIndex < 0 || levelIndex >= levelList.value.length) return
	const levelData = levelList.value[levelIndex]
	if (index < 0 || index >= levelData.length) return
	const nextIndexs = [] as Array<number>
	for (let i = 0; i < levelIndex; i++) {
		nextIndexs.push(selectedValueIndexs.value[i])
	}
	nextIndexs.push(index)
	selectedValueIndexs.value = nextIndexs
	const nextLevels = [] as Array<Array<UTSJSONObject>>
	for (let i = 0; i <= levelIndex; i++) {
		nextLevels.push(levelList.value[i])
	}
	const currentItem = levelData[index]
	const children = getChildren(currentItem)
	if (children.length > 0) {
		nextLevels.push(children)
		tabsIndex.value = levelIndex + 1
	} else {
		tabsIndex.value = levelIndex
	}
	levelList.value = nextLevels
	confirmValues.value = getSelectedValues()
	emit('change', confirmValues.value)
	if (children.length == 0 && props.autoClose) {
		handleConfirm()
	}
}

function handleCancel(): void {
	close()
}

watch((): Array<UTSJSONObject> => props.data, (): void => {
	initLevelList()
	setDefaultValue()
}, { deep: true, immediate: true })

watch((): boolean => props.show, (newVal: boolean): void => {
	popupShow.value = newVal
})

watch((): Array<any> => props.modelValue, (): void => {
	setDefaultValue()
}, { deep: true, immediate: true })

return (): any | null => {

const _component_up_steps_item = resolveEasyComponent("up-steps-item",_easycom_up_steps_item)
const _component_up_steps = resolveEasyComponent("up-steps",_easycom_up_steps)
const _component_up_tabs = resolveEasyComponent("up-tabs",_easycom_up_tabs)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_cell = resolveEasyComponent("up-cell",_easycom_up_cell)
const _component_up_cell_group = resolveEasyComponent("up-cell-group",_easycom_up_cell_group)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_popup = resolveEasyComponent("up-popup",_easycom_up_popup)

  return _cV(_component_up_popup, _uM({
    show: popupShow.value,
    mode: "bottom",
    overlay: true,
    closeable: _ctx.closeable,
    safeAreaInsetBottom: true,
    zIndex: uZIndex.value,
    closeOnClickOverlay: _ctx.maskCloseAble,
    onClose: close
  }), _uM({
    default: withSlotCtx((): any[] => [
      _ctx.headerDirection == 'column'
        ? _cE("view", _uM({
            key: 0,
            class: "weapp-tw-border up-cascader__header up-cascader__header--column"
          }), [
            isTrue(popupShow.value)
              ? _cV(_component_up_steps, _uM({
                  key: 0,
                  dot: "",
                  direction: "column",
                  current: tabsIndex.value
                }), _uM({
                  default: withSlotCtx((): any[] => [
                    _cE(Fragment, null, RenderHelpers.renderList(genTabsList.value, (item, index, __index, _cached): any => {
                      return _cV(_component_up_steps_item, _uM({
                        key: index,
                        index: index,
                        title: getTabName(item),
                        onClick: () => {stepClick(index)}
                      }), null, 8 /* PROPS */, ["index", "title", "onClick"])
                    }), 128 /* KEYED_FRAGMENT */)
                  ]),
                  _: 1 /* STABLE */
                }), 8 /* PROPS */, ["current"])
              : _cC("v-if", true)
          ])
        : _cE("view", _uM({
            key: 1,
            class: "weapp-tw-border up-cascader__header up-cascader__header--row"
          }), [
            isTrue(popupShow.value)
              ? _cV(_component_up_tabs, _uM({
                  key: 0,
                  list: genTabsList.value,
                  scrollable: true,
                  current: tabsIndex.value,
                  "onUpdate:current": $event => {(tabsIndex).value = $event},
                  onChange: tabsChange
                }), null, 8 /* PROPS */, ["list", "current", "onUpdate:current"])
              : _cC("v-if", true)
          ]),
      _cE("view", _uM({ class: "weapp-tw-border area-box" }), [
        _cE("view", _uM({
          class: _nC(["weapp-tw-border area-box__levels", _uM({ 'change': isChange.value })]),
          style: _nS(levelWrapStyle.value)
        }), [
          _cE(Fragment, null, RenderHelpers.renderList(levelList.value, (levelData, levelIndex, __index, _cached): any => {
            return _cE(Fragment, _uM({ key: levelIndex }), [
              isTrue(_ctx.optionsCols == 2 || levelIndex == tabsIndex.value)
                ? _cE("view", _uM({
                    key: 0,
                    class: "weapp-tw-border area-item",
                    style: _nS(getAreaItemStyle())
                  }), [
                    _cE("view", _uM({ class: "weapp-tw-border area-item__panel" }), [
                      _cE("scroll-view", _uM({
                        direction: "vertical",
                        class: "area-item__scroll"
                      }), [
                        isTrue(canShowLevel(levelIndex))
                          ? _cV(_component_up_cell_group, _uM({ key: 0 }), _uM({
                              default: withSlotCtx((): any[] => [
                                _cE(Fragment, null, RenderHelpers.renderList(levelData, (item, index, __index, _cached): any => {
                                  return _cV(_component_up_cell, _uM({
                                    key: index,
                                    title: getItemLabel(item),
                                    onClick: () => {levelChange(levelIndex, index)}
                                  }), _uM({
                                    "right-icon": withSlotCtx((): any[] => [
                                      isTrue(isSelected(levelIndex, index))
                                        ? _cV(_component_up_icon, _uM({
                                            key: 0,
                                            size: "17",
                                            name: "checkbox-mark"
                                          }))
                                        : _cC("v-if", true)
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }), 1032 /* PROPS, DYNAMIC_SLOTS */, ["title", "onClick"])
                                }), 128 /* KEYED_FRAGMENT */)
                              ]),
                              _: 2 /* DYNAMIC */
                            }), 1024 /* DYNAMIC_SLOTS */)
                          : _cC("v-if", true)
                      ])
                    ])
                  ], 4 /* STYLE */)
                : _cC("v-if", true)
            ], 64 /* STABLE_FRAGMENT */)
          }), 128 /* KEYED_FRAGMENT */)
        ], 6 /* CLASS, STYLE */)
      ]),
      _cE("view", _uM({ class: "weapp-tw-border up-cascader-action" }), [
        _cE("view", _uM({ class: "weapp-tw-border up-cascader-action__btn" }), [
          _cV(_component_up_button, _uM({
            onClick: handleCancel,
            type: "default",
            customStyle: { backgroundColor: '#f5f6f7' }
          }), _uM({
            default: withSlotCtx((): any[] => [
              _cE("text", _uM({ class: "weapp-tw-border up-cascader-action__cancel-text" }), _tD(cancelText.value), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }))
        ]),
        _cE("view", _uM({ class: "weapp-tw-border up-cascader-action__btn" }), [
          _cV(_component_up_button, _uM({
            onClick: handleConfirm,
            type: "primary",
            text: confirmText.value
          }), null, 8 /* PROPS */, ["text"])
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["show", "closeable", "zIndex", "closeOnClickOverlay"])
}
}

})
export default __sfc__
export type UpCascaderComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCascaderUpCascaderStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-cascader__header--column", _pS(_uM([["paddingTop", "30rpx"], ["paddingRight", 0], ["paddingBottom", "10rpx"], ["paddingLeft", "20rpx"]]))], ["up-cascader__header--row", _pS(_uM([["paddingTop", "20rpx"], ["paddingRight", 0], ["paddingBottom", "10rpx"], ["paddingLeft", 0]]))], ["area-box", _pS(_uM([["width", "100%"], ["overflow", "hidden"], ["height", "800rpx"]]))], ["area-box__levels", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["width", "150%"], ["transitionProperty", "transform"], ["transitionDuration", "0.3s"], ["transitionTimingFunction", "ease-in-out"], ["transitionDelay", "0s"], ["transform", "translateX(0)"]]))], ["area-item", _pS(_uM([["height", "800rpx"]]))], ["area-item__panel", _pS(_uM([["height", "100%"], ["paddingTop", "10rpx"], ["paddingRight", "10rpx"], ["paddingBottom", "10rpx"], ["paddingLeft", "10rpx"], ["backgroundColor", "#f6f7f9"]]))], ["area-item__scroll", _pS(_uM([["height", "100%"]]))], ["up-cascader-action", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["borderTopWidth", 1], ["borderTopStyle", "solid"], ["borderTopColor", "#eeeeee"]]))], ["up-cascader-action__btn", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["paddingTop", "20rpx"], ["paddingRight", "20rpx"], ["paddingBottom", "20rpx"], ["paddingLeft", "20rpx"]]))], ["up-cascader-action__cancel-text", _pS(_uM([["fontSize", 15], ["color", "#323233"]]))], ["@TRANSITION", _uM([["area-box__levels", _uM([["property", "transform"], ["duration", "0.3s"], ["timingFunction", "ease-in-out"], ["delay", "0s"]])]])]])]
