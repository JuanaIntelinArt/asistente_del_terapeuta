import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import TherapistProfilePage from './pages/TherapistProfilePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* La página de inicio es la ruta principal */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/ayuda" element={<HelpPage />} />
          <Route path="/perfil" element={<TherapistProfilePage />} />
          <Route path="/login" element={<LoginPage />} /> {/* La página de login tiene su propia ruta */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;