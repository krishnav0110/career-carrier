const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
	email: {
	  	type: String,
	  	required: true,
	  	unique: true,
	},
	password: {
	  	type: String,
	  	required: true,
	},
	firstName: {
		type: String,
		required: true,
  	},
	lastName: {
		type: String,
		required: true,
	},
	qualification: {
		type: String,
		enum: ["10", "12", "UG"],
		required: false,
	},
	stream: {
		type: String,
		enum: ["Science", "Commerce", "Arts"],
		required: false,
	},
	salary: {
		type: Number,
		required: false,
	}
},
{ timestamps: true });

module.exports = mongoose.model("User", UserSchema);