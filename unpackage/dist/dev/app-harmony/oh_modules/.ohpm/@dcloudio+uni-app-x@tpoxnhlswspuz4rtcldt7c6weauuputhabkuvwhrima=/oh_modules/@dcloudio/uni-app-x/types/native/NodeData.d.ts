/**
 * @package io.dcloud.uniapp.interfaces
 * @autodoc false
 */
export interface INodeData {
  id: string
  name: string
  attrs: Map<string, any | null>
  style: Map<string, any | null>
}

/**
 * @package io.dcloud.uniapp.native.node
 * @autodoc false
 */
export class NodeData implements INodeData {
  id: string
  name: string
  attrs: Map<string, any | null>
  style: Map<string, any | null>
  constructor (id: string, name: string, attrs: Map<string, any | null>, style: Map<string, any | null>)
}
