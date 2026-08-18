import { TabBar, TabBarItem, TabBarListObservedArray, TabBarStyle } from './TabBar';
export interface TabBarWithAnimationOptions {
    onAboutToAppear?: (instance: TabBar) => void;
    style: TabBarStyle;
    list: TabBarListObservedArray<TabBarItem>;
    onTabItemClick?: (index: number) => void;
    attributeUpdater?: object;
}
@Builder
export declare function TabBarWithAnimation(options: TabBarWithAnimationOptions): void;
