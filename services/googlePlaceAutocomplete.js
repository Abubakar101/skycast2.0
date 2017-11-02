require("isomorphic-fetch");
require('dotenv').config();
// const API_KEY = process.env.API_SECRET_KEY;
const API_KEY = process.env.G_API_KEY;

function googlePlaceAutocomplete(req, res, next) {
  fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.body.userInput}&types=geocode&key=${API_KEY}`)
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      let storeData = [];
      jsonRes.predictions.forEach(function(e) {
        storeData.push({
          description: e.description,
          terms: e.terms,
        })
      });
      console.log(storeData, ' storeData');
      res.locals.places = {storeData};
      next();
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = googlePlaceAutocomplete;
