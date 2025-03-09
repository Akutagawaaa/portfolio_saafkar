const { Pool } = require('pg');
require("dotenv").config();
const pool = new Pool({
  user: 'postgres',
  host: 'database-1.cv80qi4u66ck.eu-north-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'antonettejuancadiz',
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
