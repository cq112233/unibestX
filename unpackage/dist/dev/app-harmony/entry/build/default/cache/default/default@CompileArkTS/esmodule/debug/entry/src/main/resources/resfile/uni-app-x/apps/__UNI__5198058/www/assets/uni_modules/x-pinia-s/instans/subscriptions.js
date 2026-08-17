import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/types&";
class StateSubscriptionList {
  constructor() {
    this._list = [];
  }
  /**
   * 添加订阅，返回取消订阅函数
   */
  add(cb) {
    this._list.push(cb);
    return () => {
      this.remove(cb);
    };
  }
  /** 移除某个订阅 */
  remove(cb) {
    const idx = this._list.indexOf(cb);
    if (idx >= 0) {
      this._list.splice(idx, 1);
    }
  }
  /** 触发所有订阅 */
  trigger(mutation, state) {
    const snapshot = [];
    for (let i = 0; i < this._list.length; i++) {
      snapshot.push(this._list[i]);
    }
    for (let i = 0; i < snapshot.length; i++) {
      try {
        snapshot[i](mutation, state);
      } catch (e) {
        uni.__f__("warn", "at uni_modules/x-pinia-s/instans/subscriptions.uts:54", "[x-pinia-s] state subscription error:", e);
      }
    }
  }
  /** 清空全部订阅 */
  clear() {
    this._list = [];
  }
  /** 当前订阅数量 */
  size() {
    return this._list.length;
  }
}
class ActionSubscriptionList {
  constructor() {
    this._list = [];
  }
  /**
   * 添加 action 订阅，返回取消订阅函数
   */
  add(cb) {
    this._list.push(cb);
    return () => {
      this.remove(cb);
    };
  }
  /** 移除某个订阅 */
  remove(cb) {
    const idx = this._list.indexOf(cb);
    if (idx >= 0) {
      this._list.splice(idx, 1);
    }
  }
  /**
   * 触发 action 订阅。
   * 调用方负责调用真实 action 并通过 afterCallbacks/errorCallbacks 反馈结果。
   *
   * @returns 收集到的 after / onError 回调数组（由调用方在 action 完成后逐一调用）
   */
  trigger(ctx) {
    const afterList = [];
    const errorList = [];
    const after = (cb) => {
      afterList.push(cb);
    };
    const onError = (cb) => {
      errorList.push(cb);
    };
    const snapshot = [];
    for (let i = 0; i < this._list.length; i++) {
      snapshot.push(this._list[i]);
    }
    for (let i = 0; i < snapshot.length; i++) {
      try {
        snapshot[i](ctx, after, onError);
      } catch (e) {
        uni.__f__("warn", "at uni_modules/x-pinia-s/instans/subscriptions.uts:118", "[x-pinia-s] action subscription error:", e);
      }
    }
    return new ActionTriggerResult({
      afterList,
      errorList
    });
  }
  /** 清空 */
  clear() {
    this._list = [];
  }
  /** 当前订阅数量 */
  size() {
    return this._list.length;
  }
}
class ActionTriggerResult extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          afterList: { type: "Unknown", optional: false },
          errorList: { type: "Unknown", optional: false }
        };
      },
      name: "ActionTriggerResult"
    };
  }
  constructor(options, metadata = ActionTriggerResult.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.afterList = this.__props__.afterList;
    this.errorList = this.__props__.errorList;
    delete this.__props__;
  }
}
export {
  ActionSubscriptionList as A,
  StateSubscriptionList as S
};
//# sourceMappingURL=subscriptions.js.map
