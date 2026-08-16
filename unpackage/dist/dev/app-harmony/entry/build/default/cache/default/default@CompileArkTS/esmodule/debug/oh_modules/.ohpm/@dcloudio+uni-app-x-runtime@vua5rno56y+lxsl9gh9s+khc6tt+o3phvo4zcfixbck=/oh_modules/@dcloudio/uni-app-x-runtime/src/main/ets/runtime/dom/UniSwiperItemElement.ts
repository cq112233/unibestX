import type { UniSwiperItemElement as IUniSwiperItemElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { typeNode } from "@ohos:arkui.node";
import { UniCssFlexEdge, UniCssPositionType, UniLengthUnit } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { formatLayoutLength, formatNumber, formatPosition } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
export class UniSwiperItemElementImpl extends UniElementImpl<typeNode.Stack> implements IUniSwiperItemElement {
    itemId: string = '';
    // 由父级 swiper 控制的内部布局状态：开启时 item 作为一页铺满 swiper 可视区域。
    private isSwiperViewportLayout: boolean = false;
    protected override createFrameNode(): typeNode.Stack {
        const view = typeNode.createNode(this.app.context, 'Stack');
        view.initialize({ alignContent: Alignment.TopStart });
        return view;
    }
    override updateNativeAttribute(key: string, value: string): void {
        switch (key) {
            case 'itemId': {
                this.itemId = value;
                break;
            }
            default:
                super.updateNativeAttribute(key, value);
        }
    }
    override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
        switch (key) {
            case 'x':
            case 'y':
                break;
            default:
                super.updateNativeNodeStyle(key, value, commonAttribute);
        }
    }
    override parseStyle(key: string, value: Object): boolean {
        const result = super.parseStyle(key, value);
        switch (key) {
            case 'height':
            case 'flexGrow':
            case 'flexShrink':
            case 'flexBasis':
                // viewport 布局下这些样式会影响 item 铺满父级，需要在用户样式解析后重新覆盖内部布局。
                this.applySwiperViewportLayout();
                break;
        }
        return result;
    }
    setSwiperViewportLayout(): void {
        if (this.isSwiperViewportLayout) {
            return;
        }
        this.isSwiperViewportLayout = true;
        this.applySwiperViewportLayout();
    }
    unsetSwiperViewportLayout(): void {
        if (!this.isSwiperViewportLayout) {
            return;
        }
        this.isSwiperViewportLayout = false;
        this.restoreLayoutStyle();
    }
    private applySwiperViewportLayout(): void {
        if (!this.isSwiperViewportLayout) {
            return;
        }
        // Swiper 原生节点不会天然让 item 参与父级 flex 高度分配，这里把 item 锚定到 swiper 四边。
        // 这样 item 内部的 flex:1 以及 justify/align 居中才能按整页高度计算。
        this.layoutNode.setStylePositionType(UniCssPositionType.Absolute);
        this.layoutNode.setStylePosition(UniCssFlexEdge.Top, 0, UniLengthUnit.PXPoint);
        this.layoutNode.setStylePosition(UniCssFlexEdge.Right, 0, UniLengthUnit.PXPoint);
        this.layoutNode.setStylePosition(UniCssFlexEdge.Bottom, 0, UniLengthUnit.PXPoint);
        this.layoutNode.setStylePosition(UniCssFlexEdge.Left, 0, UniLengthUnit.PXPoint);
        this.layoutNode.setStyleHeight(100, UniLengthUnit.Percent);
        this.layoutNode.setStyleFlexGrow(0);
        this.layoutNode.setStyleFlexShrink(0);
        this.layoutNode.setStyleFlexBasis(100, UniLengthUnit.Percent);
        this.layoutNodeDirty();
    }
    private restoreLayoutStyle(): void {
        // 退出 viewport 布局时，恢复用户真实样式，让无固定高度的 swiper 继续由内容自然撑高。
        const height = this.style.getPropertyValue('height') || 'auto';
        const flexGrow = this.style.getPropertyValue('flex-grow') || '0';
        const flexShrink = this.style.getPropertyValue('flex-shrink') || '0';
        const flexBasis = this.style.getPropertyValue('flex-basis') || 'auto';
        const position = this.style.getPropertyValue('position') || 'relative';
        const top = this.style.getPropertyValue('top') || 'auto';
        const right = this.style.getPropertyValue('right') || 'auto';
        const bottom = this.style.getPropertyValue('bottom') || 'auto';
        const left = this.style.getPropertyValue('left') || 'auto';
        formatPosition(position, val => {
            this.layoutNode.setStylePositionType(val);
        });
        formatLayoutLength(top, val => {
            this.layoutNode.setStylePosition(UniCssFlexEdge.Top, val.value, val.unit);
        });
        formatLayoutLength(right, val => {
            this.layoutNode.setStylePosition(UniCssFlexEdge.Right, val.value, val.unit);
        });
        formatLayoutLength(bottom, val => {
            this.layoutNode.setStylePosition(UniCssFlexEdge.Bottom, val.value, val.unit);
        });
        formatLayoutLength(left, val => {
            this.layoutNode.setStylePosition(UniCssFlexEdge.Left, val.value, val.unit);
        });
        formatLayoutLength(height, val => {
            this.layoutNode.setStyleHeight(val.value, val.unit);
        });
        formatNumber(flexGrow, val => {
            this.layoutNode.setStyleFlexGrow(val);
        });
        formatNumber(flexShrink, val => {
            this.layoutNode.setStyleFlexShrink(val);
        });
        formatLayoutLength(flexBasis, val => {
            this.layoutNode.setStyleFlexBasis(val.value, val.unit);
        });
        this.layoutNodeDirty();
    }
}
