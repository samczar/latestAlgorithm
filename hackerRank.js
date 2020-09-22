const https = require('https')
var fs = require('fs')

var options = {
	method: 'GET',
	hostname: 'jsonmock.hackerrank.com',
	path: '/api/article_users?page=2',
	headers: {},
	maxRedirects: 20,
}

var req = https.request(options, function (res) {
	var chunks = []

	res.on('data', function (chunk) {
		chunks.push(chunk)
	})

	res.on('end', function (chunk) {
		var body = Buffer.concat(chunks)
		const list = JSON.parse(body.toString()).data
		list
			.filter((user) => {
				return user.submission_count > 10
			})
			.map((user) => {
				console.log(user.username)
			})
	})

	res.on('error', function (error) {
		console.error(error)
	})
})

req.end()
