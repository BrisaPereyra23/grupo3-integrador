const express = require("express");  
const router = express.Router();
const datos = require("../db/baseDeDatos")
/*requerir los controllers correspondientes y usar router.get */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
