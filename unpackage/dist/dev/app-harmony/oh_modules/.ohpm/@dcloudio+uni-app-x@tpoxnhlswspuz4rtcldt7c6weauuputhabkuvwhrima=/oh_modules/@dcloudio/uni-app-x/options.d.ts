import app from '@/App.uvue'

type App = typeof app
declare global {
  export interface JSExport {}
  export interface AppCreateVueAppComponentDefault extends App {

  }
}
