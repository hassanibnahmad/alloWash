import { MapPin, Check } from 'lucide-react';

interface ZoneDeServiceProps {
  onNavigate: (page: string) => void;
}

export default function ZoneDeService({ onNavigate }: ZoneDeServiceProps) {
  const zones = [
    {
      name: 'Casablanca Centre',
      areas: ['Centre-Ville', 'Quartier des Habous', 'Ancienne Médina'],
    },
    {
      name: 'Maarif',
      areas: ['Maarif Extension', 'Gauthier', 'Racine'],
    },
    {
      name: 'Anfa',
      areas: ['Anfa Supérieur', 'Anfa Place', 'Val d\'Anfa'],
    },
    {
      name: 'Ain Diab',
      areas: ['Corniche', 'Ain Diab Extension', 'Sidi Abderrahmane'],
    },
    {
      name: 'Bourgogne',
      areas: ['CIL', 'Beausejour', 'Polo'],
    },
    {
      name: 'California',
      areas: ['California', 'Sbata', 'Lissasfa'],
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zone <span className="text-[#0D47A1]">d'Intervention</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous intervenons dans toute la ville de Casablanca pour vous offrir nos services premium à domicile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Zones Couvertes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zones.map((zone, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#0D47A1]/10 to-transparent rounded-xl border border-blue-900/30 p-4 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <h3 className="font-bold text-lg mb-3 text-[#0D47A1]">{zone.name}</h3>
                      <div className="space-y-2">
                        {zone.areas.map((area, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check size={14} className="text-[#0D47A1] mr-2" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0D47A1]/20 to-[#1976D2]/20 rounded-2xl border border-blue-900/30 p-6">
                <h3 className="text-xl font-bold mb-3">Votre quartier n'est pas listé ?</h3>
                <p className="text-gray-300 mb-4">
                  Contactez-nous ! Nous étendons régulièrement notre zone d'intervention et pouvons faire une exception pour vous.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-full gradient-blue text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Nous contacter
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Carte Interactive</h2>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0D47A1]/20 to-[#1976D2]/20 border border-blue-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-[#0D47A1]/30 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-[#0D47A1]/40 animate-pulse delay-75"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#0D47A1]/50 animate-pulse delay-150"></div>
                  </div>
                  <MapPin size={64} className="text-[#0D47A1] relative z-10" />
                </div>
                <p className="text-center text-gray-400 mt-6">
                  Zone de service couvrant l'ensemble de Casablanca
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30">
              <div className="text-4xl font-bold text-[#0D47A1] mb-2">20+</div>
              <p className="text-gray-300">Quartiers Couverts</p>
            </div>
            <div className="text-center p-6 bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30">
              <div className="text-4xl font-bold text-[#0D47A1] mb-2">30min</div>
              <p className="text-gray-300">Délai d'Intervention Moyen</p>
            </div>
            <div className="text-center p-6 bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30">
              <div className="text-4xl font-bold text-[#0D47A1] mb-2">7j/7</div>
              <p className="text-gray-300">Service Disponible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
