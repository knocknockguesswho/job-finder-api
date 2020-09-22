const connection = require('../config/database');
const query = require('../helpers/query/userDetails');

module.exports = {
  ShowDetailsModel: (sortBy, limit, page) =>{
    return new Promise((resolve, reject)=>{
      const offset = parseInt(page)
      const limitInt = parseInt(limit)
      const sortByString = sortBy.replace(/["']/g,"")
      connection.query(`SELECT u.id, u.email, u.name, u.phone, p.avatar, p.fullname, p.job_title, p.domicile, p.work_place, p.self_description FROM user u LEFT JOIN profile p ON u.id=p.user_id ORDER BY ${sortByString} ASC LIMIT ${limitInt} OFFSET ${offset}`, (error, result)=>{
        if(error){
          return reject(error)
        }
        const pagination = (page/limit)+1
        const response = [...result, {page: pagination}]
        resolve(result)
      });
    });
  }
};
