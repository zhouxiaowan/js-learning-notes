/**
 * 树的深度遍历（栈）
 *
 */




/**
 * 树的广度遍历（队列）
 * 给你一个二叉树，请你按层次遍历得到节点值
 * 例如[3,9,20,null,null,15,7],返回[[3],[9,20],[15,7]]
 */
function level(root) {
    const result = []
    if(!root){
        return result
    }
    const queue = []
    queue.push(root)
    while (queue.length){
        var temp = []
        var len = queue.length
        for(let i = 0;i<len;i++){
            var node = queue.pop()
            temp.push(node)
            if(node.left){
                temp.push(node.left)
            }
            if(node.right){
                temp.push(node.right)
            }
        }
        result.push(temp)
    }
    return result
}
