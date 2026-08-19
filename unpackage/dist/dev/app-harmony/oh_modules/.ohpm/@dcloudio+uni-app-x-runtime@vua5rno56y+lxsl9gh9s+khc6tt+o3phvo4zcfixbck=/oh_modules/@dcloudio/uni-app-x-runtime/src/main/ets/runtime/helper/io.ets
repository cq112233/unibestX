import fs from '@ohos.file.fs';
import buffer from '@ohos.buffer';
import { getAbilityContext } from '../App'
import { getUniApp } from '../UniNativeApp'
import { getCurrentPage } from './utils'
import { getRealPath } from '../polyfill';

interface Env {
  USER_DATA_PATH: string
  TEMP_PATH: string
  CACHE_PATH: string
  SANDBOX_PATH: string
  STATIC_PATH: string
}

export const RAW_PATH = 'resource://rawfile'

const UNI_FILE_SCHEME = 'unifile://'
const USER_DATA_PATH = `${UNI_FILE_SCHEME}usr/`
const TEMP_PATH = `${UNI_FILE_SCHEME}temp/`
const CACHE_PATH = `${UNI_FILE_SCHEME}cache/`
const SANDBOX_PATH = `${UNI_FILE_SCHEME}sandbox/`
const STATIC_PATH = `${UNI_FILE_SCHEME}static/`

let env: Env | null = null

export function getEnv() {
  if (env) {
    return env
  }
  const abilityContext = getAbilityContext()!
  const context = abilityContext.getApplicationContext()!
  const mp = getUniApp()!
  const appId = mp.appid
  // TODO 适配小程序
  const isMainApp = true
  // NOTE 由于主应用安卓上没有做 appId 目录区分，这里保持和安卓一致
  const appSubDir = isMainApp ? '' : '/uni-miniprogram/' + appId
  const USER_DATA_PATH = context.filesDir + appSubDir
  const TEMP_PATH = context.tempDir + appSubDir
  const CACHE_PATH = context.cacheDir + appSubDir
  const SANDBOX_PATH = context.filesDir.replace(/\/files$/, '')
  const STATIC_PATH = `${abilityContext.resourceDir}${appSubDir}${isMainApp ? '/' : ''}uni-static`
  try {
    if (!fs.accessSync(USER_DATA_PATH)) {
      fs.mkdirSync(USER_DATA_PATH, true)
    }
  } catch (error) {
    console.log('getEnv mkdirSync USER_DATA_PATH error:', error);
  }
  try {
    if (!fs.accessSync(TEMP_PATH)) {
      fs.mkdirSync(TEMP_PATH, true)
    }
  } catch (error) {
    console.log('getEnv mkdirSync TEMP_PATH error:', error);
  }
  try {
    if (!fs.accessSync(CACHE_PATH)) {
      fs.mkdirSync(CACHE_PATH, true)
    }
  } catch (error) {
    console.log('getEnv mkdirSync CACHE_PATH error:', error);
  }
  try {
    if (!fs.accessSync(STATIC_PATH)) {
      fs.mkdirSync(STATIC_PATH, true)
    }
  } catch (error) {
    console.log('getEnv mkdirSync STATIC_PATH error:', error);
  }
  env = {
    USER_DATA_PATH,
    TEMP_PATH,
    CACHE_PATH,
    SANDBOX_PATH,
    STATIC_PATH
  } as Env
  return env
}

// /data/storage/el2/base/files
let filesDir = ''

export function getFilesDir() {
  if (!filesDir) {
    const context = getAbilityContext()
    if (context && context.getApplicationContext) {
      filesDir = context.getApplicationContext().filesDir
    }
  }
  return filesDir
}

// /data/storage/el1/bundle/entry/resource/resfile
let resourceDir = ''

export function getResourceDir() {
  if (!resourceDir) {
    const context = getAbilityContext()
    if (context) {
      resourceDir = context.resourceDir
    }
  }
  return resourceDir
}

export function getPrivateDir(appID?: string) {
  if (!appID) {
    const mp = getUniApp()!
    appID = mp.appid
  }
  const filesDir = getFilesDir()
  // /data/storage/el2/base/files/uni-app-x/apps/HBuilder
  return `${filesDir}/uni-app-x/apps/${appID}`
}

