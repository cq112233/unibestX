import { UniViewElementImpl, UniCustomElement } from "@dcloudio/uni-app-framework";
declare class UniNavigatorElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    constructor();
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    private _onClick;
    private getAttributeValue;
}
export { UniNavigatorElement as UniNavigatorElement };
