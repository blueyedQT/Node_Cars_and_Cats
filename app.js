var http = require('http');
var fs = require('fs');

server = http.createServer(function (request, response) {
	//// For Testing Purposes ////
	// console.log('\n\n\nRequest Output\n', request);
	// console.log('\n\n\nResponse Output\n', response);
	response.writeHead(200, {'Content-type': 'text/html'});
	console.log('Request', request.url);
	if(request.url === '/') {
		response.end('hello world');
	} else if(request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf-8', function (errors, contents) {
			response.write(contents);
			response.end();
		});
	} else if(request.url === '/images/fordGT.jpg') {
		fs.readFile('images/fordGT.jpg', function(errors, contents){
			response.write(contents);
			response.end();
		});
	}
	// } else {
	// 	response.end('File not found!');
	// }	
});

server.listen(7070);
console.log('Server running at port 7070');