class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  update(key, val) {
    if (this.list === null) {
      this.list = new Node(key, val);
      return;
    }
    let curr = this.list;
    while (curr.next !== null) {
      if (curr.key === key) {
        curr.val = val;
        return;
      }
      curr = curr.next;
    }
    if (curr.key === key) {
      curr.val = val;
      return;
    }
    curr.next = new Node(key, val);
  }

  get(key) {
    let curr = this.list;
    while (curr !== null) {
      if (curr.key === key) return curr.val;
      curr = curr.next;
    }
    return null;
  }

  remove(key) {
    console.log(this.list);
    if (this.list === null) return;
    if (this.list.key === key) {
      this.list = this.list.next;
      return;
    }
    let curr = this.list;
    let prev = this.list;
    while (curr.next !== null) {
      if (curr.key === key) {
        prev.next = curr.next;
        return;
      }
      curr = curr.next;
      prev = curr;
    }
  }

  size() {
    let length = 0;
    let curr = this.list;
    while (curr !== null) {
      length++;
      curr = curr.next;
    }
    return length;
  }

  keys() {
    let keys = [];
    let curr = this.list;
    while (curr !== null) {
      keys.push(curr.key);
      curr = curr.next;
    }
    return keys;
  }

  values() {
    let values = [];
    let curr = this.list;
    while (curr !== null) {
      values.push(curr.val);
      curr = curr.next;
    }
    return values;
  }

  entries() {
    let entries = [];
    let curr = this.list;
    while (curr !== null) {
      entries.push([curr.key, curr.val]);
      curr = curr.next;
    }
    return entries;
  }
}

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let hashCode = this.hash(key);
    if (this.read(hashCode) === null) {
      this.write(hashCode, new LinkedList());
    }
    this.read(hashCode).update(key, value);
    this.checkEntries();
  }

  get(key) {
    let hashCode = this.hash(key);
    return this.read(hashCode).get(key);
  }

  has(key) {
    let hashCode = this.hash(key);
    return this.read(hashCode).get(key) !== null;
  }

  remove(key) {
    let hashCode = this.hash(key);
    this.read(hashCode).remove(key);
  }

  length() {
    let size = 0;
    this.buckets.forEach((e) => {
      if (e === null) return;
      size += e.size();
    });
    return size;
  }

  clear() {
    this.buckets.fill(null);
    this.currLoad = 0;
  }

  keys() {
    let keys = [];
    this.buckets.forEach((e) => {
      if (e === null) return;
      keys = keys.concat(e.keys());
    });
    return keys;
  }

  values() {
    let values = [];
    this.buckets.forEach((e) => {
      if (e === null) return;
      values = values.concat(e.values());
    });
    return values;
  }

  entries() {
    let entries = [];
    this.buckets.forEach((e) => {
      if (e === null) return;
      entries = entries.concat(e.entries());
    });
    return entries;
  }

  read(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    return this.buckets[index];
  }

  write(index, value) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    this.buckets[index] = value;
  }

  checkEntries() {
    if (this.length() <= this.loadFactor * this.capacity) return;
    let entries = this.entries();
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null);
    entries.forEach((e) => {
      let [x, y] = e;
      this.set(x, y);
    });
  }
}
