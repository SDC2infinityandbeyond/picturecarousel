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
   propertyName VARCHAR(1000) NOT NULL,
   city VARCHAR(255) NOT NULL,
   usState VARCHAR(255),
   country VARCHAR(255) NOT NULL,
   propertyType VARCHAR(255) NOT NULL,
   guests INTEGER NOT NULL,
   bedrooms INTEGER NOT NULL,
   beds INTEGER NOT NULL,
   baths INTEGER NOT NULL,
   propertyDescription VARCHAR(2000) NOT NULL
);

CREATE TABLE imagearray(
   imageId      SERIAL PRIMARY KEY,
   propertyId   INTEGER NOT NULL,
   imageDescription   TEXT,
   imageUrl           TEXT NOT NULL
);
