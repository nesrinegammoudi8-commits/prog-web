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
    return false; 
  }

  // Vérification du mot de passe
  if (pass !== confirm) {
    alert("Les mots de passe ne correspondent pas.");
    return false; 
  }

  // Vérification  de l'email
  if (!mail.includes("@")) {
    alert("Veuillez entrer un email valide.");
    return false; 
  }
   alert("Inscription réussie !");
  window.location.href = "dashbord.html";
  return false; 
}


function verifierLogin() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Veuillez remplir tous les champs.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Veuillez entrer un email valide.");
    return false;
  }

  return true; 
}

function login() {
  alert("Connexion réussie !");
  window.location.href = "dashbord.html"; // redirection
  return false; 
}
