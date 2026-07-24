import { INodeData } from '@dcloudio/uni-app-x/types/native';
import { NativeMap } from './NativeMap';
import { ElementOptions } from './BuiltInElement';
export declare class NodeData implements INodeData {
    id: string;
    name: string;
    attrs: NativeMap<string, Object | null>;
    style: NativeMap<string, Object | null>;
    options?: ElementOptions;
    constructor(id: string, name: string, attrs?: NativeMap<string, Object | null>, style?: NativeMap<string, Object | null>);
}
