// 随机生成元素
export function getRandomId() {
  return `chart_${Math.random().toString(36).substring(2, 16)}`;
}
  
// 加rpx单位
export function addUnitRpx(num) {
  // #ifdef APP-NVUE
  // nvue不支持百分比: https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html#nvue%E5%BC%80%E5%8F%91%E4%B8%8Evue%E5%BC%80%E5%8F%91%E7%9A%84%E5%B8%B8%E8%A7%81%E5%8C%BA%E5%88%AB
  if(typeof num === 'string' && num.includes('%')){
    return undefined; 
  }
  // #endif
  
  return isNaN(Number(num)) ? num : `${num}rpx`;
}

// 获取窗口信息
export function getWindowInfo() {
  if (uni.getWindowInfo && uni.canIUse('getWindowInfo')) {
    return uni.getWindowInfo();
  } else {
    return uni.getSystemInfoSync();
  }
}
