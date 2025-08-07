// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Estado para controlar qué sección se muestra
  const [activeSection, setActiveSection] = useState(null); // 'therapistManagement', 'studentRecords', 'messages'

  // Datos simulados de terapeutas
  const therapists = [
    { id: 1, name: 'Dra. Sarah Chen' },
    { id: 2, name: 'Dr. Juan López' },
    { id: 3, name: 'Lic. Ana Pérez' },
  ];

  const renderTherapistManagement = () => (
    <div className="therapist-management-container">
      <h3>Lista de Terapeutas</h3>
      <ul className="therapist-list">
        {therapists.map(therapist => (
          <li key={therapist.id} className="therapist-item">
            {therapist.name}
            <button className="therapist-options-button">Opciones</button>
          </li>
        ))}
      </ul>
      <div className="therapist-actions">
        <button className="add-therapist-button">Incluir a un nuevo Terapeuta</button>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard-page">
      <Header />
      <main className="main-content">
        <h1 className="admin-title">Panel de Administrador</h1>
        <div className="dashboard-grid">
          <Card>
            <button className="dashboard-button" onClick={() => setActiveSection('studentRecords')}>
              Carpeta de Estudiante
            </button>
          </Card>
          <Card>
            <button className="dashboard-button" onClick={() => setActiveSection('therapistManagement')}>
              Gestión de Terapeutas
            </button>
          </Card>
          <Card>
            <button className="dashboard-button" onClick={() => setActiveSection('messages')}>
              Mensaje al Departamento de Psicología
            </button>
          </Card>
        </div>

        {/* Renderiza el contenido dinámicamente según el estado */}
        {activeSection === 'therapistManagement' && renderTherapistManagement()}
        {activeSection === 'studentRecords' && <div>Contenido de la Carpeta de Estudiantes...</div>}
        {activeSection === 'messages' && <div>Formulario de Mensajes...</div>}
        
      </main>
    </div>
  );
};

export default AdminDashboard;