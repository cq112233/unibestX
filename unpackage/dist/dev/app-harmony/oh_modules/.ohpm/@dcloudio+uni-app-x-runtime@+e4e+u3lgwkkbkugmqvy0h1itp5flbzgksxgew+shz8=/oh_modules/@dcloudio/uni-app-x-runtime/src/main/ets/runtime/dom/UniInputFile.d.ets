import { UniFormControlElementImpl } from "./UniFormControlElement";
import { UniInputElement as IInputNode } from '@dcloudio/uni-app-x/types/native';
import { UniFrameNode } from '../Node';
import { Textarea } from '../components/Textarea';
import { typeNode as typeNode } from "@ohos.arkui.node";
import window from "@ohos.window";
import { UniScrollElementImpl } from './UniScroll/UniScroll';
import { UniElement } from '..';
export declare class TextareaFrameNode extends UniFrameNode {
    componentInstance: Textarea;
}
export declare const CONFIRM_TYPES: Map<string, EnterKeyType>;
interface SelectionData {
    start: number;
    end: number;
}
interface PlaceholderStyleLevel {
    fontFamily: number;
    fontWeight: number;
    fontSize: number;
    fontStyle: number;
    color: number;
}
interface BorderWidth {
    top: number;
    bottom: number;
}
interface StyleCache {
    borderColor: EdgeColors;
    placeholderFont: Font;
    placeholderColor: ResourceColor;
    placeholderStyleLevel: PlaceholderStyleLevel;
    padding: Padding;
    borderWidth: BorderWidth;
}
export interface KeyboardHeightChangeEventDetail {
    height: number;
    duration: number;
}
export declare class UniInputFileElementImpl extends UniFormControlElementImpl<string, FrameNode | TextareaFrameNode> implements IInputNode {
    type: string;
    placeholder: string;
    disabled: boolean;
    autofocus: boolean;
    protected textValue: string;
    protected preTextValue: string;
    protected controller: TextInputController | TextAreaController;
    protected inputFileFrameNode: TextareaFrameNode | typeNode.TextInput;
    protected mounted: boolean;
    protected needFocusWhenMounted: boolean;
    protected needDispatchInput: boolean;
    protected holdKeyboard: boolean;
    protected isTouching: boolean;
    protected processingPageTouch: boolean;
    protected maxLength: number | null;
    protected initValue: string | null;
    protected handledAutoFocus: boolean;
    protected selection: SelectionData;
    protected confirmHold: boolean;
    protected confirmHoldHandled: boolean;
    protected styleCache: StyleCache;
    protected currentWindow: window.Window | null;
    protected keyboardHeight: number;
    protected cursor: number;
    protected needDispatchKeyboardHeightChange: boolean;
    protected needDispatchConfirm: boolean;
    protected adjustPosition: boolean;
    protected needDispatchFocus: boolean;
    protected needDispatchBLur: boolean;
    protected isFocusing: boolean;
    protected rollAbleParents: UniScrollElementImpl[];
    protected resetElementPositionWhenBlur: () => void;
    private placeholderElsForRollAbleParent;
    private keyboardAnimationDuration;
    private keyboardHeightChangeCallback;
    protected hasPlaceholderFontSize: boolean;
    protected styleHeight: string;
    protected defaultFontSize: number;
    protected currentFontSize: number;
    constructor();
    protected initClass(): void;
    protected initStyleCache(): void;
    protected handleMountedFocus(): void;
    protected initTouchEventListener(): void;
    get value(): string;
    getCurrentFontSize(): number;
    protected updateCurrentFontSize(value: Object | undefined): number;
    protected getInputContentMinHeight(): number;
    protected adjustHeightForCurrentFontSize(): void;
    protected getInputTextMinHeight(): number;
    private getCurrentHeightForFontSize;
    protected getVerticalBoxInset(): number;
    private toNumber;
    reset(): void;
    setAnyAttribute(key: string, value: Object): void;
    updateNativeAttribute(key: string, value: ESObject): void;
    protected triggerFocus(): void;
    protected triggerBlur(): void;
    protected parsePlaceholderStyle(value: ESObject, level: number): void;
    parseStyle(key: string, value: Object): boolean;
    protected collectScrollAbleParents(): void;
    protected isScrollAbleElement(el: UniElement): boolean;
    protected watchKeyboardHeightChange(): void;
    protected handleKeyboardHeightChange(height: number): void;
    protected handleElementPositionWhenFocus(): void;
    protected dispatchKeyboardHeightChange(): void;
    protected handleKeyboardAvoidMode(): void;
    protected resetKeyboardAvoidMode(): void;
    protected baseFocusEvent(): void;
    protected dispatchFocus(): void;
    protected baseBlurEvent(): void;
    protected dispatchChange(): void;
    protected dispatchBlur(): void;
    protected handleInput(value: string, cursor: number | null): void;
    protected dispatchInput(): void;
    protected dispatchConfirm(): void;
    protected initNativeEvent(type: string): void;
    protected deleteNativeEvent(type: string, res: void | Object): boolean;
    dispose(): void;
}
export {};
