const express = require("express");

const uploadMulter = require("../Middleware/multer");
const validation = require("../Middleware/validation");

const {
  addProduct,
  productShow,
  editProductShow,
  deletePro,
  EditPostDetails,
  editProductGetDetail,
} = require("../controllers/adminRouterControl");
const router = express.Router();

router.route("/addProduct", uploadMulter, validation).post(addProduct);
//show product
router.route("/productShow").get(productShow);

//edit Product
router.route("/editProductShow/").get(editProductShow);

//deletePro
router.route("/deletePro/").delete(deletePro);

//EditPostDetails
router
  .route("/EditPostDetails/", uploadMulter, validation)
  .put(EditPostDetails);

//editProductGetDetail
router.route("/editProductGetDetail/").get(editProductGetDetail);

module.exports = router;
