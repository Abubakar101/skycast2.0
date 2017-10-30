// Dependences
const express = require("express");
const logger = require("morgan");
const path = require("path");
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

// For Heroku Build up
// (process.env.NODE_ENV === 'production')
// app.use(express.static('client/build'));

// Darkapi json data
const skyHelpers = require("./services/skyHelpers");
app.get("/", skyHelpers, (req, res) => {
  res.json(res.locals.data);
});

// User input from REACT
app.post("/", (req, res) => {
  console.log("FRONT REACT DATa :", req.body.userInput);
  
  // Converting UserInput information to Latitude and Longitude
  const geocodeApi = require("./services/geocoding");
  geocodeApi(req.body.userInput)

});

// // Index
// app.get('/', (req,res) => {
//     res.send('Hello World!');
// });

// Error message
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
