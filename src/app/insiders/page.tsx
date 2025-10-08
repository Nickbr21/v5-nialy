'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Users, Globe, Award, Shield, Clock, Headphones } from 'lucide-react'

export default function InsidersPage() {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos em segundos
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    interesse: ''
  })

  const testimonials = [
    {
      text: "Desde que entrei no NIALY Insiders, já economizei mais de R$ 15.000 em viagens. As ofertas exclusivas são realmente imperdíveis.",
      author: "Patricia Almeida",
      role: "Empresária"
    },
    {
      text: "O acesso antecipado às promoções me permitiu reservar um resort em Maldivas com 40% de desconto. Simplesmente incrível!",
      author: "Ricardo Santos",
      role: "Diretor Financeiro"
    },
    {
      text: "A prioridade no atendimento faz toda diferença. Quando preciso de algo urgente, sou atendido imediatamente.",
      author: "Fernanda Lima",
      role: "Consultora"
    }
  ]

  const benefits = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Tarifas Confidenciais",
      description: "Acesso a preços exclusivos não disponíveis ao público geral"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Ofertas de Luxo",
      description: "Promoções em hotéis 5 estrelas e experiências premium"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Prioridade Absoluta",
      description: "Atendimento prioritário e suporte VIP 24/7"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Acesso Antecipado",
      description: "Seja o primeiro a saber sobre oportunidades exclusivas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Premium",
      description: "Proteção total em todas as suas reservas"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Consultoria Ilimitada",
      description: "Acesso ilimitado aos nossos especialistas em viagem"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reinicia o timer quando chega a 0
          return 300
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dados do Insiders:', formData)
    // Redirecionar para página intermediária
    window.location.href = '/bem-vindo-insiders'
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Marca d'água */}
        <div className="absolute top-20 right-20 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none">
          N
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            ACESSO IMEDIATO ÀS OPORTUNIDADES MAIS COBIÇADAS DO MUNDO
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto">
            Junte-se ao NIALY Insiders e tenha acesso exclusivo a tarifas confidenciais, 
            ofertas de luxo e experiências que poucos conhecem.
          </p>

          {/* Gatilho de Urgência */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto">
            <div className="text-[#C1A36F] text-sm font-semibold mb-2">VAGAS LIMITADAS</div>
            <div className="text-3xl font-bold mb-4">{formatTime(timeLeft)}</div>
            <div className="text-sm opacity-90">Restam apenas 23 vagas disponíveis</div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: BENEFÍCIOS */}
      <section className="py-20 bg-[#F4F6F9] relative">
        <div className="absolute top-20 left-20 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] text-center mb-16">
            O QUE VOCÊ GANHA COMO MEMBRO INSIDER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PROVA SOCIAL */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-20 right-20 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] text-center mb-16">
            O QUE NOSSOS MEMBROS ESTÃO DIZENDO
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-[#F4F6F9] rounded-3xl p-8 md:p-12 shadow-lg">
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

      {/* SEÇÃO 4: JUSTIFICATIVA DA ESCASSEZ */}
      <section className="py-20 bg-[#0A1F44] text-white relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            POR QUE LIMITAMOS AS VAGAS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Exclusividade</h3>
              <p className="text-white/80">
                Mantemos um grupo seleto para garantir que cada membro receba atenção personalizada e acesso real às melhores oportunidades.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Qualidade</h3>
              <p className="text-white/80">
                Com menos membros, podemos negociar tarifas ainda mais exclusivas e oferecer um nível de serviço incomparável.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Acesso</h3>
              <p className="text-white/80">
                Nossos parceiros premium oferecem cotas limitadas. Menos membros significa mais oportunidades para cada um.
              </p>
            </div>
          </div>
          
          <div className="bg-[#C1A36F]/20 border border-[#C1A36F] rounded-3xl p-8 max-w-3xl mx-auto text-center">
            <div className="text-[#C1A36F] font-semibold text-lg mb-2">ATENÇÃO:</div>
            <div className="text-xl">
              Aceitamos apenas 100 novos membros por mês para manter a qualidade e exclusividade do grupo.
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: FORMULÁRIO FINAL */}
      <section className="py-20 bg-[#F4F6F9] relative">
        <div className="absolute bottom-10 left-10 opacity-5 text-[#C1A36F] text-[150px] font-serif pointer-events-none">
          N
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A1F44] text-center mb-8">
              GARANTA SEU ACESSO AGORA
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Preencha os dados abaixo e receba acesso imediato ao grupo mais exclusivo de viajantes do Brasil.
            </p>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={formData.nome}
                  onChange={(e) => updateFormData('nome', e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] transition-all"
                  required
                />
                
                <input
                  type="email"
                  placeholder="E-mail Executivo"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] transition-all"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="WhatsApp VIP"
                  value={formData.whatsapp}
                  onChange={(e) => updateFormData('whatsapp', e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] transition-all"
                  required
                />
                
                <select
                  value={formData.interesse}
                  onChange={(e) => updateFormData('interesse', e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] transition-all"
                  required
                >
                  <option value="">Principal Interesse</option>
                  <option value="Viagens de Negócios">Viagens de Negócios</option>
                  <option value="Viagens de Lazer">Viagens de Lazer</option>
                  <option value="Viagens em Família">Viagens em Família</option>
                  <option value="Experiências Premium">Experiências Premium</option>
                  <option value="Destinos Exóticos">Destinos Exóticos</option>
                </select>
                
                <button
                  type="submit"
                  className="w-full bg-[#C1A36F] hover:bg-[#B8956A] text-white py-4 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  GARANTIR MEU ACESSO EXCLUSIVO (100% GRATUITO)
                </button>
              </form>
              
              <div className="text-center mt-6 text-sm text-gray-500">
                Seus dados estão protegidos e nunca serão compartilhados com terceiros.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}