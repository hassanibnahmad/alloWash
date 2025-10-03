import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Music, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: '', telephone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 animate-fade-in">
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez<span className="text-[#0D47A1]">-nous</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une question ? Besoin d'un devis ? Notre équipe est à votre écoute 7j/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 p-8">
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        href="tel:+212612345678"
                        className="text-gray-400 hover:text-[#0D47A1] transition-colors"
                      >
                        +212 6 12 34 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@allowash.ma"
                        className="text-gray-400 hover:text-[#0D47A1] transition-colors"
                      >
                        contact@allowash.ma
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-gray-400">Casablanca, Maroc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 p-8">
                <h2 className="text-2xl font-bold mb-6">Suivez-nous</h2>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://facebook.com/allowash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-xl bg-blue-600/10 border border-blue-600/30 hover:bg-blue-600/20 transition-all duration-300 group"
                  >
                    <Facebook size={32} className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com/allowash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-xl bg-pink-600/10 border border-pink-600/30 hover:bg-pink-600/20 transition-all duration-300 group"
                  >
                    <Instagram size={32} className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400">Instagram</span>
                  </a>
                  <a
                    href="https://tiktok.com/@allowash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-xl bg-gray-600/10 border border-gray-600/30 hover:bg-gray-600/20 transition-all duration-300 group"
                  >
                    <Music size={32} className="text-gray-300 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400">TikTok</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 rounded-2xl border border-green-600/30 p-6">
                <h3 className="text-xl font-bold mb-3">Contactez-nous sur WhatsApp</h3>
                <p className="text-gray-300 mb-4">
                  Réponse rapide et devis instantané via WhatsApp
                </p>
                <a
                  href="https://wa.me/212612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} className="mr-2" />
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-[#0A0F1C]/50 rounded-2xl border border-blue-900/30 p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un Message</h2>

              {submitted ? (
                <div className="py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-green-500 mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white"
                      placeholder="+212 6XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border border-blue-900/30 focus:border-[#0D47A1] focus:outline-none transition-colors text-white resize-none"
                      placeholder="Décrivez votre besoin..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full gradient-blue text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
