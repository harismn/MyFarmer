var express = require('express');
var router = express.Router();
const {userService} = require('../controllers/userController')

/* GET users listing. */
router.get('/', (req, res) => {
  userService.find(req, res);
});

console.log("hello")
module.exports = router;
