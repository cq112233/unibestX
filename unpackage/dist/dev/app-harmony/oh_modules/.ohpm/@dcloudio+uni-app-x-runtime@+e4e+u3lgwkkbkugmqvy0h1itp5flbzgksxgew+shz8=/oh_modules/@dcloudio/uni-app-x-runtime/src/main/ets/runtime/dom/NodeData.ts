import { INodeData } from '@dcloudio/uni-app-x/types/native'
import { NativeMap } from './NativeMap'
import { ElementOptions } from './BuiltInElement'

export class NodeData implements INodeData {
  public options?: ElementOptions

  constructor(
    public id: string,
    public name: string,
    public attrs: NativeMap<string, Object | null> = new NativeMap(),
    public style: NativeMap<string, Object | null> = new NativeMap(),
  ) {
  }
}
