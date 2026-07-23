import { PageNode } from "./PageNode";
import { UniElementImpl } from "./UniElement"
import { UniFormControl } from "./UniFormControl"
import { INodeData } from "./NodeData"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniFormControlElement<T> extends UniElementImpl implements UniFormControl<T> {
  constructor (data: INodeData, pageNode: PageNode)
  reset(): void;
  get value(): T;
  set value(value: T);
  name: string
}
