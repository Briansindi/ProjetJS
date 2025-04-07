// ✅ Affichage dynamique de l'utilisateur connecté
document.addEventListener("DOMContentLoaded", () => {
  const userDisplay = document.getElementById("user-display");
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (userDisplay) {
    if (user) {
      userDisplay.innerHTML = `
        <span style="font-weight:bold;">👋 ${user.prenom} ${user.nom}</span>
        <button onclick="logout()" style="margin-left: 10px;">Déconnexion</button>
      `;
    } else {
      userDisplay.innerHTML = `
        <a href="login.html"><img src="MaillotsCAN/Logo-user.jpeg" alt="Compte" /></a>
      `;
    }
  }

  // ✅ Chargement du panier si page panier.html
  if (window.location.pathname.includes("panier.html")) {
    afficherPanier();
  }
});

// ✅ Déconnexion
function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

// ✅ Gestion du panier local (stocké par utilisateur)
function getPanier() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return [];
  const panierKey = `panier_${user.email}`;
  return JSON.parse(localStorage.getItem(panierKey) || "[]");
}

function savePanier(panier) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return;
  const panierKey = `panier_${user.email}`;
  localStorage.setItem(panierKey, JSON.stringify(panier));
}

// ✅ Ajouter un produit au panier
function ajouterAuPanier(produit) {
  const panier = getPanier();
  const existant = panier.find(p => p.id === produit.id);
  if (existant) {
    existant.quantite += 1;
  } else {
    produit.quantite = 1;
    panier.push(produit);
  }
  savePanier(panier);
  alert("Produit ajouté au panier !");
}

// ✅ Affichage du panier sur la page panier.html
function afficherPanier() {
  const panier = getPanier();
  const panierContainer = document.getElementById("panier-container");
  const totalContainer = document.getElementById("total-panier");

  if (!panierContainer) return;

  panierContainer.innerHTML = "";

  if (panier.length === 0) {
    panierContainer.innerHTML = "<p>Votre panier est vide.</p>";
    totalContainer.textContent = "";
    return;
  }

  let total = 0;

  panier.forEach((item, index) => {
    const ligne = document.createElement("div");
    ligne.className = "ligne-produit";
    ligne.innerHTML = `
      <img src="${item.image}" alt="${item.nom}" width="80">
      <div>${item.nom}</div>
      <div>${item.prix.toFixed(2)} €</div>
      <div>Quantité: ${item.quantite}</div>
      <button onclick="supprimerDuPanier(${index})">❌ Supprimer</button>
    `;
    panierContainer.appendChild(ligne);
    total += item.prix * item.quantite;
  });

  totalContainer.textContent = `Total : ${total.toFixed(2)} €`;
}

// ✅ Supprimer un article du panier
function supprimerDuPanier(index) {
  const panier = getPanier();
  panier.splice(index, 1);
  savePanier(panier);
  afficherPanier();
}
