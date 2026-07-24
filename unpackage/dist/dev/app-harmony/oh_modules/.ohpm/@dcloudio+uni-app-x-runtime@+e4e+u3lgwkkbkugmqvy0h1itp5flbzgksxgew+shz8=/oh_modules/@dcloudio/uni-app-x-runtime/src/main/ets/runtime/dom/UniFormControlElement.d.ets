import { UniFormControl as IUniFormControlElement } from '@dcloudio/uni-app-x/types/native';
import { UniViewElementImpl } from "./UniViewElement";
/**
 * 供外部组件使用
 */
export declare class UniFormControlViewElementImpl<T, X extends FrameNode | null = FrameNode | null> extends UniViewElementImpl<X> implements IUniFormControlElement<T> {
    get name(): string;
    set name(name: string);
    get value(): T;
    set value(value: T);
    reset(): void;
}
/**
 * 供内部组件使用
 */
export declare class UniFormControlElementImpl<T, X extends FrameNode | null> extends UniFormControlViewElementImpl<T, X> {
    protected createFrameNode(): X;
}
export interface IUniForm {
    submit(): void;
    reset(): void;
}
