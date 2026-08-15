<template>
  <view class="up-picker-wrapper">
    <view
      v-if="hasInput"
      class="up-picker-input cursor-pointer"
      @click="showByClickInput = !showByClickInput"
    >
      <slot>
        <view>
          {{ inputLabel.length > 0 ? inputLabel.join('/') : placeholder }}
        </view>
      </slot>
    </view>
    <up-popup
      :show="pageInline || show || (hasInput && showByClickInput)"
      :mode="popupMode"
      :pageInline="pageInline"
      @close="closeHandler"
    >
      <view class="up-picker">
        <up-toolbar
          v-if="showToolbar"
          :cancelColor="cancelColor"
          :confirmColor="confirmColor"
          :cancelText="cancelText"
          :confirmText="confirmText"
          :title="title"
          :rightSlot="toolbarRightSlot ? true : false"
          @cancel="cancel"
          @confirm="confirm"
        >
          <template #right>
            <slot name="toolbar-right"></slot>
          </template>
        </up-toolbar>
        <slot name="toolbar-bottom"></slot>

        <!-- 自定义高保真滚动选择器区域 -->
        <view class="up-picker__body" :style="{ height: pickerViewHeight }">
          <!-- 中间选中高亮边框 -->
          <view
            class="up-picker__indicator"
            :style="{
              top: indicatorTop,
              height: addUnit(itemHeight)
            }"
          ></view>

          <!-- 顶部渐变遮罩 -->
          <view
            class="up-picker__mask up-picker__mask--top"
            :style="{ height: indicatorTop }"
          ></view>

          <!-- 底部渐变遮罩 -->
          <view
            class="up-picker__mask up-picker__mask--bottom"
            :style="{ height: indicatorTop }"
          ></view>

          <!-- 列滚动容器 -->
          <view class="up-picker__columns">
            <scroll-view
              v-for="(column, colIndex) in innerColumns"
              :key="colIndex"
              class="up-picker__column"
              :scroll-y="true"
              :scroll-top="columnScrollTops[colIndex]"
              :show-scrollbar="false"
              @scroll="onColumnScroll($event, colIndex)"
              @touchend="onColumnTouchEnd(colIndex)"
            >
              <!-- 顶部占位，使第一项居中 -->
              <view :style="{ height: indicatorTop }"></view>

              <!-- 选项列表 -->
              <view
                v-for="(item, itemIndex) in column"
                :key="itemIndex"
                class="up-picker__item"
                :style="{ height: addUnit(itemHeight) }"
                @click="onItemClick(colIndex, itemIndex)"
              >
                <text
                  class="up-picker__item__text"
                  :style="{
                    lineHeight: addUnit(itemHeight),
                    color: isItemSelected(colIndex, itemIndex) ? '#303133' : '#909399',
                    fontWeight: isItemSelected(colIndex, itemIndex) ? 'bold' : 'normal',
                    fontSize: '16px'
                  }"
                >
                  {{ getItemText(item) }}
                </text>
              </view>

              <!-- 底部占位，使最后一项居中 -->
              <view :style="{ height: indicatorTop }"></view>
            </scroll-view>
          </view>
        </view>

        <view v-if="loading" class="up-picker--loading">
          <up-loading-icon mode="circle"></up-loading-icon>
        </view>
      </view>
    </up-popup>
  </view>
</template>

<script>
import props from './props.js'
import mpMixin from '../../libs/mixin/mpMixin.js'
import mixin from '../../libs/mixin/mixin.js'
import test from '../../libs/function/test.js'
import { addUnit, deepClone } from '../../libs/function/index.js'

