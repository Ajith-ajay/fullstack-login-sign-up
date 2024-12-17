const sql = require('mysql2')

const connection = sql.createConnection({
    host : "localhost",
    user : "root",                //your sql user name (by default it is root for maany computer)
    password : 'password',        //change to your database password
    database : 'database name'    //your database name 
});

connection.connect((err)=>{
    if(err){
        console.error("Error on connecting the sql : ",err.message);
        return;
    }
    console.log('connected to mysql database!');
});

module.exports = connection;
