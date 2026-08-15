import type { UniNativePage, UniPageManager as IUniPageManager } from '@dcloudio/uni-app-x/types/native';
import { UniNativePageImpl, pagesMap, pagesArray, closingPagesMap } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniNativePage&1.0.0";
import { UniNativeDialogPageImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniNativeDialogPage&1.0.0";
import { setNativePageReady } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/polyfill/onNativePageReady&1.0.0";
import { UniNativeTabBarPage } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniNativeTabBarPage&1.0.0";
export class UniPageManagerImpl implements IUniPageManager {
    createPage(pageUrl: string, pageId: string, pageStyle: Map<string, object>, pageOptions?: Map<string, object> | null | undefined): UniNativePageImpl {
        setNativePageReady(false);
        if (pageUrl === 'tabBar') {
            return new UniNativeTabBarPage(pageUrl, pageId, pageStyle);
        }
        return new UniNativePageImpl(pageUrl, pageId, pageStyle);
    }
    createDialogPage(pageUrl: string, pageId: string, pageStyle: Map<string, Object>, parentPage?: UniNativePage | null | undefined, dialogOptions?: Map<string, Object> | null | undefined, pageOptions?: Map<string, Object> | null | undefined): UniNativePage {
        return new UniNativeDialogPageImpl(pageUrl, pageId, pageStyle, parentPage, dialogOptions, pageOptions);
    }
    findPageById(pageId: string): UniNativePageImpl | UniNativeDialogPageImpl | null {
        // Bug 在uni-app-x-runtime编译为har包且被其他包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
        return (pagesMap.get(pageId) || closingPagesMap.get(pageId) ||
            null) as UniNativePageImpl | UniNativeDialogPageImpl | null;
    }
    /**
     * @internal
     */
    getTopPage(): UniNativePageImpl | null {
        const topPage = (pagesArray[pagesArray.length - 1] ?? null) as UniNativePageImpl | null;
        return topPage;
    }
    /**
     * @internal
     */
    getBottomPage(): UniNativePageImpl | null {
        return (pagesArray[0] ?? null) as UniNativePageImpl | null;
    }
}
