const pascalTriangle = (index) => {
	const arr = []
	const counter = index + 1 //Counter holds the sequence of recursion
	if (index < 3) return 1
	for (let index = 1; index < counter; index++) {
		arr.push(pascalTriangle(index - 1) + index)
	}
	return arr
}

console.log(pascalTriangle(3))
