import '/Applications/HBuilderX 2.app/Contents/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-console/src/runtime/app/index.ts';import App from './App.uvue' // 导入应用根组件 App.uvue
import { createSSRApp } from 'vue' // 导入 Vue 的 SSR 应用创建方法
import pinia from './src/store'  // 导入 Pinia 状态管理实例（在 App-Android 平台上强制进行顶层定义约束）
import i18n from './src/i18n' // 导入 i18n 国际化配置实例
import ultraUI from '@/uni_modules/uview-ultra/index.uts' // 导入 uview-ultra 跨端 UI 组件库
import { installRouteInterceptor } from './src/router/interceptor' // 导入全局路由拦截器安装函数
















/**
 * 创建应用实例的入口函数
 */
export function createApp() {
	// 安装全局路由拦截器
	installRouteInterceptor()

	// 创建 Vue 应用程序实例，传入根组件 App
	const app = createSSRApp(App)

	// 注册 Pinia 状态管理
	app.use(pinia)

	// 可选配置：将 pinia 实例挂载到 Vue 全局属性中，以便于在 Options API 模板中使用 this.$pinia 访问
	app.config.globalProperties.$pinia = pinia

	// 注册 i18n 国际化插件
	app.use(i18n)

	// 注册 uview-ultra UI 组件库并传入自定义初始化配置项
	app.use(ultraUI, () => {
		return {
			options: {
				config: {
					// 开启只加载一次字体图标的优化，避免重复加载
					loadFontOnce: true
				}
			}
		}
	})

















	// 返回创建好的应用实例对象，供系统挂载运行
	return {
		app
	}
}

export function main(app: IApp) {
    definePageRoutes();
    defineAppConfig();
    (createApp()['app'] as VueApp).mount(app, GenUniApp());
}

export class UniAppConfig extends io.dcloud.uniapp.appframe.AppConfig {
    override name: string = "unibestX"
    override appid: string = "__UNI__5198058"
    override versionName: string = "1.0.0"
    override versionCode: string = "100"
    override uniCompilerVersion: string = "5.15"
    
    constructor() { super() }
}

import GenSrcPagesIndexIndexClass from './src/pages/index/index.uvue'
import GenSrcPagesMeMeClass from './src/pages/me/me.uvue'
import GenSrcPagesBasicBasicClass from './src/pages/basic/basic.uvue'
import GenSrcPagesFunctionFunctionClass from './src/pages/function/function.uvue'
import GenSrcPagesAiAiClass from './src/pages/ai/ai.uvue'
import GenSrcSubAuthLoginClass from './src/sub/auth/login.uvue'
import GenSrcSubAuthRegisterClass from './src/sub/auth/register.uvue'
import GenSrcSubTestTestClass from './src/sub/test/test.uvue'
import GenSrcSubPagingPagingClass from './src/sub/paging/paging.uvue'
import GenSrcSubUviewUltraUviewUltraClass from './src/sub/uview-ultra/uview-ultra.uvue'
function definePageRoutes() {
__uniRoutes.push({ path: "src/pages/index/index", component: GenSrcPagesIndexIndexClass, meta: { isQuit: true } as UniPageMeta, style: _uM([["navigationStyle","custom"],["navigationBarTitleText","首页"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/me/me", component: GenSrcPagesMeMeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","我的"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/basic/basic", component: GenSrcPagesBasicBasicClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","基础"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/function/function", component: GenSrcPagesFunctionFunctionClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","功能"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/ai/ai", component: GenSrcPagesAiAiClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationStyle","custom"],["navigationBarTitleText","AI助手"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/auth/login", component: GenSrcSubAuthLoginClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","登录"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/auth/register", component: GenSrcSubAuthRegisterClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","注册"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/test/test", component: GenSrcSubTestTestClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText",""]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/paging/paging", component: GenSrcSubPagingPagingClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationStyle","custom"],["navigationBarTitleText","分页加载"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/uview-ultra", component: GenSrcSubUviewUltraUviewUltraClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationStyle","custom"],["navigationBarTitleText","uview-ultra 示例"]]) } as UniPageRoute)
}
const __uniTabBar: Map<string, any | null> | null = _uM([["custom",true],["color","#999999"],["selectedColor","#1890ff"],["backgroundColor","#F8F8F8"],["list",[_uM([["pagePath","src/pages/index/index"],["text","首页"]]),_uM([["pagePath","src/pages/basic/basic"],["text","基础"]]),_uM([["pagePath","src/pages/function/function"],["text","功能"]]),_uM([["pagePath","src/pages/me/me"],["text","我的"]])]]])
const __uniLaunchPage: Map<string, any | null> = _uM([["url","src/pages/index/index"],["style",_uM([["navigationStyle","custom"],["navigationBarTitleText","首页"]])]])
function defineAppConfig(){
  __uniConfig.entryPagePath = '/src/pages/index/index'
  __uniConfig.globalStyle = _uM([["navigationBarTextStyle","black"],["navigationBarTitleText","uni-app x"],["navigationBarBackgroundColor","#ffffff"],["backgroundColor","#F8F8F8"]])
  __uniConfig.getTabBarConfig = ():Map<string, any> | null =>  _uM([["custom",true],["color","#999999"],["selectedColor","#1890ff"],["backgroundColor","#F8F8F8"],["list",[_uM([["pagePath","src/pages/index/index"],["text","首页"]]),_uM([["pagePath","src/pages/basic/basic"],["text","基础"]]),_uM([["pagePath","src/pages/function/function"],["text","功能"]]),_uM([["pagePath","src/pages/me/me"],["text","我的"]])]]])
  __uniConfig.tabBar = __uniConfig.getTabBarConfig()
  __uniConfig.conditionUrl = ''
  __uniConfig.uniIdRouter = new Map()
  
  __uniConfig.ready = true
}
