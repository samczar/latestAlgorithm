const node = function (value) {
	this.value = value
	this.left = null
	this.right = null
}

const BinaryTree = function () {
	this.root = null
}

BinaryTree.prototype.insert = function (value) {
	let newNode = new node(value)

	if (!this.root) {
		this.root = newNode
	}

	const addNode = (node) => {
		if (value < node.value) {
			if (!node.left) {
				node.left = newNode
			} else {
				return addNode(node.left)
			}
		} else if (value > node.value) {
			if (!node.right) {
				node.right = newNode
			} else {
				return addNode(node.right)
			}
		}
	}
	addNode(this.root)
}

BinaryTree.prototype.min = function () {
	let currentNode = this.root

	while (currentNode.left) {
		currentNode = currentNode.left
	}
	return currentNode
}

BinaryTree.prototype.max = function () {
	let currentNode = this.root
	while (currentNode.right) {
		currentNode = currentNode.right
	}
	return currentNode
}

BinaryTree.prototype.contains = function (value) {
	let currentNode = this.root

	const search = (node) => {
		if (value === node.value) {
			return true
		} else if (value < node.value) {
			node = node.left
			if (!node) {
				return false
			} else {
				return search(node)
			}
		} else if (value > node.value) {
			node = node.right
			if (!node) {
				return false
			} else {
				return search(node)
			}
		}
	}
	return search(currentNode)
}

BinaryTree.prototype.inOrder = function () {
	let result = []
	const traverse = (node) => {
		if (node.left) traverse(node.left)
		result.push(node.value)
		if (node.right) traverse(node.right)
	}
	traverse(this.root)
	return result
}

BinaryTree.prototype.preOrder = function () {
	let result = []
	const traverse = (node) => {
		result.push(node.value)
		if (node.left) traverse(node.left)
		if (node.right) traverse(node.right)
	}

	traverse(this.root)
	return result
}

BinaryTree.prototype.postOrder = function () {
	let result = []

	const traverse = (node) => {
		if (node.left) traverse(node.left)
		if (node.right) traverse(node.right)
		result.push(node.value)
	}
	traverse(this.root)

	return result
}

BinaryTree.prototype.breathFirstTraverse = function () {
	const result = []
	const queue = []

	queue.push(this.root)

	while (queue.length) {
		let currentNode = queue.shift()

		result.push(currentNode.value)

		if (currentNode.left) {
			queue.push(currentNode.left)
		}
		if (currentNode.right) {
			queue.push(currentNode.right)
		}
	}

	return result
}

let bst = new BinaryTree()

bst.insert(50)

bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)

// console.log(bst)

// console.log(bst.root)
// console.log(bst.max())
// console.log(bst.contains(110))
console.log(bst.breathFirstTraverse())
