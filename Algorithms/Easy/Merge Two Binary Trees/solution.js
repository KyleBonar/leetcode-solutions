// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given two binary trees and imagine that when you put one of them to cover
// the other, some nodes of the two trees are overlapped while the others
// are not.
// You need to merge them into a new binary tree. The merge rule is that
// if two nodes overlap, then sum node values up as the new value of the
// merged node. Otherwise, the NOT null node will be used as the node of
// new tree.

// Example:
// Input:
// Tree 1                     Tree 2
//         1                         2
//        / \                       / \
//       3   2                     1   3
//      /                           \   \
//     5                             4   7
// Output:
// Merged tree:
//      3
//     / \
//    4   5
//   / \   \
//  5   4   7

// --------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;

  const t1Val = t1 ? t1.val : 0;
  const t2Val = t2 ? t2.val : 0;
  const node = new TreeNode(t1Val + t2Val);

  const t1Left = t1 ? t1.left : null;
  const t2Left = t2 ? t2.left : null;
  node.left = mergeTrees(t1Left, t2Left);

  const t1Right = t1 ? t1.right : null;
  const t2Right = t2 ? t2.right : null;
  node.right = mergeTrees(t1Right, t2Right);

  return node;
};
