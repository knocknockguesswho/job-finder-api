module.exports = { 
  showDetails: 'SELECT u.id, u.email, u.name, u.phone, p.avatar, p.fullname, p.job_title, p.domicile, p.work_place, p.self_description FROM user u LEFT JOIN profile p ON u.id=p.user_id ORDER BY ? LIMIT 3 OFFSET ?'
};
