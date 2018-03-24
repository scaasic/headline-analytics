const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.get('*', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on ${port}`);
