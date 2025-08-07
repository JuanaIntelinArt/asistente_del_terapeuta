import React from 'react';
import './PrivacyNotice.css';

const PrivacyNotice = () => {
  return (
    <div className="privacy-notice">
      <div className="notice-content">
        <span className="notice-icon">💡</span>
        <div className="notice-text">
          <p className="notice-title">Aviso Importante sobre Privacidad</p>
          <p className="notice-description">Tu bienestar es nuestra prioridad. Lee la información sobre el manejo de tus datos.</p>
        </div>
      </div>
      <div className="status-container">
          <span className="status-item">Dpto. Psicología</span>
          <span className="status-item">Encriptado</span>
          <span className="status-item">Evaluado</span>
      </div>
      <button className="read-more-button">Leer más información</button>
    </div>
  );
};

export default PrivacyNotice;