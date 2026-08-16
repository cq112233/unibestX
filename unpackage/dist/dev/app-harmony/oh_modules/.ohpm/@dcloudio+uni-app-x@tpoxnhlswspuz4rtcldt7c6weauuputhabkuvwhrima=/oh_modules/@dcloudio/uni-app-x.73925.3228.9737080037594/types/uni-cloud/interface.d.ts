import { mixinDatacom } from './unicloud-db'

type UniCloudCallback<T> = (arg: T) => any | null;

type UniCloudInitOptions = {
  /**
   * 服务商，目前支持 aliyun、tencent、alipay
   */
  provider: string
  /**
   * 服务空间名
   */
  spaceName?: string
  /**
   * 服务空间id
   */
  spaceId: string
  /**
   * 阿里云clientSecret
   */
  clientSecret?: string
  /**
   * 阿里云endpoint
   */
  endpoint?: string
  /**
   * 支付宝云spaceAppId
   */
  spaceAppId?: string
  /**
   * 支付宝云accessKey
   */
  accessKey?: string
  /**
   * 支付宝云secretKey
   */
  secretKey?: string
  /**
   * 支付宝云 WebSocket Endpoint
   */
  wsEndpoint?: string
};
type SecretType = 'request' | 'response' | 'both' | 'none'
type UniCloudCallFunctionOptions = {
  /**
   * 云函数名
   */
  name: string | string.CloudFunctionString;
  /**
   * 云函数参数
   */
  data?: UTSJSONObject;
  /**
   * 加密类型，指定加密请求、响应还是都加密
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "harmony": {
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *   }
   * }
   */
  secretType?: SecretType
};
type UniCloudCallFunctionResult<T = UTSJSONObject> = {
  /**
   * 云函数返回结果
   */
  result: T;
  /**
   * 云函数请求id
   */
  requestId?: string;
};
type UniCloudUploadProgress = {
  /**
   * 已上传大小
   */
  loaded: number;
  /**
   * 总大小
   */
  total: number;
};
type UniCloudUploadFileOptions = {
  /**
   * 文件路径
   */
  filePath: string;
  /**
   * 云端路径
   */
  cloudPath: string;
  /**
   * 是否以云端路径是否为真实路径保存上传的文件
   */
  cloudPathAsRealPath?: boolean;
  /**
   * 上传进度回调
   * @param options 上传进度回调参数
   * @returns
   */
  onUploadProgress?: (options: UniCloudUploadProgress) => any;
};
type UniCloudUploadFileResult = {
  /**
   * 文件路径
   */
  filePath: string;
  /**
   * 文件id
   */
  fileID: string;
};
type UniCloudGetTempFileURLOptions = {
  /**
   * 文件列表
   */
  fileList: Array<string>;
};
type UniCloudGetTempFileURLResultItem = {
  /**
   * 文件id
   */
  fileID: string;
  /**
   * 文件临时url
   */
  tempFileURL: string;
};
type UniCloudGetTempFileURLResult = {
  /**
   * 文件列表
   */
  fileList: Array<UniCloudGetTempFileURLResultItem>;
};
type UniCloudResponseEvent = {
  /**
   * 响应事件类型
   */
  type: string;
  /**
   * 响应事件由哪个云函数触发
   */
  name: string;
  /**
   * 响应结果、错误内容
   */
  content: any;
};
type UniCloudRefreshTokenEvent = {
  /**
   * token内容
   */
  token: string;
  /**
   * token过期时间
   */
  tokenExpired: number;
};
type UniCloudDBAddResult = {
  /**
   * 添加的记录的id
   */
  id: string;
  /**
   * 请求id
   */
  requestId?: string;
};
type UniCloudDBBatchAddResult = {
  /**
   * 添加的记录的id列表
   */
  ids: Array<string>;
  /**
   * 添加成功的记录数
   */
  inserted: number;
  /**
   * 请求id
   */
  requestId?: string;
};
type UniCloudDBUpdateResult = {
  /**
   * 更新成功的记录数
   */
  updated: number;
  /**
   * 请求id
   */
  requestId?: string;
};
type UniCloudDBRemoveResult = {
  /**
   * 删除成功的记录数
   */
  deleted: number;
  /**
   * 请求id
   */
  requestId?: string;
};
type UniCloudDBGetResult = {
  /**
   * 添加的记录的id列表
   */
  data: Array<UTSJSONObject>;
  /**
   * 匹配到的数据总量
   */
  count?: number | null;
  /**
   * 请求id
   */
  requestId?: string;
};
type UniCloudDBCountResult = {
  /**
   * 添加的记录的id列表
   */
  total: number;
  /**
   * 请求id
   */
  requestId?: string;
};
type UniCloudDBMultiSendResultItem = {
  /**
   * 错误码，可能为字符串或数字，数字0表示成功
   */
  errCode: any
  /**
   * 错误信息
   */
  errMsg: string
  /**
   * 数据
   */
  data?: Array<UTSJSONObject>
}
type UniCloudDBMultiSendResult = {
  /**
   * 数据列表
   */
  dataList: UniCloudDBMultiSendResultItem[]
  /**
   * 请求id
   */
  requestId?: string
}
type UniCloudUserInfo = {
  /**
   * 用户id
   */
  uid?: string | null;
  /**
   * 用户角色列表
   */
  role: Array<string>;
  /**
   * 用户权限列表
   */
  permission: Array<string>;
  /**
   * 用户token过期时间
   */
  tokenExpired: number;
};

