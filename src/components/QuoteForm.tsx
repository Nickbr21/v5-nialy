'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Phone, Mail, MapPin, Calendar, DollarSign, MessageCircle, User, Plane } from 'lucide-react';
import Link from 'next/link';

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Dados pessoais
    nome: '',
    email: '',
    telefone: '',
    
    // Dados da viagem
    destino: '',
    dataPartida: '',
    dataRetorno: '',
    numeroViajantes: '1',
    tipoViagem: '',
    
    // Preferências
    orcamento: '',
    tipoHospedagem: '',
    experienciasDesejadas: [] as string[],
    observacoes: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleExperienceToggle = (experience: string) => {
    setFormData(prev => ({
      ...prev,
      experienciasDesejadas: prev.experienciasDesejadas.includes(experience)
        ? prev.experienciasDesejadas.filter(exp => exp !== experience)
        : [...prev.experienciasDesejadas, experience]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salvar dados no localStorage
    localStorage.setItem('cotacaoData', JSON.stringify(formData));
    localStorage.setItem('nomeUsuario', formData.nome);
    
    // Redirecionar para página de agradecimento
    window.location.href = `/agradecimento-cotacao?nome=${encodeURIComponent(formData.nome)}`;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.nome && formData.email && formData.telefone;
      case 2:
        return formData.destino && formData.dataPartida && formData.numeroViajantes && formData.tipoViagem;
      case 3:
        return formData.orcamento && formData.tipoHospedagem;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const experienciasOptions = [
    'Gastronomia Local',
    'Aventura e Esportes',
    'Cultura e História',
    'Relaxamento e Spa',
    'Vida Noturna',
    'Compras',
    'Natureza e Ecoturismo',
    'Fotografia',
    'Experiências Exclusivas'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F6F9] to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-[#0A1F44] hover:text-[#C1A36F] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar ao Início</span>
            </Link>
            
            <div className="text-center">
              <div className="text-[#C1A36F] text-2xl font-serif font-bold">NIALY</div>
              <div className="text-[#C1A36F] text-xs font-serif tracking-wider">AGÊNCIA DE VIAGENS</div>
            </div>
            
            <div className="text-sm text-gray-600">
              Passo {currentStep} de {totalSteps}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#0A1F44]">Progresso da Cotação</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#C1A36F] to-[#B8956A] h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Dados Pessoais */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#0A1F44] mb-2">Vamos nos conhecer!</h2>
                  <p className="text-gray-600">Conte-nos um pouco sobre você para personalizarmos sua experiência.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Dados da Viagem */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#0A1F44] mb-2">Sua Viagem dos Sonhos</h2>
                  <p className="text-gray-600">Conte-nos para onde você quer ir e quando planeja viajar.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Destino Desejado *
                    </label>
                    <input
                      type="text"
                      value={formData.destino}
                      onChange={(e) => handleInputChange('destino', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      placeholder="Ex: Paris, Disney World, Maldivas..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Data de Partida *
                    </label>
                    <input
                      type="date"
                      value={formData.dataPartida}
                      onChange={(e) => handleInputChange('dataPartida', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Data de Retorno
                    </label>
                    <input
                      type="date"
                      value={formData.dataRetorno}
                      onChange={(e) => handleInputChange('dataRetorno', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Número de Viajantes *
                    </label>
                    <select
                      value={formData.numeroViajantes}
                      onChange={(e) => handleInputChange('numeroViajantes', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      required
                    >
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5+">5 ou mais pessoas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Tipo de Viagem *
                    </label>
                    <select
                      value={formData.tipoViagem}
                      onChange={(e) => handleInputChange('tipoViagem', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      required
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="romantica">Romântica</option>
                      <option value="familia">Família</option>
                      <option value="amigos">Com Amigos</option>
                      <option value="solo">Solo</option>
                      <option value="negocios">Negócios</option>
                      <option value="lua-de-mel">Lua de Mel</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferências */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#0A1F44] mb-2">Suas Preferências</h2>
                  <p className="text-gray-600">Ajude-nos a criar a experiência perfeita para você.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Orçamento Aproximado *
                    </label>
                    <select
                      value={formData.orcamento}
                      onChange={(e) => handleInputChange('orcamento', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      required
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="ate-5000">Até R$ 5.000</option>
                      <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
                      <option value="10000-20000">R$ 10.000 - R$ 20.000</option>
                      <option value="20000-50000">R$ 20.000 - R$ 50.000</option>
                      <option value="acima-50000">Acima de R$ 50.000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                      Tipo de Hospedagem *
                    </label>
                    <select
                      value={formData.tipoHospedagem}
                      onChange={(e) => handleInputChange('tipoHospedagem', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                      required
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="economica">Econômica</option>
                      <option value="conforto">Conforto</option>
                      <option value="luxo">Luxo</option>
                      <option value="ultra-luxo">Ultra Luxo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1F44] mb-4">
                    Experiências Desejadas (selecione todas que interessam)
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {experienciasOptions.map((experiencia) => (
                      <label key={experiencia} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.experienciasDesejadas.includes(experiencia)}
                          onChange={() => handleExperienceToggle(experiencia)}
                          className="w-4 h-4 text-[#C1A36F] border-gray-300 rounded focus:ring-[#C1A36F]"
                        />
                        <span className="text-sm text-gray-700">{experiencia}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Observações e Finalização */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#0A1F44] mb-2">Últimos Detalhes</h2>
                  <p className="text-gray-600">Alguma observação especial ou pedido específico?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                    Observações Adicionais
                  </label>
                  <textarea
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange('observacoes', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre alguma necessidade especial, preferências alimentares, celebrações, ou qualquer detalhe que possa tornar sua viagem ainda mais especial..."
                  />
                </div>

                {/* Resumo da Cotação */}
                <div className="bg-[#F4F6F9] rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Resumo da Sua Cotação</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Nome:</strong> {formData.nome}</p>
                      <p><strong>Destino:</strong> {formData.destino}</p>
                      <p><strong>Data de Partida:</strong> {formData.dataPartida}</p>
                      <p><strong>Viajantes:</strong> {formData.numeroViajantes}</p>
                    </div>
                    <div>
                      <p><strong>Tipo de Viagem:</strong> {formData.tipoViagem}</p>
                      <p><strong>Orçamento:</strong> {formData.orcamento}</p>
                      <p><strong>Hospedagem:</strong> {formData.tipoHospedagem}</p>
                      <p><strong>Experiências:</strong> {formData.experienciasDesejadas.length} selecionadas</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                Anterior
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    isStepValid()
                      ? 'bg-[#C1A36F] hover:bg-[#B8956A] text-white'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Próximo
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  <Check className="w-5 h-5" />
                  Enviar Cotação
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1F44] py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-[#C1A36F] text-2xl font-serif font-bold mb-2">NIALY</div>
          <p className="text-gray-300 mb-4">A arquitetura da jornada executiva</p>
          <div className="flex justify-center gap-4">
            <a href="tel:+5511921731022" className="text-gray-300 hover:text-[#C1A36F] transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:contato@nialy.com.br" className="text-gray-300 hover:text-[#C1A36F] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}