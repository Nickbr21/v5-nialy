'use client';

import { useState, useEffect } from 'react';
import { Star, Crown, Users, Gift, Clock, Check, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InsidersLP() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    minutes: 5,
    seconds: 0
  });
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer de 5 minutos
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        if (prev.seconds === 0) {
          return {
            minutes: prev.minutes - 1,
            seconds: 59
          };
        }
        
        return {
          ...prev,
          seconds: prev.seconds - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    
    console.log('Formulário Insiders enviado:', formData);
    
    // Redirecionar para página intermediária
    router.push('/bem-vindo-insiders');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION COM VÍDEO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo de fundo simulado com gradientes de destinos de luxo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-black"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Efeitos visuais de luxo */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C1A36F] rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#C1A36F] text-black px-6 py-2 rounded-full font-bold mb-8">
            <Crown className="w-5 h-5" />
            ACESSO EXCLUSIVO
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-playfair">
            NIALY
            <br />
            <span className="text-[#C1A36F] text-glow">INSIDERS</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed text-gray-300 font-montserrat">
            O grupo VIP mais exclusivo do Brasil para viajantes de alto padrão
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-8 py-3 rounded-full font-bold text-lg">
              ✨ APENAS 100 VAGAS DISPONÍVEIS
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS EXCLUSIVOS */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
            BENEFÍCIOS EXCLUSIVOS DOS INSIDERS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-[#C1A36F]" />,
                title: "OFERTAS RELÂMPAGO",
                description: "Acesso prioritário a ofertas exclusivas com até 70% de desconto em destinos de luxo, disponíveis apenas para membros."
              },
              {
                icon: <Crown className="w-12 h-12 text-[#C1A36F]" />,
                title: "EXPERIÊNCIAS VIP",
                description: "Eventos exclusivos, jantares com chefs renomados e experiências únicas que não estão disponíveis ao público geral."
              },
              {
                icon: <Users className="w-12 h-12 text-[#C1A36F]" />,
                title: "NETWORKING PREMIUM",
                description: "Conecte-se com outros executivos e empresários de alto nível que compartilham a paixão por viagens extraordinárias."
              },
              {
                icon: <Gift className="w-12 h-12 text-[#C1A36F]" />,
                title: "UPGRADES GRATUITOS",
                description: "Upgrades automáticos em voos, hotéis e experiências, além de cortesias especiais em nossos parceiros premium."
              },
              {
                icon: <Clock className="w-12 h-12 text-[#C1A36F]" />,
                title: "ATENDIMENTO 24/7",
                description: "Linha direta exclusiva com nossa equipe especializada, disponível 24 horas por dia para qualquer necessidade."
              },
              {
                icon: <Star className="w-12 h-12 text-[#C1A36F]" />,
                title: "CONSULTORIA PERSONALIZADA",
                description: "Sessões mensais de consultoria gratuita para planejar suas próximas jornadas com nossos especialistas."
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#C1A36F] font-playfair">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed font-montserrat">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCASSEZ - MOVIDA PARA APÓS OS BENEFÍCIOS */}
      <section className="py-24 bg-[#C1A36F] text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 font-playfair">
            NÃO PERCA ESTA OPORTUNIDADE
          </h2>
          
          <p className="text-2xl mb-12 leading-relaxed font-montserrat">
            Apenas <strong>100 vagas</strong> estão disponíveis para o grupo NIALY Insiders. 
            Uma vez preenchidas, a próxima abertura será apenas em 2025.
          </p>
          
          {/* Timer de Luxo */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-12 inline-block">
            <div className="text-lg font-semibold mb-4 font-montserrat">OFERTA EXPIRA EM:</div>
            <div className="flex justify-center items-center gap-4">
              <div className="bg-black text-[#C1A36F] rounded-xl p-4 min-w-[80px]">
                <div className="text-3xl font-bold font-playfair">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm font-montserrat">MIN</div>
              </div>
              <div className="text-3xl font-bold">:</div>
              <div className="bg-black text-[#C1A36F] rounded-xl p-4 min-w-[80px]">
                <div className="text-3xl font-bold font-playfair">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm font-montserrat">SEG</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2 font-playfair">87</div>
              <div className="text-sm font-montserrat">Vagas Preenchidas</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2 font-playfair">13</div>
              <div className="text-sm font-montserrat">Vagas Restantes</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2 font-playfair">2025</div>
              <div className="text-sm font-montserrat">Próxima Abertura</div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBERÁ */}
      <section className="py-24 bg-[#0A1F44]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
            O QUE VOCÊ RECEBERÁ IMEDIATAMENTE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  "Acesso ao grupo VIP exclusivo no WhatsApp",
                  "E-book: 'Os 50 Destinos Mais Exclusivos do Mundo'",
                  "Lista de contatos premium em 30 países",
                  "Guia de etiqueta para viagens de luxo",
                  "Acesso à plataforma de ofertas exclusivas",
                  "Convite para evento de networking em São Paulo"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-300 font-montserrat">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
                alt="Experiência de luxo"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C1A36F] text-black p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold font-playfair">R$ 0</div>
                <div className="text-sm font-semibold font-montserrat">Taxa de Adesão</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS DE MEMBROS */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
            O QUE OS MEMBROS ESTÃO DIZENDO
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Carlos Eduardo",
                role: "CEO, Grupo Empresarial",
                text: "O NIALY Insiders mudou completamente minha forma de viajar. As ofertas exclusivas me permitiram conhecer lugares que jamais imaginei, sempre com o mais alto padrão de qualidade.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Ana Beatriz",
                role: "Diretora de Investimentos",
                text: "Além das viagens incríveis, o networking no grupo é excepcional. Já fechei dois negócios importantes com contatos que conheci através do NIALY Insiders.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C1A36F] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 text-gray-300 italic font-montserrat">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#C1A36F] font-playfair">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm font-montserrat">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE INSCRIÇÃO */}
      <section className="py-24 bg-gradient-to-b from-[#0A1F44] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-white font-playfair">
              GARANTA SUA VAGA AGORA
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-montserrat">
              Preencha os dados abaixo e receba acesso imediato ao grupo mais exclusivo do Brasil
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Nome Completo *</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors text-lg font-montserrat"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors text-lg font-montserrat"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">WhatsApp *</label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors text-lg font-montserrat"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-6 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
                >
                  {isSubmitting ? 'PROCESSANDO...' : 'QUERO FAZER PARTE DO NIALY INSIDERS'}
                </button>
                
                <p className="text-gray-400 text-sm mt-4 font-montserrat">
                  Ao clicar, você concorda com nossos termos de uso e política de privacidade
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLIFICADO */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold text-[#C1A36F] mb-4 font-playfair">NIALY INSIDERS</div>
          <p className="text-gray-400 font-montserrat">
            O grupo VIP mais exclusivo do Brasil para viajantes de alto padrão
          </p>
        </div>
      </footer>
    </div>
  );
}