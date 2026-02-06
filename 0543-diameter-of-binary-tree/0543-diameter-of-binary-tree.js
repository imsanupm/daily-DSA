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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
   let res = [0];
    

   let dfs = (root,res)=>{
    if(!root)return 0;

    let left = dfs(root.left,res);
    let right = dfs(root.right,res);
    res[0] = Math.max(res[0],left+right);
    return 1 + Math.max(left,right);
   };
   dfs(root,res);
       return res[0];
};