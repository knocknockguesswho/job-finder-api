const express = require('express');
const tokenCheck = require('../middlewares/TokenCheck');
const {
	editProfile,
	insertProfile,
	showProfile
} = require('../controllers/ProfileController');
const router = express.Router();
const avatarFilter = require('../middlewares/AvatarFilter');

router.put('/edit', tokenCheck, avatarFilter, editProfile);
router.post('/post/:id', tokenCheck, avatarFilter, insertProfile);
router.get('/show/:id', tokenCheck, showProfile);

module.exports = router;
