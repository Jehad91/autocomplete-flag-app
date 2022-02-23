const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const port = process.env.PORT || 7000;
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
