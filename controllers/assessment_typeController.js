var Assessment_typeModel = require('../models/assessment_typeModel.js');

/**
 * assessment_typeController.js
 *
 * @description :: Server-side logic for managing assessment_types.
 */
module.exports = {

    /**
     * assessment_typeController.list()
     */
    list: function (req, res) {
        Assessment_typeModel.find(function (err, assessment_types) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting assessment_type.',
                    error: err
                });
            }

            return res.json(assessment_types);
        });
    },

    /**
     * assessment_typeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        Assessment_typeModel.findOne({_id: id}, function (err, assessment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting assessment_type.',
                    error: err
                });
            }

            if (!assessment_type) {
                return res.status(404).json({
                    message: 'No such assessment_type'
                });
            }

            return res.json(assessment_type);
        });
    },

    /**
     * assessment_typeController.create()
     */
    create: function (req, res) {
        var assessment_type = new Assessment_typeModel({
			assessment_type_description : req.body.assessment_type_description
        });

        assessment_type.save(function (err, assessment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating assessment_type',
                    error: err
                });
            }

            return res.status(201).json(assessment_type);
        });
    },

    /**
     * assessment_typeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        Assessment_typeModel.findOne({_id: id}, function (err, assessment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting assessment_type',
                    error: err
                });
            }

            if (!assessment_type) {
                return res.status(404).json({
                    message: 'No such assessment_type'
                });
            }

            assessment_type.assessment_type_description = req.body.assessment_type_description ? req.body.assessment_type_description : assessment_type.assessment_type_description;
			
            assessment_type.save(function (err, assessment_type) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating assessment_type.',
                        error: err
                    });
                }

                return res.json(assessment_type);
            });
        });
    },

    /**
     * assessment_typeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        Assessment_typeModel.findByIdAndRemove(id, function (err, assessment_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the assessment_type.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
