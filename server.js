const express = require('express');

const app = express();

const port = 9001;

const contacts = [
  {
    name: 'Eddard'
  },
  {
    name: 'Robert'
  }
];

app.get('/contacts', (req, res) => {
  res.status(200).json(contacts);
});

app.listen(port);
console.log(`Listening on port ${port}`);
