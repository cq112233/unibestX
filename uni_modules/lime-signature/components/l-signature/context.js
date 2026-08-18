const uniPlatform = uni.getSystemInfoSync().uniPlatform

export const uniContext = (canvasId, context) => {
	let ctx = uni.createCanvasContext(canvasId, context)
	if (!ctx.uniDrawImage) {
		ctx.uniDrawImage = ctx.drawImage
		ctx.drawImage = (image, ...agrs) => {
			ctx.uniDrawImage(image.src, ...agrs)
		}
	}

	if (!ctx.getImageData) {
		ctx.getImageData = (x, y, width, height) => {
			return new Promise((resolve, reject) => {
				// #ifdef MP || VUE2
				if (context.proxy) context = context.proxy
				// #endif
				uni.canvasGetImageData({
					canvasId,
					x,
					y,
					width:parseInt(width),
					height:parseInt(height),
					success(res) {
						resolve(res)
					},
					fail(error) {
						reject(error)
					}
				}, context)
			})
		}
	} else {
		ctx._getImageData = ctx.getImageData
		ctx.getImageData = (x, y, width, height) => {
			return new Promise((resolve, reject) => {
				ctx._getImageData({
					x,
					y,
					width: parseInt(width) ,
					height:parseInt(height),
					success(res) {
						resolve(res)
					},
					fail(error) {
						reject(error)
					}
				})
			})
		}
	}

	return ctx
}

class Image {
	constructor() {
		this.currentSrc = null
		this.naturalHeight = 0
		this.naturalWidth = 0
		this.width = 0
		this.height = 0
		this.tagName = 'IMG'
	}
	onerror() {}
	onload() {}
	set src(src) {
		this.currentSrc = src
		uni.getImageInfo({
			src,
			success: (res) => {
				this.naturalWidth = this.width = res.width
				this.naturalHeight = this.height = res.height
				this.onload()
			},
			fail: () => {
				this.onerror()
			}
		})
	}
	get src() {
		return this.currentSrc
	}
}

export const createImage = () => {
	return new Image()
}
export function useCurrentPage() {
	const pages = getCurrentPages();
	return pages[pages.length - 1];
}
export const toDataURL = (canvasId, context, options = {}) => {
	// #ifdef MP-QQ
	// context = context.$scope
	// #endif
	// #ifdef MP-ALIPAY
	context = ''
	// #endif

	return new Promise((resolve, reject) => {
		let {
			canvas,
			width,
			height,
			destWidth = 0,
			destHeight = 0,
			x = 0,
			y = 0,
			preferToDataURL
		} = options
		const {
			pixelRatio
		} = uni.getSystemInfoSync()
		
		// #ifdef MP-ALIPAY
		const isDD = typeof dd != 'undefined'
		if (!isDD && (!destWidth || !destHeight)) {
			destWidth = width * pixelRatio;
			destHeight = height * pixelRatio;
			width = destWidth;
			height = destHeight;
			x = x * pixelRatio
			y = y * pixelRatio
		}
		// #endif
		const params = {
			...options,
			canvasId,
			id: canvasId,
			// #ifdef MP-ALIPAY
			x,
			y,
			width,
			height,
			destWidth,
			destHeight,
			// #endif
			canvas,
			success: (res) => {
				// 钉钉小程序 不存在tempFilePath
				resolve(res.tempFilePath || res.filePath)
			},
			fail: (err) => {
				reject(err)
			}
		}
		// 抖音小程序canvas 2d不支持canvasToTempFilePath
		if (canvas && canvas.toDataURL && preferToDataURL) {
			let next = true
			const devtools = uni.getSystemInfoSync().platform == 'devtools'
			// #ifdef MP-TOUTIAO
			next = uni.getSystemInfoSync().platform != 'devtools'
			if (!next) {
				console.warn('[lime-signature] 抖音开发工具不支持bbox')
			}
			// #endif
			if ((x || y) && next) {
				const offCanvas = uni.createOffscreenCanvas({
					type: '2d'
				});
				const ctx = offCanvas.getContext("2d");
				const destWidth = Math.floor(width * pixelRatio)
				const destHeight = Math.floor(height * pixelRatio)
				offCanvas.width = destWidth // canvas.width;
				offCanvas.height = destHeight // canvas.height;
				// ctx.scale(pixelRatio, pixelRatio)
				// ctx.drawImage(canvas, Math.floor(x*pixelRatio), Math.floor(y*pixelRatio), destWidth, destHeight, 0,0, destWidth, destHeight);
				// 抖音不能在drawImage使用canvas
				const image = canvas.createImage()
				image.onload = () => {
					ctx.drawImage(image, Math.floor(x * pixelRatio), Math.floor(y * pixelRatio),
						destWidth, destHeight, 0, 0, destWidth, destHeight)
					const tempFilePath = offCanvas.toDataURL();
					resolve(tempFilePath)
					if (params.success) {
						params.success({
							tempFilePath
						})
					}
				}
				image.src = canvas.toDataURL()

			} else {
				const tempFilePath = canvas.toDataURL()
				resolve(tempFilePath)
				if (params.success) {
					params.success({
						tempFilePath
					})
				}
			}
		} else if (canvas && canvas.toTempFilePath) {
			canvas.toTempFilePath(params)
		} else {
			uni.canvasToTempFilePath(params, context)
		}
	})

}