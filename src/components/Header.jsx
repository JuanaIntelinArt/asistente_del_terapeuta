// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/ayuda" className={({ isActive }) => isActive ? "active" : ""}>Te Escucho...</NavLink>
        <NavLink to="/perfil" className={({ isActive }) => isActive ? "active" : ""}>Perfiles de los Profesionales</NavLink>
        
        {/* Nuevo botón de Ingresar */}
        <NavLink to="/login" className="login-button-link">Ingresar</NavLink>
      </nav>
    </header>
  );
};

export default Header;