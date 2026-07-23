type AnimationInType = 'auto' | 'none' | 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'pop-in';
type AnimationOutType = 'auto' | 'none' | 'slide-out-right' | 'slide-out-left' | 'slide-out-top' | 'slide-out-bottom' | 'fade-out' | 'zoom-in' | 'zoom-fade-in' | 'pop-out';
const ANIMATION_TYPES = new Map<AnimationInType, AnimationOutType>([
    ['auto', 'auto'],
    ['none', 'none'],
    ['slide-in-right', 'slide-out-right'],
    ['slide-in-left', 'slide-out-left'],
    ['slide-in-top', 'slide-out-top'],
    ['slide-in-bottom', 'slide-out-bottom'],
    ['fade-in', 'fade-out'],
    ['zoom-out', 'zoom-in'],
    ['zoom-fade-out', 'zoom-fade-in'],
    ['pop-in', 'pop-out']
]);
export function checkAnimationInType(animationInType: string | undefined): string {
    return ANIMATION_TYPES.has(animationInType as AnimationInType) ? animationInType as string : 'auto';
}
export function checkAnimationOutType(animationOutType: string | undefined): string {
    return Array.from(ANIMATION_TYPES.values()).includes(animationOutType as AnimationOutType) ?
        animationOutType as string : 'auto';
}
export function resolveAnimationOutType(animationInType: AnimationInType | string | undefined) {
    return ANIMATION_TYPES.get(animationInType as AnimationInType) || 'none';
}
export function createTransitionEffect(animationType: AnimationInType | AnimationOutType | string, duration: number, onFinish?: () => void): TransitionEffect {
    switch (animationType) {
        case 'slide-in-right':
            return createMoveRightTransitionEffect('in', duration, onFinish);
        case 'slide-out-right':
            return createMoveRightTransitionEffect('out', duration, onFinish);
        case 'slide-in-left':
            return createMoveLeftTransitionEffect('in', duration, onFinish);
        case 'slide-out-left':
            return createMoveLeftTransitionEffect('out', duration, onFinish);
        case 'slide-in-top':
            return createMoveTransitionEffect('in', TransitionEdge.TOP, duration, onFinish);
        case 'slide-out-top':
            return createMoveTransitionEffect('out', TransitionEdge.TOP, duration, onFinish);
        case 'slide-in-bottom':
            return createMoveTransitionEffect('in', TransitionEdge.BOTTOM, duration, onFinish);
        case 'slide-out-bottom':
            return createMoveTransitionEffect('out', TransitionEdge.BOTTOM, duration, onFinish);
        case 'fade-in':
            return createFadeTransitionEffect('in', duration, onFinish);
        case 'fade-out':
            return createFadeTransitionEffect('out', duration, onFinish);
        case 'zoom-out':
            return createZoomTransitionEffect('in', duration, onFinish);
        case 'zoom-in':
            return createZoomTransitionEffect('out', duration, onFinish);
        case 'zoom-fade-out':
            return createZoomFadeTransitionEffect('in', duration, onFinish);
        case 'zoom-fade-in':
            return createZoomFadeTransitionEffect('out', duration, onFinish);
        default:
            onFinish && Promise.resolve().then(onFinish);
            return TransitionEffect.IDENTITY;
    }
}
function resetEffect() {
    return TransitionEffect.translate({ x: 0, y: 0, z: 0 })
        .combine(TransitionEffect.opacity(1))
        .combine(TransitionEffect.scale({ x: 1, y: 1, z: 1 }));
}
function createFadeTransitionEffect(type: 'in' | 'out', duration: number, onFinish?: () => void): TransitionEffect {
    const effect = TransitionEffect.OPACITY.animation({ duration, onFinish });
    if (type === 'out') {
        // 需要先清空translate，不然 show 的时候用了 translate 而 close 时用了 opacity 会导致 translate 也生效
        return resetEffect().combine(effect);
    }
    return effect;
}
function createZoomTransitionEffect(type: 'in' | 'out', duration: number, onFinish?: () => void): TransitionEffect {
    const effect = TransitionEffect.scale({ x: 0, y: 0, z: 0 })
        .animation({ duration, onFinish });
    if (type === 'out') {
        return resetEffect().combine(effect);
    }
    return effect;
}
function createZoomFadeTransitionEffect(type: 'in' | 'out', duration: number, onFinish?: () => void): TransitionEffect {
    const effect = TransitionEffect.scale({ x: 0, y: 0, z: 0 })
        .combine(TransitionEffect.opacity(0))
        .animation({ duration, onFinish });
    if (type === 'out') {
        return resetEffect().combine(effect);
    }
    return effect;
}
function createMoveTransitionEffect(type: 'in' | 'out', move: TransitionEdge, duration: number, onFinish?: () => void): TransitionEffect {
    const effect = TransitionEffect.move(move)
        .animation({ duration, onFinish });
    if (type === 'out') {
        return resetEffect().combine(effect);
    }
    return effect;
}
function createMoveRightTransitionEffect(type: 'in' | 'out', duration: number, onFinish?: () => void): TransitionEffect {
    Environment.envProp('layoutDirection', LayoutDirection.LTR);
    if (AppStorage.get<LayoutDirection>("layoutDirection") === LayoutDirection.RTL) {
        return createMoveTransitionEffect(type, TransitionEdge.START, duration, onFinish);
    }
    return createMoveTransitionEffect(type, TransitionEdge.END, duration, onFinish);
}
function createMoveLeftTransitionEffect(type: 'in' | 'out', duration: number, onFinish?: () => void): TransitionEffect {
    if (AppStorage.get<LayoutDirection>("layoutDirection") === LayoutDirection.RTL) {
        return createMoveTransitionEffect(type, TransitionEdge.END, duration, onFinish);
    }
    return createMoveTransitionEffect(type, TransitionEdge.START, duration, onFinish);
}
