const mongoose = require('mongoose');

const CarouselSchema = new mongoose.Schema({
  propertyId: {
    type: Number,
    unique: true,
    required: true
  },
  host: {
    hostName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255
    },
    hostStatus: String,
    // joinDate: {
    //   type: Date,
    //   required: true,
    //   default: () => new Date()
    // }
  },
  images: [{
    imageId: {
      type: Number,
      unique: true,
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000
    },
    imageDescription: String
  }],
  propertyName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  usState: String,
  country: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  propertyType: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
    max: 16
  },
  bedrooms: {
    type: Number,
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  baths: {
    type: Number,
    required: true
  },
  propertyDescription: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2000
  }
});

const Carousel = mongoose.model('Carousel', CarouselSchema);

module.exports.CarouselSchema = CarouselSchema;
module.exports.Carousel = Carousel;