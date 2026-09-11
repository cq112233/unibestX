// 引入全局mixin
import { mixin } from './libs/mixin/mixin.uts'
// 小程序特有的mixin
import { mpMixin } from './libs/mixin/mpMixin.uts'
// 配置信息
import config from './libs/config/config.uts'
// 关于颜色的配置，特殊场景使用
import color from './libs/config/color.uts'
import * as index from './libs/function/index.uts'
export {config, color}
export {mixin, mpMixin}
export * from './libs/function/index'

// export class UPArray = {
// 	list: [] as Array<any>
// 	constructor(length: number = 0 ) {
// 		for (var index = 0; index < length; index++) {
// 			list.push('')
// 		}
// 	}
// 	fill(num: number) {
// 		this.for
// 	}
// }

export function loadFont() {
	uni.loadFontFace({
	  global: true,
	  family: 'iconfont',
	  source: "url('/static/iconfont/iconfont.ttf')", // 需使用url方法包裹。本地字体请放在/static目录下，否则打包时不会把字体文件打进去。也支持网络字体
	  success() {
		console.log('global loadFontFace uni.ttf success')
	  },
	  fail(error) {
		console.warn('global loadFontFace uni.ttf fail', error.errMsg)
	  }
	})
}

// 快捷工具方法
class UPUtils {
 	addUnit(val: any|null, unit: string|null = ''): string {
		return index.addUnit(val, unit)
	}
	addStyle(customStyle: any, target = 'object'): any {
		return index.addStyle(customStyle, target)
	}
	getPx(val: any, unit = false): string {
		return index.getPx(val, unit)
	}
	timeFormat(dateTime: any = 0, formatStr: string = 'yyyy-mm-dd'): string {
		return index.timeFormat(dateTime, formatStr)
	}
	toast(title: string, duration = 2000): void {
		index.toast(title, duration)
	}
}
const uputils = new UPUtils()
const install = (app: VueApp): void => {
	app.config.globalProperties.$u = uputils
    app.config.globalProperties.$up = uputils
    app.mixin(mixin)
}

export default {
    install
}
