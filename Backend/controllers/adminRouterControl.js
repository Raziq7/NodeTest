const asyncHandler = require("express-async-handler");
const Product = require("../Model/ProductModel");
const { ObjectId } = require("bson");

module.exports = {
  addProduct: asyncHandler(async (req, res) => {
    let { name, description, brand, price, discount, shipping } = req.body.obj;
    let { image } = req.body;

    console.log(price, "pricepricepriceprice");
    price = parseInt(price);
    discount = parseInt(discount);
    shipping = parseInt(shipping);

    let exist = await Product.findOne({ ProductName: name });
    // console.log(exist, "existexist");

    if (exist) {
      res.status(401);
      throw new Error("Product Already Exist");
    } else {
      var discountPrice = price - (price * discount) / 100;
      let currentPrice = discountPrice + shipping;
      currentPrice = parseInt(currentPrice.toFixed(2));
      console.log(currentPrice);

      let product = await Product.create({
        ProductName: name,
        description,
        brand,
        currentPrice,
      });
      console.log(image, "currentPricecurrentPrice");
      image.forEach((element, index) => {
        var base64Data = element.replace(/^data:image\/png;base64,/, "");

        require("fs").writeFile(
          `./frontend/public/uploads/${product._id + index}.png`,
          base64Data,
          "base64",
          function (err) {
            console.log(err);
          }
        );
      });
      console.log(product, "productproductproduct");
      res.json(product);
    }
  }),

  productShow: asyncHandler(async (req, res) => {
    try {
      let exist = await Product.find({});
      console.log(exist, "userInfouserInfouserInfo");
      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  editProductShow: asyncHandler(async (req, res) => {
    try {
      let { id } = req.query;
      console.log(id, "userInfouserInfouserInfo");
      let exist = await Product.findOne({ _id: id });
      console.log(exist, "userInfouserInfouserInfo");

      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  deletePro: asyncHandler(async (req, res) => {
    try {
      let { id } = req.query;
      console.log(id, "userInfouserInfouserInfo");
      let exist = await Product.deleteOne({ _id: id });
      console.log(exist, "userInfouserInfouserInfo");

      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  EditPostDetails: asyncHandler(async (req, res) => {
    try {
      console.log(req.query.id);
      let id = req.query.id;
      let { _id, ProductName, description, brand, currentPrice } =
        req.body.detail;
      let exist = await Product.updateOne(
        { _id: id },
        {
          $set: { ProductName, description, brand, currentPrice },
        }
      );
      console.log(exist, "userInfouserInfouserInfo");

      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  editProductGetDetail: asyncHandler(async (req, res) => {
    let { id } = req.query;
    console.log(id);
    let details = await Product.findById(id);

    res.json(details);
  }),
};
