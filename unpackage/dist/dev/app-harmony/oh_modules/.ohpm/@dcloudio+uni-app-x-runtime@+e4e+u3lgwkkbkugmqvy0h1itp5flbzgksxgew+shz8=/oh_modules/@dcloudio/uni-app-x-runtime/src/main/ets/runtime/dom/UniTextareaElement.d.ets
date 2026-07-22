import { TextareaOptions } from '../components/Textarea';
import { UniFrameNode } from '../Node';
import { TextareaFrameNode, UniInputFileElementImpl } from './UniInputFile';
@Builder
export declare function TextareaBuilder(options: TextareaOptions): void;
export declare class UniTextareaElementImpl extends UniInputFileElementImpl {
    private defaultHeight;
    private options;
    private textAreaHeight;
    private textAreaMinHeight;
    private calcTextAreaMinHeight;
    private textAreaMaxHeight;
    private autoHeight;
    private lines;
    private needDispatchLineChange;
    private textRectHeight;
    private calculatedHeight;
    private textarea;
    /**
     * @internal
    * TODO 临时供 call input 使用
     */
    get inputFrameNode(): UniFrameNode;
    static get defaultStyle(): Map<string, [string] | [string, boolean]>;
    protected initClass(): void;
    constructor();
    protected createFrameNode(): TextareaFrameNode;
    updateNativeAttribute(key: string, value: ESObject): void;
    parsePlaceholderStyle(value: ESObject, level: number): void;
    parseStyle(key: string, value: Object): boolean;
    updateNativeNodeStyle(key: string, value: ESObject, commonAttribute?: CommonAttribute | undefined): void;
    protected adjustHeightForCurrentFontSize(): void;
    private updateTextAreaMinHeight;
    protected calcHeight(): void;
    private getTextAreaComponentHeight;
    private shouldSyncTextAreaComponentHeight;
    private hasVerticalPadding;
    protected updateHeight(): void;
    protected resetHeight(): void;
    protected dispatchLineChange(): void;
    protected handleInput(value: string, cursor: number | null): void;
    protected initNativeEvent(type: string): void;
    protected deleteNativeEvent(type: string, res: void | Object): boolean;
    checkLayout(): void;
    reset(): void;
    getHarmonyController<T extends TextAreaController>(): T;
    dispose(): void;
}
