var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var user_groupSchema = new Schema({
	'group_name' : String
});

module.exports = mongoose.model('user_group', user_groupSchema);
