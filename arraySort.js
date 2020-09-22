const solution = (str = '') => {
	const splitArray = str.split('').sort()
	console.log('spllitter ', splitArray)
	const a = []
	const b = []

	let prev = ''
	let count = 1
	for (let i = 0; i < splitArray.length; i++) {
		// if (splitArray[i] !== prev) {
		// 	a.push(splitArray[i])
		// 	b.push(1)
		// 	count = 1
		// } else {
		// 	b[b.length - 1]++
		// 	count++

		// 	console.log('count ', count)
		// }

		if (splitArray[i] === prev) {
			count++
		} else {
			count = 1
		}

		prev = splitArray[i]
		// console.log('prev ', prev)
		console.log('count ', count + prev)
	}
	console.log('a ', a, 'b ', b)
	return [a, b]
}
const str = 'tweettter'
console.log(solution(str))
