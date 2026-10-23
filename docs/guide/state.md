# 状态篇

项目状态入口固定为 `src/store/index.uts`。门面会根据运行模式切换实现：

- Vapor、H5 / Web、小程序：官方 Pinia。
- App VDOM：`x-pinia-s`。

业务侧写法完全一致，不需要手写条件编译。

## 使用 store

```uts
import { useTokenStore, useUserStore } from '@/src/store/index.uts';

const tokenStore = useTokenStore();
const userStore = useUserStore();

tokenStore.setSingleToken({ token: 'xxx', expiresIn: 7200 } as ISingleTokenRes);
userStore.setUserInfo({
  userId: 1,
  username: 'unix',
  nickname: 'UNIX',
  avatar: '',
  permissions: ['report:read']
} as IUserInfo);
```

## 新增 store

新增 store 时需要在两套实现中各加一份：

- `src/store/vapor/<name>.uts`
- `src/store/vdom/<name>.uts`
- `src/store/types.uts`：共享类型
- `src/store/index.uts`：按条件导出

## 红线

- 只从 `src/store/index.uts` 导入，不直连 `vapor/` 或 `vdom/`。
- 共享类型放 `types.uts`，不要在两个分支重复定义同名类型。
- 条件编译的 export 不要被自动排序工具跨块移动。
- 状态持久化只对需要跨启动保存的数据启用。

> 完整目录、持久化和新增 store 模板见 [src/store/README.md](https://github.com/cq112233/unibestX/blob/main/src/store/README.md)。

