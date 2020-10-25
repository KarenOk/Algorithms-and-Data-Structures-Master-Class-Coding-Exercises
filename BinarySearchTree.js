class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const node = new Node(value);
		if (!this.root) this.root = node;
		else {
			let currentNode = this.root;
			while (currentNode) {
				if (value < currentNode.value) {
					if (currentNode.left) currentNode = currentNode.left;
					else {
						currentNode.left = node;
						currentNode = null;
					}
				} else {
					if (currentNode.right) currentNode = currentNode.right;
					else {
						currentNode.right = node;
						currentNode = null;
					}
				}
			}
		}

		return this;
	}
	find(value) {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.value) return currentNode;
			else if (value < currentNode.value) currentNode = currentNode.left;
			else currentNode = currentNode.right;
		}

		return;
	}
	DFSPreOrder() {
		const result = [];

		(function helper(node) {
			if (!node) return;
			result.push(node.value);
			helper(node.left);
			helper(node.right);
		})(this.root);

		return result;
	}
	DFSInOrder() {
		const result = [];

		(function helper(node) {
			if (!node) return;
			helper(node.left);
			result.push(node.value);
			helper(node.right);
		})(this.root);

		return result;
	}
	DFSPostOrder() {
		const result = [];

		(function helper(node) {
			if (!node) return;
			helper(node.left);
			helper(node.right);
			result.push(node.value);
		})(this.root);

		return result;
	}
	BFS() {
		if (!this.root) return [];

		const result = [];
		const queue = [this.root];
		let pointer = 0;

		while (pointer < queue.length) {
			let currentNode = queue[pointer];
			result.push(currentNode.value);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
			pointer++;
		}

		return result;
	}
}
