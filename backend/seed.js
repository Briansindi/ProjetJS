const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mon-projet-js", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  id: Number, // ← champ personnalisé
  nom: String,
  description: String,
  prix: Number,
  categorie: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

const products = [
  { id: 1, nom: "T-shirt Homme Coton", description: "T-shirt 100% coton, coupe classique", prix: 19.99, categorie: "Homme", image: "tshirt-homme.jpg" },
  { id: 2, nom: "Jean Slim Homme", description: "Jean slim en denim bleu foncé", prix: 39.99, categorie: "Homme", image: "pantalonclassique.png" },
  { id: 3, nom: "Chemise à Carreaux", description: "Chemise à carreaux en flanelle, idéale pour l'hiver", prix: 24.99, categorie: "Homme", image: "chemise-homme.jpg" },
  { id: 4, nom: "Veste en Jean", description: "Veste en jean bleu classique", prix: 59.99, categorie: "Homme", image: "vesteenjean1.png" },

  { id: 5, nom: "Blouse Femme Chic", description: "Blouse fluide et élégante pour toutes les occasions", prix: 29.99, categorie: "Femme", image: "blouse-femme.jpg" },
  { id: 6, nom: "Pantalon Large Femme", description: "Pantalon coupe large en lin, très confortable", prix: 34.99, categorie: "Femme", image: "pantalon-femme.jpg" },
  { id: 7, nom: "Robe d'Été Fleurie", description: "Robe légère à fleurs, parfaite pour les journées ensoleillées", prix: 44.99, categorie: "Femme", image: "robe-femme.jpg" },
  { id: 8, nom: "Cardigan Tricoté", description: "Cardigan doux et chaud pour l'automne", prix: 39.99, categorie: "Femme", image: "cardigan-femme.jpg" },

  { id: 9, nom: "T-shirt Enfant Motif", description: "T-shirt coloré avec motifs amusants", prix: 14.99, categorie: "Enfant", image: "tshirt-enfant.jpg" },
  { id: 10, nom: "Short Enfant Été", description: "Short léger pour l'été, 100% coton", prix: 12.99, categorie: "Enfant", image: "short-enfant.jpg" },
  { id: 11, nom: "Pyjama Enfant", description: "Pyjama deux pièces confortable pour les nuits fraîches", prix: 17.99, categorie: "Enfant", image: "pyjama-enfant.jpg" },
  { id: 12, nom: "Sweat Enfant", description: "Sweat à capuche enfant avec motif animal", prix: 22.99, categorie: "Enfant", image: "sweat-enfant.jpg" },

  { id: 13, nom: "Sac à Main Cuir", description: "Sac à main en simili cuir avec bandoulière", prix: 49.99, categorie: "Accessoires", image: "sac-femme.jpg" },
  { id: 14, nom: "Casquette Classique", description: "Casquette unisexe en coton", prix: 15.99, categorie: "Accessoires", image: "casquette-homme.jpg" },
  { id: 15, nom: "Lunettes de Soleil", description: "Lunettes UV tendance unisexe", prix: 18.99, categorie: "Accessoires", image: "lunettes.jpg" },
];

Product.insertMany(products)
  .then(() => {
    console.log("Produits insérés avec succès !");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Erreur lors de l'insertion :", err);
    mongoose.connection.close();
  });
