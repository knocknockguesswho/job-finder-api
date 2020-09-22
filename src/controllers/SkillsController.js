const { response } = require('../helpers/response');
const {
  InsertSkillsModel,
  DeleteSkillsModel,
  ShowSkillsModel
} = require('../models/Skills');

module.exports = {
	InsertSkills: async (req, res) =>{
    try{
      const data = req.body;
      const skill = req.body.skill
      const result = await InsertSkillsModel(data);
      return response(res, true, `${skill} is successfuly added to the list`, result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
	DeleteSkills: async (req, res) =>{
    try{
      const id = req.params.id;
      const result = await DeleteSkillsModel(id);
      return response(res, true, `Skill is successfuly deleted`, result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
	ShowSkills: async (req, res) =>{
    try{
      const user_id = req.params.user_id;
      const result = await ShowSkillsModel(user_id);
      return response(res, true, '', result, 200);
    } catch (error){
      console.log(error)
      return response(res, false, 'Internal Server Error', 500);
    }
  },
};
