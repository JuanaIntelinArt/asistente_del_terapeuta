import React, { useState } from 'react';
import Header from '../components/Header';
import PrivacyNotice from '../components/PrivacyNotice';
import ActivityBar from '../components/ActivityBar';
import './HomePage.css';

const HomePage = () => {
  const [showActivityBar, setShowActivityBar] = useState(false);

  const handleShowActivities = () => {
    setShowActivityBar(!showActivityBar); // Cambia el estado a su opuesto (visible/oculto)
  };

  return (
    <div className="home-page">
      <Header />
      <PrivacyNotice />
      <main className="main-content">
        <h1 className="greeting-title">Hola, ¿cómo te sientes hoy?</h1>
        <p className="greeting-subtitle">Este es el primer paso para expresar y entender lo que sientes.</p>
        
        <div className="input-container">
          <textarea
            className="sentimiento-input"
            placeholder="Cuéntame lo que sientes, aquí estaré para escucharte..."
          ></textarea>
          <button className="submit-button">
            Guarda tus sentimientos
          </button>
        </div>

        {/* Restauramos los 4 botones originales */}
        <section className="action-buttons-grid">
          <div className="action-button">Burning out</div>
          <div className="action-button">Ver mis emociones</div>
          <div className="action-button">Mi Terapeuta</div>
          <div className="action-button" onClick={handleShowActivities}>Actividades Creativas</div>
        </section>

        {/* Mostramos la barra de actividades solo si 'showActivityBar' es verdadero */}
        {showActivityBar && <ActivityBar />}
      </main>
    </div>
  );
};

export default HomePage;