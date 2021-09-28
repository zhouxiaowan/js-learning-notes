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

saleOffices.listen('Xiao Ming',function (price,squareMeter){
    console.log('价格：',price)
})

saleOffices.trigger('Xiao Hong',8000,100)
saleOffices.trigger('Xiao Ming',8800,100)

