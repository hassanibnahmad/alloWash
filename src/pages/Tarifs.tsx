import { Check } from 'lucide-react';

interface TarifsProps {
  onNavigate: (page: string) => void;
}

export default function Tarifs({ onNavigate }: TarifsProps) {
  const pricingCards = [
    {
      name: 'Lavage Extra',
      price: '120-150',
      description: 'Parfait pour un entretien régulier',
      features: [
        'Lavage extérieur haute pression',
        'Nettoyage vitres',
        'Aspiration intérieur',
        'Nettoyage tableau de bord',
        'Jantes propres',
      ],
      popular: false,
    },
    {
      name: 'Lavage Premium',
      price: '350-400',
      description: 'Le choix préféré de nos clients',
      features: [
        'Tout du Lavage Extra',
        'Lustrage carrosserie',
        'Traitement plastiques',
        'Nettoyage coffre',
        'Désodorisation intérieur',
        'Protection courte durée',
      ],
      popular: true,
    },
    {
      name: 'Lavage Complet',
      price: '500-600',
      description: 'Pour une propreté impeccable',
      features: [
        'Tout du Lavage Premium',
        'Nettoyage moteur',
        'Traitement cuir/tissus',
        'Polish léger',
        'Protection céramique légère',
        'Traitement sièges en profondeur',
      ],
      popular: false,
    },
    {
      name: 'Detailing Pro',
      price: '800-1200',
      description: 'Rénovation complète professionnelle',
      features: [
        'Correction de peinture',
        'Polissage multi-étapes',
        'Protection céramique premium',
        'Traitement cuir complet',
        'Nettoyage moteur détaillé',
        'Rénovation phares',
        'Garantie résultat',
      ],
      popular: false,
    },
    {
      name: 'Polissage Lustrage',
      price: '1350-1550',
      description: 'Élimination des imperfections',
      features: [
        'Correction micro-rayures',
        'Polissage professionnel',
        'Lustrage miroir',
        'Protection longue durée',
        'Traitement phares',
        'Résultat brillance maximale',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#0D47A1]">Tarifs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des prestations transparentes et adaptées à tous les budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pricingCards.map((card, index) => (
              <div
                key={index}
                className={`relative bg-[#0A0F1C]/50 rounded-2xl border overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  card.popular
                    ? 'border-[#0D47A1] shadow-xl shadow-blue-500/20'
                    : 'border-blue-900/30 hover:border-blue-500/50'
                }`}
              >
                {card.popular && (
                  <div className="absolute top-0 right-0 bg-[#0D47A1] text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
                    Populaire
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{card.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#0D47A1]">{card.price}</span>
                    <span className="text-gray-400 ml-2">DH</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-[#0D47A1]/20 flex items-center justify-center mr-3 mt-0.5">
                          <Check size={14} className="text-[#0D47A1]" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      card.popular
                        ? 'gradient-blue text-white hover:shadow-lg hover:shadow-blue-500/50'
                        : 'border-2 border-[#0D47A1] text-white hover:bg-[#0D47A1]'
                    }`}
                  >
                    Réserver maintenant
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#0D47A1]/20 to-[#1976D2]/20 rounded-2xl border border-blue-900/30 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d'un service personnalisé ?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour un devis sur mesure adapté à vos besoins spécifiques. Nous proposons également des forfaits mensuels avantageux.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="cta-button"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
