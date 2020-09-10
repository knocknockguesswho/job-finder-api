module.exports = {
	login: 'SELECT * FROM user WHERE email = ?',
	register: 'INSERT INTO user SET ?',
};
