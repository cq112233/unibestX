import { UniElementImpl } from './UniElement';
import { UniCommentElement as IUniCommentElement } from '@dcloudio/uni-app-x/types/native';
import { UniLayoutFlexNode } from 'dcloudlayout';
import { UniNativePageImpl } from './UniNativePage';
export declare class UniCommentElementImpl extends UniElementImpl implements IUniCommentElement {
    text: string;
    isPureNode: true;
    constructor(text: string, page: UniNativePageImpl);
    protected createLayoutNode(): UniLayoutFlexNode;
    protected addNativeNode(index: number): void;
    protected removeNativeNode(): void;
}
export declare const UniComment: typeof UniCommentElementImpl;
