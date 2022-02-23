const path = require('path');
const fs = require('fs');

const jsonHandler = (response) => {
  const fillPath = path.join(__dirname, '..', 'contries.json');
  fs.readFile(fillPath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('SERVER ERROR');
    } else {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(data);
    }
  });
};

module.exports = jsonHandler;
