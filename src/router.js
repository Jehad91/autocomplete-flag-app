const publicHandler = require('./handler/publicHandler');
const jsonHandler = require('./handler/jsonHandler');

const router = (request, response) => {
  const { url, method } = request;
  if (url === '/') {
    publicHandler(response, 'index.html');
  } else if (url === '/css/style.css') {
    publicHandler(response, url);
  } else if (url === '/js/autocomplete.js') {
    publicHandler(response, url);
  } else if (url === '/src/contries.json' && method === 'GET') {
    jsonHandler(response);
  } else {
    response.writeHead(404);
    response.end('PAGE NOT FOUND');
  }
};

module.exports = router;
