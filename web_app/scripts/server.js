#!/usr/bin/env node
/**
 *  Server for ng-blog in authoring mode
 *
 *  Will serve files and additionally provide a server sent event (SSE) stream.
 *  In this stream: one event for each file change within the blog folder
 *
 *  Thanks go to:
 *  https://npmjs.org/package/sse
 *  https://github.com/paulmillr/chokidar
 *  https://gist.github.com/rpflorence/701407
 **/
'use strict';

var chok      = require('chokidar');
var SSE       = require('sse');
var http      = require('http');
var urlModule = require("url");
var path      = require("path");
var fs        = require("fs");
var port      = process.argv[2] || 8888;

var clients = [];
var watcher = chok.watch(process.cwd(), { ignored: /bower_components+/, persistent: true });
watcher.on('change', function (path) {
    clients.forEach(function(client) { client.send(path); }); // send path of changed file
});

/** basic web server, serving static files */
var fileServer = http.createServer(function(request, response) {
    var filename = path.join(process.cwd(), urlModule.parse(request.url).pathname);

    fs.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404);
            response.write("not found");
            response.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) { filename = 'index.html'; }

        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }
            response.writeHead(200);
            response.write(file, "binary");
            response.end();
        });
    });
});

/** wraps basic web server in an SSE connection over which file system changes are broadcast */
fileServer.listen(parseInt(port, 10), function () {
    var sse = new SSE(fileServer);
    sse.on('connection', function (client) { // register watcher when connection starts
        clients.push(client);
    });
});
