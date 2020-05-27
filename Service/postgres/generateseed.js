const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const seedsize = 3000000;

const propertyWriter = createCsvWriter({
  path: 'property.csv',
  header: [
    {id: 'propertyid', title: 'PropertyId'},
    {id: 'hostname', title: 'HostName'},
    {id: 'hoststatus', title: 'HostStatus'},
    {id: 'city', title: 'City'},
    {id: 'usstate', title: 'UsState'},
    {id: 'country', title: 'Country'},
    {id: 'propertytype', title: 'PropertyType'},
    {id: 'propertyname', title: 'PropertyName'},
    {id: 'guests', title: 'Guests'},
    {id: 'bedrooms', title: 'Bedrooms'},
    {id: 'beds', title: 'Beds'},
    {id: 'baths', title: 'Baths'},
    {id: 'propertydescription', title: 'Propertydescription'},
  ]
});

const imageWriter = createCsvWriter({
  path: 'image.csv',
  header: [
    {id: 'imageid', title: 'Imageid'},
    {id: 'imageurl', title: 'Imageurl'},
    {id: 'imagedescription', title: 'Imagedescription'}
  ]
});

var hostStatus = ['Null', 'Superhost'];
var propertynamerandom = ['Ocean Front', 'Beautiful', 'Sunny', 'Magical', 'Renovated', 'Cute', 'Stunning', 'Stylish', 'Amazing', 'Spacious', 'Ocean view', 'Clean', 'Modern', 'Private', 'Dreamy', 'Gorgeous', 'Idyllic', 'A slice of', 'Jewel', 'Cozy', 'Peaceful', '5 star', 'Lovely', 'Charming', 'Newly renovated', 'Sanitized', 'New!'];
var propertytyperandom = ['Apartment', 'Condomonium', 'Loft', 'Serviced apartment', 'House', 'Bungalow', 'Cabin', 'Chalet', 'Cottage', 'Dome house', 'Earth house', 'Farm stay', 'Houseboat', 'Hut', 'Lighthouse', 'Tiny house', 'Townhouse', 'Villa', 'Guest house', 'Guest stay', 'Barn', 'Boat', 'Bus', 'Camper/RV', 'Campsite', 'Castle', 'Cave', 'Hut', 'Igloo', 'Island', 'Lighthouse', 'Plane', 'Tent', 'Tipi', 'Train', 'Treehouse', 'Windmill', 'Yurt', 'Bed and breakfast', 'Nature lodge', 'Boutique hotel', 'Aparthotel', 'Hostel', 'Hotel', 'Resort'];
const propertydata = [];
const generateProperty = () => {
  for (let j = 0; j < seedsize; j++) {
    let propertyRandom = {};
    propertyRandom.propertyid = j+1;
    hostRandom.hostname = `${faker.name.firstName()} ${faker.name.lastName()}`;
    hostRandom.hoststatus = faker.random.arrayElement(hostStatus);
    propertyRandom.city = faker.address.city();
    propertyRandom.usstate = faker.address.state();
    propertyRandom.country = faker.address.country();
    propertyRandom.propertytype = faker.random.arrayElement(propertytyperandom);
    propertyRandom.propertyname = `${faker.random.arrayElement(propertynamerandom)} ${propertyRandom.propertytype} in ${propertyRandom.city}`;
    propertyRandom.guests = faker.random.number({min:1, max:16});
    propertyRandom.bedrooms = faker.random.number({min: 1, max: 15});
    propertyRandom.beds = faker.random.number({min: 1, max: 15});
    propertyRandom.baths = faker.random.number({min: 1, max: 15});
    propertyRandom.propertydescription = faker.lorem.sentences();
    propertydata.push(propertyRandom);
  }
}

const imagedata = [];
const generateImage = () => {
  for (let k = 0; k < seedsize; k++) {
    let imageRandom = {};
    imageRandom.imageid = k+1;
    const generateUrl = () => {
      let imageArr = [];
      let numberofPics = faker.random.number({min: 5, max: 10});
      for (let l = 0; l < numberofPics; l++) {
        imageArr.push('http://loremflickr.com/729/548/hotel');
      }
      return imageArr;
    };
    imageRandom.imageurl = generateUrl();
    imageRandom.imagedescription = faker.lorem.sentences();
    imagedata.push(imageRandom);
  }
}

const timeStamp = () => {
  console.log(new Date());
  generateProperty();
  generateImage();
}

timeStamp();

propertyWriter
.writeRecords(propertydata)
.then(()=> console.log('The Property CSV file was written successfully!', new Date()))

imageWriter
.writeRecords(imagedata)
.then(()=> console.log('The Image CSV file was written successfully!', new Date()))