#!/bin/bash

psql airbnbcarousel -c "COPY property (propertyId, hostName, hostStatus, city, country, propertyType, propertyName, guests, bedrooms, beds, baths, propertyDescription) FROM '/Users/minjigwak/picturecarousel/Service/database/postgres/properties2.csv' DELIMITER ',' CSV HEADER;"

psql airbnbcarousel -c "COPY imagearray (imageId, propertyId, imageDescription, imageUrl) FROM '/Users/minjigwak/picturecarousel/Service/database/postgres/images2.csv' DELIMITER ',' CSV HEADER;"