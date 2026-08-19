import { IUniNativeAppImpl } from "./IUniNativeApp"
import { setUniApp as setUniAppOrigin, getUniApp as getUniAppOrigin} from './libs/dom'

export const  setUniApp = setUniAppOrigin

export const getUniApp= getUniAppOrigin as ()=> IUniNativeAppImpl | null
