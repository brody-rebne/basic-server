'use-strict';

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

// app.get('/', function (req, res) {
//   res.send('Hello, World...');
// });

// app.get('/hogchamp', function (req, res) {
//   res.send('Hello, HogChamp...');
// });

app.listen(PORT, () => console.log(`listening on ${PORT}`));
