import type { UniInputFileOptions } from "./index";
export interface UniInputOptions extends UniInputFileOptions {
    controller: TextInputController;
    type?: InputType;
    height?: string;
    caretPosition?: number;
    customKeyboard: ESObject;
}
export declare const wrapBuilderCustomKeyboard: WrappedBuilder<[]>;
@Builder
export declare function InputBuilder(options: UniInputOptions): void;
