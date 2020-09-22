const hashTable = function (size) {
	this.buckets = Array(size)
	this.bucketNumber = this.buckets.length
}

const hadNode = function (key, value, next) {
	this.key = key
	this.value = value
	this.next = next || null
}

const hashTable1 = new hashTable(8)
console.log('a'.charAt())
console.log(hashTable1)
