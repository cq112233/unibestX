import { RootNodeContent } from '../Node';
import { AttributeUpdater as AttributeUpdater } from "@ohos.arkui.modifier";
import { TabBar, TabBarStyle, TabBarItem, TabBarListObservedArray } from './TabBar';
export declare class AnimationAttributeUpdater extends AttributeUpdater<CommonAttribute> {
    private isInitialized;
    private callbacks;
    initializeModifier(attribute: CommonAttribute): void;
    getAttribute(callback: (attribute: CommonAttribute) => void): void;
}
export declare class AnimationController {
    type?: string;
    duration?: number;
    callback?: (() => void) | null;
    attributeUpdater: AnimationAttributeUpdater;
    finish?: () => void;
    constructor(type?: string, duration?: number);
    animate(context: UIContext, onFinish: () => void, linkPageController?: AnimationController): void;
    setBeginState(linkPageController?: AnimationController): void;
    setEndState(linkPageController?: AnimationController): void;
    resetState(linkPageController?: AnimationController): void;
}
export declare const TEMPLATE_PAGE_NAME = "UniPage";
@Observed
export declare class TabBarPageController {
    pageId: string;
    constructor(pageId: string);
}
@Observed
export declare class TabBarPageControllerArray extends Array<TabBarPageController> {
}
@Observed
export declare class TabBarController {
    style: TabBarStyle;
    list: TabBarListObservedArray<TabBarItem>;
    pages: TabBarPageControllerArray;
    selectedId: string | null;
    isVisible: boolean;
    selectedIndex: number;
    onTabItemClick?: (index: number) => void;
    tabBar?: TabBar | null;
    attributeUpdater: AnimationAttributeUpdater;
    onAboutToAppear: (tabBar: TabBar) => void;
}
export declare class DialogPageController {
    pageId: string;
    visibility: Visibility;
    attributeUpdater: AnimationAttributeUpdater;
    constructor(pageId: string, visibility: Visibility);
}
@Observed
export declare class DialogPageControllerArray extends Array<DialogPageController> {
}
@Observed
export declare class PageStyle {
    backgroundColor?: string;
}
@Component
export declare struct PageContainer {
    @Prop
    pageId: string;
    @Prop
    isSubPage: boolean;
    @State
    pageStyle: PageStyle | null;
    rootNodeContent: RootNodeContent | null;
    @State
    tabBarController: TabBarController | null;
    @State
    dialogPages: DialogPageControllerArray | null;
    animationController: AnimationController;
    onTouchCallback: ((event: TouchEvent) => void) | null;
    @Builder
    buildRelativeContainer(): void;
    build(): void;
    aboutToAppear(): void;
    onDidBuild(): void;
    aboutToDisappear(): void;
}
@Component
export declare struct UniSubPage {
    onAboutToAppear?: (instance: UniSubPage) => void;
    @Prop
    pageId: string;
    build(): void;
    aboutToAppear(): void;
}
