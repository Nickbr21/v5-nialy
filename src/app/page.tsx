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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const progress = Math.min(step / steps, 1);
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCounters({
        clientes: Math.floor(targets.clientes * easeOutExpo),
        satisfacao: Math.floor(targets.satisfacao * easeOutExpo),
        destinos: Math.floor(targets.destinos * easeOutExpo),
        experiencia: Math.floor(targets.experiencia * easeOutExpo)
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
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marina Silva",
      role: "Diretora de Marketing",
      text: "Não é apenas uma agência, é uma experiência de vida. A curadoria dos destinos e o atendimento personalizado superam qualquer expectativa.",
      rating: 5,
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Eduardo",
      role: "Empresário",
      text: "Depois da NIALY, não consigo mais viajar de outra forma. O nível de sofisticação e cuidado com cada momento da jornada é incomparável.",
      rating: 5,
      verified: true,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ana Beatriz",
      role: "Arquiteta",
      text: "Cada viagem se tornou um marco na minha vida. A NIALY não vende destinos, ela constrói memórias que se tornam parte de quem somos.",
      rating: 5,
      verified: true,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Formulário enviado:', formData);
    setIsModalOpen(false);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      destino: '',
      orcamento: '',
      mensagem: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('FormularioFinal');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0A1F44] to-black">
        {/* Vídeo cinematográfico simulado com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-[#0A1F44]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Partículas douradas animadas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C1A36F] rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#C1A36F] rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-3000"></div>
        </div>
        
        {/* Efeitos de luz cinematográficos */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-playfair">
            DESCUBRA SUA PRÓXIMA
            <br />
            <span className="text-[#C1A36F] text-glow">
              Jornada dos Sonhos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300 font-montserrat font-light">
            Onde cada detalhe é pensado para transformar sua viagem em uma experiência inesquecível. 
            Deixe a complexidade conosco e viva apenas momentos extraordinários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToForm}
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-playfair">
            COMO FUNCIONA
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Linha conectora curva animada */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5">
              <svg className="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path 
                  d="M0,0.5 Q25,0.2 50,0.5 T100,0.5" 
                  stroke="url(#gradient)" 
                  strokeWidth="0.5" 
                  fill="none"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C1A36F" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#C1A36F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
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
              <div key={index} className="text-center relative animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-6 shadow-xl relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0A1F44] font-playfair">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">{item.description}</p>
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
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
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
                className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:bg-[rgba(193,163,111,0.1)] text-white animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-[#C1A36F] mb-4 font-playfair">{item.letter}</div>
                <h3 className="text-xl font-bold mb-4 font-playfair">{item.word}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-montserrat">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-[#0A1F44] font-playfair">
                QUEM SOMOS
              </h2>
              <p className="text-xl leading-relaxed mb-6 text-gray-700 font-montserrat">
                Somos mais que uma agência de viagens. Somos arquitetos de experiências, 
                curadores de momentos únicos e guardiões dos seus sonhos mais ambiciosos.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-600 font-montserrat">
                Com mais de 15 anos de experiência no mercado de luxo, nossa equipe é formada 
                por especialistas apaixonados por criar jornadas que transcendem o comum. 
                Cada membro da NIALY compartilha a mesma obsessão: transformar suas viagens 
                em capítulos inesquecíveis da sua história de vida.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <span className="text-lg font-semibold text-[#0A1F44] font-montserrat">
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
                <div className="text-3xl font-bold font-playfair">15+</div>
                <div className="text-sm font-semibold font-montserrat">Anos de Excelência</div>
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
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
            POR QUE MILHARES DE VIAJANTES ESCOLHERAM A NIALY?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: counters.clientes, suffix: "+", label: "CLIENTES ATENDIDOS", description: "Viajantes que confiaram em nossa expertise" },
              { number: counters.satisfacao, suffix: "%", label: "SATISFAÇÃO TOTAL", description: "Taxa de recomendação dos nossos clientes" },
              { number: counters.destinos, suffix: "+", label: "DESTINOS EXCLUSIVOS", description: "Locais únicos em nosso portfólio" },
              { number: counters.experiencia, suffix: " ANOS", label: "DE EXPERIÊNCIA", description: "Construindo sonhos e realizando jornadas" }
            ].map((stat, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-8 border border-[rgba(193,163,111,0.2)] animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold text-[#C1A36F] mb-2 font-playfair">
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-playfair">{stat.label}</h3>
                <p className="text-gray-300 text-sm font-montserrat">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-playfair">
            O QUE NOSSOS CLIENTES ESTÃO FALANDO DE NÓS
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#C1A36F] fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl leading-relaxed text-center mb-8 text-gray-700 italic font-montserrat">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xl text-[#0A1F44] font-playfair">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 font-montserrat">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
                {testimonials[currentTestimonial].verified && (
                  <div className="flex justify-center gap-4">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      <Check className="w-4 h-4" />
                      Verificado pelo Google
                    </div>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      <Check className="w-4 h-4" />
                      Verificado por ReclameAQUI
                    </div>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-playfair">
            NOSSOS SERVIÇOS EXCLUSIVOS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PASSAGENS AÉREAS",
                description: "Voos executivos e primeira classe com as melhores companhias aéreas do mundo, incluindo jatos privados.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
              },
              {
                title: "TRANSFER PREMIUM",
                description: "Transporte de luxo com motoristas bilíngues e veículos premium para sua total comodidade.",
                image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"
              },
              {
                title: "HOSPEDAGEM EXCLUSIVA",
                description: "Hotéis 5 estrelas, resorts de luxo e propriedades exclusivas nos destinos mais desejados do mundo.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
              },
              {
                title: "EXPERIÊNCIAS DISNEY",
                description: "Pacotes VIP para Disney World e Disneyland com acesso exclusivo e experiências personalizadas.",
                image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=300&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1F44] group-hover:text-[#C1A36F] transition-colors font-playfair">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO FINAL */}
      <section id="FormularioFinal" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-white font-playfair">
              PRONTO PARA SUA PRÓXIMA JORNADA?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-montserrat">
              Deixe-nos criar a experiência de viagem dos seus sonhos. 
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Nome Completo *</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Telefone *</label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Destino de Interesse</label>
                <select
                  name="destino"
                  value={formData.destino}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
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
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Orçamento Estimado</label>
                <select
                  name="orcamento"
                  value={formData.orcamento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k-200k">R$ 100.000 - R$ 200.000</option>
                  <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
                  <option value="500k+">Acima de R$ 500.000</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Conte-nos sobre seus sonhos de viagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none font-montserrat"
                  placeholder="Descreva o que você imagina para sua próxima jornada..."
                />
              </div>
              
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'INICIAR MINHA JORNADA DOS SONHOS'}
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
              <div className="text-4xl font-bold text-[#C1A36F] mb-6 font-playfair">NIALY</div>
              <p className="text-gray-300 leading-relaxed mb-6 font-montserrat">
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
              <h3 className="text-xl font-bold mb-6 text-[#C1A36F] font-playfair">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300 font-montserrat">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300 font-montserrat">contato@nialy.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300 font-montserrat">São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C1A36F] font-playfair">Links</h3>
              <div className="space-y-3">
                <a href="/cotacao" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-montserrat">
                  Solicitar Cotação
                </a>
                <a href="/insiders" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-montserrat">
                  Grupo VIP
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-montserrat">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-montserrat">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-montserrat">
              © 2024 NIALY. Todos os direitos reservados. A arquitetura da jornada executiva.
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL DE FORMULÁRIO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-[#C1A36F] font-playfair">INICIAR MEU PLANEJAMENTO</h3>
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
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Telefone *</label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Destino de Interesse</label>
                <select
                  name="destino"
                  value={formData.destino}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
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
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Conte-nos sobre seus sonhos de viagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none font-montserrat"
                  placeholder="Descreva o que você imagina para sua próxima jornada..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR SOLICITAÇÃO'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}