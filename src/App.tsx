import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Tarifs from './pages/Tarifs';
import ZoneDeService from './pages/ZoneDeService';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setIsAdmin(true);
      const auth = sessionStorage.getItem('adminAuth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('adminAuth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'tarifs':
        return <Tarifs onNavigate={handleNavigate} />;
      case 'zone-de-service':
        return <ZoneDeService onNavigate={handleNavigate} />;
      case 'promotions':
        return <Promotions onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil onNavigate={handleNavigate} />;
    }
  };

  if (isAdmin) {
    if (!isAuthenticated) {
      return <AdminLogin onLogin={handleLogin} />;
    }
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
