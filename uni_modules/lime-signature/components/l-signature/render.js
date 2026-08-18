// #ifdef APP-VUE 
// import { Signature } from '@signature'
import {
	Signature
} from './signature.js'
import {
	isTransparent
} from './utils'
export default {
	data() {
		return {
			canvasid: null,
			signature: null,
			observer: null,
			options: {},
			saveCount: 0,
		}
	},
	mounted() {
		this.$nextTick(this.init)
	},
	methods: {
		checkAndEmitEmptyStatus() {
			setTimeout(()=>{
				if (this.signature) {
					const isEmpty = this.signature.isEmpty()
					this.emit({
						isEmpty
					})
				}
			},0)
		},
		init() {
			const el = this.$refs.limeSignature || this.$ownerInstance.$el;
			this.canvas = document.createElement('canvas')
			this.canvas.style = 'width: 100%; height: 100%;'
			el.appendChild(this.canvas)
			this.signature = new Signature({
				el: this.canvas
			})
			this.signature.pen.setOption(this.options)
			const width = this.signature.canvas.get('width')
			const height = this.signature.canvas.get('height')
			
			this.canvas?.addEventListener('touchend', this.checkAndEmitEmptyStatus.bind(this))
			
			this.emit({
				changeSize: {
					width,
					height
				}
			})
		},
		redo(v) {
			if (v && this.signature) {
				this.signature.redo()
				this.checkAndEmitEmptyStatus()
			}
		},
		undo(v) {
			if (v && this.signature) {
				this.signature.undo()
				this.checkAndEmitEmptyStatus()
			}
		},
		clear(v) {
			if (v && this.signature) {
				this.signature.clear()
				this.checkAndEmitEmptyStatus()
			}
		},
		destroy() {
			if (this.canvas) {
				this.canvas?.removeEventListener('touchend', this.checkAndEmitEmptyStatus.bind(this))
				this.canvas.remove()
				
			}
		},
		mask(param={}) {
			if (this.signature) {
				let {destWidth=0, destHeight=0} = JSON.parse(param)
				let canvas = document.createElement('canvas')
				const ctx = canvas.getContext('2d');
				const pixelRatio = this.signature.canvas.get('pixelRatio')
				let width = this.signature.canvas.get('width')
				let height = this.signature.canvas.get('height')
				let context = this.signature.canvas.get('context')
				canvas.width = width * pixelRatio
				canvas.height = height * pixelRatio

				const imageData = context.getImageData(0, 0, width * pixelRatio, height * pixelRatio);
				for (let i = 0; i < imageData.data.length; i += 4) {
					// 判断当前像素是否透明
					const isTransparent = imageData.data[i + 3] === 0;
				
					if (isTransparent) {
						// 将透明像素设置为黑色背景
						imageData.data[i] = 0;
						imageData.data[i + 1] = 0;
						imageData.data[i + 2] = 0;
					} else {
						// 将非透明像素设置为白色内容
						imageData.data[i] = 255;
						imageData.data[i + 1] = 255;
						imageData.data[i + 2] = 255;
					}
				}
				ctx.putImageData(imageData, 0, 0);
				if(destWidth&&destHeight){
					const _canvas = document.createElement('canvas')
					_canvas.width = destWidth
					_canvas.height = destHeight
					const _context = _canvas.getContext('2d')
					_context.drawImage(canvas, 0, 0, destWidth, destHeight)
					canvas.remove()
					canvas = _canvas	
				}
				this.emit({
					save: canvas.toDataURL()
				})
				canvas.remove()
			}

		},
		save(param) {
			let {
				fileType = 'png', 
				quality = 1, 
				n,
				destWidth = 0,
				destHeight = 0,
			} = JSON.parse(param)
			const type = `image/${fileType}`.replace(/jpg/, 'jpeg');
			if (n !== this.saveCount) {
				this.saveCount = n;
				const {
					backgroundColor,
					backgroundImage,
					landscape,
					boundingBox
				} = this.options
				const flag = landscape || backgroundColor || boundingBox||destWidth&&destHeight
				const image = this.signature.canvas.get('el').toDataURL(!flag && type, !flag && quality)
				if (flag) {
					let canvas = document.createElement('canvas')
					const pixelRatio = this.signature.canvas.get('pixelRatio')
					let width = this.signature.canvas.get('width')
					let height = this.signature.canvas.get('height')
					let x = 0
					let y = 0

					const next = () => {
						const size = [width, height]
						if (landscape) {
							size.reverse()
						}
						canvas.width =  size[0] * pixelRatio
						canvas.height = size[1] * pixelRatio
						const param = [x, y, width, height, 0, 0, width, height].map(item => item * pixelRatio)
						const context = canvas.getContext('2d')
						if (landscape) {
							context.translate(0, width * pixelRatio)
							context.rotate(-Math.PI / 2)
						}
						if (backgroundColor && !isTransparent(backgroundColor)) {
							context.fillStyle = backgroundColor
							context.fillRect(0, 0, width * pixelRatio, height * pixelRatio)
						}
						const drawImage = () => {
							// param
							context.drawImage(this.signature.canvas.get('el'), ...param)
							if(destWidth&&destHeight){
								const _canvas = document.createElement('canvas')
								_canvas.width = destWidth
								_canvas.height = destHeight
								const _context = _canvas.getContext('2d')
								_context.drawImage(canvas, 0, 0, destWidth, destHeight)
								canvas.remove()
								canvas = _canvas	
							}
							this.emit({
								save: canvas.toDataURL(type, quality)
							})
							canvas.remove()
						}
						if (backgroundImage) {
							const img = new Image();
							img.onload = () => {
								context.drawImage(img, ...param)
								drawImage()
							}
							img.src = backgroundImage
						}
						if (!backgroundImage) {
							drawImage()
						}
					}
					if (boundingBox) {
						const res = this.signature.getContentBoundingBox()
						width = res.width
						height = res.height
						x = res.startX
						y = res.startY
						next()
					} else {
						next()
					}

				} else {
					this.emit({
						save: image
					})
				}
			}
		},
		isEmpty(v) {
			if (v && this.signature) {
				const isEmpty = this.signature.isEmpty()
				this.emit({
					isEmpty
				})
			}
		},
		emit(event) {
			this.$ownerInstance.callMethod('onMessage', {
				detail: {
					data: [{
						event
					}]
				}
			})
		},
		update(v) {
			if (v) {
				if (this.signature) {
					this.options = v
					this.signature.pen.setOption(v)
				} else {
					this.options = v
				}
			}
		}
	}
}
// #endif