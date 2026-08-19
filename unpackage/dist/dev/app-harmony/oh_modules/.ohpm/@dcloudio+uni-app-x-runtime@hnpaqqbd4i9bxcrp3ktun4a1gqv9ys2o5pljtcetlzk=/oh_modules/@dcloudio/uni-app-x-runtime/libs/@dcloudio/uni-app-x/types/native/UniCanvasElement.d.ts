import { UniCanvasElement } from "./IUniElement"
import { UniElementImpl } from "./UniElement"
import { CanvasRenderingContext2D } from "./CanvasRenderingContext2D"

export class UniCanvasElementImpl extends UniElementImpl implements UniCanvasElement {
    width: number
    height: number
    getContext(contentType:string): CanvasRenderingContext2D|null
}
