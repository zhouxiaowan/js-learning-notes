/**
 * 非递归
 * @param arr
 */
function binarySearch(num,arr){
    let left = 0
    let right = arr.length
    while (left<right){
        let mid = Math.floor((left+right)/2)
        let midNum = arr[mid]
        if(num === midNum){
            return mid
        }else if(num<midNum){
            right = mid-1
        }else {
            left = mid+1
        }
    }
    return -1
}


function binaryReSearch(num,arr){

}
