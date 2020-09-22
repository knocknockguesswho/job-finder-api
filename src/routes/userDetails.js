const express = require('express');
const { route } = require('./auth');
const{
  ShowDetails
} = require('../controllers/UserDetailsController')
const router = express.Router();

router.get('/', ShowDetails); //name, skill, domicile, job_preference


module.exports = router;



/*
  All data give response no skills on it
 */