interface SafeAreaInsets {
    top?: number;
    bottom?: number;
}
@Component
export declare struct SafeAreaOffset {
    @Prop
    type: string;
    @State
    h: number;
    onSafeAreaInsetsChange: (safeAreaInsets: SafeAreaInsets) => void;
    build(): void;
    aboutToAppear(): void;
    aboutToDisappear(): void;
}
export {};
