import type { UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native';
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import type { UniNativePageImpl } from './UniNativePage';
import type { UniBodyElementImpl } from './UniBodyElement';
export class GlobalDocument {
    uniPage!: UniNativePageImpl;
    get body(): UniBodyElementImpl {
        this.checkRootDocument();
        return this.uniPage.document.body;
    }
    private checkRootDocument() {
        if (!this.uniPage) {
            this.uniPage = getUniApp()!.pageManager.createPage('', '', new Map());
        }
    }
    createElement(data: string): IUniElement {
        this.checkRootDocument();
        return this.uniPage.document.createElement(data);
    }
    createComment(data: string): IUniElement {
        this.checkRootDocument();
        return this.uniPage.document.createComment(data);
    }
    dispose() {
        if (this.uniPage) {
            this.uniPage.close();
        }
    }
}
