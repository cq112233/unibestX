import { UniNativePage } from "./UniNativePage";

/**
 * @package io.dcloud.uniapp.runtime
 * @internal
 */
export interface UniPageManager {
  createPage(
    pageUrl: string,
    pageId: string,
    pageStyle: Map<string, any | null>,
    pageOptions?: Map<string, any> | null
  ): UniNativePage

  createDialogPage(
    pageUrl: string,
    pageId: string,
    pageStyle: Map<string, any | null>,
    parentPage?: UniNativePage | null,
    dialogOptions?: Map<string, any | null> | null,
    pageOptions?: Map<string, any> | null
  ): UniNativePage

  findPageById(pageId: string): UniNativePage | null
}

export type IPageManager = UniPageManager
