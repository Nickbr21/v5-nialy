'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Check, Clock, Shield, Headphones, Star, Users, Globe, Award, Plane, Car, Building, Sparkles, X } from 'lucide-react'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [quoteStep, setQuoteStep] = useState(1)
  const [quoteData, setQuoteData] = useState({
    origem: '',
    destino: '',
    dataIda: '',
    dataVolta: '',
    passageiros: '1',
    classe: 'Executiva',
    nome: '',
    email: '',
    whatsapp: '',
    preferencias: ''
  })

  const testimonials = [
    {
      text: "A NIALY me economizou 8 horas de planejamento e me deu acesso a uma tarifa de executiva para Nova York 30% mais barata que em qualquer outro lugar. Para quem vive na correria, isso não é um luxo, é uma necessidade estratégica.",
      author: "Carlos Mendes",
      role: "CEO, TechCorp"
    },
    {
      text: "Tive um voo cancelado de madrugada em Frankfurt. Em menos de 15 minutos, a equipe NIALY já tinha me realocado em um novo voo e reservado um lounge VIP. Eles transformaram um pesadelo em uma experiência de primeira classe.",
      author: "Ana Silva",
      role: "Diretora Comercial"
    },
    {
      text: "Planejar a Disney para 3 crianças parecia um pesadelo logístico. A NIALY transformou tudo em um processo simples e mágico. Cuidaram de cada detalhe, dos parques aos restaurantes. Foram as melhores férias da nossa vida em família.",
      author: "Roberto Costa",
      role: "Empresário"
    },
    {
      text: "Eu queria um roteiro complexo de 20 dias pelo Sudeste Asiático. A NIALY não só organizou toda a logística com perfeição, como conseguiu uma reserva em um restaurante que estava esgotado há meses. É esse nível de acesso que os diferencia.",
      author: "Marina Oliveira",
      role: "Investidora"
    }
  ]

  const services = [
    {
      title: "Passagens Aéreas",
      description: "Tarifas exclusivas e rotas inteligentes para executivos que valorizam tempo e conforto.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"
    },
    {
      title: "Transfer",
      description: "Transporte premium porta a porta com motoristas selecionados e veículos de luxo.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    },
    {
      title: "Hospedagem",
      description: "Hotéis e resorts cuidadosamente selecionados para uma experiência inesquecível.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
    },
    {
      title: "Experiências Disney",
      description: "Planejamento completo para a magia Disney, com acesso VIP e experiências exclusivas.",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=300&fit=crop"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (quoteStep < 3) {
      setQuoteStep(quoteStep + 1)
    } else {
      // Aqui seria o envio dos dados
      console.log('Dados da cotação:', quoteData)
      setShowQuoteModal(false)
      setQuoteStep(1)
      // Redirecionar para página de agradecimento
      window.location.href = '/obrigado-cotacao'
    }
  }

  const updateQuoteData = (field: string, value: string) => {
    setQuoteData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO 1: HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Marca d'água */}
        <div className="absolute top-20 right-20 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none">
          N
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl mb-6">
            <span className="block font-light text-4xl md:text-5xl mb-2">DESCUBRA SUA PRÓXIMA</span>
            <span className="block font-serif font-bold">Jornada dos Sonhos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto">
            A arquitetura da jornada executiva começa aqui
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              INICIAR MEU PLANEJAMENTO
            </button>
            <button 
              onClick={() => window.location.href = '/insiders'}
              className="border-2 border-white hover:bg-white hover:text-[#0A1F44] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              GRUPO VIP EXCLUSIVO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: FILOSOFIA NIALY */}
      <section className="py-20 bg-[#F4F6F9] relative">
        <div className="absolute top-10 left-10 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] mb-8">
            A Filosofia NIALY
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Não somos apenas uma agência de viagens. Somos arquitetos de experiências que transformam jornadas em legados. 
            Cada detalhe é pensado, cada momento é curado, cada viagem é uma obra-prima personalizada para quem entende 
            que o extraordinário não é um luxo, é um padrão de vida.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3: NÚMEROS DE AUTORIDADE */}
      <section className="py-20 bg-[#0A1F44] text-white relative">
        <div className="absolute bottom-10 right-10 opacity-10 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C1A36F] mb-2">2.847</div>
              <div className="text-lg">Viagens Executadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C1A36F] mb-2">98%</div>
              <div className="text-lg">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C1A36F] mb-2">24/7</div>
              <div className="text-lg">Suporte Disponível</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C1A36F] mb-2">150+</div>
              <div className="text-lg">Destinos Atendidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: COMO FUNCIONA */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] text-center mb-16">
            Como Funciona
          </h2>
          <div className="relative max-w-6xl mx-auto">
            {/* Linha curva SVG */}
            <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 z-0" viewBox="0 0 800 100">
              <path
                d="M 50 50 Q 200 20, 350 50 T 750 50"
                stroke="#C1A36F"
                strokeWidth="3"
                fill="none"
                opacity="0.3"
              />
            </svg>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Briefing Personalizado</h3>
                <p className="text-gray-600">Entendemos suas necessidades, preferências e objetivos únicos</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Curadoria Inteligente</h3>
                <p className="text-gray-600">Nossa equipe seleciona as melhores opções baseadas no seu perfil</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Execução Impecável</h3>
                <p className="text-gray-600">Cuidamos de cada detalhe para uma experiência sem preocupações</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Suporte Contínuo</h3>
                <p className="text-gray-600">Acompanhamento 24/7 durante toda sua jornada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: DEPOIMENTOS */}
      <section className="py-20 bg-[#F4F6F9] relative">
        <div className="absolute bottom-20 left-20 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] text-center mb-16">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#C1A36F] fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-[#0A1F44] text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-[#C1A36F]">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-[#0A1F44]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-[#0A1F44]" />
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: NOSSOS SERVIÇOS */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-20 right-20 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] text-center mb-16">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CHAMADA FINAL */}
      <section className="py-20 bg-[#0A1F44] text-white relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Pronto Para Sua Próxima Jornada?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Deixe-nos criar a arquitetura da sua próxima experiência extraordinária. 
                Cada detalhe pensado, cada momento curado especialmente para você.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                />
                <textarea
                  placeholder="Conte-nos sobre sua próxima viagem..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#C1A36F] hover:bg-[#B8956A] text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  SOLICITAR MINHA COTAÇÃO
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#0A1F44] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-serif text-[#C1A36F] mb-4">NIALY</div>
              <p className="text-gray-300">
                A arquitetura da jornada executiva
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-[#C1A36F] transition-colors">Início</a></li>
                <li><a href="/cotacao" className="text-gray-300 hover:text-[#C1A36F] transition-colors">Cotação</a></li>
                <li><a href="/insiders" className="text-gray-300 hover:text-[#C1A36F] transition-colors">Grupo VIP</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <a href="tel:+5511921731022" className="text-gray-300 hover:text-[#C1A36F] transition-colors block">
                +55 11 92173-1022
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/nialytravel/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C1A36F] transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 NIALY. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE COTAÇÃO */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-[#0A1F44]">Solicitar Cotação</h2>
                <button
                  onClick={() => {setShowQuoteModal(false); setQuoteStep(1)}}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Barra de Progresso */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Passo {quoteStep} de 3</span>
                  <span className="text-sm text-gray-600">{Math.round((quoteStep / 3) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#C1A36F] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(quoteStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleQuoteSubmit}>
                {quoteStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Detalhes da Sua Viagem</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Origem"
                        value={quoteData.origem}
                        onChange={(e) => updateQuoteData('origem', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Destino"
                        value={quoteData.destino}
                        onChange={(e) => updateQuoteData('destino', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="date"
                        placeholder="Data de Ida"
                        value={quoteData.dataIda}
                        onChange={(e) => updateQuoteData('dataIda', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                        required
                      />
                      <input
                        type="date"
                        placeholder="Data de Volta"
                        value={quoteData.dataVolta}
                        onChange={(e) => updateQuoteData('dataVolta', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select
                        value={quoteData.passageiros}
                        onChange={(e) => updateQuoteData('passageiros', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                      >
                        <option value="1">1 Passageiro</option>
                        <option value="2">2 Passageiros</option>
                        <option value="3">3 Passageiros</option>
                        <option value="4">4 Passageiros</option>
                        <option value="5+">5+ Passageiros</option>
                      </select>
                      <select
                        value={quoteData.classe}
                        onChange={(e) => updateQuoteData('classe', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                      >
                        <option value="Econômica">Econômica</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Executiva">Executiva</option>
                        <option value="Primeira Classe">Primeira Classe</option>
                      </select>
                    </div>
                  </div>
                )}

                {quoteStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Vamos nos Conhecer</h3>
                    <input
                      type="text"
                      placeholder="Nome Completo"
                      value={quoteData.nome}
                      onChange={(e) => updateQuoteData('nome', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={quoteData.email}
                      onChange={(e) => updateQuoteData('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp"
                      value={quoteData.whatsapp}
                      onChange={(e) => updateQuoteData('whatsapp', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F]"
                      required
                    />
                  </div>
                )}

                {quoteStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Preferências Especiais</h3>
                    <textarea
                      placeholder="Conte-nos suas expectativas, necessidades médicas, celebrações..."
                      value={quoteData.preferencias}
                      onChange={(e) => updateQuoteData('preferencias', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] resize-none"
                    ></textarea>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {quoteStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setQuoteStep(quoteStep - 1)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Voltar
                    </button>
                  )}
                  <button
                    type="submit"
                    className="ml-auto bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    {quoteStep === 3 ? 'RECEBER MINHA COTAÇÃO EXCLUSIVA' : 'Próximo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}