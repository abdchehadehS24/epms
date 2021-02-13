var express = require('express');
var router = express.Router();
var assessmentController = require('../controllers/assessmentController.js');

/*
 * GET
 */
router.get('/', assessmentController.list);

/*
 * GET
 */
router.get('/:id', assessmentController.show);

/*
 * POST
 */
router.post('/', assessmentController.create);

/*
 * PUT
 */
router.put('/:id', assessmentController.update);

/*
 * DELETE
 */
router.delete('/:id', assessmentController.remove);

module.exports = router;
