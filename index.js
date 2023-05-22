const http = require('http');

const PORT = 3000;
const friends = [
  {
    name: 'Ali',
    id: 1,
  },
  {
    name: 'Ahmed',
    id: 2,
  },
];

const messages = [
  {
    text: 'Hello World!',
    id: 1,
  },
  {
    text: 'Hello World!!',
    id: 2,
  },
];

const server = http.createServer((req, res) => {
  const url = req.url.split('/');
  url.shift();

  if (url[0] === 'friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (url[1]) {
      const index = +url[1];
      res.end(JSON.stringify(friends[index]));
    }
    res.end(JSON.stringify(friends));
  } else if (url[0] === '/message') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (url[1]) {
      const index = +url[1];
      res.end(JSON.stringify(messages[index]));
      return;
    }
    res.end(JSON.stringify(messages));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

//end the fundementals

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});
