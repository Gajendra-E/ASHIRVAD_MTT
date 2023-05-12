require('dotenv').config();
const cors = require('cors');
var express = require('express');
var app = express();
app.use(cors());
app.use(express.static(__dirname + '/'));

// console.log(`process.env.PORT`, process.env.PORT);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, { host: HOST });
