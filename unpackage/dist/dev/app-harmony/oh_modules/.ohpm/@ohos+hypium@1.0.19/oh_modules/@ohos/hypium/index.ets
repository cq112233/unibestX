/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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

import Core from './src/main/core';
import {TestType, Size, Level, DEFAULT} from './src/main/Constant';
import DataDriver from './src/main/module/config/DataDriver';
import ExpectExtend from './src/main/module/assert/ExpectExtend';
import OhReport from './src/main/module/report/OhReport';
export { xdescribe, xit, describe, it } from './index.ts';

export declare class Hypium {
    static setData(data: Object): void
    static setTimeConfig(systemTime: Object): void
    static hypiumTest(abilityDelegator: Object, abilityDelegatorArguments: Object, testsuite: Function): void
    static set(key: string, value: Object): void
    static get(key: string): Object
    static registerAssert(customAssertion: Function): void
    static unregisterAssert(customAssertion: string | Function): void
    static hypiumWorkerTest(abilityDelegator: Object, abilityDelegatorArguments: Object,
                            testsuite: Function, workerPort: Object): void;
    static hypiumInitWorkers(abilityDelegator: Object, scriptURL: string, workerNum: number, params: Object): void;
}

export {
    Core,
    DataDriver,
    ExpectExtend,
    OhReport,
    TestType,
    Size,
    Level,
    DEFAULT
};

type allExpectType = Object | undefined | null

export declare function beforeItSpecified(testCaseNames: Array<string> | string, callback: Function): void

export declare function afterItSpecified(testCaseNames: Array<string> | string, callback: Function): void

export declare function beforeEach(callback: Function): void

export declare function afterEach(callback: Function): void

export declare function beforeAll(callback: Function): void

export declare function afterAll(callback: Function): void

export declare interface Assert {
    assertClose(expectValue: number, precision: number): void
    assertContain(expectValue: allExpectType): void
    assertEqual(expectValue: allExpectType): void
    assertFail(): void
    assertFalse(): void
    assertTrue(): void
    assertInstanceOf(expectValue: string): void
    assertLarger(expectValue: number): void
    assertLess(expectValue: number): void
    assertNull(): void
    assertThrowError(expectValue: string | Function): void
    assertUndefined(): void
    assertLargerOrEqual(expectValue: number):void
    assertLessOrEqual(expectValue: number):void
    assertNaN():void
    assertNegUnlimited(): void
    assertPosUnlimited(): void
    not(): Assert;
    assertDeepEquals(expectValue: allExpectType):void
    assertPromiseIsPending(): Promise<void>
    assertPromiseIsRejected(): Promise<void>
    assertPromiseIsRejectedWith(expectValue?: allExpectType): Promise<void>
    assertPromiseIsRejectedWithError(...expectValue: allExpectType[]): Promise<void>
    assertPromiseIsResolved(): Promise<void>
    assertPromiseIsResolvedWith(expectValue?: allExpectType): Promise<void>
    message(msg: string): Assert
}

export declare function expect(actualValue?: allExpectType): Assert

export declare class ArgumentMatchers {
    public static any: allExpectType;
    public static anyString: string;
    public static anyBoolean: Boolean;
    public static anyNumber: Number;
    public static anyObj: Object;
    public static anyFunction: Function;
    public static matchRegexs(regex: RegExp): void
}

declare interface whenResult {
    afterReturn: (value: allExpectType) => allExpectType
    afterReturnNothing: () => undefined
    afterAction: (action: allExpectType) => allExpectType
    afterThrow: (e_msg: string) => string
}

export declare function when(f:Function): (f?: allExpectType | void) => whenResult

export declare interface VerificationMode {
    times(count: Number): void
    never(): void
    once(): void
    atLeast(count: Number): void
    atMost(count: Number): void
}

export declare class MockKit {
    constructor()
    mockFunc(obj: Object, func: Function): Function
    mockObject(obj: Object): Object
    verify(methodName: String, argsArray: Array<allExpectType>): VerificationMode
    ignoreMock(obj: Object, func: Function): void
    clear(obj: Object): void
    clearAll(): void
}

export declare class SysTestKit {
    static getDescribeName(): string;
    static getItName(): string;
    static getItAttribute(): TestType | Size | Level
    static actionStart(tag: string): void
    static actionEnd(tag: string): void
    static existKeyword(keyword: string, timeout?: number): boolean
}

