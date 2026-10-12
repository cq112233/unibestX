// @ts-nocheck
// #ifndef UNI-APP-X
import { type Ref, type ComputedRef, ref, computed } from '@/uni_modules/lime-shared/vue'
type UniTouchEvent = TouchEvent
// #endif

/**
 * 默认方向锁定阈值（单位：px）
 */
const DEFAULT_LOCK_DIRECTION_DISTANCE = 10;

/**
 * 默认点击判断阈值（单位：px）
 */
const DEFAULT_TAP_OFFSET = 8;

/**
 * 基本方向类型
 * - '' : 未确定方向
 * - 'vertical' : 垂直方向
 * - 'horizontal' : 水平方向
 */
export type BasicDirection = '' | 'vertical' | 'horizontal';

/**
 * 详细方向类型
 * - '' : 未确定方向
 * - 'up' : 向上
 * - 'down' : 向下
 * - 'left' : 向左
 * - 'right' : 向右
 */
export type DetailedDirection = '' | 'up' | 'down' | 'left' | 'right';

/**
 * 触摸事件处理函数类型
 */
export type TouchEventHandler = (event: UniTouchEvent) => void;

/**
 * useTouch 函数返回值类型
 */
export type UseTouchReturn = {
    /** 触摸开始事件处理函数 */
    start: TouchEventHandler,
    /** 触摸移动事件处理函数 */
    move: TouchEventHandler,
    /** 触摸结束事件处理函数 */
    end: TouchEventHandler,
    /** 触摸开始时的X坐标 */
    startX: Ref<number>,
    /** 触摸开始时的Y坐标 */
    startY: Ref<number>,
    /** 当前位置与开始位置的X差值（带方向） */
    deltaX: Ref<number>,
    /** 当前位置与开始位置的Y差值（带方向） */
    deltaY: Ref<number>,
    /** 当前位置与开始位置的X距离（绝对值） */
    offsetX: Ref<number>,
    /** 当前位置与开始位置的Y距离（绝对值） */
    offsetY: Ref<number>,
    /** 基本方向 */
    direction: Ref<BasicDirection>,
    /** 详细方向 */
    detailedDirection: Ref<DetailedDirection>,
    /** 是否为垂直方向 */
    isVertical: ComputedRef<boolean>,
    /** 是否为水平方向 */
    isHorizontal: ComputedRef<boolean>,
    /** 是否向上 */
    isUp: ComputedRef<boolean>,
    /** 是否向下 */
    isDown: ComputedRef<boolean>,
    /** 是否向左 */
    isLeft: ComputedRef<boolean>,
    /** 是否向右 */
    isRight: ComputedRef<boolean>,
    /** 是否为点击（未发生明显移动） */
    isTap: Ref<boolean>,
    /** 上一次触摸的X坐标 */
    lastX: Ref<number>,
    /** 上一次触摸的Y坐标 */
    lastY: Ref<number>,
    /** 与上一次触摸位置的X差值 */
    movementX: Ref<number>,
    /** 与上一次触摸位置的Y差值 */
    movementY: Ref<number>,
}

export type UseTouchOptions = {
    /**
     * 方向锁定阈值（默认 10）
     * 当 X 或 Y 位移超过此值时，锁定滑动主轴方向
     */
    lockThreshold?: number;
    /**
     * 点击判定最大偏移（默认 8）
     * 若总位移不超过此值，则视为 tap
     */
    tapThreshold?: number;
}

/**
 * 触摸事件处理 Hook
 * 用于处理单指触摸手势，提供方向、位移、点击等状态
 * 
 * ⚠️ 注意：
 * - 仅处理第一个触摸点（忽略多点触控）
 * - 结束时不会自动重置状态，以便外部读取最终结果
 * - 下一次 start 会自动重置
 * 
 * @param options 配置选项
 * @returns 触摸相关的响应式状态和事件处理器
 */
