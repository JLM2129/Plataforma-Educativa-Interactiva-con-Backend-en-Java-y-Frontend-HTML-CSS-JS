import { useState } from "react";
import styles from "../../styles/auth.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegistroUsuario() {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const fechaNacimiento = e.target.nacimiento.value;
    const anoEscolar = e.target.escolar.value;
    const contraseña = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:8080/api/usuarios/registro", {
        nombre,
        email,
        contraseña,
        fechaNacimiento,
        anoEscolar
      });

      setMensaje("✅ ¡Registro exitoso! Ahora inicia sesión.");
      e.target.reset();

    } catch (error) {
      console.error("Error en el registro:", error);

      if (error.response) {
        const status = error.response.status;
        const mensajeBackend = error.response.data;

        if (status === 400) {
          setMensaje(`❌ Datos inválidos: ${mensajeBackend}`);
        } else if (status === 409) {
          setMensaje("❌ Ya existe un usuario con ese correo.");
        } else {
          setMensaje(`⚠️ Error del servidor: ${mensajeBackend}`);
        }
      } else {
        setMensaje("⚠️ No se pudo conectar con el servidor.");
      }
    }
  };

  return (
    <div className={styles.authContainer}>
      <img src="/logo.jpg" alt="logo Ciencia Loca" className={styles.logo} />
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="nombre" className={styles.input} placeholder="Nombre completo" required />
        <input type="email" name="email" className={styles.input} placeholder="Correo electrónico" required />
        <input type="date" name="nacimiento" className={styles.input} required />
        <input type="text" name="escolar" className={styles.input} placeholder="Año escolar" required />
        <input type="password" name="password" className={styles.input} placeholder="Contraseña" required />
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
      <p className={styles.mensaje}>{mensaje}</p>
      <Link to="/login" className={styles.link}>¿Ya tienes cuenta? Inicia sesión</Link>
    </div>
  );
}
