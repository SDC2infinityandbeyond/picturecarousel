# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```



## Server API

### Get property
  * GET `/property/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `200`

**Returns:** JSON
```json
    {
      "propertyId": "Number",
      "hostName": "String",
      "hostStatus": "String",
      "city": "String",
      "country": "String",
      "propertyType": "String",
      "propertyName": "String",
      "guests": "Number",
      "bedrooms": "Number",
      "beds": "Number",
      "baths": "Number",
      "propertyDescription": "String",
    }
```
### Get all pictures
  * GET `/property/:propertyId/images`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "propertyId": "Number",
      "imageUrl": "String"
    }
```

### Get one picture
  * GET `/property/:propertyId/images/:imageId`

**Path Parameters:**
  * `propertyId` property id
  * `imageId`    images id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "propertyId": "Number",
      "imageId": "Number",
      "imageDescription": "String",
      "imageUrl": "String"
    }
```


### Add property
  * POST `/property`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "hostName": "String",
      "hostStatus": "String",
      "city": "String",
      "country": "String",
      "propertyType": "String",
      "propertyName": "String",
      "guests": "Number",
      "bedrooms": "Number",
      "beds": "Number",
      "baths": "Number",
      "propertyDescription": "String"
    }
```

### Add picture
  * POST `/property/:propertyId/images`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "propertyId": "Number",
      "imageUrl": "String",
      "imageDescription": "String"
    }
```

### Update property info
  * PATCH `/property/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `200`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "hostName": "String",
      "hostStatus": "String",
      "propertyType": "String",
      "propertyName": "String",
      "guests": "Number",
      "bedrooms": "Number",
      "beds": "Number",
      "baths": "Number",
      "propertyDescription": "String"
    }
```

### Update image info
  * PATCH `/property/:propertyId/images/:imageId`

**Path Parameters:**
  * `propertyId` property id
  * `imageId`   images id

**Success Status Code:** `200`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "propertyID": "Number",
      "imageID": "Number",
      "imageUrl": "String",
      "imageDescription": "String"
    }
```


### Delete property
  * DELETE `/property/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `204`

### Delete image
  * DELETE `/property/:propertyId/images/:imageId`

**Path Parameters:**
  * `propertyId` property id
  * `imageId`   images id

**Success Status Code:** `204`
