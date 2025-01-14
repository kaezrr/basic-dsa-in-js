import { Tree } from "./bst.js";

function getInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(size) {
  return new Array(size).fill(null).map((_) => getInt(100));
}

const tree = new Tree(getRandomArray(16));
tree.print();
console.log("Is Balanced? " + tree.isBalanced());
console.log("--------------------------------");

let inOrder = [];
tree.inOrder((e) => inOrder.push(e.data));
console.log("inOrder: " + inOrder.join(" "));

let preOrder = [];
tree.preOrder((e) => preOrder.push(e.data));
console.log("preOrder: " + preOrder.join(" "));

let postOrder = [];
tree.postOrder((e) => postOrder.push(e.data));
console.log("postOrder: " + postOrder.join(" "));

let levelOrder = [];
tree.levelOrder((e) => levelOrder.push(e.data));
console.log("levelOrder: " + levelOrder.join(" "));

tree.insert(getInt(1000, 101));
tree.insert(getInt(1000, 101));
tree.insert(getInt(1000, 101));
tree.insert(getInt(1000, 101));
tree.insert(getInt(1000, 101));
tree.print();
console.log("Is Balanced? " + tree.isBalanced());
console.log("--------------------------------");

tree.rebalance();
tree.print();
console.log("Is Balanced? " + tree.isBalanced());
console.log("--------------------------------");

inOrder = [];
tree.inOrder((e) => inOrder.push(e.data));
console.log("inOrder: " + inOrder.join(" "));

preOrder = [];
tree.preOrder((e) => preOrder.push(e.data));
console.log("preOrder: " + preOrder.join(" "));

postOrder = [];
tree.postOrder((e) => postOrder.push(e.data));
console.log("postOrder: " + postOrder.join(" "));

levelOrder = [];
tree.levelOrder((e) => levelOrder.push(e.data));
console.log("levelOrder: " + levelOrder.join(" "));
