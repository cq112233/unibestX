import { TabBar, TabBarOptions } from '../components/TabBar';
import { UniFrameNode } from '../Node';
@Builder
export declare function TabBarBuilder(options: TabBarOptions): void;
export declare class TabBarFrameNode extends UniFrameNode {
    componentInstance: TabBar;
}
export declare function createTabBarFrameNode(context: UIContext, options: TabBarOptions): TabBarFrameNode;
