import { RequestFullscreenOptions, UniViewElement as IUniViewElement, ExitFullscreenOptions } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../libs/dom';
import { UniNativePageImpl } from './IUniNativePage';
export declare class UniViewElementImpl extends UniElementImpl implements IUniViewElement {
    /**
     * @internal
     */
    page: UniNativePageImpl;
    protected isFullscreen: boolean;
    protected requestFullscreenOptions: RequestFullscreenOptions;
    protected setNavigation(status: 'show' | 'hide'): void;
    requestFullscreen(options?: RequestFullscreenOptions | null | undefined): void;
    _exitFullscreen(options?: ExitFullscreenOptions | null): Promise<boolean>;
}
