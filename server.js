import express from "express";
const app = express();
import bodyParser from 'body-parser'
bodyParser.json()
bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});