export function getResourceStr(
  filepath: string,
  forceStr?: boolean,
  appID?: string,
): string | ResourceStr {
  // 转换项目资源路径，当前仅处理绝对路径
  if (filepath.indexOf('/') === 0) {
    if (!filepath.startsWith('/data/storage/')) {
      // 暂时固定转为 resfile 目录
      filepath = getPrivateDir(appID).replace(getFilesDir(), getResourceDir()) + '/www' + filepath
    }
  }
  if (filepath.startsWith('/')) {
    // 非媒体目录正常处理
    filepath = 'file://' + filepath
  }
  // resource://rawfile/apps/HBuilder/www
  if (!forceStr && filepath.startsWith(RAW_PATH)) {
    return $rawfile(filepath.replace(RAW_PATH + '/', ''))
  }
  return filepath
}

function hasLeadingSlash(str: string) {
  return str.indexOf('/') === 0
}

export function addLeadingSlash(str: string) {
  return hasLeadingSlash(str) ? str : '/' + str
}

export function getRealRoute(fromRoute: string, toRoute: string): string {
  if (toRoute.indexOf('/') === 0) {
    return toRoute
  }
  if (toRoute.indexOf('./') === 0) {
    return getRealRoute(fromRoute, toRoute.slice(2))
  }
  const toRouteArray = toRoute.split('/')
  const toRouteLength = toRouteArray.length
  let i = 0
  for (; i < toRouteLength && toRouteArray[i] === '..'; i++) {
    // noop
  }
  toRouteArray.splice(0, i)
  toRoute = toRouteArray.join('/')
  const fromRouteArray = fromRoute.length > 0 ? fromRoute.split('/') : []
  fromRouteArray.splice(fromRouteArray.length - i - 1, i + 1)
  return addLeadingSlash(fromRouteArray.concat(toRouteArray).join('/'))
}

function transformUniFile(filepath: string) {
  if (filepath.startsWith(UNI_FILE_SCHEME)) {
    const env = getEnv()
    if (filepath.startsWith(USER_DATA_PATH)) {
      return filepath.replace(USER_DATA_PATH, `${env.USER_DATA_PATH}/`)
    }
    if (filepath.startsWith(CACHE_PATH)) {
      return filepath.replace(CACHE_PATH, `${env.CACHE_PATH}/`)
    }
    if (filepath.startsWith(SANDBOX_PATH)) {
      return filepath.replace(SANDBOX_PATH, `${env.SANDBOX_PATH}/`)
    }
    if (filepath.startsWith(TEMP_PATH)) {
      return filepath.replace(TEMP_PATH, `${env.TEMP_PATH}/`)
    }
    if (filepath.startsWith(STATIC_PATH)) {
      return filepath.replace(STATIC_PATH, `${env.STATIC_PATH}/`)
    }
  }
  return filepath
}

export function getFileURL(url: string, appID?: string) {
  url = transformUniFile(url)
  // 无协议的情况补全 https
  if (url.indexOf('//') === 0) {
    return 'https:' + url
  }
  // 相对资源
  if (url.indexOf('../') === 0 || url.indexOf('./') === 0) {
    const page = getCurrentPage()
    if (page) {
      url = getRealRoute(addLeadingSlash(page.route), url)
    }
  }
  return getResourceStr(url, true, appID) as string
}

/**
 * 小文件读取，一次读出所有内容
 * @param filePath
 * @returns
 */
export function readBufferSync(filePath: string) {
  // open比直接read更强大，适用于更多文件
  const file = fs.openSync(filePath, fs.OpenMode.READ_ONLY)
  const size = fs.statSync(file.fd).size
  const buf = new ArrayBuffer(size)
  fs.readSync(file.fd, buf, {
    offset: 0,
    length: size
  })
  return buffer.from(buf)
}

export function readTextSync(filePath: string) {
  const buf = readBufferSync(filePath)
  return buf.toString('utf8')
}

export function formatFontFaceSrc(value?: string | null): string {
  if (!value) {
    return ''
  }
  if (value.startsWith(`url("`) || value.startsWith(`url('`)) {
    value = getRealPath(value.substring(5, value.length - 2)) as string;
  } else if (value.startsWith('url(')) {
    value = getRealPath(value.substring(4, value.length - 1)) as string;
  } else {
    value = getRealPath(value) as string;
  }
  return value;
}
