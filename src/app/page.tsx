'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play, Star, Check, ArrowRight, Phone, Mail, Instagram, MapPin, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    whatsapp: '',
    origem: '',
    destinoDesejado: '',
    dataIda: '',
    dataVolta: '',
    flexibilidadeDatas: '',
    viagemSonhos: '',
    orcamento: ''
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    clientes: 0,
    satisfacao: 0,
    destinos: 0,
    parcerias: 0
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
    const targets = { clientes: 10000, satisfacao: 100, destinos: 150, parcerias: 50 };
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
        parcerias: Math.floor(targets.parcerias * easeOutExpo)
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
      text: "A NIALY me economizou 8 horas de planejamento e me deu acesso a uma tarifa de executiva para Nova York 30% mais barata que em qualquer outro lugar. Para quem vive na correria, isso não é um luxo, é uma necessidade estratégica.",
      rating: 5,
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marina Silva",
      role: "Diretora de Marketing",
      text: "Tive um voo cancelado de madrugada em Frankfurt. Em menos de 15 minutos, a equipe NIALY já tinha me realocado em um novo voo e reservado um lounge VIP. Eles transformaram um pesadelo em uma experiência de primeira classe. Não viajo mais sem eles.",
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
    
    try {
      // Enviar dados para o webhook
      const response = await fetch('https://nialytravel.app.n8n.cloud/webhook/b0f60b96-d2f3-49b2-bb8d-bc2cebe8166e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomeCompleto: formData.nomeCompleto,
          email: formData.email,
          whatsapp: formData.whatsapp,
          origem: formData.origem,
          destinoDesejado: formData.destinoDesejado,
          dataIda: formData.dataIda,
          dataVolta: formData.dataVolta,
          flexibilidadeDatas: formData.flexibilidadeDatas,
          viagemSonhos: formData.viagemSonhos,
          orcamento: formData.orcamento,
          fonte: 'Página Principal - Modal',
          timestamp: new Date().toISOString()
        })
      });

      console.log('Webhook response:', response.status);
      
      // Redirecionar para página de agradecimento
      router.push('/obrigado-cotacao');
      
      setIsModalOpen(false);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        nomeCompleto: '',
        email: '',
        whatsapp: '',
        origem: '',
        destinoDesejado: '',
        dataIda: '',
        dataVolta: '',
        flexibilidadeDatas: '',
        viagemSonhos: '',
        orcamento: ''
      });
    } catch (error) {
      console.error('Erro no envio:', error);
      // Mesmo com erro, redireciona para manter a experiência do usuário
      router.push('/obrigado-cotacao');
      setIsModalOpen(false);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função para rolar suavemente até o formulário final
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario-final');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navegação do carrossel
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* HERO SECTION COM VÍDEO CINEMATOGRÁFICO 4K */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo cinematográfico 4K de fundo */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback para vídeo de avião sobrevoando nuvens ao pôr do sol */}
            <source src="https://cdn.pixabay.com/vimeo/459761340/airplane-59879.mp4?width=1920&hash=b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0" type="video/mp4" />
          </video>
        </div>
        
        {/* Overlay preto com 70% de opacidade */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Partículas douradas animadas */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C1A36F] rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#C1A36F] rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-3000"></div>
        </div>
        
        {/* Efeitos de luz cinematográficos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-serif">
            DESCUBRA SUA PRÓXIMA
            <br />
            <span className="text-[#C1A36F] text-glow">
              Jornada dos Sonhos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300 font-inter font-light">
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
            
            <button 
              onClick={() => router.push('/insiders')}
              className="border-2 border-[#C1A36F] text-[#C1A36F] px-12 py-4 rounded-xl text-lg font-bold hover:bg-[#C1A36F] hover:text-black transition-all duration-300"
            >
              GRUPO VIP EXCLUSIVO
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#C1A36F] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#C1A36F] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* VIAJE COM SEGURANÇA */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-serif">
            VIAJE COM SEGURANÇA E TRANQUILIDADE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "COMPRA SEGURA",
                description: "Transações protegidas com certificação SSL e garantia total de segurança em todos os pagamentos."
              },
              {
                title: "CONSULTORIA ESPECIALIZADA", 
                description: "Equipe de especialistas dedicados em viagens de luxo e alta performance, com conhecimento profundo do mercado global."
              },
              {
                title: "ATENDIMENTO HUMANIZADO",
                description: "Relacionamento próximo e personalizado, com dedicação exclusiva para cada cliente e suas necessidades."
              },
              {
                title: "SUPORTE COMPLETO",
                description: "Assistência 24/7 durante toda sua jornada, garantindo tranquilidade total em qualquer situação."
              }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0A1F44] font-serif">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA - COM CORREÇÃO DE ALINHAMENTO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-serif">
            COMO FUNCIONA
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Linha conectora curva animada - ATRÁS DOS CÍRCULOS */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0">
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
              <div key={index} className="text-center relative animate-fadeInUp z-10" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* CÍRCULO CENTRALIZADO CORRETAMENTE */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-6 shadow-xl relative z-20">
                  <span className="leading-none">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0A1F44] font-serif">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA NIALY - COM IMAGENS DE FUNDO */}
      <section className="py-24 bg-[#0A1F44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C1A36F]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-serif">
            O CÓDIGO NIALY: NOSSA FILOSOFIA
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                letter: "N",
                word: "NEXUS",
                description: "Conectamos pessoas a experiências que transcendem o comum, criando vínculos profundos com destinos únicos.",
                bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center"
              },
              {
                letter: "I", 
                word: "INNOVATION",
                description: "Inovamos constantemente para oferecer soluções de viagem que antecipam e superam expectativas.",
                bgImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&crop=center"
              },
              {
                letter: "A",
                word: "ASCEND", 
                description: "Elevamos cada jornada a um patamar superior, transformando viagens em marcos de vida.",
                bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
              },
              {
                letter: "L",
                word: "LEGACY",
                description: "Construímos legados através de memórias inesquecíveis que se tornam parte da sua história.",
                bgImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop&crop=center"
              },
              {
                letter: "Y",
                word: "YIELD",
                description: "Geramos resultados que vão além do esperado, entregando valor em cada momento da experiência.",
                bgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:bg-[rgba(193,163,111,0.1)] text-white animate-fadeInUp relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagem de fundo sutil */}
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-[#C1A36F] mb-4 font-serif">{item.letter}</div>
                  <h3 className="text-xl font-bold mb-4 font-serif">{item.word}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-inter">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O ARQUITETO POR TRÁS DA JORNADA - REDESIGN COMPLETO COM FUNDO PRETO ABSOLUTO */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Textura de ruído muito sutil para criar profundidade */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] repeat"></div>
        </div>

        {/* Efeitos de luz cinematográficos */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Foto do Fundador - Lado Esquerdo - MAIOR E MELHOR POSICIONADA */}
            {/* Bloco da Foto do Fundador */}
<div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group">
    
    {/* Sua Imagem - O código foi corrigido aqui */}
    <img
      src="/nicolas-di-morais.jpg"
      alt="Nicolas Di Morais - Fundador NIALY"
      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
    />

    {/* Overlay sutil para aumentar contraste */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
  </div>

  {/* Efeito de luz ao redor da foto */}
  <div className="absolute -inset-4 bg-gradient-to-r from-[#C1A36F]/20 to-[#D4AF37]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
                {/* Overlay sutil para aumentar contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Efeito de luz ao redor da foto */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C1A36F]/20 to-[#D4AF37]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
            
            {/* Conteúdo - Lado Direito com largura menor para criar espaço negativo elegante */}
            <div className="max-w-xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-6xl font-bold mb-12 text-white font-serif leading-tight">
                O ARQUITETO POR TRÁS DA JORNADA
              </h2>
              
              <div className="space-y-8">
                <p className="text-xl leading-relaxed text-gray-300 font-inter">
                  A NIALY é a materialização da visão de seu fundador, Nicolas Di Morais. Movido por uma obsessão implacável em decodificar a complexidade das viagens globais, ele transformou seu conhecimento profundo em um novo paradigma para o setor.
                </p>
                
                <p className="text-xl leading-relaxed text-gray-300 font-inter">
                  Nicolas não criou mais uma agência. Ele fundou um atelier onde jornadas não são vendidas, são comissionadas. Um ecossistema de serviço proativo e inteligência de mercado que opera sobre um princípio inegociável: a perfeição absoluta em cada detalhe.
                </p>
              </div>
              
              {/* Linha dourada elegante */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] my-12 shadow-lg shadow-[#C1A36F]/50"></div>
              
              {/* Citação em destaque com máximo destaque */}
              <blockquote className="text-2xl leading-relaxed text-[#C1A36F] italic font-serif mb-8 relative">
                <div className="absolute -left-4 -top-2 text-6xl text-[#C1A36F] opacity-30 font-serif">"</div>
                Para mim, uma viagem nunca foi um custo. É o investimento mais poderoso que um líder pode fazer em seu legado, sua família e em seus negócios. Minha obsessão é garantir que cada minuto e cada centavo desse investimento se converta em uma experiência impecável e uma memória que o tempo não pode apagar. Essa é a arquitetura NIALY.
                <div className="absolute -right-4 -bottom-2 text-6xl text-[#C1A36F] opacity-30 font-serif">"</div>
              </blockquote>
              
              {/* Assinatura */}
              <div className="text-right">
                <p className="text-lg font-bold text-white font-serif">
                  – Nicolas Di Morais, Fundador & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* INÍCIO DA SEÇÃO DE PROVA SOCIAL */}
      {/* ======================================================================= */}
      <section>
        {/* Aqui começa o código da sua seção "Por que Milhares de Viajantes..." */}
        <div className="bg-[#0A1F44] py-24 sm:py-32">
          {/* ... (o resto do código da prova social continua aqui) ... */}
      <section ref={statsRef} className="py-24 bg-[#0A1F44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 text-white font-serif">
            POR QUE MILHARES DE VIAJANTES ESCOLHERAM A NIALY?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: counters.clientes, suffix: "+", label: "CLIENTES ATENDIDOS", description: "Viajantes que confiaram em nossa expertise" },
              { number: counters.satisfacao, suffix: "%", label: "SATISFAÇÃO TOTAL", description: "Taxa de recomendação dos nossos clientes" },
              { number: counters.destinos, suffix: "+", label: "DESTINOS EXCLUSIVOS", description: "Locais únicos em nosso portfólio" },
              { number: counters.parcerias, suffix: "+", label: "PARCERIAS DE LUXO GLOBAIS", description: "Acesso a uma rede de elite com os melhores hotéis, companhias e serviços do mundo" }
            ].map((stat, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-8 border border-[rgba(193,163,111,0.2)] animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold text-[#C1A36F] mb-2 font-serif">
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-serif">{stat.label}</h3>
                <p className="text-gray-300 text-sm font-inter">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS - CARROSSEL INTERATIVO MELHORADO COM SELOS E FEEDBACK APRIMORADO */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-serif">
            O QUE NOSSOS CLIENTES ESTÃO DIZENDO
          </h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Card flutuante com sombra suave e feedback visual melhorado */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[#C1A36F]/20">
              {/* Estrelas com animação */}
              <div className="flex items-center justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 text-[#C1A36F] fill-current transform hover:scale-110 transition-transform duration-200" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              {/* Citação com melhor tipografia */}
              <blockquote className="text-2xl leading-relaxed text-center mb-10 text-gray-700 italic font-inter relative">
                <div className="absolute -left-4 -top-2 text-6xl text-[#C1A36F] opacity-20 font-serif">"</div>
                {testimonials[currentTestimonial].text}
                <div className="absolute -right-4 -bottom-2 text-6xl text-[#C1A36F] opacity-20 font-serif">"</div>
              </blockquote>
              
              <div className="text-center">
                {/* Perfil do cliente com hover effect */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="relative group">
                    <img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#C1A36F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-2xl text-[#0A1F44] font-serif hover:text-[#C1A36F] transition-colors duration-300">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-lg font-inter">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
                
                {/* SELOS DE VERIFICAÇÃO MELHORADOS COM ANIMAÇÃO */}
                {testimonials[currentTestimonial].verified && (
                  <div className="flex justify-center gap-6 mb-8">
                    <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-bold border border-green-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Check className="w-5 h-5 animate-pulse" />
                      <span>Verificado pelo Google</span>
                    </div>
                    <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-bold border border-blue-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <Check className="w-5 h-5 animate-pulse" />
                      <span>Verificado por ReclameAQUI</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Controles de navegação com feedback visual melhorado */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#C1A36F] hover:bg-[#C1A36F] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-transparent hover:border-[#C1A36F]/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#C1A36F] hover:bg-[#C1A36F] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-transparent hover:border-[#C1A36F]/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Indicadores melhorados com feedback visual */}
            <div className="flex justify-center mt-10 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial 
                      ? 'bg-[#C1A36F] scale-125 shadow-lg shadow-[#C1A36F]/50' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                  }`}
                />
              ))}
            </div>

            {/* Indicador de progresso sutil */}
            <div className="flex justify-center mt-6">
              <div className="text-sm text-gray-500 font-inter">
                {currentTestimonial + 1} de {testimonials.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS - IMAGENS ATUALIZADAS COM FEEDBACK MELHORADO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-serif">
            NOSSOS SERVIÇOS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PASSAGENS AÉREAS",
                description: "Conectamos você ao mundo com exclusividade e inteligência. Oferecemos remarcações facilitadas, seleção antecipada de assentos e suporte premium em cada etapa.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
              },
              {
                title: "TRANSFER E MOBILIDADE",
                description: "Sua jornada com conforto do início ao fim. Oferecemos transfers privativos em todos os destinos, com veículos de luxo e motoristas experientes.",
                image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop"
              },
              {
                title: "HOSPEDAGEM E RESORTS",
                description: "Uma curadoria dos melhores hotéis e resorts do mundo. Garantimos a estadia perfeita, com pedidos especiais personalizados e experiências únicas.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
              },
              {
                title: "EXPERIÊNCIAS DISNEY",
                description: "Viva a magia com a sofisticação NIALY. Arquitetamos pacotes completos com ingressos, hospedagens nos melhores resorts e assistência personalizada.",
                image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f213c3ed-2d31-49fb-8dfb-3c8164ab05ff.png"
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer animate-fadeInUp hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay com gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1F44] group-hover:text-[#C1A36F] transition-colors font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO FINAL - COM ID ATUALIZADO E CAMPOS ATUALIZADOS */}
      <section id="formulario-final" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-white font-serif">
              PRONTO PARA SUA PRÓXIMA JORNADA?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-inter">
              Deixe-nos criar a experiência de viagem dos seus sonhos. 
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Nome Completo *</label>
                <input
                  type="text"
                  name="nomeCompleto"
                  required
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Telefone *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Destino de Interesse</label>
                <select
                  name="destinoDesejado"
                  value={formData.destinoDesejado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                >
                  <option value="">Selecione um destino</option>
                  <option value="estados-unidos">Estados Unidos</option>
                  <option value="europa">Europa</option>
                  <option value="america-sul">América do Sul</option>
                  <option value="caribe-mexico">Caribe & México</option>
                  <option value="asia">Ásia</option>
                  <option value="brasil">Brasil</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Orçamento Estimado</label>
                <select
                  name="orcamento"
                  value={formData.orcamento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="ate-3500">Até 3.500</option>
                  <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                  <option value="10k-15k">R$ 10.000 - R$ 15.000</option>
                  <option value="15k-25k">R$ 15.000 - R$ 25.000</option>
                  <option value="acima-25k">Acima de R$ 25.000</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Conte-nos sobre seus sonhos de viagem</label>
                <textarea
                  name="viagemSonhos"
                  value={formData.viagemSonhos}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none font-inter"
                  placeholder="Descreva o que você imagina para sua próxima jornada..."
                />
              </div>
              
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR MINHA COTAÇÃO'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ ATUALIZADO COM LINK DO INSTAGRAM FUNCIONAL */}
      <footer className="bg-[#0A1F44] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-4xl font-bold text-[#C1A36F] mb-6 font-serif">NIALY</div>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter">
                A arquitetura da jornada executiva. Transformamos viagens em legados 
                através de um serviço de ultra-luxo e uma experiência incomparável.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nialytravel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#C1A36F] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C1A36F] font-serif">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C1A36F]" />
                  <a 
                    href="tel:+5511921731022" 
                    className="text-gray-300 hover:text-[#C1A36F] transition-colors font-inter"
                  >
                    +55 11 92173-1022
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C1A36F]" />
                  <a 
                    href="mailto:atendimentonialy@gmail.com" 
                    className="text-gray-300 hover:text-[#C1A36F] transition-colors font-inter"
                  >
                    atendimentonialy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C1A36F]" />
                  <span className="text-gray-300 font-inter">
                    Alphaville, Alameda Rio Negro, 585, Barueri - SP
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C1A36F] font-serif">Links</h3>
              <div className="space-y-3">
                <a href="/cotacao" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-inter">
                  Solicitar Cotação
                </a>
                <a href="/insiders" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-inter">
                  Grupo VIP
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-inter">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#C1A36F] transition-colors font-inter">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-inter">
              © 2025 NIALY. Todos os direitos reservados. CNPJ/Cadastur aqui.
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL DE FORMULÁRIO REESTRUTURADO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-[#C1A36F] font-serif">INICIAR MEU PLANEJAMENTO</h3>
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
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Nome Completo *</label>
                  <input
                    type="text"
                    name="nomeCompleto"
                    required
                    value={formData.nomeCompleto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">WhatsApp (com DDD) *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Origem *</label>
                  <input
                    type="text"
                    name="origem"
                    required
                    value={formData.origem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                    placeholder="De onde você parte?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Destino Desejado *</label>
                  <input
                    type="text"
                    name="destinoDesejado"
                    required
                    value={formData.destinoDesejado}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                    placeholder="Para onde deseja ir?"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Data de Ida *</label>
                  <input
                    type="date"
                    name="dataIda"
                    required
                    value={formData.dataIda}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Data de Volta *</label>
                  <input
                    type="date"
                    name="dataVolta"
                    required
                    value={formData.dataVolta}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Flexibilidade de Datas *</label>
                <select
                  name="flexibilidadeDatas"
                  required
                  value={formData.flexibilidadeDatas}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-inter"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="datas-exatas">Datas Exatas</option>
                  <option value="mais-menos-3-dias">+/- 3 dias</option>
                  <option value="mais-menos-7-dias">+/- 7 dias</option>
                  <option value="sou-flexivel">Sou Flexível</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-inter">Conte-nos sobre sua viagem dos sonhos... *</label>
                <textarea
                  name="viagemSonhos"
                  required
                  value={formData.viagemSonhos}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none font-inter"
                  placeholder="Descreva seus sonhos, expectativas e preferências para esta viagem especial..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#C1A36F]/50 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
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