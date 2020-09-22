const alphabetShift = (str = '', num = 0) => {
	let letter = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]
	let splitWord = str.split('')
	// let resultArray = []

	// for (let i = 0; i < splitWord.length; i++) {
	// 	if (splitWord[i] !== letter[letter.length - 1]) {
	// 		resultArray.push(letter[letter.indexOf(splitWord[i]) + 1])
	// 	} else {
	// 		resultArray.push(letter[0])
	// 	}
	// }
	// return resultArray.join('')

	for (let i = 0; i < splitWord.length; i++) {
		splitWord[i] = letter[splitWord[i]]
	}
	return splitWord.join('')
}

const str = 'CRAZY'
console.log(alphabetShift(str, 1))
