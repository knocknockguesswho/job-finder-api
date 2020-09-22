const connection = require('../config/database');
const query = require('../helpers/query/userDetails');

module.exports = {
  ShowDetailsModel: (sortBy = 'id', page = 0) =>{
    return new Promise((resolve, reject)=>{
      const offset = parseInt(page)
      const sql = connection.query(query.showDetails, [sortBy, offset], (error, result)=>{
        if(error){
          return reject(error)
        }
        resolve(result)
      });
    });
  }
};
