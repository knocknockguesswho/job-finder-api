const { response } = require('../helpers/response');
const {
  InsertWorkExpModel,
  DeleteWorkExpModel,
  EditWorkExpModel,
  ShowWorkExpModel
} = require('../models/WorkExp');

module.exports = {
	InsertWorkExp: async (req, res) =>{
    try{
      const data = req.body;
      const position = req.body.position
      const company_name = req.body.company_name
      const result = await InsertWorkExpModel(data);
      return response(res, true, `${position} at ${company_name} is successfuly added to the list`, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
	DeleteWorkExp: async (req, res) =>{
    try{
      const id = req.params.id;
      const result = await DeleteWorkExpModel(id);
      return response(res, true, `Work Experience is successfuly deleted`, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
	EditWorkExp: async (req, res) =>{
    try{
      const data = req.body;
      const id = req.params.id;
      const result = await EditWorkExpModel(data, id);
      return response(res, true, `Work Experience is successfuly edited`, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
	ShowWorkExp: async (req, res) =>{
    try{
      const user_id = req.params.user_id;
      const result = await ShowWorkExpModel(user_id);
      return response(res, true, result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
};
