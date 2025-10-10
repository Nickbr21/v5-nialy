'use client'

import { useState } from 'react'
import { 
  Plane, 
  Star, 
  Award, 
  Shield, 
  Clock, 
  Headphones,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ArrowLeft
} from 'lucide-react'

export default function CotacaoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    destino: '',
    dataViagem: '',
    duracao: '',
    pessoas: '',
    orcamento: '',
    tipoViagem: '',
    hospedagem: '',
    mensagem: ''
  })

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
        window.location.href = '/obrigado-cotacao'
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#0A1F44] to-[#1a3a6b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="title-hero mb-6">
            <span className="block font-light">SOLICITE SUA</span>
            <span className="block font-bold text-[#C1A36F]">Cotação de Alta Performance</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba uma proposta personalizada 
            para sua próxima jornada extraordinária em até 24 horas.
          </p>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-8">
                <h2 className="font-playfair text-3xl font-bold text-[#0A1F44] mb-8 text-center">
                  Formulário de Cotação
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informações Pessoais */}
                  <div className="grid md:grid-cols-2 gap-4">
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
                        E-mail *
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

                  {/* Detalhes da Viagem */}
                  <div className="border-t pt-6">
                    <h3 className="font-bold text-xl text-[#0A1F44] mb-4">Detalhes da Viagem</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Destino Desejado *
                        </label>
                        <input
                          type="text"
                          name="destino"
                          value={formData.destino}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                          placeholder="Ex: Paris, França"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Data Preferencial
                        </label>
                        <input
                          type="date"
                          name="dataViagem"
                          value={formData.dataViagem}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Duração da Viagem
                        </label>
                        <select
                          name="duracao"
                          value={formData.duracao}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                        >
                          <option value="">Selecione</option>
                          <option value="3-5">3 a 5 dias</option>
                          <option value="6-10">6 a 10 dias</option>
                          <option value="11-15">11 a 15 dias</option>
                          <option value="16+">Mais de 15 dias</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Número de Pessoas
                        </label>
                        <select
                          name="pessoas"
                          value={formData.pessoas}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                        >
                          <option value="">Selecione</option>
                          <option value="1">1 pessoa</option>
                          <option value="2">2 pessoas</option>
                          <option value="3-4">3 a 4 pessoas</option>
                          <option value="5+">5 ou mais pessoas</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Orçamento Estimado *
                        </label>
                        <select
                          name="orcamento"
                          value={formData.orcamento}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                          required
                        >
                          <option value="">Selecione</option>
                          <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                          <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                          <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                          <option value="100k+">Acima de R$ 100.000</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de Viagem
                        </label>
                        <select
                          name="tipoViagem"
                          value={formData.tipoViagem}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                        >
                          <option value="">Selecione</option>
                          <option value="lua-de-mel">Lua de Mel</option>
                          <option value="familia">Família</option>
                          <option value="executiva">Executiva</option>
                          <option value="aventura">Aventura</option>
                          <option value="relaxamento">Relaxamento</option>
                          <option value="cultural">Cultural</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferência de Hospedagem
                      </label>
                      <select
                        name="hospedagem"
                        value={formData.hospedagem}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                      >
                        <option value="">Selecione</option>
                        <option value="hotel-luxo">Hotel de Luxo</option>
                        <option value="resort">Resort All-Inclusive</option>
                        <option value="boutique">Hotel Boutique</option>
                        <option value="villa">Villa Privada</option>
                        <option value="pousada">Pousada Exclusiva</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Conte-nos mais sobre sua viagem dos sonhos
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C1A36F]"
                      placeholder="Descreva suas expectativas, preferências especiais, atividades desejadas..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    SOLICITAR MINHA COTAÇÃO
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar com informações */}
            <div className="space-y-6">
              {/* Garantias */}
              <div className="card-luxury p-6">
                <h3 className="font-bold text-xl text-[#0A1F44] mb-4">Nossas Garantias</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C1A36F] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Resposta em até 24 horas</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-[#C1A36F] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Consultoria gratuita e sem compromisso</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#C1A36F] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Proposta personalizada exclusiva</span>
                  </li>
                  <li className="flex items-start">
                    <Headphones className="w-5 h-5 text-[#C1A36F] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Suporte 24/7 durante a viagem</span>
                  </li>
                </ul>
              </div>

              {/* Depoimento */}
              <div className="card-luxury p-6">
                <div className="flex text-[#C1A36F] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "A NIALY transformou nossa lua de mel em uma experiência inesquecível. 
                  Cada detalhe foi perfeito!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#C1A36F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    MC
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-[#0A1F44] text-sm">Marina & Carlos</h4>
                    <p className="text-gray-600 text-sm">Empresários</p>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="card-luxury p-6">
                <h3 className="font-bold text-xl text-[#0A1F44] mb-4">Precisa de Ajuda?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 text-[#C1A36F] mr-3" />
                    <span className="text-gray-600">(11) 99999-9999</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 text-[#C1A36F] mr-3" />
                    <span className="text-gray-600">contato@nialy.com.br</span>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="w-4 h-4 text-[#C1A36F] mr-3" />
                    <span className="text-gray-600">WhatsApp disponível</span>
                  </li>
                </ul>
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