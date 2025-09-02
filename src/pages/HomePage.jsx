// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  const [sentimiento, setSentimiento] = useState('');
  const [analisis, setAnalisis] = useState(null); // Estado para guardar el resultado del análisis
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // URL de tu backend
    const backendUrl = 'http://127.0.0.1:5000/analyze-sentiment';
    
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: sentimiento }),
      });
      
      if (!response.ok) {
        throw new Error('Error al conectar con la API');
      }
      
      const data = await response.json();
      setAnalisis(data.sentiment); // Guarda el sentimiento analizado
      
    } catch (error) {
      console.error('Error:', error);
      setAnalisis('Hubo un error al analizar tu sentimiento.');
    }
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <h1 className="greeting-title">Bienvenido, Estudiante</h1>
        <p className="greeting-subtitle">Tu bienestar es la prioridad del Departamento de Psicología Universitario.</p>
        
        <div className="input-container">
          <textarea
            className="sentimiento-input"
            placeholder="¿Cómo te sientes hoy? Escribe aquí..."
            value={sentimiento}
            onChange={(e) => setSentimiento(e.target.value)}
          ></textarea>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Registrar Sentimiento
        </button>
        
        {/* Mostramos el resultado del análisis */}
        {analisis && (
          <div className="analisis-container">
            <p>Análisis de tu sentimiento:</p>
            <h2 className="analisis-resultado">{analisis}</h2>
          </div>
        )}

      </main>
    </div>
  );
};

export default HomePage;