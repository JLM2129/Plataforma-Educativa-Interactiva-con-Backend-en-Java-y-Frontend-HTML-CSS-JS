
const token = localStorage.getItem("token");

fetch("http://localhost:8080/api/protegida", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + token
  }
})
.then(response => {
  if (response.ok) return response.json();
  throw new Error("No autorizado");
})
.then(data => {
  console.log("Datos protegidos:", data);
})
.catch(error => {
  alert("Necesitas iniciar sesión");
  window.location.href = "login.html";
});



