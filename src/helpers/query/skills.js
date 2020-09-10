module.exports = {
  insertSkills: 'INSERT INTO skills SET ?',
  deleteSkills: 'DELETE FROM skills WHERE ?',
  showSkills: 'SELECT * FROM skills WHERE user_id = ?',
}