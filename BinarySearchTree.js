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
}
