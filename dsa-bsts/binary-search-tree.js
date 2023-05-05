class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!current) {
      this.root = new Node(val);
      return this;
    }
    if (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        }
        return this.insertRecursively(val, current.left);
      }

      if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, current.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (!current.left) {
          return undefined;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          return;
        }
        current = current.right;
      } else {
        return current;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;

    if (val < current.val) {
      if (!current.left) {
        return undefined;
      } else {
        return this.findRecursively(val, current.left);
      }
    } else if (val > current.val) {
      if (!current.right) {
        return undefined;
      } else {
        return this.findRecursively(val, current.right);
      }
    } else {
      return current;
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, vals = []) {
    if (!current) return vals;
    vals.push(current.val);
    this.dfsPreOrder(current.left, vals);
    this.dfsPreOrder(current.right, vals);
    return vals;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, vals = []) {
    if (!current) return vals;
    this.dfsInOrder(current.left, vals);
    vals.push(current.val);
    this.dfsInOrder(current.right, vals);
    return vals;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, vals = []) {
    if (!current) return vals;
    this.dfsPostOrder(current.left, vals);
    this.dfsPostOrder(current.right, vals);
    vals.push(current.val);
    return vals;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      const node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
