document.getElementById("registroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const fechaNacimiento = document.getElementById("nacimiento").value;
  const anoEscolar = document.getElementById("escolar").value;
  const contraseña = document.getElementById("password").value;

  const response = await fetch("http://localhost:8080/api/usuarios/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, contraseña,fechaNacimiento,anoEscolar }),
  });

  const mensaje = document.getElementById("mensaje");

  if (response.ok) {
    mensaje.innerText = "¡Registro exitoso! Ahora inicia sesión.";
  } else {
    mensaje.innerText = "Error al registrarse.";
  }
});
