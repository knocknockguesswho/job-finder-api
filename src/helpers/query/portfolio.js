module.exports = {
  editPortfolio: 'UPDATE portfolio SET ? WHERE id = ?',
  insertPortfolio: 'INSERT INTO portfolio SET ?',
  deletePortfolio: 'DELETE FROM portfolio WHERE id = ?',
  showPortfolio: 'SELECT * FROM portfolio WHERE user_id = ? LIMIT ? OFFSET ?',
  getPortfolio: 'SELECT * FROM portfolio WHERE id = ?'
}