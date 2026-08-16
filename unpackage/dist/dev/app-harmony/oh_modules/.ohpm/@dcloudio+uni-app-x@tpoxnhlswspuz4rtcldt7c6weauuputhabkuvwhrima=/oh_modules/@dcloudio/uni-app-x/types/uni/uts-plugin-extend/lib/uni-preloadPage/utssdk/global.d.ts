import  { PreloadPageOptions as PreloadPageOptionsOrigin, PreloadPage as PreloadPageOrigin, Uni as UniOrigin }  from "./interface"

declare global {
  type PreloadPageOptions = PreloadPageOptionsOrigin
  type PreloadPage = PreloadPageOrigin
  interface Uni extends UniOrigin {}
}
