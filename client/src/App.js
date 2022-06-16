import React, {useState} from 'react';
import { Router, Routes, Route } from "react-router-dom";

//Importación de Páginas
import Registro from './pages/Registro.js';
import DashboardSolicitante from './pages/DashboardSolicitante.js';
import CrearSolicitud from './pages/CrearSolicitud.js';
import PerfilProfesional from './pages/PerfilProfesional.js';
import Home from './pages/Home.js';
import DashboardReclutador from './pages/DashboardReclutador.js';
import CrearVacante from './pages/CrearVacante.js';

//Importación de barras de navegación
import LayoutSolicitante from './pages/LayoutSolicitante.js';
import LayoutReclutador from './pages/LayoutReclutador.js';

import UserContext from './contexts/UserContext.js'

import './App.css';

function App() {

  const [user, setUser] = useState({id: 0, name: "undefined"});

  return(
    <UserContext.Provider value={{user, setUser}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </UserContext.Provider>
  )
}

export default App;
