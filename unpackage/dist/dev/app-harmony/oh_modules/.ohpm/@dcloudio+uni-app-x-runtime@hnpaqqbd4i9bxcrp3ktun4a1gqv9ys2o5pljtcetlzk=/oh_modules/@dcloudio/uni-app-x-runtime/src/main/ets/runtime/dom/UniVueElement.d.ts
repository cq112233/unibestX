import { UniViewElementImpl } from './UniViewElement';
import { UniElementImpl } from '../libs/dom';
export declare class UniVueElement extends UniViewElementImpl {
    static findVmByElement(el: UniElementImpl): any;
    get vm(): any;
    hasAttribute(key: string): boolean;
    getAttribute(key: string): string | null;
    getAnyAttribute(key: string): any;
}
