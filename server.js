var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyparser.json());
