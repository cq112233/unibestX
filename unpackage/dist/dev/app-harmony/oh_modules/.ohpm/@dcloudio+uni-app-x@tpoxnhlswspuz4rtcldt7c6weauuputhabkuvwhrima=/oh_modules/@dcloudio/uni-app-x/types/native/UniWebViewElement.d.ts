import { UniWebViewElement, UniWebViewElementLoadDataOptions } from "./IUniElement"
import { UniElementImpl } from "./UniElement"

export class UniWebViewElementImpl extends UniElementImpl implements UniWebViewElement {
  back(): void
  forward(): void
  reload(): void
  stop(): void
  evalJS(js: string): void
  getContentHeight(): number
  loadData(options: UniWebViewElementLoadDataOptions): void
}
