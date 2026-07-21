import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import type { UniCommentElement as IUniCommentElement } from '@dcloudio/uni-app-x/types/native';
import { NodeData } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/NodeData&1.0.0";
import type { UniLayoutFlexNode } from 'dcloudlayout';
import type { Unknown } from '../helper';
import type { UniNativePageImpl } from './UniNativePage';
import type { UniNativeAppImpl } from '../UniNativeApp';
export class UniCommentElementImpl extends UniElementImpl implements IUniCommentElement {
    text: string;
    isPureNode: true = true;
    constructor(text: string, page: UniNativePageImpl) {
        super(new NodeData('', ''), page);
        this.nodeName = '#comment';
        this.text = text;
        // 移除 app page
        this.app = undefined as Unknown as UniNativeAppImpl;
        this.page = undefined as Unknown as UniNativePageImpl;
    }
    protected override createLayoutNode(): UniLayoutFlexNode {
        // 跳过 LayoutNode 创建
        return null as Unknown as UniLayoutFlexNode;
    }
    protected override addNativeNode(index: number) {
        // 暂不同步到 native
    }
    protected override removeNativeNode() {
        // 暂不同步到 native
    }
}
export const UniComment = UniCommentElementImpl;
