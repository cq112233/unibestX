/**
 * 模拟img标签, 兼容旧版canvas
 */
export default class UniImg {
	constructor() {
		this.tagName = 'IMG'
		this.currentSrc = null
		this.naturalHeight = 0
		this.naturalWidth = 0
		this.width = 0
		this.height = 0
	}
	set src(src) {
		this.currentSrc = src
		uni.getImageInfo({
			src,
			success: ({width, height}) => {
				this.naturalWidth = this.width = width
				this.naturalHeight = this.height = height
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