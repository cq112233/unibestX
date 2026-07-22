import {
  UniCssDirection,
  UniCssBoxSizing,
  UniCssFlexAlign,
  UniCssFlexDirection,
  UniCssFlexJustify,
  UniCssFlexOverflow,
  UniCssPositionType,
  UniCssFlexWrap,
  UniCssDisplayType,
  UniCssFlexEdge,
  UniCssBorderStyle,
  UniCssNodeLevel,
  UniLayoutMeasureMode,
  UniLayoutSize,
  UniLengthUnit,
} from '../../../types/Index';

/**
 * x y width height border-top-width border-right-width border-bottom-width border-left-width
 */
type LayoutBuffer = [number, number, number, number, number, number, number, number];
/**
 * padding-top padding-right padding-bottom padding-left
 */
type LayoutPaddingBuffer = Float64Array;

export class UniLayoutFlexNode {
  /**
   *
   * @param level - Default: UniCssNodeLevel.Default
   * @param rootNode - Default: null
   */
  constructor(level?: UniCssNodeLevel, rootNode?: UniLayoutFlexNode | null);
  insertChildAtIndex(child: UniLayoutFlexNode, index: number);
  removeChildNode(child: UniLayoutFlexNode);
  calculateLayout(width: number, height: number, direction: UniCssDirection);
  dirty();
  isDirty(): boolean;
  hasNewLayout(): boolean;
  markLayoutSeen();
  setMeasureFunction(callback: (width: number, widthMode: UniLayoutMeasureMode, height: number, heightMode: UniLayoutMeasureMode) => UniLayoutSize);
  setStyleDirection(direction: UniCssDirection);
  setStyleBoxSizing(boxSizing: UniCssBoxSizing);
  setStyleFlexDirection(flexDirection: UniCssFlexDirection);
  setStyleJustifyContent(justifyContent: UniCssFlexJustify);
  setStyleAlignItems(alignItems: UniCssFlexAlign);
  setStyleAlignSelf(alignSelf: UniCssFlexAlign);
  setStyleAlignContent(alignContent: UniCssFlexAlign);
  setStylePositionType(positionType: UniCssPositionType);
  setStyleFlexWrap(flexWrap: UniCssFlexWrap);
  setStyleOverflow(overflow: UniCssFlexOverflow);
  setStyleDisplay(display: UniCssDisplayType);
  setStyleFlexGrow(flexGrow: number);
  setStyleFlexShrink(flexShrink: number);

  /*获取排版之后的结果*/
  getLayoutWidth(): number;
  getLayoutHeight(): number;
  getLayoutLeft(): number;
  getLayoutTop(): number;
  getLayoutRight(): number;
  getLayoutBottom(): number;
  getLayoutLeft(): number;
  getLayoutMargin(edge: UniCssFlexEdge): number;
  getLayoutBorder(edge: UniCssFlexEdge): number;
  getLayoutPadding(edge: UniCssFlexEdge): number;
  getLayoutPaddingBuffer(): LayoutPaddingBuffer;
  getLayoutBuffer(): LayoutBuffer;
  getStylePosition(edge: UniCssFlexEdge): number;
  setStyleBorderStyle(edge: UniCssFlexEdge, value: UniCssBorderStyle);

  //以下接口目前仅UniLengthUnitFunction支持传string
  /**
   * @param flexBasis Default: UniLengthUnit.PXPoint
   */
  setStyleFlexBasis(flexBasis: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleWidth(width: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleHeight(height: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleMaxWidth(height: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleMaxHeight(maxHeight: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleMinWidth(minWidth: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleMinHeight(minHeight: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleMargin(edge: UniCssFlexEdge, value: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStyleBorder(edge: UniCssFlexEdge, value: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStylePadding(edge: UniCssFlexEdge, value: number | string, unit?: UniLengthUnit);
  /**
   * @param unit Default: UniLengthUnit.PXPoint
   */
  setStylePosition(edge: UniCssFlexEdge, value: number | string, unit?: UniLengthUnit);

  setGridLayout(padding: [number, number, number, number] | undefined, crossAxisCount: number, mainAxisGap: number, crossAxisGap: number);
  setGridItemLayout(gridItemLayout: boolean);

  setSafeArea(top: number, right: number, bottom: number, left: number): boolean;
  setStatusbarHeight(height: number): boolean;

  setStyleMarginAuto(edge: UniCssFlexEdge);
  /*width\height*/
  /**
   * @deprecated use setStyleFlexBasis
   */
  setStyleFlexBasisPercent(flexBasisPercent: number);
  /**
   * @deprecated use setStyleWidthPercent
   */
  setStyleWidthPercent(width: number);
  /**
   * @deprecated use setStyleHeightPercent
   */
  setStyleHeightPercent(height: number);
  /**
   * @deprecated use setStyleMarginPercent
   */
  setStyleMarginPercent(edge: UniCssFlexEdge, value: number);
  /**
   * @deprecated use setStylePaddingPercent
   */
  setStylePaddingPercent(edge: UniCssFlexEdge, value: number);
  /**
   * @deprecated use setStylePositionPercent
   */
  setStylePositionPercent(edge: UniCssFlexEdge, value: number);
}

