class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(arr = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
  }

  push(val) {
    console.log("PUSHING");
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  unshift(val) {
    val = new Node(val);
    if (!this.head) {
      this.head = val;
      this.tail = val;
    } else {
      let tmp = this.head;
      this.head = val;
      this.head.next = tmp;
    }
    this.length += 1;
  }

  pop() {
    if (!this.head) throw new Error("List is empty");

    let current = this.head;
    let prev = null;
    let tmp;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      tmp = prev.next;
      prev.next = null;
      this.tail = prev;
      this.length--;
      return tmp.val;
    } else {
      // list has only one node
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }
  }

  //Remove & return head value. Throws error if list is empty.
  shift() {
    if (!this.head) throw new Error("nothing in list");
    let tmp = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length < 2) this.tail = this.head;
    if (this.length < 1) {
      this.tail = null;
      this.head = null;
    }
    return tmp.val;
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
  //Set value of node at index position idx to val. Throws error if index is invalid.
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
      return current.val;
    }
    throw new Error("index out of range");
  }
  //Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
  insertAt(idx, val) {
    val = new Node(val);
    if (!this.head) {
      if (idx === 0) {
        this.head = val;
        this.tail = val;
        this.length += 1;
        return;
      }
    }
    let current = this.head;
    let steps = 1;
    while (current) {
      while (steps < idx) {
        current = current.next;
        steps++;
      }

      let tmp = current;
      val.next = current.next;
      current.next = val;

      if (!current.next.next) {
        this.tail = current.next;
      }

      this.length += 1;
      return;
    }
    throw new Error("index out of range");
  }
  removeAt(idx) {
    if (!this.head) throw new Error("nothing in list");
    let current = this.head;
    let steps = 1;
    while (current) {
      while (steps < idx) {
        current = current.next;
        steps++;
      }
      let tmp = current;
      if (current.next != null) {
        current = current.next;
      } else {
        current = null;
        this.head = null;
        this.tail = null;
      }

      this.length -= 1;
      return tmp.val;
    }
    throw new Error("index out of range");
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;
    let current = this.head;
    let total = 0;
    let count = 0;
    while (current) {
      if (current.val) total += current.val;
      current = current.next;
      count++;
    }
    return total / count;
  }
}

module.exports = LinkedList;
