const BST = function (value) {
	this.value = value
	this.left = null
	this.right = null
}

BST.prototype.insertion = function (value) {
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BST(value)
		} else {
			this.left.insertion(value)
		}
	} else {
		if (!this.right) {
			this.right = new BST(value)
		} else {
			this.right.insertion(value)
		}
	}
}

BST.prototype.contains = function (value) {
	if (value === this.value) {
		return true
	} else if (value < this.value) {
		if (!this.left) return false
		else return this.left.contains(value)
	} else if (value > this.value) {
		if (!this.right) return false
		else return this.right.contains(value)
	}
}

let bst = new BST(50)

bst.insertion(30)
bst.insertion(70)
bst.insertion(100)
bst.insertion(60)
bst.insertion(59)
bst.insertion(20)
bst.insertion(45)
bst.insertion(35)
bst.insertion(85)
bst.insertion(105)
bst.insertion(10)

// console.log(bst.contains(450))
// console.log(bst.right.left.left)
console.log(bst)
