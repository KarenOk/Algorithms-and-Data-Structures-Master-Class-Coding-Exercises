// Implement A Stack Using Two Queues

class Stack {
	constructor() {
		this.queue1 = new Queue();
		this.queue2 = new Queue();
	}
	push(val) {
		this.queue1.enqueue(val);
		return this;
	}
	pop() {
		if (!this.queue1.size) return null;

		while (this.queue1.size > 1) {
			const value = this.queue1.dequeue();
			this.queue2.enqueue(value);
		}
		let removed = this.queue1.dequeue();

		// swap queue1 and queue2;
		const temp = this.queue2;
		this.queue2 = this.queue1;
		this.queue1 = temp;

		return removed;
	}
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

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
	enqueue(data) {
		var node = new Node(data);

		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;

		var temp = this.first;
		if (this.first == this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
