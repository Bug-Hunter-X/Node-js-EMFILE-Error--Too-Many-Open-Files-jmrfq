const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: EMFILE: too many open files
//This occurs when the server attempts to handle more requests than the operating system's file descriptor limit allows.
//It usually happens under heavy load.