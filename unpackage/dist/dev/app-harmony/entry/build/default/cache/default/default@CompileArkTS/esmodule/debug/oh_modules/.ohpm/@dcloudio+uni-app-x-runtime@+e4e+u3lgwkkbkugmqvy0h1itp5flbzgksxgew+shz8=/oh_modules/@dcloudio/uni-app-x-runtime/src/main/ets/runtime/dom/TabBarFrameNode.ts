import { TabBar } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import type { TabBarOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
export function TabBarBuilder(options: TabBarOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new TabBar(parent ? parent : this, {
                    onAboutToAppear: options.onAboutToAppear,
                    list: options.list,
                    style: options.style,
                    onTabItemClick: options.onTabItemClick
                }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/TabBarFrameNode.ets", line: 6, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        onAboutToAppear: options.onAboutToAppear,
                        list: options.list,
                        style: options.style,
                        onTabItemClick: options.onTabItemClick
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    list: options.list,
                    style: options.style
                });
            }
        }, { name: "TabBar" });
    }
}
export class TabBarFrameNode extends UniFrameNode {
    componentInstance!: TabBar;
}
export function createTabBarFrameNode(context: UIContext, options: TabBarOptions): TabBarFrameNode {
    const node = createUniFrameNode<TabBarFrameNode, TabBarOptions>(context, TabBarFrameNode, wrapBuilder(TabBarBuilder), options);
    return node;
}
