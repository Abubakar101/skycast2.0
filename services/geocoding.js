require("isomorphic-fetch");
require("dotenv").config();
const API_KEY = process.env.GOOGLE_API_KEY;

function geocodeApi(req, res, next) {
  console.log(req, "req");
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${req}&key=${API_KEY}`
  )
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      console.log("FETCH FETCH FETCH FETCH FETCH ", jsonRes);
      debugger;
      res.locals.lat = jsonRes.results["0"].geometry.location.lat;
      res.locals.lng = jsonRes.results["0"].geometry.location.lng;
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = geocodeApi;
