import { CSSStyleDeclaration } from "./CSSStyleDeclaration";
import { DOMRect } from "./DOMRect";
import { DrawableContext } from "./DrawableContext";
import { UniElement, UniViewElement, GetBoundingClientRectAsyncOptions, RequestFullscreenOptions } from "./IUniElement";
import { UniEvent } from './UniEvent'
import { TakeSnapshotOptions } from "./SnapshotOptions";
import { UniCallbackWrapper } from "./UniCallbackWrapper";
import { INodeData } from "./NodeData"
import { PageNode } from "./PageNode"
import { UniAnimation } from "./UniAnimation";

/**
 * view元素对象
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export class UniElementImpl implements UniElement {
  classList: string[];
  firstChild: UniElement;
  lastChild: UniElement;
  parentNode: UniElement;
  parentElement: UniElement;
  previousSibling: UniElement;
  nextSibling: UniElement;
  nextElementSibling: UniElement;
  children: UniElement[];
  childNodes: UniElement[];
  tagName: string;
  nodeName: string;
  dataset: Map<string, any>;
  attributes: Map<string, any>;
  style: CSSStyleDeclaration;
  scrollWidth: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  offsetLeft: number;
  offsetTop: number;
  offsetWidth: number;
  offsetHeight: number;
  ext: Map<string, any>;
  getNodeId(): string;
  takeSnapshot(options: TakeSnapshotOptions): void;
  appendChild(aChild: UniElement): void;
  insertBefore(newChild: UniElement, refChild?: UniElement | null): UniElement | null;
  setAttribute(key: string, value: string): void;
  getAttribute(key: string): string;
  setAnyAttribute(key: string, value: any): void;
  getAnyAttribute(key: string): any | null;
  hasAttribute(key: string): boolean;
  removeAttribute(key: string): void;
  updateStyle(map: Map<string, any>): void;
  getBoundingClientRect(): DOMRect;
  getBoundingClientRectAsync(options?: GetBoundingClientRectAsyncOptions | null): Promise<DOMRect>
  getDrawableContext(): DrawableContext;
  addEventListener<T extends UniEvent, R>(type: string, callback: (event: T) => R): UniCallbackWrapper;
  removeEventListener(type: string, callbackWrapper: UniCallbackWrapper): void;
  removeChild(aChild: UniElement): UniElement | null;
  remove(): void;
  dispatchEvent(type: string, value: UniEvent): void;
  dispatchEvent(value: UniEvent): void
  scrollTo(x: number, y: number): void;
  scrollBy(x: number, y: number): void;
  querySelector(selector: string.cssSelectorString): UniElement;
  querySelectorAll(selector: string.cssSelectorString): UniElement[];
  focus(): void;
  blur(): void;
  getAndroidView(): View | null
  getAndroidView<T>(): T | null
  getAndroidActivity(): Activity | null
  getIOSView(): UIView | null
  getPage(): UniPage | null
  getHarmonyController(): any | null
  getHarmonyController<T>(): T | null
  constructor(data: INodeData, pageNode?: PageNode)
  requestFullscreen(options: RequestFullscreenOptions): void;
  animate(keyframes: any, options: any): UniAnimation | null;
  isConnected: boolean
  uniPage: UniPage
}

/**
 * view元素对象
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export class UniViewElementImpl extends UniElementImpl implements UniViewElement {
}
