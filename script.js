document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // champs vides
    if (email === "" || password === "") {
      alert("Tous les champs sont obligatoires");
      return;
    }

    // email valide
    if (!email.includes("@") || !email.includes(".com")) {
      alert("Email invalide");
      return;
    }

    // mot de passe
    if (password.length <= 6) {
      alert("Mot de passe > 6 caractères");
      return;
    }

    // ✅ CONNEXION VALIDÉE
    localStorage.setItem("isLoggedIn", "true");

    // REDIRECTION FORCÉE
    window.location.href = "dashboard.html";
  });

});
