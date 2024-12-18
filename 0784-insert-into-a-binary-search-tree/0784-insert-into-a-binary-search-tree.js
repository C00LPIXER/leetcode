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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    let temp = root

    while (true) {
        if (val < temp.val) {
            if (temp.left === null) {
                temp.left = new TreeNode(val);
                break;
            }
            temp = temp.left;
        } else {
            if (temp.right === null) {
                temp.right = new TreeNode(val);
                break;
            }
            temp = temp.right;
        }
    }

    return root;
};