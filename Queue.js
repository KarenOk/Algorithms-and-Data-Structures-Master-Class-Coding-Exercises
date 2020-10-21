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

	dequeue() {
		if (!this.size) return null;
		if (this.size === 1) this.last = null;

		const removed = this.first;
		this.first = removed.next;

		this.size--;
		return removed.value;
	}
}
