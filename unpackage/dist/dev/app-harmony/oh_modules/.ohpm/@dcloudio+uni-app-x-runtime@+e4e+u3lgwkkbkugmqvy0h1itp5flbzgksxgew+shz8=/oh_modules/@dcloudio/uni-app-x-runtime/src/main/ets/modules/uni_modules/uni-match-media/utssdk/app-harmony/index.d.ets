import { UniViewElementImpl, UniCustomElement } from "@dcloudio/uni-app-framework";
declare class UniMatchMediaElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string>;
    private _expressions;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null): void;
    private getExpressions;
    private toggleElement;
    private isValid;
}
export { UniMatchMediaElement as UniMatchMediaElement };
