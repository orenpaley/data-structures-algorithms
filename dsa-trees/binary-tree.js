/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const stack = [{ node: this.root, length: 0 }];
    let shortestPathLength = Infinity;
    while (stack.length) {
      const { node, length } = stack.pop();

      if (!node) {
        return Math.min(shortestPathLength, length);
      }
      if (!node.left && !node.right) {
        shortestPathLength = Math.min(shortestPathLength, length);
      }

      if (node.left) {
        stack.push({ node: node.left, length: length + 1 });
      }

      if (node.right) {
        stack.push({ node: node.right, length: length + 1 });
      }
    }

    return shortestPathLength + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    if (!this.root.left && !this.root.right) {
      return 0;
    }

    let maxCount = 0;
    const stack = [{ node: this.root, length: 1 }];

    while (stack.length > 0) {
      const { node, length } = stack.pop();

      if (!node.left && !node.right) {
        maxCount = Math.max(maxCount, length);
      }

      if (node.left) {
        stack.push({ node: node.left, length: length + 1 });
      }

      if (node.right) {
        stack.push({ node: node.right, length: length + 1 });
      }
    }

    return maxCount;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = Number.MIN_SAFE_INTEGER;
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      const stack = [node];
      let sum = 0;

      while (stack.length > 0) {
        const current = stack.pop();
        if (!current) {
          return 0;
        }

        if (current.right) {
          stack.push(current.right);
        }

        if (current.left) {
          stack.push(current.left);
        }

        sum += current.val;
        maxSum = Math.max(maxSum, sum);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let curVal = Infinity;
    if (!this.root) {
      return null;
    }
    if (!this.root.left && !this.root.right) {
      if (this.root.val > lowerBound) {
        return this.root.val;
      }
    }
    const stack = [this.root];

    while (stack.length) {
      const current = stack.pop();
      if (current.val > lowerBound && current.val < curVal) {
        curVal = current.val;
        console.log("curval", curVal, current.val);
      }
      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
    if (curVal === Infinity) return null;
    return curVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
