function verifierInscription() {
  // Récupération des valeurs
  let nom = document.getElementById("nom").value.trim();
  let prenom = document.getElementById("prenom").value.trim();
  let mail = document.getElementById("mail").value.trim();
  let pass = document.getElementById("pass").value.trim();
  let confirm = document.getElementById("confirm").value.trim();

  // Vérification des champs vides
  if (nom === "" || prenom === "" || mail === "" || pass === "" || confirm === "") {
    alert("Veuillez remplir tous les champs.");
    return false; // Empêche l'envoi du formulaire
  }

  // Vérification du mot de passe
  if (pass !== confirm) {
    alert("Les mots de passe ne correspondent pas.");
    return false; // Empêche l'envoi du formulaire
  }

  // Vérification simple de l'email
  if (!mail.includes("@")) {
    alert("Veuillez entrer un email valide.");
    return false; 
  }
}
function verifierLogin() {
  // Récupération des valeurs
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Vérification des champs vides
  if (email === "" || password === "") {
    alert("Veuillez remplir tous les champs.");
    return false; // Empêche l'envoi du formulaire
  }

  // Vérification simple de l'email
  if (!email.includes("@")) {
    alert("Veuillez entrer un email valide.");
    return false;
  }

  // Pour la démo : on autorise tout mot de passe
  alert("Connexion réussie !");
  window.location.href = "dashboard.html"; // Redirection vers le dashboard
  return false; // Empêche le rechargement du formulaire
}
