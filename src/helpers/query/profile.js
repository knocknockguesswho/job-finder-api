module.exports = {
  editProfile: 'UPDATE users SET ? WHERE id = ?',
  getData: 'SELECT * FROM users WHERE id = ?',
  insertProfile: 'INSERT INTO profile SET ?',
  showProfile: 'SELECT * FROM profile WHERE user_id = ?'
};
