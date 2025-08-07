import React from 'react';
import Header from '../components/Header';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <Header />
      <main className="main-content">
        <h1 className="chat-title">Chat con tu Asistente del Terapeuta</h1>
        <div className="chat-container">
          <div className="chat-messages">
            {/* Aquí se mostrarán los mensajes de la conversación */}
            <div className="message-container received">
              <p className="message-text">Hola, soy tu asistente de IA. ¿En qué puedo ayudarte hoy?</p>
            </div>
          </div>
          <div className="chat-input-container">
            <input type="text" placeholder="Escribe tu mensaje..." className="chat-input" />
            <button className="send-button">
              <span className="send-icon">➤</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;