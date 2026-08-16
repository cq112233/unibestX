import { UniTouchEvent } from "./UniTouchEvent";
import type { UniElementImpl } from '../UniElement';
export declare const LONGPRESS_TIMEOUT = 350;
export declare const LONGPRESS_THRESHOLD = 10;
export declare function onLongPress<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, callback: (evt: UniTouchEvent) => void): void;
export declare function clearLongPress(element: UniElementImpl): void;
export declare function offLongPress<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, callback: Function): void;