declare class UniCloudError extends Error {
  code: any;
  errMsg: string;
  errCode: any;
  errSubject?: string;
  requestId?: string;
  /**
   * 错误详情
   * @description 合并查询请求
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.24"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *       "uniVer": "√",
   *       "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  detail?: UTSJSONObject;
  constructor(message: string, code: string, subject?: string, options?: UTSJSONObject);
  private _init;
  toJson(): UTSJSONObject;
}

declare class EventEmitter<T> {
  private _callbacks;
  constructor();
  on(eventName: string, callback: UniCloudCallback<T>): void;
  off(eventName: string, callback: UniCloudCallback<T>): void;
  emit(eventName: string, arg: T): void;
}

declare class UniCloudUnified {
  config: UniCloudInitOptions;
  private _client;
  private _baseSystemInfo;
  private _hasBaseSystemInfo;
  private _provider;
  private _spaceId;
  private _prepareLocalServerHub;
  responseEventEmitter: EventEmitter<UniCloudResponseEvent>;
  refreshTokenEventEmitter: EventEmitter<UniCloudRefreshTokenEvent>;
  constructor(options: UniCloudInitOptions);
  private _getBaseSystemInfo;
  private _getSystemInfo;
  private _getUniIdToken;
  private _isServerOk;
  private _pingLocalServer;
  private _prepareLocalServer;
  private _checkFunction;
  private _prepareFunction;
  private _getCallFunctionOptions;
  private _callCloudFunction;
  private _callLocalFunction;
  callFunction<T = UTSJSONObject>(options: UniCloudCallFunctionOptions): Promise<UniCloudCallFunctionResult<T>>;
  uploadFile(options: UniCloudUploadFileOptions): Promise<UniCloudUploadFileResult>;
  getTempFileURL(options: UniCloudGetTempFileURLOptions): Promise<UniCloudGetTempFileURLResult>;
  importObject(objectName: string, options: UniCloudImportObjectOptions): UniCloudCloudObjectCaller;
}

declare class InternalUniCloudCloudObjectCaller {
  protected _obj: InternalUniCloudCloudObject;
  constructor(obj: InternalUniCloudCloudObject);
  protected _getArgs(...args: Array<any | null>): Array<any | null>;
}

type UniCloudCloudObjectCaller = InternalUniCloudCloudObjectCaller & Record<string, <T = UTSJSONObject>(...args: Array<any | null>) => Promise<T>>;

type UniCloudImportObjectLoadingOptions = {
  /**
   * 加载框标题
   */
  title?: string | null;
  /**
   * 加载框是否显示mask
   */
  mask?: boolean | null;
};
type UniCloudImportObjectErrorOptions = {
  /**
   * 错误提示类型，可以是modal或者toast
   */
  type?: string | null;
  /**
   * 是否显示重试按钮
   */
  retry?: boolean | null;
};
type UniCloudImportObjectOptions = {
  /**
   * 是否移除自动展示的ui
   */
  customUI?: boolean | null;
  /**
   * loading界面配置
   */
  loadingOptions?: UniCloudImportObjectLoadingOptions | null;
  /**
   * 错误提示配置
   */
  errorOptions?: UniCloudImportObjectErrorOptions | null;
  /**
   * 指定方法的加密类型
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "harmony": {
   *       "uniVer": "x",
   *       "unixVer": "x"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "x",
   *      "unixVer": "x"
   *   }
   * }
   */
  secretMethods?: Record<string, SecretType>;
};
declare class InternalUniCloudCloudObject {
  private _name;
  private _client;
  private _customUI;
  private _loadingUITitle;
  private _loadingUIMask;
  private _errorUIType;
  private _errorUIRetry;
  constructor(client: UniCloudUnified, name: string, options: UniCloudImportObjectOptions);
  private _initUIOptions;
  private _internalCallMethod;
  callMethod<T = UTSJSONObject>(methodName: string, args: Array<any | null>): Promise<T>;
}

