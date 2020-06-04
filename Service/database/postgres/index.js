const Pool = require('pg').Pool;
require('dotenv').config();

const psqlURL = process.env.DB_URL || 'localhost'

const pool = new Pool({
  user: process.env.DB_USER || 'minjigwak',
  host: psqlURL,
  database: 'airbnbcarousel',
  password: process.env.DB_PWD || '123',
  port: 5432,
})


// get property /property/:propertyId
const getPropertyById = (req, res) => {
  const propertyId = Number(req.params.propertyId);

  pool.query(`SELECT * FROM property WHERE propertyId=$1`, [propertyId], (err, results) => {
    if (err) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get all pictures of a property /property/:propertyId/images
const getAllImagesOfProperty = (req, res) => {
  const propertyId = Number(req.params.propertyId);

  pool.query(`SELECT * FROM imagearray WHERE propertyId=$1`, [propertyId], (err, results) => {
    if (err) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// get one picture from a property /property/:propertyId/images/:imageId
const getOneImageOfProperty = (req, res) => {
  const propertyId = Number(req.params.propertyId);
  const imageId = Number(req.params.imageId);

  pool.query(`SELECT * FROM imagearray WHERE propertyId=$1 AND imageId=$2`, [propertyId, imageId], (err, results) => {
    if (err) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}


// post a property /property
const postProperty = (req, res) => {
  const {hostName, hostStatus, city, country, propertyType, propertyName, guests, bedrooms, beds, baths, propertyDescription} = req.body;

  pool.query(`INSERT INTO property (hostName, hostStatus, city, country, propertyType, propertyName, guests, bedrooms, beds, baths, propertyDescription) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, [hostName, hostStatus, city, country, propertyType, propertyName, guests, bedrooms, beds, baths, propertyDescription], (err, results) => {
    if (err) {
      throw error
    }
    res.status(201).send('Property added!')
  })
}

// post a picture of a property /property/:propertyId/images
const postPropertyImage = (req, res) => {
  const {propertyId, imageDescription, imageUrl} = req.body;

  pool.query(`INSERT INTO imagearray (propertyId, imageDescription, imageUrl) VALUES ($1, $2, $3)`, [propertyId, imageDescription, imageUrl], (err, results) => {
    if (err) {
      throw error
    }
    res.status(201).send('Image added!')
  })
}


module.exports = {
  // pool,
  getPropertyById,
  getAllImagesOfProperty,
  getOneImageOfProperty,
  postProperty,
  postPropertyImage,
};


// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new Client({
//   user: 'minjigwak',
//   host: 'localhost',
//   password: '123',
//   database: 'airbnbcarousel',
//   port: 5432,
// })

// client.connect((error) => {
//   if (error) {
//     console.log('Connection to psql failed', error);
//   } else {
//     console.log('Connection to psql successful')
//   }
// })

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err,res)
//   client.end()
// })

// module.exports = client;
