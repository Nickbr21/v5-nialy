'use client'

import { useState, useEffect } from 'react'
import { 
  Star, 
  Users, 
  Globe, 
  Award, 
  Shield, 
  Clock, 
  Headphones,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Zap,
  Crown,
  Gift
} from 'lucide-react'

export default function InsidersPage() {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos em segundos
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/insiders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        window.location.href = '/bem-vindo-insiders'
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section com Vídeo de Fundo e Timer */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vídeo cinematográfico simulado */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          
          {/* Partículas douradas animadas */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#C1A36F] rounded-full opacity-40 animate-pulse"
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
          <div className="inline-flex items-center bg-[#C1A36F] text-white px-6 py-3 rounded-full mb-8 shadow-2xl">
            <Crown className="w-6 h-6 mr-3" />
            <span className="font-bold text-lg font-playfair uppercase">ACESSO EXCLUSIVO</span>
          </div>
          
          <h1 className="font-playfair mb-8">
            <span className="block text-3xl md:text-5xl font-light mb-4 tracking-wider">NIALY</span>
            <span className="block text-6xl md:text-9xl font-bold text-[#C1A36F] drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(193, 163, 111, 0.5)' }}>
              Insiders
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-montserrat font-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Acesso a oportunidades exclusivas de viagens com descontos de até 70% 
            e experiências que não estão disponíveis ao público geral.
          </p>

          {/* Timer de 5 minutos */}
          <div className="bg-red-600 text-white px-8 py-6 rounded-2xl inline-block mb-12 shadow-2xl border-2 border-red-400">
            <div className="flex items-center justify-center">
              <Clock className="w-8 h-8 mr-4 animate-pulse" />
              <div className="text-center">
                <div className="text-sm font-montserrat uppercase tracking-wider mb-1">Oferta Expira Em</div>
                <div className="text-4xl font-bold font-playfair">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Exclusivos */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">Benefícios Exclusivos</h2>
            <p className="text-xl text-gray-600 font-montserrat font-light leading-relaxed">O que você ganha sendo um NIALY Insider</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <Zap className="w-20 h-20 text-[#C1A36F] mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Ofertas Relâmpago</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Seja o primeiro a saber sobre promoções exclusivas com descontos de até 70%.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <Crown className="w-20 h-20 text-[#C1A36F] mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Experiências VIP</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Acesso a experiências exclusivas não disponíveis para o público geral.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-all duration-300">
              <Gift className="w-20 h-20 text-[#C1A36F] mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Upgrades Gratuitos</h3>
              <p className="text-gray-600 font-montserrat font-light leading-relaxed">
                Upgrades automáticos em hotéis, voos e experiências sem custo adicional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Escassez - Posicionada logo após os benefícios */}
      <section className="py-20 px-4 bg-red-600 text-white relative overflow-hidden">
        {/* Efeito de urgência com partículas */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 1}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 uppercase">
            ⚠️ ATENÇÃO: VAGAS LIMITADAS
          </h2>
          <p className="text-xl md:text-2xl font-montserrat font-light mb-8 leading-relaxed">
            Apenas <span className="font-bold text-yellow-300">47 vagas restantes</span> para novos membros este mês. 
            Após atingirmos o limite, as inscrições serão fechadas até o próximo trimestre.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 inline-block">
            <div className="text-3xl font-bold mb-2">⏰ {formatTime(timeLeft)}</div>
            <div className="text-lg font-montserrat">para garantir sua vaga</div>
          </div>
        </div>
      </section>

      {/* Ofertas Atuais */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">Ofertas Exclusivas Disponíveis Agora</h2>
            <p className="text-xl text-gray-600 font-montserrat font-light leading-relaxed">Oportunidades limitadas para membros Insiders</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Miami */}
            <div className="bg-white rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" 
                  alt="Miami Beach - Vista aérea deslumbrante" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  -60% OFF
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Miami Beach</h3>
                <p className="text-gray-600 font-montserrat font-light mb-6 leading-relaxed">
                  5 dias em resort 5 estrelas com vista para o mar, transfers inclusos e experiências VIP.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500 line-through text-lg">R$ 15.000</span>
                    <span className="text-3xl font-bold text-[#C1A36F] ml-3 font-playfair">R$ 6.000</span>
                  </div>
                </div>
                <div className="text-red-600 font-bold text-sm">⚡ Apenas 5 vagas restantes</div>
              </div>
            </div>

            {/* Lisboa */}
            <div className="bg-white rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop" 
                  alt="Lisboa - Vista panorâmica da cidade histórica" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  -70% OFF
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Lisboa Histórica</h3>
                <p className="text-gray-600 font-montserrat font-light mb-6 leading-relaxed">
                  7 dias explorando Portugal com guia exclusivo, degustações e hospedagem boutique.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500 line-through text-lg">R$ 20.000</span>
                    <span className="text-3xl font-bold text-[#C1A36F] ml-3 font-playfair">R$ 6.000</span>
                  </div>
                </div>
                <div className="text-red-600 font-bold text-sm">⚡ Apenas 3 vagas restantes</div>
              </div>
            </div>

            {/* Cancún */}
            <div className="bg-white rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop" 
                  alt="Cancún - Resort de luxo com praia paradisíaca" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  -55% OFF
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-[#0A1F44] mb-4 uppercase">Cancún Premium</h3>
                <p className="text-gray-600 font-montserrat font-light mb-6 leading-relaxed">
                  6 dias em resort all-inclusive de luxo com acesso a cenotes privados e experiências maias.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500 line-through text-lg">R$ 18.000</span>
                    <span className="text-3xl font-bold text-[#C1A36F] ml-3 font-playfair">R$ 8.100</span>
                  </div>
                </div>
                <div className="text-red-600 font-bold text-sm">⚡ Apenas 7 vagas restantes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="py-20 px-4 bg-[#0A1F44] relative overflow-hidden">
        {/* Efeito de partículas douradas */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C1A36F] rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 uppercase">Garanta Seu Acesso Agora</h2>
            <p className="text-xl text-gray-300 font-montserrat font-light leading-relaxed">
              Preencha os dados abaixo e receba acesso imediato ao grupo exclusivo
            </p>
          </div>
          
          <div 
            className="p-10 rounded-2xl shadow-2xl max-w-2xl mx-auto"
            style={{
              background: 'rgba(10, 31, 68, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(193, 163, 111, 0.3)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-montserrat">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-montserrat">
                  Seu Melhor E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-montserrat">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-600 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#C1A36F] focus:ring-2 focus:ring-[#C1A36F]/50 transition-all duration-300"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#C1A36F] to-[#A8925F] hover:from-[#A8925F] hover:to-[#8B7A4F] text-white font-bold py-6 px-12 rounded-xl w-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-playfair uppercase"
              >
                QUERO SER UM NIALY INSIDER
              </button>
              
              <p className="text-center text-sm text-gray-400 font-montserrat">
                Ao se inscrever, você concorda em receber ofertas exclusivas via WhatsApp e e-mail.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#0A1F44] mb-6 uppercase">O Que Dizem Nossos Insiders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 italic leading-relaxed font-montserrat font-light">
                "Ser um Insider da NIALY mudou completamente como eu viajo. As ofertas são 
                incríveis e o atendimento é sempre impecável."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  AF
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-[#0A1F44] text-lg font-playfair">Ana Fernandes</h4>
                  <p className="text-gray-600 font-montserrat">Insider há 2 anos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 italic leading-relaxed font-montserrat font-light">
                "Já economizei mais de R$ 50.000 em viagens sendo Insider. 
                As experiências exclusivas não têm preço!"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#A8925F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  PS
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-[#0A1F44] text-lg font-playfair">Paulo Santos</h4>
                  <p className="text-gray-600 font-montserrat">Insider há 3 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
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
    </div>
  )
}