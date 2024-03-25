const express = require('express');
const compression = require('compression');
const app = express();
const port = 3000;

app.use(compression());
app.use(express.static('../dist'));
app.set('etag', 'strong');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

