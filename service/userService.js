var userDao = require("../dao/userInfo/userDao");
module.exports = {
  queryAllService : function (req,res,next) {
      return userDao.queryAllDao((result)=>{
          res.json(result)
      })
  }  
};