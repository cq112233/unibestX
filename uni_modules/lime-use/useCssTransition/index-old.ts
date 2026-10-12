// @ts-nocheck
import { raf } from '@/uni_modules/lime-shared/raf';
// #ifndef UNI-APP-X
import { watch, ref, nextTick, computed, onUnmounted, toValue, type MaybeRefOrGetter } from '@/uni_modules/lime-shared/vue'
// #endif
// #ifdef UNI-APP-X
import type { MaybeRefOrGetter } from '../shared/types';
// #endif

/**
 * CSS 过渡事件状态类型
 */
export type CssTransitionEmitStatus = "before-enter" | "enter" | "after-enter" | "enter-cancelled" | "before-leave" | "leave" | "after-leave" | "leave-cancelled"

/**
 * CSS 过渡状态类型
 */
export type CssTransitionStatus = '' | 'enter-from' | 'enter-to' | 'leave-from' | 'leave-to';

/**
 * 过渡方向类型
 */
type CssTransitionDirection = 'enter' | 'leave';

/**
 * CSS 过渡选项配置
 */
export type UseCssTransitionOptions = {
	/**
	 * Enter 的 Pre 类 (防止插入时闪烁)
	 */
	enterPreClass ?: string|string[],    
	/**
	 * 进入起始类名 (对应 v-enter-from)
	 */
	enterFromClass ?: string|string[],
	/**
	 * 进入激活类名 (对应 v-enter-active)
	 */
	enterActiveClass ?: string|string[],
	/**
	 * 进入结束类名 (对应 v-enter-to)
	 */
	enterToClass ?: string|string[],
	/**
	 * 离开起始类名 (对应 v-leave-from)
	 */
	leaveFromClass ?: string|string[],
	/**
	 * 离开激活类名 (对应 v-leave-active)
	 */
	leaveActiveClass ?: string|string[],
	/**
	 * 离开结束类名 (对应 v-leave-to)
	 */
	leaveToClass ?: string|string[],
	/**
	 * 初始渲染时是否显示过渡
	 */
	appear ?: boolean,
	/**
	 * 动态过渡名称 (对应 CSS 类名前缀)
	 */
	name ?: MaybeRefOrGetter<string>,
	/**
	 * 可见性状态
	 */
	visible?: MaybeRefOrGetter<boolean>,
	/**
	 * 过渡事件回调
	 */
	emits ?: (name : CssTransitionEmitStatus) => void,
	/**
	 * 下一个 tick 回调
	 */
	onNextTick ?: (name : CssTransitionEmitStatus) => Promise<void>,
	/**
	 * 过渡持续时间 (毫秒)
	 */
	duration ?: number,
	/**
	 * 是否在结束后移除类名
	 */
	cleanupClasses?: boolean,
	/**
	 * 类名前缀
	 */
	prefix ?: string
}

type ClassNameMap = Map<string, string>;

/**
 * useCssTransition 返回值类型
 */
export type UseCssTransitionReturn = {
	/**
	 * 是否正在显示中 (用于 v-show / v-if)
	 */
	showing : Ref<boolean>,
	/**
	 * 是否已初始化（首次进入后为 true，之后不再变回 false）
	 */
	hasInited : Ref<boolean>,
	/**
	 * 当前类名
	 */
	classes : Ref<string>,
	/**
	 * 结束过渡
	 */
	finish : () => void,
	/**
	 * 切换显示状态
	 */
	toggle : (v : boolean) => void,
}

/**
 * 将字符串或字符串数组转换为字符串
 */
const formatClassName = (className: string | string[] | null | undefined): string|null => {
	if (className == null || className == '') return null;
	if (Array.isArray(className)) {
		return className.join(' ');
	}
	return className;
};

/**
 * CSS 过渡动画组合函数
 * 用于管理元素的显示/隐藏过渡效果，自动处理 enter/leave 类名
 * 
 * @example
 * ```ts
 * const { showing, classes, hasInited } = useCssTransition({
 *   visible: ref(true),
 *   name: 'fade',
 *   duration: 300
 * })
 * ```
 */
