// config/db.js
// MySQL数据库联接配置
let mysql = require("mysql");
let db = {};
let mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hyq_test',
    port: 3306
};
db.query = function sqlback(sqlCall, callback) {
    let connection = mysql.createConnection(mysqlConfig);
    connection.connect((err) => {
        if (err) {
            console.log(err);
            return
        }
    });
    let sql = sqlCall;
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
};
module.exports = db;