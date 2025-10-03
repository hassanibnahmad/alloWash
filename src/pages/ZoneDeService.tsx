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
                <div className="aspect-square rounded-xl border border-blue-900/30 overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106543.69065419178!2d-7.683045!3d33.5928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1696350000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-[#0A0F1C]/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-900/30">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#0D47A1]" />
                      <span className="text-sm font-medium">Casablanca</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-6">
                  Zone de service couvrant l'ensemble de Casablanca et ses environs
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-[#0D47A1]"></div>
                    <span>Centre-ville</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-[#1976D2]"></div>
                    <span>Quartiers résidentiels</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-[#42A5F5]"></div>
                    <span>Zones d'affaires</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-[#64B5F6]"></div>
                    <span>Périphérie</span>
                  </div>
                </div>
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
