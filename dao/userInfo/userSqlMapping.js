// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert:'INSERT INTO user_info(user_id, user_name, user_password,real_name) VALUES(0,?,?,?)',
    update:'update user_info set user_name=?, user_password=?,real_name=? where user_id=?',
    delete: 'delete from user_info where user_id=?',
    queryById: 'select * from user_info where user_id=?',
    queryAll: 'select * from user_info'
};

module.exports = user;