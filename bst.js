class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export class Tree {
  constructor(arr) {
    arr = Array.from(new Set(arr)).sort((a, b) => a - b);
    this.root = this.buildTree(arr);
  }

  print() {
    prettyPrint(this.root);
  }

  buildTree(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return new Node(arr[0]);

    let mid = parseInt(arr.length / 2);
    let root = new Node(arr[mid]);
    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1, arr.length));
    return root;
  }

  insert(value, curr = this.root) {
    if (value < curr.data) {
      if (!curr.left) curr.left = new Node(value);
      else this.insert(value, curr.left);
    } else {
      if (!curr.right) curr.right = new Node(value);
      else this.insert(value, curr.right);
    }
  }

  deleteItem(value, curr = this.root) {
    if (curr === null) return curr;
    if (value < curr.data) {
      curr.left = this.deleteItem(value, curr.left);
    } else if (value > curr.data) {
      curr.right = this.deleteItem(value, curr.right);
    } else {
      if (curr.left === null) return curr.right;
      if (curr.right === null) return curr.left;
      curr.data = this.inorderPredecessor(curr.left).data;
      curr.left = this.deleteItem(curr.data, curr.left);
    }
    return curr;
  }

  inorderPredecessor(curr) {
    if (curr.right === null) return curr;
    return this.inorderPredecessor(curr.right);
  }

  find(value, curr = this.root) {
    if (value < curr.data) {
      if (curr === null) return curr;
      return this.find(value, curr.left);
    } else if (value > curr.data) {
      return this.find(value, curr.right);
    } else {
      return curr;
    }
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error("Provided callback is not a function!");
    }

    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      const currNode = queue.shift();
      callback(currNode);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }

  inOrder(callback, curr = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Provided callback is not a function!");
    }
    if (!curr) return;
    this.inOrder(callback, curr.left);
    callback(curr);
    this.inOrder(callback, curr.right);
  }

  preOrder(callback, curr = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Provided callback is not a function!");
    }
    if (!curr) return;
    callback(curr);
    this.preOrder(callback, curr.left);
    this.preOrder(callback, curr.right);
  }

  postOrder(callback, curr = this.root) {
    if (typeof callback !== "function") {
      throw new Error("Provided callback is not a function!");
    }
    if (!curr) return;
    this.postOrder(callback, curr.left);
    this.postOrder(callback, curr.right);
    callback(curr);
  }

  height(node) {
    if (!node) return 0;
    let left = node.left ? this.height(node.left) + 1 : 0;
    let right = node.right ? this.height(node.right) + 1 : 0;
    return Math.max(left, right);
  }

  depth(node, curr = this.root, level = 0) {
    if (node === null) return 0;
    if (!curr) return -1;
    if (curr.data === node.data) return level;
    const left = this.depth(node, curr.left, level + 1);
    const right = this.depth(node, curr.right, level + 1);
    if (left !== -1) return left;
    if (right !== -1) return right;
    return -1;
  }

  isBalanced(curr = this.root) {
    if (!curr) return true;
    if (Math.abs(this.height(curr.right) - this.height(curr.left)) > 1) {
      return false;
    }
    return this.isBalanced(curr.right) && this.isBalanced(curr.left);
  }

  rebalance() {
    let newArr = [];
    this.levelOrder((e) => newArr.push(e.data));
    newArr = Array.from(new Set(newArr)).sort((a, b) => a - b);
    this.root = this.buildTree(newArr);
  }
}
