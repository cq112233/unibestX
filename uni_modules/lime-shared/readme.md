# LimeShared 常用函数库
专为UI组件开发设计的轻量级工具集，提供高效便捷的辅助能力


## 文档链接
📚 组件详细文档请访问以下站点：
- [常用函数库文档 - 站点1](https://limex.qcoon.cn/uts/shared.html)
- [常用函数库文档 - 站点2](https://limeui.netlify.app/uts/shared.html)
- [常用函数库文档 - 站点3](https://limeui.familyzone.top/uts/shared.html)


## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-shared`

## 使用
### addUnit 添加单位
给一个值添加单位
```js
import { addUnit } from '@/uni_modules/lime-shared/addUnit'
```
```js
addUnit(100) // 输出: "100px"
addUnit("200") // 输出: "200px"
addUnit("300px") // 输出: "300px"（已经包含单位）
addUnit() // 输出: undefined（值为 undefined）
addUnit(null) // 输出: undefined（值为 null）
```

### camelCase 转驼峰 
将字符串转换为 camelCase 或 PascalCase 风格的命名约定
```js
import { camelCase } from '@/uni_modules/lime-shared/camelCase'
```
```js
// 基础用法
camelCase('foo-bar-baz')        // 'fooBarBaz'
camelCase('hello_world', true)   // 'HelloWorld'
camelCase('data-MAP')            // 'dataMap'

// 特殊分隔符处理
camelCase('  spaced  words ')    // 'spacedWords'
camelCase('mixed-separator_example') // 'mixedSeparatorExample'

// 边缘情况
camelCase('single')              // 'single'
camelCase('', true)              // ''
camelCase('alreadyCamelCase')    // 'alreadycamelcase'（注意：会强制转为全小写）

// 包含数字
camelCase('api-v2-version')      // 'apiV2Version'
camelCase('item3', true)         // 'Item3'

// 保留原始单词结构（首字母大写会被覆盖）
camelCase('HTTP-Status-Code')    // 'httpStatusCode'
camelCase('CSS-Module', true)    // 'CssModule'
```

### capitalizedAmount 金额转中文
将金额转换为中文大写形式

```js
import { capitalizedAmount } from '@/uni_modules/lime-shared/capitalizedAmount'
```

```js
capitalizedAmount(123456789.12)  // "壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分"
capitalizedAmount(1004.5)        // "壹仟零肆元伍角"
capitalizedAmount(0.45)          // "肆角伍分"
capitalizedAmount(null)          // "不是有效的金额！"
capitalizedAmount(10e11)         // "计算金额过大！"
capitalizedAmount('12,345.6')    // "壹万贰仟叁佰肆拾伍元陆角整"
```

### clamp 限制值
限制值函数, 将一个值限制在指定的范围内

```js
import { clamp } from '@/uni_modules/lime-shared/clamp'
```

```js
// 示例1：限制值在0和5之间，输入值10超出上限，返回上限5
clamp(10, 0, 5);  // 输出：5

// 示例2：限制值在-1和1之间，输入值-3低于下限，返回下限-1
clamp(-3, -1, 1);  // 输出：-1

// 示例3：限制值在5和10之间，输入值7在范围内，返回原值7
clamp(7, 5, 10);  // 输出：7

// 示例4：限制值在20和30之间，输入值15低于下限，返回下限20
clamp(15, 20, 30);  // 输出：20

// 示例5：限制值在0和100之间，输入值50在范围内，返回原值50
clamp(50, 0, 100);  // 输出：50

```


### closest 寻找接近值 
寻找最接近的值函数, 在给定数组中找到最接近目标数字的元素。

```js
import { closest } from '@/uni_modules/lime-shared/closest'
```
```js
// 示例1：在数组[1, 2, 3, 4, 5]中寻找最接近7的值，返回5
closest([1, 2, 3, 4, 5], 7);  // 输出：5

// 示例2：在数组[10, 20, 30, 40, 50]中寻找最接近25的值，返回30
closest([10, 20, 30, 40, 50], 25);  // 输出：30

// 示例3：在数组[-5, -3, -1, 0, 1, 3, 5]中寻找最接近-2的值，返回-1
closest([-5, -3, -1, 0, 1, 3, 5], -2);  // 输出：-1

// 示例4：在数组[100, 200, 300, 400]中寻找最接近150的值，返回100
closest([100, 200, 300, 400], 150);  // 输出：100

// 示例5：在数组[0.1, 0.5, 1.0, 1.5, 2.0]中寻找最接近0.8的值，返回0.5
closest([0.1, 0.5, 1.0, 1.5, 2.0], 0.8);  // 输出：0.5

```


### exif 图片信息
获取图片exif,不支持uniappx app

```js
import { exif } from '@/uni_modules/lime-shared/exif'
```

```js
uni.chooseImage({
    count: 1, //最多可以选择的图片张数
    sizeType: "original",
    success: (res) => {
        exif.getData(res.tempFiles[0], function() {
            let tagj = exif.getTag(this, "GPSLongitude");
            let Orientation = exif.getTag(this, 'Orientation');  
            console.log(tagj, Orientation)
        })
    }
})
```

### fillZero 数字补0 
在数字前填充零，返回字符串形式的结果

```js
import { fillZero } from '@/uni_modules/lime-shared/fillZero'
```

```js
// 示例1：将数字5填充到长度为2的字符串，返回"05"
fillZero(5);  // 输出："05"

// 示例2：将数字123填充到长度为5的字符串，返回"00123"
fillZero(123, 5);  // 输出："00123"

// 示例3：将数字9填充到默认长度2的字符串，返回"09"
fillZero(9);  // 输出："09"

// 示例4：将数字456填充到长度为3的字符串，由于数字本身长度大于3，返回原数字字符串"456"
fillZero(456, 3);  // 输出："456"

// 示例5：将数字0填充到长度为4的字符串，返回"0000"
fillZero(0, 4);  // 输出："0000"

```


### floatAdd 浮点数加法
浮点数加法，返回两个浮点数相加的结果

```js
import { floatAdd } from '@/uni_modules/lime-shared/floatAdd'
```

```js
// 示例1：正确相加两个浮点数，返回5.3
floatAdd(2.1, 3.2);  // 输出：5.3

// 示例2：相加一个整数和一个浮点数，返回12.02
floatAdd(10, 2.02);  // 输出：12.02

// 示例3：相加两个浮点数，其中一个有较多小数位，返回0.3333
floatAdd(0.1111, 0.2222);  // 输出：0.3333

// 示例4：传递非数字类型参数，将警告并返回NaN
floatAdd('a' as any, 2.3);  // 输出：NaN，并控制台警告

// 示例5：相加两个整数，返回100
floatAdd(50, 50);  // 输出：100

```

### floatDiv 浮点数除法
浮点数除法，除法函数，用于处理浮点数除法并保持精度。

```js
import { floatDiv } from '@/uni_modules/lime-shared/floatDiv'
```


```js
// 假设 floatMul 函数已经定义，并且正确实现了浮点数乘法

// 示例1：正确相除两个浮点数，返回2
floatDiv(6, 3);  // 输出：2

// 示例2：相除两个浮点数，其中一个有较多小数位，返回2.5
floatDiv(5, 2);  // 输出：2.5

// 示例3：传递非数字类型参数，将警告并返回NaN
floatDiv('a' as any, 2);  // 输出：NaN，并控制台警告

// 示例4：相除两个浮点数，其中一个为0，将返回Infinity
floatDiv(10, 0);  // 输出：Infinity

// 示例5：相除两个浮点数，返回0.6666666666666666
floatDiv(2, 3);  // 输出：0.6666666666666666

```


### floatMul 浮点数乘法
浮点数乘法，用于处理浮点数乘法并保持精度。

```js
import { floatMul } from '@/uni_modules/lime-shared/floatMul'
```

```js
// 示例1：正确相乘两个浮点数，返回8
floatMul(2.0, 4.0);  // 输出：8

// 示例2：相乘两个浮点数，其中一个有小数，返回7.5
floatMul(3.0, 2.5);  // 输出：7.5

// 示例3：传递非数字类型参数，将警告并返回NaN
floatMul('a' as any, 2.0);  // 输出：NaN，并控制台警告

// 示例4：相乘两个浮点数，其中一个为0，将返回0
floatMul(0, 10.123);  // 输出：0

// 示例5：相乘两个浮点数，返回0.333
floatMul(1/3, 1);  // 输出：0.3333333333333333，但实际结果可能因精度问题而略有不同

```


### floatSub 浮点数减法
浮点数减法，用于处理浮点数减法并保持精度。

```js
import { floatSub } from '@/uni_modules/lime-shared/floatSub'
```

```js
// 示例1：正确相减两个浮点数，返回2
floatSub(5.0, 3.0);  // 输出：2

// 示例2：相减两个浮点数，其中一个有小数，返回0.5
floatSub(3.5, 3.0);  // 输出：0.5

// 示例3：传递非数字类型参数，将警告并返回NaN
floatSub('a' as any, 2.0);  // 输出：NaN，并控制台警告

// 示例4：相减两个浮点数，其中一个为0，将返回另一个数的相反数
floatSub(0, 10.123);  // 输出：-10.123

// 示例5：相减两个浮点数，返回-0.333
floatSub(1.0, 4/3);  // 输出：-0.3333333333333333，但实际结果可能因精度问题而略有不同

```


### getRect 获取元素尺寸
获取节点信息

```js
import { getRect, getAllRect } from '@/uni_modules/lime-shared/getRect'
```

```js

 // * @param selector 选择器字符串
 // * @param context ComponentInternalInstance 对象
 // * @param node 是否获取node
 // * @returns 包含节点信息的 Promise 对象
 
getRect('#id', this).then((res:DOMRect) => {})
getAllRect('#id', this).then((res:DOMRect) => {})
```

### isNumber 是否数值
检查一个值是否为数字类型

```js
import { isNumber } from '@/uni_modules/lime-shared/isNumber'
```


```js
// 示例1：检查数字42，返回true
isNumber(42); // 输出：true

// 示例2：检查字符串"42"，返回false，因为函数当前实现不处理字符串
isNumber("42"); // 输出：false

// 示例3：检查NaN，返回false
isNumber(NaN); // 输出：false

// 示例4：检查null，返回false
isNumber(null); // 输出：false

// 示例5：检查undefined，返回false
isNumber(undefined); // 输出：false

// 示例6：检查空字符串，返回false
isNumber(""); // 输出：false

// 示例7：检查包含数字的字符串"123abc"，返回false
isNumber("123abc"); // 输出：false

```


### isNumeric 是否数值字符
检查一个值是否为数字类型或表示数字的字符串

```js
import { isNumeric } from '@/uni_modules/lime-shared/isNumeric'
```


```js
// 示例1：检查数字42，返回true
isNumeric(42); // 输出：true

// 示例2：检查字符串"42"，返回true
isNumeric("42"); // 输出：true

// 示例3：检查字符串"3.14"，返回true
isNumeric("3.14"); // 输出：true

// 示例4：检查负数字符串"-42"，返回true
isNumeric("-42"); // 输出：true

// 示例5：检查NaN，返回false
isNumeric(NaN); // 输出：false

// 示例6：检查null，返回false
isNumeric(null); // 输出：false

// 示例7：检查undefined，返回false
isNumeric(undefined); // 输出：false

// 示例8：检查空字符串，返回false
isNumeric(""); // 输出：false

// 示例9：检查包含数字的字符串"123abc"，返回false
isNumeric("123abc"); // 输出：false

// 示例10：检查只包含小数点的字符串".", 返回false
isNumeric("."); // 输出：false

// 示例11：检查只包含负号的字符串"-", 返回false
isNumeric("-"); // 输出：false

```



### kebabCase 连字符格式
将字符串转换为指定连接符的命名约定

```js
import { kebabCase } from '@/uni_modules/lime-shared/kebabCase'
```


```js
// 示例1：将CamelCase字符串转换为连字符格式，默认分隔符为"-"
kebabCase("camelCaseString"); // 输出：camel-case-string

// 示例2：将PascalCase字符串转换为连字符格式，指定分隔符为"_"
kebabCase("PascalCaseString", "_"); // 输出：pascal_case_string

// 示例3：将字符串中已有的空格和下划线替换为连字符
kebabCase("This is a test_string"); // 输出：this-is-a-test-string

// 示例4：处理已经包含连字符的字符串，避免重复的连字符
kebabCase("already-kabab-case"); // 输出：already-kabab-case

// 示例5：处理字符串开头和结尾的连字符
kebabCase("-start-end-"); // 输出：start-end

// 示例6：处理全大写的字符串
kebabCase("HTTPERROR404"); // 输出：http-error404

```


### raf 动画帧函数
请求动画帧函数

```js
import { raf, cancelRaf, doubleRaf } from '@/uni_modules/lime-shared/raf'
```

```js
// 示例1：使用 raf 函数在Web环境中请求动画帧
raf(() => {
  console.log('动画帧执行');
});

// 示例2：使用 cancelRaf 函数取消动画帧
const frameId = raf(() => {
  console.log('这个动画帧将被取消');
});
cancelRaf(frameId);

// 示例3：使用 doubleRaf 函数实现双倍动画帧效果
doubleRaf(() => {
  console.log('双倍动画帧执行');
});

```


### random 随机数
生成一个指定范围内的随机数

```js
import { random } from '@/uni_modules/lime-shared/random'
```


```js
// 示例1：生成一个介于0到100之间的随机整数
random(0, 100); // 输出：一个0到100之间的随机整数

// 示例2：生成一个介于50到100之间的随机整数
random(50, 100); // 输出：一个50到100之间的随机整数

// 示例3：生成一个介于0到1之间的随机数，并保留两位小数
random(0, 1, 2); // 输出：一个0到1之间的随机数，例如0.12

// 示例4：生成一个介于10到20之间的随机整数
random(10, 20); // 输出：一个10到20之间的随机整数

// 示例5：生成一个介于0到10之间的随机数，并保留一位小数
random(0, 10, 1); // 输出：一个0到10之间的随机数，例如3.4

```


### range 范围数组
生成一个数字范围的数组

```js
import { range } from '@/uni_modules/lime-shared/range'
```


```js
// 示例1：生成一个从 0 到 9 的数组
range(0, 10); // 输出：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 示例2：生成一个从 1 到 10 的数组，步长为 2
range(1, 11, 2); // 输出：[1, 3, 5, 7, 9]

// 示例3：生成一个从 10 到 1 的数组，步长为 -1，从右侧开始填充
range(10, 0, -1, true); // 输出：[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// 示例4：生成一个从 0 到 5 的数组，步长为 1，从右侧开始填充
range(0, 6, 1, true); // 输出：[5, 4, 3, 2, 1, 0]

```


### shuffle 数组洗牌
随机化数组中元素的顺序，使用 Fisher-Yates 算法

```js
import { shuffle } from '@/uni_modules/lime-shared/shuffle'
```

```js
// 示例1：对数字数组进行洗牌
const numbers = [1, 2, 3, 4, 5];
console.log(shuffle(numbers)); // 输出：[3, 1, 4, 5, 2] （示例输出，实际结果随机）

// 示例2：对字符串数组进行洗牌
const strings = ['apple', 'banana', 'cherry'];
console.log(shuffle(strings)); // 输出：['banana', 'cherry', 'apple'] （示例输出，实际结果随机）

// 示例3：对对象数组进行洗牌
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(shuffle(objects)); // 输出：[{ id: 3 }, { id: 1 }, { id: 2 }] （示例输出，实际结果随机）

```


### sleep 延迟函数
延迟指定时间后解析的 Promise

```js
import { sleep } from '@/uni_modules/lime-shared/sleep'
```

```js
// 示例1：使用默认延迟时间（300毫秒）
async function example1() {
	console.log('开始延迟');
	await sleep(); // 使用默认的300毫秒延迟
	console.log('延迟结束');
}

example1();

// 示例2：指定延迟时间为1000毫秒（1秒）
async function example2() {
	console.log('开始1秒延迟');
	await sleep(1000); // 指定1000毫秒延迟
	console.log('1秒延迟结束');
}

example2();

// 示例3：在异步函数中使用sleep来暂停执行
async function example3() {
	for (let i = 0; i < 5; i++) {
		console.log(`计数：${i}`);
		await sleep(500); // 每500毫秒打印一次计数
	}
}

example3();

```



### unitConvert 单位转数值
单位转换函数，将字符串数字或带有单位的字符串转换为数字

```js
import { unitConvert } from '@/uni_modules/lime-shared/unitConvert'
```

```js
// 示例1：将字符串数字'100'转换为数字100
console.log(unitConvert('100')); // 输出：100

// 示例2：将带有'px'单位的字符串'20px'转换为数字20
console.log(unitConvert('20px')); // 输出：20

// 示例3：将带有'rpx'单位的字符串'100rpx'转换为像素值（需要uni.upx2px函数支持）
console.log(unitConvert('100rpx')); // 输出：200，假设uni.upx2px返回2倍值

// 示例4：将带有'%'单位的字符串'50%'转换为基于基准值200的像素值
console.log(unitConvert('50%', 200)); // 输出：100

// 示例5：传入null，返回0
console.log(unitConvert(null)); // 输出：0

// 示例6：传入undefined，返回0
console.log(unitConvert(undefined)); // 输出：0

// 示例7：传入数字10，直接返回10
console.log(unitConvert(10)); // 输出：10
```
