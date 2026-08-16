import { ComponentBaseOptions, RootNodeController } from '../Node';
export declare const TEMPLATE_PAGE_NAME = "UniPage";
@Component
export declare struct PageContainer {
    @Prop
    name: string;
    rootNodeController: RootNodeController | null;
    build(): void;
    aboutToAppear(): void;
    onDidBuild(): void;
    aboutToDisappear(): void;
}
export interface IUniSubPage {
    name: string;
}
export interface UniSubPageOptions extends ComponentBaseOptions, IUniSubPage {
}
@Component
export declare struct UniSubPage {
    onAboutToAppear?: (instance: UniSubPage) => void;
    @Prop
    name: string;
    build(): void;
    aboutToAppear(): void;
}
