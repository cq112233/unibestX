// ==========================================
// 环境变量模块 — 区分 dev / test / prod
// ==========================================
// uni-app X 不支持 .env 自定义环境变量，仅 process.env.NODE_ENV
// 可用（development / production），测试环境需运行时手动切换。
// ==========================================

export type EnvType = 'development' | 'test' | 'production'

export type EnvConfig = {
	/** 环境中文名 */
	name: string
	/** 接口基础地址 */
	baseURL: string
}

// ----- 各环境配置 -----
const devConfig: EnvConfig = {
	name: '开发环境',
	baseURL: 'http://localhost:3000',
}

const testConfig: EnvConfig = {
	name: '测试环境',
	baseURL: 'https://test-api.example.com',
}

const prodConfig: EnvConfig = {
	name: '生产环境',
	baseURL: 'https://api.example.com',
}

// ----- 编译期自动识别 -----
// uni-app X 中：HBuilderX「运行」→ 'development'，「发行」→ 'production'
const systemEnv: EnvType =
	process.env.NODE_ENV === 'development' ? 'development' : 'production'

/** 运行时环境覆盖（为 null 时跟随 systemEnv） */
let overrideEnv: EnvType | null = null

// ----- 公开 API -----

/** 获取编译期系统默认环境 */
export function getSystemEnv(): EnvType {
	return systemEnv
}

/** 获取当前生效的环境类型 */
export function getCurrentEnv(): EnvType {
	const env = overrideEnv
	if (env != null) {
		return env
	}
	return systemEnv
}

/** 手动切换到指定环境（仅当前 session 生效） */
export function setCurrentEnv(env: EnvType): void {
	overrideEnv = env
}

/** 重置为系统默认环境 */
export function resetEnv(): void {
	overrideEnv = null
}

/** 获取当前环境完整配置 */
export function getEnvConfig(): EnvConfig {
	return getEnvConfigFor(getCurrentEnv())
}

/** 根据指定环境类型获取配置（用于 computed 中显式依赖 ref） */
export function getEnvConfigFor(env: EnvType): EnvConfig {
	if (env === 'test') {
		return testConfig
	}
	if (env === 'production') {
		return prodConfig
	}
	return devConfig
}

/** 所有可选环境类型 */
export function getAllEnvTypes(): EnvType[] {
	return ['development', 'test', 'production']
}

/** 环境类型的中文标签 */
export function getEnvLabel(type: EnvType): string {
	if (type === 'development') {
		return '开发'
	}
	if (type === 'test') {
		return '测试'
	}
	if (type === 'production') {
		return '生产'
	}
	return '未知'
}

/** 是否为开发环境 */
export function isDev(): boolean {
	return getCurrentEnv() === 'development'
}

/** 是否为测试环境 */
export function isTest(): boolean {
	return getCurrentEnv() === 'test'
}

/** 是否为生产环境 */
export function isProd(): boolean {
	return getCurrentEnv() === 'production'
}
