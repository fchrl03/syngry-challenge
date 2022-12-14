const http = require('http'),
  fs = require('fs'),
  port = 2000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case '/':
        req.url = 'index.html';
        break;
      case '/cars.html':
        req.url = 'cars.html';
        break;
    }
    let path = 'public/' + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(port, 'localhost', () => {
    console.log('Server is running, please open http://localhost:2000');
  });
