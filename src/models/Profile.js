const connection = require('../config/database');
const query = require('../helpers/query/profile');

module.exports = {
	editUser: (data, id) => {
		return new Promise((resolve, reject) => {
			connection.query(query.editProfile, [data, id], (error, result) => {
				if (error) {
					return reject(error);
				}
				const response = {
					fieldCount: result.fieldCount,
					affectedRows: result.affectedRows
				}
				resolve(response);
			});
		});
	},
	getData: (id) => {
		return new Promise((resolve, reject) => {
			connection.query(query.getData, id, (error, result) => {
				if (error) {
					return reject(error);
				}
				resolve(result);
			});
		});
	},
	insertProfileModel: (data, id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.insertProfile, [data, id], (error, result)=>{
				if(error){
					return reject(error);
				}
				const response = {
					fieldCount: result.fieldCount,
					affectedRows: result.affectedRows
				}
				resolve(response);
			});
		});
	},
	showProfileModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.showProfile, id, (error, result)=>{
				if(error){
					return reject(error);
				}
				resolve(...result);
			})
		})
	}
};
