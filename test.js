const arr = 'ABBBCCDDCCC'

// const test = (N = '', k) => {
// 	let result = ''
// 	let count = 1
// 	for (let i = 0; i < N.length; i++) {
// 		if (N[i] === N[i + 1]) {
// 			count++
// 		} else {
// 			if (count === 1) {
// 				count = ''
// 			}
// 			result = result + count + N[i]
// 			count = 1
// 		}
// 	}
// 	return result
// }
// console.log(test(arr, 3))

test = (val = []) => {
	//get the longest length of word in the array
	let longestWord = 0

	for (let i = 0; i < val.length; i++) {
		if (val[i].length > longestWord) {
			longestWord = val[i].length
		} else {
			longestWord
		}
	}

	return val.reduce((result, words) => {
		return words.length === longestWord ? [...result, 'words'] : result
	}, [])

	//check for words as long as the longest word
}

const val = ['aba', 'aa', 'ad', 'vcd', 'abs', 'make', 'fives', 'car']
console.log(test(val))
