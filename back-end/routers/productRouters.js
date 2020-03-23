const express = require('express');
const router = express.Router();
const { productControllers } = require('../controllers');

// GET http://localhost:2020/product/getproducts
router.get('/getproducts', productControllers.getProducts)

// POST 
// UPDATE 
// DELETE

module.exports = router