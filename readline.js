const readLine = require('readline')
const readLineApp = () => {
	const rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	rl.question('What is your name? ', (answer) => {
		console.log(`this is the answer: ${answer}`)
	})

	rl.close()
}

console.log(readLineApp())
