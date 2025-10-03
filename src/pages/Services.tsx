import { Droplets, Sparkles, Gem, Paintbrush, Award } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Droplets,
      name: 'Lavage Extra',
      description: 'Nettoyage complet intérieur et extérieur pour une propreté éclatante.',
      features: [
        'Lavage carrosserie haute pression',
        'Nettoyage vitres et jantes',
        'Aspiration intérieur complet',
        'Nettoyage tableau de bord',
      ],
      price: '120-150 DH',
    },
    {
      icon: Sparkles,
      name: 'Lavage Premium',
      description: 'Service complet avec attention aux détails pour un résultat exceptionnel.',
      features: [
        'Tout du Lavage Extra',
        'Lustrage carrosserie',
        'Traitement plastiques extérieurs',
        'Nettoyage coffre',
        'Désodorisation',
      ],
      price: '350-400 DH',
    },
    {
      icon: Gem,
      name: 'Lavage Complet',
      description: 'Le summum du lavage avec finitions professionnelles.',
      features: [
        'Tout du Lavage Premium',
        'Nettoyage moteur',
        'Traitement cuir/tissus',
        'Polish léger',
        'Protection céramique légère',
      ],
      price: '500-600 DH',
    },
    {
      icon: Award,
      name: 'Detailing Pro',
      description: 'Rénovation complète pour un véhicule comme neuf.',
      features: [
        'Rénovation complète',
        'Correction de peinture',
        'Polissage multi-étapes',
        'Protection céramique',
        'Traitement cuir complet',
      ],
      price: '800-1200 DH',
    },
    {
      icon: Paintbrush,
      name: 'Polissage Lustrage',
      description: 'Éliminez rayures et redonnez brillance à votre carrosserie.',
      features: [
        'Correction de micro-rayures',
        'Polissage professionnel',
        'Lustrage miroir',
        'Protection longue durée',
        'Traitement phares',
      ],
      price: '1350-1550 DH',
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#0D47A1]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des prestations premium adaptées à tous vos besoins, du simple lavage à la rénovation complète
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0D47A1] mt-2 mr-3"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-blue-900/30">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#0D47A1]">{service.price}</span>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="px-4 py-2 rounded-full border border-[#0D47A1] text-sm font-semibold hover:bg-[#0D47A1] transition-all duration-300"
                      >
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Besoin d'un service personnalisé ? Contactez-nous pour un devis sur mesure
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full gradient-blue text-white text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
