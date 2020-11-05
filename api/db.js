const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'experiment_database'
});
 
db.connect((err) => {
    if(err) throw err;
    console.log('数据库连接成功')
});

module.exports = db;
 
