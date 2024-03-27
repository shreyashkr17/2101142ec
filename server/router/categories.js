const express = require("express");
const getAllProducts = require("../controller/getAllProduct");
const getSingleProduct = require("../controller/getSingleProduct");

const router = express.Router();

router.get("/:categoryname/products", getAllProducts);

router.get("/:categoryname/products/:productid", getSingleProduct);

module.exports = router;
