const express = require('express');
const tokenCheck = require('../middlewares/TokenCheck');
const {
	ShowUsers
} = require('../controllers/UserController');
const router = express.Router();

router.get('/showUsers', tokenCheck, ShowUsers);

module.exports = router;
