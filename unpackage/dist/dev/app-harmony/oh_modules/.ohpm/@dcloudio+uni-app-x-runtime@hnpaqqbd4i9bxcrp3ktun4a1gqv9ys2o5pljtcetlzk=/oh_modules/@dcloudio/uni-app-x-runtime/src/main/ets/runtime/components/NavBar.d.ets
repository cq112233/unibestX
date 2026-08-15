import { ComponentBaseOptions } from '../Node';
export interface ITitleNView {
    titleText?: string;
    titleBackgroundColor?: string;
    titleColor?: string;
    autoBackButton?: boolean;
    loading?: boolean;
}
export interface NavBarOptions extends ComponentBaseOptions, ITitleNView {
    onBackClick?: () => void;
}
@Component
export declare struct NavBar {
    onAboutToAppear?: (instance: NavBar) => void;
    onBackClick?: () => void;
    @Prop
    titleText?: string;
    @Prop
    titleBackgroundColor?: string;
    @Prop
    titleColor?: string;
    @Prop
    autoBackButton?: boolean;
    @Prop
    loading?: boolean;
    @Prop
    navigationStyle?: string;
    build(): void;
    aboutToAppear(): void;
}
