<template>
	<view class="demo-block">
		<text class="text-2xl font-bold mb-2 d-flex">Icon 图标</text>
		<text class="text-sm text-gray-5 mb-4 d-flex">iconify图标集，超过15,0000个开源矢量图标</text>
		<view class="demo-block__body">
			<view class="bg-white p-4 mb-4 rounded">
				<text class="text-lg font-bold mb-4 d-flex">基础使用</text>
				<view class="flex flex-row flex-wrap d-flex">
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon name="earth" size="30px"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon name="animation-1" size="30px"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon name="object-storage" size="30px"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon name="animation" size="30px"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon name="brightness-1" size="30px"></l-icon>
					</view>
				</view>
			</view>

			<view class="bg-white p-4 mb-4 rounded">
				<text class="text-lg font-bold mb-4 d-flex">使用图片</text>
				<view class="flex flex-row flex-wrap d-flex">
					<view class="flex items-center py-2 grid-item d-flex" v-for="item in imageList" :key="item">
						<l-icon :name="item" size="30px" color="blue"></l-icon>
					</view>
				</view>
			</view>

			<view class="bg-white p-4 mb-4 rounded">
				<text class="text-lg font-bold mb-4 d-flex">iconify</text>
				<view class="flex flex-row flex-wrap d-flex">
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" name="uil:12-plus" color="blue"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" name="icon-park-outline:abdominal"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" name="icon-park-outline:acoustic"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" name="ph:tabs-bold"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" name="ri:aliens-fill"></l-icon>
					</view>
				</view>
			</view>

			<view class="bg-white p-4 mb-4 rounded">
				<text class="text-lg font-bold mb-4 d-flex">自定义图标</text>
				<view class="flex flex-row flex-wrap d-flex">
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" prefix="keyicon" name="close"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" :name="`\uE6EF`"></l-icon>
					</view>
					<view class="flex items-center py-2 grid-item d-flex">
						<l-icon size="30px" :name="dynamicIcon"></l-icon>
					</view>
				</view>
				<button @click="toggleIcon" type="primary" class="mt-4">切换图标</button>
			</view>
		</view>
	</view>
</template>
<script>
	import { registerFontIcon } from '@/uni_modules/lime-icon'
	import { imageList } from './imageList'
	export default {
		data() {
			return {
				show: false,
				page: 0,
				pageSize: 10,
				iconsData: [],
				icons: [],
				customList: [
					'add-circle',
					// 'image-fill',
					// 'image-fail-fill',
					// 'close-circle-fill',
					// 'close',
				],
				dynamicIcon: 'earth',
				imageList,
				color: 'blue'
			}
		},
		created() {
			registerFontIcon({
				fontFamily: 'keyicon',
				prefix: 'keyicon',
				fontUrl: 'https://at.alicdn.com/t/c/font_4741157_ul7wcp52yys.ttf',
				icons: {
					close: 'E6EF'
				}
			})
		},
		methods: {
			toggleIcon() {
				this.dynamicIcon = this.dynamicIcon !== 'heart' ? 'heart' : 'earth'
			}
		},
		mounted() {

		}
	}
</script>
<style lang="scss">
	@import '@/uni_modules/lime-style/atomic.scss';
	@font-face {
		font-family: keyicon;
		src: url('https://at.alicdn.com/t/c/font_4741157_ul7wcp52yys.ttf');
	}

	.keyicon {
		font-family: keyicon;
	}

	.grid {
		&-item {
			flex-basis: 20%;
		}
	}
	.demo-block {
		padding: 32px 16px 0;
	}

</style>