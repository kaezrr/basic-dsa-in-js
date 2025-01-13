import { LinkedList } from "./linkedlist.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("eagle");
list.prepend("bear");
list.pop();

console.log(list.toString());
console.log("Size: " + list.size());
console.log("Head: " + list.head().val);
console.log("Tail: " + list.tail().val);
console.log("Node at index 3: " + list.at(3).val);
console.log(list.contains("eagle"));
console.log(list.contains("worm"));
console.log(list.find("worm"));
console.log(list.find("parrot"));
