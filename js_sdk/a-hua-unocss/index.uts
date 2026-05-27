type R = RegExp;
type S = string;
type N = number;
type B = boolean;
type SOrN = S | N;
type ItemOrArray<T> = T | T[];
type Colors = RecordType<Colors | S>;
type Shortcuts = RecordType | ProductionShortcuts;
type ProductionShortcuts = (RecordType | [RegExp | S, S | ((classNames: S[]) => S)])[];
type Rules = [R | S, RecordType | ((selector: S[], colors: Colors) => RecordType | [S, S][])][];

interface RecordType<T = S> { 
	[key: S]: T;
}

interface Theme {
	generator?: B;
	colors?: Colors;
}

/**
 * @description [简单版轻量原子化CSS](https://ext.dcloud.net.cn/plugin?id=17509)
 * @param options.rules 预设规则；
 * @param options.theme.colors 默认色预设值；
 * @param options.theme.generator 是否开启关闭检测根目录 uni.scss 的变量文件生成颜色预设值；
 * @param options.shortcuts 快捷方式预设；
 * @param options.prefix 预设前缀；默认：[uno, un]；
 * @param options.include 指名哪些文件需要动态监测预设；注：include、exclude 两个只会生效一个且 include 优先级高；
 * @param options.exclude 排除哪些文件需要动态监测预设；注：include、exclude 两个只会生效一个且 include 优先级高；
 * @param options.handler 处理选择器和 CSS；
 * @param options.unit 单位；默认：rpx；
 * @param options.default.none 默认 none 值；默认：0；
 * @param options.default.opacity 默认透明度值；默认：100；
 * @param options.default.line.width 默认线条宽度值；默认：1rpx；
 * @param options.default.radius.lg 默认圆角值；默认：8rpx；
 * @param options.default.radius.md 默认圆角值；默认：6rpx；
 * @param options.default.radius.sm 默认圆角值；默认：4rpx；
 * @param options.default.radius.xl 默认圆角值；默认：10rpx；
 * @param options.default.radius.xs 默认圆角值；默认：2rpx；
 * @param options.default.radius.2xs' 默认圆角值；默认：12rpx；
 * @param options.default.radius.3xs' 默认圆角值；默认：16rpx；
 * @param options.default.radius.4xs' 默认圆角值；默认：32rpx；
 */
export declare function unovite(options?: {
	rules?: Rules;
	theme?: Theme;
	shortcuts?: Shortcuts;
	prefix?: ItemOrArray<S>;
	include?: ItemOrArray<S | R>;
	exclude?: ItemOrArray<S | R>;
	handler: <T extends { uno?: ItemOrArray<[S, S]>; selector: S, pseudo?: S }>(prefix: S, item: T) => T;
	unit?: "rpx" | "px" | "em" | "rem" | "vh" | "vw" | "pt" | "pc" | "in" | "mm" | "cm" | "svh" | "lvh" | "dvh" | "vmin" | "vmax" | "vi" | "vb" | "svmin" | "dvmin" | "svmax" | "dvmax" | "svi" | "dvi" | "svb" | "dvb";
	default?: {
		none?: SOrN;
		opacity?: SOrN;
		line?: {
			width?: SOrN;
		};
		radius?: {
			lg?: SOrN;
			md?: SOrN;
			sm?: SOrN;
			xl?: SOrN;
			xs?: SOrN;
			'2xs'?: SOrN;
			'3xs'?: SOrN;
			'4xs'?: SOrN;
		};
	};
}): { 
	name: string, 
	enforce: string, 
	transform: (code: string, id: string) => void 
};