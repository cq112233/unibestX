import { ComponentBaseOptions } from '../Node';
export interface ITabBar {
    style: TabBarStyle;
    list: TabBarListObservedArray<TabBarItem>;
    onTabItemClick: ((index: number) => void);
}
export interface TabBarOptions extends ComponentBaseOptions, ITabBar {
}
@Observed
export declare class TabBarItem {
    text?: string;
    iconPath?: string;
    selectedIconPath?: string;
    pagePath: string;
    visible: boolean;
    badgeType?: undefined | 'dot' | 'number';
    badgeText?: string;
    constructor(options: TabBarItem);
}
@Observed
export declare class TabBarStyle {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    selectedColor?: string;
}
@Observed
export declare class TabBarListObservedArray<T> extends Array<T> {
    constructor();
}
@Component
export declare struct TabBar {
    onAboutToAppear?: (instance: TabBar) => void;
    attributeUpdater?: object;
    @ObjectLink
    list: TabBarListObservedArray<TabBarItem>;
    @ObjectLink
    style: TabBarStyle;
    @State
    selectedIndex: number;
    onTabItemClick?: ((index: number) => void);
    build(): void;
    aboutToAppear(): void;
}
