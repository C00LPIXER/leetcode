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
var kthSmallest = function (root, k) {
    let count = 0;
    let result = null;

    const inOrder = (node) => {
        if (!node || result !== null) return

        inOrder(node.left)
        count++
        if(count === k){
            result = node.val
            return
        }
        inOrder(node.right); 
    }
    inOrder(root)
    return result
};