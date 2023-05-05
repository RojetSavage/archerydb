import mysql from 'mysql';


// const db = mysql.createConnection({
// 	host:"dev-env.c6jvdejtnssc.ap-southeast-2.rds.amazonaws.com",
// 	user:"root",
// 	password:"password!1!1",
// 	database:"archerydb"
// })

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"password",
	database:"archerydb"
})


db.connect((err) => {
	if (err) throw err;
	console.log("Connected")
})

export default db;