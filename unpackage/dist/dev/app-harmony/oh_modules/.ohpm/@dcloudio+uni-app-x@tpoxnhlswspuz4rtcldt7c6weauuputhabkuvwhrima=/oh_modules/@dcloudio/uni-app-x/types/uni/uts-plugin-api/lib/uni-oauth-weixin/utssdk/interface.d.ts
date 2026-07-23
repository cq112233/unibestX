export interface UniOAuthWeixinProvider extends UniOAuthProvider { }

export type OauthWeixinFail = IOauthWeixinFail;

export interface AuthResp {
	id : number;
	name : string;
	errCode : number;
	authResult : boolean;
	errStr : string;
	transaction : string;
	openId : string | undefined;
	code : string;
	state : string;
	url : string;
	lang : string;
	country : string;
}

// 定义 access_token 接口返回的数据类型
export interface WeixinAccessTokenResp {
	access_token : string;
	expires_in : number;
	refresh_token : string;
	openid : string;
	scope : string;
}

// 定义 userinfo 接口返回的数据类型
export interface WeixinUserInfoResp {
	openid : string;
	nickname : string;
	sex : number;
	province : string;
	city : string;
	country : string;
	headimgurl : string;
	privilege : string[];
	unionid ?: string; // 可选字段
}
