// A.call(B,参数1,参数2,...)
Function.prototype.myCall = function(){
    if(typeof this !== 'function'){
        throw new TypeError('error')
    }
    const context = arguments[0] || window // context指B，上下文环境B，call改变后的this指向为B
    context.fn = this // 此时this指示的是A，因为A.call(B),此时call的运行时环境为A，所以this指向为A
    const args = [...arguments].slice(1)
    const result = context.fn(...args) //执行
    delete context.fn
    return result
}

// A.apply(B,[arg1,arg2,arg3,...])
Function.prototype.myApply = function(){
    if(typeof this !== 'function'){
        throw new TypeError('error')
    }
    const context = arguments[0] || window
    context.fn = this
    const result = !!arguments[1]?context.fn(arguments[1]):context.fn()
    delete context.fn
    return result
}

// A.bind(B)
// 首先先看一道题
function f() {
    console.log(this)
}
let f1 = f.bind(1).bind(2)
f1()
// 打印什么 Number{1}
/**
 * 首先temp是f.bind(1)的结果，即：
     temp = function () {
          f.apply(1)
       }
 这里改变的是f的this，指向1。
 f1 = function () {
    temp.apply(2)
 }
 重点：f1()执行的时候改变的是temp的this，而不是f的this。
 即f1()的时候是调用temp.apply(2)，通过temp.apply(2)再去调用f.apply(2)。
 所以不论中间有多少层bind，最后那个f调用永远都是最开始的1。
 */
Function.prototype.myBind = function (args){
    let _this = this
    return function (){
        _this.apply(args)
    }
}
