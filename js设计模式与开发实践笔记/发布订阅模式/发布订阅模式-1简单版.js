const saleOffices = {} // 定义售楼处
saleOffices.clientList = []; // 缓存列表，存放订阅者的回调函数
saleOffices.listen = function (fn){ // 增加订阅者
    this.clientList.push(fn) // 将订阅的消息添加到缓存列表中
}
// 发布消息
saleOffices.trigger = function (){
    for (let i = 0; i < this.clientList.length; i++) {
        this.clientList[i].apply(this,arguments)
    }
}

saleOffices.listen(function (price,squareMeter){
    console.log('价格：',price)
    console.log('平方：',squareMeter)
})

saleOffices.listen(function (price,squareMeter){
    console.log('价格：',price)
    console.log('平方：',squareMeter)
})

saleOffices.trigger('8800','100')
saleOffices.trigger('10800','120')

