import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { page: 'Accueil', link: 'accueil' },
    { page: 'Services', link: 'services' },
    { page: 'Tarifs', link: 'tarifs' },
    { page: 'Zone de Service', link: 'zone-de-service' },
    { page: 'Promotions', link: 'promotions' },
    { page: 'Contact', link: 'contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A0F1C]/95 backdrop-blur-sm border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => onNavigate('accueil')}
          >
            <span className="text-white">Allowash</span>
            <span className="text-[#0D47A1]"> Detailing</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.link}
                onClick={() => onNavigate(item.link)}
                className={`transition-all duration-300 ${
                  currentPage === item.link
                    ? 'text-[#0D47A1] font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.page}
              </button>
            ))}
          </nav>

          <button
            onClick={() => onNavigate('contact')}
            className="hidden md:block px-6 py-3 rounded-full gradient-blue text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Réserver
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1C] border-t border-blue-900/30 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.link}
                onClick={() => {
                  onNavigate(item.link);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded transition-all ${
                  currentPage === item.link
                    ? 'bg-[#0D47A1] text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {item.page}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 rounded-full gradient-blue text-white font-semibold"
            >
              Réserver
            </button>
          </div>
        </div>
      )}
      <button
  onClick={() => onNavigate('admin')}
  className="hidden"
  id="admin-link"
>
  Admin
</button>
    </header>
  );
}
