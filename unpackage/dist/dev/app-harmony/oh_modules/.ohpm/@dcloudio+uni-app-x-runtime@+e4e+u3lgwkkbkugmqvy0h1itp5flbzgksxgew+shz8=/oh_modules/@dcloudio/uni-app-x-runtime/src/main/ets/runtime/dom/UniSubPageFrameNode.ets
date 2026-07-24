import { UniSubPage, UniSubPageOptions } from '../components/Page'
import { createUniFrameNode, UniFrameNode } from '../Node'

@Builder
export function UniSubPageBuilder(options: UniSubPageOptions) {
  UniSubPage(options)
}

export class UniSubPageFrameNode extends UniFrameNode {
  componentInstance!: UniSubPage
}

export function createUniSubPageFrameNode(context: UIContext, options: UniSubPageOptions): UniSubPageFrameNode {
  const node = createUniFrameNode<UniSubPageFrameNode, UniSubPageOptions>(context, UniSubPageFrameNode,
    wrapBuilder(UniSubPageBuilder),
    options)
  return node
}
