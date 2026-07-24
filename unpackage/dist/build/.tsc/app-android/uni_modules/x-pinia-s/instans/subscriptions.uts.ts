/**
 * 订阅器管理
 *
 * 提供两类订阅器集合：
 * - StateSubscriptionList：状态变更订阅（$subscribe）
 * - ActionSubscriptionList：action 调用订阅（$onAction）
 *
 * UTS 中函数引用比较没有 === ，使用 indexOf 移除。
 */

import {
	StateSubscriptionCallback,
	SubscriptionMutation,
	ActionSubscriptionCallback,
	ActionContext,
	AfterActionCallback,
	OnErrorActionCallback,
	UnsubscribeFn
} from './types.uts'

/** 状态订阅集合 */
export class StateSubscriptionList {
	private _list : Array<StateSubscriptionCallback> = []

	/**
	 * 添加订阅，返回取消订阅函数
	 */
	add(cb : StateSubscriptionCallback) : UnsubscribeFn {
		this._list.push(cb)
		return () : void => {
			this.remove(cb)
		}
	}

	/** 移除某个订阅 */
	remove(cb : StateSubscriptionCallback) : void {
		const idx = this._list.indexOf(cb)
		if (idx >= 0) {
			this._list.splice(idx, 1)
		}
	}

	/** 触发所有订阅 */
	trigger(mutation : SubscriptionMutation, state : UTSJSONObject) : void {
		// 拷贝一份再遍历，避免回调中修改订阅列表导致跳过
		const snapshot : Array<StateSubscriptionCallback> = []
		for (let i = 0; i < this._list.length; i++) {
			snapshot.push(this._list[i])
		}
		for (let i = 0; i < snapshot.length; i++) {
			try {
				snapshot[i](mutation, state)
			} catch (e) {
				console.warn('[x-pinia-s] state subscription error:', e)
			}
		}
	}

	/** 清空全部订阅 */
	clear() : void {
		this._list = []
	}

	/** 当前订阅数量 */
	size() : number {
		return this._list.length
	}
}

/** Action 订阅集合 */
export class ActionSubscriptionList {
	private _list : Array<ActionSubscriptionCallback> = []

	/**
	 * 添加 action 订阅，返回取消订阅函数
	 */
	add(cb : ActionSubscriptionCallback) : UnsubscribeFn {
		this._list.push(cb)
		return () : void => {
			this.remove(cb)
		}
	}

	/** 移除某个订阅 */
	remove(cb : ActionSubscriptionCallback) : void {
		const idx = this._list.indexOf(cb)
		if (idx >= 0) {
			this._list.splice(idx, 1)
		}
	}

	/**
	 * 触发 action 订阅。
	 * 调用方负责调用真实 action 并通过 afterCallbacks/errorCallbacks 反馈结果。
	 *
	 * @returns 收集到的 after / onError 回调数组（由调用方在 action 完成后逐一调用）
	 */
	trigger(ctx : ActionContext) : ActionTriggerResult {
		const afterList : Array<AfterActionCallback> = []
		const errorList : Array<OnErrorActionCallback> = []

		const after = (cb : AfterActionCallback) : void => {
			afterList.push(cb)
		}
		const onError = (cb : OnErrorActionCallback) : void => {
			errorList.push(cb)
		}

		// 拷贝快照，避免迭代中变更
		const snapshot : Array<ActionSubscriptionCallback> = []
		for (let i = 0; i < this._list.length; i++) {
			snapshot.push(this._list[i])
		}
		for (let i = 0; i < snapshot.length; i++) {
			try {
				snapshot[i](ctx, after, onError)
			} catch (e) {
				console.warn('[x-pinia-s] action subscription error:', e)
			}
		}

		return {
			afterList: afterList,
			errorList: errorList
		} as ActionTriggerResult
	}

	/** 清空 */
	clear() : void {
		this._list = []
	}

	/** 当前订阅数量 */
	size() : number {
		return this._list.length
	}
}

/** Action 触发返回结构 */
export type ActionTriggerResult = {
	afterList : Array<AfterActionCallback>,
	errorList : Array<OnErrorActionCallback>
}
