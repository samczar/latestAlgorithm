const border = (arr = []) => {
	const stars = '*'.repeat(arr[0].length + 2)

	arr.push(stars)
	arr.unshift(stars)

	return arr.reduce((state, fence) => {
		return [...state, `*${fence}*`]
	}, [])
}
const picture = ['abc', 'ded']
console.log(border(picture))

//1 1 2 3 5

const test = (arr = []) => {
	const wall = '*'.repeat(arr[0].length + 2)

	const result = []

	for (let i = 0; i < arr.length; i++) {
		result.push('*' + arr[i] + '*')
	}

	// for (let i = 0; i < wallLength; i++) {
	// 	wall = wall + '*'
	// }

	result.unshift(wall)
	result.push(wall)

	return result
}
const picture = ['abc', 'ded']
console.log(test(picture))
