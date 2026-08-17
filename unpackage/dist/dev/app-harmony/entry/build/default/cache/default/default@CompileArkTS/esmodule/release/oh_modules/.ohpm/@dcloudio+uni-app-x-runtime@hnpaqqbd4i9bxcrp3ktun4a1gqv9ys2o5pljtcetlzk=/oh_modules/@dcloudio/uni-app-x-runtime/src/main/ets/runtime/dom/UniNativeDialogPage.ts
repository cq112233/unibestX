import type { UniNativePage } from "@dcloudio/uni-app-x/types/native";
import { homeDialogPages, UniNativePageImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniNativePage&1.0.0";
export class UniNativeDialogPageImpl extends UniNativePageImpl {
    get type() {
        return 'dialog';
    }
    override getWindowSize(): Size {
        if (this.parentPage) {
            // dialogPage 需要覆盖整个父页面，不能继承内容区高度
            return this.parentPage.getWindowSize();
        }
        return super.getWindowSize();
    }
    override onWindowSizeChange(callback: (size: Size) => void): () => void {
        let stopWindowSizeChange: (() => void) | null = null;
        const bindWindowSizeChange = (parentPage: UniNativePageImpl | null) => {
            stopWindowSizeChange?.();
            if (parentPage) {
                stopWindowSizeChange = parentPage.onWindowSizeChange(callback);
                return;
            }
            const onWindowSizeChange = (size: Size) => {
                callback({
                    width: px2vp(size.width),
                    height: px2vp(size.height),
                } as Size);
            };
            this.app.window.on('windowSizeChange', onWindowSizeChange);
            stopWindowSizeChange = () => {
                this.app.window.off('windowSizeChange', onWindowSizeChange);
            };
        };
        bindWindowSizeChange(this.parentPage);
        const stopParentPageChange = this.onParentPageChange((parentPage: UniNativePageImpl | null) => {
            bindWindowSizeChange(parentPage);
            if (parentPage) {
                callback(this.getWindowSize());
            }
        });
        return () => {
            stopWindowSizeChange?.();
            stopParentPageChange();
        };
    }
    constructor(pageUrl: string, pageId: string, pageStyle: Map<string, Object>, parentPage?: UniNativePage | null | undefined, dialogOptions?: Map<string, Object> | null | undefined, pageOptions?: Map<string, Object> | null | undefined) {
        // dialogPage的背景一定是透明的
        pageStyle.set('backgroundColor', 'transparent');
        super(pageUrl, pageId, pageStyle);
        // 只有首页创建之前调用，才可能不存在parentPage
        if (parentPage) {
            // 如果有父，取父页面（tabBar页面）
            // dialogPage也有父，但此处传进来的 parentPage 肯定不是 dialogPage，因为 dialogPage 的 parent一定是普通页面
            ((parentPage as UniNativePageImpl).parentPage || parentPage as UniNativePageImpl).addDialogPage(this);
        }
        else {
            // 等待首页完成后，再 add + show
        }
    }
    protected showWithAnimation(animationType: string | undefined, duration: number, callback?: (() => void) | null | undefined): void {
        if (this.parentPage) {
            this.parentPage.showDialogPage(this, animationType, duration);
        }
        else {
            homeDialogPages.set(this, new Map<string, Object>([['animationType', animationType || 'none'], ['animationDuration', duration]]));
        }
        if (callback) {
            setTimeout(callback, duration);
        }
    }
    protected closeWithAnimation(animationType: string | undefined, duration: number, callback?: (() => void) | null | undefined): void {
        if (this.isRendering) {
            if (this.parentPage) {
                this.parentPage.closeDialogPage(this, animationType, duration);
            }
            else if (homeDialogPages.size) {
                // 从待创建列表中删除
                homeDialogPages.delete(this);
            }
        }
        if (callback) {
            setTimeout(callback, duration);
        }
    }
}
