import type { ExitFullscreenOptions, INodeData, UniDocument, UniPageBody as IUniPageBody, UniTabTapEvent } from '@dcloudio/uni-app-x/types/native';
import { TabBarItem } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import { TabBarController, TabBarPageController } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Page&1.0.0";
import type { PageContainer } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Page&1.0.0";
import { getSafeAreaInsets } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { UniNativePageImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniNativePage&1.0.0";
import { UniTabsElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniTabsElement&1.0.0";
const TAB_BAR_ANIMATION_DURATION = 300;
class UniTabBarDocumentImpl {
    private readonly tabsElement: UniTabsElementImpl;
    constructor(page: UniNativeTabBarPage) {
        this.tabsElement = new UniTabsElementImpl(page);
    }
    createElement(_data: string | INodeData): UniTabsElementImpl {
        return this.tabsElement;
    }
    appendChild(_child: Object): void {
    }
    getRealDomNodeById<T>(id: string): T | null {
        if (id !== 'tabs') {
            return null;
        }
        return this.tabsElement as T;
    }
    emitTabBarItemTap(index: number) {
        this.tabsElement.dispatchEvent('tabBarItemTap', { type: 'tabBarItemTap', index } as UniTabTapEvent);
    }
}
export class UniNativeTabBarPage extends UniNativePageImpl {
    readonly tabBarController = new TabBarController();
    currentItemId: string | null = null;
    private requestFullscreenRestore = false;
    private readonly tabBarDocument: any;
    private onTabBarVisibleChangeCallbacks: ((size: Size) => void)[] | null = null;
    private tabBarVisibilityChangeVersion = 0;
    get type() {
        return 'tabBar';
    }
    constructor(pageUrl: string, pageId: string, pageStyle: Map<string, Object>) {
        super(pageUrl, pageId, pageStyle);
        this.tabBarDocument = new UniTabBarDocumentImpl(this);
        this.document = this.tabBarDocument as any;
        this.tabBarController.onTabItemClick = (index: number) => {
            this.tabBarDocument.emitTabBarItemTap(index);
        };
    }
    override init(page: PageContainer) {
        super.init(page);
        page.tabBarController = this.tabBarController;
    }
    override createDocument(_documentData: INodeData): UniDocument {
        return this.tabBarDocument;
    }
    override get pageBody(): IUniPageBody {
        // tabBar 页面本身不是业务内容容器，不应访问 pageBody
        throw new Error('Not implemented');
    }
    appendItem(pageId: string): void {
        if (this.tabBarController.pages.some(item => item.pageId === pageId)) {
            return;
        }
        const itemPage = this.app.pageManager.findPageById(pageId);
        if (itemPage) {
            itemPage.parentPage = this;
        }
        this.tabBarController.pages.push(new TabBarPageController(pageId));
    }
    initTabBar(tabBar: Map<string, Object>): void {
        this.setTabBarStyle(tabBar);
        this.initTabBarList(tabBar);
    }
    hideTabBar(op: Map<string, Object>): void {
        this.tabBarVisibilityChangeVersion += 1;
        this.tabBarController.isVisible = false;
        this.emitTabBarVisibleChange();
        if (op.get('animation') === true) {
            this.animateTabBarHeight(0);
            return;
        }
        this.updateTabBarHeight(0);
    }
    showTabBar(op: Map<string, Object>): void {
        this.tabBarVisibilityChangeVersion += 1;
        const tabBarVisibilityChangeVersion = this.tabBarVisibilityChangeVersion;
        this.updateTabBarHeight(0);
        if (op.get('animation') === true) {
            this.animateTabBarHeight('auto', () => {
                if (tabBarVisibilityChangeVersion !== this.tabBarVisibilityChangeVersion) {
                    return;
                }
                this.tabBarController.isVisible = true;
                this.emitTabBarVisibleChange();
            });
            return;
        }
        this.updateTabBarHeight('auto');
        this.tabBarController.isVisible = true;
        this.emitTabBarVisibleChange();
    }
    setTabBarBadge(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        const item = this.tabBarController.list[index];
        if (item) {
            item.badgeType = 'number';
            item.badgeText = op.get('text') as string || '';
        }
    }
    removeTabBarBadge(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        const item = this.tabBarController.list[index];
        if (item) {
            item.badgeType = undefined;
            item.badgeText = '';
        }
    }
    showTabBarRedDot(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        const item = this.tabBarController.list[index];
        if (item) {
            item.badgeType = 'dot';
        }
    }
    hideTabBarRedDot(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        const item = this.tabBarController.list[index];
        if (item) {
            item.badgeType = undefined;
        }
    }
    setTabBarItem(op: Map<string, Object>): void {
        const index = op.get('index') as number;
        const item = this.tabBarController.list[index];
        if (item) {
            op.has('visible') && (item.visible = op.get('visible') as boolean);
            op.has('text') && (item.text = op.get('text') as string);
            op.has('iconPath') && (item.iconPath = op.get('iconPath') as string);
            op.has('selectedIconPath') && (item.selectedIconPath = op.get('selectedIconPath') as string);
            op.has('pagePath') && (item.pagePath = op.get('pagePath') as string);
            op.has('badgeType') && (item.badgeType = op.get('badgeType') as 'number' | 'dot' | undefined);
            op.has('badgeText') && (item.badgeText = op.get('badgeText') as string);
        }
    }
    setTabBarStyle(tabBar: Map<string, Object>): void {
        this.tabBarController.style.backgroundColor = tabBar.get('backgroundColor') as string;
        this.tabBarController.style.borderColor = tabBar.get('borderColor') as string;
        this.tabBarController.style.color = tabBar.get('color') as string;
        this.tabBarController.style.selectedColor = tabBar.get('selectedColor') as string;
    }
    override getContentSlotSize(): Size {
        const windowSize = this.getWindowSize();
        const tabBarHeight = this.getTabBarHeight();
        return {
            width: windowSize.width,
            height: Math.max(windowSize.height - tabBarHeight, 0),
        } as Size;
    }
    override onContentSlotSizeChange(callback: (size: Size) => void): () => void {
        const stopWindowSize = this.onWindowSizeChange(() => {
            callback(this.getContentSlotSize());
        });
        if (!this.onTabBarVisibleChangeCallbacks) {
            this.onTabBarVisibleChangeCallbacks = [];
        }
        this.onTabBarVisibleChangeCallbacks.push(callback);
        return () => {
            stopWindowSize();
            const index = this.onTabBarVisibleChangeCallbacks?.findIndex((item) => item === callback) ?? -1;
            if (index !== -1) {
                this.onTabBarVisibleChangeCallbacks?.splice(index, 1);
            }
        };
    }
    getTabBarHeight(): number {
        if (this.tabBarController && !this.tabBarController.isVisible) {
            return 0;
        }
        return 50 + getSafeAreaInsets().bottom;
    }
    private updateTabBarHeight(height: number | string): void {
        this.tabBarController.attributeUpdater.getAttribute((attribute) => {
            attribute.height(height);
        });
    }
    private animateTabBarHeight(height: number | string, onFinish?: () => void): void {
        const context = this.app.context;
        if (context == null) {
            this.updateTabBarHeight(height);
            onFinish?.();
            return;
        }
        context.animateTo({
            duration: TAB_BAR_ANIMATION_DURATION,
            curve: Curve.EaseOut,
            playMode: PlayMode.Normal,
            onFinish: onFinish,
        }, () => {
            this.updateTabBarHeight(height);
        });
    }
    private emitTabBarVisibleChange() {
        const size = this.getContentSlotSize();
        this.onTabBarVisibleChangeCallbacks?.forEach((callback) => {
            callback(size);
        });
    }
    private initTabBarList(tabBar: Map<string, Object>) {
        this.tabBarController.list.splice(0, this.tabBarController.list.length);
        const list = tabBar.get('list') as Array<Object> | undefined;
        list?.forEach((item) => {
            this.tabBarController.list.push(new TabBarItem(item as TabBarItem));
        });
    }
    updateSelectedIndex(index: number) {
        this.tabBarController.selectedIndex = index;
        const tabBar = this.tabBarController.tabBar;
        if (tabBar) {
            tabBar.selectedIndex = index;
        }
    }
    override requestFullscreen(): void {
        if (this.tabBarController.isVisible) {
            this.requestFullscreenRestore = true;
            this.hideTabBar(new Map());
        }
    }
    override exitFullscreen(_options?: ExitFullscreenOptions | null): Promise<void> | undefined {
        if (this.requestFullscreenRestore && !this.tabBarController.isVisible) {
            this.showTabBar(new Map());
        }
        this.requestFullscreenRestore = false;
        return;
    }
}
