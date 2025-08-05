import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
        <span className="app-title">Asistente del Terapeuta</span>
      </div>
      <nav className="header-nav">
        <Link to="/home">Inicio</Link>
        <Link to="/ayuda">Ayuda</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;