export interface IURLSearchParams {
	readonly size : number;
	append(key : string, value : string) : void;
	delete(key : string) : void;
	get(key : string) : string | null;
	getAll(key : string) : string[];
	has(key : string) : boolean;
	set(key : string, value : string) : void;



	forEach(callback : (value : string, key : string, parent : IURLSearchParams) => void, thisArg ?: any) : void;
	entries() : string[][];
	keys() : string[];
	values() : string[];
	valueIterator() : UTSIterator<any | null>;
	sort() : void;
}

export type LimeRequestSource = {
    // 请求的URL
    url?: string,
	// 基础URL（可选，用于区分baseURL和实际路径）
	baseURL?: string,
	// 请求路径（可选，仅路径部分）
	path?: string,
	// 请求参数（可选，URL查询参数）
	// params?: UTSJSONObject,
    // 请求方法
    method?: string,
    // 请求配置信息（可选，避免循环引用）
    // config?: Partial<LimeRequestConfig>,
    // 时间戳
    timestamp?: number
}

export type LimeRequestFail = {
	errCode: number,
	errSubject: string,
	data: any|null,
	cause: Error|null,
	errMsg: string,
	// 请求源信息
	source?: LimeRequestSource
}

export interface LimeRequestResponse<T> {
	/**
	 * 开发者服务器返回的数据
	 */
	data : T|null
	/**
	 * 原始响应数据（未经转换的原始数据）
	 */
	// rawData: any|null
	/**
	 * 开发者服务器返回的 HTTP 状态码
	 */
	statusCode : number
	/**
	 * 开发者服务器返回的 HTTP Response Header
	 */
	header : any//UTSJSONObject
	/**
	 * 开发者服务器返回的 cookies，格式为字符串数组
	 */
	cookies : string[]
	/**
	 * 请求的配置信息
	 */
	config : LimeRequestConfig
	/**
	 * 错误信息
	 */
	errMsg : string
	/**
	 * 临时文件路径，下载后的文件会存储到一个临时文件。微信小程序、支付宝小程序、百度小程序、抖音小程序、飞书小程序
	 */
	tempFilePath : string
	/**
	 * 下载文件保存的路径（本地临时文件）。入参未指定 filePath 的情况下可用。支付宝小程序
	 */
	apFilePath : string
	/**
	 * 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致。微信小程序、支付宝小程序、抖音小程序、飞书小程序
	 */
	filePath : string
	/**
	 * 文件内容。QQ小程序
	 */
	fileContent ?: any
	/**
	 * 需要基础库： `2.10.4`
	 *
	 * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html)
	 */
	// profile ?: UniApp.RequestProfile
}
export type LimeeRequestRejected = (error : LimeRequestFail) =>  LimeRequestFail | Promise<LimeRequestFail>
// 定义处理器类型
export type LimeRequestHandler<T> = {
	fulfilled : (value : T) => T | Promise<T>
	rejected : LimeeRequestRejected | null
}

// 定义 reducerFactory 返回类型
export type LimeReducerFactoryResult<T> = {
	use : (
		onFulfilled : (value : T) => T | Promise<T>,
		onRejected : LimeeRequestRejected | null
	) => void
	resolve : (data : T) => Promise<T>
	reject : (error : LimeRequestFail) => Promise<LimeRequestFail>
}

// 定义拦截器类型
export type LimeInterceptors<T, U> = {
	request : LimeReducerFactoryResult<T>
	response : LimeReducerFactoryResult<U>
}


export type LimeRequestTask = UploadTask | DownloadTask | RequestTask

export type LimeRequestConfig = {
	/**
	 * 自动加在 `url` 前面，除非 `url` 是一个绝对 URL
	 */
	baseURL ?: string
	/**
	 * 与请求一起发送的 URL 参数
	 */
	params ?: UTSJSONObject
	/**
	 * 获取 uni.request 返回值，可用于中断请求
	 */
	getTask ?: (task : LimeRequestTask) => void
	/**
	 * 请求的参数
	 */
	data ?: any
	/**
	 * 额外的请求参数，用于实现自定义的行为
	 */
	extra ?: UTSJSONObject

	// UniApp.RequestOptions
	/**
	 * 资源url
	 */
	url ?: string
	/**
	 * 设置请求的 header，header 中不能设置 Referer。
	 */
	header ?: UTSJSONObject
	/**
	 * 默认为 GET
	 * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
	 */
	method ?:
	| 'OPTIONS'
	| 'GET'
	| 'HEAD'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'TRACE'
	| 'CONNECT'
	| 'DOWNLOAD'
	| 'UPLOAD'
	/**
	 * 超时时间
	 */
	timeout ?: number
	/**
	 * 如果设为json，会尝试对返回的数据做一次 JSON.parse
	 */
	dataType ?: string
	/**
	 * 设置响应的数据类型。合法值：text、arraybuffer
	 */
	responseType ?: string
	/**
	 * 验证 ssl 证书
	 */
	sslVerify ?: boolean
	/**
	 * 跨域请求时是否携带凭证
	 */
	withCredentials ?: boolean
	/**
	 * DNS解析时优先使用 ipv4
	 */
	firstIpv4 ?: boolean
	/**
	 * 开启 http2
	 */
	enableHttp2 ?: boolean
	/**
	 * 开启 quic
	 */
	enableQuic ?: boolean
	/**
	 * 开启 cache
	 */
	enableCache ?: boolean
	/**
	 * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)
	 */
	enableHttpDNS ?: boolean
	/**
	 * HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)
	 */
	httpDNSServiceId ?: boolean
	/**
	 * 开启 transfer-encoding chunked
	 */
	enableChunked ?: boolean
	/**
	 * wifi下使用移动网络发送请求
	 */
	forceCellularNetwork ?: boolean
	/**
	 * 默认 false，开启后可在headers中编辑cookie（支付宝小程序10.2.33版本开始支持）
	 */
	enableCookie ?: boolean
	/**
	 * 是否开启云加速（详见[云加速服务](https://smartprogram.baidu.com/docs/develop/extended/component-codeless/cloud-speed/introduction/)）
	 */
	cloudCache ?: object | boolean
	/**
	 * 控制当前请求是否延时至首屏内容渲染后发送
	 */
	defer ?: boolean

	// 上传/下载
	/**
	 * 需要上传的文件列表。App、H5（ 2.6.15+）
	 */
	files ?: UploadFileOptionFiles[]
	/**
	 * 文件类型，image/video/audio，仅支付宝小程序，且必填。
	 * - image: 图像
	 * - video: 视频
	 * - audio: 音频
	 */
	fileType ?: 'image' | 'video' | 'audio'
	/**
	 * 要上传的文件对象。	仅H5（2.6.15+）支持
	 */




	// file ?: any

	/**
	 * 要上传/下载文件资源的路径
	 */
	filePath ?: string
	/**
	 * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
	 */
	name ?: string
	/**
	 * HTTP 请求中其他额外的 form data
	 */
	formData ?: UTSJSONObject
}