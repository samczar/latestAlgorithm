const Solution = (S = '') => {
	const wordLength = S.length
	let result = ''
	for (let i = 0; i < wordLength; i++) {
		let count = 1
		while (i + 1 < wordLength && S[i] === S[i + 1]) {
			count++
			i++
		}
		result = result + S[i] + count
	}
	return result
}

console.log(Solution('ABBBCCCDDDDCC'))
