--删除表
drop TABLE user_test;
--创建表
CREATE TABLE USER_INFO(
    USER_ID INT(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    USER_NAME VARCHAR(16) NOT NULL,
    USER_PASSWORD VARCHAR(32) NOT NULL,
	REAL_NAME CHAR(20)
    );
--    初始化数据
INSERT INTO user_info (user_name,user_password) VALUES ("hyq","123456");
--修改为自动增长
ALTER TABLE user_info AUTO_INCREMENT = 1;
-- 提示上级时 执行
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'