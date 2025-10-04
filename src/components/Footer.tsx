import { Facebook, Instagram, Music } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { name: 'Accueil', link: 'accueil' },
    { name: 'Services', link: 'services' },
    { name: 'Tarifs', link: 'tarifs' },
    { name: 'Zone de Service', link: 'zone-de-service' },
    { name: 'Promotions', link: 'promotions' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <footer className="bg-[#0A0F1C] border-t border-blue-900/30 py-12 relative">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1C]/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="bg-[#0A0F1C]/30 rounded-xl border border-blue-900/20 p-6 hover:border-blue-900/40 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Allowash</span>
              <span className="text-[#0D47A1]"> Detailing</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Votre spécialiste du lavage et detailing auto premium à Casablanca.
            </p>
          </div>

          {/* Navigation */}
          <div className="bg-[#0A0F1C]/30 rounded-xl border border-blue-900/20 p-6 hover:border-blue-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <div className="w-1 h-6 bg-[#0D47A1] rounded-full mr-3"></div>
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {links.map((link) => (
                <button
                  key={link.link}
                  onClick={() => onNavigate(link.link)}
                  className="text-gray-400 hover:text-[#0D47A1] transition-colors text-left py-1 px-2 rounded hover:bg-[#0D47A1]/10 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-[#0A0F1C]/30 rounded-xl border border-blue-900/20 p-6 hover:border-blue-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <div className="w-1 h-6 bg-[#0D47A1] rounded-full mr-3"></div>
              Heures d'Ouverture
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-1 px-2 rounded bg-[#0D47A1]/5">
                <span className="text-gray-300">Lun-Ven:</span>
                <span className="text-[#0D47A1] font-semibold">8h-19h</span>
              </div>
              <div className="flex justify-between items-center py-1 px-2 rounded bg-[#0D47A1]/5">
                <span className="text-gray-300">Samedi:</span>
                <span className="text-[#0D47A1] font-semibold">9h-18h</span>
              </div>
              <div className="flex justify-between items-center py-1 px-2 rounded bg-[#0D47A1]/5">
                <span className="text-gray-300">Dimanche:</span>
                <span className="text-[#0D47A1] font-semibold">10h-16h</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#0A0F1C]/30 rounded-xl border border-blue-900/20 p-6 hover:border-blue-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <div className="w-1 h-6 bg-[#0D47A1] rounded-full mr-3"></div>
              Suivez-nous
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/allowash1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-600/50 transition-all duration-300 group"
              >
                <Facebook size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/allowash1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-pink-600/20 border border-pink-600/30 flex items-center justify-center hover:bg-pink-600/30 hover:border-pink-600/50 transition-all duration-300 group"
              >
                <Instagram size={20} className="text-pink-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://tiktok.com/@allowash1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-600/20 border border-gray-600/30 flex items-center justify-center hover:bg-gray-600/30 hover:border-gray-600/50 transition-all duration-300 group"
              >
                <Music size={20} className="text-gray-300 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-900/30 pt-8 mt-8">
          <div className="bg-[#0A0F1C]/30 rounded-xl border border-blue-900/20 p-4 text-center">
            <p className="text-gray-400">© 2025 Allowash Detailing - Tous droits réservés</p>
            <button
              onClick={() => onNavigate('admin')}
              className="mt-2 text-xs text-gray-600 hover:text-gray-400 transition-colors opacity-30 hover:opacity-100"
              style={{ fontSize: '8px' }}
            >
              •
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
