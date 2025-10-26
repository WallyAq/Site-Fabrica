import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/home";
import Artigos from "../pages/artigos";
import Cursos from "../pages/cursos";
import Eventos from "../pages/eventos";
import Servico from "../pages/servico";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/servicos" element={<Servico />} />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
