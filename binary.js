const binary = (array = [], target = 0) => {
	let rightDigit = array.length - 1
	let leftData = 0

	while (leftData < rightDigit) {
		let minData = Math.floor((leftData + rightDigit) / 2)

		if (target === array[minData]) {
			return console.log('Data is found at index ', minData)
		} else if (target < minData) {
			console.log('Data is searching on the left')
			rightDigit = minData - 1
		} else if (target > minData) {
			console.log('Data is searching on the right')
			leftData = minData + 1
		} else {
			console.log('Data not found')
		}
	}
	console.log('Data not found')
}

const arr = [1, 4, 7, 9, 11, 15, 17, 18, 19, 20]

console.log(binary(arr, 19))
