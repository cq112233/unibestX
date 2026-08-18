import { UniSubPage, UniSubPageOptions } from '../components/Page';
import { UniFrameNode } from '../Node';
@Builder
export declare function UniSubPageBuilder(options: UniSubPageOptions): void;
export declare class UniSubPageFrameNode extends UniFrameNode {
    componentInstance: UniSubPage;
}
export declare function createUniSubPageFrameNode(context: UIContext, options: UniSubPageOptions): UniSubPageFrameNode;
