import { UniViewElementImpl } from './UniViewElement'
import { UniNativeViewElementImpl } from './UniNativeViewElement'
import {
  define,
  UniCommentElementImpl,
  UniImageElementImpl,
  UniRichTextNativeElementImpl,
  UniScrollViewElementImpl,
  UniTextElementImpl,
} from '../libs/dom'

define('body', UniViewElementImpl)
define('view', UniViewElementImpl)
define('text', UniTextElementImpl)
define('native-view', UniNativeViewElementImpl)
define('scroll-view', UniScrollViewElementImpl)
define('image', UniImageElementImpl)
define('#comment', UniCommentElementImpl)
define('rich-text-native', UniRichTextNativeElementImpl)
