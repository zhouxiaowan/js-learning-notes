const saleOffices = {} // 定义售楼处
saleOffices.clientList = {}; // 缓存列表，存放订阅者的回调函数

// 增加订阅者
saleOffices.listen = function (key,fn){
    if(!this.clientList[key]){
        this.clientList[key] = []
    }
    this.clientList[key].push(fn) // 将订阅的消息添加到缓存列表中
}

// 发布消息
// saleOffices.trigger = function (key){
//     for (let i = 0; i < this.clientList[key].length; i++) {
//         this.clientList[key][i].apply(this,arguments)
//     }
// }

// 发布消息
saleOffices.trigger = function (){
    var key = Array.prototype.shift.call(arguments)
    var fns = this.clientList[key]
    if(!fns || fns.length === 0){
        return false
    }
    for (let i = 0; i < fns.length; i++) {
        fns[i].apply(this,arguments)
    }
}

saleOffices.listen('Xiao Hong',function (price,squareMeter){
    console.log('价格：',price)
    console.log('平方：',squareMeter)
})

saleOffices.listen('Xiao Ming',function (price,squareMeter){
    console.log('价格：',price)
})

saleOffices.trigger('Xiao Hong',8000,100)
saleOffices.trigger('Xiao Ming',8800,100)

