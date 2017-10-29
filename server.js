// Dependences
const express = require("express");
const logger = require("morgan");
const path = require("path");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

// Port for listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Body Parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Logger
app.use(logger("dev"));



// For Heroku Build up
// (process.env.NODE_ENV === 'production')
// app.use(express.static('client/build'));


const skyHelpers = require("./services/skyHelpers");
app.get("/", skyHelpers, (req, res) => {
    res.json(res.locals.data);
//   console.log("API DATA :", res.locals.data);
});

// // Index
// app.get('/', (req,res) => {
//     res.send('Hello World!');
// });

// Error message
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
