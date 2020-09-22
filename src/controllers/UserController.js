const { response } = require('../helpers/response');
const {
  ShowUsersModel
} = require('../models/User');

module.exports = {
	ShowUsers: async (req, res) =>{
    try{
      const result = await ShowUsersModel();
      delete result.password;
      return response(res, true, '', result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  }
};
