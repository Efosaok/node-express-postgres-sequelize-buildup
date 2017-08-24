// require all necessary dependencies||
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

app.get('*', (req, res) => {
  res.send({ message: 'Hello,It is just me' });
});

app.listen(app.get('port'), () => {
  console.log('api running on port ' + app.get('port'));
});

module.exports = app;
