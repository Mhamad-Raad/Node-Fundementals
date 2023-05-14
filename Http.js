const axios = require('axios');

const link = 'http://www.google.com';

axios.get(link)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log('All done');
  });

