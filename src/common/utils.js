// 防抖函数 减少refresh执行的次数 降低性能消耗
export function debounce(func,delay){
  let timer = null
  return function (...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, args);
    },delay)
  }
}
