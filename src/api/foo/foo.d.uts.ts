/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./foo.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./foo.uts` 解析到同目录的
 * `foo.d.uts.ts`，因此本文件必须与 `foo.uts` **同目录同名**，不能挪走。
 *
 * 修改 `foo.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
export declare const FOO_UPLOAD_PATH: string;

/**
 * 分页获取 Foo 列表（支持关键字筛选与分页）
 * @param keyword 搜索关键字（默认空字符串）
 * @param pageNo 当前页码（默认 1）
 * @param pageSize 分页大小（默认 10）
 */
export declare function fetchFooList(keyword: string = '', pageNo: number = 1, pageSize: number = 10): Promise<FooPageResult>;

/**
 * 根据 ID 查询单个 Foo 详情
 */
export declare function fetchFooById(id: number): Promise<FooItem | null>;

/**
 * 新建 Foo 实体
 */
export declare function createFoo(data: FooItem): Promise<FooItem>;

/**
 * 更新 Foo 实体
 */
export declare function updateFoo(id: number, data: FooItem): Promise<FooItem>;

/**
 * 删除 Foo 实体
 */
export declare function deleteFoo(id: number): Promise<boolean>;

/**
 * GET 请求真实接口示范
 */
export declare function fetchFooRemote(): Promise<FooItem>;

/**
 * POST 远程真实创建接口示范
 */
export declare function createFooRemote(data: FooItem): Promise<FooItem>;

/**
 * PUT 远程真实更新接口示范
 */
export declare function updateFooRemote(id: number, data: FooItem): Promise<FooItem>;

/**
 * DELETE 远程真实删除接口示范
 */
export declare function deleteFooRemote(id: number): Promise<boolean>;

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
