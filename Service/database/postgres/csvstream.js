const faker = require('faker');
const fs = require('fs');
const first_names = require('./hostname.js');
const image_url = require('./images.js');
const countryName = require('./territoryName.js');
const cityName = require('./territoryName.js');

const writeProperties = fs.createWriteStream('./database/postgres/properties2.csv');
writeProperties.write('propertyid, hostname, hoststatus, city, country, propertytype, propertyname, guests, bedrooms, beds, baths, propertydescription\n', 'utf8');

const writeImages = fs.createWriteStream('./database/postgres/images2.csv');
writeImages.write('imageid, propertyId, imagedescription, imageurl\n', 'utf8');

const datasize = 10000000;

const hostStatus = ['Null', 'Superhost'];
const propertyName = ['Ocean Front', 'Beautiful', 'Sunny', 'Magical', 'Renovated', 'Cute', 'Stunning', 'Stylish', 'Amazing', 'Spacious', 'Ocean view', 'Clean', 'Modern', 'Private', 'Dreamy', 'Gorgeous', 'Idyllic', 'A slice of', 'Jewel', 'Cozy', 'Peaceful', '5 star', 'Lovely', 'Charming', 'Newly renovated', 'Sanitized', 'New!'];
const propertyType = ['Apartment', 'Condomonium', 'Loft', 'Serviced apartment', 'House', 'Bungalow', 'Cabin', 'Chalet', 'Cottage', 'Dome house', 'Earth house', 'Farm stay', 'Houseboat', 'Hut', 'Lighthouse', 'Tiny house', 'Townhouse', 'Villa', 'Guest house', 'Guest stay', 'Barn', 'Boat', 'Bus', 'Camper/RV', 'Campsite', 'Castle', 'Cave', 'Hut', 'Igloo', 'Island', 'Lighthouse', 'Plane', 'Tent', 'Tipi', 'Train', 'Treehouse', 'Windmill', 'Yurt', 'Bed and breakfast', 'Nature lodge', 'Boutique hotel', 'Aparthotel', 'Hostel', 'Hotel', 'Resort'];
//let propertyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15, 16];


function writeLotsOfProperties(writer, encoding, callback) {
  console.log('property start', datasize, new Date());
  let i = datasize;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const hostname = faker.random.arrayElement(first_names);
      const hoststatus = faker.random.arrayElement(hostStatus);
      const city = faker.random.arrayElement(cityName);
      const country = faker.random.arrayElement(countryName);
      const propertytype = faker.random.arrayElement(propertyType);
      const propertyname = `${faker.random.arrayElement(propertyName)} ${propertytype} in ${city}`;
      const guests = faker.random.number({min:1, max:16});
      const bedrooms = faker.random.number({min: 1, max: 15});
      const beds = faker.random.number({min: 1, max: 15});
      const baths = faker.random.number({min: 1, max: 15});
      const propertydescription = faker.lorem.words();
      const data = `${id},${hostname},${hoststatus},${city},${country},${propertytype},${propertyname},${guests},${bedrooms},${beds},${baths},${propertydescription}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

writeLotsOfProperties(writeProperties, 'utf-8', () => {
  writeProperties.end();
  console.log('The Property2 CSV file was written successfully!', new Date())
});

//imageid, imageurl, imagedescription
function writeLotsOfImages(writer, encoding, callback) {
  console.log('image start', new Date());
  let i = datasize*10;
  let id = 0;
  let imageIndex = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const propertyId = faker.random.number({min:1, max:datasize});
      const imagedescription = faker.lorem.word();
      const imageurl = faker.random.arrayElement(image_url);
      const data = `${id},${propertyId},${imagedescription},${imageurl}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

writeLotsOfImages(writeImages, 'utf-8', () => {
  writeImages.end();
  console.log('The Image2 CSV file was written successfully!', new Date())
});
