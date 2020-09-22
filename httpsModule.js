const https = require('https')
const http = require('http')
let data = []

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello Word')
		res.end()
	}
})
server.listen(3000, () => {
	console.log('server running on port 3000')
})

https
	.get('https://jsonmock.hackerrank.com/api/article_users', (res) => {
		// console.log('statusCode:', res.statusCode)
		// console.log('headers:', res.headers)

		// res.on('data', (d) => {
		// 	// JSON.parse(process.stdout.write(d))
		// 	data.push(
		// 		JSON.parse(d)
		// 			.data.filter((userData) => {
		// 				return userData.submission_count > 10
		// 			})
		// 			.map((username) => {
		// 				return username.username
		// 			})
		// 	)

		// 	// console.log(data)
		// })

		res.on('data', () => {
			// console.log('Hello')
			return 'Hello'
		})
		res.emit('data')
	})

	.on('error', (e) => {
		console.error(e)
	})
