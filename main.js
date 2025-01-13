import { HashMap } from "./hashmap.js";

// example uses class syntax - adjust as necessary
const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("elephant", "white");

test.set("crow", "black");
test.set("kite", "red");
test.remove("kite");
test.remove("elephant");
console.log(test.has("kite"));
console.log(test.has("john"));
console.log(test.entries());
console.log(test.length());