declare class Stage {
  $method: string;
  $param?: Array<any> | null;
  constructor($method: string, $param?: Array<any> | null);
}
declare class Stages {
  private _client?;
  private _stages;
  private _isNew;
  constructor(stages?: Array<Stage>, isNew?: boolean, client?: UniCloudUnified | null);
  push(stage: Stage): Stages;
  toJSON(): UTSJSONObject;
  private _emitResponse;
  sendAdd(): Promise<UniCloudDBAddResult>;
  sendBatchAdd(): Promise<UniCloudDBBatchAddResult>;
  sendUpdate(): Promise<UniCloudDBUpdateResult>;
  sendRemove(): Promise<UniCloudDBRemoveResult>;
  sendGet(): Promise<UniCloudDBGetResult>;
  sendCount(): Promise<UniCloudDBCountResult>;
  private _send;
}

declare class UniCloudDBQuery {
  private _client;
  private _stages;
  constructor(client: UniCloudUnified, stages: Stages);
  get(arg?: UTSJSONObject | null): Promise<UniCloudDBGetResult>;
  count(): Promise<UniCloudDBCountResult>;
  getTemp(): UTSJSONObject;
  field(filed: string): UniCloudDBQuery;
  skip(num: number): UniCloudDBQuery;
  limit(num: number): UniCloudDBQuery;
  orderBy(order: string): UniCloudDBQuery;
  groupBy(field: string): UniCloudDBQuery;
  groupField(field: string): UniCloudDBQuery;
  distinct(field: string): UniCloudDBQuery;
  geoNear(options: UTSJSONObject): UniCloudDBQuery;
}

declare class UniCloudDBFilter {
  private _client;
  private _stages;
  constructor(client: UniCloudUnified, stages: Stages);
  get(arg?: UTSJSONObject | null): Promise<UniCloudDBGetResult>;
  count(): Promise<UniCloudDBCountResult>;
  update(data: UTSJSONObject): Promise<UniCloudDBUpdateResult>;
  remove(): Promise<UniCloudDBRemoveResult>;
  getTemp(): UTSJSONObject;
  where(condition: any): UniCloudDBFilter;
  doc(docId: string): UniCloudDBFilter;
  field(filed: string): UniCloudDBQuery;
  skip(num: number): UniCloudDBQuery;
  limit(num: number): UniCloudDBQuery;
  orderBy(order: string): UniCloudDBQuery;
  groupBy(field: string): UniCloudDBQuery;
  groupField(field: string): UniCloudDBQuery;
  distinct(field: string): UniCloudDBQuery;
  geoNear(options: UTSJSONObject): UniCloudDBQuery;
}

declare class Collection {
  private _client;
  private _collectionList;
  private _stages;
  constructor(client: UniCloudUnified, collectionList: Array<any>);
  where(condition: any): UniCloudDBFilter;
  doc(docId: string): UniCloudDBFilter;
  aggregate(): UniCloudDBFilter;
  foreignKey(foreignKey: string): UniCloudDBFilter;
  add(data: UTSJSONObject): Promise<UniCloudDBAddResult>;
  add(data: UTSJSONObject[]): Promise<UniCloudDBBatchAddResult>;
  get(arg?: UTSJSONObject | null): Promise<UniCloudDBGetResult>;
  count(): Promise<UniCloudDBCountResult>;
  getTemp(): UTSJSONObject;
  field(filed: string): UniCloudDBQuery;
  skip(num: number): UniCloudDBQuery;
  limit(num: number): UniCloudDBQuery;
  orderBy(order: string): UniCloudDBQuery;
}

