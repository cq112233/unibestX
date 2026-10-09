// ==========================================
// 第三方组件库 rice-ui 外部类型补充声明
// 在不修改 uni_modules/rice-ui 源码的前提下，为项目提供类型与成员补全
// ==========================================

declare module '@/uni_modules/rice-ui' {
  export const config: any;
  export const isDark: import('vue').ComputedRef<boolean>;
  export function setTheme(theme: 'dark' | 'light'): void;
  export type Config = {
    theme: 'dark' | 'light';
    unit: 'px' | 'rpx';
  };

  // 支持各类组件事件与菜单类型
  export type SwipeActionsMenu = {
    text: string;
    style?: Record<string, any>;
    [key: string]: any;
  };
  export type SwipeActionsItemClick = {
    index: number;
    menu: SwipeActionsMenu;
    name?: string;
  };

  export * from '@/uni_modules/rice-ui/index.uts';
}

declare module '@/uni_modules/rice-ui/index.uts' {
  export const config: any;
  export const isDark: import('vue').ComputedRef<boolean>;
  export function setTheme(theme: 'dark' | 'light'): void;
  export type Config = {
    theme: 'dark' | 'light';
    unit: 'px' | 'rpx';
  };

  export type SwipeActionsMenu = {
    text: string;
    style?: Record<string, any>;
    [key: string]: any;
  };
  export type SwipeActionsItemClick = {
    index: number;
    menu: SwipeActionsMenu;
    name?: string;
  };
}
