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


    set(index, value) {
        let node = this.get(index);
        if (!node) return false;

        node.value = value;
        return true;
    }

    unshift(value) {
        if (this.length === 0) this.push(value);
        else {
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
        return this;
    }

    shift() {
        if (this.length === 0) return;
        if (this.length === 1) return this.pop();

        let removed = this.head;
        this.head = removed.next;
        removed.next = null;
        return removed;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(value);
        else if (index === this.length) return !!this.push(value);
        else {
            let node = new Node(value);
            let left = this.get(index - 1);
            let right = this.get(index);

            left.next = node;
            node.next = right;
            this.length++;
            return true;
        }

    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(5);
list.push(13);
list.push(12);
list.push(500);
list.pop();
list.pop();
console.log(list.get(0).value); // 1
console.log(list.get(1).value); // 2
console.log(list.get(2).value); // 5
console.log(list.set(2, "Change 1")); // true
console.log(list.set(100, "Change 1")); // false
list.unshift('Unshifted in 1');
list.unshift('Unshifted in 2');
console.log(list.shift().value); // Unshifted in 2
console.log(list.insert(2, "Inserted")); // true
console.log(list.insert(5, "Inserted to the end")); // true
console.log(list.insert(200, "Inserted to invalid index")); // false
console.log(list);