declare class UniCloudDBCommand {
  private static _push;
  /**
   * 查询操作符，用于表示逻辑 "与" 的关系，表示需同时满足多个查询筛选条件
   */
  static and(args: Array<UTSJSONObject>): UTSJSONObject;
  /**
   * 查询操作符，用于表示逻辑 "或" 的关系，表示需同时满足多个查询筛选条件
   */
  static or(args: Array<UTSJSONObject>): UTSJSONObject;
  /**
   * 查询操作符，用于表示逻辑 "非" 的关系，表示需不满足指定的条件
   */
  static not(arg: UTSJSONObject): UTSJSONObject;
  /**
   * 查询操作符，用于表示逻辑 "都不" 的关系，表示需不满足指定的所有条件
   */
  static nor(args: Array<UTSJSONObject>): UTSJSONObject;
  /**
   * 查询筛选条件，表示字段等于某个值
   */
  static eq(arg: any): UTSJSONObject;
  /**
   * 查询筛选条件，表示字段不等于某个值
   */
  static neq(arg: any): UTSJSONObject;
  /**
   * 查询筛选操作符，表示需小于指定值
   */
  static lt(arg: any): UTSJSONObject;
  /**
   * 查询筛选操作符，表示需小于或等于指定值
   */
  static lte(arg: any): UTSJSONObject;
  /**
   * 查询筛选操作符，表示需大于指定值
   */
  static gt(arg: any): UTSJSONObject;
  /**
   * 查询筛选操作符，表示需大于或等于指定值
   */
  static gte(arg: any): UTSJSONObject;
  /**
   * 查询筛选操作符，表示要求值在给定的数组内
   */
  static in(arr: Array<any>): UTSJSONObject;
  /**
   * 查询筛选操作符，表示要求值不在给定的数组内
   */
  static nin(arr: Array<any>): UTSJSONObject;
  /**
   * 判断字段是否存在
   */
  static exists(arg: boolean): UTSJSONObject;
  /**
   * 查询筛选操作符，给定除数 divisor 和余数 remainder
   * @param divisor 除数
   * @param remainder 余数
   * @returns
   */
  static mod(divisor: number, remainder: number): UTSJSONObject;
  /**
   * 数组查询操作符。用于数组字段的查询筛选条件，要求数组字段中包含给定数组的所有元素
   */
  static all(arr: Array<any>): UTSJSONObject;
  /**
   * 用于数组字段的查询筛选条件，要求数组中包含至少一个满足 elemMatch 给定的所有条件的元素
   */
  static elemMatch(arg: UTSJSONObject): UTSJSONObject;
  /**
   * 更新操作符，用于数组字段的查询筛选条件，要求数组长度为给定值
   */
  static size(arg: number): UTSJSONObject;
  /**
   * 按从近到远的顺序，找出字段值在给定点的附近的记录
   */
  static geoNear(arg: UTSJSONObject): UTSJSONObject;
  /**
   * 找出字段值在指定区域内的记录，无排序。指定的区域必须是多边形（Polygon）或多边形集合（MultiPolygon）
   */
  static geoWithin(arg: UTSJSONObject): UTSJSONObject;
  /**
   * 找出给定的地理位置图形相交的记录
   */
  static geoIntersects(arg: UTSJSONObject): UTSJSONObject;
}

declare class Geometry extends UTSJSONObject {
  constructor(arg: UTSJSONObject);
}
declare class GeoPoint extends Geometry {
  constructor(lat: number, lng: number);
}
declare class GeoLineString extends Geometry {
  constructor(points: Array<GeoPoint>);
}
declare class GeoPolygon extends Geometry {
  constructor(lines: Array<GeoLineString>);
}
declare class GeoMultiPoint extends Geometry {
  constructor(points: Array<GeoPoint>);
}
declare class GeoMultiLineString extends Geometry {
  constructor(lines: Array<GeoLineString>);
}
declare class GeoMultiPolygon extends Geometry {
  constructor(polygons: Array<GeoPolygon>);
}
declare class UniCloudDBGeo {
  /**
   * 地理位置点
   */
  static get Point(): typeof GeoPoint;
  /**
   * 地理路径，是由两个或者更多的 Point 组成的线段
   */
  static get LineString(): typeof GeoLineString;
  /**
   * 地理上的一个多边形（有洞或无洞均可），它是由一个或多个闭环 LineString 组成的几何图形
   */
  static get Polygon(): typeof GeoPolygon;
  /**
   * 多个地理位置点 Point 的集合
   */
  static get MultiPoint(): typeof GeoMultiPoint;
  /**
   * 多个地理路径 LineString 的集合
   */
  static get MultiLineString(): typeof GeoMultiLineString;
  /**
   * 多个地理多边形 Polygon 的集合
   */
  static get MultiPolygon(): typeof GeoMultiPolygon;
}

