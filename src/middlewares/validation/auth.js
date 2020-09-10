const joi = require("@hapi/joi");

const schema = {
  registerValidation: joi.object({
    name: joi.string().max(30).required(),
    email: joi.string().email({ minDomainSegments: 2 }).required(),
    phone: joi.string().max(15).required(),
    password: joi.string().min(6).required(),
  }),
  loginValidation: joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required(),
    password: joi.string().required(),
  })
};

module.exports = schema;
