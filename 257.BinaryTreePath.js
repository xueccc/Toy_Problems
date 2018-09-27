/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//i: root node of tree
//o: array=>str=>path
//c: n/a 
//e: single node

// [2, 3]

// var binaryTreePaths = function(root) {
  
//     let result = [];
//     let nodes = [root];
//     let path = [];
    
//    if (root === null){
//        return result;
//    }
  
 
//   while(node.length){
//     node = nodes.unshift();
     
//     if (!node.left && !node.right) {
//         result.push(path.join('->'));
//     }
      
//     if (path.length){
//       path = path + '->' + node[0].val;    
//     }
     
//     if (node[0].left){
//         node[0] = node[0].left;
//     } else {
//         node.unshift();
//     }

//     if (node[0].right){
//         node.push(node[0].right);
//     }

//   }
//     return result;
// };



// var binaryTreePaths = function(root) {
  
//     let result = [];
    
//    if (root === null){
       
//        return result;
//    }
  
    
//     const filePath = function(node, path =''){

//         if (path === ''){
//           path = `${node.val}`;
//         } else {
//           path = path + '->' + node.val;
//         }
        
//         if (!node.left && !node.right){
//             result.push(path);
//             return;
//         }
        
//         if (node.left){
//           filePath(node.left, path);
//         } 
        
//         if(node.right){
//           filePath(node.right, path);
//         }
//     }
    
//     filePath(root);
    
//     return result;
// };