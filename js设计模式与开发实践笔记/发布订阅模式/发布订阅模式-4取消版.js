const event = {
    clientList: {}, // 缓存列表，存放订阅者的回调函数
    listen: function (key,fn){ // 增加订阅者
        if(!this.clientList[key]){
            this.clientList[key] = []
        }
        this.clientList[key].push(fn) // 将订阅的消息添加到缓存列表中
    },
    trigger: function (){
        const key = Array.prototype.shift.call(arguments)
        const fns = this.clientList[key]
        if(!fns || fns.length === 0){
            return false
        }
        for (let i = 0; i < fns.length; i++) {
            fns[i].apply(this,arguments)
        }
    }
}
// 添加取消订阅的事件
event.remove = function(key,fn){
    const fns = this.clientList[key]
    // 如果key没有被人订阅，则直接返回
    if(!fns){
        return false
    }
    // 如果没有传入具体的回调的函数，则key对应的所有消息将都被取消订阅
    if(!fn){
        fns && (fns.length = 0)
    }
    for (let i = 0;i<fns.length;i++){
        if(fns[i] === fn){
            fns.splice(i,1)
        }
    }
}


const installEvent = function(obj){
    for (var i in event){
        obj[i] = event[i]
    }
    return obj
}
const saleOffices = installEvent(event)


saleOffices.listen('Xiao Hong',function (price,squareMeter){
    console.log('价格：',price)
    console.log('平方：',squareMeter)
})

saleOffices.listen('Xiao Ming',fn1 = function (price,squareMeter){
    console.log('价格：',price)
})
saleOffices.listen('Xiao Ming',fn2 = function (price,squareMeter){
    console.log('平方：',squareMeter)
})
saleOffices.remove('Xiao Ming',fn1)
saleOffices.trigger('Xiao Hong',8000,120)
saleOffices.trigger('Xiao Ming',8800,100)


