const http = require('http');

// http.createServer((request, response) => {
//     response.writeHead(200, { 'content-type' :' text/html' });
//      response.write("<h1>Hello Request and Response</h1>");
//      response.end();
// })
// .listen(8000);

const server = (request, response) => {
     response.writeHead(200, { 'content-type' :' text/html' });
     response.write("<h1>Hello Request and Response......</h1>");
     response.end();
}
http.createServer(server).listen(8000);