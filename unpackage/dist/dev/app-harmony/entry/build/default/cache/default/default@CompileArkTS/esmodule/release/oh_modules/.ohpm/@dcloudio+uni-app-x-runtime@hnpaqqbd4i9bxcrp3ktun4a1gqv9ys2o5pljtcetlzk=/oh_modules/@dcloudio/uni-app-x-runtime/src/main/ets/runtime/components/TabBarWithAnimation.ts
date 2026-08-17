import { TabBar } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import type { TabBarItem, TabBarListObservedArray, TabBarStyle } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
export interface TabBarWithAnimationOptions {
    onAboutToAppear?: (instance: TabBar) => void;
    style: TabBarStyle;
    list: TabBarListObservedArray<TabBarItem>;
    onTabItemClick?: (index: number) => void;
    attributeUpdater?: object;
}
export function TabBarWithAnimation(options: TabBarWithAnimationOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        Column.create();
        Column.width('100%');
        Column.clip(true);
        Column.attributeModifier.bind(this)(options.attributeUpdater);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.width('100%');
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new TabBar(parent ? parent : this, {
                    onAboutToAppear: options.onAboutToAppear,
                    list: options.list,
                    style: options.style,
                    onTabItemClick: options.onTabItemClick
                }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/TabBarWithAnimation.ets", line: 14, col: 5 });
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
    __Common__.pop();
    Column.pop();
}
