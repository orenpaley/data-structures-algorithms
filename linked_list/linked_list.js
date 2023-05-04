/* Linked List 
    - Starts with a head and a tail
    - each node has val and next val
    - tail points to last node head points to first
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // traverse linked list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // search linked list
  find(val) {
    let current = this.head;

    while (current) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }

  // add a new node to end of linked list
  push(val) {
    val = new Node(val);
    if (!this.head) {
      this.head = val;
      this.tail = val;
    }
    // set the next pointer of tail to new node
    this.tail.next = val;
    // set the tail to be the new node
    this.tail.val = val;
  }

  unshift(val) {
    val = new Node(val);
    if (!this.head) {
      this.head = val;
      this.tail = val;
    }
    this.head.next = this.head;
    this.head.val = val;
  }

  pop() {
    if (!this.head) throw new Error("nothing in list");
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    let tmp = current.next;
    current.next = null;
    this.tail = current;
    return tmp;
  }

  shift() {
    if (!this.head) throw new Error("nothing in list");
    let tmp = this.head;
    this.head = this.head.next;
    return tmp;
  }

  getAt(idx) {
    if (!this.head) throw new Error("nothing in list");
    let current = this.head;
    let steps = 0;
    while (current) {
      while (steps < idx) {
        current = current.next;
        steps++;
      }
      return current.val;
    }
    throw new Error("index out of range");
  }
  setAt(idx, val) {
    if (!this.head) throw new Error("nothing in list");
    let current = this.head;
    let steps = 0;
    while (current) {
      while (steps < idx) {
        current = current.next;
        steps++;
      }
      current.val = val;
    }
    throw new Error("index out of range");
  }
  insertAt(idx, val) {
    val = new Node(val);
    if (!this.head) throw new Error("nothing in list");
    let current = this.head;
    let steps = 0;
    while (current) {
      while (steps < idx) {
        current = current.next;
        steps++;
      }
      let tmp = current;
      current.val = val;
      current.next = tmp;
    }
    throw new Error("index out of range");
  }
  removeAt(idx) {
    if (!this.head) throw new Error("nothing in list");
    let current = this.head;
    let steps = 0;
    while (current) {
      while (steps + 1 < idx) {
        current = current.next;
        steps++;
      }
      let tmp = current;
      current.next = current.next.next;
      return tmp.val;
    }
    throw new Error("index out of range");
  }
}

const history = new LinkedList();
history.append("alpha");
history.append("beta");
history.append("charlie");
history.append("delta");
history.traverse();
console.log(history.find("alpha"));
console.log(history.find("amazon.com"));
