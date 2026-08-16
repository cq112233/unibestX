import type { Element as IUniElement } from '@dcloudio/uni-app-x/types/native';
/**
 * [默认值，是否与底层默认值不同, 自定义初始化方法]
 */
export type DefaultStyleItem = [
    string
] | [
    string,
    boolean
] | [
    string,
    boolean,
    (el: IUniElement) => void
];
type DefaultStyle = Map<string, DefaultStyleItem>;
export interface InitialStyle {
    initFns: ((el: IUniElement) => void)[];
    parseStyles: [
        string,
        string
    ][];
}
export interface ElementOptions {
    defaultStyle?: DefaultStyle;
    initialDefaultStyle?: DefaultStyle;
}
interface ElementConstructor {
    defaultStyle?: DefaultStyle;
    initialDefaultStyle?: DefaultStyle;
    new (...params: any[]): IUniElement;
}
export const store = new Map<string, [
    ElementConstructor,
    ElementOptions
]>();
export function define(name: string, constructor: ElementConstructor): void {
    store.set(name, [
        constructor,
        {
            defaultStyle: constructor.defaultStyle,
            initialDefaultStyle: constructor.initialDefaultStyle,
        },
    ]);
}
