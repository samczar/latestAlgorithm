// This problem was asked by Google.

// Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

// For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

// There is 1 smaller element to the right of 3
// There is 1 smaller element to the right of 4
// There are 2 smaller elements to the right of 9
// There is 1 smaller element to the right of 6
// There are no smaller elements to the right of 1

arrayValue = [3, 4, 9, 6, 1]

// const checker = arry => {
// 	const arrayLength = arry.length
// 	let counter = 0
// 	const newArray = []
// 	for (let i = 0; i < arrayLength; i++) {
// 		console.log(arry[i])
// 		for (let j = i.length; j < arrayLength; j++) {
// 			console.log(arry[j])
// 		}
// 	}
// 	return newArray
// }

// console.log(checker(arrayValue))

var countSmaller = function (nums) {
	var array = []
	var arr = []
	var length = nums.length
	var index = 0
	for (var i = length - 1; i >= 0; i--) {
		var d = nums[i]
		index = binarySearch(arr, d)
		inserIndex = index

		while (arr[inserIndex] === d) {
			inserIndex--
		}
		if (index !== inserIndex) inserIndex++
		arr.splice(index, 0, d)
		array.unshift(inserIndex)
	}
	return array
}
function binarySearch(arr, val) {
	var high = arr.length - 1
	var mid = 0
	var low = 0
	while (low <= high) {
		mid = Math.floor((low + high) / 2)
		if (arr[mid] === val) {
			return mid
		} else if (arr[mid] > val) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return low
}

console.log(countSmaller(arrayValue))

// const smallArray = arrayNums => {
// 	for (let i = 0; i < arrayNums.length; i++) {
// 		console.log(arrayNums[i])
// 		arrayNums[i] = 0
// 	}

// 	for (let i = 0; i < arrayNums.length; i++) {
// 		for (let j = i + 1; j < arrayNums.length; j++) {
// 			console.log(arrayNums[j])
// 			if (arrayNums[j] < arrayNums[i]) {
// 				arrayNums[i]++
// 			}
// 		}
// 	}
// }

// smallArray(arrayValue)
