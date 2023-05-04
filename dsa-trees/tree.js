/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    const stack = [this.root];
    while (stack.length) {
      const current = stack.pop();
      if (current) {
        total += current.val || 0;
        for (let child of current.children) {
          stack.push(child);
        }
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const stack = [this.root];
    let evenCount = 0;
    while (stack.length) {
      const current = stack.pop();
      if (current) {
        if (current.val % 2 === 0) evenCount++;
        for (let child of current.children) {
          stack.push(child);
        }
      }
    }
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const stack = [this.root];
    let greaterCount = 0;
    while (stack.length) {
      const current = stack.pop();
      if (current) {
        if (current.val > lowerBound) greaterCount++;
        for (let child of current.children) {
          stack.push(child);
        }
      }
    }
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
