/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let vals = [];
  let arr = [root]
  let recurse = (arr) => {
    if (arr.length === 0) {
      return;
    }
    var node = arr.shift();
    if (node === null) {
        vals.push(null)
    } else {
    vals.push(node.val);
    arr.push(node.left);
    arr.push(node.right);
    }
    recurse(arr)
  }
  recurse(arr);
  return vals;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 let tree = {
   val: 1,
   left: {
     val: 2,
     left: null,
     right: null
   },
   right: {
     val: 3,
     left: {
       val: 4,
       left: null,
       right: null
     },
     right: {
       val: 5,
       left: null,
       right: null
     }
   }
 }

 serialize(tree);