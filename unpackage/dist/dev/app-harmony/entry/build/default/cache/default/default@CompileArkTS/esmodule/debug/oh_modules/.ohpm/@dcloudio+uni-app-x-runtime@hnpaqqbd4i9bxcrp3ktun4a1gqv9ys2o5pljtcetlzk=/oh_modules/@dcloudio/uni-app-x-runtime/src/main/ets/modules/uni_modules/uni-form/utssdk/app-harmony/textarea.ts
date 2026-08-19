import type { UniInputFileOptions } from "./index";
export interface UniTextareaOptions extends UniInputFileOptions {
    controller: TextAreaController;
    lineHeight?: string;
    autoHeight?: boolean;
    height: number | string;
    padding?: UniTextareaPadding;
}
export interface UniTextareaPadding {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
export function TextareaBuilder(options: UniTextareaOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        TextArea.create({ text: options.value, placeholder: options.placeholder, controller: options.controller });
        TextArea.width('100%');
        TextArea.height(options.height);
        TextArea.key(options.key);
        TextArea.padding(options.padding ?? 0);
        TextArea.borderRadius(0);
        TextArea.backgroundColor(Color.Transparent);
        TextArea.enterKeyType(options.enterKeyType);
        TextArea.enabled(options.enabled);
        TextArea.maxLength(options.maxLength);
        TextArea.caretColor(options.caretColor);
        TextArea.barState(options.autoHeight ? BarState.Off : BarState.Auto);
        TextArea.fontSize(options.fontSize);
        TextArea.fontColor(options.color);
        TextArea.lineHeight(options.lineHeight);
        TextArea.letterSpacing(options.letterSpacing);
        TextArea.fontWeight(options.fontWeight);
        TextArea.fontFamily(options.fontFamily);
        TextArea.fontStyle(options.fontStyle);
        TextArea.textAlign(options.textAlign);
        TextArea.onFocus(() => {
            options.handleFocus?.();
        });
        TextArea.onBlur(() => {
            options.handleBlur?.();
        });
        TextArea.onChange((value: string, previewText: PreviewText, opt: TextChangeOptions) => {
            options.dispatchInput?.(value, opt?.rangeAfter?.end);
        });
        TextArea.onAppear(() => {
            options.handleMountedFocus?.();
        });
        TextArea.onSubmit((_: EnterKeyType, event: SubmitEvent) => {
            if (options.confirmHold) {
                event.keepEditableState();
            }
            options.dispatchConfirm?.(event.text);
        });
    }, TextArea);
}