declare class Database {
  private _client;
  constructor(client: UniCloudUnified);
  collection(...args: Array<any>): Collection;
  get command(): typeof UniCloudDBCommand;
  get Geo(): typeof UniCloudDBGeo;
  /**
   * 合并查询请求
   * @description 合并查询请求
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.16"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *       "uniVer": "√",
   *       "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  multiSend(...args: Array<UTSJSONObject>): Promise<UniCloudDBMultiSendResult>;
}

type UniCloudChooseAndUploadFileOptions = {
  sourceType?: Array<'album' | 'camera'> | null;
  count?: number | null;
  sizeType?: Array<'original' | 'compressed'> | null;
  extension?: Array<string> | null;
  compressed?: boolean | null;
  maxDuration?: number | null;
  camera?: 'front' | 'back' | null;
  crop?: ChooseImageCropOptions | null;
  type: 'image' | 'video' | 'all';
  onChooseFile?: (arg: UniCloudChooseAndUploadFileResult) => void | null;
  onUploadProgress?: (arg: UniCloudChooseAndUploadFileProgressEvent) => void | null;
};
type UniCloudChooseAndUploadFileProgressEvent = {
  index: number;
  loaded: number;
  total: number;
  tempFilePath: string;
  tempFile: UniCloudChooseAndUploadFileItem;
};
type UniCloudChooseAndUploadFileResult = {
  tempFiles: Array<UniCloudChooseAndUploadFileItem>;
  tempFilePaths: Array<string>;
};
type UniCloudChooseAndUploadFileItem = {
  name: string;
  path: string;
  cloudPath: string;
  cloudPathAsRealPath?: boolean | null;
  url?: string | null;
  errMsg?: string | null;
};
type UniCloudConnectWebSocketOptions = {
  /** WebSocket云函数/云对象名称 */
  name: string;
  /** 建立连接时需要传递的参数, 仅在 connection 事件中接收到 */
  query?: UTSJSONObject;
}

declare class SSEChannel implements IJSONStringify {
  constructor();
  /**
   * @description 开启通道，注意只有开启之后才能把SSEChannel实例传入云函数
   */
  open(): Promise<void>;
  toJSON(): {
    appId: string;
    pushClientId: string;
    seqId: string;
  };
  /**
   * @description 关闭通道
   */
  close(): void;
  /**
   * @description 监听消息接收事件
   */
  on(event: 'message', callback: (message: string) => void): void;
  /**
   * @description 监听连接关闭事件
   */
  on(event: 'end', callback: (message: string) => void): void;
  /**
   * @description 监听连接打开事件
   */
  on(event: 'open', callback: () => void): void;
  /**
   * @description 监听连接关闭事件
   */
  on(event: 'close', callback: () => void): void;
  /**
   * @description 监听连接错误事件
   */
  on(event: 'error', callback: (error: UniCloudError) => void): void;
  /**
   * @description 取消监听消息接收事件
   */
  off(event: 'message', callback: (message: string) => void): void;
  /**
   * @description 取消监听连接关闭事件
   */
  off(event: 'end', callback: (message: string) => void): void;
  /**
   * @description 取消监听连接打开事件
   */
  off(event: 'open', callback: () => void): void;
  /**
   * @description 取消监听连接关闭事件
   */
  off(event: 'close', callback: () => void): void;
  /**
   * @description 取消监听连接错误事件
   */
  off(event: 'error', callback: (error: UniCloudError) => void): void;
}

declare class UniCloud {
  private _client;
  private _provider;
  private _spaceId;
  config: UniCloudInitOptions;
  mixinDatacom: typeof mixinDatacom;
  constructor(options: UniCloudInitOptions);
  // /**
  //  * 连接其他服务空间
  //  * @uniPlatform {
  //  *   "app": {
  //  *     "android": {
  //  *       "osVer": "5.0",
  //  *       "uniVer": "√",
  //  *       "unixVer": "4.18"
  //  *     },
  //  *     "ios": {
  //  *       "uniVer": "√",
  //  *       "unixVer": "4.11"
  //  *     }
  //  *   },
  //  *   "web": {
  //  *      "uniVer": "√",
  //  *      "unixVer": "4.0"
  //  *   }
  //  * }
  //  */
  // init(options: UniCloudInitOptions): UniCloud;

  /**
   * 设置
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "uniVer": "4.21",
   *       "unixVer": "4.21"
   *     },
   *     "ios": {
   *       "uniVer": "4.21",
   *       "unixVer": "4.21"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "hostVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "4.21",
   *      "unixVer": "4.21"
   *   }
   * }
   */
  setCustomClientInfo(info: UTSJSONObject): void;

