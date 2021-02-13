var PatientModel = require('../models/patientModel.js');

/**
 * patientController.js
 *
 * @description :: Server-side logic for managing patients.
 */
module.exports = {

    /**
     * patientController.list()
     */
    list: function (req, res) {
        PatientModel.find(function (err, patients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting patient.',
                    error: err
                });
            }

            return res.json(patients);
        });
    },

    /**
     * patientController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({_id: id}, function (err, patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting patient.',
                    error: err
                });
            }

            if (!patient) {
                return res.status(404).json({
                    message: 'No such patient'
                });
            }

            return res.json(patient);
        });
    },

    /**
     * patientController.create()
     */
    create: function (req, res) {
        var patient = new PatientModel({
			UniqueID : req.body.UniqueID,
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			dob : req.body.dob,
			age_at_registration : req.body.age_at_registration,
			gender : req.body.gender
        });

        patient.save(function (err, patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating patient',
                    error: err
                });
            }

            return res.status(201).json(patient);
        });
    },

    /**
     * patientController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({_id: id}, function (err, patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting patient',
                    error: err
                });
            }

            if (!patient) {
                return res.status(404).json({
                    message: 'No such patient'
                });
            }

            patient.UniqueID = req.body.UniqueID ? req.body.UniqueID : patient.UniqueID;
			patient.first_name = req.body.first_name ? req.body.first_name : patient.first_name;
			patient.last_name = req.body.last_name ? req.body.last_name : patient.last_name;
			patient.dob = req.body.dob ? req.body.dob : patient.dob;
			patient.age_at_registration = req.body.age_at_registration ? req.body.age_at_registration : patient.age_at_registration;
			patient.gender = req.body.gender ? req.body.gender : patient.gender;
			
            patient.save(function (err, patient) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating patient.',
                        error: err
                    });
                }

                return res.json(patient);
            });
        });
    },

    /**
     * patientController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PatientModel.findByIdAndRemove(id, function (err, patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the patient.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
