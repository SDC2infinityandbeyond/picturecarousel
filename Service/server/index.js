require('newrelic');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../database/postgres/index');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');


const PORT = 3008;

// const {getImage} = require('./controller.js')

//middleware
app.use(cors());  //need npm i cors
app.use(express.json())

// app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/', expressStaticGzip(path.join(__dirname, '../client/dist')))


app.get('/property/:propertyId', db.getPropertyById);
app.get('/property/:propertyId/images', db.getAllImagesOfProperty);
app.get('/property/:propertyId/images/:imageId', db.getOneImageOfProperty);
app.post('/property', db.postProperty);
app.post('/property/:propertyId/images', db.postPropertyImage);




//routes
// app.get('/carousel', async (req, res) => {
//   try {
//     const image = await pool.query('SELECT * FROM imageArray')
//     res.json(image)
//   } catch (err) {
//     console.error(err.message)
//   }
// });




app.listen(PORT, console.log(`Server listening on port ${PORT}`))