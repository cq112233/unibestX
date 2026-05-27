<template>
	<!-- 字体图标 -->
	<text v-if="type == 'font'" class="l-icon l-icon--font l-class" :class="classes" :style="styles"
		@click="handleClick">
		{{ fontIcon && fontIcon.char }}
	</text>

	<!-- 图片图标 -->
	<image v-else-if="type == 'image' && (!parsed.isSvg || !color)" class="l-icon l-icon--image l-class" :class="classes"
		:style="styles" :src="imageUrl" @click="handleClick">
	</image>

	<!-- SVG图标（包括Iconify和带有颜色的SVG图片） -->
	<l-svg v-else-if="iconifyUrl || (type == 'image' && parsed.isSvg && color)" class="l-icon l-icon--image l-class"
		:class="classes" :style="styles" :src="iconifyUrl || imageUrl" :color="color" :inherit="inherit"
		:web="web" @click="handleClick">
	</l-svg>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * LimeIcon 图标
	 * @description ICON集
	 * <br> 插件类型：LIconComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=14057
	 * @property {String} name 图标名称
	 * @property {String} color 颜色
	 * @property {String} size 尺寸
	 * @property {String} prefix 字体图标前缀  
	 * @property {Boolean} inherit 是否继承颜色 
	 * @property {Boolean} web 原生 app(nvue,uvue) 是否使用web渲染  
	 * @event {Function} click 点击事件
	 */
	
	import { classNames } from '@/uni_modules/lime-shared/classNames'
	import { stringifyStyle } from '@/uni_modules/lime-shared/stringifyStyle'
	import { computed, defineComponent, inject } from '@/uni_modules/lime-shared/vue';
	import { addUnit } from '@/uni_modules/lime-shared/addUnit';
	import { useIcon, loadingFonts } from '@/uni_modules/lime-icon';
	import iconProps from './props';
	
	export default defineComponent({
		externalClasses: ['l-class'],
		options: {
			addGlobalClass: true,
			// #ifndef MP-TOUTIAO
			virtualHost: true,
			// #endif
		},
		props: iconProps,
		emits: ['click'],
		setup(props, { emit }) {
			// 使用 useIcon hook 获取图标信息
			const { type, fontIcon, imageUrl, iconifyUrl, parsed } = useIcon(
				computed(() : string => props.name),
				{ prefix: props.prefix },
			);

			const classes = computed(() => {
				const prefix = props.prefix || 'l'
				return classNames(type.value == 'font' && prefix , props.lClass)
			})
			
			// 计算图标样式
			const styles = computed(()=> {
				const fontSize = addUnit(props.size);
				const isFont = type.value == 'font'
				return stringifyStyle(props.lStyle, {
					fontFamily: isFont ? fontIcon.value?.fontFamily : false,
					fontSize:   isFont ? fontSize : false,
					color:   	isFont ? props.color : false,
					width:    	!isFont ? fontSize: false,
					height:   	!isFont ? fontSize: false,
				})
			})
			
			
			// 处理点击事件
			const handleClick = () => {
				emit('click');
			};

			return {
				classes,
				styles,
				type,
				fontIcon,
				imageUrl,
				iconifyUrl,
				parsed,
				handleClick
			};
		}
	});
</script>
<style lang="scss">
	@import './index.scss';
</style>