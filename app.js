var http = require('http');
var fs = require('fs');

server = http.createServer(function (request, response) {
	//// For Testing Purposes ////
	// console.log('\n\n\nRequest Output\n', request);
	// console.log('\n\n\nResponse Output\n', response);
	response.writeHead(200, {'Content-type': 'text/html'});
	console.log('Request', request.url);
	if (request.url === '/') {
		fs.readFile('views/index.html', 'utf-8', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf-8', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/fordGT.jpg') {
		fs.readFile('images/fordGT.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/saleen.jpg') {
		fs.readFile('images/saleen.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/viper.jpg') {
		fs.readFile('images/viper.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/mini.jpg') {
		fs.readFile('images/mini.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/cats') {
		fs.readFile('views/cats.html', 'utf-8', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/cats1.jpg') {
		fs.readFile('images/cats1.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/cats2.jpg') {
		fs.readFile('images/cats2.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/cats3.jpg') {
		fs.readFile('images/cats3.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/cats4.jpg') {
		fs.readFile('images/cats4.jpg', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/styles/style.css') {
		fs.readFile('styles/style.css', function(errors, contents) {
			response.write(contents);
			response.end();
		});
	} else {
		response.end('File not found!');
	}	
});

server.listen(7070);
console.log('Server running at port 7070');