const joiBase = require('@hapi/joi');
const joiDate = require('@hapi/joi-date');
const joi = joiBase.extend(joiDate); // extends


const schema = {
	editValidation: joi.object({
		app_image: joi.string()
	})
};

module.exports = schema;
