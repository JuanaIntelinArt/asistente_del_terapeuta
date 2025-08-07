import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card'; // Componente de tarjeta reutilizable
import './HelpPage.css'; // Archivo de estilos para esta página

const HelpPage = () => {
  return (
    <div className="help-page">
      <Header />
      <main className="main-content">
        <h1 className="title">Este es un espacio para ti</h1>
        <p className="subtitle">Aquí encontrarás recursos y apoyo para cualquier situación.</p>

       
        {/* Sección de Chat de Apoyo */}
        <section className="help-section">
          <Card title="Chat con el asistente del terapeuta">
            <p>Escribe aquí para comenzar un chat de apoyo en tiempo real.</p>
            <button className="chat-button">Iniciar chat de apoyo</button>
          </Card>
        </section>

        {/* Sección de Ideas para sentirte mejor */}
        <section className="help-section">
          <Card title="Ideas para sentirte mejor">
            <div className="idea-item">
              <span>Respiración Consciente</span>
              <button>Ver</button>
            </div>
            <div className="idea-item">
              <span>Proyectos Creativos</span>
              <button>Ver</button>
            </div>
            <div className="idea-item">
              <span>Ejercicio Físico</span>
              <button>Ver</button>
            </div>
            <div className="idea-item">
              <span>Conecta con la gente</span>
              <button>Ver</button>
            </div>
          </Card>
        </section>

        {/* Sección de Centros de Apoyo */}
        <section className="help-section">
          <Card title="Donde esta el Departamento de Psicologia de la universidad">
            <p>Encuentra el departamento de psicologia de la universidad.</p>
            <button>Ver Mapa</button>
          </Card>
        </section>

      </main>
    </div>
  );
};

export default HelpPage;