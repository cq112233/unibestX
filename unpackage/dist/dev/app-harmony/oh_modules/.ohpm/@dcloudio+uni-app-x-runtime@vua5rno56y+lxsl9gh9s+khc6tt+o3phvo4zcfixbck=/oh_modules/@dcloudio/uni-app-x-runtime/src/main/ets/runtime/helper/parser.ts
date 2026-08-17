import { expand } from '../libs/styler'

type Declaration = {
  prop: string,
  value: string,
  important: boolean,
  replaceWith(newProps: Declaration[]): void,
}

const processDeclaration = expand({ type: 'uvue' }).Declaration as (
  decl: Declaration,
) => void

export function parseStyleDecl(
  prop: string,
  value: any | null,
): Declaration[] {
  const newValue = String(value)
  const important = newValue.includes('!important')
  const decl = {
    prop,
    value: !important ? newValue : newValue.replace(/\s*!important/, ''),
    important,
    replaceWith(newProps: Declaration[]) {
      props = newProps
    },
  }

  let props = [decl]
  processDeclaration(decl)
  return props
}
