const connection = require("../config/database");
const query = require("../helpers/query/auth");

module.exports = {
  Register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(query.register, data, (error, result) => {
        if (error) {
          return reject(error);
        }
        const response = {
          id: result.insertId,
          ...data,
        };
        resolve(response);
      });
    });
  },
  Login: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(query.login, data, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(...result);
      });
    });
  }
};
