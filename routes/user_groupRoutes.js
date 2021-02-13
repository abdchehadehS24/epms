var express = require('express');
var router = express.Router();
var user_groupController = require('../controllers/user_groupController.js');

/*
 * GET
 */
router.get('/', user_groupController.list);

/*
 * GET
 */
router.get('/:id', user_groupController.show);

/*
 * POST
 */
router.post('/', user_groupController.create);

/*
 * PUT
 */
router.put('/:id', user_groupController.update);

/*
 * DELETE
 */
router.delete('/:id', user_groupController.remove);

module.exports = router;
