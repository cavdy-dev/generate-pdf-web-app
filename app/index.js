const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const { port } = require('./config/config');
const deletePDFs = require('./helper/deletePDFs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cron Job that runs every week
deletePDFs();

app.use(routes);

app.listen(port, () => {
  console.log(`Server started at PORT:${port}`);
});

module.exports = app;
