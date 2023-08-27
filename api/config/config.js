const PORT = process.env.PORT || 3000;


const DB_HOST = process.env.DB_HOST || "bxdraymchrkn0xyjbvgs-mysql.services.clever-cloud.com";
const DB_USER = process.env.DB_USER || "u02ffgz5temaryfh";
const DB_DATABASE = process.env.DB_DATABASE || "bxdraymchrkn0xyjbvgs";
const DB_PASSWORD = process.env.DB_PASSWORD || "03pZkHz2WCnVzrdf9iD2";
const DB_PORT = process.env.DB_PORT || 3306;
const ADMIN_PASS = process.env.ADMIN_PASS;


module.exports = {
    PORT,
    DB_HOST,
    DB_USER,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    ADMIN_PASS
};