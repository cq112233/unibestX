import { UniElementImpl } from './UniElement';
import { UniTextElement as ITextNode, UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { typeNode as typeNode } from "@ohos.arkui.node";
import { CSSStyleValue as ICSSStyleValue } from './cssom/types';
export declare class UniTextElementImpl extends UniElementImpl<typeNode.Text> implements ITextNode {
    static skipDefaultFrameNodeStyle: boolean;
    private nativeTextStyleCache;
    private textController;
    private styleOptions;
    get value(): string;
    static get defaultStyle(): Map<string, [string] | [string, boolean] | [string, boolean, (el: IUniElement) => void]>;
    constructor();
    batchSetStyleEnd(): void;
    protected initClass(): void;
    protected createFrameNode(): typeNode.Text;
    getTextExtra(): object;
    private fixClickCallback?;
    private fixClick;
    updateNativeAttribute(key: string, value: ESObject): void;
    setAnyAttribute(key: string, value: ESObject): void;
    private updateText;
    /**
     * @internal
     */
    getStyledStringOptions(isRoot?: boolean): [string, StyleOptions[]];
    setStyleValue(property: string, value: ICSSStyleValue): void;
    removeStyleValue(property: string): void;
    parseStyle(key: string, value: Object): boolean;
    private updateStyleOptions;
    private removeStyleOptions;
    protected batchSetTextStyleKeys: Set<StyledStringKey>;
    protected applyBatchSetTextStyle(): number;
    updateNativeNodeStyle(key: string, value: Object | undefined): void;
    checkLayout(): void;
    protected addFrameNode(frameNode: FrameNode): void;
    protected removeFrameNode(frameNode: FrameNode): void;
    protected initNativeEvent(type: string): void | Object;
    protected deleteNativeEvent(type: string, res: void | Object): boolean;
    getHarmonyController<T extends TextController>(): T;
}
