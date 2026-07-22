export enum UniCssDirection {
    Inherit = 0,
    LTR = 1,
    RTL = 2
}
export enum UniCssBoxSizing {
    BorderBox = 0,
    ContentBox = 1
}
export enum UniCssFlexAlign {
    Auto = 0,
    FlexStart = 1,
    Center = 2,
    FlexEnd = 3,
    Stretch = 4,
    BaseLine = 5,
    SpaceBetween = 6,
    SpaceAround = 7,
    SpaceEvenly = 8
}
export enum UniCssFlexDirection {
    Row = 0,
    RowReverse = 1,
    Column = 2,
    ColumnReverse = 3
}
export enum UniCssFlexJustify {
    FlexStart = 1,
    Center = 2,
    FlexEnd = 3,
    SpaceBetween = 6,
    SpaceAround = 7,
    SpaceEvenly = 8
}
export enum UniCssFlexOverflow {
    Visible = 0,
    Hidden = 1,
    Scroll = 2
}
export enum UniCssPositionType {
    Relative = 0,
    Absolute = 1,
    Fixed = 2
}
export enum UniCssFlexWrap {
    NoWrap = 0,
    Wrap = 1,
    WrapReverse = 2
}
export enum UniCssDisplayType {
    Flex = 0,
    None = 1
}
export enum UniCssFlexEdge {
    Left = 0,
    Top = 1,
    Right = 2,
    Bottom = 3,
    Start = 4,
    End = 5,
    Horizontal = 6,
    Vertical = 7,
    All = 8,
    None = -1
}
export enum UniCssBorderStyle {
    None = 0,
    Border = 1
}
export enum UniCssNodeLevel {
    Default = 0,
    Root = 1
}
export enum UniLayoutMeasureMode {
    Undefined = 0,
    Exactly = 1,
    AtMost = 2
}
export interface UniLayoutSize {
    width: number;
    height: number;
}
export enum UniLengthUnit {
    Undefined = 0,
    PXPoint = 1,
    RPXPoint = 2,
    Percent = 3,
    Auto = 4,
    Function = 5
}
