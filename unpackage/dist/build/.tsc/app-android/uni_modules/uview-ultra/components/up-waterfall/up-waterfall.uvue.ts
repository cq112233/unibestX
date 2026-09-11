import { ref, computed, onMounted } from 'vue'


const __sfc__ = defineComponent({
  __name: 'up-waterfall',
name: "up-waterfall",
  props: {
    modelValue: {
        type: Array as PropType<Array<UTSJSONObject>>,
        default: () => [] as Array<UTSJSONObject>
    },
    value: {
        type: Array as PropType<Array<UTSJSONObject>>,
        default: () => [] as Array<UTSJSONObject>
    },
    columns: {
        type: [String, Number],
        default: 2
    },
    columnsMin: {
        type: [String, Number],
        default: 2
    },
    minColumnWidth: {
        type: Number,
        default: 160
    },
    idKey: {
        type: String,
        default: 'id'
    }
},
  emits: ['update:modelValue', 'update:value'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const windowWidth = ref<number>(375)

onMounted(() => {
    windowWidth.value = uni.getSystemInfoSync().windowWidth
})

function getColumnsCount(): number {
    if (props.columns.toString() == 'auto') {
        const columnGap: number = 7
        let columnCount: number = Math.max(1, Math.floor(windowWidth.value / (props.minColumnWidth + columnGap)))
        const minCol: number = parseInt(props.columnsMin.toString())
        if (columnCount < minCol) {
            columnCount = minCol
        }
        return columnCount
    }
    return parseInt(props.columns.toString())
}

const columnList = computed<UTSJSONObject[][]>(() => {
    const cols = getColumnsCount()
    const result: UTSJSONObject[][] = []
    for (let i: number = 0; i < cols; i++) {
        result.push([] as UTSJSONObject[])
    }
    const dataList = props.modelValue.length > 0 ? props.modelValue : props.value
    for (let i: number = 0; i < dataList.length; i++) {
        const colIndex: number = i % cols
        result[colIndex].push(dataList[i])
    }
    return result
})

function getColumnStyle(index: number): UTSJSONObject {
    const style = {} as UTSJSONObject
    if (index > 0) {
        style['marginLeft'] = '10rpx'
    }
    return style
}

function clear() {
    emit('update:modelValue', [] as UTSJSONObject[])
    emit('update:value', [] as UTSJSONObject[])
}

function remove(id: any | null) {
    if (id == null) return
    const dataList = props.modelValue.length > 0 ? props.modelValue : props.value
    const idx = dataList.findIndex((val: UTSJSONObject) => {
        return val[props.idKey] != null && val[props.idKey]!.toString() == id.toString()
    })
    if (idx != -1) {
        const newData: UTSJSONObject[] = JSON.parse(JSON.stringify(dataList)) as UTSJSONObject[]
        newData.splice(idx, 1)
        emit('update:modelValue', newData)
        emit('update:value', newData)
    }
}

function modify(id: any, key: string, val: any) {
    const dataList = props.modelValue.length > 0 ? props.modelValue : props.value
    const idx = dataList.findIndex((item: UTSJSONObject) => {
        return item[props.idKey] != null && item[props.idKey]!.toString() == id.toString()
    })
    if (idx != -1) {
        const newData: UTSJSONObject[] = JSON.parse(JSON.stringify(dataList)) as UTSJSONObject[]
        newData[idx][key] = val
        emit('update:modelValue', newData)
        emit('update:value', newData)
    }
}

__expose({
    clear,
    remove,
    modify
})

return (): any | null => {

  return _cE("view", _uM({ class: "weapp-tw-border up-waterfall" }), [
    _cE(Fragment, null, RenderHelpers.renderList(columnList.value, (column, index, __index, _cached): any => {
      return _cE("view", _uM({
        key: index,
        id: `up-column-${index}`,
        class: "weapp-tw-border up-column",
        style: _nS(getColumnStyle(index))
      }), [
        renderSlot(_ctx.$slots, "column", _uM({
          colIndex: index,
          colList: column
        }), (): any[] => [
          _cE(Fragment, null, RenderHelpers.renderList(column, (item, itemIndex, __index, _cached): any => {
            return _cE("view", _uM({
              class: "weapp-tw-border",
              key: itemIndex
            }), [
              renderSlot(_ctx.$slots, "default", _uM({
                item: item,
                itemIndex: itemIndex
              }))
            ])
          }), 128 /* KEYED_FRAGMENT */)
        ])
      ], 12 /* STYLE, PROPS */, ["id"])
    }), 128 /* KEYED_FRAGMENT */)
  ])
}
}

})
export default __sfc__
export type UpWaterfallComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfallStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-waterfall", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"]]))], ["up-column", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["overflow", "hidden"]]))]])]
