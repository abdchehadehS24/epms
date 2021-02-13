var express = require('express');
var router = express.Router();
var patientController = require('../controllers/patientController.js');

/*
 * GET
 */
router.get('/', patientController.list);

/*
 * GET
 */
router.get('/:id', patientController.show);

/*
 * POST
 */
router.post('/', patientController.create);

/*
 * PUT
 */
router.put('/:id', patientController.update);

/*
 * DELETE
 */
router.delete('/:id', patientController.remove);

module.exports = router;
