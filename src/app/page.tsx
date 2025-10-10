'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Star, Users, Globe, Award, ArrowRight, Play, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    budget: '',
    travelers: '',
    dates: '',
    preferences: ''
  })

  // Animação de contadores otimizada
  const [counters, setCounters] = useState({
    clients: 0,
    destinations: 0,
    satisfaction: 0
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 500, destinations: 120, satisfaction: 98 }
      const duration = 2000
      const steps = 50
      const increment = {
        clients: targets.clients / steps,
        destinations: targets.destinations / steps,
        satisfaction: targets.satisfaction / steps
      }

      let step = 0
      const timer = setInterval(() => {
        step++
        setCounters({
          clients: Math.min(Math.floor(increment.clients * step), targets.clients),
          destinations: Math.min(Math.floor(increment.destinations * step), targets.destinations),
          satisfaction: Math.min(Math.floor(increment.satisfaction * step), targets.satisfaction)
        })

        if (step >= steps) clearInterval(timer)
      }, duration / steps)

      return timer
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      })
    }, { threshold: 0.5 })

    const statsSection = document.getElementById('stats-section')
    if (statsSection) observer.observe(statsSection)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envio com feedback visual
    const submitButton = e.target as HTMLFormElement
    const button = submitButton.querySelector('button[type="submit"]') as HTMLButtonElement
    
    if (button) {
      button.textContent = 'ENVIANDO...'
      button.disabled = true
    }

    setTimeout(() => {
      alert('Briefing recebido! Em breve entraremos em contato.')
      setIsModalOpen(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        budget: '',
        travelers: '',
        dates: '',
        preferences: ''
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#EAEAEA] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fundo cinematográfico com textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F44] to-[#050505]"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Efeitos de luz cinematográficos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl"></div>
        </div>

        {/* Logo N de fundo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[20rem] font-bold text-white opacity-5 font-serif select-none pointer-events-none">N</div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-serif uppercase leading-tight mb-8 animate-fade-in-up">
            VOCÊ NÃO COMPRA UMA VIAGEM.<br />
            <span className="text-[#D4AF37]">VOCÊ COMISSIONA UMA EXPERIÊNCIA.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Para líderes que não têm tempo a perder e exigem nada menos que a perfeição absoluta. Este é o seu atelier.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center gap-3 text-lg px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#C1A36F] transition-all duration-300 transform hover:scale-105 shadow-2xl text-black font-bold"
            >
              INICIAR CONSULTA
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="btn-secondary flex items-center gap-3 text-lg px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-[#0A1F44] transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />
              O ATELIER VIP
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
        </div>
      </section>

      {/* Diagnóstico Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#050505] to-[#0A1F44]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 text-[#D4AF37]">
              O DIAGNÓSTICO
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Você já percebeu que as "viagens de luxo" do mercado são apenas versões caras do comum?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EXPERIÊNCIAS PADRONIZADAS",
                description: "Hotéis 5 estrelas iguais em qualquer lugar do mundo. Roteiros copiados de guias turísticos.",
                icon: <Users className="w-12 h-12 text-[#D4AF37]" />
              },
              {
                title: "ATENDIMENTO SUPERFICIAL",
                description: "Agentes que vendem pacotes prontos sem entender sua personalidade e necessidades únicas.",
                icon: <Globe className="w-12 h-12 text-[#D4AF37]" />
              },
              {
                title: "FALTA DE EXCLUSIVIDADE",
                description: "Você paga premium para dividir experiências com centenas de outros turistas.",
                icon: <Award className="w-12 h-12 text-[#D4AF37]" />
              }
            ].map((item, index) => (
              <div key={index} className="card-luxury bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-[#D4AF37]">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-20 px-4 bg-[#0A1F44]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 text-[#D4AF37]">
              A SOLUÇÃO NIALY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Não vendemos viagens. Arquitetamos legados. Cada jornada é uma obra de arte única.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "CURADORIA ABSOLUTA",
                  description: "Cada experiência é desenhada do zero, baseada no seu perfil psicológico e objetivos pessoais."
                },
                {
                  title: "ACESSO EXCLUSIVO",
                  description: "Locais fechados ao público, experiências privadas, encontros com personalidades influentes."
                },
                {
                  title: "CONSULTORIA ESTRATÉGICA",
                  description: "Suas viagens se tornam investimentos em networking, crescimento pessoal e expansão de negócios."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold font-serif mb-2 text-[#D4AF37]">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1F44]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold font-serif text-[#D4AF37] mb-4">98%</div>
                  <p className="text-xl text-gray-300 mb-6">dos nossos clientes renovam anualmente</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 px-4 bg-gradient-to-b from-[#0A1F44] to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-count-up">
              <div className="text-6xl font-bold font-serif text-[#D4AF37] mb-4">{counters.clients}+</div>
              <p className="text-xl text-gray-300">Executivos Atendidos</p>
            </div>
            <div className="animate-count-up">
              <div className="text-6xl font-bold font-serif text-[#D4AF37] mb-4">{counters.destinations}+</div>
              <p className="text-xl text-gray-300">Destinos Exclusivos</p>
            </div>
            <div className="animate-count-up">
              <div className="text-6xl font-bold font-serif text-[#D4AF37] mb-4">{counters.satisfaction}%</div>
              <p className="text-xl text-gray-300">Satisfação Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section className="py-20 px-4 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 text-[#D4AF37]">
              DEPOIMENTOS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                text: "A NIALY não organizou uma viagem, ela arquitetou uma transformação. Cada detalhe foi pensado para expandir minha visão de mundo e minha rede de contatos.",
                author: "Ricardo M.",
                role: "CEO, Grupo Empresarial"
              },
              {
                text: "Finalmente encontrei uma agência que entende que tempo é o meu ativo mais valioso. Eles cuidam de tudo para que eu foque apenas em viver experiências únicas.",
                author: "Ana Paula S.",
                role: "Investidora e Empreendedora"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#D4AF37]">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-t from-[#0A1F44] to-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-8 text-[#D4AF37]">
            PRONTO PARA COMISSIONAR SUA PRÓXIMA JORNADA?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Preencha o briefing abaixo. Nossos arquitetos de viagem iniciarão o desenho da sua experiência.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-xl px-12 py-6 rounded-xl bg-[#D4AF37] hover:bg-[#C1A36F] transition-all duration-300 transform hover:scale-105 shadow-2xl text-black font-bold"
          >
            INICIAR CONSULTA AGORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#050505] border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold font-serif text-[#D4AF37] mb-4">NIALY</div>
              <p className="text-gray-400">A Arquitetura da Jornada Executiva</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@nialy.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Serviços</h3>
              <div className="space-y-2 text-gray-400">
                <p>Viagens Executivas</p>
                <p>Experiências Exclusivas</p>
                <p>Consultoria em Viagens</p>
                <p>Atelier VIP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#D4AF37]/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NIALY. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Consulta */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0A1F44] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-serif text-[#D4AF37]">BRIEFING DE CONSULTA</h2>
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
                  <label className="block text-[#D4AF37] font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#D4AF37] font-semibold mb-2">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#D4AF37] font-semibold mb-2">Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#D4AF37] font-semibold mb-2">Destino Desejado</label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#D4AF37] font-semibold mb-2">Orçamento Estimado</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="">Selecione</option>
                    <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                    <option value="100k-250k">R$ 100.000 - R$ 250.000</option>
                    <option value="250k-500k">R$ 250.000 - R$ 500.000</option>
                    <option value="500k+">R$ 500.000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#D4AF37] font-semibold mb-2">Número de Viajantes</label>
                  <input
                    type="number"
                    value={formData.travelers}
                    onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                    className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#D4AF37] font-semibold mb-2">Datas Preferenciais</label>
                <input
                  type="text"
                  placeholder="Ex: Março 2024 ou Flexível"
                  value={formData.dates}
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}
                  className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#D4AF37] font-semibold mb-2">Preferências e Objetivos da Viagem</label>
                <textarea
                  rows={4}
                  placeholder="Descreva suas expectativas, interesses especiais, objetivos de negócio, etc."
                  value={formData.preferences}
                  onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                  className="w-full p-3 bg-white/5 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-bold rounded-xl bg-[#D4AF37] hover:bg-[#C1A36F] transition-all duration-300 transform hover:scale-105 text-black"
              >
                ENVIAR BRIEFING
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}