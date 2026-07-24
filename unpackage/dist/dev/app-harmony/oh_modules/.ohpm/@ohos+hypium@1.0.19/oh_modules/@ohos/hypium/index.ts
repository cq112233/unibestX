/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TestType, Size, Level } from "./src/main/Constant";

export declare function xdescribe(testSuiteName: string, func: Function): void;

export declare namespace xdescribe {
    function reason(reason: string): any;
};

export declare function describe(testSuiteName: string, func: Function): void;

export declare function xit(testCaseName: string, attribute: TestType | Size | Level, func: Function): void;

export declare namespace xit {
    function reason(reason: string): any;
};

export declare function it(testCaseName: string, attribute: TestType | Size | Level, func: Function): void;
