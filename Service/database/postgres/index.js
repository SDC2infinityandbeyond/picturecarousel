const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'minjigwak',
  host: 'localhost',
  database: 'airbnbcarousel',
  password: '123',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'minjigwak',
  host: 'localhost',
  password: '123',
  database: 'airbnbcarousel',
  port: 5432,
})

client.connect((error) => {
  if (error) {
    console.log('Connection to psql failed', error);
  } else {
    console.log('Connection to psql successful')
  }
})

client.query('SELECT NOW()', (err, res) => {
  console.log(err,res)
  client.end()
})

module.exports = client;
module.exports = pool;