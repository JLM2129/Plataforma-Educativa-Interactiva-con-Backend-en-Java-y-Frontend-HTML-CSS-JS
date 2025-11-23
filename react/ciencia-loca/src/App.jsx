import './App.css';
import Header from './components/Header';
import EfectoParticulas from './effects/efectoParticulas';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import IndexMatematicas from "./pages/IndexMatematicas";
import VistaPrevia from './components/VistaPrevia';
import IndexFisica from "./pages/IndexFisica";
import IndexQuimica from "./pages/IndexQuimica";
import Basicas from "./pages/Matematicas/Basicas";
import Figuras from './pages/Matematicas/Figuras';
import Algebra from "./pages/Matematicas/Algebra";
import Trigonometria from "./pages/Matematicas/Trigonometria";
import Calculo from './pages/Matematicas/Calculo';
import MagnitudesUnidades from './pages/Fisica/MagnitudesUnidades';
import MovimientoFuerzas from './pages/Fisica/MovimientoFuerzas';
import EnergiaTrabajo from './pages/Fisica/EnergiaTrabajo';
import OndasSonido from './pages/Fisica/OndasSonido';
import LuzOptica from './pages/Fisica/LuzOptica';
import ElectricidadMagnetismo from './pages/Fisica/ElectricidadMagnetismo';
import Materia from './pages/Quimica/Materia';
import Mezclas from './pages/Quimica/Mezclas';
import Atomos from './pages/Quimica/Atomos';
import TablaPeriodica from './pages/Quimica/TablaPeriodica';
import Reacciones from './pages/Quimica/Reacciones';
import Acidos from './pages/Quimica/Acidos';
import Registro from './pages/Registro';
import LoginUsuario from './components/LoginUsuario';
import Usuario from './pages/Usuario';
import TemaPage from './pages/TemaPage';
import SubtemaPage from './pages/SubtemaPage';


function AppWrapper() {
  const location = useLocation();

  // Lista de rutas donde NO se debe mostrar el encabezado ni partículas
  const ocultarEncabezado = ['/usuario', /^\/tema\/\d+$/,/^\/subtema\/\d+$/];

const mostrarEncabezado = !ocultarEncabezado.some(path =>
  typeof path === "string" ? location.pathname === path : path.test(location.pathname)
);


  return (
    <>
      {mostrarEncabezado && <Header />}
      {mostrarEncabezado && <EfectoParticulas />}

      <Routes>
        <Route path="/" element={<VistaPrevia />} />
        <Route path="/matematicas" element={<IndexMatematicas />} />
        <Route path="/fisica" element={<IndexFisica />} />
        <Route path="/quimica" element={<IndexQuimica />} />
        <Route path="/matematicas/basicas" element={<Basicas />} />
        <Route path="/matematicas/figuras" element={<Figuras />} />
        <Route path="/matematicas/algebra" element={<Algebra />} />
        <Route path="/matematicas/trigonometria" element={<Trigonometria />} />
        <Route path="/matematicas/calculo" element={<Calculo />} />
        <Route path="/fisica/magnitudes" element={<MagnitudesUnidades />} />
        <Route path="/fisica/movimiento" element={<MovimientoFuerzas />} />
        <Route path="/fisica/energia" element={<EnergiaTrabajo />} />
        <Route path="/fisica/onda" element={<OndasSonido />} />
        <Route path="/fisica/luz" element={<LuzOptica />} />
        <Route path="/fisica/electricidad" element={<ElectricidadMagnetismo />} />
        <Route path="/quimica/materia" element={<Materia />} />
        <Route path="/quimica/mezclas" element={<Mezclas />} />
        <Route path="/quimica/atomo" element={<Atomos />} />
        <Route path="/quimica/tabla" element={<TablaPeriodica />} />
        <Route path="/quimica/reacciones" element={<Reacciones />} />
        <Route path="/quimica/acidos" element={<Acidos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<LoginUsuario />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/tema/:id" element={<TemaPage />} />
        <Route path="/subtema/:id" element={<SubtemaPage />} />
        


      </Routes>
    </>
  );
}

// Este es el envoltorio necesario para usar useLocation
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
