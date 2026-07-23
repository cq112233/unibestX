import { Textarea } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Textarea&1.0.0";
import type { TextareaOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Textarea&1.0.0";
import { createUniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import type { UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import { UniCustomEvent, UniCustomEventOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCustomEvent&1.0.0";
import { callClass, formatColor, formatLength, formatLengthValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { UniInputElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniInputElement&1.0.0";
import { DEFAULT_FONT_SIZE_NUM, DEFAULT_LINE_HEIGHT, updateLineHeight, lengthMetricsToString } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniTextBaseElement&1.0.0";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { CONFIRM_TYPES, TextareaFrameNode, UniInputFileElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniInputFile&1.0.0";
export function TextareaBuilder(options: TextareaOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new Textarea(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniTextareaElement.ets", line: 22, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "Textarea" });
    }
}
const INPUT_MODES = new Map<string, TextAreaType>([
    ['text', TextAreaType.NORMAL],
    ['decimal', TextAreaType.NUMBER_DECIMAL],
    ['numeric', TextAreaType.NUMBER],
    ['tel', TextAreaType.PHONE_NUMBER],
    ['email', TextAreaType.EMAIL],
    ['url', TextAreaType.URL],
]);
interface LineChangeEventDetail {
    lineCount: number;
    height: number;
}
function isUndefined(value: object) {
    return typeof value !== 'undefined';
}
// TODO: flexBasis 设置 % 值的时候高度丢失（checkLayout 拿到的值就不对了），初步定位是排版器的问题
export class UniTextareaElementImpl extends UniInputFileElementImpl {
    private defaultHeight: number = 150;
    private options!: TextareaOptions;
    private textAreaHeight: string | number = this.defaultHeight;
    private textAreaMinHeight: number = -1;
    private calcTextAreaMinHeight: number = -1;
    private textAreaMaxHeight: number = -1;
    private autoHeight: boolean = false;
    private lines: number = 0;
    private needDispatchLineChange: boolean = false;
    private textRectHeight: number = 0;
    private calculatedHeight: number = 0;
    private textarea: TextareaFrameNode | null = null;
    /**
     * @internal
    * TODO 临时供 call input 使用
     */
    get inputFrameNode(): UniFrameNode {
        return this.frameNode as TextareaFrameNode;
    }
    static override get defaultStyle() {
        // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
        const baseDefaultStyle = super.defaultStyle as Map<string, [
            string
        ] | [
            string,
            boolean
        ]>;
        const defaultStyle = new Map(baseDefaultStyle);
        defaultStyle.set('fontSize', [DEFAULT_FONT_SIZE_NUM + 'px']);
        // TODO 默认为 1.2，但取整方式有差异，后续增加配置
        defaultStyle.set('lineHeight', [DEFAULT_LINE_HEIGHT]);
        // input textarea 组件默认值非 0，所以需要补充第二个参数 true
        defaultStyle.set('borderTopLeftRadius', ['0', true]);
        defaultStyle.set('borderTopRightRadius', ['0', true]);
        defaultStyle.set('borderBottomLeftRadius', ['0', true]);
        defaultStyle.set('borderBottomRightRadius', ['0', true]);
        defaultStyle.set('paddingTop', ['0', true]);
        defaultStyle.set('paddingBottom', ['0', true]);
        defaultStyle.set('paddingLeft', ['0', true]);
        defaultStyle.set('paddingRight', ['0', true]);
        defaultStyle.set('width', ['300px', true]);
        defaultStyle.set('height', ['150px', true]);
        defaultStyle.set('backgroundColor', ['transparent', true]);
        return defaultStyle;
    }
    protected override initClass(): void {
        super.initClass();
        this.controller = new TextAreaController();
        this.options = {
            text: this.textValue,
            controller: this.controller
        };
    }
    constructor() {
        super();
    }
    protected override createFrameNode(): TextareaFrameNode {
        this.textarea = createUniFrameNode<TextareaFrameNode, TextareaOptions>(this.app.context!, TextareaFrameNode, wrapBuilder(TextareaBuilder), this.options);
        this.textarea.componentInstance.handleInput = (event) => {
            const newValue = event.detail.value as string;
            if (newValue === this.textValue) {
                return;
            }
            this.handleInput(newValue, event.detail.cursor);
            this.dispatchInput();
        };
        // 设置 key 供 requestFocus 使用
        this.textarea.componentInstance.cacheKey = this.getNodeId();
        this.textarea.componentInstance.handleAttach = () => {
            this.updateTextAreaMinHeight();
            // 计算组件最小高度，兜底保证内容为空等问题是高度不会塌陷
            if (this.calculatedHeight < this.calcTextAreaMinHeight) {
                this.calcHeight();
            }
            this.handleMountedFocus();
            this.collectScrollAbleParents();
            this.watchKeyboardHeightChange();
            this.initTouchEventListener();
            (this.frameNode as TextareaFrameNode).componentInstance.handleFocus = () => {
                this.baseFocusEvent();
                this.dispatchFocus();
            };
            (this.frameNode as TextareaFrameNode).componentInstance.handleBlur = () => {
                this.baseBlurEvent();
                this.dispatchBlur();
            };
            (this.frameNode as TextareaFrameNode).componentInstance.handleConfirm =
                ((_: EnterKeyType, event: SubmitEvent) => {
                    if (this.confirmHold) {
                        event.keepEditableState();
                    }
                    this.dispatchConfirm();
                });
        };
        return this.textarea;
    }
    override updateNativeAttribute(key: string, value: any) {
        // TODO: 低优先级 cursor-spacing, harmony 回复暂不支持
        switch (key) {
            case 'value':
                super.updateNativeAttribute(key, value);
                (this.frameNode as TextareaFrameNode).componentInstance.text = this.textValue;
                break;
            case 'placeholder':
                (this.frameNode as TextareaFrameNode).componentInstance.placeholder = value as string;
                break;
            case 'maxlength':
                super.updateNativeAttribute(key, value);
                (this.frameNode as TextareaFrameNode).componentInstance.cacheMaxLength = this.maxLength as number;
                break;
            case 'confirmType':
                const confirmType = CONFIRM_TYPES.get(value);
                if (confirmType) {
                    (this.frameNode as TextareaFrameNode).componentInstance.cacheConfirmType = confirmType;
                }
                break;
            case 'disabled':
                super.updateNativeAttribute(key, value);
                (this.frameNode as TextareaFrameNode).componentInstance.disabled = this.disabled;
                break;
            case 'cursor':
                // 需要等待 value 更新后再设置光标位置
                setTimeout(() => {
                    this.controller.caretPosition(value as number);
                }, 0);
                break;
            case 'cursorColor':
                formatColor(value as string, (value) => {
                    (this.frameNode as TextareaFrameNode).componentInstance.cacheCaretColor = value;
                });
                break;
            case 'cursorStyle':
                (this.frameNode as TextareaFrameNode).componentInstance.cacheCaretStyle = value as CaretStyle;
                break;
            case 'adjustPosition':
                super.updateNativeAttribute(key, value);
                (this.frameNode as TextareaFrameNode).componentInstance.adjustPosition = this.adjustPosition;
                break;
            case 'inputmode':
                const mode = INPUT_MODES.get(value);
                if (mode !== null) {
                    this.type = value as string;
                    (this.frameNode as TextareaFrameNode).componentInstance.cacheInputMode = mode!;
                }
                break;
            case 'autoHeight':
                this.autoHeight = value as boolean;
                (this.frameNode as TextareaFrameNode).componentInstance.autoHeight = this.autoHeight;
                if (this.autoHeight) {
                    this.calcHeight();
                }
                else {
                    this.resetHeight();
                }
                break;
            default:
                super.updateNativeAttribute(key, value);
                break;
        }
    }
    override parsePlaceholderStyle(value: any, level: number) {
        super.parsePlaceholderStyle(value, level);
        if (this.styleCache.placeholderFont.family === undefined || level >= this.styleCache.placeholderStyleLevel.color) {
            const color: string | undefined = value['color'];
            if (color !== undefined) {
                formatColor(color as string, (v) => { this.styleCache.placeholderColor = v; });
            }
            else {
                this.styleCache.placeholderColor = '';
            }
            this.styleCache.placeholderStyleLevel.color = level;
        }
        const instance = (this.frameNode as TextareaFrameNode).componentInstance;
        instance.cachePlaceholderColor = this.styleCache.placeholderColor;
        instance.cachePlaceholderFont = this.styleCache.placeholderFont;
    }
    override parseStyle(key: string, value: Object): boolean {
        value = this.normalizeStyleValue(key, value);
        switch (key) {
            case 'paddingRight':
            case 'paddingBottom':
            case 'paddingLeft':
            case 'paddingTop':
                super.parseStyle(key, value);
                const direction = key.replace('padding', '').toLowerCase();
                const padding = this.styleCache.padding;
                formatLength(value, (val) => {
                    if (padding[direction] !== val) {
                        padding[direction] = val;
                        (this.frameNode as TextareaFrameNode).componentInstance.cachePadding = padding;
                        if (key === 'paddingTop' || key === 'paddingBottom') {
                            this.updateTextAreaMinHeight();
                            this.adjustHeightForCurrentFontSize();
                            if (this.autoHeight) {
                                this.calcHeight();
                            }
                        }
                    }
                });
                return true;
            case 'fontSize': {
                const result = super.parseStyle(key, value);
                this.updateTextAreaMinHeight();
                if (this.autoHeight) {
                    this.calcHeight();
                }
                return result;
            }
            case 'height':
                formatLengthValue(value, (val) => {
                    if (Number.isNaN(val)) {
                        return;
                    }
                    this.textAreaHeight = val;
                });
                return super.parseStyle(key, value);
            case 'minHeight':
                formatLengthValue(value, (val) => {
                    if (Number.isNaN(val)) {
                        return;
                    }
                    this.textAreaMinHeight = val;
                });
                return super.parseStyle(key, value);
            case 'maxHeight':
                formatLengthValue(value, (val) => {
                    if (Number.isNaN(val)) {
                        return;
                    }
                    this.textAreaMaxHeight = val;
                });
                return super.parseStyle(key, value);
            default:
                return super.parseStyle(key, value);
        }
    }
    override updateNativeNodeStyle(key: string, value: any, commonAttribute?: CommonAttribute | undefined): void {
        switch (key) {
            case 'color':
            case 'fontSize':
            case 'fontStyle':
            case 'fontWeight':
            case 'fontFamily':
            case 'textAlign':
                callClass(this, UniInputElementImpl, 'updateNativeNodeStyle', [key, value]);
                break;
            case 'lineHeight': {
                updateLineHeight(this, value as string | number, (value) => {
                    const attribute = (this.frameNode as TextareaFrameNode).attribute as TextAttribute;
                    // number 类型在此处代表 fp 而不代表 vp，需要特殊处理
                    attribute.lineHeight(lengthMetricsToString(value));
                });
                break;
            }
            // TODO: 组件内部接管 border 相关样式处理，交给父类处理会闪退
            case 'borderTopColor':
            case 'borderRightColor':
            case 'borderBottomColor':
            case 'borderLeftColor':
                const direction = key.replace('border', '').replace('Color', '').toLowerCase();
                this.styleCache.borderColor[direction] = value as string;
                (this.frameNode as TextareaFrameNode).componentInstance.cacheBorderColor = this.styleCache.borderColor;
                break;
            default:
                super.updateNativeNodeStyle(key, value, commonAttribute);
        }
    }
    protected override adjustHeightForCurrentFontSize(): void {
        if (!this.autoHeight) {
            super.adjustHeightForCurrentFontSize();
        }
    }
    private updateTextAreaMinHeight(): void {
        this.calcTextAreaMinHeight = this.getInputContentMinHeight();
    }
    protected calcHeight() {
        // 如果 minHeight < this.defaultHeight 时，不能设置 auto, 否则高度会自适应为内容高度
        let textAreaComponentHeight: string | number = this.textAreaHeight;
        // 保证高度不小于最小高度
        if (this.textAreaMinHeight > textAreaComponentHeight) {
            textAreaComponentHeight = this.textAreaMinHeight;
            // 保证高度不大于最大高度
        }
        else if (this.textAreaMaxHeight >= 0 && this.textAreaMaxHeight < textAreaComponentHeight) {
            textAreaComponentHeight = this.textAreaMaxHeight;
        }
        else if (this.autoHeight) {
            // 如果 minHeight < this.defaultHeight 时，不能设置 auto, 否则高度自适应内容高度了
            // TODO: 这会导致如果 auto-height:true, 当内容高度首次大于 minHeight 时，才会修改为 auto，本次修改会有内容闪烁问题（textarea 默认行为超出高度向上滚动文字，再设置 auto 文字回归滚动前位置）
            if (this.textAreaMinHeight >= 0 && this.textAreaMinHeight < textAreaComponentHeight) {
                textAreaComponentHeight = this.textAreaMinHeight;
            }
            else {
                textAreaComponentHeight = 'auto';
            }
        }
        if (this.autoHeight) {
            const shouldSyncTextAreaComponentHeight = this.shouldSyncTextAreaComponentHeight();
            if (shouldSyncTextAreaComponentHeight) {
                // 大字号带垂直 padding 时，先让 ArkUI TextArea 参与 auto 测量，后续再按外层高度同步内部高度。
                ;
                (this.frameNode as TextareaFrameNode).componentInstance.textAreaComponentHeight = textAreaComponentHeight;
            }
            setTimeout(() => {
                // 更新 value 后无法同步获取更新后的文字所占大小，需要延迟，未找到合适的回调或其他时机
                const textRect = this.controller.getTextContentRect();
                this.textRectHeight = px2vp(textRect.height);
                this.calculatedHeight = this.textRectHeight + parseFloat(this.styleCache.padding.top as string) +
                    parseFloat(this.styleCache.padding.bottom as string) + this.styleCache.borderWidth.top +
                    this.styleCache.borderWidth.bottom;
                if (this.textAreaMinHeight >= 0 && this.calculatedHeight < this.textAreaMinHeight) {
                    this.calculatedHeight = this.textAreaMinHeight;
                }
                if (this.calcTextAreaMinHeight >= 0 && this.calculatedHeight < this.calcTextAreaMinHeight) {
                    this.calculatedHeight = this.calcTextAreaMinHeight;
                }
                if (this.textAreaMaxHeight >= 0 && this.calculatedHeight > this.textAreaMaxHeight) {
                    this.calculatedHeight = this.textAreaMaxHeight;
                    if (!shouldSyncTextAreaComponentHeight) {
                        textAreaComponentHeight = this.textAreaMaxHeight;
                    }
                }
                if (shouldSyncTextAreaComponentHeight) {
                    // border 由内部 TextArea 绘制，内部高度需要扣除 border，避免超过外层 CustomFrameNode。
                    textAreaComponentHeight = this.getTextAreaComponentHeight(this.calculatedHeight);
                }
                else if (textAreaComponentHeight !== 'auto' && this.calculatedHeight !== textAreaComponentHeight) {
                    textAreaComponentHeight = 'auto';
                }
                ;
                (this.frameNode as TextareaFrameNode).componentInstance.textAreaComponentHeight = textAreaComponentHeight;
                this.updateHeight();
            }, 10);
        }
        else {
            (this.frameNode as TextareaFrameNode).componentInstance.textAreaComponentHeight = textAreaComponentHeight;
            this.updateHeight();
        }
    }
    private getTextAreaComponentHeight(height: number): number {
        return Math.max(0, height - this.styleCache.borderWidth.top - this.styleCache.borderWidth.bottom);
    }
    private shouldSyncTextAreaComponentHeight(): boolean {
        // 小字号场景原本由 ArkUI auto-height 正确处理，仅收敛修正大字号 + 垂直 padding 的异常。
        return this.currentFontSize > DEFAULT_FONT_SIZE_NUM * 2 && this.hasVerticalPadding();
    }
    private hasVerticalPadding(): boolean {
        const paddingTop = parseFloat(this.styleCache.padding.top as string);
        const paddingBottom = parseFloat(this.styleCache.padding.bottom as string);
        return paddingTop > 0 || paddingBottom > 0;
    }
    protected updateHeight() {
        if (this.autoHeight) {
            this.updateLayoutNodeStyleSync('height', 'setStyleHeight', this.calculatedHeight, 1);
        }
        else {
            this.resetHeight();
        }
    }
    protected resetHeight() {
        (this.frameNode as TextareaFrameNode).componentInstance.textAreaComponentHeight = this.textAreaHeight;
        this.parseStyle('height', this.textAreaHeight);
    }
    protected dispatchLineChange() {
        if (this.needDispatchLineChange) {
            this.dispatchEvent(new UniCustomEvent('linechange', new UniCustomEventOptions<LineChangeEventDetail>({ lineCount: this.lines, height: this.textRectHeight })));
        }
    }
    protected handleInput(value: string, cursor: number | null) {
        super.handleInput(value, cursor);
        this.calcHeight();
        const newLines = this.controller.getTextContentLineCount();
        if (this.lines !== newLines) {
            this.lines = newLines;
            this.dispatchLineChange();
        }
    }
    protected override initNativeEvent(type: string): void {
        switch (type) {
            case 'linechange': {
                this.needDispatchLineChange = true;
            }
            default:
                super.initNativeEvent(type);
                break;
        }
    }
    protected override deleteNativeEvent(type: string, res: void | Object): boolean {
        switch (type) {
            case 'linechange': {
                this.needDispatchLineChange = false;
            }
            default:
                return super.deleteNativeEvent(type, res);
        }
    }
    override checkLayout() {
        super.checkLayout();
        const layoutNode = this.layoutNode;
        const minHeight = this.calcTextAreaMinHeight;
        this.styleCache.borderWidth.top = layoutNode.getLayoutBorder(UniCssFlexEdge.Top);
        this.styleCache.borderWidth.bottom = layoutNode.getLayoutBorder(UniCssFlexEdge.Bottom);
        this.updateTextAreaMinHeight();
        this.adjustHeightForCurrentFontSize();
        if (this.autoHeight && minHeight !== this.calcTextAreaMinHeight && this.calculatedHeight < this.calcTextAreaMinHeight) {
            this.calcHeight();
        }
    }
    override reset() {
        super.reset();
        (this.frameNode as TextareaFrameNode).componentInstance.text = this.textValue;
    }
    override getHarmonyController<T extends TextAreaController>(): T {
        return this.controller as T;
    }
    override dispose(): void {
        if (this.textarea) {
            this.textarea.componentInstance.handleInput = undefined;
            this.textarea.componentInstance.handleAttach = undefined;
        }
        this.textarea?.dispose();
        this.textarea = null;
        super.dispose();
    }
}
