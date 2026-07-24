type DoubleClickCallback = () => void;

export interface INavigationBar {
  /**
   * 滚动更新
   */
  updateByScroll(scrollY: number): void;

  /**
   * 添加双击事件监听
   */
  addNavigationBarDoubleClickListener(callback: DoubleClickCallback): void;

  /**
   * 移除双击事件监听
   */
  removeNavigationBarDoubleClickListener(callback: DoubleClickCallback): void;

  /**
   * 移除全部双击事件监听
   */
  removeAllNavigationBarDoubleClickListener(): void;
}