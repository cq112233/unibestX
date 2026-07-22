import { UniSubPage } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Page&1.0.0";
import type { UniSubPageOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Page&1.0.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
export function UniSubPageBuilder(options: UniSubPageOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new UniSubPage(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniSubPageFrameNode.ets", line: 6, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "UniSubPage" });
    }
}
export class UniSubPageFrameNode extends UniFrameNode {
    componentInstance!: UniSubPage;
}
export function createUniSubPageFrameNode(context: UIContext, options: UniSubPageOptions): UniSubPageFrameNode {
    const node = createUniFrameNode<UniSubPageFrameNode, UniSubPageOptions>(context, UniSubPageFrameNode, wrapBuilder(UniSubPageBuilder), options);
    return node;
}
