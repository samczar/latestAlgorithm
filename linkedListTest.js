const LinkedList = function () {
	this.head = null
	this.tail = null
}

const node = function (value, next, prev) {
	this.value = value
	this.next = next
	this.prev = prev
}

LinkedList.prototype.addHead = function (value) {
	let newNode = new node(value, this.head, null)
	if (this.head) {
		this.head.prev = newNode
	} else {
		this.tail = newNode
	}
	this.head = newNode
}

LinkedList.prototype.addTail = function (value) {
	let addNode = new node(value, null, this.tail)

	if (this.tail) {
		this.tail.next = addNode
	} else {
		this.head = addNode
	}
	this.tail = addNode
}

LinkedList.prototype.removeHead = function () {
	if (!this.head) {
		this.head = null
		this.tail = null
	}

	let currentNodeValue = this.head.value
	this.head = this.head.next
	if (this.head) {
		this.head.prev = null
	} else {
		this.tail = null
	}

	return currentNodeValue
}

LinkedList.prototype.removeTail = function () {
	if (!this.tail) {
		this.head = null
		this.tail = null
	}
	let currentNodeValue = this.tail.value
	this.tail = this.tail.prev
	if (this.tail) {
		this.tail.next = null
	} else {
		this.head = null
	}

	return currentNodeValue
}

let LL = new LinkedList()

LL.addHead(10)
LL.addHead(20)
LL.addHead(30)

LL.removeTail()
LL.removeTail()
LL.removeTail()
// LL.removeHead()
// LL.removeHead()

console.log(LL)
