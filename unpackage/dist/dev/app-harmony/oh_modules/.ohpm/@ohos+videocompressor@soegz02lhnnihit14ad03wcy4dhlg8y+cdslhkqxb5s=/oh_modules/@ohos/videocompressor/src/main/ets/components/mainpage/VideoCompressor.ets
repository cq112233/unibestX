/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { newVideoCompressor } from 'libvideoCompressor.so';
import { CompressorResponse } from './CompressorResponse';
import fs from '@ohos.file.fs';

export class VideoCompressor {
  private object: newVideoCompressor;
  private outPutFilePath = "";
  constructor() {
    console.log("VideoCompressor constructor");
    this.object = new newVideoCompressor();
  }

  /**
   * @param context 上下文
   * @param inputFilePath 需要压缩的视频路径
   * @param quality 压缩视频质量
   */
  compressVideo(context: Context, inputFilePath: string, quality: CompressQuality): Promise<CompressorResponse> {
    try {
      if (!context) {
        console.info("videoCompressor context is null");
        return new Promise((resolve, reject) => {
          reject(new Error("context is null"));
        });
      }
      let date = new Date();
      this.outPutFilePath = context.filesDir + "/" + date.getTime() + ".mp4";
      console.info("quality:" + quality + "--videoCompressor outPutFilePath:" + this.outPutFilePath);
      let outputFile = fs.openSync(this.outPutFilePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
      if (!outputFile) {
        console.info("videoCompressor outputFile create error");
        return new Promise((resolve, reject) => {
          fs.unlink(this.outPutFilePath);
          reject(new Error("videoCompressor outputFile create error"));
        });
      }

      let inputFile = fs.openSync(inputFilePath, fs.OpenMode.READ_ONLY);
      if (!inputFile) {
        console.info("videoCompressor inputFile is null");
        return new Promise((resolve, reject) => {
          fs.unlink(this.outPutFilePath);
          reject(new Error("videoCompressor inputFile is null"));
        });
      }
      console.info("videoCompressor inputFile fd:" + inputFile.fd);
      let inputFileStat = fs.statSync(inputFile.fd);
      if (!inputFileStat) {
        console.info("videoCompressor inputFileStat is error");
        return new Promise((resolve, reject) => {
          fs.unlink(this.outPutFilePath);
          reject(new Error("videoCompressor inputFileStat is error"));
        });
      }
      if (inputFileStat.size <= 0) {
        console.info("videoCompressor inputFile size is 0");
        return new Promise((resolve, reject) => {
          fs.unlink(this.outPutFilePath);
          reject(new Error("videoCompressor inputFile size is 0"));
        });
      }
      return this.object.compressVideoNative(outputFile.fd, inputFile.fd, 0, inputFileStat.size, quality, this.outPutFilePath);
    } catch (err) {
      return new Promise((resolve, reject) => {
        fs.unlink(this.outPutFilePath);
        reject(err);
      });
    }
  }
}

export enum CompressQuality {
  COMPRESS_QUALITY_HIGH = 1,
  COMPRESS_QUALITY_MEDIUM = 2,
  COMPRESS_QUALITY_LOW = 3,
}