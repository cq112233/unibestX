import type { UniPage } from '@dcloudio/uni-app-x/types/native';
export function getCurrentPages() {
    const pages = ((globalThis as any).getCurrentPages?.() || []) as UniPage[];
    return pages;
}
