import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ayuda" element={<HelpPage />} />
          {/* Más rutas aquí para las otras páginas */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;