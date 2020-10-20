class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(value) {
		const node = new Node(value);
		if (!this.size) {
			this.first = this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.size++;
		return this.size;
	}
}
