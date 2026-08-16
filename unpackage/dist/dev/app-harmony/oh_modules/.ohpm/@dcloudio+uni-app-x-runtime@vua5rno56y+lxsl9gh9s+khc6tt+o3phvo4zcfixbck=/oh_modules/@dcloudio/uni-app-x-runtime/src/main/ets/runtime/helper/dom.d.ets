import { Element } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../dom/UniElement';
export declare function getValidNodes(node: Element | null, selector: string, list: Element[], getAll?: boolean): void;
export declare const NEED_FORCE_RENDER_ATTRIBUTES: string[];
export declare function isNeedForceRenderAttribute(attr: string, el: UniElementImpl): boolean;
