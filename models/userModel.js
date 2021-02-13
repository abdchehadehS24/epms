var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'username' : String,
	'password' : String,
	'email' : String,
	'isAdmin' : Boolean,
	'role' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user_group'
	}
});

module.exports = mongoose.model('user', userSchema);
