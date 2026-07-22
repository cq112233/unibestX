export interface Uni {
	__getSecureNetworkManager(): SecureNetworkManager;
}

export interface SecureNetworkManager {
	/**
	 * 是否有client key
	 */
	hasClientKey(options: HasClientKeyOptions): void;
	/**
	 * 在setClientKey之前，使用appKey加密一些基础数据，这些数据包含js层传入和客户端信息appid、deviceid、时间戳等
	 */
	encryptGetClientKeyPayload(options: EncryptGetClientKeyPayloadOptions): void;
	/**
	 * 设置client key
	 */
	setClientKey(options: SetClientKeyOptions): void;
	/**
	 * 加密
	 */
	encrypt(options: EncryptOptions): void;
	/**
	 * 解密
	 */
	decrypt(options: DecryptOptions): void;
}

/**
 * 错误码
 */
export type SecureNetworkErrorCode =
	/**
	 * 小程序或者基座不支持安全网络
	 */
	10001 |
	/**
	 * 参数缺失
	 */
	10002 |
	/**
	 * 缺少app key
	 */
	10003 |
	/**
	 * 加密client key 和 payload失败
	 */
	10004 |
	/**
	 * C层json解析失败
	 */
	10005 |
	/**
	 * 原生层json解析失败
	 */
	10006 |
	/**
	 * client key 数据不合法
	 */
	10007 |
	/**
	 * 缺少client key
	 */
	10008 |
	/**
	 * 加密失败
	 */
	10009 |
	/**
	 * 解密失败
	 */
	100010 |
	/**
	 * 安全网络异常
	 */
	100011;

/**
 * SecureNetwork失败
 */
export interface SecureNetworkFail extends IUniError {
	errCode : SecureNetworkErrorCode
};

export type HasClientKeyOptions = {
	/**
	 * 云空间id
	 */
	spaceId: string,
	/**
	 * 供应商
	 */
	provider: string,
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : boolean) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : SecureNetworkFail) => void) | null;
}

export type EncryptGetClientKeyPayloadOptions = {
	/**
	 * 需要加密的数据
	 */
	data: UTSJSONObject,
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : UTSJSONObject) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : SecureNetworkFail) => void) | null;
}


export type SetClientKeyOptions = {
	/**
	 * 云空间id
	 */
	spaceId: string,
	/**
	 * 供应商
	 */
	provider: string,
	/**
	 * aes加密后的clientKey
	 */
	clientKey: string,
	/**
	 * appKey加密后的aesKey
	 */
	key: string,
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : boolean) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : SecureNetworkFail) => void) | null;
}

export type EncryptOptions = {
	/**
	 * 待加密数据
	 */
	data: string,
	/**
	 * 云空间id
	 */
	spaceId: string,
	/**
	 * 供应商
	 */
	provider: string,
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : UTSJSONObject) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : SecureNetworkFail) => void) | null;
}

export type DecryptOptions = {
	/**
	 * 待解密数据
	 */
	data: string,
	/**
	 * clientKey加密的aesKey ，解密后格式为{key:string,iv:string}
	 */
	key: string,
	/**
	 * 云空间id
	 */
	spaceId: string,
	/**
	 * 供应商
	 */
	provider: string,
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: ((result : UTSJSONObject) => void) | null;
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: ((result : SecureNetworkFail) => void) | null;
}