/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;
    let findSmall=(node)=>{
        if(!node || result!==null)return ;

        findSmall(node.left);
        count++;
        if(k==count){
            console.log(root.val)
            result = node.val;
        };
        findSmall(node.right);
    };
     findSmall(root);
     return result
};