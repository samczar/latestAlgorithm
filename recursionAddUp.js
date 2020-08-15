const recursionAddUp = (num) => {
	return num === 0 ? 0 : num + recursionAddUp(num - 1)
}

console.log(recursionAddUp(5))
