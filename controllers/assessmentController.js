var AssessmentModel = require('../models/assessmentModel.js');

/**
 * assessmentController.js
 *
 * @description :: Server-side logic for managing assessments.
 */
module.exports = {

    /**
     * assessmentController.list()
     */
    list: function (req, res) {
        AssessmentModel.find(function (err, assessments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting assessment.',
                    error: err
                });
            }

            return res.json(assessments);
        });
    },

    /**
     * assessmentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AssessmentModel.findOne({_id: id}, function (err, assessment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting assessment.',
                    error: err
                });
            }

            if (!assessment) {
                return res.status(404).json({
                    message: 'No such assessment'
                });
            }

            return res.json(assessment);
        });
    },

    /**
     * assessmentController.create()
     */
    create: function (req, res) {
        var assessment = new AssessmentModel({
			assessment_typeId : req.body.assessment_typeId,
			patientId : req.body.patientId,
			assessment_date : req.body.assessment_date,
			is_IDP : req.body.is_IDP,
			is_refugee : req.body.is_refugee,
			is_patient_registrar : req.body.is_patient_registrar,
			registrarId : req.body.registrarId,
			email : req.body.email,
			cell_number : req.body.cell_number,
			occupation : req.body.occupation
        });

        assessment.save(function (err, assessment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating assessment',
                    error: err
                });
            }

            return res.status(201).json(assessment);
        });
    },

    /**
     * assessmentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        AssessmentModel.findOne({_id: id}, function (err, assessment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting assessment',
                    error: err
                });
            }

            if (!assessment) {
                return res.status(404).json({
                    message: 'No such assessment'
                });
            }

            assessment.assessment_typeId = req.body.assessment_typeId ? req.body.assessment_typeId : assessment.assessment_typeId;
			assessment.patientId = req.body.patientId ? req.body.patientId : assessment.patientId;
			assessment.assessment_date = req.body.assessment_date ? req.body.assessment_date : assessment.assessment_date;
			assessment.is_IDP = req.body.is_IDP ? req.body.is_IDP : assessment.is_IDP;
			assessment.is_refugee = req.body.is_refugee ? req.body.is_refugee : assessment.is_refugee;
			assessment.is_patient_registrar = req.body.is_patient_registrar ? req.body.is_patient_registrar : assessment.is_patient_registrar;
			assessment.registrarId = req.body.registrarId ? req.body.registrarId : assessment.registrarId;
			assessment.email = req.body.email ? req.body.email : assessment.email;
			assessment.cell_number = req.body.cell_number ? req.body.cell_number : assessment.cell_number;
			assessment.occupation = req.body.occupation ? req.body.occupation : assessment.occupation;
			
            assessment.save(function (err, assessment) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating assessment.',
                        error: err
                    });
                }

                return res.json(assessment);
            });
        });
    },

    /**
     * assessmentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AssessmentModel.findByIdAndRemove(id, function (err, assessment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the assessment.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
