import { NavBar, NavBarOptions } from '../components/NavBar';
import { UniFrameNode } from '../Node';
@Builder
export declare function NavBarBuilder(options: NavBarOptions): void;
export declare class NavBarFrameNode extends UniFrameNode {
    componentInstance: NavBar;
}
export declare function createNavBarFrameNode(context: UIContext, options: NavBarOptions): NavBarFrameNode;
