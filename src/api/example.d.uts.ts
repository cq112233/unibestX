/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./example.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./example.uts` 解析到同目录的
 * `example.d.uts.ts`，因此本文件必须与 `example.uts` **同目录同名**，不能挪走。
 *
 * 修改 `example.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
export declare const FOO_UPLOAD_PATH: string;

export type FooItem = {
  id: number;
  name: string;
  desc: string;
};

export type PageResult<T> = {
  list: Array<T>;
  hasMore: boolean;
  total: number;
};

export type FooPageResult = PageResult<FooItem>;

export type IFoo = FooItem;

export type IFooList = FooPageResult;

/**
 * 分页查询 Foo 列表（支持关键字筛选与分页）
 * 分页三件套按规范顺序 (pageNo, pageSize, keyword)，默认值齐全、后端就绪不改签名
 * @param pageNo 当前页码（默认 1）
 * @param pageSize 分页大小（默认 10）
 * @param keyword 搜索关键字（默认空字符串）
 */
export declare function fetchFooList(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<FooPageResult>;

/**
 * 根据 ID 查询单条 Foo 详情
 */
export declare function fetchFooById(id: number): Promise<FooItem | null>;

/**
 * 新增 Foo
 */
export declare function createFoo(data: FooItem): Promise<FooItem>;

/**
 * 更新 Foo
 */
export declare function updateFoo(id: number, data: FooItem): Promise<FooItem>;

/**
 * 删除 Foo
 */
export declare function deleteFoo(id: number): Promise<boolean>;

/**
 * 真实远程接口调用示范（http.get）
 */
export declare function fetchFooRemote(): Promise<FooItem>;

/**
 * 上传文件示例
 * @param filePath 本地文件路径
 * @param ignoreAuth 是否跳过鉴权
 * @param uploadPathOrUrl 上传目标路径
 */
export declare function uploadFooFile(
  filePath: string,
  ignoreAuth: boolean = false,
  uploadPathOrUrl: string = FOO_UPLOAD_PATH
): Promise<string>;

export declare function getFooList(params: UTSJSONObject | null = null): Promise<Array<FooItem>>;

export declare function getFooById(id: number): Promise<FooItem | null>;

export declare function foo(): Promise<FooItem>;
