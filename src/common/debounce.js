//防抖动函数
// export function debounce(func, delay) {
//   let time = null;
//   return function () {
//     let context = this
//     let args = arguments
//     if(time) {
//       clearTimeout(time)
//     }else {
//       time = setTimeout(() => {
//         func.apply(context, args)
//       },delay)
//     }
//   }
// }

export function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}