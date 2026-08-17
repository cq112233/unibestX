import { UniElementImpl } from './UniElement';
export declare class UniHoverElementImpl<T extends FrameNode | null = FrameNode | null> extends UniElementImpl<T> {
    private _hover?;
    setAnyAttribute(key: string, value: Object): void;
    dispose(): void;
}
