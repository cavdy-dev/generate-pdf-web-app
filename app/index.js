const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

const PORT = process.env.PORT || 8500;

app.listen(PORT, () => {
  console.log(`Server started at PORT:${PORT}`);
});
