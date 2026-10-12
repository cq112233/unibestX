<template>
  <view class="up-picker-warrper">
    <view
      v-if="hasInput"
      class="up-picker-input cursor-pointer"
      @click="showByClickInput = !showByClickInput"
    >
      <slot>
        <view>
          {{ inputLabel && inputLabel.length ? inputLabel.join('/') : placeholder }}
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
        <view v-if="toolbarBottomSlot">
          <slot name="toolbar-bottom"></slot>
        </view>

        <!-- #ifdef APP -->
        <!-- App 原生端（iOS / Android）：使用用户原生平滑滚动容器 -->
        <view class="up-picker__body" :style="{ height: pickerViewHeight }">
          <view
            class="up-picker__indicator"
            :style="{
              top: indicatorTop,
              height: addUnit(itemHeight)
            }"
          ></view>
          <view
            class="up-picker__mask up-picker__mask--top"
            :style="{ height: indicatorTop }"
          ></view>
          <view
            class="up-picker__mask up-picker__mask--bottom"
            :style="{ height: indicatorTop }"
          ></view>
          <view class="up-picker__columns">
            <scroll-view
              v-for="(column, colIndex) in innerColumns"
              :key="colIndex"
              class="up-picker__column"
              direction="vertical"
              :scroll-top="columnScrollTops[colIndex]"
              :show-scrollbar="false"
              @scroll="onColumnScroll($event, colIndex)"
              @touchend="onColumnTouchEnd(colIndex)"
            >
              <view :style="{ height: indicatorTop }"></view>
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
              <view :style="{ height: indicatorTop }"></view>
            </scroll-view>
          </view>
        </view>
        <!-- #endif -->

        <!-- #ifndef APP -->
        <!-- 非 App 平台（微信小程序 / H5 / Web 等）：使用标准原生 3D 滚轮 picker-view -->
        <picker-view
          class="up-picker__view"
          :indicator-style="`height: ${addUnit(itemHeight)}`"
          :value="innerIndex"
          :immediate-change="immediateChange"
          :style="{ height: pickerViewHeight }"
          @change="changeHandler"
        >
          <picker-view-column
            v-for="(column, colIndex) in innerColumns"
            :key="colIndex"
            class="up-picker__view__column"
          >
            <view
              v-for="(item, itemIndex) in column"
              :key="itemIndex"
              class="up-picker__view__column__item up-line-1"
              :style="{ height: addUnit(itemHeight) }"
            >
              <text
                class="up-picker__view__column__item__text"
                :style="{
                  lineHeight: addUnit(itemHeight),
                  color: (innerIndex.length > colIndex && itemIndex == innerIndex[colIndex]) ? '#303133' : '#606266',
                  fontWeight: (innerIndex.length > colIndex && itemIndex == innerIndex[colIndex]) ? 'bold' : 'normal',
                }"
              >
                {{ getItemText(item) }}
              </text>
            </view>
          </picker-view-column>
        </picker-view>
        <!-- #endif -->

        <view
          v-if="loading"
          class="up-picker--loading"
        >
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
import { addUnit } from '../../libs/function/index.js'

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
				if (this.defaultIndex && this.defaultIndex.length > 0) {
					this.setIndexs(this.defaultIndex, true)
				}
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
		testArray: test.array,
		getItemText(item) {
			if (test.object(item)) {
				return item[this.keyName]
			} else {
				return item != null ? item : ''
			}
		},
		isItemSelected(colIndex, itemIndex) {
			return this.innerIndex.length > colIndex && this.innerIndex[colIndex] == itemIndex
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
			let valueOrigin = []
			for (let index = 0; index < this.innerColumns.length; index++) {
				const item = this.innerColumns[index]
				const idx = index < this.innerIndex.length ? this.innerIndex[index] : 0
				if (idx < item.length) {
					valueOrigin.push(item[idx])
				}
			}
			this.$emit('confirm', {
				indexs: this.innerIndex,
				value: valueOrigin,
				values: this.innerColumns
			})
		},
		onItemClick(colIndex, itemIndex) {
			if (this.innerIndex.length > colIndex) {
				this.innerIndex[colIndex] = itemIndex
				if (this.columnScrollTops.length > colIndex) {
					this.columnScrollTops.splice(colIndex, 1, itemIndex * this.itemHeightNumber)
				}
				this.columnIndex = colIndex
				this.notifyChange(colIndex, itemIndex)
			}
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
				if (this.innerIndex.length > colIndex && this.columnScrollTops.length > colIndex) {
					const idx = this.innerIndex[colIndex]
					this.columnScrollTops.splice(colIndex, 1, idx * this.itemHeightNumber)
				}
			}, 80)
		},
		notifyChange(colIdx, changedItemIdx) {
			this.setLastIndex(this.innerIndex)
			this.$emit('update:modelValue', this.inputValue)

			let valueOrigin = []
			for (let i = 0; i < this.innerColumns.length; i++) {
				const col = this.innerColumns[i]
				const selectedIdx = i < this.innerIndex.length ? this.innerIndex[i] : 0
				if (selectedIdx < col.length) {
					valueOrigin.push(col[selectedIdx])
				}
			}

			this.$emit('change', {
				value: valueOrigin,
				index: changedItemIdx,
				indexs: this.innerIndex,
				values: this.innerColumns,
				columnIndex: colIdx
			})
		},
		changeHandler(e) {
			const val = e.detail.value
			let index = 0
			let colIdx = 0
			for (let i = 0; i < val.length; i++) {
				const item = val[i]
				if (item != (i < this.lastIndex.length ? this.lastIndex[i] : 0)) {
					colIdx = i
					index = item
					break
				}
			}
			this.columnIndex = colIdx
			this.setLastIndex(val)
			this.setIndexs(val, false)

			this.$emit('update:modelValue', this.inputValue)

			let valueOrigin = []
			for (let i = 0; i < this.innerColumns.length; i++) {
				const col = this.innerColumns[i]
				const selectedIdx = i < val.length ? val[i] : 0
				if (selectedIdx < col.length) {
					valueOrigin.push(col[selectedIdx])
				}
			}

			this.$emit('change', {
				value: valueOrigin,
				index,
				indexs: val,
				values: this.innerColumns,
				columnIndex: colIdx
			})
		},
		setIndexs(index, shouldSetLast) {
			if (index != null && index.length > 0) {
				this.innerIndex = [...index]
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
		syncScrollPositions() {
			let tops = []
			for (let i = 0; i < this.innerColumns.length; i++) {
				const idx = i < this.innerIndex.length ? this.innerIndex[i] : 0
				tops.push(idx * this.itemHeightNumber)
			}
			this.columnScrollTops = tops
		},
		setLastIndex(index) {
			this.lastIndex = [...index]
		},
		setColumnValues(colIndex, values) {
			this.innerColumns.splice(colIndex, 1, values)
			this.setLastIndex(this.innerIndex.slice(0, colIndex))
			let tmpIndex = [...this.innerIndex]
			for (let i = 0; i < this.innerColumns.length; i++) {
				if (i > colIndex) {
					tmpIndex[i] = 0
				}
			}
			this.setIndexs(tmpIndex, false)
		},
		getColumnValues(colIndex) {
			if (colIndex >= 0 && colIndex < this.innerColumns.length) {
				return this.innerColumns[colIndex]
			}
			return []
		},
		setColumns(cols) {
			this.innerColumns = cols
			if (this.innerIndex.length == 0 || this.innerIndex.length != cols.length) {
				let newIndexes = []
				for (let i = 0; i < cols.length; i++) {
					if (this.defaultIndex && this.defaultIndex.length > i) {
						newIndexes.push(this.defaultIndex[i])
					} else {
						newIndexes.push(0)
					}
				}
				this.innerIndex = newIndexes
				this.setLastIndex(newIndexes)
			}
			this.syncScrollPositions()
		},
		getIndexs() {
			return this.innerIndex
		},
		getValues() {
			let res = []
			for (let index = 0; index < this.innerColumns.length; index++) {
				const item = this.innerColumns[index]
				const idx = index < this.innerIndex.length ? this.innerIndex[index] : 0
				if (idx < item.length) {
					res.push(item[idx])
				}
			}
			return res
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
		width: 100%;
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
			text-align: center;
		}
	}

	&__view {
		width: 100%;

		&__column {
			@include flex;
			flex: 1;
			justify-content: center;

			&__item {
				@include flex;
				justify-content: center;
				align-items: center;
				width: 100%;

				&__text {
					font-size: 16px;
					text-align: center;
					color: #303133;
				}
			}
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
