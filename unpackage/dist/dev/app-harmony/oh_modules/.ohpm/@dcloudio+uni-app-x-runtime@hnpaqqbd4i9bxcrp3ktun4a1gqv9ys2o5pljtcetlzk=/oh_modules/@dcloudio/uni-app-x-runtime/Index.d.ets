import { UniFrameworkApi } from '@dcloudio/uni-runtime-harmony';
import { UniModuleApi } from '@dcloudio/uni-app-modules';
import { And } from './utility-types';
declare const uni: And<UniFrameworkApi, UniModuleApi>;
export * from '@dcloudio/uni-app-harmony';
export * from '@dcloudio/uni-runtime-harmony';
export * from '@dcloudio/uni-app-modules';
export { uni };
