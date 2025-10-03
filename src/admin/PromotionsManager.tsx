import { useState } from 'react';
import { Plus, CreditCard as Edit2, Trash2, X, Upload } from 'lucide-react';
import type { Promotion } from './types';

const initialPromotions: Promotion[] = [
  {
    id: '1',
    titre: '-20% sur le Lavage Premium',
    description: 'Profitez d\'une réduction exceptionnelle sur notre service le plus populaire',
    prixOffre: '280-320 DH',
    validite: 'Jusqu\'à fin du mois',
    image: '',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    titre: 'Polissage + Lavage Complet',
    description: 'Économisez 15% en combinant ces deux services premium',
    prixOffre: '-15%',
    validite: 'Durée limitée',
    image: '',
    createdAt: new Date().toISOString(),
  },
];

export default function PromotionsManager() {
  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null);
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    prixOffre: '',
    validite: '',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState('');

  const handleOpenModal = (promotion?: Promotion) => {
    if (promotion) {
      setEditingPromotion(promotion);
      setFormData({
        titre: promotion.titre,
        description: promotion.description,
        prixOffre: promotion.prixOffre,
        validite: promotion.validite,
        image: promotion.image,
      });
      setImagePreview(promotion.image);
    } else {
      setEditingPromotion(null);
      setFormData({
        titre: '',
        description: '',
        prixOffre: '',
        validite: '',
        image: '',
      });
      setImagePreview('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPromotion(null);
    setFormData({
      titre: '',
      description: '',
      prixOffre: '',
      validite: '',
      image: '',
    });
    setImagePreview('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData({ ...formData, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingPromotion) {
      setPromotions(
        promotions.map((promo) =>
          promo.id === editingPromotion.id
            ? { ...promo, ...formData }
            : promo
        )
      );
    } else {
      const newPromotion: Promotion = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      setPromotions([...promotions, newPromotion]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette promotion ?')) {
      setPromotions(promotions.filter((promo) => promo.id !== id));
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Gestion des Promotions</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center px-6 py-3 rounded-full gradient-blue text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <Plus size={20} className="mr-2" />
          Nouvelle Promotion
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
          >
            {promo.image && (
              <div className="aspect-video bg-gradient-to-br from-[#0D47A1]/20 to-[#1976D2]/20 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.titre}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{promo.titre}</h3>
              <p className="text-gray-400 text-sm mb-3">{promo.description}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#0D47A1] font-bold">{promo.prixOffre}</span>
                <span className="text-xs text-gray-500">{promo.validite}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleOpenModal(promo)}
                  className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg border border-[#0D47A1] text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white transition-all duration-300"
                >
                  <Edit2 size={16} className="mr-2" />
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(promo.id)}
                  className="flex items-center justify-center px-4 py-2 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all duration-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {promotions.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">Aucune promotion pour le moment</p>
          <button
            onClick={() => handleOpenModal()}
            className="mt-4 px-6 py-3 rounded-full border border-[#0D47A1] text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white transition-all duration-300"
          >
            Créer votre première promotion
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-[#0A0F1C] rounded-2xl border border-blue-900/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-[#0A0F1C] border-b border-blue-900/30 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">
                {editingPromotion ? 'Modifier la Promotion' : 'Nouvelle Promotion'}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Titre
                </label>
                <input
                  type="text"
                  value={formData.titre}
                  onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white"
                  placeholder="Ex: -20% sur le Lavage Premium"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white resize-none"
                  placeholder="Description de la promotion"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Prix/Offre
                  </label>
                  <input
                    type="text"
                    value={formData.prixOffre}
                    onChange={(e) =>
                      setFormData({ ...formData, prixOffre: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white"
                    placeholder="Ex: 280-320 DH ou -15%"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Validité
                  </label>
                  <input
                    type="text"
                    value={formData.validite}
                    onChange={(e) =>
                      setFormData({ ...formData, validite: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white"
                    placeholder="Ex: Jusqu'à fin du mois"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Image
                </label>
                <div className="border-2 border-dashed border-blue-900/30 rounded-lg p-6 text-center hover:border-[#0D47A1] transition-colors">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-48 mx-auto rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview('');
                          setFormData({ ...formData, image: '' });
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload size={48} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-400 mb-2">
                        Cliquez pour télécharger une image
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="inline-block px-4 py-2 rounded-lg border border-[#0D47A1] text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        Choisir une image
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 rounded-full border border-gray-600 text-gray-400 hover:bg-gray-800 transition-all duration-300"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-full gradient-blue text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  {editingPromotion ? 'Enregistrer' : 'Créer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
