import { define } from './BuiltInElement'
import { UniViewElementImpl } from './UniViewElement'
import { UniTextElementImpl } from './UniTextElement'
import { UniWebViewElementImpl } from './UniWebViewElement'
import { UniImageElementImpl } from './UniImageElement'
import { UniScrollViewElementImpl } from './UniScroll/UniScrollViewElement'
import { UniListViewElementImpl } from './UniScroll/UniListViewElement'
import { UniListItemElementImpl } from './UniScroll/UniListItemElement'
import { UniStickySectionElementImpl } from './UniScroll/UniStickySectionElement'
import { UniStickyHeaderElementImpl } from './UniScroll/UniStickyHeaderElement'
import { UniNestedScrollHeaderElementImpl } from './UniScroll/UniNestedScrollHeader'
import { UniNestedScrollBodyElementImpl } from './UniScroll/UniNestedScrollBody'
import { UniWaterFlowElementImpl } from './UniScroll/UniWaterFlowElement'
import { UniFlowItemElementImpl } from './UniScroll/UniFlowItemElement'
import { UniInputElementImpl } from './UniInputElement'
import { UniTextareaElementImpl } from './UniTextareaElement'
import { UniSwiperElementImpl } from './UniSwiperElement'
import { UniSwiperItemElementImpl } from './UniSwiperItemElement'
import { UniRichTextElementImpl } from './UniRichTextElement'
import { UniNativeViewElementImpl } from './UniNativeViewElement'
import { UniTabsElementImpl } from './UniTabsElement'
import { UniBodyElementImpl } from './UniBodyElement'
import { UniAVVolumePanelElementImpl } from './UniAVVolumePanelElement'

define('view', UniViewElementImpl)
define('text', UniTextElementImpl)
define('web-view', UniWebViewElementImpl)
define('image', UniImageElementImpl)
define('scroll-view', UniScrollViewElementImpl)
define('list-view', UniListViewElementImpl)
define('list-item', UniListItemElementImpl)
define('waterflow', UniWaterFlowElementImpl)
define('flow-item', UniFlowItemElementImpl)
define('sticky-section', UniStickySectionElementImpl)
define('sticky-header', UniStickyHeaderElementImpl)
define('nested-scroll-header', UniNestedScrollHeaderElementImpl)
define('nested-scroll-body', UniNestedScrollBodyElementImpl)
define('input', UniInputElementImpl)
define('textarea', UniTextareaElementImpl)
define('swiper', UniSwiperElementImpl)
define('swiper-item', UniSwiperItemElementImpl)
define('rich-text', UniRichTextElementImpl)
define('native-view', UniNativeViewElementImpl)
define('tabs', UniTabsElementImpl)
define('body', UniBodyElementImpl)
define('volume-panel', UniAVVolumePanelElementImpl)

globalThis.UniViewElement = UniViewElementImpl
globalThis.UniTextElement = UniTextElementImpl
globalThis.UniWebViewElement = UniWebViewElementImpl
globalThis.UniImageElement = UniImageElementImpl
globalThis.UniScrollViewElement = UniScrollViewElementImpl
globalThis.UniListViewElement = UniListViewElementImpl
globalThis.UniListItemElement = UniListItemElementImpl
globalThis.UniWaterFlowElement = UniWaterFlowElementImpl
globalThis.UniFlowItemElement = UniFlowItemElementImpl
globalThis.UniStickySectionElement = UniStickySectionElementImpl
globalThis.UniStickyHeaderElement = UniStickyHeaderElementImpl
globalThis.UniNestedScrollHeaderElement = UniNestedScrollHeaderElementImpl
globalThis.UniNestedScrollBodyElement = UniNestedScrollBodyElementImpl
globalThis.UniInputElement = UniInputElementImpl
globalThis.UniTextareaElement = UniTextareaElementImpl
globalThis.UniSwiperElement = UniSwiperElementImpl
globalThis.UniSwiperItemElement = UniSwiperItemElementImpl
globalThis.UniRichTextElement = UniRichTextElementImpl
globalThis.UniNativeViewElement = UniNativeViewElementImpl
globalThis.UniTabsElement = UniTabsElementImpl

globalThis.UniViewElementImpl = UniViewElementImpl
globalThis.UniTextElementImpl = UniTextElementImpl
globalThis.UniWebViewElementImpl = UniWebViewElementImpl
globalThis.UniImageElementImpl = UniImageElementImpl
globalThis.UniScrollViewElementImpl = UniScrollViewElementImpl
globalThis.UniListViewElementImpl = UniListViewElementImpl
globalThis.UniListItemElementImpl = UniListItemElementImpl
globalThis.UniWaterFlowElementImpl = UniWaterFlowElementImpl
globalThis.UniFlowItemElementImpl = UniFlowItemElementImpl
globalThis.UniStickySectionElementImpl = UniStickySectionElementImpl
globalThis.UniStickyHeaderElementImpl = UniStickyHeaderElementImpl
globalThis.UniNestedScrollHeaderElementImpl = UniNestedScrollHeaderElementImpl
globalThis.UniNestedScrollBodyElementImpl = UniNestedScrollBodyElementImpl
globalThis.UniInputElementImpl = UniInputElementImpl
globalThis.UniTextareaElementImpl = UniTextareaElementImpl
globalThis.UniSwiperElementImpl = UniSwiperElementImpl
globalThis.UniSwiperItemElementImpl = UniSwiperItemElementImpl
globalThis.UniRichTextElementImpl = UniRichTextElementImpl
globalThis.UniNativeViewElementImpl = UniNativeViewElementImpl
globalThis.UniTabsElementImpl = UniTabsElementImpl

export {
  UniViewElementImpl,
  UniTextElementImpl,
  UniWebViewElementImpl,
  UniImageElementImpl,
  UniScrollViewElementImpl,
  UniListViewElementImpl,
  UniListItemElementImpl,
  UniWaterFlowElementImpl,
  UniFlowItemElementImpl,
  UniStickySectionElementImpl,
  UniStickyHeaderElementImpl,
  UniNestedScrollHeaderElementImpl,
  UniNestedScrollBodyElementImpl,
  UniInputElementImpl,
  UniTextareaElementImpl,
  UniSwiperElementImpl,
  UniSwiperItemElementImpl,
  UniRichTextElementImpl,
  UniNativeViewElementImpl,
  UniTabsElementImpl
}