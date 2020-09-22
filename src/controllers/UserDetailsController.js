const { response } = require('../helpers/response');
const {
  ShowDetailsModel,
  PaginationModel, //with Limit
  SortByModel
} = require('../models/UserDetails');

module.exports = {
	ShowDetails: async (req, res) =>{
    let limit = req.query.limit || 7;
    let page = req.query.page - 1 || 0;
    page*=3;
    let sortBy = req.query.sortBy || 'id';
    try{
      if(page<0) return response(res, false, 'Cannot get data with page < 0', 500);
      const result = await ShowDetailsModel(sortBy, limit, page);
      return response(res, true, result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  }
};
