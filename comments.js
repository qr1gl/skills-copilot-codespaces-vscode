// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 2. Create a server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// 3. Output
console.log('Server running at http://