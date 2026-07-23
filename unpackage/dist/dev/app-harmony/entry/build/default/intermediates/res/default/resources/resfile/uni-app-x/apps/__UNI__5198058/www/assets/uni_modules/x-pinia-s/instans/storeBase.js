import { A as ActionContext, S as SubscriptionMutation } from "./types.js";
import { S as StateSubscriptionList, A as ActionSubscriptionList } from "./subscriptions.js";
const { watch } = globalThis.Vue
class PiniaStoreBase {
  constructor() {
    this.$id = "";
    this._state = null;
    this._stateSubs = new StateSubscriptionList();
    this._actionSubs = new ActionSubscriptionList();
    this._watchStopper = null;
    this._pinia = null;
    this._bound = false;
    this._scope = null;
  }
  /** 当前 state 引用（与子类的 state 字段是同一对象；可能为 null，子类未调用 bindState 时） */
  get $state() {
    return this._state;
  }
  // ============ 子类必调工具 ============
  /**
   * 绑定状态。子类必须在 constructor 中调用一次：
   * ```uts
   * constructor() {
   *   super()
   *   this.bindState(this.state)   // this.state 是子类自己声明的 reactive 对象
   * }
   * ```
   *
   * 入参类型为 any —— UTS 名义类型系统下，用户的 state 类型 (reactive<T>) 与
   * 任何系统类型都不兼容；用 any 让调用方无需 cast，且内部不再尝试转 UTSJSONObject
   * （以前的 `state as any as UTSJSONObject` 会在运行时抛 ClassCastException）。
   */
  bindState(state = null) {
    if (this._bound) {
      uni.__f__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:106", "[x-pinia-s][" + this.$id + "] bindState 只能调用一次");
      return null;
    }
    this._bound = true;
    this._state = state;
  }
  // ============ 可重写的 Template Method（按需重写） ============
  /**
   * 子类重写：定义 `$reset()` 时如何把 state 设回初始值。
   * 默认空实现 —— 不重写则 `$reset()` 是 no-op（仅触发订阅器）。
   */
  _doReset() {
  }
  /**
   * 子类重写：把外部 UTSJSONObject 数据装载到 state。
   * - `$patch(partial)` 调用本方法
   * - 持久化插件启动恢复时调用本方法
   *
   * 实现时建议判断字段是否存在，再赋值，以兼容 partial：
   * ```uts
   * if (data['count'] != null) this.state.count = data['count'] as number
   * ```
   *
   * 默认空实现 —— 不重写则 `$patch()` 和持久化恢复都是 no-op。
   */
  _hydrate(_data) {
  }
  /**
   * 子类重写：把 state 序列化为 UTSJSONObject。
   * - 状态变更订阅（$subscribe）回调用本方法生成 state 视图
   * - 持久化插件保存时调用本方法
   *
   * 默认返回空对象 —— 不重写则订阅器收到的 state 永远是 `{}`，持久化也无意义。
   */
  _serialize() {
    return new UTSJSONObject({});
  }
  // ============ Action 包装（可选） ============
  /**
   * 让某个 action 触发 $onAction 订阅器。普通 action 直接写 method 即可，
   * 仅在主动想被 $onAction 追踪时才包装。
   */
  callAction(name, fn) {
    return this._invokeAction(name, fn, []);
  }
  /**
   * 同 callAction，但额外把参数列表上报给订阅器。
   */
  callActionWithArgs(name, fn, args) {
    return this._invokeAction(name, fn, args);
  }
  /** 内部 action 执行器 */
  _invokeAction(name, fn, args) {
    const actionCtx = new ActionContext({
      name,
      storeId: this.$id,
      args
    });
    const triggerResult = this._actionSubs.trigger(actionCtx);
    let result = null;
    try {
      result = fn();
    } catch (e) {
      for (let i = 0; i < triggerResult.errorList.length; i++) {
        try {
          triggerResult.errorList[i](e);
        } catch (e2) {
          uni.__f__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:179", "[x-pinia-s][" + this.$id + "] onError callback error:", e2);
        }
      }
      throw e;
    }
    for (let i = 0; i < triggerResult.afterList.length; i++) {
      try {
        triggerResult.afterList[i](result);
      } catch (e3) {
        uni.__f__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:188", "[x-pinia-s][" + this.$id + "] after callback error:", e3);
      }
    }
    return result;
  }
  // ============ 公共方法 ============
  /** 浅合并 partial 到 state（依赖子类的 _hydrate 实现） */
  $patch(partial) {
    this._hydrate(partial);
    const m = new SubscriptionMutation({
      type: "patch object",
      storeId: this.$id,
      payload: partial,
      timestamp: Date.now()
    });
    const snapshot = this._serialize();
    this._stateSubs.trigger(m, snapshot);
    if (this._pinia != null) {
      this._pinia.state[this.$id] = snapshot;
    }
  }
  /** 重置 state 到初始值（依赖子类的 _doReset 实现） */
  $reset() {
    this._doReset();
    const m = new SubscriptionMutation({
      type: "reset",
      storeId: this.$id,
      payload: null,
      timestamp: Date.now()
    });
    const snapshot = this._serialize();
    this._stateSubs.trigger(m, snapshot);
    if (this._pinia != null) {
      this._pinia.state[this.$id] = snapshot;
    }
  }
  /** 订阅状态变更，返回取消订阅函数 */
  $subscribe(cb) {
    return this._stateSubs.add(cb);
  }
  /** 订阅 action 调用，返回取消订阅函数 */
  $onAction(cb) {
    return this._actionSubs.add(cb);
  }
  /** 销毁 store：停止 watch、清空订阅、停止 effect 作用域、从 Pinia 注册表移除 */
  $dispose() {
    if (this._watchStopper != null) {
      try {
        this._watchStopper();
      } catch (e) {
        uni.__f__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:244", "[x-pinia-s][" + this.$id + "] watch stop error:", e);
      }
      this._watchStopper = null;
    }
    this._stateSubs.clear();
    this._actionSubs.clear();
    if (this._scope != null) {
      try {
        this._scope.stop();
      } catch (e) {
        uni.__f__("warn", "at uni_modules/x-pinia-s/instans/storeBase.uts:255", "[x-pinia-s][" + this.$id + "] scope stop error:", e);
      }
      this._scope = null;
    }
    if (this._pinia != null) {
      this._pinia._stores.delete(this.$id);
    }
  }
  // ============ 内部初始化（由 defineStore 调用） ============
  /**
   * 由 defineStore 调用，注入 id、pinia、启动 watch。
   * @internal 用户代码不要调用本方法。
   */
  _setupBy(id, pinia) {
    this.$id = id;
    this._pinia = pinia;
    if (this._state != null) {
      const stateRef = this._state;
      const sl = this._stateSubs;
      const sid = id;
      const piniaRef = pinia;
      const selfRef = this;
      this._watchStopper = watch(() => {
        return stateRef;
      }, () => {
        const m = new SubscriptionMutation({
          type: "direct",
          storeId: sid,
          payload: null,
          timestamp: Date.now()
        });
        const snapshot = selfRef._serialize();
        sl.trigger(m, snapshot);
        piniaRef.state[sid] = snapshot;
      }, { deep: true });
    }
    pinia.state[id] = this._serialize();
  }
}
export {
  PiniaStoreBase as P
};
//# sourceMappingURL=storeBase.js.map
