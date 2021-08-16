const Pool=require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password: '2020sucks',
    host: 'localhost',
    port: 5432,
    database: 'empdept',
    idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0
});

module.exports=pool;