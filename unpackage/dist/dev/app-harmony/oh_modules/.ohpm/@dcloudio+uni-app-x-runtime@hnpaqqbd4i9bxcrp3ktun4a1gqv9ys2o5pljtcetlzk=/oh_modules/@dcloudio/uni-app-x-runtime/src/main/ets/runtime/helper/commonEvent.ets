const store = new WeakMap<UICommonEvent | CommonAttribute, Map<string, Array<Function>>>()

/**
 * 事件监听代理
 * 用于解决 UICommonEvent 只能设置一个监听函数的问题
 */
export function addEventListenerByProxy(commonEvent: UICommonEvent | CommonAttribute, eventMethod: string, callback: Function) {
  let map = store.get(commonEvent)
  if (!map) {
    map = new Map()
    store.set(commonEvent, map)
  }
  let array = map.get(eventMethod)
  if (!array) {
    array = []
    map.set(eventMethod, array)
    commonEvent[eventMethod]((...args: Object[]) => {
      array!.forEach((fn) => {
        fn(...args)
      })
    })
  }
  array.push(callback)
}

export function clearEventListenerByProxy(commonEvent: UICommonEvent | CommonAttribute) {
  store.delete(commonEvent)
}

export function removeEventListenerByProxy(commonEvent: UICommonEvent | CommonAttribute, eventMethod: string, callback: Function) {
  let map = store.get(commonEvent)
  if (!map) {
    return
  }
  let array = map.get(eventMethod)
  if (!array) {
    return
  }
  let index = array.indexOf(callback)
  if (index !== -1) {
    array.splice(index, 1)
  }
  if (array.length === 0) {
    map.delete(eventMethod)
    if (map.size === 0) {
      store.delete(commonEvent)
    }
  }
}
