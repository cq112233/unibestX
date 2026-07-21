import { Element } from '@dcloudio/uni-app-x/types/native'
import { UniElementImpl } from '../dom/UniElement'

export function getValidNodes(
  node: Element | null,
  selector: string,
  list: Element[],
  getAll = false
): void {
  if (node == null) {
    return
  }
  if (isValidNode(node, selector)) {
    list.push(node)
    if (!getAll) {
      return
    }
  }
  node.childNodes.forEach(child => {
    getValidNodes(child, selector, list, getAll)
  })
}

function isValidNode(node: Element, selector: string): boolean {
  if (selector.startsWith('.')) {
    return node.classList.includes(selector.substring(1))
  } else if (selector.startsWith('#')) {
    return node.getAttribute('id') == selector.substring(1)
  }
  return node.tagName?.toUpperCase() == selector.toUpperCase()
}

export const NEED_FORCE_RENDER_ATTRIBUTES = ['top', 'right', 'bottom', 'left']

export function isNeedForceRenderAttribute(attr: string, el: UniElementImpl): boolean {
  if(NEED_FORCE_RENDER_ATTRIBUTES.includes(attr) && el.needForceRenderAnimationKeys.indexOf(attr) == 0) {
    el.needForceRenderAnimationKeys.shift()
    return true
  }
  return false
}