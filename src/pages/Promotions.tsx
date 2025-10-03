import { useState, useEffect } from 'react';
import { Tag, Clock, Gift, Percent } from 'lucide-react';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  code: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

interface PromotionsProps {
  onNavigate: (page: string) => void;
}

export default function Promotions({ onNavigate }: PromotionsProps) {
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    const savedPromotions = localStorage.getItem('promotions');
    if (savedPromotions) {
      const allPromotions = JSON.parse(savedPromotions);
      const activePromotions = allPromotions.filter((promo: Promotion) => {
        const now = new Date();
        const startDate = new Date(promo.startDate);
        const endDate = new Date(promo.endDate);
        return promo.isActive && now >= startDate && now <= endDate;
      });
      setPromotions(activePromotions);
    }
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <Gift className="inline-block mr-4 text-[#0D47A1]" size={48} />
              Nos <span className="text-[#0D47A1]">Promotions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profitez de nos offres spéciales et économisez sur nos services de lavage premium
            </p>
          </div>

          {promotions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {promotions.map((promotion) => (
                <div
                  key={promotion.id}
                  className="relative bg-[#0A0F1C]/50 rounded-2xl border border-[#0D47A1]/30 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-[#0D47A1] hover:shadow-xl hover:shadow-blue-500/20"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0D47A1] to-[#1976D2] rounded-full p-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">-{promotion.discount}%</div>
                      <div className="text-xs text-blue-100">RÉDUCTION</div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#0D47A1]/20 rounded-full p-2 mr-3">
                        <Tag className="text-[#0D47A1]" size={20} />
                      </div>
                      <h3 className="text-2xl font-bold">{promotion.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{promotion.description}</p>

                    {/* Promo Code Section */}
                    <div className="bg-gradient-to-r from-[#0D47A1]/10 to-[#1976D2]/10 rounded-xl p-4 mb-6 border border-[#0D47A1]/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Code promo :</div>
                          <div className="text-xl font-mono font-bold text-[#0D47A1]">
                            {promotion.code}
                          </div>
                        </div>
                        <Percent className="text-[#0D47A1]" size={24} />
                      </div>
                    </div>

                    {/* Validity Period */}
                    <div className="flex items-center text-sm text-gray-400 mb-6">
                      <Clock size={16} className="mr-2" />
                      <span>
                        Valable jusqu'au{' '}
                        <span className="font-semibold text-white">
                          {new Date(promotion.endDate).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full gradient-blue py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      Réserver avec ce code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 p-12 max-w-2xl mx-auto">
                <Gift className="mx-auto mb-6 text-gray-400" size={64} />
                <h3 className="text-2xl font-bold mb-4 text-gray-300">
                  Aucune promotion active pour le moment
                </h3>
                <p className="text-gray-400 mb-8">
                  Revenez bientôt pour découvrir nos nouvelles offres spéciales !
                </p>
                <button
                  onClick={() => onNavigate('tarifs')}
                  className="cta-button"
                >
                  Voir nos tarifs
                </button>
              </div>
            </div>
          )}

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-[#0D47A1]/20 to-[#1976D2]/20 rounded-2xl border border-blue-900/30 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Vous voulez être informé de nos prochaines promotions ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour être averti en priorité de nos offres spéciales et bénéficier de réductions exclusives.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="cta-button"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}