export function useTouch(options: UseTouchOptions = {} as UseTouchOptions): UseTouchReturn {
    const lockThreshold = options.lockThreshold ?? DEFAULT_LOCK_DIRECTION_DISTANCE;
    const tapThreshold = options.tapThreshold ?? DEFAULT_TAP_OFFSET;

    const startX = ref(0);
    const startY = ref(0);
    const deltaX = ref(0);
    const deltaY = ref(0);
    const offsetX = ref(0);
    const offsetY = ref(0);
    const direction = ref<BasicDirection>('');
    const detailedDirection = ref<DetailedDirection>('');
    const isTap = ref(true);
    const lastX = ref(0);
    const lastY = ref(0);
    const movementX = ref(0);
    const movementY = ref(0);

    const isVertical = computed(() => direction.value == 'vertical');
    const isHorizontal = computed(() => direction.value == 'horizontal');
    const isUp = computed(() => detailedDirection.value == 'up');
    const isDown = computed(() => detailedDirection.value == 'down');
    const isLeft = computed(() => detailedDirection.value == 'left');
    const isRight = computed(() => detailedDirection.value == 'right');

    /**
     * 重置所有触摸状态（通常在新触摸开始时调用）
     */
    const reset = () => {
        deltaX.value = 0;
        deltaY.value = 0;
        offsetX.value = 0;
        offsetY.value = 0;
        direction.value = '';
        detailedDirection.value = '';
        isTap.value = true;
        movementX.value = 0;
        movementY.value = 0;
        lastX.value = 0;
        lastY.value = 0;
    };

    const start = (event: UniTouchEvent) => {
        reset(); // 新触摸开始前确保状态干净
		if(event.touches.length == 0) return
        const touch = event.touches[0];
        // 安全检查：某些平台可能 touch 为空或缺少 client 坐标
        if (typeof touch.clientX != 'number' || typeof touch.clientY != 'number') return
        startX.value = touch.clientX;
		lastX.value = touch.clientX;
        startY.value = touch.clientY;
		lastY.value = touch.clientY;
    };

    const move = (event: UniTouchEvent) => {
		if(event.touches.length == 0) return
        const touch = event.touches[0];

        const currentX = touch.clientX;
        const currentY = touch.clientY;

        // 总位移（相对于起点）
        deltaX.value = currentX - startX.value;
        deltaY.value = currentY - startY.value;
        offsetX.value = Math.abs(deltaX.value);
        offsetY.value = Math.abs(deltaY.value);

        // 瞬时位移（相对于上一帧）
        movementX.value = currentX - lastX.value;
        movementY.value = currentY - lastY.value;
        lastX.value = currentX;
        lastY.value = currentY;

        // 锁定主轴方向：仅在尚未锁定且位移足够时判断
        if (direction.value == '') {
            if (offsetX.value >= lockThreshold || offsetY.value >= lockThreshold) {
                direction.value = offsetX.value > offsetY.value ? 'horizontal' : 'vertical';
            }
        }

        // 判断详细方向：基于总位移（更稳定）
        if (offsetX.value > tapThreshold || offsetY.value > tapThreshold) {
            if (Math.abs(deltaX.value) > Math.abs(deltaY.value)) {
                detailedDirection.value = deltaX.value > 0 ? 'right' : 'left';
            } else {
                detailedDirection.value = deltaY.value > 0 ? 'down' : 'up';
            }
        }

        // 判断是否仍为 tap
        if (isTap.value && (offsetX.value > tapThreshold || offsetY.value > tapThreshold)) {
            isTap.value = false;
        }
    };

    const end = (_event: UniTouchEvent) => {
        // 注意：不在这里 reset！
        // 保留结束时的状态（如 isTap, direction 等），供外部逻辑使用
        // 下一次 start 会自动重置
    };

    return {
        start,
        move,
        end,
        startX,
        startY,
        deltaX,
        deltaY,
        offsetX,
        offsetY,
        direction,
        detailedDirection,
        isVertical,
        isHorizontal,
        isUp,
        isDown,
        isLeft,
        isRight,
        isTap,
        lastX,
        lastY,
        movementX,
        movementY,
    };
}