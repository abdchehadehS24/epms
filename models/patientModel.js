var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var patientSchema = new Schema({
	'UniqueID' : String,
	'first_name' : String,
	'last_name' : String,
	'dob' : Date,
	'age_at_registration' : Number,
	'gender' : String
});

module.exports = mongoose.model('patient', patientSchema);
