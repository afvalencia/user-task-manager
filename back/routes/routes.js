const express = require('express');
const router = express.Router();

const user = require('../models/users.js');

router.get('/test', (req, res) => {
	res.status(200).send('It works!');
});

router.get('/all', (req, res) => {
	user.find(function(err, usrs) {
		res.status(200).send(usrs);
	})
});

router.post('/register', (req, res) => {
	console.log('body', req);
	newUsr = req.body;
	if(newUsr.email === '' || newUsr.name === '') {
		res.status(400).json({ error: 'Los campos no pueden ser vacíos' });
	}

	console.log('new user email', req.body.email);
	user.findOne({ email: newUsr.email }).then(usr => {
		if(usr) {
			return res.status(400).json({ error: 'Este correo ya ha sido registrado' });
		} else {
			const newUser = new user({
				name: newUsr.name,
				email: newUsr.email,
				task: []
			});
		}
	})
});

module.exports = router;