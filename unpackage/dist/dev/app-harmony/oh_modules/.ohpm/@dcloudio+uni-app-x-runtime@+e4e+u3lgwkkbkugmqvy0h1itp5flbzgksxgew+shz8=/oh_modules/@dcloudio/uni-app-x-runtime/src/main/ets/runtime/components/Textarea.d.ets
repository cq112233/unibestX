import { ComponentBaseOptions } from '../Node';
export interface TextareaOptions extends ComponentBaseOptions {
    placeholder?: string;
    text: string;
    controller: TextAreaController;
}
export interface EventDetail {
    value: string | number;
}
export interface InputEventDetail {
    value: string | number;
    cursor: number | null;
}
export interface FocusEventDetail {
    value: string | number;
    height: number;
}
export interface InputEvent {
    detail: InputEventDetail;
}
@Component
export declare struct Textarea {
    onAboutToAppear?: (instance: Textarea) => void;
    attributeUpdater?: object;
    controller: TextAreaController;
    @Prop
    cacheKey: string;
    @Prop
    text: string;
    @Prop
    textAreaComponentHeight: number | string;
    @Prop
    placeholder: string;
    @Prop
    disabled: boolean;
    @Prop
    adjustPosition: boolean;
    @Prop
    cacheBorderColor: EdgeColors;
    @Prop
    cachePlaceholderFont: Font;
    @Prop
    cachePlaceholderColor: ResourceColor;
    @Prop
    cacheMaxLength: number;
    @Prop
    cacheConfirmType: EnterKeyType;
    @Prop
    cacheCaretColor: ResourceColor;
    @Prop
    cacheCaretStyle: CaretStyle;
    @Prop
    cacheInputMode: TextAreaType;
    @Prop
    cachePadding: Padding;
    @Prop
    autoHeight: boolean;
    handleInput?: (event: InputEvent) => void;
    handleFocus?: () => void;
    handleBlur?: () => void;
    handleConfirm?: (enterKey: EnterKeyType, event: SubmitEvent) => void;
    handleEditChange?: (isEditing: boolean) => void;
    handleAttach?: () => void;
    build(): void;
    aboutToAppear(): void;
}
