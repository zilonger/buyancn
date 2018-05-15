var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

var app = express();
app.use(history());

app.use(express.static(path.join(__dirname, '../dist')));
app.listen(80);