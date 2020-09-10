const express = require('express');
const {
  InsertWorkExp,
  DeleteWorkExp,
  EditWorkExp,
  ShowWorkExp,
} = require('../controllers/workExpController');
const router = express.Router();

router.post('/post', InsertWorkExp);
router.delete('/delete/:id', DeleteWorkExp);
router.put('/edit/:id', EditWorkExp);
router.get('/show/:user_id', ShowWorkExp);

module.exports = router;
