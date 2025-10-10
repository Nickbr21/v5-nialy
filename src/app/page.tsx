'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play, Star, Check, ArrowRight, Phone, Mail, Instagram, MapPin } from 'lucide-react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    destino: '',
    orcamento: '',
    mensagem: ''
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    clientes: 0,
    satisfacao: 0,
    destinos: 0,
    experiencia: 0
  });

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  // Animação dos contadores
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === statsRef.current) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { clientes: 10000, satisfacao: 100, destinos: 150, experiencia: 15 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        clientes: Math.floor(targets.clientes * progress),
        satisfacao: Math.floor(targets.satisfacao * progress),
        destinos: Math.floor(targets.destinos * progress),
        experiencia: Math.floor(targets.experiencia * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  // Carrossel de depoimentos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "CEO, Tech Solutions",
      text: "A NIALY transformou completamente nossa visão sobre viagens corporativas. Cada detalhe foi pensado com uma precisão que jamais experimentamos antes.",
      rating: 5,
      verified: true
    },
    {
      name: "Marina Silva",
      role: "Diretora de Marketing",
      text: "Não é apenas uma agência, é uma experiência de vida. A curadoria dos destinos e o atendimento personalizado superam qualquer expectativa.",
      rating: 5,
      verified: true
    },
    {
      name: "Carlos Eduardo",
      role: "Empresário",
      text: "Depois da NIALY, não consigo mais viajar de outra forma. O nível de sofisticação e cuidado com cada momento da jornada é incomparável.",
      rating: 5,
      verified: true
    },
    {
      name: "Ana Beatriz",
      role: "Arquiteta",
      text: "Cada viagem se tornou um marco na minha vida. A NIALY não vende destinos, ela constrói memórias que se tornam parte de quem somos.",
      rating: 5,
      verified: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com o backend
    console.log('Formulário enviado:', formData);
    setIsModalOpen(false);
    // Redirecionar para página de agradecimento
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F44] to-[#050505]"></div>
        
        {/* Textura dourada sutil */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Efeitos de luz cinematográficos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl"></div>
        </div>

        {/* Logo NIALY em background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20rem] font-bold text-white opacity-5 select-none">
            NIALY
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            DESCUBRA SUA PRÓXIMA
            <br />
            <span className="text-[#C1A36F] drop-shadow-2xl">
              Jornada dos Sonhos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300 font-light">
            Onde cada detalhe é pensado para transformar sua viagem em uma experiência inesquecível. 
            Deixe a complexidade conosco e viva apenas momentos extraordinários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50"
            >
              INICIAR MEU PLANEJAMENTO
            </button>
            
            <a 
              href="/insiders"
              className="border-2 border-[#C1A36F] text-[#C1A36F] px-12 py-4 rounded-xl text-lg font-bold hover:bg-[#C1A36F] hover:text-black transition-all duration-300"
            >
              GRUPO VIP EXCLUSIVO
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#C1A36F] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#C1A36F] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-[#F4F6F9] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44]">
            COMO FUNCIONA
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Linha conectora */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C1A36F] via-[#D4AF37] to-[#C1A36F] opacity-30"></div>
            
            {[
              {
                step: "01",
                title: "CONSULTA INICIAL",
                description: "Conversamos sobre seus sonhos, preferências e expectativas para criar o perfil perfeito da sua jornada."
              },
              {
                step: "02", 
                title: "CURADORIA EXCLUSIVA",
                description: "Nossa equipe desenvolve um roteiro personalizado com experiências únicas e acomodações de ultra-luxo."
              },
              {
                step: "03",
                title: "APROVAÇÃO & AJUSTES",
                description: "Apresentamos sua jornada completa e fazemos os ajustes necessários até atingir a perfeição."
              },
              {
                step: "04",
                title: "EXPERIÊNCIA INESQUECÍVEL",
                description: "Você vive cada momento sem preocupações, com suporte 24h e todos os detalhes cuidadosamente orquestrados."
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-6 shadow-xl relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0A1F44]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA NIALY */}
      <section className="py-24 bg-[#0A1F44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C1A36F]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20">
            O CÓDIGO NIALY: NOSSA FILOSOFIA
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                letter: "N",
                word: "NEXUS",
                description: "Conectamos pessoas a experiências que transcendem o comum, criando vínculos profundos com destinos únicos."
              },
              {
                letter: "I", 
                word: "INNOVATION",
                description: "Inovamos constantemente para oferecer soluções de viagem que antecipam e superam expectativas."
              },
              {
                letter: "A",
                word: "ASCEND", 
                description: "Elevamos cada jornada a um patamar superior, transformando viagens em marcos de vida."
              },
              {
                letter: "L",
                word: "LEGACY",
                description: "Construímos legados através de memórias inesquecíveis que se tornam parte da sua história."
              },
              {
                letter: "Y",
                word: "YIELD",
                description: "Geramos resultados que vão além do esperado, entregando valor em cada momento da experiência."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:bg-[rgba(193,163,111,0.1)]"
              >
                <div className="text-6xl font-bold text-[#C1A36F] mb-4">{item.letter}</div>
                <h3 className="text-xl font-bold mb-4">{item.word}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-[#0A1F44]">
                QUEM SOMOS
              </h2>
              <p className="text-xl leading-relaxed mb-6 text-gray-700">
                Somos mais que uma agência de viagens. Somos arquitetos de experiências, 
                curadores de momentos únicos e guardiões dos seus sonhos mais ambiciosos.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-600">
                Com mais de 15 anos de experiência no mercado de luxo, nossa equipe é formada 
                por especialistas apaixonados por criar jornadas que transcendem o comum. 
                Cada membro da NIALY compartilha a mesma obsessão: transformar suas viagens 
                em capítulos inesquecíveis da sua história de vida.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <span className="text-lg font-semibold text-[#0A1F44]">
                  Certificados pelos principais órgãos internacionais de turismo
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=faces"
                  alt="Equipe NIALY"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C1A36F] text-black p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-semibold">Anos de Excelência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - NÚMEROS */}
      <section ref={statsRef} className="py-24 bg-[#0A1F44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20">
            POR QUE MILHARES DE VIAJANTES ESCOLHERAM A NIALY?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: counters.clientes, suffix: "+", label: "CLIENTES ATENDIDOS", description: "Viajantes que confiaram em nossa expertise" },
              { number: counters.satisfacao, suffix: "%", label: "SATISFAÇÃO TOTAL", description: "Taxa de recomendação dos nossos clientes" },
              { number: counters.destinos, suffix: "+", label: "DESTINOS EXCLUSIVOS", description: "Locais únicos em nosso portfólio" },
              { number: counters.experiencia, suffix: " ANOS", label: "DE EXPERIÊNCIA", description: "Construindo sonhos e realizando jornadas" }
            ].map((stat, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-8 border border-[rgba(193,163,111,0.2)]">
                <div className="text-5xl font-bold text-[#C1A36F] mb-2">
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-[#F4F6F9] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44]">
            O QUE NOSSOS CLIENTES ESTÃO FALANDO DE NÓS
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#C1A36F] fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl leading-relaxed text-center mb-8 text-gray-700 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-xl text-[#0A1F44] mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 mb-4">
                  {testimonials[currentTestimonial].role}
                </div>
                {testimonials[currentTestimonial].verified && (
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <Check className="w-4 h-4" />
                    Verificado pelo Google
                  </div>
                )}
              </div>
            </div>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#C1A36F] scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44]">
            NOSSOS SERVIÇOS EXCLUSIVOS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "VIAGENS DE LUXO",
                description: "Experiências premium com acomodações 5 estrelas e serviços personalizados.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
              },
              {
                title: "JATOS PRIVADOS",
                description: "Voe com total privacidade e conforto em nossa frota de aeronaves exclusivas.",
                image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop"
              },
              {
                title: "EXPERIÊNCIAS ÚNICAS",
                description: "Acesso a eventos exclusivos e experiências que não estão disponíveis ao público.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
              },
              {
                title: "CONCIERGE 24H",
                description: "Suporte completo durante toda sua jornada, disponível 24 horas por dia.",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1F44] group-hover:text-[#C1A36F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO FINAL */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8">
              PRONTO PARA SUA PRÓXIMA JORNADA?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Deixe-nos criar a experiência de viagem dos seus sonhos. 
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>
          </div>
          
          <div className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
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
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Telefone *</label>
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
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Destino de Interesse</label>
                <select
                  name="destino"
                  value={formData.destino}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                >
                  <option value="">Selecione um destino</option>
                  <option value="europa">Europa</option>
                  <option value="asia">Ásia</option>
                  <option value="americas">Américas</option>
                  <option value="africa">África</option>
                  <option value="oceania">Oceania</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Orçamento Estimado</label>
                <select
                  name="orcamento"
                  value={formData.orcamento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k-200k">R$ 100.000 - R$ 200.000</option>
                  <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
                  <option value="500k+">Acima de R$ 500.000</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Conte-nos sobre seus sonhos de viagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none"
                  placeholder="Descreva o que você imagina para sua próxima jornada..."
                />
              </div>
              
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50"
                >
                  INICIAR MINHA JORNADA DOS SONHOS
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#0A1F44] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-4xl font-bold text-[#C1A36F] mb-6">NIALY</div>
              <p className="text-gray-300 leading-relaxed mb-6">
                A arquitetura da jornada executiva. Transformamos viagens em legados 
                através de um serviço de ultra-luxo e uma experiência incomparável.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/nialy" className="w-10 h-10 bg-[#C1A36F] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C1A36F]">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300">contato@nialy.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300">São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C1A36F]">Links</h3>
              <div className="space-y-3">
                <a href="/cotacao" className="block text-gray-300 hover:text-[#C1A36F] transition-colors">
                  Solicitar Cotação
                </a>
                <a href="/insiders" className="block text-gray-300 hover:text-[#C1A36F] transition-colors">
                  Grupo VIP
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#C1A36F] transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#C1A36F] transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 NIALY. Todos os direitos reservados. A arquitetura da jornada executiva.
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL DE FORMULÁRIO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[rgba(10,31,68,0.95)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-[#C1A36F]">INICIAR MEU PLANEJAMENTO</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
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
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Telefone *</label>
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
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Destino de Interesse</label>
                <select
                  name="destino"
                  value={formData.destino}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                >
                  <option value="">Selecione um destino</option>
                  <option value="europa">Europa</option>
                  <option value="asia">Ásia</option>
                  <option value="americas">Américas</option>
                  <option value="africa">África</option>
                  <option value="oceania">Oceania</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Conte-nos sobre seus sonhos de viagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none"
                  placeholder="Descreva o que você imagina para sua próxima jornada..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50"
                >
                  ENVIAR SOLICITAÇÃO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}