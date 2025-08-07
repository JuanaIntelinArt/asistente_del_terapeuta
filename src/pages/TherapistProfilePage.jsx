import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import './TherapistProfilePage.css';

// Componente reutilizable para cada tarjeta de terapeuta
const TherapistCard = ({ name, photo, bio, appointmentInfo, appointmentLocation }) => {
  return (
    <div className="therapist-card-container">
      <Card>
        <div className="therapist-info">
          <img src={photo} alt={`Foto de ${name}`} className="therapist-photo" />
          <div className="therapist-details">
            <h3 className="therapist-name">{name}</h3>
            <p className="therapist-bio">{bio}</p>
            <div className="profile-status">
              <span className="status-dot connected"></span>
              <p>Conectada</p>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <button className="action-button secondary">Agendar</button>
        </div>
        <p className="appointment-info">Próxima Sesión: {appointmentInfo}</p>
        <p className="appointment-location">{appointmentLocation}</p>
      </Card>
    </div>
  );
};

const TherapistProfilePage = () => {
  return (
    <div className="therapist-profile-page">
      <Header />
      <main className="main-content">
        <h1 className="profile-title">Departamento de Psicología Universitario</h1>

        {/* Renderizamos tres tarjetas de terapeuta usando el nuevo componente */}
        <TherapistCard
          name="Dra. Sarah Chen"
          photo="https://via.placeholder.com/100"
          bio="Psicóloga Clínica Licenciada • Especialista Universitario"
          appointmentInfo="Miércoles, 7 de Agosto a las 2:00 PM"
          appointmentLocation="Oficina 205 - Edificio de Servicios Estudiantiles"
        />
        <TherapistCard
          name="Dr. Juan López"
          photo="https://via.placeholder.com/100"
          bio="Psicólogo Educativo • Experto en Terapia Cognitivo-Conductual"
          appointmentInfo="Viernes, 9 de Agosto a las 11:30 AM"
          appointmentLocation="Clínica Universitaria - Sala 301"
        />
        <TherapistCard
          name="Lic. Ana Pérez"
          photo="https://via.placeholder.com/100"
          bio="Consejera Familiar • Especialista en Gestión Emocional"
          appointmentInfo="Lunes, 12 de Agosto a las 4:00 PM"
          appointmentLocation="Consultorio Virtual - Enlace Zoom"
        />

      </main>
    </div>
  );
};

export default TherapistProfilePage;