const express = require('express');

const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const { dataRoute } = require('./routes/data.route');

env.config();
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use('/seed', dataRoute);

app.listen(port, () => {
  console.log(`Server listening at: http://${host}:${port}`);
});
