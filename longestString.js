const longestString = (N = []) => {
	const longestLength = N.reduce((length, word) => {
		return length < word.length ? word.length : length
	}, 0)
	return N.reduce((longestWords, words) => {
		return words.length === longestLength
			? [...longestWords, words]
			: longestWords
	}, [])
}

const arr = ['aba', 'aa', 'ab', 'vcd', 'abs', 'asf']

console.log(longestString(arr))
