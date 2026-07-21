import type { UniRichTextElement as IUniRichTextElement } from '@dcloudio/uni-app-x/types/native';
import { UniFormControlElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniFormControlElement&1.0.0";
import { UniRichText } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/RichText&1.0.0";
import type { RichTextOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/RichText&1.0.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
export function RichTextBuilder(options: RichTextOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new UniRichText(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniRichTextElement.ets", line: 8, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "UniRichText" });
    }
}
class RichTextFrameNode extends UniFrameNode {
    componentInstance!: UniRichText;
}
interface NodeItem {
    type?: 'node' | 'text';
    name: string;
    attrs?: object;
    children?: (NodeItem | TextItem)[];
}
interface TextItem {
    type?: 'node' | 'text';
    text: string;
}
type ChildItem = NodeItem | TextItem;
const HEIGHT = 'height';
const DEFAULT_HEIGHT = 150;
export class UniRichTextElementImpl extends UniFormControlElementImpl<string, RichTextFrameNode> implements IUniRichTextElement {
    static override get defaultStyle() {
        // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
        const baseDefaultStyle = super.defaultStyle as Map<string, [
            string
        ] | [
            string,
            boolean
        ]>;
        const defaultStyle = new Map(baseDefaultStyle);
        defaultStyle.set(HEIGHT, [DEFAULT_HEIGHT + 'px', true]);
        return defaultStyle;
    }
    constructor() {
        super();
    }
    protected override createFrameNode(): RichTextFrameNode {
        const context = this.app.context!;
        const text = createUniFrameNode<RichTextFrameNode, RichTextOptions>(context, RichTextFrameNode, wrapBuilder(RichTextBuilder), { content: '' });
        return text;
    }
    override updateNativeAttribute(key: string, value: Object) {
        switch (key) {
            case 'nodes': {
                let content = '';
                if (Array.isArray(value)) {
                    content = this.parseArrayNodesToString(value);
                }
                else if (typeof value === 'string') {
                    content = value;
                }
                this.frameNode.componentInstance.content = content;
                break;
            }
            case 'selectable':
                break;
        }
    }
    parseArrayNodesToString(nodes: ChildItem[]): string {
        let str = '';
        for (let i = 0; i < nodes.length; i++) {
            // TODO: node to stirng
        }
        return str;
    }
    protected override initNativeEvent(type: string): void {
        switch (type) {
            case 'itemclick': {
                this.frameNode.componentInstance.handleItemClick = () => {
                };
                break;
            }
            default:
                super.initNativeEvent(type);
                break;
        }
    }
    protected override deleteNativeEvent(type: string, res: void | Object): boolean {
        switch (type) {
            case 'itemclick': {
                this.frameNode.componentInstance.handleItemClick = undefined;
                return true;
            }
            default:
                return super.deleteNativeEvent(type, res);
        }
    }
    override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute | undefined): void {
        if (key === 'width') {
            this.frameNode.componentInstance.viewportWidth = value as number;
        }
        super.updateNativeNodeStyle(key, value, commonAttribute);
    }
}
