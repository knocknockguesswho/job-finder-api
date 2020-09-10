module.exports={
  insertWorkExp: 'INSERT INTO work_experiences SET ?',
  deleteWorkExp: 'DELETE FROM work_experiences WHERE id = ?',
  editWorkExp: 'UPDATE work_experiences SET ? WHERE id = ?',
  showWorkExp: 'SELECT * FROM work_experiences WHERE user_id = ?'
}