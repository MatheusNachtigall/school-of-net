var Products = require("../entity/products");

let Service = function (req, res, next) {
  let update = Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).exec();

  update
    .then((result) => {
      if (!result) {
        return res.status(400).json({ status: false, data: {} });
      }
      return res.status(200).json({ status: true, data: result });
    })
    .catch((error) => {
      return res.status(500).json({ status: false, data: error });
    });
};

module.exports = Service;
