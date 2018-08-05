// conf/db.js
// MySQL数据库联接配置
var mysql = require("mysql");
var db = {};
var mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hyq_test',
    port: 3306
};
db.query = function sqlback(sqlCall, callback) {
    var connection = mysql.createConnection(mysqlConfig);
    connection.connect((err) => {
        if (err) {
            console.log(err);
            return
        }
    });
    var sql = sqlCall;
    if (!sql) {
        return
    }
    connection.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return
        }
        callback(rows);
    });
    connection.end(function (err) {
        if (err) {
            console.log(err);
            return
        } else {
            console.log("链接关闭");
        }
    })
}
module.exports = db;