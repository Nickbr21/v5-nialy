'use client';

import { useState, useEffect } from 'react';
import { Crown, Star, Clock, Shield, Users, CheckCircle, ArrowRight, Phone, Mail, Instagram, Zap, Award, Globe, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';



export default function GrupoVipPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    minutes: 5,
    seconds: 0
  });
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });

  // Timer countdown (5 minutos = 300 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const exclusiveBenefits = [
    {
      icon: Crown,
      title: "Acesso Prioritário",
      description: "Atendimento VIP com resposta em até 30 minutos"
    },
    {
      icon: Zap,
      title: "Ofertas Relâmpago",
      description: "Descontos exclusivos de até 40% em pacotes premium"
    },
    {
      icon: Award,
      title: "Experiências Únicas",
      description: "Acesso a roteiros e experiências não disponíveis ao público"
    },
    {
      icon: Globe,
      title: "Consultoria Especializada",
      description: "Consultor pessoal dedicado para suas viagens"
    }
  ];

  const vipPerks = [
    "Descontos exclusivos de até 40% em pacotes selecionados",
    "Upgrades gratuitos em hotéis e voos quando disponíveis",
    "Acesso antecipado a promoções e lançamentos",
    "Consultoria personalizada com especialista dedicado",
    "Suporte prioritário 24/7 via WhatsApp VIP",
    "Experiências exclusivas não disponíveis ao público geral",
    "Programa de fidelidade com benefícios crescentes",
    "Convites para eventos exclusivos da NIALY"
  ];

  const testimonials = [
    {
      name: "Patricia Oliveira",
      location: "Empresária - São Paulo",
      text: "O Grupo VIP da NIALY mudou completamente minha forma de viajar. Tenho acesso a ofertas incríveis e um atendimento que supera todas as expectativas. Vale cada centavo!",
      rating: 5,
      verified: "Membro VIP há 2 anos",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ricardo Santos",
      location: "Executivo - Rio de Janeiro",
      text: "Como executivo, preciso de agilidade e qualidade. O Grupo VIP me proporciona isso e muito mais. Já economizei milhares de reais e tive experiências únicas.",
      rating: 5,
      verified: "Membro VIP há 3 anos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscrição VIP enviada:', formData);
    // Redirecionar para página intermediária
    router.push('/bem-vindo-vip');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background - VÍDEO CINEMATOGRÁFICO DE EXPERIÊNCIAS DE LUXO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Vídeo cinematográfico com cortes rápidos de experiências de luxo */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback para vídeo de experiências de luxo */}
            <source src="https://cdn.pixabay.com/vimeo/459761340/luxury-59879.mp4?width=1920&hash=b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/80 to-[#0A1F44]/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-16 h-16 text-[#C1A36F] mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold font-serif">
              ACESSO IMEDIATO
              <span className="block text-[#C1A36F]">GRUPO VIP NIALY</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Seja parte de um círculo exclusivo de viajantes que têm acesso às melhores ofertas, 
            experiências únicas e atendimento VIP. Transforme sua forma de viajar para sempre.
          </p>

          {/* Timer */}
          <div className="bg-[#C1A36F]/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto border border-[#C1A36F]/30">
            <div className="text-[#C1A36F] text-sm font-medium mb-2">OFERTA LIMITADA - ÚLTIMAS VAGAS</div>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300">MIN</div>
              </div>
              <div className="text-2xl text-[#C1A36F]">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-300">SEG</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#inscricao"
              className="bg-[#C1A36F] hover:bg-[#B8956A] text-white px-10 py-5 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              QUERO SER VIP AGORA
            </a>
            <div className="text-sm opacity-80">
              ✓ Sem mensalidade • ✓ Acesso vitalício • ✓ Garantia de satisfação
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6 font-serif">
              Benefícios Exclusivos do Grupo VIP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desfrute de privilégios únicos que transformarão completamente sua experiência de viagem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exclusiveBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-[#C1A36F]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-[#C1A36F]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6 font-serif">
                O Que Você Recebe Como Membro VIP
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Não é apenas sobre descontos. É sobre ter acesso a um mundo de possibilidades 
                que poucos conhecem. É sobre viajar como você sempre sonhou.
              </p>
              
              <div className="space-y-4">
                {vipPerks.map((perk, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{perk}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=600&fit=crop" 
                  alt="Experiência VIP NIALY"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C1A36F] text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">VIP</div>
                <div className="text-sm opacity-90">Acesso Exclusivo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Membros VIP Já Economizaram Milhares
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja o que nossos membros VIP estão dizendo sobre suas experiências exclusivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-[#0A1F44] text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 mb-2">{testimonial.location}</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-3 text-sm text-[#C1A36F] flex items-center font-medium">
                        <Crown className="w-3 h-3 mr-1" />
                        {testimonial.verified}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-[#C1A36F] mb-2">500+</div>
              <div className="text-white text-lg">Membros VIP Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C1A36F] mb-2">40%</div>
              <div className="text-white text-lg">Desconto Médio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C1A36F] mb-2">R$ 15k</div>
              <div className="text-white text-lg">Economia Média Anual</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-16 bg-gradient-to-r from-[#C1A36F] to-[#B8956A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            ⚠️ ATENÇÃO: Apenas 50 Vagas Disponíveis Este Mês
          </h2>
          <p className="text-xl mb-6 opacity-90">
            O Grupo VIP NIALY é limitado para garantir atendimento exclusivo e personalizado. 
            Não perca sua chance de fazer parte deste círculo seleto.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Oferta por tempo limitado</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Vagas limitadas</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Garantia de satisfação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="inscricao" className="py-20 bg-[#F4F6F9]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-12 h-12 text-[#C1A36F] mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] font-serif">
                  Torne-se Membro VIP Agora
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Preencha os dados abaixo e receba acesso imediato aos benefícios exclusivos
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent transition-all text-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent transition-all text-lg"
                />
              </div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp (para receber ofertas exclusivas)"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent transition-all text-lg"
              />
              
              <div className="bg-[#C1A36F]/10 rounded-xl p-6 border border-[#C1A36F]/20">
                <div className="flex items-center mb-3">
                  <Crown className="w-6 h-6 text-[#C1A36F] mr-2" />
                  <h3 className="font-bold text-[#0A1F44]">Benefícios Imediatos:</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Acesso ao grupo VIP no WhatsApp</li>
                  <li>✓ Primeira oferta exclusiva em até 24h</li>
                  <li>✓ Consultor pessoal dedicado</li>
                  <li>✓ Descontos de até 40% em pacotes selecionados</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C1A36F] hover:bg-[#B8956A] text-white py-5 rounded-xl text-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Crown className="w-6 h-6 mr-3" />
                QUERO SER MEMBRO VIP AGORA
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              
              <p className="text-center text-sm text-gray-500">
                Ao se inscrever, você concorda em receber ofertas exclusivas via WhatsApp e e-mail. 
                Seus dados estão 100% seguros conosco.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-4xl font-bold text-[#C1A36F] mb-6 font-serif">NIALY</h3>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Transformando sonhos de viagem em realidade através de experiências 
                personalizadas e atendimento excepcional. Sua jornada dos sonhos começa aqui.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center hover:bg-[#B8956A] transition-colors">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="https://wa.me/5511921731022" className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center hover:bg-[#B8956A] transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
              <div className="space-y-3 text-gray-300">
                <a href="/" className="block hover:text-[#C1A36F] transition-colors">Início</a>
                <a href="/cotacao" className="block hover:text-[#C1A36F] transition-colors">Cotação</a>
                <a href="/grupo-vip" className="block hover:text-[#C1A36F] transition-colors">Grupo VIP</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contato VIP</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#C1A36F]" />
                  <a 
                    href="https://wa.me/5511921731022" 
                    className="hover:text-[#C1A36F] transition-colors"
                  >
                    +55 11 92173-1022
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#C1A36F]" />
                  <a 
                    href="mailto:atendimentonialy@gmail.com" 
                    className="hover:text-[#C1A36F] transition-colors"
                  >
                    atendimentonialy@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2 text-[#C1A36F]" />
                  @nialy.viagens
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NIALY. Todos os direitos reservados. CNPJ/Cadastur aqui.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}