// Dependences
const express = require("express");
const logger = require("morgan");
const Path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Port for listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logger
app.use(logger("dev"));

// Static file path
// app.use(express.static('public'));

// For Heroku Build up
// (process.env.NODE_ENV === 'production')
// app.use(express.static('client/build'));

// Routes
// const skyRoute = require('./routes/skyroutes');
// app.use('/api', skyRoute);

const skyHelpers = require("./controllers/skyHelpers");
skyHelpers.get("/", skyHelpers.getDarkSky, () => {
  console.log("NEXT call");
});

// // Index
// app.get('/', (req,res) => {
//     res.send('Hello World!');
// });

// Error message
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
