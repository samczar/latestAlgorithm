const palendrome = word => {
	let wordArray = []
	wordArray = word.split('')

	let temp = []
	let reverseText = ''
	for (
		let reverseWord = wordArray.length - 1;
		reverseWord > -1;
		reverseWord--
	) {
		temp.push(wordArray[reverseWord])
		reverseText = temp.join('')
	}
	word === reverseText ? console.log(true) : console.log(false)
}

text = 'racecar'
palendrome(text)
