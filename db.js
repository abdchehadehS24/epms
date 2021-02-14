const dbConfig = require("./config.json");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./models/userModel")(mongoose);
db.users_groups = require("./models/user_groupModel")(mongoose);
module.exports = db;
