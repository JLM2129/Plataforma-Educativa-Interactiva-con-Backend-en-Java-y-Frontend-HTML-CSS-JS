-- Crear tablas 
CREATE TABLE materias ( id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL ); 
 
CREATE TABLE temas ( id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL, id_materia INT, 
FOREIGN KEY (id_materia) REFERENCES materias(id) ); 

CREATE TABLE subtemas ( id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL, 
descripcion TEXT, 
contenido LONGTEXT, 
id_tema INT, 
FOREIGN KEY (id_tema) REFERENCES temas(id) ); 

-- Insertar materia 
INSERT INTO materias (nombre) VALUES ('Matemáticas'); 

-- Insertar tema relacionado a la materia 
INSERT INTO temas (nombre, id_materia) VALUES ('Matemáticas Básicas', 1); 
-- Insertar subtemas 
INSERT INTO subtemas (nombre, descripcion, contenido, id_tema) 
VALUES ('Conteo hacia adelante y hacia atrás', 
'Aprende a contar del 1 al 100 y también hacia atrás.', 
'<h2>Conteo hacia adelante</h2><p>Es contar en orden creciente: 1, 2, 3, ...</p><h2>Conteo hacia atrás</h2><p>Es contar en orden decreciente: 100, 99, 98, ...</p>', 1), 
('Números naturales hasta 100', 'Reconoce y trabaja con los números del 1 al 100.', 
'<h2>Números naturales</h2><p>Son los números que usamos para contar: 1, 2, 3, ... hasta 100.</p>', 1), 
('Números ordinales y cardinales', 'Diferencia entre la cantidad y la posición de objetos.', 
'<h2>Números cardinales</h2><p>Indican cuántos objetos hay: uno, dos, tres...</p><h2>Números ordinales</h2><p>Indican la posición: primero, segundo, tercero...</p>', 1);


CREATE TABLE materiales_subtema (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50), -- Ej: 'texto', 'imagen', 'video'
    contenido LONGTEXT,
    url_imagen VARCHAR(255),
    id_subtema BIGINT,
    FOREIGN KEY (id_subtema) REFERENCES subtemas(id)
);

INSERT INTO materiales_subtema (tipo, contenido, url_imagen, id_subtema)
VALUES
('texto', 'El conteo hacia adelante consiste en sumar 1 sucesivamente. Ejemplo: 1, 2, 3, 4... El conteo hacia atrás consiste en restar 1. Ejemplo: 10, 9, 8, 7...', NULL, 1),
('imagen', NULL, 'conteo.jpg', 1);

INSERT INTO materiales_subtema (tipo, contenido, url_imagen, id_subtema)
VALUES
('texto', 'Los números naturales hasta el 100 se usan para contar objetos. Incluyen del 1 al 100.', NULL, 2),
('imagen', NULL, 'numeros-hasta-100.jpg', 2);

INSERT INTO materiales_subtema (tipo, contenido, url_imagen, id_subtema)
VALUES
('texto', 'Los números ordinales indican posición (primero, segundo...). Los cardinales indican cantidad (uno, dos, tres...).', NULL, 3),
('imagen', NULL, 'ordinales-vs-cardinales.png', 3);



CREATE TABLE ejercicios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    subtema_id BIGINT NOT NULL,
    tipo VARCHAR(50) NOT NULL, -- seleccion_multiple, completar, etc.
    pregunta TEXT NOT NULL,
    opciones JSON, -- solo se usa en algunos tipos de ejercicios
    respuesta_correcta TEXT NOT NULL,
    metadata JSON, -- datos adicionales si se requieren
    orden INT DEFAULT 0,
    FOREIGN KEY (subtema_id) REFERENCES subtemas(id) ON DELETE CASCADE
);

CREATE TABLE juegos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    subtema_id BIGINT NOT NULL,
    tipo VARCHAR(50) NOT NULL, -- arrastrar, reloj, memoria, etc.
    titulo VARCHAR(100),
    descripcion TEXT,
    data_json JSON NOT NULL, -- aquí va toda la lógica del juego
    script_url VARCHAR(255), -- si usas un archivo externo JS
    orden INT DEFAULT 0,
    FOREIGN KEY (subtema_id) REFERENCES subtemas(id) ON DELETE CASCADE
);

INSERT INTO ejercicios (subtema_id, tipo, pregunta, opciones, respuesta_correcta, metadata, orden)
VALUES (
    1,
    'seleccion_multiple',
    '¿Cuál número sigue después del 47?',
    JSON_ARRAY('46', '48', '49', '50'),
    '48',
    NULL,
    1
);

INSERT INTO ejercicios (subtema_id, tipo, pregunta, opciones, respuesta_correcta, metadata, orden)
VALUES (
    1,
    'completar',
    'Completa la serie: 51, 52, __, 54, 55',
    NULL,
    '53',
    JSON_OBJECT('ayuda', 'Cuenta hacia adelante desde el 51'),
    2
);

INSERT INTO juegos (subtema_id, tipo, titulo, descripcion, data_json, script_url, orden)
VALUES (
    1,
    'arrastrar',
    'Ordena los números',
    'Arrastra los números para ponerlos en orden ascendente.',
    JSON_OBJECT(
        'items', JSON_ARRAY('45', '47', '44', '46'),
        'respuesta_correcta', JSON_ARRAY('44', '45', '46', '47')
    ),
    '/js/juegos/ordenarNumeros.js',
    1
);

INSERT INTO juegos (subtema_id, tipo, titulo, descripcion, data_json, script_url, orden)
VALUES (
    1,
    'contrarreloj',
    'Reto numérico',
    'Responde cuántos números caben entre dos números dados, antes que se acabe el tiempo.',
    JSON_OBJECT(
        'preguntas', JSON_ARRAY(
            JSON_OBJECT('inicio', 20, 'fin', 25, 'respuesta', '4'),
            JSON_OBJECT('inicio', 30, 'fin', 35, 'respuesta', '4')
        ),
        'tiempo_limite', 30
    ),
    '/js/juegos/retoNumerico.js',
    2
);
