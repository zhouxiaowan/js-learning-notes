function deepCopy(obj){
    var obj2 = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            if(obj[key]){
                obj2[key] = deepCopy(obj[key])
            }else{
                obj2[key] = obj[key]
            }
        }else{
            obj2[key] = obj[key]
        }
    }
    return obj2
}
const obj = {
    name:"zxw",
    likes:["running","swimming","sports"],
    n:{
        o:null,
        m:2,
        fun:function (){
            console.log(1)
        }
    }
}
deepCopy(obj)
