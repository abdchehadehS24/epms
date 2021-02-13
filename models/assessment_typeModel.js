var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var assessment_typeSchema = new Schema({
	'assessment_type_description' : String
});

module.exports = mongoose.model('assessment_type', assessment_typeSchema);
