const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	task: [{
		title: String,
		description: String
	}]
});

module.exports = user = mongoose.model('user', userSchema);