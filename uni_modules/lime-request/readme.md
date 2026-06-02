# lime-request 网络请求库

一个基于 uni.request 封装的网络请求库，支持请求和响应拦截器、错误处理、多种请求方法等特性。适用于各种网络请求场景，简化接口调用流程，提高开发效率。

> 插件依赖：无

## 文档链接
📚 插件详细文档请访问以下站点：
- [网络请求库文档 - 站点1](https://limex.qcoon.cn/uts/request.html)
- [网络请求库文档 - 站点2](https://limeui.netlify.app/uts/request.html)
- [网络请求库文档 - 站点3](https://limeui.familyzone.top/uts/request.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-request`
2. 在项目中引入并使用

## 代码演示


### 配置请求实例
创建自定义配置的请求实例。

```typescript
import { Request, type LimeRequestConfig } from '@/uni_modules/lime-request'

// 创建请求实例
const request = new Request({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  header: {
    'Content-Type': 'application/json'
  }
} as LimeRequestConfig)


```


### GET 请求
```js
// 定义数据类型
type User = {
	id : string
	username : string
	email : string
	phone : string
	avatar : string
	nickname : string
	gender : string
	birthday : string
}

// uniappx 安卓端 如果传入的类型 跟 返回的不一致 会导致不成功，其它端没有这个问题。
// 如果不确实类型传入any，因为uniappx 安卓端泛型不能省略
request.get<User[]>('/users', {
	params: {
		ID: 12345,
	},
} as LimeRequestConfig).then(res => {
  console.log(res.data)
})
```


### POST 请求
```js
request
	.post<any>('/pet', {
		name: 'Hello Kitty',
		status: 'sold',
	})
	.then((response) => {
		// 处理成功情况
		console.log('onPost response:::', response.data)
		// console.log('response:::2',  JSON.parse<Name[]>(JSON.stringify(response.data))?.[0])
	})
	.catch((error) => {
		// 处理错误情况
		console.log('onPost error:::', error)
	})
```


### 请求拦截器
添加请求拦截器，可以在请求发送前修改请求配置。

```typescript
// 添加请求拦截器
request.interceptors.request.use(
	(config) : LimeRequestConfig => {
		// 在发送请求之前做些什么
		console.log('interceptors use fulfilled')
		return config
	},
	(error) : Promise<LimeRequestFail> => {
		console.log('interceptors use rejected')
		// 对请求错误做些什么
		return Promise.reject(error) as Promise<LimeRequestFail>
	},
)
```

### 响应拦截器
添加响应拦截器，可以在获取响应数据后进行统一处理，如HTTP状态码检查、业务状态码判断、数据转换、错误处理等。

#### 基础版本（仅检查HTTP状态码）
对于只需要检查HTTP状态码的简单场景，可以使用以下简洁版本：

```typescript
// 添加响应拦截器 - 基础版本
request.interceptors.response.use(
	// 成功响应的处理函数
	(response): LimeRequestResponse<any> => {
		// 只检查HTTP状态码
		if (response.statusCode == 200) {
			// HTTP请求成功，直接返回响应
			return response
		} else {
			// 非200状态码的处理
			console.warn(`HTTP请求失败，状态码: ${response.statusCode}`)
			// 可以选择抛出错误，让上层通过catch捕获
			// return Promise.reject(new Error(`HTTP请求失败，状态码: ${response.statusCode}`))
			return response
		}
	}, 
	// 错误响应的处理函数
	(error): Promise<LimeRequestFail> => {
		// 处理网络错误、请求被取消等情况
		console.error('请求出错', error)
		return Promise.reject(error) as Promise<LimeRequestFail>
})
```

#### 增强版本（包含业务状态码处理）
对于需要处理业务状态码的场景，可以使用以下增强版本：

首先定义一个通用的业务响应数据结构：

```typescript
/**
 * 通用业务响应数据结构
 * @template T 响应数据的具体类型
 */
type Result<T> = {
	code: number,  // 业务状态码，通常200表示成功
	data: T,       // 实际的业务数据，泛型参数T表示数据的具体类型
	message?: string // 可选的消息描述
}
```

然后使用增强版的响应拦截器：

```typescript
// 添加响应拦截器 - 增强版本（含业务状态码处理）
request.interceptors.response.use(
	// 成功响应的处理函数
	(response): LimeRequestResponse<any> => {
		// 1. 检查HTTP状态码
		if (response.statusCode == 200) {
			// 尝试进行业务状态码处理（可选）
			try {
				// 假设API返回的数据符合Result<T>结构
				const result = response.data as Result<any>
				
				// 2. 根据业务状态码进行处理
				if (result.code == 200) {
					// 业务处理成功
					
				} else {
					// 业务处理失败
					console.error(`业务处理失败，错误码: ${result.code}${result.message ? `, 错误信息: ${result.message}` : ''}`)
					// 可以选择抛出错误
					// return Promise.reject(new Error(result.message || '业务处理失败'))
				}
			} catch (e) {
				// 如果响应数据不符合Result<T>结构，不进行业务处理
				console.log('响应数据不包含业务状态码，跳过业务处理')
			}
		} else {
			// 非200状态码的处理
			console.warn(`HTTP请求失败，状态码: ${response.statusCode}`)
		}
				
		// 返回处理后的响应
		return response
	}, 
	// 错误响应的处理函数
	(error): Promise<LimeRequestFail> => {
		// 处理网络错误、请求被取消等情况
		console.error('请求出错', error)
		return Promise.reject(error) as Promise<LimeRequestFail>
})
```

#### 使用建议
- **简单项目**：如果API没有统一的业务状态码，可以直接使用**基础版本**，只检查HTTP状态码。
- **复杂项目**：对于有统一业务状态码的API，可以使用**增强版本**，但建议添加try-catch来处理数据格式不匹配的情况。
- **灵活性**：根据项目需求，可以自由组合和定制拦截器的处理逻辑。


### 上传文件
使用 upload 方法上传文件。

```typescript
// 上传文件
request.upload('/upload', {
  filePath: '/path/to/file.jpg',
  name: 'file',
  formData: {
    'user': 'test'
  }
} as LimeRequestConfig).then(res => {
  console.log('上传成功', res)
}).catch(err => {
  console.error('上传失败', err)
})
```

### 下载文件
使用 download 方法下载文件。

```typescript
// 下载文件
request.download('/download', {
  filePath: '/storage/file.jpg'
} as LimeRequestConfig).then(res => {
  console.log('下载成功', res.tempFilePath)
}).catch(err => {
  console.error('下载失败', err)
})
```

## API文档

### Request 类

#### 构造函数

```typescript
new Request(config?: LimeRequestConfig)
```

创建一个新的请求实例。

#### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| request | 发起请求 | `config: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| get | 发起GET请求 | `url: string, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| post | 发起POST请求 | `url: string, data?: any, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| put | 发起PUT请求 | `url: string, data?: any, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| delete | 发起DELETE请求 | `url: string, data?: any, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| head | 发起HEAD请求 | `url: string, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| options | 发起OPTIONS请求 | `url: string, data?: any, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| trace | 发起TRACE请求 | `url: string, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| connect | 发起CONNECT请求 | `url: string, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<T>>` |
| upload | 上传文件 | `url: string, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<any>>` |
| download | 下载文件 | `url: string, config?: LimeRequestConfig` | `Promise<LimeResponseImpl<any>>` |

**注意**
除了`upload`和`download`其它的请求都要传入类型，例如：
```
request.get<any>('/users')
request.post<any>('/users')
request.put<any>('/users')
request.delete<any>('/users')
request.head<any>('/users')
request.options<any>('/users')
request.trace<any>('/users')
request.connect<any>('/users')
```


### 拦截器

请求实例提供了拦截器功能，可以在请求发送前和响应接收后进行处理。

```typescript
// 请求拦截器
request.interceptors.request.use(
  (config) => { /* 处理请求配置 */ return config },
  (error) => { /* 处理请求错误 */ return Promise.reject(error) }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => { /* 处理响应数据 */ return response },
  (error) => { /* 处理响应错误 */ return Promise.reject(error) }
)
```

### 配置选项

`LimeRequestConfig` 接口支持以下配置选项：

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| baseURL | 基础URL，自动加在url前面 | `string` | - |
| url | 请求地址 | `string` | - |
| data | 请求数据 | `any` | - |
| params | URL参数 | `UTSJSONObject` | - |
| header | 请求头 | `UTSJSONObject` | - |
| method | 请求方法 | `string` | `'GET'` |
| timeout | 超时时间(ms) | `number` | `60000` |
| dataType | 返回的数据格式 | `string` | - |
| responseType | 响应的数据类型 | `string` | - |
| sslVerify | 验证ssl证书 | `boolean` | - |
| withCredentials | 跨域请求时是否携带凭证 | `boolean` | - |
| firstIpv4 | DNS解析时优先使用ipv4 | `boolean` | - |
| enableHttp2 | 开启http2 | `boolean` | - |
| enableQuic | 开启quic | `boolean` | - |
| enableCache | 开启cache | `boolean` | - |
| enableChunked | 开启transfer-encoding chunked | `boolean` | - |
| filePath | 上传/下载文件路径 | `string` | - |
| name | 文件对应的key | `string` | - |
| files | 需要上传的文件列表 | `UploadFileOptionFiles[]` | - |
| formData | 额外的表单数据 | `UTSJSONObject` | - |
| getTask | 获取请求任务对象 | `(task: LimeRequestTask) => void` | - |

### 响应结构

请求响应对象 `LimeResponseImpl<T>` 包含以下属性：

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| data | 服务器返回的数据 | `T` |
| statusCode | HTTP状态码 | `number` |
| header | 响应头 | `any` |
| cookies | 服务器返回的cookies | `string[]` |
| config | 请求配置 | `LimeRequestConfig` |
| errMsg | 错误信息 | `string` |
| tempFilePath | 临时文件路径(下载时) | `string` |
| apFilePath | 下载文件保存路径(支付宝小程序) | `string` |
| filePath | 用户文件路径 | `string` |
| fileContent | 文件内容(QQ小程序) | `any` |

### 错误处理

请求错误对象 `LimeRequestFail` 包含以下属性：

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| errCode | 错误码 | `number` |
| errSubject | 错误主题 | `string` |
| data | 错误数据 | `any` |
| cause | 错误原因 | `Error` |
| errMsg | 错误信息 | `string` |
| source | 错误源 | `{url, baseURL, path, method}` |




## 高级用法

### 取消请求

可以通过 getTask 获取请求任务对象，然后调用 abort 方法取消请求。

```typescript
// request  的任务类型是 RequestTask 
// upload   的任务类型是 UploadTask  
// download 的任务类型是 DownloadTask  
// 这三种类型是uniappx 自带的 无需引入
let task: RequestTask | null = null

request.get<any>('/api/users', {
  getTask: (t) => {
    task = t as RequestTask
  }
} as LimeRequestConfig)

// 取消请求
task?.abort()
```

### 自定义实例默认配置

可以通过创建新的请求实例并设置默认配置来满足不同的请求需求。

```typescript
// 创建用于API1的请求实例
const api1Request = new Request({
  baseURL: 'https://api1.example.com',
  timeout: 5000
} as LimeRequestConfig)

// 创建用于API2的请求实例
const api2Request = new Request({
  baseURL: 'https://api2.example.com',
  timeout: 10000,
  header: {
    'X-Custom-Header': 'value'
  }
} as LimeRequestConfig)
```

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |