import type { UniElement } from '@dcloudio/uni-app-x/types/native';
import type { BusinessError } from "@ohos:base";
import fs from "@ohos:file.fs";
import image from "@ohos:multimedia.image";
import window from "@ohos:window";
export async function windowSnapShot(context: Context): Promise<PixelMap> {
    return new Promise((resolve, reject) => {
        window.getLastWindow(context).then(currentWidnow => {
            currentWidnow.snapshot().then((pixelMap: image.PixelMap) => {
                resolve(pixelMap);
            }).catch(reject);
        }).catch(reject);
    });
}
export function getSnapShotElementByBody(body: UniElement): UniElement {
    let el: UniElement = body;
    // 找到第一个合法子节点，针对多根节点第一个子节点是注释节点情况
    const children = body.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName) {
            el = children[i];
            break;
        }
    }
    // 如果子节点高度小于 body，截取 body，防止截图过小问题
    if (el.offsetHeight < body.offsetHeight) {
        el = body;
    }
    return el;
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
export function isTransparent(color: string): boolean {
    color = color.trim().toLowerCase();
    if (color === 'transparent')
        return true;
    // Hex format
    if (color.startsWith('#')) {
        const hex = color.slice(1);
        // #AARRGGBB format
        if (hex.length === 8) {
            return hex.slice(0, 2) === '00';
        }
        // #ARGB format
        if (hex.length === 4) {
            return hex.slice(0, 1) === '0';
        }
        return false;
    }
    // RGBA format
    if (color.startsWith('rgba')) {
        const match = color.match(/rgba?\(.*,\s*([\d.]+)\s*\)/);
        if (match && match[1]) {
            return parseFloat(match[1]) === 0;
        }
    }
    return false;
}
