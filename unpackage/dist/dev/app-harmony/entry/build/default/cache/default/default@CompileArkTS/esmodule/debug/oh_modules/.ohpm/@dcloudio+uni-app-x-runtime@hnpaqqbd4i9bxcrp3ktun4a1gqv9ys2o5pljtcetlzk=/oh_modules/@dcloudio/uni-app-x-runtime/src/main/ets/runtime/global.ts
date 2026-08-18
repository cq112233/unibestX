import { buildElement, buildEvent, define, NodeData, UniElementImpl, UniCustomEvent, UniPointerEvent, UniScrollViewElementImpl, UniTextElementImpl, UniTouch, UniTouchEvent, UniInputEvent, waitNativeRender, } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/dom&1.0.0";
import { UniPageImpl, UniNormalPageImpl, UniDialogPageImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniPage&1.0.0";
import { UniAppImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniApp&1.0.0";
import { getApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniApp&1.0.0";
import { requestAnimationFrame, cancelAnimationFrame } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/AnimationFrame&1.0.0";
import { UniViewElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniViewElement&1.0.0";
import { UniVueElement } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniVueElement&1.0.0";
import { UniNativeViewElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniNativeViewElement&1.0.0";
globalThis.UniNativeViewElementImpl = UniNativeViewElementImpl;
globalThis.UniElementImpl = UniElementImpl;
// 兼容安卓用法
globalThis.UniPageImpl = UniPageImpl;
globalThis.UniNormalPageImpl = UniNormalPageImpl;
globalThis.UniDialogPageImpl = UniDialogPageImpl;
globalThis.UniAppImpl = UniAppImpl;
globalThis.getApp = getApp;
globalThis.requestAnimationFrame = requestAnimationFrame;
globalThis.cancelAnimationFrame = cancelAnimationFrame;
globalThis.UniCustomEvent = UniCustomEvent;
globalThis.UniTouchEvent = UniTouchEvent;
globalThis.UniTouch = UniTouch;
globalThis.UniPointerEvent = UniPointerEvent;
globalThis.UniInputEvent = UniInputEvent;
// 兼容安卓用法
globalThis.UniElement = UniElementImpl;
globalThis.UniTextElement = UniTextElementImpl;
globalThis.UniViewElementImpl = UniViewElementImpl;
globalThis.UniScrollViewElementImpl = UniScrollViewElementImpl;
globalThis.UniVueElement = UniVueElement;
globalThis.NodeData = NodeData;
globalThis.buildEvent = buildEvent;
globalThis.buildElement = buildElement;
// 允许 js framework 注册 Element
globalThis.customElements = { define };
// 模拟全局 waitNativeRender 方法
globalThis.waitNativeRender = waitNativeRender;
