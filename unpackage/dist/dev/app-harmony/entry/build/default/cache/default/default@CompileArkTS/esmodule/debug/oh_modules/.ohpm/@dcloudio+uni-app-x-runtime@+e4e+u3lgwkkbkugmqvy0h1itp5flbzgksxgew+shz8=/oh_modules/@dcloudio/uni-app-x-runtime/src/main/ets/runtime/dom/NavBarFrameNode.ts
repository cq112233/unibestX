import { NavBar } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/NavBar&1.0.0";
import type { NavBarOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/NavBar&1.0.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
export function NavBarBuilder(options: NavBarOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new NavBar(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/NavBarFrameNode.ets", line: 6, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "NavBar" });
    }
}
export class NavBarFrameNode extends UniFrameNode {
    componentInstance!: NavBar;
}
export function createNavBarFrameNode(context: UIContext, options: NavBarOptions): NavBarFrameNode {
    const node = createUniFrameNode<NavBarFrameNode, NavBarOptions>(context, NavBarFrameNode, wrapBuilder(NavBarBuilder), options);
    return node;
}
