const express = require('express');
const tokenCheck = require('../middlewares/TokenCheck');
const {
  InsertPortfolio,
  DeletePortfolio,
  EditPortfolio,
  ShowPortfolio,
} = require('../controllers/PortfolioController');
const router = express.Router();
const portfolioFilter = require('../middlewares/PortfolioFilter');

router.post('/post', tokenCheck, portfolioFilter, InsertPortfolio);
router.delete('/delete/:id', tokenCheck, DeletePortfolio);
router.put('/edit/:id', tokenCheck, portfolioFilter, EditPortfolio);
router.get('/show/:user_id', tokenCheck, ShowPortfolio);

module.exports = router;
