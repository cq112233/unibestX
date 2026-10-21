/** 构建期页面路由表虚拟模块（运行时由 Vite 插件注入） */
declare const PAGES_ROUTE_TABLE_JSON: string;
declare const PAGES_ROUTE_TABLE: Record<string, Record<string, any>>;
declare const PAGES_ROUTE_TABLE_LIST_JSON: string;
declare const PAGES_ROUTE_TABLE_LIST: Array<Record<string, any>>;

export {
  PAGES_ROUTE_TABLE,
  PAGES_ROUTE_TABLE_JSON,
  PAGES_ROUTE_TABLE_LIST,
  PAGES_ROUTE_TABLE_LIST_JSON
};
