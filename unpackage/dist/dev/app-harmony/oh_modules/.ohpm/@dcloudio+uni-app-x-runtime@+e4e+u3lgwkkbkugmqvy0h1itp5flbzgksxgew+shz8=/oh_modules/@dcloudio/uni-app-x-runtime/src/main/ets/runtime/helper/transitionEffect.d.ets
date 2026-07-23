type AnimationInType = 'auto' | 'none' | 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'pop-in';
type AnimationOutType = 'auto' | 'none' | 'slide-out-right' | 'slide-out-left' | 'slide-out-top' | 'slide-out-bottom' | 'fade-out' | 'zoom-in' | 'zoom-fade-in' | 'pop-out';
export declare function checkAnimationInType(animationInType: string | undefined): string;
export declare function checkAnimationOutType(animationOutType: string | undefined): string;
export declare function resolveAnimationOutType(animationInType: AnimationInType | string | undefined): AnimationOutType;
export declare function createTransitionEffect(animationType: AnimationInType | AnimationOutType | string, duration: number, onFinish?: () => void): TransitionEffect;
export {};
