import { UTSObject, uni, onResize, OnResizeOptions, UTS, UniViewElementImpl, UniCustomElement } from "@dcloudio/uni-app-framework";
class Expression extends UTSObject {
    feature!: string;
    modifier!: string;
    value!: string;
}
class Values extends UTSObject {
    orientation: string | null = null;
    width: number | null = null;
    height: number | null = null;
}
const RE_MQ_FEATURE = /^(min|max)?([A-Z]?[a-z]+)(?:([A-Z])([a-z]+))?$/;
class UniMatchMediaElement extends UniViewElementImpl implements UniCustomElement {
    static get observedAttributes(): Array<string> {
        return [
            'orientation',
            'width',
            'minWidth',
            'maxWidth',
            'height',
            'minHeight',
            'maxHeight'
        ];
    }
    private _expressions: Array<Expression> = [];
    constructor(){
        super();
    }
    connectedCallback() {
        this._expressions = this.getExpressions();
        this.uniPage.vm!.$.$waitNativeRender(()=>{
            this.toggleElement(this.isValid({
                width: this.uniPage.pageBody.width,
                height: this.uniPage.pageBody.height,
                orientation: uni.getDeviceInfo().deviceOrientation as string
            } as Values));
        });
        onResize((res: OnResizeOptions)=>{
            this.toggleElement(this.isValid({
                orientation: res.deviceOrientation,
                width: res.size.windowWidth,
                height: res.size.windowHeight
            } as Values));
        }, this.uniPage.vm!.$);
    }
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null) {
        if (this._expressions.length == 0 || newValue == null) {
            return;
        }
        const matches = name.match(RE_MQ_FEATURE);
        if (matches == null || matches.length == 0) {
            return;
        }
        const modifier = matches[1] != null ? matches[1]! : '';
        const feature = matches[2] != null ? matches[2]!.toLowerCase() : '';
        const expression = UTS.arrayFind(this._expressions, (expr): boolean =>expr.feature == feature && expr.modifier == modifier);
        if (expression == null) {
            return;
        }
        expression.value = newValue as string;
        this.toggleElement(this.isValid({
            width: this.uniPage.pageBody.width,
            height: this.uniPage.pageBody.height,
            orientation: uni.getDeviceInfo().deviceOrientation
        } as Values));
    }
    private getExpressions(): Expression[] {
        const expressions: Array<Expression> = [];
        UniMatchMediaElement.observedAttributes.forEach((key)=>{
            const value = this.getAttribute(key);
            const feature = key.match(RE_MQ_FEATURE);
            if (value != null && feature != null && feature.length > 0) {
                expressions.push({
                    modifier: feature[1] != null ? feature[1]! : '',
                    feature: feature[2] != null ? feature[2]!.toLowerCase() : '',
                    value
                } as Expression);
            }
        });
        return expressions;
    }
    private toggleElement(show: boolean) {
        this.style.setProperty('display', show ? 'flex' : 'none');
    }
    private isValid(values: Values): boolean {
        return this._expressions.every((expression): boolean =>{
            switch(expression.feature){
                case 'orientation':
                    return values[expression.feature] === this.getAttribute(expression.feature);
                case 'width':
                case 'height':
                    break;
            }
            const expressionValue = values[expression.feature] as number;
            switch(expression.modifier){
                case 'min':
                    return parseFloat(expression.value) <= expressionValue;
                case 'max':
                    return parseFloat(expression.value) >= expressionValue;
                default:
                    return parseFloat(expression.value) === expressionValue;
            }
        });
    }
}
export { UniMatchMediaElement as UniMatchMediaElement };
