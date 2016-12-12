// routes/index.js
var express = require('express');
var router = express.Router();
var bundles = require('../bundle.result.json');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express', bundle: bundles });
});

module.exports = router;
