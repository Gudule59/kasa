import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home.js";
import Apropos from "./Components/Pages/Apropos.js";
import Logement from "./Components/Pages/Logement.js";
import PageErreur from "./Components/Pages/PageErreur.js";


const routerConfig = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/APropos" element={<Apropos />} />
    <Route path="/logement/:id" element={<Logement />} />
    <Route path="/*" element={<PageErreur />} />
  </Routes>
);

export default routerConfig;