export function useCssTransition(options : UseCssTransitionOptions) : UseCssTransitionReturn {
	// 响应式状态定义
	const targetVisible = ref(false);
	const showing = ref(false);
	const hasInited = ref(false);
	const classes = ref('');
	
	// 计算属性
	const name = computed(():string => toValue(options.name ?? 'fade'));
	const prefix = options.prefix ?? 'l-';

	// 格式化用户传入的类名
	const enterPreClass = computed(() => formatClassName(options.enterPreClass));
	const enterFromClass = computed(() => formatClassName(options.enterFromClass));
	const enterActiveClass = computed(() => formatClassName(options.enterActiveClass));
	const enterToClass = computed(() => formatClassName(options.enterToClass));
	
	const leaveFromClass = computed(() => formatClassName(options.leaveFromClass));
	const leaveActiveClass = computed(() => formatClassName(options.leaveActiveClass));
	const leaveToClass = computed(() => formatClassName(options.leaveToClass));

	const appear = options.appear ?? false;
	const duration = options.duration ?? 300;
	
	// 内部变量
	let currentDirection : CssTransitionDirection | '' = '';
	let isTransitioning = false;
	let finishTimeoutId : number | null = null;
	const transitionQueue: CssTransitionDirection[] = [];

	/**
	 * 触发过渡事件
	 */
	const emitEvent = (event : CssTransitionEmitStatus) => {
		options.emits?.(event);
	};

	/**
	 * 清除所有定时器
	 */
	const clearAllTimeouts = () => {
		if (finishTimeoutId != null) {
			clearTimeout(finishTimeoutId!);
			finishTimeoutId = null;
		}
	};

	/**
	 * 过渡结束处理
	 */
	const finish = () => {
		clearAllTimeouts();
		
		if(currentDirection == '') return; // 防止 transitionend 和 setTimeout 双重触发
		
		if ((options.cleanupClasses??false)) {
			classes.value = '';
		}
		const eventSuffix = currentDirection == 'enter' ? 'enter' : 'leave';
		emitEvent(`after-${eventSuffix}` as CssTransitionEmitStatus);
		
		// 离开过渡结束后隐藏元素
		if (currentDirection == 'leave' && !targetVisible.value) {
			showing.value = false;
		}
		
		currentDirection = '';
	};

	/**
	 * 等待下一帧
	 */
	const nextFrame = () : Promise<void> => {
		return new Promise((resolve) => {
			nextTick(() => {
				raf(() => {
					// #ifndef WEB
					setTimeout(()=>{ resolve(); }, 50);
					// #endif
					// #ifdef WEB
					resolve();
					// setTimeout(()=>{ resolve(); }, 1050);
					// #endif
				});
			});
		});
	};

	/**
	 * 生成类名映射
	 */
	const getClassNames = (transitionName : string) : ClassNameMap => {
		const map = new Map<string, string>();
		
		const ePre = enterPreClass.value ?? `${prefix}${transitionName}-enter-pre`;
		map.set('enter-pre', ePre)
		
		// Enter 阶段
		const eFrom = enterFromClass.value ?? `${prefix}${transitionName}-enter-from`;
		const eActive = enterActiveClass.value ?? `${prefix}${transitionName}-enter-active`;
		map.set('enter-from', `${eFrom} ${eActive}`);

		const eTo = enterToClass.value ?? `${prefix}${transitionName}-enter-to`;
		map.set('enter-to', `${eTo} ${eActive}`);

		// Leave 阶段
		const lFrom = leaveFromClass.value ?? `${prefix}${transitionName}-leave-from`;
		const lActive = leaveActiveClass.value ?? `${prefix}${transitionName}-leave-active`;
		map.set('leave-from', `${lFrom} ${lActive}`);

		const lTo = leaveToClass.value ?? `${prefix}${transitionName}-leave-to`;
		map.set('leave-to', `${lTo} ${lActive}`);

		return map;
	};

	/**
	 * 应用类名
	 */
	const applyClasses = (classNames : ClassNameMap, status : string) => {
		const className = classNames.get(status);
		if (className != null) {
			classes.value = className.trim();
		}
	};

	/**
	 * 开始单个过渡流程
	 */
	const startTransition = async (direction : CssTransitionDirection) => {
		currentDirection = direction;
		const isEnter = direction == 'enter';
		
		const fromStatus = isEnter ? 'enter-from' : 'leave-from';
		const toStatus = isEnter ? 'enter-to' : 'leave-to';
		const eventName = isEnter ? 'enter' : 'leave';
		
		emitEvent(`before-${eventName}` as CssTransitionEmitStatus);
		const classNames = getClassNames(name.value);
		await nextFrame();
		
		if (isEnter) {
			hasInited.value = true;
			showing.value = true;
			
			// #ifdef VUE3-VAPOR && APP
			// applyClasses(classNames, 'enter-pre');
			await nextFrame();
			// #endif
		}
		// await nextFrame();
		if (currentDirection != direction) {
			emitEvent(`${eventName}-cancelled` as CssTransitionEmitStatus);
			return false;
		}

		applyClasses(classNames, fromStatus);
		emitEvent(eventName as CssTransitionEmitStatus);

		const executeAfterTick = options.onNextTick?.(eventName as CssTransitionEmitStatus);
		if (executeAfterTick != null) {
			await executeAfterTick;
		}

		await nextFrame();

		if (currentDirection != direction) {
			emitEvent(`${eventName}-cancelled` as CssTransitionEmitStatus);
			return false;
		}

		applyClasses(classNames, toStatus);

		if (finishTimeoutId != null) clearTimeout(finishTimeoutId!);
		
		finishTimeoutId = setTimeout(() => {
			finish();
		}, duration);

		return true;
	};

	/**
	 * 调度器：处理队列
	 */
	const performTransition = async (targetDirection : CssTransitionDirection) => {
		if (currentDirection == targetDirection) return;

		if (isTransitioning) {
			if (currentDirection != '' && currentDirection != targetDirection) {
				transitionQueue.length = 0; 
				transitionQueue.push(targetDirection);
				clearAllTimeouts();
				currentDirection = '';
			} else {
				return; 
			}
		} else {
			transitionQueue.push(targetDirection);
		}

		isTransitioning = true;

		while (transitionQueue.length > 0) {
			const nextDir = transitionQueue.shift()!;
			if (currentDirection == nextDir) continue; 
			
			await startTransition(nextDir);
		}

		isTransitioning = false;
	};

	const enter = () => performTransition('enter');
	const leave = () => performTransition('leave');

	// 监听 visible 变化
	if (options.visible != null) {
		watch(options.visible!, (newValue: boolean) => {
			targetVisible.value = newValue;
			if (newValue) {
				enter();
			} else {
				leave();
			}
		}, { immediate: appear });
	}

	/**
	 * 切换显示状态
	 */
	const toggle = (v: boolean) => {
		targetVisible.value = v;
		if (v) enter(); else leave();
	};

	onUnmounted(() => {
		clearAllTimeouts();
	});

	return {
		hasInited,
		showing,
		classes,
		finish,
		toggle
	};
}
