import { Element, Event } from '@dcloudio/uni-app-x/types/native';
type HoverProps = Map<string, any>;
export declare class Hover {
    private $;
    private props;
    private _listening;
    private _hovering;
    private _hoverTouch;
    private _hoverStartTimer?;
    private _hoverStayTimer?;
    private __hoverTouchStart;
    private __hoverTouchEnd;
    private __hoverTouchCancel;
    private __hoverClassStyleMap;
    constructor($: Element, props: HoverProps);
    get hovering(): boolean;
    set hovering(hovering: boolean);
    addEvent(): void;
    removeEvent(): void;
    _hoverTouchStart(evt: Event): void;
    _hoverTouchEnd(): void;
    _hoverReset(): void;
    _hoverTouchCancel(): void;
    private _addClass;
    private _removeClass;
}
export {};
