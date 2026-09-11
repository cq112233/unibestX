import { onMounted, onUnmounted, ref } from 'vue';

export const isPageScrollDisabled = ref(false);
export const isPageRefresherDisabled = ref(false);

export function setPageScrollEnabled(enabled: boolean) {
  isPageScrollDisabled.value = !enabled;
}

export function setPageRefresherEnabled(enabled: boolean) {
  isPageRefresherDisabled.value = !enabled;
}

export type PageScrollDetail = {
  scrollTop: number;
};

export const EVENT_PAGE_SCROLL: string = 'onNavbarPageScroll';
export const EVENT_REACH_BOTTOM: string = 'onNavbarReachBottom';

/**
 * 监听 NavBar 布局内的页面滚动事件（在页面采用了 navbar 布局时替代原生的 onPageScroll）
 */
export function onNavbarPageScroll(callback: (e: PageScrollDetail) => void): void {
  const handler = (data: any | null): void => {
    if (data != null) {
      const obj = data as UTSJSONObject;
      // eslint-disable-next-line dot-notation
      const topVal = obj['scrollTop'];
      const st = topVal != null ? (topVal as number) : 0;
      callback({ scrollTop: st } as PageScrollDetail);
    }
    else {
      callback({ scrollTop: 0 } as PageScrollDetail);
    }
  };
  onMounted(() => {
    uni.$on(EVENT_PAGE_SCROLL, handler);
  });
  onUnmounted(() => {
    uni.$off(EVENT_PAGE_SCROLL, handler);
  });
}

/**
 * 监听 NavBar 布局内的触底事件（在页面采用了 navbar 布局时替代原生的 onReachBottom）
 */
export function onNavbarReachBottom(callback: () => void): void {
  onMounted(() => {
    uni.$on(EVENT_REACH_BOTTOM, callback);
  });
  onUnmounted(() => {
    uni.$off(EVENT_REACH_BOTTOM, callback);
  });
}
