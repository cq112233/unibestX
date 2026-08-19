import { ComponentBaseOptions } from '../Node';
export interface RichTextOptions extends ComponentBaseOptions {
    content: string;
    viewportWidth?: number;
}
export interface EventDetail {
    src?: string;
    href?: string;
}
interface ItemClickEvent {
    detail: EventDetail;
}
@Component
export declare struct UniRichText {
    onAboutToAppear?: (instance: UniRichText) => void;
    attributeUpdater?: object;
    @Prop
    content: string;
    @Prop
    viewportWidth?: number;
    handleItemClick?: (event: ItemClickEvent) => void;
    build(): void;
    aboutToAppear(): void;
}
export {};
