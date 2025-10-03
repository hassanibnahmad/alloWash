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
    <footer className="bg-[#0A0F1C] border-t border-blue-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Allowash</span>
              <span className="text-[#0D47A1]"> Detailing</span>
            </h3>
            <p className="text-gray-400">
              Votre spécialiste du lavage et detailing auto premium à Casablanca.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <button
                  key={link.link}
                  onClick={() => onNavigate(link.link)}
                  className="text-gray-400 hover:text-[#0D47A1] transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/allowash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/allowash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@allowash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Music size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Allowash Detailing - Tous droits réservés</p>
          <button
            onClick={() => onNavigate('admin')}
            className="mt-2 text-xs text-gray-600 hover:text-gray-400 transition-colors opacity-30 hover:opacity-100"
            style={{ fontSize: '8px' }}
          >
            •
          </button>
        </div>
      </div>
    </footer>
  );
}
