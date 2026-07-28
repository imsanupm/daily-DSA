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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {



    function remove(node, data) {
        return root = del(node, data)
    };

    function del(node, data) {
        if (!node) {
            return null;
        } else if (data < node.val) {
            node.left = deleteNode(node.left, data);
            return node;
        } else if (data > node.val) {
            node.right = deleteNode(node.right, data);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            } else if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
        };

        function findMin(node) {
            if (!node) return null;
            if (node.left == null) return node;
            return findMin(node.left);
        }

        let aux = findMin(node.right);
        node.val = aux.val;
        node.right = deleteNode(node.right, aux.val);
        return node;
    }



    return remove(root, key)
};