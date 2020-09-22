const connection = require('../config/database');
const query = require('../helpers/query/workExp');

module.exports = {
	InsertWorkExpModel: (data) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.insertWorkExp, data, (error, result)=>{
				if(error){
					return reject(error);
				}
				resolve(result);
			});
		});
	},
	DeleteWorkExpModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.deleteWorkExp, id, (error, result)=>{
				if(error){
					return reject(error);
				}
				resolve(result);
			});
		});
	},
	EditWorkExpModel: (data, id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.editWorkExp, [data, id], (error, result)=>{
				if(error){
					return reject(error);
				}
				resolve(result);
			});
		});
	},
	ShowWorkExpModel: (user_id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.showWorkExp, user_id, (error, result)=>{
				if(error){
					return reject(error);
				}
				resolve(result);
			})
		})
	}
};
