const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connexion à MongoDB réussie');
  app.listen(process.env.PORT, () => {
    console.log('🚀 Serveur lancé sur le port ' + process.env.PORT);
  });
}).catch((err) => {
  console.error('❌ Erreur de connexion MongoDB :', err);
});