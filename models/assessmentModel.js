var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var assessmentSchema = new Schema({
	'assessment_typeId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'assessment_type'
	},
	'patientId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'patient'
	},
	'assessment_date' : Date,
	'is_IDP' : Boolean,
	'is_refugee' : Boolean,
	'is_patient_registrar' : Boolean,
	'registrarId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'email' : String,
	'cell_number' : String,
	'occupation' : String
});

module.exports = mongoose.model('assessment', assessmentSchema);
