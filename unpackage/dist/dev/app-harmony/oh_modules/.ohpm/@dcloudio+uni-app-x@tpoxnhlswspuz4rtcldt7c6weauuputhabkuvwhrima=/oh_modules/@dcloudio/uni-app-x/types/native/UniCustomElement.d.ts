export interface UniCustomElement {
  /**
   * 当元素被插入到文档时调用
   */
  connectedCallback?(): void;
  /**
   * 当元素从文档中删除时调用
   */
  disconnectedCallback?(): void;
  /**
   * 当元素被移动到新文档时调用
   */
  adoptedCallback?(): void;
  /**
   * 当元素的属性被添加、移除或更改时调用
   */
  attributeChangedCallback?(
    name: string,
    oldValue: any | null,
    newValue: any | null
  ): void;
}

export type IUniCustom = UniCustomElement
