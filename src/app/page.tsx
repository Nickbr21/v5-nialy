'use client'

import { useState, useEffect } from 'react'
import { 
  Plane, 
  Star, 
  Users, 
  Globe, 
  Award, 
  Shield, 
  Clock, 
  Headphones,
  Car,
  Building,
  Sparkles,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Check,
  Network,
  TrendingUp,
  Crown,
  Target,
  Zap
} from 'lucide-react'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    destino: '',
    orcamento: '',
    mensagem: ''
  })

  // Animação de números
  const [counters, setCounters] = useState({
    viagens: 0,
    satisfacao: 0,
    destinos: 0
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { viagens: 10000, satisfacao: 100, destinos: 50 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          viagens: Math.floor(targets.viagens * progress),
          satisfacao: Math.floor(targets.satisfacao * progress),
          destinos: Math.floor(targets.destinos * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      })
    })

    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/cotacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsModalOpen(false)
        window.location.href = '/obrigado-cotacao'
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  const handleFinalFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/cotacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        window.location.href = '/obrigado-cotacao'
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <div className="min-h-screen">
      {/* SEÇÃO 1: O GANCHO (HERO) - VÍDEO CINEMATOGRÁFICO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo cinematográfico simulado com partículas douradas */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900"></div>
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          
          {/* Partículas douradas animadas */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#C1A36F] rounded-full opacity-60 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="font-playfair mb-8 animate-fade-in-up">
            <span className="block text-2xl md:text-4xl font-light mb-4 tracking-wider">DESCUBRA SUA PRÓXIMA</span>
            <span className="block text-5xl md:text-8xl font-bold text-[#C1A36F] drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(193, 163, 111, 0.5)' }}>
              Jornada dos Sonhos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-montserrat font-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Onde cada detalhe é pensado para transformar sua viagem em uma experiência inesquecível. 
            Deixe a complexidade conosco e viva apenas momentos extraordinários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C1A36F] hover:bg-[#A8925F] text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm"
            >
              INICIAR MEU PLANEJAMENTO
            </button>
            <a 
              href="/insiders"
              className="border-2 border-[#C1A36F] text-[#C1A36F] hover:bg-[#C1A36F] hover:text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              GRUPO VIP EXCLUSIVO
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O PROBLEMA RESOLVIDO */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">
              Viaje com Segurança e Tranquilidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat font-light leading-relaxed">
              Eliminamos todas as preocupações da sua jornada para que você foque apenas em viver momentos extraordinários
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Compra Segura</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Transações protegidas e garantia total em todos os seus investimentos em viagem.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Consultoria Especializada</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Experts em turismo de luxo dedicados exclusivamente ao seu projeto de viagem.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Atendimento Humanizado</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Relacionamento próximo e personalizado, tratando cada cliente como único.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Suporte Completo</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Assistência 24/7 durante toda sua jornada, onde quer que você esteja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO (COMO FUNCIONA) - COM LINHA CURVA ANIMADA */}
      <section className="py-20 px-4 bg-white relative">
        {/* Logo N de fundo com baixa opacidade */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="font-playfair text-[25rem] font-bold text-[#0A1F44] select-none">N</div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">Como Funciona</h2>
            <p className="text-xl text-gray-600 font-montserrat font-light leading-relaxed">
              Seu caminho para a experiência perfeita em 4 passos simples
            </p>
          </div>
          
          <div className="relative">
            {/* Linha curva orgânica conectando os passos */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-20 -translate-y-10">
              <svg className="w-full h-full" viewBox="0 0 1200 80" fill="none">
                <path 
                  d="M0 40 Q300 10 600 40 T1200 40" 
                  stroke="#C1A36F" 
                  strokeWidth="4" 
                  fill="none"
                  className="animate-pulse"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(193, 163, 111, 0.3))'
                  }}
                />
              </svg>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  1
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Consulta Inicial</h3>
                <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                  Entendemos seus desejos, necessidades e expectativas para sua jornada ideal.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  2
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Curadoria Personalizada</h3>
                <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                  Criamos um roteiro único e exclusivo, pensado especialmente para você.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  3
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Aprovação e Reservas</h3>
                <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                  Você aprova cada detalhe e nós cuidamos de todas as reservas e logística.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  4
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Experiência Única</h3>
                <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                  Viva momentos inesquecíveis com total tranquilidade e suporte completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: A FILOSOFIA NIALY - FUNDO AZUL-MARINHO COM EFEITO VIDRO FOSCO */}
      <section className="py-20 px-4 bg-[#0A1F44] relative overflow-hidden">
        {/* Efeito de partículas de fundo */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C1A36F] rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              O CÓDIGO NIALY: NOSSA FILOSOFIA
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-montserrat font-light leading-relaxed">
              Cinco pilares fundamentais que guiam cada decisão e definem nossa excelência em turismo de luxo
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div 
              className="p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <Network className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-playfair text-2xl font-bold text-white mb-4 uppercase">Nexus</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed">
                Conectamos você aos melhores destinos e experiências do mundo através de nossa rede exclusiva.
              </p>
            </div>
            
            <div 
              className="p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <Zap className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-playfair text-2xl font-bold text-white mb-4 uppercase">Innovation</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed">
                Inovamos constantemente para oferecer soluções únicas e experiências revolucionárias.
              </p>
            </div>
            
            <div 
              className="p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <TrendingUp className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-playfair text-2xl font-bold text-white mb-4 uppercase">Ascend</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed">
                Elevamos cada aspecto da sua jornada, superando expectativas e criando momentos sublimes.
              </p>
            </div>
            
            <div 
              className="p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <Crown className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-playfair text-2xl font-bold text-white mb-4 uppercase">Legacy</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed">
                Construímos legados através de experiências que se tornam memórias eternas e transformadoras.
              </p>
            </div>
            
            <div 
              className="p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <Target className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-playfair text-2xl font-bold text-white mb-4 uppercase">Yield</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed">
                Maximizamos o retorno de cada investimento em experiência, garantindo valor excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: A AUTORIDADE (O ROSTO DA MARCA) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">
              Cuidando de Cada Detalhe da Sua Viagem
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face" 
                alt="Nicolas Di Morais - Fundador NIALY" 
                className="w-full h-[700px] object-cover rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-playfair text-4xl font-bold text-[#0A1F44] mb-8 uppercase">Nicolas Di Morais</h3>
              <p className="text-xl text-gray-600 mb-10 font-montserrat font-light leading-relaxed">
                Fundador e CEO da NIALY, especialista em turismo de luxo com mais de 15 anos de experiência 
                criando jornadas extraordinárias para executivos e empresários de alto padrão.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-gray-700 text-lg font-montserrat">Mais de 10.000 viagens de luxo organizadas</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-gray-700 text-lg font-montserrat">Parcerias exclusivas em 50+ destinos mundiais</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-gray-700 text-lg font-montserrat">100% de satisfação dos clientes</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-gray-700 text-lg font-montserrat">Suporte 24/7 em qualquer lugar do mundo</span>
                </div>
              </div>
              
              <blockquote className="p-8 bg-[#F4F6F9] rounded-2xl border-l-4 border-[#C1A36F] shadow-lg">
                <p className="text-xl italic text-gray-700 font-montserrat font-light leading-relaxed mb-6">
                  "Não vendemos viagens, arquitetamos experiências que se tornam legados. 
                  Cada cliente é único, e cada jornada deve refletir essa singularidade."
                </p>
                <cite className="block font-playfair font-bold text-[#0A1F44] text-lg">- Nicolas Di Morais</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: A PROVA (OS NÚMEROS E VOZES) */}
      {/* Subseção 6.1: Prova Quantitativa */}
      <section id="stats-section" className="py-20 px-4 bg-[#0A1F44] relative overflow-hidden">
        {/* Efeito de partículas douradas */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C1A36F] rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              Por que Milhares de Viajantes Escolheram a NIALY?
            </h2>
            <p className="text-xl text-gray-300 font-montserrat font-light leading-relaxed">
              Números que comprovam nossa excelência e dedicação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-7xl md:text-8xl font-bold text-[#C1A36F] mb-6 font-playfair">
                +{counters.viagens.toLocaleString()}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-playfair uppercase">Viagens Realizadas</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed text-lg">
                Experiências únicas criadas para nossos clientes exclusivos
              </p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-7xl md:text-8xl font-bold text-[#C1A36F] mb-6 font-playfair">
                {counters.satisfacao}%
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-playfair uppercase">Satisfeitos</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed text-lg">
                Taxa de satisfação total dos nossos clientes
              </p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-7xl md:text-8xl font-bold text-[#C1A36F] mb-6 font-playfair">
                {counters.destinos}+
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-playfair uppercase">Destinos Exclusivos</h3>
              <p className="text-gray-300 font-montserrat font-light leading-relaxed text-lg">
                Países e destinos únicos em nossa curadoria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subseção 6.2: Prova Social (Depoimentos Nível Guru) */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">
              O Que Nossos Clientes Estão Falando de Nós
            </h2>
            <p className="text-xl text-gray-600 font-montserrat font-light leading-relaxed">
              Depoimentos reais de quem viveu experiências extraordinárias
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  ✓ Verificado pelo Google
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 italic leading-relaxed font-montserrat font-light">
                "A NIALY me economizou 8 horas de planejamento e me deu acesso a uma tarifa de executiva para Nova York 30% mais barata que em qualquer outro lugar. Para quem vive na correria, isso não é um luxo, é uma necessidade estratégica."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MC
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-[#0A1F44] text-lg font-playfair">Marina Costa</h4>
                  <p className="text-gray-600 font-montserrat">CEO, São Paulo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  ✓ Verificado pelo Google
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 italic leading-relaxed font-montserrat font-light">
                "Tive um voo cancelado de madrugada em Frankfurt. Em menos de 15 minutos, a equipe NIALY já tinha me realocado em um novo voo e reservado um lounge VIP. Eles transformaram um pesadelo em uma experiência de primeira classe. Não viajo mais sem eles."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RS
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-[#0A1F44] text-lg font-playfair">Roberto Silva</h4>
                  <p className="text-gray-600 font-montserrat">Empresário, Rio de Janeiro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: NOSSOS SERVIÇOS - CONTEÚDO ATUALIZADO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 font-montserrat font-light leading-relaxed">
              Soluções completas para sua jornada perfeita
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" 
                alt="Asa de avião sobre nuvens" 
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Passagens Aéreas</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Conectamos você ao mundo com exclusividade e inteligência. Oferecemos remarcações facilitadas, 
                seleção antecipada de assentos e suporte premium em cada etapa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop" 
                alt="Interior de um carro de luxo" 
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Transfer e Mobilidade</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Sua jornada com conforto do início ao fim. Oferecemos transfers privativos em todos os destinos, 
                com veículos de luxo e motoristas experientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop" 
                alt="Quarto de hotel de luxo com vista" 
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Hospedagem e Resorts</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Uma curadoria dos melhores hotéis e resorts do mundo. Garantimos a estadia perfeita, 
                com pedidos especiais personalizados e experiências únicas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" 
                alt="Castelo da Disney ao amanhecer" 
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Experiências Disney</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Viva a magia com a sofisticação NIALY. Arquitetamos pacotes completos com ingressos, 
                hospedagens nos melhores resorts e assistência personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: FORMULÁRIO FINAL - FUNDO PRETO COM VIDRO FOSCO */}
      <section className="bg-black py-20 px-4 relative overflow-hidden">
        {/* Efeito de partículas douradas */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C1A36F] rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-8 uppercase">
                Pronto Para Sua Próxima Jornada?
              </h2>
              <p className="text-xl text-gray-300 mb-10 font-montserrat font-light leading-relaxed">
                Deixe-nos arquitetar a experiência dos seus sonhos. Cada detalhe será 
                cuidadosamente planejado para superar suas expectativas.
              </p>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-center">
                  <Award className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-lg font-montserrat">Consultoria especializada gratuita</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-lg font-montserrat">Garantia de satisfação total</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-8 h-8 text-[#C1A36F] mr-6" strokeWidth={2} />
                  <span className="text-lg font-montserrat">Resposta em até 24 horas</span>
                </li>
              </ul>
            </div>
            
            <div 
              className="p-10 rounded-2xl shadow-2xl"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <h3 className="font-playfair text-3xl font-bold text-white mb-8 text-center uppercase">
                Solicite Sua Cotação
              </h3>
              <form onSubmit={handleFinalFormSubmit} className="space-y-6">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="WhatsApp com DDD"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="destino"
                  placeholder="Destino desejado"
                  value={formData.destino}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                />
                <select
                  name="orcamento"
                  value={formData.orcamento}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                >
                  <option value="" className="bg-[#0A1F44] text-white">Orçamento estimado</option>
                  <option value="10k-25k" className="bg-[#0A1F44] text-white">R$ 10.000 - R$ 25.000</option>
                  <option value="25k-50k" className="bg-[#0A1F44] text-white">R$ 25.000 - R$ 50.000</option>
                  <option value="50k-100k" className="bg-[#0A1F44] text-white">R$ 50.000 - R$ 100.000</option>
                  <option value="100k+" className="bg-[#0A1F44] text-white">Acima de R$ 100.000</option>
                </select>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#C1A36F] to-[#A8925F] hover:from-[#A8925F] hover:to-[#8B7A4F] text-white font-bold py-5 px-10 rounded-xl w-full transition-all duration-300 transform hover:scale-105 shadow-2xl font-playfair text-lg uppercase"
                >
                  SOLICITAR MINHA COTAÇÃO
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ GLOBAL */}
      <footer className="bg-[#0A1F44] py-16 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-playfair text-4xl font-bold text-[#C1A36F] mb-6">NIALY</h3>
              <p className="text-gray-300 mb-6 font-montserrat font-light leading-relaxed">
                A arquitetura da jornada executiva. Transformamos viagens em legados.
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-white mb-6 text-xl uppercase">Links Rápidos</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="/" className="hover:text-[#C1A36F] transition-colors font-montserrat">Início</a></li>
                <li><a href="/cotacao" className="hover:text-[#C1A36F] transition-colors font-montserrat">Cotação</a></li>
                <li><a href="/insiders" className="hover:text-[#C1A36F] transition-colors font-montserrat">Grupo VIP</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-white mb-6 text-xl uppercase">Contato</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-4 text-[#C1A36F]" />
                  <span className="font-montserrat">(11) 99999-9999</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-4 text-[#C1A36F]" />
                  <span className="font-montserrat">contato@nialy.com.br</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-4 text-[#C1A36F]" />
                  <span className="font-montserrat">São Paulo, SP</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-white mb-6 text-xl uppercase">Redes Sociais</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-[#C1A36F] transition-colors transform hover:scale-110">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#C1A36F] transition-colors transform hover:scale-110">
                  <MessageCircle className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p className="font-montserrat">&copy; 2025 NIALY. Todos os direitos reservados. CNPJ/Cadastur aqui.</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE COTAÇÃO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div 
            className="rounded-2xl p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            style={{
              background: 'rgba(10, 31, 68, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(193, 163, 111, 0.3)'
            }}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-playfair text-3xl font-bold text-white uppercase">
                Solicite Sua Cotação
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="WhatsApp com DDD"
                value={formData.telefone}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="destino"
                placeholder="Destino desejado"
                value={formData.destino}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                required
              />
              <select
                name="orcamento"
                value={formData.orcamento}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                required
              >
                <option value="" className="bg-[#0A1F44] text-white">Orçamento estimado</option>
                <option value="10k-25k" className="bg-[#0A1F44] text-white">R$ 10.000 - R$ 25.000</option>
                <option value="25k-50k" className="bg-[#0A1F44] text-white">R$ 25.000 - R$ 50.000</option>
                <option value="50k-100k" className="bg-[#0A1F44] text-white">R$ 50.000 - R$ 100.000</option>
                <option value="100k+" className="bg-[#0A1F44] text-white">Acima de R$ 100.000</option>
              </select>
              <textarea
                name="mensagem"
                placeholder="Conte-nos mais sobre sua viagem dos sonhos..."
                value={formData.mensagem}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
              ></textarea>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#C1A36F] to-[#A8925F] hover:from-[#A8925F] hover:to-[#8B7A4F] text-white font-bold py-5 px-10 rounded-xl w-full transition-all duration-300 transform hover:scale-105 shadow-2xl font-playfair text-lg uppercase"
              >
                ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}