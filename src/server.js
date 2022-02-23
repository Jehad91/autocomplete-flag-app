const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://${host}:${port}`);
});
