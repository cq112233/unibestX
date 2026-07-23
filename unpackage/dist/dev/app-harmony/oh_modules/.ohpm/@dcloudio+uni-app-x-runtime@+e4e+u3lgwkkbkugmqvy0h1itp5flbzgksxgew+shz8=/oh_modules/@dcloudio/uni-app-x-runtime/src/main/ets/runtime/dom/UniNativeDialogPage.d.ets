import { UniNativePage } from "@dcloudio/uni-app-x/types/native";
import { UniNativePageImpl } from "./UniNativePage";
export declare class UniNativeDialogPageImpl extends UniNativePageImpl {
    parentPage: UniNativePageImpl | null;
    get type(): string;
    constructor(pageUrl: string, pageId: string, pageStyle: Map<string, Object>, parentPage?: UniNativePage | null | undefined, dialogOptions?: Map<string, Object> | null | undefined, pageOptions?: Map<string, Object> | null | undefined);
    protected showWithAnimation(animationType: string | undefined, duration: number): void;
    protected closeWithAnimation(animationType: string | undefined, duration: number): void;
}
