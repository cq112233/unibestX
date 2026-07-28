import { UniTouchEvent } from "./UniTouchEvent";
import type { UniElementImpl } from '../UniElement';
export declare function init<T extends FrameNode | null = FrameNode | null>(type: string, element: UniElementImpl<T>, event: TouchEvent): UniTouchEvent;
