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

    pop() {
        if (!this.length) return;
        let current = this.head;
        let prev = current;
        if (this.length === 1) { this.head = this.tail = null }

        else {
            while (current.next) {
                prev = current
                current = current.next;
            }

            this.tail = prev;
            this.tail.next = null;
        }

        this.length--;
        return current;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (i === index) break;
            current = current.next;
        }

        return current;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(5);
list.pop();
list.pop();
list.push(1);
list.push(2);
list.push(5);
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list);