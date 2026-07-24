import { string, UniElement, defineSyncApi, UniPageImpl, UTS } from "@dcloudio/uni-app-framework";
type GetElementById = (id: string.IDString | string) => UniElement | null;
const getElementById: GetElementById = defineSyncApi<UniElement | null>('getElementById', (id: string.IDString | string): UniElement | null =>{
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
export { GetElementById as GetElementById };
export { getElementById as getElementById };
