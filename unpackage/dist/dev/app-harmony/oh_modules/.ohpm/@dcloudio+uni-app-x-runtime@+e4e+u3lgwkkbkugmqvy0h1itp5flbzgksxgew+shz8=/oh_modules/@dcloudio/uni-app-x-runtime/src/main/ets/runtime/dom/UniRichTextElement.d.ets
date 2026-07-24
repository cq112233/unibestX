import { UniRichTextElement as IUniRichTextElement } from '@dcloudio/uni-app-x/types/native';
import { UniFormControlElementImpl } from './UniFormControlElement';
import { UniRichText, RichTextOptions } from '../components/RichText';
import { UniFrameNode } from '../Node';
@Builder
export declare function RichTextBuilder(options: RichTextOptions): void;
declare class RichTextFrameNode extends UniFrameNode {
    componentInstance: UniRichText;
}
interface NodeItem {
    type?: 'node' | 'text';
    name: string;
    attrs?: object;
    children?: (NodeItem | TextItem)[];
}
interface TextItem {
    type?: 'node' | 'text';
    text: string;
}
type ChildItem = NodeItem | TextItem;
export declare class UniRichTextElementImpl extends UniFormControlElementImpl<string, RichTextFrameNode> implements IUniRichTextElement {
    static get defaultStyle(): Map<string, [string] | [string, boolean]>;
    constructor();
    protected createFrameNode(): RichTextFrameNode;
    updateNativeAttribute(key: string, value: Object): void;
    parseArrayNodesToString(nodes: ChildItem[]): string;
    protected initNativeEvent(type: string): void;
    protected deleteNativeEvent(type: string, res: void | Object): boolean;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute | undefined): void;
}
export {};
