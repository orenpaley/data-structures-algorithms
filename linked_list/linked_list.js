/* Linked List 
    - Starts with a head and a tail
    - each node has val and next val
    - tail points to last node head points to first
*/

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // traverse linked list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next
    }
  }

  // search linked list
  find(val) {
    let current = this.head;

    while(current) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }

  // add a new node to end of linked list
  append(val) {
    val = new Node(val)
    if (!this.head) {
      this.head = val;
      this.tail = val;
    }
    // set the next pointer of tail to new node
    this.tail.next = val;
    // set the tail to be the new node
    this.tail = val;
  }
}

const history = new LinkedList()
history.append(('alpha'));
history.append(('beta'));
history.append(('charlie'));
history.append(('delta'));
history.traverse();
console.log(history.find('alpha'));
console.log(history.find('amazon.com'));

