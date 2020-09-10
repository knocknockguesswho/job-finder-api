const express = require('express');
const tokenCheck = require('../middlewares/TokenCheck');
const {
  InsertSkills,
	DeleteSkills,
	ShowSkills
} = require('../controllers/SkillsController');
const router = express.Router();

router.post('/post', tokenCheck, InsertSkills);
router.delete('/delete/:id', tokenCheck, DeleteSkills);
router.get('/show/:user_id', tokenCheck, ShowSkills);

module.exports = router;
