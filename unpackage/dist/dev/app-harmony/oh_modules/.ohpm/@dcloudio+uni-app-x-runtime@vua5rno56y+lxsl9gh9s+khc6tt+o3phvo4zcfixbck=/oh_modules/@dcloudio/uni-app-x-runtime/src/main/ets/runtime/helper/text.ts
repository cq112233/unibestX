/**
 * uni-app#next packages/uni-components/src/helpers/text.ts
 */

export const LINEFEED = '\n'

const SPACE_UNICODE = {
  ensp: '\u2002',
  emsp: '\u2003',
  nbsp: '\u00a0',
}

const DECODE_TEXT = {
  '&nbsp;': SPACE_UNICODE.nbsp,
  '&ensp;': SPACE_UNICODE.ensp,
  '&emsp;': SPACE_UNICODE.emsp,
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&quot;': '"',
  '&apos;': "'",
}

export interface DecodeOptions {
  space?: keyof typeof SPACE_UNICODE
  decode?: boolean
}

export type DecodeOptionsSpace = DecodeOptions['space']

const spaceAndDecodeRegexp = /( |&nbsp;|&ensp;|&emsp;|&lt;|&gt;|&amp;|&quot;|&apos;)/g

function normalizeText(text: string, { space, decode }: DecodeOptions) {
  if (!space && !decode) return text
  const realSpace = space && SPACE_UNICODE[space]
  if (realSpace && !decode) {
    return text.replaceAll(' ', realSpace)
  }
  return text.replace(spaceAndDecodeRegexp, (substr: string) => {
    switch (substr) {
      case ' ':
        return realSpace || ' '
      case '&nbsp;':
      case '&ensp;':
      case '&emsp;':
      case '&lt;':
      case '&gt;':
      case '&amp;':
      case '&quot;':
      case '&apos;':
        return decode ? DECODE_TEXT[substr] : substr
      default:
        return substr
    }
  })
}

export function parseText(text: string, options: DecodeOptions) {
  return normalizeText(text, options).split(LINEFEED)
}