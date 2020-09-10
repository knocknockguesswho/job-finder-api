const { response } = require('../helpers/response');
const {
  EditPortfolioModel,
  InsertPortfolioModel,
  DeletePortfolioModel,
	ShowPortfolioModel,
	GetPortfolioModel
} = require('../models/Portfolio');
const fs = require('fs');

module.exports = {
	EditPortfolio: async (req, res) => {
		try{
			const data = req.body;
			const id = req.params.id;
			const getPortfolio = await GetPortfolioModel(id);
			const oldImage = getPortfolio[0].app_image
			const image = req.file ? req.file.filename : null;
			image !== null ? (data.app_image = image) : null;
			const result = await EditPortfolioModel(data, id);
			fs.unlinkSync(`./src/images/portfolio/${oldImage}`)
			return response(res, true, `Portfolio is successfuly updated`, 200);
		} catch(error){
			console.log(error);
			return response(res, false, `Internal Server Error`, 500);
		}
	},
	InsertPortfolio: async (req,res) =>{
    try{
			const data = req.body;
			const image = req.file ? req.file.filename : null;
			image !== null ? (data.app_image = image) : null;
			const result = await InsertPortfolioModel(data);
			return response(res, true, `Your portfolio has been saved`, 200);
		} catch(error){
			console.log(error);
			return response(res, false, `Internal Server Error`, 500);
		}
	},
  DeletePortfolio: async (req,res) =>{
    try{
      const id = req.params.id;
      const result = await DeletePortfolioModel(id);
      return response(res, true, `Your portfolio has been deleted`, 200);
    } catch(error){
      console.log(error);
      return response(res, false, `Internal Server Error`, 500);
    }
  },
	ShowPortfolio: async (req, res) =>{
		try{
			const user_id = req.params.user_id;
			const result = await ShowPortfolioModel(user_id);
			return response(res, true, result, 200);
		} catch(error){
			console.log(error);
			return response(res, false, `Internal Server Error`, 500);
		}
	}
};
