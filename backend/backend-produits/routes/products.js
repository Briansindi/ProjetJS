const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Obtenir tous les produits
router.get("/", async (req, res) => {
  try {
    const produits = await Product.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
