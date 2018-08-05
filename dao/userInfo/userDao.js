var $mysql = require("../../config/db");
var $conf = require("../../config/db");
var $sql = require("./userSqlMapping");

module.exports = {
    queryAllDao: (callback) => {
        $mysql.query($sql.queryAll, function (res) {
            callback(res)
        })
    }
};