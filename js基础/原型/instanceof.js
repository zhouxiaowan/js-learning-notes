function myInstanceof(left,right){
    let leftVal = left.__proto__
    let rightVal = right.prototype
    while (leftVal){
        if(leftVal === rightVal){
            return true
        }else {
            leftVal = leftVal.__proto__
        }
    }
    return false
}
