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

  // URL routing mapping
  const routeMapping: { [key: string]: string } = {
    '/': 'accueil',
    '/home': 'accueil',
    '/accueil': 'accueil',
    '/services': 'services',
    '/tarifs': 'tarifs',
    '/zone-de-service': 'zone-de-service',
    '/promotions': 'promotions',
    '/contact': 'contact',
    '/admin': 'admin'
  };

  const pageToUrl: { [key: string]: string } = {
    'accueil': '/',
    'services': '/services',
    'tarifs': '/tarifs',
    'zone-de-service': '/zone-de-service',
    'promotions': '/promotions',
    'contact': '/contact',
    'admin': '/admin'
  };

  useEffect(() => {
    const path = window.location.pathname;
    
    if (path === '/admin') {
      setIsAdmin(true);
      const auth = sessionStorage.getItem('adminAuth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
    } else {
      setIsAdmin(false);
      // Map URL to page
      const page = routeMapping[path] || 'accueil';
      setCurrentPage(page);
    }

    // Listen for browser back/forward navigation
    const handlePopState = () => {
      const newPath = window.location.pathname;
      const newPage = routeMapping[newPath] || 'accueil';
      setCurrentPage(newPage);
      if (newPath === '/admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
    // Add smooth transition effect
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('page-transition-out');
      
      setTimeout(() => {
        setCurrentPage(page);
        const url = pageToUrl[page] || '/';
        window.history.pushState(null, '', url);
        
        // Handle admin navigation
        if (page === 'admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        
        // Add entrance animation
        mainElement.classList.remove('page-transition-out');
        mainElement.classList.add('page-transition');
        
        // Smooth scroll to top with custom easing
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth'
        });
        
        // Remove animation class after completion
        setTimeout(() => {
          mainElement.classList.remove('page-transition');
        }, 800);
      }, 300);
    } else {
      // Fallback if main element not found
      setCurrentPage(page);
      const url = pageToUrl[page] || '/';
      window.history.pushState(null, '', url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (page === 'admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
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
      <WhatsAppWidget currentPage={currentPage} />
    </div>
  );
}

export default App;
