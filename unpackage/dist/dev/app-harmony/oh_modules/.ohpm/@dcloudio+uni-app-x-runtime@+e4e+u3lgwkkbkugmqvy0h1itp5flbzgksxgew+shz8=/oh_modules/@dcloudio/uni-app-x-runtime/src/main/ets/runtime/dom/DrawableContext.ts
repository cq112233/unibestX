import { ArrayList } from '@kit.ArkTS';
import { DrawContext, MeasureText, RenderNode } from '@kit.ArkUI'
import { drawing } from '@kit.ArkGraphics2D';
import type common2D from '@ohos.graphics.common2D';
import { toColor } from '@dcloudio/uni-runtime-harmony/helper/color'
import { DrawableContext as IDrawableContext } from '@dcloudio/uni-app-x/types/native'

type TextAlignType = 'left' | 'center' | 'right'
type LineJoinType = 'bevel' | 'miter' | 'round'
type LineCapType = 'butt' | 'round' | 'square'
type FillPathType = 'nonzero' | 'evenodd'

enum DrawingType {
  Path,
  FillStyle,
  DrawRect,
  FillRect,
  FillText,
  StrokeRect,
  StrokeText,
}

class DrawingPair {
  private readonly _first: DrawingType
  private readonly _second: Object

  constructor(first: DrawingType, second: Object) {
    this._first = first;
    this._second = second;
  }

  get first(): DrawingType {
    return this._first
  }

  get second(): Object {
    return this._second
  }
}

class DrawRectNode {
  private readonly _rect: common2D.Rect
  private readonly _sharedPen: drawing.Pen
  private readonly _strokeWidth: number = 1
  private readonly _color: common2D.Color

  constructor(rect: common2D.Rect, sharedPen: drawing.Pen, strokeWidth: number, color: string) {
    this._sharedPen = sharedPen
    this._rect = rect
    this._strokeWidth = strokeWidth
    this._color = toColor(color)
  }

  draw(context: DrawContext) {
    const canvas = context.canvas
    this._sharedPen.setColor(this._color)
    this._sharedPen.setStrokeWidth(this._strokeWidth)
    canvas.attachPen(this._sharedPen)
    canvas.drawRect(this._rect.left, this._rect.top, this._rect.right, this._rect.bottom)
    canvas.detachPen()
  }
}

class FillRectNode {
  private readonly _sharedBrush: drawing.Brush
  private readonly _color: common2D.Color
  private readonly _rect: common2D.Rect

  constructor(rect: common2D.Rect, sharedBrush: drawing.Brush, color: string) {
    this._rect = rect
    this._sharedBrush = sharedBrush
    this._color = toColor(color)
  }

  draw(context: DrawContext) {
    const canvas = context.canvas
    this._sharedBrush.setColor(this._color)
    canvas.attachBrush(this._sharedBrush)
    canvas.drawRect(this._rect.left, this._rect.top, this._rect.right, this._rect.bottom)
    canvas.detachBrush()
  }
}

class DrawPathNode {
  private readonly _sharedPen: drawing.Pen
  private readonly _color: common2D.Color
  private readonly _path: drawing.Path
  private readonly _strokeWidth: number = 1

  constructor(sharedPen: drawing.Pen, path: drawing.Path, strokeWidth: number, color: string) {
    this._sharedPen = sharedPen
    this._path = path
    this._strokeWidth = strokeWidth
    this._color = toColor(color)
  }

  draw(context: DrawContext) {
    const canvas = context.canvas
    this._sharedPen.setColor(this._color)
    this._sharedPen.setStrokeWidth(this._strokeWidth)
    canvas.attachPen(this._sharedPen)
    canvas.drawPath(this._path)
    canvas.detachPen()
  }
}

class FillPathNode {
  private readonly _sharedBrush: drawing.Brush
  private readonly _color: common2D.Color
  private readonly _path: drawing.Path

  constructor(sharedBrush: drawing.Brush, path: drawing.Path, color: string) {
    this._sharedBrush = sharedBrush
    this._path = path
    this._color = toColor(color)
  }

  draw(context: DrawContext) {
    const canvas = context.canvas
    this._sharedBrush.setColor(this._color)
    canvas.attachBrush(this._sharedBrush)
    canvas.drawPath(this._path)
    canvas.detachBrush()
  }
}

class FillTextNode {
  private readonly _sharedBrush: drawing.Brush
  private readonly _text: string = ''
  private readonly _font: drawing.Font
  private readonly _fontSize: number
  private readonly _color: common2D.Color
  private readonly _position: common2D.Point

