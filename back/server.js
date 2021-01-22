const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/routes.js');
const mongoose = require('mongoose');

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'))
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', users);

const {url} = require('./config/database');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(db => console.log('DB is connected'))
	.catch(err => console.error(err));
