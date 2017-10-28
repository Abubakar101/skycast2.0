require('isomorphic-fetch');
require('dotenv').config();
const API_KEY = process.env.API_SECRET_KEY;

function getDarkSky(req, res, next) {
    fetch(`https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`)
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        console.log(jsonRes);
        res.locals.data = jsonRes;
        next();
      }).catch((err) => {
          console.log(err);
          next();
      });
  }