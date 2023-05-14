const http = require('http');

const link = 'http://www.google.com';

const request = http.request(link, (res) => {
  res.on('data', (chunk) => {
    console.log(`Data: ${chunk.toString()}`);
  });

  res.on('end', () => {
    console.log('Response has ended');
  });
});

request.end()
