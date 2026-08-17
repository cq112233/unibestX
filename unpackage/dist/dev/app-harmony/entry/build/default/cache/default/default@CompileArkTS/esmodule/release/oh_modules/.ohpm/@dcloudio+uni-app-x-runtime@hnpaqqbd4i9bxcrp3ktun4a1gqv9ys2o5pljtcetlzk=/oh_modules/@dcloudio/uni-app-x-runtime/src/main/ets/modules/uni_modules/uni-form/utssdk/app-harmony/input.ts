import type { UniInputFileOptions } from "./index";
export interface UniInputOptions extends UniInputFileOptions {
    controller: TextInputController;
    type?: InputType;
    height?: string;
    caretPosition?: number;
    customKeyboard: any;
}
function CustomKeyboardBuilder(parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.height(0);
    }, Column);
    Column.pop();
}
export const wrapBuilderCustomKeyboard = wrapBuilder(CustomKeyboardBuilder);
export function InputBuilder(options: UniInputOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        TextInput.create({ text: options.value, placeholder: options.placeholder, controller: options.controller });
        TextInput.width('100%');
        TextInput.height(options.height);
        TextInput.key(options.key);
        TextInput.padding(0);
        TextInput.borderRadius(0);
        TextInput.backgroundColor(Color.Transparent);
        TextInput.type(options.type);
        TextInput.enterKeyType(options.enterKeyType);
        TextInput.enabled(options.enabled);
        TextInput.maxLength(options.maxLength);
        TextInput.caretColor(options.caretColor);
        TextInput.caretPosition(options.caretPosition);
        TextInput.fontSize(options.fontSize);
        TextInput.fontColor(options.color);
        TextInput.letterSpacing(options.letterSpacing);
        TextInput.fontWeight(options.fontWeight);
        TextInput.fontFamily(options.fontFamily);
        TextInput.fontStyle(options.fontStyle);
        TextInput.textAlign(options.textAlign);
        TextInput.showPasswordIcon(false);
        TextInput.customKeyboard(options.customKeyboard);
        TextInput.onFocus(() => {
            options.handleFocus?.();
        });
        TextInput.onBlur(() => {
            options.handleBlur?.();
        });
        TextInput.onChange((value, previewText, opt) => {
            options.dispatchInput?.(value, opt?.rangeAfter?.end);
        });
        TextInput.onAppear(() => {
            options.handleMountedFocus?.();
        });
        TextInput.onSubmit((_: EnterKeyType, event: SubmitEvent) => {
            if (options.confirmHold) {
                event.keepEditableState();
            }
            options.dispatchConfirm?.(event.text);
        });
    }, TextInput);
}
