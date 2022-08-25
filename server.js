const express = require("express");
const cors = require("cors");
const app = express();
const Route = require('./routes/index');          
var bodyParser = require('body-parser');
global.__basedir = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var corsOptions = {
  origin: "http://127.0.0.1:5000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to rafly." });
});

app.use(Route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});