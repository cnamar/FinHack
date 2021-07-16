var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hii");
 
  res.json({name:"amar"});
});

module.exports = router;
