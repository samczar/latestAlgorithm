var arrlist = [10, 20, 30, 40, 50, 90, 2, 22, 1, 93, 99, 4, 8]

const binaryTest = (num = [], target) => {
	let low = 0
	let high = num.length - 1

	while (low <= high) {
		let mid = Math.floor((low + high) / 2)

		if (target === num[mid]) {
			return console.log('Target was found at index ', mid)
		} else if (target > num[mid]) {
			console.log('Searching the right side of the array')
			low = mid + 1
		} else if (target < num[mid]) {
			console.log('Searching the left side of the array')
			high = mid - 1
		} else {
			console.log('Not Found this loop. Iterate again')
		}
	}

	return console.log('Target value not found in num')
}
const arr = [1, 3, 5, 7, 8, 9, 11]

console.log(binaryTest(arr, 11))

// let startIndex = 0
// let endIndex = num.length - 1

// while (startIndex <= endIndex) {
// 	let middleIndex = Math.floor((startIndex + endIndex) / 2)
// 	if (target === num[middleIndex]) {
// 		return console.log('Target was found at index ' + middleIndex)
// 	}
// 	if (target > num[middleIndex]) {
// 		console.log('Searching the right side of num')
// 		startIndex = middleIndex + 1
// 	}
// 	if (target < num[middleIndex]) {
// 		console.log('Searching the left side of num')
// 		endIndex = middleIndex - 1
// 	} else {
// 		console.log('Not Found this loop iteration. Looping another iteration.')
// 	}
// }
