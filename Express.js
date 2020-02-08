'use strict';

const express = require('express');

const app = express();
const PORT = 8080;

function handleRequest(request, response) {

  response.end(`<h1>It Works!! Path Hit: ${request.url}</h1>`);
}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>

  console.log('Server listening on: http://localhost:' + PORT)
);