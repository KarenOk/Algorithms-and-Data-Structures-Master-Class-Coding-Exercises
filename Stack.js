// Stack using a Singly Linked List

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		const node = new Node(value);
		if (!this.size) this.first = this.last = node;
		else {
			node.next = this.first;
			this.first = node;
		}

		this.size++;

		return this.size;
	}
}
