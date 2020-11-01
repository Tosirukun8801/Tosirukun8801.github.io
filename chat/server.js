var http = require('http').createServer(handler);
var html = require('fs').readFileSync('views/index.html');

var io = require('socket.io')(http);

function handler(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(html);
}

http.listen(3000);