  constructor(sharedBrush: drawing.Brush, text: string, x: number, y: number, font: drawing.Font, fontSize: number,
    color: string) {
    this._sharedBrush = sharedBrush
    this._text = text
    this._position = { x, y }
    this._font = font
    this._fontSize = fontSize
    this._color = toColor(color)
  }

  draw(context: DrawContext) {
    const canvas = context.canvas
    this._sharedBrush.setColor(this._color)
    this._font.setSize(this._fontSize)
    const textBlob = drawing.TextBlob.makeFromString(this._text, this._font, drawing.TextEncoding.TEXT_ENCODING_UTF8)
    canvas.attachBrush(this._sharedBrush)
    canvas.drawTextBlob(textBlob, this._position.x, this._position.y)
    canvas.detachBrush()
  }
}

export class DrawableContext extends RenderNode implements IDrawableContext {
  /// properties
  private _font: string = '12px'
  private _fontSize: number = 12
  private _fillStyle: string = '#000000'
  private _strokeStyle: string = '#000000'
  private _textAlign: TextAlignType = 'left'
  private _lineJoin: LineJoinType = 'miter'
  private _lineCap: LineCapType = 'butt'
  private _lineWidth: number = 1
  private _lineWidthToPixel: number = 1
  private _lineDashOffset: number = 1
  private _lineDashOffsetToPixel: number = 1
  /// drawing
  private _drawFlag = false
  private _drawingFont = new drawing.Font()
  private _drawingPen = new drawing.Pen()
  private _drawingBrush = new drawing.Brush()
  private _currentPath: drawing.Path = new drawing.Path()
  private _commandQueue = new ArrayList<DrawingPair>()
  /// TODO
  private _firstFlag = false
  // harmony bug, 首次的 lineTo() 并不是起始点，需要先调用一次 moveTo()
  private _firstMoveTo = false

  constructor() {
    super()
    this._drawingPen.setAntiAlias(true)
    this._drawingBrush.setAntiAlias(true)
    this.lineWidth = this._lineWidth
  }

  draw(context: DrawContext) {
    if (!this._drawFlag) {
      return
    }

    // TODO 在不可见元素中，大小变化后无法生效，放弃此次绘制，延后重绘 1 一次
    if (context.size.width == 0 && context.size.height == 0) {
      setTimeout(() => {
        this.invalidate()
      }, 1)
      return
    }

    this._commandQueue.forEach((value: DrawingPair) => {
      const first = value.first
      const second = value.second
      switch (first) {
        case DrawingType.Path:
          (second as FillPathNode).draw(context);
          break;
        case DrawingType.DrawRect:
          (second as DrawRectNode).draw(context);
          break;
        case DrawingType.FillRect:
          (second as FillRectNode).draw(context);
          break;
        case DrawingType.FillText:
          (second as FillTextNode).draw(context);
          break;
        case DrawingType.StrokeRect:
          (second as DrawRectNode).draw(context);
          break;
      }
    })
    this._commandQueue.clear()

    this._drawFlag = false
  }

  beginPath() {
    this._currentPath = new drawing.Path()
    this._firstMoveTo = false
  }

