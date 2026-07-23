import type { UniElement } from '@dcloudio/uni-app-x/types/native';
import type { UniElementImpl } from '../dom/UniElement';
import type { BusinessError } from "@ohos:base";
import image from "@ohos:multimedia.image";
import window from "@ohos:window";
import componentSnapshot from "@ohos:arkui.componentSnapshot";
import fs from "@ohos:file.fs";
import type { UniBodyElementImpl } from '../dom/UniBodyElement';
import type webview from "@ohos:web.webview";
export function getSnapShotElementByBody(body: UniBodyElementImpl): UniElement {
    let el: UniElement = body;
    // 找到第一个合法子节点，针对多根节点第一个子节点是注释节点情况
    const childNodes = body.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].tagName) {
            el = childNodes[i];
            break;
        }
    }
    // 如果子节点高度小于 body，截取 body，防止截图过小问题
    if ((el as UniElementImpl).layoutNode.getLayoutHeight() < body.layoutNode.getLayoutHeight()) {
        el = body;
    }
    return el;
}
export async function windowSnapShot(context: Context): Promise<PixelMap> {
    return new Promise((resolve, reject) => {
        window.getLastWindow(context).then(currentWidnow => {
            currentWidnow.snapshot().then((pixelMap: image.PixelMap) => {
                resolve(pixelMap);
            }).catch(reject);
        }).catch(reject);
    });
}
export function isScrollAbleElement(el: UniElement): boolean {
    return el.tagName === 'SCROLL-VIEW' || el.tagName === 'LIST-VIEW' || el.tagName === 'WEB-VIEW';
}
async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function getSnapshotId() {
    return `screen_shot_id_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
}
export async function scrollSnapshot(el: UniElement): Promise<PixelMap> {
    const tagName = el.tagName;
    if (tagName === 'SCROLL-VIEW' || tagName === 'LIST-VIEW') {
        return scrollViewScrollSnapshot(el);
    }
    return webViewScrollSnapshot(el);
}
const SCROLL_VIEW_SCROLL_TIMEOUT = 100;
export async function scrollViewScrollSnapshot(el: UniElement): Promise<PixelMap> {
    return new Promise(async (resolve, reject) => {
        const scroller: Scroller = el['scroller'];
        const originOffsetY: number = scroller.currentOffset().yOffset;
        const componentWidth: number = el['widthByAreaChange'];
        const componentHeight: number = el['heightByAreaChange'];
        const areaArray: image.PositionArea[] = [];
        const scrollYOffsets: number[] = [];
        const screenShotId = getSnapshotId();
        (el as UniElementImpl).frameNode!.commonAttribute.id(screenShotId);
        // 滚动到顶部, 以便截图
        scroller.scrollTo({
            xOffset: 0,
            yOffset: 0,
            animation: {
                duration: 0
            }
        });
        await sleep(SCROLL_VIEW_SCROLL_TIMEOUT);
        scrollViewSnapCurrentScreen(scrollYOffsets, el, screenShotId, componentWidth, componentHeight, areaArray, scroller).then(async (pixelMap) => {
            // 截图后恢复滚动位置
            scroller.scrollTo({
                xOffset: 0,
                yOffset: originOffsetY,
                animation: {
                    duration: 0
                }
            });
            await sleep(SCROLL_VIEW_SCROLL_TIMEOUT);
            // 重置元素id
            (el as UniElementImpl).frameNode!.commonAttribute.id(undefined);
            resolve(pixelMap);
        }).catch((e: BusinessError) => {
            reject(e);
        });
    });
}
async function scrollViewSnapCurrentScreen(scrollYOffsets: number[], el: UniElement, screenShotId: string, componentWidth: number, componentHeight: number, areaArray: image.PositionArea[], scroller: Scroller): Promise<PixelMap> {
    scrollYOffsets.push(scroller.currentOffset().yOffset);
    const pixelMap = await componentSnapshot.get(screenShotId);
    // 获取当前这一屏中需要的像素数据
    const area: image.PositionArea = await getSnapshotArea(pixelMap, scrollYOffsets, componentWidth, componentHeight);
    areaArray.push(area);
    // 如果没有滚动到底部，继续滚动截图
    if (!scroller.isAtEnd()) {
        scrollerScroll(scroller, calculateNeedScrollDistance(el.scrollHeight, scrollYOffsets[scrollYOffsets.length - 1], componentHeight));
        await sleep(SCROLL_VIEW_SCROLL_TIMEOUT);
        return await scrollViewSnapCurrentScreen(scrollYOffsets, el, screenShotId, componentWidth, componentHeight, areaArray, scroller);
    }
    else {
        // 滚动结束，合并所有截图
        return await mergeImage(areaArray, scrollYOffsets[scrollYOffsets.length - 1], componentWidth, componentHeight);
    }
}
function calculateNeedScrollDistance(scrollHeight: number, lastScrollYOffset: number, componentHeight: number): number {
    // 以下计算用于规避剩余高度不足一个组件高度时，一次性滚动，最后拼接后的长图最后一屏丢失问题
    // 未找到具体原因，只发现多次小距离滚动截图再拼接可以规避
    // 剩余还有至少一个组件高度，滚动组件高度
    const hasMoreFullScreen = scrollHeight - lastScrollYOffset >= componentHeight * 2;
    // 剩余高度小于 120，滚动 10
    const needMiniStep = scrollHeight - lastScrollYOffset - componentHeight < 120;
    // 剩余高度大于120 但不足一个组件高度，滚动 40
    return hasMoreFullScreen ? componentHeight : needMiniStep ? 10 : 40;
}
function scrollerScroll(scroller: Scroller, scrollHeight: number): void {
    scroller.scrollTo({
        xOffset: 0,
        yOffset: (scroller.currentOffset().yOffset + scrollHeight),
        animation: {
            duration: 0,
        }
    });
}
const WEB_VIEW_SCROLL_TIMEOUT = 800;
async function webViewScrollSnapshot(el: UniElement): Promise<PixelMap> {
    return new Promise(async (resolve, reject) => {
        const controller: webview.WebviewController = el['controller'];
        const originOffsetY: number = el['curOffsetY'];
        const componentWidth: number = el['widthByAreaChange'];
        const componentHeight: number = el['heightByAreaChange'];
        const scrollHeight: number = componentHeight * 0.7;
        const areaArray: image.PositionArea[] = [];
        const scrollYOffsets: number[] = [];
        const screenShotId = getSnapshotId();
        (el as UniElementImpl).frameNode!.commonAttribute.id(screenShotId);
        // 滚动到顶部, 以便截图
        controller.scrollTo(0, 0);
        await sleep(WEB_VIEW_SCROLL_TIMEOUT);
        webViewSnapCurrentScreen(scrollYOffsets, el, screenShotId, componentWidth, componentHeight, scrollHeight, areaArray, controller).then(async (pixelMap) => {
            // 截图后恢复滚动位置
            controller.scrollTo(0, originOffsetY);
            await sleep(WEB_VIEW_SCROLL_TIMEOUT);
            // 重置元素id
            (el as UniElementImpl).frameNode!.commonAttribute.id(undefined);
            resolve(pixelMap);
        }).catch((e: BusinessError) => {
            reject(e);
        });
    });
}
async function webViewSnapCurrentScreen(scrollYOffsets: number[], el: UniElement, screenShotId: string, componentWidth: number, componentHeight: number, scrollHeight: number, areaArray: image.PositionArea[], controller: webview.WebviewController): Promise<PixelMap> {
    const curOffsetY: number = el['curOffsetY'];
    scrollYOffsets.push(curOffsetY);
    const pixelMap = await componentSnapshot.get(screenShotId);
    // 获取当前这一屏中需要的像素数据
    const area: image.PositionArea = await getSnapshotArea(pixelMap, scrollYOffsets, componentWidth, componentHeight);
    areaArray.push(area);
    // 如果没有滚动到底部，继续滚动截图
    if (Math.ceil(curOffsetY + componentHeight) < controller.getPageHeight()) {
        controller.scrollByWithResult(0, scrollHeight);
        await sleep(WEB_VIEW_SCROLL_TIMEOUT);
        return await webViewSnapCurrentScreen(scrollYOffsets, el, screenShotId, componentWidth, componentHeight, scrollHeight, areaArray, controller);
    }
    else {
        // 滚动结束，合并所有截图
        return await mergeImage(areaArray, scrollYOffsets[scrollYOffsets.length - 1], componentWidth, componentHeight);
    }
}
async function getSnapshotArea(pixelMap: PixelMap, scrollYOffsets: number[], width: number, height: number): Promise<image.PositionArea> {
    // Gets the number of bytes per line of image pixels.
    const stride = pixelMap.getBytesNumberPerRow();
    // Get the total number of bytes of image pixels.
    const bytesNumber = pixelMap.getPixelBytesNumber();
    const buffer: ArrayBuffer = new ArrayBuffer(bytesNumber);
    const len = scrollYOffsets.length;
    // 非第一屏时才需要裁剪
    if (len >= 2) {
        // 本地滚动距离
        const realScrollHeight = scrollYOffsets[len - 1] - scrollYOffsets[len - 2];
        if (height - realScrollHeight > 0) {
            const cropRegion: image.Region = {
                x: 0,
                y: vp2px(height - realScrollHeight),
                size: {
                    height: Math.round(vp2px(realScrollHeight)),
                    width: vp2px(width)
                }
            };
            if (cropRegion.size.height == 0) {
                // 如果裁剪高度为0，直接返回空区域
                return {
                    pixels: buffer,
                    offset: 0,
                    stride: stride,
                    region: {
                        size: {
                            width: 0,
                            height: 0
                        },
                        x: 0,
                        y: 0
                    }
                };
            }
            // Crop roll area
            await pixelMap.crop(cropRegion);
        }
    }
    const imgInfo = pixelMap.getImageInfoSync();
    // Region size, read based on region. PositionArea represents the data within the specified area of the image.
    const area: image.PositionArea = {
        pixels: buffer,
        offset: 0,
        stride: stride,
        region: {
            size: {
                width: imgInfo.size.width,
                height: imgInfo.size.height
            },
            x: 0,
            y: 0
        }
    };
    // Write data to a specified area
    pixelMap.readPixelsSync(area);
    return area;
}
async function mergeImage(areaArray: image.PositionArea[], lastOffsetY: number, listWidth: number, listHeight: number): Promise<PixelMap> {
    // Create a long screenshot PixelMap
    const opts: image.InitializationOptions = {
        editable: true,
        pixelFormat: 4,
        size: {
            width: vp2px(listWidth),
            height: Math.round(vp2px(lastOffsetY + listHeight))
        }
    };
    const longPixelMap = image.createPixelMapSync(opts);
    let imgPosition: number = 0;
    for (let i = 0; i < areaArray.length; i++) {
        const readArea = areaArray[i];
        const area: image.PositionArea = {
            pixels: readArea.pixels,
            offset: 0,
            stride: readArea.stride,
            region: {
                size: {
                    width: readArea.region.size.width,
                    height: readArea.region.size.height
                },
                x: 0,
                y: imgPosition
            }
        };
        imgPosition += readArea.region.size.height;
        longPixelMap.writePixelsSync(area);
    }
    return longPixelMap;
}
export function pixelMapToImgPath(context: Context, format: string, pixelMap: image.PixelMap, path: string | null): Promise<string> {
    return new Promise((resolve, reject) => {
        const fileDir = context.tempDir;
        const folderName = 'uni-snapshot';
        const isDirExist = fs.accessSync(`${fileDir}/${folderName}`, fs.AccessModeType.WRITE);
        if (!isDirExist) {
            fs.mkdirSync(`${fileDir}/${folderName}`, true);
        }
        const file = fs.openSync(`${fileDir}/${folderName}/${path ?? Date.now()}.${format}`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
        const imagePackerApi = image.createImagePacker();
        const packOpts: image.PackingOption = { format: `image/${format}`, quality: 100 };
        imagePackerApi.packToFile(pixelMap, file.fd, packOpts, (err) => {
            pixelMap.release();
            if (err) {
                reject({ message: 'pixelMapToImgPath fail' } as BusinessError);
            }
            else {
                resolve(file.path);
            }
        });
    });
}
