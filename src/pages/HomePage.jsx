import React from 'react';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
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

        <section className="action-buttons-grid">
          <div className="action-button">burning out</div>
          <div className="action-button">Ver mis emociones</div>
          <div className="action-button">Mi Terapeuta</div>
          <div className="action-button">Actividades Creativas</div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;