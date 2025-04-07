const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nom: String,
  description: String,
  prix: Number,
  categorie: String,
  image: String
});

module.exports = mongoose.model("Product", productSchema);
