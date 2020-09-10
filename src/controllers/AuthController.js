const { genSaltSync, compareSync, hashSync } = require('bcrypt');
const { response } = require('../helpers/response');
const {
	RegisterValidation,
	LoginValidation,
} = require('../helpers/validation');
const {
	Register,
	Login,
} = require('../models/Auth');
const { createToken } = require('../helpers/createToken');
const jwt = require('jsonwebtoken');
// Create an encryptor:

module.exports = {
	Register: async (req, res) => {
		try {
			const data = req.body;
			const validation = RegisterValidation(data);
			if (validation.error === undefined) {
				data.password = hashSync(req.body.password, genSaltSync(1));
				const emailCheck = await Login(data.email);
				if (emailCheck.length === 0) {
					const result = await Register(data);
					delete result.password;
					return response(res, true, result, 200);
				}
				return response(res, false, 'Email has been registered', 400);
			}
			let errorMessage = validation.error.details[0].message;
			errorMessage = errorMessage.replace(/"/g, '');
			return response(res, false, errorMessage, 400);
		} catch (error) {
			console.log(error);
			return response(res, false, 'Internal Server Error', 500);
		}
	},
	Login: async (req, res) => {
		try {
			const data = req.body;
			const validation = LoginValidation(data);
			// validation check
			if (validation.error === undefined) {
				const emailCheck = await Login(data.email);
				if (emailCheck.length !== 0) {
					// password check
					if (compareSync(data.password, emailCheck[0].password)) {
						delete emailCheck[0].is_active;
						delete emailCheck[0].password;
						// create token
						const token = createToken(emailCheck, process.env.JWT_KEY, '24h');
						emailCheck[0].token = token;
						return response(res, true, emailCheck, 200);
					}
					return response(res, false, 'Password wrong', 400);
				}
				return response(res, false, 'Email is not registered', 404);
			}
			let errorMessage = validation.error.details[0].message;
			errorMessage = errorMessage.replace(/"/g, '');
			return response(res, false, errorMessage, 400);
		} catch (error) {
			console.log(error);
		}
	},
	RefreshToken: async (req, res) => {
		try {
			if (req.headers.token) {
				const payload = jwt.verify(req.headers.token, process.env.JWT_KEY, {
					ignoreExpiration: true,
				});
				const token = createToken(payload.result, process.env.JWT_KEY, '24h');
				const RefreshToken = createToken(
					payload.result,
					process.env.JWT_KEY,
					'48h'
				);
				const data = {
					token: token,
					refreeshToken: RefreshToken,
				};
				return response(res, true, data, 200);
			}
			return response(res, false, 'Token not found', 400);
		} catch (error) {
			console.log(error);
		}
	}
};
