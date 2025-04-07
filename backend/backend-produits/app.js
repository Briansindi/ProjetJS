const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5002;

// Connexion à MongoDB (base renommée)
mongoose.connect("mongodb://localhost:27017/mon-projet-js", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connecté"))
.catch(err => console.error("Erreur MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Dossier public pour les images
app.use("/MaillotsCAN", express.static(path.join(__dirname, "../Projet-Frontend-Complet/MaillotsCAN")));

// Routes API
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
