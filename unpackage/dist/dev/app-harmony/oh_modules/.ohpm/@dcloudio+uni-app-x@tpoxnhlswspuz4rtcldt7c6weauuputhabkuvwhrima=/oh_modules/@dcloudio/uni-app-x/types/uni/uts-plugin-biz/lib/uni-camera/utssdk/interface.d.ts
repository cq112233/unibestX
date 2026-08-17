

export type CameraContextCameraFrameListenerStartOptions = {
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : any) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
}

export type CameraContextCameraFrameListenerStopOptions = {
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : any) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
}

export interface CameraContextCameraFrameListener {
	/**
	 * 开始监听帧数据
	 */
	start(options : CameraContextCameraFrameListenerStartOptions) : void;
	/**
	 * 停止监听帧数据
	 */
	stop(options : CameraContextCameraFrameListenerStopOptions) : void;
}

export type CameraContextOnCameraFrame = {
	/**
	 * 图像数据矩形的宽度
	 */
	width ?: number | null;
	/**
	 * 图像数据矩形的高度
	 */
	height ?: number | null;
	/**
	 * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
	 */
	data ?: ArrayBuffer | null
}

export type CameraContextSetZoomOptions = {
	/**
	 * 缩放级别，范围[1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 initdone 返回值中获取。
	 */
	zoom : number;
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : any) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
}

export type CameraContextTakePhotoResult = {
	/**
	 * 照片文件的临时路径 (本地路径)，安卓是jpg图片格式，ios是png
	 */
	tempImagePath ?: string | null
}

export type CameraContextTakePhotoOptions = {
	/**
	 * 成像质量
	 */
	quality ?: "high" | "normal" | "low" | "original" | null;
	/**
	 * 是否开启镜像
	 */
	selfieMirror?: boolean | null;
	
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : CameraContextTakePhotoResult) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : any) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
}

export type CameraContextStartRecordTimeoutResult = {
	/**
	 * 封面图片文件的临时路径 (本地路径)
	 */
	tempThumbPath ?: string | null;
	/**
	 * 视频的文件的临时路径 (本地路径)
	 */
	tempVideoPath ?: string | null;
}


export type CameraContextStartRecordOptions = {
	/**
	 * 超过录制时长上限时会结束录像并触发此回调，录像异常退出时也会触发此回调	
	 */
	timeoutCallback ?: ((result: any) => void) | null;
	/**
	 * 录制时长上限，单位为秒，最长不能超过 5 分钟	
	 * @defaultValue 30
	 */
	timeout ?: number | null;
	/**
	 * 是否开启镜像
	 * @defaultValue true
	 */
	selfieMirror ?: boolean | null;
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : any) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : any) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
}

export type CameraContextStopRecordResult = {
	/**
	 * 封面图片文件的临时路径 (本地路径)
	 */
	tempThumbPath ?: string | null;
	/**
	 * 视频的文件的临时路径 (本地路径)
	 */
	tempVideoPath ?: string | null;
}

export type CameraContextStopRecordOptions = {
	/**
	 * 启动视频压缩，压缩效果同chooseVideo
	 */
	compressed ?: boolean | null;
	/**
	 * 接口调用成功的回调函数
	 */
	success ?: ((result : CameraContextStopRecordResult) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : any) => void) | null;
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: ((result : any) => void) | null;
}


export interface CameraContext {
	/**
	 * 获取 Camera 实时帧数据
	 */
	onCameraFrame(callback : (frame : CameraContextOnCameraFrame) => void) : CameraContextCameraFrameListener | null;
	/**
	 * 设置缩放级别
	 */
	setZoom(options : CameraContextSetZoomOptions) : void;
	/**
	 * 拍摄照片
	 */
	takePhoto(options : CameraContextTakePhotoOptions) : void;
	/**
	 * 开始录像
	 */
	startRecord(options: CameraContextStartRecordOptions): void;
	/**
	 * 结束录像
	 */
	stopRecord(options: CameraContextStopRecordOptions) : void;
}

export type CreateCameraContext = () => CameraContext | null;


export interface Uni {
	createCameraContext: CreateCameraContext
}