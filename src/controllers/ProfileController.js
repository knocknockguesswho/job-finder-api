const { genSaltSync, compareSync, hashSync } = require('bcrypt');
const { response } = require('../helpers/response');
const { editValidation } = require('../helpers/validation');
const { editUser, getData, insertProfileModel, showProfileModel } = require('../models/Profile');
const fs = require('fs');

module.exports = {
	editProfile: async (req, res) => {
		try {
			const id = req.decoded.result[0].id;
			req.body.password
				? (req.body.password = hashSync(req.body.password, genSaltSync(1)))
				: null;
			const data = req.body;
			const getUser = await getData(id);
			let oldImage = getUser[0].image;
			if (!req.fileValidationError) {
				const image = req.file ? req.file.filename : null;
				image !== null ? (data.image = image) : null;
				const validate = editValidation(data);
				if (validate.error === undefined) {
					const result = await editUser(data, id);
					if (result.affectedRows === 1 && oldImage !== 'user-default.png')
						fs.unlinkSync(`./src/images/users/${oldImage}`);
					return response(res, true, 'Data successfuly updated', result, 200);
				}
				let errorMessage = validate.error.details[0].message;
				errorMessage = errorMessage.replace(/"/g, '');
				fs.unlinkSync(`./src/images/users/${data.image}`);
				return response(res, false, errorMessage, 400);
			}
			return response(res, false, req.fileValidationError, 400);
		} catch (error) {
			console.log(error);
			return response(res, false, 'Internal Server Error', 500);
		}
	},
	insertProfile: async (req,res) =>{
		try{
			const data = req.body;
			const id = req.params.id;
			const image = req.file ? req.file.filename : null;
			image !== null ? (data.avatar = image) : null;
			const result = await insertProfileModel(data, id);
			return response(res, true, `Your data has been saved`, result, 200);
		} catch(error){
			console.log(error);
			return response(res, false, `Internal Server Error`, 500);
		}
	},
	showProfile: async (req, res) =>{
		try{
			const id = req.params.id;
			const result = await showProfileModel(id);
			return response(res, true, '', result, 200);
		} catch(error){
			console.log(error);
			return response(res, false, `Internal Server Error`, 500);
		}
	}
};
