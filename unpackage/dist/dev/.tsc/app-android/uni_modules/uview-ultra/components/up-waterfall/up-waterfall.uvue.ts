
    /**
     * waterfall 瀑布流
     * @description 瀑布流组件，支持自定义列数。columnList 由 computed 从 modelValue 直接派生，全端兼容。
     * @property {Array} modelValue 用于渲染的数据（v-model绑定）
     * @property {String|Number} columns 瀑布流列数，默认为2
     */
    import { propsWaterfall } from './props.uts';
    import { mpMixin } from '../../libs/mixin/mpMixin.uts';
	import { mixin } from '../../libs/mixin/mixin.uts';
    
    const __sfc__ = defineComponent({
        name: "up-waterfall",
        mixins: [mpMixin, mixin, propsWaterfall],
        data() {
            return {
                windowWidth: 375 as number
            }
        },
        mounted() {
            this.windowWidth = uni.getSystemInfoSync().windowWidth;
        },
        computed: {
            // 核心：columnList 完全由 modelValue 派生，纯同步、纯响应式
            columnList(): UTSJSONObject[][] {
                const cols = this.getColumnsCount();
                const result: UTSJSONObject[][] = []
                for (let i: number = 0; i < cols; i++) {
                    result.push([] as UTSJSONObject[])
                }
                // @ts-ignore
                for (let i: number = 0; i < this.modelValue.length; i++) {
                    const colIndex: number = i % cols;
                    result[colIndex].push(this.modelValue[i]);
                }
                return result;
            }
        },
        emits: ['update:modelValue', 'update:value'],
        methods: {
            // 获取列数
            getColumnsCount(): number {
                if (this.columns === 'auto') {
                    const columnGap: number = 7;
                    let columnCount: number = Math.max(1, Math.floor(this.windowWidth / (this.minColumnWidth + columnGap)));
                    const minCol: number = parseInt(this.columnsMin.toString());
                    if (columnCount < minCol) {
                        columnCount = minCol;
                    }
                    return columnCount;
                }
                return parseInt(this.columns.toString());
            },
            
            // 列样式
            getColumnStyle(index: number): UTSJSONObject {
                const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-waterfall/up-waterfall.uvue", 75, 23), } as UTSJSONObject
                if (index > 0) {
                    style['marginLeft'] = '10rpx'
                }
                return style
            },
            
            // 清空数据
            clear() {
                this.$emit('update:modelValue', [] as UTSJSONObject[]);
            },
            
            // 清除某一条数据
            remove(id: any | null) {
				if (id == null) return
                // @ts-ignore
				const idx = this.modelValue.findIndex((val: UTSJSONObject) => {
					// @ts-ignore
					return val[this.idKey] != null && val[this.idKey].toString() == id.toString()
				});
                if (idx != -1) {
                    const newData: UTSJSONObject[] = UTSAndroid.consoleDebugError(JSON.parse(JSON.stringify(this.modelValue)), " at uni_modules/uview-ultra/components/up-waterfall/up-waterfall.uvue:96") as UTSJSONObject[];
                    newData.splice(idx, 1);
                    this.$emit('update:modelValue', newData);
                }
            },
            
            // 修改某条数据
            modify(id: any, key: string, value: any) {
                // @ts-ignore
                const idx = this.modelValue.findIndex((val: UTSJSONObject) => {
					// @ts-ignore
					return val[this.idKey] != null && val[this.idKey].toString() == id.toString()
				});
                if (idx != -1) {
                    const newData: UTSJSONObject[] = UTSAndroid.consoleDebugError(JSON.parse(JSON.stringify(this.modelValue)), " at uni_modules/uview-ultra/components/up-waterfall/up-waterfall.uvue:110") as UTSJSONObject[];
                    newData[idx][key] = value;
                    this.$emit('update:modelValue', newData);
                }
            }
        }
    })

export default __sfc__
function GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfallRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({ class: "up-waterfall" }), [
    _cE(Fragment, null, RenderHelpers.renderList(_ctx.columnList, (column, index, __index, _cached): any => {
      return _cE("view", _uM({
        key: index,
        id: `up-column-${index}`,
        class: "up-column",
        style: _nS(_ctx.getColumnStyle(index))
      }), [
        renderSlot(_ctx.$slots, "column", _uM({
          colIndex: index,
          colList: column
        }), (): any[] => [
          _cE(Fragment, null, RenderHelpers.renderList(column, (item, itemIndex, __index, _cached): any => {
            return _cE("view", _uM({ key: itemIndex }), [
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
export type UpWaterfallComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfallStyles = [_uM([["up-waterfall", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"]]))], ["up-column", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["overflow", "hidden"]]))]])]
