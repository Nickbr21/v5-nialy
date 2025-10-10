'use client';

import { useState, useEffect } from 'react';
import { Crown, Star, Users, Clock, Shield, CheckCircle, ArrowRight, Timer } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InsidersPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutos em segundos
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: ''
  });

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirecionar para página intermediária
    router.push('/bem-vindo-insiders');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Video Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F44] to-[#050505]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="max-w-6xl mx-auto px-6">
            {/* Timer de Urgência */}
            <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full mb-8 animate-pulse">
              <Timer className="w-5 h-5" />
              <span className="font-bold">OFERTA EXPIRA EM: {formatTime(timeLeft)}</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="w-12 h-12 text-[#C1A36F]" />
              <h1 className="text-6xl md:text-8xl font-bold">
                GRUPO <span className="text-[#C1A36F]">VIP</span>
              </h1>
              <Crown className="w-12 h-12 text-[#C1A36F]" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              ACESSO EXCLUSIVO AOS
              <br />
              <span className="text-[#C1A36F]">DESTINOS MAIS COBIÇADOS</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Junte-se a um seleto grupo de viajantes que têm acesso antecipado às nossas 
              ofertas mais exclusivas e experiências que não estão disponíveis ao público geral.
            </p>
          </div>
        </section>

        {/* Benefícios Exclusivos */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              BENEFÍCIOS <span className="text-[#C1A36F]">EXCLUSIVOS</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "OFERTAS EXCLUSIVAS",
                  description: "Acesso a pacotes que não são divulgados publicamente, com descontos de até 40%"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "GRUPO SELETO",
                  description: "Máximo de 100 membros ativos, garantindo exclusividade e atendimento personalizado"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "ACESSO ANTECIPADO",
                  description: "Seja o primeiro a saber sobre novos destinos e experiências antes de todos"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "SUPORTE PRIORITÁRIO",
                  description: "Linha direta com nossa equipe VIP, disponível 24/7 para membros exclusivos"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Escassez */}
        <section className="py-16 bg-[rgba(193,163,111,0.1)] border-y border-[rgba(193,163,111,0.3)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-[rgba(10,31,68,0.9)] backdrop-blur-sm rounded-2xl p-12 border border-[rgba(193,163,111,0.5)]">
              <h2 className="text-3xl font-bold mb-6 text-[#C1A36F]">
                ⚠️ ATENÇÃO: VAGAS LIMITADAS
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C1A36F] mb-2">100</div>
                  <div className="text-sm text-gray-300">VAGAS TOTAIS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">7</div>
                  <div className="text-sm text-gray-300">VAGAS RESTANTES</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C1A36F] mb-2">93%</div>
                  <div className="text-sm text-gray-300">OCUPAÇÃO</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-6">
                Quando atingirmos 100 membros, fecharemos as inscrições indefinidamente. 
                Esta pode ser sua única oportunidade de fazer parte deste grupo exclusivo.
              </p>
              
              <div className="bg-red-600/20 border border-red-600/50 rounded-lg p-4">
                <p className="text-red-300 font-semibold">
                  🔥 Últimas 7 vagas disponíveis - Garante já a sua!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplos de Ofertas Exclusivas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              OFERTAS <span className="text-[#C1A36F]">RECENTES</span> DO GRUPO VIP
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "MALDIVAS EXCLUSIVAS",
                  originalPrice: "R$ 180.000",
                  vipPrice: "R$ 108.000",
                  discount: "40% OFF",
                  description: "7 dias em resort over-water com jato privado incluso",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
                  features: ["Jato Privado", "Villa sobre a água", "Chef Particular", "Spa Privativo"]
                },
                {
                  title: "SAFARI TANZÂNIA VIP",
                  originalPrice: "R$ 220.000",
                  vipPrice: "R$ 154.000",
                  discount: "30% OFF",
                  description: "10 dias de safari exclusivo com acampamento privado",
                  image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
                  features: ["Acampamento Privado", "Guia Especializado", "Helicóptero", "Fotógrafo Profissional"]
                },
                {
                  title: "JAPÃO IMPERIAL",
                  originalPrice: "R$ 160.000",
                  vipPrice: "R$ 112.000",
                  discount: "30% OFF",
                  description: "12 dias explorando o Japão com experiências imperiais",
                  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
                  features: ["Cerimônia do Chá Privada", "Ryokan Exclusivo", "Guia Cultural", "Acesso a Templos Privados"]
                }
              ].map((offer, index) => (
                <div key={index} className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {offer.discount}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{offer.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                        <span className="text-2xl font-bold text-[#C1A36F]">{offer.vipPrice}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#C1A36F]" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-4">
                <strong className="text-[#C1A36F]">Estas ofertas foram enviadas exclusivamente para membros VIP</strong>
                <br />
                e esgotaram em menos de 48 horas.
              </p>
            </div>
          </div>
        </section>

        {/* Formulário de Inscrição */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                GARANTA SUA VAGA NO
                <br />
                <span className="text-[#C1A36F]">GRUPO VIP NIALY</span>
              </h2>
              <p className="text-xl text-gray-300">
                Preencha os dados abaixo e receba acesso imediato ao nosso grupo exclusivo no WhatsApp
              </p>
            </div>
            
            <div className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-2xl p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">WhatsApp *</label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Principal Interesse</label>
                    <select
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="luxo-europa">Luxo na Europa</option>
                      <option value="safari-africa">Safari na África</option>
                      <option value="asia-exclusiva">Ásia Exclusiva</option>
                      <option value="ilhas-paradisiacas">Ilhas Paradisíacas</option>
                      <option value="aventuras-premium">Aventuras Premium</option>
                      <option value="experiencias-gastronomicas">Experiências Gastronômicas</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-[rgba(193,163,111,0.1)] border border-[rgba(193,163,111,0.3)] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#C1A36F] mb-3">🎁 BÔNUS EXCLUSIVO DE BOAS-VINDAS</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C1A36F]" />
                      <span>E-book "Guia Secreto dos Destinos de Luxo" (R$ 297)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C1A36F]" />
                      <span>Consultoria gratuita de 30 minutos com nosso especialista</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C1A36F]" />
                      <span>Acesso ao arquivo com mais de 500 destinos exclusivos</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black hover:scale-105 shadow-2xl hover:shadow-[#C1A36F]/50'
                    }`}
                  >
                    {isSubmitting ? 'PROCESSANDO...' : 'QUERO FAZER PARTE DO GRUPO VIP'}
                  </button>
                  
                  <p className="text-sm text-gray-400 mt-4">
                    Ao clicar, você será redirecionado para nosso grupo exclusivo no WhatsApp
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Garantias */}
        <section className="py-16 bg-[rgba(193,163,111,0.05)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "100% GRATUITO",
                  description: "Sem taxas, sem mensalidades. Acesso completamente gratuito para sempre."
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "GRUPO SELETO",
                  description: "Máximo de 100 membros ativos. Quando lotarmos, fecharemos as inscrições."
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "OFERTAS EXCLUSIVAS",
                  description: "Descontos de até 40% em experiências que não são oferecidas ao público."
                }
              ].map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black mx-auto mb-6">
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{guarantee.title}</h3>
                  <p className="text-gray-300">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}