  /**
   * 请求云函数
   * @description 请求云函数
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  callFunction<T = UTSJSONObject>(options: UniCloudCallFunctionOptions): Promise<UniCloudCallFunctionResult<T>>;
  /**
   * 上传文件到云存储
   * @description 上传文件到云存储
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  uploadFile(options: UniCloudUploadFileOptions): Promise<UniCloudUploadFileResult>;
  /**
   * 获取文件临时URL
   * @description 获取文件临时URL
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  getTempFileURL(options: UniCloudGetTempFileURLOptions): Promise<UniCloudGetTempFileURLResult>;
  /**
   * 引用云对象
   * @description 引用云对象
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  importObject(objectName: string | string.CloudObjectString, options?: UniCloudImportObjectOptions): UniCloudCloudObjectCaller;
  /**
   * 监听响应事件
   * @description 监听响应事件
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  onResponse(callback: UniCloudCallback<UniCloudResponseEvent>): void;
  /**
   * 移除响应事件监听
   * @description 移除响应事件监听
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  offResponse(callback: UniCloudCallback<UniCloudResponseEvent>): void;
  /**
   * 监听token刷新事件
   * @description 监听token刷新事件
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  onRefreshToken(callback: UniCloudCallback<UniCloudRefreshTokenEvent>): void;
  /**
   * 移除token刷新事件监听
   * @description 移除token刷新事件监听
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  offRefreshToken(callback: UniCloudCallback<UniCloudRefreshTokenEvent>): void;
  /**
   * 获取数据库操作实例
   * @description 获取数据库操作实例
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.91，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  databaseForJQL(): Database;
  /**
   * 获取token内缓存的用户信息
   * @description 获取token内缓存的用户信息
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  getCurrentUserInfo(): UniCloudUserInfo;
  /**
   * 选择并上传文件
   * @description 选择并上传文件
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "阿里云 3.9，腾讯云 3.91，支付宝云 3.98"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.11"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.0"
   *   }
   * }
   */
  chooseAndUploadFile(options: UniCloudChooseAndUploadFileOptions): Promise<UniCloudChooseAndUploadFileResult>;
  /**
   * 连接 WebSocket
   * @description 连接 WebSocket
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "4.23",
   *       "unixVer": "4.28"
   *     },
   *     "ios": {
   *       "uniVer": "4.23",
   *       "unixVer": "4.24"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.61"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.41"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "4.23",
   *      "unixVer": "4.24"
   *   }
   * }
   */
  connectWebSocket(options: UniCloudConnectWebSocketOptions): SocketTask;
  /**
   * 服务端通知通道
   * @description 服务端通知通道
   * @uniPlatform {
   *   "app": {
   *     "android": {
   *       "osVer": "5.0",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "ios": {
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     },
   *     "harmony": {
   *      "uniVer": "√",
   *      "unixVer": "4.71"
   *     }
   *   },
   *   "mp": {
   *     "weixin": {
   *       "osVer": "√",
   *       "uniVer": "√",
   *       "unixVer": "4.71"
   *     }
   *   },
   *   "web": {
   *      "uniVer": "√",
   *      "unixVer": "4.71"
   *   }
   * }
   */
  get SSEChannel(): typeof SSEChannel;
}

declare const uniCloud: UniCloud;

export { type UniCloudCallFunctionOptions, type UniCloudCallFunctionResult, type UniCloudChooseAndUploadFileOptions, type UniCloudChooseAndUploadFileResult, type UniCloudChooseAndUploadFileItem, type UniCloudChooseAndUploadFileProgressEvent, type UniCloudDBAddResult, type UniCloudDBBatchAddResult, type UniCloudDBCountResult, UniCloudDBFilter, type UniCloudDBGetResult, UniCloudDBQuery, type UniCloudDBRemoveResult, type UniCloudDBUpdateResult, type UniCloudDBMultiSendResultItem, type UniCloudDBMultiSendResult, UniCloudError, type UniCloudGetTempFileURLOptions, type UniCloudGetTempFileURLResult, type UniCloudGetTempFileURLResultItem, type UniCloudImportObjectErrorOptions, type UniCloudImportObjectLoadingOptions, type UniCloudImportObjectOptions, type UniCloudInitOptions, type UniCloudRefreshTokenEvent, type UniCloudResponseEvent, type UniCloudUploadFileOptions, type UniCloudUploadFileResult, type UniCloudUploadProgress, type UniCloudUserInfo, uniCloud };
