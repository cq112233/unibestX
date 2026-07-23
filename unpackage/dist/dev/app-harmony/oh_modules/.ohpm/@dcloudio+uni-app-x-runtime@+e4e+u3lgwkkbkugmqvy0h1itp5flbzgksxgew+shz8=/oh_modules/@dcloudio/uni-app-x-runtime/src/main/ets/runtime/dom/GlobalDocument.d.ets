import { UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native';
import { UniNativePageImpl } from './UniNativePage';
import { UniBodyElementImpl } from './UniBodyElement';
export declare class GlobalDocument {
    uniPage: UniNativePageImpl;
    get body(): UniBodyElementImpl;
    private checkRootDocument;
    createElement(data: string): IUniElement;
    createComment(data: string): IUniElement;
    dispose(): void;
}
