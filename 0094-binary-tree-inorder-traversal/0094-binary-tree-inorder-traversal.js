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
var inorderTraversal = function (root, data = []) {
    if (!root) return data;
    if (root.left) inorderTraversal(root.left, data)
    data.push(root.val)
    if (root.right) inorderTraversal(root.right, data)
    return data

};