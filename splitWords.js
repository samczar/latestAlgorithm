//I am great => I ma taerg
//I am great => great am I
//I am great => taerg  ma I

var words = 'I am great'

const first = str => {
	//get the word in an array
	//if there is not  space rerun another loop backwords and put in array
	//Join array
	let wordArray = ['']
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			wordArray[wordArray.length - 1] += str[i]
		} else {
			wordArray.push('')
		}
	}
	const innerArray = []
	const reverseArray = ['']
	for (let j = 0; j < wordArray.length; j++) {
		// if(wordArray[j])
		innerArray.push(wordArray[j])
		for (let k = innerArray[1].length - 1; k > -1; k--) {
			console.log(innerArray)
			// reverseArray[reverseArray.length - 1] += innerArray
		}
	}
	// console.log(reverseArray)

	// for (let j = 0; j < wordArray.; j++) {
	//     // console.log(wordArray)

	// }

	// let reverseEachWord = []
	// for (let eachWord = wordArray.length - 1; eachWord > -1; eachWord--) {
	// 	reverseEachWord.push(wordArray[eachWord])
	// }
	// console.log(reverseEachWord)
}
first(words)
