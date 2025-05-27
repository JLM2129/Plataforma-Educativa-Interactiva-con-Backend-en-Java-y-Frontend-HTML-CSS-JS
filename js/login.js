document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const contraseña = document.getElementById("password").value;

  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, contraseña }),
  });

  const mensaje = document.getElementById("mensaje");

  if (response.ok) {
    const token = await response.text();
localStorage.setItem("token", token);

    mensaje.innerText = "Inicio de sesión exitoso.";
    window.location.href = "/usuario.html";
  } else {
    mensaje.innerText = "Credenciales incorrectas.";
  }
});
