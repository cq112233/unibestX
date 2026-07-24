import type { UniFormControl as IUniFormControlElement } from '@dcloudio/uni-app-x/types/native';
import { UniViewElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniViewElement&1.0.0";
/**
 * 供外部组件使用
 */
export class UniFormControlViewElementImpl<T, X extends FrameNode | null = FrameNode | null> extends UniViewElementImpl<X> implements IUniFormControlElement<T> {
    get name() {
        return this.getAttribute('name') || '';
    }
    set name(name: string) {
        this.setAttribute('name', name);
    }
    get value(): T {
        return this.getAnyAttribute('value') as T;
    }
    set value(value: T) {
        this.setAnyAttribute('value', value as object);
    }
    reset(): void {
    }
}
/**
 * 供内部组件使用
 */
export class UniFormControlElementImpl<T, X extends FrameNode | null> extends UniFormControlViewElementImpl<T, X> {
    protected override createFrameNode(): X {
        return null as X;
    }
}
export interface IUniForm {
    submit(): void;
    reset(): void;
}
