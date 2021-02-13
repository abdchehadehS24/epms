var express = require('express');
var router = express.Router();
var assessment_typeController = require('../controllers/assessment_typeController.js');

/*
 * GET
 */
router.get('/', assessment_typeController.list);

/*
 * GET
 */
router.get('/:id', assessment_typeController.show);

/*
 * POST
 */
router.post('/', assessment_typeController.create);

/*
 * PUT
 */
router.put('/:id', assessment_typeController.update);

/*
 * DELETE
 */
router.delete('/:id', assessment_typeController.remove);

module.exports = router;
