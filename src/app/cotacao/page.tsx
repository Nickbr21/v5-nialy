'use client'

import { useState } from 'react'
import { Check, Shield, Headphones, Clock } from 'lucide-react'

export default function CotacaoPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
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

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Aqui seria o envio dos dados
      console.log('Dados da cotação:', formData)
      // Redirecionar para página de agradecimento
      window.location.href = '/obrigado-cotacao'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo com imagem 4K */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80"
          alt="Vista da janela de um jato particular"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Marca d'água */}
      <div className="absolute top-20 right-20 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none z-10">
        N
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* Título Principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              O PONTO DE PARTIDA PARA SUA VIAGEM DE ALTA PERFORMANCE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Receba uma cotação personalizada com rotas inteligentes, tarifas exclusivas e o selo NIALY de excelência em serviço.
            </p>
          </div>

          {/* Caixa do Formulário */}
          <div className="bg-[#0A1F44] rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            {/* Barra de Progresso */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white/70">Passo {currentStep} de 3</span>
                <span className="text-sm text-white/70">{Math.round((currentStep / 3) * 100)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-[#C1A36F] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-white mb-6">Detalhes da Sua Viagem</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Origem"
                      value={formData.origem}
                      onChange={(e) => updateFormData('origem', e.target.value)}
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Destino"
                      value={formData.destino}
                      onChange={(e) => updateFormData('destino', e.target.value)}
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Data de Ida</label>
                      <input
                        type="date"
                        value={formData.dataIda}
                        onChange={(e) => updateFormData('dataIda', e.target.value)}
                        className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Data de Volta (opcional)</label>
                      <input
                        type="date"
                        value={formData.dataVolta}
                        onChange={(e) => updateFormData('dataVolta', e.target.value)}
                        className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      value={formData.passageiros}
                      onChange={(e) => updateFormData('passageiros', e.target.value)}
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                    >
                      <option value="1" className="bg-[#0A1F44] text-white">1 Passageiro</option>
                      <option value="2" className="bg-[#0A1F44] text-white">2 Passageiros</option>
                      <option value="3" className="bg-[#0A1F44] text-white">3 Passageiros</option>
                      <option value="4" className="bg-[#0A1F44] text-white">4 Passageiros</option>
                      <option value="5+" className="bg-[#0A1F44] text-white">5+ Passageiros</option>
                    </select>
                    <select
                      value={formData.classe}
                      onChange={(e) => updateFormData('classe', e.target.value)}
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                    >
                      <option value="Econômica" className="bg-[#0A1F44] text-white">Econômica</option>
                      <option value="Premium Economy" className="bg-[#0A1F44] text-white">Premium Economy</option>
                      <option value="Executiva" className="bg-[#0A1F44] text-white">Executiva</option>
                      <option value="Primeira Classe" className="bg-[#0A1F44] text-white">Primeira Classe</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-white mb-6">Vamos nos Conhecer</h2>
                  
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    value={formData.nome}
                    onChange={(e) => updateFormData('nome', e.target.value)}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                    required
                  />
                  
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={(e) => updateFormData('whatsapp', e.target.value)}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all"
                    required
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-white mb-6">Preferências Especiais</h2>
                  
                  <textarea
                    placeholder="Conte-nos suas expectativas, necessidades médicas, celebrações..."
                    value={formData.preferencias}
                    onChange={(e) => updateFormData('preferencias', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C1A36F] focus:bg-white/20 transition-all resize-none"
                  ></textarea>
                </div>
              )}

              <div className="flex justify-between items-center pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Voltar
                  </button>
                )}
                
                <button
                  type="submit"
                  className="ml-auto bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {currentStep === 3 ? 'RECEBER MINHA COTAÇÃO EXCLUSIVA' : 'Próximo'}
                </button>
              </div>
            </form>
          </div>

          {/* Seção de Confiança */}
          <div className="mt-12">
            <h3 className="text-2xl font-serif text-white text-center mb-8">A GARANTIA NIALY</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Suporte 24/7</h4>
                <p className="text-white/70">Assistência completa durante toda sua jornada</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Consultoria Especializada</h4>
                <p className="text-white/70">Especialistas dedicados ao seu perfil de viagem</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Segurança Absoluta</h4>
                <p className="text-white/70">Seus dados e viagem protegidos com máxima segurança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}