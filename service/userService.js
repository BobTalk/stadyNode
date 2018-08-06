var $userDao = require("../dao/userInfo/userDao");
var $util = require("../utils/common");
module.exports = {
    queryAllService: function (req, res) {
        return $userDao.queryAllDao((result) => {
            res.json({
                data: result,
                code: $util.stateCode.success,
                meta: {}
            })
        })
    }
};