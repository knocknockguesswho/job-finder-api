const connection = require('../config/database');
const query = require('../helpers/query/skills');

module.exports = {
	InsertSkillsModel: (data) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.insertSkills, data, (error, result)=>{
				if(error){
					return reject(error)
				}
				const response = {
					fieldCount: result.fieldCount,
					affectedRows: result.affectedRows
				}
				resolve(response);
			});
		});
	},
	DeleteSkillsModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.deleteSkills, id, (error, result)=>{
				if(error){
					return reject(error)
				}
				const response = {
					fieldCount: result.fieldCount,
					affectedRows: result.affectedRows
				}
				resolve(response);
			});
		});
	},
	ShowSkillsModel: (user_id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.showSkills, user_id, (error, result)=>{
				if(error){
					return reject(error)
				}
				resolve(result);
			})
		})
	}
};
