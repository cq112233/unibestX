if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Textarea_Params {
    // 用于获取组件实例
    onAboutToAppear?: (instance: Textarea) => void;
    // 用于获取组件属性
    attributeUpdater?: object;
    controller?;
    cacheKey?: string;
    text?: string;
    textAreaComponentHeight?: number | string;
    placeholder?: string;
    disabled?: boolean;
    adjustPosition?: boolean;
    cacheBorderColor?: EdgeColors;
    cachePlaceholderFont?: Font;
    cachePlaceholderColor?: ResourceColor;
    cacheMaxLength?: number;
    cacheConfirmType?: EnterKeyType;
    cacheCaretColor?: ResourceColor;
    cacheCaretStyle?: CaretStyle;
    cacheInputMode?: TextAreaType;
    cachePadding?: Padding;
    autoHeight?: boolean;
    handleInput?: (event: InputEvent) => void;
    handleFocus?: () => void;
    handleBlur?: () => void;
    handleConfirm?: (enterKey: EnterKeyType, event: SubmitEvent) => void;
    handleEditChange?: (isEditing: boolean) => void;
    handleAttach?: () => void;
}
import type { ComponentBaseOptions } from '../Node';
import type { KeyboardAvoidMode } from "@ohos:arkui.UIContext";
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
export class Textarea extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onAboutToAppear = undefined;
        this.attributeUpdater = undefined;
        this.controller = new TextAreaController();
        this.__cacheKey = new SynchedPropertySimpleOneWayPU(params.cacheKey, this, "cacheKey");
        this.__text = new SynchedPropertySimpleOneWayPU(params.text, this, "text");
        this.__textAreaComponentHeight = new SynchedPropertySimpleOneWayPU(params.textAreaComponentHeight, this, "textAreaComponentHeight");
        this.__placeholder = new SynchedPropertySimpleOneWayPU(params.placeholder, this, "placeholder");
        this.__disabled = new SynchedPropertySimpleOneWayPU(params.disabled, this, "disabled");
        this.__adjustPosition = new SynchedPropertySimpleOneWayPU(params.adjustPosition, this, "adjustPosition");
        this.__cacheBorderColor = new SynchedPropertyObjectOneWayPU(params.cacheBorderColor, this, "cacheBorderColor");
        this.__cachePlaceholderFont = new SynchedPropertyObjectOneWayPU(params.cachePlaceholderFont, this, "cachePlaceholderFont");
        this.__cachePlaceholderColor = new SynchedPropertyObjectOneWayPU(params.cachePlaceholderColor, this, "cachePlaceholderColor");
        this.__cacheMaxLength = new SynchedPropertySimpleOneWayPU(params.cacheMaxLength, this, "cacheMaxLength");
        this.__cacheConfirmType = new SynchedPropertySimpleOneWayPU(params.cacheConfirmType, this, "cacheConfirmType");
        this.__cacheCaretColor = new SynchedPropertyObjectOneWayPU(params.cacheCaretColor, this, "cacheCaretColor");
        this.__cacheCaretStyle = new SynchedPropertyObjectOneWayPU(params.cacheCaretStyle, this, "cacheCaretStyle");
        this.__cacheInputMode = new SynchedPropertySimpleOneWayPU(params.cacheInputMode, this, "cacheInputMode");
        this.__cachePadding = new SynchedPropertyObjectOneWayPU(params.cachePadding, this, "cachePadding");
        this.__autoHeight = new SynchedPropertySimpleOneWayPU(params.autoHeight, this, "autoHeight");
        this.handleInput = undefined;
        this.handleFocus = undefined;
        this.handleBlur = undefined;
        this.handleConfirm = undefined;
        this.handleEditChange = undefined;
        this.handleAttach = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Textarea_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
        if (params.attributeUpdater !== undefined) {
            this.attributeUpdater = params.attributeUpdater;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cacheKey === undefined) {
            this.__cacheKey.set('');
        }
        if (params.text === undefined) {
            this.__text.set('');
        }
        if (params.textAreaComponentHeight === undefined) {
            this.__textAreaComponentHeight.set(150);
        }
        if (params.placeholder === undefined) {
            this.__placeholder.set('');
        }
        if (params.disabled === undefined) {
            this.__disabled.set(false);
        }
        if (params.adjustPosition === undefined) {
            this.__adjustPosition.set(true);
        }
        if (params.cacheBorderColor === undefined) {
            this.__cacheBorderColor.set({});
        }
        if (params.cachePlaceholderFont === undefined) {
            this.__cachePlaceholderFont.set({});
        }
        if (params.cachePlaceholderColor === undefined) {
            this.__cachePlaceholderColor.set('');
        }
        if (params.cacheMaxLength === undefined) {
            this.__cacheMaxLength.set(-1);
        }
        if (params.cacheConfirmType === undefined) {
            this.__cacheConfirmType.set(EnterKeyType.NEW_LINE);
        }
        if (params.cacheCaretColor === undefined) {
            this.__cacheCaretColor.set('');
        }
        if (params.cacheCaretStyle === undefined) {
            this.__cacheCaretStyle.set({});
        }
        if (params.cacheInputMode === undefined) {
            this.__cacheInputMode.set(TextAreaType.NORMAL);
        }
        if (params.cachePadding === undefined) {
            this.__cachePadding.set({});
        }
        if (params.autoHeight === undefined) {
            this.__autoHeight.set(false);
        }
        if (params.handleInput !== undefined) {
            this.handleInput = params.handleInput;
        }
        if (params.handleFocus !== undefined) {
            this.handleFocus = params.handleFocus;
        }
        if (params.handleBlur !== undefined) {
            this.handleBlur = params.handleBlur;
        }
        if (params.handleConfirm !== undefined) {
            this.handleConfirm = params.handleConfirm;
        }
        if (params.handleEditChange !== undefined) {
            this.handleEditChange = params.handleEditChange;
        }
        if (params.handleAttach !== undefined) {
            this.handleAttach = params.handleAttach;
        }
    }
    updateStateVars(params: Textarea_Params) {
        this.__cacheKey.reset(params.cacheKey);
        this.__text.reset(params.text);
        this.__textAreaComponentHeight.reset(params.textAreaComponentHeight);
        this.__placeholder.reset(params.placeholder);
        this.__disabled.reset(params.disabled);
        this.__adjustPosition.reset(params.adjustPosition);
        this.__cacheBorderColor.reset(params.cacheBorderColor);
        this.__cachePlaceholderFont.reset(params.cachePlaceholderFont);
        this.__cachePlaceholderColor.reset(params.cachePlaceholderColor);
        this.__cacheMaxLength.reset(params.cacheMaxLength);
        this.__cacheConfirmType.reset(params.cacheConfirmType);
        this.__cacheCaretColor.reset(params.cacheCaretColor);
        this.__cacheCaretStyle.reset(params.cacheCaretStyle);
        this.__cacheInputMode.reset(params.cacheInputMode);
        this.__cachePadding.reset(params.cachePadding);
        this.__autoHeight.reset(params.autoHeight);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__cacheKey.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__textAreaComponentHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__placeholder.purgeDependencyOnElmtId(rmElmtId);
        this.__disabled.purgeDependencyOnElmtId(rmElmtId);
        this.__adjustPosition.purgeDependencyOnElmtId(rmElmtId);
        this.__cacheBorderColor.purgeDependencyOnElmtId(rmElmtId);
        this.__cachePlaceholderFont.purgeDependencyOnElmtId(rmElmtId);
        this.__cachePlaceholderColor.purgeDependencyOnElmtId(rmElmtId);
        this.__cacheMaxLength.purgeDependencyOnElmtId(rmElmtId);
        this.__cacheConfirmType.purgeDependencyOnElmtId(rmElmtId);
        this.__cacheCaretColor.purgeDependencyOnElmtId(rmElmtId);
        this.__cacheCaretStyle.purgeDependencyOnElmtId(rmElmtId);
        this.__cacheInputMode.purgeDependencyOnElmtId(rmElmtId);
        this.__cachePadding.purgeDependencyOnElmtId(rmElmtId);
        this.__autoHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__cacheKey.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__textAreaComponentHeight.aboutToBeDeleted();
        this.__placeholder.aboutToBeDeleted();
        this.__disabled.aboutToBeDeleted();
        this.__adjustPosition.aboutToBeDeleted();
        this.__cacheBorderColor.aboutToBeDeleted();
        this.__cachePlaceholderFont.aboutToBeDeleted();
        this.__cachePlaceholderColor.aboutToBeDeleted();
        this.__cacheMaxLength.aboutToBeDeleted();
        this.__cacheConfirmType.aboutToBeDeleted();
        this.__cacheCaretColor.aboutToBeDeleted();
        this.__cacheCaretStyle.aboutToBeDeleted();
        this.__cacheInputMode.aboutToBeDeleted();
        this.__cachePadding.aboutToBeDeleted();
        this.__autoHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 用于获取组件实例
    private onAboutToAppear?: (instance: Textarea) => void;
    // 用于获取组件属性
    private attributeUpdater?: object;
    private controller;
    private __cacheKey: SynchedPropertySimpleOneWayPU<string>;
    get cacheKey() {
        return this.__cacheKey.get();
    }
    set cacheKey(newValue: string) {
        this.__cacheKey.set(newValue);
    }
    private __text: SynchedPropertySimpleOneWayPU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    private __textAreaComponentHeight: SynchedPropertySimpleOneWayPU<number | string>;
    get textAreaComponentHeight() {
        return this.__textAreaComponentHeight.get();
    }
    set textAreaComponentHeight(newValue: number | string) {
        this.__textAreaComponentHeight.set(newValue);
    }
    private __placeholder: SynchedPropertySimpleOneWayPU<string>;
    get placeholder() {
        return this.__placeholder.get();
    }
    set placeholder(newValue: string) {
        this.__placeholder.set(newValue);
    }
    private __disabled: SynchedPropertySimpleOneWayPU<boolean>;
    get disabled() {
        return this.__disabled.get();
    }
    set disabled(newValue: boolean) {
        this.__disabled.set(newValue);
    }
    private __adjustPosition: SynchedPropertySimpleOneWayPU<boolean>;
    get adjustPosition() {
        return this.__adjustPosition.get();
    }
    set adjustPosition(newValue: boolean) {
        this.__adjustPosition.set(newValue);
    }
    private __cacheBorderColor: SynchedPropertySimpleOneWayPU<EdgeColors>;
    get cacheBorderColor() {
        return this.__cacheBorderColor.get();
    }
    set cacheBorderColor(newValue: EdgeColors) {
        this.__cacheBorderColor.set(newValue);
    }
    private __cachePlaceholderFont: SynchedPropertySimpleOneWayPU<Font>;
    get cachePlaceholderFont() {
        return this.__cachePlaceholderFont.get();
    }
    set cachePlaceholderFont(newValue: Font) {
        this.__cachePlaceholderFont.set(newValue);
    }
    private __cachePlaceholderColor: SynchedPropertySimpleOneWayPU<ResourceColor>;
    get cachePlaceholderColor() {
        return this.__cachePlaceholderColor.get();
    }
    set cachePlaceholderColor(newValue: ResourceColor) {
        this.__cachePlaceholderColor.set(newValue);
    }
    private __cacheMaxLength: SynchedPropertySimpleOneWayPU<number>;
    get cacheMaxLength() {
        return this.__cacheMaxLength.get();
    }
    set cacheMaxLength(newValue: number) {
        this.__cacheMaxLength.set(newValue);
    }
    private __cacheConfirmType: SynchedPropertySimpleOneWayPU<EnterKeyType>;
    get cacheConfirmType() {
        return this.__cacheConfirmType.get();
    }
    set cacheConfirmType(newValue: EnterKeyType) {
        this.__cacheConfirmType.set(newValue);
    }
    private __cacheCaretColor: SynchedPropertySimpleOneWayPU<ResourceColor>;
    get cacheCaretColor() {
        return this.__cacheCaretColor.get();
    }
    set cacheCaretColor(newValue: ResourceColor) {
        this.__cacheCaretColor.set(newValue);
    }
    private __cacheCaretStyle: SynchedPropertySimpleOneWayPU<CaretStyle>;
    get cacheCaretStyle() {
        return this.__cacheCaretStyle.get();
    }
    set cacheCaretStyle(newValue: CaretStyle) {
        this.__cacheCaretStyle.set(newValue);
    }
    private __cacheInputMode: SynchedPropertySimpleOneWayPU<TextAreaType>;
    get cacheInputMode() {
        return this.__cacheInputMode.get();
    }
    set cacheInputMode(newValue: TextAreaType) {
        this.__cacheInputMode.set(newValue);
    }
    private __cachePadding: SynchedPropertySimpleOneWayPU<Padding>;
    get cachePadding() {
        return this.__cachePadding.get();
    }
    set cachePadding(newValue: Padding) {
        this.__cachePadding.set(newValue);
    }
    private __autoHeight: SynchedPropertySimpleOneWayPU<boolean>;
    get autoHeight() {
        return this.__autoHeight.get();
    }
    set autoHeight(newValue: boolean) {
        this.__autoHeight.set(newValue);
    }
    private handleInput?: (event: InputEvent) => void;
    private handleFocus?: () => void;
    private handleBlur?: () => void;
    private handleConfirm?: (enterKey: EnterKeyType, event: SubmitEvent) => void;
    private handleEditChange?: (isEditing: boolean) => void;
    private handleAttach?: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ text: this.text, placeholder: this.placeholder, controller: this.controller });
            TextArea.attributeModifier.bind(this)(this.attributeUpdater);
            TextArea.key(this.cacheKey);
            TextArea.height(this.textAreaComponentHeight);
            TextArea.enabled(!this.disabled);
            TextArea.padding(ObservedObject.GetRawObject(this.cachePadding));
            TextArea.borderColor(ObservedObject.GetRawObject(this.cacheBorderColor));
            TextArea.placeholderFont(ObservedObject.GetRawObject(this.cachePlaceholderFont));
            TextArea.placeholderColor(ObservedObject.GetRawObject(this.cachePlaceholderColor));
            TextArea.maxLength(this.cacheMaxLength);
            TextArea.enterKeyType(this.cacheConfirmType);
            TextArea.caretColor(ObservedObject.GetRawObject(this.cacheCaretColor));
            TextArea.caretStyle(ObservedObject.GetRawObject(this.cacheCaretStyle));
            TextArea.type(this.cacheInputMode);
            TextArea.barState(this.autoHeight ? BarState.Off : BarState.Auto);
            TextArea.onChange((value: string, previewText?: PreviewText, opt?: TextChangeOptions) => {
                this.text = value;
                this.handleInput?.({ detail: { value, cursor: opt?.rangeAfter?.end || null } });
            });
            TextArea.onFocus(() => {
                this.getUIContext()!.setKeyboardAvoidMode(this.adjustPosition ? 0 : 4);
                this.handleFocus?.();
            });
            TextArea.onBlur(() => {
                this.getUIContext()!.setKeyboardAvoidMode(0);
                this.handleBlur?.();
            });
            TextArea.onSubmit((enterKey: EnterKeyType, event: SubmitEvent) => {
                if (enterKey !== EnterKeyType.NEW_LINE) {
                    this.handleConfirm?.(enterKey, event);
                }
            });
            TextArea.onEditChange((isEditing: boolean) => {
                this.handleEditChange?.(isEditing);
            });
            TextArea.onAttach(() => {
                this.handleAttach?.();
            });
        }, TextArea);
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
