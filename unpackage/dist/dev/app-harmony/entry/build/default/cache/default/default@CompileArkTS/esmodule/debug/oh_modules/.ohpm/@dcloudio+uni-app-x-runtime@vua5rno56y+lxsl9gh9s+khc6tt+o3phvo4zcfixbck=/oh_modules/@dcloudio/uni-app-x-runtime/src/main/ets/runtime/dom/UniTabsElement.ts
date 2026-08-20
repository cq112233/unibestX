import type { UniTabsElement as IUniTabsElement, UniElement as IUniElement, UniTabTapEvent } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { typeNode } from "@ohos:arkui.node";
import { createUniSubPageFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniSubPageFrameNode&1.0.0";
import { createTabBarFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/TabBarFrameNode&1.0.0";
import type { TabBarFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/TabBarFrameNode&1.0.0";
import { TabBarItem, TabBarStyle, TabBarListObservedArray } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
export class UniTabsElementImpl extends UniElementImpl implements IUniTabsElement {
    // TODO
    isTabBarVisible: boolean = true;
    // TODO
    currentItemId!: string | null;
    private container!: FrameNode;
    private items = new Map<string, FrameNode>();
    private tabBar!: TabBarFrameNode;
    private tabBarList!: TabBarListObservedArray<TabBarItem>;
    private tabBarStyle!: TabBarStyle;
    private requestFullscreenRestore = false;
    constructor() {
        super();
    }
    protected override createFrameNode(): FrameNode | null {
        const app = this.app;
        const context = app.context!;
        const root = typeNode.createNode(context, 'Flex');
        root.initialize({
            direction: FlexDirection.Column,
        });
        root.attribute.width('100%').height('100%');
        const container = this.container = typeNode.createNode(context, 'Stack');
        container.attribute.clip(true)
            .width('100%')
            .flexGrow(1)
            .flexBasis(1);
        root.appendChild(container);
        this.tabBarList = new TabBarListObservedArray<TabBarItem>();
        this.tabBarStyle = new TabBarStyle();
        const tabBar = this.tabBar = createTabBarFrameNode(context, {
            list: this.tabBarList,
            style: this.tabBarStyle,
            onTabItemClick: (index: number) => {
                this.dispatchEvent('tabBarItemTap', { type: 'tabBarItemTap', index } as UniTabTapEvent);
            }
        });
        root.appendChild(tabBar);
        return root;
    }
    appendItem(pageId: string): void;
    appendItem(itemElement: IUniElement): void;
    appendItem(item: string | IUniElement): void {
        // TODO 暂时仅支持页面ID
        if (typeof item === 'string') {
            const app = this.app;
            const context = app.context!;
            const node = createUniSubPageFrameNode(context, {
                name: item
            });
            const itemPage = getUniApp()!.pageManager.findPageById(item);
            // 设置父页面
            if (itemPage) {
                itemPage.parentPage = this.page;
                this.page.tabBarElement = this;
            }
            // 多包装一层原生节点，以便控制样式
            const page = typeNode.createNode(context, 'Column');
            // 初始隐藏
            page.commonAttribute.visibility(Visibility.Hidden);
            page.appendChild(node);
            this.items.set(item, page);
            this.container.appendChild(page);
        }
        else {
            throw new Error('Method not implemented.');
        }
    }
    initTabBar(tabBar: Map<string, Object>): void {
        // style
        this.setTabBarStyle(tabBar);
        // fill items
        this.initTabBarListAndMidButton(tabBar);
    }
    appendCustomTabBar(tabBar: IUniElement, direction: string): void {
        throw new Error('Method not implemented.');
    }
    switchSelect(pageId: string, index: number): void {
        if (pageId == this.currentItemId) {
            return;
        }
        const page = this.items.get(pageId);
        page?.commonAttribute.visibility(Visibility.Visible);
        if (this.currentItemId) {
            this.items.get(this.currentItemId)?.commonAttribute.visibility(Visibility.Hidden);
        }
        this.currentItemId = pageId;
        this.tabBar.componentInstance.selectedIndex = index;
    }
    hideTabBar(op: Map<string, Object>): void {
        this.tabBar.attribute.visibility(Visibility.None);
        this.isTabBarVisible = false;
    }
    showTabBar(op: Map<string, Object>): void {
        this.tabBar.attribute.visibility(Visibility.Visible);
        this.isTabBarVisible = true;
    }
    setTabBarBadge(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        if (this.tabBarList[index]) {
            this.tabBarList[index].badgeType = 'number';
            this.tabBarList[index].badgeText = op.get('text') as string || '';
        }
    }
    removeTabBarBadge(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        if (this.tabBarList[index]) {
            this.tabBarList[index].badgeType = undefined;
            this.tabBarList[index].badgeText = '';
        }
    }
    showTabBarRedDot(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        if (this.tabBarList[index]) {
            this.tabBarList[index].badgeType = 'dot';
        }
    }
    hideTabBarRedDot(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        if (this.tabBarList[index]) {
            this.tabBarList[index].badgeType = undefined;
        }
    }
    setTabBarItem(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        if (this.tabBarList[index]) {
            op.has('visible') && (this.tabBarList[index].visible = op.get('visible') as boolean);
            op.has('text') && (this.tabBarList[index].text = op.get('text') as string);
            op.has('iconPath') && (this.tabBarList[index].iconPath = op.get('iconPath') as string);
            op.has('selectedIconPath') && (this.tabBarList[index].selectedIconPath = op.get('selectedIconPath') as string);
            op.has('pagePath') && (this.tabBarList[index].pagePath = op.get('pagePath') as string);
            op.has('badgeType') && (this.tabBarList[index].badgeType = op.get('badgeType') as 'number' | 'dot' | undefined);
            op.has('badgeText') && (this.tabBarList[index].badgeText = op.get('badgeText') as string);
        }
    }
    setTabBarStyle(tabBar: Map<string, Object>): void {
        this.tabBarStyle.backgroundColor = tabBar.get('backgroundColor') as string;
        this.tabBarStyle.borderColor = tabBar.get('borderColor') as string;
        this.tabBarStyle.color = tabBar.get('color') as string;
        this.tabBarStyle.selectedColor = tabBar.get('selectedColor') as string;
    }
    getTabBarHeight(): number {
        // TODO TabBarHeight = 50?
        return 50;
    }
    private initTabBarListAndMidButton(tabBar: Map<string, Object>) {
        if (!tabBar.get('list')) {
            return;
        }
        const list = tabBar.get('list') as Array<Object>;
        list.forEach((item) => {
            const tabBarItem = new TabBarItem(item as TabBarItem);
            this.tabBarList.push(tabBarItem);
        });
        // TODO MidButton not implemented
    }
    private checkIndex(index: number): boolean {
        if (index < 0 || index >= this.items.size) {
            return false;
        }
        return true;
    }
    override requestFullscreen(): void {
        if (this.isTabBarVisible) {
            this.requestFullscreenRestore = true;
            this.hideTabBar(new Map());
        }
    }
    exitFullscreen() {
        if (this.requestFullscreenRestore && !this.isTabBarVisible) {
            this.showTabBar(new Map());
            this.requestFullscreenRestore = false;
        }
    }
}
