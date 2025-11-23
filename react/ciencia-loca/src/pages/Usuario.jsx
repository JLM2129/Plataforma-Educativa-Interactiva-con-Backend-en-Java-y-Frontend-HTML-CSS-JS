import React from 'react';
import Tema from '../components/Tema';
import Subtarjetas from '../components/SubTarjetas';
import "../pages/Usuario.css";
import { useNavigate } from "react-router-dom";

export default function Usuario() {
  const navigate = useNavigate();

  

  const matematicasTemas = [
    {
      titulo: "Matemáticas Básicas",
      imagen: "/imagenes/matematicas.png",
      dataId: "1",
      subtemas: [
        {id:1,titulo:"Conteo hacia adelante y hacia atrás"}, {id:2,titulo:"Números naturales hasta 100"},
        {id:3,titulo:"Números ordinales y cardinales"}, {id:4,titulo:"Comparación de números (mayor, menor, igual)"},
        {id:5,titulo:"Valor posicional (unidades y decenas)"}, {id:6,titulo:"Sumas y restas sencillas (sin llevar)"},
        {id:7,titulo:"Introducción al dinero"}, {id:8,titulo:"Lectura de la hora en punto y media hora"},
        {id:9,titulo:"Números naturales hasta 1,000"}, {id:10,titulo:"Valor posicional (centenas)"},
        {id:11,titulo:"Sumas y restas con llevadas"},{id:12,titulo: "Números pares e impares"},
        {id:13,titulo:"Series y secuencias numéricas"}, {id:14,titulo:"Uso de la recta numérica"},
        {id:15,titulo:"Tablas de multiplicar del 1 al 5"}, {id:16,titulo:"Medición de longitud y peso"},
        {id:17,titulo:"Dinero: sumas y restas con monedas y billetes"}, {id:18,titulo:"Medición del tiempo (cuartos y tres cuartos de hora)"},
        {id:19,titulo:"Números hasta 10,000"}, {id:20,titulo:"Multiplicación y división básicas"},
        {id:21,titulo:"Tablas de multiplicar del 6 al 10"}, {id:22,titulo:"Problemas con operaciones básicas"},
        {id:23,titulo:"Introducción a las fracciones"}, {id:24,titulo:"Lectura y escritura de fracciones simples"},
        {id:25,titulo:"Estimaciones simples"}, {id:26,titulo:"Redondeo a la decena más cercana"}, {id:27,titulo:"Medición de capacidad"},
        {id:28,titulo:"Números hasta 100,000"}, {id:29,titulo:"Operaciones combinadas"}, {id:30,titulo:"División con y sin residuo"},
        {id:31,titulo:"Fracciones equivalentes"}, {id:32,titulo:"Problemas con fracciones"},
        {id:33,titulo:"Redondeo a centenas y millares"}, {id:34,titulo:"Uso del reloj: 24 horas"},
        {id:35,titulo:"Introducción a múltiplos y divisores"}, {id:36,titulo:"Interpretación de datos en tablas y gráficos simples"},
        {id:37,titulo:"Números hasta 1 millón"}, {id:38,titulo:"Operaciones con decimales"},{id:39,titulo:"Comparación de fracciones y decimales"},
        {id:40,titulo:"Redondeo de decimales"}, {id:41,titulo:"Problemas con decimales y fracciones"},
        {id:42,titulo:"Múltiplos y divisores"}, {id:43,titulo:"MCD y MCM (concepto inicial)"}, {id:44,titulo:"Problemas de lógica matemática"}
      ]
    },
    {
      titulo: "Geometría",
      imagen: "/imagenes/geometria.png",
      dataId: "2",
      subtemas: [
        {id:45,titulo:"Figuras geométricas básicas (círculo, cuadrado, triángulo, rectángulo)"},
        {id:46,titulo:"Identificación de formas en objetos del entorno"}, {id:47,titulo:"Líneas rectas y curvas"},
        {id:48,titulo:"Líneas horizontales y verticales"}, {id:49,titulo:"Comparación de formas por tamaño y forma"},
        {id:50,titulo:"Clasificación de figuras según lados y vértices"}, {id:51,titulo:"Sólidos geométricos (esfera, cubo, cilindro, cono)"},
        {id:52,titulo:"Relación entre figuras planas y cuerpos geométricos"}, {id:53,titulo:"Características de los polígonos"},
        {id:54,titulo:"Ángulos: recto, agudo y obtuso (nociones básicas)"}, {id:55,titulo:"Perímetro de figuras planas regulares"},
        {id:56,titulo:"Simetría en figuras geométricas"}, {id:57,titulo:"Ubicación espacial: arriba, abajo, izquierda, derecha"},
        {id:58,titulo:"Coordenadas en cuadrículas simples"}, {id:59,titulo:"Uso de instrumentos básicos: regla, escuadra y compás"}
      ]
    },
    {
      titulo: "Álgebra",
      imagen: "/imagenes/algebra.png",
      dataId: "3",
      subtemas: [
        {id:60, titulo:"Introducción al álgebra: letras como números"},
{id:61, titulo:"Expresiones algebraicas simples"},
{id:62, titulo:"Valor numérico de una expresión algebraica"},
{id:63, titulo:"Operaciones con expresiones algebraicas"},
{id:64, titulo:"Uso de paréntesis y leyes de los signos"},
{id:65, titulo:"Términos semejantes y reducción"},
{id:66, titulo:"Propiedades de la suma y la multiplicación"},
{id:67, titulo:"Monomios, binomios y polinomios"},
{id:68, titulo:"Multiplicación de monomios y polinomios"},
{id:69, titulo:"Factor común y factorización básica"},
{id:70, titulo:"Ecuaciones de primer grado"},
{id:71, titulo:"Ecuaciones con paréntesis y fracciones"},
{id:72, titulo:"Sistemas de ecuaciones lineales"},
{id:73, titulo:"Inecuaciones de primer grado"},
{id:74, titulo:"Expresiones algebraicas con exponentes"},
{id:75, titulo:"Leyes de los exponentes"},
{id:76, titulo:"Ecuaciones cuadráticas"},
{id:77, titulo:"Fórmula general y factorización de trinomios"},
{id:78, titulo:"Aplicación del álgebra en problemas cotidianos"},

      ]
    },
    {
      titulo: "Trigonometría",
      imagen: "/imagenes/trigonometria.png",
      dataId: "4",
      subtemas: [
        {id:79, titulo:"Ángulos: definición y clasificación"},
{id:80, titulo:"Sistema sexagesimal y radianes"},
{id:81, titulo:"Medición de ángulos (uso del transportador)"},
{id:82, titulo:"Ángulos complementarios y suplementarios"},
{id:83, titulo:"Triángulos: clasificación y propiedades"},
{id:84, titulo:"Razones trigonométricas en triángulos rectángulos"},
{id:85, titulo:"Seno, coseno y tangente"},
{id:86, titulo:"Cálculo de lados y ángulos usando razones trigonométricas"},
{id:87, titulo:"Uso de la calculadora científica en trigonometría"},
{id:88, titulo:"Teorema de Pitágoras"},
{id:89, titulo:"Teorema de seno"},
{id:90, titulo:"Teorema de coseno"},
{id:91, titulo:"Resolución de triángulos oblicuángulos"},
{id:92, titulo:"Aplicaciones de la trigonometría en la vida real"},
{id:93, titulo:"Identidades trigonométricas básicas"},
{id:94, titulo:"Razones trigonométricas inversas"},
{id:95, titulo:"Gráficas de funciones trigonométricas"},

      ]
    },
    {
      titulo: "Cálculo",
      imagen: "/imagenes/calculo.png",
      dataId: "5",
      subtemas: [
        {id:96, titulo:"Concepto de variable y función"},
{id:97, titulo:"Dominio y rango de una función"},
{id:98, titulo:"Tipos de funciones: lineales, cuadráticas, racionales"},
{id:99, titulo:"Representación gráfica de funciones"},
{id:100, titulo:"Pendiente de una recta"},
{id:101, titulo:"Razón de cambio"},
{id:102, titulo:"Límites de una función"},
{id:103, titulo:"Cálculo de límites por sustitución y factorización"},
{id:104, titulo:"Continuidad de una función"},
{id:105, titulo:"Concepto de derivada"},
{id:106, titulo:"Derivada como razón de cambio"},
{id:107, titulo:"Reglas de derivación (potencias, suma, producto, cociente)"},
{id:108, titulo:"Derivación de funciones polinómicas"},
{id:109, titulo:"Derivación de funciones racionales"},
{id:110, titulo:"Aplicaciones de la derivada: máximos y mínimos"},
{id:111, titulo:"Trazado de curvas usando derivadas"},
{id:112, titulo:"Problemas de optimización"},
{id:113, titulo:"Velocidad y aceleración como derivadas"},
{id:114, titulo:"Introducción a la derivada implícita"},

      ]
    }
  ];

  const fisicaTemas = [
  {
    titulo: "Magnitudes y Unidades",
    imagen: "/imagenes/unidades.png",
    dataId: "6",
    subtemas: [
     {id:115, titulo:"¿Qué es una magnitud física?"},
{id:116, titulo:"Magnitudes fundamentales y derivadas"},
{id:117, titulo:"Sistema Internacional de Unidades (SI)"},
{id:118, titulo:"Unidades básicas: metro, kilogramo, segundo, etc."},
{id:119, titulo:"Símbolos y notación de unidades"},
{id:120, titulo:"Instrumentos de medición"},
{id:121, titulo:"Precisión, exactitud y error de medición"},
{id:122, titulo:"Múltiplos y submúltiplos del SI (prefijos)"},
{id:123, titulo:"Conversión de unidades"},
{id:124, titulo:"Notación científica"},
{id:125, titulo:"Magnitudes escalares y vectoriales"},
{id:126, titulo:"Suma y resta de vectores"},
{id:127, titulo:"Representación gráfica de vectores"},
{id:128, titulo:"Resolución de vectores en componentes"},

    ]
  },
  {
    titulo: "Movimiento y Fuerzas",
    imagen: "/imagenes/movimiento.png",
    dataId: "7",
    subtemas: [
     {id:129, titulo:"Concepto de movimiento"},
{id:130, titulo:"Sistema de referencia"},
{id:131, titulo:"Trayectoria y desplazamiento"},
{id:132, titulo:"Distancia y desplazamiento"},
{id:133, titulo:"Rapidez y velocidad"},
{id:134, titulo:"Aceleración"},
{id:135, titulo:"Movimiento rectilíneo uniforme (MRU)"},
{id:136, titulo:"Gráficas de MRU"},
{id:137, titulo:"Movimiento rectilíneo uniformemente acelerado (MRUA)"},
{id:138, titulo:"Fórmulas del MRUA"},
{id:139, titulo:"Gráficas de MRUA"},
{id:140, titulo:"Caída libre"},
{id:141, titulo:"Tiro vertical"},
{id:142, titulo:"Tiro parabólico (introducción)"},
{id:143, titulo:"Concepto de fuerza"},
{id:144, titulo:"Fuerza neta y equilibrio"},
{id:145, titulo:"Primera Ley de Newton (inercia)"},
{id:146, titulo:"Segunda Ley de Newton (f = m·a)"},
{id:147, titulo:"Tercera Ley de Newton (acción y reacción)"},
{id:148, titulo:"Fuerza de fricción"},
{id:149, titulo:"Fuerza normal"},
{id:150, titulo:"Peso y masa"},

    ]
  },
  {
    titulo: "Energía y Trabajo",
    imagen: "/imagenes/energia.png",
    dataId: "8",
    subtemas: [
      {id:151, titulo:"¿Qué es el trabajo en física?"},
{id:152, titulo:"Fórmula del trabajo (W = F·d·cosθ)"},
{id:153, titulo:"Unidad de trabajo: el joule"},
{id:154, titulo:"Trabajo positivo, negativo y nulo"},
{id:155, titulo:"¿Qué es la energía?"},
{id:156, titulo:"Energía cinética"},
{id:157, titulo:"Energía potencial gravitatoria"},
{id:158, titulo:"Energía potencial elástica"},
{id:159, titulo:"Conservación de la energía mecánica"},
{id:160, titulo:"Transformación de energía"},
{id:161, titulo:"Potencia mecánica (P = W/t)"},
{id:162, titulo:"Unidad de potencia: el watt"},
{id:163, titulo:"Máquinas simples y trabajo útil"},
{id:164, titulo:"Eficiencia energética"},
{id:165, titulo:"Energía térmica y calor (introducción)"},
{id:166, titulo:"Fuentes de energía renovable y no renovable"},
{id:167, titulo:"Impacto ambiental del consumo energético"},

    ]
  },
  {
    titulo: "Ondas y Sonido",
    imagen: "/imagenes/ondas.png",
    dataId: "9",
    subtemas: [
      {id:168, titulo:"¿Qué es una onda?"},
{id:169, titulo:"Elementos de una onda: cresta, valle, amplitud, etc."},
{id:170, titulo:"Tipos de ondas: mecánicas y electromagnéticas"},
{id:171, titulo:"Ondas transversales y longitudinales"},
{id:172, titulo:"Características de las ondas: frecuencia, periodo, longitud de onda y velocidad"},
{id:173, titulo:"Ecuación de la onda: v = λ·f"},
{id:174, titulo:"Reflexión, refracción y difracción de ondas"},
{id:175, titulo:"Interferencia de ondas"},
{id:176, titulo:"¿Qué es el sonido?"},
{id:177, titulo:"Características del sonido: tono, timbre e intensidad"},
{id:178, titulo:"Velocidad del sonido en distintos medios"},
{id:179, titulo:"Efecto Doppler"},
{id:180, titulo:"Ultrasonido e infrasonido"},
{id:181, titulo:"Contaminación sonora"},

    ]
  },
  {
    titulo: "Luz y Óptica",
    imagen: "/imagenes/luz.png",
    dataId: "10",
    subtemas: [
      {id:182, titulo:"¿Qué es la luz?"},
{id:183, titulo:"Propiedades de la luz: velocidad, trayectoria y propagación"},
{id:184, titulo:"Fuentes de luz: naturales y artificiales"},
{id:185, titulo:"Luz visible e invisible"},
{id:186, titulo:"Reflexión de la luz"},
{id:187, titulo:"Leyes de la reflexión"},
{id:188, titulo:"Espejos planos y curvos"},
{id:189, titulo:"Imágenes en espejos"},
{id:190, titulo:"Refracción de la luz"},
{id:191, titulo:"Índice de refracción"},
{id:192, titulo:"Lentes convergentes y divergentes"},
{id:193, titulo:"Formación de imágenes con lentes"},
{id:194, titulo:"Dispersión de la luz (arcoíris)"},
{id:195, titulo:"Absorción, transmisión y opacidad"},
{id:196, titulo:"Colores de la luz"},
{id:197, titulo:"Fenómenos ópticos naturales (espejismos, halos, etc.)"},
{id:198, titulo:"Óptica en instrumentos: lupa, microscopio, telescopio"},

    ]
  },
  {
    titulo: "Electricidad y Magnetismo",
    imagen: "/imagenes/electricidad.png",
    dataId: "11",
    subtemas: [
{id:199, titulo:"¿Qué es la electricidad?"},
{id:200, titulo:"Cargas eléctricas: positivas y negativas"},
{id:201, titulo:"Corriente eléctrica: definición y tipos"},
{id:202, titulo:"Conductores y aislantes"},
{id:203, titulo:"Tensión o voltaje"},
{id:204, titulo:"Resistencia eléctrica"},
{id:205, titulo:"Ley de Ohm (V = I·R)"},
{id:206, titulo:"Potencia eléctrica (P = V·I)"},
{id:207, titulo:"Circuitos eléctricos: abiertos y cerrados"},
{id:208, titulo:"Componentes básicos del circuito: pila, bombilla, interruptor"},
{id:209, titulo:"Circuitos en serie y en paralelo"},
{id:210, titulo:"Seguridad eléctrica"},
{id:211, titulo:"¿Qué es el magnetismo?"},
{id:212, titulo:"Polos magnéticos: atracción y repulsión"},
{id:213, titulo:"Campo magnético"},
{id:214, titulo:"Interacción entre electricidad y magnetismo"},
{id:215, titulo:"Electroimán: cómo se forma"},
{id:216, titulo:"Motor eléctrico: funcionamiento básico"},
{id:217, titulo:"Generador eléctrico"},
{id:218, titulo:"Aplicaciones cotidianas de la electricidad y el magnetismo"},

    ]
  }
];


  const quimicaTemas = [
  {
    titulo: "Materia y sus Propiedades",
    imagen: "/imagenes/materia.png",
    dataId: "12",
    subtemas: [
      {id:219, titulo:"¿Qué es la materia?"},
{id:220, titulo:"Estados de la materia: sólido, líquido y gaseoso"},
{id:221, titulo:"Cambios de estado de la materia"},
{id:222, titulo:"Propiedades generales de la materia (masa, volumen, densidad)"},
{id:223, titulo:"Propiedades específicas de la materia (punto de ebullición, punto de fusión, conductividad)"},
{id:224, titulo:"Clasificación de la materia: sustancias puras y mezclas"},
{id:225, titulo:"Elementos, compuestos y mezclas"},
{id:226, titulo:"Propiedades físicas vs propiedades químicas"},
{id:227, titulo:"Cambios físicos y cambios químicos"},
{id:228, titulo:"Identificación de cambios químicos (color, olor, gas, precipitado, temperatura)"},
{id:229, titulo:"La materia y su importancia en la vida diaria"},

    ]
  },
  {
    titulo: "Mezclas y Soluciones",
    imagen: "/imagenes/mezclas.png",
    dataId: "13",
    subtemas: [
      {id:230, titulo:"¿Qué es una mezcla?"},
{id:231, titulo:"Tipos de mezclas: homogéneas y heterogéneas"},
{id:232, titulo:"Ejemplos comunes de mezclas"},
{id:233, titulo:"Métodos de separación de mezclas (decantación, filtración, tamizado, etc.)"},
{id:234, titulo:"¿Qué es una solución?"},
{id:235, titulo:"Soluto y disolvente"},
{id:236, titulo:"Solubilidad: factores que influyen"},
{id:237, titulo:"Tipos de soluciones: diluidas, concentradas y saturadas"},
{id:238, titulo:"Ejemplos de soluciones en la vida diaria"},
{id:239, titulo:"Diferencias entre mezcla y solución"},
{id:240, titulo:"Importancia de las mezclas y soluciones en la vida cotidiana"},

    ]
  },
  {
    titulo: "Átomos y Moléculas",
    imagen: "/imagenes/atomo.png",
    dataId: "14",
    subtemas: [
      {id:241, titulo:"¿Qué es un átomo?"},
{id:242, titulo:"Partes del átomo: protón, neutrón y electrón"},
{id:243, titulo:"Número atómico y masa atómica"},
{id:244, titulo:"Modelos atómicos históricos (Dalton, Thomson, Rutherford, Bohr)"},
{id:245, titulo:"¿Qué es una molécula?"},
{id:246, titulo:"Formación de moléculas: enlaces químicos básicos"},
{id:247, titulo:"Moléculas simples y compuestas"},
{id:248, titulo:"Diferencias entre átomos, elementos y moléculas"},
{id:249, titulo:"Representación de moléculas: fórmulas químicas"},
{id:250, titulo:"Moléculas comunes en la vida cotidiana (agua, oxígeno, dióxido de carbono)"},
{id:251, titulo:"Importancia de átomos y moléculas en la química y la vida diaria"},

    ]
  },
  {
    titulo: "Tabla Periódica",
    imagen: "/imagenes/tabla.png",
    dataId: "15",
    subtemas: [
      {id:252, titulo:"¿Qué es la tabla periódica?"},
{id:253, titulo:"Historia de la tabla periódica"},
{id:254, titulo:"Organización de la tabla periódica"},
{id:255, titulo:"Grupos o familias químicas"},
{id:256, titulo:"Periodos de la tabla periódica"},
{id:257, titulo:"Metales, no metales y metaloides"},
{id:258, titulo:"Elementos representativos y de transición"},
{id:259, titulo:"Símbolos químicos y número atómico"},
{id:260, titulo:"Propiedades periódicas: electronegatividad, radio atómico, energía de ionización"},
{id:261, titulo:"Ubicación de elementos comunes en la tabla"},
{id:262, titulo:"Importancia de la tabla periódica en la química"},

    ]
  },
  {
    titulo: "Reacciones Químicas",
    imagen: "/imagenes/reacciones.png",
    dataId: "16",
    subtemas: [
      {id:263, titulo:"¿Qué es una reacción química?"},
{id:264, titulo:"Características de las reacciones químicas"},
{id:265, titulo:"Evidencias de una reacción química (cambio de color, liberación de gas, cambio de temperatura)"},
{id:266, titulo:"Tipos de reacciones químicas"},
{id:267, titulo:"Reacciones de combinación"},
{id:268, titulo:"Reacciones de descomposición"},
{id:269, titulo:"Reacciones de sustitución"},
{id:270, titulo:"Reacciones de doble desplazamiento"},
{id:271, titulo:"Ley de conservación de la masa"},
{id:272, titulo:"Balanceo de ecuaciones químicas"},
{id:273, titulo:"Reacciones endotérmicas y exotérmicas"},
{id:274, titulo:"Aplicaciones de las reacciones químicas en la vida cotidiana"},

    ]
  },
  {
    titulo: "Ácidos y Bases",
    imagen: "/imagenes/acidos.png",
    dataId: "17",
    subtemas: [
      {id:275, titulo:"¿Qué son los ácidos?"},
{id:276, titulo:"Propiedades de los ácidos"},
{id:277, titulo:"Ejemplos comunes de ácidos (ácido clorhídrico, ácido sulfúrico, vinagre)"},
{id:278, titulo:"¿Qué son las bases?"},
{id:279, titulo:"Propiedades de las bases"},
{id:280, titulo:"Ejemplos comunes de bases (hidróxido de sodio, amoníaco)"},
{id:281, titulo:"Teoría de los ácidos y bases de Arrhenius"},
{id:282, titulo:"Teoría de los ácidos y bases de Brønsted-Lowry"},
{id:283, titulo:"Teoría de Lewis sobre ácidos y bases"},
{id:284, titulo:"Escala de pH: qué es y cómo se mide"},
{id:285, titulo:"Ácidos y bases en la vida cotidiana"},
{id:286, titulo:"Neutralización de ácidos y bases"},

    ]
  }
];


  return (
    
    <div className="usuario-page">
      <header>
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" />
        </div>
        <nav>
          <a href="#matematicas">Matemáticas Locas</a>
          <a href="#fisica">Física en Acción</a>
          <a href="#quimica">Química Divertida</a>
          <a href="#progreso">Progreso</a>
          <a href="#configuracion">Configuración</a>
          <a href="/">Cerrar sesión</a>
        </nav>
      </header>

      <main>
        <section id="matematicas" className="tema">
          <h2>🔢 Matemáticas Locas</h2>
          <div className="carrusel">
            {matematicasTemas.map((tema, i) => (
              <React.Fragment key={i}>
                <Tema 
                  titulo={tema.titulo}
                  imagen={tema.imagen}
                  dataId={tema.dataId}
                   onClick={() => navigate(`/tema/${tema.dataId }`)}
                />
                <Subtarjetas subtemas={tema.subtemas} 
          
                onClick={(subtemaId) => navigate(`/subtema/${subtemaId}`)}
                

 />
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="fisica" className="tema">
          <h2>🧲 Física en Acción</h2>
          <div className="carrusel">
            {fisicaTemas.map((tema, i) => (
              <React.Fragment key={i}>
                <Tema
                  titulo={tema.titulo}
                  imagen={tema.imagen}
                  dataId={tema.dataId}
                   onClick={() => navigate(`/tema/${tema.dataId}`)}
                />
                <Subtarjetas subtemas={tema.subtemas}
                onClick={(subtemaId) => navigate(`/subtema/${subtemaId}`)}

 />
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="quimica" className="tema">
        <h2>🧪 Química Divertida</h2>
        <div className="carrusel">
            {quimicaTemas.map((tema, i) => (
            <React.Fragment key={i}>
                <Tema
                titulo={tema.titulo}
                imagen={tema.imagen}
                dataId={tema.dataId}
                 onClick={() => navigate(`/tema/${tema.dataId}`)}
                />
                <Subtarjetas subtemas={tema.subtemas}
                onClick={(subtemaId) => navigate(`/subtema/${subtemaId}`)}

 />
            </React.Fragment>
))}

        </div>
        </section>


      </main>
    </div>
  );
}
