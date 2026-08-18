import type { PageContainer } from '../components/Page';
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import type { UniNativePageImpl } from '../dom/UniNativePage';
import type { UniPageImpl } from "../UniPage";
let isPageReady = false;
export function setNativePageReady(ready: boolean) {
    isPageReady = ready;
}
function getCurrentPageContainer(): PageContainer | null {
    const pages = globalThis.getCurrentPages() as UniPageImpl[];
    if (pages.length > 0) {
        const lastPage = pages[pages.length - 1];
        const p = getUniApp()!.pageManager.findPageById(lastPage.__nativePageId) as UniNativePageImpl;
        return p.page;
    }
    return null;
}
let nativePageReadyPromiseResolves: Array<((page: PageContainer) => void) | undefined> = [];
export function onNativePageReady(): Promise<PageContainer> {
    if (isPageReady) {
        return Promise.resolve(getCurrentPageContainer()!);
    }
    return new Promise<PageContainer>(resolve => {
        nativePageReadyPromiseResolves.push(resolve);
    });
}
export function nativePageReady(page: PageContainer) {
    if (isPageReady) {
        return;
    }
    isPageReady = true;
    nativePageReadyPromiseResolves.forEach(resolve => {
        if (resolve) {
            resolve(page);
        }
    });
    nativePageReadyPromiseResolves = [];
}
