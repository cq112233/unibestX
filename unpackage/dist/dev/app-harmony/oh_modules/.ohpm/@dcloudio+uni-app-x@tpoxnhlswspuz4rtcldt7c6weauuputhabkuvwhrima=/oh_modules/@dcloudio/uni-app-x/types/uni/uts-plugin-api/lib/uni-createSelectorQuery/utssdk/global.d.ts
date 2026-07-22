// 本文件为自动构建生成
import {
  CreateSelectorQuery as CreateSelectorQueryOrigin,
  SelectorQueryNodeInfoCallback as SelectorQueryNodeInfoCallbackOrigin,
  NodeInfo as NodeInfoOrigin,
  NodeField as NodeFieldOrigin,
  NodesRef as NodesRefOrigin,
  SelectorQuery as SelectorQueryOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateSelectorQuery = CreateSelectorQueryOrigin
  type SelectorQueryNodeInfoCallback = SelectorQueryNodeInfoCallbackOrigin
  type NodeInfo = NodeInfoOrigin
  type NodeField = NodeFieldOrigin
  type NodesRef = NodesRefOrigin
  type SelectorQuery = SelectorQueryOrigin
  interface Uni extends UniOrigin { }
}
