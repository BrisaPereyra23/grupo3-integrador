const express = require("express");  
const router = express.Router();
const datos = require("../db/baseDeDatos")
/*requerir los controllers correspondientes y usar router.get */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
