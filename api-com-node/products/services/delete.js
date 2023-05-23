var Products = require("../entity/products");

let Service = function (req, res, next) {
  const deleted = Products.findByIdAndDelete(req.params.id).exec();

  deleted
    .then((result) => {
      if (!result) {
        return res.status(404).json({ status: false, data: {} });
      }
      return res.status(200).json({ status: true, data: result });
    })
    .catch((error) => {
      return res.status(500).json({ status: false, data: error });
    });
};

module.exports = Service;
