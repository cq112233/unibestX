# request-bestX

> 专为 **uni-app X / UTS** 打造的现代化跨端 HTTP 网络请求与状态机引擎。
> 纯原生 `uni.request` 驱动，零第三方库依赖。

---

## 🌟 核心特性

- 🎯 **TanStack Vue Query 声明式状态机**：原生实现 `useQuery` / `useMutation` / `QueryClient`，支持自动缓存、staleTime、自动重试、轮询、依赖查询与并发去重。
- ⚡️ **Axios 风格拦截器链**：支持 `beforeRequest`、`responded.onSuccess`、`responded.onError`、`responded.onComplete` 链式异步中间件。
- 🛡 **全平台强类型零报错**：全量采用 UTS `type` 类型别名规范，杜绝 `interface` 带来的底层字面量赋值编译报错与 Android `ClassCastException`。
- 🚀 **性能调度引擎**：内置请求指纹算法，支持 **GET 请求瞬时并发去重 (Inflight Deduplication)** 与 **TTL 内存缓存**。
- 🤖 **AI 大模型流式传输**：内置 `requestStream` 与增量 `Utf8StreamDecoder`，彻底防止分块接收时中文与 Emoji 被截断乱码。
- 🔌 **全端一致**：Web / Android / iOS / 鸿蒙等全平台一套代码无缝运行。

---

## 📦 目录规范

```text
uni_modules/request-bestX/
├── index.uts             # 模块核心出口
├── package.json          # 插件市场元数据
├── readme.md             # 使用说明文档
├── core/                 # 核心引擎层 (HttpClient / lifecycle / types / enum)
├── hooks/                # 声明式状态机层 (useQuery / useMutation / queryClient)
├── stream/               # AI 流式通讯层 (requestStream / Utf8StreamDecoder)
└── util/                 # 工具函数层 (url / helper)
```

---

## 🚀 快速上手

### 1. 基础请求驱动 (HttpClient)

```uts
import { createHttpClient } from '@/uni_modules/request-bestX';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX';

const client = createHttpClient({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  beforeRequest: (config: HttpRequestConfig): void => {
    // 注入 Token
  }
});

// GET 请求
const users = await client.get<Array<User>>('/users');

// POST 请求 (第二参为请求体，第三参为配置项)
const newUser = await client.post<User>('/users', { name: 'Alice' });
```

---

### 2. 声明式查询 (useQuery)

```uts
import { useQuery } from '@/uni_modules/request-bestX';
import type { QueryOptions } from '@/uni_modules/request-bestX';

const userQuery = useQuery<UserInfo>({
  queryKey: ['user', userId],
  queryFn: (): Promise<UserInfo> => fetchUserInfo(userId),
  staleTime: 30000, // 30秒内数据视为新鲜，不重复请求
  retry: 2 // 失败自动重试2次
} as QueryOptions<UserInfo>);

// 在模板中直接响应式使用：
// <view v-if="userQuery.isLoading.value">加载中...</view>
// <view v-else>{{ userQuery.data.value?.name }}</view>
```

---

### 3. 声明式变更状态机 (useMutation)

```uts
import { useMutation } from '@/uni_modules/request-bestX';
import type { MutationOptions } from '@/uni_modules/request-bestX';

const { isPending, data, mutate } = useMutation<LoginResult, LoginParams>({
  mutationKey: ['auth', 'login'],
  mutationFn: (variables: LoginParams): Promise<LoginResult> => apiLogin(variables),
  onSuccess(res) {
    uni.showToast({ title: '登录成功！', icon: 'success' });
  },
  onError(err) {
    uni.showToast({ title: err.message, icon: 'none' });
  }
} as MutationOptions<LoginResult, LoginParams>);

// 提交表单时触发
function handleLogin() {
  mutate({ username: 'admin', password: '123' });
}
```

---

### 4. AI 流式传输 (requestStream)

```uts
import { requestStream } from '@/uni_modules/request-bestX';
import type { StreamChunk } from '@/uni_modules/request-bestX';

const task = requestStream({
  url: '/api/chat/stream',
  body: JSON.stringify({ message: '你好' }),
  onChunk: (chunk: StreamChunk): void => {
    replyText.value += chunk.text; // 自动完成 UTF-8 防乱码解码
  },
  onComplete: (): void => {
    console.log('回答生成完成');
  }
});

// 主动中断打字机
// task.abort();
```

---

## 📄 开源与规范协议

- 本库遵循 MIT 协议。
- 专为 unibestX 架构设计，严格遵循 uni-app X 原生强类型规范。
