const mysql = require("mysql2") ; 

const pool = mysql.createPool({
            host : 'localhost' , 
            user : 'root' , 
            database : 'mydb' , 
            password : '1324', 
});
module.exports = pool.promise() ; 
