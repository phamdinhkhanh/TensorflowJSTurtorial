// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const port = 5000;
const hostname = '127.0.0.1';
const express = require('express');
// import * as express from "express";
// const path = require('path');

let app = express();
// Cấu hình root mặc định.
app.use(express.static(__dirname));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, hostname, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Website is up!");
	}
});	
