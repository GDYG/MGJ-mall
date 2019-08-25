export function formatDate(date,fmt){

  //获取年份
  //y+ 正则表达式
  //y+ : 一个或多个y
  //y* : 0个或多个y
  //y? : 0个或1个y
  if(/(y+)/.test(fmt)){
    //RegExp.$1 是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
    fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+":date.getMonth() + 1,//月份
    "d+":date.getDay(),//日
    "h+":date.getHours(),//hours
    "m+":date.getMinutes(),//分钟
    's+':date.getSeconds(),//秒,
  }

  for(let k in o){
    if(new RegExp("("+k+")").test(fmt)){
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))
    }
  }
  return fmt;
}