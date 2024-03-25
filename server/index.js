const express = require('express');
const compression = require('compression');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../dist'));
app.set('etag', 'strong');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

app.post('/book', (req, res) => {
  const { name, date, time } = req.body;

  fs.writeFileSync(`./data/${name} ${date} ${time}PM ${makeid(5)}.json`, JSON.stringify(req.body));

  // redirect user back
  res.writeHead(302, {
    'Location': '/'
  });
  res.end();
});
