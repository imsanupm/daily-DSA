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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const output = [];
    let postorder = (node = root)=>{
        if(!node){
            return;
        };
        postorder(node.left);
        postorder(node.right);
        output.push(node.val)
    };
    postorder(root);
    return output
};