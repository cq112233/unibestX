// ==========================================
// 全局组件类型声明 (GlobalComponents)
// ==========================================

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $callMethod: (name: string, ...args: any[]) => any;
  }

  export interface GlobalComponents {
    A1: typeof import('../components/A1/A1.uvue')['default'];
    NavBar: typeof import('../components/NavBar/NavBar.uvue')['default'];
    TabbarMaskModal: typeof import('../components/TabbarMaskModal/TabbarMaskModal.uvue')['default'];
  }
}

export {};