export default {
	name: 'up-picker',
	mixins: [mpMixin, mixin, props],
	data() {
		return {
			lastIndex: [],
			innerIndex: [],
			innerColumns: [],
			columnIndex: 0,
			showByClickInput: false,
			columnScrollTops: []
		}
	},
	watch: {
		defaultIndex: {
			immediate: true,
			handler(n) {
				this.setIndexs(n, true)
			}
		},
		columns: {
			immediate: true,
			deep: true,
			handler(n) {
				this.setColumns(n)
			}
		},
		show(val) {
			if (val) {
				this.setColumns(this.columns)
				this.$nextTick(() => {
					this.syncScrollPositions()
				})
			}
		}
	},
	emits: ['close', 'cancel', 'confirm', 'change', 'update:modelValue'],
	computed: {
		itemHeightNumber() {
			const h = parseInt(this.itemHeight)
			return isNaN(h) || h <= 0 ? 44 : h
		},
		visibleCountNumber() {
			const c = parseInt(this.visibleItemCount)
			return isNaN(c) || c <= 0 ? 5 : c
		},
		pickerViewHeight() {
			return addUnit(this.visibleCountNumber * this.itemHeightNumber)
		},
		indicatorTop() {
			const topCount = Math.floor(this.visibleCountNumber / 2)
			return addUnit(topCount * this.itemHeightNumber)
		},
		inputLabel() {
			let items = this.innerColumns.map((item, index) => item[this.innerIndex[index]])
			let res = []
			items.forEach(element => {
				if (test.object(element)) {
					res.push(element[this.keyName])
				} else if (element != null) {
					res.push(element)
				}
			})
			return res
		},
		inputValue() {
			let items = this.innerColumns.map((item, index) => item[this.innerIndex[index]])
			let res = []
			items.forEach(element => {
				if (test.object(element) && element['id'] != null) {
					res.push(element['id'])
				}
			})
			return res
		}
	},
	methods: {
		addUnit,
		getItemText(item) {
			if (test.object(item)) {
				return item[this.keyName]
			} else {
				return item != null ? item : ''
			}
		},
		isItemSelected(colIdx, itemIdx) {
			if (this.innerIndex.length > colIdx) {
				return this.innerIndex[colIdx] == itemIdx
			}
			return itemIdx == 0
		},
		syncScrollPositions() {
			let tops = []
			for (let i = 0; i < this.innerColumns.length; i++) {
				const idx = i < this.innerIndex.length ? this.innerIndex[i] : 0
				tops.push(idx * this.itemHeightNumber)
			}
			this.columnScrollTops = tops
		},
		onColumnScroll(e, colIndex) {
			const scrollTop = e.detail.scrollTop
			const targetIndex = Math.max(0, Math.min(this.innerColumns[colIndex].length - 1, Math.round(scrollTop / this.itemHeightNumber)))
			if (this.innerIndex.length > colIndex && this.innerIndex[colIndex] != targetIndex) {
				this.innerIndex[colIndex] = targetIndex
				this.columnIndex = colIndex
				this.notifyChange(colIndex, targetIndex)
			}
		},
		onColumnTouchEnd(colIndex) {
			setTimeout(() => {
				if (this.innerIndex.length > colIndex) {
					const idx = this.innerIndex[colIndex]
					this.columnScrollTops.splice(colIndex, 1, idx * this.itemHeightNumber)
				}
			}, 80)
		},
		onItemClick(colIndex, itemIndex) {
			if (this.innerIndex.length > colIndex) {
				this.innerIndex[colIndex] = itemIndex
				this.columnScrollTops.splice(colIndex, 1, itemIndex * this.itemHeightNumber)
				this.columnIndex = colIndex
				this.notifyChange(colIndex, itemIndex)
			}
		},
		notifyChange(colIdx, changedItemIdx) {
			const values = this.innerColumns
			this.setLastIndex(this.innerIndex)
			this.$emit('update:modelValue', this.inputValue)

			this.$emit('change', {
				value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
				index: changedItemIdx,
				indexs: this.innerIndex,
				values,
				columnIndex: colIdx
			})
		},
		closeHandler() {
			if (this.closeOnClickOverlay) {
				if (this.hasInput) {
					this.showByClickInput = false
				}
				this.$emit('close')
			}
		},
		cancel() {
			if (this.hasInput) {
				this.showByClickInput = false
			}
			this.$emit('cancel')
		},
		confirm() {
			this.$emit('update:modelValue', this.inputValue)
			if (this.hasInput) {
				this.showByClickInput = false
			}
			this.$emit('confirm', {
				indexs: this.innerIndex,
				value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
				values: this.innerColumns
			})
		},
		setIndexs(index, shouldSetLast = true) {
			if (index != null && index.length > 0) {
				this.innerIndex = deepClone(index)
			} else {
				let newIndexes = []
				for (let i = 0; i < this.innerColumns.length; i++) {
					newIndexes.push(0)
				}
				this.innerIndex = newIndexes
			}
			if (shouldSetLast) {
				this.setLastIndex(this.innerIndex)
			}
			this.syncScrollPositions()
		},
		setLastIndex(index) {
			this.lastIndex = deepClone(index)
		},
		setColumnValues(colIdx, values) {
			this.innerColumns.splice(colIdx, 1, values)
			this.setLastIndex(this.innerIndex.slice(0, colIdx))
			let tmpIndex = deepClone(this.innerIndex)
			for (let i = 0; i < this.innerColumns.length; i++) {
				if (i > this.columnIndex) {
					tmpIndex[i] = 0
				}
			}
			this.setIndexs(tmpIndex, false)
		},
		getColumnValues(colIdx) {
			return this.innerColumns[colIdx]
		},
		setColumns(cols) {
			this.innerColumns = cols
			let newIndexes = []
			for (let i = 0; i < cols.length; i++) {
				if (this.defaultIndex && this.defaultIndex.length > i) {
					newIndexes.push(this.defaultIndex[i])
				} else if (this.innerIndex.length > i) {
					newIndexes.push(this.innerIndex[i])
				} else {
					newIndexes.push(0)
				}
			}
			this.innerIndex = newIndexes
			this.setLastIndex(newIndexes)
			this.syncScrollPositions()
		},
		getIndexs() {
			return this.innerIndex
		},
		getValues() {
			return this.innerColumns.map((item, index) => item[this.innerIndex[index]])
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.up-picker {
	position: relative;
	background-color: #ffffff;

	&__body {
		position: relative;
		overflow: hidden;
		background-color: #ffffff;
	}

	&__indicator {
		position: absolute;
		left: 0;
		right: 0;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-top-style: solid;
		border-bottom-style: solid;
		border-top-color: #e5e7eb;
		border-bottom-color: #e5e7eb;
		background-color: rgba(0, 0, 0, 0.02);
		pointer-events: none;
		z-index: 2;
	}

	&__mask {
		position: absolute;
		left: 0;
		right: 0;
		pointer-events: none;
		z-index: 3;

		&--top {
			top: 0;
			background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3));
		}

		&--bottom {
			bottom: 0;
			background-image: linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3));
		}
	}

	&__columns {
		@include flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
	}

	&__column {
		flex: 1;
		height: 100%;
	}

	&__item {
		@include flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;

		&__text {
			font-size: 16px;
			text-align: center;
		}
	}

	&--loading {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		@include flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.87);
		z-index: 1000;
	}
}
</style>
