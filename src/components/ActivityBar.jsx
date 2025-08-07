import React from 'react';
import './ActivityBar.css';

const ActivityBar = () => {
  return (
    <div className="activity-bar-container">
      <h3 className="activity-bar-title">Actividades Recomendadas</h3>
      <div className="activity-buttons-scroll-container">
        <div className="activity-button todas">Todas</div>
        <div className="activity-button relajacion">Relajación</div>
        <div className="activity-button energia">Energía</div>
        <div className="activity-button concentracion">Concentración</div>
        <div className="activity-button social">Social</div>
        <div className="activity-button creatividad">Creatividad</div>
      </div>
    </div>
  );
};

export default ActivityBar;