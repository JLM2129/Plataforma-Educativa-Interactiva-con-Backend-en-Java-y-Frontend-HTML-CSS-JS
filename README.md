# Plataforma Educativa Interactiva con Backend en Java y Frontend Moderno en React ⚛️

Este repositorio contiene el desarrollo de una plataforma educativa interactiva dirigida a estudiantes de primaria y secundaria, con módulos específicos para Matemáticas, Física y Química.

El **Frontend ha sido migrado a React (Vite)** para un desarrollo más moderno y escalable, mientras que el **Backend se mantiene desarrollado en Java (Spring Boot)**, con conexión a bases de datos MySQL.

---

## 🎯 Características Principales

- Navegación por subtemas en Matemáticas, Física y Química.
- **Interfaz de Usuario moderna y dinámica** gracias a React.
- Contenido organizado por módulos con actividades específicas.
- Juegos y ejercicios interactivos con retroalimentación visual y sonora.
- Sistema de registro y autenticación de usuarios (gestionado por React, interactuando con el Backend).
- Base de datos SQL para guardar usuarios y progreso.

---

## 🛠️ Tecnologías Usadas

### Frontend (Migrado)
- **React** (con Vite)
- **JavaScript** (ES6+)
- HTML5 / CSS3
- Visual Studio Code (entorno de desarrollo)

### Backend
- **Java 17**
- **Spring Boot** (controladores REST, seguridad, persistencia)
- **MySQL** (base de datos)
- **Maven** (gestión de dependencias)

### Otros recursos
- Imágenes educativas (carpeta `/imagenes`)
- Sonidos para interacción (carpeta `/sonido`)
- Scripts SQL (`/MySQL/crear tablas.sql`, `insertar informacion.sql`)

---

## 📁 Estructura del Proyecto

La estructura ahora incluye las carpetas del Frontend de React y las del Backend de Java/Spring Boot.

![image](https://github.com/user-attachments/assets/01f45e3e-d958-4633-9952-d51019f4a35b)

---

## 🚀 Guía de Ejecución

Para iniciar la plataforma, deberás ejecutar el Backend (Java) y el Frontend (React) por separado.

### 1. Configuración de la Base de Datos (MySQL)

1. Asegúrate de que tu servidor **MySQL** esté en ejecución.
2. Ejecuta los scripts SQL provistos en la carpeta `/MySQL`:
 - `crear tablas.sql`
 - `insertar informacion.sql`
3. Configura las credenciales de la base de datos en el archivo de configuración de Spring Boot.

### 2. Ejecución del Backend (Java/Spring Boot)

1. Abre el proyecto en tu IDE de Java (IntelliJ IDEA, Eclipse, etc.).
2. Asegúrate de que las dependencias de **Maven** estén resueltas.
3. Ejecuta la clase principal de la aplicación Spring Boot.

### 3. Ejecución del Frontend (React con Vite)

1. Navega a la carpeta raíz del repositorio en tu terminal:
   
   cd <ruta_del_repositorio>
   
2. Instala las dependencias de Node.js:

   npm install

3. Inicia el servidor de desarrollo de React:

   npm run dev

El frontend estará accesible en tu navegador (usualmente en http://localhost:5173/).

### 4. Flujo de Navegación

1. El usuario accede a la URL del Frontend de React.

2. El componente de React realiza peticiones API REST al Backend de Java.

3. El usuario navega a través de subtemas y selecciona una actividad.

4. Interactúa con ejercicios o juegos desarrollados con React.

5. Recibe retroalimentación instantánea, y su progreso se guarda vía API.

### Autor

Juan Carlos Locarno

Ingeniero químico y programador Junior, con pasión por la educación y la programación.