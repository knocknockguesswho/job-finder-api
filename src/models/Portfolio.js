const connection = require('../config/database');
const query = require('../helpers/query/portfolio');

module.exports = {
	EditPortfolioModel: (data, id) => {
		return new Promise((resolve, reject) => {
			connection.query(query.editPortfolio, [data, id], (error, result) => {
				if (error) {
					return reject(error);
				}
				const response = {
					message: 'Your portfolio is successfully updated',
					result
				}
				resolve(response);
			});
		});
	},
	InsertPortfolioModel: (data) => {
		return new Promise((resolve, reject) => {
			connection.query(query.insertPortfolio, data, (error, result) => {
				if (error) {
					return reject(error);
				}
				const response = {
					message: 'Your portfolio has been saved',
					result
				}
				resolve(response);
			});
		});
	},
	DeletePortfolioModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.deletePortfolio, id, (error, result)=>{
				if(error){
					return reject(error)
				}
				const response = {
					message: 'Your portfolio has been deleted',
					result
				}
				resolve(response);
			});
		});
	},
	ShowPortfolioModel: (user_id, limit, page) =>{
		return new Promise((resolve, reject)=>{
			const limitInt = parseInt(limit)
			const pageInt = parseInt(page)
			connection.query(query.showPortfolio, [user_id, limitInt, pageInt], (error, result)=>{
				if(error){
					return reject(error)
				}
				const pagination = (page/limit)+1
				const response = {...result, page: pagination}
				resolve(result);
			})
		})
	},
	GetPortfolioModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.getPortfolio, id, (error, result)=>{
				if(error){
					return reject(error);
				}
				resolve(result)
			})
		})
	}
};
