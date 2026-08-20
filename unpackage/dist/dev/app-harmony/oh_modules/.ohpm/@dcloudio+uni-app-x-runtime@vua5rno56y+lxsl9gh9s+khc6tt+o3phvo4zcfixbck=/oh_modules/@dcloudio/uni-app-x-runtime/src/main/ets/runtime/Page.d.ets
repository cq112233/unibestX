import type { PageContainer } from './components/Page';
type PageLifeCycle = 'aboutToAppear' | 'aboutToDisappear' | 'onBackPress' | 'onPageShow' | 'onPageHide' | 'onDidBuild';
export declare function callPageLifeCycle(name: PageLifeCycle, page: PageContainer): void;
export {};
