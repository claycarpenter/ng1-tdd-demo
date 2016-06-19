const express = require('express'),
      cors = require('cors');

const app = express();
app.use(cors());

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
