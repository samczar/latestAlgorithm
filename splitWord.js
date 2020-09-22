const splitWord = (words) => {
	var currentWord = ['']
	for (let index = 0; index < words.length; index++) {
		if (words[index] !== ' ') {
			currentWord[currentWord.length - 1] += words[index]
			console.log(currentWord[currentWord.length - 1])
		} else if (currentWord[currentWord.length - 1]) {
			currentWord.push('')
		}
	}
	let reverseWord = ' '
	for (let word = currentWord.length - 1; word > -1; word--) {
		reverseWord = reverseWord + ' ' + currentWord[word]
	}
	console.log('reverse Word: ', reverseWord)
}

const WORD = 'this is a string of words' // great am i

splitWord(WORD)

const reversString = (str) => {
	var words = [' ']
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			words[words.length - 1] += str[i]
		} else {
			words.push(' ')
		}
	}

	var reverseArray = ' '
	for (let k = 0; k < words.length; k++) {
		for (let j = words[k].length - 1; j > -1; j--) {
			reverseArray += words[k][j]
		}
	}
	console.log(reverseArray)
}
reversString(WORD) //siht si a gnirts fo sdrow
