import { useState } from "react";
import styles from "../../styles/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginUsuario() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        contraseña
      });

      const token = response.data;
      localStorage.setItem("token", token);
      setMensaje("✅ Inicio de sesión exitoso.");
      navigate("/usuario");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      // Validación de errores del backend
      if (error.response) {
        const status = error.response.status;
        const mensajeBackend = error.response.data;

        if (status === 404) {
          setMensaje("❌ Usuario no encontrado.");
        } else if (status === 401) {
          setMensaje("❌ Contraseña incorrecta.");
        } else {
          setMensaje(`⚠️ Error del servidor: ${mensajeBackend}`);
        }
      } else {
        // Error de red u otro problema
        setMensaje("⚠️ No se pudo conectar con el servidor.");
      }
    }
  };

  return (
    <div className={styles.authContainer}>
      <img src="/logo.jpg" alt="logo Ciencia Loca" className={styles.logo} />
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Iniciar sesión</button>
      </form>
      <p className={styles.mensaje}>{mensaje}</p>
      <Link to="/registro" className={styles.link}>¿No tienes cuenta? Regístrate</Link>
    </div>
  );
}
