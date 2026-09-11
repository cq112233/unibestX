import { ref, computed, watch, onMounted, nextTick, getCurrentInstance, useSlots } from 'vue'
import { sleep } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-dragsort',
name: 'up-dragsort',
    styleIsolation: 'app-and-page',
  props: {
    initialList: {
        type: Array as PropType<Array<UTSJSONObject>>,
        required: true,
        default: () => [] as Array<UTSJSONObject>
    },
    draggable: {
        type: Boolean,
        default: true
    },
    vibrate: {
        type: Boolean,
        default: true
    },
    direction: {
        type: String,
        default: 'vertical'
    },
    columns: {
        type: Number,
        default: 3
    },
    handleDrag: {
        type: Boolean,
        default: false
    },
    handlerPosition: {
        type: String,
        default: 'right'
    }
},
  emits: ['drag-end'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

function createDragList(): Array<UTSJSONObject> {
    return [] as Array<UTSJSONObject>
}

function copyObject(item: UTSJSONObject): UTSJSONObject {
    const copied = {} as UTSJSONObject
    const keys = UTSJSONObject.keys(item)
    for (let i = 0; i < keys.length; i++) {
        copied[keys[i]] = item[keys[i]]
    }
    return copied
}

function copyList(list: Array<UTSJSONObject>): Array<UTSJSONObject> {
    const copied = [] as Array<UTSJSONObject>
    for (let i = 0; i < list.length; i++) {
        copied.push(copyObject(list[i]))
    }
    return copied
}

function normalizeNumber(value: any | null, defaultValue: number = 0): number {
    if (typeof value == 'number') {
        return value as number
    }
    if (value == null) {
        return defaultValue
    }
    const parsed = parseFloat(value.toString())
    return isNaN(parsed) ? defaultValue : parsed
}

function stringValue(value: any | null): string {
    return value == null ? '' : value.toString()
}



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

function getItemKey(item: UTSJSONObject, index: number): string | number {
    if (item['id'] != null) {
        return item['id'] as string | number
    }
    return index
}

function getItemLabel(item: UTSJSONObject): string {
    return stringValue(item['label'])
}

function getItemX(item: UTSJSONObject): number {
    return normalizeNumber(item['x'], 0)
}

function getItemY(item: UTSJSONObject): number {
    return normalizeNumber(item['y'], 0)
}

function isItemDisabled(item: UTSJSONObject): boolean {
    const draggableValue = item['draggable']
    return draggableValue != null && draggableValue.toString() == 'false'
}


// ===================== App（Android/iOS/鸿蒙）：原生 touch 手势实现 =====================
const slots = useSlots()
const hasHandlerSlot = computed<boolean>(() => {
    return slots['handler'] != null
})

const list = ref<Array<UTSJSONObject>>(createDragList())
const dragIndex = ref<number>(-1)
const sortChanged = ref<boolean>(false)
const itemHeight = ref<number>(0)
const itemWidth = ref<number>(0)
const areaWidth = ref<number>(0)
const areaHeight = ref<number>(0)
const dragStartX = ref<number>(0)
const dragStartY = ref<number>(0)
const dragOffsetX = ref<number>(0)
const dragOffsetY = ref<number>(0)
let timer: number = 0
let dragTouchId: number = -1

const typedList = computed<Array<UTSJSONObject>>(() => {
    return list.value
})

const movableAreaStyle = computed<UTSJSONObject>(() => {
    const style = {} as UTSJSONObject
    const l = typedList.value
    if (props.direction == 'vertical') {
        style['height'] = itemHeight.value > 0 ? `${l.length * itemHeight.value}px` : 'auto'
        style['width'] = '100%'
        return style
    }
    if (props.direction == 'horizontal') {
        style['height'] = itemHeight.value > 0 ? `${itemHeight.value}px` : 'auto'
        style['width'] = itemWidth.value > 0 ? `${l.length * itemWidth.value}px` : 'auto'
        return style
    }
    const rows = Math.ceil(l.length / props.columns)
    style['height'] = itemHeight.value > 0 ? `${rows * itemHeight.value}px` : 'auto'
    style['width'] = '100%'
    return style
})

function buildItemPosition(item: UTSJSONObject, index: number): UTSJSONObject {
    const nextItem = copyObject(item)
    let x = 0
    let y = 0
    if (props.direction == 'horizontal' && itemWidth.value > 0) {
        x = index * itemWidth.value
    } else if (props.direction == 'vertical' && itemHeight.value > 0) {
        y = index * itemHeight.value
    } else if (itemWidth.value > 0 && itemHeight.value > 0) {
        const col = index % props.columns
        const row = Math.floor(index / props.columns)
        x = col * itemWidth.value
        y = row * itemHeight.value
    }
    nextItem['x'] = x
    nextItem['y'] = y
    return nextItem
}

function updatePositions(isDragging: boolean = false): void {
    const nextList = [] as Array<UTSJSONObject>
    const l = typedList.value
    for (let i = 0; i < l.length; i++) {
        const currentItem = l[i]
        if (isDragging && dragIndex.value == i) {
            nextList.push(copyObject(currentItem))
        } else {
            nextList.push(buildItemPosition(currentItem, i))
        }
    }
    list.value = nextList
}

function initList(): void {
    const nextList = [] as Array<UTSJSONObject>
    const source = props.initialList
    for (let i = 0; i < source.length; i++) {
        nextList.push(buildItemPosition(source[i], i))
    }
    list.value = nextList
}

async function calculateItemSize(): Promise<NodeInfo | null> {
    await sleep(30)
    return new Promise((resolve) => {
        uni.createSelectorQuery()
            .in(instance?.proxy)
            .select('.up-dragsort-item-content')
            .boundingClientRect((res: any) => {
                const rect = res as NodeInfo | null
                if (rect != null) {
                    itemHeight.value = rect.height != null ? rect.height! : 40
                    itemWidth.value = rect.width != null ? rect.width! : 80
                    updatePositions()
                }
                resolve(rect)
            })
            .exec()
    })
}

async function calculateAreaSize(): Promise<NodeInfo | null> {
    await sleep(30)
    return new Promise((resolve) => {
        uni.createSelectorQuery()
            .in(instance?.proxy)
            .select('.up-dragsort-area')
            .boundingClientRect((res: any) => {
                const rect = res as NodeInfo | null
                if (rect != null) {
                    areaWidth.value = rect.width != null ? rect.width! : 300
                    areaHeight.value = rect.height != null ? rect.height! : 300
                }
                resolve(rect)
            })
            .exec()
    })
}

function getItemStyle(item: UTSJSONObject, index: number): UTSJSONObject {
    const style = {} as UTSJSONObject
    let x = getItemX(item)
    let y = getItemY(item)
    if (dragIndex.value == index) {
        x = x + dragOffsetX.value
        y = y + dragOffsetY.value
    }
    style['left'] = `${x}px`
    style['top'] = `${y}px`
    return style
}

function findTouchByIdentifier(touches: UniTouch[], identifier: number): UniTouch | null {
    for (let i = 0; i < touches.length; i++) {
        const touch = touches[i]
        if (touch.identifier == identifier) {
            return touch
        }
    }
    return null
}

function beginDrag(index: number, e: UniTouchEvent): void {
    const l = typedList.value
    if (!props.draggable || index < 0 || index >= l.length || isItemDisabled(l[index])) {
        return
    }
    if (dragTouchId != -1) {
        return
    }
    if (timer > 0) {
        clearTimeout(timer)
        timer = 0
    }
    let startTouch: UniTouch | null = null
    if (e.changedTouches.length > 0) {
        startTouch = e.changedTouches[0]
    } else if (e.touches.length > 0) {
        startTouch = e.touches[0]
    }
    if (startTouch == null) {
        return
    }
    sortChanged.value = false
    dragIndex.value = index
    dragTouchId = startTouch.identifier
    dragStartX.value = startTouch.pageX
    dragStartY.value = startTouch.pageY
    dragOffsetX.value = 0
    dragOffsetY.value = 0
}

function onItemTouchStart(index: number, e: UniTouchEvent): void {
    if (props.handleDrag || hasHandlerSlot.value) {
        return
    }
    beginDrag(index, e)
}

function onHandlerTouchStart(index: number, e: UniTouchEvent): void {
    beginDrag(index, e)
}

function reorderItems(fromIndex: number, toIndex: number): void {
    const l = typedList.value
    if (fromIndex < 0 || toIndex < 0 || fromIndex >= l.length || toIndex >= l.length) {
        return
    }
    const movedItems = l.splice(fromIndex, 1) as Array<UTSJSONObject>
    if (movedItems.length == 0) {
        return
    }
    l.splice(toIndex, 0, movedItems[0])
    list.value = l
    dragIndex.value = toIndex
    sortChanged.value = true
    updatePositions(true)

    // vibrateShort: Android/iOS/HarmonyOS/小程序支持，H5 不支持
    if (props.vibrate) {
        uni.vibrateShort({ type: 'light' })
    }

}

function updateDragTarget(index: number): void {
    const l = typedList.value
    if (l.length <= 1) {
        return
    }
    const currentX = getItemX(l[index]) + dragOffsetX.value
    const currentY = getItemY(l[index]) + dragOffsetY.value
    let targetIndex = index
    if (props.direction == 'vertical') {
        if (itemHeight.value > 0) {
            targetIndex = Math.max(0, Math.min(Math.round(currentY / itemHeight.value), l.length - 1))
        }
    } else if (props.direction == 'horizontal') {
        if (itemWidth.value > 0) {
            targetIndex = Math.max(0, Math.min(Math.round(currentX / itemWidth.value), l.length - 1))
        }
    } else {
        if (itemWidth.value > 0 && itemHeight.value > 0) {
            const col = Math.max(0, Math.min(Math.round(currentX / itemWidth.value), props.columns - 1))
            const row = Math.max(0, Math.round(currentY / itemHeight.value))
            targetIndex = row * props.columns + col
            targetIndex = Math.max(0, Math.min(targetIndex, l.length - 1))
        }
    }
    if (targetIndex != index) {
        reorderItems(index, targetIndex)
    }
}

function onTouchMove(e: UniTouchEvent): void {
    if (dragIndex.value == -1) {
        return
    }
    let touch = findTouchByIdentifier(e.changedTouches, dragTouchId)
    if (touch == null) {
        touch = findTouchByIdentifier(e.touches, dragTouchId)
    }
    if (touch == null) {
        return
    }
    e.stopPropagation()
    e.preventDefault()
    let offsetX = touch.pageX - dragStartX.value
    let offsetY = touch.pageY - dragStartY.value
    if (props.direction == 'vertical') {
        offsetX = 0
    } else if (props.direction == 'horizontal') {
        offsetY = 0
    }
    dragOffsetX.value = offsetX
    dragOffsetY.value = offsetY
    updateDragTarget(dragIndex.value)
}

function onTouchEnd(e: UniTouchEvent): void {
    if (dragIndex.value == -1) {
        return
    }
    const endTouch = findTouchByIdentifier(e.changedTouches, dragTouchId)
    if (endTouch != null) {
        let offsetX = endTouch.pageX - dragStartX.value
        let offsetY = endTouch.pageY - dragStartY.value
        if (props.direction == 'vertical') {
            offsetX = 0
        } else if (props.direction == 'horizontal') {
            offsetY = 0
        }
        dragOffsetX.value = offsetX
        dragOffsetY.value = offsetY
        updateDragTarget(dragIndex.value)
    }
    dragTouchId = -1
    updatePositions()
    dragOffsetX.value = 0
    dragOffsetY.value = 0
    if (sortChanged.value) {
        emit('drag-end', copyList(typedList.value))
        sortChanged.value = false
    }
    timer = setTimeout(() => {
        dragIndex.value = -1
        timer = 0
    }, 600)
}

watch((): Array<UTSJSONObject> => props.initialList, () => {
    nextTick(() => {
        initList()
    })
}, { deep: true })

watch((): string => props.direction, () => {
    nextTick(() => {
        initList()
        calculateItemSize()
        calculateAreaSize()
    })
})

watch((): number => props.columns, () => {
    if (props.direction == 'all') {
        nextTick(() => {
            initList()
            updatePositions()
        })
    }
})

onMounted(() => {
    nextTick(() => {
        initList()
        calculateItemSize()
        calculateAreaSize()
    })
})






















































































































































































































































































return (): any | null => {

  return _cE("view", _uM({
    class: _nC(["weapp-tw-border up-dragsort", [
            _ctx.direction == 'horizontal' ? 'up-dragsort--horizontal' : '',
            _ctx.direction == 'vertical' ? 'up-dragsort--vertical' : '',
            _ctx.direction == 'all' ? 'up-dragsort--all' : ''
        ]]),
    style: _nS(movableAreaStyle.value)
  }), [
    _cE("view", _uM({ class: "weapp-tw-border up-dragsort-area" }), [
      _cE(Fragment, null, RenderHelpers.renderList(typedList.value, (item, index, __index, _cached): any => {
        return _cE("view", _uM({
          key: getItemKey(item, index),
          id: `up-dragsort-item-${index}`,
          class: _nC(["weapp-tw-border up-dragsort-item", _uM({
                    dragging: dragIndex.value == index,
                    disabled: !_ctx.draggable || isItemDisabled(item),
                    'up-dragsort-item--vertical': _ctx.direction == 'vertical',
                    'up-dragsort-item--horizontal': _ctx.direction == 'horizontal',
                    'up-dragsort-item--all': _ctx.direction == 'all'
                })]),
          style: _nS(getItemStyle(item, index)),
          onTouchstart: ($event: any) => {onItemTouchStart(index, $event as UniTouchEvent)},
          onTouchmove: ($event: any) => {onTouchMove($event as UniTouchEvent)},
          onTouchend: ($event: any) => {onTouchEnd($event as UniTouchEvent)},
          onTouchcancel: ($event: any) => {onTouchEnd($event as UniTouchEvent)}
        }), [
          _cE("view", _uM({ class: "weapp-tw-border up-dragsort-item-content" }), [
            _cE("view", _uM({
              class: _nC(["weapp-tw-border ui-dragSort-item-handler", [(_ctx.handleDrag || hasHandlerSlot.value) ? 'ui-dragSort-item-handler--enabled' : '', _ctx.handlerPosition == 'left' ? 'ui-dragSort-item-handler--left' : '']]),
              "data-action": "handler",
              onTouchstart: withModifiers(($event: any) => {onHandlerTouchStart(index, $event as UniTouchEvent)}, ["stop"])
            }), [
              renderSlot(_ctx.$slots, "handler", _uM({
                item: item,
                index: index
              }))
            ], 42 /* CLASS, PROPS, NEED_HYDRATION */, ["onTouchstart"]),
            renderSlot(_ctx.$slots, "default", _uM({
              item: item,
              index: index
            }), (): any[] => [_tD(getItemLabel(item))])
          ])
        ], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["id", "onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"])
      }), 128 /* KEYED_FRAGMENT */)
    ])
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpDragsortComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpDragsortUpDragsortStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-dragsort", _pS(_uM([["width", "100%"], ["height", "auto"]]))], ["up-dragsort-area", _pS(_uM([["width", "100%"], ["height", "100%"], ["position", "relative"]]))], ["up-dragsort-item", _pS(_uM([["position", "absolute"], ["width", "100%"]]))], ["dragging", _pS(_uM([["zIndex", 1000], ["boxShadow", "0 6px 20px rgba(0, 0, 0, 0.15)"]]))], ["up-dragsort-item-content", _pS(_uM([["position", "relative"], ["paddingTop", 0], ["paddingRight", 0], ["paddingBottom", 0], ["paddingLeft", 0], ["boxSizing", "border-box"]]))], ["ui-dragSort-item-handler--enabled", _pS(_uM([["position", "absolute"], ["top", 0], ["right", 0], ["bottom", 0], ["width", 44], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["zIndex", 1]]))], ["ui-dragSort-item-handler--left", _pS(_uM([["right", "auto"], ["left", 0]]))], ["up-dragsort-item--vertical", _pS(_uM([["height", "auto"]]))], ["up-dragsort-item--horizontal", _pS(_uM([["width", "auto"], ["height", "auto"]]))], ["up-dragsort-item--all", _pS(_uM([["width", "auto"], ["height", "auto"]]))]])]
