var Products = require("../entity/products");

var Service = function (req, res, next) {
  let product = new Products(req.body);

  product
    .save()
    .then((product) => {
      if (!product) {
        return res
          .status(404)
          .json({ status: false, data: { message: "Product not found" } });
      }
      return res.status(200).json({ status: true, data: product });
    })
    .catch((error) => {
      return res.status(500).json({ status: false, data: error });
    });
};

module.exports = Service;
