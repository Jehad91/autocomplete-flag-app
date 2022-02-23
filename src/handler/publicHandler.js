const path = require('path');
const fs = require('fs');

const extentionType = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
};
const publicHandler = (response, url) => {
  const fillPath = path.join(__dirname, '..', '..', 'public', url);
  const extention = path.extname(fillPath);
  fs.readFile(fillPath, (err, file) => {
    if (err) {
      response.writeHead(500, { 'content-type': 'text/plain' });
      response.end('SERVER ERROR');
    } else {
      response.writeHead(200, { 'content-type': extentionType[extention] });
      response.end(file);
    }
  });
};

module.exports = publicHandler;
