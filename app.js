require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const database = require('./src/config/database');
const routes = require('./src/routes');
const redis = require('redis');
const client = redis.createClient();
const multer = require('multer');

client.on('error', (err) => {
	console.log('error' + err);
});

database.connect((err) => {
	if (err) throw err;
	console.log('Database Connected');
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array()); 
// app.use(express.static('public'));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
	req.redis = client;
	next();
});
app.use(routes);
app.use('/images', express.static('src/images'));
app.get('*', (req, res) => {
	res.status(404).send('Not found');
});

app.listen(process.env.APP_PORT, () =>
	console.log(`Server running at port ${process.env.APP_PORT}`)
);
