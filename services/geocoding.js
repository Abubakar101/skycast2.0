require("isomorphic-fetch");
require("dotenv").config();
const API_KEY = process.env.GOOGLE_API_KEY;

function geocodeApi(req, res, next) {
  // console.log("REQ REQ REQ",req.body.userInput, res, "REs");
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${req.body.userInput}&key=${API_KEY}`
  )
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      console.log("FETCH geometry FETCH geometry FETCH ", jsonRes);
      res.locals.name = jsonRes.results["0"].address_components
      res.locals.lat = jsonRes.results["0"].geometry.location.lat;
      res.locals.lng = jsonRes.results["0"].geometry.location.lng;
      console.log(" ----- >>> RES LOCALS LAT", res.locals.lat,"RES LOCALS LNG", res.locals.lng)
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = geocodeApi;
