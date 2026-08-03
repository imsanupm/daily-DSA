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
var goodNodes = function (root) {

    let count = 0

    function dfs(node, maxVal) {

        if (!node) return;

        if (maxVal <= node.val) {

            count++;

            maxVal = node.val

        };

        dfs(node.left, Math.max(node.val, maxVal));

        dfs(node.right, Math.max(node.val, maxVal))

    };

    dfs(root, root.val)

    return count
};