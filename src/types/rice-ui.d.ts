// ==========================================
// 第三方组件库 rice-ui 外部类型与全局组件智能补全声明
// 在不修改 uni_modules/rice-ui 源码的前提下，为 VS Code / Volar 提供完整的模板智能提示与 Props 补全
// ==========================================

import type { DefineComponent } from 'vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'rice-action-sheet': DefineComponent<any>;
    'rice-avatar': DefineComponent<any>;
    'rice-back-top': DefineComponent<any>;
    'rice-badge': DefineComponent<any>;
    'rice-button': DefineComponent<any>;
    'rice-calendar': DefineComponent<any>;
    'rice-cascader': DefineComponent<any>;
    'rice-cell': DefineComponent<any>;
    'rice-cell-group': DefineComponent<any>;
    'rice-checkbox': DefineComponent<any>;
    'rice-checkbox-group': DefineComponent<any>;
    'rice-code-input': DefineComponent<any>;
    'rice-col': DefineComponent<any>;
    'rice-collapse': DefineComponent<any>;
    'rice-collapse-item': DefineComponent<any>;
    'rice-color-picker': DefineComponent<any>;
    'rice-count-down': DefineComponent<any>;
    'rice-count-to': DefineComponent<any>;
    'rice-datetime-picker': DefineComponent<any>;
    'rice-dialog': DefineComponent<any>;
    'rice-divider': DefineComponent<any>;
    'rice-float-fab': DefineComponent<any>;
    'rice-float-panel': DefineComponent<any>;
    'rice-form': DefineComponent<any>;
    'rice-form-item': DefineComponent<any>;
    'rice-grid': DefineComponent<any>;
    'rice-grid-item': DefineComponent<any>;
    'rice-icon': DefineComponent<any>;
    'rice-image': DefineComponent<any>;
    'rice-input': DefineComponent<any>;
    'rice-loading': DefineComponent<any>;
    'rice-navbar': DefineComponent<any>;
    'rice-notice-bar': DefineComponent<any>;
    'rice-overlay': DefineComponent<any>;
    'rice-picker': DefineComponent<any>;
    'rice-popup': DefineComponent<any>;
    'rice-progress': DefineComponent<any>;
    'rice-progress-circle': DefineComponent<any>;
    'rice-qrcode': DefineComponent<any>;
    'rice-radio': DefineComponent<any>;
    'rice-radio-group': DefineComponent<any>;
    'rice-rate': DefineComponent<any>;
    'rice-row': DefineComponent<any>;
    'rice-scroll-x': DefineComponent<any>;
    'rice-search': DefineComponent<any>;
    'rice-signature': DefineComponent<any>;
    'rice-slider': DefineComponent<any>;
    'rice-stepper': DefineComponent<any>;
    'rice-subsection': DefineComponent<any>;
    'rice-swipe-actions': DefineComponent<any>;
    'rice-swipe-actions-item': DefineComponent<any>;
    'rice-switch': DefineComponent<any>;
    'rice-tabs': DefineComponent<any>;
    'rice-tag': DefineComponent<any>;
    'rice-textarea': DefineComponent<any>;
    'rice-time-format': DefineComponent<any>;
    'rice-uploader': DefineComponent<any>;
    'rice-waterflow': DefineComponent<any>;
    'rice-waterflow-item': DefineComponent<any>;
  }
}

declare module '@/uni_modules/rice-ui' {
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
