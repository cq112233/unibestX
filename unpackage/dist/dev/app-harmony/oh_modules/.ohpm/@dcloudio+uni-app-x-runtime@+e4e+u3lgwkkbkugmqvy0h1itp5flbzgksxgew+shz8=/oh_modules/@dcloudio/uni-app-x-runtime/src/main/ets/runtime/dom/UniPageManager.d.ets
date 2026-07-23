import { UniNativePage, UniPageManager as IUniPageManager } from '@dcloudio/uni-app-x/types/native';
import { UniNativePageImpl } from './UniNativePage';
import { UniNativeDialogPageImpl } from './UniNativeDialogPage';
export declare class UniPageManagerImpl implements IUniPageManager {
    createPage(pageUrl: string, pageId: string, pageStyle: Map<string, object>, pageOptions?: Map<string, object> | null | undefined): UniNativePageImpl;
    createDialogPage(pageUrl: string, pageId: string, pageStyle: Map<string, Object>, parentPage?: UniNativePage | null | undefined, dialogOptions?: Map<string, Object> | null | undefined, pageOptions?: Map<string, Object> | null | undefined): UniNativePage;
    findPageById(pageId: string): UniNativePageImpl | UniNativeDialogPageImpl | null;
    /**
     * @internal
     */
    getTopPage(): UniNativePageImpl | undefined;
}
