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

### Get host
  * GET `/host/:hostID`

**Path Parameters:**
  * `hostID` host id

**Success Status Code:** `200`

**Returns:** JSON
```json
    {
      "hostName": "String",
      "hostStatus": "String",
      "joinDate": "Date"
    }
```

### Get property
  * GET `/property/:propertyID`

**Path Parameters:**
  * `propertyID` property id

**Success Status Code:** `200`

**Returns:** JSON
```json
    {
      "propertyId": "Number",
      "propertyName": "String",
      "city": "String",
      "usState": "String",
      "country": "String",
      "guests": "Number",
      "bedrooms": "Number",
      "beds": "Number",
      "baths": "Number",
      "propertyDescription": "String",
      "hostStatus": "String",
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
  * `imageID`    images id

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


### Add host
  * POST `/host`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "hostName": "String",
      "hostStatus": "String",
      "joinDate": "Date"
    }
```

### Add property
  * POST `/property`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "hostID": "String",
      "propertyName": "String",
      "city": "String",
      "usState": "String",
      "country": "String",
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
      "imageDescription": "String",
      "imageUrl": "String"
    }
```

### Update host info
  * PATCH `/host:hostID`

**Path Parameters:**
  * `hostID` host id

**Success Status Code:** `200`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "hostName": "String",
      "hostStatus": "String",
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
      "hostID": "String",
      "propertyName": "String",
      "guests": "Number",
      "bedrooms": "Number",
      "beds": "Number",
      "baths": "Number",
      "propertyDescription": "String"
    }
```

### Update image info
  * PATCH `/property/:propertyId/images/:imageID`

**Path Parameters:**
  * `propertyId` property id
  * `imageID`   images id

**Success Status Code:** `200`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "propertyID": "Number",
      "imageID": "Number",
      "imageDescription": "String",
      "imageUrl": "String"
    }
```


### Delete host
  * DELETE `/host/:hostId`

**Path Parameters:**
  * `hostId` host id

**Success Status Code:** `204`

### Delete image
  * DELETE `/property/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `204`

### Delete image
  * DELETE `/property/:propertyId/images/:imageID`

**Path Parameters:**
  * `propertyId` property id
  * `imageID`   images id

**Success Status Code:** `204`
