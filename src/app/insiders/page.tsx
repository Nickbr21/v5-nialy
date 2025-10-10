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
  ArrowLeft,
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
    <div className="min-h-screen bg-white">
      {/* Header com navegação */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center text-[#0A1F44] hover:text-[#C1A36F] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao início
          </a>
          <h1 className="font-playfair text-3xl font-bold text-[#C1A36F]">NIALY</h1>
        </div>
      </header>

      {/* Hero Section com Timer */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#C1A36F] text-white px-6 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5 mr-2" />
            <span className="font-bold">ACESSO EXCLUSIVO</span>
          </div>
          
          <h1 className="title-hero mb-6">
            <span className="block font-light">NIALY</span>
            <span className="block font-bold text-[#C1A36F]">Insiders</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Acesso a oportunidades exclusivas de viagens com descontos de até 70% 
            e experiências que não estão disponíveis ao público geral.
          </p>

          {/* Timer */}
          <div className="bg-red-600 text-white px-8 py-4 rounded-2xl inline-block mb-8">
            <div className="flex items-center justify-center">
              <Clock className="w-6 h-6 mr-3" />
              <span className="text-2xl font-bold">
                Oferta expira em: {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Exclusivos */}
      <section className="py-20 px-4 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-section text-[#0A1F44] mb-6">Benefícios Exclusivos</h2>
            <p className="text-xl text-gray-600">O que você ganha sendo um NIALY Insider</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-luxury p-8 text-center">
              <Zap className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" />
              <h3 className="font-bold text-xl text-[#0A1F44] mb-4">Ofertas Relâmpago</h3>
              <p className="text-gray-600">Seja o primeiro a saber sobre promoções exclusivas com descontos de até 70%.</p>
            </div>
            
            <div className="card-luxury p-8 text-center">
              <Crown className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" />
              <h3 className="font-bold text-xl text-[#0A1F44] mb-4">Experiências VIP</h3>
              <p className="text-gray-600">Acesso a experiências exclusivas não disponíveis para o público geral.</p>
            </div>
            
            <div className="card-luxury p-8 text-center">
              <Gift className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" />
              <h3 className="font-bold text-xl text-[#0A1F44] mb-4">Upgrades Gratuitos</h3>
              <p className="text-gray-600">Upgrades automáticos em hotéis, voos e experiências sem custo adicional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ofertas Atuais */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-section text-[#0A1F44] mb-6">Ofertas Exclusivas Disponíveis Agora</h2>
            <p className="text-xl text-gray-600">Oportunidades limitadas para membros Insiders</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Miami */}
            <div className="card-luxury overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-orange-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-[#0A1F44]">Miami Beach</h3>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-60%</span>
                </div>
                <p className="text-gray-600 mb-4">
                  5 dias em resort 5 estrelas com vista para o mar, transfers inclusos e experiências VIP.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through">R$ 15.000</span>
                    <span className="text-2xl font-bold text-[#C1A36F] ml-2">R$ 6.000</span>
                  </div>
                  <span className="text-sm text-gray-500">5 vagas restantes</span>
                </div>
              </div>
            </div>

            {/* Lisboa */}
            <div className="card-luxury overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-[#0A1F44]">Lisboa Histórica</h3>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-70%</span>
                </div>
                <p className="text-gray-600 mb-4">
                  7 dias explorando Portugal com guia exclusivo, degustações e hospedagem boutique.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through">R$ 20.000</span>
                    <span className="text-2xl font-bold text-[#C1A36F] ml-2">R$ 6.000</span>
                  </div>
                  <span className="text-sm text-gray-500">3 vagas restantes</span>
                </div>
              </div>
            </div>

            {/* Cancún */}
            <div className="card-luxury overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-[#0A1F44]">Cancún Premium</h3>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-55%</span>
                </div>
                <p className="text-gray-600 mb-4">
                  6 dias em resort all-inclusive de luxo com acesso a cenotes privados e experiências maias.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through">R$ 18.000</span>
                    <span className="text-2xl font-bold text-[#C1A36F] ml-2">R$ 8.100</span>
                  </div>
                  <span className="text-sm text-gray-500">7 vagas restantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="py-20 px-4 section-navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-section text-white mb-6">Garante Seu Acesso Agora</h2>
            <p className="text-xl text-gray-300">
              Preencha os dados abaixo e receba acesso imediato ao grupo exclusivo
            </p>
          </div>
          
          <div className="card-luxury p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Melhor E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary w-full text-lg py-4">
                QUERO SER UM NIALY INSIDER
              </button>
              
              <p className="text-center text-sm text-gray-600">
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
            <h2 className="title-section text-[#0A1F44] mb-6">O Que Dizem Nossos Insiders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-luxury p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "Ser um Insider da NIALY mudou completamente como eu viajo. As ofertas são 
                incríveis e o atendimento é sempre impecável."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center text-white font-bold">
                  AF
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#0A1F44]">Ana Fernandes</h4>
                  <p className="text-gray-600">Insider há 2 anos</p>
                </div>
              </div>
            </div>
            
            <div className="card-luxury p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-[#C1A36F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "Já economizei mais de R$ 50.000 em viagens sendo Insider. 
                As experiências exclusivas não têm preço!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#0A1F44]">Paulo Santos</h4>
                  <p className="text-gray-600">Insider há 3 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="section-navy py-12 px-4">
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
    </div>
  )
}