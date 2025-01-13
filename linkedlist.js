class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.list = null;
  }

  toString() {
    let str = `(${this.list.val})`;
    if (this.list === null) return str;
    let curr = this.list.next;
    while (curr !== null) {
      str += ` -> (${curr.val})`;
      curr = curr.next;
    }
    str += " -> (null)";
    return str;
  }

  append(val) {
    if (this.list === null) {
      this.list = new Node(val);
    } else {
      let curr = this.list;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = new Node(val);
    }
  }

  prepend(val) {
    if (this.list === null) {
      this.list = new Node(val);
    } else {
      let curr = new Node(val);
      curr.next = this.list;
      this.list = curr;
    }
  }

  size() {
    if (this.list === null) return 0;
    let length = 1;
    let curr = this.list;
    while (curr !== null) {
      length++;
      curr = curr.next;
    }
    return length;
  }

  head() {
    return this.list;
  }

  tail() {
    let curr = this.list;
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr;
  }

  at(index) {
    let curr = this.list;
    while (index-- > 0) {
      curr = curr.next;
    }
    return curr;
  }

  pop() {
    if (this.list === null || this.list.next === null) {
      this.list = null;
    }
    let curr = this.list;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
  }

  contains(value) {
    let curr = this.list;
    while (curr !== null) {
      if (curr.val === value) return true;
      curr = curr.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let curr = this.list;
    while (curr !== null) {
      if (curr.val === value) return index;
      curr = curr.next;
      index++;
    }
    return null;
  }
}
