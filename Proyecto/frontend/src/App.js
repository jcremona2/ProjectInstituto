import React from 'react'
// css base
import './App.css'

// header, footer and nav
import './styles/components/layout/Footer.css'
import './styles/components/layout/Header.css'
import './styles/components/layout/Nav.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";


function App() {
  return (
    <div className="App">

      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/institucional' element={<NosotrosPage />} />
          <Route path='/novedades' element={<NovedadesPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
