import { BuilderNode, UIContext, KeyboardAvoidMode, window, ComponentContent } from "@kit.ArkUI";
import { TextareaBuilder, UniTextareaOptions, UniTextareaPadding } from "./textarea";
import { UniElement, UTSObject, UniCustomEventOptions, UniCustomEvent, UniNativeViewElement, UTS, UniViewElementImpl, UTSJSONObject } from "@dcloudio/uni-app-framework";
import { UniInputOptions, wrapBuilderCustomKeyboard, InputBuilder } from "./input";
import { deviceInfo } from '@kit.BasicServicesKit';
import { getCurrentMP, toUniNativeColor } from "@dcloudio/uni-app-framework";
const INPUT_TYPES = new Map<string, InputType>([
    [
        'text',
        InputType.Normal
    ],
    [
        'number',
        InputType.Number
    ],
    [
        'digit',
        InputType.NUMBER_DECIMAL
    ],
    [
        'tel',
        InputType.PhoneNumber
    ],
    [
        'password',
        InputType.Password
    ],
    [
        'safe-password',
        InputType.Password
    ],
    [
        'email',
        InputType.Email
    ],
    [
        'url',
        InputType.URL
    ]
]);
const CONFIRM_TYPES = new Map<string, EnterKeyType>([
    [
        'return',
        EnterKeyType.NEW_LINE
    ],
    [
        'send',
        EnterKeyType.Send
    ],
    [
        'search',
        EnterKeyType.Search
    ],
    [
        'next',
        EnterKeyType.Next
    ],
    [
        'go',
        EnterKeyType.Go
    ],
    [
        'done',
        EnterKeyType.Done
    ]
]);
interface SelectionData {
    start: number;
    end: number;
}
interface ScrollAdjustRecord {
    element: UniElement;
    originScrollTop: number;
    adjustedScrollTop: number;
}
interface NativeTextareaInitOptions {
    autoHeight: boolean | string;
    value: string;
    fontSize?: string;
    lineHeight?: string;
    padding?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    minHeight?: string;
    maxHeight?: string;
}
class InputEventDetail extends UTSObject {
    value!: string;
    cursor!: number;
}
class UniInputEventEvent extends UniCustomEvent<InputEventDetail> {
    constructor(detail: InputEventDetail){
        super('input', {
            detail
        } as UniCustomEventOptions<InputEventDetail>);
    }
}
class FocusEventDetail extends UTSObject {
    height!: number;
    value!: string;
}
class UniFocusEventEvent extends UniCustomEvent<FocusEventDetail> {
    constructor(detail: FocusEventDetail){
        super('focus', {
            detail
        } as UniCustomEventOptions<FocusEventDetail>);
    }
}
type BlurEventDetail = InputEventDetail;
class UniBlurEventEvent extends UniCustomEvent<BlurEventDetail> {
    constructor(detail: BlurEventDetail){
        super('blur', {
            detail
        } as UniCustomEventOptions<BlurEventDetail>);
    }
}
class KeyboardHeightChangeEventDetail extends UTSObject {
    height!: number;
    duration!: number;
}
class UniKeyboardHeightChangeEventEvent extends UniCustomEvent<KeyboardHeightChangeEventDetail> {
    constructor(detail: KeyboardHeightChangeEventDetail){
        super('keyboardheightchange', {
            detail
        } as UniCustomEventOptions<KeyboardHeightChangeEventDetail>);
    }
}
class ChangeEventDetail extends UTSObject {
    value!: string;
}
class UniChangeEventEvent extends UniCustomEvent<ChangeEventDetail> {
    constructor(detail: ChangeEventDetail){
        super('change', {
            detail
        } as UniCustomEventOptions<ChangeEventDetail>);
    }
}
type ConfirmEventDetail = ChangeEventDetail;
class UniConfirmEventEvent extends UniCustomEvent<ConfirmEventDetail> {
    constructor(detail: ConfirmEventDetail){
        super('confirm', {
            detail
        } as UniCustomEventOptions<ConfirmEventDetail>);
    }
}
class LineChangeEventDetail extends UTSObject {
    lineCount!: number;
    height!: number;
}
type InputEvent = (e: ESObject) => void;
function translateColor(color: string): string {
    if (color.startsWith('#') && color.length == 9) {
        return `${color.substring(0, 1)}${color.substring(color.length - 2)}${color.substring(1, color.length - 2)}`;
    }
    return color;
}
function isEmptyStyleValue(value: string | null = null): boolean {
    return value == null || value == '';
}
function isPixelStyleValue(value: string | null = null): boolean {
    return value != null && value.endsWith('px');
}
function parsePixelStyleValue(value: string | null = null): number | null {
    if (value == null) {
        return null;
    }
    const normalizedValue = value.trim();
    if (normalizedValue == '') {
        return null;
    }
    if (normalizedValue.endsWith('px')) {
        const pixelValue = parseFloat(normalizedValue);
        return isNaN(pixelValue) ? null : pixelValue;
    }
    const numberValue = parseFloat(normalizedValue);
    return isNaN(numberValue) ? null : numberValue;
}
function normalizePaddingValue(value: string | null = null): string | null {
    const pixelValue = parsePixelStyleValue(value);
    if (pixelValue == null) {
        return null;
    }
    return `${Math.max(0, pixelValue)}vp`;
}
type DispatchInput = (value: string, cursor?: number) => void;
interface UniInputFileOptions {
    key: string;
    value: string;
    placeholder: string;
    confirmHold?: boolean;
    enabled?: boolean;
    maxLength?: number;
    handleMountedFocus?: Function;
    dispatchInput?: DispatchInput;
    handleFocus?: Function;
    handleBlur?: Function;
    dispatchConfirm?: Function;
    enterKeyType?: EnterKeyType;
    fontSize?: string;
    color?: string;
    letterSpacing?: string;
    fontWeight?: FontWeight;
    fontFamily?: string;
    fontStyle?: FontStyle;
    textAlign?: TextAlign;
    caretColor?: ResourceColor;
}
interface EventHandlers {
    inputEvent: InputEvent;
    focusEvent: InputEvent;
    blurEvent: InputEvent;
    keyboardHeightChangeEvent: InputEvent;
    changeEvent: InputEvent;
    confirmEvent: InputEvent;
    lineChangeEvent?: InputEvent | null;
}
class NativeInputFileView {
    protected element: UniNativeViewElement;
    protected harmonyBuilderNode: BuilderNode<[UniTextareaOptions]> | BuilderNode<[UniInputOptions]> | null = null;
    protected uiContext: UIContext | null = null;
    protected value = '';
    protected params: UniInputFileOptions = {
        key: '',
        value: '',
        placeholder: '',
        confirmHold: false,
        handleMountedFocus: this.handleMountedFocus.bind(this),
        dispatchInput: this.dispatchInput.bind(this),
        handleFocus: this.handleFocus.bind(this),
        handleBlur: this.handleBlur.bind(this),
        dispatchConfirm: this.dispatchConfirm.bind(this)
    };
    protected cursor = -1;
    protected autoFocus = false;
    protected isFocusing = false;
    protected needFocusWhenMounted = false;
    protected selection: SelectionData = {
        start: -1,
        end: -1
    };
    protected holdKeyboard = false;
    protected adjustPosition = false;
    protected mounted = false;
    protected inputEvent: InputEvent | null = null;
    protected focusEvent: InputEvent | null = null;
    protected blurEvent: InputEvent | null = null;
    protected keyboardHeightChangeEvent: InputEvent | null = null;
    protected changeEvent: InputEvent | null = null;
    protected confirmEvent: InputEvent | null = null;
    protected currentWindow: window.Window | null = null;
    protected keyboardHeight = 0;
    protected defaultFontSize: number = 16;
    protected keyboardAnimationDuration: number = 350;
    protected preTextValue: string = '';
    protected triggerFocusTimer: number | null = null;
    protected updateSelectionTimer: number | null = null;
    protected updateCursorTimer: number | null = null;
    protected dispatchBlurTimer: number | null = null;
    protected rollAbleParents: UniElement[] = [];
    protected pageRootElement: UniElement | null = null;
    protected resetElementPositionWhenBlur: () => void = ()=>{};
    constructor(element: UniNativeViewElement, eventHandlers: EventHandlers){
        this.element = element;
        this.params.key = `${element.getNodeId()}`;
        this.inputEvent = eventHandlers.inputEvent;
        this.focusEvent = eventHandlers.focusEvent;
        this.blurEvent = eventHandlers.blurEvent;
        this.keyboardHeightChangeEvent = eventHandlers.keyboardHeightChangeEvent;
        this.changeEvent = eventHandlers.changeEvent;
        this.confirmEvent = eventHandlers.confirmEvent;
        this.updateParams();
    }
    updateParams() {}
    protected resolveCursorPosition(value: number): number {
        if (value < 0) {
            return (this.params.value ?? this.value).length;
        }
        return value;
    }
    protected getCurrentCursorPosition(): number {
        return this.cursor;
    }
    updateDisabled(value: boolean) {
        this.params.enabled = !value;
        this.updateParams();
    }
    updateCursorSpacing(value: number) {}
    updateMaxLength(value: number) {
        this.params.maxLength = value;
        this.updateParams();
    }
    updateFocus(value: boolean) {
        if (value && !this.isFocusing) {
            if (!this.mounted) {
                this.needFocusWhenMounted = true;
                return;
            }
            this.triggerFocus();
        } else {
            if (this.isFocusing) {
                this.triggerBlur();
            }
        }
    }
    triggerFocus() {
        this.preTextValue = this.value;
        if (!this.mounted) {
            this.needFocusWhenMounted = true;
            return;
        }
        const uiContext = this.getUIContext();
        if (!uiContext) return;
        this.isFocusing = true;
        uiContext.getFocusController().requestFocus(this.params.key);
        if (this.updateSelectionTimer != null) {
            clearTimeout(this.updateSelectionTimer);
        }
    }
    updateCursorColor(value: string) {
        this.params.caretColor = toUniNativeColor(null, value, this.params.caretColor);
        this.updateParams();
    }
    updateAutoFocus(value: boolean) {
        this.autoFocus = value;
    }
    updateLetterSpacing(value: string | null = null) {
        if (!isPixelStyleValue(value)) {
            if (this.params.letterSpacing != null) {
                this.params.letterSpacing = undefined;
                this.updateParams();
            }
            return;
        }
        const newValue = `${parseInt(value!)}vp`;
        if (this.params.letterSpacing != newValue) {
            this.params.letterSpacing = newValue;
            this.updateParams();
        }
    }
    updateFontWeight(value: string | null = null) {
        let newValue = FontWeight.Normal;
        switch(value){
            case 'bold':
            case '700':
            case '800':
            case '900':
                newValue = FontWeight.Bold;
                break;
            case 'lighter':
                newValue = FontWeight.Lighter;
                break;
            case 'bolder':
                newValue = FontWeight.Bolder;
                break;
        }
        if (this.params.fontWeight != newValue) {
            this.params.fontWeight = newValue;
            this.updateParams();
        }
    }
    updateFontStyle(value: string | null = null) {
        let newValue = FontStyle.Normal;
        if (value == 'italic') {
            newValue = FontStyle.Italic;
        }
        if (this.params.fontStyle != newValue) {
            this.params.fontStyle = newValue;
            this.updateParams();
        }
    }
    updateFontFamily(value: string | null = null) {
        const newValue = isEmptyStyleValue(value) ? undefined : value as string;
        if (this.params.fontFamily != newValue) {
            this.params.fontFamily = newValue;
            this.updateParams();
        }
    }
    updateTextAlign(value: string | null = null) {
        let newValue = TextAlign.Start;
        switch(value){
            case 'right':
                newValue = TextAlign.End;
                break;
            case 'center':
                newValue = TextAlign.Center;
                break;
        }
        if (this.params.textAlign != newValue) {
            this.params.textAlign = newValue;
            this.updateParams();
        }
    }
    getUIContext() {
        if (this.uiContext) return this.uiContext;
        const mainWindow = getCurrentMP().window;
        if (!mainWindow) return;
        const uiContext = mainWindow.getUIContext();
        if (!uiContext) return;
        this.uiContext = uiContext;
        return this.uiContext;
    }
    handleMountedFocus() {
        this.mounted = true;
        this.collectScrollAbleParents();
        window.getLastWindow(getContext(this.harmonyBuilderNode)).then((currentWindow)=>{
            this.currentWindow = currentWindow;
            currentWindow.on('keyboardHeightChange', this.dispatchKeyboardHeightChange.bind(this));
        });
        if (this.needFocusWhenMounted || this.autoFocus) {
            this.triggerFocus();
        }
    }
    triggerBlur() {
        try {
            const uiContext = this.getUIContext();
            if (!uiContext) return;
            const cursor = this.getCurrentCursorPosition();
            uiContext.getFocusController().clearFocus();
            this.dispatchBlur(this.value, cursor);
        } catch (e) {
            UTS.console.error(e.message);
        }
    }
    updateConfirmHold(value: boolean) {
        this.params.confirmHold = value;
        this.updateParams();
    }
    updateSelectionStart(value: number) {
        this.selection.start = value;
    }
    updateSelectionEnd(value: number) {
        this.selection.end = value;
    }
    updateAdjustPosition(value: boolean) {
        this.adjustPosition = value;
    }
    updateHoldKeyboard(value: boolean) {
        this.holdKeyboard = value;
    }
    updateColor(value: string | null = null) {
        if (isEmptyStyleValue(value)) {
            if (this.params.color != null) {
                this.params.color = undefined;
                this.updateParams();
            }
            return;
        }
        const _value = translateColor(value!);
        if (this.params.color != _value) {
            this.params.color = _value;
            this.updateParams();
        }
    }
    handleBlur() {
        if (!this.isFocusing) return;
        const uiContext = this.getUIContext();
        if (!uiContext) return;
        uiContext.setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET);
        this.dispatchBlur(this.value, this.getCurrentCursorPosition());
    }
    updateInputEvent(event: InputEvent) {
        this.inputEvent = event;
    }
    dispatchInput(value: string, cursor: number | null = null) {
        this.value = value;
        this.params.value = value;
        if (cursor != null) {
            this.cursor = cursor;
        }
    }
    updateFocusEvent(event: InputEvent) {
        this.focusEvent = event;
    }
    handleFocus() {
        this.isFocusing = true;
        this.preTextValue = this.value;
        this.dispatchFocus(this.keyboardHeight, this.value);
        const uiContext = this.getUIContext();
        if (!uiContext) return;
        uiContext.setKeyboardAvoidMode(KeyboardAvoidMode.NONE);
    }
    dispatchFocus(height: number, value: string) {
        this.focusEvent?.(new UniFocusEventEvent({
            height,
            value
        } as FocusEventDetail));
    }
    updateBlurEvent(event: InputEvent) {
        this.blurEvent = event;
    }
    dispatchBlur(value: string, cursor: number) {
        this.dispatchChange();
        this.blurEvent?.(new UniBlurEventEvent({
            value,
            cursor
        } as BlurEventDetail));
        if (this.dispatchBlurTimer != null) {
            clearTimeout(this.dispatchBlurTimer);
        }
        this.resetElementPositionWhenBlur();
        this.dispatchBlurTimer = setTimeout(()=>{
            this.isFocusing = false;
        }, this.keyboardAnimationDuration);
    }
    updateKeyboardHeightChangeEvent(event: InputEvent) {
        this.keyboardHeightChangeEvent = event;
    }
    dispatchKeyboardHeightChange(height: number) {
        if (!this.isFocusing) return;
        const _height = px2vp(height);
        this.keyboardHeight = _height;
        this.keyboardHeightChangeEvent?.(new UniKeyboardHeightChangeEventEvent({
            height: _height,
            duration: 0
        } as KeyboardHeightChangeEventDetail));
        this.handleElementPositionWhenFocus();
    }
    handleElementPositionWhenFocus() {
        if (!this.adjustPosition) return;
        const windowHeight = this.element.uniPage.pageBody.height;
        const boundingClientRect = this.element.getBoundingClientRect();
        const elementHeight = boundingClientRect.height;
        const elementToBottomDistance = windowHeight - boundingClientRect.y - elementHeight;
        let needMoreScrollDistance = this.keyboardHeight - elementToBottomDistance;
        if (needMoreScrollDistance <= 0) return;
        const scrollAdjustRecords: ScrollAdjustRecord[] = [];
        let lastRollAbleParentPaddingBottom = "-1px";
        let changedBodyPosition = false;
        if (this.rollAbleParents.length > 0) {
            const lastRollAbleParent = this.rollAbleParents[this.rollAbleParents.length - 1];
            const lastRollAbleParentBoundingClientRect = lastRollAbleParent.getBoundingClientRect();
            if (windowHeight - lastRollAbleParentBoundingClientRect.y - elementHeight >= this.keyboardHeight) {
                let currentParentElement: UniElement;
                for(let i = 0; i < this.rollAbleParents.length; i++){
                    currentParentElement = this.rollAbleParents[i];
                    const parentScrollHeight = currentParentElement.scrollHeight;
                    const parentScrollTop = currentParentElement.scrollTop;
                    const parentHeight = currentParentElement.getBoundingClientRect().height;
                    const canMoreScrollDistance = parentScrollHeight - parentScrollTop - parentHeight;
                    if (canMoreScrollDistance > 0) {
                        const shouldScrollDistance = canMoreScrollDistance > needMoreScrollDistance ? needMoreScrollDistance : canMoreScrollDistance;
                        const adjustedScrollTop = parentScrollTop + shouldScrollDistance;
                        scrollAdjustRecords.push({
                            element: currentParentElement,
                            originScrollTop: parentScrollTop,
                            adjustedScrollTop
                        } as ScrollAdjustRecord);
                        currentParentElement.scrollTo(currentParentElement.scrollLeft, adjustedScrollTop);
                        needMoreScrollDistance -= shouldScrollDistance;
                        if (needMoreScrollDistance === 0) break;
                    }
                    if (i === this.rollAbleParents.length - 1 && needMoreScrollDistance > 0) {
                        lastRollAbleParentPaddingBottom = lastRollAbleParent.style.getPropertyValue('paddingBottom');
                        lastRollAbleParent.style.setProperty("paddingBottom", `${parseInt(lastRollAbleParentPaddingBottom) + needMoreScrollDistance}px`);
                    }
                }
            }
        }
        if (needMoreScrollDistance > 0) {
            changedBodyPosition = true;
            const pageRootElement = this.getPageRootElement();
            pageRootElement?.style.setProperty("transform", `translateY(-${needMoreScrollDistance})`);
        }
        this.resetElementPositionWhenBlur = ()=>{
            if (scrollAdjustRecords.length > 0) {
                const SCROLL_TOP_EPSILON = 1;
                const hasUserScrolled = scrollAdjustRecords.some((record: ScrollAdjustRecord): boolean =>{
                    return Math.abs(record.element.scrollTop - record.adjustedScrollTop) > SCROLL_TOP_EPSILON;
                });
                if (!hasUserScrolled) {
                    for(let i = 0; i < scrollAdjustRecords.length; i++){
                        const record = scrollAdjustRecords[i];
                        record.element.scrollTo(record.element.scrollLeft, record.originScrollTop);
                    }
                }
                scrollAdjustRecords.length = 0;
            }
            if (lastRollAbleParentPaddingBottom !== "-1px") {
                const lastRollAbleParent = this.rollAbleParents[this.rollAbleParents.length - 1];
                lastRollAbleParent.style.setProperty("padding-bottom", `${lastRollAbleParentPaddingBottom}px`);
            }
            if (changedBodyPosition) {
                const pageRootElement = this.getPageRootElement();
                pageRootElement?.style.setProperty("transform", `translateY(0)`);
            }
        };
    }
    getPageRootElement(): UniElement {
        if (this.pageRootElement !== null) return this.pageRootElement;
        let rootElement = this.element.parentElement;
        while(rootElement?.parentElement != null){
            rootElement = rootElement.parentElement;
        }
        this.pageRootElement = rootElement!;
        return this.pageRootElement;
    }
    collectScrollAbleParents() {
        let currentParent = this.element.parentElement;
        while(currentParent != null){
            if (this.isScrollAbleElement(currentParent)) {
                this.rollAbleParents.push(currentParent);
            }
            currentParent = currentParent.parentElement;
        }
    }
    isScrollAbleElement(el: UniElement): boolean {
        return el.tagName === 'SCROLL-VIEW' || el.tagName === 'LIST-VIEW' || el.tagName === 'WEB-VIEW' || (el.tagName === 'PAGE' && el instanceof UniViewElementImpl === false);
    }
    updateChangeEvent(event: InputEvent) {
        this.changeEvent = event;
    }
    dispatchChange() {
        if (this.value !== this.preTextValue) {
            this.changeEvent?.(new UniChangeEventEvent({
                value: this.value
            } as ChangeEventDetail));
        }
    }
    updateConfirmEvent(event: InputEvent) {
        this.confirmEvent = event;
    }
    dispatchConfirm(value: string) {
        this.confirmEvent?.(new UniConfirmEventEvent({
            value
        } as ConfirmEventDetail));
    }
    handlePageTouchEndFocus() {
        if (!this.holdKeyboard && this.isFocusing) {
            this.getUIContext()?.getFocusController().clearFocus();
        }
    }
    destroy() {
        if (this.triggerFocusTimer != null) {
            clearTimeout(this.triggerFocusTimer);
        }
        if (this.updateSelectionTimer != null) {
            clearTimeout(this.updateSelectionTimer);
        }
        if (this.updateCursorTimer != null) {
            clearTimeout(this.updateCursorTimer);
        }
        if (this.dispatchBlurTimer != null) {
            clearTimeout(this.dispatchBlurTimer);
        }
        this.harmonyBuilderNode = null;
        this.uiContext = null;
        this.inputEvent = null;
        this.focusEvent = null;
        this.blurEvent = null;
        this.keyboardHeightChangeEvent = null;
        this.changeEvent = null;
        this.confirmEvent = null;
        this.currentWindow = null;
    }
}
class NativeInputView extends NativeInputFileView {
    private controller = new TextInputController();
    private _params: UniInputOptions = UTSJSONObject.assign(new UTSJSONObject({}), this.params, new UTSJSONObject({
        controller: this.controller,
        height: '24vp',
        customKeyboard: undefined
    }));
    private propsType: string = 'text';
    private lineHeight: number | null = null;
    private fontSize: number | null = null;
    private defaultInputHeight = 24;
    private isPassword = false;
    constructor(element: UniNativeViewElement, eventHandlers: EventHandlers){
        super(element, eventHandlers);
        this.bindView();
    }
    updateParams() {
        this._params = UTSJSONObject.assign(new UTSJSONObject({}), this._params, this.params);
        this.harmonyBuilderNode?.update(this._params);
    }
    private bindView() {
        this.element.bindHarmonyWrappedBuilder(wrapBuilder<[UniInputOptions]>(InputBuilder), this._params);
        this.harmonyBuilderNode = (this.element as ESObject).getHarmonyComponentContent();
    }
    private updateSelection() {
        if (this.selection.end !== -1 && this.selection.end >= this.selection.start) {
            this.controller.setTextSelection(this.selection.start, this.selection.end);
            this.cursor = this.selection.end;
        } else if (this.params.value!.length > 0) {
            const cursor = this.resolveCursorPosition(-1);
            this._params.caretPosition = cursor;
            this.cursor = cursor;
            this.updateParams();
        }
    }
    updateValue(value: string) {
        this.value = value;
        this.params.value = value;
        this.updateParams();
        if (this.mounted && this.isFocusing) {
            this.updateSelection();
        }
    }
    handleFocus() {
        super.handleFocus();
        const positionInfo = this.controller.getCaretOffset();
        this._params.caretPosition = positionInfo.index;
        this.cursor = positionInfo.index;
    }
    protected getCurrentCursorPosition(): number {
        try {
            const positionInfo = this.controller.getCaretOffset();
            this.cursor = positionInfo.index;
        } catch (e) {
            return this.cursor;
        }
        return this.cursor;
    }
    updateType(value: string) {
        if (value === 'none' || UTS.mapGet(INPUT_TYPES, value) !== null) {
            this.propsType = value;
            if (this.isPassword) {
                return;
            }
            if (value === 'none') {
                if (deviceInfo.sdkApiVersion >= 22) {
                    const uiContext = this.getUIContext();
                    if (uiContext) {
                        this._params.customKeyboard = new ComponentContent(uiContext, wrapBuilderCustomKeyboard);
                        this.updateParams();
                    }
                }
                return;
            }
            this._params.customKeyboard = undefined;
            this._params.type = UTS.mapGet(INPUT_TYPES, value)!;
            this.updateParams();
        }
    }
    updatePassword(value: boolean) {
        this.isPassword = value;
        const type = this.isPassword ? 'password' : this.propsType;
        this._params.type = UTS.mapGet(INPUT_TYPES, type)!;
        this.updateParams();
    }
    triggerFocus() {
        super.triggerFocus();
        this.updateSelectionTimer = setTimeout(()=>{
            this.updateSelection();
        }, 0);
    }
    updateConfirmType(value: string) {
        if (this._params.type != UTS.mapGet(INPUT_TYPES, 'text')) return;
        const type = UTS.mapGet(CONFIRM_TYPES, value);
        if (type !== null) {
            this.params.enterKeyType = type;
            this.updateParams();
        }
    }
    updateCursor(value: number) {
        if (this.updateCursorTimer != null) {
            clearTimeout(this.updateCursorTimer);
        }
        this.updateCursorTimer = setTimeout(()=>{
            const cursor = this.resolveCursorPosition(value);
            this._params.caretPosition = cursor;
            this.cursor = cursor;
            this.updateParams();
        }, 0);
    }
    private updateTextInputHeight() {
        const newHeight = `${Math.max(this.defaultInputHeight, this.fontSize ?? 0, this.lineHeight ?? 0)}vp`;
        if (this._params.height != newHeight) {
            this._params.height = newHeight;
            this.updateParams();
        }
    }
    updateFontSize(value: string | null = null) {
        if (!isPixelStyleValue(value)) {
            if (this.fontSize == null && this.params.fontSize == null) return;
            this.fontSize = null;
            this.params.fontSize = undefined;
            this.updateParams();
            this.updateTextInputHeight();
            return;
        }
        const _value = parseInt(value!);
        if (this.fontSize == _value) return;
        this.fontSize = _value;
        const newValue = `${this.fontSize}vp`;
        if (this.params.fontSize != newValue) {
            this.params.fontSize = newValue;
            this.updateParams();
        }
        this.updateTextInputHeight();
    }
    updateLineHeight(value: string | null = null) {
        if (isEmptyStyleValue(value)) {
            if (this.lineHeight == null) return;
            this.lineHeight = null;
            this.updateTextInputHeight();
            return;
        }
        let newLineHeight: number | null = null;
        if (value!.endsWith('px')) {
            newLineHeight = parseInt(value!);
        } else if (!isNaN(Number(value)) || value!.endsWith('em')) {
            newLineHeight = parseFloat(value!) * (this.fontSize == null ? this.defaultFontSize : this.fontSize);
        }
        if (newLineHeight == null) {
            if (this.lineHeight != null) {
                this.lineHeight = null;
                this.updateTextInputHeight();
            }
            return;
        }
        if (newLineHeight != null && this.lineHeight != newLineHeight) {
            this.lineHeight = newLineHeight;
            this.updateTextInputHeight();
        }
    }
    dispatchInput(value: string, cursor: number | null = null) {
        super.dispatchInput(value, cursor);
        if (!this.isFocusing) return;
        this.inputEvent?.(new UniInputEventEvent({
            value,
            cursor
        } as InputEventDetail));
    }
}
class NativeTextareaView extends NativeInputFileView {
    private controller = new TextAreaController();
    private defaultHeight = 150;
    private _params: UniTextareaOptions = UTSJSONObject.assign(new UTSJSONObject({}), this.params, new UTSJSONObject({
        controller: this.controller,
        autoHeight: false,
        height: this.defaultHeight,
        padding: {
            top: '0vp',
            right: '0vp',
            bottom: '0vp',
            left: '0vp'
        } as UniTextareaPadding
    }));
    private autoHeight = false;
    private lineCount: number = 0;
    private textRectHeight: number = 0;
    private lineChangeEvent: InputEvent | null = null;
    private textareaHeight: number = this.defaultHeight;
    private calcTextAreaMinHeight: number = -1;
    private calculatedHeight: number = 0;
    private minHeight = -1;
    private maxHeight = -1;
    private paddingTop = 0;
    private paddingRight = 0;
    private paddingBottom = 0;
    private paddingLeft = 0;
    private calcHeightTimer: number | null = null;
    constructor(element: UniNativeViewElement, options: NativeTextareaInitOptions | null = null, eventHandlers: EventHandlers){
        super(element, eventHandlers);
        this.lineChangeEvent = eventHandlers.lineChangeEvent!;
        const autoHeight = this.isAutoHeightEnabled(options?.autoHeight);
        const value = options?.value ?? '';
        this.value = value;
        this.params.value = value;
        this._params.value = value;
        this.autoHeight = autoHeight;
        this._params.autoHeight = autoHeight;
        if (autoHeight) {
            this.initEstimatedHeightLimits(options);
            this.initEstimatedPadding(options);
            const initialAutoHeight = this.getEstimatedAutoHeight(value, options);
            this._params.height = initialAutoHeight;
            this.element.style.setProperty('height', `${initialAutoHeight}px`);
        }
        this.bindView();
        this.initCalcTextAreaMinHeight();
    }
    updateParams() {
        this._params = UTSJSONObject.assign(new UTSJSONObject({}), this._params, this.params);
        this.harmonyBuilderNode?.update(this._params);
    }
    private bindView() {
        this.element.bindHarmonyWrappedBuilder(wrapBuilder<[UniTextareaOptions]>(TextareaBuilder), this._params);
        this.harmonyBuilderNode = (this.element as ESObject).getHarmonyComponentContent();
    }
    updateValue(value: string) {
        if (this.value == value && this.params.value == value && this._params.value == value) return;
        this.value = value;
        this.params.value = value;
        this.updateParams();
        if (this.autoHeight) {
            this.calcHeight();
        }
    }
    updateAutoHeight(value: boolean | string) {
        this.autoHeight = this.isAutoHeightEnabled(value);
        this._params.autoHeight = this.autoHeight;
        if (this.autoHeight) {
            this.calcHeight();
        } else {
            this.resetHeight();
        }
    }
    private isAutoHeightEnabled(value: boolean | string | null | undefined): boolean {
        return value === true || value === 'true';
    }
    private getInitStyleValue(value: string | null | undefined, propertyName: string, fallbackPropertyName: string): string {
        if (value != null && value != '') {
            return value;
        }
        const styleValue = this.element.style.getPropertyValue(propertyName);
        if (styleValue != '') {
            return styleValue;
        }
        return this.element.style.getPropertyValue(fallbackPropertyName);
    }
    private initEstimatedHeightLimits(options: NativeTextareaInitOptions | null) {
        this.minHeight = parsePixelStyleValue(this.getInitStyleValue(options?.minHeight, 'minHeight', 'min-height')) ?? this.minHeight;
        this.maxHeight = parsePixelStyleValue(this.getInitStyleValue(options?.maxHeight, 'maxHeight', 'max-height')) ?? this.maxHeight;
    }
    private initEstimatedPadding(options: NativeTextareaInitOptions | null) {
        const paddingTop = this.getInitStyleValue(options?.paddingTop, 'paddingTop', 'padding-top');
        const paddingRight = this.getInitStyleValue(options?.paddingRight, 'paddingRight', 'padding-right');
        const paddingBottom = this.getInitStyleValue(options?.paddingBottom, 'paddingBottom', 'padding-bottom');
        const paddingLeft = this.getInitStyleValue(options?.paddingLeft, 'paddingLeft', 'padding-left');
        const estimatedPadding = this.resolvePadding(paddingTop, paddingRight, paddingBottom, paddingLeft);
        this.paddingTop = parseFloat(estimatedPadding.top);
        this.paddingRight = parseFloat(estimatedPadding.right);
        this.paddingBottom = parseFloat(estimatedPadding.bottom);
        this.paddingLeft = parseFloat(estimatedPadding.left);
        this._params.padding = estimatedPadding;
    }
    private getEstimatedAutoHeight(value: string, options: NativeTextareaInitOptions | null): number {
        const fontSize = parsePixelStyleValue(this.getInitStyleValue(options?.fontSize, 'fontSize', 'font-size')) ?? this.defaultFontSize;
        const styleLineHeight = this.getInitStyleValue(options?.lineHeight, 'lineHeight', 'line-height');
        const lineHeight = this.parseLineHeight(styleLineHeight, fontSize) ?? Math.round(fontSize * 1.2);
        const verticalPadding = this.paddingTop + this.paddingBottom;
        const lineCount = Math.max(1, value.split('\n').length);
        let height = Math.max(fontSize, lineHeight) * lineCount + verticalPadding;
        if (this.minHeight >= 0 && height < this.minHeight) {
            height = this.minHeight;
        }
        if (this.maxHeight >= 0 && height > this.maxHeight) {
            height = this.maxHeight;
        }
        return Math.max(1, Math.round(height));
    }
    private parseLineHeight(value: string | null | undefined, fontSize: number): number | null {
        if (isEmptyStyleValue(value)) {
            return null;
        }
        if (value!.endsWith('px')) {
            return parsePixelStyleValue(value!);
        }
        if (value!.endsWith('em')) {
            const emValue = parseFloat(value!);
            return isNaN(emValue) ? null : emValue * fontSize;
        }
        const numberValue = parseFloat(value!);
        return isNaN(numberValue) ? null : numberValue * fontSize;
    }
    resetHeight() {
        this.clearCalcHeightTimer();
        if (this.isWrapperFlexGrow1()) {
            this.updateTextareaHeight('100%');
            return;
        }
        this.updateTextareaHeight(this.textareaHeight);
    }
    updateFontSize(value: string | null = null) {
        if (!isPixelStyleValue(value)) {
            if (this.params.fontSize == null) return;
            this.calcTextAreaMinHeight = this.defaultFontSize;
            this.params.fontSize = undefined;
            this.updateParams();
            if (this.autoHeight) {
                this.calcHeight();
            }
            return;
        }
        const fontSize = parseInt(value!);
        const _value = `${fontSize}vp`;
        if (this.params.fontSize == _value) return;
        this.calcTextAreaMinHeight = fontSize;
        this.params.fontSize = _value;
        this.updateParams();
        if (this.autoHeight) {
            this.calcHeight();
        }
    }
    updateLineHeight(value: string | null = null) {
        if (isEmptyStyleValue(value)) {
            if (this._params.lineHeight == null) return;
            this._params.lineHeight = undefined;
            this.updateParams();
            if (this.autoHeight) {
                this.calcHeight();
            }
            return;
        }
        let newLineHeight = this._params.lineHeight;
        const fontSize = this.params.fontSize == null ? this.defaultFontSize : parseInt(this.params.fontSize);
        const lineHeight = this.parseLineHeight(value, fontSize);
        if (lineHeight != null) {
            newLineHeight = `${lineHeight}vp`;
        } else {
            newLineHeight = undefined;
        }
        if (this._params.lineHeight != newLineHeight) {
            this._params.lineHeight = newLineHeight;
            this.updateParams();
            if (this.autoHeight) {
                this.calcHeight();
            }
        }
    }
    handleMountedFocus() {
        super.handleMountedFocus();
        if (this.autoHeight) {
            this.calcHeight();
        }
    }
    private resolvePadding(paddingTop: string | null = null, paddingRight: string | null = null, paddingBottom: string | null = null, paddingLeft: string | null = null): UniTextareaPadding {
        let top = '0vp';
        let right = '0vp';
        let bottom = '0vp';
        let left = '0vp';
        const topValue = normalizePaddingValue(paddingTop);
        if (topValue != null) {
            top = topValue;
        }
        const rightValue = normalizePaddingValue(paddingRight);
        if (rightValue != null) {
            right = rightValue;
        }
        const bottomValue = normalizePaddingValue(paddingBottom);
        if (bottomValue != null) {
            bottom = bottomValue;
        }
        const leftValue = normalizePaddingValue(paddingLeft);
        if (leftValue != null) {
            left = leftValue;
        }
        return {
            top,
            right,
            bottom,
            left
        } as UniTextareaPadding;
    }
    updatePadding(paddingTop: string | null = null, paddingRight: string | null = null, paddingBottom: string | null = null, paddingLeft: string | null = null) {
        const newPadding = this.resolvePadding(paddingTop, paddingRight, paddingBottom, paddingLeft);
        if (this._params.padding?.top == newPadding.top && this._params.padding?.right == newPadding.right && this._params.padding?.bottom == newPadding.bottom && this._params.padding?.left == newPadding.left) {
            return;
        }
        this.paddingTop = parseFloat(newPadding.top);
        this.paddingRight = parseFloat(newPadding.right);
        this.paddingBottom = parseFloat(newPadding.bottom);
        this.paddingLeft = parseFloat(newPadding.left);
        this._params.padding = newPadding;
        if (this.autoHeight) {
            this.calcHeight();
        } else {
            this.updateParams();
        }
    }
    initCalcTextAreaMinHeight() {
        const fontSize = parseInt(this.element.style.getPropertyValue('fontSize')) || this.defaultFontSize;
        this.calcTextAreaMinHeight = fontSize;
        if (!this.autoHeight) {
            this.calcHeight();
        }
    }
    updateHeight(value: string | null = null) {
        if (!isPixelStyleValue(value)) {
            if (this.textareaHeight != this.defaultHeight) {
                this.textareaHeight = this.defaultHeight;
                this.calcHeight();
            }
            return;
        }
        const newValue = parseInt(value!);
        if (this.textareaHeight != newValue) {
            this.textareaHeight = newValue;
            this.calcHeight();
        }
    }
    updateMinHeight(value: string | null = null) {
        if (!isPixelStyleValue(value)) {
            if (this.minHeight != -1) {
                this.minHeight = -1;
                this.calcHeight();
            }
            return;
        }
        const newValue = parseInt(value!);
        if (this.minHeight != newValue) {
            this.minHeight = newValue;
            this.calcHeight();
        }
    }
    updateMaxHeight(value: string | null = null) {
        if (!isPixelStyleValue(value)) {
            if (this.maxHeight != -1) {
                this.maxHeight = -1;
                this.calcHeight();
            }
            return;
        }
        const newValue = parseInt(value!);
        if (this.maxHeight != newValue) {
            this.maxHeight = newValue;
            this.calcHeight();
        }
    }
    updateCalculatedHeight() {
        const textRect = this.controller.getTextContentRect();
        this.textRectHeight = px2vp(textRect.height);
        const verticalPadding = this.paddingTop + this.paddingBottom;
        this.calculatedHeight = Math.max(this.calcTextAreaMinHeight + verticalPadding, Math.round(this.textRectHeight) + verticalPadding);
    }
    isWrapperFlexGrow1(): boolean {
        const wrapperEl = this.element.parentElement?.parentElement;
        if (wrapperEl != null) {
            const flexGrow = wrapperEl.style.getPropertyValue('flex-grow');
            const wrapperElParentHeight = wrapperEl.parentElement?.style.getPropertyValue('height');
            return flexGrow == '1' && wrapperElParentHeight !== 'auto';
        }
        return false;
    }
    private clearCalcHeightTimer() {
        if (this.calcHeightTimer != null) {
            clearTimeout(this.calcHeightTimer);
            this.calcHeightTimer = null;
        }
    }
    calcHeight() {
        if (this.autoHeight && !this.mounted) return;
        let textAreaComponentHeight: number | string = this.textareaHeight;
        if (this.minHeight > textAreaComponentHeight) {
            textAreaComponentHeight = this.minHeight;
        } else if (this.maxHeight >= 0 && this.maxHeight < textAreaComponentHeight) {
            textAreaComponentHeight = this.maxHeight;
        } else if (this.autoHeight) {
            if (this.minHeight >= 0 && this.minHeight < textAreaComponentHeight) {
                textAreaComponentHeight = Math.max(this.minHeight, this.calculatedHeight);
            } else {
                textAreaComponentHeight = 'auto';
            }
        }
        if (this.isWrapperFlexGrow1()) {
            this.updateTextareaHeight('100%');
            return;
        }
        if (this.autoHeight) {
            if (this.calcHeightTimer != null) {
                this.clearCalcHeightTimer();
            }
            this.calcHeightTimer = setTimeout(()=>{
                this.calcHeightTimer = null;
                this.updateCalculatedHeight();
                if (this.minHeight >= 0 && this.calculatedHeight < this.minHeight) {
                    this.calculatedHeight = this.minHeight;
                }
                if (this.calcTextAreaMinHeight >= 0 && this.calculatedHeight < this.calcTextAreaMinHeight) {
                    this.calculatedHeight = this.calcTextAreaMinHeight;
                }
                if (this.maxHeight >= 0 && this.calculatedHeight > this.maxHeight) {
                    this.calculatedHeight = this.maxHeight;
                    textAreaComponentHeight = this.maxHeight;
                }
                if (textAreaComponentHeight !== 'auto' && this.calculatedHeight !== textAreaComponentHeight) {
                    textAreaComponentHeight = 'auto';
                }
                if (textAreaComponentHeight == 'auto') {
                    if (this.params.value == '') {
                        textAreaComponentHeight = this.calculatedHeight + 3;
                    } else {
                        textAreaComponentHeight = this.calculatedHeight;
                    }
                }
                this.updateTextareaHeight(textAreaComponentHeight as number);
            }, 10);
        } else {
            this.updateTextareaHeight(textAreaComponentHeight as number);
        }
    }
    updateTextareaHeight(height: number | string) {
        this._params.height = height;
        this.updateParams();
        const value = typeof height === 'number' ? `${height}px` : height;
        this.element.style.setProperty('height', value);
    }
    destroy() {
        this.clearCalcHeightTimer();
        this.lineChangeEvent = null;
        super.destroy();
    }
    triggerFocus() {
        super.triggerFocus();
        this.updateSelectionTimer = setTimeout(()=>{
            if (this.selection.end !== -1 && this.selection.end >= this.selection.start) {
                this.controller.setTextSelection(this.selection.start, this.selection.end);
                this.cursor = this.selection.end;
            } else if (this.params.value!.length > 0) {
                const cursor = this.resolveCursorPosition(-1);
                this.controller.caretPosition(cursor);
                this.cursor = cursor;
                this.updateParams();
            }
        }, 0);
    }
    updateConfirmType(value: string) {
        const type = UTS.mapGet(CONFIRM_TYPES, value);
        if (type !== null) {
            this.params.enterKeyType = type;
            this.updateParams();
        }
    }
    updateCursor(value: number) {
        if (this.updateCursorTimer != null) {
            clearTimeout(this.updateCursorTimer);
        }
        this.updateCursorTimer = setTimeout(()=>{
            const cursor = this.resolveCursorPosition(value);
            this.controller.caretPosition(cursor);
            this.cursor = cursor;
        }, 0);
    }
    protected getCurrentCursorPosition(): number {
        try {
            const positionInfo = this.controller.getCaretOffset();
            this.cursor = positionInfo.index;
        } catch (e) {
            return this.cursor;
        }
        return this.cursor;
    }
    dispatchInput(value: string, cursor: number | null = null) {
        super.dispatchInput(value, cursor);
        this.calcHeight();
        if (!this.isFocusing) return;
        this.updateLineCount();
        this.inputEvent?.(new UniInputEventEvent({
            value,
            cursor
        } as InputEventDetail));
    }
    updateLineChangeEvent(event: InputEvent) {
        this.lineChangeEvent = event;
    }
    dispatchLineChange() {
        const textRect = this.controller.getTextContentRect();
        this.textRectHeight = px2vp(textRect.height);
        this.lineChangeEvent?.(new UniCustomEvent('linechange', new UniCustomEventOptions<LineChangeEventDetail>({
            lineCount: this.lineCount,
            height: this.textRectHeight
        } as LineChangeEventDetail)));
    }
    updateLineCount() {
        const newLineCount = this.controller.getTextContentLineCount();
        if (this.lineCount !== newLineCount) {
            this.lineCount = newLineCount;
            this.dispatchLineChange();
        }
    }
}
class UniInputFileElement extends UniViewElementImpl {
    _value: string = '';
    onValueChange: (value: string) => void = ()=>{};
    updateValue(value: string) {
        if (this._value === value) {
            return;
        }
        this._value = value;
    }
    get value(): string {
        return this._value;
    }
    set value(value: string) {
        if (this._value === value) {
            return;
        }
        this._value = value;
        this.onValueChange(value);
    }
}
class UniInputElement extends UniInputFileElement {
    tagName: string = 'INPUT';
    nodeName: string = 'INPUT';
}
class UniTextareaElement extends UniInputFileElement {
    tagName: string = 'TEXTAREA';
    nodeName: string = 'TEXTAREA';
}
export { NativeTextareaInitOptions as NativeTextareaInitOptions };
export { UniInputFileOptions as UniInputFileOptions };
export { NativeInputView as NativeInputView };
export { NativeTextareaView as NativeTextareaView };
export { UniInputElement as UniInputElement };
export { UniTextareaElement as UniTextareaElement };
