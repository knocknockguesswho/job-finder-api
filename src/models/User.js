const connection = require("../config/database");
const query = require("../helpers/query/user");

module.exports = {
  ShowUsersModel: () =>{
    return new Promise((resolve, reject) =>{
      connection.query(query.showUsers, (error, result)=>{
        if(error){
          console.log(error)
          reject(error)
        }
        const response = {
          id: result.inserId,
          ...result,
        };
        resolve(response);
      });
    });
  }
};
