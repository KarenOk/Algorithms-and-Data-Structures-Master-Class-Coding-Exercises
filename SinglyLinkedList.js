class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        if (!this.length) this.head = this.tail = node;
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;

        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
console.log(list);