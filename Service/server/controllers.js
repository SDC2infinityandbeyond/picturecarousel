const models = require('../database/postgres/index.js');

const getAllImages = (req, res) => {
  models.getImages(req.params.id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results)
    }
  });
}

module.exports = getAllImages;