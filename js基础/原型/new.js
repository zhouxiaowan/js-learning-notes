function myNew(fun){
    const o = Object.create(fun.prototype)
    const k = fun.apply(o)
    if(typeof k === 'object'){
        return k
    }else{
        return o
    }
}
