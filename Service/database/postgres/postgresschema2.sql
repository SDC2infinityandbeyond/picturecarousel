DROP DATABASE IF EXISTS airbnbcarousel;

CREATE DATABASE airbnbcarousel;

\c airbnbcarousel;

-- DROP TABLE IF EXISTS host;
DROP TABLE IF EXISTS property;
DROP TABLE IF EXISTS imagearray;

-- CREATE TABLE host(
--   hostId SERIAL PRIMARY KEY ,
--   hostName VARCHAR(255) NOT NULL,
--   hostStatus VARCHAR(255),
--   joinDate DATE NOT NULL
-- );

CREATE TABLE property(
   propertyId SERIAL PRIMARY KEY,
   -- hostId INTEGER REFERENCES host(hostId) NOT NULL,
   hostName VARCHAR(255) NOT NULL,
   hostStatus VARCHAR(255),
   city VARCHAR(255) NOT NULL,
   country VARCHAR(255) NOT NULL,
   propertyType VARCHAR(255) NOT NULL,
   propertyName VARCHAR(1000) NOT NULL,
   guests SMALLINT NOT NULL,
   bedrooms SMALLINT NOT NULL,
   beds SMALLINT NOT NULL,
   baths SMALLINT NOT NULL,
   propertyDescription TEXT NOT NULL
);

CREATE TABLE imagearray(
   imageId      SERIAL PRIMARY KEY,
   propertyId   INTEGER NOT NULL,
   imageDescription   VARCHAR(255),
   imageUrl           TEXT NOT NULL
);

-- propertyId INTEGER REFERENCES property(propertyId) NOT NULL
