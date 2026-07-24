import { UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native'
import { getUniApp } from '../UniNativeApp'
import { UniNativePageImpl } from './UniNativePage'
import { UniBodyElementImpl } from './UniBodyElement'

export class GlobalDocument {
  uniPage!: UniNativePageImpl

  get body(): UniBodyElementImpl {
    this.checkRootDocument()
    return this.uniPage.document.body
  }

  private checkRootDocument() {
    if (!this.uniPage) {
      this.uniPage = getUniApp()!.pageManager.createPage('', '', new Map())
    }
  }

  createElement(data: string): IUniElement {
    this.checkRootDocument()
    return this.uniPage.document.createElement(data)
  }

  createComment(data: string): IUniElement {
    this.checkRootDocument()
    return this.uniPage.document.createComment(data)
  }

  dispose() {
    if (this.uniPage) {
      this.uniPage.close()
    }
  }
}
