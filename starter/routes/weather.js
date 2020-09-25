var express = require('express');
var router = express.Router();

let weather = {
    temp: 90.5,
    unit: "Fahrenheit",
    cloudy: false,
    precipitationChance: 0
}
router.get('/', function(req, res, next) {

  res.render('weather', { title: 'Express' }, {temp: '90.5'}, {unit: 'Fahrenheit'},
  {cloudy: false, precipitationChance: 0});
});

module.exports = router;