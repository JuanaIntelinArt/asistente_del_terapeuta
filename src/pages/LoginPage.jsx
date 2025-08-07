import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Aquí puedes guardar el rol en el estado de la aplicación o en el almacenamiento local.
    // Por ahora, simplemente navegaremos a una página de inicio simulada.
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'therapist') {
      navigate('/perfil'); // Navega a la página de perfiles de terapeutas
    } else if (role === 'student') {
      navigate('/home'); // Navega a la página de inicio del estudiante
    }
  };

  return (
    <div className="login-page">
      <Header />
      <main className="main-content">
        <h1 className="login-title">Selecciona tu rol para continuar</h1>
        <div className="login-buttons-container">
          <button className="login-button admin" onClick={() => handleLogin('admin')}>
            Ingresar como Administrador
          </button>
          <button className="login-button therapist" onClick={() => handleLogin('therapist')}>
            Ingresar como Terapeuta
          </button>
          <button className="login-button student" onClick={() => handleLogin('student')}>
            Ingresar como Estudiante
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;