const db = require('./index.js');

const getImages = (imageId, callback) => {
  const query = `SELECT * FROM imagearray WHERE imageId=${imageId}`;
  db.query(query, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  });
}

module.exports = getImages;
