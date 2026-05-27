// @ts-nocheck
/**
 * 节流函数，用于限制函数的调用频率
 * @param fn 要进行节流的函数
 * @param delay 两次调用之间的最小间隔时间
 * @returns 节流后的函数
 */

// #ifndef UNI-APP-X && APP
// export function throttle(fn: (...args: any[]) => void, delay: number, options) {
//   let flag = true; // 标记是否可以执行函数

//   return (...args: any[]) => {
//     if (flag) {
//       flag = false; // 设置为不可执行状态
//       fn(...args); // 执行传入的函数
	
//       setTimeout(() => {
//         flag = true; // 经过指定时间后，设置为可执行状态
//       }, delay);
//     }
//   };
// }

export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
  { leading = true, trailing = true }: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
  let isCoolingDown = false;
  let lastArgs: Parameters<T> | null = null;
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const executeTrailing = () => {
    if (trailing && lastArgs) {
      fn(...lastArgs);
      lastArgs = null;
    }
    isCoolingDown = false;
    timerId = null;
  };

  return function (...args: Parameters<T>) {
    // 1. 如果不在冷却期，且 leading=true，立即执行
    if (!isCoolingDown && leading) {
      fn(...args);
      isCoolingDown = true;
      timerId = setTimeout(executeTrailing, delay);
    }
    // 2. 如果在冷却期，记录最后一次调用的参数（用于 trailing）
    else if (trailing) {
      lastArgs = args;
    }
  };
}
// #endif


// #ifdef UNI-APP-X && APP
// type Rfun = (...args: any[]) => void
// type Rfun = (...args: any[]) => void

export function throttle<T extends any|null>(
	fn: (args : T) => void, 
	delay: number):(args : T) => void {
	let flag = true; // 标记是否可以执行函数
	
	return (args : T) =>{
		if(flag){
			flag = false;
			fn(args);
			
			setTimeout(()=>{
				flag = true;
			}, delay)
		}
	}
  // return (...args: any[]) => {
  //   // if (flag) {
  //   //   flag = false; // 设置为不可执行状态
  //   //   fn(...args); // 执行传入的函数

  //   //   setTimeout(() => {
  //   //     flag = true; // 经过指定时间后，设置为可执行状态
  //   //   }, delay);
  //   // }
  // };
}

// #endif

// // 示例
// // 定义一个被节流的函数
// function handleScroll() {
//   console.log("Scroll event handled!");
// }

// // 使用节流函数对 handleScroll 进行节流，间隔时间为 500 毫秒
// const throttledScroll = throttle(handleScroll, 500);

// // 模拟多次调用 handleScroll
// throttledScroll(); // 输出 "Scroll event handled!"
// throttledScroll(); // 不会输出
// throttledScroll(); // 不会输出

// // 经过 500 毫秒后，再次调用 handleScroll
// setTimeout(() => {
//   throttledScroll(); // 输出 "Scroll event handled!"
// }, 500);



