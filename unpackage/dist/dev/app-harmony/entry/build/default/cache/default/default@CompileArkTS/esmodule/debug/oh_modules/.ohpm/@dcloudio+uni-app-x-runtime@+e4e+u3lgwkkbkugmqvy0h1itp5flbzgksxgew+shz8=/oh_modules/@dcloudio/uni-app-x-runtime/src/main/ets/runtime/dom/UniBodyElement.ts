if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { FrameNode } from "@ohos:arkui.node";
import type { NodeController } from "@ohos:arkui.node";
import { TinyEmitter as Emitter } from "@normalized:N&&&tiny-emitter/index&2.1.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import type { ComponentBaseOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import { GenericNodeController } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/utils&1.0.0";
interface PrivateUniNativePage {
    _emitter: Emitter;
}
@ObservedV2
class BodyRefresherState {
    @Trace
    refresherEnabled: boolean = true;
    @Trace
    refresherTriggered: boolean = false;
    @Trace
    refresherThreshold: number = 45;
    @Trace
    refresherMaxDragDistance: number = 112;
}
class BodyRefresher extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("state", (params && "state" in params) ? params.state : undefined);
        this.initParam("emitter", (params && "emitter" in params) ? params.emitter : undefined);
        this.initParam("bodyNodeController", (params && "bodyNodeController" in params) ? params.bodyNodeController : undefined);
        this.pullDownRatio = 1;
        this.refreshOffset = 0;
        this.refreshStatus = null;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("state", (params && "state" in params) ? params.state : undefined);
        this.resetParam("emitter", (params && "emitter" in params) ? params.emitter : undefined);
        this.resetParam("bodyNodeController", (params && "bodyNodeController" in params) ? params.bodyNodeController : undefined);
        this.pullDownRatio = 1;
        this.refreshOffset = 0;
        this.refreshStatus = null;
    }
    @Param
    readonly state: BodyRefresherState;
    @Param
    readonly emitter: Emitter;
    @Param
    readonly bodyNodeController: NodeController;
    @Local
    pullDownRatio: number;
    @Local
    refreshOffset: number;
    @Local
    refreshStatus: RefreshStatus | null;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Refresh.create({
                refreshing: this.state.refresherTriggered
            });
            Refresh.width('100%');
            Refresh.height('100%');
            Refresh.refreshOffset(this.state.refresherEnabled ? this.state.refresherThreshold : 0.01);
            Refresh.pullDownRatio(this.state.refresherEnabled ? this.pullDownRatio : 0);
            Refresh.onOffsetChange((offset: number) => {
                // 越接近最大距离，下拉跟手系数越小
                this.pullDownRatio = 1 - Math.pow((offset / this.state.refresherMaxDragDistance), 3);
                this.refreshOffset = offset;
                if (this.refreshStatus !== RefreshStatus.Done && this.state.refresherEnabled) {
                    this.emitter.emit('refresherpulling', offset);
                }
                if (offset === 0) {
                    /**
                     * 经测试onStateChange在onOffsetChange之后触发
                     * 所有事件执行完毕后，重置内部状态，防止下次再触发刷新时状态不对。
                     */
                    this.refreshStatus = null;
                }
            });
            Refresh.onStateChange((status: RefreshStatus) => {
                /**
                 * 开发者设置的refresherTriggered也会修改this.state.refresherTriggered
                 * 内部修改refresherTriggered防止回调时机导致开发者设置refresherTriggered不及时
                 */
                this.refreshStatus = status;
                if (!this.state.refresherEnabled) {
                    return;
                }
                switch (status) {
                    case RefreshStatus.Inactive:
                        this.emitter.emit('refresherabort', this.refreshOffset);
                        break;
                    case RefreshStatus.Refresh:
                        this.emitter.emit('refresherrefresh', this.state.refresherThreshold);
                        break;
                    case RefreshStatus.Done:
                        this.emitter.emit('refresherrestore', this.refreshOffset);
                        break;
                    default:
                        break;
                }
            });
        }, Refresh);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NodeContainer.create(this.bodyNodeController);
            NodeContainer.width('100%');
            NodeContainer.height('100%');
        }, NodeContainer);
        Refresh.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("state" in params) {
            this.updateParam("state", params.state);
        }
        if ("emitter" in params) {
            this.updateParam("emitter", params.emitter);
        }
        if ("bodyNodeController" in params) {
            this.updateParam("bodyNodeController", params.bodyNodeController);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
interface BodyRefresherOptions extends ComponentBaseOptions {
    state: BodyRefresherState;
    emitter: Emitter;
    bodyNodeController: NodeController;
}
function BodyRefresherBuilder(options: BodyRefresherOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        __Common__.create();
        __Common__.hitTestBehavior(HitTestMode.Transparent);
    }, __Common__);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new 
                /**
                 * TODO 调研除设置hitTestBehavior之外的方式
                 * ScrollView的attributeModifier作用于其内部的Stack节点，但是ScrollView组件位置（审查元素时可以看到组件根节点）仍是错误的。
                 * 上述行为导致ScrollView组件覆盖在了其他组件之上，导致其他组件无法点击
                 * 此处hitTestBehavior将ScrollView组件根节点设置为不响应触碰事件，用于处理上述问题。
                 */
                BodyRefresher(parent ? parent : this, {
                    emitter: options.emitter,
                    bodyNodeController: options.bodyNodeController!,
                    state: options.state!
                }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniBodyElement.ets", line: 98, col: 3 });
                ViewV2.create(componentCall);
                let paramsLambda = () => {
                    return {
                        emitter: options.emitter,
                        bodyNodeController: options.bodyNodeController!,
                        state: options.state!
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    emitter: options.emitter,
                    bodyNodeController: options.bodyNodeController!,
                    state: options.state!
                });
            }
        }, { name: "BodyRefresher" });
    }
    __Common__.pop();
}
const BodyRefresherWrappedBuilder = wrapBuilder(BodyRefresherBuilder);
export class BodyRefresherFrameNode extends UniFrameNode {
    componentInstance!: BodyRefresher;
}
export class UniBodyElementImpl extends UniElementImpl<FrameNode> {
    refresherState!: BodyRefresherState;
    refresherEmitter!: Emitter;
    static override get defaultStyle() {
        // Bug 在uni-app-x-runtime编译为har包且被其他har包引用时省略此as会导致引用uni-app-x-runtime的har包无法编译出.har文件
        const baseDefaultStyle = super.defaultStyle as Map<string, [
            string
        ] | [
            string,
            boolean
        ]>;
        const defaultStyle = new Map(baseDefaultStyle);
        defaultStyle.set('width', ['100%', true]);
        defaultStyle.set('height', ['100%', true]);
        return defaultStyle;
    }
    /**
     * 由 framework setupXPage 赋值和使用，后续需要移除
     * @internal
     * @deprecated
     */
    _page: undefined;
    _slotFrameNode!: FrameNode;
    private bodyFrameNode!: FrameNode | null;
    private bodyNodeController!: GenericNodeController | null;
    override get slotFrameNode() {
        return this._slotFrameNode;
    }
    protected override createFrameNode() {
        const context = this.app.context!;
        const enablePullDownRefresh = !!this.page.getPageStyle()['enablePullDownRefresh'];
        this.enablePullDownRefresh = enablePullDownRefresh;
        if (!enablePullDownRefresh) {
            const frameNode = this._slotFrameNode = new FrameNode(context);
            return frameNode;
        }
        this._slotFrameNode = new FrameNode(this.app.context!);
        this.bodyNodeController = new GenericNodeController({
            rootFrameNode: this._slotFrameNode
        });
        this.refresherEmitter.on('refresherrefresh', () => {
            this.refresherState.refresherTriggered = true;
            (this.page as Object as PrivateUniNativePage)._emitter.emit('onPullDownRefresh');
        });
        this.bodyFrameNode = createUniFrameNode<BodyRefresherFrameNode, BodyRefresherOptions>(this.app.context!, BodyRefresherFrameNode, BodyRefresherWrappedBuilder, {
            state: this.refresherState,
            emitter: this.refresherEmitter,
            bodyNodeController: this.bodyNodeController
        });
        return this.bodyFrameNode;
    }
    override initClass(): void {
        this.refresherState = new BodyRefresherState();
        this.refresherEmitter = new Emitter();
        super.initClass();
    }
    enablePullDownRefresh: boolean = false;
    dispose(): void {
        this.refresherEmitter.off('refresherrefresh');
        this.bodyFrameNode = null;
        this.bodyNodeController?.dispose();
        this.bodyNodeController = null;
        this._page = undefined;
        super.dispose();
    }
}
