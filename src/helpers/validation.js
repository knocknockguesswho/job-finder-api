const auth = require("../middlewares/validation/auth");
const profile = require("../middlewares/validation/profile")

module.exports = {
  RegisterValidation: (data) => {
    return auth.registerValidation.validate(data);
  },
  LoginValidation: (data) => {
    return auth.loginValidation.validate(data);
  },
  editValidation: (data) => {
    return profile.editValidation.validate(data);
  }
};
