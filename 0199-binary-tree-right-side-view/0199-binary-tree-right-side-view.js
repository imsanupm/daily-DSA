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
var rightSideView = function (root) {

    if (!root) return []

    let queue = [root];
    
    let result = [];

    while (queue.length) {

        let size = queue.length;

        let rightSide = null;

        for (let i = 0; i < size; i++) {

            const node = queue.shift()

            rightSide = node;

            if (node.left) queue.push(node.left);

            if (node.right) queue.push(node.right)
        };
        if (rightSide) {

            result.push(rightSide.val)

        }

    };

    return result
};