require('dotenv').config()
const Pool = require('pg').Pool;

const db_name = process.env.DB_NAME;
const pg_password = process.env.PG_PASSWORD;

const pool = new Pool({
    user: 'postgres',
    password: pg_password,
    host: 'localhost',
    port: 5433,
    database: db_name
})

module.exports = pool