const increasingSequence = (arr = [], index) => {
	let result = false
	arr.pop(arr[index])

	let prev = 0
	console.log(prev)

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= prev) {
			prev = arr[i]
			console.log(prev)
			result = true
		} else {
			result = false
		}
	}

	return result
}
const arr = [1, 3, 2]
console.log(increasingSequence(arr, 1))
