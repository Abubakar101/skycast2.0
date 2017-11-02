require("isomorphic-fetch");
require("dotenv").config();
const API_KEY = process.env.Darksky_API_KEY;

function getDarkApi(req, res, next) {
  // console.log(`
  // RES RES RES LAT LAT LAT 
  // ${res.locals.lat} `);
  fetch(`https://api.darksky.net/forecast/${API_KEY}/${res.locals.lat},${res.locals.lng}`)
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      console.log("SkyHelpers FETCH SkyHelpers FETCH SkyHelpers ", jsonRes);
      res.locals.data = jsonRes;
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = getDarkApi;
