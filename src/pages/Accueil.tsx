import { Car, Shield, Clock, Star, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import carCareImage from '../assets/close-up-car-care-process.jpg';

interface AccueilProps {
  onNavigate: (page: string) => void;
}

export default function Accueil({ onNavigate }: AccueilProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = carCareImage;
  }, []);

  const avis = [
    { name: 'Amine', text: 'Ma voiture est comme neuve ! Service impeccable.', rating: 5 },
    { name: 'Leila', text: 'Rapides et pros, je recommande vivement !', rating: 5 },
    { name: 'Youssef', text: 'Excellent rapport qualité-prix, équipe au top.', rating: 5 },
  ];

  const faqItems = [
    {
      q: 'Combien de temps dure un lavage complet ?',
      a: 'Environ 1h30 selon le service choisi. Le lavage extra prend 45 min, tandis que le detailing pro peut prendre jusqu\'à 3h.',
    },
    {
      q: 'Faites-vous le déplacement ?',
      a: 'Oui, nous nous déplaçons uniquement dans Casablanca pour le moment. Consultez notre page "Zone de Service" pour plus de détails.',
    },
    {
      q: 'Quels produits utilisez-vous ?',
      a: 'Nous utilisons uniquement des produits professionnels haut de gamme, respectueux de votre véhicule et de l\'environnement.',
    },
    {
      q: 'Proposez-vous des abonnements ?',
      a: 'Oui, nous proposons des forfaits mensuels avantageux. Contactez-nous pour plus d\'informations.',
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fast-loading gradient placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1a2332] to-[#0D47A1]/40"></div>
        
        {/* Background Image with lazy loading */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: imageLoaded ? `url(${carCareImage})` : 'none',
          }}
        ></div>
        
        {/* Modern Overlay with Multiple Layers */}
        <div className="absolute inset-0 bg-[#0A0F1C]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/20 via-transparent to-[#1976D2]/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 animate-slide-up">
          <div className="mb-6">
            <Car size={80} className="mx-auto text-[#0D47A1] animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Car Wash<br />
            <span className="text-[#0D47A1]">& Detailing</span> à Casablanca
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Un service haut de gamme pour sublimer votre véhicule
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="cta-button text-lg"
          >
            Réservez maintenant
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#0D47A1]" />
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Shield size={48} className="mx-auto text-[#0D47A1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualité Premium</h3>
              <p className="text-gray-400">Produits professionnels et techniques de pointe</p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Clock size={48} className="mx-auto text-[#0D47A1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Service Rapide</h3>
              <p className="text-gray-400">Intervention rapide et efficace à domicile</p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <Star size={48} className="mx-auto text-[#0D47A1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Satisfaction Garantie</h3>
              <p className="text-gray-400">Des centaines de clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="text-[#0D47A1] font-semibold">Allowash Detailing</span>, votre spécialiste du lavage et detailing auto premium à Casablanca.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Nous sommes passionnés par l'automobile et déterminés à offrir un service d'excellence. Notre équipe de professionnels utilise les meilleures techniques et produits pour redonner à votre véhicule son éclat d'origine.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="cta-button-secondary"
              >
                Découvrir nos services
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0D47A1] to-[#1976D2] p-1">
                <div className="w-full h-full rounded-2xl bg-[#0A0F1C] flex items-center justify-center">
                  <Car size={200} className="text-[#0D47A1] opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Avis <span className="text-[#0D47A1]">Clients</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avis.map((avis, index) => (
              <div
                key={index}
                className="bg-[#0A0F1C]/50 p-8 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(avis.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{avis.text}"</p>
                <p className="text-[#0D47A1] font-semibold">– {avis.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Questions <span className="text-[#0D47A1]">Fréquentes</span>
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A0F1C]/50 rounded-xl border border-blue-900/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#0D47A1]/10 transition-colors"
                >
                  <span className="text-left font-semibold">{item.q}</span>
                  <ChevronDown
                    size={24}
                    className={`text-[#0D47A1] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 text-gray-400 border-t border-blue-900/30 animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
