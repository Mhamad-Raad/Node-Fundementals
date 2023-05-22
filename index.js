const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'application/json',
  // });

  if (req.url === '/friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify([
        {
          name: 'Ali',
          id: 1,
        },
        {
          name: 'Ahmed',
          id: 2,
        },
      ])
    );
  } else if (req.url === '/message') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify([
        {
          text: 'Hello World!',
          id: 1,
        },
        {
          text: 'Hello World!!',
          id: 2,
        },
      ])
    );
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});
