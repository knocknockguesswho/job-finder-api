const connection = require('../config/database');
const query = require('../helpers/query/portfolio');

module.exports = {
	EditPortfolioModel: (data, id) => {
		return new Promise((resolve, reject) => {
			connection.query(query.editPortfolio, [data, id], (error, result) => {
				if (error) {
					return reject(error);
				}
				resolve(result);
			});
		});
	},
	InsertPortfolioModel: (data) => {
		return new Promise((resolve, reject) => {
			connection.query(query.insertPortfolio, data, (error, result) => {
				if (error) {
					return reject(error);
				}
				resolve(result);
			});
		});
	},
	DeletePortfolioModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.deletePortfolio, id, (error, result)=>{
				if(error){
					return reject(error)
				}
				resolve(result);
			});
		});
	},
	ShowPortfolioModel: (user_id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.showPortfolio, user_id, (error, result)=>{
				if(error){
					return reject(error)
				}
				const response = {
					id: result.insertId,
					...result
				}
				resolve(response);
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
