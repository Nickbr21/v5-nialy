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
      {/* SEÇÃO 1: O GANCHO (HERO) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo de fundo simulado com gradiente cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Efeito de nuvens em movimento */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-montserrat mb-8 animate-fade-in-up">
            <span className="block text-2xl md:text-4xl font-light mb-2">DESCUBRA SUA PRÓXIMA</span>
            <span className="block text-4xl md:text-7xl font-playfair font-bold text-[#C1A36F]">Jornada dos Sonhos</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C1A36F] hover:bg-[#A8925F] text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              INICIAR MEU PLANEJAMENTO
            </button>
            <a 
              href="/insiders"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105"
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">Viaje com Segurança e Tranquilidade</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eliminamos todas as preocupações da sua jornada para que você foque apenas em viver momentos extraordinários
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4">Compra Segura</h3>
              <p className="text-gray-600">Transações protegidas e garantia total em todos os seus investimentos em viagem.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4">Consultoria Especializada</h3>
              <p className="text-gray-600">Experts em turismo de luxo dedicados exclusivamente ao seu projeto de viagem.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4">Atendimento Humanizado</h3>
              <p className="text-gray-600">Relacionamento próximo e personalizado, tratando cada cliente como único.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4">Suporte Completo</h3>
              <p className="text-gray-600">Assistência 24/7 durante toda sua jornada, onde quer que você esteja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO (COMO FUNCIONA) */}
      <section className="py-20 px-4 bg-white relative">
        {/* Logo N de fundo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="font-playfair text-[20rem] font-bold text-[#0A1F44]">N</div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">Como Funciona</h2>
            <p className="text-xl text-gray-600">Seu caminho para a experiência perfeita em 4 passos simples</p>
          </div>
          
          <div className="relative">
            {/* Linha curva conectando os passos */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1">
              <svg className="w-full h-20" viewBox="0 0 800 80" fill="none">
                <path d="M0 40 Q200 10 400 40 T800 40" stroke="#C1A36F" strokeWidth="3" fill="none" />
              </svg>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-2xl">1</div>
                <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Consulta Inicial</h3>
                <p className="text-gray-600">Entendemos seus desejos, necessidades e expectativas para sua jornada ideal.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-2xl">2</div>
                <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Curadoria Personalizada</h3>
                <p className="text-gray-600">Criamos um roteiro único e exclusivo, pensado especialmente para você.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-2xl">3</div>
                <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Aprovação e Reservas</h3>
                <p className="text-gray-600">Você aprova cada detalhe e nós cuidamos de todas as reservas e logística.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-2xl">4</div>
                <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Experiência Única</h3>
                <p className="text-gray-600">Viva momentos inesquecíveis com total tranquilidade e suporte completo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: A FILOSOFIA NIALY */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">O CÓDIGO NIALY: NOSSA FILOSOFIA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cinco pilares fundamentais que guiam cada decisão e definem nossa excelência em turismo de luxo
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Network className="w-12 h-12 text-[#C1A36F] mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3">Nexus</h3>
              <p className="text-gray-600 text-sm">Conectamos você aos melhores destinos e experiências do mundo através de nossa rede exclusiva.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Zap className="w-12 h-12 text-[#C1A36F] mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">Inovamos constantemente para oferecer soluções únicas e experiências revolucionárias.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <TrendingUp className="w-12 h-12 text-[#C1A36F] mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3">Ascend</h3>
              <p className="text-gray-600 text-sm">Elevamos cada aspecto da sua jornada, superando expectativas e criando momentos sublimes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Crown className="w-12 h-12 text-[#C1A36F] mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3">Legacy</h3>
              <p className="text-gray-600 text-sm">Construímos legados através de experiências que se tornam memórias eternas e transformadoras.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Target className="w-12 h-12 text-[#C1A36F] mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-3">Yield</h3>
              <p className="text-gray-600 text-sm">Maximizamos o retorno de cada investimento em experiência, garantindo valor excepcional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: A AUTORIDADE (O ROSTO DA MARCA) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">Cuidando de Cada Detalhe da Sua Viagem</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
                alt="Nicolas Di Morais - Fundador NIALY" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-playfair text-3xl font-bold text-[#0A1F44] mb-6">Nicolas Di Morais</h3>
              <p className="text-xl text-gray-600 mb-8">
                Fundador e CEO da NIALY, especialista em turismo de luxo com mais de 15 anos de experiência 
                criando jornadas extraordinárias para executivos e empresários de alto padrão.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-[#C1A36F] mr-4" />
                  <span className="text-gray-700">Mais de 10.000 viagens de luxo organizadas</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-[#C1A36F] mr-4" />
                  <span className="text-gray-700">Parcerias exclusivas em 50+ destinos mundiais</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-[#C1A36F] mr-4" />
                  <span className="text-gray-700">100% de satisfação dos clientes</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-[#C1A36F] mr-4" />
                  <span className="text-gray-700">Suporte 24/7 em qualquer lugar do mundo</span>
                </div>
              </div>
              
              <blockquote className="mt-8 p-6 bg-[#F4F6F9] rounded-2xl border-l-4 border-[#C1A36F]">
                <p className="text-lg italic text-gray-700">
                  "Não vendemos viagens, arquitetamos experiências que se tornam legados. 
                  Cada cliente é único, e cada jornada deve refletir essa singularidade."
                </p>
                <cite className="block mt-4 font-bold text-[#0A1F44]">- Nicolas Di Morais</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: A PROVA (OS NÚMEROS E VOZES) */}
      {/* Subseção 6.1: Prova Quantitativa */}
      <section id="stats-section" className="py-20 px-4 bg-[#0A1F44]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Por que Milhares de Viajantes Escolheram a NIALY?</h2>
            <p className="text-xl text-gray-300">Números que comprovam nossa excelência e dedicação</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl font-bold text-[#C1A36F] mb-4">+{counters.viagens.toLocaleString()}</div>
              <h3 className="text-2xl font-bold text-white mb-2">Viagens Realizadas</h3>
              <p className="text-gray-300">Experiências únicas criadas para nossos clientes exclusivos</p>
            </div>
            
            <div>
              <div className="text-6xl font-bold text-[#C1A36F] mb-4">{counters.satisfacao}%</div>
              <h3 className="text-2xl font-bold text-white mb-2">Satisfeitos</h3>
              <p className="text-gray-300">Taxa de satisfação total dos nossos clientes</p>
            </div>
            
            <div>
              <div className="text-6xl font-bold text-[#C1A36F] mb-4">{counters.destinos}+</div>
              <h3 className="text-2xl font-bold text-white mb-2">Destinos Exclusivos</h3>
              <p className="text-gray-300">Países e destinos únicos em nossa curadoria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subseção 6.2: Prova Social (Depoimentos) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">O Que Nossos Clientes Estão Falando de Nós</h2>
            <p className="text-xl text-gray-600">Depoimentos reais de quem viveu experiências extraordinárias</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#F4F6F9] p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "A NIALY me economizou 8 horas de planejamento e me deu acesso a uma tarifa de executiva para Nova York 30% mais barata que em qualquer outro lugar. Para quem vive na correria, isso não é um luxo, é uma necessidade estratégica."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#0A1F44]">Marina Costa</h4>
                  <p className="text-gray-600">CEO, São Paulo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F4F6F9] p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "Tive um voo cancelado de madrugada em Frankfurt. Em menos de 15 minutos, a equipe NIALY já tinha me realocado em um novo voo e reservado um lounge VIP. Eles transformaram um pesadelo em uma experiência de primeira classe. Não viajo mais sem eles."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#0A1F44]">Roberto Silva</h4>
                  <p className="text-gray-600">Empresário, Rio de Janeiro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: NOSSOS SERVIÇOS */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Soluções completas para sua jornada perfeita</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" 
                alt="Asa de avião sobre nuvens" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Passagens Aéreas</h3>
              <p className="text-gray-600">Conectamos você ao mundo com exclusividade e inteligência. Oferecemos remarcações facilitadas, seleção antecipada de assentos e suporte premium em cada etapa.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop" 
                alt="Interior de um carro de luxo" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Transfer e Mobilidade</h3>
              <p className="text-gray-600">Sua jornada com conforto do início ao fim. Oferecemos transfers privativos em todos os destinos, com veículos de luxo e motoristas experientes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop" 
                alt="Quarto de hotel de luxo com vista" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Hospedagem e Resorts</h3>
              <p className="text-gray-600">Uma curadoria dos melhores hotéis e resorts do mundo. Garantimos a estadia perfeita, com pedidos especiais personalizados e experiências únicas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" 
                alt="Castelo da Disney ao amanhecer" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="font-playfair text-xl font-bold text-[#0A1F44] mb-4">Experiências Disney</h3>
              <p className="text-gray-600">Viva a magia com a sofisticação NIALY. Arquitetamos pacotes completos com ingressos, hospedagens nos melhores resorts e assistência personalizada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: CHAMADA FINAL */}
      <section className="bg-[#0A1F44] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Pronto Para Sua Próxima Jornada?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Deixe-nos arquitetar a experiência dos seus sonhos. Cada detalhe será 
                cuidadosamente planejado para superar suas expectativas.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <Award className="w-6 h-6 text-[#C1A36F] mr-3" />
                  Consultoria especializada gratuita
                </li>
                <li className="flex items-center">
                  <Shield className="w-6 h-6 text-[#C1A36F] mr-3" />
                  Garantia de satisfação total
                </li>
                <li className="flex items-center">
                  <Clock className="w-6 h-6 text-[#C1A36F] mr-3" />
                  Resposta em até 24 horas
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-6 text-center">
                Solicite Sua Cotação
              </h3>
              <form onSubmit={handleFinalFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="WhatsApp com DDD"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                />
                <input
                  type="text"
                  name="destino"
                  placeholder="Destino desejado"
                  value={formData.destino}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                />
                <select
                  name="orcamento"
                  value={formData.orcamento}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                >
                  <option value="">Orçamento estimado</option>
                  <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                  <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k+">Acima de R$ 100.000</option>
                </select>
                <button type="submit" className="bg-[#C1A36F] hover:bg-[#A8925F] text-white font-bold py-4 px-8 rounded-lg w-full transition-all duration-300 transform hover:scale-105">
                  SOLICITAR MINHA COTAÇÃO
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#0A1F44] py-12 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-[#C1A36F] mb-4">NIALY</h3>
              <p className="text-gray-300 mb-4">
                A arquitetura da jornada executiva. Transformamos viagens em legados.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-[#C1A36F] transition-colors">Início</a></li>
                <li><a href="/cotacao" className="hover:text-[#C1A36F] transition-colors">Cotação</a></li>
                <li><a href="/insiders" className="hover:text-[#C1A36F] transition-colors">Grupo VIP</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 99999-9999
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  contato@nialy.com.br
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  São Paulo, SP
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#C1A36F] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#C1A36F] transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2025 NIALY. Todos os direitos reservados. CNPJ/Cadastur aqui.</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE COTAÇÃO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44]">
                Solicite Sua Cotação
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="WhatsApp com DDD"
                value={formData.telefone}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                required
              />
              <input
                type="text"
                name="destino"
                placeholder="Destino desejado"
                value={formData.destino}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                required
              />
              <select
                name="orcamento"
                value={formData.orcamento}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                required
              >
                <option value="">Orçamento estimado</option>
                <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                <option value="100k+">Acima de R$ 100.000</option>
              </select>
              <textarea
                name="mensagem"
                placeholder="Conte-nos mais sobre sua viagem dos sonhos..."
                value={formData.mensagem}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
              ></textarea>
              <button type="submit" className="bg-[#C1A36F] hover:bg-[#A8925F] text-white font-bold py-4 px-8 rounded-lg w-full transition-all duration-300 transform hover:scale-105">
                ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}