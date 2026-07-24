import { array as testArray } from '../../libs/function/test'
import { UPUploadFileChoosed, UPUploadChooseFileOptions } from './types.uts'

function pickExclude(objOri: ChooseImageTempFile|ChooseMediaTempFile|ChooseFileTempFile, keys: string[]) {
	// 某些情况下，type可能会为
    // if (!['[object Object]', '[object File]'].includes(Object.prototype.toString.call(obj))) {
    //     return {}
    // }
	let obj = JSON.parse(JSON.stringify(objOri)) as UTSJSONObject
    return UTSJSONObject.keys(obj).reduce((prev, key) => {
        if (!keys.includes(key)) {
            prev[key] = obj[key]
        }
        return prev
    }, {})
}

function formatImage(res: ChooseImageSuccess): Array<UPUploadFileChoosed|null> {
	// @ts-ignore
    return res.tempFiles.map((item: ChooseImageTempFile) => {
		let tmp = {
			...pickExclude(item, ['path']),
			type: 'image',
			url: item.path,
			thumb: item.path,
			size: item.size,





			name: item.path.split('/').pop() + '.png',

		}
		return JSON.parseObject<UPUploadFileChoosed>(JSON.stringify(tmp))
	})
}

function formatVideo(res: ChooseVideoSuccess): Array<UPUploadFileChoosed|null> {
	// console.log(res)
	// @ts-ignore
	let tmp = {
		// @ts-ignore
	    ...pickExclude(res, ['tempFilePath', 'thumbTempFilePath', 'errMsg']),
	    type: 'video',
	    url: res.tempFilePath,
	    // thumb: res.thumbTempFilePath,
		thumb: '',
		size: res.size,
		width: res.width ?? 0, // APP 2.1.0+、H5、微信小程序、京东小程序
		height: res.height ?? 0, // APP 2.1.0+、H5、微信小程序、京东小程序





		name: res.tempFilePath.split('/').pop() + '.mp4',

	}
    return [
		JSON.parseObject<UPUploadFileChoosed>(JSON.stringify(tmp))
    ]
}

function formatMedia(res: ChooseMediaSuccess): Array<UPUploadFileChoosed|null> {
	// @ts-ignore
    return res.tempFiles.map((item : ChooseMediaTempFile) => {
		let tmp = {
			// @ts-ignore
			...pickExclude(item, ['fileType', 'thumbTempFilePath', 'tempFilePath']),
			type: res.type,
			url: item.tempFilePath,
			thumb: res.type === 'video' ? item.thumbTempFilePath : item.tempFilePath,
			size: item.size,




			name: item.tempFilePath.split('/').pop() + (res.type === 'video' ? '.mp4': '.png'),

		}
		return JSON.parseObject<UPUploadFileChoosed>(JSON.stringify(tmp))
	})
}

function formatFile(res: ChooseFileSuccess): Array<UPUploadFileChoosed|null> {
	// @ts-ignore
    return res.tempFiles.map((item: ChooseFileTempFile) => {
		let tmp ={
			...pickExclude(item, ['path']), 
			url: item.path, 
			size:item.size,





		}
		return JSON.parseObject<UPUploadFileChoosed>(JSON.stringify(tmp))
	})
}
export function chooseFile({
    accept,
    multiple,
    capture,
    compressed,
    maxDuration,
    sizeType,
    camera,
    maxCount,
    extension
}: UPUploadChooseFileOptions): Promise<Array<UPUploadFileChoosed|null>> {
	let captureList = [] as Array<string>
    try {
		// if (capture != null) {
			captureList = testArray(capture) ? capture as string[] : capture.toString().split(',');
		// }
    } catch(e) {
    }
    return new Promise((resolve, reject) => {
        switch (accept) {
        case 'image':
            uni.chooseImage({
                count: multiple ? Math.min(maxCount, 9) : 1,
                sourceType: captureList,
                sizeType,
				// @ts-ignore
                success: (res: ChooseImageSuccess) => resolve(formatImage(res)),
                fail: reject
            })
            break














        case 'video':
            uni.chooseVideo({
                sourceType: captureList,
                compressed,
                maxDuration,
				// @ts-ignore
                camera,
				// @ts-ignore
                success: (res: ChooseVideoSuccess) => resolve(formatVideo(res)),
                fail: reject
            })
            break


























		default: 
			// 此为保底选项，在accept不为上面任意一项的时候选取全部文件

























        }
    })
}