  closePath() {
    this._currentPath.close()
  }

  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean | null) {
    const rect: common2D.Rect = {
      left: vp2px(x - radius),
      top: vp2px(y - radius),
      right: vp2px(x + radius),
      bottom: vp2px(y + radius)
    }

    let startDegrees = (startAngle * 180) / Math.PI
    let endDegrees = (endAngle * 180) / Math.PI
    while (startDegrees > endDegrees) {
      endDegrees += 360
    }

    let deltaDegrees = endDegrees - startDegrees

    if (anticlockwise) {
      if(Math.abs(deltaDegrees) == 360 && startDegrees != 0) {
        deltaDegrees = 0
      } else {
        deltaDegrees = (deltaDegrees % 360 == 0) ? 360 : (deltaDegrees % 360 - 360)
      }

      if (deltaDegrees > 0) {
        deltaDegrees = -deltaDegrees
      }
      if (startDegrees == endDegrees) {
        deltaDegrees = 0
      }
    }

    this.currentPath.addArc(rect, startDegrees, deltaDegrees)
  }

  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
    this.currentPath.cubicTo(vp2px(cp1x), vp2px(cp1y), vp2px(cp2x), vp2px(cp2y), vp2px(x), vp2px(y))
  }

  moveTo(x: number, y: number) {
    this.currentPath.moveTo(vp2px(x), vp2px(y))
    this._firstMoveTo = true
  }

  lineTo(x: number, y: number) {
    if (!this._firstMoveTo) {
      this.moveTo(x, y)
    }
    this.currentPath.lineTo(vp2px(x), vp2px(y))
  }

  stroke() {
    const pathNode = new DrawPathNode(this._drawingPen, this.currentPath, this._lineWidthToPixel, this.strokeStyle)
    this._commandQueue.add(new DrawingPair(DrawingType.Path, pathNode))
  }

  strokeRect(x: number, y: number, width: number, height: number) {
    const rect = this.convertToRect(x, y, width, height)
    const rectNode = new DrawRectNode(rect, this._drawingPen, this._lineWidthToPixel, this.fillStyle)
    this._commandQueue.add(new DrawingPair(DrawingType.StrokeRect, rectNode))
  }

  strokeText(text: string, x: number, y: number) {
  }

  fill(fillRule?: string | null) {
    const pathNode = new FillPathNode(this._drawingBrush, this.currentPath, this.fillStyle)
    if (fillRule) {
      this.setPathFillType(fillRule)
    }
    this._commandQueue.add(new DrawingPair(DrawingType.Path, pathNode))
  }

  fillRect(x: number, y: number, width: number, height: number) {
    const rect = this.convertToRect(x, y, width, height)
    const rectNode = new FillRectNode(rect, this._drawingBrush, this.fillStyle)
    this._commandQueue.add(new DrawingPair(DrawingType.FillRect, rectNode))
  }

  fillText(text: string, x: number, y: number) {
    x = this.textAlignOffset(text, vp2px(x))
    const textNode =
      new FillTextNode(this._drawingBrush, text, x, vp2px(y), this._drawingFont, this._fontSize, this.fillStyle)
    this._commandQueue.add(new DrawingPair(DrawingType.FillText, textNode))
  }

  rect(x: number, y: number, width: number, height: number): void {
    const rect = this.convertToRect(x, y, width, height)
    const rectNode = new DrawRectNode(rect, this._drawingPen, this._lineWidthToPixel, this._strokeStyle)
    this._commandQueue.add(new DrawingPair(DrawingType.DrawRect, rectNode))
  }

  setLineDash(segments: number[]): void {
  }

  reset() {
    this._commandQueue.clear()
    this._currentPath = new drawing.Path()
    this._firstMoveTo = false
  }

  update() {
    if (this._firstFlag) {
      this._drawFlag = true
      this.invalidate()
    } else {
      this._firstFlag = true
      // TODO getDrawableContext() 后立即调用 update 后无效
      setTimeout(() => {
        this.update()
      }, 18)
    }
  }

  get font(): string {
    return this._font
  }

  set font(value: string) {
    this._font = value
    this._fontSize = vp2px(parseFloat(value))
  }

  get fillStyle(): string {
    return this._fillStyle
  }

  set fillStyle(color: string) {
    this._fillStyle = color
  }

  get lineCap(): string {
    return this._lineCap
  }

  set lineCap(value: string) {
    this._lineCap = value as LineCapType
  }

  get lineDashOffset(): number {
    return this._lineDashOffset
  }

  set lineDashOffset(value: number) {
    this._lineDashOffset = value
    this._lineDashOffsetToPixel = vp2px(value)
  }

  get lineJoin(): string {
    return this._lineJoin as string
  }

  set lineJoin(value: string) {
    this._lineJoin = value as LineJoinType
  }

  get lineWidth(): number {
    return this._lineWidth
  }

  set lineWidth(value: number) {
    this._lineWidth = value
    this._lineWidthToPixel = vp2px(value)
  }

  get strokeStyle(): string {
    return this._strokeStyle
  }

  set strokeStyle(color: string) {
    this._strokeStyle = color
  }

  get textAlign(): string {
    return this._textAlign as string
  }

  set textAlign(value: string) {
    this._textAlign = value as TextAlignType
  }

  private get currentPath(): drawing.Path {
    return this._currentPath!
  }

  private textAlignOffset(text: string, x: number): number {
    switch (this._textAlign) {
      case 'left':
        return x;
      case 'center':
        return x - MeasureText.measureText({
          textContent: text,
          fontSize: this._fontSize + 'px'
        }) / 2
      case 'right':
        return x - MeasureText.measureText({
          textContent: text,
          fontSize: this._fontSize + 'px'
        })
    }
  }

  private convertToRect(x: number, y: number, width: number, height: number): common2D.Rect {
    const rect: common2D.Rect = {
      left: vp2px(x),
      top: vp2px(y),
      right: vp2px(x + width),
      bottom: vp2px(y + height)
    }
    return rect
  }

  private setPathFillType(fillRule: string) {
    if (fillRule == 'nonzero') {
      this.currentPath.setFillType(drawing.PathFillType.WINDING);
    } else if (fillRule == 'evenodd') {
      this.currentPath.setFillType(drawing.PathFillType.EVEN_ODD);
    }
  }
}
