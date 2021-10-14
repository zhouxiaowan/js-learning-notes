function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let left = []
    let right = []
    let temp = arr[0]
    for (let i = 1;i<arr.length;i++){
        if(arr[i]<temp){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(temp,quickSort(right))
}
quickSort([2,5,1,6,3,9])
