// ==========================================
// Vite 环境变量与构建注入声明 (import.meta.env.*)
// ==========================================

declare global {
  interface ImportMetaEnv {
    readonly [key: string]: any;
    readonly BASE_URL: string;
    readonly MODE: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly SSR: boolean;

    // —— 以下为项目自定义环境变量（真源：根目录 .env / .env.development / .env.production / .env.test）
    // 声明为可选：同一变量并非每个环境模式都有，且被注释掉的项在运行时为 undefined

    // 取自 .env
    readonly VITE_APP_TITLE?: string;
    readonly VITE_APP_VERSION?: string;
    readonly VITE_DEFAULT_LOCALE?: string;
    readonly VITE_DEFAULT_THEME?: string;
    readonly VITE_DEFAULT_THEME_MODE?: string;
    readonly VITE_DEV_SANDBOX?: string;
    readonly VITE_DEV_SANDBOX_PAGES?: string;
    readonly VITE_H5_USE_PROXY?: string;
    readonly VITE_SHOW_VCONSOLE?: string;
    readonly VITE_STREAM_URL?: string;
    readonly VITE_TABBAR_MODE?: string;
    readonly VITE_USE_MOCK?: string;

    // 取自 .env.development / .env.production / .env.test
    readonly VITE_ENV_NAME?: string;
    readonly VITE_ENV_TYPE?: string;
    readonly VITE_SERVER_BASEURL?: string;
    readonly VITE_SERVER_BASEURL_SECONDARY?: string;
    readonly VITE_UPLOAD_BASEURL?: string;
    readonly VITE_UPLOAD_PATH?: string;

    // 非 .env 声明，由 vite 构建期插件动态注入
    readonly VITE_TEMPLATE_VERSION?: string;
    readonly VITE_PKG_VERSION?: string;
    readonly VITE_BUILD_TIME?: string;
    readonly VITE_GIT_BRANCH?: string;
    readonly VITE_GIT_COMMIT_HASH?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
