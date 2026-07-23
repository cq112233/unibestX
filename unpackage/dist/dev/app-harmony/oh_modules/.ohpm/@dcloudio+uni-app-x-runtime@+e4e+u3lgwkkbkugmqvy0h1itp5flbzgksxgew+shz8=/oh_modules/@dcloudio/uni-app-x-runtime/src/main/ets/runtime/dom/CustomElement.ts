import { Element as IUniElement, } from '@dcloudio/uni-app-x/types/native'
import { ElementOptions } from './BuiltInElement'

type ObservedAttributes = (string[]) | undefined

interface CustomElementConstructor {
  observedAttributes?: ObservedAttributes

  new(...params: any[]): IUniElement
}

interface ElementDefinitionOptions {
  /**
   * 暂不支持
   */
  extends?: string;
}

export interface CustomElementOptions extends ElementDefinitionOptions, ElementOptions {
  observedAttributes?: ObservedAttributes
}

export const store = new Map<string, [CustomElementConstructor, CustomElementOptions]>()

export const customElements = {
  define(
    name: string,
    constructor: CustomElementConstructor,
    options?: ElementDefinitionOptions,
  ): void {
    store.set(name, [
      constructor,
      {
        extends: options?.extends,
        // TODO 解引用
        observedAttributes: constructor.observedAttributes,
      }
    ])
  },
  get(name: string): CustomElementConstructor | undefined {
    return store.get(name)?.[0]
  },
}

export interface UniCustomElement {
  connectedCallback?(): void

  disconnectedCallback?(): void

  adoptedCallback?(): void

  attributeChangedCallback?(
    name: string,
    oldValue: Object | null,
    newValue: Object | null
  ): void
}
