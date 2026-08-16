import type { UniElement as IUniElement, UniSwiperElement as IUniSwiperElement, UniSwiperTransitionEventDetail } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent, UniCustomEventOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCustomEvent&1.0.0";
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { typeNode } from "@ohos:arkui.node";
import { formatColor, formatLength } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { NativeMap as Map } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/NativeMap&1.0.0";
import type { ModifyEvent, InternalUniEvent } from './UniEvent';
import type { UniTouchEvent } from './UniTouchEvent';
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { callObject } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import type { UniSwiperItemElementImpl } from './UniSwiperItemElement';
const EASING_FUNCTION_TYPES = new Map<string, Curve>([
    ['default', Curve.Ease],
    ['linear', Curve.Linear],
    ['easeInCubic', Curve.EaseIn],
    ['easeOutCubic', Curve.EaseOut],
    ['easeInOutCubic', Curve.EaseInOut],
]);
interface ChangeEventDetail {
    current: number;
    currentItemId?: string;
    source: 'autoplay' | 'touch';
}
interface BorderWidth {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
interface PaddingSize {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
interface StyleCache {
    padding: PaddingSize;
    borderWidth: BorderWidth;
}
export class UniSwiperElementImpl extends UniElementImpl<typeNode.Swiper> implements IUniSwiperElement {
    private controller: SwiperController = new SwiperController();
    private showIndicator: boolean = false;
    private indicatorStyle: DotIndicator = Indicator.dot().color('rgba(0, 0, 0, 0.3)').selectedColor('#000000');
    private duration: number = 500;
    private touching: boolean = false;
    private touchEndTimer: number = -1;
    private preventTouchMove: boolean = false;
    private vertical: boolean = false;
    private interval: number = 5000;
    private autoPlay: boolean = false;
    private loop: boolean = false;
    private displayMultipleItems: number = 1;
    private currentIndex: number = 0;
    private isAppear: boolean = false;
    protected lastTouchEvent: UniTouchEvent | null = null;
    private needPreventTouchMoveNodes = ['SLIDER'];
    private styleCache!: StyleCache;
    private needDisableSwipe: boolean = false;
    protected maxChildHeight: number = -1;
    // 用于区分两种布局：swiper 自身已有尺寸时让 swiper-item 铺满一页；否则由内容撑开 swiper。
    protected hasOwnHeight: boolean = false;
    protected hasInitHeight: boolean = false;
    protected hasOwnFlexGrow: boolean = false;
    // updateAutoHeightByChildren 会通过 parseStyle 写入测量高度，避免这次内部写入被误判为用户设置高度。
    private isUpdatingAutoHeight: boolean = false;
    static override get defaultStyle() {
        const baseDefaultStyle = super.defaultStyle as Map<string, [
            string
        ] | [
            string,
            boolean
        ]>;
        const defaultStyle = new Map(baseDefaultStyle);
        defaultStyle.set('height', ['150px', true]);
        return defaultStyle;
    }
    protected override initClass(): void {
        this.styleCache = {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            borderWidth: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };
    }
    constructor() {
        super();
        const swiper = this.frameNode;
        swiper.initialize(this.controller);
        // 支持子组件 preventDefault 阻止 swiper 滑动行为
        this.addEventListener('touchstart', (event: UniTouchEvent) => {
            this.lastTouchEvent = event;
        });
        this.addEventListener('_touchstartStopPropagation', (event: ModifyEvent) => {
            this.lastTouchEvent = event.uniEvent as UniTouchEvent;
        });
        this.addEventListener('touchmove', (event: UniTouchEvent) => {
            this.lastTouchEvent = event;
        });
        this.addEventListener('_touchmoveStopPropagation', (event: ModifyEvent) => {
            this.lastTouchEvent = event.uniEvent as UniTouchEvent;
        });
        try {
            callObject(swiper.attribute, swiper.attribute, 'onContentWillScroll', [() => {
                    return !(this.lastTouchEvent as Object as InternalUniEvent).defaultPrevented;
                }]);
        }
        catch (e) {
            console.error('onContentWillScroll error:', e.message);
        }
        swiper.attribute.onChange((index: number) => {
            this.handleAutoPlayNotLoopBehavior(index);
        });
        swiper.attribute.onAppear(() => {
            this.isAppear = true;
            this.updateAutoHeightByChildren();
        });
        // 某些子组件有滑动交互，此时需要阻止 swiper 滑动行为
        this.addEventListener('touchmove', (event: UniTouchEvent) => {
            if (!this.preventTouchMove && event.target && this.needPreventTouchMoveNodes.includes(event.target.nodeName)) {
                this.preventTouchMove = true;
                swiper.attribute.disableSwipe(true);
            }
        });
        this.addEventListener('touchend', () => {
            this.preventTouchMove = false;
            if (!this.needDisableSwipe) {
                swiper.attribute.disableSwipe(false);
            }
        });
    }
    protected override createFrameNode(): typeNode.Swiper {
        const swiper = typeNode.createNode(this.app.context, 'Swiper');
        swiper.attribute.indicator(false);
        swiper.attribute.curve(Curve.Linear);
        swiper.attribute.loop(false);
        swiper.attribute.interval(this.interval);
        swiper.attribute.onGestureSwipe(() => {
            this.touching = true;
            clearTimeout(this.touchEndTimer);
            this.touchEndTimer = setTimeout(() => {
                this.touching = false;
            }, this.duration);
        });
        return swiper;
    }
    override parseStyle(key: string, value: Object): boolean {
        const isRemoveStyle = value === '';
        value = this.normalizeStyleValue(key, value);
        switch (key) {
            case 'height':
                // 默认 150px 只是组件默认值，不能当成用户主动设置高度，否则会阻断内容自适应高度。
                if (!this.hasInitHeight && value === '150px') {
                    this.hasInitHeight = true;
                }
                else if (isRemoveStyle) {
                    this.hasOwnHeight = false;
                }
                else if (!this.isUpdatingAutoHeight) {
                    // 用户设置了明确高度时进入 viewport 布局；height:auto 仍然保留内容撑高能力。
                    this.hasOwnHeight = value !== 'auto';
                    if (this.hasOwnHeight) {
                        this.maxChildHeight = -1;
                    }
                }
                const result = super.parseStyle(key, value);
                this.updateSwiperItemsViewportLayout();
                return result;
            case 'flexGrow': {
                const flexGrow = Number(value);
                // flex-grow > 0 表示 swiper 会从父容器获得确定高度，也需要让 swiper-item 铺满这一页。
                this.hasOwnFlexGrow = !isNaN(flexGrow) && flexGrow > 0;
                if (this.hasOwnFlexGrow) {
                    this.maxChildHeight = -1;
                }
                const result = super.parseStyle(key, value);
                this.updateSwiperItemsViewportLayout();
                return result;
            }
            default:
                return super.parseStyle(key, value);
        }
    }
    override insertBefore(child: IUniElement, anchor?: IUniElement | null | undefined): IUniElement | null {
        const result = super.insertBefore(child, anchor);
        // 新增 swiper-item 时按当前 swiper 布局模式同步一次，避免动态插入的 item 高度为 0。
        this.updateSwiperItemViewportLayout(child as UniElementImpl);
        return result;
    }
    override removeChild(aChild: IUniElement): IUniElement | null {
        const result = super.removeChild(aChild);
        if ((result as UniElementImpl).tagName === 'SWIPER-ITEM') {
            // 离开 swiper 后恢复 item 自身样式，避免 absolute/100% 等内部布局残留到外部。
            (result as UniSwiperItemElementImpl).unsetSwiperViewportLayout();
        }
        return result;
    }
    override removeStyleValue(property: string): void {
        super.removeStyleValue(property);
        switch (property) {
            case 'height':
                this.hasOwnHeight = false;
                this.updateSwiperItemsViewportLayout();
                break;
            case 'flex-grow':
            case 'flexGrow':
                this.hasOwnFlexGrow = false;
                this.updateSwiperItemsViewportLayout();
                break;
        }
    }
    override updateNativeAttribute(key: string, value: any): void {
        switch (key) {
            case 'indicatorDots': {
                this.showIndicator = value as boolean;
                this.frameNode.attribute.indicator(this.showIndicator ? this.indicatorStyle : false);
                break;
            }
            case 'indicatorColor': {
                formatColor(value as string, color => {
                    this.indicatorStyle.color(color);
                });
                this.showIndicator && this.frameNode.attribute.indicator(this.indicatorStyle);
                break;
            }
            case 'indicatorActiveColor': {
                formatColor(value as string, color => {
                    this.indicatorStyle.selectedColor(color);
                });
                this.showIndicator && this.frameNode.attribute.indicator(this.indicatorStyle);
                break;
            }
            case 'autoplay': {
                this.autoPlay = value as boolean;
                this.frameNode.attribute.autoPlay(this.autoPlay);
                break;
            }
            case 'current': {
                if (value !== this.currentIndex) {
                    this.currentIndex = value as number;
                    this.handleIndexChange();
                }
                break;
            }
            case 'currentItemId': {
                const index = this.children.findIndex(child => child['itemId'] === value);
                if (index !== -1) {
                    this.currentIndex = index;
                    this.handleIndexChange();
                }
                break;
            }
            case 'interval': {
                this.interval = value as number;
                this.frameNode.attribute.interval(this.interval);
                break;
            }
            case 'duration': {
                this.duration = value as number;
                this.frameNode.attribute.duration(value as number);
                break;
            }
            case 'circular': {
                this.loop = value as boolean;
                this.frameNode.attribute.loop(this.loop);
                break;
            }
            case 'rebound': {
                this.frameNode.attribute.effectMode(value as boolean ? EdgeEffect.Spring : EdgeEffect.None);
                break;
            }
            case 'vertical': {
                this.vertical = value as boolean;
                this.frameNode.attribute.vertical(this.vertical);
                this.updateSwiperItemsViewportLayout();
                break;
            }
            case 'disableTouch': {
                this.needDisableSwipe = value as boolean;
                this.frameNode.attribute.disableSwipe(this.needDisableSwipe);
                break;
            }
            case 'previousMargin': {
                formatLength(value as string, val => {
                    this.frameNode.attribute.prevMargin(val);
                });
                break;
            }
            case 'nextMargin': {
                formatLength(value as string, val => {
                    this.frameNode.attribute.nextMargin(val);
                });
                break;
            }
            case 'displayMultipleItems': {
                this.displayMultipleItems = value as number;
                this.frameNode.attribute.displayCount(value as number);
                this.updateSwiperItemsViewportLayout();
                break;
            }
            case 'easingFunction': {
                const type = EASING_FUNCTION_TYPES.get(value);
                if (type) {
                    this.frameNode.attribute.curve(type);
                }
            }
        }
    }
    protected handleIndexChange() {
        if (this.isAppear) {
            this.controller.changeIndex(this.currentIndex, true);
        }
        else {
            this.frameNode.attribute.index(this.currentIndex);
        }
    }
    protected getSpecifiedIndexSwiperItemId(index: number): string {
        return this.children.filter(child => child.tagName === 'SWIPER-ITEM')[index]?.['itemId'] || '';
    }
    // 拉齐 autoPlay:true, loop:false 与其他端一致
    protected handleAutoPlayNotLoopBehavior(index: number) {
        if (this.autoPlay && !this.loop && index === this.children.length - 1) {
            const timer = setTimeout(() => {
                this.currentIndex = 0;
                this.controller.changeIndex(this.currentIndex, true);
                clearTimeout(timer);
            }, this.interval - this.duration);
        }
    }
    protected override initNativeEvent(type: string): void | Object {
        switch (type) {
            case 'change': {
                this.frameNode.attribute.onChange((index: number) => {
                    this.handleAutoPlayNotLoopBehavior(index);
                    this.currentIndex = index;
                    this.dispatchEvent(new UniCustomEvent('change', new UniCustomEventOptions<ChangeEventDetail>({
                        current: this.currentIndex,
                        currentItemId: this.getSpecifiedIndexSwiperItemId(index),
                        source: this.touching ? 'touch' : 'autoplay'
                    })));
                });
                break;
            }
            case 'animationfinish': {
                this.frameNode.attribute.onAnimationEnd((index: number) => {
                    this.dispatchEvent(new UniCustomEvent('animationfinish', new UniCustomEventOptions<ChangeEventDetail>({
                        current: index,
                        currentItemId: this.getSpecifiedIndexSwiperItemId(index),
                        source: this.touching ? 'touch' : 'autoplay'
                    })));
                });
                break;
            }
            case 'transition': {
                this.frameNode.attribute.onContentDidScroll((selectedIndex: number, index: number, position: number, mainAxisLength: number) => {
                    if (selectedIndex === index) {
                        const space = -position * mainAxisLength;
                        const res = { dx: 0, dy: 0 } as UniSwiperTransitionEventDetail;
                        if (this.vertical) {
                            res.dy = space;
                        }
                        else {
                            res.dx = space;
                        }
                        this.dispatchEvent(new UniCustomEvent('transition', new UniCustomEventOptions<UniSwiperTransitionEventDetail>(res)));
                    }
                });
                break;
            }
            default:
                super.initNativeEvent(type);
                break;
        }
    }
    protected override deleteNativeEvent(type: string, res: void | Object): boolean {
        switch (type) {
            case 'change': {
                this.frameNode!.attribute.onChange(null);
                return true;
            }
            case 'animationfinish': {
                this.frameNode!.attribute.onAnimationEnd(null);
                return true;
            }
            case 'transition': {
                this.frameNode?.attribute.onContentDidScroll(null);
                return true;
            }
            default:
                return super.deleteNativeEvent(type, res);
        }
    }
    override dispose(): void {
        this.lastTouchEvent = null;
        this.frameNode?.attribute.onGestureSwipe(undefined)
            .onChange(undefined)
            .onAnimationEnd(undefined)
            .onContentDidScroll(undefined)
            .onAppear(undefined);
        // 使用 callObject 避免低版本编译器报错
        try {
            callObject(this.frameNode.attribute, this.frameNode.attribute, 'onContentWillScroll', []);
        }
        catch (e) {
            console.error('remove onContentWillScroll:', e.message);
        }
        this.frameNode?.dispose();
        super.dispose();
    }
    override checkLayout() {
        super.checkLayout();
        const layoutNode = this.layoutNode;
        this.styleCache.borderWidth.top = layoutNode.getLayoutBorder(UniCssFlexEdge.Top);
        this.styleCache.borderWidth.right = layoutNode.getLayoutBorder(UniCssFlexEdge.Right);
        this.styleCache.borderWidth.bottom = layoutNode.getLayoutBorder(UniCssFlexEdge.Bottom);
        this.styleCache.borderWidth.left = layoutNode.getLayoutBorder(UniCssFlexEdge.Left);
        this.styleCache.padding.top = layoutNode.getLayoutPadding(UniCssFlexEdge.Top);
        this.styleCache.padding.right = layoutNode.getLayoutPadding(UniCssFlexEdge.Right);
        this.styleCache.padding.bottom = layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom);
        this.styleCache.padding.left = layoutNode.getLayoutPadding(UniCssFlexEdge.Left);
        this.updateAutoHeightByChildren();
    }
    private isViewportSwiper(): boolean {
        // displayMultipleItems 是多项同屏，不应把每个 item 都 absolute 到同一个视口上。
        if (this.displayMultipleItems > 1) {
            return false;
        }
        // swiper 有明确高度或通过 flex:1 占满父容器时，item 应铺满 swiper 的可视区域。
        return this.hasOwnHeight || this.hasOwnFlexGrow;
    }
    private updateSwiperItemViewportLayout(child: UniElementImpl): void {
        if (child.tagName === 'SWIPER-ITEM') {
            if (this.isViewportSwiper()) {
                (child as UniSwiperItemElementImpl).setSwiperViewportLayout();
            }
            else {
                (child as UniSwiperItemElementImpl).unsetSwiperViewportLayout();
            }
        }
    }
    private updateSwiperItemsViewportLayout(): void {
        this.children.forEach(child => {
            this.updateSwiperItemViewportLayout(child as UniElementImpl);
        });
    }
    private updateAutoHeightByChildren(): void {
        if (this.hasOwnHeight || this.hasOwnFlexGrow) {
            return;
        }
        // swiper 未主动设置高度且没有 flex 撑高时，测量 swiper-item，取最高项作为 swiper 自身高度。
        let maxChildHeight = -1;
        this.children.forEach(child => {
            if (child.tagName === 'SWIPER-ITEM') {
                const childHeight = (child as UniElementImpl).layoutNode.getLayoutHeight() +
                    this.styleCache.padding.top +
                    this.styleCache.padding.bottom +
                    this.styleCache.borderWidth.top +
                    this.styleCache.borderWidth.bottom;
                if (childHeight > maxChildHeight) {
                    maxChildHeight = childHeight;
                }
            }
        });
        if (maxChildHeight > 0 && Math.abs(maxChildHeight - this.maxChildHeight) > 0.5) {
            this.maxChildHeight = maxChildHeight;
            this.isUpdatingAutoHeight = true;
            try {
                this.parseStyle('height', maxChildHeight);
            }
            finally {
                this.isUpdatingAutoHeight = false;
            }
        }
    }
    override getHarmonyController<T extends SwiperController>(): T {
        return this.controller as T;
    }
}
