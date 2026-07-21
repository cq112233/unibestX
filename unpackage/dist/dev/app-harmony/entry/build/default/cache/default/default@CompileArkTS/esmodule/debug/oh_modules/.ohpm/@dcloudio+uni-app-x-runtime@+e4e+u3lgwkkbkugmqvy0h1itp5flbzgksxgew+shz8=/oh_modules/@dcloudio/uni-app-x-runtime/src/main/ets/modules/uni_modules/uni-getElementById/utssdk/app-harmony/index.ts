import { defineSyncApi, UTS } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { string, UniElement, UniPageImpl } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type GetElementById = (id: string.IDString | string) => UniElement | null;
const getElementById: GetElementById = defineSyncApi<UniElement | null>('getElementById', (id: string.IDString | string): UniElement | null => {
    const pages = globalThis.getCurrentPages() as UniPageImpl[];
    if (pages.length == 0) {
        return null;
    }
    const page = pages[pages.length - 1];
    if (!page) {
        UTS.console.warn('page is null');
        return null;
    }
    return page.getElementById(id);
});
export type { GetElementById as GetElementById };
export { getElementById as getElementById };
