import { NavBar, NavBarOptions } from '../components/NavBar'
import { createUniFrameNode, UniFrameNode } from '../Node'

@Builder
export function NavBarBuilder(options: NavBarOptions) {
  NavBar(options)
}

export class NavBarFrameNode extends UniFrameNode {
  componentInstance!: NavBar
}

export function createNavBarFrameNode(context: UIContext, options: NavBarOptions): NavBarFrameNode {
  const node = createUniFrameNode<NavBarFrameNode, NavBarOptions>(context, NavBarFrameNode,
    wrapBuilder(NavBarBuilder),
    options)
  return node
}
