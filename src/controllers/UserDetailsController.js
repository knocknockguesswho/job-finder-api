const { response } = require('../helpers/response');
const {
  ShowDetailsModel,
  PaginationModel, //with Limit
  SortByModel
} = require('../models/UserDetails');

module.exports = {
	ShowDetails: async (req, res) =>{
    let page = req.params.page - 1;
    page*=3;
    let sortBy = req.params.sortBy;
    try{
      if(page<0) return response(res, false, 'Cannot get data with page < 0', 500);
      const result = await ShowDetailsModel(sortBy, page);
      return response(res, true, result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  }
};
