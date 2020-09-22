const text = 'Hello Sam people'

const reversetext = (text = '') => {
	console.log(text.length - 1)
	let word = ''
	for (let i = text.length - 1; i > 0; i--) {
		word = word + text[i]
	}
	return word
}
const arr = ['Hello', 'people']
console.log(arr[arr.length - 1])
console.log(reversetext(text))

const reverseWords = (words = '') => {
	let container = ['']
	for (let i = 0; i < words.length; i++) {
		console.log(words[i])
		if (words[i] !== ' ') {
			container[container.length - 1] += words[i]
			console.log(container)
		} else if (container[container.length - 1]) {
			container.push('')
		}
		console.log(container)
		// return container
	}
	let reverse = ''

	for (let i = container.length - 1; i >= 0; i--) {
		reverse = reverse + ' ' + container[i]
	}
	return reverse
}

console.log(reverseWords(text))

const search = 'I am haaappy'

let pos = search.indexOf('p')

let count = 0

while (pos !== -1) {
	pos = search.indexOf('p', pos + 1)
	count++
	console.log(count)
}

console.log(count)
