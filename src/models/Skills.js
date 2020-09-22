const connection = require('../config/database');
const query = require('../helpers/query/skills');

module.exports = {
	InsertSkillsModel: (data) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.insertSkills, data, (error, result)=>{
				if(error){
					return reject(error)
				}
				resolve(result);
			});
		});
	},
	DeleteSkillsModel: (id) =>{
		return new Promise((resolve, reject)=>{
			connection.query(query.deleteSkills, id, (error, result)=>{
				if(error){
					return reject(error)
				}
				resolve(result);
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
