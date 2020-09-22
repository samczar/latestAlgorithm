const node = function (value, next, prev) {
	this.value = value
	this.next = next
	this.prev = prev
}

let node1 = new node(7)

const LinkedList = function () {
	this.head = null
	this.tail = null
}

LinkedList.prototype.addToHead = function (value) {
	let newNode = new node(value, this.head, null)
	if (this.head) {
		this.head.prev = newNode
	} else {
		this.tail = newNode
	}
	this.head = newNode
}

LinkedList.prototype.addToTail = function (value) {
	let newNode = new node(value, null, this.tail)
	if (this.tail) {
		this.tail.next = newNode
	} else {
		this.head = newNode
	}
	this.tail = newNode
}

LinkedList.prototype.removeHead = function () {
	let val = this.head.value
	if (!this.head) {
		return null
	}

	this.head = this.head.next
	if (this.head) {
		this.head.prev = null
	} else {
		this.tail.prev = null
	}
	console.log('took out ', val)
	return val
}

LinkedList.prototype.removeTail = function () {
	let val = this.tail.value
	if (!this.tail) return null

	this.tail = this.tail.prev
	if (this.tail) {
		this.tail.next = null
	} else {
		this.head.next = null
	}
	console.log('removed tail is ', val)
	return val
}

LinkedList.prototype.search = function (searchValue) {
	let currentNode = this.head

	while (currentNode) {
		if (currentNode.value === searchValue) {
			console.log('result ', currentNode.value)
			return currentNode.value
		}

		currentNode = currentNode.next
	}
	console.log('not found')
	return null
}

LinkedList.prototype.indeOf = function (value) {
	if (!this.head) {
		return null
	}
	let currentNode = this.head
	let indexArr = []
	let counter = 0
	while (currentNode) {
		if (currentNode.value === value) {
			indexArr.push(currentNode.value + ' At index: ' + counter)
		}

		currentNode = currentNode.next
		counter++
	}
	console.log(indexArr)
	return indexArr
}

let LL = new LinkedList()
LL.addToHead(7)
LL.addToHead(8)
LL.addToHead(20)
LL.addToHead(8)
LL.addToHead(20)

LL.indeOf(20)

// LL.addToHead(9)
// LL.addToHead(10)
// LL.addToHead(11)
// LL.addToTail(22)
// LL.addToTail(33)

console.log(LL)

/**
 * Add Node to head of LinkedList
 *   Add Node to tail of LinkedList
 * Remove Head Node to retrieve its data
 * Remove Tail Node to retrieve its data
 * Search LinkedList if data we searching for resides
 *
 */
