const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  user: 'minjigwak',
  password: '',
  database: 'airbnbcarousel',
  port: '3003'
})

client.connect((error) => {
  if (error) {
    console.log('Connection to psql failed', error);
  } else {
    console.log('Connection to psql successful')
  }
})

module.exports = client;