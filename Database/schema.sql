DROP DATABASE IF EXISTS airbnbcarousel;

CREATE DATABASE airbnbcarousel;

\c airbnbcarousel;

DROP TABLE IF EXISTS host;
DROP TABLE IF EXISTS property;
DROP TABLE IF EXISTS imagearray;

CREATE TABLE host(
  hostId SERIAL PRIMARY KEY,
  hostName VARCHAR(255),
  hostStatus VARCHAR(255),
  joinDate DATE
);

CREATE TABLE property(
   propertyId SERIAL PRIMARY KEY,
   hostId INTEGER REFERENCES host(hostId),
   propertyName VARCHAR(1000),
   city VARCHAR(255),
   usState VARCHAR(255),
   country VARCHAR(255),
   guests INTEGER,
   bedrooms INTEGER,
   beds INTEGER,
   baths INTEGER,
   propertyDescription VARCHAR(2000)
);

CREATE TABLE imagearray(
   imageId      SERIAL PRIMARY KEY,
   propertyId   INTEGER REFERENCES property(propertyId),
   imageUrl           VARCHAR(255),
   imageDescription   VARCHAR(255)
);

INSERT INTO property VALUES (0, 'Rock Reach House - as profiled in dwell');

INSERT INTO imagearray VALUES (0, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/0.jpg', 'Rock Reach House - mail floor');
INSERT INTO imagearray VALUES (1, 0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/1.jpg', 'Rock Reach House - dawn outside');
INSERT INTO imagearray VALUES (2, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/2.jpg', 'Rock Reach House - sunshine outter area');
INSERT INTO imagearray VALUES (3, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/3.jpg', 'Rock Reach House - outside Bathtub');
INSERT INTO imagearray VALUES (4, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/4.jpg', 'Rock Reach House - noon house overview');
INSERT INTO imagearray VALUES (5, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/5.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (6, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/6.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (7, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/7.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (8, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/8.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (9, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/9.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (10, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/10.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (11, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/11.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (12, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/12.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (13, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/13.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (14,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/14.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (15,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/15.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (16,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/16.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imagearray VALUES (17,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/17.jpg', 'Rock Reach House - as profiled in dwell');
