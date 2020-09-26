var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.send({temp: '90.5', unit: 'Fahrenheit',
  cloudy: false, precipitationChance: 0});
});

module.exports = router;