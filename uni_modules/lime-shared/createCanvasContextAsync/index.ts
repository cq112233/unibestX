// @ts-nocheck
/**
 * Canvas上下文创建结果类型
 * 包含创建Canvas上下文时返回的各个组件
 */
export type LimeCanvasInstance = {
	/** 
	 * uni-app的CanvasContext对象
	 * 在uni-app X中为uni.createCanvasContextAsync返回的对象
	 * 在非uni-app X中可能是Canvas元素本身或模拟对象
	 */
	context : CanvasContext,

	/** 
	 * Canvas的DOM元素
	 * 注意：在非uni-app X且无法获取DOM元素时可能为null
	 */
	node : UniCanvasElement,

	/** 
	 * Canvas 2D渲染上下文
	 * 用于执行实际的绘图操作（如drawImage, fillRect等）
	 */
	ctx : CanvasRenderingContext2D,
	isCanvas2d : boolean,
	width : number,
	height : number
}



/**
 * 异步创建Canvas上下文
 * 这个函数封装了uni-app不同平台下的Canvas创建逻辑：
 * 1. 在uni-app X中使用uni.createCanvasContextAsync API
 * 2. 在非uni-app X中使用uni.createSelectorQuery查询Canvas元素
 * 
 * @param canvasId - Canvas元素的id选择器
 * @param component - Vue组件实例
 * @returns Promise<LimeCanvasInstance> 包含Canvas上下文、元素和渲染上下文
 * 
 */
export function createCanvasContextAsync(
	canvasId : string,
	component : ComponentPublicInstance
) : Promise<LimeCanvasInstance> {
	return new Promise((resolve, reject) => {
		// 条件编译：uni-app X平台
		// uni-app X使用新的Canvas API
		// #ifdef UNI-APP-X
		nextTick(() => {
			uni.createCanvasContextAsync({
				id: canvasId,
				component,
				success(canvasContext : CanvasContext) {
					// 从CanvasContext中获取2D渲染上下文
					const ctx = canvasContext.getContext('2d')!;
					// 获取Canvas DOM元素
					const node = ctx.canvas;
					// 确保获取有效的尺寸
					const width = node.offsetWidth;
					const height = node.offsetHeight;
					resolve({
						context: canvasContext,
						node,
						ctx,
						isCanvas2d: true,
						width,
						height,
					} as LimeCanvasInstance)
				},
				fail(error) {
					// uni-app X中创建失败时reject错误
					reject(error)
				}
			})
		})

		// #endif

		// 条件编译：非uni-app X平台
		// 包括H5、小程序等平台，使用传统的Canvas查询方式
		// #ifndef UNI-APP-X
		// 创建选择器查询
		uni.createSelectorQuery()
			// 限定在指定组件内查询
			.in(component)
			// 选择指定的Canvas元素
			.select(`#${canvasId}`)
			// 指定需要查询的字段
			.fields({
				node: true,      // 需要获取Canvas节点
				size: true,      // 需要获取尺寸信息
				rect: true       // 需要获取位置信息
			}, (queryResult) => {
				// 成功查询到Canvas节点
				if (queryResult.node && queryResult.node.getContext) {
					// 获取Canvas的2D渲染上下文
					const ctx = queryResult.node.getContext('2d')!;

					let isCanvas2d = true;

					// #ifdef WEB
					isCanvas2d = ![...queryResult.node.classList].includes('uni-canvas-canvas')
					// #endif
					
					const context = {
						createImage: () => {
							if(queryResult.node.createImage) {
								return queryResult.node.createImage()
							}
							return new LimeCanvasImage()
						},
						
					}
					
					resolve({
						ctx,
						node: queryResult.node,  // 返回实际的Canvas DOM元素
						context,        // 在小程序中，Canvas元素本身作为context
						isCanvas2d,
						width: queryResult.node.width,
						height: queryResult.node.height,
					} as LimeCanvasInstance)
				} else {
					// 未能获取到Canvas节点，回退到旧的API
					// 使用uni.createCanvasContext创建绘图上下文
					const ctx = uni.createCanvasContext(canvasId, component)
					if (!ctx._drawImage) {
						ctx._drawImage = ctx.drawImage
						ctx.drawImage = function (...args) {
							const {path} = args.shift();
							ctx._drawImage(path, ...args)
						}
					}
					if (!ctx.getImageData) {
						// ctx.getImageData = function () {
						// 	return new Promise((resolve, reject) => {
						// 		uni.canvasGetImageData({
						// 			canvasId,
						// 			x: parseInt(arguments[0]),
						// 			y: parseInt(arguments[1]),
						// 			width: parseInt(arguments[2]),
						// 			height: parseInt(arguments[3]),
						// 			success(res) {
						// 				resolve(res)
						// 			},
						// 			fail(err) {
						// 				reject(err)
						// 			}
						// 		}, context)
						// 	})
						// }
					}

					// 创建模拟的CanvasContext对象以保持接口一致
					const context = {
						/**
						 * 模拟CanvasContext的getContext方法
						 * 在旧版本API中返回绘图上下文
						 */
						getContext(type : string) {
							return ctx
						},
						createImage(){
							return new LimeCanvasImage()
						},
					}
					const node = {
						...context,
						// toBlob(){},
						// toDataURL(){},
						// createImage(){},
						// createPath2D(){},
						// requestAnimationFrame(){},
						// cancelAnimationFrame(){},
					}
					// 在回退方案中，无法获取到Canvas DOM元素
					resolve({
						ctx,
						node,
						context,
						isCanvas2d: false,
						width: queryResult.width || 300,
						height: queryResult.height || 150,
					} as LimeCanvasInstance)
				}
			}).exec()  // 执行查询
		// #endif
	})
}


// #ifndef UNI-APP-X
// #ifndef WEB
class LimeCanvasImage {
	currentSrc: string | null = null
	naturalHeight: number = 0
	naturalWidth: number = 0
	width: number = 0
	height: number = 0
	tagName: string = 'IMG'
	path: string = ''
	crossOrigin: string = ''
	referrerPolicy: string = ''
	onload: () => void = () => {}
	onerror: () => void = () => {}
	complete: boolean = false
	constructor() {}
	set src(src: string) {
		if(!src) {
			return this.onerror()
		}
		src = src.replace(/^@\//,'/')
		this.currentSrc = src
		this.path = src
		// uniapp 好像不需要下载
		this.onload()
		// uni.getImageInfo({
		// 	src,
		// 	success: (res) => {
		// 		const localReg = /^\.|^\/(?=[^\/])/;
		// 		// #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ || MP-TOUTIAO
		// 		res.path = localReg.test(src) ?  `/${res.path}` : res.path;
		// 		// #endif
		// 		this.complete = true
		// 		this.path = res.path
		// 		this.naturalWidth = this.width = res.width
		// 		this.naturalHeight = this.height = res.height
		// 		this.onload()
		// 	},
		// 	fail: () => {
		// 		this.onerror()
		// 	}
		// })
	}
	get src() {
		return this.currentSrc
	}
}
// #endif
// #ifdef WEB
const LimeCanvasImage = Image
// #endif
// #endif