var express = require('express');
var router = express.Router();


var deploy_controller = require('../controllers/deployController')

/* GET home page. */
router.get('/', deploy_controller.req_get);
router.post('/', deploy_controller.req_post)

module.exports = router;