import { useState } from 'react';
import { LogOut, Plus, Menu, X } from 'lucide-react';
import PromotionsManager from './PromotionsManager';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState('promotions');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'promotions', label: 'Promotions', icon: Plus },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] animate-fade-in">
      <header className="bg-[#0A0F1C] border-b border-blue-900/30 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden mr-4 text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold">
              <span className="text-white">Admin</span>
              <span className="text-[#0D47A1]"> Dashboard</span>
            </h1>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center px-4 py-2 rounded-full border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all duration-300"
          >
            <LogOut size={18} className="mr-2" />
            <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#0A0F1C] border-r border-blue-900/30 transition-transform duration-300 pt-20 md:pt-0`}
        >
          <nav className="p-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#0D47A1] text-white'
                    : 'text-gray-400 hover:bg-[#0D47A1]/10 hover:text-white'
                }`}
              >
                <item.icon size={20} className="mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        <main className="flex-1 p-6 md:p-8">
          {activeSection === 'promotions' && <PromotionsManager />}
        </main>
      </div>
    </div>
  );
}
