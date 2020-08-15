const solution = (N = 0) => {
	const binary = N.toString(2)
	const arrayOfZero = []
	const arrayOfOthers = []
	let result = 0
	let counter = 0

	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === '0') {
			counter = counter + 1
			arrayOfZero.push(binary[i])
		} else {
			arrayOfOthers.push(binary[i])
			result = Math.max(counter, result)
			console.log('result ', result)
			/**
			 * Divider for the zeros after one
			 */
			counter = 0
		}
	}
	return result
}

console.log(solution(1041))
