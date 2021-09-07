var express = require('express');
var router = express.Router();

var item_controller = require('../controllers/itemController')


router.get('/', item_controller.item_create_get);
router.post('/', item_controller.item_create_post);


module.exports = router;